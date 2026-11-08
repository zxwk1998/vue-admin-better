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
(self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || []).push([[2643], {
50680: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _util_types_js__rspack_import_1 = __webpack_require__(40333);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var ExtensionAPI = /** @class */function () {
  function ExtensionAPI(ecInstance) {
    zrender_lib_core_util_js__rspack_import_0.each(availableMethods, function (methodName) {
      this[methodName] = zrender_lib_core_util_js__rspack_import_0.bind(ecInstance[methodName], ecInstance);
    }, this);
  }
  return ExtensionAPI;
}();
function getViewOfComponentOrSeries(api, componentOrSeries) {
  return componentOrSeries.mainType === _util_types_js__rspack_import_1.COMPONENT_MAIN_TYPE_SERIES ? api.getViewOfSeriesModel(componentOrSeries) : api.getViewOfComponentModel(componentOrSeries);
}
/* export default */ __webpack_exports__["default"] = (ExtensionAPI);
__webpack_require__.d(__webpack_exports__, {
}, {
  getViewOfComponentOrSeries: getViewOfComponentOrSeries
});


}),
88251: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PRIORITY: function() { return /* binding */ PRIORITY; },
  connect: function() { return /* binding */ connect; },
  dataTool: function() { return /* binding */ dataTool; },
  dependencies: function() { return /* binding */ dependencies; },
  disConnect: function() { return /* binding */ disConnect; },
  disconnect: function() { return /* binding */ disconnect; },
  dispose: function() { return /* binding */ dispose; },
  getCoordinateSystemDimensions: function() { return /* binding */ getCoordinateSystemDimensions; },
  getInstanceByDom: function() { return /* binding */ getInstanceByDom; },
  getInstanceById: function() { return /* binding */ getInstanceById; },
  getMap: function() { return /* binding */ echarts_getMap; },
  init: function() { return /* binding */ init; },
  registerAction: function() { return /* binding */ registerAction; },
  registerCoordinateSystem: function() { return /* binding */ registerCoordinateSystem; },
  registerCustomSeries: function() { return /* binding */ registerCustomSeries; },
  registerLayout: function() { return /* binding */ registerLayout; },
  registerLoading: function() { return /* binding */ registerLoading; },
  registerLocale: function() { return /* reexport */ locale.registerLocale; },
  registerMap: function() { return /* binding */ echarts_registerMap; },
  registerPostInit: function() { return /* binding */ registerPostInit; },
  registerPostUpdate: function() { return /* binding */ registerPostUpdate; },
  registerPreprocessor: function() { return /* binding */ registerPreprocessor; },
  registerProcessor: function() { return /* binding */ registerProcessor; },
  registerTheme: function() { return /* binding */ registerTheme; },
  registerTransform: function() { return /* binding */ registerTransform; },
  registerUpdateLifecycle: function() { return /* binding */ registerUpdateLifecycle; },
  registerVisual: function() { return /* binding */ registerVisual; },
  setCanvasCreator: function() { return /* binding */ setCanvasCreator; },
  version: function() { return /* binding */ version; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/zrender.js
var zrender = __webpack_require__(82653);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(26444);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/timsort.js
var timsort = __webpack_require__(38713);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(68200);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/model/Global.js
var Global = __webpack_require__(52806);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/ExtensionAPI.js
var ExtensionAPI = __webpack_require__(50680);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(31712);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/model/OptionManager.js
var OptionManager = __webpack_require__(36377);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/preprocessor/backwardCompat.js + 1 modules
var backwardCompat = __webpack_require__(10121);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/processor/dataStack.js
var dataStack = __webpack_require__(85412);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(80424);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(80734);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(3861);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(67485);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(9529);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(13983);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(90088);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(72043);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(63655);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(71900);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(53781);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(88790);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/visual/style.js
var style = __webpack_require__(65545);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/loading/default.js
var loading_default = __webpack_require__(43657);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/task.js
var core_task = __webpack_require__(76258);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/component.js
var util_component = __webpack_require__(7479);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/Scheduler.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    // (2) If a processor depends on several series, specified by its `getTargetSeries`,
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
    // `progressiveRender` means that can render progressively in each
    // animation frame. Note that some types of series do not provide
    // `view.incrementalPrepareRender` but support `chart.appendData`. We
    // use the term `incremental` but not `progressive` to describe the
    // case `chart.appendData`.
    // Regarding zrender, both echarts "progressive" and "incremental" use `el.incremental: true`.
    var context = seriesModel.__preparePipelineContext ? seriesModel.__preparePipelineContext(view, pipeline) : (0,util_model.preparePipelineContext)(seriesModel, view, pipeline);
    seriesModel.pipelineContext = pipeline.context = context;
  };
  Scheduler.prototype.restorePipelines = function (zr, ecModel) {
    var scheduler = this;
    var pipelineMap = scheduler._pipelineMap = (0,util.createHashMap)();
    ecModel.eachSeries(function (seriesModel) {
      var progressive = zr.painter.type === 'canvas' && seriesModel.getProgressive();
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
    var dirtyOnOverallProgress = stageHandler.dirtyOnOverallProgress;
    var shouldOverallTaskDirty = false;
    // FIXME:TS never used, so comment it
    // let modifyOutputEnd = stageHandler.modifyOutputEnd;
    // An overall task with seriesType detected or has `getTargetSeries`, we add
    // stub in each pipelines to receive dirty info from upstream.
    var errMsg = '';
    if (false) {}
    (0,util.assert)(!stageHandler.createOnAllSeries, errMsg);
    if (seriesType) {
      ecModel.eachRawSeriesByType(seriesType, createStub);
    } else if (getTargetSeries) {
      getTargetSeries(ecModel, api).each(createStub);
    } else {
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
        dirtyOnOverallProgress: dirtyOnOverallProgress
        // FIXME:TS never used, so comment it
        // modifyOutputEnd: modifyOutputEnd
      };
      stub.agent = overallTask;
      stub.__block = dirtyOnOverallProgress;
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
  return context.dirtyOnOverallProgress && stubProgress;
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
mockMethods(apiMock, ExtensionAPI["default"]);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/theme/dark.js
var dark = __webpack_require__(52273);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/clazz.js
var clazz = __webpack_require__(41874);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/ECEventProcessor.js
var ECEventProcessor = __webpack_require__(36726);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/types.js
var types = __webpack_require__(40333);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/visual/symbol.js
var symbol = __webpack_require__(27658);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(10014);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(44002);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(58857);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/data/helper/transform.js
var transform = __webpack_require__(40821);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/locale.js
var locale = __webpack_require__(58345);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(39364);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/lifecycle.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(77592);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/impl.js
var impl = __webpack_require__(98229);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/chart/custom/customSeriesRegister.js
var customSeriesRegister = __webpack_require__(7987);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/cycleCache.js
var cycleCache = __webpack_require__(51386);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/model/globalDefault.js
var globalDefault = __webpack_require__(19649);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/visual/decal.js
var decal = __webpack_require__(58177);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/echarts.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/








































var version = '6.1.0';
var dependencies = {
  zrender: '6.1.0'
};
var TEST_FRAME_REMAIN_TIME = 1;
var PRIORITY_PROCESSOR_SERIES_FILTER = 800;
// In the current impl, "data stack" will modifies the original "series data extent". Some data
// processors rely on the stack result dimension to calculate extents. So data stack
// should be in front of other data processors.
var PRIORITY_PROCESSOR_DATASTACK = 900;
// AXIS_STATISTICS should be after SERIES_FILTER, as it may change the statistics result (like min gap).
// AXIS_STATISTICS should be before filter (dataZoom), as dataZoom require the result in "containShape" calculation.
var PRIORITY_PROCESSOR_AXIS_STATISTICS = 920;
// `PRIORITY_PROCESSOR_FILTER` is typically used by `dataZoom` (see `AxisProxy`), which relies
// on the initialized "axis extent".
var PRIORITY_PROCESSOR_FILTER = 1000;
var PRIORITY_PROCESSOR_DEFAULT = 2000;
var PRIORITY_PROCESSOR_STATISTICS = 5000;
// NOTICE: Data processors above block the stream (especially time-consuming processors like data filters).
var PRIORITY_VISUAL_LAYOUT = 1000;
var PRIORITY_VISUAL_PROGRESSIVE_LAYOUT = 1100;
var PRIORITY_VISUAL_GLOBAL = 2000;
var PRIORITY_VISUAL_CHART = 3000;
var PRIORITY_VISUAL_COMPONENT = 4000;
// Visual property in data. Greater than `PRIORITY_VISUAL_COMPONENT` to enable to
// overwrite the visual result of component (like `visualMap`)
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
    SERIES_FILTER: PRIORITY_PROCESSOR_SERIES_FILTER,
    AXIS_STATISTICS: PRIORITY_PROCESSOR_AXIS_STATISTICS,
    FILTER: PRIORITY_PROCESSOR_FILTER,
    STATISTIC: PRIORITY_PROCESSOR_STATISTICS,
    STATISTICS: PRIORITY_PROCESSOR_STATISTICS
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
/**
 * @tutorial [EC_CYCLE] (ec updating/rendering cycles):
 *
 *  - Common Rules:
 *    - Nested entry is not allowed. If triggering a new run of EC_CYCLE during a
 *      unfinished run, the new run will be delayed until the current run finishes
 *      (if triggered by `dispatchAction`), or throw error (if triggered by other API calls).
 *    - All user-visible ec events are triggered outside EC_CYCLE.
 *      (i.e. be triggered after `this[IN_EC_CYCLE_KEY]` becoming `false`).
 *
 *  - [EC_FULL_UPDATE_CYCLE]:
 *    - It designates a run of a series of processing/updating/rendering.
 *    - It is triggered by:
 *      - `setOption`
 *      - `dispatchAction`
 *        (It is typically internally triggered by user inputs; but can also an explicit API call.)
 *      - `resize`
 *      - The next "animation frame" if in `lazyMode: true`.
 *    - A run of EC_FULL_UPDATE_CYCLE comprises:
 *      - EC_PREPARE (may be absent)
 *      - EC_FULL_UPDATE:
 *        - CoordinateSystem['create']
 *        - Data processing (may be absent) (see `registerProcessor`)
 *        - CoordinateSystem['update'] (may be absent)
 *        - Visual encoding (may be absent) (see `registerVisual`)
 *        - Layout (may be absent) (see `registerLayout`)
 *        - Rendering (`ComponentView` or `SeriesView`)
 *
 *  - [EC_PARTIAL_UPDATE_CYCLE]s:
 *      - They are shortcuts for performance.
 *      - They are triggered by:
 *        - `dispatchAction`
 *      - These steps are typically omitted:
 *        - No EC_PREPARE
 *        - No CoordinateSystem['create'] and CoordinateSystem['update']
 *      - They require careful implementation, otherwise inconsistency may be introduced.
 *
 *  - [EC_PROGRESSIVE_CYCLE]:
 *    - It also carries out a series of processing/updating/rendering.
 *    - It is performed in each subsequent "animation frame" until finished.
 *    - It can be triggered by EC_FULL_UPDATE_CYCLE, EC_PARTIAL_UPDATE_CYCLE or EC_APPEND_DATA_CYCLE.
 *    - A run of EC_PROGRESSIVE_CYCLE comprises:
 *      - Data processing (may be absent) (see `registerProcessor`)
 *      - Visual encoding (may be absent) (see `registerVisual`)
 *      - Layout (may be absent) (see `registerLayout`)
 *      - Rendering (`ComponentView` or `SeriesView`)
 *    - PENDING: currently all data processing tasks (via `registerProcessor`) run in "block" mode.
 *      (see `performDataProcessorTasks`).
 *
 *  - [EC_APPEND_DATA_CYCLE]:
 *    - See `appendData`. It is only supported for some special cases.
 *
 *  - [SERIES_SPECIFIC_CYCLE]s:
 *    - Series may have specific update/render cycles. For example, graph force layout performs
 *      layout and rendering in each "animation frame".
 *
 *  - Model updating:
 *    - Model can only be modified at the beginning of ec cycles, including only:
 *      - EC_PREPARE (see method `prepare()`) in `setOption` call.
 *      - EC action handlers in `dispatchAction` call.
 *      - `appendData` (a special case, where only data can be modified).
 *
 *  - The lifetime of CoordinateSystem/Axis/Scale instances:
 *    - They are only re-created per run of EC_FULL_UPDATE_CYCLE.
 *
 *  - Global caches: see `cycleCache.ts`
 */
// See comments in EC_CYCLE.
var IN_EC_CYCLE_KEY = '__flagInMainProcess';
// Useful for detecting outdated rendering results for the following scenarios:
//  - In EC_PARTIAL_UPDATE_CYCLE, some rendering may be skipped.
//  - Asynchronously update rendered view (e.g., graph force layout).
//  - Multiple ChartView/ComponentView render to one group cooperatively.
var EC_UPDATE_CYCLE_VERSION_KEY = '__mainProcessVersion';
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
// This is [EC_PREPARE].
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
var updateECUpdateCycleVersion;
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
    // mark the echarts instance as raw in Vue 3 to prevent the object being converted to be a proxy.
    _this.__v_skip = true;
    _this._dom = dom;
    var defaultRenderer = 'canvas';
    var defaultCoarsePointer = 'auto';
    var defaultUseDirtyRect = false;
    _this[EC_UPDATE_CYCLE_VERSION_KEY] = 1;
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
    var scheduler = this._scheduler;
    var ecModel = this._model;
    var api = this._api;
    applyChangedStates(this);
    // Lazy update
    if (this[PENDING_UPDATE]) {
      var silent = this[PENDING_UPDATE].silent;
      this[IN_EC_CYCLE_KEY] = true;
      updateECUpdateCycleVersion(this);
      try {
        prepare(this);
        updateMethods.update.call(this, null, this[PENDING_UPDATE].updateParams);
      } catch (e) {
        this[IN_EC_CYCLE_KEY] = false;
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
      this[IN_EC_CYCLE_KEY] = false;
      this[PENDING_UPDATE] = null;
      flushPendingActions.call(this, silent);
      triggerUpdatedEvent.call(this, silent);
    }
    // Avoid do both lazy update and progress in one frame.
    else if (scheduler.unfinished) {
      // Stream progress.
      var remainTime = TEST_FRAME_REMAIN_TIME;
      // PENDING: guard the following by `this[IN_EC_CYCLE_KEY] = true`?
      do {
        // Reset to false per iteration. Otherwise the last zr.flush
        // can not be triggered and 'finish' event can not be triggered.
        scheduler.unfinished = false;
        var startTime = platform.platformApi.getTime();
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
        remainTime -= platform.platformApi.getTime() - startTime;
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
    if (this[IN_EC_CYCLE_KEY]) {
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
    this[IN_EC_CYCLE_KEY] = true;
    updateECUpdateCycleVersion(this);
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
      this[IN_EC_CYCLE_KEY] = false;
      // `setOption(option, {lazyMode: true})` may be called when zrender has been slept.
      // It should wake it up to make sure zrender start to render at the next frame.
      this.getZr().wakeUp();
    } else {
      try {
        prepare(this);
        updateMethods.update.call(this, null, updateParams);
      } catch (e) {
        this[PENDING_UPDATE] = null;
        this[IN_EC_CYCLE_KEY] = false;
        throw e;
      }
      // Ensure zr refresh sychronously, and then pixel in canvas can be
      // fetched after `setOption`.
      if (!this._ssr) {
        // not use flush when using ssr mode.
        this._zr.flush();
      }
      this[PENDING_UPDATE] = null;
      this[IN_EC_CYCLE_KEY] = false;
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
    if (this[IN_EC_CYCLE_KEY]) {
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
    this[IN_EC_CYCLE_KEY] = true;
    updateECUpdateCycleVersion(this);
    try {
      this._updateTheme(theme);
      ecModel.setTheme(this._theme);
      prepare(this);
      updateMethods.update.call(this, {
        type: 'setTheme'
      }, updateParams);
    } catch (e) {
      this[IN_EC_CYCLE_KEY] = false;
      throw e;
    }
    this[IN_EC_CYCLE_KEY] = false;
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
    if (this[IN_EC_CYCLE_KEY]) {
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
    this[IN_EC_CYCLE_KEY] = true;
    updateECUpdateCycleVersion(this);
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
      this[IN_EC_CYCLE_KEY] = false;
      throw e;
    }
    this[IN_EC_CYCLE_KEY] = false;
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
    if (this[IN_EC_CYCLE_KEY]) {
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
    // NOTICE:
    // `appendData` does not support to update axis scale extent of coordinate
    // systems. In the expected usage of `appendData`, the initial extent of
    // coordinate system should be explicitly specified (by `xxxAxis.data` for
    // 'category' axis or by `xxxAxis.min/max` for other axes). Otherwise, if
    // the extent keep changing while `appendData`, the location of the painted
    // graphic elements have to be changed frequently.
    this._scheduler.unfinished = true;
    this.getZr().wakeUp();
  };
  // A work around for no `internal` modifier in ts yet but
  // need to strictly hide private methods to JS users.
  ECharts.internalField = function () {
    prepare = function (ecIns) {
      (0,cycleCache.resetCachePerECPrepare)(ecIns._model);
      var scheduler = ecIns._scheduler;
      scheduler.restorePipelines(ecIns._zr, ecIns._model);
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
      // broadcast (e.g., for ':updateAxisPointer')
      if (!mainType) {
        // FIXME
        // Chart will not be update directly here, except set dirty.
        // But there is no such scenario now.
        (0,util.each)([].concat(ecIns._componentsViews).concat(ecIns._chartsViews), callView);
        return;
      }
      var condition = util_model.makeQueryConditionKindA(payload, mainType, subType);
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
        (0,cycleCache.resetCachePerECFullUpdate)(ecModel);
        ecModel.setUpdatePayload(payload);
        scheduler.restoreData(ecModel, payload);
        scheduler.performSeriesTasks(ecModel);
        // TODO
        // Save total ecModel here for undo/redo (after restoring data and before processing data).
        // Undo (restoration of total ecModel) can be carried out in 'action' or outside API call.
        // Create new coordinate system each update
        // In LineView may save the old coordinate system and use it to get the original point.
        coordSysMgr.create(ecModel, api);
        core_lifecycle.trigger('coordsys:aftercreate', ecModel, api);
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
      /**
       * PENDING: See INCONSISTENCY_OF_BRUSH_SELECTED_EVENT_IN_UPDATE_TRANSFORM
       */
      updateTransform: function (payload) {
        var ecIns = this;
        var ecModel = ecIns._model;
        var api = ecIns._api;
        // update before setOption
        if (!ecModel) {
          return;
        }
        ecModel.setUpdatePayload(payload);
        // ChartView.markUpdateMethod(payload, 'updateTransform');
        var componentDirtyList = [];
        ecModel.eachComponent(function (mainType, componentModel) {
          if (mainType === types.COMPONENT_MAIN_TYPE_SERIES) {
            return;
          }
          var componentView = ecIns.getViewOfComponentModel(componentModel);
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
          var chartView = ecIns._chartsMap[seriesModel.__viewId];
          var pipelineContext = seriesModel.pipelineContext;
          if (chartView.updateTransform
          // Use the progressive pass if enabled, where each frame renders only a small amount.
          // And `ISymbolDraw['updateLayout']` and `ILineDraw['updateLayout']` do not support
          // progressive case.
          && !pipelineContext.progressiveRender) {
            var result = chartView.updateTransform(seriesModel, ecModel, api, payload);
            result && result.update && seriesDirtyMap.set(seriesModel.uid, 1);
          } else {
            seriesDirtyMap.set(seriesModel.uid, 1);
          }
        });
        // Palette should not be cleared, otherwise the variation of dirty series
        // can cause color change unexpectedly.
        // clearColorPalette(ecModel);
        // NOTICE: series data tasks must NOT be dirty, otherwise series data will be recreated.
        // Keep pipe to the exist pipeline because it depends on the render task of the full pipeline.
        // this._scheduler.performVisualTasks(ecModel, payload, 'layout', true);
        ecIns._scheduler.performVisualTasks(ecModel, payload, {
          setDirty: true,
          dirtyMap: seriesDirtyMap
        });
        // Currently, not call render of components. Geo render cost a lot.
        // renderComponents(ecIns, ecModel, api, payload, componentDirtyList);
        renderSeries(ecIns, ecModel, api, payload, {}, seriesDirtyMap);
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
        // FIXME: `visualType` may be removed, since it conflicts with `priority` of task. `updateVisual`
        // can be altered to start the pipeline with a certain priority, rather than only execute tasks
        // with `visualType: 'visual'`, otherwise, PRIORITY_VISUAL_POST_CHART_LAYOUT is omitted in this
        // case. Currently, only "brush" uses `updateVisual`, and it works by coincidence.
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
      /**
       * @deprecated
       */
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
      this[IN_EC_CYCLE_KEY] = true;
      updateECUpdateCycleVersion(this);
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
          this[IN_EC_CYCLE_KEY] = false;
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
      this[IN_EC_CYCLE_KEY] = false;
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
        // in zrender. (Consider the case that dispatchAction is keep
        // triggering when mouse move).
        if (
        // Although zr is dirty if initial animation is not finished
        // and this checking is called on frame, we also check
        // animation finished for robustness.
        zr.animation.isFinished() && !ecIns[PENDING_UPDATE] && !ecIns._scheduler.unfinished && !ecIns._pendingActions.length
        // No need to check EC_OVERALL_ANIMATION, since `zr.animation.isFinished()`
        // has cover that.
        ) {
          ecIns.trigger('finished');
        } else {
          // Make sure this method can be entered again in next frames.
          zr.refresh();
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
    updateECUpdateCycleVersion = function (ecIns) {
      ecIns[EC_UPDATE_CYCLE_VERSION_KEY] = (ecIns[EC_UPDATE_CYCLE_VERSION_KEY] + 1) % 1e6;
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
      if (zr.painter.type !== 'canvas') {
        return;
      }
      var storage = zr.storage;
      var elCount = 0;
      storage.traverse(function (el) {
        if (!el.isGroup) {
          elCount++;
        }
      });
      var shouldUseHoverLayer = elCount > (0,util.retrieve2)(ecModel.get('hoverLayerThreshold'), globalDefault["default"].hoverLayerThreshold) && !env["default"].node && !env["default"].worker;
      if (ecIns._usingTHL || shouldUseHoverLayer) {
        ecModel.eachSeries(function (seriesModel) {
          if (seriesModel.preventUsingHoverLayer) {
            return;
          }
          var chartView = ecIns._chartsMap[seriesModel.__viewId];
          if (chartView.__alive) {
            chartView.eachRendered(function (el) {
              // NOTICE: Do not call any method that can set REDRAW_BIT,
              // otherwise progressive rendering is broken.
              var emphasis = el.states.emphasis;
              if (emphasis && emphasis.hoverLayer !== graphic.HOVER_LAYER_FOR_INCREMENTAL) {
                emphasis.hoverLayer = shouldUseHoverLayer ? graphic.HOVER_LAYER_FROM_THRESHOLD : graphic.HOVER_LAYER_NO;
              }
            });
          }
        });
        ecIns._usingTHL = shouldUseHoverLayer;
      }
    }
    ;
    /**
     * Update chart and blend.
     */
    function updateBlend(seriesModel, chartView) {
      var blendMode = seriesModel.get('blendMode') || null;
      chartView.eachRendered(function (el) {
        // NOTICE: Do not call any method that can set REDRAW_BIT,
        // otherwise progressive rendering is broken.
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
        class_1.prototype.getECUpdateCycleVersion = function () {
          return ecIns[EC_UPDATE_CYCLE_VERSION_KEY];
        };
        class_1.prototype.usingTHL = function () {
          return ecIns._usingTHL;
        };
        return class_1;
      }(ExtensionAPI["default"]))(ecIns);
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
/**
 * NOTICE: Alway run in block way (no progessive is allowed).
 */
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
  ;(0,customSeriesRegister.registerCustomSeries)(seriesType, renderItem);
}

function registerLayout(priority, layoutTask) {
  normalizeRegister(visualFuncs, priority, layoutTask, PRIORITY_VISUAL_LAYOUT, 'layout', true);
}
function registerVisual(priority, visualTask) {
  normalizeRegister(visualFuncs, priority, visualTask, PRIORITY_VISUAL_CHART, 'visual', true);
}

var registeredTasks = [];
function normalizeRegister(targetList, priority, fn, defaultPriority, visualType, checkBlock) {
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
  if (false) {}
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
 * Global dispatchAction to a specified chart instance.
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
registerVisual(PRIORITY_VISUAL_DECAL, decal.decalVisualStageHandler);
registerPreprocessor(backwardCompat["default"]);
registerProcessor(PRIORITY_PROCESSOR_DATASTACK, dataStack.dataStackStageHandler);
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
98229: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
__webpack_require__.d(__webpack_exports__, {
}, {
  getImpl: getImpl,
  registerImpl: registerImpl
});


}),
58345: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _model_Model_js__rspack_import_1 = __webpack_require__(98899);
/* import */ var zrender_lib_core_env_js__rspack_import_0 = __webpack_require__(26444);
/* import */ var _i18n_langEN_js__rspack_import_3 = __webpack_require__(75797);
/* import */ var _i18n_langZH_js__rspack_import_4 = __webpack_require__(75828);
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


// default import ZH and EN lang



var LOCALE_ZH = 'ZH';
var LOCALE_EN = 'EN';
var DEFAULT_LOCALE = LOCALE_EN;
var localeStorage = {};
var localeModels = {};
var SYSTEM_LANG = !zrender_lib_core_env_js__rspack_import_0["default"].domSupported ? DEFAULT_LOCALE : function () {
  var langStr = (document.documentElement.lang || navigator.language || navigator.browserLanguage || DEFAULT_LOCALE).toUpperCase();
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
__webpack_require__.d(__webpack_exports__, {
}, {
  SYSTEM_LANG: SYSTEM_LANG,
  createLocaleObject: createLocaleObject,
  getDefaultLocaleModel: getDefaultLocaleModel,
  getLocaleModel: getLocaleModel,
  registerLocale: registerLocale
});


}),
76258: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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

;
/**
 * @param {Object} define
 * @return See the return of `createTask`.
 */
function createTask(define) {
  return new Task(define);
}
var Task = /** @class */function () {
  function Task(define) {
    define = define || {};
    this._reset = define.reset;
    this._plan = define.plan;
    this._count = define.count;
    this._onDirty = define.onDirty;
    this._dirty = true;
  }
  /**
   * @param step Specified step.
   * @param skip Skip customer perform call.
   * @param modBy Sampling window size.
   * @param modDataCount Sampling count.
   * @return whether unfinished.
   */
  Task.prototype.perform = function (performArgs) {
    var upTask = this._upstream;
    var skip = performArgs && performArgs.skip;
    // TODO some refactor.
    // Pull data. Must pull data each time, because context.data
    // may be updated by Series.setData.
    if (this._dirty && upTask) {
      var context = this.context;
      context.data = context.outputData = upTask.context.outputData;
    }
    if (this.__pipeline) {
      this.__pipeline.currentTask = this;
    }
    var planResult;
    if (this._plan && !skip) {
      planResult = this._plan(this.context);
    }
    // Support sharding by mod, which changes the render sequence and makes the rendered graphic
    // elements uniformed distributed when progress, especially when moving or zooming.
    var lastModBy = normalizeModBy(this._modBy);
    var lastModDataCount = this._modDataCount || 0;
    var modBy = normalizeModBy(performArgs && performArgs.modBy);
    var modDataCount = performArgs && performArgs.modDataCount || 0;
    if (lastModBy !== modBy || lastModDataCount !== modDataCount) {
      planResult = 'reset';
    }
    function normalizeModBy(val) {
      !(val >= 1) && (val = 1); // jshint ignore:line
      return val;
    }
    var forceFirstProgress;
    if (this._dirty || planResult === 'reset') {
      this._dirty = false;
      forceFirstProgress = this._doReset(skip);
    }
    this._modBy = modBy;
    this._modDataCount = modDataCount;
    var step = performArgs && performArgs.step;
    if (upTask) {
      if (false) {}
      this._dueEnd = upTask._outputDueEnd;
    }
    // DataTask or overallTask
    else {
      if (false) {}
      this._dueEnd = this._count ? this._count(this.context) : Infinity;
    }
    // Note: Stubs, that its host overall task let it has progress, has progress.
    // If no progress, pass index from upstream to downstream each time plan called.
    if (this._progress) {
      var start = this._dueIndex;
      var end = Math.min(step != null ? this._dueIndex + step : Infinity, this._dueEnd);
      if (!skip && (forceFirstProgress || start < end)) {
        var progress = this._progress;
        if ((0,zrender_lib_core_util_js__rspack_import_0.isArray)(progress)) {
          for (var i = 0; i < progress.length; i++) {
            this._doProgress(progress[i], start, end, modBy, modDataCount);
          }
        } else {
          this._doProgress(progress, start, end, modBy, modDataCount);
        }
      }
      this._dueIndex = end;
      // If no `outputDueEnd`, assume that output data and
      // input data is the same, so use `dueIndex` as `outputDueEnd`.
      var outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : end;
      if (false) {}
      this._outputDueEnd = outputDueEnd;
    } else {
      // (1) Some overall task has no progress.
      // (2) Stubs, that its host overall task do not let it has progress, has no progress.
      // This should always be performed so it can be passed to downstream.
      this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
    }
    return this.unfinished();
  };
  /**
   * @tutorial [EC_TASK_DIRTY]
   *  Task `dirty()` calls typically originate from a trigger of EC_FULL_UPDATE_CYCLE and
   *  EC_PARTIAL_UPDATE_CYCLE) (See comments in EC_CYCLE. Generally, task dirty propagates
   *  to downstream tasks.
   *  Task dirty leads to the `StageHandler['reset']` or `StageHandler['overallReset']` call,
   *  which discards the previous result and starts over the processing.
   */
  Task.prototype.dirty = function () {
    this._dirty = true;
    this._onDirty && this._onDirty(this.context);
  };
  Task.prototype._doProgress = function (progress, start, end, modBy, modDataCount) {
    iterator.reset(start, end, modBy, modDataCount);
    this._callingProgress = progress;
    this._callingProgress({
      start: start,
      end: end,
      count: end - start,
      next: iterator.next
    }, this.context);
  };
  Task.prototype._doReset = function (skip) {
    this._dueIndex = this._outputDueEnd = this._dueEnd = 0;
    this._settedOutputEnd = null;
    var progress;
    var forceFirstProgress;
    if (!skip && this._reset) {
      progress = this._reset(this.context);
      if (progress && progress.progress) {
        forceFirstProgress = progress.forceFirstProgress;
        progress = progress.progress;
      }
      // To simplify no progress checking, array must has item.
      if ((0,zrender_lib_core_util_js__rspack_import_0.isArray)(progress) && !progress.length) {
        progress = null;
      }
    }
    this._progress = progress;
    this._modBy = this._modDataCount = null;
    var downstream = this._downstream;
    downstream && downstream.dirty();
    return forceFirstProgress;
  };
  Task.prototype.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  };
  /**
   * @param downTask The downstream task.
   * @return The downstream task.
   */
  Task.prototype.pipe = function (downTask) {
    if (false) {}
    // If already downstream, do not dirty downTask.
    if (this._downstream !== downTask || this._dirty) {
      this._downstream = downTask;
      downTask._upstream = this;
      downTask.dirty();
    }
  };
  Task.prototype.dispose = function () {
    if (this._disposed) {
      return;
    }
    this._upstream && (this._upstream._downstream = null);
    this._downstream && (this._downstream._upstream = null);
    this._dirty = false;
    this._disposed = true;
  };
  Task.prototype.getUpstream = function () {
    return this._upstream;
  };
  Task.prototype.getDownstream = function () {
    return this._downstream;
  };
  Task.prototype.setOutputEnd = function (end) {
    // This only happens in dataTask, dataZoom, map, currently.
    // where dataZoom do not set end each time, but only set
    // when reset. So we should record the set end, in case
    // that the stub of dataZoom perform again and earse the
    // set end by upstream.
    this._outputDueEnd = this._settedOutputEnd = end;
  };
  return Task;
}();

var iterator = function () {
  var end;
  var current;
  var modBy;
  var modDataCount;
  var winCount;
  var it = {
    reset: function (s, e, sStep, sCount) {
      current = s;
      end = e;
      modBy = sStep;
      modDataCount = sCount;
      winCount = Math.ceil(modDataCount / modBy);
      it.next = modBy > 1 && modDataCount > 0 ? modNext : sequentialNext;
    }
  };
  return it;
  function sequentialNext() {
    return current < end ? current++ : null;
  }
  function modNext() {
    var dataIndex = current % winCount * modBy + Math.ceil(current / winCount);
    var result = current >= end ? null : dataIndex < modDataCount ? dataIndex
    // If modDataCount is smaller than data.count() (consider `appendData` case),
    // Use normal linear rendering mode.
    : current;
    current++;
    return result;
  }
}();
// -----------------------------------------------------------------------------
// For stream debug (Should be commented out after used!)
// @usage: printTask(this, 'begin');
// @usage: printTask(this, null, {someExtraProp});
// @usage: Use `__idxInPipeline` as conditional breakpiont.
//
// window.printTask = function (task: any, prefix: string, extra: { [key: string]: unknown }): void {
//     window.ecTaskUID == null && (window.ecTaskUID = 0);
//     task.uidDebug == null && (task.uidDebug = `task_${window.ecTaskUID++}`);
//     task.agent && task.agent.uidDebug == null && (task.agent.uidDebug = `task_${window.ecTaskUID++}`);
//     let props = [];
//     if (task.__pipeline) {
//         let val = `${task.__idxInPipeline}/${task.__pipeline.tail.__idxInPipeline} ${task.agent ? '(stub)' : ''}`;
//         props.push({text: '__idxInPipeline/total', value: val});
//     } else {
//         let stubCount = 0;
//         task.agentStubMap.each(() => stubCount++);
//         props.push({text: 'idx', value: `overall (stubs: ${stubCount})`});
//     }
//     props.push({text: 'uid', value: task.uidDebug});
//     if (task.__pipeline) {
//         props.push({text: 'pipelineId', value: task.__pipeline.id});
//         task.agent && props.push(
//             {text: 'stubFor', value: task.agent.uidDebug}
//         );
//     }
//     props.push(
//         {text: 'dirty', value: task._dirty},
//         {text: 'dueIndex', value: task._dueIndex},
//         {text: 'dueEnd', value: task._dueEnd},
//         {text: 'outputDueEnd', value: task._outputDueEnd}
//     );
//     if (extra) {
//         Object.keys(extra).forEach(key => {
//             props.push({text: key, value: extra[key]});
//         });
//     }
//     let args = ['color: blue'];
//     let msg = `%c[${prefix || 'T'}] %c` + props.map(item => (
//         args.push('color: green', 'color: red'),
//         `${item.text}: %c${item.value}`
//     )).join('%c, ');
//     console.log.apply(console, [msg].concat(args));
//     // console.log(this);
// };
// window.printPipeline = function (task: any, prefix: string) {
//     const pipeline = task.__pipeline;
//     let currTask = pipeline.head;
//     while (currTask) {
//         window.printTask(currTask, prefix);
//         currTask = currTask._downstream;
//     }
// };
// window.showChain = function (chainHeadTask) {
//     var chain = [];
//     var task = chainHeadTask;
//     while (task) {
//         chain.push({
//             task: task,
//             up: task._upstream,
//             down: task._downstream,
//             idxInPipeline: task.__idxInPipeline
//         });
//         task = task._downstream;
//     }
//     return chain;
// };
// window.findTaskInChain = function (task, chainHeadTask) {
//     let chain = window.showChain(chainHeadTask);
//     let result = [];
//     for (let i = 0; i < chain.length; i++) {
//         let chainItem = chain[i];
//         if (chainItem.task === task) {
//             result.push(i);
//         }
//     }
//     return result;
// };
// window.printChainAEachInChainB = function (chainHeadTaskA, chainHeadTaskB) {
//     let chainA = window.showChain(chainHeadTaskA);
//     for (let i = 0; i < chainA.length; i++) {
//         console.log('chainAIdx:', i, 'inChainB:', window.findTaskInChain(chainA[i].task, chainHeadTaskB));
//     }
// };
__webpack_require__.d(__webpack_exports__, {
}, {
  Task: Task,
  createTask: createTask
});


}),
75930: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
function dataIndexMapValueLength(valNumOrArrLengthMoreThan2) {
  return valNumOrArrLengthMoreThan2 == null ? 0 : valNumOrArrLengthMoreThan2.length || 1;
}
function defaultKeyGetter(item) {
  return item;
}
var DataDiffer = /** @class */function () {
  /**
   * @param context Can be visited by this.context in callback.
   */
  function DataDiffer(oldArr, newArr, oldKeyGetter, newKeyGetter, context,
  // By default: 'oneToOne'.
  diffMode) {
    this._old = oldArr;
    this._new = newArr;
    this._oldKeyGetter = oldKeyGetter || defaultKeyGetter;
    this._newKeyGetter = newKeyGetter || defaultKeyGetter;
    // Visible in callback via `this.context`;
    this.context = context;
    this._diffModeMultiple = diffMode === 'multiple';
  }
  /**
   * Callback function when add a data
   */
  DataDiffer.prototype.add = function (func) {
    this._add = func;
    return this;
  };
  /**
   * Callback function when update a data
   */
  DataDiffer.prototype.update = function (func) {
    this._update = func;
    return this;
  };
  /**
   * Callback function when update a data and only work in `cbMode: 'byKey'`.
   */
  DataDiffer.prototype.updateManyToOne = function (func) {
    this._updateManyToOne = func;
    return this;
  };
  /**
   * Callback function when update a data and only work in `cbMode: 'byKey'`.
   */
  DataDiffer.prototype.updateOneToMany = function (func) {
    this._updateOneToMany = func;
    return this;
  };
  /**
   * Callback function when update a data and only work in `cbMode: 'byKey'`.
   */
  DataDiffer.prototype.updateManyToMany = function (func) {
    this._updateManyToMany = func;
    return this;
  };
  /**
   * Callback function when remove a data
   */
  DataDiffer.prototype.remove = function (func) {
    this._remove = func;
    return this;
  };
  DataDiffer.prototype.execute = function () {
    this[this._diffModeMultiple ? '_executeMultiple' : '_executeOneToOne']();
  };
  DataDiffer.prototype._executeOneToOne = function () {
    var oldArr = this._old;
    var newArr = this._new;
    var newDataIndexMap = {};
    var oldDataKeyArr = new Array(oldArr.length);
    var newDataKeyArr = new Array(newArr.length);
    this._initIndexMap(oldArr, null, oldDataKeyArr, '_oldKeyGetter');
    this._initIndexMap(newArr, newDataIndexMap, newDataKeyArr, '_newKeyGetter');
    for (var i = 0; i < oldArr.length; i++) {
      var oldKey = oldDataKeyArr[i];
      var newIdxMapVal = newDataIndexMap[oldKey];
      var newIdxMapValLen = dataIndexMapValueLength(newIdxMapVal);
      // idx can never be empty array here. see 'set null' logic below.
      if (newIdxMapValLen > 1) {
        // Consider there is duplicate key (for example, use dataItem.name as key).
        // We should make sure every item in newArr and oldArr can be visited.
        var newIdx = newIdxMapVal.shift();
        if (newIdxMapVal.length === 1) {
          newDataIndexMap[oldKey] = newIdxMapVal[0];
        }
        this._update && this._update(newIdx, i);
      } else if (newIdxMapValLen === 1) {
        newDataIndexMap[oldKey] = null;
        this._update && this._update(newIdxMapVal, i);
      } else {
        this._remove && this._remove(i);
      }
    }
    this._performRestAdd(newDataKeyArr, newDataIndexMap);
  };
  /**
   * For example, consider the case:
   * oldData: [o0, o1, o2, o3, o4, o5, o6, o7],
   * newData: [n0, n1, n2, n3, n4, n5, n6, n7, n8],
   * Where:
   *     o0, o1, n0 has key 'a' (many to one)
   *     o5, n4, n5, n6 has key 'b' (one to many)
   *     o2, n1 has key 'c' (one to one)
   *     n2, n3 has key 'd' (add)
   *     o3, o4 has key 'e' (remove)
   *     o6, o7, n7, n8 has key 'f' (many to many, treated as add and remove)
   * Then:
   *     (The order of the following directives are not ensured.)
   *     this._updateManyToOne(n0, [o0, o1]);
   *     this._updateOneToMany([n4, n5, n6], o5);
   *     this._update(n1, o2);
   *     this._remove(o3);
   *     this._remove(o4);
   *     this._remove(o6);
   *     this._remove(o7);
   *     this._add(n2);
   *     this._add(n3);
   *     this._add(n7);
   *     this._add(n8);
   */
  DataDiffer.prototype._executeMultiple = function () {
    var oldArr = this._old;
    var newArr = this._new;
    var oldDataIndexMap = {};
    var newDataIndexMap = {};
    var oldDataKeyArr = [];
    var newDataKeyArr = [];
    this._initIndexMap(oldArr, oldDataIndexMap, oldDataKeyArr, '_oldKeyGetter');
    this._initIndexMap(newArr, newDataIndexMap, newDataKeyArr, '_newKeyGetter');
    for (var i = 0; i < oldDataKeyArr.length; i++) {
      var oldKey = oldDataKeyArr[i];
      var oldIdxMapVal = oldDataIndexMap[oldKey];
      var newIdxMapVal = newDataIndexMap[oldKey];
      var oldIdxMapValLen = dataIndexMapValueLength(oldIdxMapVal);
      var newIdxMapValLen = dataIndexMapValueLength(newIdxMapVal);
      if (oldIdxMapValLen > 1 && newIdxMapValLen === 1) {
        this._updateManyToOne && this._updateManyToOne(newIdxMapVal, oldIdxMapVal);
        newDataIndexMap[oldKey] = null;
      } else if (oldIdxMapValLen === 1 && newIdxMapValLen > 1) {
        this._updateOneToMany && this._updateOneToMany(newIdxMapVal, oldIdxMapVal);
        newDataIndexMap[oldKey] = null;
      } else if (oldIdxMapValLen === 1 && newIdxMapValLen === 1) {
        this._update && this._update(newIdxMapVal, oldIdxMapVal);
        newDataIndexMap[oldKey] = null;
      } else if (oldIdxMapValLen > 1 && newIdxMapValLen > 1) {
        this._updateManyToMany && this._updateManyToMany(newIdxMapVal, oldIdxMapVal);
        newDataIndexMap[oldKey] = null;
      } else if (oldIdxMapValLen > 1) {
        for (var i_1 = 0; i_1 < oldIdxMapValLen; i_1++) {
          this._remove && this._remove(oldIdxMapVal[i_1]);
        }
      } else {
        this._remove && this._remove(oldIdxMapVal);
      }
    }
    this._performRestAdd(newDataKeyArr, newDataIndexMap);
  };
  DataDiffer.prototype._performRestAdd = function (newDataKeyArr, newDataIndexMap) {
    for (var i = 0; i < newDataKeyArr.length; i++) {
      var newKey = newDataKeyArr[i];
      var newIdxMapVal = newDataIndexMap[newKey];
      var idxMapValLen = dataIndexMapValueLength(newIdxMapVal);
      if (idxMapValLen > 1) {
        for (var j = 0; j < idxMapValLen; j++) {
          this._add && this._add(newIdxMapVal[j]);
        }
      } else if (idxMapValLen === 1) {
        this._add && this._add(newIdxMapVal);
      }
      // Support both `newDataKeyArr` are duplication removed or not removed.
      newDataIndexMap[newKey] = null;
    }
  };
  DataDiffer.prototype._initIndexMap = function (arr,
  // Can be null.
  map,
  // In 'byKey', the output `keyArr` is duplication removed.
  // In 'byIndex', the output `keyArr` is not duplication removed and
  //     its indices are accurately corresponding to `arr`.
  keyArr, keyGetterName) {
    var cbModeMultiple = this._diffModeMultiple;
    for (var i = 0; i < arr.length; i++) {
      // Add prefix to avoid conflict with Object.prototype.
      var key = '_ec_' + this[keyGetterName](arr[i], i);
      if (!cbModeMultiple) {
        keyArr[i] = key;
      }
      if (!map) {
        continue;
      }
      var idxMapVal = map[key];
      var idxMapValLen = dataIndexMapValueLength(idxMapVal);
      if (idxMapValLen === 0) {
        // Simple optimize: in most cases, one index has one key,
        // do not need array.
        map[key] = i;
        if (cbModeMultiple) {
          keyArr.push(key);
        }
      } else if (idxMapValLen === 1) {
        map[key] = [idxMapVal, i];
      } else {
        idxMapVal.push(i);
      }
    }
  };
  return DataDiffer;
}();
/* export default */ __webpack_exports__["default"] = (DataDiffer);

}),
93349: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _util_types_js__rspack_import_0 = __webpack_require__(40333);
/* import */ var _helper_dataValueHelper_js__rspack_import_5 = __webpack_require__(94276);
/* import */ var _Source_js__rspack_import_2 = __webpack_require__(17043);
/* import */ var _util_model_js__rspack_import_3 = __webpack_require__(53781);
/* import */ var _util_number_js__rspack_import_4 = __webpack_require__(46823);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






/* global Float64Array, Int32Array, Uint32Array, Uint16Array */
// Caution: MUST not use `new CtorUint32Array(arr, 0, len)`, because the Ctor of array is
// different from the Ctor of typed array.
var CtorUint32Array = typeof Uint32Array === _util_types_js__rspack_import_0.UNDEFINED_STR ? Array : Uint32Array;
var CtorUint16Array = typeof Uint16Array === _util_types_js__rspack_import_0.UNDEFINED_STR ? Array : Uint16Array;
var CtorInt32Array = typeof Int32Array === _util_types_js__rspack_import_0.UNDEFINED_STR ? Array : Int32Array;
var CtorFloat64Array = typeof Float64Array === _util_types_js__rspack_import_0.UNDEFINED_STR ? Array : Float64Array;
/**
 * Multi dimensional data store
 */
var dataCtors = {
  'float': CtorFloat64Array,
  'int': CtorInt32Array,
  // Ordinal data type can be string or int
  'ordinal': Array,
  'number': Array,
  'time': CtorFloat64Array
};
var defaultDimValueGetters;
function getIndicesCtor(rawCount) {
  // The possible max value in this._indicies is always this._rawCount despite of filtering.
  return rawCount > 65535 ? CtorUint32Array : CtorUint16Array;
}
;
function cloneChunk(originalChunk) {
  var Ctor = originalChunk.constructor;
  // Only shallow clone is enough when Array.
  return Ctor === Array ? originalChunk.slice() : new Ctor(originalChunk);
}
function prepareStore(store, dimIdx, dimType, end, append) {
  var DataCtor = dataCtors[dimType || 'float'];
  if (append) {
    var oldStore = store[dimIdx];
    var oldLen = oldStore && oldStore.length;
    if (!(oldLen === end)) {
      var newStore = new DataCtor(end);
      // The cost of the copy is probably inconsiderable
      // within the initial chunkSize.
      for (var j = 0; j < oldLen; j++) {
        newStore[j] = oldStore[j];
      }
      store[dimIdx] = newStore;
    }
  } else {
    store[dimIdx] = new DataCtor(end);
  }
}
;
/**
 * Basically, DataStore API keep immutable.
 */
var DataStore = /** @class */function () {
  function DataStore() {
    this._chunks = [];
    // It will not be calculated until needed.
    this._rawExtent = [];
    // structure:
    //  `const extentOnFilterOnDimension = this._extent[dim][extentFilterKey]`
    this._extent = [];
    // Count after filtered.
    this._count = 0;
    this._rawCount = 0;
    this._calcDimNameToIdx = (0,zrender_lib_core_util_js__rspack_import_1.createHashMap)();
  }
  /**
   * Initialize from data
   */
  DataStore.prototype.initData = function (provider, inputDimensions, dimValueGetter) {
    if (false) {}
    this._provider = provider;
    // Clear
    this._chunks = [];
    this._indices = null;
    this.getRawIndex = this._getRawIdxIdentity;
    var source = provider.getSource();
    var defaultGetter = this.defaultDimValueGetter = defaultDimValueGetters[source.sourceFormat];
    // Default dim value getter
    this._dimValueGetter = dimValueGetter || defaultGetter;
    // Reset raw extent.
    this._rawExtent = [];
    var willRetrieveDataByName = (0,_Source_js__rspack_import_2.shouldRetrieveDataByName)(source);
    this._dimensions = (0,zrender_lib_core_util_js__rspack_import_1.map)(inputDimensions, function (dim) {
      if (false) {}
      return {
        // Only pick these two props. Not leak other properties like orderMeta.
        type: dim.type,
        property: dim.property
      };
    });
    this._initDataFromProvider(0, provider.count());
  };
  DataStore.prototype.getProvider = function () {
    return this._provider;
  };
  /**
   * Caution: even when a `source` instance owned by a series, the created data store
   * may still be shared by different sereis (the source hash does not use all `source`
   * props, see `sourceManager`). In this case, the `source` props that are not used in
   * hash (like `source.dimensionDefine`) probably only belongs to a certain series and
   * thus should not be fetch here.
   */
  DataStore.prototype.getSource = function () {
    return this._provider.getSource();
  };
  /**
   * @caution Only used in dataStack.
   */
  DataStore.prototype.ensureCalculationDimension = function (dimName, type) {
    var calcDimNameToIdx = this._calcDimNameToIdx;
    var dimensions = this._dimensions;
    var calcDimIdx = calcDimNameToIdx.get(dimName);
    if (calcDimIdx != null) {
      if (dimensions[calcDimIdx].type === type) {
        return calcDimIdx;
      }
    } else {
      calcDimIdx = dimensions.length;
    }
    dimensions[calcDimIdx] = {
      type: type
    };
    calcDimNameToIdx.set(dimName, calcDimIdx);
    this._chunks[calcDimIdx] = new dataCtors[type || 'float'](this._rawCount);
    this._rawExtent[calcDimIdx] = (0,_util_model_js__rspack_import_3.initExtentForUnion)();
    return calcDimIdx;
  };
  DataStore.prototype.collectOrdinalMeta = function (dimIdx, ordinalMeta) {
    var chunk = this._chunks[dimIdx];
    var dim = this._dimensions[dimIdx];
    var rawExtents = this._rawExtent;
    var offset = dim.ordinalOffset || 0;
    var len = chunk.length;
    if (offset === 0) {
      // We need to reset the rawExtent if collect is from start.
      // Because this dimension may be guessed as number and calcuating a wrong extent.
      rawExtents[dimIdx] = (0,_util_model_js__rspack_import_3.initExtentForUnion)();
    }
    var dimRawExtent = rawExtents[dimIdx];
    // Parse from previous data offset. len may be changed after appendData
    for (var i = offset; i < len; i++) {
      // See also CATEGORY_AXIS_MODEL_DATA_IS_EMPTY_ARRAY.
      var val = chunk[i] = ordinalMeta.parseAndCollect(chunk[i]);
      if (!isNaN(val)) {
        dimRawExtent[0] = Math.min(val, dimRawExtent[0]);
        dimRawExtent[1] = Math.max(val, dimRawExtent[1]);
      }
    }
    dim.ordinalMeta = ordinalMeta;
    dim.ordinalOffset = len;
    dim.type = 'ordinal'; // Force to be ordinal
  };
  DataStore.prototype.getOrdinalMeta = function (dimIdx) {
    var dimInfo = this._dimensions[dimIdx];
    var ordinalMeta = dimInfo.ordinalMeta;
    return ordinalMeta;
  };
  DataStore.prototype.getDimensionProperty = function (dimIndex) {
    var item = this._dimensions[dimIndex];
    return item && item.property;
  };
  /**
   * Caution: Can be only called on raw data (before `this._indices` created).
   */
  DataStore.prototype.appendData = function (data) {
    if (false) {}
    var provider = this._provider;
    var start = this.count();
    provider.appendData(data);
    var end = provider.count();
    if (!provider.persistent) {
      end += start;
    }
    if (start < end) {
      this._initDataFromProvider(start, end, true);
    }
    return [start, end];
  };
  DataStore.prototype.appendValues = function (values, minFillLen) {
    var chunks = this._chunks;
    var dimensions = this._dimensions;
    var dimLen = dimensions.length;
    var rawExtent = this._rawExtent;
    var start = this.count();
    var end = start + Math.max(values.length, minFillLen || 0);
    for (var i = 0; i < dimLen; i++) {
      var dim = dimensions[i];
      prepareStore(chunks, i, dim.type, end, true);
    }
    var emptyDataItem = [];
    for (var idx = start; idx < end; idx++) {
      var sourceIdx = idx - start;
      // Store the data by dimensions
      for (var dimIdx = 0; dimIdx < dimLen; dimIdx++) {
        var dim = dimensions[dimIdx];
        var val = defaultDimValueGetters.arrayRows.call(this, values[sourceIdx] || emptyDataItem, dim.property, sourceIdx, dimIdx);
        chunks[dimIdx][idx] = val;
        var dimRawExtent = rawExtent[dimIdx];
        val < dimRawExtent[0] && (dimRawExtent[0] = val);
        val > dimRawExtent[1] && (dimRawExtent[1] = val);
      }
    }
    this._rawCount = this._count = end;
    return {
      start: start,
      end: end
    };
  };
  DataStore.prototype._initDataFromProvider = function (start, end, append) {
    var provider = this._provider;
    var chunks = this._chunks;
    var dimensions = this._dimensions;
    var dimLen = dimensions.length;
    var rawExtent = this._rawExtent;
    var dimNames = (0,zrender_lib_core_util_js__rspack_import_1.map)(dimensions, function (dim) {
      return dim.property;
    });
    for (var i = 0; i < dimLen; i++) {
      var dim = dimensions[i];
      if (!rawExtent[i]) {
        rawExtent[i] = (0,_util_model_js__rspack_import_3.initExtentForUnion)();
      }
      prepareStore(chunks, i, dim.type, end, append);
    }
    if (provider.fillStorage) {
      provider.fillStorage(start, end, chunks, rawExtent);
    } else {
      var dataItem = [];
      for (var idx = start; idx < end; idx++) {
        // NOTICE: Try not to write things into dataItem
        dataItem = provider.getItem(idx, dataItem);
        // Each data item is value
        // [1, 2]
        // 2
        // Bar chart, line chart which uses category axis
        // only gives the 'y' value. 'x' value is the indices of category
        // Use a tempValue to normalize the value to be a (x, y) value
        // Store the data by dimensions
        for (var dimIdx = 0; dimIdx < dimLen; dimIdx++) {
          var dimStorage = chunks[dimIdx];
          // PENDING NULL is empty or zero
          var val = this._dimValueGetter(dataItem, dimNames[dimIdx], idx, dimIdx);
          dimStorage[idx] = val;
          var dimRawExtent = rawExtent[dimIdx];
          val < dimRawExtent[0] && (dimRawExtent[0] = val);
          val > dimRawExtent[1] && (dimRawExtent[1] = val);
        }
      }
    }
    if (!provider.persistent && provider.clean) {
      // Clean unused data if data source is typed array.
      provider.clean();
    }
    this._rawCount = this._count = end;
    // Reset data extent
    this._extent = [];
  };
  DataStore.prototype.count = function () {
    return this._count;
  };
  /**
   * Get value. Return NaN if idx is out of range.
   */
  DataStore.prototype.get = function (dim, idx) {
    if (!(idx >= 0 && idx < this._count)) {
      return NaN;
    }
    var dimStore = this._chunks[dim];
    return dimStore ? dimStore[this.getRawIndex(idx)] : NaN;
  };
  DataStore.prototype.getValues = function (dimensions, idx) {
    var values = [];
    var dimArr = [];
    if (idx == null) {
      idx = dimensions;
      // TODO get all from store?
      dimensions = [];
      // All dimensions
      for (var i = 0; i < this._dimensions.length; i++) {
        dimArr.push(i);
      }
    } else {
      dimArr = dimensions;
    }
    for (var i = 0, len = dimArr.length; i < len; i++) {
      values.push(this.get(dimArr[i], idx));
    }
    return values;
  };
  /**
   * @param dim concrete dim
   */
  DataStore.prototype.getByRawIndex = function (dim, rawIdx) {
    if (!(rawIdx >= 0 && rawIdx < this._rawCount)) {
      return NaN;
    }
    var dimStore = this._chunks[dim];
    return dimStore ? dimStore[rawIdx] : NaN;
  };
  /**
   * Get sum of data in one dimension
   */
  DataStore.prototype.getSum = function (dim) {
    var dimData = this._chunks[dim];
    var sum = 0;
    if (dimData) {
      for (var i = 0, len = this.count(); i < len; i++) {
        var value = this.get(dim, i);
        if (!isNaN(value)) {
          sum += value;
        }
      }
    }
    return sum;
  };
  /**
   * Get median of data in one dimension
   */
  DataStore.prototype.getMedian = function (dim) {
    var dimDataArray = [];
    // map all data of one dimension
    this.each([dim], function (val) {
      if (!isNaN(val)) {
        dimDataArray.push(val);
      }
    });
    // TODO
    // Use quick select?
    (0,_util_number_js__rspack_import_4.asc)(dimDataArray);
    var len = this.count();
    // calculate median
    return len === 0 ? 0 : len % 2 === 1 ? dimDataArray[(len - 1) / 2] : (dimDataArray[len / 2] + dimDataArray[len / 2 - 1]) / 2;
  };
  /**
   * Retrieve the index with given raw data index.
   */
  DataStore.prototype.indexOfRawIndex = function (rawIndex) {
    if (rawIndex >= this._rawCount || rawIndex < 0) {
      return -1;
    }
    if (!this._indices) {
      return rawIndex;
    }
    // Indices are ascending
    var indices = this._indices;
    // If rawIndex === dataIndex
    var rawDataIndex = indices[rawIndex];
    if (rawDataIndex != null && rawDataIndex < this._count && rawDataIndex === rawIndex) {
      return rawIndex;
    }
    var left = 0;
    var right = this._count - 1;
    while (left <= right) {
      var mid = (left + right) / 2 | 0;
      if (indices[mid] < rawIndex) {
        left = mid + 1;
      } else if (indices[mid] > rawIndex) {
        right = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };
  DataStore.prototype.getIndices = function () {
    var newIndices;
    var indices = this._indices;
    if (indices) {
      var Ctor = indices.constructor;
      var thisCount = this._count;
      // `new Array(a, b, c)` is different from `new Uint32Array(a, b, c)`.
      if (Ctor === Array) {
        newIndices = new Ctor(thisCount);
        for (var i = 0; i < thisCount; i++) {
          newIndices[i] = indices[i];
        }
      } else {
        newIndices = new Ctor(indices.buffer, 0, thisCount);
      }
    } else {
      var Ctor = getIndicesCtor(this._rawCount);
      newIndices = new Ctor(this.count());
      for (var i = 0; i < newIndices.length; i++) {
        newIndices[i] = i;
      }
    }
    return newIndices;
  };
  /**
   * [NOTICE]: Performance-sensitive for large data.
   */
  DataStore.prototype.filter = function (dims, cb) {
    if (!this._count) {
      return this;
    }
    var newStore = this.clone();
    var count = newStore.count();
    var Ctor = getIndicesCtor(newStore._rawCount);
    var newIndices = new Ctor(count);
    var value = [];
    var dimSize = dims.length;
    var offset = 0;
    var dim0 = dims[0];
    var chunks = newStore._chunks;
    for (var i = 0; i < count; i++) {
      var keep = void 0;
      var rawIdx = newStore.getRawIndex(i);
      // Simple optimization
      if (dimSize === 0) {
        keep = cb(i);
      } else if (dimSize === 1) {
        var val = chunks[dim0][rawIdx];
        keep = cb(val, i);
      } else {
        var k = 0;
        for (; k < dimSize; k++) {
          value[k] = chunks[dims[k]][rawIdx];
        }
        value[k] = i;
        keep = cb.apply(null, value);
      }
      if (keep) {
        newIndices[offset++] = rawIdx;
      }
    }
    // Set indices after filtered.
    if (offset < count) {
      newStore._indices = newIndices;
    }
    newStore._count = offset;
    // Reset data extent
    newStore._extent = [];
    newStore._updateGetRawIdx();
    return newStore;
  };
  /**
   * Select data in range. (For optimization of filter)
   * (Manually inline code, support 5 million data filtering in data zoom.)
   */
  DataStore.prototype.selectRange = function (range) {
    var newStore = this.clone();
    var len = newStore._count;
    if (!len) {
      return this;
    }
    var dims = (0,zrender_lib_core_util_js__rspack_import_1.keys)(range);
    var dimSize = dims.length;
    if (!dimSize) {
      return this;
    }
    var originalCount = newStore.count();
    var Ctor = getIndicesCtor(newStore._rawCount);
    var newIndices = new Ctor(originalCount);
    var offset = 0;
    var dim0 = dims[0];
    var min = range[dim0][0];
    var max = range[dim0][1];
    var storeArr = newStore._chunks;
    var quickFinished = false;
    if (!newStore._indices) {
      // Extreme optimization for common case. About 2x faster in chrome.
      var idx = 0;
      if (dimSize === 1) {
        var dimStorage = storeArr[dims[0]];
        for (var i = 0; i < len; i++) {
          var val = dimStorage[i];
          // NaN will not be filtered. Consider the case, in line chart, empty
          // value indicates the line should be broken. But for the case like
          // scatter plot, a data item with empty value will not be rendered,
          // but the axis extent may be effected if some other dim of the data
          // item has value. Fortunately it is not a significant negative effect.
          if (val >= min && val <= max || isNaN(val)) {
            newIndices[offset++] = idx;
          }
          idx++;
        }
        quickFinished = true;
      } else if (dimSize === 2) {
        var dimStorage = storeArr[dims[0]];
        var dimStorage2 = storeArr[dims[1]];
        var min2 = range[dims[1]][0];
        var max2 = range[dims[1]][1];
        for (var i = 0; i < len; i++) {
          var val = dimStorage[i];
          var val2 = dimStorage2[i];
          // Do not filter NaN, see comment above.
          if ((val >= min && val <= max || isNaN(val)) && (val2 >= min2 && val2 <= max2 || isNaN(val2))) {
            newIndices[offset++] = idx;
          }
          idx++;
        }
        quickFinished = true;
      }
    }
    if (!quickFinished) {
      if (dimSize === 1) {
        for (var i = 0; i < originalCount; i++) {
          var rawIndex = newStore.getRawIndex(i);
          var val = storeArr[dims[0]][rawIndex];
          // Do not filter NaN, see comment above.
          if (val >= min && val <= max || isNaN(val)) {
            newIndices[offset++] = rawIndex;
          }
        }
      } else {
        for (var i = 0; i < originalCount; i++) {
          var keep = true;
          var rawIndex = newStore.getRawIndex(i);
          for (var k = 0; k < dimSize; k++) {
            var dimk = dims[k];
            var val = storeArr[dimk][rawIndex];
            // Do not filter NaN, see comment above.
            if (val < range[dimk][0] || val > range[dimk][1]) {
              keep = false;
            }
          }
          if (keep) {
            newIndices[offset++] = newStore.getRawIndex(i);
          }
        }
      }
    }
    // Set indices after filtered.
    if (offset < originalCount) {
      newStore._indices = newIndices;
    }
    newStore._count = offset;
    // Reset data extent
    newStore._extent = [];
    newStore._updateGetRawIdx();
    return newStore;
  };
  // /**
  //  * Data mapping to a plain array
  //  */
  // mapArray(dims: DimensionIndex[], cb: MapArrayCb): any[] {
  //     const result: any[] = [];
  //     this.each(dims, function () {
  //         result.push(cb && (cb as MapArrayCb).apply(null, arguments));
  //     });
  //     return result;
  // }
  /**
   * Data mapping to a new List with given dimensions
   */
  DataStore.prototype.map = function (dims, cb) {
    // TODO only clone picked chunks.
    var target = this.clone(dims);
    this._updateDims(target, dims, cb);
    return target;
  };
  /**
   * @caution Danger!! Only used in dataStack.
   */
  DataStore.prototype.modify = function (dims, cb) {
    this._updateDims(this, dims, cb);
  };
  DataStore.prototype._updateDims = function (target, dims, cb) {
    var targetChunks = target._chunks;
    var tmpRetValue = [];
    var dimSize = dims.length;
    var dataCount = target.count();
    var values = [];
    var rawExtent = target._rawExtent;
    for (var i = 0; i < dims.length; i++) {
      rawExtent[dims[i]] = (0,_util_model_js__rspack_import_3.initExtentForUnion)();
    }
    for (var dataIndex = 0; dataIndex < dataCount; dataIndex++) {
      var rawIndex = target.getRawIndex(dataIndex);
      for (var k = 0; k < dimSize; k++) {
        values[k] = targetChunks[dims[k]][rawIndex];
      }
      values[dimSize] = dataIndex;
      var retValue = cb && cb.apply(null, values);
      if (retValue != null) {
        // a number or string (in ordinal dimension)?
        if (typeof retValue !== 'object') {
          tmpRetValue[0] = retValue;
          retValue = tmpRetValue;
        }
        for (var i = 0; i < retValue.length; i++) {
          var dim = dims[i];
          var val = retValue[i];
          var rawExtentOnDim = rawExtent[dim];
          var dimStore = targetChunks[dim];
          if (dimStore) {
            dimStore[rawIndex] = val;
          }
          if (val < rawExtentOnDim[0]) {
            rawExtentOnDim[0] = val;
          }
          if (val > rawExtentOnDim[1]) {
            rawExtentOnDim[1] = val;
          }
        }
      }
    }
  };
  /**
   * Large data down sampling using largest-triangle-three-buckets
   * @param {string} valueDimension
   * @param {number} targetCount
   */
  DataStore.prototype.lttbDownSample = function (valueDimension, rate) {
    var target = this.clone([valueDimension], true);
    var targetStorage = target._chunks;
    var dimStore = targetStorage[valueDimension];
    var len = this.count();
    var sampledIndex = 0;
    var frameSize = Math.floor(1 / rate);
    var currentRawIndex = this.getRawIndex(0);
    var maxArea;
    var area;
    var nextRawIndex;
    var newIndices = new (getIndicesCtor(this._rawCount))(Math.min((Math.ceil(len / frameSize) + 2) * 2, len));
    // First frame use the first data.
    newIndices[sampledIndex++] = currentRawIndex;
    for (var i = 1; i < len - 1; i += frameSize) {
      var nextFrameStart = Math.min(i + frameSize, len - 1);
      var nextFrameEnd = Math.min(i + frameSize * 2, len);
      var avgX = (nextFrameEnd + nextFrameStart) / 2;
      var avgY = 0;
      for (var idx = nextFrameStart; idx < nextFrameEnd; idx++) {
        var rawIndex = this.getRawIndex(idx);
        var y = dimStore[rawIndex];
        if (isNaN(y)) {
          continue;
        }
        avgY += y;
      }
      avgY /= nextFrameEnd - nextFrameStart;
      var frameStart = i;
      var frameEnd = Math.min(i + frameSize, len);
      var pointAX = i - 1;
      var pointAY = dimStore[currentRawIndex];
      maxArea = -1;
      nextRawIndex = frameStart;
      var firstNaNIndex = -1;
      var countNaN = 0;
      // Find a point from current frame that construct a triangle with largest area with previous selected point
      // And the average of next frame.
      for (var idx = frameStart; idx < frameEnd; idx++) {
        var rawIndex = this.getRawIndex(idx);
        var y = dimStore[rawIndex];
        if (isNaN(y)) {
          countNaN++;
          if (firstNaNIndex < 0) {
            firstNaNIndex = rawIndex;
          }
          continue;
        }
        // Calculate triangle area over three buckets
        area = Math.abs((pointAX - avgX) * (y - pointAY) - (pointAX - idx) * (avgY - pointAY));
        if (area > maxArea) {
          maxArea = area;
          nextRawIndex = rawIndex; // Next a is this b
        }
      }
      if (countNaN > 0 && countNaN < frameEnd - frameStart) {
        // Append first NaN point in every bucket.
        // It is necessary to ensure the correct order of indices.
        newIndices[sampledIndex++] = Math.min(firstNaNIndex, nextRawIndex);
        nextRawIndex = Math.max(firstNaNIndex, nextRawIndex);
      }
      newIndices[sampledIndex++] = nextRawIndex;
      currentRawIndex = nextRawIndex; // This a is the next a (chosen b)
    }
    // First frame use the last data.
    newIndices[sampledIndex++] = this.getRawIndex(len - 1);
    target._count = sampledIndex;
    target._indices = newIndices;
    target.getRawIndex = this._getRawIdx;
    return target;
  };
  /**
   * Large data down sampling using min-max
   * @param {string} valueDimension
   * @param {number} rate
   */
  DataStore.prototype.minmaxDownSample = function (valueDimension, rate) {
    var target = this.clone([valueDimension], true);
    var targetStorage = target._chunks;
    var frameSize = Math.floor(1 / rate);
    var dimStore = targetStorage[valueDimension];
    var len = this.count();
    // Each frame results in 2 data points, one for min and one for max
    var newIndices = new (getIndicesCtor(this._rawCount))(Math.ceil(len / frameSize) * 2);
    var offset = 0;
    for (var i = 0; i < len; i += frameSize) {
      var minIndex = i;
      var minValue = dimStore[this.getRawIndex(minIndex)];
      var maxIndex = i;
      var maxValue = dimStore[this.getRawIndex(maxIndex)];
      var thisFrameSize = frameSize;
      // Handle final smaller frame
      if (i + frameSize > len) {
        thisFrameSize = len - i;
      }
      // Determine min and max within the current frame
      for (var k = 0; k < thisFrameSize; k++) {
        var rawIndex = this.getRawIndex(i + k);
        var value = dimStore[rawIndex];
        if (value < minValue) {
          minValue = value;
          minIndex = i + k;
        }
        if (value > maxValue) {
          maxValue = value;
          maxIndex = i + k;
        }
      }
      var rawMinIndex = this.getRawIndex(minIndex);
      var rawMaxIndex = this.getRawIndex(maxIndex);
      // Set the order of the min and max values, based on their ordering in the frame
      if (minIndex < maxIndex) {
        newIndices[offset++] = rawMinIndex;
        newIndices[offset++] = rawMaxIndex;
      } else {
        newIndices[offset++] = rawMaxIndex;
        newIndices[offset++] = rawMinIndex;
      }
    }
    target._count = offset;
    target._indices = newIndices;
    target._updateGetRawIdx();
    return target;
  };
  /**
   * Large data down sampling on given dimension
   * @param sampleIndex Sample index for name and id
   */
  DataStore.prototype.downSample = function (dimension, rate, sampleValue, sampleIndex) {
    var target = this.clone([dimension], true);
    var targetStorage = target._chunks;
    var frameValues = [];
    var frameSize = Math.floor(1 / rate);
    var dimStore = targetStorage[dimension];
    var len = this.count();
    var rawExtentOnDim = target._rawExtent[dimension] = (0,_util_model_js__rspack_import_3.initExtentForUnion)();
    var newIndices = new (getIndicesCtor(this._rawCount))(Math.ceil(len / frameSize));
    var offset = 0;
    for (var i = 0; i < len; i += frameSize) {
      // Last frame
      if (frameSize > len - i) {
        frameSize = len - i;
        frameValues.length = frameSize;
      }
      for (var k = 0; k < frameSize; k++) {
        var dataIdx = this.getRawIndex(i + k);
        frameValues[k] = dimStore[dataIdx];
      }
      var value = sampleValue(frameValues);
      var sampleFrameIdx = this.getRawIndex(Math.min(i + sampleIndex(frameValues, value) || 0, len - 1));
      // Only write value on the filtered data
      dimStore[sampleFrameIdx] = value;
      if (value < rawExtentOnDim[0]) {
        rawExtentOnDim[0] = value;
      }
      if (value > rawExtentOnDim[1]) {
        rawExtentOnDim[1] = value;
      }
      newIndices[offset++] = sampleFrameIdx;
    }
    target._count = offset;
    target._indices = newIndices;
    target._updateGetRawIdx();
    return target;
  };
  /**
   * Data iteration
   * @param ctx default this
   * @example
   *  list.each(0, function (x, idx) {});
   *  list.each([0, 1], function (x, y, idx) {});
   *  list.each(function (idx) {})
   */
  DataStore.prototype.each = function (dims, cb) {
    if (!this._count) {
      return;
    }
    var dimSize = dims.length;
    var chunks = this._chunks;
    for (var i = 0, len = this.count(); i < len; i++) {
      var rawIdx = this.getRawIndex(i);
      // Simple optimization
      switch (dimSize) {
        case 0:
          cb(i);
          break;
        case 1:
          cb(chunks[dims[0]][rawIdx], i);
          break;
        case 2:
          cb(chunks[dims[0]][rawIdx], chunks[dims[1]][rawIdx], i);
          break;
        default:
          var k = 0;
          var value = [];
          for (; k < dimSize; k++) {
            value[k] = chunks[dims[k]][rawIdx];
          }
          // Index
          value[k] = i;
          cb.apply(null, value);
      }
    }
  };
  DataStore.prototype.getDataExtent = function (dim, filter) {
    // Make sure use concrete dim as cache name.
    var dimData = this._chunks[dim];
    var initialExtent = (0,_util_model_js__rspack_import_3.initExtentForUnion)();
    if (!dimData) {
      return initialExtent;
    }
    // Make more strict checkings to ensure hitting cache.
    var currEnd = this.count();
    // Consider the most cases when using data zoom, `getDataExtent`
    // happened before filtering. We cache raw extent, which is not
    // necessary to be cleared and recalculated when restore data.
    var useRaw = !this._indices && !filter;
    if (useRaw) {
      return this._rawExtent[dim].slice();
    }
    // NOTE:
    //  - In logarithm axis, zero should be excluded, therefore the `extent[0]` should be less or equal
    //    than the min positive data item, which requires the special handling here.
    //  - "Filter non-positive values for logarithm axis" can also be implemented in a data processor
    //    but that requires more complicated code to not break all streams under the current architecture,
    //    therefore we simply implement it here.
    //  - Performance is sensitive for large data, therefore inline filters rather than cb is used here.
    var thisExtent = this._extent;
    var dimExtentRecord = thisExtent[dim] || (thisExtent[dim] = {});
    var filterParsed = (0,_helper_dataValueHelper_js__rspack_import_5.parseSanitizationFilter)(filter);
    var filterKey = filterParsed.key;
    var dimExtent = dimExtentRecord[filterKey];
    if (dimExtent) {
      return dimExtent.slice();
    }
    var min = initialExtent[0];
    var max = initialExtent[1];
    for (var i = 0; i < currEnd; i++) {
      // NOTICE: Manually inline some code for performance of large data.
      var rawIdx = this.getRawIndex(i);
      var value = dimData[rawIdx];
      // NOTE: in most cases, filter does not exist.
      if (!filter || (0,_helper_dataValueHelper_js__rspack_import_5.passesSanitizationFilter)(filterParsed, value)) {
        if (value < min) {
          min = value;
        }
        if (value > max) {
          max = value;
        }
      }
    }
    return dimExtentRecord[filterKey] = [min, max];
  };
  /**
   * Get raw data item
   */
  DataStore.prototype.getRawDataItem = function (idx) {
    var rawIdx = this.getRawIndex(idx);
    if (!this._provider.persistent) {
      var val = [];
      var chunks = this._chunks;
      for (var i = 0; i < chunks.length; i++) {
        val.push(chunks[i][rawIdx]);
      }
      return val;
    } else {
      return this._provider.getItem(rawIdx);
    }
  };
  /**
   * Clone shallow.
   *
   * @param clonedDims Determine which dims to clone. Will share the data if not specified.
   */
  DataStore.prototype.clone = function (clonedDims, ignoreIndices) {
    var target = new DataStore();
    var chunks = this._chunks;
    var clonedDimsMap = clonedDims && (0,zrender_lib_core_util_js__rspack_import_1.reduce)(clonedDims, function (obj, dimIdx) {
      obj[dimIdx] = true;
      return obj;
    }, {});
    if (clonedDimsMap) {
      for (var i = 0; i < chunks.length; i++) {
        // Not clone if dim is not picked.
        target._chunks[i] = !clonedDimsMap[i] ? chunks[i] : cloneChunk(chunks[i]);
      }
    } else {
      target._chunks = chunks;
    }
    this._copyCommonProps(target);
    if (!ignoreIndices) {
      target._indices = this._cloneIndices();
    }
    target._updateGetRawIdx();
    return target;
  };
  DataStore.prototype._copyCommonProps = function (target) {
    target._count = this._count;
    target._rawCount = this._rawCount;
    target._provider = this._provider;
    target._dimensions = this._dimensions;
    target._extent = (0,zrender_lib_core_util_js__rspack_import_1.clone)(this._extent);
    target._rawExtent = (0,zrender_lib_core_util_js__rspack_import_1.clone)(this._rawExtent);
  };
  DataStore.prototype._cloneIndices = function () {
    if (this._indices) {
      var Ctor = this._indices.constructor;
      var indices = void 0;
      if (Ctor === Array) {
        var thisCount = this._indices.length;
        indices = new Ctor(thisCount);
        for (var i = 0; i < thisCount; i++) {
          indices[i] = this._indices[i];
        }
      } else {
        indices = new Ctor(this._indices);
      }
      return indices;
    }
    return null;
  };
  DataStore.prototype._getRawIdxIdentity = function (idx) {
    return idx;
  };
  DataStore.prototype._getRawIdx = function (idx) {
    if (idx < this._count && idx >= 0) {
      return this._indices[idx];
    }
    return -1;
  };
  DataStore.prototype._updateGetRawIdx = function () {
    this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
  };
  DataStore.internalField = function () {
    function getDimValueSimply(dataItem, property, dataIndex, dimIndex) {
      return (0,_helper_dataValueHelper_js__rspack_import_5.parseDataValue)(dataItem[dimIndex], this._dimensions[dimIndex]);
    }
    defaultDimValueGetters = {
      arrayRows: getDimValueSimply,
      objectRows: function (dataItem, property, dataIndex, dimIndex) {
        return (0,_helper_dataValueHelper_js__rspack_import_5.parseDataValue)(dataItem[property], this._dimensions[dimIndex]);
      },
      keyedColumns: getDimValueSimply,
      original: function (dataItem, property, dataIndex, dimIndex) {
        // Performance sensitive, do not use modelUtil.getDataItemValue.
        // If dataItem is an plain object with no value field, the let `value`
        // will be assigned with the object, but it will be tread correctly
        // in the `convertValue`.
        var value = dataItem && (dataItem.value == null ? dataItem : dataItem.value);
        return (0,_helper_dataValueHelper_js__rspack_import_5.parseDataValue)(value instanceof Array ? value[dimIndex]
        // If value is a single number or something else not array.
        : value, this._dimensions[dimIndex]);
      },
      typedArray: function (dataItem, property, dataIndex, dimIndex) {
        return dataItem[dimIndex];
      }
    };
  }();
  return DataStore;
}();
/* export default */ __webpack_exports__["default"] = (DataStore);
__webpack_require__.d(__webpack_exports__, {
}, {
  CtorFloat64Array: CtorFloat64Array,
  CtorInt32Array: CtorInt32Array,
  CtorUint16Array: CtorUint16Array,
  CtorUint32Array: CtorUint32Array
});


}),
62864: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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

// id may be function name of Object, add a prefix to avoid this problem.
function generateNodeKey(id) {
  return '_EC_' + id;
}
var Graph = /** @class */function () {
  function Graph(directed) {
    this.type = 'graph';
    this.nodes = [];
    this.edges = [];
    this._nodesMap = {};
    /**
     * @type {Object.<string, module:echarts/data/Graph.Edge>}
     * @private
     */
    this._edgesMap = {};
    this._directed = directed || false;
  }
  /**
   * If is directed graph
   */
  Graph.prototype.isDirected = function () {
    return this._directed;
  };
  ;
  /**
   * Add a new node
   */
  Graph.prototype.addNode = function (id, dataIndex) {
    id = id == null ? '' + dataIndex : '' + id;
    var nodesMap = this._nodesMap;
    if (nodesMap[generateNodeKey(id)]) {
      if (false) {}
      return;
    }
    var node = new GraphNode(id, dataIndex);
    node.hostGraph = this;
    this.nodes.push(node);
    nodesMap[generateNodeKey(id)] = node;
    return node;
  };
  ;
  /**
   * Get node by data index
   */
  Graph.prototype.getNodeByIndex = function (dataIndex) {
    var rawIdx = this.data.getRawIndex(dataIndex);
    return this.nodes[rawIdx];
  };
  ;
  /**
   * Get node by id
   */
  Graph.prototype.getNodeById = function (id) {
    return this._nodesMap[generateNodeKey(id)];
  };
  ;
  /**
   * Add a new edge
   */
  Graph.prototype.addEdge = function (n1, n2, dataIndex) {
    var nodesMap = this._nodesMap;
    var edgesMap = this._edgesMap;
    // PENDING
    if (zrender_lib_core_util_js__rspack_import_0.isNumber(n1)) {
      n1 = this.nodes[n1];
    }
    if (zrender_lib_core_util_js__rspack_import_0.isNumber(n2)) {
      n2 = this.nodes[n2];
    }
    if (!(n1 instanceof GraphNode)) {
      n1 = nodesMap[generateNodeKey(n1)];
    }
    if (!(n2 instanceof GraphNode)) {
      n2 = nodesMap[generateNodeKey(n2)];
    }
    if (!n1 || !n2) {
      return;
    }
    var key = n1.id + '-' + n2.id;
    var edge = new GraphEdge(n1, n2, dataIndex);
    edge.hostGraph = this;
    if (this._directed) {
      n1.outEdges.push(edge);
      n2.inEdges.push(edge);
    }
    n1.edges.push(edge);
    if (n1 !== n2) {
      n2.edges.push(edge);
    }
    this.edges.push(edge);
    edgesMap[key] = edge;
    return edge;
  };
  ;
  /**
   * Get edge by data index
   */
  Graph.prototype.getEdgeByIndex = function (dataIndex) {
    var rawIdx = this.edgeData.getRawIndex(dataIndex);
    return this.edges[rawIdx];
  };
  ;
  /**
   * Get edge by two linked nodes
   */
  Graph.prototype.getEdge = function (n1, n2) {
    if (n1 instanceof GraphNode) {
      n1 = n1.id;
    }
    if (n2 instanceof GraphNode) {
      n2 = n2.id;
    }
    var edgesMap = this._edgesMap;
    if (this._directed) {
      return edgesMap[n1 + '-' + n2];
    } else {
      return edgesMap[n1 + '-' + n2] || edgesMap[n2 + '-' + n1];
    }
  };
  ;
  /**
   * Iterate all nodes
   */
  Graph.prototype.eachNode = function (cb, context) {
    var nodes = this.nodes;
    var len = nodes.length;
    for (var i = 0; i < len; i++) {
      if (nodes[i].dataIndex >= 0) {
        cb.call(context, nodes[i], i);
      }
    }
  };
  ;
  /**
   * Iterate all edges
   */
  Graph.prototype.eachEdge = function (cb, context) {
    var edges = this.edges;
    var len = edges.length;
    for (var i = 0; i < len; i++) {
      if (edges[i].dataIndex >= 0 && edges[i].node1.dataIndex >= 0 && edges[i].node2.dataIndex >= 0) {
        cb.call(context, edges[i], i);
      }
    }
  };
  ;
  /**
   * Breadth first traverse
   * Return true to stop traversing
   */
  Graph.prototype.breadthFirstTraverse = function (cb, startNode, direction, context) {
    if (!(startNode instanceof GraphNode)) {
      startNode = this._nodesMap[generateNodeKey(startNode)];
    }
    if (!startNode) {
      return;
    }
    var edgeType = direction === 'out' ? 'outEdges' : direction === 'in' ? 'inEdges' : 'edges';
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].__visited = false;
    }
    if (cb.call(context, startNode, null)) {
      return;
    }
    var queue = [startNode];
    while (queue.length) {
      var currentNode = queue.shift();
      var edges = currentNode[edgeType];
      for (var i = 0; i < edges.length; i++) {
        var e = edges[i];
        var otherNode = e.node1 === currentNode ? e.node2 : e.node1;
        if (!otherNode.__visited) {
          if (cb.call(context, otherNode, currentNode)) {
            // Stop traversing
            return;
          }
          queue.push(otherNode);
          otherNode.__visited = true;
        }
      }
    }
  };
  ;
  // TODO
  // depthFirstTraverse(
  //     cb, startNode, direction, context
  // ) {
  // };
  // Filter update
  Graph.prototype.update = function () {
    var data = this.data;
    var edgeData = this.edgeData;
    var nodes = this.nodes;
    var edges = this.edges;
    for (var i = 0, len = nodes.length; i < len; i++) {
      nodes[i].dataIndex = -1;
    }
    for (var i = 0, len = data.count(); i < len; i++) {
      nodes[data.getRawIndex(i)].dataIndex = i;
    }
    edgeData.filterSelf(function (idx) {
      var edge = edges[edgeData.getRawIndex(idx)];
      return edge.node1.dataIndex >= 0 && edge.node2.dataIndex >= 0;
    });
    // Update edge
    for (var i = 0, len = edges.length; i < len; i++) {
      edges[i].dataIndex = -1;
    }
    for (var i = 0, len = edgeData.count(); i < len; i++) {
      edges[edgeData.getRawIndex(i)].dataIndex = i;
    }
  };
  ;
  /**
   * @return {module:echarts/data/Graph}
   */
  Graph.prototype.clone = function () {
    var graph = new Graph(this._directed);
    var nodes = this.nodes;
    var edges = this.edges;
    for (var i = 0; i < nodes.length; i++) {
      graph.addNode(nodes[i].id, nodes[i].dataIndex);
    }
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      graph.addEdge(e.node1.id, e.node2.id, e.dataIndex);
    }
    return graph;
  };
  ;
  return Graph;
}();
var GraphNode = /** @class */function () {
  function GraphNode(id, dataIndex) {
    this.inEdges = [];
    this.outEdges = [];
    this.edges = [];
    this.dataIndex = -1;
    this.id = id == null ? '' : id;
    this.dataIndex = dataIndex == null ? -1 : dataIndex;
  }
  /**
   * @return {number}
   */
  GraphNode.prototype.degree = function () {
    return this.edges.length;
  };
  /**
   * @return {number}
   */
  GraphNode.prototype.inDegree = function () {
    return this.inEdges.length;
  };
  /**
  * @return {number}
  */
  GraphNode.prototype.outDegree = function () {
    return this.outEdges.length;
  };
  GraphNode.prototype.getModel = function (path) {
    if (this.dataIndex < 0) {
      return;
    }
    var graph = this.hostGraph;
    var itemModel = graph.data.getItemModel(this.dataIndex);
    return itemModel.getModel(path);
  };
  GraphNode.prototype.getAdjacentDataIndices = function () {
    var dataIndices = {
      edge: [],
      node: []
    };
    for (var i = 0; i < this.edges.length; i++) {
      var adjacentEdge = this.edges[i];
      if (adjacentEdge.dataIndex < 0) {
        continue;
      }
      dataIndices.edge.push(adjacentEdge.dataIndex);
      dataIndices.node.push(adjacentEdge.node1.dataIndex, adjacentEdge.node2.dataIndex);
    }
    return dataIndices;
  };
  GraphNode.prototype.getTrajectoryDataIndices = function () {
    var connectedEdgesMap = zrender_lib_core_util_js__rspack_import_0.createHashMap();
    var connectedNodesMap = zrender_lib_core_util_js__rspack_import_0.createHashMap();
    for (var i = 0, len = this.edges.length; i < len; i++) {
      var adjacentEdge = this.edges[i];
      if (adjacentEdge.dataIndex < 0) {
        continue;
      }
      connectedEdgesMap.set(adjacentEdge.dataIndex, true);
      var sourceNodesQueue = [adjacentEdge.node1];
      var targetNodesQueue = [adjacentEdge.node2];
      var nodeIteratorIndex = 0;
      while (nodeIteratorIndex < sourceNodesQueue.length) {
        var sourceNode = sourceNodesQueue[nodeIteratorIndex];
        nodeIteratorIndex++;
        connectedNodesMap.set(sourceNode.dataIndex, true);
        var sourceNodeInEdges = sourceNode.inEdges;
        for (var j = 0, len_1 = sourceNodeInEdges.length, inEdge = void 0, inEdgeDataIndex = void 0; j < len_1; j++) {
          inEdge = sourceNodeInEdges[j];
          inEdgeDataIndex = inEdge.dataIndex;
          if (inEdgeDataIndex >= 0 && !connectedEdgesMap.hasKey(inEdgeDataIndex)) {
            connectedEdgesMap.set(inEdgeDataIndex, true);
            sourceNodesQueue.push(inEdge.node1);
          }
        }
      }
      nodeIteratorIndex = 0;
      while (nodeIteratorIndex < targetNodesQueue.length) {
        var targetNode = targetNodesQueue[nodeIteratorIndex];
        nodeIteratorIndex++;
        connectedNodesMap.set(targetNode.dataIndex, true);
        var targetNodeOutEdges = targetNode.outEdges;
        for (var j = 0, len_2 = targetNodeOutEdges.length, outEdge = void 0, outEdgeDataIndex = void 0; j < len_2; j++) {
          outEdge = targetNodeOutEdges[j];
          outEdgeDataIndex = outEdge.dataIndex;
          if (outEdgeDataIndex >= 0 && !connectedEdgesMap.hasKey(outEdgeDataIndex)) {
            connectedEdgesMap.set(outEdgeDataIndex, true);
            targetNodesQueue.push(outEdge.node2);
          }
        }
      }
    }
    return {
      edge: connectedEdgesMap.keys(),
      node: connectedNodesMap.keys()
    };
  };
  return GraphNode;
}();
var GraphEdge = /** @class */function () {
  function GraphEdge(n1, n2, dataIndex) {
    this.dataIndex = -1;
    this.node1 = n1;
    this.node2 = n2;
    this.dataIndex = dataIndex == null ? -1 : dataIndex;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GraphEdge.prototype.getModel = function (path) {
    if (this.dataIndex < 0) {
      return;
    }
    var graph = this.hostGraph;
    var itemModel = graph.edgeData.getItemModel(this.dataIndex);
    return itemModel.getModel(path);
  };
  GraphEdge.prototype.getAdjacentDataIndices = function () {
    return {
      edge: [this.dataIndex],
      node: [this.node1.dataIndex, this.node2.dataIndex]
    };
  };
  GraphEdge.prototype.getTrajectoryDataIndices = function () {
    var connectedEdgesMap = zrender_lib_core_util_js__rspack_import_0.createHashMap();
    var connectedNodesMap = zrender_lib_core_util_js__rspack_import_0.createHashMap();
    connectedEdgesMap.set(this.dataIndex, true);
    var sourceNodes = [this.node1];
    var targetNodes = [this.node2];
    var nodeIteratorIndex = 0;
    while (nodeIteratorIndex < sourceNodes.length) {
      var sourceNode = sourceNodes[nodeIteratorIndex];
      nodeIteratorIndex++;
      connectedNodesMap.set(sourceNode.dataIndex, true);
      var sourceNodeInEdges = sourceNode.inEdges;
      for (var j = 0, len = sourceNodeInEdges.length, inEdge = void 0, inEdgeDataIndex = void 0; j < len; j++) {
        inEdge = sourceNode.inEdges[j];
        inEdgeDataIndex = inEdge.dataIndex;
        if (inEdgeDataIndex >= 0 && !connectedEdgesMap.hasKey(inEdgeDataIndex)) {
          connectedEdgesMap.set(inEdgeDataIndex, true);
          sourceNodes.push(inEdge.node1);
        }
      }
    }
    nodeIteratorIndex = 0;
    while (nodeIteratorIndex < targetNodes.length) {
      var targetNode = targetNodes[nodeIteratorIndex];
      nodeIteratorIndex++;
      connectedNodesMap.set(targetNode.dataIndex, true);
      var targetNodeOutEdges = targetNode.outEdges;
      for (var j = 0, len = targetNodeOutEdges.length, outEdge = void 0, outEdgeDataIndex = void 0; j < len; j++) {
        outEdge = targetNode.outEdges[j];
        outEdgeDataIndex = outEdge.dataIndex;
        if (outEdgeDataIndex >= 0 && !connectedEdgesMap.hasKey(outEdgeDataIndex)) {
          connectedEdgesMap.set(outEdgeDataIndex, true);
          targetNodes.push(outEdge.node2);
        }
      }
    }
    return {
      edge: connectedEdgesMap.keys(),
      node: connectedNodesMap.keys()
    };
  };
  return GraphEdge;
}();
function createGraphDataProxyMixin(hostName, dataName) {
  return {
    /**
     * @param Default 'value'. can be 'a', 'b', 'c', 'd', 'e'.
     */
    getValue: function (dimension) {
      var data = this[hostName][dataName];
      return data.getStore().get(data.getDimensionIndex(dimension || 'value'), this.dataIndex);
    },
    // TODO: TYPE stricter type.
    setVisual: function (key, value) {
      this.dataIndex >= 0 && this[hostName][dataName].setItemVisual(this.dataIndex, key, value);
    },
    getVisual: function (key) {
      return this[hostName][dataName].getItemVisual(this.dataIndex, key);
    },
    setLayout: function (layout, merge) {
      this.dataIndex >= 0 && this[hostName][dataName].setItemLayout(this.dataIndex, layout, merge);
    },
    getLayout: function () {
      return this[hostName][dataName].getItemLayout(this.dataIndex);
    },
    getGraphicEl: function () {
      return this[hostName][dataName].getItemGraphicEl(this.dataIndex);
    },
    getRawIndex: function () {
      return this[hostName][dataName].getRawIndex(this.dataIndex);
    }
  };
}
;
;
;
zrender_lib_core_util_js__rspack_import_0.mixin(GraphNode, createGraphDataProxyMixin('hostGraph', 'data'));
zrender_lib_core_util_js__rspack_import_0.mixin(GraphEdge, createGraphDataProxyMixin('hostGraph', 'edgeData'));
/* export default */ __webpack_exports__["default"] = (Graph);

__webpack_require__.d(__webpack_exports__, {
}, {
  GraphEdge: GraphEdge,
  GraphNode: GraphNode
});


}),
32536: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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

var uidBase = 0;
var OrdinalMeta = /** @class */function () {
  /**
   * PENDING - Regarding forcibly converting to string:
   *  In the early days, the underlying hash map impl used JS plain object and converted the key to
   *  string; later in https://github.com/ecomfe/zrender/pull/966 it was changed to a JS Map (in supported
   *  platforms), which does not require string keys. But consider any input that `scale/Ordinal['parse']`
   *  is involved, a number input represents an `OrdinalNumber` (i.e., an index), and affect the query
   *  behavior:
   *    - If forcbily converting to string:
   *      pros: users can use numeric string (such as, '123') to query the raw data (123), tho it's probably
   *      still confusing.
   *      cons: NaN/null/undefined in data will be equals to 'NaN'/'null'/'undefined', if simply using
   *      `val + ''` to convert them, like currently `getName` does.
   *    - Otherwise:
   *      pros: see NaN/null/undefined case above.
   *      cons: users cannot query the raw data (123) any more.
   *  There are two inconsistent behaviors in the current impl:
   *    - Force conversion is applied on the case `xAxis{data: ['aaa', 'bbb', ...]}`,
   *      but no conversion applied to the case `xAxis{data: [{value: 'aaa'}, ...]}` and
   *      the case `dataset: {source: [['aaa', 123], ['bbb', 234], ...]}`.
   *    - behaves differently according to whether JS Map is supported (the polyfill is simply using JS
   *      plain object) (tho it seems rare platform that do not support it).
   *  Since there's no sufficient good solution to offset cost of the breaking change, we preserve the
   *  current behavior, until real issues is reported.
   */
  function OrdinalMeta(opt) {
    this.categories = opt.categories || [];
    this._needCollect = opt.needCollect;
    this._deduplication = opt.deduplication;
    this.uid = ++uidBase;
    this._onCollect = opt.onCollect;
  }
  OrdinalMeta.createByAxisModel = function (axisModel) {
    var option = axisModel.option;
    var data = option.data;
    var categories = data && (0,zrender_lib_core_util_js__rspack_import_0.map)(data, getName);
    return new OrdinalMeta({
      categories: categories,
      needCollect: !categories,
      // deduplication is default in axis.
      deduplication: option.dedplication !== false
    });
  };
  ;
  OrdinalMeta.prototype.getOrdinal = function (category) {
    return this._getOrCreateMap().get(category);
  };
  /**
   * @return The ordinal. If not found, return NaN.
   */
  OrdinalMeta.prototype.parseAndCollect = function (category) {
    var index;
    var needCollect = this._needCollect;
    // The value of category dim can be the index of the given category set.
    // This feature is only supported when !needCollect, because we should
    // consider a common case: a value is 2017, which is a number but is
    // expected to be tread as a category. This case usually happen in dataset,
    // where it happent to be no need of the index feature.
    if (!(0,zrender_lib_core_util_js__rspack_import_0.isString)(category) && !needCollect) {
      return category;
    }
    // Optimize for the scenario:
    // category is ['2012-01-01', '2012-01-02', ...], where the input
    // data has been ensured not duplicate and is large data.
    // Notice, if a dataset dimension provide categroies, usually echarts
    // should remove duplication except user tell echarts dont do that
    // (set axis.deduplication = false), because echarts do not know whether
    // the values in the category dimension has duplication (consider the
    // parallel-aqi example)
    if (needCollect && !this._deduplication) {
      index = this.categories.length;
      this.categories[index] = category;
      this._onCollect && this._onCollect(category, index);
      return index;
    }
    var map = this._getOrCreateMap();
    index = map.get(category);
    if (index == null) {
      if (needCollect) {
        index = this.categories.length;
        this.categories[index] = category;
        map.set(category, index);
        this._onCollect && this._onCollect(category, index);
      } else {
        index = NaN;
      }
    }
    return index;
  };
  // Consider big data, do not create map until needed.
  OrdinalMeta.prototype._getOrCreateMap = function () {
    return this._map || (this._map = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)(this.categories));
  };
  return OrdinalMeta;
}();
function getName(obj) {
  if ((0,zrender_lib_core_util_js__rspack_import_0.isObject)(obj) && obj.value != null) {
    return obj.value;
  } else {
    return obj + '';
  }
}
/* export default */ __webpack_exports__["default"] = (OrdinalMeta);

}),
24179: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _model_Model_js__rspack_import_9 = __webpack_require__(98899);
/* import */ var _DataDiffer_js__rspack_import_10 = __webpack_require__(75930);
/* import */ var _helper_dataProvider_js__rspack_import_5 = __webpack_require__(13988);
/* import */ var _helper_dimensionHelper_js__rspack_import_6 = __webpack_require__(59985);
/* import */ var _SeriesDimensionDefine_js__rspack_import_2 = __webpack_require__(2088);
/* import */ var _util_types_js__rspack_import_7 = __webpack_require__(40333);
/* import */ var _util_model_js__rspack_import_8 = __webpack_require__(53781);
/* import */ var _util_innerStore_js__rspack_import_11 = __webpack_require__(63655);
/* import */ var _Source_js__rspack_import_4 = __webpack_require__(17043);
/* import */ var _DataStore_js__rspack_import_3 = __webpack_require__(93349);
/* import */ var _helper_SeriesDataSchema_js__rspack_import_1 = __webpack_require__(23619);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/* global Int32Array */












