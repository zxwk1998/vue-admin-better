"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["1145"], {
55919: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Task: function() { return Task; },
  createTask: function() { return createTask; }
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
        if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(progress)) {
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
      if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(progress) && !progress.length) {
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

}),
75704: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM default export */ __webpack_exports__["default"] = (DataDiffer);

}),
73178: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CtorFloat64Array: function() { return CtorFloat64Array; },
  CtorInt32Array: function() { return CtorInt32Array; },
  CtorUint16Array: function() { return CtorUint16Array; },
  CtorUint32Array: function() { return CtorUint32Array; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67918);
/* ESM import */var _Source_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7056);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var UNDEFINED = 'undefined';
/* global Float64Array, Int32Array, Uint32Array, Uint16Array */
// Caution: MUST not use `new CtorUint32Array(arr, 0, len)`, because the Ctor of array is
// different from the Ctor of typed array.
var CtorUint32Array = typeof Uint32Array === UNDEFINED ? Array : Uint32Array;
var CtorUint16Array = typeof Uint16Array === UNDEFINED ? Array : Uint16Array;
var CtorInt32Array = typeof Int32Array === UNDEFINED ? Array : Int32Array;
var CtorFloat64Array = typeof Float64Array === UNDEFINED ? Array : Float64Array;
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
function getInitialExtent() {
  return [Infinity, -Infinity];
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
    this._extent = [];
    this._count = 0;
    this._rawCount = 0;
    this._calcDimNameToIdx = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
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
    var willRetrieveDataByName = (0,_Source_js__WEBPACK_IMPORTED_MODULE_1__.shouldRetrieveDataByName)(source);
    this._dimensions = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(inputDimensions, function (dim) {
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
    this._rawExtent[calcDimIdx] = getInitialExtent();
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
      rawExtents[dimIdx] = getInitialExtent();
    }
    var dimRawExtent = rawExtents[dimIdx];
    // Parse from previous data offset. len may be changed after appendData
    for (var i = offset; i < len; i++) {
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
    var dimNames = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(dimensions, function (dim) {
      return dim.property;
    });
    for (var i = 0; i < dimLen; i++) {
      var dim = dimensions[i];
      if (!rawExtent[i]) {
        rawExtent[i] = getInitialExtent();
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
    var sortedDimDataArray = dimDataArray.sort(function (a, b) {
      return a - b;
    });
    var len = this.count();
    // calculate median
    return len === 0 ? 0 : len % 2 === 1 ? sortedDimDataArray[(len - 1) / 2] : (sortedDimDataArray[len / 2] + sortedDimDataArray[len / 2 - 1]) / 2;
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
   * Data filter.
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
    var dims = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(range);
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
      rawExtent[dims[i]] = getInitialExtent();
    }
    for (var dataIndex = 0; dataIndex < dataCount; dataIndex++) {
      var rawIndex = target.getRawIndex(dataIndex);
      for (var k = 0; k < dimSize; k++) {
        values[k] = targetChunks[dims[k]][rawIndex];
      }
      values[dimSize] = dataIndex;
      var retValue = cb && cb.apply(null, values);
      if (retValue != null) {
        // a number or string (in oridinal dimension)?
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
    var rawExtentOnDim = target._rawExtent[dimension] = getInitialExtent();
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
   *  list.each('x', function (x, idx) {});
   *  list.each(['x', 'y'], function (x, y, idx) {});
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
  /**
   * Get extent of data in one dimension
   */
  DataStore.prototype.getDataExtent = function (dim) {
    // Make sure use concrete dim as cache name.
    var dimData = this._chunks[dim];
    var initialExtent = getInitialExtent();
    if (!dimData) {
      return initialExtent;
    }
    // Make more strict checkings to ensure hitting cache.
    var currEnd = this.count();
    // Consider the most cases when using data zoom, `getDataExtent`
    // happened before filtering. We cache raw extent, which is not
    // necessary to be cleared and recalculated when restore data.
    var useRaw = !this._indices;
    var dimExtent;
    if (useRaw) {
      return this._rawExtent[dim].slice();
    }
    dimExtent = this._extent[dim];
    if (dimExtent) {
      return dimExtent.slice();
    }
    dimExtent = initialExtent;
    var min = dimExtent[0];
    var max = dimExtent[1];
    for (var i = 0; i < currEnd; i++) {
      var rawIdx = this.getRawIndex(i);
      var value = dimData[rawIdx];
      value < min && (min = value);
      value > max && (max = value);
    }
    dimExtent = [min, max];
    this._extent[dim] = dimExtent;
    return dimExtent;
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
    var clonedDimsMap = clonedDims && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.reduce)(clonedDims, function (obj, dimIdx) {
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
    target._extent = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone)(this._extent);
    target._rawExtent = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone)(this._rawExtent);
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
      return (0,_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__.parseDataValue)(dataItem[dimIndex], this._dimensions[dimIndex]);
    }
    defaultDimValueGetters = {
      arrayRows: getDimValueSimply,
      objectRows: function (dataItem, property, dataIndex, dimIndex) {
        return (0,_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__.parseDataValue)(dataItem[property], this._dimensions[dimIndex]);
      },
      keyedColumns: getDimValueSimply,
      original: function (dataItem, property, dataIndex, dimIndex) {
        // Performance sensitive, do not use modelUtil.getDataItemValue.
        // If dataItem is an plain object with no value field, the let `value`
        // will be assigned with the object, but it will be tread correctly
        // in the `convertValue`.
        var value = dataItem && (dataItem.value == null ? dataItem : dataItem.value);
        return (0,_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__.parseDataValue)(value instanceof Array ? value[dimIndex]
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
/* ESM default export */ __webpack_exports__["default"] = (DataStore);

}),
51669: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GraphEdge: function() { return GraphEdge; },
  GraphNode: function() { return GraphNode; }
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
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber(n1)) {
      n1 = this.nodes[n1];
    }
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber(n2)) {
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
    var connectedEdgesMap = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
    var connectedNodesMap = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
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
    var connectedEdgesMap = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
    var connectedNodesMap = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
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
zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.mixin(GraphNode, createGraphDataProxyMixin('hostGraph', 'data'));
zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.mixin(GraphEdge, createGraphDataProxyMixin('hostGraph', 'edgeData'));
/* ESM default export */ __webpack_exports__["default"] = (Graph);


}),
41862: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
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
    var categories = data && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(data, getName);
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
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(category) && !needCollect) {
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
    return this._map || (this._map = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)(this.categories));
  };
  return OrdinalMeta;
}();
function getName(obj) {
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj) && obj.value != null) {
    return obj.value;
  } else {
    return obj + '';
  }
}
/* ESM default export */ __webpack_exports__["default"] = (OrdinalMeta);

}),
21137: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40064);
/* ESM import */var _DataDiffer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75704);
/* ESM import */var _helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54127);
/* ESM import */var _helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7676);
/* ESM import */var _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46040);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19081);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44244);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12212);
/* ESM import */var _Source_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7056);
/* ESM import */var _DataStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73178);
/* ESM import */var _helper_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41219);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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












