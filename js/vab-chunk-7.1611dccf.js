"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3462"], {
77513: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56190);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44244);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40064);
/* ESM import */var _geoCreator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6390);
/* ESM import */var _geoSourceManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7195);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
var GeoModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(GeoModel, _super);
  function GeoModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GeoModel.type;
    return _this;
  }
  GeoModel.prototype.init = function (option, parentModel, ecModel) {
    this.mergeDefaultAndTheme(option, ecModel);
    var source = _geoSourceManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].getGeoResource(option.map);
    if (source && source.type === 'geoJSON') {
      var itemStyle = option.itemStyle = option.itemStyle || {};
      if (!('color' in itemStyle)) {
        itemStyle.color = option.defaultItemStyleColor || _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.backgroundTint;
      }
    }
    // Default label emphasis `show`
    _util_model_js__WEBPACK_IMPORTED_MODULE_4__.defaultEmphasis(option, 'label', ['show']);
  };
  GeoModel.prototype.optionUpdated = function () {
    var _this = this;
    var option = this.option;
    option.regions = _geoCreator_js__WEBPACK_IMPORTED_MODULE_5__["default"].getFilledRegions(option.regions, option.map, option.nameMap, option.nameProperty);
    var selectedMap = {};
    this._optionModelMap = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__.reduce(option.regions || [], function (optionModelMap, regionOpt) {
      var regionName = regionOpt.name;
      if (regionName) {
        optionModelMap.set(regionName, new _model_Model_js__WEBPACK_IMPORTED_MODULE_7__["default"](regionOpt, _this, _this.ecModel));
        if (regionOpt.selected) {
          selectedMap[regionName] = true;
        }
      }
      return optionModelMap;
    }, zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__.createHashMap());
    if (!option.selectedMap) {
      option.selectedMap = selectedMap;
    }
  };
  /**
   * Get model of region.
   */
  GeoModel.prototype.getRegionModel = function (name) {
    return this._optionModelMap.get(name) || new _model_Model_js__WEBPACK_IMPORTED_MODULE_7__["default"](null, this, this.ecModel);
  };
  /**
   * Format label
   * @param name Region name
   */
  GeoModel.prototype.getFormattedLabel = function (name, status) {
    var regionModel = this.getRegionModel(name);
    var formatter = status === 'normal' ? regionModel.get(['label', 'formatter']) : regionModel.get(['emphasis', 'label', 'formatter']);
    var params = {
      name: name
    };
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction(formatter)) {
      params.status = status;
      return formatter(params);
    } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__.isString(formatter)) {
      return formatter.replace('{a}', name != null ? name : '');
    }
  };
  GeoModel.prototype.setZoom = function (zoom) {
    this.option.zoom = zoom;
  };
  GeoModel.prototype.setCenter = function (center) {
    this.option.center = center;
  };
  // PENGING If selectedMode is null ?
  GeoModel.prototype.select = function (name) {
    var option = this.option;
    var selectedMode = option.selectedMode;
    if (!selectedMode) {
      return;
    }
    if (selectedMode !== 'multiple') {
      option.selectedMap = null;
    }
    var selectedMap = option.selectedMap || (option.selectedMap = {});
    selectedMap[name] = true;
  };
  GeoModel.prototype.unSelect = function (name) {
    var selectedMap = this.option.selectedMap;
    if (selectedMap) {
      selectedMap[name] = false;
    }
  };
  GeoModel.prototype.toggleSelected = function (name) {
    this[this.isSelected(name) ? 'unSelect' : 'select'](name);
  };
  GeoModel.prototype.isSelected = function (name) {
    var selectedMap = this.option.selectedMap;
    return !!(selectedMap && selectedMap[name]);
  };
  GeoModel.type = 'geo';
  GeoModel.layoutMode = 'box';
  GeoModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    show: true,
    left: 'center',
    top: 'center',
    // Default value:
    // for geoSVG source: 1,
    // for geoJSON source: 0.75.
    aspectScale: null,
    // /// Layout with center and size
    // If you want to put map in a fixed size box with right aspect ratio
    // This two properties may be more convenient
    // layoutCenter: [50%, 50%]
    // layoutSize: 100
    silent: false,
    // Map type
    map: '',
    // Define left-top, right-bottom coords to control view
    // For example, [ [180, 90], [-180, -90] ]
    boundingCoords: null,
    // Default on center of map
    center: null,
    zoom: 1,
    scaleLimit: null,
    // selectedMode: false
    label: {
      show: false,
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.tertiary
    },
    itemStyle: {
      borderWidth: 0.5,
      borderColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.border
    },
    emphasis: {
      label: {
        show: true,
        color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary
      },
      itemStyle: {
        color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.highlight
      }
    },
    select: {
      label: {
        show: true,
        color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.primary
      },
      itemStyle: {
        color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.highlight
      }
    },
    regions: []
    // tooltip: {
    //     show: false
    // }
  };
  return GeoModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (GeoModel);

}),
69770: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GeoJSONLineStringGeometry: function() { return GeoJSONLineStringGeometry; },
  GeoJSONPolygonGeometry: function() { return GeoJSONPolygonGeometry; },
  GeoJSONRegion: function() { return GeoJSONRegion; },
  GeoSVGRegion: function() { return GeoSVGRegion; },
  Region: function() { return Region; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48670);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25680);
/* ESM import */var zrender_lib_contain_polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38519);
/* ESM import */var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24694);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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






var TMP_TRANSFORM = [];
function transformPoints(points, transform) {
  for (var p = 0; p < points.length; p++) {
    zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.applyTransform(points[p], points[p], transform);
  }
}
function updateBBoxFromPoints(points, min, max, projection) {
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    if (projection) {
      // projection may return null point.
      p = projection.project(p);
    }
    if (p && isFinite(p[0]) && isFinite(p[1])) {
      zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.min(min, min, p);
      zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.max(max, max, p);
    }
  }
}
function centroid(points) {
  var signedArea = 0;
  var cx = 0;
  var cy = 0;
  var len = points.length;
  var x0 = points[len - 1][0];
  var y0 = points[len - 1][1];
  // Polygon should been closed.
  for (var i = 0; i < len; i++) {
    var x1 = points[i][0];
    var y1 = points[i][1];
    var a = x0 * y1 - x1 * y0;
    signedArea += a;
    cx += (x0 + x1) * a;
    cy += (y0 + y1) * a;
    x0 = x1;
    y0 = y1;
  }
  return signedArea ? [cx / signedArea / 3, cy / signedArea / 3, signedArea] : [points[0][0] || 0, points[0][1] || 0];
}
var Region = /** @class */function () {
  function Region(name) {
    this.name = name;
  }
  Region.prototype.setCenter = function (center) {
    this._center = center;
  };
  /**
   * Get center point in data unit. That is,
   * for GeoJSONRegion, the unit is lat/lng,
   * for GeoSVGRegion, the unit is SVG local coord.
   */
  Region.prototype.getCenter = function () {
    var center = this._center;
    if (!center) {
      // In most cases there are no need to calculate this center.
      // So calculate only when called.
      center = this._center = this.calcCenter();
    }
    return center;
  };
  return Region;
}();

var GeoJSONPolygonGeometry = /** @class */function () {
  function GeoJSONPolygonGeometry(exterior, interiors) {
    this.type = 'polygon';
    this.exterior = exterior;
    this.interiors = interiors;
  }
  return GeoJSONPolygonGeometry;
}();

var GeoJSONLineStringGeometry = /** @class */function () {
  function GeoJSONLineStringGeometry(points) {
    this.type = 'linestring';
    this.points = points;
  }
  return GeoJSONLineStringGeometry;
}();

var GeoJSONRegion = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(GeoJSONRegion, _super);
  function GeoJSONRegion(name, geometries, cp) {
    var _this = _super.call(this, name) || this;
    _this.type = 'geoJSON';
    _this.geometries = geometries;
    _this._center = cp && [cp[0], cp[1]];
    return _this;
  }
  GeoJSONRegion.prototype.calcCenter = function () {
    var geometries = this.geometries;
    var largestGeo;
    var largestGeoSize = 0;
    for (var i = 0; i < geometries.length; i++) {
      var geo = geometries[i];
      var exterior = geo.exterior;
      // Simple trick to use points count instead of polygon area as region size.
      // Ignore linestring
      var size = exterior && exterior.length;
      if (size > largestGeoSize) {
        largestGeo = geo;
        largestGeoSize = size;
      }
    }
    if (largestGeo) {
      return centroid(largestGeo.exterior);
    }
    // from bounding rect by default.
    var rect = this.getBoundingRect();
    return [rect.x + rect.width / 2, rect.y + rect.height / 2];
  };
  GeoJSONRegion.prototype.getBoundingRect = function (projection) {
    var rect = this._rect;
    // Always recalculate if using projection.
    if (rect && !projection) {
      return rect;
    }
    var min = [Infinity, Infinity];
    var max = [-Infinity, -Infinity];
    var geometries = this.geometries;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(geometries, function (geo) {
      if (geo.type === 'polygon') {
        // Doesn't consider hole
        updateBBoxFromPoints(geo.exterior, min, max, projection);
      } else {
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(geo.points, function (points) {
          updateBBoxFromPoints(points, min, max, projection);
        });
      }
    });
    // Normalie invalid bounding.
    if (!(isFinite(min[0]) && isFinite(min[1]) && isFinite(max[0]) && isFinite(max[1]))) {
      min[0] = min[1] = max[0] = max[1] = 0;
    }
    rect = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](min[0], min[1], max[0] - min[0], max[1] - min[1]);
    if (!projection) {
      this._rect = rect;
    }
    return rect;
  };
  GeoJSONRegion.prototype.contain = function (coord) {
    var rect = this.getBoundingRect();
    var geometries = this.geometries;
    if (!rect.contain(coord[0], coord[1])) {
      return false;
    }
    loopGeo: for (var i = 0, len = geometries.length; i < len; i++) {
      var geo = geometries[i];
      // Only support polygon.
      if (geo.type !== 'polygon') {
        continue;
      }
      var exterior = geo.exterior;
      var interiors = geo.interiors;
      if (zrender_lib_contain_polygon_js__WEBPACK_IMPORTED_MODULE_4__.contain(exterior, coord[0], coord[1])) {
        // Not in the region if point is in the hole.
        for (var k = 0; k < (interiors ? interiors.length : 0); k++) {
          if (zrender_lib_contain_polygon_js__WEBPACK_IMPORTED_MODULE_4__.contain(interiors[k], coord[0], coord[1])) {
            continue loopGeo;
          }
        }
        return true;
      }
    }
    return false;
  };
  /**
   * Transform the raw coords to target bounding.
   * @param x
   * @param y
   * @param width
   * @param height
   */
  GeoJSONRegion.prototype.transformTo = function (x, y, width, height) {
    var rect = this.getBoundingRect();
    var aspect = rect.width / rect.height;
    if (!width) {
      width = aspect * height;
    } else if (!height) {
      height = width / aspect;
    }
    var target = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, width, height);
    var transform = rect.calculateTransform(target);
    var geometries = this.geometries;
    for (var i = 0; i < geometries.length; i++) {
      var geo = geometries[i];
      if (geo.type === 'polygon') {
        transformPoints(geo.exterior, transform);
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(geo.interiors, function (interior) {
          transformPoints(interior, transform);
        });
      } else {
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(geo.points, function (points) {
          transformPoints(points, transform);
        });
      }
    }
    rect = this._rect;
    rect.copy(target);
    // Update center
    this._center = [rect.x + rect.width / 2, rect.y + rect.height / 2];
  };
  GeoJSONRegion.prototype.cloneShallow = function (name) {
    name == null && (name = this.name);
    var newRegion = new GeoJSONRegion(name, this.geometries, this._center);
    newRegion._rect = this._rect;
    newRegion.transformTo = null; // Simply avoid to be called.
    return newRegion;
  };
  return GeoJSONRegion;
}(Region);

var GeoSVGRegion = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(GeoSVGRegion, _super);
  function GeoSVGRegion(name, elOnlyForCalculate) {
    var _this = _super.call(this, name) || this;
    _this.type = 'geoSVG';
    _this._elOnlyForCalculate = elOnlyForCalculate;
    return _this;
  }
  GeoSVGRegion.prototype.calcCenter = function () {
    var el = this._elOnlyForCalculate;
    var rect = el.getBoundingRect();
    var center = [rect.x + rect.width / 2, rect.y + rect.height / 2];
    var mat = zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__.identity(TMP_TRANSFORM);
    var target = el;
    while (target && !target.isGeoSVGGraphicRoot) {
      zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__.mul(mat, target.getLocalTransform(), mat);
      target = target.parent;
    }
    zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__.invert(mat, mat);
    zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.applyTransform(center, center, mat);
    return center;
  };
  return GeoSVGRegion;
}(Region);


}),
6390: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ geoCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(48670);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/View.js
var View = __webpack_require__(96165);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 5 modules
var geoSourceManager = __webpack_require__(7195);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(44244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/Geo.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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







var GEO_DEFAULT_PARAMS = {
  'geoJSON': {
    aspectScale: 0.75,
    invertLongitute: true
  },
  'geoSVG': {
    aspectScale: 1,
    invertLongitute: false
  }
};
var geo2DDimensions = ['lng', 'lat'];
var Geo_Geo = /** @class */function (_super) {
  (0,tslib_es6.__extends)(Geo, _super);
  function Geo(name, map, opt) {
    var _this = _super.call(this, name, {
      api: opt.api,
      ecModel: opt.ecModel
    }) || this;
    _this.dimensions = geo2DDimensions;
    _this.type = 'geo';
    // Only store specified name coord via `addGeoCoord`.
    _this._nameCoordMap = util.createHashMap();
    _this.map = map;
    var projection = opt.projection;
    var source = geoSourceManager["default"].load(map, opt.nameMap, opt.nameProperty);
    var resource = geoSourceManager["default"].getGeoResource(map);
    var resourceType = _this.resourceType = resource ? resource.type : null;
    var regions = _this.regions = source.regions;
    var defaultParams = GEO_DEFAULT_PARAMS[resource.type];
    _this._regionsMap = source.regionsMap;
    _this.regions = source.regions;
    if (false) {}
    _this.projection = projection;
    var boundingRect;
    if (projection) {
      // Can't reuse the raw bounding rect
      for (var i = 0; i < regions.length; i++) {
        var regionRect = regions[i].getBoundingRect(projection);
        boundingRect = boundingRect || regionRect.clone();
        boundingRect.union(regionRect);
      }
    } else {
      boundingRect = source.boundingRect;
    }
    _this.setBoundingRect(boundingRect.x, boundingRect.y, boundingRect.width, boundingRect.height);
    // aspectScale and invertLongitute actually is the parameters default raw projection.
    // So we ignore them if projection is given.
    // Ignore default aspect scale if projection exits.
    _this.aspectScale = projection ? 1 : util.retrieve2(opt.aspectScale, defaultParams.aspectScale);
    // Not invert longitude if projection exits.
    _this._invertLongitute = projection ? false : defaultParams.invertLongitute;
    return _this;
  }
  Geo.prototype._transformTo = function (x, y, width, height) {
    var rect = this.getBoundingRect();
    var invertLongitute = this._invertLongitute;
    rect = rect.clone();
    if (invertLongitute) {
      // Longitude is inverted.
      rect.y = -rect.y - rect.height;
    }
    var rawTransformable = this._rawTransformable;
    rawTransformable.transform = rect.calculateTransform(new BoundingRect["default"](x, y, width, height));
    var rawParent = rawTransformable.parent;
    rawTransformable.parent = null;
    rawTransformable.decomposeTransform();
    rawTransformable.parent = rawParent;
    if (invertLongitute) {
      rawTransformable.scaleY = -rawTransformable.scaleY;
    }
    this._updateTransform();
  };
  Geo.prototype.getRegion = function (name) {
    return this._regionsMap.get(name);
  };
  Geo.prototype.getRegionByCoord = function (coord) {
    var regions = this.regions;
    for (var i = 0; i < regions.length; i++) {
      var region = regions[i];
      if (region.type === 'geoJSON' && region.contain(coord)) {
        return regions[i];
      }
    }
  };
  /**
   * Add geoCoord for indexing by name
   */
  Geo.prototype.addGeoCoord = function (name, geoCoord) {
    this._nameCoordMap.set(name, geoCoord);
  };
  /**
   * Get geoCoord by name
   */
  Geo.prototype.getGeoCoord = function (name) {
    var region = this._regionsMap.get(name);
    // Calculate center only on demand.
    return this._nameCoordMap.get(name) || region && region.getCenter();
  };
  Geo.prototype.dataToPoint = function (data, noRoam, out) {
    if (util.isString(data)) {
      // Map area name to geoCoord
      data = this.getGeoCoord(data);
    }
    if (data) {
      var projection = this.projection;
      if (projection) {
        // projection may return null point.
        data = projection.project(data);
      }
      return data && this.projectedToPoint(data, noRoam, out);
    }
  };
  Geo.prototype.pointToData = function (point, reserved, out) {
    var projection = this.projection;
    if (projection) {
      // projection may return null point.
      point = projection.unproject(point);
    }
    // FIXME: if no `point`, should return [NaN, NaN], rather than undefined.
    //  null/undefined has special meaning in `convertFromPixel`.
    return point && this.pointToProjected(point, out);
  };
  /**
   * Point to projected data. Same with pointToData when projection is used.
   */
  Geo.prototype.pointToProjected = function (point, out) {
    return _super.prototype.pointToData.call(this, point, 0, out);
  };
  Geo.prototype.projectedToPoint = function (projected, noRoam, out) {
    return _super.prototype.dataToPoint.call(this, projected, noRoam, out);
  };
  Geo.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value) : null;
  };
  Geo.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel) : null;
  };
  return Geo;
}(View["default"]);
;
util.mixin(Geo_Geo, View["default"]);
function getCoordSys(finder) {
  var geoModel = finder.geoModel;
  var seriesModel = finder.seriesModel;
  return geoModel ? geoModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem // For map series.
  || (seriesModel.getReferringComponents('geo', util_model.SINGLE_REFERRING).models[0] || {}).coordinateSystem : null;
}
/* ESM default export */ var geo_Geo = (Geo_Geo);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(25680);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(67053);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Resize method bound to the geo
 */
function resizeGeo(geoModel, api) {
  var boundingCoords = geoModel.get('boundingCoords');
  if (boundingCoords != null) {
    var leftTop_1 = boundingCoords[0];
    var rightBottom_1 = boundingCoords[1];
    if (!(isFinite(leftTop_1[0]) && isFinite(leftTop_1[1]) && isFinite(rightBottom_1[0]) && isFinite(rightBottom_1[1]))) {
      if (false) {}
    } else {
      // Sample around the lng/lat rect and use projection to calculate actual bounding rect.
      var projection_1 = this.projection;
      if (projection_1) {
        var xMin = leftTop_1[0];
        var yMin = leftTop_1[1];
        var xMax = rightBottom_1[0];
        var yMax = rightBottom_1[1];
        leftTop_1 = [Infinity, Infinity];
        rightBottom_1 = [-Infinity, -Infinity];
        // TODO better way?
        var sampleLine = function (x0, y0, x1, y1) {
          var dx = x1 - x0;
          var dy = y1 - y0;
          for (var i = 0; i <= 100; i++) {
            var p = i / 100;
            var pt = projection_1.project([x0 + dx * p, y0 + dy * p]);
            vector.min(leftTop_1, leftTop_1, pt);
            vector.max(rightBottom_1, rightBottom_1, pt);
          }
        };
        // Top
        sampleLine(xMin, yMin, xMax, yMin);
        // Right
        sampleLine(xMax, yMin, xMax, yMax);
        // Bottom
        sampleLine(xMax, yMax, xMin, yMax);
        // Left
        sampleLine(xMin, yMax, xMax, yMin);
      }
      this.setBoundingRect(leftTop_1[0], leftTop_1[1], rightBottom_1[0] - leftTop_1[0], rightBottom_1[1] - leftTop_1[1]);
    }
  }
  var rect = this.getBoundingRect();
  var centerOption = geoModel.get('layoutCenter');
  var sizeOption = geoModel.get('layoutSize');
  // Laying out geo on `dataCoordSys`, such as cartesian, works theoretically but not supported yet.
  // Therefore here we only handle cases that laying out on `boxCoordSys`, such as matrix/calendar.
  var refContainer = layout.createBoxLayoutReference(geoModel, api).refContainer;
  var aspect = rect.width / rect.height * this.aspectScale;
  var useCenterAndSize = false;
  var center;
  var size;
  if (centerOption && sizeOption) {
    center = [number.parsePercent(centerOption[0], refContainer.width) + refContainer.x, number.parsePercent(centerOption[1], refContainer.height) + refContainer.y];
    size = number.parsePercent(sizeOption, Math.min(refContainer.width, refContainer.height));
    if (!isNaN(center[0]) && !isNaN(center[1]) && !isNaN(size)) {
      useCenterAndSize = true;
    } else {
      if (false) {}
    }
  }
  var viewRect;
  if (useCenterAndSize) {
    viewRect = {};
    if (aspect > 1) {
      // Width is same with size
      viewRect.width = size;
      viewRect.height = size / aspect;
    } else {
      viewRect.height = size;
      viewRect.width = size * aspect;
    }
    viewRect.y = center[1] - viewRect.height / 2;
    viewRect.x = center[0] - viewRect.width / 2;
  } else {
    // Use left/top/width/height
    var boxLayoutOption = geoModel.getBoxLayoutParams();
    boxLayoutOption.aspect = aspect;
    viewRect = layout.getLayoutRect(boxLayoutOption, refContainer);
    viewRect = layout.applyPreserveAspect(geoModel, viewRect, aspect);
  }
  this.setViewRect(viewRect.x, viewRect.y, viewRect.width, viewRect.height);
  this.setCenter(geoModel.get('center'));
  this.setZoom(geoModel.get('zoom'));
}
// Back compat for ECharts2, where the coord map is set on map series:
// {type: 'map', geoCoord: {'cityA': [116.46,39.92], 'cityA': [119.12,24.61]}},
function setGeoCoords(geo, model) {
  util.each(model.get('geoCoord'), function (geoCoord, name) {
    geo.addGeoCoord(name, geoCoord);
  });
}
var geoCreator_GeoCreator = /** @class */function () {
  function GeoCreator() {
    // For deciding which dimensions to use when creating list data
    this.dimensions = geo2DDimensions;
  }
  GeoCreator.prototype.create = function (ecModel, api) {
    var geoList = [];
    function getCommonGeoProperties(model) {
      return {
        nameProperty: model.get('nameProperty'),
        aspectScale: model.get('aspectScale'),
        projection: model.get('projection')
      };
    }
    // FIXME Create each time may be slow
    ecModel.eachComponent('geo', function (geoModel, idx) {
      var mapName = geoModel.get('map');
      var geo = new geo_Geo(mapName + idx, mapName, util.extend({
        nameMap: geoModel.get('nameMap'),
        api: api,
        ecModel: ecModel
      }, getCommonGeoProperties(geoModel)));
      geo.zoomLimit = geoModel.get('scaleLimit');
      geoList.push(geo);
      // setGeoCoords(geo, geoModel);
      geoModel.coordinateSystem = geo;
      geo.model = geoModel;
      // Inject resize method
      geo.resize = resizeGeo;
      geo.resize(geoModel, api);
    });
    ecModel.eachSeries(function (seriesModel) {
      (0,CoordinateSystem.injectCoordSysByOption)({
        targetModel: seriesModel,
        coordSysType: 'geo',
        coordSysProvider: function () {
          var geoModel = seriesModel.subType === 'map' ? seriesModel.getHostGeoModel() : seriesModel.getReferringComponents('geo', util_model.SINGLE_REFERRING).models[0];
          return geoModel && geoModel.coordinateSystem;
        },
        allowNotFound: true
      });
    });
    // If has map series
    var mapModelGroupBySeries = {};
    ecModel.eachSeriesByType('map', function (seriesModel) {
      if (!seriesModel.getHostGeoModel()) {
        var mapType = seriesModel.getMapType();
        mapModelGroupBySeries[mapType] = mapModelGroupBySeries[mapType] || [];
        mapModelGroupBySeries[mapType].push(seriesModel);
      }
    });
    util.each(mapModelGroupBySeries, function (mapSeries, mapType) {
      var nameMapList = util.map(mapSeries, function (singleMapSeries) {
        return singleMapSeries.get('nameMap');
      });
      var geo = new geo_Geo(mapType, mapType, util.extend({
        nameMap: util.mergeAll(nameMapList),
        api: api,
        ecModel: ecModel
      }, getCommonGeoProperties(mapSeries[0])));
      geo.zoomLimit = util.retrieve.apply(null, util.map(mapSeries, function (singleMapSeries) {
        return singleMapSeries.get('scaleLimit');
      }));
      geoList.push(geo);
      // Inject resize method
      geo.resize = resizeGeo;
      geo.resize(mapSeries[0], api);
      util.each(mapSeries, function (singleMapSeries) {
        singleMapSeries.coordinateSystem = geo;
        setGeoCoords(geo, singleMapSeries);
      });
    });
    return geoList;
  };
  /**
   * Fill given regions array
   */
  GeoCreator.prototype.getFilledRegions = function (originRegionArr, mapName, nameMap, nameProperty) {
    // Not use the original
    var regionsArr = (originRegionArr || []).slice();
    var dataNameMap = util.createHashMap();
    for (var i = 0; i < regionsArr.length; i++) {
      dataNameMap.set(regionsArr[i].name, regionsArr[i]);
    }
    var source = geoSourceManager["default"].load(mapName, nameMap, nameProperty);
    util.each(source.regions, function (region) {
      var name = region.name;
      var regionOption = dataNameMap.get(name);
      // apply specified echarts style in GeoJSON data
      var specifiedGeoJSONRegionStyle = region.properties && region.properties.echartsStyle;
      if (!regionOption) {
        regionOption = {
          name: name
        };
        regionsArr.push(regionOption);
      }
      specifiedGeoJSONRegionStyle && util.merge(regionOption, specifiedGeoJSONRegionStyle);
    });
    return regionsArr;
  };
  return GeoCreator;
}();
var geoCreator_geoCreator = new geoCreator_GeoCreator();
/* ESM default export */ var geoCreator = (geoCreator_geoCreator);

}),
7195: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ geoSourceManager; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/parseSVG.js
var parseSVG = __webpack_require__(29119);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(27208);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(68903);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(48670);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/parseXML.js
var parseXML = __webpack_require__(56632);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/Region.js
var Region = __webpack_require__(69770);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/GeoSVGResource.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * "region available" means that: enable users to set attribute `name="xxx"` on those tags
 * to make it be a region.
 * 1. region styles and its label styles can be defined in echarts opton:
 * ```js
 * geo: {
 *     regions: [{
 *         name: 'xxx',
 *         itemStyle: { ... },
 *         label: { ... }
 *     }, {
 *         ...
 *     },
 *     ...]
 * };
 * ```
 * 2. name can be duplicated in different SVG tag. All of the tags with the same name share
 * a region option. For exampel if there are two <path> representing two lung lobes. They have
 * no common parents but both of them need to display label "lung" inside.
 */