var isObject = zrender_lib_core_util_js__rspack_import_0.isObject;
var map = zrender_lib_core_util_js__rspack_import_0.map;
var CtorInt32Array = typeof Int32Array === 'undefined' ? Array : Int32Array;
// Use prefix to avoid index to be the same as otherIdList[idx],
// which will cause weird update animation.
var ID_PREFIX = 'e\0\0';
var INDEX_NOT_FOUND = -1;
// type SeriesDimensionIndex = DimensionIndex;
var TRANSFERABLE_PROPERTIES = ['hasItemOption', '_nameList', '_idList', '_invertedIndicesMap', '_dimSummary', 'userOutput', '_rawData', '_dimValueGetter', '_nameDimIdx', '_idDimIdx', '_nameRepeatCount'];
var CLONE_PROPERTIES = ['_approximateExtent'];
// -----------------------------
// Internal method declarations:
// -----------------------------
var prepareInvertedIndex;
var getId;
var getIdNameFromStore;
var normalizeDimensions;
var transferProperties;
var cloneListForMapAndSample;
var makeIdFromName;
var SeriesData = /** @class */function () {
  /**
   * @param dimensionsInput.dimensions
   *        For example, ['someDimName', {name: 'someDimName', type: 'someDimType'}, ...].
   *        Dimensions should be concrete names like x, y, z, lng, lat, angle, radius
   */
  function SeriesData(dimensionsInput, hostModel) {
    this.type = 'list';
    this._dimOmitted = false;
    this._nameList = [];
    this._idList = [];
    // Models of data option is stored sparse for optimizing memory cost
    // Never used yet (not used yet).
    // private _optionModels: Model[] = [];
    // Global visual properties after visual coding
    this._visual = {};
    // Global layout properties.
    this._layout = {};
    // Item visual properties after visual coding
    this._itemVisuals = [];
    // Item layout properties after layout
    this._itemLayouts = [];
    // Graphic elements
    this._graphicEls = [];
    // key: dim, value: extent
    this._approximateExtent = {};
    this._calculationInfo = {};
    // Having detected that there is data item is non primitive type
    // (in type `OptionDataItemObject`).
    // Like `data: [ { value: xx, itemStyle: {...} }, ...]`
    // At present it only happen in `SOURCE_FORMAT_ORIGINAL`.
    this.hasItemOption = false;
    // Methods that create a new list based on this list should be listed here.
    // Notice that those method should `RETURN` the new list.
    this.TRANSFERABLE_METHODS = ['cloneShallow', 'downSample', 'minmaxDownSample', 'lttbDownSample', 'map'];
    // Methods that change indices of this list should be listed here.
    this.CHANGABLE_METHODS = ['filterSelf', 'selectRange'];
    this.DOWNSAMPLE_METHODS = ['downSample', 'minmaxDownSample', 'lttbDownSample'];
    var dimensions;
    var assignStoreDimIdx = false;
    if ((0,_helper_SeriesDataSchema_js__rspack_import_1.isSeriesDataSchema)(dimensionsInput)) {
      dimensions = dimensionsInput.dimensions;
      this._dimOmitted = dimensionsInput.isDimensionOmitted();
      this._schema = dimensionsInput;
    } else {
      assignStoreDimIdx = true;
      dimensions = dimensionsInput;
    }
    dimensions = dimensions || ['x', 'y'];
    var dimensionInfos = {};
    var dimensionNames = [];
    var invertedIndicesMap = {};
    var needsHasOwn = false;
    var emptyObj = {};
    for (var i = 0; i < dimensions.length; i++) {
      // Use the original dimensions[i], where other flag props may exists.
      var dimInfoInput = dimensions[i];
      var dimensionInfo = zrender_lib_core_util_js__rspack_import_0.isString(dimInfoInput) ? new _SeriesDimensionDefine_js__rspack_import_2["default"]({
        name: dimInfoInput
      }) : !(dimInfoInput instanceof _SeriesDimensionDefine_js__rspack_import_2["default"]) ? new _SeriesDimensionDefine_js__rspack_import_2["default"](dimInfoInput) : dimInfoInput;
      var dimensionName = dimensionInfo.name;
      dimensionInfo.type = dimensionInfo.type || 'float';
      if (!dimensionInfo.coordDim) {
        dimensionInfo.coordDim = dimensionName;
        dimensionInfo.coordDimIndex = 0;
      }
      var otherDims = dimensionInfo.otherDims = dimensionInfo.otherDims || {};
      dimensionNames.push(dimensionName);
      dimensionInfos[dimensionName] = dimensionInfo;
      if (emptyObj[dimensionName] != null) {
        needsHasOwn = true;
      }
      if (dimensionInfo.createInvertedIndices) {
        invertedIndicesMap[dimensionName] = [];
      }
      if (false) {}
      if (assignStoreDimIdx) {
        dimensionInfo.storeDimIndex = i;
      }
      if (otherDims.itemName === 0) {
        this._nameDimIdx = dimensionInfo.storeDimIndex;
      }
      if (otherDims.itemId === 0) {
        this._idDimIdx = dimensionInfo.storeDimIndex;
      }
    }
    this.dimensions = dimensionNames;
    this._dimInfos = dimensionInfos;
    this._initGetDimensionInfo(needsHasOwn);
    this.hostModel = hostModel;
    this._invertedIndicesMap = invertedIndicesMap;
    if (this._dimOmitted) {
      var dimIdxToName_1 = this._dimIdxToName = zrender_lib_core_util_js__rspack_import_0.createHashMap();
      zrender_lib_core_util_js__rspack_import_0.each(dimensionNames, function (dimName) {
        dimIdxToName_1.set(dimensionInfos[dimName].storeDimIndex, dimName);
      });
    }
  }
  /**
   *
   * Get concrete dimension name by dimension name or dimension index.
   * If input a dimension name, do not validate whether the dimension name exits.
   *
   * @caution
   * @param dim Must make sure the dimension is `SeriesDimensionLoose`.
   * Because only those dimensions will have auto-generated dimension names if not
   * have a user-specified name, and other dimensions will get a return of null/undefined.
   *
   * @notice Because of this reason, should better use `getDimensionIndex` instead, for examples:
   * ```js
   * const val = data.getStore().get(data.getDimensionIndex(dim), dataIdx);
   * ```
   *
   * @return Concrete dim name.
   */
  SeriesData.prototype.getDimension = function (dim) {
    var dimIdx = this._recognizeDimIndex(dim);
    if (dimIdx == null) {
      return dim;
    }
    dimIdx = dim;
    if (!this._dimOmitted) {
      return this.dimensions[dimIdx];
    }
    // Retrieve from series dimension definition because it probably contains
    // generated dimension name (like 'x', 'y').
    var dimName = this._dimIdxToName.get(dimIdx);
    if (dimName != null) {
      return dimName;
    }
    var sourceDimDef = this._schema.getSourceDimension(dimIdx);
    if (sourceDimDef) {
      return sourceDimDef.name;
    }
  };
  /**
   * Get dimension index in data store. Return -1 if not found.
   * Can be used to index value from getRawValue.
   */
  SeriesData.prototype.getDimensionIndex = function (dim) {
    var dimIdx = this._recognizeDimIndex(dim);
    if (dimIdx != null) {
      return dimIdx;
    }
    if (dim == null) {
      return -1;
    }
    var dimInfo = this._getDimInfo(dim);
    return dimInfo ? dimInfo.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(dim) : -1;
  };
  /**
   * The meanings of the input parameter `dim`:
   *
   * + If dim is a number (e.g., `1`), it means the index of the dimension.
   *   For example, `getDimension(0)` will return 'x' or 'lng' or 'radius'.
   * + If dim is a number-like string (e.g., `"1"`):
   *     + If there is the same concrete dim name defined in `series.dimensions` or `dataset.dimensions`,
   *        it means that concrete name.
   *     + If not, it will be converted to a number, which means the index of the dimension.
   *        (why? because of the backward compatibility. We have been tolerating number-like string in
   *        dimension setting, although now it seems that it is not a good idea.)
   *     For example, `visualMap[i].dimension: "1"` is the same meaning as `visualMap[i].dimension: 1`,
   *     if no dimension name is defined as `"1"`.
   * + If dim is a not-number-like string, it means the concrete dim name.
   *   For example, it can be be default name `"x"`, `"y"`, `"z"`, `"lng"`, `"lat"`, `"angle"`, `"radius"`,
   *   or customized in `dimensions` property of option like `"age"`.
   *
   * @return recognized `DimensionIndex`. Otherwise return null/undefined (means that dim is `DimensionName`).
   */
  SeriesData.prototype._recognizeDimIndex = function (dim) {
    if (zrender_lib_core_util_js__rspack_import_0.isNumber(dim)
    // If being a number-like string but not being defined as a dimension name.
    || dim != null && !isNaN(dim) && !this._getDimInfo(dim) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(dim) < 0)) {
      return +dim;
    }
  };
  SeriesData.prototype._getStoreDimIndex = function (dim) {
    var dimIdx = this.getDimensionIndex(dim);
    if (false) {}
    return dimIdx;
  };
  /**
   * Get type and calculation info of particular dimension
   * @param dim
   *        Dimension can be concrete names like x, y, z, lng, lat, angle, radius
   *        Or a ordinal number. For example getDimensionInfo(0) will return 'x' or 'lng' or 'radius'
   */
  SeriesData.prototype.getDimensionInfo = function (dim) {
    // Do not clone, because there may be categories in dimInfo.
    return this._getDimInfo(this.getDimension(dim));
  };
  SeriesData.prototype._initGetDimensionInfo = function (needsHasOwn) {
    var dimensionInfos = this._dimInfos;
    this._getDimInfo = needsHasOwn ? function (dimName) {
      return dimensionInfos.hasOwnProperty(dimName) ? dimensionInfos[dimName] : undefined;
    } : function (dimName) {
      return dimensionInfos[dimName];
    };
  };
  /**
   * concrete dimension name list on coord.
   */
  SeriesData.prototype.getDimensionsOnCoord = function () {
    return this._dimSummary.dataDimsOnCoord.slice();
  };
  SeriesData.prototype.mapDimension = function (coordDim, idx) {
    var dimensionsSummary = this._dimSummary;
    if (idx == null) {
      return dimensionsSummary.encodeFirstDimNotExtra[coordDim];
    }
    var dims = dimensionsSummary.encode[coordDim];
    return dims ? dims[idx] : null;
  };
  SeriesData.prototype.mapDimensionsAll = function (coordDim) {
    var dimensionsSummary = this._dimSummary;
    var dims = dimensionsSummary.encode[coordDim];
    return (dims || []).slice();
  };
  SeriesData.prototype.getStore = function () {
    return this._store;
  };
  /**
   * Initialize from data
   * @param data source or data or data store.
   * @param nameList The name of a datum is used on data diff and
   *        default label/tooltip.
   *        A name can be specified in encode.itemName,
   *        or dataItem.name (only for series option data),
   *        or provided in nameList from outside.
   */
  SeriesData.prototype.initData = function (data, nameList, dimValueGetter) {
    var _this = this;
    var store;
    if (data instanceof _DataStore_js__rspack_import_3["default"]) {
      store = data;
    }
    if (!store) {
      var dimensions = this.dimensions;
      var provider = (0,_Source_js__rspack_import_4.isSourceInstance)(data) || zrender_lib_core_util_js__rspack_import_0.isArrayLike(data) ? new _helper_dataProvider_js__rspack_import_5.DefaultDataProvider(data, dimensions.length) : data;
      store = new _DataStore_js__rspack_import_3["default"]();
      var dimensionInfos = map(dimensions, function (dimName) {
        return {
          type: _this._dimInfos[dimName].type,
          property: dimName
        };
      });
      store.initData(provider, dimensionInfos, dimValueGetter);
    }
    this._store = store;
    // Reset
    this._nameList = (nameList || []).slice();
    this._idList = [];
    this._nameRepeatCount = {};
    this._doInit(0, store.count());
    // Cache summary info for fast visit. See "dimensionHelper".
    // Needs to be initialized after store is prepared.
    this._dimSummary = (0,_helper_dimensionHelper_js__rspack_import_6.summarizeDimensions)(this, this._schema);
    this.userOutput = this._dimSummary.userOutput;
  };
  /**
   * Caution: Can be only called on raw data (before `this._indices` created).
   */
  SeriesData.prototype.appendData = function (data) {
    var range = this._store.appendData(data);
    this._doInit(range[0], range[1]);
  };
  /**
   * Caution: Can be only called on raw data (before `this._indices` created).
   * This method does not modify `rawData` (`dataProvider`), but only
   * add values to store.
   *
   * The final count will be increased by `Math.max(values.length, names.length)`.
   *
   * @param values That is the SourceType: 'arrayRows', like
   *        [
   *            [12, 33, 44],
   *            [NaN, 43, 1],
   *            ['-', 'asdf', 0]
   *        ]
   *        Each item is exactly corresponding to a dimension.
   */
  SeriesData.prototype.appendValues = function (values, names) {
    var _a = this._store.appendValues(values, names && names.length),
      start = _a.start,
      end = _a.end;
    var shouldMakeIdFromName = this._shouldMakeIdFromName();
    this._updateOrdinalMeta();
    if (names) {
      for (var idx = start; idx < end; idx++) {
        var sourceIdx = idx - start;
        this._nameList[idx] = names[sourceIdx];
        if (shouldMakeIdFromName) {
          makeIdFromName(this, idx);
        }
      }
    }
  };
  SeriesData.prototype._updateOrdinalMeta = function () {
    var store = this._store;
    var dimensions = this.dimensions;
    for (var i = 0; i < dimensions.length; i++) {
      var dimInfo = this._dimInfos[dimensions[i]];
      if (dimInfo.ordinalMeta) {
        store.collectOrdinalMeta(dimInfo.storeDimIndex, dimInfo.ordinalMeta);
      }
    }
  };
  SeriesData.prototype._shouldMakeIdFromName = function () {
    var provider = this._store.getProvider();
    return this._idDimIdx == null && provider.getSource().sourceFormat !== _util_types_js__rspack_import_7.SOURCE_FORMAT_TYPED_ARRAY && !provider.fillStorage;
  };
  SeriesData.prototype._doInit = function (start, end) {
    if (start >= end) {
      return;
    }
    var store = this._store;
    var provider = store.getProvider();
    this._updateOrdinalMeta();
    var nameList = this._nameList;
    var idList = this._idList;
    var sourceFormat = provider.getSource().sourceFormat;
    var isFormatOriginal = sourceFormat === _util_types_js__rspack_import_7.SOURCE_FORMAT_ORIGINAL;
    // Each data item is value
    // [1, 2]
    // 2
    // Bar chart, line chart which uses category axis
    // only gives the 'y' value. 'x' value is the indices of category
    // Use a tempValue to normalize the value to be a (x, y) value
    // If dataItem is {name: ...} or {id: ...}, it has highest priority.
    // This kind of ids and names are always stored `_nameList` and `_idList`.
    if (isFormatOriginal && !provider.pure) {
      var sharedDataItem = [];
      for (var idx = start; idx < end; idx++) {
        // NOTICE: Try not to write things into dataItem
        var dataItem = provider.getItem(idx, sharedDataItem);
        if (!this.hasItemOption && (0,_util_model_js__rspack_import_8.isDataItemOption)(dataItem)) {
          this.hasItemOption = true;
        }
        if (dataItem) {
          var itemName = dataItem.name;
          if (nameList[idx] == null && itemName != null) {
            nameList[idx] = (0,_util_model_js__rspack_import_8.convertOptionIdName)(itemName, null);
          }
          var itemId = dataItem.id;
          if (idList[idx] == null && itemId != null) {
            idList[idx] = (0,_util_model_js__rspack_import_8.convertOptionIdName)(itemId, null);
          }
        }
      }
    }
    if (this._shouldMakeIdFromName()) {
      for (var idx = start; idx < end; idx++) {
        makeIdFromName(this, idx);
      }
    }
    prepareInvertedIndex(this);
  };
  /**
   * Optimize for the scenario that data is filtered by a given extent.
   * Consider that if data amount is more than hundreds of thousand,
   * extent calculation will cost more than 10ms and the cache will
   * be erased because of the filtering.
   */
  SeriesData.prototype.getApproximateExtent = function (dim, filter) {
    return this._approximateExtent[dim] || this._store.getDataExtent(this._getStoreDimIndex(dim), filter);
  };
  /**
   * NOTICE: `_approximateExtent` does not support filter. Callers must ensure the input extent
   * to be handled by `scale.sanitizeExtent`.
   *
   * Calculate extent on a filtered data might be time consuming.
   * Approximate extent is only used for: calculate extent of filtered data outside.
   */
  SeriesData.prototype.setApproximateExtent = function (extent, dim) {
    dim = this.getDimension(dim);
    this._approximateExtent[dim] = extent.slice();
  };
  SeriesData.prototype.getCalculationInfo = function (key) {
    return this._calculationInfo[key];
  };
  SeriesData.prototype.setCalculationInfo = function (key, value) {
    isObject(key) ? zrender_lib_core_util_js__rspack_import_0.extend(this._calculationInfo, key) : this._calculationInfo[key] = value;
  };
  /**
   * @return Never be null/undefined. `number` will be converted to string. Because:
   * In most cases, name is used in display, where returning a string is more convenient.
   * In other cases, name is used in query (see `indexOfName`), where we can keep the
   * rule that name `2` equals to name `'2'`.
   */
  SeriesData.prototype.getName = function (idx) {
    var rawIndex = this.getRawIndex(idx);
    var name = this._nameList[rawIndex];
    if (name == null && this._nameDimIdx != null) {
      name = getIdNameFromStore(this, this._nameDimIdx, rawIndex);
    }
    if (name == null) {
      name = '';
    }
    return name;
  };
  SeriesData.prototype._getCategory = function (dimIdx, idx) {
    var ordinal = this._store.get(dimIdx, idx);
    var ordinalMeta = this._store.getOrdinalMeta(dimIdx);
    if (ordinalMeta) {
      return ordinalMeta.categories[ordinal];
    }
    return ordinal;
  };
  /**
   * @return Never null/undefined. `number` will be converted to string. Because:
   * In all cases having encountered at present, id is used in making diff comparison, which
   * are usually based on hash map. We can keep the rule that the internal id are always string
   * (treat `2` is the same as `'2'`) to make the related logic simple.
   */
  SeriesData.prototype.getId = function (idx) {
    return getId(this, this.getRawIndex(idx));
  };
  SeriesData.prototype.count = function () {
    return this._store.count();
  };
  /**
   * Get value. Return NaN if idx is out of range.
   *
   * @notice Should better to use `data.getStore().get(dimIndex, dataIdx)` instead.
   */
  SeriesData.prototype.get = function (dim, idx) {
    var store = this._store;
    var dimInfo = this._dimInfos[dim];
    if (dimInfo) {
      return store.get(dimInfo.storeDimIndex, idx);
    }
  };
  /**
   * @notice Should better to use `data.getStore().getByRawIndex(dimIndex, dataIdx)` instead.
   */
  SeriesData.prototype.getByRawIndex = function (dim, rawIdx) {
    var store = this._store;
    var dimInfo = this._dimInfos[dim];
    if (dimInfo) {
      return store.getByRawIndex(dimInfo.storeDimIndex, rawIdx);
    }
  };
  SeriesData.prototype.getIndices = function () {
    return this._store.getIndices();
  };
  SeriesData.prototype.getDataExtent = function (dim) {
    return this._store.getDataExtent(this._getStoreDimIndex(dim), null);
  };
  SeriesData.prototype.getSum = function (dim) {
    return this._store.getSum(this._getStoreDimIndex(dim));
  };
  SeriesData.prototype.getMedian = function (dim) {
    return this._store.getMedian(this._getStoreDimIndex(dim));
  };
  SeriesData.prototype.getValues = function (dimensions, idx) {
    var _this = this;
    var store = this._store;
    return zrender_lib_core_util_js__rspack_import_0.isArray(dimensions) ? store.getValues(map(dimensions, function (dim) {
      return _this._getStoreDimIndex(dim);
    }), idx) : store.getValues(dimensions);
  };
  /**
   * If value is NaN. Including '-'
   * Only check the coord dimensions.
   */
  SeriesData.prototype.hasValue = function (idx) {
    var dataDimIndicesOnCoord = this._dimSummary.dataDimIndicesOnCoord;
    for (var i = 0, len = dataDimIndicesOnCoord.length; i < len; i++) {
      // Ordinal type originally can be string or number.
      // But when an ordinal type is used on coord, it can
      // not be string but only number. So we can also use isNaN.
      if (isNaN(this._store.get(dataDimIndicesOnCoord[i], idx))) {
        return false;
      }
    }
    return true;
  };
  /**
   * Retrieve the index with given name
   */
  SeriesData.prototype.indexOfName = function (name) {
    for (var i = 0, len = this._store.count(); i < len; i++) {
      if (this.getName(i) === name) {
        return i;
      }
    }
    return -1;
  };
  SeriesData.prototype.getRawIndex = function (idx) {
    return this._store.getRawIndex(idx);
  };
  SeriesData.prototype.indexOfRawIndex = function (rawIndex) {
    return this._store.indexOfRawIndex(rawIndex);
  };
  /**
   * Only support the dimension which inverted index created.
   * Do not support other cases until required.
   * @param dim concrete dim
   * @param value ordinal index
   * @return rawIndex
   */
  SeriesData.prototype.rawIndexOf = function (dim, value) {
    var invertedIndices = dim && this._invertedIndicesMap[dim];
    if (false) {}
    var rawIndex = invertedIndices && invertedIndices[value];
    if (rawIndex == null || isNaN(rawIndex)) {
      return INDEX_NOT_FOUND;
    }
    return rawIndex;
  };
  SeriesData.prototype.each = function (dims, cb, ctx) {
    'use strict';

    if (zrender_lib_core_util_js__rspack_import_0.isFunction(dims)) {
      ctx = cb;
      cb = dims;
      dims = [];
    }
    // ctxCompat just for compat echarts3
    var fCtx = ctx || this;
    var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
    this._store.each(dimIndices, fCtx ? zrender_lib_core_util_js__rspack_import_0.bind(cb, fCtx) : cb);
  };
  SeriesData.prototype.filterSelf = function (dims, cb, ctx) {
    'use strict';

    if (zrender_lib_core_util_js__rspack_import_0.isFunction(dims)) {
      ctx = cb;
      cb = dims;
      dims = [];
    }
    // ctxCompat just for compat echarts3
    var fCtx = ctx || this;
    var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
    this._store = this._store.filter(dimIndices, fCtx ? zrender_lib_core_util_js__rspack_import_0.bind(cb, fCtx) : cb);
    return this;
  };
  /**
   * Select data in range. (For optimization of filter)
   * (Manually inline code, support 5 million data filtering in data zoom.)
   */
  SeriesData.prototype.selectRange = function (range) {
    'use strict';

    var _this = this;
    var innerRange = {};
    var dims = zrender_lib_core_util_js__rspack_import_0.keys(range);
    var dimIndices = [];
    zrender_lib_core_util_js__rspack_import_0.each(dims, function (dim) {
      var dimIdx = _this._getStoreDimIndex(dim);
      innerRange[dimIdx] = range[dim];
      dimIndices.push(dimIdx);
    });
    this._store = this._store.selectRange(innerRange);
    return this;
  };
  /* eslint-enable max-len */
  SeriesData.prototype.mapArray = function (dims, cb, ctx) {
    'use strict';

    if (zrender_lib_core_util_js__rspack_import_0.isFunction(dims)) {
      ctx = cb;
      cb = dims;
      dims = [];
    }
    // ctxCompat just for compat echarts3
    ctx = ctx || this;
    var result = [];
    this.each(dims, function () {
      result.push(cb && cb.apply(this, arguments));
    }, ctx);
    return result;
  };
  SeriesData.prototype.map = function (dims, cb, ctx, ctxCompat) {
    'use strict';

    // ctxCompat just for compat echarts3
    var fCtx = ctx || ctxCompat || this;
    var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
    var list = cloneListForMapAndSample(this);
    list._store = this._store.map(dimIndices, fCtx ? zrender_lib_core_util_js__rspack_import_0.bind(cb, fCtx) : cb);
    return list;
  };
  SeriesData.prototype.modify = function (dims, cb, ctx, ctxCompat) {
    var _this = this;
    // ctxCompat just for compat echarts3
    var fCtx = ctx || ctxCompat || this;
    if (false) {}
    var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
    // If do shallow clone here, if there are too many stacked series,
    // it still cost lots of memory, because `_store.dimensions` are not shared.
    // We should consider there probably be shallow clone happen in each series
    // in consequent filter/map.
    this._store.modify(dimIndices, fCtx ? zrender_lib_core_util_js__rspack_import_0.bind(cb, fCtx) : cb);
  };
  /**
   * Large data down sampling on given dimension
   * @param sampleIndex Sample index for name and id
   */
  SeriesData.prototype.downSample = function (dimension, rate, sampleValue, sampleIndex) {
    var list = cloneListForMapAndSample(this);
    list._store = this._store.downSample(this._getStoreDimIndex(dimension), rate, sampleValue, sampleIndex);
    return list;
  };
  /**
   * Large data down sampling using min-max
   * @param {string} valueDimension
   * @param {number} rate
   */
  SeriesData.prototype.minmaxDownSample = function (valueDimension, rate) {
    var list = cloneListForMapAndSample(this);
    list._store = this._store.minmaxDownSample(this._getStoreDimIndex(valueDimension), rate);
    return list;
  };
  /**
   * Large data down sampling using largest-triangle-three-buckets
   * @param {string} valueDimension
   * @param {number} targetCount
   */
  SeriesData.prototype.lttbDownSample = function (valueDimension, rate) {
    var list = cloneListForMapAndSample(this);
    list._store = this._store.lttbDownSample(this._getStoreDimIndex(valueDimension), rate);
    return list;
  };
  SeriesData.prototype.getRawDataItem = function (idx) {
    return this._store.getRawDataItem(idx);
  };
  /**
   * Get model of one data item.
   */
  // TODO: Type of data item
  SeriesData.prototype.getItemModel = function (idx) {
    var hostModel = this.hostModel;
    var dataItem = this.getRawDataItem(idx);
    return new _model_Model_js__rspack_import_9["default"](dataItem, hostModel, hostModel && hostModel.ecModel);
  };
  /**
   * Create a data differ
   */
  SeriesData.prototype.diff = function (otherList) {
    var thisList = this;
    return new _DataDiffer_js__rspack_import_10["default"](otherList ? otherList.getStore().getIndices() : [], this.getStore().getIndices(), function (idx) {
      return getId(otherList, idx);
    }, function (idx) {
      return getId(thisList, idx);
    });
  };
  /**
   * Get visual property.
   */
  SeriesData.prototype.getVisual = function (key) {
    var visual = this._visual;
    return visual && visual[key];
  };
  SeriesData.prototype.setVisual = function (kvObj, val) {
    this._visual = this._visual || {};
    if (isObject(kvObj)) {
      zrender_lib_core_util_js__rspack_import_0.extend(this._visual, kvObj);
    } else {
      this._visual[kvObj] = val;
    }
  };
  /**
   * Get visual property of single data item
   */
  // eslint-disable-next-line
  SeriesData.prototype.getItemVisual = function (idx, key) {
    var itemVisual = this._itemVisuals[idx];
    var val = itemVisual && itemVisual[key];
    if (val == null) {
      // Use global visual property
      return this.getVisual(key);
    }
    return val;
  };
  /**
   * If exists visual property of single data item
   */
  SeriesData.prototype.hasItemVisual = function () {
    return this._itemVisuals.length > 0;
  };
  /**
   * Make sure itemVisual property is unique
   */
  // TODO: use key to save visual to reduce memory.
  SeriesData.prototype.ensureUniqueItemVisual = function (idx, key) {
    var itemVisuals = this._itemVisuals;
    var itemVisual = itemVisuals[idx];
    if (!itemVisual) {
      itemVisual = itemVisuals[idx] = {};
    }
    var val = itemVisual[key];
    if (val == null) {
      val = this.getVisual(key);
      // TODO Performance?
      if (zrender_lib_core_util_js__rspack_import_0.isArray(val)) {
        val = val.slice();
      } else if (isObject(val)) {
        val = zrender_lib_core_util_js__rspack_import_0.extend({}, val);
      }
      itemVisual[key] = val;
    }
    return val;
  };
  // eslint-disable-next-line
  SeriesData.prototype.setItemVisual = function (idx, key, value) {
    var itemVisual = this._itemVisuals[idx] || {};
    this._itemVisuals[idx] = itemVisual;
    if (isObject(key)) {
      zrender_lib_core_util_js__rspack_import_0.extend(itemVisual, key);
    } else {
      itemVisual[key] = value;
    }
  };
  /**
   * Clear itemVisuals and list visual.
   */
  SeriesData.prototype.clearAllVisual = function () {
    this._visual = {};
    this._itemVisuals = [];
  };
  SeriesData.prototype.setLayout = function (key, val) {
    isObject(key) ? zrender_lib_core_util_js__rspack_import_0.extend(this._layout, key) : this._layout[key] = val;
  };
  /**
   * Get layout property.
   */
  SeriesData.prototype.getLayout = function (key) {
    return this._layout[key];
  };
  /**
   * Get layout of single data item
   */
  SeriesData.prototype.getItemLayout = function (idx) {
    return this._itemLayouts[idx];
  };
  /**
   * Set layout of single data item
   */
  SeriesData.prototype.setItemLayout = function (idx, layout, merge) {
    this._itemLayouts[idx] = merge ? zrender_lib_core_util_js__rspack_import_0.extend(this._itemLayouts[idx] || {}, layout) : layout;
  };
  /**
   * Clear all layout of single data item
   */
  SeriesData.prototype.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  };
  /**
   * Set graphic element relative to data. It can be set as null
   */
  SeriesData.prototype.setItemGraphicEl = function (idx, el) {
    var seriesIndex = this.hostModel && this.hostModel.seriesIndex;
    (0,_util_innerStore_js__rspack_import_11.setCommonECData)(seriesIndex, this.dataType, idx, el);
    this._graphicEls[idx] = el;
  };
  SeriesData.prototype.getItemGraphicEl = function (idx) {
    return this._graphicEls[idx];
  };
  SeriesData.prototype.eachItemGraphicEl = function (cb, context) {
    zrender_lib_core_util_js__rspack_import_0.each(this._graphicEls, function (el, idx) {
      if (el) {
        cb && cb.call(context, el, idx);
      }
    });
  };
  /**
   * Shallow clone a new list except visual and layout properties, and graph elements.
   * New list only change the indices.
   */
  SeriesData.prototype.cloneShallow = function (list) {
    if (!list) {
      list = new SeriesData(this._schema ? this._schema : map(this.dimensions, this._getDimInfo, this), this.hostModel);
    }
    transferProperties(list, this);
    list._store = this._store;
    return list;
  };
  /**
   * Wrap some method to add more feature
   */
  SeriesData.prototype.wrapMethod = function (methodName, injectFunction) {
    var originalMethod = this[methodName];
    if (!zrender_lib_core_util_js__rspack_import_0.isFunction(originalMethod)) {
      return;
    }
    this.__wrappedMethods = this.__wrappedMethods || [];
    this.__wrappedMethods.push(methodName);
    this[methodName] = function () {
      var res = originalMethod.apply(this, arguments);
      return injectFunction.apply(this, [res].concat(zrender_lib_core_util_js__rspack_import_0.slice(arguments)));
    };
  };
  // ----------------------------------------------------------
  // A work around for internal method visiting private member.
  // ----------------------------------------------------------
  SeriesData.internalField = function () {
    prepareInvertedIndex = function (data) {
      var invertedIndicesMap = data._invertedIndicesMap;
      zrender_lib_core_util_js__rspack_import_0.each(invertedIndicesMap, function (invertedIndices, dim) {
        var dimInfo = data._dimInfos[dim];
        // Currently, only dimensions that has ordinalMeta can create inverted indices.
        var ordinalMeta = dimInfo.ordinalMeta;
        var store = data._store;
        if (ordinalMeta) {
          invertedIndices = invertedIndicesMap[dim] = new CtorInt32Array(ordinalMeta.categories.length);
          // The default value of TypedArray is 0. To avoid miss
          // mapping to 0, we should set it as INDEX_NOT_FOUND.
          for (var i = 0; i < invertedIndices.length; i++) {
            invertedIndices[i] = INDEX_NOT_FOUND;
          }
          for (var i = 0; i < store.count(); i++) {
            // Only support the case that all values are distinct.
            invertedIndices[store.get(dimInfo.storeDimIndex, i)] = i;
          }
        }
      });
    };
    getIdNameFromStore = function (data, dimIdx, idx) {
      return (0,_util_model_js__rspack_import_8.convertOptionIdName)(data._getCategory(dimIdx, idx), null);
    };
    /**
     * @see the comment of `List['getId']`.
     */
    getId = function (data, rawIndex) {
      var id = data._idList[rawIndex];
      if (id == null && data._idDimIdx != null) {
        id = getIdNameFromStore(data, data._idDimIdx, rawIndex);
      }
      if (id == null) {
        id = ID_PREFIX + rawIndex;
      }
      return id;
    };
    normalizeDimensions = function (dimensions) {
      if (!zrender_lib_core_util_js__rspack_import_0.isArray(dimensions)) {
        dimensions = dimensions != null ? [dimensions] : [];
      }
      return dimensions;
    };
    /**
     * Data in excludeDimensions is copied, otherwise transferred.
     */
    cloneListForMapAndSample = function (original) {
      var list = new SeriesData(original._schema ? original._schema : map(original.dimensions, original._getDimInfo, original), original.hostModel);
      // FIXME If needs stackedOn, value may already been stacked
      transferProperties(list, original);
      return list;
    };
    transferProperties = function (target, source) {
      zrender_lib_core_util_js__rspack_import_0.each(TRANSFERABLE_PROPERTIES.concat(source.__wrappedMethods || []), function (propName) {
        if (source.hasOwnProperty(propName)) {
          target[propName] = source[propName];
        }
      });
      target.__wrappedMethods = source.__wrappedMethods;
      zrender_lib_core_util_js__rspack_import_0.each(CLONE_PROPERTIES, function (propName) {
        target[propName] = zrender_lib_core_util_js__rspack_import_0.clone(source[propName]);
      });
      target._calculationInfo = zrender_lib_core_util_js__rspack_import_0.extend({}, source._calculationInfo);
    };
    makeIdFromName = function (data, idx) {
      var nameList = data._nameList;
      var idList = data._idList;
      var nameDimIdx = data._nameDimIdx;
      var idDimIdx = data._idDimIdx;
      var name = nameList[idx];
      var id = idList[idx];
      if (name == null && nameDimIdx != null) {
        nameList[idx] = name = getIdNameFromStore(data, nameDimIdx, idx);
      }
      if (id == null && idDimIdx != null) {
        idList[idx] = id = getIdNameFromStore(data, idDimIdx, idx);
      }
      if (id == null && name != null) {
        var nameRepeatCount = data._nameRepeatCount;
        var nmCnt = nameRepeatCount[name] = (nameRepeatCount[name] || 0) + 1;
        id = name;
        if (nmCnt > 1) {
          id += '__ec__' + nmCnt;
        }
        idList[idx] = id;
      }
    };
  }();
  return SeriesData;
}();
/* export default */ __webpack_exports__["default"] = (SeriesData);

}),
2088: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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

