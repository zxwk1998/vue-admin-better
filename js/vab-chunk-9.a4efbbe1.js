"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["4942"], {
41219: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SeriesDataSchema: function() { return SeriesDataSchema; },
  createDimNameMap: function() { return createDimNameMap; },
  ensureSourceDimNameMap: function() { return ensureSourceDimNameMap; },
  isSeriesDataSchema: function() { return isSeriesDataSchema; },
  shouldOmitUnusedDimensions: function() { return shouldOmitUnusedDimensions; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);
/* ESM import */var _Source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7056);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var dimTypeShort = {
  float: 'f',
  int: 'i',
  ordinal: 'o',
  number: 'n',
  time: 't'
};
/**
 * Represents the dimension requirement of a series.
 *
 * NOTICE:
 * When there are too many dimensions in dataset and many series, only the used dimensions
 * (i.e., used by coord sys and declared in `series.encode`) are add to `dimensionDefineList`.
 * But users may query data by other unused dimension names.
 * In this case, users can only query data if and only if they have defined dimension names
 * via ec option, so we provide `getDimensionIndexFromSource`, which only query them from
 * `source` dimensions.
 */
var SeriesDataSchema = /** @class */function () {
  function SeriesDataSchema(opt) {
    this.dimensions = opt.dimensions;
    this._dimOmitted = opt.dimensionOmitted;
    this.source = opt.source;
    this._fullDimCount = opt.fullDimensionCount;
    this._updateDimOmitted(opt.dimensionOmitted);
  }
  SeriesDataSchema.prototype.isDimensionOmitted = function () {
    return this._dimOmitted;
  };
  SeriesDataSchema.prototype._updateDimOmitted = function (dimensionOmitted) {
    this._dimOmitted = dimensionOmitted;
    if (!dimensionOmitted) {
      return;
    }
    if (!this._dimNameMap) {
      this._dimNameMap = ensureSourceDimNameMap(this.source);
    }
  };
  /**
   * @caution Can only be used when `dimensionOmitted: true`.
   *
   * Get index by user defined dimension name (i.e., not internal generate name).
   * That is, get index from `dimensionsDefine`.
   * If no `dimensionsDefine`, or no name get, return -1.
   */
  SeriesDataSchema.prototype.getSourceDimensionIndex = function (dimName) {
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(this._dimNameMap.get(dimName), -1);
  };
  /**
   * @caution Can only be used when `dimensionOmitted: true`.
   *
   * Notice: may return `null`/`undefined` if user not specify dimension names.
   */
  SeriesDataSchema.prototype.getSourceDimension = function (dimIndex) {
    var dimensionsDefine = this.source.dimensionsDefine;
    if (dimensionsDefine) {
      return dimensionsDefine[dimIndex];
    }
  };
  SeriesDataSchema.prototype.makeStoreSchema = function () {
    var dimCount = this._fullDimCount;
    var willRetrieveDataByName = (0,_Source_js__WEBPACK_IMPORTED_MODULE_2__.shouldRetrieveDataByName)(this.source);
    var makeHashStrict = !shouldOmitUnusedDimensions(dimCount);
    // If source don't have dimensions or series don't omit unsed dimensions.
    // Generate from seriesDimList directly
    var dimHash = '';
    var dims = [];
    for (var fullDimIdx = 0, seriesDimIdx = 0; fullDimIdx < dimCount; fullDimIdx++) {
      var property = void 0;
      var type = void 0;
      var ordinalMeta = void 0;
      var seriesDimDef = this.dimensions[seriesDimIdx];
      // The list has been sorted by `storeDimIndex` asc.
      if (seriesDimDef && seriesDimDef.storeDimIndex === fullDimIdx) {
        property = willRetrieveDataByName ? seriesDimDef.name : null;
        type = seriesDimDef.type;
        ordinalMeta = seriesDimDef.ordinalMeta;
        seriesDimIdx++;
      } else {
        var sourceDimDef = this.getSourceDimension(fullDimIdx);
        if (sourceDimDef) {
          property = willRetrieveDataByName ? sourceDimDef.name : null;
          type = sourceDimDef.type;
        }
      }
      dims.push({
        property: property,
        type: type,
        ordinalMeta: ordinalMeta
      });
      // If retrieving data by index,
      //   use <index, type, ordinalMeta> to determine whether data can be shared.
      //   (Because in this case there might be no dimension name defined in dataset, but indices always exists).
      //   (Indices are always 0, 1, 2, ..., so we can ignore them to shorten the hash).
      // Otherwise if retrieving data by property name (like `data: [{aa: 123, bb: 765}, ...]`),
      //   use <property, type, ordinalMeta> in hash.
      if (willRetrieveDataByName && property != null
      // For data stack, we have make sure each series has its own dim on this store.
      // So we do not add property to hash to make sure they can share this store.
      && (!seriesDimDef || !seriesDimDef.isCalculationCoord)) {
        dimHash += makeHashStrict
        // Use escape character '`' in case that property name contains '$'.
        ? property.replace(/\`/g, '`1').replace(/\$/g, '`2')
        // For better performance, when there are large dimensions, tolerant this defects that hardly meet.
        : property;
      }
      dimHash += '$';
      dimHash += dimTypeShort[type] || 'f';
      if (ordinalMeta) {
        dimHash += ordinalMeta.uid;
      }
      dimHash += '$';
    }
    // Source from endpoint(usually series) will be read differently
    // when seriesLayoutBy or startIndex(which is affected by sourceHeader) are different.
    // So we use this three props as key.
    var source = this.source;
    var hash = [source.seriesLayoutBy, source.startIndex, dimHash].join('$$');
    return {
      dimensions: dims,
      hash: hash
    };
  };
  SeriesDataSchema.prototype.makeOutputDimensionNames = function () {
    var result = [];
    for (var fullDimIdx = 0, seriesDimIdx = 0; fullDimIdx < this._fullDimCount; fullDimIdx++) {
      var name_1 = void 0;
      var seriesDimDef = this.dimensions[seriesDimIdx];
      // The list has been sorted by `storeDimIndex` asc.
      if (seriesDimDef && seriesDimDef.storeDimIndex === fullDimIdx) {
        if (!seriesDimDef.isCalculationCoord) {
          name_1 = seriesDimDef.name;
        }
        seriesDimIdx++;
      } else {
        var sourceDimDef = this.getSourceDimension(fullDimIdx);
        if (sourceDimDef) {
          name_1 = sourceDimDef.name;
        }
      }
      result.push(name_1);
    }
    return result;
  };
  SeriesDataSchema.prototype.appendCalculationDimension = function (dimDef) {
    this.dimensions.push(dimDef);
    dimDef.isCalculationCoord = true;
    this._fullDimCount++;
    // If append dimension on a data store, consider the store
    // might be shared by different series, series dimensions not
    // really map to store dimensions.
    this._updateDimOmitted(true);
  };
  return SeriesDataSchema;
}();

function isSeriesDataSchema(schema) {
  return schema instanceof SeriesDataSchema;
}
function createDimNameMap(dimsDef) {
  var dataDimNameMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.createHashMap)();
  for (var i = 0; i < (dimsDef || []).length; i++) {
    var dimDefItemRaw = dimsDef[i];
    var userDimName = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(dimDefItemRaw) ? dimDefItemRaw.name : dimDefItemRaw;
    if (userDimName != null && dataDimNameMap.get(userDimName) == null) {
      dataDimNameMap.set(userDimName, i);
    }
  }
  return dataDimNameMap;
}
function ensureSourceDimNameMap(source) {
  var innerSource = inner(source);
  return innerSource.dimNameMap || (innerSource.dimNameMap = createDimNameMap(source.dimensionsDefine));
}
function shouldOmitUnusedDimensions(dimCount) {
  return dimCount > 30;
}

}),
71245: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createDimensions: function() { return createDimensions; },
  "default": function() { return prepareSeriesDataSchema; }
});
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19081);
/* ESM import */var _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46040);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _Source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7056);
/* ESM import */var _DataStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73178);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44244);
/* ESM import */var _sourceHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56562);
/* ESM import */var _SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41219);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/








/**
 * For outside usage compat (like echarts-gl are using it).
 */
function createDimensions(source, opt) {
  return prepareSeriesDataSchema(source, opt).dimensions;
}
/**
 * This method builds the relationship between:
 * + "what the coord sys or series requires (see `coordDimensions`)",
 * + "what the user defines (in `encode` and `dimensions`, see `opt.dimensionsDefine` and `opt.encodeDefine`)"
 * + "what the data source provids (see `source`)".
 *
 * Some guess strategy will be adapted if user does not define something.
 * If no 'value' dimension specified, the first no-named dimension will be
 * named as 'value'.
 *
 * @return The results are always sorted by `storeDimIndex` asc.
 */
function prepareSeriesDataSchema(
// TODO: TYPE completeDimensions type
source, opt) {
  if (!(0,_Source_js__WEBPACK_IMPORTED_MODULE_0__.isSourceInstance)(source)) {
    source = (0,_Source_js__WEBPACK_IMPORTED_MODULE_0__.createSourceFromSeriesDataOption)(source);
  }
  opt = opt || {};
  var sysDims = opt.coordDimensions || [];
  var dimsDef = opt.dimensionsDefine || source.dimensionsDefine || [];
  var coordDimNameMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.createHashMap)();
  var resultList = [];
  var dimCount = getDimCount(source, sysDims, dimsDef, opt.dimensionsCount);
  // Try to ignore unused dimensions if sharing a high dimension datastore
  // 30 is an experience value.
  var omitUnusedDimensions = opt.canOmitUnusedDimensions && (0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__.shouldOmitUnusedDimensions)(dimCount);
  var isUsingSourceDimensionsDef = dimsDef === source.dimensionsDefine;
  var dataDimNameMap = isUsingSourceDimensionsDef ? (0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__.ensureSourceDimNameMap)(source) : (0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__.createDimNameMap)(dimsDef);
  var encodeDef = opt.encodeDefine;
  if (!encodeDef && opt.encodeDefaulter) {
    encodeDef = opt.encodeDefaulter(source, dimCount);
  }
  var encodeDefMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.createHashMap)(encodeDef);
  var indicesMap = new _DataStore_js__WEBPACK_IMPORTED_MODULE_3__.CtorInt32Array(dimCount);
  for (var i = 0; i < indicesMap.length; i++) {
    indicesMap[i] = -1;
  }
  function getResultItem(dimIdx) {
    var idx = indicesMap[dimIdx];
    if (idx < 0) {
      var dimDefItemRaw = dimsDef[dimIdx];
      var dimDefItem = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(dimDefItemRaw) ? dimDefItemRaw : {
        name: dimDefItemRaw
      };
      var resultItem = new _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
      var userDimName = dimDefItem.name;
      if (userDimName != null && dataDimNameMap.get(userDimName) != null) {
        // Only if `series.dimensions` is defined in option
        // displayName, will be set, and dimension will be displayed vertically in
        // tooltip by default.
        resultItem.name = resultItem.displayName = userDimName;
      }
      dimDefItem.type != null && (resultItem.type = dimDefItem.type);
      dimDefItem.displayName != null && (resultItem.displayName = dimDefItem.displayName);
      var newIdx = resultList.length;
      indicesMap[dimIdx] = newIdx;
      resultItem.storeDimIndex = dimIdx;
      resultList.push(resultItem);
      return resultItem;
    }
    return resultList[idx];
  }
  if (!omitUnusedDimensions) {
    for (var i = 0; i < dimCount; i++) {
      getResultItem(i);
    }
  }
  // Set `coordDim` and `coordDimIndex` by `encodeDefMap` and normalize `encodeDefMap`.
  encodeDefMap.each(function (dataDimsRaw, coordDim) {
    var dataDims = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__.normalizeToArray)(dataDimsRaw).slice();
    // Note: It is allowed that `dataDims.length` is `0`, e.g., options is
    // `{encode: {x: -1, y: 1}}`. Should not filter anything in
    // this case.
    if (dataDims.length === 1 && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString)(dataDims[0]) && dataDims[0] < 0) {
      encodeDefMap.set(coordDim, false);
      return;
    }
    var validDataDims = encodeDefMap.set(coordDim, []);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(dataDims, function (resultDimIdxOrName, idx) {
      // The input resultDimIdx can be dim name or index.
      var resultDimIdx = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString)(resultDimIdxOrName) ? dataDimNameMap.get(resultDimIdxOrName) : resultDimIdxOrName;
      if (resultDimIdx != null && resultDimIdx < dimCount) {
        validDataDims[idx] = resultDimIdx;
        applyDim(getResultItem(resultDimIdx), coordDim, idx);
      }
    });
  });
  // Apply templates and default order from `sysDims`.
  var availDimIdx = 0;
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(sysDims, function (sysDimItemRaw) {
    var coordDim;
    var sysDimItemDimsDef;
    var sysDimItemOtherDims;
    var sysDimItem;
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString)(sysDimItemRaw)) {
      coordDim = sysDimItemRaw;
      sysDimItem = {};
    } else {
      sysDimItem = sysDimItemRaw;
      coordDim = sysDimItem.name;
      var ordinalMeta = sysDimItem.ordinalMeta;
      sysDimItem.ordinalMeta = null;
      sysDimItem = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, sysDimItem);
      sysDimItem.ordinalMeta = ordinalMeta;
      // `coordDimIndex` should not be set directly.
      sysDimItemDimsDef = sysDimItem.dimsDef;
      sysDimItemOtherDims = sysDimItem.otherDims;
      sysDimItem.name = sysDimItem.coordDim = sysDimItem.coordDimIndex = sysDimItem.dimsDef = sysDimItem.otherDims = null;
    }
    var dataDims = encodeDefMap.get(coordDim);
    // negative resultDimIdx means no need to mapping.
    if (dataDims === false) {
      return;
    }
    dataDims = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__.normalizeToArray)(dataDims);
    // dimensions provides default dim sequences.
    if (!dataDims.length) {
      for (var i = 0; i < (sysDimItemDimsDef && sysDimItemDimsDef.length || 1); i++) {
        while (availDimIdx < dimCount && getResultItem(availDimIdx).coordDim != null) {
          availDimIdx++;
        }
        availDimIdx < dimCount && dataDims.push(availDimIdx++);
      }
    }
    // Apply templates.
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(dataDims, function (resultDimIdx, coordDimIndex) {
      var resultItem = getResultItem(resultDimIdx);
      // Coordinate system has a higher priority on dim type than source.
      if (isUsingSourceDimensionsDef && sysDimItem.type != null) {
        resultItem.type = sysDimItem.type;
      }
      applyDim((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults)(resultItem, sysDimItem), coordDim, coordDimIndex);
      if (resultItem.name == null && sysDimItemDimsDef) {
        var sysDimItemDimsDefItem = sysDimItemDimsDef[coordDimIndex];
        !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(sysDimItemDimsDefItem) && (sysDimItemDimsDefItem = {
          name: sysDimItemDimsDefItem
        });
        resultItem.name = resultItem.displayName = sysDimItemDimsDefItem.name;
        resultItem.defaultTooltip = sysDimItemDimsDefItem.defaultTooltip;
      }
      // FIXME refactor, currently only used in case: {otherDims: {tooltip: false}}
      sysDimItemOtherDims && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults)(resultItem.otherDims, sysDimItemOtherDims);
    });
  });
  function applyDim(resultItem, coordDim, coordDimIndex) {
    if (_util_types_js__WEBPACK_IMPORTED_MODULE_6__.VISUAL_DIMENSIONS.get(coordDim) != null) {
      resultItem.otherDims[coordDim] = coordDimIndex;
    } else {
      resultItem.coordDim = coordDim;
      resultItem.coordDimIndex = coordDimIndex;
      coordDimNameMap.set(coordDim, true);
    }
  }
  // Make sure the first extra dim is 'value'.
  var generateCoord = opt.generateCoord;
  var generateCoordCount = opt.generateCoordCount;
  var fromZero = generateCoordCount != null;
  generateCoordCount = generateCoord ? generateCoordCount || 1 : 0;
  var extra = generateCoord || 'value';
  function ifNoNameFillWithCoordName(resultItem) {
    if (resultItem.name == null) {
      // Duplication will be removed in the next step.
      resultItem.name = resultItem.coordDim;
    }
  }
  // Set dim `name` and other `coordDim` and other props.
  if (!omitUnusedDimensions) {
    for (var resultDimIdx = 0; resultDimIdx < dimCount; resultDimIdx++) {
      var resultItem = getResultItem(resultDimIdx);
      var coordDim = resultItem.coordDim;
      if (coordDim == null) {
        // TODO no need to generate coordDim for isExtraCoord?
        resultItem.coordDim = genCoordDimName(extra, coordDimNameMap, fromZero);
        resultItem.coordDimIndex = 0;
        // Series specified generateCoord is using out.
        if (!generateCoord || generateCoordCount <= 0) {
          resultItem.isExtraCoord = true;
        }
        generateCoordCount--;
      }
      ifNoNameFillWithCoordName(resultItem);
      if (resultItem.type == null && ((0,_sourceHelper_js__WEBPACK_IMPORTED_MODULE_7__.guessOrdinal)(source, resultDimIdx) === _sourceHelper_js__WEBPACK_IMPORTED_MODULE_7__.BE_ORDINAL.Must
      // Consider the case:
      // {
      //    dataset: {source: [
      //        ['2001', 123],
      //        ['2002', 456],
      //        ...
      //        ['The others', 987],
      //    ]},
      //    series: {type: 'pie'}
      // }
      // The first column should better be treated as a "ordinal" although it
      // might not be detected as an "ordinal" by `guessOrdinal`.
      || resultItem.isExtraCoord && (resultItem.otherDims.itemName != null || resultItem.otherDims.seriesName != null))) {
        resultItem.type = 'ordinal';
      }
    }
  } else {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(resultList, function (resultItem) {
      // PENDING: guessOrdinal or let user specify type: 'ordinal' manually?
      ifNoNameFillWithCoordName(resultItem);
    });
    // Sort dimensions: there are some rule that use the last dim as label,
    // and for some latter travel process easier.
    resultList.sort(function (item0, item1) {
      return item0.storeDimIndex - item1.storeDimIndex;
    });
  }
  removeDuplication(resultList);
  return new _SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__.SeriesDataSchema({
    source: source,
    dimensions: resultList,
    fullDimensionCount: dimCount,
    dimensionOmitted: omitUnusedDimensions
  });
}
function removeDuplication(result) {
  var duplicationMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.createHashMap)();
  for (var i = 0; i < result.length; i++) {
    var dim = result[i];
    var dimOriginalName = dim.name;
    var count = duplicationMap.get(dimOriginalName) || 0;
    if (count > 0) {
      // Starts from 0.
      dim.name = dimOriginalName + (count - 1);
    }
    count++;
    duplicationMap.set(dimOriginalName, count);
  }
}
// ??? TODO
// Originally detect dimCount by data[0]. Should we
// optimize it to only by sysDims and dimensions and encode.
// So only necessary dims will be initialized.
// But
// (1) custom series should be considered. where other dims
// may be visited.
// (2) sometimes user need to calculate bubble size or use visualMap
// on other dimensions besides coordSys needed.
// So, dims that is not used by system, should be shared in data store?
function getDimCount(source, sysDims, dimsDef, optDimCount) {
  // Note that the result dimCount should not small than columns count
  // of data, otherwise `dataDimNameMap` checking will be incorrect.
  var dimCount = Math.max(source.dimensionsDetectedCount || 1, sysDims.length, dimsDef.length, optDimCount || 0);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(sysDims, function (sysDimItem) {
    var sysDimItemDimsDef;
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(sysDimItem) && (sysDimItemDimsDef = sysDimItem.dimsDef)) {
      dimCount = Math.max(dimCount, sysDimItemDimsDef.length);
    }
  });
  return dimCount;
}
function genCoordDimName(name, map, fromZero) {
  if (fromZero || map.hasKey(name)) {
    var i = 0;
    while (map.hasKey(name + i)) {
      i++;
    }
    name += i;
  }
  map.set(name, true);
  return name;
}

}),
54127: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DefaultDataProvider: function() { return DefaultDataProvider; },
  getRawSourceDataCounter: function() { return getRawSourceDataCounter; },
  getRawSourceItemGetter: function() { return getRawSourceItemGetter; },
  getRawSourceValueGetter: function() { return getRawSourceValueGetter; },
  retrieveRawAttr: function() { return retrieveRawAttr; },
  retrieveRawValue: function() { return retrieveRawValue; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44244);
/* ESM import */var _Source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7056);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
/* ESM import */var _util_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29692);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var _a, _b, _c, _d;
// TODO
// ??? refactor? check the outer usage of data provider.
// merge with defaultDimValueGetter?





var providerMethods;
var mountMethods;
/**
 * If normal array used, mutable chunk size is supported.
 * If typed array used, chunk size must be fixed.
 */
var DefaultDataProvider = /** @class */function () {
  function DefaultDataProvider(sourceParam, dimSize) {
    // let source: Source;
    var source = !(0,_Source_js__WEBPACK_IMPORTED_MODULE_0__.isSourceInstance)(sourceParam) ? (0,_Source_js__WEBPACK_IMPORTED_MODULE_0__.createSourceFromSeriesDataOption)(sourceParam) : sourceParam;
    // declare source is Source;
    this._source = source;
    var data = this._data = source.data;
    var sourceFormat = source.sourceFormat;
    var seriesLayoutBy = source.seriesLayoutBy;
    // Typed array. TODO IE10+?
    if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_TYPED_ARRAY) {
      if (false) {}
      this._offset = 0;
      this._dimSize = dimSize;
      this._data = data;
    }
    if (false) { var validator }
    mountMethods(this, data, source);
  }
  DefaultDataProvider.prototype.getSource = function () {
    return this._source;
  };
  DefaultDataProvider.prototype.count = function () {
    return 0;
  };
  DefaultDataProvider.prototype.getItem = function (idx, out) {
    return;
  };
  DefaultDataProvider.prototype.appendData = function (newData) {};
  DefaultDataProvider.prototype.clean = function () {};
  DefaultDataProvider.protoInitialize = function () {
    // PENDING: To avoid potential incompat (e.g., prototype
    // is visited somewhere), still init them on prototype.
    var proto = DefaultDataProvider.prototype;
    proto.pure = false;
    proto.persistent = true;
  }();
  DefaultDataProvider.internalField = function () {
    var _a;
    mountMethods = function (provider, data, source) {
      var sourceFormat = source.sourceFormat;
      var seriesLayoutBy = source.seriesLayoutBy;
      var startIndex = source.startIndex;
      var dimsDef = source.dimensionsDefine;
      var methods = providerMethods[getMethodMapKey(sourceFormat, seriesLayoutBy)];
      if (false) {}
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)(provider, methods);
      if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_TYPED_ARRAY) {
        provider.getItem = getItemForTypedArray;
        provider.count = countForTypedArray;
        provider.fillStorage = fillStorageForTypedArray;
      } else {
        var rawItemGetter = getRawSourceItemGetter(sourceFormat, seriesLayoutBy);
        provider.getItem = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(rawItemGetter, null, data, startIndex, dimsDef);
        var rawCounter = getRawSourceDataCounter(sourceFormat, seriesLayoutBy);
        provider.count = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(rawCounter, null, data, startIndex, dimsDef);
      }
    };
    var getItemForTypedArray = function (idx, out) {
      idx = idx - this._offset;
      out = out || [];
      var data = this._data;
      var dimSize = this._dimSize;
      var offset = dimSize * idx;
      for (var i = 0; i < dimSize; i++) {
        out[i] = data[offset + i];
      }
      return out;
    };
    var fillStorageForTypedArray = function (start, end, storage, extent) {
      var data = this._data;
      var dimSize = this._dimSize;
      for (var dim = 0; dim < dimSize; dim++) {
        var dimExtent = extent[dim];
        var min = dimExtent[0] == null ? Infinity : dimExtent[0];
        var max = dimExtent[1] == null ? -Infinity : dimExtent[1];
        var count = end - start;
        var arr = storage[dim];
        for (var i = 0; i < count; i++) {
          // appendData with TypedArray will always do replace in provider.
          var val = data[i * dimSize + dim];
          arr[start + i] = val;
          val < min && (min = val);
          val > max && (max = val);
        }
        dimExtent[0] = min;
        dimExtent[1] = max;
      }
    };
    var countForTypedArray = function () {
      return this._data ? this._data.length / this._dimSize : 0;
    };
    providerMethods = (_a = {}, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN] = {
      pure: true,
      appendData: appendDataSimply
    }, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_ROW] = {
      pure: true,
      appendData: function () {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      }
    }, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS] = {
      pure: true,
      appendData: appendDataSimply
    }, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_KEYED_COLUMNS] = {
      pure: true,
      appendData: function (newData) {
        var data = this._data;
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(newData, function (newCol, key) {
          var oldCol = data[key] || (data[key] = []);
          for (var i = 0; i < (newCol || []).length; i++) {
            oldCol.push(newCol[i]);
          }
        });
      }
    }, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL] = {
      appendData: appendDataSimply
    }, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_TYPED_ARRAY] = {
      persistent: false,
      pure: true,
      appendData: function (newData) {
        if (false) {}
        this._data = newData;
      },
      // Clean self if data is already used.
      clean: function () {
        // PENDING
        this._offset += this.count();
        this._data = null;
      }
    }, _a);
    function appendDataSimply(newData) {
      for (var i = 0; i < newData.length; i++) {
        this._data.push(newData[i]);
      }
    }
  }();
  return DefaultDataProvider;
}();

var validateSimply = function (rawData) {
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(rawData)) {
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_3__.error)('series.data or dataset.source must be an array.');
  }
};
/**
 * Only run in dev mode - hint users for debug.
 */
var rawSourceDataValidatorMap = (_a = {}, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN] = validateSimply, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_ROW] = validateSimply, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS] = validateSimply, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_KEYED_COLUMNS] = function (rawData, dimsDef) {
  for (var i = 0; i < dimsDef.length; i++) {
    var dimName = dimsDef[i].name;
    if (dimName == null) {
      (0,_util_log_js__WEBPACK_IMPORTED_MODULE_3__.error)('dimension name must not be null/undefined.');
    }
  }
}, _a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL] = validateSimply, _a);
var getItemSimply = function (rawData, startIndex, dimsDef, idx) {
  return rawData[idx];
};
var rawSourceItemGetterMap = (_b = {}, _b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN] = function (rawData, startIndex, dimsDef, idx) {
  return rawData[idx + startIndex];
}, _b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_ROW] = function (rawData, startIndex, dimsDef, idx, out) {
  idx += startIndex;
  var item = out || [];
  var data = rawData;
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    item[i] = row ? row[idx] : null;
  }
  return item;
}, _b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS] = getItemSimply, _b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_KEYED_COLUMNS] = function (rawData, startIndex, dimsDef, idx, out) {
  var item = out || [];
  for (var i = 0; i < dimsDef.length; i++) {
    var dimName = dimsDef[i].name;
    var col = dimName != null ? rawData[dimName] : null;
    item[i] = col ? col[idx] : null;
  }
  return item;
}, _b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL] = getItemSimply, _b);
function getRawSourceItemGetter(sourceFormat, seriesLayoutBy) {
  var method = rawSourceItemGetterMap[getMethodMapKey(sourceFormat, seriesLayoutBy)];
  if (false) {}
  return method;
}
var countSimply = function (rawData, startIndex, dimsDef) {
  return rawData.length;
};
var rawSourceDataCounterMap = (_c = {}, _c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN] = function (rawData, startIndex, dimsDef) {
  return Math.max(0, rawData.length - startIndex);
}, _c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS + '_' + _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_ROW] = function (rawData, startIndex, dimsDef) {
  var row = rawData[0];
  return row ? Math.max(0, row.length - startIndex) : 0;
}, _c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS] = countSimply, _c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_KEYED_COLUMNS] = function (rawData, startIndex, dimsDef) {
  var dimName = dimsDef[0].name;
  var col = dimName != null ? rawData[dimName] : null;
  return col ? col.length : 0;
}, _c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL] = countSimply, _c);
function getRawSourceDataCounter(sourceFormat, seriesLayoutBy) {
  var method = rawSourceDataCounterMap[getMethodMapKey(sourceFormat, seriesLayoutBy)];
  if (false) {}
  return method;
}
var getRawValueSimply = function (dataItem, dimIndex, property) {
  return dataItem[dimIndex];
};
var rawSourceValueGetterMap = (_d = {}, _d[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS] = getRawValueSimply, _d[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS] = function (dataItem, dimIndex, property) {
  return dataItem[property];
}, _d[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_KEYED_COLUMNS] = getRawValueSimply, _d[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL] = function (dataItem, dimIndex, property) {
  // FIXME: In some case (markpoint in geo (geo-map.html)),
  // dataItem is {coord: [...]}
  var value = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_4__.getDataItemValue)(dataItem);
  return !(value instanceof Array) ? value : value[dimIndex];
}, _d[_util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_TYPED_ARRAY] = getRawValueSimply, _d);
function getRawSourceValueGetter(sourceFormat) {
  var method = rawSourceValueGetterMap[sourceFormat];
  if (false) {}
  return method;
}
function getMethodMapKey(sourceFormat, seriesLayoutBy) {
  return sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS ? sourceFormat + '_' + seriesLayoutBy : sourceFormat;
}
// ??? FIXME can these logic be more neat: getRawValue, getRawDataItem,
// Consider persistent.
// Caution: why use raw value to display on label or tooltip?
// A reason is to avoid format. For example time value we do not know
// how to format is expected. More over, if stack is used, calculated
// value may be 0.91000000001, which have brings trouble to display.
// TODO: consider how to treat null/undefined/NaN when display?
function retrieveRawValue(data, dataIndex,
// If dimIndex is null/undefined, return OptionDataItem.
// Otherwise, return OptionDataValue.
dim) {
  if (!data) {
    return;
  }
  // Consider data may be not persistent.
  var dataItem = data.getRawDataItem(dataIndex);
  if (dataItem == null) {
    return;
  }
  var store = data.getStore();
  var sourceFormat = store.getSource().sourceFormat;
  if (dim != null) {
    var dimIndex = data.getDimensionIndex(dim);
    var property = store.getDimensionProperty(dimIndex);
    return getRawSourceValueGetter(sourceFormat)(dataItem, dimIndex, property);
  } else {
    var result = dataItem;
    if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL) {
      result = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_4__.getDataItemValue)(dataItem);
    }
    return result;
  }
}
/**
 * Compatible with some cases (in pie, map) like:
 * data: [{name: 'xx', value: 5, selected: true}, ...]
 * where only sourceFormat is 'original' and 'objectRows' supported.
 *
 * // TODO
 * Supported detail options in data item when using 'arrayRows'.
 *
 * @param data
 * @param dataIndex
 * @param attr like 'selected'
 */
function retrieveRawAttr(data, dataIndex, attr) {
  if (!data) {
    return;
  }
  var sourceFormat = data.getStore().getSource().sourceFormat;
  if (sourceFormat !== _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL && sourceFormat !== _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS) {
    return;
  }
  var dataItem = data.getRawDataItem(dataIndex);
  if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(dataItem)) {
    dataItem = null;
  }
  if (dataItem) {
    return dataItem[attr];
  }
}

}),
45413: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  enableDataStack: function() { return enableDataStack; },
  getStackedDimension: function() { return getStackedDimension; },
  isDimensionStacked: function() { return isDimensionStacked; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41219);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * Note that it is too complicated to support 3d stack by value
 * (have to create two-dimension inverted index), so in 3d case
 * we just support that stacked by index.
 *
 * @param seriesModel
 * @param dimensionsInput The same as the input of <module:echarts/data/SeriesData>.
 *        The input will be modified.
 * @param opt
 * @param opt.stackedCoordDimension Specify a coord dimension if needed.
 * @param opt.byIndex=false
 * @return calculationInfo
 * {
 *     stackedDimension: string
 *     stackedByDimension: string
 *     isStackedByIndex: boolean
 *     stackedOverDimension: string
 *     stackResultDimension: string
 * }
 */
function enableDataStack(seriesModel, dimensionsInput, opt) {
  opt = opt || {};
  var byIndex = opt.byIndex;
  var stackedCoordDimension = opt.stackedCoordDimension;
  var dimensionDefineList;
  var schema;
  var store;
  if (isLegacyDimensionsInput(dimensionsInput)) {
    dimensionDefineList = dimensionsInput;
  } else {
    schema = dimensionsInput.schema;
    dimensionDefineList = schema.dimensions;
    store = dimensionsInput.store;
  }
  // Compatibal: when `stack` is set as '', do not stack.
  var mayStack = !!(seriesModel && seriesModel.get('stack'));
  var stackedByDimInfo;
  var stackedDimInfo;
  var stackResultDimension;
  var stackedOverDimension;
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(dimensionDefineList, function (dimensionInfo, index) {
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(dimensionInfo)) {
      dimensionDefineList[index] = dimensionInfo = {
        name: dimensionInfo
      };
    }
    if (mayStack && !dimensionInfo.isExtraCoord) {
      // Find the first ordinal dimension as the stackedByDimInfo.
      if (!byIndex && !stackedByDimInfo && dimensionInfo.ordinalMeta) {
        stackedByDimInfo = dimensionInfo;
      }
      // Find the first stackable dimension as the stackedDimInfo.
      if (!stackedDimInfo && dimensionInfo.type !== 'ordinal' && dimensionInfo.type !== 'time' && (!stackedCoordDimension || stackedCoordDimension === dimensionInfo.coordDim)) {
        stackedDimInfo = dimensionInfo;
      }
    }
  });
  if (stackedDimInfo && !byIndex && !stackedByDimInfo) {
    // Compatible with previous design, value axis (time axis) only stack by index.
    // It may make sense if the user provides elaborately constructed data.
    byIndex = true;
  }
  // Add stack dimension, they can be both calculated by coordinate system in `unionExtent`.
  // That put stack logic in List is for using conveniently in echarts extensions, but it
  // might not be a good way.
  if (stackedDimInfo) {
    // Use a weird name that not duplicated with other names.
    // Also need to use seriesModel.id as postfix because different
    // series may share same data store. The stack dimension needs to be distinguished.
    stackResultDimension = '__\0ecstackresult_' + seriesModel.id;
    stackedOverDimension = '__\0ecstackedover_' + seriesModel.id;
    // Create inverted index to fast query index by value.
    if (stackedByDimInfo) {
      stackedByDimInfo.createInvertedIndices = true;
    }
    var stackedDimCoordDim_1 = stackedDimInfo.coordDim;
    var stackedDimType = stackedDimInfo.type;
    var stackedDimCoordIndex_1 = 0;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(dimensionDefineList, function (dimensionInfo) {
      if (dimensionInfo.coordDim === stackedDimCoordDim_1) {
        stackedDimCoordIndex_1++;
      }
    });
    var stackedOverDimensionDefine = {
      name: stackResultDimension,
      coordDim: stackedDimCoordDim_1,
      coordDimIndex: stackedDimCoordIndex_1,
      type: stackedDimType,
      isExtraCoord: true,
      isCalculationCoord: true,
      storeDimIndex: dimensionDefineList.length
    };
    var stackResultDimensionDefine = {
      name: stackedOverDimension,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: stackedOverDimension,
      coordDimIndex: stackedDimCoordIndex_1 + 1,
      type: stackedDimType,
      isExtraCoord: true,
      isCalculationCoord: true,
      storeDimIndex: dimensionDefineList.length + 1
    };
    if (schema) {
      if (store) {
        stackedOverDimensionDefine.storeDimIndex = store.ensureCalculationDimension(stackedOverDimension, stackedDimType);
        stackResultDimensionDefine.storeDimIndex = store.ensureCalculationDimension(stackResultDimension, stackedDimType);
      }
      schema.appendCalculationDimension(stackedOverDimensionDefine);
      schema.appendCalculationDimension(stackResultDimensionDefine);
    } else {
      dimensionDefineList.push(stackedOverDimensionDefine);
      dimensionDefineList.push(stackResultDimensionDefine);
    }
  }
  return {
    stackedDimension: stackedDimInfo && stackedDimInfo.name,
    stackedByDimension: stackedByDimInfo && stackedByDimInfo.name,
    isStackedByIndex: byIndex,
    stackedOverDimension: stackedOverDimension,
    stackResultDimension: stackResultDimension
  };
}
function isLegacyDimensionsInput(dimensionsInput) {
  return !(0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_1__.isSeriesDataSchema)(dimensionsInput.schema);
}
function isDimensionStacked(data, stackedDim) {
  // Each single series only maps to one pair of axis. So we do not need to
  // check stackByDim, whatever stacked by a dimension or stacked by index.
  return !!stackedDim && stackedDim === data.getCalculationInfo('stackedDimension');
}
function getStackedDimension(data, targetDim) {
  return isDimensionStacked(data, targetDim) ? data.getCalculationInfo('stackResultDimension') : targetDim;
}

}),
67918: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SortOrderComparator: function() { return SortOrderComparator; },
  createFilterComparator: function() { return createFilterComparator; },
  getRawValueParser: function() { return getRawValueParser; },
  parseDataValue: function() { return parseDataValue; }
});
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48843);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _util_log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29692);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



/**
 * Convert raw the value in to inner value in List.
 *
 * [Performance sensitive]
 *
 * [Caution]: this is the key logic of user value parser.
 * For backward compatibility, do not modify it until you have to!
 */
function parseDataValue(value,
// For high performance, do not omit the second param.
opt) {
  // Performance sensitive.
  var dimType = opt && opt.type;
  if (dimType === 'ordinal') {
    // If given value is a category string
    return value;
  }
  if (dimType === 'time'
  // spead up when using timestamp
  && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && value != null && value !== '-') {
    value = +(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.parseDate)(value);
  }
  // dimType defaults 'number'.
  // If dimType is not ordinal and value is null or undefined or NaN or '-',
  // parse to NaN.
  // number-like string (like ' 123 ') can be converted to a number.
  // where null/undefined or other string will be converted to NaN.
  return value == null || value === '' ? NaN
  // If string (like '-'), using '+' parse to NaN
  // If object, also parse to NaN
  : Number(value);
}
;
var valueParserMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)({
  'number': function (val) {
    // Do not use `numericToNumber` here. We have `numericToNumber` by default.
    // Here the number parser can have loose rule:
    // enable to cut suffix: "120px" => 120, "14%" => 14.
    return parseFloat(val);
  },
  'time': function (val) {
    // return timestamp.
    return +(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.parseDate)(val);
  },
  'trim': function (val) {
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(val) ? (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.trim)(val) : val;
  }
});
function getRawValueParser(type) {
  return valueParserMap.get(type);
}
var ORDER_COMPARISON_OP_MAP = {
  lt: function (lval, rval) {
    return lval < rval;
  },
  lte: function (lval, rval) {
    return lval <= rval;
  },
  gt: function (lval, rval) {
    return lval > rval;
  },
  gte: function (lval, rval) {
    return lval >= rval;
  }
};
var FilterOrderComparator = /** @class */function () {
  function FilterOrderComparator(op, rval) {
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(rval)) {
      var errMsg = '';
      if (false) {}
      (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
    }
    this._opFn = ORDER_COMPARISON_OP_MAP[op];
    this._rvalFloat = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.numericToNumber)(rval);
  }
  // Performance sensitive.
  FilterOrderComparator.prototype.evaluate = function (lval) {
    // Most cases is 'number', and typeof maybe 10 times faseter than parseFloat.
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(lval) ? this._opFn(lval, this._rvalFloat) : this._opFn((0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.numericToNumber)(lval), this._rvalFloat);
  };
  return FilterOrderComparator;
}();
var SortOrderComparator = /** @class */function () {
  /**
   * @param order by default: 'asc'
   * @param incomparable by default: Always on the tail.
   *        That is, if 'asc' => 'max', if 'desc' => 'min'
   *        See the definition of "incomparable" in [SORT_COMPARISON_RULE].
   */
  function SortOrderComparator(order, incomparable) {
    var isDesc = order === 'desc';
    this._resultLT = isDesc ? 1 : -1;
    if (incomparable == null) {
      incomparable = isDesc ? 'min' : 'max';
    }
    this._incomparable = incomparable === 'min' ? -Infinity : Infinity;
  }
  // See [SORT_COMPARISON_RULE].
  // Performance sensitive.
  SortOrderComparator.prototype.evaluate = function (lval, rval) {
    // Most cases is 'number', and typeof maybe 10 times faseter than parseFloat.
    var lvalFloat = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(lval) ? lval : (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.numericToNumber)(lval);
    var rvalFloat = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(rval) ? rval : (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.numericToNumber)(rval);
    var lvalNotNumeric = isNaN(lvalFloat);
    var rvalNotNumeric = isNaN(rvalFloat);
    if (lvalNotNumeric) {
      lvalFloat = this._incomparable;
    }
    if (rvalNotNumeric) {
      rvalFloat = this._incomparable;
    }
    if (lvalNotNumeric && rvalNotNumeric) {
      var lvalIsStr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(lval);
      var rvalIsStr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(rval);
      if (lvalIsStr) {
        lvalFloat = rvalIsStr ? lval : 0;
      }
      if (rvalIsStr) {
        rvalFloat = lvalIsStr ? rval : 0;
      }
    }
    return lvalFloat < rvalFloat ? this._resultLT : lvalFloat > rvalFloat ? -this._resultLT : 0;
  };
  return SortOrderComparator;
}();

var FilterEqualityComparator = /** @class */function () {
  function FilterEqualityComparator(isEq, rval) {
    this._rval = rval;
    this._isEQ = isEq;
    this._rvalTypeof = typeof rval;
    this._rvalFloat = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.numericToNumber)(rval);
  }
  // Performance sensitive.
  FilterEqualityComparator.prototype.evaluate = function (lval) {
    var eqResult = lval === this._rval;
    if (!eqResult) {
      var lvalTypeof = typeof lval;
      if (lvalTypeof !== this._rvalTypeof && (lvalTypeof === 'number' || this._rvalTypeof === 'number')) {
        eqResult = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.numericToNumber)(lval) === this._rvalFloat;
      }
    }
    return this._isEQ ? eqResult : !eqResult;
  };
  return FilterEqualityComparator;
}();
/**
 * [FILTER_COMPARISON_RULE]
 * `lt`|`lte`|`gt`|`gte`:
 * + rval must be a number. And lval will be converted to number (`numericToNumber`) to compare.
 * `eq`:
 * + If same type, compare with `===`.
 * + If there is one number, convert to number (`numericToNumber`) to compare.
 * + Else return `false`.
 * `ne`:
 * + Not `eq`.
 *
 *
 * [SORT_COMPARISON_RULE]
 * All the values are grouped into three categories:
 * + "numeric" (number and numeric string)
 * + "non-numeric-string" (string that excluding numeric string)
 * + "others"
 * "numeric" vs "numeric": values are ordered by number order.
 * "non-numeric-string" vs "non-numeric-string": values are ordered by ES spec (#sec-abstract-relational-comparison).
 * "others" vs "others": do not change order (always return 0).
 * "numeric" vs "non-numeric-string": "non-numeric-string" is treated as "incomparable".
 * "number" vs "others": "others" is treated as "incomparable".
 * "non-numeric-string" vs "others": "others" is treated as "incomparable".
 * "incomparable" will be seen as -Infinity or Infinity (depends on the settings).
 * MEMO:
 *   Non-numeric string sort makes sense when we need to put the items with the same tag together.
 *   But if we support string sort, we still need to avoid the misleading like `'2' > '12'`,
 *   So we treat "numeric-string" sorted by number order rather than string comparison.
 *
 *
 * [CHECK_LIST_OF_THE_RULE_DESIGN]
 * + Do not support string comparison until required. And also need to
 *   avoid the misleading of "2" > "12".
 * + Should avoid the misleading case:
 *   `" 22 " gte "22"` is `true` but `" 22 " eq "22"` is `false`.
 * + JS bad case should be avoided: null <= 0, [] <= 0, ' ' <= 0, ...
 * + Only "numeric" can be converted to comparable number, otherwise converted to NaN.
 *   See `util/number.ts#numericToNumber`.
 *
 * @return If `op` is not `RelationalOperator`, return null;
 */
function createFilterComparator(op, rval) {
  return op === 'eq' || op === 'ne' ? new FilterEqualityComparator(op === 'eq', rval) : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(ORDER_COMPARISON_OP_MAP, op) ? new FilterOrderComparator(op, rval) : null;
}

}),
7676: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDimensionTypeByAxis: function() { return getDimensionTypeByAxis; },
  summarizeDimensions: function() { return summarizeDimensions; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var DimensionUserOuput = /** @class */function () {
  function DimensionUserOuput(encode, dimRequest) {
    this._encode = encode;
    this._schema = dimRequest;
  }
  DimensionUserOuput.prototype.get = function () {
    return {
      // Do not generate full dimension name until fist used.
      fullDimensions: this._getFullDimensionNames(),
      encode: this._encode
    };
  };
  /**
   * Get all data store dimension names.
   * Theoretically a series data store is defined both by series and used dataset (if any).
   * If some dimensions are omitted for performance reason in `this.dimensions`,
   * the dimension name may not be auto-generated if user does not specify a dimension name.
   * In this case, the dimension name is `null`/`undefined`.
   */
  DimensionUserOuput.prototype._getFullDimensionNames = function () {
    if (!this._cachedDimNames) {
      this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : [];
    }
    return this._cachedDimNames;
  };
  return DimensionUserOuput;
}();
;
function summarizeDimensions(data, schema) {
  var summary = {};
  var encode = summary.encode = {};
  var notExtraCoordDimMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  var defaultedLabel = [];
  var defaultedTooltip = [];
  var userOutputEncode = {};
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(data.dimensions, function (dimName) {
    var dimItem = data.getDimensionInfo(dimName);
    var coordDim = dimItem.coordDim;
    if (coordDim) {
      if (false) {}
      var coordDimIndex = dimItem.coordDimIndex;
      getOrCreateEncodeArr(encode, coordDim)[coordDimIndex] = dimName;
      if (!dimItem.isExtraCoord) {
        notExtraCoordDimMap.set(coordDim, 1);
        // Use the last coord dim (and label friendly) as default label,
        // because when dataset is used, it is hard to guess which dimension
        // can be value dimension. If both show x, y on label is not look good,
        // and conventionally y axis is focused more.
        if (mayLabelDimType(dimItem.type)) {
          defaultedLabel[0] = dimName;
        }
        // User output encode do not contain generated coords.
        // And it only has index. User can use index to retrieve value from the raw item array.
        getOrCreateEncodeArr(userOutputEncode, coordDim)[coordDimIndex] = data.getDimensionIndex(dimItem.name);
      }
      if (dimItem.defaultTooltip) {
        defaultedTooltip.push(dimName);
      }
    }
    _util_types_js__WEBPACK_IMPORTED_MODULE_1__.VISUAL_DIMENSIONS.each(function (v, otherDim) {
      var encodeArr = getOrCreateEncodeArr(encode, otherDim);
      var dimIndex = dimItem.otherDims[otherDim];
      if (dimIndex != null && dimIndex !== false) {
        encodeArr[dimIndex] = dimItem.name;
      }
    });
  });
  var dataDimsOnCoord = [];
  var encodeFirstDimNotExtra = {};
  notExtraCoordDimMap.each(function (v, coordDim) {
    var dimArr = encode[coordDim];
    encodeFirstDimNotExtra[coordDim] = dimArr[0];
    // Not necessary to remove duplicate, because a data
    // dim canot on more than one coordDim.
    dataDimsOnCoord = dataDimsOnCoord.concat(dimArr);
  });
  summary.dataDimsOnCoord = dataDimsOnCoord;
  summary.dataDimIndicesOnCoord = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(dataDimsOnCoord, function (dimName) {
    return data.getDimensionInfo(dimName).storeDimIndex;
  });
  summary.encodeFirstDimNotExtra = encodeFirstDimNotExtra;
  var encodeLabel = encode.label;
  // FIXME `encode.label` is not recommended, because formatter cannot be set
  // in this way. Use label.formatter instead. Maybe remove this approach someday.
  if (encodeLabel && encodeLabel.length) {
    defaultedLabel = encodeLabel.slice();
  }
  var encodeTooltip = encode.tooltip;
  if (encodeTooltip && encodeTooltip.length) {
    defaultedTooltip = encodeTooltip.slice();
  } else if (!defaultedTooltip.length) {
    defaultedTooltip = defaultedLabel.slice();
  }
  encode.defaultedLabel = defaultedLabel;
  encode.defaultedTooltip = defaultedTooltip;
  summary.userOutput = new DimensionUserOuput(userOutputEncode, schema);
  return summary;
}
function getOrCreateEncodeArr(encode, dim) {
  if (!encode.hasOwnProperty(dim)) {
    encode[dim] = [];
  }
  return encode[dim];
}
// FIXME:TS should be type `AxisType`
function getDimensionTypeByAxis(axisType) {
  return axisType === 'category' ? 'ordinal' : axisType === 'time' ? 'time' : 'float';
}
function mayLabelDimType(dimType) {
  // In most cases, ordinal and time do not suitable for label.
  // Ordinal info can be displayed on axis. Time is too long.
  return !(dimType === 'ordinal' || dimType === 'time');
}
// function findTheLastDimMayLabel(data) {
//     // Get last value dim
//     let dimensions = data.dimensions.slice();
//     let valueType;
//     let valueDim;
//     while (dimensions.length && (
//         valueDim = dimensions.pop(),
//         valueType = data.getDimensionInfo(valueDim).type,
//         valueType === 'ordinal' || valueType === 'time'
//     )) {} // jshint ignore:line
//     return valueDim;
// }

}),
37316: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
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
 * Link lists and struct (graph or tree)
 */


var inner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
function linkSeriesData(opt) {
  var mainData = opt.mainData;
  var datas = opt.datas;
  if (!datas) {
    datas = {
      main: mainData
    };
    opt.datasAttr = {
      main: 'data'
    };
  }
  opt.datas = opt.mainData = null;
  linkAll(mainData, datas, opt);
  // Porxy data original methods.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(datas, function (data) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(mainData.TRANSFERABLE_METHODS, function (methodName) {
      data.wrapMethod(methodName, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.curry)(transferInjection, opt));
    });
  });
  // Beyond transfer, additional features should be added to `cloneShallow`.
  mainData.wrapMethod('cloneShallow', (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.curry)(cloneShallowInjection, opt));
  // Only mainData trigger change, because struct.update may trigger
  // another changable methods, which may bring about dead lock.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(mainData.CHANGABLE_METHODS, function (methodName) {
    mainData.wrapMethod(methodName, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.curry)(changeInjection, opt));
  });
  // Make sure datas contains mainData.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.assert)(datas[mainData.dataType] === mainData);
}
function transferInjection(opt, res) {
  if (isMainData(this)) {
    // Transfer datas to new main data.
    var datas = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, inner(this).datas);
    datas[this.dataType] = res;
    linkAll(res, datas, opt);
  } else {
    // Modify the reference in main data to point newData.
    linkSingle(res, this.dataType, inner(this).mainData, opt);
  }
  return res;
}
function changeInjection(opt, res) {
  opt.struct && opt.struct.update();
  return res;
}
function cloneShallowInjection(opt, res) {
  // cloneShallow, which brings about some fragilities, may be inappropriate
  // to be exposed as an API. So for implementation simplicity we can make
  // the restriction that cloneShallow of not-mainData should not be invoked
  // outside, but only be invoked here.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(inner(res).datas, function (data, dataType) {
    data !== res && linkSingle(data.cloneShallow(), dataType, res, opt);
  });
  return res;
}
/**
 * Supplement method to List.
 *
 * @public
 * @param [dataType] If not specified, return mainData.
 */