var REGION_AVAILABLE_SVG_TAG_MAP = (0,util.createHashMap)(['rect', 'circle', 'line', 'ellipse', 'polygon', 'polyline', 'path',
// <text> <tspan> are also enabled because some SVG might paint text itself,
// but still need to trigger events or tooltip.
'text', 'tspan',
// <g> is also enabled because this case: if multiple tags share one name
// and need label displayed, every tags will display the name, which is not
// expected. So we can put them into a <g name="xxx">. Thereby only one label
// displayed and located based on the bounding rect of the <g>.
'g']);
var GeoSVGResource_GeoSVGResource = /** @class */function () {
  function GeoSVGResource(mapName, svg) {
    this.type = 'geoSVG';
    // All used graphics. key: hostKey, value: root
    this._usedGraphicMap = (0,util.createHashMap)();
    // All unused graphics.
    this._freedGraphics = [];
    this._mapName = mapName;
    // Only perform parse to XML object here, which might be time
    // consiming for large SVG.
    // Although convert XML to zrender element is also time consiming,
    // if we do it here, the clone of zrender elements has to be
    // required. So we do it once for each geo instance, util real
    // performance issues call for optimizing it.
    this._parsedXML = (0,parseXML.parseXML)(svg);
  }
  GeoSVGResource.prototype.load = function /* nameMap: NameMap */
  () {
    // In the "load" stage, graphic need to be built to
    // get boundingRect for geo coordinate system.
    var firstGraphic = this._firstGraphic;
    // Create the return data structure only when first graphic created.
    // Because they will be used in geo coordinate system update stage,
    // and `regions` will be mounted at `geo` coordinate system,
    // in which there is no "view" info, so that it should better not to
    // make references to graphic elements.
    if (!firstGraphic) {
      firstGraphic = this._firstGraphic = this._buildGraphic(this._parsedXML);
      this._freedGraphics.push(firstGraphic);
      this._boundingRect = this._firstGraphic.boundingRect.clone();
      // PENDING: `nameMap` will not be supported until some real requirement come.
      // if (nameMap) {
      //     named = applyNameMap(named, nameMap);
      // }
      var _a = createRegions(firstGraphic.named),
        regions = _a.regions,
        regionsMap = _a.regionsMap;
      this._regions = regions;
      this._regionsMap = regionsMap;
    }
    return {
      boundingRect: this._boundingRect,
      regions: this._regions,
      regionsMap: this._regionsMap
    };
  };
  GeoSVGResource.prototype._buildGraphic = function (svgXML) {
    var result;
    var rootFromParse;
    try {
      result = svgXML && (0,parseSVG.parseSVG)(svgXML, {
        ignoreViewBox: true,
        ignoreRootClip: true
      }) || {};
      rootFromParse = result.root;
      (0,util.assert)(rootFromParse != null);
    } catch (e) {
      throw new Error('Invalid svg format\n' + e.message);
    }
    // Note: we keep the covenant that the root has no transform. So always add an extra root.
    var root = new Group["default"]();
    root.add(rootFromParse);
    root.isGeoSVGGraphicRoot = true;
    // [THE_RULE_OF_VIEWPORT_AND_VIEWBOX]
    //
    // Consider: `<svg width="..." height="..." viewBox="...">`
    // - the `width/height` we call it `svgWidth/svgHeight` for short.
    // - `(0, 0, svgWidth, svgHeight)` defines the viewport of the SVG, or say,
    //   "viewport boundingRect", or `boundingRect` for short.
    // - `viewBox` defines the transform from the real content ot the viewport.
    //   `viewBox` has the same unit as the content of SVG.
    //   If `viewBox` exists, a transform is defined, so the unit of `svgWidth/svgHeight` become
    //   different from the content of SVG. Otherwise, they are the same.
    //
    // If both `svgWidth/svgHeight/viewBox` are specified in a SVG file, the transform rule will be:
    // 0. `boundingRect` is `(0, 0, svgWidth, svgHeight)`. Set it to Geo['_rect'] (View['_rect']).
    // 1. Make a transform from `viewBox` to `boundingRect`.
    //    Note: only support `preserveAspectRatio 'xMidYMid'` here. That is, this transform will preserve
    //    the aspect ratio.
    // 2. Make a transform from boundingRect to Geo['_viewRect'] (View['_viewRect'])
    //    (`Geo`/`View` will do this job).
    //    Note: this transform might not preserve aspect radio, which depending on how users specify
    //    viewRect in echarts option (e.g., `geo.left/top/width/height` will not preserve aspect ratio,
    //    but `geo.layoutCenter/layoutSize` will preserve aspect ratio).
    //
    // If `svgWidth/svgHeight` not specified, we use `viewBox` as the `boundingRect` to make the SVG
    // layout look good.
    //
    // If neither `svgWidth/svgHeight` nor `viewBox` are not specified, we calculate the boundingRect
    // of the SVG content and use them to make SVG layout look good.
    var svgWidth = result.width;
    var svgHeight = result.height;
    var viewBoxRect = result.viewBoxRect;
    var boundingRect = this._boundingRect;
    if (!boundingRect) {
      var bRectX = void 0;
      var bRectY = void 0;
      var bRectWidth = void 0;
      var bRectHeight = void 0;
      if (svgWidth != null) {
        bRectX = 0;
        bRectWidth = svgWidth;
      } else if (viewBoxRect) {
        bRectX = viewBoxRect.x;
        bRectWidth = viewBoxRect.width;
      }
      if (svgHeight != null) {
        bRectY = 0;
        bRectHeight = svgHeight;
      } else if (viewBoxRect) {
        bRectY = viewBoxRect.y;
        bRectHeight = viewBoxRect.height;
      }
      // If both viewBox and svgWidth/svgHeight not specified,
      // we have to determine how to layout those element to make them look good.
      if (bRectX == null || bRectY == null) {
        var calculatedBoundingRect = rootFromParse.getBoundingRect();
        if (bRectX == null) {
          bRectX = calculatedBoundingRect.x;
          bRectWidth = calculatedBoundingRect.width;
        }
        if (bRectY == null) {
          bRectY = calculatedBoundingRect.y;
          bRectHeight = calculatedBoundingRect.height;
        }
      }
      boundingRect = this._boundingRect = new BoundingRect["default"](bRectX, bRectY, bRectWidth, bRectHeight);
    }
    if (viewBoxRect) {
      var viewBoxTransform = (0,parseSVG.makeViewBoxTransform)(viewBoxRect, boundingRect);
      // Only support `preserveAspectRatio 'xMidYMid'`
      rootFromParse.scaleX = rootFromParse.scaleY = viewBoxTransform.scale;
      rootFromParse.x = viewBoxTransform.x;
      rootFromParse.y = viewBoxTransform.y;
    }
    // SVG needs to clip based on `viewBox`. And some SVG files really rely on this feature.
    // They do not strictly confine all of the content inside a display rect, but deliberately
    // use a `viewBox` to define a displayable rect.
    // PENDING:
    // The drawback of the `setClipPath` here is: the region label (genereted by echarts) near the
    // edge might also be clipped, because region labels are put as `textContent` of the SVG path.
    root.setClipPath(new Rect["default"]({
      shape: boundingRect.plain()
    }));
    var named = [];
    (0,util.each)(result.named, function (namedItem) {
      if (REGION_AVAILABLE_SVG_TAG_MAP.get(namedItem.svgNodeTagLower) != null) {
        named.push(namedItem);
        setSilent(namedItem.el);
      }
    });
    return {
      root: root,
      boundingRect: boundingRect,
      named: named
    };
  };
  /**
   * Consider:
   * (1) One graphic element can not be shared by different `geoView` running simultaneously.
   *     Notice, also need to consider multiple echarts instances share a `mapRecord`.
   * (2) Converting SVG to graphic elements is time consuming.
   * (3) In the current architecture, `load` should be called frequently to get boundingRect,
   *     and it is called without view info.
   * So we maintain graphic elements in this module, and enables `view` to use/return these
   * graphics from/to the pool with it's uid.
   */
  GeoSVGResource.prototype.useGraphic = function (hostKey /* , nameMap: NameMap */) {
    var usedRootMap = this._usedGraphicMap;
    var svgGraphic = usedRootMap.get(hostKey);
    if (svgGraphic) {
      return svgGraphic;
    }
    svgGraphic = this._freedGraphics.pop()
    // use the first boundingRect to avoid duplicated boundingRect calculation.
    || this._buildGraphic(this._parsedXML);
    usedRootMap.set(hostKey, svgGraphic);
    // PENDING: `nameMap` will not be supported until some real requirement come.
    // `nameMap` can only be obtained from echarts option.
    // The original `named` must not be modified.
    // if (nameMap) {
    //     svgGraphic = extend({}, svgGraphic);
    //     svgGraphic.named = applyNameMap(svgGraphic.named, nameMap);
    // }
    return svgGraphic;
  };
  GeoSVGResource.prototype.freeGraphic = function (hostKey) {
    var usedRootMap = this._usedGraphicMap;
    var svgGraphic = usedRootMap.get(hostKey);
    if (svgGraphic) {
      usedRootMap.removeKey(hostKey);
      this._freedGraphics.push(svgGraphic);
    }
  };
  return GeoSVGResource;
}();

function setSilent(el) {
  // Only named element has silent: false, other elements should
  // act as background and has no user interaction.
  el.silent = false;
  // text|tspan will be converted to group.
  if (el.isGroup) {
    el.traverse(function (child) {
      child.silent = false;
    });
  }
}
function createRegions(named) {
  var regions = [];
  var regionsMap = (0,util.createHashMap)();
  // Create resions only for the first graphic.
  (0,util.each)(named, function (namedItem) {
    // Region has feature to calculate center for tooltip or other features.
    // If there is a <g name="xxx">, the center should be the center of the
    // bounding rect of the g.
    if (namedItem.namedFrom != null) {
      return;
    }
    var region = new Region.GeoSVGRegion(namedItem.name, namedItem.el);
    // PENDING: if `nameMap` supported, this region can not be mounted on
    // `this`, but can only be created each time `load()` called.
    regions.push(region);
    // PENDING: if multiple tag named with the same name, only one will be
    // found by `_regionsMap`. `_regionsMap` is used to find a coordinate
    // by name. We use `region.getCenter()` as the coordinate.
    regionsMap.set(namedItem.name, region);
  });
  return {
    regions: regions,
    regionsMap: regionsMap
  };
}
// PENDING: `nameMap` will not be supported until some real requirement come.
// /**
//  * Use the alias in geoNameMap.
//  * The input `named` must not be modified.
//  */
// function applyNameMap(
//     named: GeoSVGGraphicRecord['named'],
//     nameMap: NameMap
// ): GeoSVGGraphicRecord['named'] {
//     const result = [] as GeoSVGGraphicRecord['named'];
//     for (let i = 0; i < named.length; i++) {
//         let regionGraphic = named[i];
//         const name = regionGraphic.name;
//         if (nameMap && nameMap.hasOwnProperty(name)) {
//             regionGraphic = extend({}, regionGraphic);
//             regionGraphic.name = name;
//         }
//         result.push(regionGraphic);
//     }
//     return result;
// }
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js
var parseGeoJson = __webpack_require__(10500);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/fix/nanhai.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
// Fix for 南海诸岛


var geoCoord = [126, 25];
var nanhaiName = '南海诸岛';
var points = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, 0.7], [52, 0.7], [56, 7.7], [59, 0.7], [64, 0.7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]];
for (var nanhai_i = 0; nanhai_i < points.length; nanhai_i++) {
  for (var k = 0; k < points[nanhai_i].length; k++) {
    points[nanhai_i][k][0] /= 10.5;
    points[nanhai_i][k][1] /= -10.5 / 0.75;
    points[nanhai_i][k][0] += geoCoord[0];
    points[nanhai_i][k][1] += geoCoord[1];
  }
}
function fixNanhai(mapType, regions) {
  if (mapType === 'china') {
    for (var i = 0; i < regions.length; i++) {
      // Already exists.
      if (regions[i].name === nanhaiName) {
        return;
      }
    }
    regions.push(new Region.GeoJSONRegion(nanhaiName, util.map(points, function (exterior) {
      return {
        type: 'polygon',
        exterior: exterior
      };
    }), geoCoord));
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/fix/textCoord.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
var coordsOffsetMap = {
  '南海诸岛': [32, 80],
  // 全国
  '广东': [0, -10],
  '香港': [10, 5],
  '澳门': [-10, 10],
  // '北京': [-10, 0],
  '天津': [5, 5]
};
function fixTextCoords(mapType, region) {
  if (mapType === 'china') {
    var coordFix = coordsOffsetMap[region.name];
    if (coordFix) {
      var cp = region.getCenter();
      cp[0] += coordFix[0] / 10.5;
      cp[1] += -coordFix[1] / (10.5 / 0.75);
      region.setCenter(cp);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
// Fix for 钓鱼岛
// let Region = require('../Region');
// let zrUtil = require('zrender/lib/core/util');
// let geoCoord = [126, 25];
var diaoyuIsland_points = [[[123.45165252685547, 25.73527164402261], [123.49731445312499, 25.73527164402261], [123.49731445312499, 25.750734064600884], [123.45165252685547, 25.750734064600884], [123.45165252685547, 25.73527164402261]]];
function fixDiaoyuIsland(mapType, region) {
  if (mapType === 'china' && region.name === '台湾') {
    region.geometries.push({
      type: 'polygon',
      exterior: diaoyuIsland_points[0]
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/GeoJSONResource.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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


// Built-in GEO fixer.




var DEFAULT_NAME_PROPERTY = 'name';
var GeoJSONResource_GeoJSONResource = /** @class */function () {
  function GeoJSONResource(mapName, geoJSON, specialAreas) {
    this.type = 'geoJSON';
    this._parsedMap = (0,util.createHashMap)();
    this._mapName = mapName;
    this._specialAreas = specialAreas;
    // PENDING: delay the parse to the first usage to rapid up the FMP?
    this._geoJSON = parseInput(geoJSON);
  }
  /**
   * @param nameMap can be null/undefined
   * @param nameProperty can be null/undefined
   */
  GeoJSONResource.prototype.load = function (nameMap, nameProperty) {
    nameProperty = nameProperty || DEFAULT_NAME_PROPERTY;
    var parsed = this._parsedMap.get(nameProperty);
    if (!parsed) {
      var rawRegions = this._parseToRegions(nameProperty);
      parsed = this._parsedMap.set(nameProperty, {
        regions: rawRegions,
        boundingRect: calculateBoundingRect(rawRegions)
      });
    }
    var regionsMap = (0,util.createHashMap)();
    var finalRegions = [];
    (0,util.each)(parsed.regions, function (region) {
      var regionName = region.name;
      // Try use the alias in geoNameMap
      if (nameMap && (0,util.hasOwn)(nameMap, regionName)) {
        region = region.cloneShallow(regionName = nameMap[regionName]);
      }
      finalRegions.push(region);
      regionsMap.set(regionName, region);
    });
    return {
      regions: finalRegions,
      boundingRect: parsed.boundingRect || new BoundingRect["default"](0, 0, 0, 0),
      regionsMap: regionsMap
    };
  };
  GeoJSONResource.prototype._parseToRegions = function (nameProperty) {
    var mapName = this._mapName;
    var geoJSON = this._geoJSON;
    var rawRegions;
    // https://jsperf.com/try-catch-performance-overhead
    try {
      rawRegions = geoJSON ? (0,parseGeoJson["default"])(geoJSON, nameProperty) : [];
    } catch (e) {
      throw new Error('Invalid geoJson format\n' + e.message);
    }
    fixNanhai(mapName, rawRegions);
    (0,util.each)(rawRegions, function (region) {
      var regionName = region.name;
      fixTextCoords(mapName, region);
      fixDiaoyuIsland(mapName, region);
      // Some area like Alaska in USA map needs to be tansformed
      // to look better
      var specialArea = this._specialAreas && this._specialAreas[regionName];
      if (specialArea) {
        region.transformTo(specialArea.left, specialArea.top, specialArea.width, specialArea.height);
      }
    }, this);
    return rawRegions;
  };
  /**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */
  GeoJSONResource.prototype.getMapForUser = function () {
    return {
      // For backward compatibility, use geoJson
      // PENDING: it has been returning them without clone.
      // do we need to avoid outsite modification?
      geoJson: this._geoJSON,
      geoJSON: this._geoJSON,
      specialAreas: this._specialAreas
    };
  };
  return GeoJSONResource;
}();

function calculateBoundingRect(regions) {
  var rect;
  for (var i = 0; i < regions.length; i++) {
    var regionRect = regions[i].getBoundingRect();
    rect = rect || regionRect.clone();
    rect.union(regionRect);
  }
  return rect;
}
function parseInput(source) {
  return !(0,util.isString)(source) ? source : typeof JSON !== 'undefined' && JSON.parse ? JSON.parse(source) : new Function('return (' + source + ');')();
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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



var storage = (0,util.createHashMap)();
/* ESM default export */ var geoSourceManager = ({
  /**
   * Compatible with previous `echarts.registerMap`.
   *
   * @usage
   * ```js
   *
   * echarts.registerMap('USA', geoJson, specialAreas);
   *
   * echarts.registerMap('USA', {
   *     geoJson: geoJson,
   *     specialAreas: {...}
   * });
   * echarts.registerMap('USA', {
   *     geoJSON: geoJson,
   *     specialAreas: {...}
   * });
   *
   * echarts.registerMap('airport', {
   *     svg: svg
   * }
   * ```
   *
   * Note:
   * Do not support that register multiple geoJSON or SVG
   * one map name. Because different geoJSON and SVG have
   * different unit. It's not easy to make sure how those
   * units are mapping/normalize.
   * If intending to use multiple geoJSON or SVG, we can
   * use multiple geo coordinate system.
   */
  registerMap: function (mapName, rawDef, rawSpecialAreas) {
    if (rawDef.svg) {
      var resource = new GeoSVGResource_GeoSVGResource(mapName, rawDef.svg);
      storage.set(mapName, resource);
    } else {
      // Recommend:
      //     echarts.registerMap('eu', { geoJSON: xxx, specialAreas: xxx });
      // Backward compatibility:
      //     echarts.registerMap('eu', geoJSON, specialAreas);
      //     echarts.registerMap('eu', { geoJson: xxx, specialAreas: xxx });
      var geoJSON = rawDef.geoJson || rawDef.geoJSON;
      if (geoJSON && !rawDef.features) {
        rawSpecialAreas = rawDef.specialAreas;
      } else {
        geoJSON = rawDef;
      }
      var resource = new GeoJSONResource_GeoJSONResource(mapName, geoJSON, rawSpecialAreas);
      storage.set(mapName, resource);
    }
  },
  getGeoResource: function (mapName) {
    return storage.get(mapName);
  },
  /**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */
  getMapForUser: function (mapName) {
    var resource = storage.get(mapName);
    // Do not support return SVG until some real requirement come.
    return resource && resource.type === 'geoJSON' && resource.getMapForUser();
  },
  load: function (mapName, nameMap, nameProperty) {
    var resource = storage.get(mapName);
    if (!resource) {
      if (false) {}
      return;
    }
    return resource.load(nameMap, nameProperty);
  }
});

}),
10500: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return parseGeoJSON; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _Region_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69770);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Parse and decode geo json
 */


function decode(json) {
  if (!json.UTF8Encoding) {
    return json;
  }
  var jsonCompressed = json;
  var encodeScale = jsonCompressed.UTF8Scale;
  if (encodeScale == null) {
    encodeScale = 1024;
  }
  var features = jsonCompressed.features;
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(features, function (feature) {
    var geometry = feature.geometry;
    var encodeOffsets = geometry.encodeOffsets;
    var coordinates = geometry.coordinates;
    // Geometry may be appeded manually in the script after json loaded.
    // In this case this geometry is usually not encoded.
    if (!encodeOffsets) {
      return;
    }
    switch (geometry.type) {
      case 'LineString':
        geometry.coordinates = decodeRing(coordinates, encodeOffsets, encodeScale);
        break;
      case 'Polygon':
        decodeRings(coordinates, encodeOffsets, encodeScale);
        break;
      case 'MultiLineString':
        decodeRings(coordinates, encodeOffsets, encodeScale);
        break;
      case 'MultiPolygon':
        zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(coordinates, function (rings, idx) {
          return decodeRings(rings, encodeOffsets[idx], encodeScale);
        });
    }
  });
  // Has been decoded
  jsonCompressed.UTF8Encoding = false;
  return jsonCompressed;
}
function decodeRings(rings, encodeOffsets, encodeScale) {
  for (var c = 0; c < rings.length; c++) {
    rings[c] = decodeRing(rings[c], encodeOffsets[c], encodeScale);
  }
}
function decodeRing(coordinate, encodeOffsets, encodeScale) {
  var result = [];
  var prevX = encodeOffsets[0];
  var prevY = encodeOffsets[1];
  for (var i = 0; i < coordinate.length; i += 2) {
    var x = coordinate.charCodeAt(i) - 64;
    var y = coordinate.charCodeAt(i + 1) - 64;
    // ZigZag decoding
    x = x >> 1 ^ -(x & 1);
    y = y >> 1 ^ -(y & 1);
    // Delta deocding
    x += prevX;
    y += prevY;
    prevX = x;
    prevY = y;
    // Dequantize
    result.push([x / encodeScale, y / encodeScale]);
  }
  return result;
}
function parseGeoJSON(geoJson, nameProperty) {
  geoJson = decode(geoJson);
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.filter(geoJson.features, function (featureObj) {
    // Output of mapshaper may have geometry null
    return featureObj.geometry && featureObj.properties && featureObj.geometry.coordinates.length > 0;
  }), function (featureObj) {
    var properties = featureObj.properties;
    var geo = featureObj.geometry;
    var geometries = [];
    switch (geo.type) {
      case 'Polygon':
        var coordinates = geo.coordinates;
        // According to the GeoJSON specification.
        // First must be exterior, and the rest are all interior(holes).
        geometries.push(new _Region_js__WEBPACK_IMPORTED_MODULE_1__.GeoJSONPolygonGeometry(coordinates[0], coordinates.slice(1)));
        break;
      case 'MultiPolygon':
        zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(geo.coordinates, function (item) {
          if (item[0]) {
            geometries.push(new _Region_js__WEBPACK_IMPORTED_MODULE_1__.GeoJSONPolygonGeometry(item[0], item.slice(1)));
          }
        });
        break;
      case 'LineString':
        geometries.push(new _Region_js__WEBPACK_IMPORTED_MODULE_1__.GeoJSONLineStringGeometry([geo.coordinates]));
        break;
      case 'MultiLineString':
        geometries.push(new _Region_js__WEBPACK_IMPORTED_MODULE_1__.GeoJSONLineStringGeometry(geo.coordinates));
    }
    var region = new _Region_js__WEBPACK_IMPORTED_MODULE_1__.GeoJSONRegion(properties[nameProperty || 'name'], geometries, properties.cp);
    region.properties = properties;
    return region;
  });
}

}),
92342: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return geoPrepareCustom; }
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

function dataToCoordSize(dataSize, dataItem) {
  dataItem = dataItem || [0, 0];
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map([0, 1], function (dimIdx) {
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    var p1 = [];
    var p2 = [];
    p1[dimIdx] = val - halfSize;
    p2[dimIdx] = val + halfSize;
    p1[1 - dimIdx] = p2[1 - dimIdx] = dataItem[1 - dimIdx];
    return Math.abs(this.dataToPoint(p1)[dimIdx] - this.dataToPoint(p2)[dimIdx]);
  }, this);
}
function geoPrepareCustom(coordSys) {
  var rect = coordSys.getBoundingRect();
  return {
    coordSys: {
      type: 'geo',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      zoom: coordSys.getZoom()
    },
    api: {
      coord: function (data) {
        // do not provide "out" and noRoam param,
        // Compatible with this usage:
        // echarts.util.map(item.points, api.coord)
        return coordSys.dataToPoint(data);
      },
      size: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(dataToCoordSize, coordSys)
    }
  };
}

}),
74665: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22265);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44244);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42562);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40064);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48843);
/* ESM import */var _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9466);
/* ESM import */var _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67053);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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