var SeriesDimensionDefine = /** @class */function () {
  /**
   * @param opt All of the fields will be shallow copied.
   */
  function SeriesDimensionDefine(opt) {
    /**
     * The term "other" means "other than coord".
     * The format of `otherDims` is:
     * ```js
     * {
     *     tooltip?: number
     *     label?: number
     *     itemName?: number
     *     seriesName?: number
     * }
     * ```
     *
     * A `series.encode` can specified these fields:
     * ```js
     * encode: {
     *     // "3, 1, 5" is the index of data dimension.
     *     tooltip: [3, 1, 5],
     *     label: [0, 3],
     *     ...
     * }
     * ```
     * `otherDims` is the parse result of the `series.encode` above, like:
     * ```js
     * // Suppose the index of this data dimension is `3`.
     * this.otherDims = {
     *     // `3` is at the index `0` of the `encode.tooltip`
     *     tooltip: 0,
     *     // `3` is at the index `1` of the `encode.label`
     *     label: 1
     * };
     * ```
     *
     * This prop should never be `null`/`undefined` after initialized.
     */
    this.otherDims = {};
    if (opt != null) {
      zrender_lib_core_util_js__rspack_import_0.extend(this, opt);
    }
  }
  return SeriesDimensionDefine;
}();
;
/* export default */ __webpack_exports__["default"] = (SeriesDimensionDefine);

}),
17043: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);
/* import */ var _util_types_js__rspack_import_0 = __webpack_require__(40333);
/* import */ var _util_model_js__rspack_import_3 = __webpack_require__(53781);
/* import */ var _helper_sourceHelper_js__rspack_import_1 = __webpack_require__(44872);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// @inner
var SourceImpl = /** @class */function () {
  function SourceImpl(fields) {
    this.data = fields.data || (fields.sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_KEYED_COLUMNS ? {} : []);
    this.sourceFormat = fields.sourceFormat || _util_types_js__rspack_import_0.SOURCE_FORMAT_UNKNOWN;
    // Visit config
    this.seriesLayoutBy = fields.seriesLayoutBy || _util_types_js__rspack_import_0.SERIES_LAYOUT_BY_COLUMN;
    this.startIndex = fields.startIndex || 0;
    this.dimensionsDetectedCount = fields.dimensionsDetectedCount;
    this.metaRawOption = fields.metaRawOption;
    var dimensionsDefine = this.dimensionsDefine = fields.dimensionsDefine;
    if (dimensionsDefine) {
      for (var i = 0; i < dimensionsDefine.length; i++) {
        var dim = dimensionsDefine[i];
        if (dim.type == null) {
          if ((0,_helper_sourceHelper_js__rspack_import_1.guessOrdinal)(this, i) === _helper_sourceHelper_js__rspack_import_1.BE_ORDINAL.Must) {
            dim.type = 'ordinal';
          }
        }
      }
    }
  }
  return SourceImpl;
}();
function isSourceInstance(val) {
  return val instanceof SourceImpl;
}
/**
 * Create a source from option.
 * NOTE: Created source is immutable. Don't change any properties in it.
 */