function getLinkedData(dataType) {
  var mainData = inner(this).mainData;
  return dataType == null || mainData == null ? mainData : inner(mainData).datas[dataType];
}
/**
 * Get list of all linked data
 */
function getLinkedDataAll() {
  var mainData = inner(this).mainData;
  return mainData == null ? [{
    data: mainData
  }] : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(inner(mainData).datas), function (type) {
    return {
      type: type,
      data: inner(mainData).datas[type]
    };
  });
}
function isMainData(data) {
  return inner(data).mainData === data;
}
function linkAll(mainData, datas, opt) {
  inner(mainData).datas = {};
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(datas, function (data, dataType) {
    linkSingle(data, dataType, mainData, opt);
  });
}
function linkSingle(data, dataType, mainData, opt) {
  inner(mainData).datas[dataType] = data;
  inner(data).mainData = mainData;
  data.dataType = dataType;
  if (opt.struct) {
    data[opt.structAttr] = opt.struct;
    opt.struct[opt.datasAttr[dataType]] = data;
  }
  // Supplement method.
  data.getLinkedData = getLinkedData;
  data.getLinkedDataAll = getLinkedDataAll;
}
/* ESM default export */ __webpack_exports__["default"] = (linkSeriesData);

}),
56562: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BE_ORDINAL: function() { return BE_ORDINAL; },
  guessOrdinal: function() { return guessOrdinal; },
  makeSeriesEncodeForAxisCoordSys: function() { return makeSeriesEncodeForAxisCoordSys; },
  makeSeriesEncodeForNameBased: function() { return makeSeriesEncodeForNameBased; },
  queryDatasetUpstreamDatasetModels: function() { return queryDatasetUpstreamDatasetModels; },
  querySeriesUpstreamDatasetModel: function() { return querySeriesUpstreamDatasetModel; },
  resetSourceDefaulter: function() { return resetSourceDefaulter; }
});
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19081);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