var Matrix = /** @class */function () {
  function Matrix(matrixModel, ecModel, api) {
    this.dimensions = Matrix.dimensions;
    this.type = 'matrix';
    this._model = matrixModel;
    var models = this._dimModels = {
      x: matrixModel.getDimensionModel('x'),
      y: matrixModel.getDimensionModel('y')
    };
    this._dims = {
      x: models.x.dim,
      y: models.y.dim
    };
    this._resize(matrixModel, api);
  }
  /**
   * @see fetchers in `model/referHelper.ts`,
   * which is used to parse data in ordinal way.
   * In most series only 'x' and 'y' is required,
   * but some series, such as heatmap, can specify value.
   */
  Matrix.getDimensionsInfo = function () {
    return [{
      name: 'x',
      type: 'ordinal'
    }, {
      name: 'y',
      type: 'ordinal'
    }, {
      name: 'value'
    }];
  };
  Matrix.create = function (ecModel, api) {
    var matrixList = [];
    ecModel.eachComponent('matrix', function (matrixModel) {
      var matrix = new Matrix(matrixModel, ecModel, api);
      matrixList.push(matrix);
      matrixModel.coordinateSystem = matrix;
    });
    // Inject coordinate system
    // PENDING: optimize to not to travel all components?
    //  (collect relevant components in ecModel only when model update?)
    ecModel.eachComponent(function (mainType, componentModel) {
      (0,_core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__.injectCoordSysByOption)({
        targetModel: componentModel,
        coordSysType: 'matrix',
        coordSysProvider: _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__.simpleCoordSysInjectionProvider
      });
    });
    return matrixList;
  };
  Matrix.prototype.getRect = function () {
    return this._rect;
  };
  Matrix.prototype._resize = function (matrixModel, api) {
    var dims = this._dims;
    var dimModels = this._dimModels;
    var rect = this._rect = (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_1__.getLayoutRect)(matrixModel.getBoxLayoutParams(), {
      width: api.getWidth(),
      height: api.getHeight()
    });
    layOutUnitsOnDimension(dimModels, dims, rect, 0);
    layOutUnitsOnDimension(dimModels, dims, rect, 1);
    layOutDimCellsRestInfoByUnit(0, dims);
    layOutDimCellsRestInfoByUnit(1, dims);
    layOutBodyCornerCellMerge(this._model.getBody(), dims);
    layOutBodyCornerCellMerge(this._model.getCorner(), dims);
  };
  /**
   * @implement
   * - The input is allowed to be `[NaN/null/undefined, xxx]`/`[xxx, NaN/null/undefined]`;
   *  the return is `[NaN, xxxresult]`/`[xxxresult, NaN]` or clamped boundary value if
   *  `clamp` passed. This is for the usage that only get coord on single x or y.
   * - Alwasy return an numeric array, but never be null/undefined.
   *  If it can not be located or invalid, return `[NaN, NaN]`.
   */
  Matrix.prototype.dataToPoint = function (data, opt, out) {
    out = out || [];
    this.dataToLayout(data, opt, _dtpOutDataToLayout);
    out[0] = _dtpOutDataToLayout.rect.x + _dtpOutDataToLayout.rect.width / 2;
    out[1] = _dtpOutDataToLayout.rect.y + _dtpOutDataToLayout.rect.height / 2;
    return out;
  };
  /**
   * @implement
   * - The input is allowed to be `[NaN/null/undefined, xxx]`/`[xxx, NaN/null/undefined]`;
   *  the return is `{x: NaN, width: NaN, y: xxxresulty, height: xxxresulth}`/
   *  `{y: NaN, height: NaN, x: xxxresultx, width: xxxresultw}` or clamped boundary value
   *  if `clamp` passed. This is for the usage that only get coord on single x or y.
   * - The returned `out.rect` and `out.matrixXYLocatorRange` is always an object or an 2d-array,
   *  but never be null/undefined. If it cannot be located or invalid, `NaN` is in their
   *  corresponding number props.
   * - Do not provide `out.contentRect`, because it's allowed to input non-leaf dimension x/y or
   *  a range of x/y, which determines a rect covering multiple cells (even not merged), in which
   *  case the padding and borderWidth can not be determined to make a contentRect. Therefore only
   *  return `out.rect` in any case for consistency. The caller is responsible for adding space to
   *  avoid covering cell borders, if necessary.
   */
  Matrix.prototype.dataToLayout = function (data, opt, out) {
    var dims = this._dims;
    out = out || {};
    var outRect = out.rect = out.rect || {};
    outRect.x = outRect.y = outRect.width = outRect.height = NaN;
    var outLocRange = out.matrixXYLocatorRange = (0,_matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.resetXYLocatorRange)(out.matrixXYLocatorRange);
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(data)) {
      if (false) {}
      return out;
    }
    (0,_matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.parseCoordRangeOption)(outLocRange, null, data, dims, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.retrieve2)(opt && opt.clamp, _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.MatrixClampOption.none));
    if (!opt || !opt.ignoreMergeCells) {
      if (!opt || opt.clamp !== _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.MatrixClampOption.corner) {
        this._model.getBody().expandRangeByCellMerge(outLocRange);
      }
      if (!opt || opt.clamp !== _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.MatrixClampOption.body) {
        this._model.getCorner().expandRangeByCellMerge(outLocRange);
      }
    }
    (0,_matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.xyLocatorRangeToRectOneDim)(outRect, outLocRange, dims, 0);
    (0,_matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.xyLocatorRangeToRectOneDim)(outRect, outLocRange, dims, 1);
    return out;
  };
  /**
   * The returned locator pair can be the input of `dataToPoint` or `dataToLayout`.
   *
   * If point[0] is out of the matrix rect,
   *  the out[0] is NaN;
   * else if it is on the right of top-left corner of body,
   *  the out[0] is the oridinal number (>= 0).
   * else
   *  out[0] is the locator for corner or header (<= 0).
   *
   * The same rule goes for point[1] and out[1].
   *
   * But point[0] and point[1] are calculated separately, i.e.,
   * the reuslt can be `[1, NaN]` or `[NaN, 1]` if only one dimension is out of boundary.
   *
   * @implement
   */
  Matrix.prototype.pointToData = function (point, opt, out) {
    var dims = this._dims;
    pointToDataOneDimPrepareCtx(_tmpCtxPointToData, 0, dims, point, opt && opt.clamp);
    pointToDataOneDimPrepareCtx(_tmpCtxPointToData, 1, dims, point, opt && opt.clamp);
    out = out || [];
    out[0] = out[1] = NaN;
    if (_tmpCtxPointToData.y === CtxPointToDataAreaType.inCorner && _tmpCtxPointToData.x === CtxPointToDataAreaType.inBody) {
      pointToDataOnlyHeaderFillOut(_tmpCtxPointToData, out, 0, dims);
    } else if (_tmpCtxPointToData.x === CtxPointToDataAreaType.inCorner && _tmpCtxPointToData.y === CtxPointToDataAreaType.inBody) {
      pointToDataOnlyHeaderFillOut(_tmpCtxPointToData, out, 1, dims);
    } else {
      pointToDataBodyCornerFillOut(_tmpCtxPointToData, out, 0, dims);
      pointToDataBodyCornerFillOut(_tmpCtxPointToData, out, 1, dims);
    }
    return out;
  };
  Matrix.prototype.convertToPixel = function (ecModel, finder, value, opt) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value, opt) : undefined;
  };
  Matrix.prototype.convertToLayout = function (ecModel, finder, value, opt) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToLayout(value, opt) : undefined;
  };
  Matrix.prototype.convertFromPixel = function (ecModel, finder, pixel, opt) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel, opt) : undefined;
  };
  Matrix.prototype.containPoint = function (point) {
    return this._rect.contain(point[0], point[1]);
  };
  Matrix.dimensions = ['x', 'y', 'value'];
  return Matrix;
}();
var _dtpOutDataToLayout = {
  rect: (0,_matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.createNaNRectLike)()
};
var _ptdLevelIt = new _util_model_js__WEBPACK_IMPORTED_MODULE_4__.ListIterator();
var _ptdDimCellIt = new _util_model_js__WEBPACK_IMPORTED_MODULE_4__.ListIterator();
function layOutUnitsOnDimension(dimModels, dims, matrixRect, dimIdx) {
  var otherDimIdx = 1 - dimIdx;
  var thisDim = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
  var otherDim = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[otherDimIdx]];
  // Notice: If matrix.x/y.show is false, still lay out, to ensure the
  // consistent return of `dataToLayout`.
  var otherDimShow = otherDim.shouldShow();
  // Reset
  for (var it_1 = thisDim.resetCellIterator(); it_1.next();) {
    it_1.item.wh = it_1.item.xy = NaN;
  }
  for (var it_2 = otherDim.resetLayoutIterator(null, dimIdx); it_2.next();) {
    it_2.item.wh = it_2.item.xy = NaN;
  }
  // Set specified size from option.
  var restSize = matrixRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]];
  var restCellsCount = thisDim.getLocatorCount(dimIdx) + otherDim.getLocatorCount(dimIdx);
  var tmpLevelModel = new _model_Model_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  for (var it_3 = otherDim.resetLevelIterator(); it_3.next();) {
    // Consider `matrix.x.levelSize` and `matrix.x.levels[i].levelSize`.
    tmpLevelModel.option = it_3.item.option;
    tmpLevelModel.parentModel = dimModels[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[otherDimIdx]];
    layOutSpecified(it_3.item, otherDimShow ? tmpLevelModel.get('levelSize') : 0);
  }
  var tmpCellModel = new _model_Model_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  for (var it_4 = thisDim.resetCellIterator(); it_4.next();) {
    // Only leaf support size specification, to avoid unnecessary complexity.
    if (it_4.item.type === _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.MatrixCellLayoutInfoType.leaf) {
      tmpCellModel.option = it_4.item.option;
      tmpCellModel.parentModel = undefined;
      layOutSpecified(it_4.item, tmpCellModel.get('size'));
    }
  }
  function layOutSpecified(item, sizeOption) {
    var size = parseSizeOption(sizeOption, dimIdx, matrixRect);
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.eqNaN)(size)) {
      item.wh = confineSize(size, restSize);
      restSize = confineSize(restSize - item.wh);
      restCellsCount--;
    }
  }
  // Set all sizes and positions to levels and leaf cells of which size is unspecified.
  // Contents lay out based on matrix, rather than inverse; therefore do not support
  // calculating size based on content, but allocate equally.
  var computedCellWH = restCellsCount ? restSize / restCellsCount : 0;
  // If all size specified, but some space remain (may also caused by matrix.x/y.show: false)
  // do not align to the big most edge.
  var notAlignToBigmost = !restCellsCount && restSize >= 1; // `1` for cumulative precision error.
  var currXY = matrixRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
  var maxLocator = thisDim.getLocatorCount(dimIdx) - 1;
  var it = new _util_model_js__WEBPACK_IMPORTED_MODULE_4__.ListIterator();
  // Lay out levels of the perpendicular dim.
  for (otherDim.resetLayoutIterator(it, dimIdx); it.next();) {
    layOutUnspecified(it.item);
  }
  for (thisDim.resetLayoutIterator(it, dimIdx); it.next();) {
    layOutUnspecified(it.item);
  }
  function layOutUnspecified(item) {
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.eqNaN)(item.wh)) {
      item.wh = computedCellWH;
    }
    item.xy = currXY;
    if (item.id[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] === maxLocator && !notAlignToBigmost) {
      // Align to the rightmost border, consider cumulative precision error.
      item.wh = matrixRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] + matrixRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]] - item.xy;
    }
    currXY += item.wh;
  }
}
function layOutDimCellsRestInfoByUnit(dimIdx, dims) {
  // Finally save layout info based on the unit leaves and levels.
  for (var it_5 = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]].resetCellIterator(); it_5.next();) {
    var dimCell = it_5.item;
    layOutRectOneDimBasedOnUnit(dimCell.rect, dimIdx, dimCell.id, dimCell.span, dims);
    // Consider level varitation on tree leaves, should extend the size to touch matrix body
    // to avoid weird appearance.
    layOutRectOneDimBasedOnUnit(dimCell.rect, 1 - dimIdx, dimCell.id, dimCell.span, dims);
    if (dimCell.type === _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.MatrixCellLayoutInfoType.nonLeaf) {
      // `xy` and `wh` need to be saved in non-leaf since it supports locating by non-leaf
      // in `dataToPoint` or `dataToLayout`.
      dimCell.xy = dimCell.rect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
      dimCell.wh = dimCell.rect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]];
    }
  }
}
function layOutBodyCornerCellMerge(bodyOrCorner, dims) {
  bodyOrCorner.travelExistingCells(function (cell) {
    var computedSpan = cell.span;
    if (computedSpan) {
      var layoutRect = cell.spanRect;
      var id = cell.id;
      layOutRectOneDimBasedOnUnit(layoutRect, 0, id, computedSpan, dims);
      layOutRectOneDimBasedOnUnit(layoutRect, 1, id, computedSpan, dims);
    }
  });
}
// Save to rect for rendering.
function layOutRectOneDimBasedOnUnit(outRect, dimIdx, id, span, dims) {
  outRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]] = 0;
  var locator = id[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
  var dim = locator < 0 ? dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[1 - dimIdx]] : dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
  var layoutUnit = dim.getUnitLayoutInfo(dimIdx, id[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]]);
  outRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = layoutUnit.xy;
  outRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]] = layoutUnit.wh;
  if (span[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] > 1) {
    var layoutUnit2 = dim.getUnitLayoutInfo(dimIdx, id[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] + span[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] - 1);
    // Be careful the cumulative error - cell must be aligned.
    outRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]] = layoutUnit2.xy + layoutUnit2.wh - layoutUnit.xy;
  }
}
/**
 * Return NaN if not defined or invalid.
 */