function createSource(sourceData, thisMetaRawOption,
// can be null. If not provided, auto detect it from `sourceData`.
sourceFormat) {
  sourceFormat = sourceFormat || detectSourceFormat(sourceData);
  var seriesLayoutBy = thisMetaRawOption.seriesLayoutBy;
  var determined = determineSourceDimensions(sourceData, sourceFormat, seriesLayoutBy, thisMetaRawOption.sourceHeader, thisMetaRawOption.dimensions);
  var source = new SourceImpl({
    data: sourceData,
    sourceFormat: sourceFormat,
    seriesLayoutBy: seriesLayoutBy,
    dimensionsDefine: determined.dimensionsDefine,
    startIndex: determined.startIndex,
    dimensionsDetectedCount: determined.dimensionsDetectedCount,
    metaRawOption: (0,zrender_lib_core_util_js__rspack_import_2.clone)(thisMetaRawOption)
  });
  return source;
}
/**
 * Wrap original series data for some compatibility cases.
 */
function createSourceFromSeriesDataOption(data) {
  return new SourceImpl({
    data: data,
    sourceFormat: (0,zrender_lib_core_util_js__rspack_import_2.isTypedArray)(data) ? _util_types_js__rspack_import_0.SOURCE_FORMAT_TYPED_ARRAY : _util_types_js__rspack_import_0.SOURCE_FORMAT_ORIGINAL
  });
}
/**
 * Clone source but excludes source data.
 */