// The result of `guessOrdinal`.
var BE_ORDINAL = {
  Must: 1,
  Might: 2,
  Not: 3 // Other cases
};
var innerGlobalModel = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
/**
 * MUST be called before mergeOption of all series.
 */
function resetSourceDefaulter(ecModel) {
  // `datasetMap` is used to make default encode.
  innerGlobalModel(ecModel).datasetMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.createHashMap)();
}
/**
 * [The strategy of the arrengment of data dimensions for dataset]:
 * "value way": all axes are non-category axes. So series one by one take
 *     several (the number is coordSysDims.length) dimensions from dataset.
 *     The result of data arrengment of data dimensions like:
 *     | ser0_x | ser0_y | ser1_x | ser1_y | ser2_x | ser2_y |
 * "category way": at least one axis is category axis. So the the first data
 *     dimension is always mapped to the first category axis and shared by
 *     all of the series. The other data dimensions are taken by series like
 *     "value way" does.
 *     The result of data arrengment of data dimensions like:
 *     | ser_shared_x | ser0_y | ser1_y | ser2_y |
 *
 * @return encode Never be `null/undefined`.
 */
function makeSeriesEncodeForAxisCoordSys(coordDimensions, seriesModel, source) {
  var encode = {};
  var datasetModel = querySeriesUpstreamDatasetModel(seriesModel);
  // Currently only make default when using dataset, util more reqirements occur.
  if (!datasetModel || !coordDimensions) {
    return encode;
  }
  var encodeItemName = [];
  var encodeSeriesName = [];
  var ecModel = seriesModel.ecModel;
  var datasetMap = innerGlobalModel(ecModel).datasetMap;
  var key = datasetModel.uid + '_' + source.seriesLayoutBy;
  var baseCategoryDimIndex;
  var categoryWayValueDimStart;
  coordDimensions = coordDimensions.slice();
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(coordDimensions, function (coordDimInfoLoose, coordDimIdx) {
    var coordDimInfo = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(coordDimInfoLoose) ? coordDimInfoLoose : coordDimensions[coordDimIdx] = {
      name: coordDimInfoLoose
    };
    if (coordDimInfo.type === 'ordinal' && baseCategoryDimIndex == null) {
      baseCategoryDimIndex = coordDimIdx;
      categoryWayValueDimStart = getDataDimCountOnCoordDim(coordDimInfo);
    }
    encode[coordDimInfo.name] = [];
  });
  var datasetRecord = datasetMap.get(key) || datasetMap.set(key, {
    categoryWayDim: categoryWayValueDimStart,
    valueWayDim: 0
  });
  // TODO
  // Auto detect first time axis and do arrangement.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(coordDimensions, function (coordDimInfo, coordDimIdx) {
    var coordDimName = coordDimInfo.name;
    var count = getDataDimCountOnCoordDim(coordDimInfo);
    // In value way.
    if (baseCategoryDimIndex == null) {
      var start = datasetRecord.valueWayDim;
      pushDim(encode[coordDimName], start, count);
      pushDim(encodeSeriesName, start, count);
      datasetRecord.valueWayDim += count;
      // ??? TODO give a better default series name rule?
      // especially when encode x y specified.
      // consider: when multiple series share one dimension
      // category axis, series name should better use
      // the other dimension name. On the other hand, use
      // both dimensions name.
    }
    // In category way, the first category axis.
    else if (baseCategoryDimIndex === coordDimIdx) {
      pushDim(encode[coordDimName], 0, count);
      pushDim(encodeItemName, 0, count);
    }
    // In category way, the other axis.
    else {
      var start = datasetRecord.categoryWayDim;
      pushDim(encode[coordDimName], start, count);
      pushDim(encodeSeriesName, start, count);
      datasetRecord.categoryWayDim += count;
    }
  });
  function pushDim(dimIdxArr, idxFrom, idxCount) {
    for (var i = 0; i < idxCount; i++) {
      dimIdxArr.push(idxFrom + i);
    }
  }
  function getDataDimCountOnCoordDim(coordDimInfo) {
    var dimsDef = coordDimInfo.dimsDef;
    return dimsDef ? dimsDef.length : 1;
  }
  encodeItemName.length && (encode.itemName = encodeItemName);
  encodeSeriesName.length && (encode.seriesName = encodeSeriesName);
  return encode;
}
/**
 * Work for data like [{name: ..., value: ...}, ...].
 *
 * @return encode Never be `null/undefined`.
 */