function parseSizeOption(sizeOption, dimIdx, matrixRect) {
  var sizeNum = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_7__.parsePositionSizeOption)(sizeOption, matrixRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]]);
  return confineSize(sizeNum, matrixRect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]]);
}
function confineSize(sizeNum, sizeLimit) {
  return Math.max(Math.min(sizeNum, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.retrieve2)(sizeLimit, Infinity)), 0);
}
function getCoordSys(finder) {
  var matrixModel = finder.matrixModel;
  var seriesModel = finder.seriesModel;
  var coordSys = matrixModel ? matrixModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem : null;
  return coordSys;
}
var CtxPointToDataAreaType = {
  inBody: 1,
  inCorner: 2,
  outside: 3
};
// For handy performance optimization in pointToData.
var _tmpCtxPointToData = {
  x: null,
  y: null,
  point: []
};
function pointToDataOneDimPrepareCtx(ctx, dimIdx, dims, point, clamp) {
  var thisDim = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
  var otherDim = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[1 - dimIdx]];
  // Notice: considered cases: `matrix.x/y.show: false`, `matrix.x/y.data` is empty.
  // In this cases the `layout.xy` is on the edge and `layout.wh` is `0`; they still can be
  // use to calculate clampping.
  var bodyMaxUnit = thisDim.getUnitLayoutInfo(dimIdx, thisDim.getLocatorCount(dimIdx) - 1);
  var body0Unit = thisDim.getUnitLayoutInfo(dimIdx, 0);
  var cornerMinUnit = otherDim.getUnitLayoutInfo(dimIdx, -otherDim.getLocatorCount(dimIdx));
  var cornerMinus1Unit = otherDim.shouldShow() ? otherDim.getUnitLayoutInfo(dimIdx, -1) : null;
  var coord = ctx.point[dimIdx] = point[dimIdx]; // Transfer the oridinal coord.
  if (!body0Unit && !cornerMinus1Unit) {
    ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = CtxPointToDataAreaType.outside;
    return;
  }
  if (clamp === _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.MatrixClampOption.body) {
    if (body0Unit) {
      ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = CtxPointToDataAreaType.inBody;
      coord = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_7__.mathMin)(bodyMaxUnit.xy + bodyMaxUnit.wh, (0,_util_number_js__WEBPACK_IMPORTED_MODULE_7__.mathMax)(body0Unit.xy, coord));
      ctx.point[dimIdx] = coord;
    } else {
      // If clamp to body, the result must not be in header.
      ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = CtxPointToDataAreaType.outside;
    }
    return;
  } else if (clamp === _matrixCoordHelper_js__WEBPACK_IMPORTED_MODULE_2__.MatrixClampOption.corner) {
    if (cornerMinus1Unit) {
      ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = CtxPointToDataAreaType.inCorner;
      coord = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_7__.mathMin)(cornerMinus1Unit.xy + cornerMinus1Unit.wh, (0,_util_number_js__WEBPACK_IMPORTED_MODULE_7__.mathMax)(cornerMinUnit.xy, coord));
      ctx.point[dimIdx] = coord;
    } else {
      // If clamp to corner, the result must not be in body.
      ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = CtxPointToDataAreaType.outside;
    }
    return;
  }
  var pxLoc0 = body0Unit ? body0Unit.xy : cornerMinus1Unit ? cornerMinus1Unit.xy + cornerMinus1Unit.wh : NaN;
  var pxMin = cornerMinUnit ? cornerMinUnit.xy : pxLoc0;
  var pxMax = bodyMaxUnit ? bodyMaxUnit.xy + bodyMaxUnit.wh : pxLoc0;
  if (coord < pxMin) {
    if (!clamp) {
      // Quick pass for later calc, since mouse event on any place will enter this method if use `pointToData`.
      ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = CtxPointToDataAreaType.outside;
      return;
    }
    coord = pxMin;
  } else if (coord > pxMax) {
    if (!clamp) {
      ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = CtxPointToDataAreaType.outside;
      return;
    }
    coord = pxMax;
  }
  ctx.point[dimIdx] = coord; // Save the updated coord.
  ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] = pxLoc0 <= coord && coord <= pxMax ? CtxPointToDataAreaType.inBody : pxMin <= coord && coord <= pxLoc0 ? CtxPointToDataAreaType.inCorner : CtxPointToDataAreaType.outside;
  // Every props in ctx must be set in every branch of this method.
}
// Assume partialOut has been set to NaN outside.
// This method may fill out[0] and out[1] in one call.
function pointToDataOnlyHeaderFillOut(ctx, partialOut, dimIdx, dims) {
  var otherDimIdx = 1 - dimIdx;
  if (ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] === CtxPointToDataAreaType.outside) {
    return;
  }
  for (dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]].resetCellIterator(_ptdDimCellIt); _ptdDimCellIt.next();) {
    var cell = _ptdDimCellIt.item;
    if (isCoordInRect(ctx.point[dimIdx], cell.rect, dimIdx) && isCoordInRect(ctx.point[otherDimIdx], cell.rect, otherDimIdx)) {
      // non-leaves are also allowed to be located.
      // If the point is in x or y dimension cell area, should check both x and y coord to
      // determine a cell; in this way a non-leaf cell can be determined.
      partialOut[dimIdx] = cell.ordinal;
      partialOut[otherDimIdx] = cell.id[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[otherDimIdx]];
      return;
    }
  }
}
// Assume partialOut has been set to NaN outside.
// This method may fill out[0] and out[1] in one call.
function pointToDataBodyCornerFillOut(ctx, partialOut, dimIdx, dims) {
  if (ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] === CtxPointToDataAreaType.outside) {
    return;
  }
  var dim = ctx[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] === CtxPointToDataAreaType.inCorner ? dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[1 - dimIdx]] : dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
  for (dim.resetLayoutIterator(_ptdLevelIt, dimIdx); _ptdLevelIt.next();) {
    if (isCoordInLayoutInfo(ctx.point[dimIdx], _ptdLevelIt.item)) {
      partialOut[dimIdx] = _ptdLevelIt.item.id[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]];
      return;
    }
  }
}
function isCoordInLayoutInfo(coord, cell) {
  return cell.xy <= coord && coord <= cell.xy + cell.wh;
}
function isCoordInRect(coord, rect, dimIdx) {
  return rect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] <= coord && coord <= rect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.XY[dimIdx]] + rect[_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.WH[dimIdx]];
}
/* ESM default export */ __webpack_exports__["default"] = (Matrix);

}),
87134: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MatrixDimensionModel: function() { return /* binding */ MatrixModel_MatrixDimensionModel; },
  "default": function() { return /* binding */ matrix_MatrixModel; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(81757);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(40064);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(98166);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/OrdinalMeta.js
var OrdinalMeta = __webpack_require__(41862);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Ordinal.js
var Ordinal = __webpack_require__(48975);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/matrixCoordHelper.js
var matrixCoordHelper = __webpack_require__(9466);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixDim.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Lifetime: the same with `MatrixModel`, but different from `coord/Matrix`.
 */
var MatrixDim_MatrixDim = /** @class */function () {
  function MatrixDim(dim, dimModel) {
    // Under the current definition, every leave corresponds a unit cell,
    // and leaves can serve as the locator of cells.
    // Therefore make sure:
    //  - The first `_leavesCount` elements in `_cells` are leaves.
    //  - `_cells[leaf.id[XY[this.dimIdx]]]` is the leaf itself.
    //  - Leaves of each subtree are placed together, that is, the leaves of a dimCell are:
    //    `this._cells.slice(dimCell.firstLeafLocator, dimCell.span[XY[this.dimIdx]])`
    this._cells = [];
    // Can be visited by `_levels[cell.level]` or `_levels[cell.id[1 - dimIdx] + _levels.length]`.
    // Items are never be null/undefined after initialized.
    this._levels = [];
    this.dim = dim;
    this.dimIdx = dim === 'x' ? 0 : 1;
    this._model = dimModel;
    this._uniqueValueGen = createUniqueValueGenerator(dim);
    var dimModelData = dimModel.get('data', true);
    if (dimModelData != null && !(0,util.isArray)(dimModelData)) {
      if (false) {}
      dimModelData = [];
    }
    if (dimModelData) {
      this._initByDimModelData(dimModelData);
    } else {
      this._initBySeriesData();
    }
  }
  MatrixDim.prototype._initByDimModelData = function (dimModelData) {
    var self = this;
    var _cells = self._cells;
    var _levels = self._levels;
    var sameLocatorCellsLists = []; // Save for sorting.
    var _cellCount = 0;
    self._leavesCount = traverseInitCells(dimModelData, 0, 0);
    postInitCells();
    return;
    function traverseInitCells(dimModelData, firstLeafLocator, level) {
      var totalSpan = 0;
      if (!dimModelData) {
        return totalSpan;
      }
      (0,util.each)(dimModelData, function (option, optionIdx) {
        var invalidOption = false;
        var cellOption;
        if ((0,util.isString)(option)) {
          cellOption = {
            value: option
          };
        } else if ((0,util.isObject)(option)) {
          cellOption = option;
          if (option.value != null && !(0,util.isString)(option.value)) {
            invalidOption = true;
            cellOption = {
              value: null
            };
          }
        } else {
          cellOption = {
            value: null
          };
          if (option != null) {
            invalidOption = true;
          }
        }
        if (invalidOption) {
          if (false) {}
        }
        var cell = {
          type: matrixCoordHelper.MatrixCellLayoutInfoType.nonLeaf,
          ordinal: NaN,
          level: level,
          firstLeafLocator: firstLeafLocator,
          id: new Point["default"](),
          span: (0,matrixCoordHelper.setDimXYValue)(new Point["default"](), self.dimIdx, 1, 1),
          option: cellOption,
          xy: NaN,
          wh: NaN,
          dim: self,
          rect: (0,matrixCoordHelper.createNaNRectLike)()
        };
        _cellCount++;
        (sameLocatorCellsLists[firstLeafLocator] || (sameLocatorCellsLists[firstLeafLocator] = [])).push(cell);
        if (!_levels[level]) {
          // Create a level only if at least one cell exists.
          _levels[level] = {
            type: matrixCoordHelper.MatrixCellLayoutInfoType.level,
            xy: NaN,
            wh: NaN,
            option: null,
            id: new Point["default"](),
            dim: self
          };
        }
        var childrenSpan = traverseInitCells(cellOption.children, firstLeafLocator, level + 1);
        var subSpan = Math.max(1, childrenSpan);
        cell.span[graphic.XY[self.dimIdx]] = subSpan;
        totalSpan += subSpan;
        firstLeafLocator += subSpan;
      });
      return totalSpan;
    }
    function postInitCells() {
      // Sort to make sure the leaves are at the beginning, so that
      // they can be used as the locator of body cells.
      var categories = [];
      while (_cells.length < _cellCount) {
        for (var locator = 0; locator < sameLocatorCellsLists.length; locator++) {
          var cell = sameLocatorCellsLists[locator].pop();
          if (cell) {
            cell.ordinal = categories.length;
            var val = cell.option.value;
            categories.push(val);
            _cells.push(cell);
            self._uniqueValueGen.calcDupBase(val);
          }
        }
      }
      self._uniqueValueGen.ensureValueUnique(categories, _cells);
      var ordinalMeta = self._ordinalMeta = new OrdinalMeta["default"]({
        categories: categories,
        needCollect: false,
        deduplication: false
      });
      self._scale = new Ordinal["default"]({
        ordinalMeta: ordinalMeta
      });
      for (var idx = 0; idx < self._leavesCount; idx++) {
        var leaf = self._cells[idx];
        leaf.type = matrixCoordHelper.MatrixCellLayoutInfoType.leaf;
        // Handle the tree level variation: enlarge the span of the leaves to reach the body cells.
        leaf.span[graphic.XY[1 - self.dimIdx]] = self._levels.length - leaf.level;
      }
      self._initCellsId();
      self._initLevelIdOptions();
    }
  };
  MatrixDim.prototype._initBySeriesData = function () {
    var self = this;
    self._leavesCount = 0;
    self._levels = [{
      type: matrixCoordHelper.MatrixCellLayoutInfoType.level,
      xy: NaN,
      wh: NaN,
      option: null,
      id: new Point["default"](),
      dim: self
    }];
    self._initLevelIdOptions();
    var ordinalMeta = self._ordinalMeta = new OrdinalMeta["default"]({
      needCollect: true,
      deduplication: true,
      onCollect: function (value, ordinalNumber) {
        var cell = self._cells[ordinalNumber] = {
          type: matrixCoordHelper.MatrixCellLayoutInfoType.leaf,
          ordinal: ordinalNumber,
          level: 0,
          firstLeafLocator: ordinalNumber,
          id: new Point["default"](),
          span: (0,matrixCoordHelper.setDimXYValue)(new Point["default"](), self.dimIdx, 1, 1),
          // Theoretically `value` is from `dataset` or `series.data`, so it may be any type.
          // Do not restrict this case for user's convenience, and here simply convert it to
          // string for display.
          option: {
            value: value + ''
          },
          xy: NaN,
          wh: NaN,
          dim: self,
          rect: (0,matrixCoordHelper.createNaNRectLike)()
        };
        self._leavesCount++;
        self._setCellId(cell);
      }
    });
    self._scale = new Ordinal["default"]({
      ordinalMeta: ordinalMeta
    });
  };
  MatrixDim.prototype._setCellId = function (cell) {
    var levelsLen = this._levels.length;
    var dimIdx = this.dimIdx;
    (0,matrixCoordHelper.setDimXYValue)(cell.id, dimIdx, cell.firstLeafLocator, cell.level - levelsLen);
  };
  MatrixDim.prototype._initCellsId = function () {
    var levelsLen = this._levels.length;
    var dimIdx = this.dimIdx;
    (0,util.each)(this._cells, function (cell) {
      (0,matrixCoordHelper.setDimXYValue)(cell.id, dimIdx, cell.firstLeafLocator, cell.level - levelsLen);
    });
  };
  MatrixDim.prototype._initLevelIdOptions = function () {
    var levelsLen = this._levels.length;
    var dimIdx = this.dimIdx;
    var levelOptionList = this._model.get('levels', true);
    levelOptionList = (0,util.isArray)(levelOptionList) ? levelOptionList : [];
    (0,util.each)(this._levels, function (levelCfg, level) {
      (0,matrixCoordHelper.setDimXYValue)(levelCfg.id, dimIdx, 0, level - levelsLen);
      levelCfg.option = levelOptionList[level];
    });
  };
  MatrixDim.prototype.shouldShow = function () {
    return !!this._model.getShallow('show', true);
  };
  /**
   * Iterate leaves (they are layout units) if dimIdx === this.dimIdx.
   * Iterate levels if dimIdx !== this.dimIdx.
   */
  MatrixDim.prototype.resetLayoutIterator = function (it, dimIdx, startLocator, count) {
    it = it || new model.ListIterator();
    if (dimIdx === this.dimIdx) {
      var len = this._leavesCount;
      var startIdx = startLocator != null ? Math.max(0, startLocator) : 0;
      count = count != null ? Math.min(count, len) : len;
      it.reset(this._cells, startIdx, startIdx + count);
    } else {
      var len = this._levels.length;
      // Corner locator is from `-this._levels.length` to `-1`.
      var startIdx = startLocator != null ? Math.max(0, startLocator + len) : 0;
      count = count != null ? Math.min(count, len) : len;
      it.reset(this._levels, startIdx, startIdx + count);
    }
    return it;
  };
  MatrixDim.prototype.resetCellIterator = function (it) {
    return (it || new model.ListIterator()).reset(this._cells, 0);
  };
  MatrixDim.prototype.resetLevelIterator = function (it) {
    return (it || new model.ListIterator()).reset(this._levels, 0);
  };
  MatrixDim.prototype.getLayout = function (outRect, dimIdx, locator) {
    var layout = this.getUnitLayoutInfo(dimIdx, locator);
    outRect[graphic.XY[dimIdx]] = layout ? layout.xy : NaN;
    outRect[graphic.WH[dimIdx]] = layout ? layout.wh : NaN;
  };
  /**
   * Get leaf cell or get level info.
   * Should be able to return null/undefined if not found on x or y, thus input `dimIdx` is needed.
   */
  MatrixDim.prototype.getUnitLayoutInfo = function (dimIdx, locator) {
    return dimIdx === this.dimIdx ? locator < this._leavesCount ? this._cells[locator] : undefined : this._levels[locator + this._levels.length];
  };
  /**
   * Get dimension cell by data, including leaves and non-leaves.
   */
  MatrixDim.prototype.getCell = function (value) {
    var ordinal = this._scale.parse(value);
    return (0,util.eqNaN)(ordinal) ? undefined : this._cells[ordinal];
  };
  /**
   * Get leaf count or get level count.
   */
  MatrixDim.prototype.getLocatorCount = function (dimIdx) {
    return dimIdx === this.dimIdx ? this._leavesCount : this._levels.length;
  };
  MatrixDim.prototype.getOrdinalMeta = function () {
    return this._ordinalMeta;
  };
  return MatrixDim;
}();

function createUniqueValueGenerator(dim) {
  var dimUpper = dim.toUpperCase();
  var defaultValReg = new RegExp("^" + dimUpper + "([0-9]+)$");
  var dupBase = 0;
  function calcDupBase(val) {
    var matchResult;
    if (val != null && (matchResult = val.match(defaultValReg))) {
      dupBase = (0,number.mathMax)(dupBase, +matchResult[1] + 1);
    }
  }
  function makeUniqueValue() {
    return "" + dimUpper + dupBase++;
  }
  // Duplicated value is allowed, because the `matrix.x/y.data` can be a tree and it's reasonable
  // that leaves in different subtrees has the same text. But only the first one is allowed to be
  // queried by the text, and the other ones can only be queried by index.
  // Additionally, `matrix.x/y.data: [null, null, ...]` is allowed.
  function ensureValueUnique(categories, cells) {
    // A simple way to deduplicate or handle illegal or not specified values to avoid unexpected behaviors.
    // The tree structure should not be broken even if duplicated.
    var cateMap = (0,util.createHashMap)();
    for (var idx = 0; idx < categories.length; idx++) {
      var value = categories[idx];
      // value may be set to NullUndefined by users or if illegal.
      if (value == null || cateMap.get(value) != null) {
        // Still display the original option.value if duplicated, but loose the ability to query by text.
        categories[idx] = value = makeUniqueValue();
        cells[idx].option = (0,util.defaults)({
          value: value
        }, cells[idx].option);
      }
      cateMap.set(value, true);
    }
  }
  return {
    calcDupBase: calcDupBase,
    ensureValueUnique: ensureValueUnique
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixBodyCorner.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Lifetime: the same with `MatrixModel`, but different from `coord/Matrix`.
 */
var MatrixBodyCorner_MatrixBodyCorner = /** @class */function () {
  function MatrixBodyCorner(kind, bodyOrCornerModel, dims) {
    this._model = bodyOrCornerModel;
    this._dims = dims;
    this._kind = kind;
    this._cellMergeOwnerList = [];
  }
  /**
   * Can not be called before series models initialization finished, since the ordinalMeta may
   * use collect the values from `series.data` in series initialization.
   */
  MatrixBodyCorner.prototype._ensureCellMap = function () {
    var self = this;
    var _cellMap = self._cellMap;
    if (!_cellMap) {
      _cellMap = self._cellMap = (0,util.createHashMap)();
      fillCellMap();
    }
    return _cellMap;
    function fillCellMap() {
      var parsedList = [];
      var cellOptionList = self._model.getShallow('data');
      if (cellOptionList && !(0,util.isArray)(cellOptionList)) {
        if (false) {}
        cellOptionList = null;
      }
      (0,util.each)(cellOptionList, function (option, idx) {
        if (!(0,util.isObject)(option) || !(0,util.isArray)(option.coord)) {
          if (false) {}
          return;
        }
        var locatorRange = (0,matrixCoordHelper.resetXYLocatorRange)([]);
        var reasonArr = null;
        if (false) {}
        (0,matrixCoordHelper.parseCoordRangeOption)(locatorRange, reasonArr, option.coord, self._dims, option.coordClamp ? matrixCoordHelper.MatrixClampOption[self._kind] : matrixCoordHelper.MatrixClampOption.none);
        if ((0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 0) || (0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 1)) {
          if (false) {}
          return;
        }
        var cellMergeOwner = option && option.mergeCells;
        var parsed = {
          id: new Point["default"](),
          span: new Point["default"](),
          locatorRange: locatorRange,
          option: option,
          cellMergeOwner: cellMergeOwner
        };
        (0,matrixCoordHelper.fillIdSpanFromLocatorRange)(parsed, locatorRange);
        // The order of the `parsedList` determines the precedence of the styles, if there
        // are overlaps between ranges specified in different items. Preserve the original
        // order of `matrix.body/corner/data` to make it predictable for users.
        parsedList.push(parsed);
      });
      // Resolve cell merging intersection - union to a larger rect.
      var mergedMarkList = [];
      for (var parsedIdx = 0; parsedIdx < parsedList.length; parsedIdx++) {
        var parsed = parsedList[parsedIdx];
        if (!parsed.cellMergeOwner) {
          continue;
        }
        var locatorRange = parsed.locatorRange;
        (0,matrixCoordHelper.resolveXYLocatorRangeByCellMerge)(locatorRange, mergedMarkList, parsedList, parsedIdx);
        for (var idx = 0; idx < parsedIdx; idx++) {
          if (mergedMarkList[idx]) {
            parsedList[idx].cellMergeOwner = false;
          }
        }
        if (locatorRange[0][0] !== parsed.id.x || locatorRange[1][0] !== parsed.id.y) {
          // The top-left cell of the unioned locatorRange is not this cell any more.
          parsed.cellMergeOwner = false;
          // Reconcile: simply use the last style and value option if multiple styles involved
          // in a merged area, since there might be no commonly used merge strategy.
          var newOption = (0,util.extend)({}, parsed.option);
          newOption.coord = null;
          var newParsed = {
            id: new Point["default"](),
            span: new Point["default"](),
            locatorRange: locatorRange,
            option: newOption,
            cellMergeOwner: true
          };
          (0,matrixCoordHelper.fillIdSpanFromLocatorRange)(newParsed, locatorRange);
          parsedList.push(newParsed);
        }
      }
      // Assign options to cells.
      (0,util.each)(parsedList, function (parsed) {
        var topLeftCell = ensureBodyOrCornerCell(parsed.id.x, parsed.id.y);
        if (parsed.cellMergeOwner) {
          topLeftCell.cellMergeOwner = true;
          topLeftCell.span = parsed.span;
          topLeftCell.locatorRange = parsed.locatorRange;
          topLeftCell.spanRect = (0,matrixCoordHelper.createNaNRectLike)();
          self._cellMergeOwnerList.push(topLeftCell);
        }
        if (!parsed.cellMergeOwner && !parsed.option) {
          return;
        }
        for (var yidx = 0; yidx < parsed.span.y; yidx++) {
          for (var xidx = 0; xidx < parsed.span.x; xidx++) {
            var cell = ensureBodyOrCornerCell(parsed.id.x + xidx, parsed.id.y + yidx);
            // If multiple style options are defined on a cell, the later ones takes precedence.
            cell.option = parsed.option;
            if (parsed.cellMergeOwner) {
              cell.inSpanOf = topLeftCell;
            }
          }
        }
      });
    } // End of fillCellMap
    function ensureBodyOrCornerCell(x, y) {
      var key = makeCellMapKey(x, y);
      var cell = _cellMap.get(key);
      if (!cell) {
        cell = _cellMap.set(key, {
          id: new Point["default"](x, y),
          option: null,
          inSpanOf: null,
          span: null,
          spanRect: null,
          locatorRange: null,
          cellMergeOwner: false
        });
      }
      return cell;
    }
  };
  /**
   * Body cells or corner cell are not commonly defined specifically, especially in a large
   * table, thus his is a sparse data structure - bodys or corner cells exist only if there
   * are options specified to it (in `matrix.body.data` or `matrix.corner.data`);
   * otherwise, return `NullUndefined`.
   */
  MatrixBodyCorner.prototype.getCell = function (xy) {
    // Assert xy do not contain NaN
    return this._ensureCellMap().get(makeCellMapKey(xy[0], xy[1]));
  };
  /**
   * Only cell existing (has specific definition or props) will be travelled.
   */
  MatrixBodyCorner.prototype.travelExistingCells = function (cb) {
    this._ensureCellMap().each(cb);
  };
  /**
   * @param locatorRange Must be the return of `parseCoordRangeOption`.
   */
  MatrixBodyCorner.prototype.expandRangeByCellMerge = function (locatorRange) {
    if (!(0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 0) && !(0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 1) && locatorRange[0][0] === locatorRange[0][1] && locatorRange[1][0] === locatorRange[1][1]) {
      // If it locates to a single cell, use this quick path to avoid travelling.
      // It is based on the fact that any cell is not contained by more than one cell merging rect.
      _tmpERBCMLocator[0] = locatorRange[0][0];
      _tmpERBCMLocator[1] = locatorRange[1][0];
      var cell = this.getCell(_tmpERBCMLocator);
      var inSpanOf = cell && cell.inSpanOf;
      if (inSpanOf) {
        (0,matrixCoordHelper.cloneXYLocatorRange)(locatorRange, inSpanOf.locatorRange);
        return;
      }
    }
    var list = this._cellMergeOwnerList;
    (0,matrixCoordHelper.resolveXYLocatorRangeByCellMerge)(locatorRange, null, list, list.length);
  };
  return MatrixBodyCorner;
}();

var _tmpERBCMLocator = [];
function makeCellMapKey(x, y) {
  return x + "|" + y;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(23430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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






var defaultLabelOption = {
  show: true,
  color: tokens["default"].color.secondary,
  // overflow: 'truncate',
  overflow: 'break',
  lineOverflow: 'truncate',
  padding: [2, 3, 2, 3],
  // Prefer to use `padding`, rather than distance.
  distance: 0
};
function makeDefaultCellItemStyleOption(isCorner) {
  return {
    color: 'none',
    borderWidth: 1,
    borderColor: isCorner ? 'none' : tokens["default"].color.borderTint
  };
}
;
var defaultDimOption = {
  show: true,
  label: defaultLabelOption,
  itemStyle: makeDefaultCellItemStyleOption(false),
  silent: undefined,
  dividerLineStyle: {
    width: 1,
    color: tokens["default"].color.border
  }
};
var defaultBodyOption = {
  label: defaultLabelOption,
  itemStyle: makeDefaultCellItemStyleOption(false),
  silent: undefined
};
var defaultCornerOption = {
  label: defaultLabelOption,
  itemStyle: makeDefaultCellItemStyleOption(true),
  silent: undefined
};
var defaultMatrixOption = {
  // As a most basic coord sys, `z` should be lower than
  // other series and coord sys, such as, grid.
  z: -50,
  left: '10%',
  top: '10%',
  right: '10%',
  bottom: '10%',
  x: defaultDimOption,
  y: defaultDimOption,
  body: defaultBodyOption,
  corner: defaultCornerOption,
  backgroundStyle: {
    color: 'none',
    borderColor: tokens["default"].color.axisLine,
    borderWidth: 1
  }
};
var MatrixModel_MatrixModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MatrixModel, _super);
  function MatrixModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MatrixModel.type;
    return _this;
  }
  MatrixModel.prototype.optionUpdated = function () {
    // Simply re-create all to follow model changes.
    var dimModels = this._dimModels = {
      // Do not use matrixModel as the parent model, for preventing from cascade-fetching options to it.
      x: new MatrixModel_MatrixDimensionModel(this.get('x', true) || {}),
      y: new MatrixModel_MatrixDimensionModel(this.get('y', true) || {})
    };
    dimModels.x.option.type = dimModels.y.option.type = 'category';
    var xDim = dimModels.x.dim = new MatrixDim_MatrixDim('x', dimModels.x);
    var yDim = dimModels.y.dim = new MatrixDim_MatrixDim('y', dimModels.y);
    var dims = {
      x: xDim,
      y: yDim
    };
    this._body = new MatrixBodyCorner_MatrixBodyCorner('body', new Model["default"](this.getShallow('body')), dims);
    this._corner = new MatrixBodyCorner_MatrixBodyCorner('corner', new Model["default"](this.getShallow('corner')), dims);
  };
  MatrixModel.prototype.getDimensionModel = function (dim) {
    return this._dimModels[dim];
  };
  MatrixModel.prototype.getBody = function () {
    return this._body;
  };
  MatrixModel.prototype.getCorner = function () {
    return this._corner;
  };
  MatrixModel.type = 'matrix';
  MatrixModel.layoutMode = 'box';
  MatrixModel.defaultOption = defaultMatrixOption;
  return MatrixModel;
}(Component["default"]);
var MatrixModel_MatrixDimensionModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MatrixDimensionModel, _super);
  function MatrixDimensionModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MatrixDimensionModel.prototype.getOrdinalMeta = function () {
    return this.dim.getOrdinalMeta();
  };
  return MatrixDimensionModel;
}(Model["default"]);