function cloneSourceShallow(source) {
  return new SourceImpl({
    data: source.data,
    sourceFormat: source.sourceFormat,
    seriesLayoutBy: source.seriesLayoutBy,
    dimensionsDefine: (0,zrender_lib_core_util_js__rspack_import_2.clone)(source.dimensionsDefine),
    startIndex: source.startIndex,
    dimensionsDetectedCount: source.dimensionsDetectedCount
  });
}
/**
 * Note: An empty array will be detected as `SOURCE_FORMAT_ARRAY_ROWS`.
 */
function detectSourceFormat(data) {
  var sourceFormat = _util_types_js__rspack_import_0.SOURCE_FORMAT_UNKNOWN;
  if ((0,zrender_lib_core_util_js__rspack_import_2.isTypedArray)(data)) {
    sourceFormat = _util_types_js__rspack_import_0.SOURCE_FORMAT_TYPED_ARRAY;
  } else if ((0,zrender_lib_core_util_js__rspack_import_2.isArray)(data)) {
    // FIXME Whether tolerate null in top level array?
    if (data.length === 0) {
      sourceFormat = _util_types_js__rspack_import_0.SOURCE_FORMAT_ARRAY_ROWS;
    }
    for (var i = 0, len = data.length; i < len; i++) {
      var item = data[i];
      if (item == null) {
        continue;
      } else if ((0,zrender_lib_core_util_js__rspack_import_2.isArray)(item) || (0,zrender_lib_core_util_js__rspack_import_2.isTypedArray)(item)) {
        sourceFormat = _util_types_js__rspack_import_0.SOURCE_FORMAT_ARRAY_ROWS;
        break;
      } else if ((0,zrender_lib_core_util_js__rspack_import_2.isObject)(item)) {
        sourceFormat = _util_types_js__rspack_import_0.SOURCE_FORMAT_OBJECT_ROWS;
        break;
      }
    }
  } else if ((0,zrender_lib_core_util_js__rspack_import_2.isObject)(data)) {
    for (var key in data) {
      if ((0,zrender_lib_core_util_js__rspack_import_2.hasOwn)(data, key) && (0,zrender_lib_core_util_js__rspack_import_2.isArrayLike)(data[key])) {
        sourceFormat = _util_types_js__rspack_import_0.SOURCE_FORMAT_KEYED_COLUMNS;
        break;
      }
    }
  }
  return sourceFormat;
}
/**
 * Determine the source definitions from data standalone dimensions definitions
 * are not specified.
 */