function makeSeriesEncodeForNameBased(seriesModel, source, dimCount) {
  var encode = {};
  var datasetModel = querySeriesUpstreamDatasetModel(seriesModel);
  // Currently only make default when using dataset, util more reqirements occur.
  if (!datasetModel) {
    return encode;
  }
  var sourceFormat = source.sourceFormat;
  var dimensionsDefine = source.dimensionsDefine;
  var potentialNameDimIndex;
  if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_2__.SOURCE_FORMAT_OBJECT_ROWS || sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_2__.SOURCE_FORMAT_KEYED_COLUMNS) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(dimensionsDefine, function (dim, idx) {
      if (((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(dim) ? dim.name : dim) === 'name') {
        potentialNameDimIndex = idx;
      }
    });
  }
  var idxResult = function () {
    var idxRes0 = {};
    var idxRes1 = {};
    var guessRecords = [];
    // 5 is an experience value.
    for (var i = 0, len = Math.min(5, dimCount); i < len; i++) {
      var guessResult = doGuessOrdinal(source.data, sourceFormat, source.seriesLayoutBy, dimensionsDefine, source.startIndex, i);
      guessRecords.push(guessResult);
      var isPureNumber = guessResult === BE_ORDINAL.Not;
      // [Strategy of idxRes0]: find the first BE_ORDINAL.Not as the value dim,
      // and then find a name dim with the priority:
      // "BE_ORDINAL.Might|BE_ORDINAL.Must" > "other dim" > "the value dim itself".
      if (isPureNumber && idxRes0.v == null && i !== potentialNameDimIndex) {
        idxRes0.v = i;
      }
      if (idxRes0.n == null || idxRes0.n === idxRes0.v || !isPureNumber && guessRecords[idxRes0.n] === BE_ORDINAL.Not) {
        idxRes0.n = i;
      }
      if (fulfilled(idxRes0) && guessRecords[idxRes0.n] !== BE_ORDINAL.Not) {
        return idxRes0;
      }
      // [Strategy of idxRes1]: if idxRes0 not satisfied (that is, no BE_ORDINAL.Not),
      // find the first BE_ORDINAL.Might as the value dim,
      // and then find a name dim with the priority:
      // "other dim" > "the value dim itself".
      // That is for backward compat: number-like (e.g., `'3'`, `'55'`) can be
      // treated as number.
      if (!isPureNumber) {
        if (guessResult === BE_ORDINAL.Might && idxRes1.v == null && i !== potentialNameDimIndex) {
          idxRes1.v = i;
        }
        if (idxRes1.n == null || idxRes1.n === idxRes1.v) {
          idxRes1.n = i;
        }
      }
    }
    function fulfilled(idxResult) {
      return idxResult.v != null && idxResult.n != null;
    }
    return fulfilled(idxRes0) ? idxRes0 : fulfilled(idxRes1) ? idxRes1 : null;
  }();
  if (idxResult) {
    encode.value = [idxResult.v];
    // `potentialNameDimIndex` has highest priority.
    var nameDimIndex = potentialNameDimIndex != null ? potentialNameDimIndex : idxResult.n;
    // By default, label uses itemName in charts.
    // So we don't set encodeLabel here.
    encode.itemName = [nameDimIndex];
    encode.seriesName = [nameDimIndex];
  }
  return encode;
}
/**
 * @return If return null/undefined, indicate that should not use datasetModel.
 */
function querySeriesUpstreamDatasetModel(seriesModel) {
  // Caution: consider the scenario:
  // A dataset is declared and a series is not expected to use the dataset,
  // and at the beginning `setOption({series: { noData })` (just prepare other
  // option but no data), then `setOption({series: {data: [...]}); In this case,
  // the user should set an empty array to avoid that dataset is used by default.
  var thisData = seriesModel.get('data', true);
  if (!thisData) {
    return (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.queryReferringComponents)(seriesModel.ecModel, 'dataset', {
      index: seriesModel.get('datasetIndex', true),
      id: seriesModel.get('datasetId', true)
    }, _util_model_js__WEBPACK_IMPORTED_MODULE_0__.SINGLE_REFERRING).models[0];
  }
}
/**
 * @return Always return an array event empty.
 */
function queryDatasetUpstreamDatasetModels(datasetModel) {
  // Only these attributes declared, we by default reference to `datasetIndex: 0`.
  // Otherwise, no reference.
  if (!datasetModel.get('transform', true) && !datasetModel.get('fromTransformResult', true)) {
    return [];
  }
  return (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.queryReferringComponents)(datasetModel.ecModel, 'dataset', {
    index: datasetModel.get('fromDatasetIndex', true),
    id: datasetModel.get('fromDatasetId', true)
  }, _util_model_js__WEBPACK_IMPORTED_MODULE_0__.SINGLE_REFERRING).models;
}
/**
 * The rule should not be complex, otherwise user might not
 * be able to known where the data is wrong.
 * The code is ugly, but how to make it neat?
 */
function guessOrdinal(source, dimIndex) {
  return doGuessOrdinal(source.data, source.sourceFormat, source.seriesLayoutBy, source.dimensionsDefine, source.startIndex, dimIndex);
}
// dimIndex may be overflow source data.
// return {BE_ORDINAL}
function doGuessOrdinal(data, sourceFormat, seriesLayoutBy, dimensionsDefine, startIndex, dimIndex) {
  var result;
  // Experience value.
  var maxLoop = 5;
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isTypedArray)(data)) {
    return BE_ORDINAL.Not;
  }
  // When sourceType is 'objectRows' or 'keyedColumns', dimensionsDefine
  // always exists in source.
  var dimName;
  var dimType;
  if (dimensionsDefine) {
    var dimDefItem = dimensionsDefine[dimIndex];
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(dimDefItem)) {
      dimName = dimDefItem.name;
      dimType = dimDefItem.type;
    } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString)(dimDefItem)) {
      dimName = dimDefItem;
    }
  }
  if (dimType != null) {
    return dimType === 'ordinal' ? BE_ORDINAL.Must : BE_ORDINAL.Not;
  }
  if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_2__.SOURCE_FORMAT_ARRAY_ROWS) {
    var dataArrayRows = data;
    if (seriesLayoutBy === _util_types_js__WEBPACK_IMPORTED_MODULE_2__.SERIES_LAYOUT_BY_ROW) {
      var sample = dataArrayRows[dimIndex];
      for (var i = 0; i < (sample || []).length && i < maxLoop; i++) {
        if ((result = detectValue(sample[startIndex + i])) != null) {
          return result;
        }
      }
    } else {
      for (var i = 0; i < dataArrayRows.length && i < maxLoop; i++) {
        var row = dataArrayRows[startIndex + i];
        if (row && (result = detectValue(row[dimIndex])) != null) {
          return result;
        }
      }
    }
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_2__.SOURCE_FORMAT_OBJECT_ROWS) {
    var dataObjectRows = data;
    if (!dimName) {
      return BE_ORDINAL.Not;
    }
    for (var i = 0; i < dataObjectRows.length && i < maxLoop; i++) {
      var item = dataObjectRows[i];
      if (item && (result = detectValue(item[dimName])) != null) {
        return result;
      }
    }
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_2__.SOURCE_FORMAT_KEYED_COLUMNS) {
    var dataKeyedColumns = data;
    if (!dimName) {
      return BE_ORDINAL.Not;
    }
    var sample = dataKeyedColumns[dimName];
    if (!sample || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isTypedArray)(sample)) {
      return BE_ORDINAL.Not;
    }
    for (var i = 0; i < sample.length && i < maxLoop; i++) {
      if ((result = detectValue(sample[i])) != null) {
        return result;
      }
    }
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_2__.SOURCE_FORMAT_ORIGINAL) {
    var dataOriginal = data;
    for (var i = 0; i < dataOriginal.length && i < maxLoop; i++) {
      var item = dataOriginal[i];
      var val = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.getDataItemValue)(item);
      if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
        return BE_ORDINAL.Not;
      }
      if ((result = detectValue(val[dimIndex])) != null) {
        return result;
      }
    }
  }
  function detectValue(val) {
    var beStr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString)(val);
    // Consider usage convenience, '1', '2' will be treated as "number".
    // `Number('')` (or any whitespace) is `0`.
    if (val != null && Number.isFinite(Number(val)) && val !== '') {
      return beStr ? BE_ORDINAL.Might : BE_ORDINAL.Not;
    } else if (beStr && val !== '-') {
      return BE_ORDINAL.Must;
    }
  }
  return BE_ORDINAL.Not;
}

}),
89442: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SourceManager: function() { return SourceManager; },
  disableTransformOptionMerge: function() { return disableTransformOptionMerge; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _Source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7056);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
/* ESM import */var _sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56562);
/* ESM import */var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38146);
/* ESM import */var _DataStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73178);
/* ESM import */var _dataProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54127);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