/* ESM default export */ var matrix_MatrixModel = (MatrixModel_MatrixModel);

}),
9466: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MatrixCellLayoutInfoType: function() { return MatrixCellLayoutInfoType; },
  MatrixClampOption: function() { return MatrixClampOption; },
  cloneXYLocatorRange: function() { return cloneXYLocatorRange; },
  coordDataToAllCellLevelLayout: function() { return coordDataToAllCellLevelLayout; },
  createNaNRectLike: function() { return createNaNRectLike; },
  fillIdSpanFromLocatorRange: function() { return fillIdSpanFromLocatorRange; },
  isXYLocatorRangeInvalidOnDim: function() { return isXYLocatorRangeInvalidOnDim; },
  parseCoordRangeOption: function() { return parseCoordRangeOption; },
  resetXYLocatorRange: function() { return resetXYLocatorRange; },
  resolveXYLocatorRangeByCellMerge: function() { return resolveXYLocatorRangeByCellMerge; },
  setDimXYValue: function() { return setDimXYValue; },
  xyLocatorRangeToRectOneDim: function() { return xyLocatorRangeToRectOneDim; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42562);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48843);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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



var MatrixCellLayoutInfoType = {
  level: 1,
  leaf: 2,
  nonLeaf: 3
};
/**
 * @public Public to users in `chart.convertFromPixel`.
 */
var MatrixClampOption = {
  // No clamp, be falsy, equals to null/undefined. It means if the input part is
  // null/undefined/NaN/outOfBoundary, the result part is NaN, rather than clamp to
  // the boundary of the matrix.
  none: 0,
  // Clamp, where null/undefined/NaN/outOfBoundary can be used to cover the entire row/column.
  all: 1,
  body: 2,
  corner: 3
};
/**
 * For the x direction,
 *  - find dimension cell from `xMatrixDim`,
 *      - If `xDimCell` or `yDimCell` is not a leaf, return the non-leaf cell itself.
 *  - otherwise find level from `yMatrixDim`.
 *  - otherwise return `NullUndefined`.
 *
 * For the y direction, it's the opposite.
 */
function coordDataToAllCellLevelLayout(coordValue, dims, thisDimIdx // 0 | 1
) {
  // Find in body.
  var result = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[thisDimIdx]].getCell(coordValue);
  // Find in corner or dimension area.
  if (!result && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(coordValue) && coordValue < 0) {
    result = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[1 - thisDimIdx]].getUnitLayoutInfo(thisDimIdx, Math.round(coordValue));
  }
  return result;
}
function resetXYLocatorRange(out) {
  var rg = out || [];
  rg[0] = rg[0] || [];
  rg[1] = rg[1] || [];
  rg[0][0] = rg[0][1] = rg[1][0] = rg[1][1] = NaN;
  return rg;
}
/**
 * If illegal or out of boundary, set NaN to `locOut`. See `isXYLocatorRangeInvalidOnDim`.
 * x dimension and y dimension are calculated separately.
 */
function parseCoordRangeOption(locOut,
// If illegal input or can not find any target, save reason to it.
// Do nothing if `NullUndefined`.
reasonOut, data, dims, clamp) {
  // x and y are supported to be handled separately - if one dimension is invalid
  // (may be users do not need that), the other one should also be calculated.
  parseCoordRangeOptionOnOneDim(locOut[0], reasonOut, clamp, data, dims, 0);
  parseCoordRangeOptionOnOneDim(locOut[1], reasonOut, clamp, data, dims, 1);
}
function parseCoordRangeOptionOnOneDim(locDimOut, reasonOut, clamp, data, dims, dimIdx) {
  locDimOut[0] = Infinity;
  locDimOut[1] = -Infinity;
  var dataOnDim = data[dimIdx];
  var coordValArr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(dataOnDim) ? dataOnDim : [dataOnDim];
  var len = coordValArr.length;
  var hasClamp = !!clamp;
  if (len >= 1) {
    parseCoordRangeOptionOnOneDimOnePart(locDimOut, reasonOut, coordValArr, hasClamp, dims, dimIdx, 0);
    if (len > 1) {
      // Users may intuitively input the coords like `[[x1, x2, x3], ...]`;
      // consider the range as `[x1, x3]` in this case.
      parseCoordRangeOptionOnOneDimOnePart(locDimOut, reasonOut, coordValArr, hasClamp, dims, dimIdx, len - 1);
    }
  } else {
    if (false) {}
    locDimOut[0] = locDimOut[1] = NaN;
  }
  if (hasClamp) {
    // null/undefined/NaN or illegal data represents the entire row/column;
    // Cover the entire locator regardless of body or corner, and confine it later.
    var locLowerBound = -dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[1 - dimIdx]].getLocatorCount(dimIdx);
    var locUpperBound = dims[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[dimIdx]].getLocatorCount(dimIdx) - 1;
    if (clamp === MatrixClampOption.body) {
      locLowerBound = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMax)(0, locLowerBound);
    } else if (clamp === MatrixClampOption.corner) {
      locUpperBound = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMin)(-1, locUpperBound);
    }
    if (locUpperBound < locLowerBound) {
      // Also considered that both x and y has no cell.
      locLowerBound = locUpperBound = NaN;
    }
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.eqNaN)(locDimOut[0])) {
      locDimOut[0] = locLowerBound;
    }
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.eqNaN)(locDimOut[1])) {
      locDimOut[1] = locUpperBound;
    }
    locDimOut[0] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMax)((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMin)(locDimOut[0], locUpperBound), locLowerBound);
    locDimOut[1] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMax)((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMin)(locDimOut[1], locUpperBound), locLowerBound);
  }
}
// The return val must be finite or NaN.
function parseCoordRangeOptionOnOneDimOnePart(locDimOut, reasonOut, coordValArr, hasClamp, dims, dimIdx, partIdx) {
  var layout = coordDataToAllCellLevelLayout(coordValArr[partIdx], dims, dimIdx);
  if (!layout) {
    if (false) {}
    locDimOut[0] = locDimOut[1] = NaN;
    return;
  }
  var locatorA = layout.id[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[dimIdx]];
  var locatorB = locatorA;
  var dimCell = cellLayoutInfoToDimCell(layout);
  if (dimCell) {
    // Handle non-leaf
    locatorB += dimCell.span[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[dimIdx]] - 1;
  }
  locDimOut[0] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMin)(locDimOut[0], locatorA, locatorB);
  locDimOut[1] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMax)(locDimOut[1], locatorA, locatorB);
}
/**
 * @param locatorRange Must be the return of `parseCoordRangeOption`,
 *  where if not NaN, it must be a valid locator.
 */
function isXYLocatorRangeInvalidOnDim(locatorRange, dimIdx) {
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.eqNaN)(locatorRange[dimIdx][0]) || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.eqNaN)(locatorRange[dimIdx][1]);
}
// `locatorRange` will be expanded (modified) if an intersection is encountered.
function resolveXYLocatorRangeByCellMerge(inOutLocatorRange,
// Item indices coorespond to mergeDefList (len: mergeDefListTravelLen).
// Indicating whether each item has be merged into the `locatorRange`
outMergedMarkList, mergeDefList, mergeDefListTravelLen) {
  outMergedMarkList = outMergedMarkList || _tmpOutMergedMarkList;
  for (var idx = 0; idx < mergeDefListTravelLen; idx++) {
    outMergedMarkList[idx] = false;
  }
  // In most case, cell merging definition list length is smaller than the range extent,
  // therefore, to detection intersection, travelling cell merging definition list is probably
  // performant than traveling the four edges of the rect formed by the locator range.
  while (true) {
    var expanded = false;
    for (var idx = 0; idx < mergeDefListTravelLen; idx++) {
      var mergeDef = mergeDefList[idx];
      if (!outMergedMarkList[idx] && mergeDef.cellMergeOwner && expandXYLocatorRangeIfIntersect(inOutLocatorRange, mergeDef.locatorRange)) {
        outMergedMarkList[idx] = true;
        expanded = true;
      }
    }
    if (!expanded) {
      break;
    }
  }
}
var _tmpOutMergedMarkList = [];
// Return whether intersect.
// `thisLocRange` will be expanded (modified) if an intersection is encountered.
function expandXYLocatorRangeIfIntersect(thisLocRange, otherLocRange) {
  if (!locatorRangeIntersectOneDim(thisLocRange[0], otherLocRange[0]) || !locatorRangeIntersectOneDim(thisLocRange[1], otherLocRange[1])) {
    return false;
  }
  thisLocRange[0][0] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMin)(thisLocRange[0][0], otherLocRange[0][0]);
  thisLocRange[0][1] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMax)(thisLocRange[0][1], otherLocRange[0][1]);
  thisLocRange[1][0] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMin)(thisLocRange[1][0], otherLocRange[1][0]);
  thisLocRange[1][1] = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.mathMax)(thisLocRange[1][1], otherLocRange[1][1]);
  return true;
}
// Notice: If containing NaN, not intersect.
function locatorRangeIntersectOneDim(locRange1OneDim, locRange2OneDim) {
  return locRange1OneDim[1] >= locRange2OneDim[0] && locRange1OneDim[0] <= locRange2OneDim[1];
}
function fillIdSpanFromLocatorRange(owner, locatorRange) {
  owner.id.set(locatorRange[0][0], locatorRange[1][0]);
  owner.span.set(locatorRange[0][1] - owner.id.x + 1, locatorRange[1][1] - owner.id.y + 1);
}
function cloneXYLocatorRange(target, source) {
  target[0][0] = source[0][0];
  target[0][1] = source[0][1];
  target[1][0] = source[1][0];
  target[1][1] = source[1][1];
}
/**
 * If illegal, the corresponding x/y/width/height is set to `NaN`.
 * `x/width` or `y/height` is supported to be calculated separately,
 * i.e., one side are NaN, the other side are normal.
 * @param oneDimOut only write to `x/width` or `y/height`, depending on `dimIdx`.
 */
function xyLocatorRangeToRectOneDim(oneDimOut, locRange, dims, dimIdx) {
  var layoutMin = coordDataToAllCellLevelLayout(locRange[dimIdx][0], dims, dimIdx);
  var layoutMax = coordDataToAllCellLevelLayout(locRange[dimIdx][1], dims, dimIdx);
  oneDimOut[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[dimIdx]] = oneDimOut[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.WH[dimIdx]] = NaN;
  if (layoutMin && layoutMax) {
    oneDimOut[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[dimIdx]] = layoutMin.xy;
    oneDimOut[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.WH[dimIdx]] = layoutMax.xy + layoutMax.wh - layoutMin.xy;
  }
}
// No need currently, since `span` is not allowed to be defined directly by users.
// /**
//  * If either span x or y is valid and > 1, return parsed span, otherwise return `NullUndefined`.
//  */
// export function parseSpanOption(
//     spanOptionHost: MatrixCellSpanOptionHost,
//     dimCellPair: MatrixCellLayoutInfo[]
// ): Point | NullUndefined {
//     const spanX = parseSpanOnDim(spanOptionHost.spanX, dimCellPair[0], 0);
//     const spanY = parseSpanOnDim(spanOptionHost.spanY, dimCellPair[1], 1);
//     if (!eqNaN(spanX) || !eqNaN(spanY)) {
//         return new Point(spanX || 1, spanY || 1);
//     }
//     function parseSpanOnDim(spanOption: unknown, dimCell: MatrixCellLayoutInfo, dimIdx: number): number {
//         if (!isNumber(spanOption)) {
//             return NaN;
//         }
//         // Ensure positive integer (not NaN) to avoid dead loop.
//         const span = mathMax(1, Math.round(spanOption || 1)) || 1;
//         // Clamp, and consider may also be specified as `Infinity` to span the entire col/row.
//         return mathMin(span, mathMax(1, dimCell.dim.getLocatorCount(dimIdx) - dimCell.id[XY[dimIdx]]));
//     }
// }
/**
 * @usage To get/set on dimension, use:
 *  `xyVal[XY[dim]] = val;` // set on this dimension.
 *  `xyVal[XY[1 - dim]] = val;` // set on the perpendicular dimension.
 */
function setDimXYValue(out, dimIdx,
// 0 | 1
valueOnThisDim, valueOnOtherDim) {
  out[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[dimIdx]] = valueOnThisDim;
  out[_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.XY[1 - dimIdx]] = valueOnOtherDim;
  return out;
}
/**
 * Return NullUndefined if not dimension cell.
 */
function cellLayoutInfoToDimCell(cellLayoutInfo) {
  return cellLayoutInfo && (cellLayoutInfo.type === MatrixCellLayoutInfoType.leaf || cellLayoutInfo.type === MatrixCellLayoutInfoType.nonLeaf) ? cellLayoutInfo : null;
}
function createNaNRectLike() {
  return {
    x: NaN,
    y: NaN,
    width: NaN,
    height: NaN
  };
}

}),
47803: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return matrixPrepareCustom; }
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
function matrixPrepareCustom(coordSys) {
  var rect = coordSys.getRect();
  return {
    coordSys: {
      type: 'matrix',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    api: {
      coord: function (data, opt) {
        return coordSys.dataToPoint(data, opt);
      },
      layout: function (data, opt) {
        return coordSys.dataToLayout(data, opt);
      }
    }
  };
}

}),
56921: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26062);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48843);
/* ESM import */var _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14373);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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






var ParallelAxisModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ParallelAxisModel, _super);
  function ParallelAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelAxisModel.type;
    /**
     * @readOnly
     */
    _this.activeIntervals = [];
    return _this;
  }
  ParallelAxisModel.prototype.getAreaSelectStyle = function () {
    return (0,_model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_2__["default"])([['fill', 'color'], ['lineWidth', 'borderWidth'], ['stroke', 'borderColor'], ['width', 'width'], ['opacity', 'opacity']
    // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
    // So do not transfer decal directly.
    ])(this.getModel('areaSelectStyle'));
  };
  /**
   * The code of this feature is put on AxisModel but not ParallelAxis,
   * because axisModel can be alive after echarts updating but instance of
   * ParallelAxis having been disposed. this._activeInterval should be kept
   * when action dispatched (i.e. legend click).
   *
   * @param intervals `interval.length === 0` means set all active.
   */
  ParallelAxisModel.prototype.setActiveIntervals = function (intervals) {
    var activeIntervals = this.activeIntervals = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone(intervals);
    // Normalize
    if (activeIntervals) {
      for (var i = activeIntervals.length - 1; i >= 0; i--) {
        _util_number_js__WEBPACK_IMPORTED_MODULE_4__.asc(activeIntervals[i]);
      }
    }
  };
  /**
   * @param value When only attempting detect whether 'no activeIntervals set',
   *        `value` is not needed to be input.
   */
  ParallelAxisModel.prototype.getActiveState = function (value) {
    var activeIntervals = this.activeIntervals;
    if (!activeIntervals.length) {
      return 'normal';
    }
    if (value == null || isNaN(+value)) {
      return 'inactive';
    }
    // Simple optimization
    if (activeIntervals.length === 1) {
      var interval = activeIntervals[0];
      if (interval[0] <= value && value <= interval[1]) {
        return 'active';
      }
    } else {
      for (var i = 0, len = activeIntervals.length; i < len; i++) {
        if (activeIntervals[i][0] <= value && value <= activeIntervals[i][1]) {
          return 'active';
        }
      }
    }
    return 'inactive';
  };
  return ParallelAxisModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.mixin(ParallelAxisModel, _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_5__.AxisModelCommonMixin);
/* ESM default export */ __webpack_exports__["default"] = (ParallelAxisModel);

}),
97275: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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



var ParallelModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ParallelModel, _super);
  function ParallelModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelModel.type;
    return _this;
  }
  ParallelModel.prototype.init = function () {
    _super.prototype.init.apply(this, arguments);
    this.mergeOption({});
  };
  ParallelModel.prototype.mergeOption = function (newOption) {
    var thisOption = this.option;
    newOption && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.merge(thisOption, newOption, true);
    this._initDimensions();
  };
  /**
   * Whether series or axis is in this coordinate system.
   */
  ParallelModel.prototype.contains = function (model, ecModel) {
    var parallelIndex = model.get('parallelIndex');
    return parallelIndex != null && ecModel.getComponent('parallel', parallelIndex) === this;
  };
  ParallelModel.prototype.setAxisExpand = function (opt) {
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(['axisExpandable', 'axisExpandCenter', 'axisExpandCount', 'axisExpandWidth', 'axisExpandWindow'], function (name) {
      if (opt.hasOwnProperty(name)) {
        // @ts-ignore FIXME: why "never" inferred in this.option[name]?
        this.option[name] = opt[name];
      }
    }, this);
  };
  ParallelModel.prototype._initDimensions = function () {
    var dimensions = this.dimensions = [];
    var parallelAxisIndex = this.parallelAxisIndex = [];
    var axisModels = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.filter(this.ecModel.queryComponents({
      mainType: 'parallelAxis'
    }), function (axisModel) {
      // Can not use this.contains here, because
      // initialization has not been completed yet.
      return (axisModel.get('parallelIndex') || 0) === this.componentIndex;
    }, this);
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(axisModels, function (axisModel) {
      dimensions.push('dim' + axisModel.get('dim'));
      parallelAxisIndex.push(axisModel.componentIndex);
    });
  };
  ParallelModel.type = 'parallel';
  ParallelModel.dependencies = ['parallelAxis'];
  ParallelModel.layoutMode = 'box';
  ParallelModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    left: 80,
    top: 60,
    right: 80,
    bottom: 60,
    // width: {totalWidth} - left - right,
    // height: {totalHeight} - top - bottom,
    layout: 'horizontal',
    // FIXME
    // naming?
    axisExpandable: false,
    axisExpandCenter: null,
    axisExpandCount: 0,
    axisExpandWidth: 50,
    axisExpandRate: 17,
    axisExpandDebounce: 50,
    // [out, in, jumpTarget]. In percentage. If use [null, 0.05], null means full.
    // Do not doc to user until necessary.
    axisExpandSlideTriggerArea: [-0.15, 0.05, 0.4],
    axisExpandTriggerOn: 'click',
    parallelAxisDefault: null
  };
  return ParallelModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (ParallelModel);

}),
28990: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ parallelCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(24694);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(5527);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(59562);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/ParallelAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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