function determineSourceDimensions(data, sourceFormat, seriesLayoutBy, sourceHeader,
// standalone raw dimensions definition, like:
// {
//     dimensions: ['aa', 'bb', { name: 'cc', type: 'time' }]
// }
// in `dataset` or `series`
dimensionsDefine) {
  var dimensionsDetectedCount;
  var startIndex;
  // PENDING: Could data be null/undefined here?
  // currently, if `dataset.source` not specified, error thrown.
  // if `series.data` not specified, nothing rendered without error thrown.
  // Should test these cases.
  if (!data) {
    return {
      dimensionsDefine: normalizeDimensionsOption(dimensionsDefine),
      startIndex: startIndex,
      dimensionsDetectedCount: dimensionsDetectedCount
    };
  }
  if (sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_ARRAY_ROWS) {
    var dataArrayRows = data;
    // Rule: Most of the first line are string: it is header.
    // Caution: consider a line with 5 string and 1 number,
    // it still can not be sure it is a head, because the
    // 5 string may be 5 values of category columns.
    if (sourceHeader === 'auto' || sourceHeader == null) {
      arrayRowsTravelFirst(function (val) {
        // '-' is regarded as null/undefined.
        if (val != null && val !== '-') {
          if ((0,zrender_lib_core_util_js__rspack_import_2.isString)(val)) {
            startIndex == null && (startIndex = 1);
          } else {
            startIndex = 0;
          }
        }
        // 10 is an experience number, avoid long loop.
      }, seriesLayoutBy, dataArrayRows, 10);
    } else {
      startIndex = (0,zrender_lib_core_util_js__rspack_import_2.isNumber)(sourceHeader) ? sourceHeader : sourceHeader ? 1 : 0;
    }
    if (!dimensionsDefine && startIndex === 1) {
      dimensionsDefine = [];
      arrayRowsTravelFirst(function (val, index) {
        dimensionsDefine[index] = val != null ? val + '' : '';
      }, seriesLayoutBy, dataArrayRows, Infinity);
    }
    dimensionsDetectedCount = dimensionsDefine ? dimensionsDefine.length : seriesLayoutBy === _util_types_js__rspack_import_0.SERIES_LAYOUT_BY_ROW ? dataArrayRows.length : dataArrayRows[0] ? dataArrayRows[0].length : null;
  } else if (sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_OBJECT_ROWS) {
    if (!dimensionsDefine) {
      dimensionsDefine = objectRowsCollectDimensions(data);
    }
  } else if (sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_KEYED_COLUMNS) {
    if (!dimensionsDefine) {
      dimensionsDefine = [];
      (0,zrender_lib_core_util_js__rspack_import_2.each)(data, function (colArr, key) {
        dimensionsDefine.push(key);
      });
    }
  } else if (sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_ORIGINAL) {
    var value0 = (0,_util_model_js__rspack_import_3.getDataItemValue)(data[0]);
    dimensionsDetectedCount = (0,zrender_lib_core_util_js__rspack_import_2.isArray)(value0) && value0.length || 1;
  } else if (sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_TYPED_ARRAY) {
    if (false) {}
  }
  return {
    startIndex: startIndex,
    dimensionsDefine: normalizeDimensionsOption(dimensionsDefine),
    dimensionsDetectedCount: dimensionsDetectedCount
  };
}
function objectRowsCollectDimensions(data) {
  var firstIndex = 0;
  var obj;
  while (firstIndex < data.length && !(obj = data[firstIndex++])) {} // jshint ignore: line
  if (obj) {
    return (0,zrender_lib_core_util_js__rspack_import_2.keys)(obj);
  }
}
// Consider dimensions defined like ['A', 'price', 'B', 'price', 'C', 'price'],
// which is reasonable. But dimension name is duplicated.
// Returns undefined or an array contains only object without null/undefined or string.
function normalizeDimensionsOption(dimensionsDefine) {
  if (!dimensionsDefine) {
    // The meaning of null/undefined is different from empty array.
    return;
  }
  var nameMap = (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)();
  return (0,zrender_lib_core_util_js__rspack_import_2.map)(dimensionsDefine, function (rawItem, index) {
    rawItem = (0,zrender_lib_core_util_js__rspack_import_2.isObject)(rawItem) ? rawItem : {
      name: rawItem
    };
    // Other fields will be discarded.
    var item = {
      name: rawItem.name,
      displayName: rawItem.displayName,
      type: rawItem.type
    };
    // User can set null in dimensions.
    // We don't auto specify name, otherwise a given name may
    // cause it to be referred unexpectedly.
    if (item.name == null) {
      return item;
    }
    // Also consider number form like 2012.
    item.name += '';
    // User may also specify displayName.
    // displayName will always exists except user not
    // specified or dim name is not specified or detected.
    // (A auto generated dim name will not be used as
    // displayName).
    if (item.displayName == null) {
      item.displayName = item.name;
    }
    var exist = nameMap.get(item.name);
    if (!exist) {
      nameMap.set(item.name, {
        count: 1
      });
    } else {
      item.name += '-' + exist.count++;
    }
    return item;
  });
}
function arrayRowsTravelFirst(cb, seriesLayoutBy, data, maxLoop) {
  if (seriesLayoutBy === _util_types_js__rspack_import_0.SERIES_LAYOUT_BY_ROW) {
    for (var i = 0; i < data.length && i < maxLoop; i++) {
      cb(data[i] ? data[i][0] : null, i);
    }
  } else {
    var value0 = data[0] || [];
    for (var i = 0; i < value0.length && i < maxLoop; i++) {
      cb(value0[i], i);
    }
  }
}
function shouldRetrieveDataByName(source) {
  var sourceFormat = source.sourceFormat;
  return sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_OBJECT_ROWS || sourceFormat === _util_types_js__rspack_import_0.SOURCE_FORMAT_KEYED_COLUMNS;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  cloneSourceShallow: cloneSourceShallow,
  createSource: createSource,
  createSourceFromSeriesDataOption: createSourceFromSeriesDataOption,
  detectSourceFormat: detectSourceFormat,
  isSourceInstance: isSourceInstance,
  shouldRetrieveDataByName: shouldRetrieveDataByName
});


}),
67938: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _helper_linkSeriesData_js__rspack_import_4 = __webpack_require__(82840);
/* import */ var _SeriesData_js__rspack_import_3 = __webpack_require__(24179);
/* import */ var _helper_createDimensions_js__rspack_import_2 = __webpack_require__(31292);
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
 * Tree data structure
 */