/**
 * [REQUIREMENT_MEMO]:
 * (0) `metaRawOption` means `dimensions`/`sourceHeader`/`seriesLayoutBy` in raw option.
 * (1) Keep support the feature: `metaRawOption` can be specified both on `series` and
 * `root-dataset`. Them on `series` has higher priority.
 * (2) Do not support to set `metaRawOption` on a `non-root-dataset`, because it might
 * confuse users: whether those props indicate how to visit the upstream source or visit
 * the transform result source, and some transforms has nothing to do with these props,
 * and some transforms might have multiple upstream.
 * (3) Transforms should specify `metaRawOption` in each output, just like they can be
 * declared in `root-dataset`.
 * (4) At present only support visit source in `SERIES_LAYOUT_BY_COLUMN` in transforms.
 * That is for reducing complexity in transforms.
 * PENDING: Whether to provide transposition transform?
 *
 * [IMPLEMENTAION_MEMO]:
 * "sourceVisitConfig" are calculated from `metaRawOption` and `data`.
 * They will not be calculated until `source` is about to be visited (to prevent from
 * duplicate calcuation). `source` is visited only in series and input to transforms.
 *
 * [DIMENSION_INHERIT_RULE]:
 * By default the dimensions are inherited from ancestors, unless a transform return
 * a new dimensions definition.
 * Consider the case:
 * ```js
 * dataset: [{
 *     source: [ ['Product', 'Sales', 'Prise'], ['Cookies', 321, 44.21], ...]
 * }, {
 *     transform: { type: 'filter', ... }
 * }]
 * dataset: [{
 *     dimension: ['Product', 'Sales', 'Prise'],
 *     source: [ ['Cookies', 321, 44.21], ...]
 * }, {
 *     transform: { type: 'filter', ... }
 * }]
 * ```
 * The two types of option should have the same behavior after transform.
 *
 *
 * [SCENARIO]:
 * (1) Provide source data directly:
 * ```js
 * series: {
 *     encode: {...},
 *     dimensions: [...]
 *     seriesLayoutBy: 'row',
 *     data: [[...]]
 * }
 * ```
 * (2) Series refer to dataset.
 * ```js
 * series: [{
 *     encode: {...}
 *     // Ignore datasetIndex means `datasetIndex: 0`
 *     // and the dimensions defination in dataset is used
 * }, {
 *     encode: {...},
 *     seriesLayoutBy: 'column',
 *     datasetIndex: 1
 * }]
 * ```
 * (3) dataset transform
 * ```js
 * dataset: [{
 *     source: [...]
 * }, {
 *     source: [...]
 * }, {
 *     // By default from 0.
 *     transform: { type: 'filter', config: {...} }
 * }, {
 *     // Piped.
 *     transform: [
 *         { type: 'filter', config: {...} },
 *         { type: 'sort', config: {...} }
 *     ]
 * }, {
 *     id: 'regressionData',
 *     fromDatasetIndex: 1,
 *     // Third-party transform
 *     transform: { type: 'ecStat:regression', config: {...} }
 * }, {
 *     // retrieve the extra result.
 *     id: 'regressionFormula',
 *     fromDatasetId: 'regressionData',
 *     fromTransformResult: 1
 * }]
 * ```
 */
var SourceManager = /** @class */function () {
  function SourceManager(sourceHost) {
    // Cached source. Do not repeat calculating if not dirty.
    this._sourceList = [];
    this._storeList = [];
    // version sign of each upstream source manager.
    this._upstreamSignList = [];
    this._versionSignBase = 0;
    this._dirty = true;
    this._sourceHost = sourceHost;
  }
  /**
   * Mark dirty.
   */
  SourceManager.prototype.dirty = function () {
    this._setLocalSource([], []);
    this._storeList = [];
    this._dirty = true;
  };
  SourceManager.prototype._setLocalSource = function (sourceList, upstreamSignList) {
    this._sourceList = sourceList;
    this._upstreamSignList = upstreamSignList;
    this._versionSignBase++;
    if (this._versionSignBase > 9e10) {
      this._versionSignBase = 0;
    }
  };
  /**
   * For detecting whether the upstream source is dirty, so that
   * the local cached source (in `_sourceList`) should be discarded.
   */
  SourceManager.prototype._getVersionSign = function () {
    return this._sourceHost.uid + '_' + this._versionSignBase;
  };
  /**
   * Always return a source instance. Otherwise throw error.
   */
  SourceManager.prototype.prepareSource = function () {
    // For the case that call `setOption` multiple time but no data changed,
    // cache the result source to prevent from repeating transform.
    if (this._isDirty()) {
      this._createSource();
      this._dirty = false;
    }
  };
  SourceManager.prototype._createSource = function () {
    this._setLocalSource([], []);
    var sourceHost = this._sourceHost;
    var upSourceMgrList = this._getUpstreamSourceManagers();
    var hasUpstream = !!upSourceMgrList.length;
    var resultSourceList;
    var upstreamSignList;
    if (isSeries(sourceHost)) {
      var seriesModel = sourceHost;
      var data = void 0;
      var sourceFormat = void 0;
      var upSource = void 0;
      // Has upstream dataset
      if (hasUpstream) {
        var upSourceMgr = upSourceMgrList[0];
        upSourceMgr.prepareSource();
        upSource = upSourceMgr.getSource();
        data = upSource.data;
        sourceFormat = upSource.sourceFormat;
        upstreamSignList = [upSourceMgr._getVersionSign()];
      }
      // Series data is from own.
      else {
        data = seriesModel.get('data', true);
        sourceFormat = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isTypedArray)(data) ? _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_TYPED_ARRAY : _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ORIGINAL;
        upstreamSignList = [];
      }
      // See [REQUIREMENT_MEMO], merge settings on series and parent dataset if it is root.
      var newMetaRawOption = this._getSourceMetaRawOption() || {};
      var upMetaRawOption = upSource && upSource.metaRawOption || {};
      var seriesLayoutBy = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(newMetaRawOption.seriesLayoutBy, upMetaRawOption.seriesLayoutBy) || null;
      var sourceHeader = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(newMetaRawOption.sourceHeader, upMetaRawOption.sourceHeader);
      // Note here we should not use `upSource.dimensionsDefine`. Consider the case:
      // `upSource.dimensionsDefine` is detected by `seriesLayoutBy: 'column'`,
      // but series need `seriesLayoutBy: 'row'`.
      var dimensions = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(newMetaRawOption.dimensions, upMetaRawOption.dimensions);
      // We share source with dataset as much as possible
      // to avoid extra memory cost of high dimensional data.
      var needsCreateSource = seriesLayoutBy !== upMetaRawOption.seriesLayoutBy || !!sourceHeader !== !!upMetaRawOption.sourceHeader || dimensions;
      resultSourceList = needsCreateSource ? [(0,_Source_js__WEBPACK_IMPORTED_MODULE_2__.createSource)(data, {
        seriesLayoutBy: seriesLayoutBy,
        sourceHeader: sourceHeader,
        dimensions: dimensions
      }, sourceFormat)] : [];
    } else {
      var datasetModel = sourceHost;
      // Has upstream dataset.
      if (hasUpstream) {
        var result = this._applyTransform(upSourceMgrList);
        resultSourceList = result.sourceList;
        upstreamSignList = result.upstreamSignList;
      }
      // Is root dataset.
      else {
        var sourceData = datasetModel.get('source', true);
        resultSourceList = [(0,_Source_js__WEBPACK_IMPORTED_MODULE_2__.createSource)(sourceData, this._getSourceMetaRawOption(), null)];
        upstreamSignList = [];
      }
    }
    if (false) {}
    this._setLocalSource(resultSourceList, upstreamSignList);
  };
  SourceManager.prototype._applyTransform = function (upMgrList) {
    var datasetModel = this._sourceHost;
    var transformOption = datasetModel.get('transform', true);
    var fromTransformResult = datasetModel.get('fromTransformResult', true);
    if (false) {}
    if (fromTransformResult != null) {
      var errMsg = '';
      if (upMgrList.length !== 1) {
        if (false) {}
        doThrow(errMsg);
      }
    }
    var sourceList;
    var upSourceList = [];
    var upstreamSignList = [];
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(upMgrList, function (upMgr) {
      upMgr.prepareSource();
      var upSource = upMgr.getSource(fromTransformResult || 0);
      var errMsg = '';
      if (fromTransformResult != null && !upSource) {
        if (false) {}
        doThrow(errMsg);
      }
      upSourceList.push(upSource);
      upstreamSignList.push(upMgr._getVersionSign());
    });
    if (transformOption) {
      sourceList = (0,_transform_js__WEBPACK_IMPORTED_MODULE_3__.applyDataTransform)(transformOption, upSourceList, {
        datasetIndex: datasetModel.componentIndex
      });
    } else if (fromTransformResult != null) {
      sourceList = [(0,_Source_js__WEBPACK_IMPORTED_MODULE_2__.cloneSourceShallow)(upSourceList[0])];
    }
    return {
      sourceList: sourceList,
      upstreamSignList: upstreamSignList
    };
  };
  SourceManager.prototype._isDirty = function () {
    if (this._dirty) {
      return true;
    }
    // All sourceList is from the some upstream.
    var upSourceMgrList = this._getUpstreamSourceManagers();
    for (var i = 0; i < upSourceMgrList.length; i++) {
      var upSrcMgr = upSourceMgrList[i];
      if (
      // Consider the case that there is ancestor diry, call it recursively.
      // The performance is probably not an issue because usually the chain is not long.
      upSrcMgr._isDirty() || this._upstreamSignList[i] !== upSrcMgr._getVersionSign()) {
        return true;
      }
    }
  };
  /**
   * @param sourceIndex By default 0, means "main source".
   *                    In most cases there is only one source.
   */
  SourceManager.prototype.getSource = function (sourceIndex) {
    sourceIndex = sourceIndex || 0;
    var source = this._sourceList[sourceIndex];
    if (!source) {
      // Series may share source instance with dataset.
      var upSourceMgrList = this._getUpstreamSourceManagers();
      return upSourceMgrList[0] && upSourceMgrList[0].getSource(sourceIndex);
    }
    return source;
  };
  /**
   *
   * Get a data store which can be shared across series.
   * Only available for series.
   *
   * @param seriesDimRequest Dimensions that are generated in series.
   *        Should have been sorted by `storeDimIndex` asc.
   */
  SourceManager.prototype.getSharedDataStore = function (seriesDimRequest) {
    if (false) {}
    var schema = seriesDimRequest.makeStoreSchema();
    return this._innerGetDataStore(schema.dimensions, seriesDimRequest.source, schema.hash);
  };
  SourceManager.prototype._innerGetDataStore = function (storeDims, seriesSource, sourceReadKey) {
    // TODO Can use other sourceIndex?
    var sourceIndex = 0;
    var storeList = this._storeList;
    var cachedStoreMap = storeList[sourceIndex];
    if (!cachedStoreMap) {
      cachedStoreMap = storeList[sourceIndex] = {};
    }
    var cachedStore = cachedStoreMap[sourceReadKey];
    if (!cachedStore) {
      var upSourceMgr = this._getUpstreamSourceManagers()[0];
      if (isSeries(this._sourceHost) && upSourceMgr) {
        cachedStore = upSourceMgr._innerGetDataStore(storeDims, seriesSource, sourceReadKey);
      } else {
        cachedStore = new _DataStore_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        // Always create store from source of series.
        cachedStore.initData(new _dataProvider_js__WEBPACK_IMPORTED_MODULE_5__.DefaultDataProvider(seriesSource, storeDims.length), storeDims);
      }
      cachedStoreMap[sourceReadKey] = cachedStore;
    }
    return cachedStore;
  };
  /**
   * PENDING: Is it fast enough?
   * If no upstream, return empty array.
   */
  SourceManager.prototype._getUpstreamSourceManagers = function () {
    // Always get the relationship from the raw option.
    // Do not cache the link of the dependency graph, so that
    // there is no need to update them when change happens.
    var sourceHost = this._sourceHost;
    if (isSeries(sourceHost)) {
      var datasetModel = (0,_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__.querySeriesUpstreamDatasetModel)(sourceHost);
      return !datasetModel ? [] : [datasetModel.getSourceManager()];
    } else {
      return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)((0,_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__.queryDatasetUpstreamDatasetModels)(sourceHost), function (datasetModel) {
        return datasetModel.getSourceManager();
      });
    }
  };
  SourceManager.prototype._getSourceMetaRawOption = function () {
    var sourceHost = this._sourceHost;
    var seriesLayoutBy;
    var sourceHeader;
    var dimensions;
    if (isSeries(sourceHost)) {
      seriesLayoutBy = sourceHost.get('seriesLayoutBy', true);
      sourceHeader = sourceHost.get('sourceHeader', true);
      dimensions = sourceHost.get('dimensions', true);
    }
    // See [REQUIREMENT_MEMO], `non-root-dataset` do not support them.
    else if (!this._getUpstreamSourceManagers().length) {
      var model = sourceHost;
      seriesLayoutBy = model.get('seriesLayoutBy', true);
      sourceHeader = model.get('sourceHeader', true);
      dimensions = model.get('dimensions', true);
    }
    return {
      seriesLayoutBy: seriesLayoutBy,
      sourceHeader: sourceHeader,
      dimensions: dimensions
    };
  };
  return SourceManager;
}();

// Call this method after `super.init` and `super.mergeOption` to
// disable the transform merge, but do not disable transform clone from rawOption.
function disableTransformOptionMerge(datasetModel) {
  var transformOption = datasetModel.option.transform;
  transformOption && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.setAsPrimitive)(datasetModel.option.transform);
}
function isSeries(sourceHost) {
  // Avoid circular dependency with Series.ts
  return sourceHost.mainType === 'series';
}
function doThrow(errMsg) {
  throw new Error(errMsg);
}

}),
38146: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExternalSource: function() { return ExternalSource; },
  applyDataTransform: function() { return applyDataTransform; },
  registerExternalTransform: function() { return registerExternalTransform; }
});
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19081);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44244);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _dataProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54127);
/* ESM import */var _dataValueHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67918);
/* ESM import */var _util_log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29692);
/* ESM import */var _Source_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7056);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







/**
 * TODO: disable writable.
 * This structure will be exposed to users.
 */
var ExternalSource = /** @class */function () {
  function ExternalSource() {}
  ExternalSource.prototype.getRawData = function () {
    // Only built-in transform available.
    throw new Error('not supported');
  };
  ExternalSource.prototype.getRawDataItem = function (dataIndex) {
    // Only built-in transform available.
    throw new Error('not supported');
  };
  ExternalSource.prototype.cloneRawData = function () {
    return;
  };
  /**
   * @return If dimension not found, return null/undefined.
   */
  ExternalSource.prototype.getDimensionInfo = function (dim) {
    return;
  };
  /**
   * dimensions defined if and only if either:
   * (a) dataset.dimensions are declared.
   * (b) dataset data include dimensions definitions in data (detected or via specified `sourceHeader`).
   * If dimensions are defined, `dimensionInfoAll` is corresponding to
   * the defined dimensions.
   * Otherwise, `dimensionInfoAll` is determined by data columns.
   * @return Always return an array (even empty array).
   */
  ExternalSource.prototype.cloneAllDimensionInfo = function () {
    return;
  };
  ExternalSource.prototype.count = function () {
    return;
  };
  /**
   * Only support by dimension index.
   * No need to support by dimension name in transform function,
   * because transform function is not case-specific, no need to use name literally.
   */
  ExternalSource.prototype.retrieveValue = function (dataIndex, dimIndex) {
    return;
  };
  ExternalSource.prototype.retrieveValueFromItem = function (dataItem, dimIndex) {
    return;
  };
  ExternalSource.prototype.convertValue = function (rawVal, dimInfo) {
    return (0,_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_0__.parseDataValue)(rawVal, dimInfo);
  };
  return ExternalSource;
}();