var ParallelAxis_ParallelAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ParallelAxis, _super);
  function ParallelAxis(dim, scale, coordExtent, axisType, axisIndex) {
    var _this = _super.call(this, dim, scale, coordExtent) || this;
    _this.type = axisType || 'value';
    _this.axisIndex = axisIndex;
    return _this;
  }
  ParallelAxis.prototype.isHorizontal = function () {
    return this.coordinateSystem.getModel().get('layout') !== 'horizontal';
  };
  return ParallelAxis;
}(Axis["default"]);
/* ESM default export */ var parallel_ParallelAxis = (ParallelAxis_ParallelAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(17549);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/Parallel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Parallel Coordinates
 * <https://en.wikipedia.org/wiki/Parallel_coordinates>
 */








var each = util.each;
var mathMin = Math.min;
var mathMax = Math.max;
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var round = number.round;
var PI = Math.PI;
var Parallel_Parallel = /** @class */function () {
  function Parallel(parallelModel, ecModel, api) {
    this.type = 'parallel';
    /**
     * key: dimension
     */
    this._axesMap = util.createHashMap();
    /**
     * key: dimension
     * value: {position: [], rotation, }
     */
    this._axesLayout = {};
    this.dimensions = parallelModel.dimensions;
    this._model = parallelModel;
    this._init(parallelModel, ecModel, api);
  }
  Parallel.prototype._init = function (parallelModel, ecModel, api) {
    var dimensions = parallelModel.dimensions;
    var parallelAxisIndex = parallelModel.parallelAxisIndex;
    each(dimensions, function (dim, idx) {
      var axisIndex = parallelAxisIndex[idx];
      var axisModel = ecModel.getComponent('parallelAxis', axisIndex);
      var axis = this._axesMap.set(dim, new parallel_ParallelAxis(dim, axisHelper.createScaleByModel(axisModel), [0, 0], axisModel.get('type'), axisIndex));
      var isCategory = axis.type === 'category';
      axis.onBand = isCategory && axisModel.get('boundaryGap');
      axis.inverse = axisModel.get('inverse');
      // Injection
      axisModel.axis = axis;
      axis.model = axisModel;
      axis.coordinateSystem = axisModel.coordinateSystem = this;
    }, this);
  };
  /**
   * Update axis scale after data processed
   */
  Parallel.prototype.update = function (ecModel, api) {
    this._updateAxesFromSeries(this._model, ecModel);
  };
  Parallel.prototype.containPoint = function (point) {
    var layoutInfo = this._makeLayoutInfo();
    var axisBase = layoutInfo.axisBase;
    var layoutBase = layoutInfo.layoutBase;
    var pixelDimIndex = layoutInfo.pixelDimIndex;
    var pAxis = point[1 - pixelDimIndex];
    var pLayout = point[pixelDimIndex];
    return pAxis >= axisBase && pAxis <= axisBase + layoutInfo.axisLength && pLayout >= layoutBase && pLayout <= layoutBase + layoutInfo.layoutLength;
  };
  Parallel.prototype.getModel = function () {
    return this._model;
  };
  /**
   * Update properties from series
   */
  Parallel.prototype._updateAxesFromSeries = function (parallelModel, ecModel) {
    ecModel.eachSeries(function (seriesModel) {
      if (!parallelModel.contains(seriesModel, ecModel)) {
        return;
      }
      var data = seriesModel.getData();
      each(this.dimensions, function (dim) {
        var axis = this._axesMap.get(dim);
        axis.scale.unionExtentFromData(data, data.mapDimension(dim));
        axisHelper.niceScaleExtent(axis.scale, axis.model);
      }, this);
    }, this);
  };
  /**
   * Resize the parallel coordinate system.
   */
  Parallel.prototype.resize = function (parallelModel, api) {
    var refContainer = util_layout.createBoxLayoutReference(parallelModel, api).refContainer;
    this._rect = util_layout.getLayoutRect(parallelModel.getBoxLayoutParams(), refContainer);
    this._layoutAxes();
  };
  Parallel.prototype.getRect = function () {
    return this._rect;
  };
  Parallel.prototype._makeLayoutInfo = function () {
    var parallelModel = this._model;
    var rect = this._rect;
    var xy = ['x', 'y'];
    var wh = ['width', 'height'];
    var layout = parallelModel.get('layout');
    var pixelDimIndex = layout === 'horizontal' ? 0 : 1;
    var layoutLength = rect[wh[pixelDimIndex]];
    var layoutExtent = [0, layoutLength];
    var axisCount = this.dimensions.length;
    var axisExpandWidth = restrict(parallelModel.get('axisExpandWidth'), layoutExtent);
    var axisExpandCount = restrict(parallelModel.get('axisExpandCount') || 0, [0, axisCount]);
    var axisExpandable = parallelModel.get('axisExpandable') && axisCount > 3 && axisCount > axisExpandCount && axisExpandCount > 1 && axisExpandWidth > 0 && layoutLength > 0;
    // `axisExpandWindow` is According to the coordinates of [0, axisExpandLength],
    // for sake of consider the case that axisCollapseWidth is 0 (when screen is narrow),
    // where collapsed axes should be overlapped.
    var axisExpandWindow = parallelModel.get('axisExpandWindow');
    var winSize;
    if (!axisExpandWindow) {
      winSize = restrict(axisExpandWidth * (axisExpandCount - 1), layoutExtent);
      var axisExpandCenter = parallelModel.get('axisExpandCenter') || mathFloor(axisCount / 2);
      axisExpandWindow = [axisExpandWidth * axisExpandCenter - winSize / 2];
      axisExpandWindow[1] = axisExpandWindow[0] + winSize;
    } else {
      winSize = restrict(axisExpandWindow[1] - axisExpandWindow[0], layoutExtent);
      axisExpandWindow[1] = axisExpandWindow[0] + winSize;
    }
    var axisCollapseWidth = (layoutLength - winSize) / (axisCount - axisExpandCount);
    // Avoid axisCollapseWidth is too small.
    axisCollapseWidth < 3 && (axisCollapseWidth = 0);
    // Find the first and last indices > ewin[0] and < ewin[1].
    var winInnerIndices = [mathFloor(round(axisExpandWindow[0] / axisExpandWidth, 1)) + 1, mathCeil(round(axisExpandWindow[1] / axisExpandWidth, 1)) - 1];
    // Pos in ec coordinates.
    var axisExpandWindow0Pos = axisCollapseWidth / axisExpandWidth * axisExpandWindow[0];
    return {
      layout: layout,
      pixelDimIndex: pixelDimIndex,
      layoutBase: rect[xy[pixelDimIndex]],
      layoutLength: layoutLength,
      axisBase: rect[xy[1 - pixelDimIndex]],
      axisLength: rect[wh[1 - pixelDimIndex]],
      axisExpandable: axisExpandable,
      axisExpandWidth: axisExpandWidth,
      axisCollapseWidth: axisCollapseWidth,
      axisExpandWindow: axisExpandWindow,
      axisCount: axisCount,
      winInnerIndices: winInnerIndices,
      axisExpandWindow0Pos: axisExpandWindow0Pos
    };
  };
  Parallel.prototype._layoutAxes = function () {
    var rect = this._rect;
    var axes = this._axesMap;
    var dimensions = this.dimensions;
    var layoutInfo = this._makeLayoutInfo();
    var layout = layoutInfo.layout;
    axes.each(function (axis) {
      var axisExtent = [0, layoutInfo.axisLength];
      var idx = axis.inverse ? 1 : 0;
      axis.setExtent(axisExtent[idx], axisExtent[1 - idx]);
    });
    each(dimensions, function (dim, idx) {
      var posInfo = (layoutInfo.axisExpandable ? layoutAxisWithExpand : layoutAxisWithoutExpand)(idx, layoutInfo);
      var positionTable = {
        horizontal: {
          x: posInfo.position,
          y: layoutInfo.axisLength
        },
        vertical: {
          x: 0,
          y: posInfo.position
        }
      };
      var rotationTable = {
        horizontal: PI / 2,
        vertical: 0
      };
      var position = [positionTable[layout].x + rect.x, positionTable[layout].y + rect.y];
      var rotation = rotationTable[layout];
      var transform = matrix.create();
      matrix.rotate(transform, transform, rotation);
      matrix.translate(transform, transform, position);
      // TODO
      // tick layout info
      // TODO
      // update dimensions info based on axis order.
      this._axesLayout[dim] = {
        position: position,
        rotation: rotation,
        transform: transform,
        axisNameAvailableWidth: posInfo.axisNameAvailableWidth,
        axisLabelShow: posInfo.axisLabelShow,
        nameTruncateMaxWidth: posInfo.nameTruncateMaxWidth,
        tickDirection: 1,
        labelDirection: 1
      };
    }, this);
  };
  /**
   * Get axis by dim.
   */
  Parallel.prototype.getAxis = function (dim) {
    return this._axesMap.get(dim);
  };
  /**
   * Convert a dim value of a single item of series data to Point.
   */
  Parallel.prototype.dataToPoint = function (value, dim) {
    return this.axisCoordToPoint(this._axesMap.get(dim).dataToCoord(value), dim);
  };
  /**
   * Travel data for one time, get activeState of each data item.
   * @param start the start dataIndex that travel from.
   * @param end the next dataIndex of the last dataIndex will be travel.
   */
  Parallel.prototype.eachActiveState = function (data, callback, start, end) {
    start == null && (start = 0);
    end == null && (end = data.count());
    var axesMap = this._axesMap;
    var dimensions = this.dimensions;
    var dataDimensions = [];
    var axisModels = [];
    util.each(dimensions, function (axisDim) {
      dataDimensions.push(data.mapDimension(axisDim));
      axisModels.push(axesMap.get(axisDim).model);
    });
    var hasActiveSet = this.hasAxisBrushed();
    for (var dataIndex = start; dataIndex < end; dataIndex++) {
      var activeState = void 0;
      if (!hasActiveSet) {
        activeState = 'normal';
      } else {
        activeState = 'active';
        var values = data.getValues(dataDimensions, dataIndex);
        for (var j = 0, lenj = dimensions.length; j < lenj; j++) {
          var state = axisModels[j].getActiveState(values[j]);
          if (state === 'inactive') {
            activeState = 'inactive';
            break;
          }
        }
      }
      callback(activeState, dataIndex);
    }
  };
  /**
   * Whether has any activeSet.
   */
  Parallel.prototype.hasAxisBrushed = function () {
    var dimensions = this.dimensions;
    var axesMap = this._axesMap;
    var hasActiveSet = false;
    for (var j = 0, lenj = dimensions.length; j < lenj; j++) {
      if (axesMap.get(dimensions[j]).model.getActiveState() !== 'normal') {
        hasActiveSet = true;
      }
    }
    return hasActiveSet;
  };
  /**
   * Convert coords of each axis to Point.
   *  Return point. For example: [10, 20]
   */
  Parallel.prototype.axisCoordToPoint = function (coord, dim) {
    var axisLayout = this._axesLayout[dim];
    return graphic.applyTransform([coord, 0], axisLayout.transform);
  };
  /**
   * Get axis layout.
   */
  Parallel.prototype.getAxisLayout = function (dim) {
    return util.clone(this._axesLayout[dim]);
  };
  /**
   * @return {Object} {axisExpandWindow, delta, behavior: 'jump' | 'slide' | 'none'}.
   */
  Parallel.prototype.getSlidedAxisExpandWindow = function (point) {
    var layoutInfo = this._makeLayoutInfo();
    var pixelDimIndex = layoutInfo.pixelDimIndex;
    var axisExpandWindow = layoutInfo.axisExpandWindow.slice();
    var winSize = axisExpandWindow[1] - axisExpandWindow[0];
    var extent = [0, layoutInfo.axisExpandWidth * (layoutInfo.axisCount - 1)];
    // Out of the area of coordinate system.
    if (!this.containPoint(point)) {
      return {
        behavior: 'none',
        axisExpandWindow: axisExpandWindow
      };
    }
    // Convert the point from global to expand coordinates.
    var pointCoord = point[pixelDimIndex] - layoutInfo.layoutBase - layoutInfo.axisExpandWindow0Pos;
    // For dragging operation convenience, the window should not be
    // slided when mouse is the center area of the window.
    var delta;
    var behavior = 'slide';
    var axisCollapseWidth = layoutInfo.axisCollapseWidth;
    var triggerArea = this._model.get('axisExpandSlideTriggerArea');
    // But consider touch device, jump is necessary.
    var useJump = triggerArea[0] != null;
    if (axisCollapseWidth) {
      if (useJump && axisCollapseWidth && pointCoord < winSize * triggerArea[0]) {
        behavior = 'jump';
        delta = pointCoord - winSize * triggerArea[2];
      } else if (useJump && axisCollapseWidth && pointCoord > winSize * (1 - triggerArea[0])) {
        behavior = 'jump';
        delta = pointCoord - winSize * (1 - triggerArea[2]);
      } else {
        (delta = pointCoord - winSize * triggerArea[1]) >= 0 && (delta = pointCoord - winSize * (1 - triggerArea[1])) <= 0 && (delta = 0);
      }
      delta *= layoutInfo.axisExpandWidth / axisCollapseWidth;
      delta ? (0,sliderMove["default"])(delta, axisExpandWindow, extent, 'all')
      // Avoid nonsense triger on mousemove.
      : behavior = 'none';
    }
    // When screen is too narrow, make it visible and slidable, although it is hard to interact.
    else {
      var winSize2 = axisExpandWindow[1] - axisExpandWindow[0];
      var pos = extent[1] * pointCoord / winSize2;
      axisExpandWindow = [mathMax(0, pos - winSize2 / 2)];
      axisExpandWindow[1] = mathMin(extent[1], axisExpandWindow[0] + winSize2);
      axisExpandWindow[0] = axisExpandWindow[1] - winSize2;
    }
    return {
      axisExpandWindow: axisExpandWindow,
      behavior: behavior
    };
  };
  return Parallel;
}();
function restrict(len, extent) {
  return mathMin(mathMax(len, extent[0]), extent[1]);
}
function layoutAxisWithoutExpand(axisIndex, layoutInfo) {
  var step = layoutInfo.layoutLength / (layoutInfo.axisCount - 1);
  return {
    position: step * axisIndex,
    axisNameAvailableWidth: step,
    axisLabelShow: true
  };
}
function layoutAxisWithExpand(axisIndex, layoutInfo) {
  var layoutLength = layoutInfo.layoutLength;
  var axisExpandWidth = layoutInfo.axisExpandWidth;
  var axisCount = layoutInfo.axisCount;
  var axisCollapseWidth = layoutInfo.axisCollapseWidth;
  var winInnerIndices = layoutInfo.winInnerIndices;
  var position;
  var axisNameAvailableWidth = axisCollapseWidth;
  var axisLabelShow = false;
  var nameTruncateMaxWidth;
  if (axisIndex < winInnerIndices[0]) {
    position = axisIndex * axisCollapseWidth;
    nameTruncateMaxWidth = axisCollapseWidth;
  } else if (axisIndex <= winInnerIndices[1]) {
    position = layoutInfo.axisExpandWindow0Pos + axisIndex * axisExpandWidth - layoutInfo.axisExpandWindow[0];
    axisNameAvailableWidth = axisExpandWidth;
    axisLabelShow = true;
  } else {
    position = layoutLength - (axisCount - 1 - axisIndex) * axisCollapseWidth;
    nameTruncateMaxWidth = axisCollapseWidth;
  }
  return {
    position: position,
    axisNameAvailableWidth: axisNameAvailableWidth,
    axisLabelShow: axisLabelShow,
    nameTruncateMaxWidth: nameTruncateMaxWidth
  };
}
/* ESM default export */ var parallel_Parallel = (Parallel_Parallel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/parallelCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Parallel coordinate system creater.
 */


function createParallelCoordSys(ecModel, api) {
  var coordSysList = [];
  ecModel.eachComponent('parallel', function (parallelModel, idx) {
    var coordSys = new parallel_Parallel(parallelModel, ecModel, api);
    coordSys.name = 'parallel_' + idx;
    coordSys.resize(parallelModel, api);
    parallelModel.coordinateSystem = coordSys;
    coordSys.model = parallelModel;
    coordSysList.push(coordSys);
  });
  // Inject the coordinateSystems into seriesModel
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === 'parallel') {
      var parallelModel = seriesModel.getReferringComponents('parallel', model.SINGLE_REFERRING).models[0];
      seriesModel.coordinateSystem = parallelModel.coordinateSystem;
    }
  });
  return coordSysList;
}
var parallelCoordSysCreator = {
  create: createParallelCoordSys
};
/* ESM default export */ var parallelCreator = (parallelCoordSysCreator);

}),
45756: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return parallelPreprocessor; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
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


function parallelPreprocessor(option) {
  createParallelIfNeeded(option);
  mergeAxisOptionFromParallel(option);
}
/**
 * Create a parallel coordinate if not exists.
 * @inner
 */
function createParallelIfNeeded(option) {
  if (option.parallel) {
    return;
  }
  var hasParallelSeries = false;
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(option.series, function (seriesOpt) {
    if (seriesOpt && seriesOpt.type === 'parallel') {
      hasParallelSeries = true;
    }
  });
  if (hasParallelSeries) {
    option.parallel = [{}];
  }
}
/**
 * Merge aixs definition from parallel option (if exists) to axis option.
 * @inner
 */
function mergeAxisOptionFromParallel(option) {
  var axes = _util_model_js__WEBPACK_IMPORTED_MODULE_1__.normalizeToArray(option.parallelAxis);
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(axes, function (axisOption) {
    if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject(axisOption)) {
      return;
    }
    var parallelIndex = axisOption.parallelIndex || 0;
    var parallelOption = _util_model_js__WEBPACK_IMPORTED_MODULE_1__.normalizeToArray(option.parallel)[parallelIndex];
    if (parallelOption && parallelOption.parallelAxisDefault) {
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.merge(axisOption, parallelOption.parallelAxisDefault, false);
    }
  });
}

}),
46610: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AngleAxisModel: function() { return AngleAxisModel; },
  PolarAxisModel: function() { return PolarAxisModel; },
  RadiusAxisModel: function() { return RadiusAxisModel; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14373);
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





var PolarAxisModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PolarAxisModel, _super);
  function PolarAxisModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PolarAxisModel.prototype.getCoordSysModel = function () {
    return this.getReferringComponents('polar', _util_model_js__WEBPACK_IMPORTED_MODULE_2__.SINGLE_REFERRING).models[0];
  };
  PolarAxisModel.type = 'polarAxis';
  return PolarAxisModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.mixin(PolarAxisModel, _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_4__.AxisModelCommonMixin);

var AngleAxisModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(AngleAxisModel, _super);
  function AngleAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = AngleAxisModel.type;
    return _this;
  }
  AngleAxisModel.type = 'angleAxis';
  return AngleAxisModel;
}(PolarAxisModel);

var RadiusAxisModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(RadiusAxisModel, _super);
  function RadiusAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadiusAxisModel.type;
    return _this;
  }
  RadiusAxisModel.type = 'radiusAxis';
  return RadiusAxisModel;
}(PolarAxisModel);


}),
70841: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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


var PolarModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PolarModel, _super);
  function PolarModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PolarModel.type;
    return _this;
  }
  PolarModel.prototype.findAxisModel = function (axisType) {
    var foundAxisModel;
    var ecModel = this.ecModel;
    ecModel.eachComponent(axisType, function (axisModel) {
      if (axisModel.getCoordSysModel() === this) {
        foundAxisModel = axisModel;
      }
    }, this);
    return foundAxisModel;
  };
  PolarModel.type = 'polar';
  PolarModel.dependencies = ['radiusAxis', 'angleAxis'];
  PolarModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    center: ['50%', '50%'],
    radius: '80%'
  };
  return PolarModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (PolarModel);

}),
25843: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ polarCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(59562);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/RadiusAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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


var RadiusAxis_RadiusAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(RadiusAxis, _super);
  function RadiusAxis(scale, radiusExtent) {
    return _super.call(this, 'radius', scale, radiusExtent) || this;
  }
  RadiusAxis.prototype.pointToData = function (point, clamp) {
    return this.polar.pointToData(point, clamp)[this.dim === 'radius' ? 0 : 1];
  };
  return RadiusAxis;
}(Axis["default"]);
RadiusAxis_RadiusAxis.prototype.dataToRadius = Axis["default"].prototype.dataToCoord;
RadiusAxis_RadiusAxis.prototype.radiusToData = Axis["default"].prototype.coordToData;
/* ESM default export */ var polar_RadiusAxis = (RadiusAxis_RadiusAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(50122);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/AngleAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
var AngleAxis_AngleAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(AngleAxis, _super);
  function AngleAxis(scale, angleExtent) {
    return _super.call(this, 'angle', scale, angleExtent || [0, 360]) || this;
  }
  AngleAxis.prototype.pointToData = function (point, clamp) {
    return this.polar.pointToData(point, clamp)[this.dim === 'radius' ? 0 : 1];
  };
  /**
   * Only be called in category axis.
   * Angle axis uses text height to decide interval
   *
   * @override
   * @return {number} Auto interval for cateogry axis tick and label
   */
  AngleAxis.prototype.calculateCategoryInterval = function () {
    var axis = this;
    var labelModel = axis.getLabelModel();
    var ordinalScale = axis.scale;
    var ordinalExtent = ordinalScale.getExtent();
    // Providing this method is for optimization:
    // avoid generating a long array by `getTicks`
    // in large category data case.
    var tickCount = ordinalScale.count();
    if (ordinalExtent[1] - ordinalExtent[0] < 1) {
      return 0;
    }
    var tickValue = ordinalExtent[0];
    var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
    var unitH = Math.abs(unitSpan);
    // Not precise, just use height as text width
    // and each distance from axis line yet.
    var rect = contain_text.getBoundingRect(tickValue == null ? '' : tickValue + '', labelModel.getFont(), 'center', 'top');
    var maxH = Math.max(rect.height, 7);
    var dh = maxH / unitH;
    // 0/0 is NaN, 1/0 is Infinity.
    isNaN(dh) && (dh = Infinity);
    var interval = Math.max(0, Math.floor(dh));
    var cache = inner(axis.model);
    var lastAutoInterval = cache.lastAutoInterval;
    var lastTickCount = cache.lastTickCount;
    // Use cache to keep interval stable while moving zoom window,
    // otherwise the calculated interval might jitter when the zoom
    // window size is close to the interval-changing size.
    if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1
    // Always choose the bigger one, otherwise the critical
    // point is not the same when zooming in or zooming out.
    && lastAutoInterval > interval) {
      interval = lastAutoInterval;
    }
    // Only update cache if cache not used, otherwise the
    // changing of interval is too insensitive.
    else {
      cache.lastTickCount = tickCount;
      cache.lastAutoInterval = interval;
    }
    return interval;
  };
  return AngleAxis;
}(Axis["default"]);
AngleAxis_AngleAxis.prototype.dataToAngle = Axis["default"].prototype.dataToCoord;
AngleAxis_AngleAxis.prototype.angleToData = Axis["default"].prototype.coordToData;
/* ESM default export */ var polar_AngleAxis = (AngleAxis_AngleAxis);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/Polar.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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