var isObject = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject;
var map = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map;
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
    if ((0,_helper_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_1__.isSeriesDataSchema)(dimensionsInput)) {
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
      var dimensionInfo = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(dimInfoInput) ? new _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        name: dimInfoInput
      }) : !(dimInfoInput instanceof _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_2__["default"]) ? new _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_2__["default"](dimInfoInput) : dimInfoInput;
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
      var dimIdx = i;
      if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber(dimensionInfo.storeDimIndex)) {
        dimIdx = dimensionInfo.storeDimIndex;
      }
      if (otherDims.itemName === 0) {
        this._nameDimIdx = dimIdx;
      }
      if (otherDims.itemId === 0) {
        this._idDimIdx = dimIdx;
      }
      if (false) {}
      if (assignStoreDimIdx) {
        dimensionInfo.storeDimIndex = i;
      }
    }
    this.dimensions = dimensionNames;
    this._dimInfos = dimensionInfos;
    this._initGetDimensionInfo(needsHasOwn);
    this.hostModel = hostModel;
    this._invertedIndicesMap = invertedIndicesMap;
    if (this._dimOmitted) {
      var dimIdxToName_1 = this._dimIdxToName = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(dimensionNames, function (dimName) {
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
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber(dim)
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
    if (data instanceof _DataStore_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      store = data;
    }
    if (!store) {
      var dimensions = this.dimensions;
      var provider = (0,_Source_js__WEBPACK_IMPORTED_MODULE_4__.isSourceInstance)(data) || zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArrayLike(data) ? new _helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_5__.DefaultDataProvider(data, dimensions.length) : data;
      store = new _DataStore_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
    this._dimSummary = (0,_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_6__.summarizeDimensions)(this, this._schema);
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
    return this._idDimIdx == null && provider.getSource().sourceFormat !== _util_types_js__WEBPACK_IMPORTED_MODULE_7__.SOURCE_FORMAT_TYPED_ARRAY && !provider.fillStorage;
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
    var isFormatOriginal = sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_7__.SOURCE_FORMAT_ORIGINAL;
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
        if (!this.hasItemOption && (0,_util_model_js__WEBPACK_IMPORTED_MODULE_8__.isDataItemOption)(dataItem)) {
          this.hasItemOption = true;
        }
        if (dataItem) {
          var itemName = dataItem.name;
          if (nameList[idx] == null && itemName != null) {
            nameList[idx] = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_8__.convertOptionIdName)(itemName, null);
          }
          var itemId = dataItem.id;
          if (idList[idx] == null && itemId != null) {
            idList[idx] = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_8__.convertOptionIdName)(itemId, null);
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
   * PENDING: In fact currently this function is only used to short-circuit
   * the calling of `scale.unionExtentFromData` when data have been filtered by modules
   * like "dataZoom". `scale.unionExtentFromData` is used to calculate data extent for series on
   * an axis, but if a "axis related data filter module" is used, the extent of the axis have
   * been fixed and no need to calling `scale.unionExtentFromData` actually.
   * But if we add "custom data filter" in future, which is not "axis related", this method may
   * be still needed.
   *
   * Optimize for the scenario that data is filtered by a given extent.
   * Consider that if data amount is more than hundreds of thousand,
   * extent calculation will cost more than 10ms and the cache will
   * be erased because of the filtering.
   */
  SeriesData.prototype.getApproximateExtent = function (dim) {
    return this._approximateExtent[dim] || this._store.getDataExtent(this._getStoreDimIndex(dim));
  };
  /**
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
    isObject(key) ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(this._calculationInfo, key) : this._calculationInfo[key] = value;
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
    return this._store.getDataExtent(this._getStoreDimIndex(dim));
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
    return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(dimensions) ? store.getValues(map(dimensions, function (dim) {
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

    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction(dims)) {
      ctx = cb;
      cb = dims;
      dims = [];
    }
    // ctxCompat just for compat echarts3
    var fCtx = ctx || this;
    var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
    this._store.each(dimIndices, fCtx ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(cb, fCtx) : cb);
  };
  SeriesData.prototype.filterSelf = function (dims, cb, ctx) {
    'use strict';

    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction(dims)) {
      ctx = cb;
      cb = dims;
      dims = [];
    }
    // ctxCompat just for compat echarts3
    var fCtx = ctx || this;
    var dimIndices = map(normalizeDimensions(dims), this._getStoreDimIndex, this);
    this._store = this._store.filter(dimIndices, fCtx ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(cb, fCtx) : cb);
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
    var dims = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys(range);
    var dimIndices = [];
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(dims, function (dim) {
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

    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction(dims)) {
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
    list._store = this._store.map(dimIndices, fCtx ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(cb, fCtx) : cb);
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
    this._store.modify(dimIndices, fCtx ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(cb, fCtx) : cb);
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
    return new _model_Model_js__WEBPACK_IMPORTED_MODULE_9__["default"](dataItem, hostModel, hostModel && hostModel.ecModel);
  };
  /**
   * Create a data differ
   */
  SeriesData.prototype.diff = function (otherList) {
    var thisList = this;
    return new _DataDiffer_js__WEBPACK_IMPORTED_MODULE_10__["default"](otherList ? otherList.getStore().getIndices() : [], this.getStore().getIndices(), function (idx) {
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(this._visual, kvObj);
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
      if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(val)) {
        val = val.slice();
      } else if (isObject(val)) {
        val = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, val);
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(itemVisual, key);
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
    isObject(key) ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(this._layout, key) : this._layout[key] = val;
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
    this._itemLayouts[idx] = merge ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(this._itemLayouts[idx] || {}, layout) : layout;
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
    (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_11__.setCommonECData)(seriesIndex, this.dataType, idx, el);
    this._graphicEls[idx] = el;
  };
  SeriesData.prototype.getItemGraphicEl = function (idx) {
    return this._graphicEls[idx];
  };
  SeriesData.prototype.eachItemGraphicEl = function (cb, context) {
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(this._graphicEls, function (el, idx) {
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
    if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction(originalMethod)) {
      return;
    }
    this.__wrappedMethods = this.__wrappedMethods || [];
    this.__wrappedMethods.push(methodName);
    this[methodName] = function () {
      var res = originalMethod.apply(this, arguments);
      return injectFunction.apply(this, [res].concat(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.slice(arguments)));
    };
  };
  // ----------------------------------------------------------
  // A work around for internal method visiting private member.
  // ----------------------------------------------------------
  SeriesData.internalField = function () {
    prepareInvertedIndex = function (data) {
      var invertedIndicesMap = data._invertedIndicesMap;
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(invertedIndicesMap, function (invertedIndices, dim) {
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
      return (0,_util_model_js__WEBPACK_IMPORTED_MODULE_8__.convertOptionIdName)(data._getCategory(dimIdx, idx), null);
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
      if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(dimensions)) {
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(TRANSFERABLE_PROPERTIES.concat(source.__wrappedMethods || []), function (propName) {
        if (source.hasOwnProperty(propName)) {
          target[propName] = source[propName];
        }
      });
      target.__wrappedMethods = source.__wrappedMethods;
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(CLONE_PROPERTIES, function (propName) {
        target[propName] = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone(source[propName]);
      });
      target._calculationInfo = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, source._calculationInfo);
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
/* ESM default export */ __webpack_exports__["default"] = (SeriesData);

}),
46040: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
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

var SeriesDimensionDefine = /** @class */function () {
  /**
   * @param opt All of the fields will be shallow copied.
   */
  function SeriesDimensionDefine(opt) {
    /**
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(this, opt);
    }
  }
  return SeriesDimensionDefine;
}();
;
/* ESM default export */ __webpack_exports__["default"] = (SeriesDimensionDefine);

}),
7056: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cloneSourceShallow: function() { return cloneSourceShallow; },
  createSource: function() { return createSource; },
  createSourceFromSeriesDataOption: function() { return createSourceFromSeriesDataOption; },
  detectSourceFormat: function() { return detectSourceFormat; },
  isSourceInstance: function() { return isSourceInstance; },
  shouldRetrieveDataByName: function() { return shouldRetrieveDataByName; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19081);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44244);
/* ESM import */var _helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56562);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    this.data = fields.data || (fields.sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_KEYED_COLUMNS ? {} : []);
    this.sourceFormat = fields.sourceFormat || _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_UNKNOWN;
    // Visit config
    this.seriesLayoutBy = fields.seriesLayoutBy || _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SERIES_LAYOUT_BY_COLUMN;
    this.startIndex = fields.startIndex || 0;
    this.dimensionsDetectedCount = fields.dimensionsDetectedCount;
    this.metaRawOption = fields.metaRawOption;
    var dimensionsDefine = this.dimensionsDefine = fields.dimensionsDefine;
    if (dimensionsDefine) {
      for (var i = 0; i < dimensionsDefine.length; i++) {
        var dim = dimensionsDefine[i];
        if (dim.type == null) {
          if ((0,_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_1__.guessOrdinal)(this, i) === _helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_1__.BE_ORDINAL.Must) {
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
    metaRawOption: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(thisMetaRawOption)
  });
  return source;
}
/**
 * Wrap original series data for some compatibility cases.
 */
function createSourceFromSeriesDataOption(data) {
  return new SourceImpl({
    data: data,
    sourceFormat: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isTypedArray)(data) ? _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_TYPED_ARRAY : _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_ORIGINAL
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
    dimensionsDefine: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(source.dimensionsDefine),
    startIndex: source.startIndex,
    dimensionsDetectedCount: source.dimensionsDetectedCount
  });
}
/**
 * Note: An empty array will be detected as `SOURCE_FORMAT_ARRAY_ROWS`.
 */
function detectSourceFormat(data) {
  var sourceFormat = _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_UNKNOWN;
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isTypedArray)(data)) {
    sourceFormat = _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_TYPED_ARRAY;
  } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(data)) {
    // FIXME Whether tolerate null in top level array?
    if (data.length === 0) {
      sourceFormat = _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_ARRAY_ROWS;
    }
    for (var i = 0, len = data.length; i < len; i++) {
      var item = data[i];
      if (item == null) {
        continue;
      } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(item) || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isTypedArray)(item)) {
        sourceFormat = _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_ARRAY_ROWS;
        break;
      } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(item)) {
        sourceFormat = _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_OBJECT_ROWS;
        break;
      }
    }
  } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(data)) {
    for (var key in data) {
      if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.hasOwn)(data, key) && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(data[key])) {
        sourceFormat = _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_KEYED_COLUMNS;
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
  if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_ARRAY_ROWS) {
    var dataArrayRows = data;
    // Rule: Most of the first line are string: it is header.
    // Caution: consider a line with 5 string and 1 number,
    // it still can not be sure it is a head, because the
    // 5 string may be 5 values of category columns.
    if (sourceHeader === 'auto' || sourceHeader == null) {
      arrayRowsTravelFirst(function (val) {
        // '-' is regarded as null/undefined.
        if (val != null && val !== '-') {
          if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(val)) {
            startIndex == null && (startIndex = 1);
          } else {
            startIndex = 0;
          }
        }
        // 10 is an experience number, avoid long loop.
      }, seriesLayoutBy, dataArrayRows, 10);
    } else {
      startIndex = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(sourceHeader) ? sourceHeader : sourceHeader ? 1 : 0;
    }
    if (!dimensionsDefine && startIndex === 1) {
      dimensionsDefine = [];
      arrayRowsTravelFirst(function (val, index) {
        dimensionsDefine[index] = val != null ? val + '' : '';
      }, seriesLayoutBy, dataArrayRows, Infinity);
    }
    dimensionsDetectedCount = dimensionsDefine ? dimensionsDefine.length : seriesLayoutBy === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SERIES_LAYOUT_BY_ROW ? dataArrayRows.length : dataArrayRows[0] ? dataArrayRows[0].length : null;
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_OBJECT_ROWS) {
    if (!dimensionsDefine) {
      dimensionsDefine = objectRowsCollectDimensions(data);
    }
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_KEYED_COLUMNS) {
    if (!dimensionsDefine) {
      dimensionsDefine = [];
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(data, function (colArr, key) {
        dimensionsDefine.push(key);
      });
    }
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_ORIGINAL) {
    var value0 = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__.getDataItemValue)(data[0]);
    dimensionsDetectedCount = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(value0) && value0.length || 1;
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_TYPED_ARRAY) {
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
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.keys)(obj);
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
  var nameMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.createHashMap)();
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(dimensionsDefine, function (rawItem, index) {
    rawItem = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(rawItem) ? rawItem : {
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
  if (seriesLayoutBy === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SERIES_LAYOUT_BY_ROW) {
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
  return sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_OBJECT_ROWS || sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_0__.SOURCE_FORMAT_KEYED_COLUMNS;
}

}),
43738: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TreeNode: function() { return TreeNode; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _helper_linkSeriesData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37316);
/* ESM import */var _SeriesData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21137);
/* ESM import */var _helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71245);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44244);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction(options)) {
      context = cb;
      cb = options;
      options = null;
    }
    options = options || {};
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(options)) {
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
      dimMax = Math.max(dimMax, zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(value) ? value.length : 1);
      listData.push(dataNode);
      var node = new TreeNode((0,_util_model_js__WEBPACK_IMPORTED_MODULE_1__.convertOptionIdName)(dataNode.name, ''), tree);
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
    var dimensions = (0,_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_2__["default"])(listData, {
      coordDimensions: ['value'],
      dimensionsCount: dimMax
    }).dimensions;
    var list = new _SeriesData_js__WEBPACK_IMPORTED_MODULE_3__["default"](dimensions, hostModel);
    list.initData(listData);
    beforeLink && beforeLink(list);
    (0,_helper_linkSeriesData_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
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
/* ESM default export */ __webpack_exports__["default"] = (Tree);

}),

}]);