function createExternalSource(internalSource, externalTransform) {
  var extSource = new ExternalSource();
  var data = internalSource.data;
  var sourceFormat = extSource.sourceFormat = internalSource.sourceFormat;
  var sourceHeaderCount = internalSource.startIndex;
  var errMsg = '';
  if (internalSource.seriesLayoutBy !== _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN) {
    // For the logic simplicity in transformer, only 'culumn' is
    // supported in data transform. Otherwise, the `dimensionsDefine`
    // might be detected by 'row', which probably confuses users.
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  // [MEMO]
  // Create a new dimensions structure for exposing.
  // Do not expose all dimension info to users directly.
  // Because the dimension is probably auto detected from data and not might reliable.
  // Should not lead the transformers to think that is reliable and return it.
  // See [DIMENSION_INHERIT_RULE] in `sourceManager.ts`.
  var dimensions = [];
  var dimsByName = {};
  var dimsDef = internalSource.dimensionsDefine;
  if (dimsDef) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(dimsDef, function (dimDef, idx) {
      var name = dimDef.name;
      var dimDefExt = {
        index: idx,
        name: name,
        displayName: dimDef.displayName
      };
      dimensions.push(dimDefExt);
      // Users probably do not specify dimension name. For simplicity, data transform
      // does not generate dimension name.
      if (name != null) {
        // Dimension name should not be duplicated.
        // For simplicity, data transform forbids name duplication, do not generate
        // new name like module `completeDimensions.ts` did, but just tell users.
        var errMsg_1 = '';
        if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.hasOwn)(dimsByName, name)) {
          if (false) {}
          (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg_1);
        }
        dimsByName[name] = dimDefExt;
      }
    });
  }
  // If dimension definitions are not defined and can not be detected.
  // e.g., pure data `[[11, 22], ...]`.
  else {
    for (var i = 0; i < internalSource.dimensionsDetectedCount || 0; i++) {
      // Do not generete name or anything others. The consequence process in
      // `transform` or `series` probably have there own name generation strategry.
      dimensions.push({
        index: i
      });
    }
  }
  // Implement public methods:
  var rawItemGetter = (0,_dataProvider_js__WEBPACK_IMPORTED_MODULE_4__.getRawSourceItemGetter)(sourceFormat, _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN);
  if (externalTransform.__isBuiltIn) {
    extSource.getRawDataItem = function (dataIndex) {
      return rawItemGetter(data, sourceHeaderCount, dimensions, dataIndex);
    };
    extSource.getRawData = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.bind)(getRawData, null, internalSource);
  }
  extSource.cloneRawData = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.bind)(cloneRawData, null, internalSource);
  var rawCounter = (0,_dataProvider_js__WEBPACK_IMPORTED_MODULE_4__.getRawSourceDataCounter)(sourceFormat, _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN);
  extSource.count = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.bind)(rawCounter, null, data, sourceHeaderCount, dimensions);
  var rawValueGetter = (0,_dataProvider_js__WEBPACK_IMPORTED_MODULE_4__.getRawSourceValueGetter)(sourceFormat);
  extSource.retrieveValue = function (dataIndex, dimIndex) {
    var rawItem = rawItemGetter(data, sourceHeaderCount, dimensions, dataIndex);
    return retrieveValueFromItem(rawItem, dimIndex);
  };
  var retrieveValueFromItem = extSource.retrieveValueFromItem = function (dataItem, dimIndex) {
    if (dataItem == null) {
      return;
    }
    var dimDef = dimensions[dimIndex];
    // When `dimIndex` is `null`, `rawValueGetter` return the whole item.
    if (dimDef) {
      return rawValueGetter(dataItem, dimIndex, dimDef.name);
    }
  };
  extSource.getDimensionInfo = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.bind)(getDimensionInfo, null, dimensions, dimsByName);
  extSource.cloneAllDimensionInfo = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.bind)(cloneAllDimensionInfo, null, dimensions);
  return extSource;
}
function getRawData(upstream) {
  var sourceFormat = upstream.sourceFormat;
  if (!isSupportedSourceFormat(sourceFormat)) {
    var errMsg = '';
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  return upstream.data;
}
function cloneRawData(upstream) {
  var sourceFormat = upstream.sourceFormat;
  var data = upstream.data;
  if (!isSupportedSourceFormat(sourceFormat)) {
    var errMsg = '';
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
      // Not strictly clone for performance
      result.push(data[i].slice());
    }
    return result;
  } else if (sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
      // Not strictly clone for performance
      result.push((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.extend)({}, data[i]));
    }
    return result;
  }
}
function getDimensionInfo(dimensions, dimsByName, dim) {
  if (dim == null) {
    return;
  }
  // Keep the same logic as `List::getDimension` did.
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(dim)
  // If being a number-like string but not being defined a dimension name.
  || !isNaN(dim) && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.hasOwn)(dimsByName, dim)) {
    return dimensions[dim];
  } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.hasOwn)(dimsByName, dim)) {
    return dimsByName[dim];
  }
}
function cloneAllDimensionInfo(dimensions) {
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(dimensions);
}
var externalTransformMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.createHashMap)();
function registerExternalTransform(externalTransform) {
  externalTransform = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(externalTransform);
  var type = externalTransform.type;
  var errMsg = '';
  if (!type) {
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  var typeParsed = type.split(':');
  if (typeParsed.length !== 2) {
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  // Namespace 'echarts:xxx' is official namespace, where the transforms should
  // be called directly via 'xxx' rather than 'echarts:xxx'.
  var isBuiltIn = false;
  if (typeParsed[0] === 'echarts') {
    type = typeParsed[1];
    isBuiltIn = true;
  }
  externalTransform.__isBuiltIn = isBuiltIn;
  externalTransformMap.set(type, externalTransform);
}
function applyDataTransform(rawTransOption, sourceList, infoForPrint) {
  var pipedTransOption = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__.normalizeToArray)(rawTransOption);
  var pipeLen = pipedTransOption.length;
  var errMsg = '';
  if (!pipeLen) {
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  for (var i = 0, len = pipeLen; i < len; i++) {
    var transOption = pipedTransOption[i];
    sourceList = applySingleDataTransform(transOption, sourceList, infoForPrint, pipeLen === 1 ? null : i);
    // piped transform only support single input, except the fist one.
    // piped transform only support single output, except the last one.
    if (i !== len - 1) {
      sourceList.length = Math.max(sourceList.length, 1);
    }
  }
  return sourceList;
}
function applySingleDataTransform(transOption, upSourceList, infoForPrint,
// If `pipeIndex` is null/undefined, no piped transform.
pipeIndex) {
  var errMsg = '';
  if (!upSourceList.length) {
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(transOption)) {
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  var transType = transOption.type;
  var externalTransform = externalTransformMap.get(transType);
  if (!externalTransform) {
    if (false) {}
    (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
  }
  // Prepare source
  var extUpSourceList = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map)(upSourceList, function (upSource) {
    return createExternalSource(upSource, externalTransform);
  });
  var resultList = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__.normalizeToArray)(externalTransform.transform({
    upstream: extUpSourceList[0],
    upstreamList: extUpSourceList,
    config: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(transOption.config)
  }));
  if (false) { var printStrArr }
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map)(resultList, function (result, resultIndex) {
    var errMsg = '';
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(result)) {
      if (false) {}
      (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
    }
    if (!result.data) {
      if (false) {}
      (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
    }
    var sourceFormat = (0,_Source_js__WEBPACK_IMPORTED_MODULE_6__.detectSourceFormat)(result.data);
    if (!isSupportedSourceFormat(sourceFormat)) {
      if (false) {}
      (0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__.throwError)(errMsg);
    }
    var resultMetaRawOption;
    var firstUpSource = upSourceList[0];
    /**
     * Intuitively, the end users known the content of the original `dataset.source`,
     * calucating the transform result in mind.
     * Suppose the original `dataset.source` is:
     * ```js
     * [
     *     ['product', '2012', '2013', '2014', '2015'],
     *     ['AAA', 41.1, 30.4, 65.1, 53.3],
     *     ['BBB', 86.5, 92.1, 85.7, 83.1],
     *     ['CCC', 24.1, 67.2, 79.5, 86.4]
     * ]
     * ```
     * The dimension info have to be detected from the source data.
     * Some of the transformers (like filter, sort) will follow the dimension info
     * of upstream, while others use new dimensions (like aggregate).
     * Transformer can output a field `dimensions` to define the its own output dimensions.
     * We also allow transformers to ignore the output `dimensions` field, and
     * inherit the upstream dimensions definition. It can reduce the burden of handling
     * dimensions in transformers.
     *
     * See also [DIMENSION_INHERIT_RULE] in `sourceManager.ts`.
     */
    if (firstUpSource && resultIndex === 0
    // If transformer returns `dimensions`, it means that the transformer has different
    // dimensions definitions. We do not inherit anything from upstream.
    && !result.dimensions) {
      var startIndex = firstUpSource.startIndex;
      // We copy the header of upstream to the result, because:
      // (1) The returned data always does not contain header line and can not be used
      // as dimension-detection. In this case we can not use "detected dimensions" of
      // upstream directly, because it might be detected based on different `seriesLayoutBy`.
      // (2) We should support that the series read the upstream source in `seriesLayoutBy: 'row'`.
      // So the original detected header should be add to the result, otherwise they can not be read.
      if (startIndex) {
        result.data = firstUpSource.data.slice(0, startIndex).concat(result.data);
      }
      resultMetaRawOption = {
        seriesLayoutBy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN,
        sourceHeader: startIndex,
        dimensions: firstUpSource.metaRawOption.dimensions
      };
    } else {
      resultMetaRawOption = {
        seriesLayoutBy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SERIES_LAYOUT_BY_COLUMN,
        sourceHeader: 0,
        dimensions: result.dimensions
      };
    }
    return (0,_Source_js__WEBPACK_IMPORTED_MODULE_6__.createSource)(result.data, resultMetaRawOption, null);
  });
}
function isSupportedSourceFormat(sourceFormat) {
  return sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_ARRAY_ROWS || sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_1__.SOURCE_FORMAT_OBJECT_ROWS;
}

}),
40886: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  registerMap: function() { return /* reexport */ echarts.registerMap; },
  List: function() { return /* reexport */ SeriesData["default"]; },
  helper: function() { return /* reexport */ helper_namespaceObject; },
  disConnect: function() { return /* reexport */ echarts.disConnect; },
  getMap: function() { return /* reexport */ echarts.getMap; },
  ComponentView: function() { return /* reexport */ view_Component["default"]; },
  registerPostInit: function() { return /* reexport */ echarts.registerPostInit; },
  Axis: function() { return /* reexport */ Axis["default"]; },
  dispose: function() { return /* reexport */ echarts.dispose; },
  color: function() { return /* reexport */ color; },
  registerTransform: function() { return /* reexport */ echarts.registerTransform; },
  registerProcessor: function() { return /* reexport */ echarts.registerProcessor; },
  registerCoordinateSystem: function() { return /* reexport */ echarts.registerCoordinateSystem; },
  registerUpdateLifecycle: function() { return /* reexport */ echarts.registerUpdateLifecycle; },
  registerLoading: function() { return /* reexport */ echarts.registerLoading; },
  getInstanceByDom: function() { return /* reexport */ echarts.getInstanceByDom; },
  ChartView: function() { return /* reexport */ Chart["default"]; },
  throttle: function() { return /* reexport */ throttle.throttle; },
  registerVisual: function() { return /* reexport */ echarts.registerVisual; },
  registerLocale: function() { return /* reexport */ echarts.registerLocale; },
  registerPostUpdate: function() { return /* reexport */ echarts.registerPostUpdate; },
  dataTool: function() { return /* reexport */ echarts.dataTool; },
  setCanvasCreator: function() { return /* reexport */ echarts.setCanvasCreator; },
  dependencies: function() { return /* reexport */ echarts.dependencies; },
  PRIORITY: function() { return /* reexport */ echarts.PRIORITY; },
  vector: function() { return /* reexport */ vector; },
  use: function() { return /* reexport */ extension.use; },
  zrUtil: function() { return /* reexport */ util; },
  Model: function() { return /* reexport */ model_Model["default"]; },
  graphic: function() { return /* reexport */ graphic_namespaceObject; },
  registerAction: function() { return /* reexport */ echarts.registerAction; },
  registerLayout: function() { return /* reexport */ echarts.registerLayout; },
  env: function() { return /* reexport */ env["default"]; },
  registerTheme: function() { return /* reexport */ echarts.registerTheme; },
  extendComponentModel: function() { return /* reexport */ extendComponentModel; },
  extendComponentView: function() { return /* reexport */ extendComponentView; },
  parseGeoJson: function() { return /* reexport */ parseGeoJson["default"]; },
  innerDrawElementOnCanvas: function() { return /* reexport */ canvas_graphic.brushSingle; },
  init: function() { return /* reexport */ echarts.init; },
  time: function() { return /* reexport */ time_namespaceObject; },
  zrender: function() { return /* reexport */ zrender; },
  getCoordinateSystemDimensions: function() { return /* reexport */ echarts.getCoordinateSystemDimensions; },
  matrix: function() { return /* reexport */ matrix; },
  util: function() { return /* reexport */ util_namespaceObject; },
  extendChartView: function() { return /* reexport */ extendChartView; },
  extendSeriesModel: function() { return /* reexport */ extendSeriesModel; },
  setPlatformAPI: function() { return /* reexport */ platform.setPlatformAPI; },
  SeriesModel: function() { return /* reexport */ Series["default"]; },
  format: function() { return /* reexport */ format_namespaceObject; },
  ComponentModel: function() { return /* reexport */ Component["default"]; },
  registerPreprocessor: function() { return /* reexport */ echarts.registerPreprocessor; },
  parseGeoJSON: function() { return /* reexport */ parseGeoJson["default"]; },
  getInstanceById: function() { return /* reexport */ echarts.getInstanceById; },
  disconnect: function() { return /* reexport */ echarts.disconnect; },
  connect: function() { return /* reexport */ echarts.connect; },
  number: function() { return /* reexport */ number_namespaceObject; },
  registerCustomSeries: function() { return /* reexport */ echarts.registerCustomSeries; },
  version: function() { return /* reexport */ echarts.version; }
});
// NAMESPACE OBJECT: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/helper.js
var helper_namespaceObject = {};
__webpack_require__.r(helper_namespaceObject);
__webpack_require__.d(helper_namespaceObject, { 
  createDimensions: function() { return createDimensions.createDimensions; },
  createList: function() { return createList; },
  createScale: function() { return createScale; },
  createSymbol: function() { return symbol.createSymbol; },
  createTextStyle: function() { return createTextStyle; },
  dataStack: function() { return dataStack; },
  enableHoverEmphasis: function() { return states.enableHoverEmphasis; },
  getECData: function() { return innerStore.getECData; },
  getLayoutRect: function() { return layout.getLayoutRect; },
  mixinAxisModelCommonMethods: function() { return mixinAxisModelCommonMethods; } });

// NAMESPACE OBJECT: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/number.js
var number_namespaceObject = {};
__webpack_require__.r(number_namespaceObject);
__webpack_require__.d(number_namespaceObject, { 
  MAX_SAFE_INTEGER: function() { return number.MAX_SAFE_INTEGER; },
  asc: function() { return number.asc; },
  getPercentWithPrecision: function() { return number.getPercentWithPrecision; },
  getPixelPrecision: function() { return number.getPixelPrecision; },
  getPrecision: function() { return number.getPrecision; },
  getPrecisionSafe: function() { return number.getPrecisionSafe; },
  isNumeric: function() { return number.isNumeric; },
  isRadianAroundZero: function() { return number.isRadianAroundZero; },
  linearMap: function() { return number.linearMap; },
  nice: function() { return number.nice; },
  numericToNumber: function() { return number.numericToNumber; },
  parseDate: function() { return number.parseDate; },
  parsePercent: function() { return number.parsePercent; },
  quantile: function() { return number.quantile; },
  quantity: function() { return number.quantity; },
  quantityExponent: function() { return number.quantityExponent; },
  reformIntervals: function() { return number.reformIntervals; },
  remRadian: function() { return number.remRadian; },
  round: function() { return number.round; } });

// NAMESPACE OBJECT: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/time.js
var time_namespaceObject = {};
__webpack_require__.r(time_namespaceObject);
__webpack_require__.d(time_namespaceObject, { 
  format: function() { return time.format; },
  parse: function() { return number.parseDate; },
  roundTime: function() { return time.roundTime; } });

// NAMESPACE OBJECT: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/graphic.js
var graphic_namespaceObject = {};
__webpack_require__.r(graphic_namespaceObject);
__webpack_require__.d(graphic_namespaceObject, { 
  Arc: function() { return Arc["default"]; },
  BezierCurve: function() { return BezierCurve["default"]; },
  BoundingRect: function() { return BoundingRect["default"]; },
  Circle: function() { return Circle["default"]; },
  CompoundPath: function() { return CompoundPath["default"]; },
  Ellipse: function() { return Ellipse["default"]; },
  Group: function() { return Group["default"]; },
  Image: function() { return Image["default"]; },
  IncrementalDisplayable: function() { return IncrementalDisplayable["default"]; },
  Line: function() { return Line["default"]; },
  LinearGradient: function() { return LinearGradient["default"]; },
  Polygon: function() { return Polygon["default"]; },
  Polyline: function() { return Polyline["default"]; },
  RadialGradient: function() { return RadialGradient["default"]; },
  Rect: function() { return Rect["default"]; },
  Ring: function() { return Ring["default"]; },
  Sector: function() { return Sector["default"]; },
  Text: function() { return Text["default"]; },
  clipPointsByRect: function() { return graphic.clipPointsByRect; },
  clipRectByRect: function() { return graphic.clipRectByRect; },
  createIcon: function() { return graphic.createIcon; },
  extendPath: function() { return graphic.extendPath; },
  extendShape: function() { return graphic.extendShape; },
  getShapeClass: function() { return graphic.getShapeClass; },
  getTransform: function() { return graphic.getTransform; },
  initProps: function() { return basicTransition.initProps; },
  makeImage: function() { return graphic.makeImage; },
  makePath: function() { return graphic.makePath; },
  mergePath: function() { return graphic.mergePath; },
  registerShape: function() { return graphic.registerShape; },
  resizePath: function() { return graphic.resizePath; },
  updateProps: function() { return basicTransition.updateProps; } });