var TreeNode = /** @class */function () {
  function TreeNode(name, hostTree) {
    this.depth = 0;
    this.height = 0;
    /**
     * Reference to list item.
     * Do not persistent dataIndex outside,
     * besause it may be changed by list.
     * If dataIndex -1,
     * this node is logical deleted (filtered) in list.
     */
    this.dataIndex = -1;
    this.children = [];
    this.viewChildren = [];
    this.isExpand = false;
    this.name = name || '';
    this.hostTree = hostTree;
  }
  /**
   * The node is removed.
   */
  TreeNode.prototype.isRemoved = function () {
    return this.dataIndex < 0;
  };
  TreeNode.prototype.eachNode = function (options, cb, context) {
    if (zrender_lib_core_util_js__rspack_import_0.isFunction(options)) {
      context = cb;
      cb = options;
      options = null;
    }
    options = options || {};
    if (zrender_lib_core_util_js__rspack_import_0.isString(options)) {
      options = {
        order: options
      };
    }
    var order = options.order || 'preorder';
    var children = this[options.attr || 'children'];
    var suppressVisitSub;
    order === 'preorder' && (suppressVisitSub = cb.call(context, this));
    for (var i = 0; !suppressVisitSub && i < children.length; i++) {
      children[i].eachNode(options, cb, context);
    }
    order === 'postorder' && cb.call(context, this);
  };
  /**
   * Update depth and height of this subtree.
   */
  TreeNode.prototype.updateDepthAndHeight = function (depth) {
    var height = 0;
    this.depth = depth;
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      child.updateDepthAndHeight(depth + 1);
      if (child.height > height) {
        height = child.height;
      }
    }
    this.height = height + 1;
  };
  TreeNode.prototype.getNodeById = function (id) {
    if (this.getId() === id) {
      return this;
    }
    for (var i = 0, children = this.children, len = children.length; i < len; i++) {
      var res = children[i].getNodeById(id);
      if (res) {
        return res;
      }
    }
  };
  TreeNode.prototype.contains = function (node) {
    if (node === this) {
      return true;
    }
    for (var i = 0, children = this.children, len = children.length; i < len; i++) {
      var res = children[i].contains(node);
      if (res) {
        return res;
      }
    }
  };
  /**
   * @param includeSelf Default false.
   * @return order: [root, child, grandchild, ...]
   */
  TreeNode.prototype.getAncestors = function (includeSelf) {
    var ancestors = [];
    var node = includeSelf ? this : this.parentNode;
    while (node) {
      ancestors.push(node);
      node = node.parentNode;
    }
    ancestors.reverse();
    return ancestors;
  };
  TreeNode.prototype.getAncestorsIndices = function () {
    var indices = [];
    var currNode = this;
    while (currNode) {
      indices.push(currNode.dataIndex);
      currNode = currNode.parentNode;
    }
    indices.reverse();
    return indices;
  };
  TreeNode.prototype.getDescendantIndices = function () {
    var indices = [];
    this.eachNode(function (childNode) {
      indices.push(childNode.dataIndex);
    });
    return indices;
  };
  TreeNode.prototype.getValue = function (dimension) {
    var data = this.hostTree.data;
    return data.getStore().get(data.getDimensionIndex(dimension || 'value'), this.dataIndex);
  };
  TreeNode.prototype.setLayout = function (layout, merge) {
    this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, layout, merge);
  };
  /**
   * @return {Object} layout
   */
  TreeNode.prototype.getLayout = function () {
    return this.hostTree.data.getItemLayout(this.dataIndex);
  };
  // @depcrecated
  // getModel<T = unknown, S extends keyof T = keyof T>(path: S): Model<T[S]>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TreeNode.prototype.getModel = function (path) {
    if (this.dataIndex < 0) {
      return;
    }
    var hostTree = this.hostTree;
    var itemModel = hostTree.data.getItemModel(this.dataIndex);
    return itemModel.getModel(path);
  };
  // TODO: TYPE More specific model
  TreeNode.prototype.getLevelModel = function () {
    return (this.hostTree.levelModels || [])[this.depth];
  };
  TreeNode.prototype.setVisual = function (key, value) {
    this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, key, value);
  };
  /**
   * Get item visual
   * FIXME: make return type better
   */
  TreeNode.prototype.getVisual = function (key) {
    return this.hostTree.data.getItemVisual(this.dataIndex, key);
  };
  TreeNode.prototype.getRawIndex = function () {
    return this.hostTree.data.getRawIndex(this.dataIndex);
  };
  TreeNode.prototype.getId = function () {
    return this.hostTree.data.getId(this.dataIndex);
  };
  /**
   * index in parent's children
   */
  TreeNode.prototype.getChildIndex = function () {
    if (this.parentNode) {
      var children = this.parentNode.children;
      for (var i = 0; i < children.length; ++i) {
        if (children[i] === this) {
          return i;
        }
      }
      return -1;
    }
    return -1;
  };
  /**
   * if this is an ancestor of another node
   *
   * @param node another node
   * @return if is ancestor
   */
  TreeNode.prototype.isAncestorOf = function (node) {
    var parent = node.parentNode;
    while (parent) {
      if (parent === this) {
        return true;
      }
      parent = parent.parentNode;
    }
    return false;
  };
  /**
   * if this is an descendant of another node
   *
   * @param node another node
   * @return if is descendant
   */
  TreeNode.prototype.isDescendantOf = function (node) {
    return node !== this && node.isAncestorOf(this);
  };
  return TreeNode;
}();