var polarDimensions = ['radius', 'angle'];
var Polar_Polar = /** @class */function () {
  function Polar(name) {
    this.dimensions = polarDimensions;
    this.type = 'polar';
    /**
     * x of polar center
     */
    this.cx = 0;
    /**
     * y of polar center
     */
    this.cy = 0;
    this._radiusAxis = new polar_RadiusAxis();
    this._angleAxis = new polar_AngleAxis();
    this.axisPointerEnabled = true;
    this.name = name || '';
    this._radiusAxis.polar = this._angleAxis.polar = this;
  }
  /**
   * If contain coord
   */
  Polar.prototype.containPoint = function (point) {
    var coord = this.pointToCoord(point);
    return this._radiusAxis.contain(coord[0]) && this._angleAxis.contain(coord[1]);
  };
  /**
   * If contain data
   */
  Polar.prototype.containData = function (data) {
    return this._radiusAxis.containData(data[0]) && this._angleAxis.containData(data[1]);
  };
  Polar.prototype.getAxis = function (dim) {
    var key = '_' + dim + 'Axis';
    return this[key];
  };
  Polar.prototype.getAxes = function () {
    return [this._radiusAxis, this._angleAxis];
  };
  /**
   * Get axes by type of scale
   */
  Polar.prototype.getAxesByScale = function (scaleType) {
    var axes = [];
    var angleAxis = this._angleAxis;
    var radiusAxis = this._radiusAxis;
    angleAxis.scale.type === scaleType && axes.push(angleAxis);
    radiusAxis.scale.type === scaleType && axes.push(radiusAxis);
    return axes;
  };
  Polar.prototype.getAngleAxis = function () {
    return this._angleAxis;
  };
  Polar.prototype.getRadiusAxis = function () {
    return this._radiusAxis;
  };
  Polar.prototype.getOtherAxis = function (axis) {
    var angleAxis = this._angleAxis;
    return axis === angleAxis ? this._radiusAxis : angleAxis;
  };
  /**
   * Base axis will be used on stacking.
   *
   */
  Polar.prototype.getBaseAxis = function () {
    return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAngleAxis();
  };
  Polar.prototype.getTooltipAxes = function (dim) {
    var baseAxis = dim != null && dim !== 'auto' ? this.getAxis(dim) : this.getBaseAxis();
    return {
      baseAxes: [baseAxis],
      otherAxes: [this.getOtherAxis(baseAxis)]
    };
  };
  /**
   * Convert a single data item to (x, y) point.
   * Parameter data is an array which the first element is radius and the second is angle
   */
  Polar.prototype.dataToPoint = function (data, clamp, out) {
    return this.coordToPoint([this._radiusAxis.dataToRadius(data[0], clamp), this._angleAxis.dataToAngle(data[1], clamp)], out);
  };
  /**
   * Convert a (x, y) point to data
   */
  Polar.prototype.pointToData = function (point, clamp, out) {
    out = out || [];
    var coord = this.pointToCoord(point);
    out[0] = this._radiusAxis.radiusToData(coord[0], clamp);
    out[1] = this._angleAxis.angleToData(coord[1], clamp);
    return out;
  };
  /**
   * Convert a (x, y) point to (radius, angle) coord
   */
  Polar.prototype.pointToCoord = function (point) {
    var dx = point[0] - this.cx;
    var dy = point[1] - this.cy;
    var angleAxis = this.getAngleAxis();
    var extent = angleAxis.getExtent();
    var minAngle = Math.min(extent[0], extent[1]);
    var maxAngle = Math.max(extent[0], extent[1]);
    // Fix fixed extent in polarCreator
    // FIXME
    angleAxis.inverse ? minAngle = maxAngle - 360 : maxAngle = minAngle + 360;
    var radius = Math.sqrt(dx * dx + dy * dy);
    dx /= radius;
    dy /= radius;
    var radian = Math.atan2(-dy, dx) / Math.PI * 180;
    // move to angleExtent
    var dir = radian < minAngle ? 1 : -1;
    while (radian < minAngle || radian > maxAngle) {
      radian += dir * 360;
    }
    return [radius, radian];
  };
  /**
   * Convert a (radius, angle) coord to (x, y) point
   */
  Polar.prototype.coordToPoint = function (coord, out) {
    out = out || [];
    var radius = coord[0];
    var radian = coord[1] / 180 * Math.PI;
    out[0] = Math.cos(radian) * radius + this.cx;
    // Inverse the y
    out[1] = -Math.sin(radian) * radius + this.cy;
    return out;
  };
  /**
   * Get ring area of cartesian.
   * Area will have a contain function to determine if a point is in the coordinate system.
   */
  Polar.prototype.getArea = function () {
    var angleAxis = this.getAngleAxis();
    var radiusAxis = this.getRadiusAxis();
    var radiusExtent = radiusAxis.getExtent().slice();
    radiusExtent[0] > radiusExtent[1] && radiusExtent.reverse();
    var angleExtent = angleAxis.getExtent();
    var RADIAN = Math.PI / 180;
    var EPSILON = 1e-4;
    return {
      cx: this.cx,
      cy: this.cy,
      r0: radiusExtent[0],
      r: radiusExtent[1],
      startAngle: -angleExtent[0] * RADIAN,
      endAngle: -angleExtent[1] * RADIAN,
      clockwise: angleAxis.inverse,
      contain: function (x, y) {
        // It's a ring shape.
        // Start angle and end angle don't matter
        var dx = x - this.cx;
        var dy = y - this.cy;
        var d2 = dx * dx + dy * dy;
        var r = this.r;
        var r0 = this.r0;
        // minus a tiny value 1e-4 in double side to avoid being clipped unexpectedly
        // r == r0 contain nothing
        return r !== r0 && d2 - EPSILON <= r * r && d2 + EPSILON >= r0 * r0;
      },
      // As the bounding box
      x: this.cx - radiusExtent[1],
      y: this.cy - radiusExtent[1],
      width: radiusExtent[1] * 2,
      height: radiusExtent[1] * 2
    };
  };
  Polar.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.dataToPoint(value) : null;
  };
  Polar.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.pointToData(pixel) : null;
  };
  return Polar;
}();
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  var polarModel = finder.polarModel;
  return polarModel && polarModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
/* ESM default export */ var polar_Polar = (Polar_Polar);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(5527);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/polarCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
// TODO Axis scale






/**
 * Resize method bound to the polar
 */
function resizePolar(polar, polarModel, api) {
  var center = polarModel.get('center');
  var refContainer = (0,layout.createBoxLayoutReference)(polarModel, api).refContainer;
  polar.cx = (0,number.parsePercent)(center[0], refContainer.width) + refContainer.x;
  polar.cy = (0,number.parsePercent)(center[1], refContainer.height) + refContainer.y;
  var radiusAxis = polar.getRadiusAxis();
  var size = Math.min(refContainer.width, refContainer.height) / 2;
  var radius = polarModel.get('radius');
  if (radius == null) {
    radius = [0, '100%'];
  } else if (!util.isArray(radius)) {
    // r0 = 0
    radius = [0, radius];
  }
  var parsedRadius = [(0,number.parsePercent)(radius[0], size), (0,number.parsePercent)(radius[1], size)];
  radiusAxis.inverse ? radiusAxis.setExtent(parsedRadius[1], parsedRadius[0]) : radiusAxis.setExtent(parsedRadius[0], parsedRadius[1]);
}
/**
 * Update polar
 */
function updatePolarScale(ecModel, api) {
  var polar = this;
  var angleAxis = polar.getAngleAxis();
  var radiusAxis = polar.getRadiusAxis();
  // Reset scale
  angleAxis.scale.setExtent(Infinity, -Infinity);
  radiusAxis.scale.setExtent(Infinity, -Infinity);
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.coordinateSystem === polar) {
      var data_1 = seriesModel.getData();
      util.each((0,axisHelper.getDataDimensionsOnAxis)(data_1, 'radius'), function (dim) {
        radiusAxis.scale.unionExtentFromData(data_1, dim);
      });
      util.each((0,axisHelper.getDataDimensionsOnAxis)(data_1, 'angle'), function (dim) {
        angleAxis.scale.unionExtentFromData(data_1, dim);
      });
    }
  });
  (0,axisHelper.niceScaleExtent)(angleAxis.scale, angleAxis.model);
  (0,axisHelper.niceScaleExtent)(radiusAxis.scale, radiusAxis.model);
  // Fix extent of category angle axis
  if (angleAxis.type === 'category' && !angleAxis.onBand) {
    var extent = angleAxis.getExtent();
    var diff = 360 / angleAxis.scale.count();
    angleAxis.inverse ? extent[1] += diff : extent[1] -= diff;
    angleAxis.setExtent(extent[0], extent[1]);
  }
}
function isAngleAxisModel(axisModel) {
  return axisModel.mainType === 'angleAxis';
}
/**
 * Set common axis properties
 */
function setAxis(axis, axisModel) {
  var _a;
  axis.type = axisModel.get('type');
  axis.scale = (0,axisHelper.createScaleByModel)(axisModel);
  axis.onBand = axisModel.get('boundaryGap') && axis.type === 'category';
  axis.inverse = axisModel.get('inverse');
  if (isAngleAxisModel(axisModel)) {
    axis.inverse = axis.inverse !== axisModel.get('clockwise');
    var startAngle = axisModel.get('startAngle');
    var endAngle = (_a = axisModel.get('endAngle')) !== null && _a !== void 0 ? _a : startAngle + (axis.inverse ? -360 : 360);
    axis.setExtent(startAngle, endAngle);
  }
  // Inject axis instance
  axisModel.axis = axis;
  axis.model = axisModel;
}
var polarCreator_polarCreator = {
  dimensions: polarDimensions,
  create: function (ecModel, api) {
    var polarList = [];
    ecModel.eachComponent('polar', function (polarModel, idx) {
      var polar = new polar_Polar(idx + '');
      // Inject resize and update method
      polar.update = updatePolarScale;
      var radiusAxis = polar.getRadiusAxis();
      var angleAxis = polar.getAngleAxis();
      var radiusAxisModel = polarModel.findAxisModel('radiusAxis');
      var angleAxisModel = polarModel.findAxisModel('angleAxis');
      setAxis(radiusAxis, radiusAxisModel);
      setAxis(angleAxis, angleAxisModel);
      resizePolar(polar, polarModel, api);
      polarList.push(polar);
      polarModel.coordinateSystem = polar;
      polar.model = polarModel;
    });
    // Inject coordinateSystem to series
    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.get('coordinateSystem') === 'polar') {
        var polarModel = seriesModel.getReferringComponents('polar', model.SINGLE_REFERRING).models[0];
        if (false) {}
        seriesModel.coordinateSystem = polarModel.coordinateSystem;
      }
    });
    return polarList;
  }
};
/* ESM default export */ var polarCreator = (polarCreator_polarCreator);

}),
75923: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return polarPrepareCustom; }
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

// import AngleAxis from './AngleAxis.js';
function dataToCoordSize(dataSize, dataItem) {
  // dataItem is necessary in log axis.
  dataItem = dataItem || [0, 0];
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(['Radius', 'Angle'], function (dim, dimIdx) {
    var getterName = 'get' + dim + 'Axis';
    // TODO: TYPE Check Angle Axis
    var axis = this[getterName]();
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    var result = axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
    if (dim === 'Angle') {
      result = result * Math.PI / 180;
    }
    return result;
  }, this);
}
function polarPrepareCustom(coordSys) {
  var radiusAxis = coordSys.getRadiusAxis();
  var angleAxis = coordSys.getAngleAxis();
  var radius = radiusAxis.getExtent();
  radius[0] > radius[1] && radius.reverse();
  return {
    coordSys: {
      type: 'polar',
      cx: coordSys.cx,
      cy: coordSys.cy,
      r: radius[1],
      r0: radius[0]
    },
    api: {
      coord: function (data) {
        var radius = radiusAxis.dataToRadius(data[0]);
        var angle = angleAxis.dataToAngle(data[1]);
        var coord = coordSys.coordToPoint([radius, angle]);
        coord.push(radius, angle * Math.PI / 180);
        return coord;
      },
      size: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(dataToCoordSize, coordSys)
    }
  };
}

}),
5136: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ radar_Radar; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(59562);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/IndicatorAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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


var IndicatorAxis_IndicatorAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(IndicatorAxis, _super);
  function IndicatorAxis(dim, scale, radiusExtent) {
    var _this = _super.call(this, dim, scale, radiusExtent) || this;
    _this.type = 'value';
    _this.angle = 0;
    _this.name = '';
    return _this;
  }
  return IndicatorAxis;
}(Axis["default"]);
/* ESM default export */ var radar_IndicatorAxis = (IndicatorAxis_IndicatorAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js
var Interval = __webpack_require__(31588);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisAlignTicks.js
var axisAlignTicks = __webpack_require__(35604);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/Radar.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
// TODO clockwise






var Radar_Radar = /** @class */function () {
  function Radar(radarModel, ecModel, api) {
    /**
     *
     * Radar dimensions
     */
    this.dimensions = [];
    this._model = radarModel;
    this._indicatorAxes = (0,util.map)(radarModel.getIndicatorModels(), function (indicatorModel, idx) {
      var dim = 'indicator_' + idx;
      var indicatorAxis = new radar_IndicatorAxis(dim, new Interval["default"]()
      // (indicatorModel.get('axisType') === 'log') ? new LogScale() : new IntervalScale()
      );
      indicatorAxis.name = indicatorModel.get('name');
      // Inject model and axis
      indicatorAxis.model = indicatorModel;
      indicatorModel.axis = indicatorAxis;
      this.dimensions.push(dim);
      return indicatorAxis;
    }, this);
    this.resize(radarModel, api);
  }
  Radar.prototype.getIndicatorAxes = function () {
    return this._indicatorAxes;
  };
  Radar.prototype.dataToPoint = function (value, indicatorIndex) {
    var indicatorAxis = this._indicatorAxes[indicatorIndex];
    return this.coordToPoint(indicatorAxis.dataToCoord(value), indicatorIndex);
  };
  // TODO: API should be coordToPoint([coord, indicatorIndex])
  Radar.prototype.coordToPoint = function (coord, indicatorIndex) {
    var indicatorAxis = this._indicatorAxes[indicatorIndex];
    var angle = indicatorAxis.angle;
    var x = this.cx + coord * Math.cos(angle);
    var y = this.cy - coord * Math.sin(angle);
    return [x, y];
  };
  Radar.prototype.pointToData = function (pt) {
    var dx = pt[0] - this.cx;
    var dy = pt[1] - this.cy;
    var radius = Math.sqrt(dx * dx + dy * dy);
    dx /= radius;
    dy /= radius;
    var radian = Math.atan2(-dy, dx);
    // Find the closest angle
    // FIXME index can calculated directly
    var minRadianDiff = Infinity;
    var closestAxis;
    var closestAxisIdx = -1;
    for (var i = 0; i < this._indicatorAxes.length; i++) {
      var indicatorAxis = this._indicatorAxes[i];
      var diff = Math.abs(radian - indicatorAxis.angle);
      if (diff < minRadianDiff) {
        closestAxis = indicatorAxis;
        closestAxisIdx = i;
        minRadianDiff = diff;
      }
    }
    return [closestAxisIdx, +(closestAxis && closestAxis.coordToData(radius))];
  };
  Radar.prototype.resize = function (radarModel, api) {
    var refContainer = (0,layout.createBoxLayoutReference)(radarModel, api).refContainer;
    var center = radarModel.get('center');
    var viewSize = Math.min(refContainer.width, refContainer.height) / 2;
    this.cx = number.parsePercent(center[0], refContainer.width) + refContainer.x;
    this.cy = number.parsePercent(center[1], refContainer.height) + refContainer.y;
    this.startAngle = radarModel.get('startAngle') * Math.PI / 180;
    // radius may be single value like `20`, `'80%'`, or array like `[10, '80%']`
    var radius = radarModel.get('radius');
    if ((0,util.isString)(radius) || (0,util.isNumber)(radius)) {
      radius = [0, radius];
    }
    this.r0 = number.parsePercent(radius[0], viewSize);
    this.r = number.parsePercent(radius[1], viewSize);
    (0,util.each)(this._indicatorAxes, function (indicatorAxis, idx) {
      indicatorAxis.setExtent(this.r0, this.r);
      var angle = this.startAngle + idx * Math.PI * 2 / this._indicatorAxes.length;
      // Normalize to [-PI, PI]
      angle = Math.atan2(Math.sin(angle), Math.cos(angle));
      indicatorAxis.angle = angle;
    }, this);
  };
  Radar.prototype.update = function (ecModel, api) {
    var indicatorAxes = this._indicatorAxes;
    var radarModel = this._model;
    (0,util.each)(indicatorAxes, function (indicatorAxis) {
      indicatorAxis.scale.setExtent(Infinity, -Infinity);
    });
    ecModel.eachSeriesByType('radar', function (radarSeries, idx) {
      if (radarSeries.get('coordinateSystem') !== 'radar'
      // @ts-ignore
      || ecModel.getComponent('radar', radarSeries.get('radarIndex')) !== radarModel) {
        return;
      }
      var data = radarSeries.getData();
      (0,util.each)(indicatorAxes, function (indicatorAxis) {
        indicatorAxis.scale.unionExtentFromData(data, data.mapDimension(indicatorAxis.dim));
      });
    }, this);
    var splitNumber = radarModel.get('splitNumber');
    var dummyScale = new Interval["default"]();
    dummyScale.setExtent(0, splitNumber);
    dummyScale.setInterval(1);
    // Force all the axis fixing the maxSplitNumber.
    (0,util.each)(indicatorAxes, function (indicatorAxis, idx) {
      (0,axisAlignTicks.alignScaleTicks)(indicatorAxis.scale, indicatorAxis.model, dummyScale);
    });
  };
  Radar.prototype.convertToPixel = function (ecModel, finder, value) {
    console.warn('Not implemented.');
    return null;
  };
  Radar.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    console.warn('Not implemented.');
    return null;
  };
  Radar.prototype.containPoint = function (point) {
    console.warn('Not implemented.');
    return false;
  };
  Radar.create = function (ecModel, api) {
    var radarList = [];
    ecModel.eachComponent('radar', function (radarModel) {
      var radar = new Radar(radarModel, ecModel, api);
      radarList.push(radar);
      radarModel.coordinateSystem = radar;
    });
    ecModel.eachSeriesByType('radar', function (radarSeries) {
      if (radarSeries.get('coordinateSystem') === 'radar') {
        // Inject coordinate system
        // @ts-ignore
        radarSeries.coordinateSystem = radarList[radarSeries.get('radarIndex') || 0];
      }
    });
    return radarList;
  };
  /**
   * Radar dimensions is based on the data
   */
  Radar.dimensions = [];
  return Radar;
}();
/* ESM default export */ var radar_Radar = (Radar_Radar);

}),
49092: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _axisDefault_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24833);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40064);
/* ESM import */var _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14373);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81757);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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







var valueAxisDefault = _axisDefault_js__WEBPACK_IMPORTED_MODULE_0__["default"].value;
function defaultsShow(opt, show) {
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults({
    show: show
  }, opt);
}
var RadarModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(RadarModel, _super);
  function RadarModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadarModel.type;
    return _this;
  }
  RadarModel.prototype.optionUpdated = function () {
    var boundaryGap = this.get('boundaryGap');
    var splitNumber = this.get('splitNumber');
    var scale = this.get('scale');
    var axisLine = this.get('axisLine');
    var axisTick = this.get('axisTick');
    // let axisType = this.get('axisType');
    var axisLabel = this.get('axisLabel');
    var nameTextStyle = this.get('axisName');
    var showName = this.get(['axisName', 'show']);
    var nameFormatter = this.get(['axisName', 'formatter']);
    var nameGap = this.get('axisNameGap');
    var triggerEvent = this.get('triggerEvent');
    var indicatorModels = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(this.get('indicator') || [], function (indicatorOpt) {
      // PENDING
      if (indicatorOpt.max != null && indicatorOpt.max > 0 && !indicatorOpt.min) {
        indicatorOpt.min = 0;
      } else if (indicatorOpt.min != null && indicatorOpt.min < 0 && !indicatorOpt.max) {
        indicatorOpt.max = 0;
      }
      var iNameTextStyle = nameTextStyle;
      if (indicatorOpt.color != null) {
        iNameTextStyle = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults({
          color: indicatorOpt.color
        }, nameTextStyle);
      }
      // Use same configuration
      var innerIndicatorOpt = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.clone(indicatorOpt), {
        boundaryGap: boundaryGap,
        splitNumber: splitNumber,
        scale: scale,
        axisLine: axisLine,
        axisTick: axisTick,
        // axisType: axisType,
        axisLabel: axisLabel,
        // Compatible with 2 and use text
        name: indicatorOpt.text,
        showName: showName,
        nameLocation: 'end',
        nameGap: nameGap,
        // min: 0,
        nameTextStyle: iNameTextStyle,
        triggerEvent: triggerEvent
      }, false);
      if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString(nameFormatter)) {
        var indName = innerIndicatorOpt.name;
        innerIndicatorOpt.name = nameFormatter.replace('{value}', indName != null ? indName : '');
      } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(nameFormatter)) {
        innerIndicatorOpt.name = nameFormatter(innerIndicatorOpt.name, innerIndicatorOpt);
      }
      var model = new _model_Model_js__WEBPACK_IMPORTED_MODULE_4__["default"](innerIndicatorOpt, null, this.ecModel);
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.mixin(model, _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_5__.AxisModelCommonMixin.prototype);
      // For triggerEvent.
      model.mainType = 'radar';
      model.componentIndex = this.componentIndex;
      return model;
    }, this);
    this._indicatorModels = indicatorModels;
  };
  RadarModel.prototype.getIndicatorModels = function () {
    return this._indicatorModels;
  };
  RadarModel.type = 'radar';
  RadarModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    center: ['50%', '50%'],
    radius: '50%',
    startAngle: 90,
    axisName: {
      show: true,
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_6__["default"].color.axisLabel
      // formatter: null
      // textStyle: {}
    },
    boundaryGap: [0, 0],
    splitNumber: 5,
    axisNameGap: 15,
    scale: false,
    // Polygon or circle
    shape: 'polygon',
    axisLine: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge({
      lineStyle: {
        color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_6__["default"].color.neutral20
      }
    }, valueAxisDefault.axisLine),
    axisLabel: defaultsShow(valueAxisDefault.axisLabel, false),
    axisTick: defaultsShow(valueAxisDefault.axisTick, false),
    // axisType: 'value',
    splitLine: defaultsShow(valueAxisDefault.splitLine, true),
    splitArea: defaultsShow(valueAxisDefault.splitArea, true),
    // {text, min, max}
    indicator: []
  };
  return RadarModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (RadarModel);

}),
34920: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScaleRawExtentInfo: function() { return ScaleRawExtentInfo; },
  ensureScaleRawExtentInfo: function() { return ensureScaleRawExtentInfo; },
  parseAxisModelMinMax: function() { return parseAxisModelMinMax; }
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