// NAMESPACE OBJECT: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/format.js
var format_namespaceObject = {};
__webpack_require__.r(format_namespaceObject);
__webpack_require__.d(format_namespaceObject, { 
  addCommas: function() { return format.addCommas; },
  capitalFirst: function() { return format.capitalFirst; },
  encodeHTML: function() { return dom.encodeHTML; },
  formatTime: function() { return format.formatTime; },
  formatTpl: function() { return format.formatTpl; },
  getTextRect: function() { return getTextRect.getTextRect; },
  getTooltipMarker: function() { return format.getTooltipMarker; },
  normalizeCssArray: function() { return format.normalizeCssArray; },
  toCamelCase: function() { return format.toCamelCase; },
  truncateText: function() { return parseText.truncateText; } });

// NAMESPACE OBJECT: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/util.js
var util_namespaceObject = {};
__webpack_require__.r(util_namespaceObject);
__webpack_require__.d(util_namespaceObject, { 
  bind: function() { return util.bind; },
  clone: function() { return util.clone; },
  curry: function() { return util.curry; },
  defaults: function() { return util.defaults; },
  each: function() { return util.each; },
  extend: function() { return util.extend; },
  filter: function() { return util.filter; },
  indexOf: function() { return util.indexOf; },
  inherits: function() { return util.inherits; },
  isArray: function() { return util.isArray; },
  isFunction: function() { return util.isFunction; },
  isObject: function() { return util.isObject; },
  isString: function() { return util.isString; },
  map: function() { return util.map; },
  merge: function() { return util.merge; },
  reduce: function() { return util.reduce; } });


// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js + 3 modules
var echarts = __webpack_require__(83524);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(81757);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(64989);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(74586);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(32417);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(21137);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js
var zrender = __webpack_require__(67883);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(24694);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(25680);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(54194);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(26069);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(28423);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(5527);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCommonMixin.js
var axisModelCommonMixin = __webpack_require__(14373);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var model_Model = __webpack_require__(40064);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js
var dataStackHelper = __webpack_require__(45413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(12212);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(57235);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/createDimensions.js
var createDimensions = __webpack_require__(71245);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(42692);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(5645);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/helper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * This module exposes helper functions for developing extensions.
 */


// import createGraphFromNodeEdge from './chart/helper/createGraphFromNodeEdge.js';







/**
 * Create a multi dimension List structure from seriesModel.
 */
function createList(seriesModel) {
  return (0,createSeriesData["default"])(null, seriesModel);
}
// export function createGraph(seriesModel) {
//     let nodes = seriesModel.get('data');
//     let links = seriesModel.get('links');
//     return createGraphFromNodeEdge(nodes, links, seriesModel);
// }


var dataStack = {
  isDimensionStacked: dataStackHelper.isDimensionStacked,
  enableDataStack: dataStackHelper.enableDataStack,
  getStackedDimension: dataStackHelper.getStackedDimension
};
/**
 * Create a symbol element with given symbol configuration: shape, x, y, width, height, color
 * @param {string} symbolDesc
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {string} color
 */

/**
 * Create scale
 * @param {Array.<number>} dataExtent
 * @param {Object|module:echarts/Model} option If `optoin.type`
 *        is secified, it can only be `'value'` currently.
 */
function createScale(dataExtent, option) {
  var axisModel = option;
  if (!(option instanceof model_Model["default"])) {
    axisModel = new model_Model["default"](option);
    // FIXME
    // Currently AxisModelCommonMixin has nothing to do with the
    // the requirements of `axisHelper.createScaleByModel`. For
    // example the methods `getCategories` and `getOrdinalMeta`
    // are required for `'category'` axis, and ecModel is required
    // for `'time'` axis. But occasionally echarts-gl happened
    // to only use `'value'` axis.
    // zrUtil.mixin(axisModel, AxisModelCommonMixin);
  }
  var scale = axisHelper.createScaleByModel(axisModel);
  scale.setExtent(dataExtent[0], dataExtent[1]);
  axisHelper.niceScaleExtent(scale, axisModel);
  return scale;
}
/**
 * Mixin common methods to axis model,
 *
 * Include methods
 * `getFormattedLabels() => Array.<string>`
 * `getCategories() => Array.<string>`
 * `getMin(origin: boolean) => number`
 * `getMax(origin: boolean) => number`
 * `getNeedCrossZero() => boolean`
 */
function mixinAxisModelCommonMethods(Model) {
  util.mixin(Model, axisModelCommonMixin.AxisModelCommonMixin);
}


function createTextStyle(textStyleModel, opts) {
  opts = opts || {};
  return (0,labelStyle.createTextStyle)(textStyleModel, null, null, opts.state !== 'normal');
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(50215);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(98231);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js
var parseGeoJson = __webpack_require__(10500);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/number.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/time.js
var time = __webpack_require__(56899);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/time.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(27208);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(12262);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(98856);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Circle.js
var Circle = __webpack_require__(13221);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Ellipse.js
var Ellipse = __webpack_require__(26244);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(80283);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Ring.js
var Ring = __webpack_require__(73004);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(84951);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(27092);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(68903);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(73978);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/BezierCurve.js
var BezierCurve = __webpack_require__(18200);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Arc.js
var Arc = __webpack_require__(71139);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/IncrementalDisplayable.js
var IncrementalDisplayable = __webpack_require__(51650);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/CompoundPath.js
var CompoundPath = __webpack_require__(56599);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js
var LinearGradient = __webpack_require__(30930);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/RadialGradient.js
var RadialGradient = __webpack_require__(24996);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(48670);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/graphic.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(85774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js + 1 modules
var dom = __webpack_require__(10887);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/parseText.js
var parseText = __webpack_require__(23493);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/legacy/getTextRect.js
var getTextRect = __webpack_require__(47314);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/format.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api/util.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(33013);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(59562);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/graphic.js
var canvas_graphic = __webpack_require__(58349);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/api.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// These APIs are for more advanced usages
// For example extend charts and components, creating graphic elements, formatting.




















// --------------------- Helper Methods ---------------------













// --------------------- Export for Extension Usage ---------------------
// export {SeriesData};
 // TODO: Compatitable with exists echarts-gl code



// Only for GL

// --------------------- Deprecated Extension Methods ---------------------
// Should use `ComponentModel.extend` or `class XXXX extend ComponentModel` to create class.
// Then use `registerComponentModel` in `install` parameter when `use` this extension. For example:
// class Bar3DModel extends ComponentModel {}
// export function install(registers) { registers.registerComponentModel(Bar3DModel); }
// echarts.use(install);
function extendComponentModel(proto) {
  var Model = Component["default"].extend(proto);
  Component["default"].registerClass(Model);
  return Model;
}
function extendComponentView(proto) {
  var View = view_Component["default"].extend(proto);
  view_Component["default"].registerClass(View);
  return View;
}
function extendSeriesModel(proto) {
  var Model = Series["default"].extend(proto);
  Series["default"].registerClass(Model);
  return Model;
}
function extendChartView(proto) {
  var View = Chart["default"].extend(proto);
  Chart["default"].registerClass(View);
  return View;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/installLabelLayout.js + 1 modules
var installLabelLayout = __webpack_require__(65666);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/export/core.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// Core API from echarts/src/echarts



// Import label layout by default.
// TODO will be treeshaked.

(0,extension.use)(installLabelLayout.installLabelLayout);

}),
50215: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  use: function() { return use; }
});
/* ESM import */var _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83524);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64989);
/* ESM import */var _view_Chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32417);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81757);
/* ESM import */var _model_Series_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74586);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56190);
/* ESM import */var _core_impl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80414);
/* ESM import */var zrender_lib_zrender_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67883);
/* ESM import */var _chart_custom_customSeriesRegister_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42059);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/









var extensions = [];
var extensionRegisters = {
  registerPreprocessor: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerPreprocessor,
  registerProcessor: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerProcessor,
  registerPostInit: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerPostInit,
  registerPostUpdate: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerPostUpdate,
  registerUpdateLifecycle: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerUpdateLifecycle,
  registerAction: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerAction,
  registerCoordinateSystem: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerCoordinateSystem,
  registerLayout: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerLayout,
  registerVisual: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerVisual,
  registerTransform: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerTransform,
  registerLoading: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerLoading,
  registerMap: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerMap,
  registerImpl: _core_impl_js__WEBPACK_IMPORTED_MODULE_1__.registerImpl,
  PRIORITY: _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.PRIORITY,
  ComponentModel: _model_Component_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  ComponentView: _view_Component_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  SeriesModel: _model_Series_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  ChartView: _view_Chart_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function (ComponentModelClass) {
    _model_Component_js__WEBPACK_IMPORTED_MODULE_2__["default"].registerClass(ComponentModelClass);
  },
  registerComponentView: function (ComponentViewClass) {
    _view_Component_js__WEBPACK_IMPORTED_MODULE_3__["default"].registerClass(ComponentViewClass);
  },
  registerSeriesModel: function (SeriesModelClass) {
    _model_Series_js__WEBPACK_IMPORTED_MODULE_4__["default"].registerClass(SeriesModelClass);
  },
  registerChartView: function (ChartViewClass) {
    _view_Chart_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerClass(ChartViewClass);
  },
  registerCustomSeries: function (seriesType, renderItem) {
    (0,_chart_custom_customSeriesRegister_js__WEBPACK_IMPORTED_MODULE_6__.registerCustomSeries)(seriesType, renderItem);
  },
  registerSubTypeDefaulter: function (componentType, defaulter) {
    _model_Component_js__WEBPACK_IMPORTED_MODULE_2__["default"].registerSubTypeDefaulter(componentType, defaulter);
  },
  registerPainter: function (painterType, PainterCtor) {
    (0,zrender_lib_zrender_js__WEBPACK_IMPORTED_MODULE_7__.registerPainter)(painterType, PainterCtor);
  }
};
function use(ext) {
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__.isArray)(ext)) {
    // use([ChartLine, ChartBar]);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__.each)(ext, function (singleExt) {
      use(singleExt);
    });
    return;
  }
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__.indexOf)(extensions, ext) >= 0) {
    return;
  }
  extensions.push(ext);
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__.isFunction)(ext)) {
    ext = {
      install: ext
    };
  }
  ext.install(extensionRegisters);
}

}),
50411: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/**
 * Language: English.
 */