;
var Tree = /** @class */function () {
  function Tree(hostModel) {
    this.type = 'tree';
    this._nodes = [];
    this.hostModel = hostModel;
  }
  Tree.prototype.eachNode = function (options, cb, context) {
    this.root.eachNode(options, cb, context);
  };
  Tree.prototype.getNodeByDataIndex = function (dataIndex) {
    var rawIndex = this.data.getRawIndex(dataIndex);
    return this._nodes[rawIndex];
  };
  Tree.prototype.getNodeById = function (name) {
    return this.root.getNodeById(name);
  };
  /**
   * Update item available by list,
   * when list has been performed options like 'filterSelf' or 'map'.
   */
  Tree.prototype.update = function () {
    var data = this.data;
    var nodes = this._nodes;
    for (var i = 0, len = nodes.length; i < len; i++) {
      nodes[i].dataIndex = -1;
    }
    for (var i = 0, len = data.count(); i < len; i++) {
      nodes[data.getRawIndex(i)].dataIndex = i;
    }
  };
  /**
   * Clear all layouts
   */
  Tree.prototype.clearLayouts = function () {
    this.data.clearItemLayouts();
  };
  /**
   * data node format:
   * {
   *     name: ...
   *     value: ...
   *     children: [
   *         {
   *             name: ...
   *             value: ...
   *             children: ...
   *         },
   *         ...
   *     ]
   * }
   */
  Tree.createTree = function (dataRoot, hostModel, beforeLink) {
    var tree = new Tree(hostModel);
    var listData = [];
    var dimMax = 1;
    buildHierarchy(dataRoot);
    function buildHierarchy(dataNode, parentNode) {
      var value = dataNode.value;
      dimMax = Math.max(dimMax, zrender_lib_core_util_js__rspack_import_0.isArray(value) ? value.length : 1);
      listData.push(dataNode);
      var node = new TreeNode((0,_util_model_js__rspack_import_1.convertOptionIdName)(dataNode.name, ''), tree);
      parentNode ? addChild(node, parentNode) : tree.root = node;
      tree._nodes.push(node);
      var children = dataNode.children;
      if (children) {
        for (var i = 0; i < children.length; i++) {
          buildHierarchy(children[i], node);
        }
      }
    }
    tree.root.updateDepthAndHeight(0);
    var dimensions = (0,_helper_createDimensions_js__rspack_import_2["default"])(listData, {
      coordDimensions: ['value'],
      dimensionsCount: dimMax
    }).dimensions;
    var list = new _SeriesData_js__rspack_import_3["default"](dimensions, hostModel);
    list.initData(listData);
    beforeLink && beforeLink(list);
    (0,_helper_linkSeriesData_js__rspack_import_4["default"])({
      mainData: list,
      struct: tree,
      structAttr: 'tree'
    });
    tree.update();
    return tree;
  };
  return Tree;
}();
/**
 * It is needed to consider the mess of 'list', 'hostModel' when creating a TreeNote,
 * so this function is not ready and not necessary to be public.
 */
function addChild(child, node) {
  var children = node.children;
  if (child.parentNode === node) {
    return;
  }
  children.push(child);
  child.parentNode = node;
}
/* export default */ __webpack_exports__["default"] = (Tree);
__webpack_require__.d(__webpack_exports__, {
}, {
  TreeNode: TreeNode
});


}),

}]);