var ScaleRawExtentInfo = /** @class */function () {
  function ScaleRawExtentInfo(scale, model,
  // Usually: data extent from all series on this axis.
  originalExtent) {
    this._prepareParams(scale, model, originalExtent);
  }
  /**
   * Parameters depending on outside (like model, user callback)
   * are prepared and fixed here.
   */
  ScaleRawExtentInfo.prototype._prepareParams = function (scale, model,
  // Usually: data extent from all series on this axis.
  dataExtent) {
    if (dataExtent[1] < dataExtent[0]) {
      dataExtent = [NaN, NaN];
    }
    this._dataMin = dataExtent[0];
    this._dataMax = dataExtent[1];
    var isOrdinal = this._isOrdinal = scale.type === 'ordinal';
    this._needCrossZero = scale.type === 'interval' && model.getNeedCrossZero && model.getNeedCrossZero();
    var axisMinValue = model.get('min', true);
    if (axisMinValue == null) {
      axisMinValue = model.get('startValue', true);
    }
    var modelMinRaw = this._modelMinRaw = axisMinValue;
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(modelMinRaw)) {
      // This callback always provides users the full data extent (before data is filtered).
      this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw({
        min: dataExtent[0],
        max: dataExtent[1]
      }));
    } else if (modelMinRaw !== 'dataMin') {
      this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw);
    }
    var modelMaxRaw = this._modelMaxRaw = model.get('max', true);
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(modelMaxRaw)) {
      // This callback always provides users the full data extent (before data is filtered).
      this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw({
        min: dataExtent[0],
        max: dataExtent[1]
      }));
    } else if (modelMaxRaw !== 'dataMax') {
      this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw);
    }
    if (isOrdinal) {
      // FIXME: there is a flaw here: if there is no "block" data processor like `dataZoom`,
      // and progressive rendering is using, here the category result might just only contain
      // the processed chunk rather than the entire result.
      this._axisDataLen = model.getCategories().length;
    } else {
      var boundaryGap = model.get('boundaryGap');
      var boundaryGapArr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(boundaryGap) ? boundaryGap : [boundaryGap || 0, boundaryGap || 0];
      if (typeof boundaryGapArr[0] === 'boolean' || typeof boundaryGapArr[1] === 'boolean') {
        if (false) {}
        this._boundaryGapInner = [0, 0];
      } else {
        this._boundaryGapInner = [(0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(boundaryGapArr[0], 1), (0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(boundaryGapArr[1], 1)];
      }
    }
  };
  /**
   * Calculate extent by prepared parameters.
   * This method has no external dependency and can be called duplicatedly,
   * getting the same result.
   * If parameters changed, should call this method to recalcuate.
   */
  ScaleRawExtentInfo.prototype.calculate = function () {
    // Notice: When min/max is not set (that is, when there are null/undefined,
    // which is the most common case), these cases should be ensured:
    // (1) For 'ordinal', show all axis.data.
    // (2) For others:
    //      + `boundaryGap` is applied (if min/max set, boundaryGap is
    //      disabled).
    //      + If `needCrossZero`, min/max should be zero, otherwise, min/max should
    //      be the result that originalExtent enlarged by boundaryGap.
    // (3) If no data, it should be ensured that `scale.setBlank` is set.
    var isOrdinal = this._isOrdinal;
    var dataMin = this._dataMin;
    var dataMax = this._dataMax;
    var axisDataLen = this._axisDataLen;
    var boundaryGapInner = this._boundaryGapInner;
    var span = !isOrdinal ? dataMax - dataMin || Math.abs(dataMin) : null;
    // Currently if a `'value'` axis model min is specified as 'dataMin'/'dataMax',
    // `boundaryGap` will not be used. It's the different from specifying as `null`/`undefined`.
    var min = this._modelMinRaw === 'dataMin' ? dataMin : this._modelMinNum;
    var max = this._modelMaxRaw === 'dataMax' ? dataMax : this._modelMaxNum;
    // If `_modelMinNum`/`_modelMaxNum` is `null`/`undefined`, should not be fixed.
    var minFixed = min != null;
    var maxFixed = max != null;
    if (min == null) {
      min = isOrdinal ? axisDataLen ? 0 : NaN : dataMin - boundaryGapInner[0] * span;
    }
    if (max == null) {
      max = isOrdinal ? axisDataLen ? axisDataLen - 1 : NaN : dataMax + boundaryGapInner[1] * span;
    }
    (min == null || !isFinite(min)) && (min = NaN);
    (max == null || !isFinite(max)) && (max = NaN);
    var isBlank = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.eqNaN)(min) || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.eqNaN)(max) || isOrdinal && !axisDataLen;
    // If data extent modified, need to recalculated to ensure cross zero.
    if (this._needCrossZero) {
      // Axis is over zero and min is not set
      if (min > 0 && max > 0 && !minFixed) {
        min = 0;
        // minFixed = true;
      }
      // Axis is under zero and max is not set
      if (min < 0 && max < 0 && !maxFixed) {
        max = 0;
        // maxFixed = true;
      }
      // PENDING:
      // When `needCrossZero` and all data is positive/negative, should it be ensured
      // that the results processed by boundaryGap are positive/negative?
      // If so, here `minFixed`/`maxFixed` need to be set.
    }
    var determinedMin = this._determinedMin;
    var determinedMax = this._determinedMax;
    if (determinedMin != null) {
      min = determinedMin;
      minFixed = true;
    }
    if (determinedMax != null) {
      max = determinedMax;
      maxFixed = true;
    }
    // Ensure min/max be finite number or NaN here. (not to be null/undefined)
    // `NaN` means min/max axis is blank.
    return {
      min: min,
      max: max,
      minFixed: minFixed,
      maxFixed: maxFixed,
      isBlank: isBlank
    };
  };
  ScaleRawExtentInfo.prototype.modifyDataMinMax = function (minMaxName, val) {
    if (false) {}
    this[DATA_MIN_MAX_ATTR[minMaxName]] = val;
  };
  ScaleRawExtentInfo.prototype.setDeterminedMinMax = function (minMaxName, val) {
    var attr = DETERMINED_MIN_MAX_ATTR[minMaxName];
    if (false) {}
    this[attr] = val;
  };
  ScaleRawExtentInfo.prototype.freeze = function () {
    // @ts-ignore
    this.frozen = true;
  };
  return ScaleRawExtentInfo;
}();

var DETERMINED_MIN_MAX_ATTR = {
  min: '_determinedMin',
  max: '_determinedMax'
};
var DATA_MIN_MAX_ATTR = {
  min: '_dataMin',
  max: '_dataMax'
};
/**
 * Get scale min max and related info only depends on model settings.
 * This method can be called after coordinate system created.
 * For example, in data processing stage.
 *
 * Scale extent info probably be required multiple times during a workflow.
 * For example:
 * (1) `dataZoom` depends it to get the axis extent in "100%" state.
 * (2) `processor/extentCalculator` depends it to make sure whether axis extent is specified.
 * (3) `coordSys.update` use it to finally decide the scale extent.
 * But the callback of `min`/`max` should not be called multiple times.
 * The code below should not be implemented repeatedly either.
 * So we cache the result in the scale instance, which will be recreated at the beginning
 * of the workflow (because `scale` instance will be recreated each round of the workflow).
 */
function ensureScaleRawExtentInfo(scale, model,
// Usually: data extent from all series on this axis.
originalExtent) {
  // Do not permit to recreate.
  var rawExtentInfo = scale.rawExtentInfo;
  if (rawExtentInfo) {
    return rawExtentInfo;
  }
  rawExtentInfo = new ScaleRawExtentInfo(scale, model, originalExtent);
  // @ts-ignore
  scale.rawExtentInfo = rawExtentInfo;
  return rawExtentInfo;
}
function parseAxisModelMinMax(scale, minMax) {
  return minMax == null ? null : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.eqNaN)(minMax) ? NaN : scale.parse(minMax);
}

}),
51926: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14373);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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




var SingleAxisModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SingleAxisModel, _super);
  function SingleAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SingleAxisModel.type;
    return _this;
  }
  SingleAxisModel.prototype.getCoordSysModel = function () {
    return this;
  };
  SingleAxisModel.type = 'singleAxis';
  SingleAxisModel.layoutMode = 'box';
  SingleAxisModel.defaultOption = {
    left: '5%',
    top: '5%',
    right: '5%',
    bottom: '5%',
    type: 'value',
    position: 'bottom',
    orient: 'horizontal',
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        type: 'solid'
      }
    },
    // Single coordinate system and single axis is the,
    // which is used as the parent tooltip model.
    // same model, so we set default tooltip show as true.
    tooltip: {
      show: true
    },
    axisTick: {
      show: true,
      length: 6,
      lineStyle: {
        width: 1
      }
    },
    axisLabel: {
      show: true,
      interval: 'auto'
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        opacity: 0.2
      }
    },
    jitter: 0,
    jitterOverlap: true,
    jitterMargin: 2
  };
  return SingleAxisModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.mixin)(SingleAxisModel, _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_3__.AxisModelCommonMixin.prototype);
/* ESM default export */ __webpack_exports__["default"] = (SingleAxisModel);

}),
78410: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return singlePrepareCustom; }
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

function dataToCoordSize(dataSize, dataItem) {
  // dataItem is necessary in log axis.
  var axis = this.getAxis();
  var val = dataItem instanceof Array ? dataItem[0] : dataItem;
  var halfSize = (dataSize instanceof Array ? dataSize[0] : dataSize) / 2;
  return axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
}
function singlePrepareCustom(coordSys) {
  var rect = coordSys.getRect();
  return {
    coordSys: {
      type: 'singleAxis',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    api: {
      coord: function (val) {
        // do not provide "out" param
        return coordSys.dataToPoint(val);
      },
      size: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind)(dataToCoordSize, coordSys)
    }
  };
}

}),
4049: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  layout: function() { return layout; }
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

function layout(axisModel, opt) {
  opt = opt || {};
  var single = axisModel.coordinateSystem;
  var axis = axisModel.axis;
  var layout = {};
  var axisPosition = axis.position;
  var orient = axis.orient;
  var rect = single.getRect();
  var rectBound = [rect.x, rect.x + rect.width, rect.y, rect.y + rect.height];
  var positionMap = {
    horizontal: {
      top: rectBound[2],
      bottom: rectBound[3]
    },
    vertical: {
      left: rectBound[0],
      right: rectBound[1]
    }
  };
  layout.position = [orient === 'vertical' ? positionMap.vertical[axisPosition] : rectBound[0], orient === 'horizontal' ? positionMap.horizontal[axisPosition] : rectBound[3]];
  var r = {
    horizontal: 0,
    vertical: 1
  };
  layout.rotation = Math.PI / 2 * r[orient];
  var directionMap = {
    top: -1,
    bottom: 1,
    right: 1,
    left: -1
  };
  layout.labelDirection = layout.tickDirection = layout.nameDirection = directionMap[axisPosition];
  if (axisModel.get(['axisTick', 'inside'])) {
    layout.tickDirection = -layout.tickDirection;
  }
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve(opt.labelInside, axisModel.get(['axisLabel', 'inside']))) {
    layout.labelDirection = -layout.labelDirection;
  }
  var labelRotate = axisModel.get(['axisLabel', 'rotate']);
  layout.labelRotate = axisPosition === 'top' ? -labelRotate : labelRotate;
  layout.z2 = 1;
  return layout;
}

}),
17674: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ singleCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(59562);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/SingleAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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


var SingleAxis_SingleAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SingleAxis, _super);
  function SingleAxis(dim, scale, coordExtent, axisType, position) {
    var _this = _super.call(this, dim, scale, coordExtent) || this;
    _this.type = axisType || 'value';
    _this.position = position || 'bottom';
    return _this;
  }
  /**
   * Judge the orient of the axis.
   */
  SingleAxis.prototype.isHorizontal = function () {
    var position = this.position;
    return position === 'top' || position === 'bottom';
  };
  SingleAxis.prototype.pointToData = function (point, clamp) {
    return this.coordinateSystem.pointToData(point)[0];
  };
  return SingleAxis;
}(Axis["default"]);
/* ESM default export */ var single_SingleAxis = (SingleAxis_SingleAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(5527);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/Single.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Single coordinates system.
 */




var singleDimensions = ['single'];
/**
 * Create a single coordinates system.
 */
var Single_Single = /** @class */function () {
  function Single(axisModel, ecModel, api) {
    this.type = 'single';
    this.dimension = 'single';
    /**
     * Add it just for draw tooltip.
     */
    this.dimensions = singleDimensions;
    this.axisPointerEnabled = true;
    this.model = axisModel;
    this._init(axisModel, ecModel, api);
  }
  /**
   * Initialize single coordinate system.
   */
  Single.prototype._init = function (axisModel, ecModel, api) {
    var dim = this.dimension;
    var axis = new single_SingleAxis(dim, axisHelper.createScaleByModel(axisModel), [0, 0], axisModel.get('type'), axisModel.get('position'));
    var isCategory = axis.type === 'category';
    axis.onBand = isCategory && axisModel.get('boundaryGap');
    axis.inverse = axisModel.get('inverse');
    axis.orient = axisModel.get('orient');
    axisModel.axis = axis;
    axis.model = axisModel;
    axis.coordinateSystem = this;
    this._axis = axis;
  };
  /**
   * Update axis scale after data processed
   */
  Single.prototype.update = function (ecModel, api) {
    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.coordinateSystem === this) {
        var data_1 = seriesModel.getData();
        (0,util.each)(data_1.mapDimensionsAll(this.dimension), function (dim) {
          this._axis.scale.unionExtentFromData(data_1, dim);
        }, this);
        axisHelper.niceScaleExtent(this._axis.scale, this._axis.model);
      }
    }, this);
  };
  /**
   * Resize the single coordinate system.
   */
  Single.prototype.resize = function (axisModel, api) {
    var refContainer = (0,layout.createBoxLayoutReference)(axisModel, api).refContainer;
    this._rect = (0,layout.getLayoutRect)(axisModel.getBoxLayoutParams(), refContainer);
    this._adjustAxis();
  };
  Single.prototype.getRect = function () {
    return this._rect;
  };
  Single.prototype._adjustAxis = function () {
    var rect = this._rect;
    var axis = this._axis;
    var isHorizontal = axis.isHorizontal();
    var extent = isHorizontal ? [0, rect.width] : [0, rect.height];
    var idx = axis.inverse ? 1 : 0;
    axis.setExtent(extent[idx], extent[1 - idx]);
    this._updateAxisTransform(axis, isHorizontal ? rect.x : rect.y);
  };
  Single.prototype._updateAxisTransform = function (axis, coordBase) {
    var axisExtent = axis.getExtent();
    var extentSum = axisExtent[0] + axisExtent[1];
    var isHorizontal = axis.isHorizontal();
    axis.toGlobalCoord = isHorizontal ? function (coord) {
      return coord + coordBase;
    } : function (coord) {
      return extentSum - coord + coordBase;
    };
    axis.toLocalCoord = isHorizontal ? function (coord) {
      return coord - coordBase;
    } : function (coord) {
      return extentSum - coord + coordBase;
    };
  };
  /**
   * Get axis.
   */
  Single.prototype.getAxis = function () {
    return this._axis;
  };
  /**
   * Get axis, add it just for draw tooltip.
   */
  Single.prototype.getBaseAxis = function () {
    return this._axis;
  };
  Single.prototype.getAxes = function () {
    return [this._axis];
  };
  Single.prototype.getTooltipAxes = function () {
    return {
      baseAxes: [this.getAxis()],
      // Empty otherAxes
      otherAxes: []
    };
  };
  /**
   * If contain point.
   */
  Single.prototype.containPoint = function (point) {
    var rect = this.getRect();
    var axis = this.getAxis();
    var orient = axis.orient;
    if (orient === 'horizontal') {
      return axis.contain(axis.toLocalCoord(point[0])) && point[1] >= rect.y && point[1] <= rect.y + rect.height;
    } else {
      return axis.contain(axis.toLocalCoord(point[1])) && point[0] >= rect.y && point[0] <= rect.y + rect.height;
    }
  };
  Single.prototype.pointToData = function (point, reserved, out) {
    out = out || [];
    var axis = this.getAxis();
    out[0] = axis.coordToData(axis.toLocalCoord(point[axis.orient === 'horizontal' ? 0 : 1]));
    return out;
  };
  /**
   * Convert the series data to concrete point.
   * Can be [val] | val
   */
  Single.prototype.dataToPoint = function (val, reserved, out) {
    var axis = this.getAxis();
    var rect = this.getRect();
    out = out || [];
    var idx = axis.orient === 'horizontal' ? 0 : 1;
    if (val instanceof Array) {
      val = val[0];
    }
    out[idx] = axis.toGlobalCoord(axis.dataToCoord(+val));
    out[1 - idx] = idx === 0 ? rect.y + rect.height / 2 : rect.x + rect.width / 2;
    return out;
  };
  Single.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.dataToPoint(value) : null;
  };
  Single.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.pointToData(pixel) : null;
  };
  return Single;
}();
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  var singleModel = finder.singleAxisModel;
  return singleModel && singleModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
/* ESM default export */ var single_Single = (Single_Single);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/singleCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
 * Single coordinate system creator.
 */


/**
 * Create single coordinate system and inject it into seriesModel.
 */
function create(ecModel, api) {
  var singles = [];
  ecModel.eachComponent('singleAxis', function (axisModel, idx) {
    var single = new single_Single(axisModel, ecModel, api);
    single.name = 'single_' + idx;
    single.resize(axisModel, api);
    axisModel.coordinateSystem = single;
    singles.push(single);
  });
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === 'singleAxis') {
      var singleAxisModel = seriesModel.getReferringComponents('singleAxis', model.SINGLE_REFERRING).models[0];
      seriesModel.coordinateSystem = singleAxisModel && singleAxisModel.coordinateSystem;
    }
  });
  return singles;
}
var singleCreator_singleCreator = {
  create: create,
  dimensions: singleDimensions
};
/* ESM default export */ var singleCreator = (singleCreator_singleCreator);

}),
67053: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(creatorMap, function (creator, type) {
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(this._normalMasterList, function (coordSys) {
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
var coordSysUseMap = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
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
  var coordSysModel = injectTargetModel.getReferringComponents(coordSysType, _util_model_js__WEBPACK_IMPORTED_MODULE_1__.SINGLE_REFERRING).models[0];
  return coordSysModel && coordSysModel.coordinateSystem;
};
/* ESM default export */ __webpack_exports__["default"] = (CoordinateSystemManager);

}),
83524: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  setCanvasCreator: function() { return /* binding */ setCanvasCreator; },
  dependencies: function() { return /* binding */ dependencies; },
  PRIORITY: function() { return /* binding */ PRIORITY; },
  registerMap: function() { return /* binding */ echarts_registerMap; },
  version: function() { return /* binding */ version; },
  disConnect: function() { return /* binding */ disConnect; },
  getMap: function() { return /* binding */ echarts_getMap; },
  registerAction: function() { return /* binding */ registerAction; },
  registerLayout: function() { return /* binding */ registerLayout; },
  registerTheme: function() { return /* binding */ registerTheme; },
  registerPostInit: function() { return /* binding */ registerPostInit; },
  dispose: function() { return /* binding */ dispose; },
  init: function() { return /* binding */ init; },
  getCoordinateSystemDimensions: function() { return /* binding */ getCoordinateSystemDimensions; },
  registerTransform: function() { return /* binding */ registerTransform; },
  registerProcessor: function() { return /* binding */ registerProcessor; },
  registerCoordinateSystem: function() { return /* binding */ registerCoordinateSystem; },
  registerUpdateLifecycle: function() { return /* binding */ registerUpdateLifecycle; },
  registerPreprocessor: function() { return /* binding */ registerPreprocessor; },
  registerLoading: function() { return /* binding */ registerLoading; },
  getInstanceByDom: function() { return /* binding */ getInstanceByDom; },
  getInstanceById: function() { return /* binding */ getInstanceById; },
  disconnect: function() { return /* binding */ disconnect; },
  connect: function() { return /* binding */ connect; },
  registerCustomSeries: function() { return /* binding */ registerCustomSeries; },
  registerVisual: function() { return /* binding */ registerVisual; },
  registerLocale: function() { return /* reexport */ locale.registerLocale; },
  registerPostUpdate: function() { return /* binding */ registerPostUpdate; },
  dataTool: function() { return /* binding */ dataTool; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js
var zrender = __webpack_require__(67883);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(33013);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/timsort.js
var timsort = __webpack_require__(97374);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(79895);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Global.js + 1 modules
var Global = __webpack_require__(38523);
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
/* ESM default export */ var core_ExtensionAPI = (ExtensionAPI_ExtensionAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(67053);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/OptionManager.js
var OptionManager = __webpack_require__(77548);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/preprocessor/backwardCompat.js + 1 modules
var backwardCompat = __webpack_require__(83168);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataStack.js
var dataStack = __webpack_require__(71093);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(74586);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(64989);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(32417);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(68903);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(12262);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(62217);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(12212);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(5645);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(26069);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/style.js
var style = __webpack_require__(2604);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/loading/default.js
var loading_default = __webpack_require__(11456);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/task.js
var core_task = __webpack_require__(55919);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var util_component = __webpack_require__(86452);
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
/* ESM default export */ var core_Scheduler = (Scheduler_Scheduler);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/theme/dark.js
var dark = __webpack_require__(12486);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/clazz.js
var clazz = __webpack_require__(40738);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/ECEventProcessor.js
var ECEventProcessor = __webpack_require__(13366);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/symbol.js
var symbol = __webpack_require__(97230);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(54912);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(29692);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(12250);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/transform.js
var transform = __webpack_require__(38146);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/locale.js
var locale = __webpack_require__(8072);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(35111);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/decal.js
var decal = __webpack_require__(72269);
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
/* ESM default export */ var core_lifecycle = (lifecycle);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(98231);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/impl.js
var impl = __webpack_require__(80414);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/custom/customSeriesRegister.js
var customSeriesRegister = __webpack_require__(42059);
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
80414: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
8072: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SYSTEM_LANG: function() { return SYSTEM_LANG; },
  createLocaleObject: function() { return createLocaleObject; },
  getDefaultLocaleModel: function() { return getDefaultLocaleModel; },
  getLocaleModel: function() { return getLocaleModel; },
  registerLocale: function() { return registerLocale; }
});
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40064);
/* ESM import */var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33013);
/* ESM import */var _i18n_langEN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50411);
/* ESM import */var _i18n_langZH_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70535);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
var SYSTEM_LANG = !zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].domSupported ? DEFAULT_LOCALE : function () {
  var langStr = (/* eslint-disable-next-line */
  document.documentElement.lang || navigator.language || navigator.browserLanguage || DEFAULT_LOCALE).toUpperCase();
  return langStr.indexOf(LOCALE_ZH) > -1 ? LOCALE_ZH : DEFAULT_LOCALE;
}();
function registerLocale(locale, localeObj) {
  locale = locale.toUpperCase();
  localeModels[locale] = new _model_Model_js__WEBPACK_IMPORTED_MODULE_1__["default"](localeObj);
  localeStorage[locale] = localeObj;
}
// export function getLocale(locale: string) {
//     return localeStorage[locale];
// }
function createLocaleObject(locale) {
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(locale)) {
    var localeObj = localeStorage[locale.toUpperCase()] || {};
    if (locale === LOCALE_ZH || locale === LOCALE_EN) {
      return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(localeObj);
    } else {
      return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.merge)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(localeObj), (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(localeStorage[DEFAULT_LOCALE]), false);
    }
  } else {
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.merge)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(locale), (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(localeStorage[DEFAULT_LOCALE]), false);
  }
}
function getLocaleModel(lang) {
  return localeModels[lang];
}
function getDefaultLocaleModel() {
  return localeModels[DEFAULT_LOCALE];
}
// Default locale
registerLocale(LOCALE_EN, _i18n_langEN_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
registerLocale(LOCALE_ZH, _i18n_langZH_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

}),

}]);