/* ESM default export */ __webpack_exports__["default"] = ({
  time: {
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthAbbr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayOfWeekAbbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  legend: {
    selector: {
      all: 'All',
      inverse: 'Inv'
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: 'Box Select',
        polygon: 'Lasso Select',
        lineX: 'Horizontally Select',
        lineY: 'Vertically Select',
        keep: 'Keep Selections',
        clear: 'Clear Selections'
      }
    },
    dataView: {
      title: 'Data View',
      lang: ['Data View', 'Close', 'Refresh']
    },
    dataZoom: {
      title: {
        zoom: 'Zoom',
        back: 'Zoom Reset'
      }
    },
    magicType: {
      title: {
        line: 'Switch to Line Chart',
        bar: 'Switch to Bar Chart',
        stack: 'Stack',
        tiled: 'Tile'
      }
    },
    restore: {
      title: 'Restore'
    },
    saveAsImage: {
      title: 'Save as Image',
      lang: ['Right Click to Save Image']
    }
  },
  series: {
    typeNames: {
      pie: 'Pie chart',
      bar: 'Bar chart',
      line: 'Line chart',
      scatter: 'Scatter plot',
      effectScatter: 'Ripple scatter plot',
      radar: 'Radar chart',
      tree: 'Tree',
      treemap: 'Treemap',
      boxplot: 'Boxplot',
      candlestick: 'Candlestick',
      k: 'K line chart',
      heatmap: 'Heat map',
      map: 'Map',
      parallel: 'Parallel coordinate map',
      lines: 'Line graph',
      graph: 'Relationship graph',
      sankey: 'Sankey diagram',
      funnel: 'Funnel chart',
      gauge: 'Gauge',
      pictorialBar: 'Pictorial bar',
      themeRiver: 'Theme River Map',
      sunburst: 'Sunburst',
      custom: 'Custom chart',
      chart: 'Chart'
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: 'This is a chart'
    },
    series: {
      single: {
        prefix: '',
        withName: ' with type {seriesType} named {seriesName}.',
        withoutName: ' with type {seriesType}.'
      },
      multiple: {
        prefix: '. It consists of {seriesCount} series count.',
        withName: ' The {seriesId} series is a {seriesType} representing {seriesName}.',
        withoutName: ' The {seriesId} series is a {seriesType}.',
        separator: {
          middle: '',
          end: ''
        }
      }
    },
    data: {
      allData: 'The data is as follows: ',
      partialData: 'The first {displayCnt} items are: ',
      withName: 'the data for {name} is {value}',
      withoutName: '{value}',
      separator: {
        middle: ', ',
        end: '. '
      }
    }
  }
});

}),
70535: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM default export */ __webpack_exports__["default"] = ({
  time: {
    month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthAbbr: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayOfWeekAbbr: ['日', '一', '二', '三', '四', '五', '六']
  },
  legend: {
    selector: {
      all: '全选',
      inverse: '反选'
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: '矩形选择',
        polygon: '圈选',
        lineX: '横向选择',
        lineY: '纵向选择',
        keep: '保持选择',
        clear: '清除选择'
      }
    },
    dataView: {
      title: '数据视图',
      lang: ['数据视图', '关闭', '刷新']
    },
    dataZoom: {
      title: {
        zoom: '区域缩放',
        back: '区域缩放还原'
      }
    },
    magicType: {
      title: {
        line: '切换为折线图',
        bar: '切换为柱状图',
        stack: '切换为堆叠',
        tiled: '切换为平铺'
      }
    },
    restore: {
      title: '还原'
    },
    saveAsImage: {
      title: '保存为图片',
      lang: ['右键另存为图片']
    }
  },
  series: {
    typeNames: {
      pie: '饼图',
      bar: '柱状图',
      line: '折线图',
      scatter: '散点图',
      effectScatter: '涟漪散点图',
      radar: '雷达图',
      tree: '树图',
      treemap: '矩形树图',
      boxplot: '箱型图',
      candlestick: 'K线图',
      k: 'K线图',
      heatmap: '热力图',
      map: '地图',
      parallel: '平行坐标图',
      lines: '线图',
      graph: '关系图',
      sankey: '桑基图',
      funnel: '漏斗图',
      gauge: '仪表盘图',
      pictorialBar: '象形柱图',
      themeRiver: '主题河流图',
      sunburst: '旭日图',
      custom: '自定义图表',
      chart: '图表'
    }
  },
  aria: {
    general: {
      withTitle: '这是一个关于“{title}”的图表。',
      withoutTitle: '这是一个图表，'
    },
    series: {
      single: {
        prefix: '',
        withName: '图表类型是{seriesType}，表示{seriesName}。',
        withoutName: '图表类型是{seriesType}。'
      },
      multiple: {
        prefix: '它由{seriesCount}个图表系列组成。',
        withName: '第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',
        withoutName: '第{seriesId}个系列是一个{seriesType}，',
        separator: {
          middle: '；',
          end: '。'
        }
      }
    },
    data: {
      allData: '其数据是——',
      partialData: '其中，前{displayCnt}项是——',
      withName: '{name}的数据是{value}',
      withoutName: '{value}',
      separator: {
        middle: '，',
        end: ''
      }
    }
  }
});

}),
65666: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  installLabelLayout: function() { return /* binding */ installLabelLayout; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(48670);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(12212);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(66059);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelGuideHelper.js
var labelGuideHelper = __webpack_require__(10892);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js
var labelLayoutHelper = __webpack_require__(59044);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var label_labelStyle = __webpack_require__(57235);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/util.js
var contain_util = __webpack_require__(79887);
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
/* ESM default export */ var label_LabelManager = (LabelManager_LabelManager);
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
10892: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getLabelLineStatesModels: function() { return getLabelLineStatesModels; },
  limitSurfaceAngle: function() { return limitSurfaceAngle; },
  limitTurnAngle: function() { return limitTurnAngle; },
  setLabelLineStyle: function() { return setLabelLineStyle; },
  updateLabelLinePoints: function() { return updateLabelLinePoints; }
});
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98166);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62217);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27092);
/* ESM import */var zrender_lib_core_PathProxy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6229);
/* ESM import */var zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79887);
/* ESM import */var zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86688);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56190);
/* ESM import */var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24694);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25680);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5645);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var CMD = zrender_lib_core_PathProxy_js__WEBPACK_IMPORTED_MODULE_0__["default"].CMD;
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
    startAngle = (0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__.normalizeRadian)(endAngle);
    endAngle = (0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__.normalizeRadian)(tmp);
  } else {
    startAngle = (0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__.normalizeRadian)(startAngle);
    endAngle = (0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__.normalizeRadian)(endAngle);
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
        d = (0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_2__.cubicProjectPoint)(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.Q:
        d = (0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_2__.quadraticProjectPoint)(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
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
var pt0 = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
var pt1 = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
var pt2 = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
var dir = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
var dir2 = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
  var targetInversedTransform = targetTransform && (0,zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__.invert)([], targetTransform);
  var len = labelLineModel.get('length2') || 0;
  if (anchorPoint) {
    pt2.copy(anchorPoint);
  }
  for (var i = 0; i < searchSpace.length; i++) {
    var candidate = searchSpace[i];
    getCandidateAnchor(candidate, 0, labelRect, pt0, dir);
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].scaleAndAdd(pt1, pt0, dir, len);
    // Transform to target coord space.
    pt1.transform(targetInversedTransform);
    // Note: getBoundingRect will ensure the `path` being created.
    var boundingRect = target.getBoundingRect();
    var dist = anchorPoint ? anchorPoint.distance(pt1) : target instanceof _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? nearestPointOnPath(pt1, target.path, pt2) : nearestPointOnRect(pt1, boundingRect, pt2);
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
var tmpProjPoint = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
  _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].sub(dir, pt0, pt1);
  _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].sub(dir2, pt2, pt1);
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
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(tmpProjPoint, pt1);
    } else if (t > 1) {
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(tmpProjPoint, pt2);
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
  _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].sub(dir, pt1, pt0);
  _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].sub(dir2, pt2, pt1);
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
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(tmpProjPoint, pt2);
    } else {
      // Calculate new projected length with limited minTurnAngle and get the new connect point
      tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI / 2 - newAngle));
      // Limit the new calculated connect point between pt1 and pt2.
      var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
      if (isNaN(t)) {
        return;
      }
      if (t < 0) {
        _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(tmpProjPoint, pt1);
      } else if (t > 1) {
        _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(tmpProjPoint, pt2);
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
    var len1 = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__.dist(points[0], points[1]);
    var len2 = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__.dist(points[1], points[2]);
    if (!len1 || !len2) {
      path.lineTo(points[1][0], points[1][1]);
      path.lineTo(points[2][0], points[2][1]);
      return;
    }
    var moveLen = Math.min(len1, len2) * smooth;
    var midPoint0 = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__.lerp([], points[1], points[0], moveLen / len1);
    var midPoint2 = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__.lerp([], points[1], points[2], moveLen / len2);
    var midPoint1 = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__.lerp([], midPoint0, midPoint2, 0.5);
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
  for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_7__.DISPLAY_STATES.length; i++) {
    var stateName = _util_states_js__WEBPACK_IMPORTED_MODULE_7__.DISPLAY_STATES[i];
    var stateModel = statesModels[stateName];
    var isNormal = stateName === 'normal';
    if (stateModel) {
      var stateShow = stateModel.get('show');
      var isLabelIgnored = isNormal ? labelIgnoreNormal : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__.retrieve2)(label.states[stateName] && label.states[stateName].ignore, labelIgnoreNormal);
      if (isLabelIgnored // Not show when label is not shown in this state.
      || !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__.retrieve2)(stateShow, showNormal) // Use normal state by default if not set.
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
        labelLine = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__.defaults)(labelLine.style, defaultStyle);
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
  for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_7__.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__WEBPACK_IMPORTED_MODULE_7__.SPECIAL_STATES[i];
    statesModels[stateName] = itemModel.getModel([stateName, labelLineName]);
  }
  return statesModels;
}

}),
59044: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61881);
/* ESM import */var _labelStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57235);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  out.transform = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.ensureCopyTransform)(out.transform, rawTransform);
  // NOTE: should call `getBoundingRect` after `getComputedTransform`, or may get an inaccurate bounding rect.
  //  The reason is that `getComputedTransform` calls `__host.updateInnerText()` internally, which updates the label
  //  by `textConfig` mounted on the host.
  // PENDING: add a dirty bit for that in zrender?
  var outLocalRect = out.localRect = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.ensureCopyRect)(out.localRect, label.getBoundingRect());
  var labelStyleExt = label.style;
  var margin = labelStyleExt.margin;
  var marginForce = opt && opt.marginForce;
  var minMarginForce = opt && opt.minMarginForce;
  var marginDefault = opt && opt.marginDefault;
  var marginType = labelStyleExt.__marginType;
  if (marginType == null && marginDefault) {
    margin = marginDefault;
    marginType = _labelStyle_js__WEBPACK_IMPORTED_MODULE_1__.LabelMarginType.textMargin;
  }
  // `textMargin` and `minMargin` can not exist both.
  for (var i = 0; i < 4; i++) {
    _tmpLabelMargin[i] = marginType === _labelStyle_js__WEBPACK_IMPORTED_MODULE_1__.LabelMarginType.minMargin && minMarginForce && minMarginForce[i] != null ? minMarginForce[i] : marginForce && marginForce[i] != null ? marginForce[i] : margin ? margin[i] : 0;
  }
  if (marginType === _labelStyle_js__WEBPACK_IMPORTED_MODULE_1__.LabelMarginType.textMargin) {
    (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.expandOrShrinkRect)(outLocalRect, _tmpLabelMargin, false, false);
  }
  var outGlobalRect = out.rect = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.ensureCopyRect)(out.rect, outLocalRect);
  if (rawTransform) {
    outGlobalRect.applyTransform(rawTransform);
  }
  // Notice: label.style.margin is actually `minMargin / 2`, handled by `setTextStyleCommon`.
  if (marginType === _labelStyle_js__WEBPACK_IMPORTED_MODULE_1__.LabelMarginType.minMargin) {
    (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.expandOrShrinkRect)(outGlobalRect, _tmpLabelMargin, false, false);
  }
  out.axisAligned = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.isBoundingRectAxisAligned)(rawTransform);
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
  out.transform = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.ensureCopyTransform)(out.transform, rawTransform);
  out.localRect = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.ensureCopyRect)(out.localRect, rawLocalRect);
  out.rect = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.ensureCopyRect)(out.rect, rawLocalRect);
  if (rawTransform) {
    out.rect.applyTransform(rawTransform);
  }
  out.axisAligned = (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.isBoundingRectAxisAligned)(rawTransform);
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
    labelGeometry.obb = obb = obb || new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
  var xyDim = _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[xyDimIdx];
  var sizeDim = _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.WH[xyDimIdx];
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
57235: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98856);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5645);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44244);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7309);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES[i];
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
    baseText = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.defaultText) ? opt.defaultText(labelDataIndex, opt, interpolatedValue) : opt.defaultText;
  }
  var statesText = {
    normal: baseText
  };
  for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES[i];
    var stateModel = stateModels[stateName];
    statesText[stateName] = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(labelFetcher ? labelFetcher.getFormattedLabel(labelDataIndex, stateName, null, labelDimIndex, stateModel && stateModel.get('formatter')) : null, baseText);
  }
  return statesText;
}
function setLabelStyle(targetEl, labelStatesModels, opt, stateSpecified
// TODO specified position?
) {
  opt = opt || EMPTY_OBJ;
  var isSetOnText = targetEl instanceof zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var needsCreateText = false;
  for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_STATES.length; i++) {
    var stateModel = labelStatesModels[_util_states_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_STATES[i]];
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
        textContent = new zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
    for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES.length; i++) {
      var stateName = _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES[i];
      var stateModel = labelStatesModels[stateName];
      if (stateModel) {
        var stateObj = textContent.ensureState(stateName);
        var stateShow = !!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(stateModel.getShallow('show'), showNormal);
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
  for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_STATES[i];
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
  specifiedTextStyle && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)(textStyle, specifiedTextStyle);
  // textStyle.host && textStyle.host.dirty && textStyle.host.dirty(false);
  return textStyle;
}
function createTextConfig(textStyleModel, opt, isNotNormal) {
  opt = opt || {};
  var textConfig = {};
  var labelPosition;
  var labelRotate = textStyleModel.getShallow('rotate');
  var labelDistance = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(textStyleModel.getShallow('distance'), isNotNormal ? null : 5);
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
    var richInheritPlainLabel = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(textStyleModel.get(richInheritPlainLabelOptionName), ecModel ? ecModel.get(richInheritPlainLabelOptionName) : undefined);
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
    minMargin = !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(minMargin) ? 0 : minMargin / 2;
    labelTextStyle.margin = [minMargin, minMargin, minMargin, minMargin];
    labelTextStyle.__marginType = LabelMarginType.minMargin;
  } else {
    var textMargin = textStyleModel.get('textMargin');
    if (textMargin != null) {
      labelTextStyle.margin = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.normalizeCssArray)(textMargin);
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
      var richKeys = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(rich);
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
  var opacity = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(textStyleModel.getShallow('opacity'), globalTextStyle.opacity);
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
  var textBorderWidth = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(textStyleModel.getShallow('textBorderWidth'), globalTextStyle.textBorderWidth);
  if (textBorderWidth != null) {
    textStyle.lineWidth = textBorderWidth;
  }
  var textBorderType = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(textStyleModel.getShallow('textBorderType'), globalTextStyle.textBorderType);
  if (textBorderType != null) {
    textStyle.lineDash = textBorderType;
  }
  var textBorderDashOffset = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(textStyleModel.getShallow('textBorderDashOffset'), globalTextStyle.textBorderDashOffset);
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
    var val = richInheritPlainLabel !== false && plainTextModel ? (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve3)(textStyleModel.getShallow(key), plainTextModel.getShallow(key), globalTextStyle[key]) : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(textStyleModel.getShallow(key), globalTextStyle[key]);
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
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.trim)([
  // FIXME in node-canvas fontWeight is before fontStyle
  opt.fontStyle || gTextStyleModel && gTextStyleModel.getShallow('fontStyle') || '', opt.fontWeight || gTextStyleModel && gTextStyleModel.getShallow('fontWeight') || '', (opt.fontSize || gTextStyleModel && gTextStyleModel.getShallow('fontSize') || 12) + 'px', opt.fontFamily || gTextStyleModel && gTextStyleModel.getShallow('fontFamily') || 'sans-serif'].join(' '));
}
var labelInner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__.makeInner)();
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
  var currValue = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(labelInnerStore.interpolatedValue, labelInnerStore.prevValue);
  var targetValue = labelInnerStore.value;
  function during(percent) {
    var interpolated = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__.interpolateRawValues)(data, labelInnerStore.precision, currValue, targetValue, percent);
    labelInnerStore.interpolatedValue = percent === 1 ? null : interpolated;
    var labelText = getLabelText({
      labelDataIndex: dataIndex,
      labelFetcher: labelFetcher,
      defaultText: defaultInterpolatedText ? defaultInterpolatedText(interpolated) : interpolated + ''
    }, labelInnerStore.statesModels, interpolated);
    setLabelText(textEl, labelText);
  }
  textEl.percent = 0;
  (labelInnerStore.prevValue == null ? _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.initProps : _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.updateProps)(textEl, {
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
61855: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSectorCalculateTextPosition: function() { return createSectorCalculateTextPosition; },
  setSectorTextRotation: function() { return setSectorTextRotation; }
});
/* ESM import */var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50122);
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


function createSectorCalculateTextPosition(positionMapping, opts) {
  opts = opts || {};
  var isRoundCap = opts.isRoundCap;
  return function (out, opts, boundingRect) {
    var textPosition = opts.position;
    if (!textPosition || textPosition instanceof Array) {
      return (0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_0__.calculateTextPosition)(out, opts, boundingRect);
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
        return (0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_0__.calculateTextPosition)(out, opts, boundingRect);
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
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(rotateType)) {
    // user-set rotation
    sector.setTextConfig({
      rotation: rotateType
    });
    return;
  } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(textPosition)) {
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
95253: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createProgressiveLayout: function() { return createProgressiveLayout; },
  getLayoutOnAxis: function() { return getLayoutOnAxis; },
  layout: function() { return layout; },
  makeColumnLayout: function() { return makeColumnLayout; },
  prepareLayoutBarSeries: function() { return prepareLayoutBarSeries; },
  retrieveColumnLayout: function() { return retrieveColumnLayout; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48843);
/* ESM import */var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45413);
/* ESM import */var _chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3186);
/* ESM import */var _util_vendor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67862);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    params.push((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults)({
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(barSeries, function (seriesModel) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(barSeries, function (seriesModel) {
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
    var barWidth = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(seriesModel.get('barWidth'), bandWidth);
    var barMaxWidth = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(seriesModel.get('barMaxWidth'), bandWidth);
    var barMinWidth = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(seriesInfoList, function (seriesInfo, idx) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(columnsMap, function (columnsOnAxis, coordSysName) {
    result[coordSysName] = {};
    var stacks = columnsOnAxis.stacks;
    var bandWidth = columnsOnAxis.bandWidth;
    var categoryGapPercent = columnsOnAxis.categoryGap;
    if (categoryGapPercent == null) {
      var columnCount = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(stacks).length;
      // More columns in one group
      // the spaces between group is smaller. Or the column will be too thin.
      categoryGapPercent = Math.max(35 - columnCount * 4, 15) + '%';
    }
    var categoryGap = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(categoryGapPercent, bandWidth);
    var barGapPercent = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(columnsOnAxis.gap, 1);
    var remainedWidth = columnsOnAxis.remainedWidth;
    var autoWidthCount = columnsOnAxis.autoWidthCount;
    var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    // Find if any auto calculated bar exceeded maxBarWidth
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(stacks, function (column) {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(stacks, function (column, idx) {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(stacks, function (column, stackId) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(seriesModels, function (seriesModel) {
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
    plan: (0,_chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
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
      var stacked = (0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_3__.isDimensionStacked)(data, valueDim) && !!data.getCalculationInfo('stackedOnSeries');
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
          var largePoints = isLarge && (0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_4__.createFloat32Array)(count * 3);
          var largeBackgroundPoints = isLarge && drawBackground && (0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_4__.createFloat32Array)(count * 3);
          var largeDataIndices = isLarge && (0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_4__.createFloat32Array)(count);
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
51719: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48843);
/* ESM import */var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45413);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var barWidthAndOffset = calRadialBar(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.filter(ecModel.getSeriesByType(seriesType), function (seriesModel) {
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
    var stacked = (0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_1__.isDimensionStacked)(data, valueDim /* , baseDim */);
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(barSeries, function (seriesModel, idx) {
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
    var barWidth = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.parsePercent)(seriesModel.get('barWidth'), bandWidth);
    var barMaxWidth = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.parsePercent)(seriesModel.get('barMaxWidth'), bandWidth);
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(columnsMap, function (columnsOnAxis, coordSysName) {
    result[coordSysName] = {};
    var stacks = columnsOnAxis.stacks;
    var bandWidth = columnsOnAxis.bandWidth;
    var categoryGap = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.parsePercent)(columnsOnAxis.categoryGap, bandWidth);
    var barGapPercent = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.parsePercent)(columnsOnAxis.gap, 1);
    var remainedWidth = columnsOnAxis.remainedWidth;
    var autoWidthCount = columnsOnAxis.autoWidthCount;
    var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    // Find if any auto calculated bar exceeded maxBarWidth
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(stacks, function (column, stack) {
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(stacks, function (column, idx) {
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(stacks, function (column, stackId) {
      result[coordSysName][stackId] = result[coordSysName][stackId] || {
        offset: offset,
        width: column.width
      };
      offset += column.width * (1 + barGapPercent);
    });
  });
  return result;
}
/* ESM default export */ __webpack_exports__["default"] = (barLayoutPolar);

}),
25893: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return pointsLayout; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3186);
/* ESM import */var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45413);
/* ESM import */var _util_vendor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67862);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    plan: (0,_chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    reset: function (seriesModel) {
      var data = seriesModel.getData();
      var coordSys = seriesModel.coordinateSystem;
      var pipelineContext = seriesModel.pipelineContext;
      var useTypedArray = forceStoreInTypedArray || pipelineContext.large;
      if (!coordSys) {
        return;
      }
      var dims = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map)(coordSys.dimensions, function (dim) {
        return data.mapDimension(dim);
      }).slice(0, 2);
      var dimLen = dims.length;
      var stackResultDim = data.getCalculationInfo('stackResultDimension');
      if ((0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_2__.isDimensionStacked)(data, dims[0])) {
        dims[0] = stackResultDim;
      }
      if ((0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_2__.isDimensionStacked)(data, dims[1])) {
        dims[1] = stackResultDim;
      }
      var store = data.getStore();
      var dimIdx0 = data.getDimensionIndex(dims[0]);
      var dimIdx1 = data.getDimensionIndex(dims[1]);
      return dimLen && {
        progress: function (params, data) {
          var segCount = params.end - params.start;
          var points = useTypedArray && (0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_3__.createFloat32Array)(segCount * dimLen);
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

}]);