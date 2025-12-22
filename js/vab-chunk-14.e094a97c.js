/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-22 11:00:38
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["7933"], {
76486: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DARK_LABEL_COLOR: function() { return DARK_LABEL_COLOR; },
  DARK_MODE_THRESHOLD: function() { return DARK_MODE_THRESHOLD; },
  LIGHTER_LABEL_COLOR: function() { return LIGHTER_LABEL_COLOR; },
  LIGHT_LABEL_COLOR: function() { return LIGHT_LABEL_COLOR; },
  debugMode: function() { return debugMode; },
  devicePixelRatio: function() { return devicePixelRatio; }
});
/* import */ var _core_env_js__rspack_import_0 = __webpack_require__(18311);

var dpr = 1;
if (_core_env_js__rspack_import_0["default"].hasGlobalWindow) {
    dpr = Math.max(window.devicePixelRatio
        || (window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI)
        || 1, 1);
}
var debugMode = 0;
var devicePixelRatio = dpr;
var DARK_MODE_THRESHOLD = 0.4;
var DARK_LABEL_COLOR = '#333';
var LIGHT_LABEL_COLOR = '#ccc';
var LIGHTER_LABEL_COLOR = '#eee';


}),
64495: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  containStroke: function() { return containStroke; }
});
function containStroke(x0, y0, x1, y1, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    var _a = 0;
    var _b = x0;
    if ((y > y0 + _l && y > y1 + _l)
        || (y < y0 - _l && y < y1 - _l)
        || (x > x0 + _l && x > x1 + _l)
        || (x < x0 - _l && x < x1 - _l)) {
        return false;
    }
    if (x0 !== x1) {
        _a = (y0 - y1) / (x0 - x1);
        _b = (x0 * y1 - x1 * y0) / (x0 - x1);
    }
    else {
        return Math.abs(x - x0) <= _l / 2;
    }
    var tmp = _a * x - y + _b;
    var _s = tmp * tmp / (_a * _a + 1);
    return _s <= _l / 2 * _l / 2;
}


}),
60339: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  contain: function() { return contain; }
});
/* import */ var _windingLine_js__rspack_import_0 = __webpack_require__(13861);

var EPSILON = 1e-8;
function isAroundEqual(a, b) {
    return Math.abs(a - b) < EPSILON;
}
function contain(points, x, y) {
    var w = 0;
    var p = points[0];
    if (!p) {
        return false;
    }
    for (var i = 1; i < points.length; i++) {
        var p2 = points[i];
        w += (0,_windingLine_js__rspack_import_0["default"])(p[0], p[1], p2[0], p2[1], x, y);
        p = p2;
    }
    var p0 = points[0];
    if (!isAroundEqual(p[0], p0[0]) || !isAroundEqual(p[1], p0[1])) {
        w += (0,_windingLine_js__rspack_import_0["default"])(p[0], p[1], p0[0], p0[1], x, y);
    }
    return w !== 0;
}


}),
95643: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  containStroke: function() { return containStroke; }
});
/* import */ var _core_curve_js__rspack_import_0 = __webpack_require__(50631);

function containStroke(x0, y0, x1, y1, x2, y2, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    if ((y > y0 + _l && y > y1 + _l && y > y2 + _l)
        || (y < y0 - _l && y < y1 - _l && y < y2 - _l)
        || (x > x0 + _l && x > x1 + _l && x > x2 + _l)
        || (x < x0 - _l && x < x1 - _l && x < x2 - _l)) {
        return false;
    }
    var d = (0,_core_curve_js__rspack_import_0.quadraticProjectPoint)(x0, y0, x1, y1, x2, y2, x, y, null);
    return d <= _l / 2;
}


}),
26066: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  adjustTextX: function() { return adjustTextX; },
  adjustTextY: function() { return adjustTextY; },
  calculateTextPosition: function() { return calculateTextPosition; },
  ensureFontMeasureInfo: function() { return ensureFontMeasureInfo; },
  getBoundingRect: function() { return getBoundingRect; },
  getLineHeight: function() { return getLineHeight; },
  getWidth: function() { return getWidth; },
  innerGetBoundingRect: function() { return innerGetBoundingRect; },
  measureCharWidth: function() { return measureCharWidth; },
  measureText: function() { return measureText; },
  measureWidth: function() { return measureWidth; },
  parsePercent: function() { return parsePercent; }
});
/* import */ var _core_BoundingRect_js__rspack_import_2 = __webpack_require__(7544);
/* import */ var _core_LRU_js__rspack_import_0 = __webpack_require__(74361);
/* import */ var _core_platform_js__rspack_import_1 = __webpack_require__(70145);



function getWidth(text, font) {
    return measureWidth(ensureFontMeasureInfo(font), text);
}
function ensureFontMeasureInfo(font) {
    if (!_fontMeasureInfoCache) {
        _fontMeasureInfoCache = new _core_LRU_js__rspack_import_0["default"](100);
    }
    font = font || _core_platform_js__rspack_import_1.DEFAULT_FONT;
    var measureInfo = _fontMeasureInfoCache.get(font);
    if (!measureInfo) {
        measureInfo = {
            font: font,
            strWidthCache: new _core_LRU_js__rspack_import_0["default"](500),
            asciiWidthMap: null,
            asciiWidthMapTried: false,
            stWideCharWidth: _core_platform_js__rspack_import_1.platformApi.measureText('国', font).width,
            asciiCharWidth: _core_platform_js__rspack_import_1.platformApi.measureText('a', font).width
        };
        _fontMeasureInfoCache.put(font, measureInfo);
    }
    return measureInfo;
}
var _fontMeasureInfoCache;
function tryCreateASCIIWidthMap(font) {
    if (_getASCIIWidthMapLongCount >= GET_ASCII_WIDTH_LONG_COUNT_MAX) {
        return;
    }
    font = font || _core_platform_js__rspack_import_1.DEFAULT_FONT;
    var asciiWidthMap = [];
    var start = +(new Date());
    for (var code = 0; code <= 127; code++) {
        asciiWidthMap[code] = _core_platform_js__rspack_import_1.platformApi.measureText(String.fromCharCode(code), font).width;
    }
    var cost = +(new Date()) - start;
    if (cost > 16) {
        _getASCIIWidthMapLongCount = GET_ASCII_WIDTH_LONG_COUNT_MAX;
    }
    else if (cost > 2) {
        _getASCIIWidthMapLongCount++;
    }
    return asciiWidthMap;
}
var _getASCIIWidthMapLongCount = 0;
var GET_ASCII_WIDTH_LONG_COUNT_MAX = 5;
function measureCharWidth(fontMeasureInfo, charCode) {
    if (!fontMeasureInfo.asciiWidthMapTried) {
        fontMeasureInfo.asciiWidthMap = tryCreateASCIIWidthMap(fontMeasureInfo.font);
        fontMeasureInfo.asciiWidthMapTried = true;
    }
    return (0 <= charCode && charCode <= 127)
        ? (fontMeasureInfo.asciiWidthMap != null
            ? fontMeasureInfo.asciiWidthMap[charCode]
            : fontMeasureInfo.asciiCharWidth)
        : fontMeasureInfo.stWideCharWidth;
}
function measureWidth(fontMeasureInfo, text) {
    var strWidthCache = fontMeasureInfo.strWidthCache;
    var width = strWidthCache.get(text);
    if (width == null) {
        width = _core_platform_js__rspack_import_1.platformApi.measureText(text, fontMeasureInfo.font).width;
        strWidthCache.put(text, width);
    }
    return width;
}
function innerGetBoundingRect(text, font, textAlign, textBaseline) {
    var width = measureWidth(ensureFontMeasureInfo(font), text);
    var height = getLineHeight(font);
    var x = adjustTextX(0, width, textAlign);
    var y = adjustTextY(0, height, textBaseline);
    var rect = new _core_BoundingRect_js__rspack_import_2["default"](x, y, width, height);
    return rect;
}
function getBoundingRect(text, font, textAlign, textBaseline) {
    var textLines = ((text || '') + '').split('\n');
    var len = textLines.length;
    if (len === 1) {
        return innerGetBoundingRect(textLines[0], font, textAlign, textBaseline);
    }
    else {
        var uniondRect = new _core_BoundingRect_js__rspack_import_2["default"](0, 0, 0, 0);
        for (var i = 0; i < textLines.length; i++) {
            var rect = innerGetBoundingRect(textLines[i], font, textAlign, textBaseline);
            i === 0 ? uniondRect.copy(rect) : uniondRect.union(rect);
        }
        return uniondRect;
    }
}
function adjustTextX(x, width, textAlign, inverse) {
    if (textAlign === 'right') {
        !inverse ? (x -= width) : (x += width);
    }
    else if (textAlign === 'center') {
        !inverse ? (x -= width / 2) : (x += width / 2);
    }
    return x;
}
function adjustTextY(y, height, verticalAlign, inverse) {
    if (verticalAlign === 'middle') {
        !inverse ? (y -= height / 2) : (y += height / 2);
    }
    else if (verticalAlign === 'bottom') {
        !inverse ? (y -= height) : (y += height);
    }
    return y;
}
function getLineHeight(font) {
    return ensureFontMeasureInfo(font).stWideCharWidth;
}
function measureText(text, font) {
    return _core_platform_js__rspack_import_1.platformApi.measureText(text, font);
}
function parsePercent(value, maxValue) {
    if (typeof value === 'string') {
        if (value.lastIndexOf('%') >= 0) {
            return parseFloat(value) / 100 * maxValue;
        }
        return parseFloat(value);
    }
    return value;
}
function calculateTextPosition(out, opts, rect) {
    var textPosition = opts.position || 'inside';
    var distance = opts.distance != null ? opts.distance : 5;
    var height = rect.height;
    var width = rect.width;
    var halfHeight = height / 2;
    var x = rect.x;
    var y = rect.y;
    var textAlign = 'left';
    var textVerticalAlign = 'top';
    if (textPosition instanceof Array) {
        x += parsePercent(textPosition[0], rect.width);
        y += parsePercent(textPosition[1], rect.height);
        textAlign = null;
        textVerticalAlign = null;
    }
    else {
        switch (textPosition) {
            case 'left':
                x -= distance;
                y += halfHeight;
                textAlign = 'right';
                textVerticalAlign = 'middle';
                break;
            case 'right':
                x += distance + width;
                y += halfHeight;
                textVerticalAlign = 'middle';
                break;
            case 'top':
                x += width / 2;
                y -= distance;
                textAlign = 'center';
                textVerticalAlign = 'bottom';
                break;
            case 'bottom':
                x += width / 2;
                y += height + distance;
                textAlign = 'center';
                break;
            case 'inside':
                x += width / 2;
                y += halfHeight;
                textAlign = 'center';
                textVerticalAlign = 'middle';
                break;
            case 'insideLeft':
                x += distance;
                y += halfHeight;
                textVerticalAlign = 'middle';
                break;
            case 'insideRight':
                x += width - distance;
                y += halfHeight;
                textAlign = 'right';
                textVerticalAlign = 'middle';
                break;
            case 'insideTop':
                x += width / 2;
                y += distance;
                textAlign = 'center';
                break;
            case 'insideBottom':
                x += width / 2;
                y += height - distance;
                textAlign = 'center';
                textVerticalAlign = 'bottom';
                break;
            case 'insideTopLeft':
                x += distance;
                y += distance;
                break;
            case 'insideTopRight':
                x += width - distance;
                y += distance;
                textAlign = 'right';
                break;
            case 'insideBottomLeft':
                x += distance;
                y += height - distance;
                textVerticalAlign = 'bottom';
                break;
            case 'insideBottomRight':
                x += width - distance;
                y += height - distance;
                textAlign = 'right';
                textVerticalAlign = 'bottom';
                break;
        }
    }
    out = out || {};
    out.x = x;
    out.y = y;
    out.align = textAlign;
    out.verticalAlign = textVerticalAlign;
    return out;
}


}),
28977: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeRadian: function() { return normalizeRadian; }
});
var PI2 = Math.PI * 2;
function normalizeRadian(angle) {
    angle %= PI2;
    if (angle < 0) {
        angle += PI2;
    }
    return angle;
}


}),
13861: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return windingLine; }
});
function windingLine(x0, y0, x1, y1, x, y) {
    if ((y > y0 && y > y1) || (y < y0 && y < y1)) {
        return 0;
    }
    if (y1 === y0) {
        return 0;
    }
    var t = (y - y0) / (y1 - y0);
    var dir = y1 < y0 ? 1 : -1;
    if (t === 1 || t === 0) {
        dir = y1 < y0 ? 0.5 : -0.5;
    }
    var x_ = t * (x1 - x0) + x0;
    return x_ === x ? Infinity : x_ > x ? dir : 0;
}


}),
7544: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createIntersectContext: function() { return createIntersectContext; }
});
/* import */ var _matrix_js__rspack_import_1 = __webpack_require__(46239);
/* import */ var _Point_js__rspack_import_0 = __webpack_require__(97270);


var mathMin = Math.min;
var mathMax = Math.max;
var mathAbs = Math.abs;
var XY = ['x', 'y'];
var WH = ['width', 'height'];
var lt = new _Point_js__rspack_import_0["default"]();
var rb = new _Point_js__rspack_import_0["default"]();
var lb = new _Point_js__rspack_import_0["default"]();
var rt = new _Point_js__rspack_import_0["default"]();
var _intersectCtx = createIntersectContext();
var _minTv = _intersectCtx.minTv;
var _maxTv = _intersectCtx.maxTv;
var _lenMinMax = [0, 0];
var BoundingRect = (function () {
    function BoundingRect(x, y, width, height) {
        BoundingRect.set(this, x, y, width, height);
    }
    BoundingRect.set = function (target, x, y, width, height) {
        if (width < 0) {
            x = x + width;
            width = -width;
        }
        if (height < 0) {
            y = y + height;
            height = -height;
        }
        target.x = x;
        target.y = y;
        target.width = width;
        target.height = height;
        return target;
    };
    BoundingRect.prototype.union = function (other) {
        var x = mathMin(other.x, this.x);
        var y = mathMin(other.y, this.y);
        if (isFinite(this.x) && isFinite(this.width)) {
            this.width = mathMax(other.x + other.width, this.x + this.width) - x;
        }
        else {
            this.width = other.width;
        }
        if (isFinite(this.y) && isFinite(this.height)) {
            this.height = mathMax(other.y + other.height, this.y + this.height) - y;
        }
        else {
            this.height = other.height;
        }
        this.x = x;
        this.y = y;
    };
    BoundingRect.prototype.applyTransform = function (m) {
        BoundingRect.applyTransform(this, this, m);
    };
    BoundingRect.prototype.calculateTransform = function (b) {
        var a = this;
        var sx = b.width / a.width;
        var sy = b.height / a.height;
        var m = _matrix_js__rspack_import_1.create();
        _matrix_js__rspack_import_1.translate(m, m, [-a.x, -a.y]);
        _matrix_js__rspack_import_1.scale(m, m, [sx, sy]);
        _matrix_js__rspack_import_1.translate(m, m, [b.x, b.y]);
        return m;
    };
    BoundingRect.prototype.intersect = function (b, mtv, opt) {
        return BoundingRect.intersect(this, b, mtv, opt);
    };
    BoundingRect.intersect = function (a, b, mtv, opt) {
        if (mtv) {
            _Point_js__rspack_import_0["default"].set(mtv, 0, 0);
        }
        var outIntersectRect = opt && opt.outIntersectRect || null;
        var clamp = opt && opt.clamp;
        if (outIntersectRect) {
            outIntersectRect.x = outIntersectRect.y = outIntersectRect.width = outIntersectRect.height = NaN;
        }
        if (!a || !b) {
            return false;
        }
        if (!(a instanceof BoundingRect)) {
            a = BoundingRect.set(_tmpIntersectA, a.x, a.y, a.width, a.height);
        }
        if (!(b instanceof BoundingRect)) {
            b = BoundingRect.set(_tmpIntersectB, b.x, b.y, b.width, b.height);
        }
        var useMTV = !!mtv;
        _intersectCtx.reset(opt, useMTV);
        var touchThreshold = _intersectCtx.touchThreshold;
        var ax0 = a.x + touchThreshold;
        var ax1 = a.x + a.width - touchThreshold;
        var ay0 = a.y + touchThreshold;
        var ay1 = a.y + a.height - touchThreshold;
        var bx0 = b.x + touchThreshold;
        var bx1 = b.x + b.width - touchThreshold;
        var by0 = b.y + touchThreshold;
        var by1 = b.y + b.height - touchThreshold;
        if (ax0 > ax1 || ay0 > ay1 || bx0 > bx1 || by0 > by1) {
            return false;
        }
        var overlap = !(ax1 < bx0 || bx1 < ax0 || ay1 < by0 || by1 < ay0);
        if (useMTV || outIntersectRect) {
            _lenMinMax[0] = Infinity;
            _lenMinMax[1] = 0;
            intersectOneDim(ax0, ax1, bx0, bx1, 0, useMTV, outIntersectRect, clamp);
            intersectOneDim(ay0, ay1, by0, by1, 1, useMTV, outIntersectRect, clamp);
            if (useMTV) {
                _Point_js__rspack_import_0["default"].copy(mtv, overlap
                    ? (_intersectCtx.useDir ? _intersectCtx.dirMinTv : _minTv)
                    : _maxTv);
            }
        }
        return overlap;
    };
    BoundingRect.contain = function (rect, x, y) {
        return x >= rect.x
            && x <= (rect.x + rect.width)
            && y >= rect.y
            && y <= (rect.y + rect.height);
    };
    BoundingRect.prototype.contain = function (x, y) {
        return BoundingRect.contain(this, x, y);
    };
    BoundingRect.prototype.clone = function () {
        return new BoundingRect(this.x, this.y, this.width, this.height);
    };
    BoundingRect.prototype.copy = function (other) {
        BoundingRect.copy(this, other);
    };
    BoundingRect.prototype.plain = function () {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    };
    BoundingRect.prototype.isFinite = function () {
        return isFinite(this.x)
            && isFinite(this.y)
            && isFinite(this.width)
            && isFinite(this.height);
    };
    BoundingRect.prototype.isZero = function () {
        return this.width === 0 || this.height === 0;
    };
    BoundingRect.create = function (rect) {
        return new BoundingRect(rect.x, rect.y, rect.width, rect.height);
    };
    BoundingRect.copy = function (target, source) {
        target.x = source.x;
        target.y = source.y;
        target.width = source.width;
        target.height = source.height;
        return target;
    };
    BoundingRect.applyTransform = function (target, source, m) {
        if (!m) {
            if (target !== source) {
                BoundingRect.copy(target, source);
            }
            return;
        }
        if (m[1] < 1e-5 && m[1] > -1e-5 && m[2] < 1e-5 && m[2] > -1e-5) {
            var sx = m[0];
            var sy = m[3];
            var tx = m[4];
            var ty = m[5];
            target.x = source.x * sx + tx;
            target.y = source.y * sy + ty;
            target.width = source.width * sx;
            target.height = source.height * sy;
            if (target.width < 0) {
                target.x += target.width;
                target.width = -target.width;
            }
            if (target.height < 0) {
                target.y += target.height;
                target.height = -target.height;
            }
            return;
        }
        lt.x = lb.x = source.x;
        lt.y = rt.y = source.y;
        rb.x = rt.x = source.x + source.width;
        rb.y = lb.y = source.y + source.height;
        lt.transform(m);
        rt.transform(m);
        rb.transform(m);
        lb.transform(m);
        target.x = mathMin(lt.x, rb.x, lb.x, rt.x);
        target.y = mathMin(lt.y, rb.y, lb.y, rt.y);
        var maxX = mathMax(lt.x, rb.x, lb.x, rt.x);
        var maxY = mathMax(lt.y, rb.y, lb.y, rt.y);
        target.width = maxX - target.x;
        target.height = maxY - target.y;
    };
    return BoundingRect;
}());
var _tmpIntersectA = new BoundingRect(0, 0, 0, 0);
var _tmpIntersectB = new BoundingRect(0, 0, 0, 0);
function intersectOneDim(a0, a1, b0, b1, updateDimIdx, useMTV, outIntersectRect, clamp) {
    var d0 = mathAbs(a1 - b0);
    var d1 = mathAbs(b1 - a0);
    var d01min = mathMin(d0, d1);
    var updateDim = XY[updateDimIdx];
    var zeroDim = XY[1 - updateDimIdx];
    var wh = WH[updateDimIdx];
    if (a1 < b0 || b1 < a0) {
        if (d0 < d1) {
            if (useMTV) {
                _maxTv[updateDim] = -d0;
            }
            if (clamp) {
                outIntersectRect[updateDim] = a1;
                outIntersectRect[wh] = 0;
            }
        }
        else {
            if (useMTV) {
                _maxTv[updateDim] = d1;
            }
            if (clamp) {
                outIntersectRect[updateDim] = a0;
                outIntersectRect[wh] = 0;
            }
        }
    }
    else {
        if (outIntersectRect) {
            outIntersectRect[updateDim] = mathMax(a0, b0);
            outIntersectRect[wh] = mathMin(a1, b1) - outIntersectRect[updateDim];
        }
        if (useMTV) {
            if (d01min < _lenMinMax[0] || _intersectCtx.useDir) {
                _lenMinMax[0] = mathMin(d01min, _lenMinMax[0]);
                if (d0 < d1 || !_intersectCtx.bidirectional) {
                    _minTv[updateDim] = d0;
                    _minTv[zeroDim] = 0;
                    if (_intersectCtx.useDir) {
                        _intersectCtx.calcDirMTV();
                    }
                }
                if (d0 >= d1 || !_intersectCtx.bidirectional) {
                    _minTv[updateDim] = -d1;
                    _minTv[zeroDim] = 0;
                    if (_intersectCtx.useDir) {
                        _intersectCtx.calcDirMTV();
                    }
                }
            }
        }
    }
}
function createIntersectContext() {
    var _direction = 0;
    var _dirCheckVec = new _Point_js__rspack_import_0["default"]();
    var _dirTmp = new _Point_js__rspack_import_0["default"]();
    var _ctx = {
        minTv: new _Point_js__rspack_import_0["default"](),
        maxTv: new _Point_js__rspack_import_0["default"](),
        useDir: false,
        dirMinTv: new _Point_js__rspack_import_0["default"](),
        touchThreshold: 0,
        bidirectional: true,
        negativeSize: false,
        reset: function (opt, useMTV) {
            _ctx.touchThreshold = 0;
            if (opt && opt.touchThreshold != null) {
                _ctx.touchThreshold = mathMax(0, opt.touchThreshold);
            }
            _ctx.negativeSize = false;
            if (!useMTV) {
                return;
            }
            _ctx.minTv.set(Infinity, Infinity);
            _ctx.maxTv.set(0, 0);
            _ctx.useDir = false;
            if (opt && opt.direction != null) {
                _ctx.useDir = true;
                _ctx.dirMinTv.copy(_ctx.minTv);
                _dirTmp.copy(_ctx.minTv);
                _direction = opt.direction;
                _ctx.bidirectional = opt.bidirectional == null || !!opt.bidirectional;
                if (!_ctx.bidirectional) {
                    _dirCheckVec.set(Math.cos(_direction), Math.sin(_direction));
                }
            }
        },
        calcDirMTV: function () {
            var minTv = _ctx.minTv;
            var dirMinTv = _ctx.dirMinTv;
            var squareMag = minTv.y * minTv.y + minTv.x * minTv.x;
            var dirSin = Math.sin(_direction);
            var dirCos = Math.cos(_direction);
            var dotProd = dirSin * minTv.y + dirCos * minTv.x;
            if (nearZero(dotProd)) {
                if (nearZero(minTv.x) && nearZero(minTv.y)) {
                    dirMinTv.set(0, 0);
                }
                return;
            }
            _dirTmp.x = squareMag * dirCos / dotProd;
            _dirTmp.y = squareMag * dirSin / dotProd;
            if (nearZero(_dirTmp.x) && nearZero(_dirTmp.y)) {
                dirMinTv.set(0, 0);
                return;
            }
            if ((_ctx.bidirectional
                || _dirCheckVec.dot(_dirTmp) > 0)
                && _dirTmp.len() < dirMinTv.len()) {
                dirMinTv.copy(_dirTmp);
            }
        }
    };
    function nearZero(val) {
        return mathAbs(val) < 1e-10;
    }
    return _ctx;
}
/* export default */ __webpack_exports__["default"] = (BoundingRect);


}),
31969: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Eventful = (function () {
    function Eventful(eventProcessors) {
        if (eventProcessors) {
            this._$eventProcessor = eventProcessors;
        }
    }
    Eventful.prototype.on = function (event, query, handler, context) {
        if (!this._$handlers) {
            this._$handlers = {};
        }
        var _h = this._$handlers;
        if (typeof query === 'function') {
            context = handler;
            handler = query;
            query = null;
        }
        if (!handler || !event) {
            return this;
        }
        var eventProcessor = this._$eventProcessor;
        if (query != null && eventProcessor && eventProcessor.normalizeQuery) {
            query = eventProcessor.normalizeQuery(query);
        }
        if (!_h[event]) {
            _h[event] = [];
        }
        for (var i = 0; i < _h[event].length; i++) {
            if (_h[event][i].h === handler) {
                return this;
            }
        }
        var wrap = {
            h: handler,
            query: query,
            ctx: (context || this),
            callAtLast: handler.zrEventfulCallAtLast
        };
        var lastIndex = _h[event].length - 1;
        var lastWrap = _h[event][lastIndex];
        (lastWrap && lastWrap.callAtLast)
            ? _h[event].splice(lastIndex, 0, wrap)
            : _h[event].push(wrap);
        return this;
    };
    Eventful.prototype.isSilent = function (eventName) {
        var _h = this._$handlers;
        return !_h || !_h[eventName] || !_h[eventName].length;
    };
    Eventful.prototype.off = function (eventType, handler) {
        var _h = this._$handlers;
        if (!_h) {
            return this;
        }
        if (!eventType) {
            this._$handlers = {};
            return this;
        }
        if (handler) {
            if (_h[eventType]) {
                var newList = [];
                for (var i = 0, l = _h[eventType].length; i < l; i++) {
                    if (_h[eventType][i].h !== handler) {
                        newList.push(_h[eventType][i]);
                    }
                }
                _h[eventType] = newList;
            }
            if (_h[eventType] && _h[eventType].length === 0) {
                delete _h[eventType];
            }
        }
        else {
            delete _h[eventType];
        }
        return this;
    };
    Eventful.prototype.trigger = function (eventType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._$handlers) {
            return this;
        }
        var _h = this._$handlers[eventType];
        var eventProcessor = this._$eventProcessor;
        if (_h) {
            var argLen = args.length;
            var len = _h.length;
            for (var i = 0; i < len; i++) {
                var hItem = _h[i];
                if (eventProcessor
                    && eventProcessor.filter
                    && hItem.query != null
                    && !eventProcessor.filter(eventType, hItem.query)) {
                    continue;
                }
                switch (argLen) {
                    case 0:
                        hItem.h.call(hItem.ctx);
                        break;
                    case 1:
                        hItem.h.call(hItem.ctx, args[0]);
                        break;
                    case 2:
                        hItem.h.call(hItem.ctx, args[0], args[1]);
                        break;
                    default:
                        hItem.h.apply(hItem.ctx, args);
                        break;
                }
            }
        }
        eventProcessor && eventProcessor.afterTrigger
            && eventProcessor.afterTrigger(eventType);
        return this;
    };
    Eventful.prototype.triggerWithContext = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._$handlers) {
            return this;
        }
        var _h = this._$handlers[type];
        var eventProcessor = this._$eventProcessor;
        if (_h) {
            var argLen = args.length;
            var ctx = args[argLen - 1];
            var len = _h.length;
            for (var i = 0; i < len; i++) {
                var hItem = _h[i];
                if (eventProcessor
                    && eventProcessor.filter
                    && hItem.query != null
                    && !eventProcessor.filter(type, hItem.query)) {
                    continue;
                }
                switch (argLen) {
                    case 0:
                        hItem.h.call(ctx);
                        break;
                    case 1:
                        hItem.h.call(ctx, args[0]);
                        break;
                    case 2:
                        hItem.h.call(ctx, args[0], args[1]);
                        break;
                    default:
                        hItem.h.apply(ctx, args.slice(1, argLen - 1));
                        break;
                }
            }
        }
        eventProcessor && eventProcessor.afterTrigger
            && eventProcessor.afterTrigger(type);
        return this;
    };
    return Eventful;
}());
/* export default */ __webpack_exports__["default"] = (Eventful);


}),
20161: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GestureMgr: function() { return GestureMgr; }
});
/* import */ var _event_js__rspack_import_0 = __webpack_require__(31720);

var GestureMgr = (function () {
    function GestureMgr() {
        this._track = [];
    }
    GestureMgr.prototype.recognize = function (event, target, root) {
        this._doTrack(event, target, root);
        return this._recognize(event);
    };
    GestureMgr.prototype.clear = function () {
        this._track.length = 0;
        return this;
    };
    GestureMgr.prototype._doTrack = function (event, target, root) {
        var touches = event.touches;
        if (!touches) {
            return;
        }
        var trackItem = {
            points: [],
            touches: [],
            target: target,
            event: event
        };
        for (var i = 0, len = touches.length; i < len; i++) {
            var touch = touches[i];
            var pos = _event_js__rspack_import_0.clientToLocal(root, touch, {});
            trackItem.points.push([pos.zrX, pos.zrY]);
            trackItem.touches.push(touch);
        }
        this._track.push(trackItem);
    };
    GestureMgr.prototype._recognize = function (event) {
        for (var eventName in recognizers) {
            if (recognizers.hasOwnProperty(eventName)) {
                var gestureInfo = recognizers[eventName](this._track, event);
                if (gestureInfo) {
                    return gestureInfo;
                }
            }
        }
    };
    return GestureMgr;
}());

function dist(pointPair) {
    var dx = pointPair[1][0] - pointPair[0][0];
    var dy = pointPair[1][1] - pointPair[0][1];
    return Math.sqrt(dx * dx + dy * dy);
}
function center(pointPair) {
    return [
        (pointPair[0][0] + pointPair[1][0]) / 2,
        (pointPair[0][1] + pointPair[1][1]) / 2
    ];
}
var recognizers = {
    pinch: function (tracks, event) {
        var trackLen = tracks.length;
        if (!trackLen) {
            return;
        }
        var pinchEnd = (tracks[trackLen - 1] || {}).points;
        var pinchPre = (tracks[trackLen - 2] || {}).points || pinchEnd;
        if (pinchPre
            && pinchPre.length > 1
            && pinchEnd
            && pinchEnd.length > 1) {
            var pinchScale = dist(pinchEnd) / dist(pinchPre);
            !isFinite(pinchScale) && (pinchScale = 1);
            event.pinchScale = pinchScale;
            var pinchCenter = center(pinchEnd);
            event.pinchX = pinchCenter[0];
            event.pinchY = pinchCenter[1];
            return {
                type: 'pinch',
                target: tracks[0].target,
                event: event
            };
        }
    }
};


}),
74361: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Entry: function() { return Entry; },
  LinkedList: function() { return LinkedList; }
});
var Entry = (function () {
    function Entry(val) {
        this.value = val;
    }
    return Entry;
}());

var LinkedList = (function () {
    function LinkedList() {
        this._len = 0;
    }
    LinkedList.prototype.insert = function (val) {
        var entry = new Entry(val);
        this.insertEntry(entry);
        return entry;
    };
    LinkedList.prototype.insertEntry = function (entry) {
        if (!this.head) {
            this.head = this.tail = entry;
        }
        else {
            this.tail.next = entry;
            entry.prev = this.tail;
            entry.next = null;
            this.tail = entry;
        }
        this._len++;
    };
    LinkedList.prototype.remove = function (entry) {
        var prev = entry.prev;
        var next = entry.next;
        if (prev) {
            prev.next = next;
        }
        else {
            this.head = next;
        }
        if (next) {
            next.prev = prev;
        }
        else {
            this.tail = prev;
        }
        entry.next = entry.prev = null;
        this._len--;
    };
    LinkedList.prototype.len = function () {
        return this._len;
    };
    LinkedList.prototype.clear = function () {
        this.head = this.tail = null;
        this._len = 0;
    };
    return LinkedList;
}());

var LRU = (function () {
    function LRU(maxSize) {
        this._list = new LinkedList();
        this._maxSize = 10;
        this._map = {};
        this._maxSize = maxSize;
    }
    LRU.prototype.put = function (key, value) {
        var list = this._list;
        var map = this._map;
        var removed = null;
        if (map[key] == null) {
            var len = list.len();
            var entry = this._lastRemovedEntry;
            if (len >= this._maxSize && len > 0) {
                var leastUsedEntry = list.head;
                list.remove(leastUsedEntry);
                delete map[leastUsedEntry.key];
                removed = leastUsedEntry.value;
                this._lastRemovedEntry = leastUsedEntry;
            }
            if (entry) {
                entry.value = value;
            }
            else {
                entry = new Entry(value);
            }
            entry.key = key;
            list.insertEntry(entry);
            map[key] = entry;
        }
        return removed;
    };
    LRU.prototype.get = function (key) {
        var entry = this._map[key];
        var list = this._list;
        if (entry != null) {
            if (entry !== list.tail) {
                list.remove(entry);
                list.insertEntry(entry);
            }
            return entry.value;
        }
    };
    LRU.prototype.clear = function () {
        this._list.clear();
        this._map = {};
    };
    LRU.prototype.len = function () {
        return this._list.len();
    };
    return LRU;
}());
/* export default */ __webpack_exports__["default"] = (LRU);


}),
84632: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _Point_js__rspack_import_1 = __webpack_require__(97270);
/* import */ var _BoundingRect_js__rspack_import_0 = __webpack_require__(7544);


var mathMin = Math.min;
var mathMax = Math.max;
var mathAbs = Math.abs;
var _extent = [0, 0];
var _extent2 = [0, 0];
var _intersectCtx = (0,_BoundingRect_js__rspack_import_0.createIntersectContext)();
var _minTv = _intersectCtx.minTv;
var _maxTv = _intersectCtx.maxTv;
var OrientedBoundingRect = (function () {
    function OrientedBoundingRect(rect, transform) {
        this._corners = [];
        this._axes = [];
        this._origin = [0, 0];
        for (var i = 0; i < 4; i++) {
            this._corners[i] = new _Point_js__rspack_import_1["default"]();
        }
        for (var i = 0; i < 2; i++) {
            this._axes[i] = new _Point_js__rspack_import_1["default"]();
        }
        if (rect) {
            this.fromBoundingRect(rect, transform);
        }
    }
    OrientedBoundingRect.prototype.fromBoundingRect = function (rect, transform) {
        var corners = this._corners;
        var axes = this._axes;
        var x = rect.x;
        var y = rect.y;
        var x2 = x + rect.width;
        var y2 = y + rect.height;
        corners[0].set(x, y);
        corners[1].set(x2, y);
        corners[2].set(x2, y2);
        corners[3].set(x, y2);
        if (transform) {
            for (var i = 0; i < 4; i++) {
                corners[i].transform(transform);
            }
        }
        _Point_js__rspack_import_1["default"].sub(axes[0], corners[1], corners[0]);
        _Point_js__rspack_import_1["default"].sub(axes[1], corners[3], corners[0]);
        axes[0].normalize();
        axes[1].normalize();
        for (var i = 0; i < 2; i++) {
            this._origin[i] = axes[i].dot(corners[0]);
        }
    };
    OrientedBoundingRect.prototype.intersect = function (other, mtv, opt) {
        var overlapped = true;
        var noMtv = !mtv;
        if (mtv) {
            _Point_js__rspack_import_1["default"].set(mtv, 0, 0);
        }
        _intersectCtx.reset(opt, !noMtv);
        if (!this._intersectCheckOneSide(this, other, noMtv, 1)) {
            overlapped = false;
            if (noMtv) {
                return overlapped;
            }
        }
        if (!this._intersectCheckOneSide(other, this, noMtv, -1)) {
            overlapped = false;
            if (noMtv) {
                return overlapped;
            }
        }
        if (!noMtv && !_intersectCtx.negativeSize) {
            _Point_js__rspack_import_1["default"].copy(mtv, overlapped
                ? (_intersectCtx.useDir ? _intersectCtx.dirMinTv : _minTv)
                : _maxTv);
        }
        return overlapped;
    };
    OrientedBoundingRect.prototype._intersectCheckOneSide = function (self, other, noMtv, inverse) {
        var overlapped = true;
        for (var i = 0; i < 2; i++) {
            var axis = self._axes[i];
            self._getProjMinMaxOnAxis(i, self._corners, _extent);
            self._getProjMinMaxOnAxis(i, other._corners, _extent2);
            if (_intersectCtx.negativeSize || _extent[1] < _extent2[0] || _extent[0] > _extent2[1]) {
                overlapped = false;
                if (_intersectCtx.negativeSize || noMtv) {
                    return overlapped;
                }
                var dist0 = mathAbs(_extent2[0] - _extent[1]);
                var dist1 = mathAbs(_extent[0] - _extent2[1]);
                if (mathMin(dist0, dist1) > _maxTv.len()) {
                    if (dist0 < dist1) {
                        _Point_js__rspack_import_1["default"].scale(_maxTv, axis, -dist0 * inverse);
                    }
                    else {
                        _Point_js__rspack_import_1["default"].scale(_maxTv, axis, dist1 * inverse);
                    }
                }
            }
            else if (!noMtv) {
                var dist0 = mathAbs(_extent2[0] - _extent[1]);
                var dist1 = mathAbs(_extent[0] - _extent2[1]);
                if (_intersectCtx.useDir || mathMin(dist0, dist1) < _minTv.len()) {
                    if (dist0 < dist1 || !_intersectCtx.bidirectional) {
                        _Point_js__rspack_import_1["default"].scale(_minTv, axis, dist0 * inverse);
                        if (_intersectCtx.useDir) {
                            _intersectCtx.calcDirMTV();
                        }
                    }
                    if (dist0 >= dist1 || !_intersectCtx.bidirectional) {
                        _Point_js__rspack_import_1["default"].scale(_minTv, axis, -dist1 * inverse);
                        if (_intersectCtx.useDir) {
                            _intersectCtx.calcDirMTV();
                        }
                    }
                }
            }
        }
        return overlapped;
    };
    OrientedBoundingRect.prototype._getProjMinMaxOnAxis = function (dim, corners, out) {
        var axis = this._axes[dim];
        var origin = this._origin;
        var proj = corners[0].dot(axis) + origin[dim];
        var min = proj;
        var max = proj;
        for (var i = 1; i < corners.length; i++) {
            var proj_1 = corners[i].dot(axis) + origin[dim];
            min = mathMin(proj_1, min);
            max = mathMax(proj_1, max);
        }
        out[0] = min + _intersectCtx.touchThreshold;
        out[1] = max - _intersectCtx.touchThreshold;
        _intersectCtx.negativeSize = out[1] < out[0];
    };
    return OrientedBoundingRect;
}());
/* export default */ __webpack_exports__["default"] = (OrientedBoundingRect);


}),
99585: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeArcAngles: function() { return normalizeArcAngles; }
});
/* import */ var _vector_js__rspack_import_2 = __webpack_require__(44721);
/* import */ var _BoundingRect_js__rspack_import_3 = __webpack_require__(7544);
/* import */ var _config_js__rspack_import_0 = __webpack_require__(76486);
/* import */ var _bbox_js__rspack_import_1 = __webpack_require__(49249);
/* import */ var _curve_js__rspack_import_4 = __webpack_require__(50631);





var CMD = {
    M: 1,
    L: 2,
    C: 3,
    Q: 4,
    A: 5,
    Z: 6,
    R: 7
};
var tmpOutX = [];
var tmpOutY = [];
var min = [];
var max = [];
var min2 = [];
var max2 = [];
var mathMin = Math.min;
var mathMax = Math.max;
var mathCos = Math.cos;
var mathSin = Math.sin;
var mathAbs = Math.abs;
var PI = Math.PI;
var PI2 = PI * 2;
var hasTypedArray = typeof Float32Array !== 'undefined';
var tmpAngles = [];
function modPI2(radian) {
    var n = Math.round(radian / PI * 1e8) / 1e8;
    return (n % 2) * PI;
}
function normalizeArcAngles(angles, anticlockwise) {
    var newStartAngle = modPI2(angles[0]);
    if (newStartAngle < 0) {
        newStartAngle += PI2;
    }
    var delta = newStartAngle - angles[0];
    var newEndAngle = angles[1];
    newEndAngle += delta;
    if (!anticlockwise && newEndAngle - newStartAngle >= PI2) {
        newEndAngle = newStartAngle + PI2;
    }
    else if (anticlockwise && newStartAngle - newEndAngle >= PI2) {
        newEndAngle = newStartAngle - PI2;
    }
    else if (!anticlockwise && newStartAngle > newEndAngle) {
        newEndAngle = newStartAngle + (PI2 - modPI2(newStartAngle - newEndAngle));
    }
    else if (anticlockwise && newStartAngle < newEndAngle) {
        newEndAngle = newStartAngle - (PI2 - modPI2(newEndAngle - newStartAngle));
    }
    angles[0] = newStartAngle;
    angles[1] = newEndAngle;
}
var PathProxy = (function () {
    function PathProxy(notSaveData) {
        this.dpr = 1;
        this._xi = 0;
        this._yi = 0;
        this._x0 = 0;
        this._y0 = 0;
        this._len = 0;
        if (notSaveData) {
            this._saveData = false;
        }
        if (this._saveData) {
            this.data = [];
        }
    }
    PathProxy.prototype.increaseVersion = function () {
        this._version++;
    };
    PathProxy.prototype.getVersion = function () {
        return this._version;
    };
    PathProxy.prototype.setScale = function (sx, sy, segmentIgnoreThreshold) {
        segmentIgnoreThreshold = segmentIgnoreThreshold || 0;
        if (segmentIgnoreThreshold > 0) {
            this._ux = mathAbs(segmentIgnoreThreshold / _config_js__rspack_import_0.devicePixelRatio / sx) || 0;
            this._uy = mathAbs(segmentIgnoreThreshold / _config_js__rspack_import_0.devicePixelRatio / sy) || 0;
        }
    };
    PathProxy.prototype.setDPR = function (dpr) {
        this.dpr = dpr;
    };
    PathProxy.prototype.setContext = function (ctx) {
        this._ctx = ctx;
    };
    PathProxy.prototype.getContext = function () {
        return this._ctx;
    };
    PathProxy.prototype.beginPath = function () {
        this._ctx && this._ctx.beginPath();
        this.reset();
        return this;
    };
    PathProxy.prototype.reset = function () {
        if (this._saveData) {
            this._len = 0;
        }
        if (this._pathSegLen) {
            this._pathSegLen = null;
            this._pathLen = 0;
        }
        this._version++;
    };
    PathProxy.prototype.moveTo = function (x, y) {
        this._drawPendingPt();
        this.addData(CMD.M, x, y);
        this._ctx && this._ctx.moveTo(x, y);
        this._x0 = x;
        this._y0 = y;
        this._xi = x;
        this._yi = y;
        return this;
    };
    PathProxy.prototype.lineTo = function (x, y) {
        var dx = mathAbs(x - this._xi);
        var dy = mathAbs(y - this._yi);
        var exceedUnit = dx > this._ux || dy > this._uy;
        this.addData(CMD.L, x, y);
        if (this._ctx && exceedUnit) {
            this._ctx.lineTo(x, y);
        }
        if (exceedUnit) {
            this._xi = x;
            this._yi = y;
            this._pendingPtDist = 0;
        }
        else {
            var d2 = dx * dx + dy * dy;
            if (d2 > this._pendingPtDist) {
                this._pendingPtX = x;
                this._pendingPtY = y;
                this._pendingPtDist = d2;
            }
        }
        return this;
    };
    PathProxy.prototype.bezierCurveTo = function (x1, y1, x2, y2, x3, y3) {
        this._drawPendingPt();
        this.addData(CMD.C, x1, y1, x2, y2, x3, y3);
        if (this._ctx) {
            this._ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
        }
        this._xi = x3;
        this._yi = y3;
        return this;
    };
    PathProxy.prototype.quadraticCurveTo = function (x1, y1, x2, y2) {
        this._drawPendingPt();
        this.addData(CMD.Q, x1, y1, x2, y2);
        if (this._ctx) {
            this._ctx.quadraticCurveTo(x1, y1, x2, y2);
        }
        this._xi = x2;
        this._yi = y2;
        return this;
    };
    PathProxy.prototype.arc = function (cx, cy, r, startAngle, endAngle, anticlockwise) {
        this._drawPendingPt();
        tmpAngles[0] = startAngle;
        tmpAngles[1] = endAngle;
        normalizeArcAngles(tmpAngles, anticlockwise);
        startAngle = tmpAngles[0];
        endAngle = tmpAngles[1];
        var delta = endAngle - startAngle;
        this.addData(CMD.A, cx, cy, r, r, startAngle, delta, 0, anticlockwise ? 0 : 1);
        this._ctx && this._ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);
        this._xi = mathCos(endAngle) * r + cx;
        this._yi = mathSin(endAngle) * r + cy;
        return this;
    };
    PathProxy.prototype.arcTo = function (x1, y1, x2, y2, radius) {
        this._drawPendingPt();
        if (this._ctx) {
            this._ctx.arcTo(x1, y1, x2, y2, radius);
        }
        return this;
    };
    PathProxy.prototype.rect = function (x, y, w, h) {
        this._drawPendingPt();
        this._ctx && this._ctx.rect(x, y, w, h);
        this.addData(CMD.R, x, y, w, h);
        return this;
    };
    PathProxy.prototype.closePath = function () {
        this._drawPendingPt();
        this.addData(CMD.Z);
        var ctx = this._ctx;
        var x0 = this._x0;
        var y0 = this._y0;
        if (ctx) {
            ctx.closePath();
        }
        this._xi = x0;
        this._yi = y0;
        return this;
    };
    PathProxy.prototype.fill = function (ctx) {
        ctx && ctx.fill();
        this.toStatic();
    };
    PathProxy.prototype.stroke = function (ctx) {
        ctx && ctx.stroke();
        this.toStatic();
    };
    PathProxy.prototype.len = function () {
        return this._len;
    };
    PathProxy.prototype.setData = function (data) {
        if (!this._saveData) {
            return;
        }
        var len = data.length;
        if (!(this.data && this.data.length === len) && hasTypedArray) {
            this.data = new Float32Array(len);
        }
        for (var i = 0; i < len; i++) {
            this.data[i] = data[i];
        }
        this._len = len;
    };
    PathProxy.prototype.appendPath = function (path) {
        if (!this._saveData) {
            return;
        }
        if (!(path instanceof Array)) {
            path = [path];
        }
        var len = path.length;
        var appendSize = 0;
        var offset = this._len;
        for (var i = 0; i < len; i++) {
            appendSize += path[i].len();
        }
        var oldData = this.data;
        if (hasTypedArray && (oldData instanceof Float32Array || !oldData)) {
            this.data = new Float32Array(offset + appendSize);
            if (offset > 0 && oldData) {
                for (var k = 0; k < offset; k++) {
                    this.data[k] = oldData[k];
                }
            }
        }
        for (var i = 0; i < len; i++) {
            var appendPathData = path[i].data;
            for (var k = 0; k < appendPathData.length; k++) {
                this.data[offset++] = appendPathData[k];
            }
        }
        this._len = offset;
    };
    PathProxy.prototype.addData = function (cmd, a, b, c, d, e, f, g, h) {
        if (!this._saveData) {
            return;
        }
        var data = this.data;
        if (this._len + arguments.length > data.length) {
            this._expandData();
            data = this.data;
        }
        for (var i = 0; i < arguments.length; i++) {
            data[this._len++] = arguments[i];
        }
    };
    PathProxy.prototype._drawPendingPt = function () {
        if (this._pendingPtDist > 0) {
            this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY);
            this._pendingPtDist = 0;
        }
    };
    PathProxy.prototype._expandData = function () {
        if (!(this.data instanceof Array)) {
            var newData = [];
            for (var i = 0; i < this._len; i++) {
                newData[i] = this.data[i];
            }
            this.data = newData;
        }
    };
    PathProxy.prototype.toStatic = function () {
        if (!this._saveData) {
            return;
        }
        this._drawPendingPt();
        var data = this.data;
        if (data instanceof Array) {
            data.length = this._len;
            if (hasTypedArray && this._len > 11) {
                this.data = new Float32Array(data);
            }
        }
    };
    PathProxy.prototype.getBoundingRect = function () {
        min[0] = min[1] = min2[0] = min2[1] = Number.MAX_VALUE;
        max[0] = max[1] = max2[0] = max2[1] = -Number.MAX_VALUE;
        var data = this.data;
        var xi = 0;
        var yi = 0;
        var x0 = 0;
        var y0 = 0;
        var i;
        for (i = 0; i < this._len;) {
            var cmd = data[i++];
            var isFirst = i === 1;
            if (isFirst) {
                xi = data[i];
                yi = data[i + 1];
                x0 = xi;
                y0 = yi;
            }
            switch (cmd) {
                case CMD.M:
                    xi = x0 = data[i++];
                    yi = y0 = data[i++];
                    min2[0] = x0;
                    min2[1] = y0;
                    max2[0] = x0;
                    max2[1] = y0;
                    break;
                case CMD.L:
                    (0,_bbox_js__rspack_import_1.fromLine)(xi, yi, data[i], data[i + 1], min2, max2);
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.C:
                    (0,_bbox_js__rspack_import_1.fromCubic)(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], min2, max2);
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.Q:
                    (0,_bbox_js__rspack_import_1.fromQuadratic)(xi, yi, data[i++], data[i++], data[i], data[i + 1], min2, max2);
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.A:
                    var cx = data[i++];
                    var cy = data[i++];
                    var rx = data[i++];
                    var ry = data[i++];
                    var startAngle = data[i++];
                    var endAngle = data[i++] + startAngle;
                    i += 1;
                    var anticlockwise = !data[i++];
                    if (isFirst) {
                        x0 = mathCos(startAngle) * rx + cx;
                        y0 = mathSin(startAngle) * ry + cy;
                    }
                    (0,_bbox_js__rspack_import_1.fromArc)(cx, cy, rx, ry, startAngle, endAngle, anticlockwise, min2, max2);
                    xi = mathCos(endAngle) * rx + cx;
                    yi = mathSin(endAngle) * ry + cy;
                    break;
                case CMD.R:
                    x0 = xi = data[i++];
                    y0 = yi = data[i++];
                    var width = data[i++];
                    var height = data[i++];
                    (0,_bbox_js__rspack_import_1.fromLine)(x0, y0, x0 + width, y0 + height, min2, max2);
                    break;
                case CMD.Z:
                    xi = x0;
                    yi = y0;
                    break;
            }
            _vector_js__rspack_import_2.min(min, min, min2);
            _vector_js__rspack_import_2.max(max, max, max2);
        }
        if (i === 0) {
            min[0] = min[1] = max[0] = max[1] = 0;
        }
        return new _BoundingRect_js__rspack_import_3["default"](min[0], min[1], max[0] - min[0], max[1] - min[1]);
    };
    PathProxy.prototype._calculateLength = function () {
        var data = this.data;
        var len = this._len;
        var ux = this._ux;
        var uy = this._uy;
        var xi = 0;
        var yi = 0;
        var x0 = 0;
        var y0 = 0;
        if (!this._pathSegLen) {
            this._pathSegLen = [];
        }
        var pathSegLen = this._pathSegLen;
        var pathTotalLen = 0;
        var segCount = 0;
        for (var i = 0; i < len;) {
            var cmd = data[i++];
            var isFirst = i === 1;
            if (isFirst) {
                xi = data[i];
                yi = data[i + 1];
                x0 = xi;
                y0 = yi;
            }
            var l = -1;
            switch (cmd) {
                case CMD.M:
                    xi = x0 = data[i++];
                    yi = y0 = data[i++];
                    break;
                case CMD.L: {
                    var x2 = data[i++];
                    var y2 = data[i++];
                    var dx = x2 - xi;
                    var dy = y2 - yi;
                    if (mathAbs(dx) > ux || mathAbs(dy) > uy || i === len - 1) {
                        l = Math.sqrt(dx * dx + dy * dy);
                        xi = x2;
                        yi = y2;
                    }
                    break;
                }
                case CMD.C: {
                    var x1 = data[i++];
                    var y1 = data[i++];
                    var x2 = data[i++];
                    var y2 = data[i++];
                    var x3 = data[i++];
                    var y3 = data[i++];
                    l = (0,_curve_js__rspack_import_4.cubicLength)(xi, yi, x1, y1, x2, y2, x3, y3, 10);
                    xi = x3;
                    yi = y3;
                    break;
                }
                case CMD.Q: {
                    var x1 = data[i++];
                    var y1 = data[i++];
                    var x2 = data[i++];
                    var y2 = data[i++];
                    l = (0,_curve_js__rspack_import_4.quadraticLength)(xi, yi, x1, y1, x2, y2, 10);
                    xi = x2;
                    yi = y2;
                    break;
                }
                case CMD.A:
                    var cx = data[i++];
                    var cy = data[i++];
                    var rx = data[i++];
                    var ry = data[i++];
                    var startAngle = data[i++];
                    var delta = data[i++];
                    var endAngle = delta + startAngle;
                    i += 1;
                    if (isFirst) {
                        x0 = mathCos(startAngle) * rx + cx;
                        y0 = mathSin(startAngle) * ry + cy;
                    }
                    l = mathMax(rx, ry) * mathMin(PI2, Math.abs(delta));
                    xi = mathCos(endAngle) * rx + cx;
                    yi = mathSin(endAngle) * ry + cy;
                    break;
                case CMD.R: {
                    x0 = xi = data[i++];
                    y0 = yi = data[i++];
                    var width = data[i++];
                    var height = data[i++];
                    l = width * 2 + height * 2;
                    break;
                }
                case CMD.Z: {
                    var dx = x0 - xi;
                    var dy = y0 - yi;
                    l = Math.sqrt(dx * dx + dy * dy);
                    xi = x0;
                    yi = y0;
                    break;
                }
            }
            if (l >= 0) {
                pathSegLen[segCount++] = l;
                pathTotalLen += l;
            }
        }
        this._pathLen = pathTotalLen;
        return pathTotalLen;
    };
    PathProxy.prototype.rebuildPath = function (ctx, percent) {
        var d = this.data;
        var ux = this._ux;
        var uy = this._uy;
        var len = this._len;
        var x0;
        var y0;
        var xi;
        var yi;
        var x;
        var y;
        var drawPart = percent < 1;
        var pathSegLen;
        var pathTotalLen;
        var accumLength = 0;
        var segCount = 0;
        var displayedLength;
        var pendingPtDist = 0;
        var pendingPtX;
        var pendingPtY;
        if (drawPart) {
            if (!this._pathSegLen) {
                this._calculateLength();
            }
            pathSegLen = this._pathSegLen;
            pathTotalLen = this._pathLen;
            displayedLength = percent * pathTotalLen;
            if (!displayedLength) {
                return;
            }
        }
        lo: for (var i = 0; i < len;) {
            var cmd = d[i++];
            var isFirst = i === 1;
            if (isFirst) {
                xi = d[i];
                yi = d[i + 1];
                x0 = xi;
                y0 = yi;
            }
            if (cmd !== CMD.L && pendingPtDist > 0) {
                ctx.lineTo(pendingPtX, pendingPtY);
                pendingPtDist = 0;
            }
            switch (cmd) {
                case CMD.M:
                    x0 = xi = d[i++];
                    y0 = yi = d[i++];
                    ctx.moveTo(xi, yi);
                    break;
                case CMD.L: {
                    x = d[i++];
                    y = d[i++];
                    var dx = mathAbs(x - xi);
                    var dy = mathAbs(y - yi);
                    if (dx > ux || dy > uy) {
                        if (drawPart) {
                            var l = pathSegLen[segCount++];
                            if (accumLength + l > displayedLength) {
                                var t = (displayedLength - accumLength) / l;
                                ctx.lineTo(xi * (1 - t) + x * t, yi * (1 - t) + y * t);
                                break lo;
                            }
                            accumLength += l;
                        }
                        ctx.lineTo(x, y);
                        xi = x;
                        yi = y;
                        pendingPtDist = 0;
                    }
                    else {
                        var d2 = dx * dx + dy * dy;
                        if (d2 > pendingPtDist) {
                            pendingPtX = x;
                            pendingPtY = y;
                            pendingPtDist = d2;
                        }
                    }
                    break;
                }
                case CMD.C: {
                    var x1 = d[i++];
                    var y1 = d[i++];
                    var x2 = d[i++];
                    var y2 = d[i++];
                    var x3 = d[i++];
                    var y3 = d[i++];
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var t = (displayedLength - accumLength) / l;
                            (0,_curve_js__rspack_import_4.cubicSubdivide)(xi, x1, x2, x3, t, tmpOutX);
                            (0,_curve_js__rspack_import_4.cubicSubdivide)(yi, y1, y2, y3, t, tmpOutY);
                            ctx.bezierCurveTo(tmpOutX[1], tmpOutY[1], tmpOutX[2], tmpOutY[2], tmpOutX[3], tmpOutY[3]);
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
                    xi = x3;
                    yi = y3;
                    break;
                }
                case CMD.Q: {
                    var x1 = d[i++];
                    var y1 = d[i++];
                    var x2 = d[i++];
                    var y2 = d[i++];
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var t = (displayedLength - accumLength) / l;
                            (0,_curve_js__rspack_import_4.quadraticSubdivide)(xi, x1, x2, t, tmpOutX);
                            (0,_curve_js__rspack_import_4.quadraticSubdivide)(yi, y1, y2, t, tmpOutY);
                            ctx.quadraticCurveTo(tmpOutX[1], tmpOutY[1], tmpOutX[2], tmpOutY[2]);
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.quadraticCurveTo(x1, y1, x2, y2);
                    xi = x2;
                    yi = y2;
                    break;
                }
                case CMD.A:
                    var cx = d[i++];
                    var cy = d[i++];
                    var rx = d[i++];
                    var ry = d[i++];
                    var startAngle = d[i++];
                    var delta = d[i++];
                    var psi = d[i++];
                    var anticlockwise = !d[i++];
                    var r = (rx > ry) ? rx : ry;
                    var isEllipse = mathAbs(rx - ry) > 1e-3;
                    var endAngle = startAngle + delta;
                    var breakBuild = false;
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            endAngle = startAngle + delta * (displayedLength - accumLength) / l;
                            breakBuild = true;
                        }
                        accumLength += l;
                    }
                    if (isEllipse && ctx.ellipse) {
                        ctx.ellipse(cx, cy, rx, ry, psi, startAngle, endAngle, anticlockwise);
                    }
                    else {
                        ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);
                    }
                    if (breakBuild) {
                        break lo;
                    }
                    if (isFirst) {
                        x0 = mathCos(startAngle) * rx + cx;
                        y0 = mathSin(startAngle) * ry + cy;
                    }
                    xi = mathCos(endAngle) * rx + cx;
                    yi = mathSin(endAngle) * ry + cy;
                    break;
                case CMD.R:
                    x0 = xi = d[i];
                    y0 = yi = d[i + 1];
                    x = d[i++];
                    y = d[i++];
                    var width = d[i++];
                    var height = d[i++];
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var d_1 = displayedLength - accumLength;
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + mathMin(d_1, width), y);
                            d_1 -= width;
                            if (d_1 > 0) {
                                ctx.lineTo(x + width, y + mathMin(d_1, height));
                            }
                            d_1 -= height;
                            if (d_1 > 0) {
                                ctx.lineTo(x + mathMax(width - d_1, 0), y + height);
                            }
                            d_1 -= width;
                            if (d_1 > 0) {
                                ctx.lineTo(x, y + mathMax(height - d_1, 0));
                            }
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.rect(x, y, width, height);
                    break;
                case CMD.Z:
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var t = (displayedLength - accumLength) / l;
                            ctx.lineTo(xi * (1 - t) + x0 * t, yi * (1 - t) + y0 * t);
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.closePath();
                    xi = x0;
                    yi = y0;
            }
        }
    };
    PathProxy.prototype.clone = function () {
        var newProxy = new PathProxy();
        var data = this.data;
        newProxy.data = data.slice ? data.slice()
            : Array.prototype.slice.call(data);
        newProxy._len = this._len;
        return newProxy;
    };
    PathProxy.prototype.canSave = function () {
        return !!this._saveData;
    };
    PathProxy.CMD = CMD;
    PathProxy.initDefaultProps = (function () {
        var proto = PathProxy.prototype;
        proto._saveData = true;
        proto._ux = 0;
        proto._uy = 0;
        proto._pendingPtDist = 0;
        proto._version = 0;
    })();
    return PathProxy;
}());
/* export default */ __webpack_exports__["default"] = (PathProxy);


}),
97270: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Point = (function () {
    function Point(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    Point.prototype.copy = function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    };
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Point.prototype.equal = function (other) {
        return other.x === this.x && other.y === this.y;
    };
    Point.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    };
    Point.prototype.scale = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Point.prototype.scaleAndAdd = function (other, scalar) {
        this.x += other.x * scalar;
        this.y += other.y * scalar;
    };
    Point.prototype.sub = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    };
    Point.prototype.dot = function (other) {
        return this.x * other.x + this.y * other.y;
    };
    Point.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y;
    };
    Point.prototype.normalize = function () {
        var len = this.len();
        this.x /= len;
        this.y /= len;
        return this;
    };
    Point.prototype.distance = function (other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Point.prototype.distanceSquare = function (other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return dx * dx + dy * dy;
    };
    Point.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    Point.prototype.transform = function (m) {
        if (!m) {
            return;
        }
        var x = this.x;
        var y = this.y;
        this.x = m[0] * x + m[2] * y + m[4];
        this.y = m[1] * x + m[3] * y + m[5];
        return this;
    };
    Point.prototype.toArray = function (out) {
        out[0] = this.x;
        out[1] = this.y;
        return out;
    };
    Point.prototype.fromArray = function (input) {
        this.x = input[0];
        this.y = input[1];
    };
    Point.set = function (p, x, y) {
        p.x = x;
        p.y = y;
    };
    Point.copy = function (p, p2) {
        p.x = p2.x;
        p.y = p2.y;
    };
    Point.len = function (p) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    };
    Point.lenSquare = function (p) {
        return p.x * p.x + p.y * p.y;
    };
    Point.dot = function (p0, p1) {
        return p0.x * p1.x + p0.y * p1.y;
    };
    Point.add = function (out, p0, p1) {
        out.x = p0.x + p1.x;
        out.y = p0.y + p1.y;
    };
    Point.sub = function (out, p0, p1) {
        out.x = p0.x - p1.x;
        out.y = p0.y - p1.y;
    };
    Point.scale = function (out, p0, scalar) {
        out.x = p0.x * scalar;
        out.y = p0.y * scalar;
    };
    Point.scaleAndAdd = function (out, p0, p1, scalar) {
        out.x = p0.x + p1.x * scalar;
        out.y = p0.y + p1.y * scalar;
    };
    Point.lerp = function (out, p0, p1, t) {
        var onet = 1 - t;
        out.x = onet * p0.x + t * p1.x;
        out.y = onet * p0.y + t * p1.y;
    };
    return Point;
}());
/* export default */ __webpack_exports__["default"] = (Point);


}),
30128: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TRANSFORMABLE_PROPS: function() { return TRANSFORMABLE_PROPS; },
  copyTransform: function() { return copyTransform; }
});
/* import */ var _matrix_js__rspack_import_0 = __webpack_require__(46239);
/* import */ var _vector_js__rspack_import_1 = __webpack_require__(44721);


var mIdentity = _matrix_js__rspack_import_0.identity;
var EPSILON = 5e-5;
function isNotAroundZero(val) {
    return val > EPSILON || val < -EPSILON;
}
var scaleTmp = [];
var tmpTransform = [];
var originTransform = _matrix_js__rspack_import_0.create();
var abs = Math.abs;
var Transformable = (function () {
    function Transformable() {
    }
    Transformable.prototype.getLocalTransform = function (m) {
        return Transformable.getLocalTransform(this, m);
    };
    Transformable.prototype.setPosition = function (arr) {
        this.x = arr[0];
        this.y = arr[1];
    };
    Transformable.prototype.setScale = function (arr) {
        this.scaleX = arr[0];
        this.scaleY = arr[1];
    };
    Transformable.prototype.setSkew = function (arr) {
        this.skewX = arr[0];
        this.skewY = arr[1];
    };
    Transformable.prototype.setOrigin = function (arr) {
        this.originX = arr[0];
        this.originY = arr[1];
    };
    Transformable.prototype.needLocalTransform = function () {
        return isNotAroundZero(this.rotation)
            || isNotAroundZero(this.x)
            || isNotAroundZero(this.y)
            || isNotAroundZero(this.scaleX - 1)
            || isNotAroundZero(this.scaleY - 1)
            || isNotAroundZero(this.skewX)
            || isNotAroundZero(this.skewY);
    };
    Transformable.prototype.updateTransform = function () {
        var parentTransform = this.parent && this.parent.transform;
        var needLocalTransform = this.needLocalTransform();
        var m = this.transform;
        if (!(needLocalTransform || parentTransform)) {
            if (m) {
                mIdentity(m);
                this.invTransform = null;
            }
            return;
        }
        m = m || _matrix_js__rspack_import_0.create();
        if (needLocalTransform) {
            this.getLocalTransform(m);
        }
        else {
            mIdentity(m);
        }
        if (parentTransform) {
            if (needLocalTransform) {
                _matrix_js__rspack_import_0.mul(m, parentTransform, m);
            }
            else {
                _matrix_js__rspack_import_0.copy(m, parentTransform);
            }
        }
        this.transform = m;
        this._resolveGlobalScaleRatio(m);
    };
    Transformable.prototype._resolveGlobalScaleRatio = function (m) {
        var globalScaleRatio = this.globalScaleRatio;
        if (globalScaleRatio != null && globalScaleRatio !== 1) {
            this.getGlobalScale(scaleTmp);
            var relX = scaleTmp[0] < 0 ? -1 : 1;
            var relY = scaleTmp[1] < 0 ? -1 : 1;
            var sx = ((scaleTmp[0] - relX) * globalScaleRatio + relX) / scaleTmp[0] || 0;
            var sy = ((scaleTmp[1] - relY) * globalScaleRatio + relY) / scaleTmp[1] || 0;
            m[0] *= sx;
            m[1] *= sx;
            m[2] *= sy;
            m[3] *= sy;
        }
        this.invTransform = this.invTransform || _matrix_js__rspack_import_0.create();
        _matrix_js__rspack_import_0.invert(this.invTransform, m);
    };
    Transformable.prototype.getComputedTransform = function () {
        var transformNode = this;
        var ancestors = [];
        while (transformNode) {
            ancestors.push(transformNode);
            transformNode = transformNode.parent;
        }
        while (transformNode = ancestors.pop()) {
            transformNode.updateTransform();
        }
        return this.transform;
    };
    Transformable.prototype.setLocalTransform = function (m) {
        if (!m) {
            return;
        }
        var sx = m[0] * m[0] + m[1] * m[1];
        var sy = m[2] * m[2] + m[3] * m[3];
        var rotation = Math.atan2(m[1], m[0]);
        var shearX = Math.PI / 2 + rotation - Math.atan2(m[3], m[2]);
        sy = Math.sqrt(sy) * Math.cos(shearX);
        sx = Math.sqrt(sx);
        this.skewX = shearX;
        this.skewY = 0;
        this.rotation = -rotation;
        this.x = +m[4];
        this.y = +m[5];
        this.scaleX = sx;
        this.scaleY = sy;
        this.originX = 0;
        this.originY = 0;
    };
    Transformable.prototype.decomposeTransform = function () {
        if (!this.transform) {
            return;
        }
        var parent = this.parent;
        var m = this.transform;
        if (parent && parent.transform) {
            parent.invTransform = parent.invTransform || _matrix_js__rspack_import_0.create();
            _matrix_js__rspack_import_0.mul(tmpTransform, parent.invTransform, m);
            m = tmpTransform;
        }
        var ox = this.originX;
        var oy = this.originY;
        if (ox || oy) {
            originTransform[4] = ox;
            originTransform[5] = oy;
            _matrix_js__rspack_import_0.mul(tmpTransform, m, originTransform);
            tmpTransform[4] -= ox;
            tmpTransform[5] -= oy;
            m = tmpTransform;
        }
        this.setLocalTransform(m);
    };
    Transformable.prototype.getGlobalScale = function (out) {
        var m = this.transform;
        out = out || [];
        if (!m) {
            out[0] = 1;
            out[1] = 1;
            return out;
        }
        out[0] = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
        out[1] = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
        if (m[0] < 0) {
            out[0] = -out[0];
        }
        if (m[3] < 0) {
            out[1] = -out[1];
        }
        return out;
    };
    Transformable.prototype.transformCoordToLocal = function (x, y) {
        var v2 = [x, y];
        var invTransform = this.invTransform;
        if (invTransform) {
            _vector_js__rspack_import_1.applyTransform(v2, v2, invTransform);
        }
        return v2;
    };
    Transformable.prototype.transformCoordToGlobal = function (x, y) {
        var v2 = [x, y];
        var transform = this.transform;
        if (transform) {
            _vector_js__rspack_import_1.applyTransform(v2, v2, transform);
        }
        return v2;
    };
    Transformable.prototype.getLineScale = function () {
        var m = this.transform;
        return m && abs(m[0] - 1) > 1e-10 && abs(m[3] - 1) > 1e-10
            ? Math.sqrt(abs(m[0] * m[3] - m[2] * m[1]))
            : 1;
    };
    Transformable.prototype.copyTransform = function (source) {
        copyTransform(this, source);
    };
    Transformable.getLocalTransform = function (target, m) {
        m = m || [];
        var ox = target.originX || 0;
        var oy = target.originY || 0;
        var sx = target.scaleX;
        var sy = target.scaleY;
        var ax = target.anchorX;
        var ay = target.anchorY;
        var rotation = target.rotation || 0;
        var x = target.x;
        var y = target.y;
        var skewX = target.skewX ? Math.tan(target.skewX) : 0;
        var skewY = target.skewY ? Math.tan(-target.skewY) : 0;
        if (ox || oy || ax || ay) {
            var dx = ox + ax;
            var dy = oy + ay;
            m[4] = -dx * sx - skewX * dy * sy;
            m[5] = -dy * sy - skewY * dx * sx;
        }
        else {
            m[4] = m[5] = 0;
        }
        m[0] = sx;
        m[3] = sy;
        m[1] = skewY * sx;
        m[2] = skewX * sy;
        rotation && _matrix_js__rspack_import_0.rotate(m, m, rotation);
        m[4] += ox + x;
        m[5] += oy + y;
        return m;
    };
    Transformable.initDefaultProps = (function () {
        var proto = Transformable.prototype;
        proto.scaleX =
            proto.scaleY =
                proto.globalScaleRatio = 1;
        proto.x =
            proto.y =
                proto.originX =
                    proto.originY =
                        proto.skewX =
                            proto.skewY =
                                proto.rotation =
                                    proto.anchorX =
                                        proto.anchorY = 0;
    })();
    return Transformable;
}());
;
var TRANSFORMABLE_PROPS = [
    'x', 'y', 'originX', 'originY', 'anchorX', 'anchorY', 'rotation', 'scaleX', 'scaleY', 'skewX', 'skewY'
];
function copyTransform(target, source) {
    for (var i = 0; i < TRANSFORMABLE_PROPS.length; i++) {
        var propName = TRANSFORMABLE_PROPS[i];
        target[propName] = source[propName];
    }
}
/* export default */ __webpack_exports__["default"] = (Transformable);


}),
22610: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var wmUniqueIndex = Math.round(Math.random() * 9);
var supportDefineProperty = typeof Object.defineProperty === 'function';
var WeakMap = (function () {
    function WeakMap() {
        this._id = '__ec_inner_' + wmUniqueIndex++;
    }
    WeakMap.prototype.get = function (key) {
        return this._guard(key)[this._id];
    };
    WeakMap.prototype.set = function (key, value) {
        var target = this._guard(key);
        if (supportDefineProperty) {
            Object.defineProperty(target, this._id, {
                value: value,
                enumerable: false,
                configurable: true
            });
        }
        else {
            target[this._id] = value;
        }
        return this;
    };
    WeakMap.prototype["delete"] = function (key) {
        if (this.has(key)) {
            delete this._guard(key)[this._id];
            return true;
        }
        return false;
    };
    WeakMap.prototype.has = function (key) {
        return !!this._guard(key)[this._id];
    };
    WeakMap.prototype._guard = function (key) {
        if (key !== Object(key)) {
            throw TypeError('Value of WeakMap is not a non-null object.');
        }
        return key;
    };
    return WeakMap;
}());
/* export default */ __webpack_exports__["default"] = (WeakMap);


}),
49249: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fromArc: function() { return fromArc; },
  fromCubic: function() { return fromCubic; },
  fromLine: function() { return fromLine; },
  fromPoints: function() { return fromPoints; },
  fromQuadratic: function() { return fromQuadratic; }
});
/* import */ var _vector_js__rspack_import_0 = __webpack_require__(44721);
/* import */ var _curve_js__rspack_import_1 = __webpack_require__(50631);


var mathMin = Math.min;
var mathMax = Math.max;
var mathSin = Math.sin;
var mathCos = Math.cos;
var PI2 = Math.PI * 2;
var start = _vector_js__rspack_import_0.create();
var end = _vector_js__rspack_import_0.create();
var extremity = _vector_js__rspack_import_0.create();
function fromPoints(points, min, max) {
    if (points.length === 0) {
        return;
    }
    var p = points[0];
    var left = p[0];
    var right = p[0];
    var top = p[1];
    var bottom = p[1];
    for (var i = 1; i < points.length; i++) {
        p = points[i];
        left = mathMin(left, p[0]);
        right = mathMax(right, p[0]);
        top = mathMin(top, p[1]);
        bottom = mathMax(bottom, p[1]);
    }
    min[0] = left;
    min[1] = top;
    max[0] = right;
    max[1] = bottom;
}
function fromLine(x0, y0, x1, y1, min, max) {
    min[0] = mathMin(x0, x1);
    min[1] = mathMin(y0, y1);
    max[0] = mathMax(x0, x1);
    max[1] = mathMax(y0, y1);
}
var xDim = [];
var yDim = [];
function fromCubic(x0, y0, x1, y1, x2, y2, x3, y3, min, max) {
    var cubicExtrema = _curve_js__rspack_import_1.cubicExtrema;
    var cubicAt = _curve_js__rspack_import_1.cubicAt;
    var n = cubicExtrema(x0, x1, x2, x3, xDim);
    min[0] = Infinity;
    min[1] = Infinity;
    max[0] = -Infinity;
    max[1] = -Infinity;
    for (var i = 0; i < n; i++) {
        var x = cubicAt(x0, x1, x2, x3, xDim[i]);
        min[0] = mathMin(x, min[0]);
        max[0] = mathMax(x, max[0]);
    }
    n = cubicExtrema(y0, y1, y2, y3, yDim);
    for (var i = 0; i < n; i++) {
        var y = cubicAt(y0, y1, y2, y3, yDim[i]);
        min[1] = mathMin(y, min[1]);
        max[1] = mathMax(y, max[1]);
    }
    min[0] = mathMin(x0, min[0]);
    max[0] = mathMax(x0, max[0]);
    min[0] = mathMin(x3, min[0]);
    max[0] = mathMax(x3, max[0]);
    min[1] = mathMin(y0, min[1]);
    max[1] = mathMax(y0, max[1]);
    min[1] = mathMin(y3, min[1]);
    max[1] = mathMax(y3, max[1]);
}
function fromQuadratic(x0, y0, x1, y1, x2, y2, min, max) {
    var quadraticExtremum = _curve_js__rspack_import_1.quadraticExtremum;
    var quadraticAt = _curve_js__rspack_import_1.quadraticAt;
    var tx = mathMax(mathMin(quadraticExtremum(x0, x1, x2), 1), 0);
    var ty = mathMax(mathMin(quadraticExtremum(y0, y1, y2), 1), 0);
    var x = quadraticAt(x0, x1, x2, tx);
    var y = quadraticAt(y0, y1, y2, ty);
    min[0] = mathMin(x0, x2, x);
    min[1] = mathMin(y0, y2, y);
    max[0] = mathMax(x0, x2, x);
    max[1] = mathMax(y0, y2, y);
}
function fromArc(x, y, rx, ry, startAngle, endAngle, anticlockwise, min, max) {
    var vec2Min = _vector_js__rspack_import_0.min;
    var vec2Max = _vector_js__rspack_import_0.max;
    var diff = Math.abs(startAngle - endAngle);
    if (diff % PI2 < 1e-4 && diff > 1e-4) {
        min[0] = x - rx;
        min[1] = y - ry;
        max[0] = x + rx;
        max[1] = y + ry;
        return;
    }
    start[0] = mathCos(startAngle) * rx + x;
    start[1] = mathSin(startAngle) * ry + y;
    end[0] = mathCos(endAngle) * rx + x;
    end[1] = mathSin(endAngle) * ry + y;
    vec2Min(min, start, end);
    vec2Max(max, start, end);
    startAngle = startAngle % (PI2);
    if (startAngle < 0) {
        startAngle = startAngle + PI2;
    }
    endAngle = endAngle % (PI2);
    if (endAngle < 0) {
        endAngle = endAngle + PI2;
    }
    if (startAngle > endAngle && !anticlockwise) {
        endAngle += PI2;
    }
    else if (startAngle < endAngle && anticlockwise) {
        startAngle += PI2;
    }
    if (anticlockwise) {
        var tmp = endAngle;
        endAngle = startAngle;
        startAngle = tmp;
    }
    for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
        if (angle > startAngle) {
            extremity[0] = mathCos(angle) * rx + x;
            extremity[1] = mathSin(angle) * ry + y;
            vec2Min(min, extremity, min);
            vec2Max(max, extremity, max);
        }
    }
}


}),
50631: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cubicAt: function() { return cubicAt; },
  cubicDerivativeAt: function() { return cubicDerivativeAt; },
  cubicExtrema: function() { return cubicExtrema; },
  cubicLength: function() { return cubicLength; },
  cubicProjectPoint: function() { return cubicProjectPoint; },
  cubicRootAt: function() { return cubicRootAt; },
  cubicSubdivide: function() { return cubicSubdivide; },
  quadraticAt: function() { return quadraticAt; },
  quadraticDerivativeAt: function() { return quadraticDerivativeAt; },
  quadraticExtremum: function() { return quadraticExtremum; },
  quadraticLength: function() { return quadraticLength; },
  quadraticProjectPoint: function() { return quadraticProjectPoint; },
  quadraticRootAt: function() { return quadraticRootAt; },
  quadraticSubdivide: function() { return quadraticSubdivide; }
});
/* import */ var _vector_js__rspack_import_0 = __webpack_require__(44721);

var mathPow = Math.pow;
var mathSqrt = Math.sqrt;
var EPSILON = 1e-8;
var EPSILON_NUMERIC = 1e-4;
var THREE_SQRT = mathSqrt(3);
var ONE_THIRD = 1 / 3;
var _v0 = (0,_vector_js__rspack_import_0.create)();
var _v1 = (0,_vector_js__rspack_import_0.create)();
var _v2 = (0,_vector_js__rspack_import_0.create)();
function isAroundZero(val) {
    return val > -EPSILON && val < EPSILON;
}
function isNotAroundZero(val) {
    return val > EPSILON || val < -EPSILON;
}
function cubicAt(p0, p1, p2, p3, t) {
    var onet = 1 - t;
    return onet * onet * (onet * p0 + 3 * t * p1)
        + t * t * (t * p3 + 3 * onet * p2);
}
function cubicDerivativeAt(p0, p1, p2, p3, t) {
    var onet = 1 - t;
    return 3 * (((p1 - p0) * onet + 2 * (p2 - p1) * t) * onet
        + (p3 - p2) * t * t);
}
function cubicRootAt(p0, p1, p2, p3, val, roots) {
    var a = p3 + 3 * (p1 - p2) - p0;
    var b = 3 * (p2 - p1 * 2 + p0);
    var c = 3 * (p1 - p0);
    var d = p0 - val;
    var A = b * b - 3 * a * c;
    var B = b * c - 9 * a * d;
    var C = c * c - 3 * b * d;
    var n = 0;
    if (isAroundZero(A) && isAroundZero(B)) {
        if (isAroundZero(b)) {
            roots[0] = 0;
        }
        else {
            var t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
    }
    else {
        var disc = B * B - 4 * A * C;
        if (isAroundZero(disc)) {
            var K = B / A;
            var t1 = -b / a + K;
            var t2 = -K / 2;
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                roots[n++] = t2;
            }
        }
        else if (disc > 0) {
            var discSqrt = mathSqrt(disc);
            var Y1 = A * b + 1.5 * a * (-B + discSqrt);
            var Y2 = A * b + 1.5 * a * (-B - discSqrt);
            if (Y1 < 0) {
                Y1 = -mathPow(-Y1, ONE_THIRD);
            }
            else {
                Y1 = mathPow(Y1, ONE_THIRD);
            }
            if (Y2 < 0) {
                Y2 = -mathPow(-Y2, ONE_THIRD);
            }
            else {
                Y2 = mathPow(Y2, ONE_THIRD);
            }
            var t1 = (-b - (Y1 + Y2)) / (3 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
        else {
            var T = (2 * A * b - 3 * a * B) / (2 * mathSqrt(A * A * A));
            var theta = Math.acos(T) / 3;
            var ASqrt = mathSqrt(A);
            var tmp = Math.cos(theta);
            var t1 = (-b - 2 * ASqrt * tmp) / (3 * a);
            var t2 = (-b + ASqrt * (tmp + THREE_SQRT * Math.sin(theta))) / (3 * a);
            var t3 = (-b + ASqrt * (tmp - THREE_SQRT * Math.sin(theta))) / (3 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                roots[n++] = t2;
            }
            if (t3 >= 0 && t3 <= 1) {
                roots[n++] = t3;
            }
        }
    }
    return n;
}
function cubicExtrema(p0, p1, p2, p3, extrema) {
    var b = 6 * p2 - 12 * p1 + 6 * p0;
    var a = 9 * p1 + 3 * p3 - 3 * p0 - 9 * p2;
    var c = 3 * p1 - 3 * p0;
    var n = 0;
    if (isAroundZero(a)) {
        if (isNotAroundZero(b)) {
            var t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
                extrema[n++] = t1;
            }
        }
    }
    else {
        var disc = b * b - 4 * a * c;
        if (isAroundZero(disc)) {
            extrema[0] = -b / (2 * a);
        }
        else if (disc > 0) {
            var discSqrt = mathSqrt(disc);
            var t1 = (-b + discSqrt) / (2 * a);
            var t2 = (-b - discSqrt) / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
                extrema[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                extrema[n++] = t2;
            }
        }
    }
    return n;
}
function cubicSubdivide(p0, p1, p2, p3, t, out) {
    var p01 = (p1 - p0) * t + p0;
    var p12 = (p2 - p1) * t + p1;
    var p23 = (p3 - p2) * t + p2;
    var p012 = (p12 - p01) * t + p01;
    var p123 = (p23 - p12) * t + p12;
    var p0123 = (p123 - p012) * t + p012;
    out[0] = p0;
    out[1] = p01;
    out[2] = p012;
    out[3] = p0123;
    out[4] = p0123;
    out[5] = p123;
    out[6] = p23;
    out[7] = p3;
}
function cubicProjectPoint(x0, y0, x1, y1, x2, y2, x3, y3, x, y, out) {
    var t;
    var interval = 0.005;
    var d = Infinity;
    var prev;
    var next;
    var d1;
    var d2;
    _v0[0] = x;
    _v0[1] = y;
    for (var _t = 0; _t < 1; _t += 0.05) {
        _v1[0] = cubicAt(x0, x1, x2, x3, _t);
        _v1[1] = cubicAt(y0, y1, y2, y3, _t);
        d1 = (0,_vector_js__rspack_import_0.distSquare)(_v0, _v1);
        if (d1 < d) {
            t = _t;
            d = d1;
        }
    }
    d = Infinity;
    for (var i = 0; i < 32; i++) {
        if (interval < EPSILON_NUMERIC) {
            break;
        }
        prev = t - interval;
        next = t + interval;
        _v1[0] = cubicAt(x0, x1, x2, x3, prev);
        _v1[1] = cubicAt(y0, y1, y2, y3, prev);
        d1 = (0,_vector_js__rspack_import_0.distSquare)(_v1, _v0);
        if (prev >= 0 && d1 < d) {
            t = prev;
            d = d1;
        }
        else {
            _v2[0] = cubicAt(x0, x1, x2, x3, next);
            _v2[1] = cubicAt(y0, y1, y2, y3, next);
            d2 = (0,_vector_js__rspack_import_0.distSquare)(_v2, _v0);
            if (next <= 1 && d2 < d) {
                t = next;
                d = d2;
            }
            else {
                interval *= 0.5;
            }
        }
    }
    if (out) {
        out[0] = cubicAt(x0, x1, x2, x3, t);
        out[1] = cubicAt(y0, y1, y2, y3, t);
    }
    return mathSqrt(d);
}
function cubicLength(x0, y0, x1, y1, x2, y2, x3, y3, iteration) {
    var px = x0;
    var py = y0;
    var d = 0;
    var step = 1 / iteration;
    for (var i = 1; i <= iteration; i++) {
        var t = i * step;
        var x = cubicAt(x0, x1, x2, x3, t);
        var y = cubicAt(y0, y1, y2, y3, t);
        var dx = x - px;
        var dy = y - py;
        d += Math.sqrt(dx * dx + dy * dy);
        px = x;
        py = y;
    }
    return d;
}
function quadraticAt(p0, p1, p2, t) {
    var onet = 1 - t;
    return onet * (onet * p0 + 2 * t * p1) + t * t * p2;
}
function quadraticDerivativeAt(p0, p1, p2, t) {
    return 2 * ((1 - t) * (p1 - p0) + t * (p2 - p1));
}
function quadraticRootAt(p0, p1, p2, val, roots) {
    var a = p0 - 2 * p1 + p2;
    var b = 2 * (p1 - p0);
    var c = p0 - val;
    var n = 0;
    if (isAroundZero(a)) {
        if (isNotAroundZero(b)) {
            var t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
    }
    else {
        var disc = b * b - 4 * a * c;
        if (isAroundZero(disc)) {
            var t1 = -b / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
        else if (disc > 0) {
            var discSqrt = mathSqrt(disc);
            var t1 = (-b + discSqrt) / (2 * a);
            var t2 = (-b - discSqrt) / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                roots[n++] = t2;
            }
        }
    }
    return n;
}
function quadraticExtremum(p0, p1, p2) {
    var divider = p0 + p2 - 2 * p1;
    if (divider === 0) {
        return 0.5;
    }
    else {
        return (p0 - p1) / divider;
    }
}
function quadraticSubdivide(p0, p1, p2, t, out) {
    var p01 = (p1 - p0) * t + p0;
    var p12 = (p2 - p1) * t + p1;
    var p012 = (p12 - p01) * t + p01;
    out[0] = p0;
    out[1] = p01;
    out[2] = p012;
    out[3] = p012;
    out[4] = p12;
    out[5] = p2;
}
function quadraticProjectPoint(x0, y0, x1, y1, x2, y2, x, y, out) {
    var t;
    var interval = 0.005;
    var d = Infinity;
    _v0[0] = x;
    _v0[1] = y;
    for (var _t = 0; _t < 1; _t += 0.05) {
        _v1[0] = quadraticAt(x0, x1, x2, _t);
        _v1[1] = quadraticAt(y0, y1, y2, _t);
        var d1 = (0,_vector_js__rspack_import_0.distSquare)(_v0, _v1);
        if (d1 < d) {
            t = _t;
            d = d1;
        }
    }
    d = Infinity;
    for (var i = 0; i < 32; i++) {
        if (interval < EPSILON_NUMERIC) {
            break;
        }
        var prev = t - interval;
        var next = t + interval;
        _v1[0] = quadraticAt(x0, x1, x2, prev);
        _v1[1] = quadraticAt(y0, y1, y2, prev);
        var d1 = (0,_vector_js__rspack_import_0.distSquare)(_v1, _v0);
        if (prev >= 0 && d1 < d) {
            t = prev;
            d = d1;
        }
        else {
            _v2[0] = quadraticAt(x0, x1, x2, next);
            _v2[1] = quadraticAt(y0, y1, y2, next);
            var d2 = (0,_vector_js__rspack_import_0.distSquare)(_v2, _v0);
            if (next <= 1 && d2 < d) {
                t = next;
                d = d2;
            }
            else {
                interval *= 0.5;
            }
        }
    }
    if (out) {
        out[0] = quadraticAt(x0, x1, x2, t);
        out[1] = quadraticAt(y0, y1, y2, t);
    }
    return mathSqrt(d);
}
function quadraticLength(x0, y0, x1, y1, x2, y2, iteration) {
    var px = x0;
    var py = y0;
    var d = 0;
    var step = 1 / iteration;
    for (var i = 1; i <= iteration; i++) {
        var t = i * step;
        var x = quadraticAt(x0, x1, x2, t);
        var y = quadraticAt(y0, y1, y2, t);
        var dx = x - px;
        var dy = y - py;
        d += Math.sqrt(dx * dx + dy * dy);
        px = x;
        py = y;
    }
    return d;
}


}),
45446: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  transformCoordWithViewport: function() { return /* binding */ transformCoordWithViewport; },
  transformLocalCoord: function() { return /* binding */ transformLocalCoord; },
  transformLocalCoordClear: function() { return /* binding */ transformLocalCoordClear; },
  encodeHTML: function() { return /* binding */ encodeHTML; },
  isCanvasEl: function() { return /* binding */ isCanvasEl; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(18311);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/fourPointsTransform.js
var LN2 = Math.log(2);
function determinant(rows, rank, rowStart, rowMask, colMask, detCache) {
    var cacheKey = rowMask + '-' + colMask;
    var fullRank = rows.length;
    if (detCache.hasOwnProperty(cacheKey)) {
        return detCache[cacheKey];
    }
    if (rank === 1) {
        var colStart = Math.round(Math.log(((1 << fullRank) - 1) & ~colMask) / LN2);
        return rows[rowStart][colStart];
    }
    var subRowMask = rowMask | (1 << rowStart);
    var subRowStart = rowStart + 1;
    while (rowMask & (1 << subRowStart)) {
        subRowStart++;
    }
    var sum = 0;
    for (var j = 0, colLocalIdx = 0; j < fullRank; j++) {
        var colTag = 1 << j;
        if (!(colTag & colMask)) {
            sum += (colLocalIdx % 2 ? -1 : 1) * rows[rowStart][j]
                * determinant(rows, rank - 1, subRowStart, subRowMask, colMask | colTag, detCache);
            colLocalIdx++;
        }
    }
    detCache[cacheKey] = sum;
    return sum;
}
function buildTransformer(src, dest) {
    var mA = [
        [src[0], src[1], 1, 0, 0, 0, -dest[0] * src[0], -dest[0] * src[1]],
        [0, 0, 0, src[0], src[1], 1, -dest[1] * src[0], -dest[1] * src[1]],
        [src[2], src[3], 1, 0, 0, 0, -dest[2] * src[2], -dest[2] * src[3]],
        [0, 0, 0, src[2], src[3], 1, -dest[3] * src[2], -dest[3] * src[3]],
        [src[4], src[5], 1, 0, 0, 0, -dest[4] * src[4], -dest[4] * src[5]],
        [0, 0, 0, src[4], src[5], 1, -dest[5] * src[4], -dest[5] * src[5]],
        [src[6], src[7], 1, 0, 0, 0, -dest[6] * src[6], -dest[6] * src[7]],
        [0, 0, 0, src[6], src[7], 1, -dest[7] * src[6], -dest[7] * src[7]]
    ];
    var detCache = {};
    var det = determinant(mA, 8, 0, 0, 0, detCache);
    if (det === 0) {
        return;
    }
    var vh = [];
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            vh[j] == null && (vh[j] = 0);
            vh[j] += ((i + j) % 2 ? -1 : 1)
                * determinant(mA, 7, i === 0 ? 1 : 0, 1 << i, 1 << j, detCache)
                / det * dest[i];
        }
    }
    return function (out, srcPointX, srcPointY) {
        var pk = srcPointX * vh[6] + srcPointY * vh[7] + 1;
        out[0] = (srcPointX * vh[0] + srcPointY * vh[1] + vh[2]) / pk;
        out[1] = (srcPointX * vh[3] + srcPointY * vh[4] + vh[5]) / pk;
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js



var EVENT_SAVED_PROP = '___zrEVENTSAVED';
var _calcOut = [];
function transformLocalCoord(out, elFrom, elTarget, inX, inY) {
    return transformCoordWithViewport(_calcOut, elFrom, inX, inY, true)
        && transformCoordWithViewport(out, elTarget, _calcOut[0], _calcOut[1]);
}
function transformLocalCoordClear(elFrom, elTarget) {
    elFrom && dealClear(elFrom);
    elTarget && dealClear(elTarget);
    function dealClear(el) {
        var saved = el[EVENT_SAVED_PROP];
        if (saved) {
            saved.clearMarkers && saved.clearMarkers();
            delete el[EVENT_SAVED_PROP];
        }
    }
}
function transformCoordWithViewport(out, el, inX, inY, inverse) {
    if (el.getBoundingClientRect && env["default"].domSupported && !isCanvasEl(el)) {
        var saved = el[EVENT_SAVED_PROP] || (el[EVENT_SAVED_PROP] = {});
        var markers = prepareCoordMarkers(el, saved);
        var transformer = preparePointerTransformer(markers, saved, inverse);
        if (transformer) {
            transformer(out, inX, inY);
            return true;
        }
    }
    return false;
}
function prepareCoordMarkers(el, saved) {
    var markers = saved.markers;
    if (markers) {
        return markers;
    }
    markers = saved.markers = [];
    var propLR = ['left', 'right'];
    var propTB = ['top', 'bottom'];
    for (var i = 0; i < 4; i++) {
        var marker = document.createElement('div');
        var stl = marker.style;
        var idxLR = i % 2;
        var idxTB = (i >> 1) % 2;
        stl.cssText = [
            'position: absolute',
            'visibility: hidden',
            'padding: 0',
            'margin: 0',
            'border-width: 0',
            'user-select: none',
            'width:0',
            'height:0',
            propLR[idxLR] + ':0',
            propTB[idxTB] + ':0',
            propLR[1 - idxLR] + ':auto',
            propTB[1 - idxTB] + ':auto',
            ''
        ].join('!important;');
        el.appendChild(marker);
        markers.push(marker);
    }
    saved.clearMarkers = function () {
        (0,util.each)(markers, function (marker) {
            marker.parentNode && marker.parentNode.removeChild(marker);
        });
    };
    return markers;
}
function preparePointerTransformer(markers, saved, inverse) {
    var transformerName = inverse ? 'invTrans' : 'trans';
    var transformer = saved[transformerName];
    var oldSrcCoords = saved.srcCoords;
    var srcCoords = [];
    var destCoords = [];
    var oldCoordTheSame = true;
    for (var i = 0; i < 4; i++) {
        var rect = markers[i].getBoundingClientRect();
        var ii = 2 * i;
        var x = rect.left;
        var y = rect.top;
        srcCoords.push(x, y);
        oldCoordTheSame = oldCoordTheSame && oldSrcCoords && x === oldSrcCoords[ii] && y === oldSrcCoords[ii + 1];
        destCoords.push(markers[i].offsetLeft, markers[i].offsetTop);
    }
    return (oldCoordTheSame && transformer)
        ? transformer
        : (saved.srcCoords = srcCoords,
            saved[transformerName] = inverse
                ? buildTransformer(destCoords, srcCoords)
                : buildTransformer(srcCoords, destCoords));
}
function isCanvasEl(el) {
    return el.nodeName.toUpperCase() === 'CANVAS';
}
var replaceReg = /([&<>"'])/g;
var replaceMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
function encodeHTML(source) {
    return source == null
        ? ''
        : (source + '').replace(replaceReg, function (str, c) {
            return replaceMap[c];
        });
}


}),
18311: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Browser = (function () {
    function Browser() {
        this.firefox = false;
        this.ie = false;
        this.edge = false;
        this.newEdge = false;
        this.weChat = false;
    }
    return Browser;
}());
var Env = (function () {
    function Env() {
        this.browser = new Browser();
        this.node = false;
        this.wxa = false;
        this.worker = false;
        this.svgSupported = false;
        this.touchEventsSupported = false;
        this.pointerEventsSupported = false;
        this.domSupported = false;
        this.transformSupported = false;
        this.transform3dSupported = false;
        this.hasGlobalWindow = typeof window !== 'undefined';
    }
    return Env;
}());
var env = new Env();
if (typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function') {
    env.wxa = true;
    env.touchEventsSupported = true;
}
else if (typeof document === 'undefined' && typeof self !== 'undefined') {
    env.worker = true;
}
else if (!env.hasGlobalWindow
    || 'Deno' in window
    || (typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string'
        && navigator.userAgent.indexOf('Node.js') > -1)) {
    env.node = true;
    env.svgSupported = true;
}
else {
    detect(navigator.userAgent, env);
}
function detect(ua, env) {
    var browser = env.browser;
    var firefox = ua.match(/Firefox\/([\d.]+)/);
    var ie = ua.match(/MSIE\s([\d.]+)/)
        || ua.match(/Trident\/.+?rv:(([\d.]+))/);
    var edge = ua.match(/Edge?\/([\d.]+)/);
    var weChat = (/micromessenger/i).test(ua);
    if (firefox) {
        browser.firefox = true;
        browser.version = firefox[1];
    }
    if (ie) {
        browser.ie = true;
        browser.version = ie[1];
    }
    if (edge) {
        browser.edge = true;
        browser.version = edge[1];
        browser.newEdge = +edge[1].split('.')[0] > 18;
    }
    if (weChat) {
        browser.weChat = true;
    }
    env.svgSupported = typeof SVGRect !== 'undefined';
    env.touchEventsSupported = 'ontouchstart' in window && !browser.ie && !browser.edge;
    env.pointerEventsSupported = 'onpointerdown' in window
        && (browser.edge || (browser.ie && +browser.version >= 11));
    var domSupported = env.domSupported = typeof document !== 'undefined';
    if (domSupported) {
        var style = document.documentElement.style;
        env.transform3dSupported = ((browser.ie && 'transition' in style)
            || browser.edge
            || (('WebKitCSSMatrix' in window) && ('m11' in new WebKitCSSMatrix()))
            || 'MozPerspective' in style)
            && !('OTransition' in style);
        env.transformSupported = env.transform3dSupported
            || (browser.ie && +browser.version >= 9);
    }
}
/* export default */ __webpack_exports__["default"] = (env);


}),
31720: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addEventListener: function() { return addEventListener; },
  clientToLocal: function() { return clientToLocal; },
  getNativeEvent: function() { return getNativeEvent; },
  isMiddleOrRightButtonOnMouseUpDown: function() { return isMiddleOrRightButtonOnMouseUpDown; },
  normalizeEvent: function() { return normalizeEvent; },
  removeEventListener: function() { return removeEventListener; },
  stop: function() { return stop; }
});
/* import */ var _env_js__rspack_import_0 = __webpack_require__(18311);
/* import */ var _dom_js__rspack_import_1 = __webpack_require__(45446);



var MOUSE_EVENT_REG = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
var _calcOut = [];
var firefoxNotSupportOffsetXY = _env_js__rspack_import_0["default"].browser.firefox
    && +_env_js__rspack_import_0["default"].browser.version.split('.')[0] < 39;
function clientToLocal(el, e, out, calculate) {
    out = out || {};
    if (calculate) {
        calculateZrXY(el, e, out);
    }
    else if (firefoxNotSupportOffsetXY
        && e.layerX != null
        && e.layerX !== e.offsetX) {
        out.zrX = e.layerX;
        out.zrY = e.layerY;
    }
    else if (e.offsetX != null) {
        out.zrX = e.offsetX;
        out.zrY = e.offsetY;
    }
    else {
        calculateZrXY(el, e, out);
    }
    return out;
}
function calculateZrXY(el, e, out) {
    if (_env_js__rspack_import_0["default"].domSupported && el.getBoundingClientRect) {
        var ex = e.clientX;
        var ey = e.clientY;
        if ((0,_dom_js__rspack_import_1.isCanvasEl)(el)) {
            var box = el.getBoundingClientRect();
            out.zrX = ex - box.left;
            out.zrY = ey - box.top;
            return;
        }
        else {
            if ((0,_dom_js__rspack_import_1.transformCoordWithViewport)(_calcOut, el, ex, ey)) {
                out.zrX = _calcOut[0];
                out.zrY = _calcOut[1];
                return;
            }
        }
    }
    out.zrX = out.zrY = 0;
}
function getNativeEvent(e) {
    return e
        || window.event;
}
function normalizeEvent(el, e, calculate) {
    e = getNativeEvent(e);
    if (e.zrX != null) {
        return e;
    }
    var eventType = e.type;
    var isTouch = eventType && eventType.indexOf('touch') >= 0;
    if (!isTouch) {
        clientToLocal(el, e, e, calculate);
        var wheelDelta = getWheelDeltaMayPolyfill(e);
        e.zrDelta = wheelDelta ? wheelDelta / 120 : -(e.detail || 0) / 3;
    }
    else {
        var touch = eventType !== 'touchend'
            ? e.targetTouches[0]
            : e.changedTouches[0];
        touch && clientToLocal(el, touch, e, calculate);
    }
    var button = e.button;
    if (e.which == null && button !== undefined && MOUSE_EVENT_REG.test(e.type)) {
        e.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
    }
    return e;
}
function getWheelDeltaMayPolyfill(e) {
    var rawWheelDelta = e.wheelDelta;
    if (rawWheelDelta) {
        return rawWheelDelta;
    }
    var deltaX = e.deltaX;
    var deltaY = e.deltaY;
    if (deltaX == null || deltaY == null) {
        return rawWheelDelta;
    }
    var delta = deltaY !== 0 ? Math.abs(deltaY) : Math.abs(deltaX);
    var sign = deltaY > 0 ? -1
        : deltaY < 0 ? 1
            : deltaX > 0 ? -1
                : 1;
    return 3 * delta * sign;
}
function addEventListener(el, name, handler, opt) {
    el.addEventListener(name, handler, opt);
}
function removeEventListener(el, name, handler, opt) {
    el.removeEventListener(name, handler, opt);
}
var stop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.cancelBubble = true;
};
function isMiddleOrRightButtonOnMouseUpDown(e) {
    return e.which === 2 || e.which === 3;
}



}),
46239: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clone: function() { return clone; },
  copy: function() { return copy; },
  create: function() { return create; },
  identity: function() { return identity; },
  invert: function() { return invert; },
  mul: function() { return mul; },
  rotate: function() { return rotate; },
  scale: function() { return scale; },
  translate: function() { return translate; }
});
function create() {
    return [1, 0, 0, 1, 0, 0];
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
}
function copy(out, m) {
    out[0] = m[0];
    out[1] = m[1];
    out[2] = m[2];
    out[3] = m[3];
    out[4] = m[4];
    out[5] = m[5];
    return out;
}
function mul(out, m1, m2) {
    var out0 = m1[0] * m2[0] + m1[2] * m2[1];
    var out1 = m1[1] * m2[0] + m1[3] * m2[1];
    var out2 = m1[0] * m2[2] + m1[2] * m2[3];
    var out3 = m1[1] * m2[2] + m1[3] * m2[3];
    var out4 = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
    var out5 = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = out3;
    out[4] = out4;
    out[5] = out5;
    return out;
}
function translate(out, a, v) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4] + v[0];
    out[5] = a[5] + v[1];
    return out;
}
function rotate(out, a, rad, pivot) {
    if (pivot === void 0) { pivot = [0, 0]; }
    var aa = a[0];
    var ac = a[2];
    var atx = a[4];
    var ab = a[1];
    var ad = a[3];
    var aty = a[5];
    var st = Math.sin(rad);
    var ct = Math.cos(rad);
    out[0] = aa * ct + ab * st;
    out[1] = -aa * st + ab * ct;
    out[2] = ac * ct + ad * st;
    out[3] = -ac * st + ct * ad;
    out[4] = ct * (atx - pivot[0]) + st * (aty - pivot[1]) + pivot[0];
    out[5] = ct * (aty - pivot[1]) - st * (atx - pivot[0]) + pivot[1];
    return out;
}
function scale(out, a, v) {
    var vx = v[0];
    var vy = v[1];
    out[0] = a[0] * vx;
    out[1] = a[1] * vy;
    out[2] = a[2] * vx;
    out[3] = a[3] * vy;
    out[4] = a[4] * vx;
    out[5] = a[5] * vy;
    return out;
}
function invert(out, a) {
    var aa = a[0];
    var ac = a[2];
    var atx = a[4];
    var ab = a[1];
    var ad = a[3];
    var aty = a[5];
    var det = aa * ad - ab * ac;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
}
function clone(a) {
    var b = create();
    copy(b, a);
    return b;
}


}),
70145: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_FONT: function() { return DEFAULT_FONT; },
  DEFAULT_FONT_FAMILY: function() { return DEFAULT_FONT_FAMILY; },
  DEFAULT_FONT_SIZE: function() { return DEFAULT_FONT_SIZE; },
  DEFAULT_TEXT_WIDTH_MAP: function() { return DEFAULT_TEXT_WIDTH_MAP; },
  platformApi: function() { return platformApi; },
  setPlatformAPI: function() { return setPlatformAPI; }
});
var DEFAULT_FONT_SIZE = 12;
var DEFAULT_FONT_FAMILY = 'sans-serif';
var DEFAULT_FONT = DEFAULT_FONT_SIZE + "px " + DEFAULT_FONT_FAMILY;
var OFFSET = 20;
var SCALE = 100;
var defaultWidthMapStr = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function getTextWidthMap(mapStr) {
    var map = {};
    if (typeof JSON === 'undefined') {
        return map;
    }
    for (var i = 0; i < mapStr.length; i++) {
        var char = String.fromCharCode(i + 32);
        var size = (mapStr.charCodeAt(i) - OFFSET) / SCALE;
        map[char] = size;
    }
    return map;
}
var DEFAULT_TEXT_WIDTH_MAP = getTextWidthMap(defaultWidthMapStr);
var platformApi = {
    createCanvas: function () {
        return typeof document !== 'undefined'
            && document.createElement('canvas');
    },
    measureText: (function () {
        var _ctx;
        var _cachedFont;
        return function (text, font) {
            if (!_ctx) {
                var canvas = platformApi.createCanvas();
                _ctx = canvas && canvas.getContext('2d');
            }
            if (_ctx) {
                if (_cachedFont !== font) {
                    _cachedFont = _ctx.font = font || DEFAULT_FONT;
                }
                return _ctx.measureText(text);
            }
            else {
                text = text || '';
                font = font || DEFAULT_FONT;
                var res = /((?:\d+)?\.?\d*)px/.exec(font);
                var fontSize = res && +res[1] || DEFAULT_FONT_SIZE;
                var width = 0;
                if (font.indexOf('mono') >= 0) {
                    width = fontSize * text.length;
                }
                else {
                    for (var i = 0; i < text.length; i++) {
                        var preCalcWidth = DEFAULT_TEXT_WIDTH_MAP[text[i]];
                        width += preCalcWidth == null ? fontSize : (preCalcWidth * fontSize);
                    }
                }
                return { width: width };
            }
        };
    })(),
    loadImage: function (src, onload, onerror) {
        var image = new Image();
        image.onload = onload;
        image.onerror = onerror;
        image.src = src;
        return image;
    }
};
function setPlatformAPI(newPlatformApis) {
    for (var key in platformApi) {
        if (newPlatformApis[key]) {
            platformApi[key] = newPlatformApis[key];
        }
    }
}


}),
25874: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return sort; }
});
var DEFAULT_MIN_MERGE = 32;
var DEFAULT_MIN_GALLOPING = 7;
function minRunLength(n) {
    var r = 0;
    while (n >= DEFAULT_MIN_MERGE) {
        r |= n & 1;
        n >>= 1;
    }
    return n + r;
}
function makeAscendingRun(array, lo, hi, compare) {
    var runHi = lo + 1;
    if (runHi === hi) {
        return 1;
    }
    if (compare(array[runHi++], array[lo]) < 0) {
        while (runHi < hi && compare(array[runHi], array[runHi - 1]) < 0) {
            runHi++;
        }
        reverseRun(array, lo, runHi);
    }
    else {
        while (runHi < hi && compare(array[runHi], array[runHi - 1]) >= 0) {
            runHi++;
        }
    }
    return runHi - lo;
}
function reverseRun(array, lo, hi) {
    hi--;
    while (lo < hi) {
        var t = array[lo];
        array[lo++] = array[hi];
        array[hi--] = t;
    }
}
function binaryInsertionSort(array, lo, hi, start, compare) {
    if (start === lo) {
        start++;
    }
    for (; start < hi; start++) {
        var pivot = array[start];
        var left = lo;
        var right = start;
        var mid;
        while (left < right) {
            mid = left + right >>> 1;
            if (compare(pivot, array[mid]) < 0) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        var n = start - left;
        switch (n) {
            case 3:
                array[left + 3] = array[left + 2];
            case 2:
                array[left + 2] = array[left + 1];
            case 1:
                array[left + 1] = array[left];
                break;
            default:
                while (n > 0) {
                    array[left + n] = array[left + n - 1];
                    n--;
                }
        }
        array[left] = pivot;
    }
}
function gallopLeft(value, array, start, length, hint, compare) {
    var lastOffset = 0;
    var maxOffset = 0;
    var offset = 1;
    if (compare(value, array[start + hint]) > 0) {
        maxOffset = length - hint;
        while (offset < maxOffset && compare(value, array[start + hint + offset]) > 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        lastOffset += hint;
        offset += hint;
    }
    else {
        maxOffset = hint + 1;
        while (offset < maxOffset && compare(value, array[start + hint - offset]) <= 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        var tmp = lastOffset;
        lastOffset = hint - offset;
        offset = hint - tmp;
    }
    lastOffset++;
    while (lastOffset < offset) {
        var m = lastOffset + (offset - lastOffset >>> 1);
        if (compare(value, array[start + m]) > 0) {
            lastOffset = m + 1;
        }
        else {
            offset = m;
        }
    }
    return offset;
}
function gallopRight(value, array, start, length, hint, compare) {
    var lastOffset = 0;
    var maxOffset = 0;
    var offset = 1;
    if (compare(value, array[start + hint]) < 0) {
        maxOffset = hint + 1;
        while (offset < maxOffset && compare(value, array[start + hint - offset]) < 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        var tmp = lastOffset;
        lastOffset = hint - offset;
        offset = hint - tmp;
    }
    else {
        maxOffset = length - hint;
        while (offset < maxOffset && compare(value, array[start + hint + offset]) >= 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        lastOffset += hint;
        offset += hint;
    }
    lastOffset++;
    while (lastOffset < offset) {
        var m = lastOffset + (offset - lastOffset >>> 1);
        if (compare(value, array[start + m]) < 0) {
            offset = m;
        }
        else {
            lastOffset = m + 1;
        }
    }
    return offset;
}
function TimSort(array, compare) {
    var minGallop = DEFAULT_MIN_GALLOPING;
    var runStart;
    var runLength;
    var stackSize = 0;
    var tmp = [];
    runStart = [];
    runLength = [];
    function pushRun(_runStart, _runLength) {
        runStart[stackSize] = _runStart;
        runLength[stackSize] = _runLength;
        stackSize += 1;
    }
    function mergeRuns() {
        while (stackSize > 1) {
            var n = stackSize - 2;
            if ((n >= 1 && runLength[n - 1] <= runLength[n] + runLength[n + 1])
                || (n >= 2 && runLength[n - 2] <= runLength[n] + runLength[n - 1])) {
                if (runLength[n - 1] < runLength[n + 1]) {
                    n--;
                }
            }
            else if (runLength[n] > runLength[n + 1]) {
                break;
            }
            mergeAt(n);
        }
    }
    function forceMergeRuns() {
        while (stackSize > 1) {
            var n = stackSize - 2;
            if (n > 0 && runLength[n - 1] < runLength[n + 1]) {
                n--;
            }
            mergeAt(n);
        }
    }
    function mergeAt(i) {
        var start1 = runStart[i];
        var length1 = runLength[i];
        var start2 = runStart[i + 1];
        var length2 = runLength[i + 1];
        runLength[i] = length1 + length2;
        if (i === stackSize - 3) {
            runStart[i + 1] = runStart[i + 2];
            runLength[i + 1] = runLength[i + 2];
        }
        stackSize--;
        var k = gallopRight(array[start2], array, start1, length1, 0, compare);
        start1 += k;
        length1 -= k;
        if (length1 === 0) {
            return;
        }
        length2 = gallopLeft(array[start1 + length1 - 1], array, start2, length2, length2 - 1, compare);
        if (length2 === 0) {
            return;
        }
        if (length1 <= length2) {
            mergeLow(start1, length1, start2, length2);
        }
        else {
            mergeHigh(start1, length1, start2, length2);
        }
    }
    function mergeLow(start1, length1, start2, length2) {
        var i = 0;
        for (i = 0; i < length1; i++) {
            tmp[i] = array[start1 + i];
        }
        var cursor1 = 0;
        var cursor2 = start2;
        var dest = start1;
        array[dest++] = array[cursor2++];
        if (--length2 === 0) {
            for (i = 0; i < length1; i++) {
                array[dest + i] = tmp[cursor1 + i];
            }
            return;
        }
        if (length1 === 1) {
            for (i = 0; i < length2; i++) {
                array[dest + i] = array[cursor2 + i];
            }
            array[dest + length2] = tmp[cursor1];
            return;
        }
        var _minGallop = minGallop;
        var count1;
        var count2;
        var exit;
        while (1) {
            count1 = 0;
            count2 = 0;
            exit = false;
            do {
                if (compare(array[cursor2], tmp[cursor1]) < 0) {
                    array[dest++] = array[cursor2++];
                    count2++;
                    count1 = 0;
                    if (--length2 === 0) {
                        exit = true;
                        break;
                    }
                }
                else {
                    array[dest++] = tmp[cursor1++];
                    count1++;
                    count2 = 0;
                    if (--length1 === 1) {
                        exit = true;
                        break;
                    }
                }
            } while ((count1 | count2) < _minGallop);
            if (exit) {
                break;
            }
            do {
                count1 = gallopRight(array[cursor2], tmp, cursor1, length1, 0, compare);
                if (count1 !== 0) {
                    for (i = 0; i < count1; i++) {
                        array[dest + i] = tmp[cursor1 + i];
                    }
                    dest += count1;
                    cursor1 += count1;
                    length1 -= count1;
                    if (length1 <= 1) {
                        exit = true;
                        break;
                    }
                }
                array[dest++] = array[cursor2++];
                if (--length2 === 0) {
                    exit = true;
                    break;
                }
                count2 = gallopLeft(tmp[cursor1], array, cursor2, length2, 0, compare);
                if (count2 !== 0) {
                    for (i = 0; i < count2; i++) {
                        array[dest + i] = array[cursor2 + i];
                    }
                    dest += count2;
                    cursor2 += count2;
                    length2 -= count2;
                    if (length2 === 0) {
                        exit = true;
                        break;
                    }
                }
                array[dest++] = tmp[cursor1++];
                if (--length1 === 1) {
                    exit = true;
                    break;
                }
                _minGallop--;
            } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
            if (exit) {
                break;
            }
            if (_minGallop < 0) {
                _minGallop = 0;
            }
            _minGallop += 2;
        }
        minGallop = _minGallop;
        minGallop < 1 && (minGallop = 1);
        if (length1 === 1) {
            for (i = 0; i < length2; i++) {
                array[dest + i] = array[cursor2 + i];
            }
            array[dest + length2] = tmp[cursor1];
        }
        else if (length1 === 0) {
            throw new Error();
        }
        else {
            for (i = 0; i < length1; i++) {
                array[dest + i] = tmp[cursor1 + i];
            }
        }
    }
    function mergeHigh(start1, length1, start2, length2) {
        var i = 0;
        for (i = 0; i < length2; i++) {
            tmp[i] = array[start2 + i];
        }
        var cursor1 = start1 + length1 - 1;
        var cursor2 = length2 - 1;
        var dest = start2 + length2 - 1;
        var customCursor = 0;
        var customDest = 0;
        array[dest--] = array[cursor1--];
        if (--length1 === 0) {
            customCursor = dest - (length2 - 1);
            for (i = 0; i < length2; i++) {
                array[customCursor + i] = tmp[i];
            }
            return;
        }
        if (length2 === 1) {
            dest -= length1;
            cursor1 -= length1;
            customDest = dest + 1;
            customCursor = cursor1 + 1;
            for (i = length1 - 1; i >= 0; i--) {
                array[customDest + i] = array[customCursor + i];
            }
            array[dest] = tmp[cursor2];
            return;
        }
        var _minGallop = minGallop;
        while (true) {
            var count1 = 0;
            var count2 = 0;
            var exit = false;
            do {
                if (compare(tmp[cursor2], array[cursor1]) < 0) {
                    array[dest--] = array[cursor1--];
                    count1++;
                    count2 = 0;
                    if (--length1 === 0) {
                        exit = true;
                        break;
                    }
                }
                else {
                    array[dest--] = tmp[cursor2--];
                    count2++;
                    count1 = 0;
                    if (--length2 === 1) {
                        exit = true;
                        break;
                    }
                }
            } while ((count1 | count2) < _minGallop);
            if (exit) {
                break;
            }
            do {
                count1 = length1 - gallopRight(tmp[cursor2], array, start1, length1, length1 - 1, compare);
                if (count1 !== 0) {
                    dest -= count1;
                    cursor1 -= count1;
                    length1 -= count1;
                    customDest = dest + 1;
                    customCursor = cursor1 + 1;
                    for (i = count1 - 1; i >= 0; i--) {
                        array[customDest + i] = array[customCursor + i];
                    }
                    if (length1 === 0) {
                        exit = true;
                        break;
                    }
                }
                array[dest--] = tmp[cursor2--];
                if (--length2 === 1) {
                    exit = true;
                    break;
                }
                count2 = length2 - gallopLeft(array[cursor1], tmp, 0, length2, length2 - 1, compare);
                if (count2 !== 0) {
                    dest -= count2;
                    cursor2 -= count2;
                    length2 -= count2;
                    customDest = dest + 1;
                    customCursor = cursor2 + 1;
                    for (i = 0; i < count2; i++) {
                        array[customDest + i] = tmp[customCursor + i];
                    }
                    if (length2 <= 1) {
                        exit = true;
                        break;
                    }
                }
                array[dest--] = array[cursor1--];
                if (--length1 === 0) {
                    exit = true;
                    break;
                }
                _minGallop--;
            } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
            if (exit) {
                break;
            }
            if (_minGallop < 0) {
                _minGallop = 0;
            }
            _minGallop += 2;
        }
        minGallop = _minGallop;
        if (minGallop < 1) {
            minGallop = 1;
        }
        if (length2 === 1) {
            dest -= length1;
            cursor1 -= length1;
            customDest = dest + 1;
            customCursor = cursor1 + 1;
            for (i = length1 - 1; i >= 0; i--) {
                array[customDest + i] = array[customCursor + i];
            }
            array[dest] = tmp[cursor2];
        }
        else if (length2 === 0) {
            throw new Error();
        }
        else {
            customCursor = dest - (length2 - 1);
            for (i = 0; i < length2; i++) {
                array[customCursor + i] = tmp[i];
            }
        }
    }
    return {
        mergeRuns: mergeRuns,
        forceMergeRuns: forceMergeRuns,
        pushRun: pushRun
    };
}
function sort(array, compare, lo, hi) {
    if (!lo) {
        lo = 0;
    }
    if (!hi) {
        hi = array.length;
    }
    var remaining = hi - lo;
    if (remaining < 2) {
        return;
    }
    var runLength = 0;
    if (remaining < DEFAULT_MIN_MERGE) {
        runLength = makeAscendingRun(array, lo, hi, compare);
        binaryInsertionSort(array, lo, hi, lo + runLength, compare);
        return;
    }
    var ts = TimSort(array, compare);
    var minRun = minRunLength(remaining);
    do {
        runLength = makeAscendingRun(array, lo, hi, compare);
        if (runLength < minRun) {
            var force = remaining;
            if (force > minRun) {
                force = minRun;
            }
            binaryInsertionSort(array, lo, lo + force, lo + runLength, compare);
            runLength = force;
        }
        ts.pushRun(lo, runLength);
        ts.mergeRuns();
        remaining -= runLength;
        lo += runLength;
    } while (remaining !== 0);
    ts.forceMergeRuns();
}


}),
9774: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EPSILON: function() { return EPSILON; },
  HashMap: function() { return HashMap; },
  RADIAN_TO_DEGREE: function() { return RADIAN_TO_DEGREE; },
  assert: function() { return assert; },
  bind: function() { return bind; },
  clone: function() { return clone; },
  concatArray: function() { return concatArray; },
  createCanvas: function() { return createCanvas; },
  createHashMap: function() { return createHashMap; },
  createObject: function() { return createObject; },
  curry: function() { return curry; },
  defaults: function() { return defaults; },
  disableUserSelect: function() { return disableUserSelect; },
  each: function() { return each; },
  eqNaN: function() { return eqNaN; },
  extend: function() { return extend; },
  filter: function() { return filter; },
  find: function() { return find; },
  guid: function() { return guid; },
  hasOwn: function() { return hasOwn; },
  indexOf: function() { return indexOf; },
  inherits: function() { return inherits; },
  isArray: function() { return isArray; },
  isArrayLike: function() { return isArrayLike; },
  isBuiltInObject: function() { return isBuiltInObject; },
  isDom: function() { return isDom; },
  isFunction: function() { return isFunction; },
  isGradientObject: function() { return isGradientObject; },
  isImagePatternObject: function() { return isImagePatternObject; },
  isNumber: function() { return isNumber; },
  isObject: function() { return isObject; },
  isPrimitive: function() { return isPrimitive; },
  isRegExp: function() { return isRegExp; },
  isString: function() { return isString; },
  isStringSafe: function() { return isStringSafe; },
  isTypedArray: function() { return isTypedArray; },
  keys: function() { return keys; },
  logError: function() { return logError; },
  map: function() { return map; },
  merge: function() { return merge; },
  mergeAll: function() { return mergeAll; },
  mixin: function() { return mixin; },
  noop: function() { return noop; },
  normalizeCssArray: function() { return normalizeCssArray; },
  reduce: function() { return reduce; },
  retrieve: function() { return retrieve; },
  retrieve2: function() { return retrieve2; },
  retrieve3: function() { return retrieve3; },
  setAsPrimitive: function() { return setAsPrimitive; },
  slice: function() { return slice; },
  trim: function() { return trim; }
});
/* import */ var _platform_js__rspack_import_0 = __webpack_require__(70145);

var BUILTIN_OBJECT = reduce([
    'Function',
    'RegExp',
    'Date',
    'Error',
    'CanvasGradient',
    'CanvasPattern',
    'Image',
    'Canvas'
], function (obj, val) {
    obj['[object ' + val + ']'] = true;
    return obj;
}, {});
var TYPED_ARRAY = reduce([
    'Int8',
    'Uint8',
    'Uint8Clamped',
    'Int16',
    'Uint16',
    'Int32',
    'Uint32',
    'Float32',
    'Float64'
], function (obj, val) {
    obj['[object ' + val + 'Array]'] = true;
    return obj;
}, {});
var objToString = Object.prototype.toString;
var arrayProto = Array.prototype;
var nativeForEach = arrayProto.forEach;
var nativeFilter = arrayProto.filter;
var nativeSlice = arrayProto.slice;
var nativeMap = arrayProto.map;
var ctorFunction = function () { }.constructor;
var protoFunction = ctorFunction ? ctorFunction.prototype : null;
var protoKey = '__proto__';
var idStart = 0x0907;
function guid() {
    return idStart++;
}
function logError() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof console !== 'undefined') {
        console.error.apply(console, args);
    }
}
function clone(source) {
    if (source == null || typeof source !== 'object') {
        return source;
    }
    var result = source;
    var typeStr = objToString.call(source);
    if (typeStr === '[object Array]') {
        if (!isPrimitive(source)) {
            result = [];
            for (var i = 0, len = source.length; i < len; i++) {
                result[i] = clone(source[i]);
            }
        }
    }
    else if (TYPED_ARRAY[typeStr]) {
        if (!isPrimitive(source)) {
            var Ctor = source.constructor;
            if (Ctor.from) {
                result = Ctor.from(source);
            }
            else {
                result = new Ctor(source.length);
                for (var i = 0, len = source.length; i < len; i++) {
                    result[i] = source[i];
                }
            }
        }
    }
    else if (!BUILTIN_OBJECT[typeStr] && !isPrimitive(source) && !isDom(source)) {
        result = {};
        for (var key in source) {
            if (source.hasOwnProperty(key) && key !== protoKey) {
                result[key] = clone(source[key]);
            }
        }
    }
    return result;
}
function merge(target, source, overwrite) {
    if (!isObject(source) || !isObject(target)) {
        return overwrite ? clone(source) : target;
    }
    for (var key in source) {
        if (source.hasOwnProperty(key) && key !== protoKey) {
            var targetProp = target[key];
            var sourceProp = source[key];
            if (isObject(sourceProp)
                && isObject(targetProp)
                && !isArray(sourceProp)
                && !isArray(targetProp)
                && !isDom(sourceProp)
                && !isDom(targetProp)
                && !isBuiltInObject(sourceProp)
                && !isBuiltInObject(targetProp)
                && !isPrimitive(sourceProp)
                && !isPrimitive(targetProp)) {
                merge(targetProp, sourceProp, overwrite);
            }
            else if (overwrite || !(key in target)) {
                target[key] = clone(source[key]);
            }
        }
    }
    return target;
}
function mergeAll(targetAndSources, overwrite) {
    var result = targetAndSources[0];
    for (var i = 1, len = targetAndSources.length; i < len; i++) {
        result = merge(result, targetAndSources[i], overwrite);
    }
    return result;
}
function extend(target, source) {
    if (Object.assign) {
        Object.assign(target, source);
    }
    else {
        for (var key in source) {
            if (source.hasOwnProperty(key) && key !== protoKey) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
function defaults(target, source, overlay) {
    var keysArr = keys(source);
    for (var i = 0, len = keysArr.length; i < len; i++) {
        var key = keysArr[i];
        if ((overlay ? source[key] != null : target[key] == null)) {
            target[key] = source[key];
        }
    }
    return target;
}
var createCanvas = _platform_js__rspack_import_0.platformApi.createCanvas;
function indexOf(array, value) {
    if (array) {
        if (array.indexOf) {
            return array.indexOf(value);
        }
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === value) {
                return i;
            }
        }
    }
    return -1;
}
function inherits(clazz, baseClazz) {
    var clazzPrototype = clazz.prototype;
    function F() { }
    F.prototype = baseClazz.prototype;
    clazz.prototype = new F();
    for (var prop in clazzPrototype) {
        if (clazzPrototype.hasOwnProperty(prop)) {
            clazz.prototype[prop] = clazzPrototype[prop];
        }
    }
    clazz.prototype.constructor = clazz;
    clazz.superClass = baseClazz;
}
function mixin(target, source, override) {
    target = 'prototype' in target ? target.prototype : target;
    source = 'prototype' in source ? source.prototype : source;
    if (Object.getOwnPropertyNames) {
        var keyList = Object.getOwnPropertyNames(source);
        for (var i = 0; i < keyList.length; i++) {
            var key = keyList[i];
            if (key !== 'constructor') {
                if ((override ? source[key] != null : target[key] == null)) {
                    target[key] = source[key];
                }
            }
        }
    }
    else {
        defaults(target, source, override);
    }
}
function isArrayLike(data) {
    if (!data) {
        return false;
    }
    if (typeof data === 'string') {
        return false;
    }
    return typeof data.length === 'number';
}
function each(arr, cb, context) {
    if (!(arr && cb)) {
        return;
    }
    if (arr.forEach && arr.forEach === nativeForEach) {
        arr.forEach(cb, context);
    }
    else if (arr.length === +arr.length) {
        for (var i = 0, len = arr.length; i < len; i++) {
            cb.call(context, arr[i], i, arr);
        }
    }
    else {
        for (var key in arr) {
            if (arr.hasOwnProperty(key)) {
                cb.call(context, arr[key], key, arr);
            }
        }
    }
}
function map(arr, cb, context) {
    if (!arr) {
        return [];
    }
    if (!cb) {
        return slice(arr);
    }
    if (arr.map && arr.map === nativeMap) {
        return arr.map(cb, context);
    }
    else {
        var result = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            result.push(cb.call(context, arr[i], i, arr));
        }
        return result;
    }
}
function reduce(arr, cb, memo, context) {
    if (!(arr && cb)) {
        return;
    }
    for (var i = 0, len = arr.length; i < len; i++) {
        memo = cb.call(context, memo, arr[i], i, arr);
    }
    return memo;
}
function filter(arr, cb, context) {
    if (!arr) {
        return [];
    }
    if (!cb) {
        return slice(arr);
    }
    if (arr.filter && arr.filter === nativeFilter) {
        return arr.filter(cb, context);
    }
    else {
        var result = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (cb.call(context, arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
function find(arr, cb, context) {
    if (!(arr && cb)) {
        return;
    }
    for (var i = 0, len = arr.length; i < len; i++) {
        if (cb.call(context, arr[i], i, arr)) {
            return arr[i];
        }
    }
}
function keys(obj) {
    if (!obj) {
        return [];
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    var keyList = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyList.push(key);
        }
    }
    return keyList;
}
function bindPolyfill(func, context) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return function () {
        return func.apply(context, args.concat(nativeSlice.call(arguments)));
    };
}
var bind = (protoFunction && isFunction(protoFunction.bind))
    ? protoFunction.call.bind(protoFunction.bind)
    : bindPolyfill;
function curry(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function () {
        return func.apply(this, args.concat(nativeSlice.call(arguments)));
    };
}

function isArray(value) {
    if (Array.isArray) {
        return Array.isArray(value);
    }
    return objToString.call(value) === '[object Array]';
}
function isFunction(value) {
    return typeof value === 'function';
}
function isString(value) {
    return typeof value === 'string';
}
function isStringSafe(value) {
    return objToString.call(value) === '[object String]';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isObject(value) {
    var type = typeof value;
    return type === 'function' || (!!value && type === 'object');
}
function isBuiltInObject(value) {
    return !!BUILTIN_OBJECT[objToString.call(value)];
}
function isTypedArray(value) {
    return !!TYPED_ARRAY[objToString.call(value)];
}
function isDom(value) {
    return typeof value === 'object'
        && typeof value.nodeType === 'number'
        && typeof value.ownerDocument === 'object';
}
function isGradientObject(value) {
    return value.colorStops != null;
}
function isImagePatternObject(value) {
    return value.image != null;
}
function isRegExp(value) {
    return objToString.call(value) === '[object RegExp]';
}
function eqNaN(value) {
    return value !== value;
}
function retrieve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0, len = args.length; i < len; i++) {
        if (args[i] != null) {
            return args[i];
        }
    }
}
function retrieve2(value0, value1) {
    return value0 != null
        ? value0
        : value1;
}
function retrieve3(value0, value1, value2) {
    return value0 != null
        ? value0
        : value1 != null
            ? value1
            : value2;
}
function slice(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return nativeSlice.apply(arr, args);
}
function normalizeCssArray(val) {
    if (typeof (val) === 'number') {
        return [val, val, val, val];
    }
    var len = val.length;
    if (len === 2) {
        return [val[0], val[1], val[0], val[1]];
    }
    else if (len === 3) {
        return [val[0], val[1], val[2], val[1]];
    }
    return val;
}
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function trim(str) {
    if (str == null) {
        return null;
    }
    else if (typeof str.trim === 'function') {
        return str.trim();
    }
    else {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
}
var primitiveKey = '__ec_primitive__';
function setAsPrimitive(obj) {
    obj[primitiveKey] = true;
}
function isPrimitive(obj) {
    return obj[primitiveKey];
}
var MapPolyfill = (function () {
    function MapPolyfill() {
        this.data = {};
    }
    MapPolyfill.prototype["delete"] = function (key) {
        var existed = this.has(key);
        if (existed) {
            delete this.data[key];
        }
        return existed;
    };
    MapPolyfill.prototype.has = function (key) {
        return this.data.hasOwnProperty(key);
    };
    MapPolyfill.prototype.get = function (key) {
        return this.data[key];
    };
    MapPolyfill.prototype.set = function (key, value) {
        this.data[key] = value;
        return this;
    };
    MapPolyfill.prototype.keys = function () {
        return keys(this.data);
    };
    MapPolyfill.prototype.forEach = function (callback) {
        var data = this.data;
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                callback(data[key], key);
            }
        }
    };
    return MapPolyfill;
}());
var isNativeMapSupported = typeof Map === 'function';
function maybeNativeMap() {
    return (isNativeMapSupported ? new Map() : new MapPolyfill());
}
var HashMap = (function () {
    function HashMap(obj) {
        var isArr = isArray(obj);
        this.data = maybeNativeMap();
        var thisMap = this;
        (obj instanceof HashMap)
            ? obj.each(visit)
            : (obj && each(obj, visit));
        function visit(value, key) {
            isArr ? thisMap.set(value, key) : thisMap.set(key, value);
        }
    }
    HashMap.prototype.hasKey = function (key) {
        return this.data.has(key);
    };
    HashMap.prototype.get = function (key) {
        return this.data.get(key);
    };
    HashMap.prototype.set = function (key, value) {
        this.data.set(key, value);
        return value;
    };
    HashMap.prototype.each = function (cb, context) {
        this.data.forEach(function (value, key) {
            cb.call(context, value, key);
        });
    };
    HashMap.prototype.keys = function () {
        var keys = this.data.keys();
        return isNativeMapSupported
            ? Array.from(keys)
            : keys;
    };
    HashMap.prototype.removeKey = function (key) {
        this.data["delete"](key);
    };
    return HashMap;
}());

function createHashMap(obj) {
    return new HashMap(obj);
}
function concatArray(a, b) {
    var newArray = new a.constructor(a.length + b.length);
    for (var i = 0; i < a.length; i++) {
        newArray[i] = a[i];
    }
    var offset = a.length;
    for (var i = 0; i < b.length; i++) {
        newArray[i + offset] = b[i];
    }
    return newArray;
}
function createObject(proto, properties) {
    var obj;
    if (Object.create) {
        obj = Object.create(proto);
    }
    else {
        var StyleCtor = function () { };
        StyleCtor.prototype = proto;
        obj = new StyleCtor();
    }
    if (properties) {
        extend(obj, properties);
    }
    return obj;
}
function disableUserSelect(dom) {
    var domStyle = dom.style;
    domStyle.webkitUserSelect = 'none';
    domStyle.userSelect = 'none';
    domStyle.webkitTapHighlightColor = 'rgba(0,0,0,0)';
    domStyle['-webkit-touch-callout'] = 'none';
}
function hasOwn(own, prop) {
    return own.hasOwnProperty(prop);
}
function noop() { }
var RADIAN_TO_DEGREE = 180 / Math.PI;
var EPSILON = Number.EPSILON || Math.pow(2, -52);


}),
44721: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  add: function() { return add; },
  applyTransform: function() { return applyTransform; },
  clone: function() { return clone; },
  copy: function() { return copy; },
  create: function() { return create; },
  dist: function() { return dist; },
  distSquare: function() { return distSquare; },
  distance: function() { return distance; },
  distanceSquare: function() { return distanceSquare; },
  div: function() { return div; },
  dot: function() { return dot; },
  len: function() { return len; },
  lenSquare: function() { return lenSquare; },
  length: function() { return length; },
  lengthSquare: function() { return lengthSquare; },
  lerp: function() { return lerp; },
  max: function() { return max; },
  min: function() { return min; },
  mul: function() { return mul; },
  negate: function() { return negate; },
  normalize: function() { return normalize; },
  scale: function() { return scale; },
  scaleAndAdd: function() { return scaleAndAdd; },
  set: function() { return set; },
  sub: function() { return sub; }
});
function create(x, y) {
    if (x == null) {
        x = 0;
    }
    if (y == null) {
        y = 0;
    }
    return [x, y];
}
function copy(out, v) {
    out[0] = v[0];
    out[1] = v[1];
    return out;
}
function clone(v) {
    return [v[0], v[1]];
}
function set(out, a, b) {
    out[0] = a;
    out[1] = b;
    return out;
}
function add(out, v1, v2) {
    out[0] = v1[0] + v2[0];
    out[1] = v1[1] + v2[1];
    return out;
}
function scaleAndAdd(out, v1, v2, a) {
    out[0] = v1[0] + v2[0] * a;
    out[1] = v1[1] + v2[1] * a;
    return out;
}
function sub(out, v1, v2) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
}
function len(v) {
    return Math.sqrt(lenSquare(v));
}
var length = len;
function lenSquare(v) {
    return v[0] * v[0] + v[1] * v[1];
}
var lengthSquare = lenSquare;
function mul(out, v1, v2) {
    out[0] = v1[0] * v2[0];
    out[1] = v1[1] * v2[1];
    return out;
}
function div(out, v1, v2) {
    out[0] = v1[0] / v2[0];
    out[1] = v1[1] / v2[1];
    return out;
}
function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
}
function scale(out, v, s) {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    return out;
}
function normalize(out, v) {
    var d = len(v);
    if (d === 0) {
        out[0] = 0;
        out[1] = 0;
    }
    else {
        out[0] = v[0] / d;
        out[1] = v[1] / d;
    }
    return out;
}
function distance(v1, v2) {
    return Math.sqrt((v1[0] - v2[0]) * (v1[0] - v2[0])
        + (v1[1] - v2[1]) * (v1[1] - v2[1]));
}
var dist = distance;
function distanceSquare(v1, v2) {
    return (v1[0] - v2[0]) * (v1[0] - v2[0])
        + (v1[1] - v2[1]) * (v1[1] - v2[1]);
}
var distSquare = distanceSquare;
function negate(out, v) {
    out[0] = -v[0];
    out[1] = -v[1];
    return out;
}
function lerp(out, v1, v2, t) {
    out[0] = v1[0] + t * (v2[0] - v1[0]);
    out[1] = v1[1] + t * (v2[1] - v1[1]);
    return out;
}
function applyTransform(out, v, m) {
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
function min(out, v1, v2) {
    out[0] = Math.min(v1[0], v2[0]);
    out[1] = Math.min(v1[1], v2[1]);
    return out;
}
function max(out, v1, v2) {
    out[0] = Math.max(v1[0], v2[0]);
    out[1] = Math.max(v1[1], v2[1]);
    return out;
}


}),
93859: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);


var CompoundPath = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(CompoundPath, _super);
    function CompoundPath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'compound';
        return _this;
    }
    CompoundPath.prototype._updatePathDirty = function () {
        var paths = this.shape.paths;
        var dirtyPath = this.shapeChanged();
        for (var i = 0; i < paths.length; i++) {
            dirtyPath = dirtyPath || paths[i].shapeChanged();
        }
        if (dirtyPath) {
            this.dirtyShape();
        }
    };
    CompoundPath.prototype.beforeBrush = function () {
        this._updatePathDirty();
        var paths = this.shape.paths || [];
        var scale = this.getGlobalScale();
        for (var i = 0; i < paths.length; i++) {
            if (!paths[i].path) {
                paths[i].createPathProxy();
            }
            paths[i].path.setScale(scale[0], scale[1], paths[i].segmentIgnoreThreshold);
        }
    };
    CompoundPath.prototype.buildPath = function (ctx, shape) {
        var paths = shape.paths || [];
        for (var i = 0; i < paths.length; i++) {
            paths[i].buildPath(ctx, paths[i].shape, true);
        }
    };
    CompoundPath.prototype.afterBrush = function () {
        var paths = this.shape.paths || [];
        for (var i = 0; i < paths.length; i++) {
            paths[i].pathUpdated();
        }
    };
    CompoundPath.prototype.getBoundingRect = function () {
        this._updatePathDirty.call(this);
        return _Path_js__rspack_import_0["default"].prototype.getBoundingRect.call(this);
    };
    return CompoundPath;
}(_Path_js__rspack_import_0["default"]));
/* export default */ __webpack_exports__["default"] = (CompoundPath);


}),
18211: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_COMMON_ANIMATION_PROPS: function() { return DEFAULT_COMMON_ANIMATION_PROPS; },
  DEFAULT_COMMON_STYLE: function() { return DEFAULT_COMMON_STYLE; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Element_js__rspack_import_0 = __webpack_require__(68994);
/* import */ var _core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);
/* import */ var _core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _constants_js__rspack_import_4 = __webpack_require__(66684);





var STYLE_MAGIC_KEY = '__zr_style_' + Math.round((Math.random() * 10));
var DEFAULT_COMMON_STYLE = {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: '#000',
    opacity: 1,
    blend: 'source-over'
};
var DEFAULT_COMMON_ANIMATION_PROPS = {
    style: {
        shadowBlur: true,
        shadowOffsetX: true,
        shadowOffsetY: true,
        shadowColor: true,
        opacity: true
    }
};
DEFAULT_COMMON_STYLE[STYLE_MAGIC_KEY] = true;
var PRIMARY_STATES_KEYS = ['z', 'z2', 'invisible'];
var PRIMARY_STATES_KEYS_IN_HOVER_LAYER = ['invisible'];
var Displayable = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Displayable, _super);
    function Displayable(props) {
        return _super.call(this, props) || this;
    }
    Displayable.prototype._init = function (props) {
        var keysArr = (0,_core_util_js__rspack_import_2.keys)(props);
        for (var i = 0; i < keysArr.length; i++) {
            var key = keysArr[i];
            if (key === 'style') {
                this.useStyle(props[key]);
            }
            else {
                _super.prototype.attrKV.call(this, key, props[key]);
            }
        }
        if (!this.style) {
            this.useStyle({});
        }
    };
    Displayable.prototype.beforeBrush = function () { };
    Displayable.prototype.afterBrush = function () { };
    Displayable.prototype.innerBeforeBrush = function () { };
    Displayable.prototype.innerAfterBrush = function () { };
    Displayable.prototype.shouldBePainted = function (viewWidth, viewHeight, considerClipPath, considerAncestors) {
        var m = this.transform;
        if (this.ignore
            || this.invisible
            || this.style.opacity === 0
            || (this.culling
                && isDisplayableCulled(this, viewWidth, viewHeight))
            || (m && !m[0] && !m[3])) {
            return false;
        }
        if (considerClipPath && this.__clipPaths && this.__clipPaths.length) {
            for (var i = 0; i < this.__clipPaths.length; ++i) {
                if (this.__clipPaths[i].isZeroArea()) {
                    return false;
                }
            }
        }
        if (considerAncestors && this.parent) {
            var parent_1 = this.parent;
            while (parent_1) {
                if (parent_1.ignore) {
                    return false;
                }
                parent_1 = parent_1.parent;
            }
        }
        return true;
    };
    Displayable.prototype.contain = function (x, y) {
        return this.rectContain(x, y);
    };
    Displayable.prototype.traverse = function (cb, context) {
        cb.call(context, this);
    };
    Displayable.prototype.rectContain = function (x, y) {
        var coord = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        return rect.contain(coord[0], coord[1]);
    };
    Displayable.prototype.getPaintRect = function () {
        var rect = this._paintRect;
        if (!this._paintRect || this.__dirty) {
            var transform = this.transform;
            var elRect = this.getBoundingRect();
            var style = this.style;
            var shadowSize = style.shadowBlur || 0;
            var shadowOffsetX = style.shadowOffsetX || 0;
            var shadowOffsetY = style.shadowOffsetY || 0;
            rect = this._paintRect || (this._paintRect = new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0));
            if (transform) {
                _core_BoundingRect_js__rspack_import_3["default"].applyTransform(rect, elRect, transform);
            }
            else {
                rect.copy(elRect);
            }
            if (shadowSize || shadowOffsetX || shadowOffsetY) {
                rect.width += shadowSize * 2 + Math.abs(shadowOffsetX);
                rect.height += shadowSize * 2 + Math.abs(shadowOffsetY);
                rect.x = Math.min(rect.x, rect.x + shadowOffsetX - shadowSize);
                rect.y = Math.min(rect.y, rect.y + shadowOffsetY - shadowSize);
            }
            var tolerance = this.dirtyRectTolerance;
            if (!rect.isZero()) {
                rect.x = Math.floor(rect.x - tolerance);
                rect.y = Math.floor(rect.y - tolerance);
                rect.width = Math.ceil(rect.width + 1 + tolerance * 2);
                rect.height = Math.ceil(rect.height + 1 + tolerance * 2);
            }
        }
        return rect;
    };
    Displayable.prototype.setPrevPaintRect = function (paintRect) {
        if (paintRect) {
            this._prevPaintRect = this._prevPaintRect || new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0);
            this._prevPaintRect.copy(paintRect);
        }
        else {
            this._prevPaintRect = null;
        }
    };
    Displayable.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect;
    };
    Displayable.prototype.animateStyle = function (loop) {
        return this.animate('style', loop);
    };
    Displayable.prototype.updateDuringAnimation = function (targetKey) {
        if (targetKey === 'style') {
            this.dirtyStyle();
        }
        else {
            this.markRedraw();
        }
    };
    Displayable.prototype.attrKV = function (key, value) {
        if (key !== 'style') {
            _super.prototype.attrKV.call(this, key, value);
        }
        else {
            if (!this.style) {
                this.useStyle(value);
            }
            else {
                this.setStyle(value);
            }
        }
    };
    Displayable.prototype.setStyle = function (keyOrObj, value) {
        if (typeof keyOrObj === 'string') {
            this.style[keyOrObj] = value;
        }
        else {
            (0,_core_util_js__rspack_import_2.extend)(this.style, keyOrObj);
        }
        this.dirtyStyle();
        return this;
    };
    Displayable.prototype.dirtyStyle = function (notRedraw) {
        if (!notRedraw) {
            this.markRedraw();
        }
        this.__dirty |= _constants_js__rspack_import_4.STYLE_CHANGED_BIT;
        if (this._rect) {
            this._rect = null;
        }
    };
    Displayable.prototype.dirty = function () {
        this.dirtyStyle();
    };
    Displayable.prototype.styleChanged = function () {
        return !!(this.__dirty & _constants_js__rspack_import_4.STYLE_CHANGED_BIT);
    };
    Displayable.prototype.styleUpdated = function () {
        this.__dirty &= ~_constants_js__rspack_import_4.STYLE_CHANGED_BIT;
    };
    Displayable.prototype.createStyle = function (obj) {
        return (0,_core_util_js__rspack_import_2.createObject)(DEFAULT_COMMON_STYLE, obj);
    };
    Displayable.prototype.useStyle = function (obj) {
        if (!obj[STYLE_MAGIC_KEY]) {
            obj = this.createStyle(obj);
        }
        if (this.__inHover) {
            this.__hoverStyle = obj;
        }
        else {
            this.style = obj;
        }
        this.dirtyStyle();
    };
    Displayable.prototype.isStyleObject = function (obj) {
        return obj[STYLE_MAGIC_KEY];
    };
    Displayable.prototype._innerSaveToNormal = function (toState) {
        _super.prototype._innerSaveToNormal.call(this, toState);
        var normalState = this._normalState;
        if (toState.style && !normalState.style) {
            normalState.style = this._mergeStyle(this.createStyle(), this.style);
        }
        this._savePrimaryToNormal(toState, normalState, PRIMARY_STATES_KEYS);
    };
    Displayable.prototype._applyStateObj = function (stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        _super.prototype._applyStateObj.call(this, stateName, state, normalState, keepCurrentStates, transition, animationCfg);
        var needsRestoreToNormal = !(state && keepCurrentStates);
        var targetStyle;
        if (state && state.style) {
            if (transition) {
                if (keepCurrentStates) {
                    targetStyle = state.style;
                }
                else {
                    targetStyle = this._mergeStyle(this.createStyle(), normalState.style);
                    this._mergeStyle(targetStyle, state.style);
                }
            }
            else {
                targetStyle = this._mergeStyle(this.createStyle(), keepCurrentStates ? this.style : normalState.style);
                this._mergeStyle(targetStyle, state.style);
            }
        }
        else if (needsRestoreToNormal) {
            targetStyle = normalState.style;
        }
        if (targetStyle) {
            if (transition) {
                var sourceStyle = this.style;
                this.style = this.createStyle(needsRestoreToNormal ? {} : sourceStyle);
                if (needsRestoreToNormal) {
                    var changedKeys = (0,_core_util_js__rspack_import_2.keys)(sourceStyle);
                    for (var i = 0; i < changedKeys.length; i++) {
                        var key = changedKeys[i];
                        if (key in targetStyle) {
                            targetStyle[key] = targetStyle[key];
                            this.style[key] = sourceStyle[key];
                        }
                    }
                }
                var targetKeys = (0,_core_util_js__rspack_import_2.keys)(targetStyle);
                for (var i = 0; i < targetKeys.length; i++) {
                    var key = targetKeys[i];
                    this.style[key] = this.style[key];
                }
                this._transitionState(stateName, {
                    style: targetStyle
                }, animationCfg, this.getAnimationStyleProps());
            }
            else {
                this.useStyle(targetStyle);
            }
        }
        var statesKeys = this.__inHover ? PRIMARY_STATES_KEYS_IN_HOVER_LAYER : PRIMARY_STATES_KEYS;
        for (var i = 0; i < statesKeys.length; i++) {
            var key = statesKeys[i];
            if (state && state[key] != null) {
                this[key] = state[key];
            }
            else if (needsRestoreToNormal) {
                if (normalState[key] != null) {
                    this[key] = normalState[key];
                }
            }
        }
    };
    Displayable.prototype._mergeStates = function (states) {
        var mergedState = _super.prototype._mergeStates.call(this, states);
        var mergedStyle;
        for (var i = 0; i < states.length; i++) {
            var state = states[i];
            if (state.style) {
                mergedStyle = mergedStyle || {};
                this._mergeStyle(mergedStyle, state.style);
            }
        }
        if (mergedStyle) {
            mergedState.style = mergedStyle;
        }
        return mergedState;
    };
    Displayable.prototype._mergeStyle = function (targetStyle, sourceStyle) {
        (0,_core_util_js__rspack_import_2.extend)(targetStyle, sourceStyle);
        return targetStyle;
    };
    Displayable.prototype.getAnimationStyleProps = function () {
        return DEFAULT_COMMON_ANIMATION_PROPS;
    };
    Displayable.initDefaultProps = (function () {
        var dispProto = Displayable.prototype;
        dispProto.type = 'displayable';
        dispProto.invisible = false;
        dispProto.z = 0;
        dispProto.z2 = 0;
        dispProto.zlevel = 0;
        dispProto.culling = false;
        dispProto.cursor = 'pointer';
        dispProto.rectHover = false;
        dispProto.incremental = false;
        dispProto._rect = null;
        dispProto.dirtyRectTolerance = 0;
        dispProto.__dirty = _constants_js__rspack_import_4.REDRAW_BIT | _constants_js__rspack_import_4.STYLE_CHANGED_BIT;
    })();
    return Displayable;
}(_Element_js__rspack_import_0["default"]));
var tmpRect = new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0);
var viewRect = new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0);
function isDisplayableCulled(el, width, height) {
    tmpRect.copy(el.getBoundingRect());
    if (el.transform) {
        tmpRect.applyTransform(el.transform);
    }
    viewRect.width = width;
    viewRect.height = height;
    return !tmpRect.intersect(viewRect);
}
/* export default */ __webpack_exports__["default"] = (Displayable);


}),
37605: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Gradient = (function () {
    function Gradient(colorStops) {
        this.colorStops = colorStops || [];
    }
    Gradient.prototype.addColorStop = function (offset, color) {
        this.colorStops.push({
            offset: offset,
            color: color
        });
    };
    return Gradient;
}());
/* export default */ __webpack_exports__["default"] = (Gradient);


}),
97786: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _Element_js__rspack_import_0 = __webpack_require__(68994);
/* import */ var _core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);




var Group = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Group, _super);
    function Group(opts) {
        var _this = _super.call(this) || this;
        _this.isGroup = true;
        _this._children = [];
        _this.attr(opts);
        return _this;
    }
    Group.prototype.childrenRef = function () {
        return this._children;
    };
    Group.prototype.children = function () {
        return this._children.slice();
    };
    Group.prototype.childAt = function (idx) {
        return this._children[idx];
    };
    Group.prototype.childOfName = function (name) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === name) {
                return children[i];
            }
        }
    };
    Group.prototype.childCount = function () {
        return this._children.length;
    };
    Group.prototype.add = function (child) {
        if (child) {
            if (child !== this && child.parent !== this) {
                this._children.push(child);
                this._doAdd(child);
            }
            if (false) {}
        }
        return this;
    };
    Group.prototype.addBefore = function (child, nextSibling) {
        if (child && child !== this && child.parent !== this
            && nextSibling && nextSibling.parent === this) {
            var children = this._children;
            var idx = children.indexOf(nextSibling);
            if (idx >= 0) {
                children.splice(idx, 0, child);
                this._doAdd(child);
            }
        }
        return this;
    };
    Group.prototype.replace = function (oldChild, newChild) {
        var idx = _core_util_js__rspack_import_2.indexOf(this._children, oldChild);
        if (idx >= 0) {
            this.replaceAt(newChild, idx);
        }
        return this;
    };
    Group.prototype.replaceAt = function (child, index) {
        var children = this._children;
        var old = children[index];
        if (child && child !== this && child.parent !== this && child !== old) {
            children[index] = child;
            old.parent = null;
            var zr = this.__zr;
            if (zr) {
                old.removeSelfFromZr(zr);
            }
            this._doAdd(child);
        }
        return this;
    };
    Group.prototype._doAdd = function (child) {
        if (child.parent) {
            child.parent.remove(child);
        }
        child.parent = this;
        var zr = this.__zr;
        if (zr && zr !== child.__zr) {
            child.addSelfToZr(zr);
        }
        zr && zr.refresh();
    };
    Group.prototype.remove = function (child) {
        var zr = this.__zr;
        var children = this._children;
        var idx = _core_util_js__rspack_import_2.indexOf(children, child);
        if (idx < 0) {
            return this;
        }
        children.splice(idx, 1);
        child.parent = null;
        if (zr) {
            child.removeSelfFromZr(zr);
        }
        zr && zr.refresh();
        return this;
    };
    Group.prototype.removeAll = function () {
        var children = this._children;
        var zr = this.__zr;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (zr) {
                child.removeSelfFromZr(zr);
            }
            child.parent = null;
        }
        children.length = 0;
        return this;
    };
    Group.prototype.eachChild = function (cb, context) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            cb.call(context, child, i);
        }
        return this;
    };
    Group.prototype.traverse = function (cb, context) {
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            var stopped = cb.call(context, child);
            if (child.isGroup && !stopped) {
                child.traverse(cb, context);
            }
        }
        return this;
    };
    Group.prototype.addSelfToZr = function (zr) {
        _super.prototype.addSelfToZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child.addSelfToZr(zr);
        }
    };
    Group.prototype.removeSelfFromZr = function (zr) {
        _super.prototype.removeSelfFromZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child.removeSelfFromZr(zr);
        }
    };
    Group.prototype.getBoundingRect = function (includeChildren) {
        var tmpRect = new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0);
        var children = includeChildren || this._children;
        var tmpMat = [];
        var rect = null;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.ignore || child.invisible) {
                continue;
            }
            var childRect = child.getBoundingRect();
            var transform = child.getLocalTransform(tmpMat);
            if (transform) {
                _core_BoundingRect_js__rspack_import_3["default"].applyTransform(tmpRect, childRect, transform);
                rect = rect || tmpRect.clone();
                rect.union(tmpRect);
            }
            else {
                rect = rect || childRect.clone();
                rect.union(childRect);
            }
        }
        return rect || tmpRect;
    };
    return Group;
}(_Element_js__rspack_import_0["default"]));
Group.prototype.type = 'group';
/* export default */ __webpack_exports__["default"] = (Group);


}),
16440: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_IMAGE_ANIMATION_PROPS: function() { return DEFAULT_IMAGE_ANIMATION_PROPS; },
  DEFAULT_IMAGE_STYLE: function() { return DEFAULT_IMAGE_STYLE; }
});
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var _Displayable_js__rspack_import_1 = __webpack_require__(18211);
/* import */ var _core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);




var DEFAULT_IMAGE_STYLE = (0,_core_util_js__rspack_import_0.defaults)({
    x: 0,
    y: 0
}, _Displayable_js__rspack_import_1.DEFAULT_COMMON_STYLE);
var DEFAULT_IMAGE_ANIMATION_PROPS = {
    style: (0,_core_util_js__rspack_import_0.defaults)({
        x: true,
        y: true,
        width: true,
        height: true,
        sx: true,
        sy: true,
        sWidth: true,
        sHeight: true
    }, _Displayable_js__rspack_import_1.DEFAULT_COMMON_ANIMATION_PROPS.style)
};
function isImageLike(source) {
    return !!(source
        && typeof source !== 'string'
        && source.width && source.height);
}
var ZRImage = (function (_super) {
    (0,tslib__rspack_import_2.__extends)(ZRImage, _super);
    function ZRImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZRImage.prototype.createStyle = function (obj) {
        return (0,_core_util_js__rspack_import_0.createObject)(DEFAULT_IMAGE_STYLE, obj);
    };
    ZRImage.prototype._getSize = function (dim) {
        var style = this.style;
        var size = style[dim];
        if (size != null) {
            return size;
        }
        var imageSource = isImageLike(style.image)
            ? style.image : this.__image;
        if (!imageSource) {
            return 0;
        }
        var otherDim = dim === 'width' ? 'height' : 'width';
        var otherDimSize = style[otherDim];
        if (otherDimSize == null) {
            return imageSource[dim];
        }
        else {
            return imageSource[dim] / imageSource[otherDim] * otherDimSize;
        }
    };
    ZRImage.prototype.getWidth = function () {
        return this._getSize('width');
    };
    ZRImage.prototype.getHeight = function () {
        return this._getSize('height');
    };
    ZRImage.prototype.getAnimationStyleProps = function () {
        return DEFAULT_IMAGE_ANIMATION_PROPS;
    };
    ZRImage.prototype.getBoundingRect = function () {
        var style = this.style;
        if (!this._rect) {
            this._rect = new _core_BoundingRect_js__rspack_import_3["default"](style.x || 0, style.y || 0, this.getWidth(), this.getHeight());
        }
        return this._rect;
    };
    return ZRImage;
}(_Displayable_js__rspack_import_1["default"]));
ZRImage.prototype.type = 'image';
/* export default */ __webpack_exports__["default"] = (ZRImage);


}),
80551: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Displayable_js__rspack_import_0 = __webpack_require__(18211);
/* import */ var _core_BoundingRect_js__rspack_import_2 = __webpack_require__(7544);



var m = [];
var IncrementalDisplayable = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(IncrementalDisplayable, _super);
    function IncrementalDisplayable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.notClear = true;
        _this.incremental = true;
        _this._displayables = [];
        _this._temporaryDisplayables = [];
        _this._cursor = 0;
        return _this;
    }
    IncrementalDisplayable.prototype.traverse = function (cb, context) {
        cb.call(context, this);
    };
    IncrementalDisplayable.prototype.useStyle = function () {
        this.style = {};
    };
    IncrementalDisplayable.prototype.getCursor = function () {
        return this._cursor;
    };
    IncrementalDisplayable.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length;
    };
    IncrementalDisplayable.prototype.clearDisplaybles = function () {
        this._displayables = [];
        this._temporaryDisplayables = [];
        this._cursor = 0;
        this.markRedraw();
        this.notClear = false;
    };
    IncrementalDisplayable.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = [];
    };
    IncrementalDisplayable.prototype.addDisplayable = function (displayable, notPersistent) {
        if (notPersistent) {
            this._temporaryDisplayables.push(displayable);
        }
        else {
            this._displayables.push(displayable);
        }
        this.markRedraw();
    };
    IncrementalDisplayable.prototype.addDisplayables = function (displayables, notPersistent) {
        notPersistent = notPersistent || false;
        for (var i = 0; i < displayables.length; i++) {
            this.addDisplayable(displayables[i], notPersistent);
        }
    };
    IncrementalDisplayable.prototype.getDisplayables = function () {
        return this._displayables;
    };
    IncrementalDisplayable.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables;
    };
    IncrementalDisplayable.prototype.eachPendingDisplayable = function (cb) {
        for (var i = this._cursor; i < this._displayables.length; i++) {
            cb && cb(this._displayables[i]);
        }
        for (var i = 0; i < this._temporaryDisplayables.length; i++) {
            cb && cb(this._temporaryDisplayables[i]);
        }
    };
    IncrementalDisplayable.prototype.update = function () {
        this.updateTransform();
        for (var i = this._cursor; i < this._displayables.length; i++) {
            var displayable = this._displayables[i];
            displayable.parent = this;
            displayable.update();
            displayable.parent = null;
        }
        for (var i = 0; i < this._temporaryDisplayables.length; i++) {
            var displayable = this._temporaryDisplayables[i];
            displayable.parent = this;
            displayable.update();
            displayable.parent = null;
        }
    };
    IncrementalDisplayable.prototype.getBoundingRect = function () {
        if (!this._rect) {
            var rect = new _core_BoundingRect_js__rspack_import_2["default"](Infinity, Infinity, -Infinity, -Infinity);
            for (var i = 0; i < this._displayables.length; i++) {
                var displayable = this._displayables[i];
                var childRect = displayable.getBoundingRect().clone();
                if (displayable.needLocalTransform()) {
                    childRect.applyTransform(displayable.getLocalTransform(m));
                }
                rect.union(childRect);
            }
            this._rect = rect;
        }
        return this._rect;
    };
    IncrementalDisplayable.prototype.contain = function (x, y) {
        var localPos = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        if (rect.contain(localPos[0], localPos[1])) {
            for (var i = 0; i < this._displayables.length; i++) {
                var displayable = this._displayables[i];
                if (displayable.contain(x, y)) {
                    return true;
                }
            }
        }
        return false;
    };
    return IncrementalDisplayable;
}(_Displayable_js__rspack_import_0["default"]));
/* export default */ __webpack_exports__["default"] = (IncrementalDisplayable);


}),
91888: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Gradient_js__rspack_import_0 = __webpack_require__(37605);


var LinearGradient = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(LinearGradient, _super);
    function LinearGradient(x, y, x2, y2, colorStops, globalCoord) {
        var _this = _super.call(this, colorStops) || this;
        _this.x = x == null ? 0 : x;
        _this.y = y == null ? 0 : y;
        _this.x2 = x2 == null ? 1 : x2;
        _this.y2 = y2 == null ? 0 : y2;
        _this.type = 'linear';
        _this.global = globalCoord || false;
        return _this;
    }
    return LinearGradient;
}(_Gradient_js__rspack_import_0["default"]));
/* export default */ __webpack_exports__["default"] = (LinearGradient);
;


}),
17907: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_PATH_ANIMATION_PROPS: function() { return /* binding */ DEFAULT_PATH_ANIMATION_PROPS; },
  "default": function() { return /* binding */ graphic_Path; },
  DEFAULT_PATH_STYLE: function() { return /* binding */ DEFAULT_PATH_STYLE; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(18211);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(99585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/line.js
var line = __webpack_require__(64495);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/curve.js
var curve = __webpack_require__(50631);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/cubic.js

function containStroke(x0, y0, x1, y1, x2, y2, x3, y3, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    if ((y > y0 + _l && y > y1 + _l && y > y2 + _l && y > y3 + _l)
        || (y < y0 - _l && y < y1 - _l && y < y2 - _l && y < y3 - _l)
        || (x > x0 + _l && x > x1 + _l && x > x2 + _l && x > x3 + _l)
        || (x < x0 - _l && x < x1 - _l && x < x2 - _l && x < x3 - _l)) {
        return false;
    }
    var d = curve.cubicProjectPoint(x0, y0, x1, y1, x2, y2, x3, y3, x, y, null);
    return d <= _l / 2;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/quadratic.js
var quadratic = __webpack_require__(95643);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/util.js
var util = __webpack_require__(28977);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/arc.js

var PI2 = Math.PI * 2;
function arc_containStroke(cx, cy, r, startAngle, endAngle, anticlockwise, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    x -= cx;
    y -= cy;
    var d = Math.sqrt(x * x + y * y);
    if ((d - _l > r) || (d + _l < r)) {
        return false;
    }
    if (Math.abs(startAngle - endAngle) % PI2 < 1e-4) {
        return true;
    }
    if (anticlockwise) {
        var tmp = startAngle;
        startAngle = (0,util.normalizeRadian)(endAngle);
        endAngle = (0,util.normalizeRadian)(tmp);
    }
    else {
        startAngle = (0,util.normalizeRadian)(startAngle);
        endAngle = (0,util.normalizeRadian)(endAngle);
    }
    if (startAngle > endAngle) {
        endAngle += PI2;
    }
    var angle = Math.atan2(y, x);
    if (angle < 0) {
        angle += PI2;
    }
    return (angle >= startAngle && angle <= endAngle)
        || (angle + PI2 >= startAngle && angle + PI2 <= endAngle);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/windingLine.js
var windingLine = __webpack_require__(13861);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/path.js







var CMD = PathProxy["default"].CMD;
var path_PI2 = Math.PI * 2;
var EPSILON = 1e-4;
function isAroundEqual(a, b) {
    return Math.abs(a - b) < EPSILON;
}
var roots = [-1, -1, -1];
var extrema = [-1, -1];
function swapExtrema() {
    var tmp = extrema[0];
    extrema[0] = extrema[1];
    extrema[1] = tmp;
}
function windingCubic(x0, y0, x1, y1, x2, y2, x3, y3, x, y) {
    if ((y > y0 && y > y1 && y > y2 && y > y3)
        || (y < y0 && y < y1 && y < y2 && y < y3)) {
        return 0;
    }
    var nRoots = curve.cubicRootAt(y0, y1, y2, y3, y, roots);
    if (nRoots === 0) {
        return 0;
    }
    else {
        var w = 0;
        var nExtrema = -1;
        var y0_ = void 0;
        var y1_ = void 0;
        for (var i = 0; i < nRoots; i++) {
            var t = roots[i];
            var unit = (t === 0 || t === 1) ? 0.5 : 1;
            var x_ = curve.cubicAt(x0, x1, x2, x3, t);
            if (x_ < x) {
                continue;
            }
            if (nExtrema < 0) {
                nExtrema = curve.cubicExtrema(y0, y1, y2, y3, extrema);
                if (extrema[1] < extrema[0] && nExtrema > 1) {
                    swapExtrema();
                }
                y0_ = curve.cubicAt(y0, y1, y2, y3, extrema[0]);
                if (nExtrema > 1) {
                    y1_ = curve.cubicAt(y0, y1, y2, y3, extrema[1]);
                }
            }
            if (nExtrema === 2) {
                if (t < extrema[0]) {
                    w += y0_ < y0 ? unit : -unit;
                }
                else if (t < extrema[1]) {
                    w += y1_ < y0_ ? unit : -unit;
                }
                else {
                    w += y3 < y1_ ? unit : -unit;
                }
            }
            else {
                if (t < extrema[0]) {
                    w += y0_ < y0 ? unit : -unit;
                }
                else {
                    w += y3 < y0_ ? unit : -unit;
                }
            }
        }
        return w;
    }
}
function windingQuadratic(x0, y0, x1, y1, x2, y2, x, y) {
    if ((y > y0 && y > y1 && y > y2)
        || (y < y0 && y < y1 && y < y2)) {
        return 0;
    }
    var nRoots = curve.quadraticRootAt(y0, y1, y2, y, roots);
    if (nRoots === 0) {
        return 0;
    }
    else {
        var t = curve.quadraticExtremum(y0, y1, y2);
        if (t >= 0 && t <= 1) {
            var w = 0;
            var y_ = curve.quadraticAt(y0, y1, y2, t);
            for (var i = 0; i < nRoots; i++) {
                var unit = (roots[i] === 0 || roots[i] === 1) ? 0.5 : 1;
                var x_ = curve.quadraticAt(x0, x1, x2, roots[i]);
                if (x_ < x) {
                    continue;
                }
                if (roots[i] < t) {
                    w += y_ < y0 ? unit : -unit;
                }
                else {
                    w += y2 < y_ ? unit : -unit;
                }
            }
            return w;
        }
        else {
            var unit = (roots[0] === 0 || roots[0] === 1) ? 0.5 : 1;
            var x_ = curve.quadraticAt(x0, x1, x2, roots[0]);
            if (x_ < x) {
                return 0;
            }
            return y2 < y0 ? unit : -unit;
        }
    }
}
function windingArc(cx, cy, r, startAngle, endAngle, anticlockwise, x, y) {
    y -= cy;
    if (y > r || y < -r) {
        return 0;
    }
    var tmp = Math.sqrt(r * r - y * y);
    roots[0] = -tmp;
    roots[1] = tmp;
    var dTheta = Math.abs(startAngle - endAngle);
    if (dTheta < 1e-4) {
        return 0;
    }
    if (dTheta >= path_PI2 - 1e-4) {
        startAngle = 0;
        endAngle = path_PI2;
        var dir = anticlockwise ? 1 : -1;
        if (x >= roots[0] + cx && x <= roots[1] + cx) {
            return dir;
        }
        else {
            return 0;
        }
    }
    if (startAngle > endAngle) {
        var tmp_1 = startAngle;
        startAngle = endAngle;
        endAngle = tmp_1;
    }
    if (startAngle < 0) {
        startAngle += path_PI2;
        endAngle += path_PI2;
    }
    var w = 0;
    for (var i = 0; i < 2; i++) {
        var x_ = roots[i];
        if (x_ + cx > x) {
            var angle = Math.atan2(y, x_);
            var dir = anticlockwise ? 1 : -1;
            if (angle < 0) {
                angle = path_PI2 + angle;
            }
            if ((angle >= startAngle && angle <= endAngle)
                || (angle + path_PI2 >= startAngle && angle + path_PI2 <= endAngle)) {
                if (angle > Math.PI / 2 && angle < Math.PI * 1.5) {
                    dir = -dir;
                }
                w += dir;
            }
        }
    }
    return w;
}
function containPath(path, lineWidth, isStroke, x, y) {
    var data = path.data;
    var len = path.len();
    var w = 0;
    var xi = 0;
    var yi = 0;
    var x0 = 0;
    var y0 = 0;
    var x1;
    var y1;
    for (var i = 0; i < len;) {
        var cmd = data[i++];
        var isFirst = i === 1;
        if (cmd === CMD.M && i > 1) {
            if (!isStroke) {
                w += (0,windingLine["default"])(xi, yi, x0, y0, x, y);
            }
        }
        if (isFirst) {
            xi = data[i];
            yi = data[i + 1];
            x0 = xi;
            y0 = yi;
        }
        switch (cmd) {
            case CMD.M:
                x0 = data[i++];
                y0 = data[i++];
                xi = x0;
                yi = y0;
                break;
            case CMD.L:
                if (isStroke) {
                    if (line.containStroke(xi, yi, data[i], data[i + 1], lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += (0,windingLine["default"])(xi, yi, data[i], data[i + 1], x, y) || 0;
                }
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.C:
                if (isStroke) {
                    if (containStroke(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += windingCubic(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y) || 0;
                }
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.Q:
                if (isStroke) {
                    if (quadratic.containStroke(xi, yi, data[i++], data[i++], data[i], data[i + 1], lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += windingQuadratic(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y) || 0;
                }
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.A:
                var cx = data[i++];
                var cy = data[i++];
                var rx = data[i++];
                var ry = data[i++];
                var theta = data[i++];
                var dTheta = data[i++];
                i += 1;
                var anticlockwise = !!(1 - data[i++]);
                x1 = Math.cos(theta) * rx + cx;
                y1 = Math.sin(theta) * ry + cy;
                if (!isFirst) {
                    w += (0,windingLine["default"])(xi, yi, x1, y1, x, y);
                }
                else {
                    x0 = x1;
                    y0 = y1;
                }
                var _x = (x - cx) * ry / rx + cx;
                if (isStroke) {
                    if (arc_containStroke(cx, cy, ry, theta, theta + dTheta, anticlockwise, lineWidth, _x, y)) {
                        return true;
                    }
                }
                else {
                    w += windingArc(cx, cy, ry, theta, theta + dTheta, anticlockwise, _x, y);
                }
                xi = Math.cos(theta + dTheta) * rx + cx;
                yi = Math.sin(theta + dTheta) * ry + cy;
                break;
            case CMD.R:
                x0 = xi = data[i++];
                y0 = yi = data[i++];
                var width = data[i++];
                var height = data[i++];
                x1 = x0 + width;
                y1 = y0 + height;
                if (isStroke) {
                    if (line.containStroke(x0, y0, x1, y0, lineWidth, x, y)
                        || line.containStroke(x1, y0, x1, y1, lineWidth, x, y)
                        || line.containStroke(x1, y1, x0, y1, lineWidth, x, y)
                        || line.containStroke(x0, y1, x0, y0, lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += (0,windingLine["default"])(x1, y0, x1, y1, x, y);
                    w += (0,windingLine["default"])(x0, y1, x0, y0, x, y);
                }
                break;
            case CMD.Z:
                if (isStroke) {
                    if (line.containStroke(xi, yi, x0, y0, lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += (0,windingLine["default"])(xi, yi, x0, y0, x, y);
                }
                xi = x0;
                yi = y0;
                break;
        }
    }
    if (!isStroke && !isAroundEqual(yi, y0)) {
        w += (0,windingLine["default"])(xi, yi, x0, y0, x, y) || 0;
    }
    return w !== 0;
}
function contain(pathProxy, x, y) {
    return containPath(pathProxy, 0, false, x, y);
}
function path_containStroke(pathProxy, lineWidth, x, y) {
    return containPath(pathProxy, lineWidth, true, x, y);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var core_util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(59886);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/config.js
var config = __webpack_require__(76486);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/constants.js
var constants = __webpack_require__(66684);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(30128);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js









var DEFAULT_PATH_STYLE = (0,core_util.defaults)({
    fill: '#000',
    stroke: null,
    strokePercent: 1,
    fillOpacity: 1,
    strokeOpacity: 1,
    lineDashOffset: 0,
    lineWidth: 1,
    lineCap: 'butt',
    miterLimit: 10,
    strokeNoScale: false,
    strokeFirst: false
}, Displayable.DEFAULT_COMMON_STYLE);
var DEFAULT_PATH_ANIMATION_PROPS = {
    style: (0,core_util.defaults)({
        fill: true,
        stroke: true,
        strokePercent: true,
        fillOpacity: true,
        strokeOpacity: true,
        lineDashOffset: true,
        lineWidth: true,
        miterLimit: true
    }, Displayable.DEFAULT_COMMON_ANIMATION_PROPS.style)
};
var pathCopyParams = Transformable.TRANSFORMABLE_PROPS.concat(['invisible',
    'culling', 'z', 'z2', 'zlevel', 'parent'
]);
var Path_Path = (function (_super) {
    (0,tslib_es6.__extends)(Path, _super);
    function Path(opts) {
        return _super.call(this, opts) || this;
    }
    Path.prototype.update = function () {
        var _this = this;
        _super.prototype.update.call(this);
        var style = this.style;
        if (style.decal) {
            var decalEl = this._decalEl = this._decalEl || new Path();
            if (decalEl.buildPath === Path.prototype.buildPath) {
                decalEl.buildPath = function (ctx) {
                    _this.buildPath(ctx, _this.shape);
                };
            }
            decalEl.silent = true;
            var decalElStyle = decalEl.style;
            for (var key in style) {
                if (decalElStyle[key] !== style[key]) {
                    decalElStyle[key] = style[key];
                }
            }
            decalElStyle.fill = style.fill ? style.decal : null;
            decalElStyle.decal = null;
            decalElStyle.shadowColor = null;
            style.strokeFirst && (decalElStyle.stroke = null);
            for (var i = 0; i < pathCopyParams.length; ++i) {
                decalEl[pathCopyParams[i]] = this[pathCopyParams[i]];
            }
            decalEl.__dirty |= constants.REDRAW_BIT;
        }
        else if (this._decalEl) {
            this._decalEl = null;
        }
    };
    Path.prototype.getDecalElement = function () {
        return this._decalEl;
    };
    Path.prototype._init = function (props) {
        var keysArr = (0,core_util.keys)(props);
        this.shape = this.getDefaultShape();
        var defaultStyle = this.getDefaultStyle();
        if (defaultStyle) {
            this.useStyle(defaultStyle);
        }
        for (var i = 0; i < keysArr.length; i++) {
            var key = keysArr[i];
            var value = props[key];
            if (key === 'style') {
                if (!this.style) {
                    this.useStyle(value);
                }
                else {
                    (0,core_util.extend)(this.style, value);
                }
            }
            else if (key === 'shape') {
                (0,core_util.extend)(this.shape, value);
            }
            else {
                _super.prototype.attrKV.call(this, key, value);
            }
        }
        if (!this.style) {
            this.useStyle({});
        }
    };
    Path.prototype.getDefaultStyle = function () {
        return null;
    };
    Path.prototype.getDefaultShape = function () {
        return {};
    };
    Path.prototype.canBeInsideText = function () {
        return this.hasFill();
    };
    Path.prototype.getInsideTextFill = function () {
        var pathFill = this.style.fill;
        if (pathFill !== 'none') {
            if ((0,core_util.isString)(pathFill)) {
                var fillLum = (0,color.lum)(pathFill, 0);
                if (fillLum > 0.5) {
                    return config.DARK_LABEL_COLOR;
                }
                else if (fillLum > 0.2) {
                    return config.LIGHTER_LABEL_COLOR;
                }
                return config.LIGHT_LABEL_COLOR;
            }
            else if (pathFill) {
                return config.LIGHT_LABEL_COLOR;
            }
        }
        return config.DARK_LABEL_COLOR;
    };
    Path.prototype.getInsideTextStroke = function (textFill) {
        var pathFill = this.style.fill;
        if ((0,core_util.isString)(pathFill)) {
            var zr = this.__zr;
            var isDarkMode = !!(zr && zr.isDarkMode());
            var isDarkLabel = (0,color.lum)(textFill, 0) < config.DARK_MODE_THRESHOLD;
            if (isDarkMode === isDarkLabel) {
                return pathFill;
            }
        }
    };
    Path.prototype.buildPath = function (ctx, shapeCfg, inBatch) { };
    Path.prototype.pathUpdated = function () {
        this.__dirty &= ~constants.SHAPE_CHANGED_BIT;
    };
    Path.prototype.getUpdatedPathProxy = function (inBatch) {
        !this.path && this.createPathProxy();
        this.path.beginPath();
        this.buildPath(this.path, this.shape, inBatch);
        return this.path;
    };
    Path.prototype.createPathProxy = function () {
        this.path = new PathProxy["default"](false);
    };
    Path.prototype.hasStroke = function () {
        var style = this.style;
        var stroke = style.stroke;
        return !(stroke == null || stroke === 'none' || !(style.lineWidth > 0));
    };
    Path.prototype.hasFill = function () {
        var style = this.style;
        var fill = style.fill;
        return fill != null && fill !== 'none';
    };
    Path.prototype.getBoundingRect = function () {
        var rect = this._rect;
        var style = this.style;
        var needsUpdateRect = !rect;
        if (needsUpdateRect) {
            var firstInvoke = false;
            if (!this.path) {
                firstInvoke = true;
                this.createPathProxy();
            }
            var path = this.path;
            if (firstInvoke || (this.__dirty & constants.SHAPE_CHANGED_BIT)) {
                path.beginPath();
                this.buildPath(path, this.shape, false);
                this.pathUpdated();
            }
            rect = path.getBoundingRect();
        }
        this._rect = rect;
        if (this.hasStroke() && this.path && this.path.len() > 0) {
            var rectStroke = this._rectStroke || (this._rectStroke = rect.clone());
            if (this.__dirty || needsUpdateRect) {
                rectStroke.copy(rect);
                var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
                var w = style.lineWidth;
                if (!this.hasFill()) {
                    var strokeContainThreshold = this.strokeContainThreshold;
                    w = Math.max(w, strokeContainThreshold == null ? 4 : strokeContainThreshold);
                }
                if (lineScale > 1e-10) {
                    rectStroke.width += w / lineScale;
                    rectStroke.height += w / lineScale;
                    rectStroke.x -= w / lineScale / 2;
                    rectStroke.y -= w / lineScale / 2;
                }
            }
            return rectStroke;
        }
        return rect;
    };
    Path.prototype.contain = function (x, y) {
        var localPos = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        var style = this.style;
        x = localPos[0];
        y = localPos[1];
        if (rect.contain(x, y)) {
            var pathProxy = this.path;
            if (this.hasStroke()) {
                var lineWidth = style.lineWidth;
                var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
                if (lineScale > 1e-10) {
                    if (!this.hasFill()) {
                        lineWidth = Math.max(lineWidth, this.strokeContainThreshold);
                    }
                    if (path_containStroke(pathProxy, lineWidth / lineScale, x, y)) {
                        return true;
                    }
                }
            }
            if (this.hasFill()) {
                return contain(pathProxy, x, y);
            }
        }
        return false;
    };
    Path.prototype.dirtyShape = function () {
        this.__dirty |= constants.SHAPE_CHANGED_BIT;
        if (this._rect) {
            this._rect = null;
        }
        if (this._decalEl) {
            this._decalEl.dirtyShape();
        }
        this.markRedraw();
    };
    Path.prototype.dirty = function () {
        this.dirtyStyle();
        this.dirtyShape();
    };
    Path.prototype.animateShape = function (loop) {
        return this.animate('shape', loop);
    };
    Path.prototype.updateDuringAnimation = function (targetKey) {
        if (targetKey === 'style') {
            this.dirtyStyle();
        }
        else if (targetKey === 'shape') {
            this.dirtyShape();
        }
        else {
            this.markRedraw();
        }
    };
    Path.prototype.attrKV = function (key, value) {
        if (key === 'shape') {
            this.setShape(value);
        }
        else {
            _super.prototype.attrKV.call(this, key, value);
        }
    };
    Path.prototype.setShape = function (keyOrObj, value) {
        var shape = this.shape;
        if (!shape) {
            shape = this.shape = {};
        }
        if (typeof keyOrObj === 'string') {
            shape[keyOrObj] = value;
        }
        else {
            (0,core_util.extend)(shape, keyOrObj);
        }
        this.dirtyShape();
        return this;
    };
    Path.prototype.shapeChanged = function () {
        return !!(this.__dirty & constants.SHAPE_CHANGED_BIT);
    };
    Path.prototype.createStyle = function (obj) {
        return (0,core_util.createObject)(DEFAULT_PATH_STYLE, obj);
    };
    Path.prototype._innerSaveToNormal = function (toState) {
        _super.prototype._innerSaveToNormal.call(this, toState);
        var normalState = this._normalState;
        if (toState.shape && !normalState.shape) {
            normalState.shape = (0,core_util.extend)({}, this.shape);
        }
    };
    Path.prototype._applyStateObj = function (stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        _super.prototype._applyStateObj.call(this, stateName, state, normalState, keepCurrentStates, transition, animationCfg);
        var needsRestoreToNormal = !(state && keepCurrentStates);
        var targetShape;
        if (state && state.shape) {
            if (transition) {
                if (keepCurrentStates) {
                    targetShape = state.shape;
                }
                else {
                    targetShape = (0,core_util.extend)({}, normalState.shape);
                    (0,core_util.extend)(targetShape, state.shape);
                }
            }
            else {
                targetShape = (0,core_util.extend)({}, keepCurrentStates ? this.shape : normalState.shape);
                (0,core_util.extend)(targetShape, state.shape);
            }
        }
        else if (needsRestoreToNormal) {
            targetShape = normalState.shape;
        }
        if (targetShape) {
            if (transition) {
                this.shape = (0,core_util.extend)({}, this.shape);
                var targetShapePrimaryProps = {};
                var shapeKeys = (0,core_util.keys)(targetShape);
                for (var i = 0; i < shapeKeys.length; i++) {
                    var key = shapeKeys[i];
                    if (typeof targetShape[key] === 'object') {
                        this.shape[key] = targetShape[key];
                    }
                    else {
                        targetShapePrimaryProps[key] = targetShape[key];
                    }
                }
                this._transitionState(stateName, {
                    shape: targetShapePrimaryProps
                }, animationCfg);
            }
            else {
                this.shape = targetShape;
                this.dirtyShape();
            }
        }
    };
    Path.prototype._mergeStates = function (states) {
        var mergedState = _super.prototype._mergeStates.call(this, states);
        var mergedShape;
        for (var i = 0; i < states.length; i++) {
            var state = states[i];
            if (state.shape) {
                mergedShape = mergedShape || {};
                this._mergeStyle(mergedShape, state.shape);
            }
        }
        if (mergedShape) {
            mergedState.shape = mergedShape;
        }
        return mergedState;
    };
    Path.prototype.getAnimationStyleProps = function () {
        return DEFAULT_PATH_ANIMATION_PROPS;
    };
    Path.prototype.isZeroArea = function () {
        return false;
    };
    Path.extend = function (defaultProps) {
        var Sub = (function (_super) {
            (0,tslib_es6.__extends)(Sub, _super);
            function Sub(opts) {
                var _this = _super.call(this, opts) || this;
                defaultProps.init && defaultProps.init.call(_this, opts);
                return _this;
            }
            Sub.prototype.getDefaultStyle = function () {
                return (0,core_util.clone)(defaultProps.style);
            };
            Sub.prototype.getDefaultShape = function () {
                return (0,core_util.clone)(defaultProps.shape);
            };
            return Sub;
        }(Path));
        for (var key in defaultProps) {
            if (typeof defaultProps[key] === 'function') {
                Sub.prototype[key] = defaultProps[key];
            }
        }
        return Sub;
    };
    Path.initDefaultProps = (function () {
        var pathProto = Path.prototype;
        pathProto.type = 'path';
        pathProto.strokeContainThreshold = 5;
        pathProto.segmentIgnoreThreshold = 0;
        pathProto.subPixelOptimize = false;
        pathProto.autoBatch = false;
        pathProto.__dirty = constants.REDRAW_BIT | constants.STYLE_CHANGED_BIT | constants.SHAPE_CHANGED_BIT;
    })();
    return Path;
}(Displayable["default"]));
/* export default */ var graphic_Path = (Path_Path);


}),
50046: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Gradient_js__rspack_import_0 = __webpack_require__(37605);


var RadialGradient = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(RadialGradient, _super);
    function RadialGradient(x, y, r, colorStops, globalCoord) {
        var _this = _super.call(this, colorStops) || this;
        _this.x = x == null ? 0.5 : x;
        _this.y = y == null ? 0.5 : y;
        _this.r = r == null ? 0.5 : r;
        _this.type = 'radial';
        _this.global = globalCoord || false;
        return _this;
    }
    return RadialGradient;
}(_Gradient_js__rspack_import_0["default"]));
/* export default */ __webpack_exports__["default"] = (RadialGradient);


}),
67881: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_TSPAN_STYLE: function() { return DEFAULT_TSPAN_STYLE; }
});
/* import */ var tslib__rspack_import_4 = __webpack_require__(2492);
/* import */ var _Displayable_js__rspack_import_3 = __webpack_require__(18211);
/* import */ var _Path_js__rspack_import_2 = __webpack_require__(17907);
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _core_platform_js__rspack_import_1 = __webpack_require__(70145);
/* import */ var _helper_parseText_js__rspack_import_5 = __webpack_require__(11874);






var DEFAULT_TSPAN_STYLE = (0,_core_util_js__rspack_import_0.defaults)({
    strokeFirst: true,
    font: _core_platform_js__rspack_import_1.DEFAULT_FONT,
    x: 0,
    y: 0,
    textAlign: 'left',
    textBaseline: 'top',
    miterLimit: 2
}, _Path_js__rspack_import_2.DEFAULT_PATH_STYLE);
var TSpan = (function (_super) {
    (0,tslib__rspack_import_4.__extends)(TSpan, _super);
    function TSpan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TSpan.prototype.hasStroke = function () {
        return (0,_helper_parseText_js__rspack_import_5.tSpanHasStroke)(this.style);
    };
    TSpan.prototype.hasFill = function () {
        var style = this.style;
        var fill = style.fill;
        return fill != null && fill !== 'none';
    };
    TSpan.prototype.createStyle = function (obj) {
        return (0,_core_util_js__rspack_import_0.createObject)(DEFAULT_TSPAN_STYLE, obj);
    };
    TSpan.prototype.setBoundingRect = function (rect) {
        this._rect = rect;
    };
    TSpan.prototype.getBoundingRect = function () {
        if (!this._rect) {
            this._rect = (0,_helper_parseText_js__rspack_import_5.tSpanCreateBoundingRect)(this.style);
        }
        return this._rect;
    };
    TSpan.initDefaultProps = (function () {
        var tspanProto = TSpan.prototype;
        tspanProto.dirtyRectTolerance = 10;
    })();
    return TSpan;
}(_Displayable_js__rspack_import_3["default"]));
TSpan.prototype.type = 'tspan';
/* export default */ __webpack_exports__["default"] = (TSpan);


}),
62070: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_TEXT_ANIMATION_PROPS: function() { return DEFAULT_TEXT_ANIMATION_PROPS; },
  hasSeparateFont: function() { return hasSeparateFont; },
  normalizeTextStyle: function() { return normalizeTextStyle; },
  parseFontSize: function() { return parseFontSize; }
});
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var _helper_parseText_js__rspack_import_5 = __webpack_require__(11874);
/* import */ var _TSpan_js__rspack_import_7 = __webpack_require__(67881);
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _contain_text_js__rspack_import_6 = __webpack_require__(26066);
/* import */ var _Image_js__rspack_import_9 = __webpack_require__(16440);
/* import */ var _shape_Rect_js__rspack_import_8 = __webpack_require__(52721);
/* import */ var _core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);
/* import */ var _Displayable_js__rspack_import_1 = __webpack_require__(18211);
/* import */ var _core_platform_js__rspack_import_4 = __webpack_require__(70145);










var DEFAULT_RICH_TEXT_COLOR = {
    fill: '#000'
};
var DEFAULT_STROKE_LINE_WIDTH = 2;
var tmpCITOverflowAreaOut = {};
var DEFAULT_TEXT_ANIMATION_PROPS = {
    style: (0,_core_util_js__rspack_import_0.defaults)({
        fill: true,
        stroke: true,
        fillOpacity: true,
        strokeOpacity: true,
        lineWidth: true,
        fontSize: true,
        lineHeight: true,
        width: true,
        height: true,
        textShadowColor: true,
        textShadowBlur: true,
        textShadowOffsetX: true,
        textShadowOffsetY: true,
        backgroundColor: true,
        padding: true,
        borderColor: true,
        borderWidth: true,
        borderRadius: true
    }, _Displayable_js__rspack_import_1.DEFAULT_COMMON_ANIMATION_PROPS.style)
};
var ZRText = (function (_super) {
    (0,tslib__rspack_import_2.__extends)(ZRText, _super);
    function ZRText(opts) {
        var _this = _super.call(this) || this;
        _this.type = 'text';
        _this._children = [];
        _this._defaultStyle = DEFAULT_RICH_TEXT_COLOR;
        _this.attr(opts);
        return _this;
    }
    ZRText.prototype.childrenRef = function () {
        return this._children;
    };
    ZRText.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.styleChanged()) {
            this._updateSubTexts();
        }
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child.zlevel = this.zlevel;
            child.z = this.z;
            child.z2 = this.z2;
            child.culling = this.culling;
            child.cursor = this.cursor;
            child.invisible = this.invisible;
        }
    };
    ZRText.prototype.updateTransform = function () {
        var innerTransformable = this.innerTransformable;
        if (innerTransformable) {
            innerTransformable.updateTransform();
            if (innerTransformable.transform) {
                this.transform = innerTransformable.transform;
            }
        }
        else {
            _super.prototype.updateTransform.call(this);
        }
    };
    ZRText.prototype.getLocalTransform = function (m) {
        var innerTransformable = this.innerTransformable;
        return innerTransformable
            ? innerTransformable.getLocalTransform(m)
            : _super.prototype.getLocalTransform.call(this, m);
    };
    ZRText.prototype.getComputedTransform = function () {
        if (this.__hostTarget) {
            this.__hostTarget.getComputedTransform();
            this.__hostTarget.updateInnerText(true);
        }
        return _super.prototype.getComputedTransform.call(this);
    };
    ZRText.prototype._updateSubTexts = function () {
        this._childCursor = 0;
        normalizeTextStyle(this.style);
        this.style.rich
            ? this._updateRichTexts()
            : this._updatePlainTexts();
        this._children.length = this._childCursor;
        this.styleUpdated();
    };
    ZRText.prototype.addSelfToZr = function (zr) {
        _super.prototype.addSelfToZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            this._children[i].__zr = zr;
        }
    };
    ZRText.prototype.removeSelfFromZr = function (zr) {
        _super.prototype.removeSelfFromZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            this._children[i].__zr = null;
        }
    };
    ZRText.prototype.getBoundingRect = function () {
        if (this.styleChanged()) {
            this._updateSubTexts();
        }
        if (!this._rect) {
            var tmpRect = new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0);
            var children = this._children;
            var tmpMat = [];
            var rect = null;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var childRect = child.getBoundingRect();
                var transform = child.getLocalTransform(tmpMat);
                if (transform) {
                    tmpRect.copy(childRect);
                    tmpRect.applyTransform(transform);
                    rect = rect || tmpRect.clone();
                    rect.union(tmpRect);
                }
                else {
                    rect = rect || childRect.clone();
                    rect.union(childRect);
                }
            }
            this._rect = rect || tmpRect;
        }
        return this._rect;
    };
    ZRText.prototype.setDefaultTextStyle = function (defaultTextStyle) {
        this._defaultStyle = defaultTextStyle || DEFAULT_RICH_TEXT_COLOR;
    };
    ZRText.prototype.setTextContent = function (textContent) {
        if (false) {}
    };
    ZRText.prototype._mergeStyle = function (targetStyle, sourceStyle) {
        if (!sourceStyle) {
            return targetStyle;
        }
        var sourceRich = sourceStyle.rich;
        var targetRich = targetStyle.rich || (sourceRich && {});
        (0,_core_util_js__rspack_import_0.extend)(targetStyle, sourceStyle);
        if (sourceRich && targetRich) {
            this._mergeRich(targetRich, sourceRich);
            targetStyle.rich = targetRich;
        }
        else if (targetRich) {
            targetStyle.rich = targetRich;
        }
        return targetStyle;
    };
    ZRText.prototype._mergeRich = function (targetRich, sourceRich) {
        var richNames = (0,_core_util_js__rspack_import_0.keys)(sourceRich);
        for (var i = 0; i < richNames.length; i++) {
            var richName = richNames[i];
            targetRich[richName] = targetRich[richName] || {};
            (0,_core_util_js__rspack_import_0.extend)(targetRich[richName], sourceRich[richName]);
        }
    };
    ZRText.prototype.getAnimationStyleProps = function () {
        return DEFAULT_TEXT_ANIMATION_PROPS;
    };
    ZRText.prototype._getOrCreateChild = function (Ctor) {
        var child = this._children[this._childCursor];
        if (!child || !(child instanceof Ctor)) {
            child = new Ctor();
        }
        this._children[this._childCursor++] = child;
        child.__zr = this.__zr;
        child.parent = this;
        return child;
    };
    ZRText.prototype._updatePlainTexts = function () {
        var style = this.style;
        var textFont = style.font || _core_platform_js__rspack_import_4.DEFAULT_FONT;
        var textPadding = style.padding;
        var defaultStyle = this._defaultStyle;
        var baseX = style.x || 0;
        var baseY = style.y || 0;
        var textAlign = style.align || defaultStyle.align || 'left';
        var verticalAlign = style.verticalAlign || defaultStyle.verticalAlign || 'top';
        (0,_helper_parseText_js__rspack_import_5.calcInnerTextOverflowArea)(tmpCITOverflowAreaOut, defaultStyle.overflowRect, baseX, baseY, textAlign, verticalAlign);
        baseX = tmpCITOverflowAreaOut.baseX;
        baseY = tmpCITOverflowAreaOut.baseY;
        var text = getStyleText(style);
        var contentBlock = (0,_helper_parseText_js__rspack_import_5.parsePlainText)(text, style, tmpCITOverflowAreaOut.outerWidth, tmpCITOverflowAreaOut.outerHeight);
        var needDrawBg = needDrawBackground(style);
        var bgColorDrawn = !!(style.backgroundColor);
        var outerHeight = contentBlock.outerHeight;
        var outerWidth = contentBlock.outerWidth;
        var textLines = contentBlock.lines;
        var lineHeight = contentBlock.lineHeight;
        this.isTruncated = !!contentBlock.isTruncated;
        var textX = baseX;
        var textY = (0,_contain_text_js__rspack_import_6.adjustTextY)(baseY, contentBlock.contentHeight, verticalAlign);
        if (needDrawBg || textPadding) {
            var boxX = (0,_contain_text_js__rspack_import_6.adjustTextX)(baseX, outerWidth, textAlign);
            var boxY = (0,_contain_text_js__rspack_import_6.adjustTextY)(baseY, outerHeight, verticalAlign);
            needDrawBg && this._renderBackground(style, style, boxX, boxY, outerWidth, outerHeight);
        }
        textY += lineHeight / 2;
        if (textPadding) {
            textX = getTextXForPadding(baseX, textAlign, textPadding);
            if (verticalAlign === 'top') {
                textY += textPadding[0];
            }
            else if (verticalAlign === 'bottom') {
                textY -= textPadding[2];
            }
        }
        var defaultLineWidth = 0;
        var usingDefaultStroke = false;
        var useDefaultFill = false;
        var textFill = getFill('fill' in style
            ? style.fill
            : (useDefaultFill = true, defaultStyle.fill));
        var textStroke = getStroke('stroke' in style
            ? style.stroke
            : (!bgColorDrawn
                && (!defaultStyle.autoStroke || useDefaultFill))
                ? (defaultLineWidth = DEFAULT_STROKE_LINE_WIDTH, usingDefaultStroke = true, defaultStyle.stroke)
                : null);
        var hasShadow = style.textShadowBlur > 0;
        for (var i = 0; i < textLines.length; i++) {
            var el = this._getOrCreateChild(_TSpan_js__rspack_import_7["default"]);
            var subElStyle = el.createStyle();
            el.useStyle(subElStyle);
            subElStyle.text = textLines[i];
            subElStyle.x = textX;
            subElStyle.y = textY;
            if (textAlign) {
                subElStyle.textAlign = textAlign;
            }
            subElStyle.textBaseline = 'middle';
            subElStyle.opacity = style.opacity;
            subElStyle.strokeFirst = true;
            if (hasShadow) {
                subElStyle.shadowBlur = style.textShadowBlur || 0;
                subElStyle.shadowColor = style.textShadowColor || 'transparent';
                subElStyle.shadowOffsetX = style.textShadowOffsetX || 0;
                subElStyle.shadowOffsetY = style.textShadowOffsetY || 0;
            }
            subElStyle.stroke = textStroke;
            subElStyle.fill = textFill;
            if (textStroke) {
                subElStyle.lineWidth = style.lineWidth || defaultLineWidth;
                subElStyle.lineDash = style.lineDash;
                subElStyle.lineDashOffset = style.lineDashOffset || 0;
            }
            subElStyle.font = textFont;
            setSeparateFont(subElStyle, style);
            textY += lineHeight;
            el.setBoundingRect((0,_helper_parseText_js__rspack_import_5.tSpanCreateBoundingRect2)(subElStyle, contentBlock.contentWidth, contentBlock.calculatedLineHeight, usingDefaultStroke ? 0 : null));
        }
    };
    ZRText.prototype._updateRichTexts = function () {
        var style = this.style;
        var defaultStyle = this._defaultStyle;
        var textAlign = style.align || defaultStyle.align;
        var verticalAlign = style.verticalAlign || defaultStyle.verticalAlign;
        var baseX = style.x || 0;
        var baseY = style.y || 0;
        (0,_helper_parseText_js__rspack_import_5.calcInnerTextOverflowArea)(tmpCITOverflowAreaOut, defaultStyle.overflowRect, baseX, baseY, textAlign, verticalAlign);
        baseX = tmpCITOverflowAreaOut.baseX;
        baseY = tmpCITOverflowAreaOut.baseY;
        var text = getStyleText(style);
        var contentBlock = (0,_helper_parseText_js__rspack_import_5.parseRichText)(text, style, tmpCITOverflowAreaOut.outerWidth, tmpCITOverflowAreaOut.outerHeight, textAlign);
        var contentWidth = contentBlock.width;
        var outerWidth = contentBlock.outerWidth;
        var outerHeight = contentBlock.outerHeight;
        var textPadding = style.padding;
        this.isTruncated = !!contentBlock.isTruncated;
        var boxX = (0,_contain_text_js__rspack_import_6.adjustTextX)(baseX, outerWidth, textAlign);
        var boxY = (0,_contain_text_js__rspack_import_6.adjustTextY)(baseY, outerHeight, verticalAlign);
        var xLeft = boxX;
        var lineTop = boxY;
        if (textPadding) {
            xLeft += textPadding[3];
            lineTop += textPadding[0];
        }
        var xRight = xLeft + contentWidth;
        if (needDrawBackground(style)) {
            this._renderBackground(style, style, boxX, boxY, outerWidth, outerHeight);
        }
        var bgColorDrawn = !!(style.backgroundColor);
        for (var i = 0; i < contentBlock.lines.length; i++) {
            var line = contentBlock.lines[i];
            var tokens = line.tokens;
            var tokenCount = tokens.length;
            var lineHeight = line.lineHeight;
            var remainedWidth = line.width;
            var leftIndex = 0;
            var lineXLeft = xLeft;
            var lineXRight = xRight;
            var rightIndex = tokenCount - 1;
            var token = void 0;
            while (leftIndex < tokenCount
                && (token = tokens[leftIndex], !token.align || token.align === 'left')) {
                this._placeToken(token, style, lineHeight, lineTop, lineXLeft, 'left', bgColorDrawn);
                remainedWidth -= token.width;
                lineXLeft += token.width;
                leftIndex++;
            }
            while (rightIndex >= 0
                && (token = tokens[rightIndex], token.align === 'right')) {
                this._placeToken(token, style, lineHeight, lineTop, lineXRight, 'right', bgColorDrawn);
                remainedWidth -= token.width;
                lineXRight -= token.width;
                rightIndex--;
            }
            lineXLeft += (contentWidth - (lineXLeft - xLeft) - (xRight - lineXRight) - remainedWidth) / 2;
            while (leftIndex <= rightIndex) {
                token = tokens[leftIndex];
                this._placeToken(token, style, lineHeight, lineTop, lineXLeft + token.width / 2, 'center', bgColorDrawn);
                lineXLeft += token.width;
                leftIndex++;
            }
            lineTop += lineHeight;
        }
    };
    ZRText.prototype._placeToken = function (token, style, lineHeight, lineTop, x, textAlign, parentBgColorDrawn) {
        var tokenStyle = style.rich[token.styleName] || {};
        tokenStyle.text = token.text;
        var verticalAlign = token.verticalAlign;
        var y = lineTop + lineHeight / 2;
        if (verticalAlign === 'top') {
            y = lineTop + token.height / 2;
        }
        else if (verticalAlign === 'bottom') {
            y = lineTop + lineHeight - token.height / 2;
        }
        var needDrawBg = !token.isLineHolder && needDrawBackground(tokenStyle);
        needDrawBg && this._renderBackground(tokenStyle, style, textAlign === 'right'
            ? x - token.width
            : textAlign === 'center'
                ? x - token.width / 2
                : x, y - token.height / 2, token.width, token.height);
        var bgColorDrawn = !!tokenStyle.backgroundColor;
        var textPadding = token.textPadding;
        if (textPadding) {
            x = getTextXForPadding(x, textAlign, textPadding);
            y -= token.height / 2 - textPadding[0] - token.innerHeight / 2;
        }
        var el = this._getOrCreateChild(_TSpan_js__rspack_import_7["default"]);
        var subElStyle = el.createStyle();
        el.useStyle(subElStyle);
        var defaultStyle = this._defaultStyle;
        var useDefaultFill = false;
        var defaultLineWidth = 0;
        var usingDefaultStroke = false;
        var textFill = getFill('fill' in tokenStyle ? tokenStyle.fill
            : 'fill' in style ? style.fill
                : (useDefaultFill = true, defaultStyle.fill));
        var textStroke = getStroke('stroke' in tokenStyle ? tokenStyle.stroke
            : 'stroke' in style ? style.stroke
                : (!bgColorDrawn
                    && !parentBgColorDrawn
                    && (!defaultStyle.autoStroke || useDefaultFill)) ? (defaultLineWidth = DEFAULT_STROKE_LINE_WIDTH, usingDefaultStroke = true, defaultStyle.stroke)
                    : null);
        var hasShadow = tokenStyle.textShadowBlur > 0
            || style.textShadowBlur > 0;
        subElStyle.text = token.text;
        subElStyle.x = x;
        subElStyle.y = y;
        if (hasShadow) {
            subElStyle.shadowBlur = tokenStyle.textShadowBlur || style.textShadowBlur || 0;
            subElStyle.shadowColor = tokenStyle.textShadowColor || style.textShadowColor || 'transparent';
            subElStyle.shadowOffsetX = tokenStyle.textShadowOffsetX || style.textShadowOffsetX || 0;
            subElStyle.shadowOffsetY = tokenStyle.textShadowOffsetY || style.textShadowOffsetY || 0;
        }
        subElStyle.textAlign = textAlign;
        subElStyle.textBaseline = 'middle';
        subElStyle.font = token.font || _core_platform_js__rspack_import_4.DEFAULT_FONT;
        subElStyle.opacity = (0,_core_util_js__rspack_import_0.retrieve3)(tokenStyle.opacity, style.opacity, 1);
        setSeparateFont(subElStyle, tokenStyle);
        if (textStroke) {
            subElStyle.lineWidth = (0,_core_util_js__rspack_import_0.retrieve3)(tokenStyle.lineWidth, style.lineWidth, defaultLineWidth);
            subElStyle.lineDash = (0,_core_util_js__rspack_import_0.retrieve2)(tokenStyle.lineDash, style.lineDash);
            subElStyle.lineDashOffset = style.lineDashOffset || 0;
            subElStyle.stroke = textStroke;
        }
        if (textFill) {
            subElStyle.fill = textFill;
        }
        el.setBoundingRect((0,_helper_parseText_js__rspack_import_5.tSpanCreateBoundingRect2)(subElStyle, token.contentWidth, token.contentHeight, usingDefaultStroke ? 0 : null));
    };
    ZRText.prototype._renderBackground = function (style, topStyle, x, y, width, height) {
        var textBackgroundColor = style.backgroundColor;
        var textBorderWidth = style.borderWidth;
        var textBorderColor = style.borderColor;
        var isImageBg = textBackgroundColor && textBackgroundColor.image;
        var isPlainOrGradientBg = textBackgroundColor && !isImageBg;
        var textBorderRadius = style.borderRadius;
        var self = this;
        var rectEl;
        var imgEl;
        if (isPlainOrGradientBg || style.lineHeight || (textBorderWidth && textBorderColor)) {
            rectEl = this._getOrCreateChild(_shape_Rect_js__rspack_import_8["default"]);
            rectEl.useStyle(rectEl.createStyle());
            rectEl.style.fill = null;
            var rectShape = rectEl.shape;
            rectShape.x = x;
            rectShape.y = y;
            rectShape.width = width;
            rectShape.height = height;
            rectShape.r = textBorderRadius;
            rectEl.dirtyShape();
        }
        if (isPlainOrGradientBg) {
            var rectStyle = rectEl.style;
            rectStyle.fill = textBackgroundColor || null;
            rectStyle.fillOpacity = (0,_core_util_js__rspack_import_0.retrieve2)(style.fillOpacity, 1);
        }
        else if (isImageBg) {
            imgEl = this._getOrCreateChild(_Image_js__rspack_import_9["default"]);
            imgEl.onload = function () {
                self.dirtyStyle();
            };
            var imgStyle = imgEl.style;
            imgStyle.image = textBackgroundColor.image;
            imgStyle.x = x;
            imgStyle.y = y;
            imgStyle.width = width;
            imgStyle.height = height;
        }
        if (textBorderWidth && textBorderColor) {
            var rectStyle = rectEl.style;
            rectStyle.lineWidth = textBorderWidth;
            rectStyle.stroke = textBorderColor;
            rectStyle.strokeOpacity = (0,_core_util_js__rspack_import_0.retrieve2)(style.strokeOpacity, 1);
            rectStyle.lineDash = style.borderDash;
            rectStyle.lineDashOffset = style.borderDashOffset || 0;
            rectEl.strokeContainThreshold = 0;
            if (rectEl.hasFill() && rectEl.hasStroke()) {
                rectStyle.strokeFirst = true;
                rectStyle.lineWidth *= 2;
            }
        }
        var commonStyle = (rectEl || imgEl).style;
        commonStyle.shadowBlur = style.shadowBlur || 0;
        commonStyle.shadowColor = style.shadowColor || 'transparent';
        commonStyle.shadowOffsetX = style.shadowOffsetX || 0;
        commonStyle.shadowOffsetY = style.shadowOffsetY || 0;
        commonStyle.opacity = (0,_core_util_js__rspack_import_0.retrieve3)(style.opacity, topStyle.opacity, 1);
    };
    ZRText.makeFont = function (style) {
        var font = '';
        if (hasSeparateFont(style)) {
            font = [
                style.fontStyle,
                style.fontWeight,
                parseFontSize(style.fontSize),
                style.fontFamily || 'sans-serif'
            ].join(' ');
        }
        return font && (0,_core_util_js__rspack_import_0.trim)(font) || style.textFont || style.font;
    };
    return ZRText;
}(_Displayable_js__rspack_import_1["default"]));
var VALID_TEXT_ALIGN = { left: true, right: 1, center: 1 };
var VALID_TEXT_VERTICAL_ALIGN = { top: 1, bottom: 1, middle: 1 };
var FONT_PARTS = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily'];
function parseFontSize(fontSize) {
    if (typeof fontSize === 'string'
        && (fontSize.indexOf('px') !== -1
            || fontSize.indexOf('rem') !== -1
            || fontSize.indexOf('em') !== -1)) {
        return fontSize;
    }
    else if (!isNaN(+fontSize)) {
        return fontSize + 'px';
    }
    else {
        return _core_platform_js__rspack_import_4.DEFAULT_FONT_SIZE + 'px';
    }
}
function setSeparateFont(targetStyle, sourceStyle) {
    for (var i = 0; i < FONT_PARTS.length; i++) {
        var fontProp = FONT_PARTS[i];
        var val = sourceStyle[fontProp];
        if (val != null) {
            targetStyle[fontProp] = val;
        }
    }
}
function hasSeparateFont(style) {
    return style.fontSize != null || style.fontFamily || style.fontWeight;
}
function normalizeTextStyle(style) {
    normalizeStyle(style);
    (0,_core_util_js__rspack_import_0.each)(style.rich, normalizeStyle);
    return style;
}
function normalizeStyle(style) {
    if (style) {
        style.font = ZRText.makeFont(style);
        var textAlign = style.align;
        textAlign === 'middle' && (textAlign = 'center');
        style.align = (textAlign == null || VALID_TEXT_ALIGN[textAlign]) ? textAlign : 'left';
        var verticalAlign = style.verticalAlign;
        verticalAlign === 'center' && (verticalAlign = 'middle');
        style.verticalAlign = (verticalAlign == null || VALID_TEXT_VERTICAL_ALIGN[verticalAlign]) ? verticalAlign : 'top';
        var textPadding = style.padding;
        if (textPadding) {
            style.padding = (0,_core_util_js__rspack_import_0.normalizeCssArray)(style.padding);
        }
    }
}
function getStroke(stroke, lineWidth) {
    return (stroke == null || lineWidth <= 0 || stroke === 'transparent' || stroke === 'none')
        ? null
        : (stroke.image || stroke.colorStops)
            ? '#000'
            : stroke;
}
function getFill(fill) {
    return (fill == null || fill === 'none')
        ? null
        : (fill.image || fill.colorStops)
            ? '#000'
            : fill;
}
function getTextXForPadding(x, textAlign, textPadding) {
    return textAlign === 'right'
        ? (x - textPadding[1])
        : textAlign === 'center'
            ? (x + textPadding[3] / 2 - textPadding[1] / 2)
            : (x + textPadding[3]);
}
function getStyleText(style) {
    var text = style.text;
    text != null && (text += '');
    return text;
}
function needDrawBackground(style) {
    return !!(style.backgroundColor
        || style.lineHeight
        || (style.borderWidth && style.borderColor));
}
/* export default */ __webpack_exports__["default"] = (ZRText);


}),
66684: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  REDRAW_BIT: function() { return REDRAW_BIT; },
  SHAPE_CHANGED_BIT: function() { return SHAPE_CHANGED_BIT; },
  STYLE_CHANGED_BIT: function() { return STYLE_CHANGED_BIT; }
});
var REDRAW_BIT = 1;
var STYLE_CHANGED_BIT = 2;
var SHAPE_CHANGED_BIT = 4;


}),
85027: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createOrUpdateImage: function() { return createOrUpdateImage; },
  findExistImage: function() { return findExistImage; },
  isImageReady: function() { return isImageReady; }
});
/* import */ var _core_LRU_js__rspack_import_0 = __webpack_require__(74361);
/* import */ var _core_platform_js__rspack_import_1 = __webpack_require__(70145);


var globalImageCache = new _core_LRU_js__rspack_import_0["default"](50);
function findExistImage(newImageOrSrc) {
    if (typeof newImageOrSrc === 'string') {
        var cachedImgObj = globalImageCache.get(newImageOrSrc);
        return cachedImgObj && cachedImgObj.image;
    }
    else {
        return newImageOrSrc;
    }
}
function createOrUpdateImage(newImageOrSrc, image, hostEl, onload, cbPayload) {
    if (!newImageOrSrc) {
        return image;
    }
    else if (typeof newImageOrSrc === 'string') {
        if ((image && image.__zrImageSrc === newImageOrSrc) || !hostEl) {
            return image;
        }
        var cachedImgObj = globalImageCache.get(newImageOrSrc);
        var pendingWrap = { hostEl: hostEl, cb: onload, cbPayload: cbPayload };
        if (cachedImgObj) {
            image = cachedImgObj.image;
            !isImageReady(image) && cachedImgObj.pending.push(pendingWrap);
        }
        else {
            image = _core_platform_js__rspack_import_1.platformApi.loadImage(newImageOrSrc, imageOnLoad, imageOnLoad);
            image.__zrImageSrc = newImageOrSrc;
            globalImageCache.put(newImageOrSrc, image.__cachedImgObj = {
                image: image,
                pending: [pendingWrap]
            });
        }
        return image;
    }
    else {
        return newImageOrSrc;
    }
}
function imageOnLoad() {
    var cachedImgObj = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var i = 0; i < cachedImgObj.pending.length; i++) {
        var pendingWrap = cachedImgObj.pending[i];
        var cb = pendingWrap.cb;
        cb && cb(this, pendingWrap.cbPayload);
        pendingWrap.hostEl.dirty();
    }
    cachedImgObj.pending.length = 0;
}
function isImageReady(image) {
    return image && image.width && image.height;
}


}),
11874: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RichTextContentBlock: function() { return RichTextContentBlock; },
  calcInnerTextOverflowArea: function() { return calcInnerTextOverflowArea; },
  parsePlainText: function() { return parsePlainText; },
  parseRichText: function() { return parseRichText; },
  tSpanCreateBoundingRect: function() { return tSpanCreateBoundingRect; },
  tSpanCreateBoundingRect2: function() { return tSpanCreateBoundingRect2; },
  tSpanHasStroke: function() { return tSpanHasStroke; },
  truncateText: function() { return truncateText; }
});
/* import */ var _helper_image_js__rspack_import_2 = __webpack_require__(85027);
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _contain_text_js__rspack_import_1 = __webpack_require__(26066);
/* import */ var _core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);




var STYLE_REG = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function truncateText(text, containerWidth, font, ellipsis, options) {
    var out = {};
    truncateText2(out, text, containerWidth, font, ellipsis, options);
    return out.text;
}
function truncateText2(out, text, containerWidth, font, ellipsis, options) {
    if (!containerWidth) {
        out.text = '';
        out.isTruncated = false;
        return;
    }
    var textLines = (text + '').split('\n');
    options = prepareTruncateOptions(containerWidth, font, ellipsis, options);
    var isTruncated = false;
    var truncateOut = {};
    for (var i = 0, len = textLines.length; i < len; i++) {
        truncateSingleLine(truncateOut, textLines[i], options);
        textLines[i] = truncateOut.textLine;
        isTruncated = isTruncated || truncateOut.isTruncated;
    }
    out.text = textLines.join('\n');
    out.isTruncated = isTruncated;
}
function prepareTruncateOptions(containerWidth, font, ellipsis, options) {
    options = options || {};
    var preparedOpts = (0,_core_util_js__rspack_import_0.extend)({}, options);
    ellipsis = (0,_core_util_js__rspack_import_0.retrieve2)(ellipsis, '...');
    preparedOpts.maxIterations = (0,_core_util_js__rspack_import_0.retrieve2)(options.maxIterations, 2);
    var minChar = preparedOpts.minChar = (0,_core_util_js__rspack_import_0.retrieve2)(options.minChar, 0);
    var fontMeasureInfo = preparedOpts.fontMeasureInfo = (0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font);
    var ascCharWidth = fontMeasureInfo.asciiCharWidth;
    preparedOpts.placeholder = (0,_core_util_js__rspack_import_0.retrieve2)(options.placeholder, '');
    var contentWidth = containerWidth = Math.max(0, containerWidth - 1);
    for (var i = 0; i < minChar && contentWidth >= ascCharWidth; i++) {
        contentWidth -= ascCharWidth;
    }
    var ellipsisWidth = (0,_contain_text_js__rspack_import_1.measureWidth)(fontMeasureInfo, ellipsis);
    if (ellipsisWidth > contentWidth) {
        ellipsis = '';
        ellipsisWidth = 0;
    }
    contentWidth = containerWidth - ellipsisWidth;
    preparedOpts.ellipsis = ellipsis;
    preparedOpts.ellipsisWidth = ellipsisWidth;
    preparedOpts.contentWidth = contentWidth;
    preparedOpts.containerWidth = containerWidth;
    return preparedOpts;
}
function truncateSingleLine(out, textLine, options) {
    var containerWidth = options.containerWidth;
    var contentWidth = options.contentWidth;
    var fontMeasureInfo = options.fontMeasureInfo;
    if (!containerWidth) {
        out.textLine = '';
        out.isTruncated = false;
        return;
    }
    var lineWidth = (0,_contain_text_js__rspack_import_1.measureWidth)(fontMeasureInfo, textLine);
    if (lineWidth <= containerWidth) {
        out.textLine = textLine;
        out.isTruncated = false;
        return;
    }
    for (var j = 0;; j++) {
        if (lineWidth <= contentWidth || j >= options.maxIterations) {
            textLine += options.ellipsis;
            break;
        }
        var subLength = j === 0
            ? estimateLength(textLine, contentWidth, fontMeasureInfo)
            : lineWidth > 0
                ? Math.floor(textLine.length * contentWidth / lineWidth)
                : 0;
        textLine = textLine.substr(0, subLength);
        lineWidth = (0,_contain_text_js__rspack_import_1.measureWidth)(fontMeasureInfo, textLine);
    }
    if (textLine === '') {
        textLine = options.placeholder;
    }
    out.textLine = textLine;
    out.isTruncated = true;
}
function estimateLength(text, contentWidth, fontMeasureInfo) {
    var width = 0;
    var i = 0;
    for (var len = text.length; i < len && width < contentWidth; i++) {
        width += (0,_contain_text_js__rspack_import_1.measureCharWidth)(fontMeasureInfo, text.charCodeAt(i));
    }
    return i;
}
function parsePlainText(rawText, style, defaultOuterWidth, defaultOuterHeight) {
    var text = formatText(rawText);
    var overflow = style.overflow;
    var padding = style.padding;
    var paddingH = padding ? padding[1] + padding[3] : 0;
    var paddingV = padding ? padding[0] + padding[2] : 0;
    var font = style.font;
    var truncate = overflow === 'truncate';
    var calculatedLineHeight = (0,_contain_text_js__rspack_import_1.getLineHeight)(font);
    var lineHeight = (0,_core_util_js__rspack_import_0.retrieve2)(style.lineHeight, calculatedLineHeight);
    var truncateLineOverflow = style.lineOverflow === 'truncate';
    var isTruncated = false;
    var width = style.width;
    if (width == null && defaultOuterWidth != null) {
        width = defaultOuterWidth - paddingH;
    }
    var height = style.height;
    if (height == null && defaultOuterHeight != null) {
        height = defaultOuterHeight - paddingV;
    }
    var lines;
    if (width != null && (overflow === 'break' || overflow === 'breakAll')) {
        lines = text ? wrapText(text, style.font, width, overflow === 'breakAll', 0).lines : [];
    }
    else {
        lines = text ? text.split('\n') : [];
    }
    var contentHeight = lines.length * lineHeight;
    if (height == null) {
        height = contentHeight;
    }
    if (contentHeight > height && truncateLineOverflow) {
        var lineCount = Math.floor(height / lineHeight);
        isTruncated = isTruncated || (lines.length > lineCount);
        lines = lines.slice(0, lineCount);
        contentHeight = lines.length * lineHeight;
    }
    if (text && truncate && width != null) {
        var options = prepareTruncateOptions(width, font, style.ellipsis, {
            minChar: style.truncateMinChar,
            placeholder: style.placeholder
        });
        var singleOut = {};
        for (var i = 0; i < lines.length; i++) {
            truncateSingleLine(singleOut, lines[i], options);
            lines[i] = singleOut.textLine;
            isTruncated = isTruncated || singleOut.isTruncated;
        }
    }
    var outerHeight = height;
    var contentWidth = 0;
    var fontMeasureInfo = (0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font);
    for (var i = 0; i < lines.length; i++) {
        contentWidth = Math.max((0,_contain_text_js__rspack_import_1.measureWidth)(fontMeasureInfo, lines[i]), contentWidth);
    }
    if (width == null) {
        width = contentWidth;
    }
    var outerWidth = width;
    outerHeight += paddingV;
    outerWidth += paddingH;
    return {
        lines: lines,
        height: height,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        lineHeight: lineHeight,
        calculatedLineHeight: calculatedLineHeight,
        contentWidth: contentWidth,
        contentHeight: contentHeight,
        width: width,
        isTruncated: isTruncated
    };
}
var RichTextToken = (function () {
    function RichTextToken() {
    }
    return RichTextToken;
}());
var RichTextLine = (function () {
    function RichTextLine(tokens) {
        this.tokens = [];
        if (tokens) {
            this.tokens = tokens;
        }
    }
    return RichTextLine;
}());
var RichTextContentBlock = (function () {
    function RichTextContentBlock() {
        this.width = 0;
        this.height = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
        this.outerWidth = 0;
        this.outerHeight = 0;
        this.lines = [];
        this.isTruncated = false;
    }
    return RichTextContentBlock;
}());

function parseRichText(rawText, style, defaultOuterWidth, defaultOuterHeight, topTextAlign) {
    var contentBlock = new RichTextContentBlock();
    var text = formatText(rawText);
    if (!text) {
        return contentBlock;
    }
    var stlPadding = style.padding;
    var stlPaddingH = stlPadding ? stlPadding[1] + stlPadding[3] : 0;
    var stlPaddingV = stlPadding ? stlPadding[0] + stlPadding[2] : 0;
    var topWidth = style.width;
    if (topWidth == null && defaultOuterWidth != null) {
        topWidth = defaultOuterWidth - stlPaddingH;
    }
    var topHeight = style.height;
    if (topHeight == null && defaultOuterHeight != null) {
        topHeight = defaultOuterHeight - stlPaddingV;
    }
    var overflow = style.overflow;
    var wrapInfo = (overflow === 'break' || overflow === 'breakAll') && topWidth != null
        ? { width: topWidth, accumWidth: 0, breakAll: overflow === 'breakAll' }
        : null;
    var lastIndex = STYLE_REG.lastIndex = 0;
    var result;
    while ((result = STYLE_REG.exec(text)) != null) {
        var matchedIndex = result.index;
        if (matchedIndex > lastIndex) {
            pushTokens(contentBlock, text.substring(lastIndex, matchedIndex), style, wrapInfo);
        }
        pushTokens(contentBlock, result[2], style, wrapInfo, result[1]);
        lastIndex = STYLE_REG.lastIndex;
    }
    if (lastIndex < text.length) {
        pushTokens(contentBlock, text.substring(lastIndex, text.length), style, wrapInfo);
    }
    var pendingList = [];
    var calculatedHeight = 0;
    var calculatedWidth = 0;
    var truncate = overflow === 'truncate';
    var truncateLine = style.lineOverflow === 'truncate';
    var tmpTruncateOut = {};
    function finishLine(line, lineWidth, lineHeight) {
        line.width = lineWidth;
        line.lineHeight = lineHeight;
        calculatedHeight += lineHeight;
        calculatedWidth = Math.max(calculatedWidth, lineWidth);
    }
    outer: for (var i = 0; i < contentBlock.lines.length; i++) {
        var line = contentBlock.lines[i];
        var lineHeight = 0;
        var lineWidth = 0;
        for (var j = 0; j < line.tokens.length; j++) {
            var token = line.tokens[j];
            var tokenStyle = token.styleName && style.rich[token.styleName] || {};
            var textPadding = token.textPadding = tokenStyle.padding;
            var paddingH = textPadding ? textPadding[1] + textPadding[3] : 0;
            var font = token.font = tokenStyle.font || style.font;
            token.contentHeight = (0,_contain_text_js__rspack_import_1.getLineHeight)(font);
            var tokenHeight = (0,_core_util_js__rspack_import_0.retrieve2)(tokenStyle.height, token.contentHeight);
            token.innerHeight = tokenHeight;
            textPadding && (tokenHeight += textPadding[0] + textPadding[2]);
            token.height = tokenHeight;
            token.lineHeight = (0,_core_util_js__rspack_import_0.retrieve3)(tokenStyle.lineHeight, style.lineHeight, tokenHeight);
            token.align = tokenStyle && tokenStyle.align || topTextAlign;
            token.verticalAlign = tokenStyle && tokenStyle.verticalAlign || 'middle';
            if (truncateLine && topHeight != null && calculatedHeight + token.lineHeight > topHeight) {
                var originalLength = contentBlock.lines.length;
                if (j > 0) {
                    line.tokens = line.tokens.slice(0, j);
                    finishLine(line, lineWidth, lineHeight);
                    contentBlock.lines = contentBlock.lines.slice(0, i + 1);
                }
                else {
                    contentBlock.lines = contentBlock.lines.slice(0, i);
                }
                contentBlock.isTruncated = contentBlock.isTruncated || (contentBlock.lines.length < originalLength);
                break outer;
            }
            var styleTokenWidth = tokenStyle.width;
            var tokenWidthNotSpecified = styleTokenWidth == null || styleTokenWidth === 'auto';
            if (typeof styleTokenWidth === 'string' && styleTokenWidth.charAt(styleTokenWidth.length - 1) === '%') {
                token.percentWidth = styleTokenWidth;
                pendingList.push(token);
                token.contentWidth = (0,_contain_text_js__rspack_import_1.measureWidth)((0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font), token.text);
            }
            else {
                if (tokenWidthNotSpecified) {
                    var textBackgroundColor = tokenStyle.backgroundColor;
                    var bgImg = textBackgroundColor && textBackgroundColor.image;
                    if (bgImg) {
                        bgImg = _helper_image_js__rspack_import_2.findExistImage(bgImg);
                        if (_helper_image_js__rspack_import_2.isImageReady(bgImg)) {
                            token.width = Math.max(token.width, bgImg.width * tokenHeight / bgImg.height);
                        }
                    }
                }
                var remainTruncWidth = truncate && topWidth != null
                    ? topWidth - lineWidth : null;
                if (remainTruncWidth != null && remainTruncWidth < token.width) {
                    if (!tokenWidthNotSpecified || remainTruncWidth < paddingH) {
                        token.text = '';
                        token.width = token.contentWidth = 0;
                    }
                    else {
                        truncateText2(tmpTruncateOut, token.text, remainTruncWidth - paddingH, font, style.ellipsis, { minChar: style.truncateMinChar });
                        token.text = tmpTruncateOut.text;
                        contentBlock.isTruncated = contentBlock.isTruncated || tmpTruncateOut.isTruncated;
                        token.width = token.contentWidth = (0,_contain_text_js__rspack_import_1.measureWidth)((0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font), token.text);
                    }
                }
                else {
                    token.contentWidth = (0,_contain_text_js__rspack_import_1.measureWidth)((0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font), token.text);
                }
            }
            token.width += paddingH;
            lineWidth += token.width;
            tokenStyle && (lineHeight = Math.max(lineHeight, token.lineHeight));
        }
        finishLine(line, lineWidth, lineHeight);
    }
    contentBlock.outerWidth = contentBlock.width = (0,_core_util_js__rspack_import_0.retrieve2)(topWidth, calculatedWidth);
    contentBlock.outerHeight = contentBlock.height = (0,_core_util_js__rspack_import_0.retrieve2)(topHeight, calculatedHeight);
    contentBlock.contentHeight = calculatedHeight;
    contentBlock.contentWidth = calculatedWidth;
    contentBlock.outerWidth += stlPaddingH;
    contentBlock.outerHeight += stlPaddingV;
    for (var i = 0; i < pendingList.length; i++) {
        var token = pendingList[i];
        var percentWidth = token.percentWidth;
        token.width = parseInt(percentWidth, 10) / 100 * contentBlock.width;
    }
    return contentBlock;
}
function pushTokens(block, str, style, wrapInfo, styleName) {
    var isEmptyStr = str === '';
    var tokenStyle = styleName && style.rich[styleName] || {};
    var lines = block.lines;
    var font = tokenStyle.font || style.font;
    var newLine = false;
    var strLines;
    var linesWidths;
    if (wrapInfo) {
        var tokenPadding = tokenStyle.padding;
        var tokenPaddingH = tokenPadding ? tokenPadding[1] + tokenPadding[3] : 0;
        if (tokenStyle.width != null && tokenStyle.width !== 'auto') {
            var outerWidth_1 = (0,_contain_text_js__rspack_import_1.parsePercent)(tokenStyle.width, wrapInfo.width) + tokenPaddingH;
            if (lines.length > 0) {
                if (outerWidth_1 + wrapInfo.accumWidth > wrapInfo.width) {
                    strLines = str.split('\n');
                    newLine = true;
                }
            }
            wrapInfo.accumWidth = outerWidth_1;
        }
        else {
            var res = wrapText(str, font, wrapInfo.width, wrapInfo.breakAll, wrapInfo.accumWidth);
            wrapInfo.accumWidth = res.accumWidth + tokenPaddingH;
            linesWidths = res.linesWidths;
            strLines = res.lines;
        }
    }
    if (!strLines) {
        strLines = str.split('\n');
    }
    var fontMeasureInfo = (0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font);
    for (var i = 0; i < strLines.length; i++) {
        var text = strLines[i];
        var token = new RichTextToken();
        token.styleName = styleName;
        token.text = text;
        token.isLineHolder = !text && !isEmptyStr;
        if (typeof tokenStyle.width === 'number') {
            token.width = tokenStyle.width;
        }
        else {
            token.width = linesWidths
                ? linesWidths[i]
                : (0,_contain_text_js__rspack_import_1.measureWidth)(fontMeasureInfo, text);
        }
        if (!i && !newLine) {
            var tokens = (lines[lines.length - 1] || (lines[0] = new RichTextLine())).tokens;
            var tokensLen = tokens.length;
            (tokensLen === 1 && tokens[0].isLineHolder)
                ? (tokens[0] = token)
                : ((text || !tokensLen || isEmptyStr) && tokens.push(token));
        }
        else {
            lines.push(new RichTextLine([token]));
        }
    }
}
function isAlphabeticLetter(ch) {
    var code = ch.charCodeAt(0);
    return code >= 0x20 && code <= 0x24F
        || code >= 0x370 && code <= 0x10FF
        || code >= 0x1200 && code <= 0x13FF
        || code >= 0x1E00 && code <= 0x206F;
}
var breakCharMap = (0,_core_util_js__rspack_import_0.reduce)(',&?/;] '.split(''), function (obj, ch) {
    obj[ch] = true;
    return obj;
}, {});
function isWordBreakChar(ch) {
    if (isAlphabeticLetter(ch)) {
        if (breakCharMap[ch]) {
            return true;
        }
        return false;
    }
    return true;
}
function wrapText(text, font, lineWidth, isBreakAll, lastAccumWidth) {
    var lines = [];
    var linesWidths = [];
    var line = '';
    var currentWord = '';
    var currentWordWidth = 0;
    var accumWidth = 0;
    var fontMeasureInfo = (0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font);
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (ch === '\n') {
            if (currentWord) {
                line += currentWord;
                accumWidth += currentWordWidth;
            }
            lines.push(line);
            linesWidths.push(accumWidth);
            line = '';
            currentWord = '';
            currentWordWidth = 0;
            accumWidth = 0;
            continue;
        }
        var chWidth = (0,_contain_text_js__rspack_import_1.measureCharWidth)(fontMeasureInfo, ch.charCodeAt(0));
        var inWord = isBreakAll ? false : !isWordBreakChar(ch);
        if (!lines.length
            ? lastAccumWidth + accumWidth + chWidth > lineWidth
            : accumWidth + chWidth > lineWidth) {
            if (!accumWidth) {
                if (inWord) {
                    lines.push(currentWord);
                    linesWidths.push(currentWordWidth);
                    currentWord = ch;
                    currentWordWidth = chWidth;
                }
                else {
                    lines.push(ch);
                    linesWidths.push(chWidth);
                }
            }
            else if (line || currentWord) {
                if (inWord) {
                    if (!line) {
                        line = currentWord;
                        currentWord = '';
                        currentWordWidth = 0;
                        accumWidth = currentWordWidth;
                    }
                    lines.push(line);
                    linesWidths.push(accumWidth - currentWordWidth);
                    currentWord += ch;
                    currentWordWidth += chWidth;
                    line = '';
                    accumWidth = currentWordWidth;
                }
                else {
                    if (currentWord) {
                        line += currentWord;
                        currentWord = '';
                        currentWordWidth = 0;
                    }
                    lines.push(line);
                    linesWidths.push(accumWidth);
                    line = ch;
                    accumWidth = chWidth;
                }
            }
            continue;
        }
        accumWidth += chWidth;
        if (inWord) {
            currentWord += ch;
            currentWordWidth += chWidth;
        }
        else {
            if (currentWord) {
                line += currentWord;
                currentWord = '';
                currentWordWidth = 0;
            }
            line += ch;
        }
    }
    if (currentWord) {
        line += currentWord;
    }
    if (line) {
        lines.push(line);
        linesWidths.push(accumWidth);
    }
    if (lines.length === 1) {
        accumWidth += lastAccumWidth;
    }
    return {
        accumWidth: accumWidth,
        lines: lines,
        linesWidths: linesWidths
    };
}
function calcInnerTextOverflowArea(out, overflowRect, baseX, baseY, textAlign, textVerticalAlign) {
    out.baseX = baseX;
    out.baseY = baseY;
    out.outerWidth = out.outerHeight = null;
    if (!overflowRect) {
        return;
    }
    var textWidth = overflowRect.width * 2;
    var textHeight = overflowRect.height * 2;
    _core_BoundingRect_js__rspack_import_3["default"].set(tmpCITCTextRect, (0,_contain_text_js__rspack_import_1.adjustTextX)(baseX, textWidth, textAlign), (0,_contain_text_js__rspack_import_1.adjustTextY)(baseY, textHeight, textVerticalAlign), textWidth, textHeight);
    _core_BoundingRect_js__rspack_import_3["default"].intersect(overflowRect, tmpCITCTextRect, null, tmpCITCIntersectRectOpt);
    var outIntersectRect = tmpCITCIntersectRectOpt.outIntersectRect;
    out.outerWidth = outIntersectRect.width;
    out.outerHeight = outIntersectRect.height;
    out.baseX = (0,_contain_text_js__rspack_import_1.adjustTextX)(outIntersectRect.x, outIntersectRect.width, textAlign, true);
    out.baseY = (0,_contain_text_js__rspack_import_1.adjustTextY)(outIntersectRect.y, outIntersectRect.height, textVerticalAlign, true);
}
var tmpCITCTextRect = new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0);
var tmpCITCIntersectRectOpt = { outIntersectRect: {}, clamp: true };
function formatText(text) {
    return text != null ? (text += '') : (text = '');
}
function tSpanCreateBoundingRect(style) {
    var text = formatText(style.text);
    var font = style.font;
    var contentWidth = (0,_contain_text_js__rspack_import_1.measureWidth)((0,_contain_text_js__rspack_import_1.ensureFontMeasureInfo)(font), text);
    var contentHeight = (0,_contain_text_js__rspack_import_1.getLineHeight)(font);
    return tSpanCreateBoundingRect2(style, contentWidth, contentHeight, null);
}
function tSpanCreateBoundingRect2(style, contentWidth, contentHeight, forceLineWidth) {
    var rect = new _core_BoundingRect_js__rspack_import_3["default"]((0,_contain_text_js__rspack_import_1.adjustTextX)(style.x || 0, contentWidth, style.textAlign), (0,_contain_text_js__rspack_import_1.adjustTextY)(style.y || 0, contentHeight, style.textBaseline), contentWidth, contentHeight);
    var lineWidth = forceLineWidth != null
        ? forceLineWidth
        : (tSpanHasStroke(style) ? style.lineWidth : 0);
    if (lineWidth > 0) {
        rect.x -= lineWidth / 2;
        rect.y -= lineWidth / 2;
        rect.width += lineWidth;
        rect.height += lineWidth;
    }
    return rect;
}
function tSpanHasStroke(style) {
    var stroke = style.stroke;
    return stroke != null && stroke !== 'none' && style.lineWidth > 0;
}


}),
28688: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  buildPath: function() { return /* binding */ buildPath; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(44721);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/smoothBezier.js

function smoothBezier(points, smooth, isLoop, constraint) {
    var cps = [];
    var v = [];
    var v1 = [];
    var v2 = [];
    var prevPoint;
    var nextPoint;
    var min;
    var max;
    if (constraint) {
        min = [Infinity, Infinity];
        max = [-Infinity, -Infinity];
        for (var i = 0, len = points.length; i < len; i++) {
            (0,vector.min)(min, min, points[i]);
            (0,vector.max)(max, max, points[i]);
        }
        (0,vector.min)(min, min, constraint[0]);
        (0,vector.max)(max, max, constraint[1]);
    }
    for (var i = 0, len = points.length; i < len; i++) {
        var point = points[i];
        if (isLoop) {
            prevPoint = points[i ? i - 1 : len - 1];
            nextPoint = points[(i + 1) % len];
        }
        else {
            if (i === 0 || i === len - 1) {
                cps.push((0,vector.clone)(points[i]));
                continue;
            }
            else {
                prevPoint = points[i - 1];
                nextPoint = points[i + 1];
            }
        }
        (0,vector.sub)(v, nextPoint, prevPoint);
        (0,vector.scale)(v, v, smooth);
        var d0 = (0,vector.distance)(point, prevPoint);
        var d1 = (0,vector.distance)(point, nextPoint);
        var sum = d0 + d1;
        if (sum !== 0) {
            d0 /= sum;
            d1 /= sum;
        }
        (0,vector.scale)(v1, v, -d0);
        (0,vector.scale)(v2, v, d1);
        var cp0 = (0,vector.add)([], point, v1);
        var cp1 = (0,vector.add)([], point, v2);
        if (constraint) {
            (0,vector.max)(cp0, cp0, min);
            (0,vector.min)(cp0, cp0, max);
            (0,vector.max)(cp1, cp1, min);
            (0,vector.min)(cp1, cp1, max);
        }
        cps.push(cp0);
        cps.push(cp1);
    }
    if (isLoop) {
        cps.push(cps.shift());
    }
    return cps;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/poly.js

function buildPath(ctx, shape, closePath) {
    var smooth = shape.smooth;
    var points = shape.points;
    if (points && points.length >= 2) {
        if (smooth) {
            var controlPoints = smoothBezier(points, smooth, closePath, shape.smoothConstraint);
            ctx.moveTo(points[0][0], points[0][1]);
            var len = points.length;
            for (var i = 0; i < (closePath ? len : len - 1); i++) {
                var cp1 = controlPoints[i * 2];
                var cp2 = controlPoints[i * 2 + 1];
                var p = points[(i + 1) % len];
                ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]);
            }
        }
        else {
            ctx.moveTo(points[0][0], points[0][1]);
            for (var i = 1, l = points.length; i < l; i++) {
                ctx.lineTo(points[i][0], points[i][1]);
            }
        }
        closePath && ctx.closePath();
    }
}


}),
92653: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  subPixelOptimize: function() { return subPixelOptimize; },
  subPixelOptimizeLine: function() { return subPixelOptimizeLine; },
  subPixelOptimizeRect: function() { return subPixelOptimizeRect; }
});
var round = Math.round;
function subPixelOptimizeLine(outputShape, inputShape, style) {
    if (!inputShape) {
        return;
    }
    var x1 = inputShape.x1;
    var x2 = inputShape.x2;
    var y1 = inputShape.y1;
    var y2 = inputShape.y2;
    outputShape.x1 = x1;
    outputShape.x2 = x2;
    outputShape.y1 = y1;
    outputShape.y2 = y2;
    var lineWidth = style && style.lineWidth;
    if (!lineWidth) {
        return outputShape;
    }
    if (round(x1 * 2) === round(x2 * 2)) {
        outputShape.x1 = outputShape.x2 = subPixelOptimize(x1, lineWidth, true);
    }
    if (round(y1 * 2) === round(y2 * 2)) {
        outputShape.y1 = outputShape.y2 = subPixelOptimize(y1, lineWidth, true);
    }
    return outputShape;
}
function subPixelOptimizeRect(outputShape, inputShape, style) {
    if (!inputShape) {
        return;
    }
    var originX = inputShape.x;
    var originY = inputShape.y;
    var originWidth = inputShape.width;
    var originHeight = inputShape.height;
    outputShape.x = originX;
    outputShape.y = originY;
    outputShape.width = originWidth;
    outputShape.height = originHeight;
    var lineWidth = style && style.lineWidth;
    if (!lineWidth) {
        return outputShape;
    }
    outputShape.x = subPixelOptimize(originX, lineWidth, true);
    outputShape.y = subPixelOptimize(originY, lineWidth, true);
    outputShape.width = Math.max(subPixelOptimize(originX + originWidth, lineWidth, false) - outputShape.x, originWidth === 0 ? 0 : 1);
    outputShape.height = Math.max(subPixelOptimize(originY + originHeight, lineWidth, false) - outputShape.y, originHeight === 0 ? 0 : 1);
    return outputShape;
}
function subPixelOptimize(position, lineWidth, positiveOrNegative) {
    if (!lineWidth) {
        return position;
    }
    var doubledPosition = round(position * 2);
    return (doubledPosition + round(lineWidth)) % 2 === 0
        ? doubledPosition / 2
        : (doubledPosition + (positiveOrNegative ? 1 : -1)) / 2;
}


}),
9987: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ArcShape: function() { return ArcShape; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);


var ArcShape = (function () {
    function ArcShape() {
        this.cx = 0;
        this.cy = 0;
        this.r = 0;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.clockwise = true;
    }
    return ArcShape;
}());

var Arc = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Arc, _super);
    function Arc(opts) {
        return _super.call(this, opts) || this;
    }
    Arc.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    Arc.prototype.getDefaultShape = function () {
        return new ArcShape();
    };
    Arc.prototype.buildPath = function (ctx, shape) {
        var x = shape.cx;
        var y = shape.cy;
        var r = Math.max(shape.r, 0);
        var startAngle = shape.startAngle;
        var endAngle = shape.endAngle;
        var clockwise = shape.clockwise;
        var unitX = Math.cos(startAngle);
        var unitY = Math.sin(startAngle);
        ctx.moveTo(unitX * r + x, unitY * r + y);
        ctx.arc(x, y, r, startAngle, endAngle, !clockwise);
    };
    return Arc;
}(_Path_js__rspack_import_0["default"]));
Arc.prototype.type = 'arc';
/* export default */ __webpack_exports__["default"] = (Arc);


}),
51893: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BezierCurveShape: function() { return BezierCurveShape; }
});
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_1 = __webpack_require__(17907);
/* import */ var _core_vector_js__rspack_import_3 = __webpack_require__(44721);
/* import */ var _core_curve_js__rspack_import_0 = __webpack_require__(50631);




var out = [];
var BezierCurveShape = (function () {
    function BezierCurveShape() {
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.cpx1 = 0;
        this.cpy1 = 0;
        this.percent = 1;
    }
    return BezierCurveShape;
}());

function someVectorAt(shape, t, isTangent) {
    var cpx2 = shape.cpx2;
    var cpy2 = shape.cpy2;
    if (cpx2 != null || cpy2 != null) {
        return [
            (isTangent ? _core_curve_js__rspack_import_0.cubicDerivativeAt : _core_curve_js__rspack_import_0.cubicAt)(shape.x1, shape.cpx1, shape.cpx2, shape.x2, t),
            (isTangent ? _core_curve_js__rspack_import_0.cubicDerivativeAt : _core_curve_js__rspack_import_0.cubicAt)(shape.y1, shape.cpy1, shape.cpy2, shape.y2, t)
        ];
    }
    else {
        return [
            (isTangent ? _core_curve_js__rspack_import_0.quadraticDerivativeAt : _core_curve_js__rspack_import_0.quadraticAt)(shape.x1, shape.cpx1, shape.x2, t),
            (isTangent ? _core_curve_js__rspack_import_0.quadraticDerivativeAt : _core_curve_js__rspack_import_0.quadraticAt)(shape.y1, shape.cpy1, shape.y2, t)
        ];
    }
}
var BezierCurve = (function (_super) {
    (0,tslib__rspack_import_2.__extends)(BezierCurve, _super);
    function BezierCurve(opts) {
        return _super.call(this, opts) || this;
    }
    BezierCurve.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    BezierCurve.prototype.getDefaultShape = function () {
        return new BezierCurveShape();
    };
    BezierCurve.prototype.buildPath = function (ctx, shape) {
        var x1 = shape.x1;
        var y1 = shape.y1;
        var x2 = shape.x2;
        var y2 = shape.y2;
        var cpx1 = shape.cpx1;
        var cpy1 = shape.cpy1;
        var cpx2 = shape.cpx2;
        var cpy2 = shape.cpy2;
        var percent = shape.percent;
        if (percent === 0) {
            return;
        }
        ctx.moveTo(x1, y1);
        if (cpx2 == null || cpy2 == null) {
            if (percent < 1) {
                (0,_core_curve_js__rspack_import_0.quadraticSubdivide)(x1, cpx1, x2, percent, out);
                cpx1 = out[1];
                x2 = out[2];
                (0,_core_curve_js__rspack_import_0.quadraticSubdivide)(y1, cpy1, y2, percent, out);
                cpy1 = out[1];
                y2 = out[2];
            }
            ctx.quadraticCurveTo(cpx1, cpy1, x2, y2);
        }
        else {
            if (percent < 1) {
                (0,_core_curve_js__rspack_import_0.cubicSubdivide)(x1, cpx1, cpx2, x2, percent, out);
                cpx1 = out[1];
                cpx2 = out[2];
                x2 = out[3];
                (0,_core_curve_js__rspack_import_0.cubicSubdivide)(y1, cpy1, cpy2, y2, percent, out);
                cpy1 = out[1];
                cpy2 = out[2];
                y2 = out[3];
            }
            ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
        }
    };
    BezierCurve.prototype.pointAt = function (t) {
        return someVectorAt(this.shape, t, false);
    };
    BezierCurve.prototype.tangentAt = function (t) {
        var p = someVectorAt(this.shape, t, true);
        return _core_vector_js__rspack_import_3.normalize(p, p);
    };
    return BezierCurve;
}(_Path_js__rspack_import_1["default"]));
;
BezierCurve.prototype.type = 'bezier-curve';
/* export default */ __webpack_exports__["default"] = (BezierCurve);


}),
29471: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CircleShape: function() { return CircleShape; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);


var CircleShape = (function () {
    function CircleShape() {
        this.cx = 0;
        this.cy = 0;
        this.r = 0;
    }
    return CircleShape;
}());

var Circle = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Circle, _super);
    function Circle(opts) {
        return _super.call(this, opts) || this;
    }
    Circle.prototype.getDefaultShape = function () {
        return new CircleShape();
    };
    Circle.prototype.buildPath = function (ctx, shape) {
        ctx.moveTo(shape.cx + shape.r, shape.cy);
        ctx.arc(shape.cx, shape.cy, shape.r, 0, Math.PI * 2);
    };
    return Circle;
}(_Path_js__rspack_import_0["default"]));
;
Circle.prototype.type = 'circle';
/* export default */ __webpack_exports__["default"] = (Circle);


}),
79981: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EllipseShape: function() { return EllipseShape; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);


var EllipseShape = (function () {
    function EllipseShape() {
        this.cx = 0;
        this.cy = 0;
        this.rx = 0;
        this.ry = 0;
    }
    return EllipseShape;
}());

var Ellipse = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Ellipse, _super);
    function Ellipse(opts) {
        return _super.call(this, opts) || this;
    }
    Ellipse.prototype.getDefaultShape = function () {
        return new EllipseShape();
    };
    Ellipse.prototype.buildPath = function (ctx, shape) {
        var k = 0.5522848;
        var x = shape.cx;
        var y = shape.cy;
        var a = shape.rx;
        var b = shape.ry;
        var ox = a * k;
        var oy = b * k;
        ctx.moveTo(x - a, y);
        ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
        ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
        ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
        ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
        ctx.closePath();
    };
    return Ellipse;
}(_Path_js__rspack_import_0["default"]));
Ellipse.prototype.type = 'ellipse';
/* export default */ __webpack_exports__["default"] = (Ellipse);


}),
38401: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LineShape: function() { return LineShape; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);
/* import */ var _helper_subPixelOptimize_js__rspack_import_2 = __webpack_require__(92653);



var subPixelOptimizeOutputShape = {};
var LineShape = (function () {
    function LineShape() {
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.percent = 1;
    }
    return LineShape;
}());

var Line = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Line, _super);
    function Line(opts) {
        return _super.call(this, opts) || this;
    }
    Line.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    Line.prototype.getDefaultShape = function () {
        return new LineShape();
    };
    Line.prototype.buildPath = function (ctx, shape) {
        var x1;
        var y1;
        var x2;
        var y2;
        if (this.subPixelOptimize) {
            var optimizedShape = (0,_helper_subPixelOptimize_js__rspack_import_2.subPixelOptimizeLine)(subPixelOptimizeOutputShape, shape, this.style);
            x1 = optimizedShape.x1;
            y1 = optimizedShape.y1;
            x2 = optimizedShape.x2;
            y2 = optimizedShape.y2;
        }
        else {
            x1 = shape.x1;
            y1 = shape.y1;
            x2 = shape.x2;
            y2 = shape.y2;
        }
        var percent = shape.percent;
        if (percent === 0) {
            return;
        }
        ctx.moveTo(x1, y1);
        if (percent < 1) {
            x2 = x1 * (1 - percent) + x2 * percent;
            y2 = y1 * (1 - percent) + y2 * percent;
        }
        ctx.lineTo(x2, y2);
    };
    Line.prototype.pointAt = function (p) {
        var shape = this.shape;
        return [
            shape.x1 * (1 - p) + shape.x2 * p,
            shape.y1 * (1 - p) + shape.y2 * p
        ];
    };
    return Line;
}(_Path_js__rspack_import_0["default"]));
Line.prototype.type = 'line';
/* export default */ __webpack_exports__["default"] = (Line);


}),
69717: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PolygonShape: function() { return PolygonShape; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);
/* import */ var _helper_poly_js__rspack_import_2 = __webpack_require__(28688);



var PolygonShape = (function () {
    function PolygonShape() {
        this.points = null;
        this.smooth = 0;
        this.smoothConstraint = null;
    }
    return PolygonShape;
}());

var Polygon = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Polygon, _super);
    function Polygon(opts) {
        return _super.call(this, opts) || this;
    }
    Polygon.prototype.getDefaultShape = function () {
        return new PolygonShape();
    };
    Polygon.prototype.buildPath = function (ctx, shape) {
        _helper_poly_js__rspack_import_2.buildPath(ctx, shape, true);
    };
    return Polygon;
}(_Path_js__rspack_import_0["default"]));
;
Polygon.prototype.type = 'polygon';
/* export default */ __webpack_exports__["default"] = (Polygon);


}),
69935: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PolylineShape: function() { return PolylineShape; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);
/* import */ var _helper_poly_js__rspack_import_2 = __webpack_require__(28688);



var PolylineShape = (function () {
    function PolylineShape() {
        this.points = null;
        this.percent = 1;
        this.smooth = 0;
        this.smoothConstraint = null;
    }
    return PolylineShape;
}());

var Polyline = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Polyline, _super);
    function Polyline(opts) {
        return _super.call(this, opts) || this;
    }
    Polyline.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    Polyline.prototype.getDefaultShape = function () {
        return new PolylineShape();
    };
    Polyline.prototype.buildPath = function (ctx, shape) {
        _helper_poly_js__rspack_import_2.buildPath(ctx, shape, false);
    };
    return Polyline;
}(_Path_js__rspack_import_0["default"]));
Polyline.prototype.type = 'polyline';
/* export default */ __webpack_exports__["default"] = (Polyline);


}),
52721: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RectShape: function() { return /* binding */ Rect_RectShape; },
  "default": function() { return /* binding */ shape_Rect; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(17907);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/roundRect.js
function buildPath(ctx, shape) {
    var x = shape.x;
    var y = shape.y;
    var width = shape.width;
    var height = shape.height;
    var r = shape.r;
    var r1;
    var r2;
    var r3;
    var r4;
    if (width < 0) {
        x = x + width;
        width = -width;
    }
    if (height < 0) {
        y = y + height;
        height = -height;
    }
    if (typeof r === 'number') {
        r1 = r2 = r3 = r4 = r;
    }
    else if (r instanceof Array) {
        if (r.length === 1) {
            r1 = r2 = r3 = r4 = r[0];
        }
        else if (r.length === 2) {
            r1 = r3 = r[0];
            r2 = r4 = r[1];
        }
        else if (r.length === 3) {
            r1 = r[0];
            r2 = r4 = r[1];
            r3 = r[2];
        }
        else {
            r1 = r[0];
            r2 = r[1];
            r3 = r[2];
            r4 = r[3];
        }
    }
    else {
        r1 = r2 = r3 = r4 = 0;
    }
    var total;
    if (r1 + r2 > width) {
        total = r1 + r2;
        r1 *= width / total;
        r2 *= width / total;
    }
    if (r3 + r4 > width) {
        total = r3 + r4;
        r3 *= width / total;
        r4 *= width / total;
    }
    if (r2 + r3 > height) {
        total = r2 + r3;
        r2 *= height / total;
        r3 *= height / total;
    }
    if (r1 + r4 > height) {
        total = r1 + r4;
        r1 *= height / total;
        r4 *= height / total;
    }
    ctx.moveTo(x + r1, y);
    ctx.lineTo(x + width - r2, y);
    r2 !== 0 && ctx.arc(x + width - r2, y + r2, r2, -Math.PI / 2, 0);
    ctx.lineTo(x + width, y + height - r3);
    r3 !== 0 && ctx.arc(x + width - r3, y + height - r3, r3, 0, Math.PI / 2);
    ctx.lineTo(x + r4, y + height);
    r4 !== 0 && ctx.arc(x + r4, y + height - r4, r4, Math.PI / 2, Math.PI);
    ctx.lineTo(x, y + r1);
    r1 !== 0 && ctx.arc(x + r1, y + r1, r1, Math.PI, Math.PI * 1.5);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/subPixelOptimize.js
var subPixelOptimize = __webpack_require__(92653);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js




var Rect_RectShape = (function () {
    function RectShape() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
    return RectShape;
}());

var subPixelOptimizeOutputShape = {};
var Rect_Rect = (function (_super) {
    (0,tslib_es6.__extends)(Rect, _super);
    function Rect(opts) {
        return _super.call(this, opts) || this;
    }
    Rect.prototype.getDefaultShape = function () {
        return new Rect_RectShape();
    };
    Rect.prototype.buildPath = function (ctx, shape) {
        var x;
        var y;
        var width;
        var height;
        if (this.subPixelOptimize) {
            var optimizedShape = (0,subPixelOptimize.subPixelOptimizeRect)(subPixelOptimizeOutputShape, shape, this.style);
            x = optimizedShape.x;
            y = optimizedShape.y;
            width = optimizedShape.width;
            height = optimizedShape.height;
            optimizedShape.r = shape.r;
            shape = optimizedShape;
        }
        else {
            x = shape.x;
            y = shape.y;
            width = shape.width;
            height = shape.height;
        }
        if (!shape.r) {
            ctx.rect(x, y, width, height);
        }
        else {
            buildPath(ctx, shape);
        }
    };
    Rect.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height;
    };
    return Rect;
}(Path["default"]));
Rect_Rect.prototype.type = 'rect';
/* export default */ var shape_Rect = (Rect_Rect);


}),
98577: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RingShape: function() { return RingShape; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Path_js__rspack_import_0 = __webpack_require__(17907);


var RingShape = (function () {
    function RingShape() {
        this.cx = 0;
        this.cy = 0;
        this.r = 0;
        this.r0 = 0;
    }
    return RingShape;
}());

var Ring = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Ring, _super);
    function Ring(opts) {
        return _super.call(this, opts) || this;
    }
    Ring.prototype.getDefaultShape = function () {
        return new RingShape();
    };
    Ring.prototype.buildPath = function (ctx, shape) {
        var x = shape.cx;
        var y = shape.cy;
        var PI2 = Math.PI * 2;
        ctx.moveTo(x + shape.r, y);
        ctx.arc(x, y, shape.r, 0, PI2, false);
        ctx.moveTo(x + shape.r0, y);
        ctx.arc(x, y, shape.r0, 0, PI2, true);
    };
    return Ring;
}(_Path_js__rspack_import_0["default"]));
Ring.prototype.type = 'ring';
/* export default */ __webpack_exports__["default"] = (Ring);


}),
98528: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shape_Sector; },
  SectorShape: function() { return /* binding */ Sector_SectorShape; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(17907);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/roundSector.js

var PI = Math.PI;
var PI2 = PI * 2;
var mathSin = Math.sin;
var mathCos = Math.cos;
var mathACos = Math.acos;
var mathATan2 = Math.atan2;
var mathAbs = Math.abs;
var mathSqrt = Math.sqrt;
var mathMax = Math.max;
var mathMin = Math.min;
var e = 1e-4;
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var dx10 = x1 - x0;
    var dy10 = y1 - y0;
    var dx32 = x3 - x2;
    var dy32 = y3 - y2;
    var t = dy32 * dx10 - dx32 * dy10;
    if (t * t < e) {
        return;
    }
    t = (dx32 * (y0 - y2) - dy32 * (x0 - x2)) / t;
    return [x0 + t * dx10, y0 + t * dy10];
}
function computeCornerTangents(x0, y0, x1, y1, radius, cr, clockwise) {
    var x01 = x0 - x1;
    var y01 = y0 - y1;
    var lo = (clockwise ? cr : -cr) / mathSqrt(x01 * x01 + y01 * y01);
    var ox = lo * y01;
    var oy = -lo * x01;
    var x11 = x0 + ox;
    var y11 = y0 + oy;
    var x10 = x1 + ox;
    var y10 = y1 + oy;
    var x00 = (x11 + x10) / 2;
    var y00 = (y11 + y10) / 2;
    var dx = x10 - x11;
    var dy = y10 - y11;
    var d2 = dx * dx + dy * dy;
    var r = radius - cr;
    var s = x11 * y10 - x10 * y11;
    var d = (dy < 0 ? -1 : 1) * mathSqrt(mathMax(0, r * r * d2 - s * s));
    var cx0 = (s * dy - dx * d) / d2;
    var cy0 = (-s * dx - dy * d) / d2;
    var cx1 = (s * dy + dx * d) / d2;
    var cy1 = (-s * dx + dy * d) / d2;
    var dx0 = cx0 - x00;
    var dy0 = cy0 - y00;
    var dx1 = cx1 - x00;
    var dy1 = cy1 - y00;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) {
        cx0 = cx1;
        cy0 = cy1;
    }
    return {
        cx: cx0,
        cy: cy0,
        x0: -ox,
        y0: -oy,
        x1: cx0 * (radius / r - 1),
        y1: cy0 * (radius / r - 1)
    };
}
function normalizeCornerRadius(cr) {
    var arr;
    if ((0,util.isArray)(cr)) {
        var len = cr.length;
        if (!len) {
            return cr;
        }
        if (len === 1) {
            arr = [cr[0], cr[0], 0, 0];
        }
        else if (len === 2) {
            arr = [cr[0], cr[0], cr[1], cr[1]];
        }
        else if (len === 3) {
            arr = cr.concat(cr[2]);
        }
        else {
            arr = cr;
        }
    }
    else {
        arr = [cr, cr, cr, cr];
    }
    return arr;
}
function buildPath(ctx, shape) {
    var _a;
    var radius = mathMax(shape.r, 0);
    var innerRadius = mathMax(shape.r0 || 0, 0);
    var hasRadius = radius > 0;
    var hasInnerRadius = innerRadius > 0;
    if (!hasRadius && !hasInnerRadius) {
        return;
    }
    if (!hasRadius) {
        radius = innerRadius;
        innerRadius = 0;
    }
    if (innerRadius > radius) {
        var tmp = radius;
        radius = innerRadius;
        innerRadius = tmp;
    }
    var startAngle = shape.startAngle, endAngle = shape.endAngle;
    if (isNaN(startAngle) || isNaN(endAngle)) {
        return;
    }
    var cx = shape.cx, cy = shape.cy;
    var clockwise = !!shape.clockwise;
    var arc = mathAbs(endAngle - startAngle);
    var mod = arc > PI2 && arc % PI2;
    mod > e && (arc = mod);
    if (!(radius > e)) {
        ctx.moveTo(cx, cy);
    }
    else if (arc > PI2 - e) {
        ctx.moveTo(cx + radius * mathCos(startAngle), cy + radius * mathSin(startAngle));
        ctx.arc(cx, cy, radius, startAngle, endAngle, !clockwise);
        if (innerRadius > e) {
            ctx.moveTo(cx + innerRadius * mathCos(endAngle), cy + innerRadius * mathSin(endAngle));
            ctx.arc(cx, cy, innerRadius, endAngle, startAngle, clockwise);
        }
    }
    else {
        var icrStart = void 0;
        var icrEnd = void 0;
        var ocrStart = void 0;
        var ocrEnd = void 0;
        var ocrs = void 0;
        var ocre = void 0;
        var icrs = void 0;
        var icre = void 0;
        var ocrMax = void 0;
        var icrMax = void 0;
        var limitedOcrMax = void 0;
        var limitedIcrMax = void 0;
        var xre = void 0;
        var yre = void 0;
        var xirs = void 0;
        var yirs = void 0;
        var xrs = radius * mathCos(startAngle);
        var yrs = radius * mathSin(startAngle);
        var xire = innerRadius * mathCos(endAngle);
        var yire = innerRadius * mathSin(endAngle);
        var hasArc = arc > e;
        if (hasArc) {
            var cornerRadius = shape.cornerRadius;
            if (cornerRadius) {
                _a = normalizeCornerRadius(cornerRadius), icrStart = _a[0], icrEnd = _a[1], ocrStart = _a[2], ocrEnd = _a[3];
            }
            var halfRd = mathAbs(radius - innerRadius) / 2;
            ocrs = mathMin(halfRd, ocrStart);
            ocre = mathMin(halfRd, ocrEnd);
            icrs = mathMin(halfRd, icrStart);
            icre = mathMin(halfRd, icrEnd);
            limitedOcrMax = ocrMax = mathMax(ocrs, ocre);
            limitedIcrMax = icrMax = mathMax(icrs, icre);
            if (ocrMax > e || icrMax > e) {
                xre = radius * mathCos(endAngle);
                yre = radius * mathSin(endAngle);
                xirs = innerRadius * mathCos(startAngle);
                yirs = innerRadius * mathSin(startAngle);
                if (arc < PI) {
                    var it_1 = intersect(xrs, yrs, xirs, yirs, xre, yre, xire, yire);
                    if (it_1) {
                        var x0 = xrs - it_1[0];
                        var y0 = yrs - it_1[1];
                        var x1 = xre - it_1[0];
                        var y1 = yre - it_1[1];
                        var a = 1 / mathSin(mathACos((x0 * x1 + y0 * y1) / (mathSqrt(x0 * x0 + y0 * y0) * mathSqrt(x1 * x1 + y1 * y1))) / 2);
                        var b = mathSqrt(it_1[0] * it_1[0] + it_1[1] * it_1[1]);
                        limitedOcrMax = mathMin(ocrMax, (radius - b) / (a + 1));
                        limitedIcrMax = mathMin(icrMax, (innerRadius - b) / (a - 1));
                    }
                }
            }
        }
        if (!hasArc) {
            ctx.moveTo(cx + xrs, cy + yrs);
        }
        else if (limitedOcrMax > e) {
            var crStart = mathMin(ocrStart, limitedOcrMax);
            var crEnd = mathMin(ocrEnd, limitedOcrMax);
            var ct0 = computeCornerTangents(xirs, yirs, xrs, yrs, radius, crStart, clockwise);
            var ct1 = computeCornerTangents(xre, yre, xire, yire, radius, crEnd, clockwise);
            ctx.moveTo(cx + ct0.cx + ct0.x0, cy + ct0.cy + ct0.y0);
            if (limitedOcrMax < ocrMax && crStart === crEnd) {
                ctx.arc(cx + ct0.cx, cy + ct0.cy, limitedOcrMax, mathATan2(ct0.y0, ct0.x0), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
            else {
                crStart > 0 && ctx.arc(cx + ct0.cx, cy + ct0.cy, crStart, mathATan2(ct0.y0, ct0.x0), mathATan2(ct0.y1, ct0.x1), !clockwise);
                ctx.arc(cx, cy, radius, mathATan2(ct0.cy + ct0.y1, ct0.cx + ct0.x1), mathATan2(ct1.cy + ct1.y1, ct1.cx + ct1.x1), !clockwise);
                crEnd > 0 && ctx.arc(cx + ct1.cx, cy + ct1.cy, crEnd, mathATan2(ct1.y1, ct1.x1), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
        }
        else {
            ctx.moveTo(cx + xrs, cy + yrs);
            ctx.arc(cx, cy, radius, startAngle, endAngle, !clockwise);
        }
        if (!(innerRadius > e) || !hasArc) {
            ctx.lineTo(cx + xire, cy + yire);
        }
        else if (limitedIcrMax > e) {
            var crStart = mathMin(icrStart, limitedIcrMax);
            var crEnd = mathMin(icrEnd, limitedIcrMax);
            var ct0 = computeCornerTangents(xire, yire, xre, yre, innerRadius, -crEnd, clockwise);
            var ct1 = computeCornerTangents(xrs, yrs, xirs, yirs, innerRadius, -crStart, clockwise);
            ctx.lineTo(cx + ct0.cx + ct0.x0, cy + ct0.cy + ct0.y0);
            if (limitedIcrMax < icrMax && crStart === crEnd) {
                ctx.arc(cx + ct0.cx, cy + ct0.cy, limitedIcrMax, mathATan2(ct0.y0, ct0.x0), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
            else {
                crEnd > 0 && ctx.arc(cx + ct0.cx, cy + ct0.cy, crEnd, mathATan2(ct0.y0, ct0.x0), mathATan2(ct0.y1, ct0.x1), !clockwise);
                ctx.arc(cx, cy, innerRadius, mathATan2(ct0.cy + ct0.y1, ct0.cx + ct0.x1), mathATan2(ct1.cy + ct1.y1, ct1.cx + ct1.x1), clockwise);
                crStart > 0 && ctx.arc(cx + ct1.cx, cy + ct1.cy, crStart, mathATan2(ct1.y1, ct1.x1), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
        }
        else {
            ctx.lineTo(cx + xire, cy + yire);
            ctx.arc(cx, cy, innerRadius, endAngle, startAngle, clockwise);
        }
    }
    ctx.closePath();
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js



var Sector_SectorShape = (function () {
    function SectorShape() {
        this.cx = 0;
        this.cy = 0;
        this.r0 = 0;
        this.r = 0;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.clockwise = true;
        this.cornerRadius = 0;
    }
    return SectorShape;
}());

var Sector_Sector = (function (_super) {
    (0,tslib_es6.__extends)(Sector, _super);
    function Sector(opts) {
        return _super.call(this, opts) || this;
    }
    Sector.prototype.getDefaultShape = function () {
        return new Sector_SectorShape();
    };
    Sector.prototype.buildPath = function (ctx, shape) {
        buildPath(ctx, shape);
    };
    Sector.prototype.isZeroArea = function () {
        return this.shape.startAngle === this.shape.endAngle
            || this.shape.r === this.shape.r0;
    };
    return Sector;
}(Path["default"]));
Sector_Sector.prototype.type = 'sector';
/* export default */ var shape_Sector = (Sector_Sector);


}),
66687: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Param = (function () {
    function Param(target, e) {
        this.target = target;
        this.topTarget = e && e.topTarget;
    }
    return Param;
}());
var Draggable = (function () {
    function Draggable(handler) {
        this.handler = handler;
        handler.on('mousedown', this._dragStart, this);
        handler.on('mousemove', this._drag, this);
        handler.on('mouseup', this._dragEnd, this);
    }
    Draggable.prototype._dragStart = function (e) {
        var draggingTarget = e.target;
        while (draggingTarget && !draggingTarget.draggable) {
            draggingTarget = draggingTarget.parent || draggingTarget.__hostTarget;
        }
        if (draggingTarget) {
            this._draggingTarget = draggingTarget;
            draggingTarget.dragging = true;
            this._x = e.offsetX;
            this._y = e.offsetY;
            this.handler.dispatchToElement(new Param(draggingTarget, e), 'dragstart', e.event);
        }
    };
    Draggable.prototype._drag = function (e) {
        var draggingTarget = this._draggingTarget;
        if (draggingTarget) {
            var x = e.offsetX;
            var y = e.offsetY;
            var dx = x - this._x;
            var dy = y - this._y;
            this._x = x;
            this._y = y;
            draggingTarget.drift(dx, dy, e);
            this.handler.dispatchToElement(new Param(draggingTarget, e), 'drag', e.event);
            var dropTarget = this.handler.findHover(x, y, draggingTarget).target;
            var lastDropTarget = this._dropTarget;
            this._dropTarget = dropTarget;
            if (draggingTarget !== dropTarget) {
                if (lastDropTarget && dropTarget !== lastDropTarget) {
                    this.handler.dispatchToElement(new Param(lastDropTarget, e), 'dragleave', e.event);
                }
                if (dropTarget && dropTarget !== lastDropTarget) {
                    this.handler.dispatchToElement(new Param(dropTarget, e), 'dragenter', e.event);
                }
            }
        }
    };
    Draggable.prototype._dragEnd = function (e) {
        var draggingTarget = this._draggingTarget;
        if (draggingTarget) {
            draggingTarget.dragging = false;
        }
        this.handler.dispatchToElement(new Param(draggingTarget, e), 'dragend', e.event);
        if (this._dropTarget) {
            this.handler.dispatchToElement(new Param(this._dropTarget, e), 'drop', e.event);
        }
        this._draggingTarget = null;
        this._dropTarget = null;
    };
    return Draggable;
}());
/* export default */ __webpack_exports__["default"] = (Draggable);


}),
91921: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Painter; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/helper.js
var helper = __webpack_require__(25483);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(17907);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js
var graphic_Image = __webpack_require__(16440);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(26066);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/TSpan.js
var TSpan = __webpack_require__(67881);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/SVGPathRebuilder.js

var mathSin = Math.sin;
var mathCos = Math.cos;
var PI = Math.PI;
var PI2 = Math.PI * 2;
var degree = 180 / PI;
var SVGPathRebuilder_SVGPathRebuilder = (function () {
    function SVGPathRebuilder() {
    }
    SVGPathRebuilder.prototype.reset = function (precision) {
        this._start = true;
        this._d = [];
        this._str = '';
        this._p = Math.pow(10, precision || 4);
    };
    SVGPathRebuilder.prototype.moveTo = function (x, y) {
        this._add('M', x, y);
    };
    SVGPathRebuilder.prototype.lineTo = function (x, y) {
        this._add('L', x, y);
    };
    SVGPathRebuilder.prototype.bezierCurveTo = function (x, y, x2, y2, x3, y3) {
        this._add('C', x, y, x2, y2, x3, y3);
    };
    SVGPathRebuilder.prototype.quadraticCurveTo = function (x, y, x2, y2) {
        this._add('Q', x, y, x2, y2);
    };
    SVGPathRebuilder.prototype.arc = function (cx, cy, r, startAngle, endAngle, anticlockwise) {
        this.ellipse(cx, cy, r, r, 0, startAngle, endAngle, anticlockwise);
    };
    SVGPathRebuilder.prototype.ellipse = function (cx, cy, rx, ry, psi, startAngle, endAngle, anticlockwise) {
        var dTheta = endAngle - startAngle;
        var clockwise = !anticlockwise;
        var dThetaPositive = Math.abs(dTheta);
        var isCircle = (0,helper.isAroundZero)(dThetaPositive - PI2)
            || (clockwise ? dTheta >= PI2 : -dTheta >= PI2);
        var unifiedTheta = dTheta > 0 ? dTheta % PI2 : (dTheta % PI2 + PI2);
        var large = false;
        if (isCircle) {
            large = true;
        }
        else if ((0,helper.isAroundZero)(dThetaPositive)) {
            large = false;
        }
        else {
            large = (unifiedTheta >= PI) === !!clockwise;
        }
        var x0 = cx + rx * mathCos(startAngle);
        var y0 = cy + ry * mathSin(startAngle);
        if (this._start) {
            this._add('M', x0, y0);
        }
        var xRot = Math.round(psi * degree);
        if (isCircle) {
            var p = 1 / this._p;
            var dTheta_1 = (clockwise ? 1 : -1) * (PI2 - p);
            this._add('A', rx, ry, xRot, 1, +clockwise, cx + rx * mathCos(startAngle + dTheta_1), cy + ry * mathSin(startAngle + dTheta_1));
            if (p > 1e-2) {
                this._add('A', rx, ry, xRot, 0, +clockwise, x0, y0);
            }
        }
        else {
            var x = cx + rx * mathCos(endAngle);
            var y = cy + ry * mathSin(endAngle);
            this._add('A', rx, ry, xRot, +large, +clockwise, x, y);
        }
    };
    SVGPathRebuilder.prototype.rect = function (x, y, w, h) {
        this._add('M', x, y);
        this._add('l', w, 0);
        this._add('l', 0, h);
        this._add('l', -w, 0);
        this._add('Z');
    };
    SVGPathRebuilder.prototype.closePath = function () {
        if (this._d.length > 0) {
            this._add('Z');
        }
    };
    SVGPathRebuilder.prototype._add = function (cmd, a, b, c, d, e, f, g, h) {
        var vals = [];
        var p = this._p;
        for (var i = 1; i < arguments.length; i++) {
            var val = arguments[i];
            if (isNaN(val)) {
                this._invalid = true;
                return;
            }
            vals.push(Math.round(val * p) / p);
        }
        this._d.push(cmd + vals.join(' '));
        this._start = cmd === 'Z';
    };
    SVGPathRebuilder.prototype.generateStr = function () {
        this._str = this._invalid ? '' : this._d.join('');
        this._d = [];
    };
    SVGPathRebuilder.prototype.getStr = function () {
        return this._str;
    };
    return SVGPathRebuilder;
}());
/* export default */ var svg_SVGPathRebuilder = (SVGPathRebuilder_SVGPathRebuilder);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/dashStyle.js
var dashStyle = __webpack_require__(70022);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/mapStyleToAttrs.js





var NONE = 'none';
var mathRound = Math.round;
function pathHasFill(style) {
    var fill = style.fill;
    return fill != null && fill !== NONE;
}
function pathHasStroke(style) {
    var stroke = style.stroke;
    return stroke != null && stroke !== NONE;
}
var strokeProps = ['lineCap', 'miterLimit', 'lineJoin'];
var svgStrokeProps = (0,util.map)(strokeProps, function (prop) { return "stroke-" + prop.toLowerCase(); });
function mapStyleToAttrs(updateAttr, style, el, forceUpdate) {
    var opacity = style.opacity == null ? 1 : style.opacity;
    if (el instanceof graphic_Image["default"]) {
        updateAttr('opacity', opacity);
        return;
    }
    if (pathHasFill(style)) {
        var fill = (0,helper.normalizeColor)(style.fill);
        updateAttr('fill', fill.color);
        var fillOpacity = style.fillOpacity != null
            ? style.fillOpacity * fill.opacity * opacity
            : fill.opacity * opacity;
        if (forceUpdate || fillOpacity < 1) {
            updateAttr('fill-opacity', fillOpacity);
        }
    }
    else {
        updateAttr('fill', NONE);
    }
    if (pathHasStroke(style)) {
        var stroke = (0,helper.normalizeColor)(style.stroke);
        updateAttr('stroke', stroke.color);
        var strokeScale = style.strokeNoScale
            ? el.getLineScale()
            : 1;
        var strokeWidth = (strokeScale ? (style.lineWidth || 0) / strokeScale : 0);
        var strokeOpacity = style.strokeOpacity != null
            ? style.strokeOpacity * stroke.opacity * opacity
            : stroke.opacity * opacity;
        var strokeFirst = style.strokeFirst;
        if (forceUpdate || strokeWidth !== 1) {
            updateAttr('stroke-width', strokeWidth);
        }
        if (forceUpdate || strokeFirst) {
            updateAttr('paint-order', strokeFirst ? 'stroke' : 'fill');
        }
        if (forceUpdate || strokeOpacity < 1) {
            updateAttr('stroke-opacity', strokeOpacity);
        }
        if (style.lineDash) {
            var _a = (0,dashStyle.getLineDash)(el), lineDash = _a[0], lineDashOffset = _a[1];
            if (lineDash) {
                lineDashOffset = mathRound(lineDashOffset || 0);
                updateAttr('stroke-dasharray', lineDash.join(','));
                if (lineDashOffset || forceUpdate) {
                    updateAttr('stroke-dashoffset', lineDashOffset);
                }
            }
        }
        else if (forceUpdate) {
            updateAttr('stroke-dasharray', NONE);
        }
        for (var i = 0; i < strokeProps.length; i++) {
            var propName = strokeProps[i];
            if (forceUpdate || style[propName] !== Path.DEFAULT_PATH_STYLE[propName]) {
                var val = style[propName] || Path.DEFAULT_PATH_STYLE[propName];
                val && updateAttr(svgStrokeProps[i], val);
            }
        }
    }
    else if (forceUpdate) {
        updateAttr('stroke', NONE);
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js + 1 modules
var dom = __webpack_require__(45446);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/core.js


var SVGNS = 'http://www.w3.org/2000/svg';
var XLINKNS = 'http://www.w3.org/1999/xlink';
var XMLNS = 'http://www.w3.org/2000/xmlns/';
var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
var META_DATA_PREFIX = 'ecmeta_';
function createElement(name) {
    return document.createElementNS(SVGNS, name);
}
;
function createVNode(tag, key, attrs, children, text) {
    return {
        tag: tag,
        attrs: attrs || {},
        children: children,
        text: text,
        key: key
    };
}
function createElementOpen(name, attrs) {
    var attrsStr = [];
    if (attrs) {
        for (var key in attrs) {
            var val = attrs[key];
            var part = key;
            if (val === false) {
                continue;
            }
            else if (val !== true && val != null) {
                part += "=\"" + val + "\"";
            }
            attrsStr.push(part);
        }
    }
    return "<" + name + " " + attrsStr.join(' ') + ">";
}
function createElementClose(name) {
    return "</" + name + ">";
}
function vNodeToString(el, opts) {
    opts = opts || {};
    var S = opts.newline ? '\n' : '';
    function convertElToString(el) {
        var children = el.children, tag = el.tag, attrs = el.attrs, text = el.text;
        return createElementOpen(tag, attrs)
            + (tag !== 'style' ? (0,dom.encodeHTML)(text) : text || '')
            + (children ? "" + S + (0,util.map)(children, function (child) { return convertElToString(child); }).join(S) + S : '')
            + createElementClose(tag);
    }
    return convertElToString(el);
}
function getCssString(selectorNodes, animationNodes, opts) {
    opts = opts || {};
    var S = opts.newline ? '\n' : '';
    var bracketBegin = " {" + S;
    var bracketEnd = S + "}";
    var selectors = (0,util.map)((0,util.keys)(selectorNodes), function (className) {
        return className + bracketBegin + (0,util.map)((0,util.keys)(selectorNodes[className]), function (attrName) {
            return attrName + ":" + selectorNodes[className][attrName] + ";";
        }).join(S) + bracketEnd;
    }).join(S);
    var animations = (0,util.map)((0,util.keys)(animationNodes), function (animationName) {
        return "@keyframes " + animationName + bracketBegin + (0,util.map)((0,util.keys)(animationNodes[animationName]), function (percent) {
            return percent + bracketBegin + (0,util.map)((0,util.keys)(animationNodes[animationName][percent]), function (attrName) {
                var val = animationNodes[animationName][percent][attrName];
                if (attrName === 'd') {
                    val = "path(\"" + val + "\")";
                }
                return attrName + ":" + val + ";";
            }).join(S) + bracketEnd;
        }).join(S) + bracketEnd;
    }).join(S);
    if (!selectors && !animations) {
        return '';
    }
    return ['<![CDATA[', selectors, animations, ']]>'].join(S);
}
function createBrushScope(zrId) {
    return {
        zrId: zrId,
        shadowCache: {},
        patternCache: {},
        gradientCache: {},
        clipPathCache: {},
        defs: {},
        cssNodes: {},
        cssAnims: {},
        cssStyleCache: {},
        cssAnimIdx: 0,
        shadowIdx: 0,
        gradientIdx: 0,
        patternIdx: 0,
        clipPathIdx: 0
    };
}
function createSVGVNode(width, height, children, useViewBox) {
    return createVNode('svg', 'root', {
        'width': width,
        'height': height,
        'xmlns': SVGNS,
        'xmlns:xlink': XLINKNS,
        'version': '1.1',
        'baseProfile': 'full',
        'viewBox': useViewBox ? "0 0 " + width + " " + height : false
    }, children);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/image.js
var helper_image = __webpack_require__(85027);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(30128);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(99585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/CompoundPath.js
var CompoundPath = __webpack_require__(93859);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/cubicEasing.js
var cubicEasing = __webpack_require__(11316);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/cssClassId.js
var cssClassIdx = 0;
function getClassId() {
    return cssClassIdx++;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/cssAnimation.js









var EASING_MAP = {
    cubicIn: '0.32,0,0.67,0',
    cubicOut: '0.33,1,0.68,1',
    cubicInOut: '0.65,0,0.35,1',
    quadraticIn: '0.11,0,0.5,0',
    quadraticOut: '0.5,1,0.89,1',
    quadraticInOut: '0.45,0,0.55,1',
    quarticIn: '0.5,0,0.75,0',
    quarticOut: '0.25,1,0.5,1',
    quarticInOut: '0.76,0,0.24,1',
    quinticIn: '0.64,0,0.78,0',
    quinticOut: '0.22,1,0.36,1',
    quinticInOut: '0.83,0,0.17,1',
    sinusoidalIn: '0.12,0,0.39,0',
    sinusoidalOut: '0.61,1,0.88,1',
    sinusoidalInOut: '0.37,0,0.63,1',
    exponentialIn: '0.7,0,0.84,0',
    exponentialOut: '0.16,1,0.3,1',
    exponentialInOut: '0.87,0,0.13,1',
    circularIn: '0.55,0,1,0.45',
    circularOut: '0,0.55,0.45,1',
    circularInOut: '0.85,0,0.15,1'
};
var transformOriginKey = 'transform-origin';
function buildPathString(el, kfShape, path) {
    var shape = (0,util.extend)({}, el.shape);
    (0,util.extend)(shape, kfShape);
    el.buildPath(path, shape);
    var svgPathBuilder = new svg_SVGPathRebuilder();
    svgPathBuilder.reset((0,helper.getPathPrecision)(el));
    path.rebuildPath(svgPathBuilder, 1);
    svgPathBuilder.generateStr();
    return svgPathBuilder.getStr();
}
function setTransformOrigin(target, transform) {
    var originX = transform.originX, originY = transform.originY;
    if (originX || originY) {
        target[transformOriginKey] = originX + "px " + originY + "px";
    }
}
var ANIMATE_STYLE_MAP = {
    fill: 'fill',
    opacity: 'opacity',
    lineWidth: 'stroke-width',
    lineDashOffset: 'stroke-dashoffset'
};
function addAnimation(cssAnim, scope) {
    var animationName = scope.zrId + '-ani-' + scope.cssAnimIdx++;
    scope.cssAnims[animationName] = cssAnim;
    return animationName;
}
function createCompoundPathCSSAnimation(el, attrs, scope) {
    var paths = el.shape.paths;
    var composedAnim = {};
    var cssAnimationCfg;
    var cssAnimationName;
    (0,util.each)(paths, function (path) {
        var subScope = createBrushScope(scope.zrId);
        subScope.animation = true;
        createCSSAnimation(path, {}, subScope, true);
        var cssAnims = subScope.cssAnims;
        var cssNodes = subScope.cssNodes;
        var animNames = (0,util.keys)(cssAnims);
        var len = animNames.length;
        if (!len) {
            return;
        }
        cssAnimationName = animNames[len - 1];
        var lastAnim = cssAnims[cssAnimationName];
        for (var percent in lastAnim) {
            var kf = lastAnim[percent];
            composedAnim[percent] = composedAnim[percent] || { d: '' };
            composedAnim[percent].d += kf.d || '';
        }
        for (var className in cssNodes) {
            var val = cssNodes[className].animation;
            if (val.indexOf(cssAnimationName) >= 0) {
                cssAnimationCfg = val;
            }
        }
    });
    if (!cssAnimationCfg) {
        return;
    }
    attrs.d = false;
    var animationName = addAnimation(composedAnim, scope);
    return cssAnimationCfg.replace(cssAnimationName, animationName);
}
function getEasingFunc(easing) {
    return (0,util.isString)(easing)
        ? EASING_MAP[easing]
            ? "cubic-bezier(" + EASING_MAP[easing] + ")"
            : (0,cubicEasing.createCubicEasingFunc)(easing) ? easing : ''
        : '';
}
function createCSSAnimation(el, attrs, scope, onlyShape) {
    var animators = el.animators;
    var len = animators.length;
    var cssAnimations = [];
    if (el instanceof CompoundPath["default"]) {
        var animationCfg = createCompoundPathCSSAnimation(el, attrs, scope);
        if (animationCfg) {
            cssAnimations.push(animationCfg);
        }
        else if (!len) {
            return;
        }
    }
    else if (!len) {
        return;
    }
    var groupAnimators = {};
    for (var i = 0; i < len; i++) {
        var animator = animators[i];
        var cfgArr = [animator.getMaxTime() / 1000 + 's'];
        var easing = getEasingFunc(animator.getClip().easing);
        var delay = animator.getDelay();
        if (easing) {
            cfgArr.push(easing);
        }
        else {
            cfgArr.push('linear');
        }
        if (delay) {
            cfgArr.push(delay / 1000 + 's');
        }
        if (animator.getLoop()) {
            cfgArr.push('infinite');
        }
        var cfg = cfgArr.join(' ');
        groupAnimators[cfg] = groupAnimators[cfg] || [cfg, []];
        groupAnimators[cfg][1].push(animator);
    }
    function createSingleCSSAnimation(groupAnimator) {
        var animators = groupAnimator[1];
        var len = animators.length;
        var transformKfs = {};
        var shapeKfs = {};
        var finalKfs = {};
        var animationTimingFunctionAttrName = 'animation-timing-function';
        function saveAnimatorTrackToCssKfs(animator, cssKfs, toCssAttrName) {
            var tracks = animator.getTracks();
            var maxTime = animator.getMaxTime();
            for (var k = 0; k < tracks.length; k++) {
                var track = tracks[k];
                if (track.needsAnimate()) {
                    var kfs = track.keyframes;
                    var attrName = track.propName;
                    toCssAttrName && (attrName = toCssAttrName(attrName));
                    if (attrName) {
                        for (var i = 0; i < kfs.length; i++) {
                            var kf = kfs[i];
                            var percent = Math.round(kf.time / maxTime * 100) + '%';
                            var kfEasing = getEasingFunc(kf.easing);
                            var rawValue = kf.rawValue;
                            if ((0,util.isString)(rawValue) || (0,util.isNumber)(rawValue)) {
                                cssKfs[percent] = cssKfs[percent] || {};
                                cssKfs[percent][attrName] = kf.rawValue;
                                if (kfEasing) {
                                    cssKfs[percent][animationTimingFunctionAttrName] = kfEasing;
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            var animator = animators[i];
            var targetProp = animator.targetName;
            if (!targetProp) {
                !onlyShape && saveAnimatorTrackToCssKfs(animator, transformKfs);
            }
            else if (targetProp === 'shape') {
                saveAnimatorTrackToCssKfs(animator, shapeKfs);
            }
        }
        for (var percent in transformKfs) {
            var transform = {};
            (0,Transformable.copyTransform)(transform, el);
            (0,util.extend)(transform, transformKfs[percent]);
            var str = (0,helper.getSRTTransformString)(transform);
            var timingFunction = transformKfs[percent][animationTimingFunctionAttrName];
            finalKfs[percent] = str ? {
                transform: str
            } : {};
            setTransformOrigin(finalKfs[percent], transform);
            if (timingFunction) {
                finalKfs[percent][animationTimingFunctionAttrName] = timingFunction;
            }
        }
        ;
        var path;
        var canAnimateShape = true;
        for (var percent in shapeKfs) {
            finalKfs[percent] = finalKfs[percent] || {};
            var isFirst = !path;
            var timingFunction = shapeKfs[percent][animationTimingFunctionAttrName];
            if (isFirst) {
                path = new PathProxy["default"]();
            }
            var len_1 = path.len();
            path.reset();
            finalKfs[percent].d = buildPathString(el, shapeKfs[percent], path);
            var newLen = path.len();
            if (!isFirst && len_1 !== newLen) {
                canAnimateShape = false;
                break;
            }
            if (timingFunction) {
                finalKfs[percent][animationTimingFunctionAttrName] = timingFunction;
            }
        }
        ;
        if (!canAnimateShape) {
            for (var percent in finalKfs) {
                delete finalKfs[percent].d;
            }
        }
        if (!onlyShape) {
            for (var i = 0; i < len; i++) {
                var animator = animators[i];
                var targetProp = animator.targetName;
                if (targetProp === 'style') {
                    saveAnimatorTrackToCssKfs(animator, finalKfs, function (propName) { return ANIMATE_STYLE_MAP[propName]; });
                }
            }
        }
        var percents = (0,util.keys)(finalKfs);
        var allTransformOriginSame = true;
        var transformOrigin;
        for (var i = 1; i < percents.length; i++) {
            var p0 = percents[i - 1];
            var p1 = percents[i];
            if (finalKfs[p0][transformOriginKey] !== finalKfs[p1][transformOriginKey]) {
                allTransformOriginSame = false;
                break;
            }
            transformOrigin = finalKfs[p0][transformOriginKey];
        }
        if (allTransformOriginSame && transformOrigin) {
            for (var percent in finalKfs) {
                if (finalKfs[percent][transformOriginKey]) {
                    delete finalKfs[percent][transformOriginKey];
                }
            }
            attrs[transformOriginKey] = transformOrigin;
        }
        if ((0,util.filter)(percents, function (percent) { return (0,util.keys)(finalKfs[percent]).length > 0; }).length) {
            var animationName = addAnimation(finalKfs, scope);
            return animationName + " " + groupAnimator[0] + " both";
        }
    }
    for (var key in groupAnimators) {
        var animationCfg = createSingleCSSAnimation(groupAnimators[key]);
        if (animationCfg) {
            cssAnimations.push(animationCfg);
        }
    }
    if (cssAnimations.length) {
        var className = scope.zrId + '-cls-' + getClassId();
        scope.cssNodes['.' + className] = {
            animation: cssAnimations.join(',')
        };
        attrs["class"] = className;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(62070);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(70145);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(59886);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/cssEmphasis.js


function createCSSEmphasis(el, attrs, scope) {
    if (!el.ignore) {
        if (el.isSilent()) {
            var style = {
                'pointer-events': 'none'
            };
            setClassAttribute(style, attrs, scope, true);
        }
        else {
            var emphasisStyle = el.states.emphasis && el.states.emphasis.style
                ? el.states.emphasis.style
                : {};
            var fill = emphasisStyle.fill;
            if (!fill) {
                var normalFill = el.style && el.style.fill;
                var selectFill = el.states.select
                    && el.states.select.style
                    && el.states.select.style.fill;
                var fromFill = el.currentStates.indexOf('select') >= 0
                    ? (selectFill || normalFill)
                    : normalFill;
                if (fromFill) {
                    fill = (0,tool_color.liftColor)(fromFill);
                }
            }
            var lineWidth = emphasisStyle.lineWidth;
            if (lineWidth) {
                var scaleX = (!emphasisStyle.strokeNoScale && el.transform)
                    ? el.transform[0]
                    : 1;
                lineWidth = lineWidth / scaleX;
            }
            var style = {
                cursor: 'pointer'
            };
            if (fill) {
                style.fill = fill;
            }
            if (emphasisStyle.stroke) {
                style.stroke = emphasisStyle.stroke;
            }
            if (lineWidth) {
                style['stroke-width'] = lineWidth;
            }
            setClassAttribute(style, attrs, scope, true);
        }
    }
}
function setClassAttribute(style, attrs, scope, withHover) {
    var styleKey = JSON.stringify(style);
    var className = scope.cssStyleCache[styleKey];
    if (!className) {
        className = scope.zrId + '-cls-' + getClassId();
        scope.cssStyleCache[styleKey] = className;
        scope.cssNodes['.' + className + (withHover ? ':hover' : '')] = style;
    }
    attrs["class"] = attrs["class"] ? (attrs["class"] + ' ' + className) : className;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js + 1 modules
var zrender = __webpack_require__(80151);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/graphic.js















var round = Math.round;
function isImageLike(val) {
    return val && (0,util.isString)(val.src);
}
function isCanvasLike(val) {
    return val && (0,util.isFunction)(val.toDataURL);
}
function setStyleAttrs(attrs, style, el, scope) {
    mapStyleToAttrs(function (key, val) {
        var isFillStroke = key === 'fill' || key === 'stroke';
        if (isFillStroke && (0,helper.isGradient)(val)) {
            setGradient(style, attrs, key, scope);
        }
        else if (isFillStroke && (0,helper.isPattern)(val)) {
            setPattern(el, attrs, key, scope);
        }
        else {
            attrs[key] = val;
        }
        if (isFillStroke && scope.ssr && val === 'none') {
            attrs['pointer-events'] = 'visible';
        }
    }, style, el, false);
    setShadow(el, attrs, scope);
}
function setMetaData(attrs, el) {
    var metaData = (0,zrender.getElementSSRData)(el);
    if (metaData) {
        metaData.each(function (val, key) {
            val != null && (attrs[(META_DATA_PREFIX + key).toLowerCase()] = val + '');
        });
        if (el.isSilent()) {
            attrs[META_DATA_PREFIX + 'silent'] = 'true';
        }
    }
}
function noRotateScale(m) {
    return (0,helper.isAroundZero)(m[0] - 1)
        && (0,helper.isAroundZero)(m[1])
        && (0,helper.isAroundZero)(m[2])
        && (0,helper.isAroundZero)(m[3] - 1);
}
function noTranslate(m) {
    return (0,helper.isAroundZero)(m[4]) && (0,helper.isAroundZero)(m[5]);
}
function setTransform(attrs, m, compress) {
    if (m && !(noTranslate(m) && noRotateScale(m))) {
        var mul = compress ? 10 : 1e4;
        attrs.transform = noRotateScale(m)
            ? "translate(" + round(m[4] * mul) / mul + " " + round(m[5] * mul) / mul + ")" : (0,helper.getMatrixStr)(m);
    }
}
function convertPolyShape(shape, attrs, mul) {
    var points = shape.points;
    var strArr = [];
    for (var i = 0; i < points.length; i++) {
        strArr.push(round(points[i][0] * mul) / mul);
        strArr.push(round(points[i][1] * mul) / mul);
    }
    attrs.points = strArr.join(' ');
}
function validatePolyShape(shape) {
    return !shape.smooth;
}
function createAttrsConvert(desc) {
    var normalizedDesc = (0,util.map)(desc, function (item) {
        return (typeof item === 'string' ? [item, item] : item);
    });
    return function (shape, attrs, mul) {
        for (var i = 0; i < normalizedDesc.length; i++) {
            var item = normalizedDesc[i];
            var val = shape[item[0]];
            if (val != null) {
                attrs[item[1]] = round(val * mul) / mul;
            }
        }
    };
}
var builtinShapesDef = {
    circle: [createAttrsConvert(['cx', 'cy', 'r'])],
    polyline: [convertPolyShape, validatePolyShape],
    polygon: [convertPolyShape, validatePolyShape]
};
function hasShapeAnimation(el) {
    var animators = el.animators;
    for (var i = 0; i < animators.length; i++) {
        if (animators[i].targetName === 'shape') {
            return true;
        }
    }
    return false;
}
function brushSVGPath(el, scope) {
    var style = el.style;
    var shape = el.shape;
    var builtinShpDef = builtinShapesDef[el.type];
    var attrs = {};
    var needsAnimate = scope.animation;
    var svgElType = 'path';
    var strokePercent = el.style.strokePercent;
    var precision = (scope.compress && (0,helper.getPathPrecision)(el)) || 4;
    if (builtinShpDef
        && !scope.willUpdate
        && !(builtinShpDef[1] && !builtinShpDef[1](shape))
        && !(needsAnimate && hasShapeAnimation(el))
        && !(strokePercent < 1)) {
        svgElType = el.type;
        var mul = Math.pow(10, precision);
        builtinShpDef[0](shape, attrs, mul);
    }
    else {
        var needBuildPath = !el.path || el.shapeChanged();
        if (!el.path) {
            el.createPathProxy();
        }
        var path = el.path;
        if (needBuildPath) {
            path.beginPath();
            el.buildPath(path, el.shape);
            el.pathUpdated();
        }
        var pathVersion = path.getVersion();
        var elExt = el;
        var svgPathBuilder = elExt.__svgPathBuilder;
        if (elExt.__svgPathVersion !== pathVersion
            || !svgPathBuilder
            || strokePercent !== elExt.__svgPathStrokePercent) {
            if (!svgPathBuilder) {
                svgPathBuilder = elExt.__svgPathBuilder = new svg_SVGPathRebuilder();
            }
            svgPathBuilder.reset(precision);
            path.rebuildPath(svgPathBuilder, strokePercent);
            svgPathBuilder.generateStr();
            elExt.__svgPathVersion = pathVersion;
            elExt.__svgPathStrokePercent = strokePercent;
        }
        attrs.d = svgPathBuilder.getStr();
    }
    setTransform(attrs, el.transform);
    setStyleAttrs(attrs, style, el, scope);
    setMetaData(attrs, el);
    scope.animation && createCSSAnimation(el, attrs, scope);
    scope.emphasis && createCSSEmphasis(el, attrs, scope);
    return createVNode(svgElType, el.id + '', attrs);
}
function brushSVGImage(el, scope) {
    var style = el.style;
    var image = style.image;
    if (image && !(0,util.isString)(image)) {
        if (isImageLike(image)) {
            image = image.src;
        }
        else if (isCanvasLike(image)) {
            image = image.toDataURL();
        }
    }
    if (!image) {
        return;
    }
    var x = style.x || 0;
    var y = style.y || 0;
    var dw = style.width;
    var dh = style.height;
    var attrs = {
        href: image,
        width: dw,
        height: dh
    };
    if (x) {
        attrs.x = x;
    }
    if (y) {
        attrs.y = y;
    }
    setTransform(attrs, el.transform);
    setStyleAttrs(attrs, style, el, scope);
    setMetaData(attrs, el);
    scope.animation && createCSSAnimation(el, attrs, scope);
    return createVNode('image', el.id + '', attrs);
}
;
function brushSVGTSpan(el, scope) {
    var style = el.style;
    var text = style.text;
    text != null && (text += '');
    if (!text || isNaN(style.x) || isNaN(style.y)) {
        return;
    }
    var font = style.font || platform.DEFAULT_FONT;
    var x = style.x || 0;
    var y = (0,helper.adjustTextY)(style.y || 0, (0,contain_text.getLineHeight)(font), style.textBaseline);
    var textAlign = helper.TEXT_ALIGN_TO_ANCHOR[style.textAlign]
        || style.textAlign;
    var attrs = {
        'dominant-baseline': 'central',
        'text-anchor': textAlign
    };
    if ((0,Text.hasSeparateFont)(style)) {
        var separatedFontStr = '';
        var fontStyle = style.fontStyle;
        var fontSize = (0,Text.parseFontSize)(style.fontSize);
        if (!parseFloat(fontSize)) {
            return;
        }
        var fontFamily = style.fontFamily || platform.DEFAULT_FONT_FAMILY;
        var fontWeight = style.fontWeight;
        separatedFontStr += "font-size:" + fontSize + ";font-family:" + fontFamily + ";";
        if (fontStyle && fontStyle !== 'normal') {
            separatedFontStr += "font-style:" + fontStyle + ";";
        }
        if (fontWeight && fontWeight !== 'normal') {
            separatedFontStr += "font-weight:" + fontWeight + ";";
        }
        attrs.style = separatedFontStr;
    }
    else {
        attrs.style = "font: " + font;
    }
    if (text.match(/\s/)) {
        attrs['xml:space'] = 'preserve';
    }
    if (x) {
        attrs.x = x;
    }
    if (y) {
        attrs.y = y;
    }
    setTransform(attrs, el.transform);
    setStyleAttrs(attrs, style, el, scope);
    setMetaData(attrs, el);
    scope.animation && createCSSAnimation(el, attrs, scope);
    return createVNode('text', el.id + '', attrs, undefined, text);
}
function brush(el, scope) {
    if (el instanceof Path["default"]) {
        return brushSVGPath(el, scope);
    }
    else if (el instanceof graphic_Image["default"]) {
        return brushSVGImage(el, scope);
    }
    else if (el instanceof TSpan["default"]) {
        return brushSVGTSpan(el, scope);
    }
}
function setShadow(el, attrs, scope) {
    var style = el.style;
    if ((0,helper.hasShadow)(style)) {
        var shadowKey = (0,helper.getShadowKey)(el);
        var shadowCache = scope.shadowCache;
        var shadowId = shadowCache[shadowKey];
        if (!shadowId) {
            var globalScale = el.getGlobalScale();
            var scaleX = globalScale[0];
            var scaleY = globalScale[1];
            if (!scaleX || !scaleY) {
                return;
            }
            var offsetX = style.shadowOffsetX || 0;
            var offsetY = style.shadowOffsetY || 0;
            var blur_1 = style.shadowBlur;
            var _a = (0,helper.normalizeColor)(style.shadowColor), opacity = _a.opacity, color = _a.color;
            var stdDx = blur_1 / 2 / scaleX;
            var stdDy = blur_1 / 2 / scaleY;
            var stdDeviation = stdDx + ' ' + stdDy;
            shadowId = scope.zrId + '-s' + scope.shadowIdx++;
            scope.defs[shadowId] = createVNode('filter', shadowId, {
                'id': shadowId,
                'x': '-100%',
                'y': '-100%',
                'width': '300%',
                'height': '300%'
            }, [
                createVNode('feDropShadow', '', {
                    'dx': offsetX / scaleX,
                    'dy': offsetY / scaleY,
                    'stdDeviation': stdDeviation,
                    'flood-color': color,
                    'flood-opacity': opacity
                })
            ]);
            shadowCache[shadowKey] = shadowId;
        }
        attrs.filter = (0,helper.getIdURL)(shadowId);
    }
}
function setGradient(style, attrs, target, scope) {
    var val = style[target];
    var gradientTag;
    var gradientAttrs = {
        'gradientUnits': val.global
            ? 'userSpaceOnUse'
            : 'objectBoundingBox'
    };
    if ((0,helper.isLinearGradient)(val)) {
        gradientTag = 'linearGradient';
        gradientAttrs.x1 = val.x;
        gradientAttrs.y1 = val.y;
        gradientAttrs.x2 = val.x2;
        gradientAttrs.y2 = val.y2;
    }
    else if ((0,helper.isRadialGradient)(val)) {
        gradientTag = 'radialGradient';
        gradientAttrs.cx = (0,util.retrieve2)(val.x, 0.5);
        gradientAttrs.cy = (0,util.retrieve2)(val.y, 0.5);
        gradientAttrs.r = (0,util.retrieve2)(val.r, 0.5);
    }
    else {
        if (false) {}
        return;
    }
    var colors = val.colorStops;
    var colorStops = [];
    for (var i = 0, len = colors.length; i < len; ++i) {
        var offset = (0,helper.round4)(colors[i].offset) * 100 + '%';
        var stopColor = colors[i].color;
        var _a = (0,helper.normalizeColor)(stopColor), color = _a.color, opacity = _a.opacity;
        var stopsAttrs = {
            'offset': offset
        };
        stopsAttrs['stop-color'] = color;
        if (opacity < 1) {
            stopsAttrs['stop-opacity'] = opacity;
        }
        colorStops.push(createVNode('stop', i + '', stopsAttrs));
    }
    var gradientVNode = createVNode(gradientTag, '', gradientAttrs, colorStops);
    var gradientKey = vNodeToString(gradientVNode);
    var gradientCache = scope.gradientCache;
    var gradientId = gradientCache[gradientKey];
    if (!gradientId) {
        gradientId = scope.zrId + '-g' + scope.gradientIdx++;
        gradientCache[gradientKey] = gradientId;
        gradientAttrs.id = gradientId;
        scope.defs[gradientId] = createVNode(gradientTag, gradientId, gradientAttrs, colorStops);
    }
    attrs[target] = (0,helper.getIdURL)(gradientId);
}
function setPattern(el, attrs, target, scope) {
    var val = el.style[target];
    var boundingRect = el.getBoundingRect();
    var patternAttrs = {};
    var repeat = val.repeat;
    var noRepeat = repeat === 'no-repeat';
    var repeatX = repeat === 'repeat-x';
    var repeatY = repeat === 'repeat-y';
    var child;
    if ((0,helper.isImagePattern)(val)) {
        var imageWidth_1 = val.imageWidth;
        var imageHeight_1 = val.imageHeight;
        var imageSrc = void 0;
        var patternImage = val.image;
        if ((0,util.isString)(patternImage)) {
            imageSrc = patternImage;
        }
        else if (isImageLike(patternImage)) {
            imageSrc = patternImage.src;
        }
        else if (isCanvasLike(patternImage)) {
            imageSrc = patternImage.toDataURL();
        }
        if (typeof Image === 'undefined') {
            var errMsg = 'Image width/height must been given explictly in svg-ssr renderer.';
            (0,util.assert)(imageWidth_1, errMsg);
            (0,util.assert)(imageHeight_1, errMsg);
        }
        else if (imageWidth_1 == null || imageHeight_1 == null) {
            var setSizeToVNode_1 = function (vNode, img) {
                if (vNode) {
                    var svgEl = vNode.elm;
                    var width = imageWidth_1 || img.width;
                    var height = imageHeight_1 || img.height;
                    if (vNode.tag === 'pattern') {
                        if (repeatX) {
                            height = 1;
                            width /= boundingRect.width;
                        }
                        else if (repeatY) {
                            width = 1;
                            height /= boundingRect.height;
                        }
                    }
                    vNode.attrs.width = width;
                    vNode.attrs.height = height;
                    if (svgEl) {
                        svgEl.setAttribute('width', width);
                        svgEl.setAttribute('height', height);
                    }
                }
            };
            var createdImage = (0,helper_image.createOrUpdateImage)(imageSrc, null, el, function (img) {
                noRepeat || setSizeToVNode_1(patternVNode, img);
                setSizeToVNode_1(child, img);
            });
            if (createdImage && createdImage.width && createdImage.height) {
                imageWidth_1 = imageWidth_1 || createdImage.width;
                imageHeight_1 = imageHeight_1 || createdImage.height;
            }
        }
        child = createVNode('image', 'img', {
            href: imageSrc,
            width: imageWidth_1,
            height: imageHeight_1
        });
        patternAttrs.width = imageWidth_1;
        patternAttrs.height = imageHeight_1;
    }
    else if (val.svgElement) {
        child = (0,util.clone)(val.svgElement);
        patternAttrs.width = val.svgWidth;
        patternAttrs.height = val.svgHeight;
    }
    if (!child) {
        return;
    }
    var patternWidth;
    var patternHeight;
    if (noRepeat) {
        patternWidth = patternHeight = 1;
    }
    else if (repeatX) {
        patternHeight = 1;
        patternWidth = patternAttrs.width / boundingRect.width;
    }
    else if (repeatY) {
        patternWidth = 1;
        patternHeight = patternAttrs.height / boundingRect.height;
    }
    else {
        patternAttrs.patternUnits = 'userSpaceOnUse';
    }
    if (patternWidth != null && !isNaN(patternWidth)) {
        patternAttrs.width = patternWidth;
    }
    if (patternHeight != null && !isNaN(patternHeight)) {
        patternAttrs.height = patternHeight;
    }
    var patternTransform = (0,helper.getSRTTransformString)(val);
    patternTransform && (patternAttrs.patternTransform = patternTransform);
    var patternVNode = createVNode('pattern', '', patternAttrs, [child]);
    var patternKey = vNodeToString(patternVNode);
    var patternCache = scope.patternCache;
    var patternId = patternCache[patternKey];
    if (!patternId) {
        patternId = scope.zrId + '-p' + scope.patternIdx++;
        patternCache[patternKey] = patternId;
        patternAttrs.id = patternId;
        patternVNode = scope.defs[patternId] = createVNode('pattern', patternId, patternAttrs, [child]);
    }
    attrs[target] = (0,helper.getIdURL)(patternId);
}
function setClipPath(clipPath, attrs, scope) {
    var clipPathCache = scope.clipPathCache, defs = scope.defs;
    var clipPathId = clipPathCache[clipPath.id];
    if (!clipPathId) {
        clipPathId = scope.zrId + '-c' + scope.clipPathIdx++;
        var clipPathAttrs = {
            id: clipPathId
        };
        clipPathCache[clipPath.id] = clipPathId;
        defs[clipPathId] = createVNode('clipPath', clipPathId, clipPathAttrs, [brushSVGPath(clipPath, scope)]);
    }
    attrs['clip-path'] = (0,helper.getIdURL)(clipPathId);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/domapi.js
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function domapi_parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/patch.js



var colonChar = 58;
var xChar = 120;
var emptyNode = createVNode('', '');
function isUndef(s) {
    return s === undefined;
}
function isDef(s) {
    return s !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var map = {};
    for (var i = beginIdx; i <= endIdx; ++i) {
        var key = children[i].key;
        if (key !== undefined) {
            if (false) {}
            map[key] = i;
        }
    }
    return map;
}
function sameVnode(vnode1, vnode2) {
    var isSameKey = vnode1.key === vnode2.key;
    var isSameTag = vnode1.tag === vnode2.tag;
    return isSameTag && isSameKey;
}
function createElm(vnode) {
    var i;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
        var elm = (vnode.elm = createElement(tag));
        updateAttrs(emptyNode, vnode);
        if ((0,util.isArray)(children)) {
            for (i = 0; i < children.length; ++i) {
                var ch = children[i];
                if (ch != null) {
                    appendChild(elm, createElm(ch));
                }
            }
        }
        else if (isDef(vnode.text) && !(0,util.isObject)(vnode.text)) {
            appendChild(elm, createTextNode(vnode.text));
        }
    }
    else {
        vnode.elm = createTextNode(vnode.text);
    }
    return vnode.elm;
}
function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (ch != null) {
            insertBefore(parentElm, createElm(ch), before);
        }
    }
}
function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (ch != null) {
            if (isDef(ch.tag)) {
                var parent_1 = domapi_parentNode(ch.elm);
                removeChild(parent_1, ch.elm);
            }
            else {
                removeChild(parentElm, ch.elm);
            }
        }
    }
}
function updateAttrs(oldVnode, vnode) {
    var key;
    var elm = vnode.elm;
    var oldAttrs = oldVnode && oldVnode.attrs || {};
    var attrs = vnode.attrs || {};
    if (oldAttrs === attrs) {
        return;
    }
    for (key in attrs) {
        var cur = attrs[key];
        var old = oldAttrs[key];
        if (old !== cur) {
            if (cur === true) {
                elm.setAttribute(key, '');
            }
            else if (cur === false) {
                elm.removeAttribute(key);
            }
            else {
                if (key === 'style') {
                    elm.style.cssText = cur;
                }
                else if (key.charCodeAt(0) !== xChar) {
                    elm.setAttribute(key, cur);
                }
                else if (key === 'xmlns:xlink' || key === 'xmlns') {
                    elm.setAttributeNS(XMLNS, key, cur);
                }
                else if (key.charCodeAt(3) === colonChar) {
                    elm.setAttributeNS(XML_NAMESPACE, key, cur);
                }
                else if (key.charCodeAt(5) === colonChar) {
                    elm.setAttributeNS(XLINKNS, key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
function updateChildren(parentElm, oldCh, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx;
    var idxInOld;
    var elmToMove;
    var before;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (sameVnode(oldStartVnode, newEndVnode)) {
            patchVnode(oldStartVnode, newEndVnode);
            insertBefore(parentElm, oldStartVnode.elm, nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (sameVnode(oldEndVnode, newStartVnode)) {
            patchVnode(oldEndVnode, newStartVnode);
            insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            if (isUndef(oldKeyToIdx)) {
                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
            }
            idxInOld = oldKeyToIdx[newStartVnode.key];
            if (isUndef(idxInOld)) {
                insertBefore(parentElm, createElm(newStartVnode), oldStartVnode.elm);
            }
            else {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.tag !== newStartVnode.tag) {
                    insertBefore(parentElm, createElm(newStartVnode), oldStartVnode.elm);
                }
                else {
                    patchVnode(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                }
            }
            newStartVnode = newCh[++newStartIdx];
        }
    }
    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
        if (oldStartIdx > oldEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
        }
        else {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
}
function patchVnode(oldVnode, vnode) {
    var elm = (vnode.elm = oldVnode.elm);
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (oldVnode === vnode) {
        return;
    }
    updateAttrs(oldVnode, vnode);
    if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) {
                updateChildren(elm, oldCh, ch);
            }
        }
        else if (isDef(ch)) {
            if (isDef(oldVnode.text)) {
                setTextContent(elm, '');
            }
            addVnodes(elm, null, ch, 0, ch.length - 1);
        }
        else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        }
        else if (isDef(oldVnode.text)) {
            setTextContent(elm, '');
        }
    }
    else if (oldVnode.text !== vnode.text) {
        if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        }
        setTextContent(elm, vnode.text);
    }
}
function patch(oldVnode, vnode) {
    if (sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode);
    }
    else {
        var elm = oldVnode.elm;
        var parent_2 = domapi_parentNode(elm);
        createElm(vnode);
        if (parent_2 !== null) {
            insertBefore(parent_2, vnode.elm, nextSibling(elm));
            removeVnodes(parent_2, [oldVnode], 0, 0);
        }
    }
    return vnode;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/helper.js
var canvas_helper = __webpack_require__(69291);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/Painter.js






var svgId = 0;
var Painter_SVGPainter = (function () {
    function SVGPainter(root, storage, opts) {
        this.type = 'svg';
        this.refreshHover = createMethodNotSupport('refreshHover');
        this.configLayer = createMethodNotSupport('configLayer');
        this.storage = storage;
        this._opts = opts = (0,util.extend)({}, opts);
        this.root = root;
        this._id = 'zr' + svgId++;
        this._oldVNode = createSVGVNode(opts.width, opts.height);
        if (root && !opts.ssr) {
            var viewport = this._viewport = document.createElement('div');
            viewport.style.cssText = 'position:relative;overflow:hidden';
            var svgDom = this._svgDom = this._oldVNode.elm = createElement('svg');
            updateAttrs(null, this._oldVNode);
            viewport.appendChild(svgDom);
            root.appendChild(viewport);
        }
        this.resize(opts.width, opts.height);
    }
    SVGPainter.prototype.getType = function () {
        return this.type;
    };
    SVGPainter.prototype.getViewportRoot = function () {
        return this._viewport;
    };
    SVGPainter.prototype.getViewportRootOffset = function () {
        var viewportRoot = this.getViewportRoot();
        if (viewportRoot) {
            return {
                offsetLeft: viewportRoot.offsetLeft || 0,
                offsetTop: viewportRoot.offsetTop || 0
            };
        }
    };
    SVGPainter.prototype.getSvgDom = function () {
        return this._svgDom;
    };
    SVGPainter.prototype.refresh = function () {
        if (this.root) {
            var vnode = this.renderToVNode({
                willUpdate: true
            });
            vnode.attrs.style = 'position:absolute;left:0;top:0;user-select:none';
            patch(this._oldVNode, vnode);
            this._oldVNode = vnode;
        }
    };
    SVGPainter.prototype.renderOneToVNode = function (el) {
        return brush(el, createBrushScope(this._id));
    };
    SVGPainter.prototype.renderToVNode = function (opts) {
        opts = opts || {};
        var list = this.storage.getDisplayList(true);
        var width = this._width;
        var height = this._height;
        var scope = createBrushScope(this._id);
        scope.animation = opts.animation;
        scope.willUpdate = opts.willUpdate;
        scope.compress = opts.compress;
        scope.emphasis = opts.emphasis;
        scope.ssr = this._opts.ssr;
        var children = [];
        var bgVNode = this._bgVNode = createBackgroundVNode(width, height, this._backgroundColor, scope);
        bgVNode && children.push(bgVNode);
        var mainVNode = !opts.compress
            ? (this._mainVNode = createVNode('g', 'main', {}, [])) : null;
        this._paintList(list, scope, mainVNode ? mainVNode.children : children);
        mainVNode && children.push(mainVNode);
        var defs = (0,util.map)((0,util.keys)(scope.defs), function (id) { return scope.defs[id]; });
        if (defs.length) {
            children.push(createVNode('defs', 'defs', {}, defs));
        }
        if (opts.animation) {
            var animationCssStr = getCssString(scope.cssNodes, scope.cssAnims, { newline: true });
            if (animationCssStr) {
                var styleNode = createVNode('style', 'stl', {}, [], animationCssStr);
                children.push(styleNode);
            }
        }
        return createSVGVNode(width, height, children, opts.useViewBox);
    };
    SVGPainter.prototype.renderToString = function (opts) {
        opts = opts || {};
        return vNodeToString(this.renderToVNode({
            animation: (0,util.retrieve2)(opts.cssAnimation, true),
            emphasis: (0,util.retrieve2)(opts.cssEmphasis, true),
            willUpdate: false,
            compress: true,
            useViewBox: (0,util.retrieve2)(opts.useViewBox, true)
        }), { newline: true });
    };
    SVGPainter.prototype.setBackgroundColor = function (backgroundColor) {
        this._backgroundColor = backgroundColor;
    };
    SVGPainter.prototype.getSvgRoot = function () {
        return this._mainVNode && this._mainVNode.elm;
    };
    SVGPainter.prototype._paintList = function (list, scope, out) {
        var listLen = list.length;
        var clipPathsGroupsStack = [];
        var clipPathsGroupsStackDepth = 0;
        var currentClipPathGroup;
        var prevClipPaths;
        var clipGroupNodeIdx = 0;
        for (var i = 0; i < listLen; i++) {
            var displayable = list[i];
            if (!displayable.invisible) {
                var clipPaths = displayable.__clipPaths;
                var len = clipPaths && clipPaths.length || 0;
                var prevLen = prevClipPaths && prevClipPaths.length || 0;
                var lca = void 0;
                for (lca = Math.max(len - 1, prevLen - 1); lca >= 0; lca--) {
                    if (clipPaths && prevClipPaths
                        && clipPaths[lca] === prevClipPaths[lca]) {
                        break;
                    }
                }
                for (var i_1 = prevLen - 1; i_1 > lca; i_1--) {
                    clipPathsGroupsStackDepth--;
                    currentClipPathGroup = clipPathsGroupsStack[clipPathsGroupsStackDepth - 1];
                }
                for (var i_2 = lca + 1; i_2 < len; i_2++) {
                    var groupAttrs = {};
                    setClipPath(clipPaths[i_2], groupAttrs, scope);
                    var g = createVNode('g', 'clip-g-' + clipGroupNodeIdx++, groupAttrs, []);
                    (currentClipPathGroup ? currentClipPathGroup.children : out).push(g);
                    clipPathsGroupsStack[clipPathsGroupsStackDepth++] = g;
                    currentClipPathGroup = g;
                }
                prevClipPaths = clipPaths;
                var ret = brush(displayable, scope);
                if (ret) {
                    (currentClipPathGroup ? currentClipPathGroup.children : out).push(ret);
                }
            }
        }
    };
    SVGPainter.prototype.resize = function (width, height) {
        var opts = this._opts;
        var root = this.root;
        var viewport = this._viewport;
        width != null && (opts.width = width);
        height != null && (opts.height = height);
        if (root && viewport) {
            viewport.style.display = 'none';
            width = (0,canvas_helper.getSize)(root, 0, opts);
            height = (0,canvas_helper.getSize)(root, 1, opts);
            viewport.style.display = '';
        }
        if (this._width !== width || this._height !== height) {
            this._width = width;
            this._height = height;
            if (viewport) {
                var viewportStyle = viewport.style;
                viewportStyle.width = width + 'px';
                viewportStyle.height = height + 'px';
            }
            if (!(0,helper.isPattern)(this._backgroundColor)) {
                var svgDom = this._svgDom;
                if (svgDom) {
                    svgDom.setAttribute('width', width);
                    svgDom.setAttribute('height', height);
                }
                var bgEl = this._bgVNode && this._bgVNode.elm;
                if (bgEl) {
                    bgEl.setAttribute('width', width);
                    bgEl.setAttribute('height', height);
                }
            }
            else {
                this.refresh();
            }
        }
    };
    SVGPainter.prototype.getWidth = function () {
        return this._width;
    };
    SVGPainter.prototype.getHeight = function () {
        return this._height;
    };
    SVGPainter.prototype.dispose = function () {
        if (this.root) {
            this.root.innerHTML = '';
        }
        this._svgDom =
            this._viewport =
                this.storage =
                    this._oldVNode =
                        this._bgVNode =
                            this._mainVNode = null;
    };
    SVGPainter.prototype.clear = function () {
        if (this._svgDom) {
            this._svgDom.innerHTML = null;
        }
        this._oldVNode = null;
    };
    SVGPainter.prototype.toDataURL = function (base64) {
        var str = this.renderToString();
        var prefix = 'data:image/svg+xml;';
        if (base64) {
            str = (0,helper.encodeBase64)(str);
            return str && prefix + 'base64,' + str;
        }
        return prefix + 'charset=UTF-8,' + encodeURIComponent(str);
    };
    return SVGPainter;
}());
function createMethodNotSupport(method) {
    return function () {
        if (false) {}
    };
}
function createBackgroundVNode(width, height, backgroundColor, scope) {
    var bgVNode;
    if (backgroundColor && backgroundColor !== 'none') {
        bgVNode = createVNode('rect', 'bg', {
            width: width,
            height: height,
            x: '0',
            y: '0'
        });
        if ((0,helper.isGradient)(backgroundColor)) {
            setGradient({ fill: backgroundColor }, bgVNode.attrs, 'fill', scope);
        }
        else if ((0,helper.isPattern)(backgroundColor)) {
            setPattern({
                style: {
                    fill: backgroundColor
                },
                dirty: util.noop,
                getBoundingRect: function () { return ({ width: width, height: height }); }
            }, bgVNode.attrs, 'fill', scope);
        }
        else {
            var _a = (0,helper.normalizeColor)(backgroundColor), color = _a.color, opacity = _a.opacity;
            bgVNode.attrs.fill = color;
            opacity < 1 && (bgVNode.attrs['fill-opacity'] = opacity);
        }
    }
    return bgVNode;
}
/* export default */ var Painter = (Painter_SVGPainter);


}),
25483: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TEXT_ALIGN_TO_ANCHOR: function() { return TEXT_ALIGN_TO_ANCHOR; },
  adjustTextY: function() { return adjustTextY; },
  encodeBase64: function() { return encodeBase64; },
  getClipPathsKey: function() { return getClipPathsKey; },
  getIdURL: function() { return getIdURL; },
  getMatrixStr: function() { return getMatrixStr; },
  getPathPrecision: function() { return getPathPrecision; },
  getSRTTransformString: function() { return getSRTTransformString; },
  getShadowKey: function() { return getShadowKey; },
  hasShadow: function() { return hasShadow; },
  isAroundZero: function() { return isAroundZero; },
  isGradient: function() { return isGradient; },
  isImagePattern: function() { return isImagePattern; },
  isLinearGradient: function() { return isLinearGradient; },
  isPattern: function() { return isPattern; },
  isRadialGradient: function() { return isRadialGradient; },
  isSVGPattern: function() { return isSVGPattern; },
  normalizeColor: function() { return normalizeColor; },
  round1: function() { return round1; },
  round3: function() { return round3; },
  round4: function() { return round4; }
});
/* import */ var _core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _tool_color_js__rspack_import_0 = __webpack_require__(59886);
/* import */ var _core_env_js__rspack_import_2 = __webpack_require__(18311);



var mathRound = Math.round;
function normalizeColor(color) {
    var opacity;
    if (!color || color === 'transparent') {
        color = 'none';
    }
    else if (typeof color === 'string' && color.indexOf('rgba') > -1) {
        var arr = (0,_tool_color_js__rspack_import_0.parse)(color);
        if (arr) {
            color = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
            opacity = arr[3];
        }
    }
    return {
        color: color,
        opacity: opacity == null ? 1 : opacity
    };
}
var EPSILON = 1e-4;
function isAroundZero(transform) {
    return transform < EPSILON && transform > -EPSILON;
}
function round3(transform) {
    return mathRound(transform * 1e3) / 1e3;
}
function round4(transform) {
    return mathRound(transform * 1e4) / 1e4;
}
function round1(transform) {
    return mathRound(transform * 10) / 10;
}
function getMatrixStr(m) {
    return 'matrix('
        + round3(m[0]) + ','
        + round3(m[1]) + ','
        + round3(m[2]) + ','
        + round3(m[3]) + ','
        + round4(m[4]) + ','
        + round4(m[5])
        + ')';
}
var TEXT_ALIGN_TO_ANCHOR = {
    left: 'start',
    right: 'end',
    center: 'middle',
    middle: 'middle'
};
function adjustTextY(y, lineHeight, textBaseline) {
    if (textBaseline === 'top') {
        y += lineHeight / 2;
    }
    else if (textBaseline === 'bottom') {
        y -= lineHeight / 2;
    }
    return y;
}
function hasShadow(style) {
    return style
        && (style.shadowBlur || style.shadowOffsetX || style.shadowOffsetY);
}
function getShadowKey(displayable) {
    var style = displayable.style;
    var globalScale = displayable.getGlobalScale();
    return [
        style.shadowColor,
        (style.shadowBlur || 0).toFixed(2),
        (style.shadowOffsetX || 0).toFixed(2),
        (style.shadowOffsetY || 0).toFixed(2),
        globalScale[0],
        globalScale[1]
    ].join(',');
}
function getClipPathsKey(clipPaths) {
    var key = [];
    if (clipPaths) {
        for (var i = 0; i < clipPaths.length; i++) {
            var clipPath = clipPaths[i];
            key.push(clipPath.id);
        }
    }
    return key.join(',');
}
function isImagePattern(val) {
    return val && (!!val.image);
}
function isSVGPattern(val) {
    return val && (!!val.svgElement);
}
function isPattern(val) {
    return isImagePattern(val) || isSVGPattern(val);
}
function isLinearGradient(val) {
    return val.type === 'linear';
}
function isRadialGradient(val) {
    return val.type === 'radial';
}
function isGradient(val) {
    return val && (val.type === 'linear'
        || val.type === 'radial');
}
function getIdURL(id) {
    return "url(#" + id + ")";
}
function getPathPrecision(el) {
    var scale = el.getGlobalScale();
    var size = Math.max(scale[0], scale[1]);
    return Math.max(Math.ceil(Math.log(size) / Math.log(10)), 1);
}
function getSRTTransformString(transform) {
    var x = transform.x || 0;
    var y = transform.y || 0;
    var rotation = (transform.rotation || 0) * _core_util_js__rspack_import_1.RADIAN_TO_DEGREE;
    var scaleX = (0,_core_util_js__rspack_import_1.retrieve2)(transform.scaleX, 1);
    var scaleY = (0,_core_util_js__rspack_import_1.retrieve2)(transform.scaleY, 1);
    var skewX = transform.skewX || 0;
    var skewY = transform.skewY || 0;
    var res = [];
    if (x || y) {
        res.push("translate(" + x + "px," + y + "px)");
    }
    if (rotation) {
        res.push("rotate(" + rotation + ")");
    }
    if (scaleX !== 1 || scaleY !== 1) {
        res.push("scale(" + scaleX + "," + scaleY + ")");
    }
    if (skewX || skewY) {
        res.push("skew(" + mathRound(skewX * _core_util_js__rspack_import_1.RADIAN_TO_DEGREE) + "deg, " + mathRound(skewY * _core_util_js__rspack_import_1.RADIAN_TO_DEGREE) + "deg)");
    }
    return res.join(' ');
}
var encodeBase64 = (function () {
    if (_core_env_js__rspack_import_2["default"].hasGlobalWindow && (0,_core_util_js__rspack_import_1.isFunction)(window.btoa)) {
        return function (str) {
            return window.btoa(unescape(encodeURIComponent(str)));
        };
    }
    if (typeof Buffer !== 'undefined') {
        return function (str) {
            return Buffer.from(str).toString('base64');
        };
    }
    return function (str) {
        if (false) {}
        return null;
    };
})();


}),
59886: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fastLerp: function() { return fastLerp; },
  fastMapToColor: function() { return fastMapToColor; },
  lerp: function() { return lerp; },
  lift: function() { return lift; },
  liftColor: function() { return liftColor; },
  lum: function() { return lum; },
  mapToColor: function() { return mapToColor; },
  modifyAlpha: function() { return modifyAlpha; },
  modifyHSL: function() { return modifyHSL; },
  parse: function() { return parse; },
  parseCssFloat: function() { return parseCssFloat; },
  parseCssInt: function() { return parseCssInt; },
  random: function() { return random; },
  stringify: function() { return stringify; },
  toHex: function() { return toHex; }
});
/* import */ var _core_LRU_js__rspack_import_0 = __webpack_require__(74361);
/* import */ var _core_util_js__rspack_import_1 = __webpack_require__(9774);


var kCSSColorTable = {
    'transparent': [0, 0, 0, 0], 'aliceblue': [240, 248, 255, 1],
    'antiquewhite': [250, 235, 215, 1], 'aqua': [0, 255, 255, 1],
    'aquamarine': [127, 255, 212, 1], 'azure': [240, 255, 255, 1],
    'beige': [245, 245, 220, 1], 'bisque': [255, 228, 196, 1],
    'black': [0, 0, 0, 1], 'blanchedalmond': [255, 235, 205, 1],
    'blue': [0, 0, 255, 1], 'blueviolet': [138, 43, 226, 1],
    'brown': [165, 42, 42, 1], 'burlywood': [222, 184, 135, 1],
    'cadetblue': [95, 158, 160, 1], 'chartreuse': [127, 255, 0, 1],
    'chocolate': [210, 105, 30, 1], 'coral': [255, 127, 80, 1],
    'cornflowerblue': [100, 149, 237, 1], 'cornsilk': [255, 248, 220, 1],
    'crimson': [220, 20, 60, 1], 'cyan': [0, 255, 255, 1],
    'darkblue': [0, 0, 139, 1], 'darkcyan': [0, 139, 139, 1],
    'darkgoldenrod': [184, 134, 11, 1], 'darkgray': [169, 169, 169, 1],
    'darkgreen': [0, 100, 0, 1], 'darkgrey': [169, 169, 169, 1],
    'darkkhaki': [189, 183, 107, 1], 'darkmagenta': [139, 0, 139, 1],
    'darkolivegreen': [85, 107, 47, 1], 'darkorange': [255, 140, 0, 1],
    'darkorchid': [153, 50, 204, 1], 'darkred': [139, 0, 0, 1],
    'darksalmon': [233, 150, 122, 1], 'darkseagreen': [143, 188, 143, 1],
    'darkslateblue': [72, 61, 139, 1], 'darkslategray': [47, 79, 79, 1],
    'darkslategrey': [47, 79, 79, 1], 'darkturquoise': [0, 206, 209, 1],
    'darkviolet': [148, 0, 211, 1], 'deeppink': [255, 20, 147, 1],
    'deepskyblue': [0, 191, 255, 1], 'dimgray': [105, 105, 105, 1],
    'dimgrey': [105, 105, 105, 1], 'dodgerblue': [30, 144, 255, 1],
    'firebrick': [178, 34, 34, 1], 'floralwhite': [255, 250, 240, 1],
    'forestgreen': [34, 139, 34, 1], 'fuchsia': [255, 0, 255, 1],
    'gainsboro': [220, 220, 220, 1], 'ghostwhite': [248, 248, 255, 1],
    'gold': [255, 215, 0, 1], 'goldenrod': [218, 165, 32, 1],
    'gray': [128, 128, 128, 1], 'green': [0, 128, 0, 1],
    'greenyellow': [173, 255, 47, 1], 'grey': [128, 128, 128, 1],
    'honeydew': [240, 255, 240, 1], 'hotpink': [255, 105, 180, 1],
    'indianred': [205, 92, 92, 1], 'indigo': [75, 0, 130, 1],
    'ivory': [255, 255, 240, 1], 'khaki': [240, 230, 140, 1],
    'lavender': [230, 230, 250, 1], 'lavenderblush': [255, 240, 245, 1],
    'lawngreen': [124, 252, 0, 1], 'lemonchiffon': [255, 250, 205, 1],
    'lightblue': [173, 216, 230, 1], 'lightcoral': [240, 128, 128, 1],
    'lightcyan': [224, 255, 255, 1], 'lightgoldenrodyellow': [250, 250, 210, 1],
    'lightgray': [211, 211, 211, 1], 'lightgreen': [144, 238, 144, 1],
    'lightgrey': [211, 211, 211, 1], 'lightpink': [255, 182, 193, 1],
    'lightsalmon': [255, 160, 122, 1], 'lightseagreen': [32, 178, 170, 1],
    'lightskyblue': [135, 206, 250, 1], 'lightslategray': [119, 136, 153, 1],
    'lightslategrey': [119, 136, 153, 1], 'lightsteelblue': [176, 196, 222, 1],
    'lightyellow': [255, 255, 224, 1], 'lime': [0, 255, 0, 1],
    'limegreen': [50, 205, 50, 1], 'linen': [250, 240, 230, 1],
    'magenta': [255, 0, 255, 1], 'maroon': [128, 0, 0, 1],
    'mediumaquamarine': [102, 205, 170, 1], 'mediumblue': [0, 0, 205, 1],
    'mediumorchid': [186, 85, 211, 1], 'mediumpurple': [147, 112, 219, 1],
    'mediumseagreen': [60, 179, 113, 1], 'mediumslateblue': [123, 104, 238, 1],
    'mediumspringgreen': [0, 250, 154, 1], 'mediumturquoise': [72, 209, 204, 1],
    'mediumvioletred': [199, 21, 133, 1], 'midnightblue': [25, 25, 112, 1],
    'mintcream': [245, 255, 250, 1], 'mistyrose': [255, 228, 225, 1],
    'moccasin': [255, 228, 181, 1], 'navajowhite': [255, 222, 173, 1],
    'navy': [0, 0, 128, 1], 'oldlace': [253, 245, 230, 1],
    'olive': [128, 128, 0, 1], 'olivedrab': [107, 142, 35, 1],
    'orange': [255, 165, 0, 1], 'orangered': [255, 69, 0, 1],
    'orchid': [218, 112, 214, 1], 'palegoldenrod': [238, 232, 170, 1],
    'palegreen': [152, 251, 152, 1], 'paleturquoise': [175, 238, 238, 1],
    'palevioletred': [219, 112, 147, 1], 'papayawhip': [255, 239, 213, 1],
    'peachpuff': [255, 218, 185, 1], 'peru': [205, 133, 63, 1],
    'pink': [255, 192, 203, 1], 'plum': [221, 160, 221, 1],
    'powderblue': [176, 224, 230, 1], 'purple': [128, 0, 128, 1],
    'red': [255, 0, 0, 1], 'rosybrown': [188, 143, 143, 1],
    'royalblue': [65, 105, 225, 1], 'saddlebrown': [139, 69, 19, 1],
    'salmon': [250, 128, 114, 1], 'sandybrown': [244, 164, 96, 1],
    'seagreen': [46, 139, 87, 1], 'seashell': [255, 245, 238, 1],
    'sienna': [160, 82, 45, 1], 'silver': [192, 192, 192, 1],
    'skyblue': [135, 206, 235, 1], 'slateblue': [106, 90, 205, 1],
    'slategray': [112, 128, 144, 1], 'slategrey': [112, 128, 144, 1],
    'snow': [255, 250, 250, 1], 'springgreen': [0, 255, 127, 1],
    'steelblue': [70, 130, 180, 1], 'tan': [210, 180, 140, 1],
    'teal': [0, 128, 128, 1], 'thistle': [216, 191, 216, 1],
    'tomato': [255, 99, 71, 1], 'turquoise': [64, 224, 208, 1],
    'violet': [238, 130, 238, 1], 'wheat': [245, 222, 179, 1],
    'white': [255, 255, 255, 1], 'whitesmoke': [245, 245, 245, 1],
    'yellow': [255, 255, 0, 1], 'yellowgreen': [154, 205, 50, 1]
};
function clampCssByte(i) {
    i = Math.round(i);
    return i < 0 ? 0 : i > 255 ? 255 : i;
}
function clampCssAngle(i) {
    i = Math.round(i);
    return i < 0 ? 0 : i > 360 ? 360 : i;
}
function clampCssFloat(f) {
    return f < 0 ? 0 : f > 1 ? 1 : f;
}
function parseCssInt(val) {
    var str = val;
    if (str.length && str.charAt(str.length - 1) === '%') {
        return clampCssByte(parseFloat(str) / 100 * 255);
    }
    return clampCssByte(parseInt(str, 10));
}
function parseCssFloat(val) {
    var str = val;
    if (str.length && str.charAt(str.length - 1) === '%') {
        return clampCssFloat(parseFloat(str) / 100);
    }
    return clampCssFloat(parseFloat(str));
}
function cssHueToRgb(m1, m2, h) {
    if (h < 0) {
        h += 1;
    }
    else if (h > 1) {
        h -= 1;
    }
    if (h * 6 < 1) {
        return m1 + (m2 - m1) * h * 6;
    }
    if (h * 2 < 1) {
        return m2;
    }
    if (h * 3 < 2) {
        return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    }
    return m1;
}
function lerpNumber(a, b, p) {
    return a + (b - a) * p;
}
function setRgba(out, r, g, b, a) {
    out[0] = r;
    out[1] = g;
    out[2] = b;
    out[3] = a;
    return out;
}
function copyRgba(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
var colorCache = new _core_LRU_js__rspack_import_0["default"](20);
var lastRemovedArr = null;
function putToCache(colorStr, rgbaArr) {
    if (lastRemovedArr) {
        copyRgba(lastRemovedArr, rgbaArr);
    }
    lastRemovedArr = colorCache.put(colorStr, lastRemovedArr || (rgbaArr.slice()));
}
function parse(colorStr, rgbaArr) {
    if (!colorStr) {
        return;
    }
    rgbaArr = rgbaArr || [];
    var cached = colorCache.get(colorStr);
    if (cached) {
        return copyRgba(rgbaArr, cached);
    }
    colorStr = colorStr + '';
    var str = colorStr.replace(/ /g, '').toLowerCase();
    if (str in kCSSColorTable) {
        copyRgba(rgbaArr, kCSSColorTable[str]);
        putToCache(colorStr, rgbaArr);
        return rgbaArr;
    }
    var strLen = str.length;
    if (str.charAt(0) === '#') {
        if (strLen === 4 || strLen === 5) {
            var iv = parseInt(str.slice(1, 4), 16);
            if (!(iv >= 0 && iv <= 0xfff)) {
                setRgba(rgbaArr, 0, 0, 0, 1);
                return;
            }
            setRgba(rgbaArr, ((iv & 0xf00) >> 4) | ((iv & 0xf00) >> 8), (iv & 0xf0) | ((iv & 0xf0) >> 4), (iv & 0xf) | ((iv & 0xf) << 4), strLen === 5 ? parseInt(str.slice(4), 16) / 0xf : 1);
            putToCache(colorStr, rgbaArr);
            return rgbaArr;
        }
        else if (strLen === 7 || strLen === 9) {
            var iv = parseInt(str.slice(1, 7), 16);
            if (!(iv >= 0 && iv <= 0xffffff)) {
                setRgba(rgbaArr, 0, 0, 0, 1);
                return;
            }
            setRgba(rgbaArr, (iv & 0xff0000) >> 16, (iv & 0xff00) >> 8, iv & 0xff, strLen === 9 ? parseInt(str.slice(7), 16) / 0xff : 1);
            putToCache(colorStr, rgbaArr);
            return rgbaArr;
        }
        return;
    }
    var op = str.indexOf('(');
    var ep = str.indexOf(')');
    if (op !== -1 && ep + 1 === strLen) {
        var fname = str.substr(0, op);
        var params = str.substr(op + 1, ep - (op + 1)).split(',');
        var alpha = 1;
        switch (fname) {
            case 'rgba':
                if (params.length !== 4) {
                    return params.length === 3
                        ? setRgba(rgbaArr, +params[0], +params[1], +params[2], 1)
                        : setRgba(rgbaArr, 0, 0, 0, 1);
                }
                alpha = parseCssFloat(params.pop());
            case 'rgb':
                if (params.length >= 3) {
                    setRgba(rgbaArr, parseCssInt(params[0]), parseCssInt(params[1]), parseCssInt(params[2]), params.length === 3 ? alpha : parseCssFloat(params[3]));
                    putToCache(colorStr, rgbaArr);
                    return rgbaArr;
                }
                else {
                    setRgba(rgbaArr, 0, 0, 0, 1);
                    return;
                }
            case 'hsla':
                if (params.length !== 4) {
                    setRgba(rgbaArr, 0, 0, 0, 1);
                    return;
                }
                params[3] = parseCssFloat(params[3]);
                hsla2rgba(params, rgbaArr);
                putToCache(colorStr, rgbaArr);
                return rgbaArr;
            case 'hsl':
                if (params.length !== 3) {
                    setRgba(rgbaArr, 0, 0, 0, 1);
                    return;
                }
                hsla2rgba(params, rgbaArr);
                putToCache(colorStr, rgbaArr);
                return rgbaArr;
            default:
                return;
        }
    }
    setRgba(rgbaArr, 0, 0, 0, 1);
    return;
}
function hsla2rgba(hsla, rgba) {
    var h = (((parseFloat(hsla[0]) % 360) + 360) % 360) / 360;
    var s = parseCssFloat(hsla[1]);
    var l = parseCssFloat(hsla[2]);
    var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
    var m1 = l * 2 - m2;
    rgba = rgba || [];
    setRgba(rgba, clampCssByte(cssHueToRgb(m1, m2, h + 1 / 3) * 255), clampCssByte(cssHueToRgb(m1, m2, h) * 255), clampCssByte(cssHueToRgb(m1, m2, h - 1 / 3) * 255), 1);
    if (hsla.length === 4) {
        rgba[3] = hsla[3];
    }
    return rgba;
}
function rgba2hsla(rgba) {
    if (!rgba) {
        return;
    }
    var R = rgba[0] / 255;
    var G = rgba[1] / 255;
    var B = rgba[2] / 255;
    var vMin = Math.min(R, G, B);
    var vMax = Math.max(R, G, B);
    var delta = vMax - vMin;
    var L = (vMax + vMin) / 2;
    var H;
    var S;
    if (delta === 0) {
        H = 0;
        S = 0;
    }
    else {
        if (L < 0.5) {
            S = delta / (vMax + vMin);
        }
        else {
            S = delta / (2 - vMax - vMin);
        }
        var deltaR = (((vMax - R) / 6) + (delta / 2)) / delta;
        var deltaG = (((vMax - G) / 6) + (delta / 2)) / delta;
        var deltaB = (((vMax - B) / 6) + (delta / 2)) / delta;
        if (R === vMax) {
            H = deltaB - deltaG;
        }
        else if (G === vMax) {
            H = (1 / 3) + deltaR - deltaB;
        }
        else if (B === vMax) {
            H = (2 / 3) + deltaG - deltaR;
        }
        if (H < 0) {
            H += 1;
        }
        if (H > 1) {
            H -= 1;
        }
    }
    var hsla = [H * 360, S, L];
    if (rgba[3] != null) {
        hsla.push(rgba[3]);
    }
    return hsla;
}
function lift(color, level) {
    var colorArr = parse(color);
    if (colorArr) {
        for (var i = 0; i < 3; i++) {
            if (level < 0) {
                colorArr[i] = colorArr[i] * (1 - level) | 0;
            }
            else {
                colorArr[i] = ((255 - colorArr[i]) * level + colorArr[i]) | 0;
            }
            if (colorArr[i] > 255) {
                colorArr[i] = 255;
            }
            else if (colorArr[i] < 0) {
                colorArr[i] = 0;
            }
        }
        return stringify(colorArr, colorArr.length === 4 ? 'rgba' : 'rgb');
    }
}
function toHex(color) {
    var colorArr = parse(color);
    if (colorArr) {
        return ((1 << 24) + (colorArr[0] << 16) + (colorArr[1] << 8) + (+colorArr[2])).toString(16).slice(1);
    }
}
function fastLerp(normalizedValue, colors, out) {
    if (!(colors && colors.length)
        || !(normalizedValue >= 0 && normalizedValue <= 1)) {
        return;
    }
    out = out || [];
    var value = normalizedValue * (colors.length - 1);
    var leftIndex = Math.floor(value);
    var rightIndex = Math.ceil(value);
    var leftColor = colors[leftIndex];
    var rightColor = colors[rightIndex];
    var dv = value - leftIndex;
    out[0] = clampCssByte(lerpNumber(leftColor[0], rightColor[0], dv));
    out[1] = clampCssByte(lerpNumber(leftColor[1], rightColor[1], dv));
    out[2] = clampCssByte(lerpNumber(leftColor[2], rightColor[2], dv));
    out[3] = clampCssFloat(lerpNumber(leftColor[3], rightColor[3], dv));
    return out;
}
var fastMapToColor = fastLerp;
function lerp(normalizedValue, colors, fullOutput) {
    if (!(colors && colors.length)
        || !(normalizedValue >= 0 && normalizedValue <= 1)) {
        return;
    }
    var value = normalizedValue * (colors.length - 1);
    var leftIndex = Math.floor(value);
    var rightIndex = Math.ceil(value);
    var leftColor = parse(colors[leftIndex]);
    var rightColor = parse(colors[rightIndex]);
    var dv = value - leftIndex;
    var color = stringify([
        clampCssByte(lerpNumber(leftColor[0], rightColor[0], dv)),
        clampCssByte(lerpNumber(leftColor[1], rightColor[1], dv)),
        clampCssByte(lerpNumber(leftColor[2], rightColor[2], dv)),
        clampCssFloat(lerpNumber(leftColor[3], rightColor[3], dv))
    ], 'rgba');
    return fullOutput
        ? {
            color: color,
            leftIndex: leftIndex,
            rightIndex: rightIndex,
            value: value
        }
        : color;
}
var mapToColor = lerp;
function modifyHSL(color, h, s, l) {
    var colorArr = parse(color);
    if (color) {
        colorArr = rgba2hsla(colorArr);
        h != null && (colorArr[0] = clampCssAngle((0,_core_util_js__rspack_import_1.isFunction)(h) ? h(colorArr[0]) : h));
        s != null && (colorArr[1] = parseCssFloat((0,_core_util_js__rspack_import_1.isFunction)(s) ? s(colorArr[1]) : s));
        l != null && (colorArr[2] = parseCssFloat((0,_core_util_js__rspack_import_1.isFunction)(l) ? l(colorArr[2]) : l));
        return stringify(hsla2rgba(colorArr), 'rgba');
    }
}
function modifyAlpha(color, alpha) {
    var colorArr = parse(color);
    if (colorArr && alpha != null) {
        colorArr[3] = clampCssFloat(alpha);
        return stringify(colorArr, 'rgba');
    }
}
function stringify(arrColor, type) {
    if (!arrColor || !arrColor.length) {
        return;
    }
    var colorStr = arrColor[0] + ',' + arrColor[1] + ',' + arrColor[2];
    if (type === 'rgba' || type === 'hsva' || type === 'hsla') {
        colorStr += ',' + arrColor[3];
    }
    return type + '(' + colorStr + ')';
}
function lum(color, backgroundLum) {
    var arr = parse(color);
    return arr
        ? (0.299 * arr[0] + 0.587 * arr[1] + 0.114 * arr[2]) * arr[3] / 255
            + (1 - arr[3]) * backgroundLum
        : 0;
}
function random() {
    return stringify([
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
    ], 'rgb');
}
var liftedColorCache = new _core_LRU_js__rspack_import_0["default"](100);
function liftColor(color) {
    if ((0,_core_util_js__rspack_import_1.isString)(color)) {
        var liftedColor = liftedColorCache.get(color);
        if (!liftedColor) {
            liftedColor = lift(color, -0.1);
            liftedColorCache.put(color, liftedColor);
        }
        return liftedColor;
    }
    else if ((0,_core_util_js__rspack_import_1.isGradientObject)(color)) {
        var ret = (0,_core_util_js__rspack_import_1.extend)({}, color);
        ret.colorStops = (0,_core_util_js__rspack_import_1.map)(color.colorStops, function (stop) { return ({
            offset: stop.offset,
            color: lift(stop.color, -0.1)
        }); });
        return ret;
    }
    return color;
}


}),
22555: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  morphPath: function() { return /* binding */ morphPath; },
  centroid: function() { return /* binding */ centroid; },
  combineMorph: function() { return /* binding */ combineMorph; },
  separateMorph: function() { return /* binding */ separateMorph; },
  alignBezierCurves: function() { return /* binding */ alignBezierCurves; },
  isCombineMorphing: function() { return /* binding */ isCombineMorphing; },
  isMorphing: function() { return /* binding */ isMorphing; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/curve.js
var curve = __webpack_require__(50631);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(17907);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(44721);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/path.js + 1 modules
var tool_path = __webpack_require__(27390);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(30128);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/bbox.js
var bbox = __webpack_require__(49249);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(97270);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(69717);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(52721);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(98528);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(99585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/convertPath.js


var CMD = PathProxy["default"].CMD;
function aroundEqual(a, b) {
    return Math.abs(a - b) < 1e-5;
}
function pathToBezierCurves(path) {
    var data = path.data;
    var len = path.len();
    var bezierArrayGroups = [];
    var currentSubpath;
    var xi = 0;
    var yi = 0;
    var x0 = 0;
    var y0 = 0;
    function createNewSubpath(x, y) {
        if (currentSubpath && currentSubpath.length > 2) {
            bezierArrayGroups.push(currentSubpath);
        }
        currentSubpath = [x, y];
    }
    function addLine(x0, y0, x1, y1) {
        if (!(aroundEqual(x0, x1) && aroundEqual(y0, y1))) {
            currentSubpath.push(x0, y0, x1, y1, x1, y1);
        }
    }
    function addArc(startAngle, endAngle, cx, cy, rx, ry) {
        var delta = Math.abs(endAngle - startAngle);
        var len = Math.tan(delta / 4) * 4 / 3;
        var dir = endAngle < startAngle ? -1 : 1;
        var c1 = Math.cos(startAngle);
        var s1 = Math.sin(startAngle);
        var c2 = Math.cos(endAngle);
        var s2 = Math.sin(endAngle);
        var x1 = c1 * rx + cx;
        var y1 = s1 * ry + cy;
        var x4 = c2 * rx + cx;
        var y4 = s2 * ry + cy;
        var hx = rx * len * dir;
        var hy = ry * len * dir;
        currentSubpath.push(x1 - hx * s1, y1 + hy * c1, x4 + hx * s2, y4 - hy * c2, x4, y4);
    }
    var x1;
    var y1;
    var x2;
    var y2;
    for (var i = 0; i < len;) {
        var cmd = data[i++];
        var isFirst = i === 1;
        if (isFirst) {
            xi = data[i];
            yi = data[i + 1];
            x0 = xi;
            y0 = yi;
            if (cmd === CMD.L || cmd === CMD.C || cmd === CMD.Q) {
                currentSubpath = [x0, y0];
            }
        }
        switch (cmd) {
            case CMD.M:
                xi = x0 = data[i++];
                yi = y0 = data[i++];
                createNewSubpath(x0, y0);
                break;
            case CMD.L:
                x1 = data[i++];
                y1 = data[i++];
                addLine(xi, yi, x1, y1);
                xi = x1;
                yi = y1;
                break;
            case CMD.C:
                currentSubpath.push(data[i++], data[i++], data[i++], data[i++], xi = data[i++], yi = data[i++]);
                break;
            case CMD.Q:
                x1 = data[i++];
                y1 = data[i++];
                x2 = data[i++];
                y2 = data[i++];
                currentSubpath.push(xi + 2 / 3 * (x1 - xi), yi + 2 / 3 * (y1 - yi), x2 + 2 / 3 * (x1 - x2), y2 + 2 / 3 * (y1 - y2), x2, y2);
                xi = x2;
                yi = y2;
                break;
            case CMD.A:
                var cx = data[i++];
                var cy = data[i++];
                var rx = data[i++];
                var ry = data[i++];
                var startAngle = data[i++];
                var endAngle = data[i++] + startAngle;
                i += 1;
                var anticlockwise = !data[i++];
                x1 = Math.cos(startAngle) * rx + cx;
                y1 = Math.sin(startAngle) * ry + cy;
                if (isFirst) {
                    x0 = x1;
                    y0 = y1;
                    createNewSubpath(x0, y0);
                }
                else {
                    addLine(xi, yi, x1, y1);
                }
                xi = Math.cos(endAngle) * rx + cx;
                yi = Math.sin(endAngle) * ry + cy;
                var step = (anticlockwise ? -1 : 1) * Math.PI / 2;
                for (var angle = startAngle; anticlockwise ? angle > endAngle : angle < endAngle; angle += step) {
                    var nextAngle = anticlockwise ? Math.max(angle + step, endAngle)
                        : Math.min(angle + step, endAngle);
                    addArc(angle, nextAngle, cx, cy, rx, ry);
                }
                break;
            case CMD.R:
                x0 = xi = data[i++];
                y0 = yi = data[i++];
                x1 = x0 + data[i++];
                y1 = y0 + data[i++];
                createNewSubpath(x1, y0);
                addLine(x1, y0, x1, y1);
                addLine(x1, y1, x0, y1);
                addLine(x0, y1, x0, y0);
                addLine(x0, y0, x1, y0);
                break;
            case CMD.Z:
                currentSubpath && addLine(xi, yi, x0, y0);
                xi = x0;
                yi = y0;
                break;
        }
    }
    if (currentSubpath && currentSubpath.length > 2) {
        bezierArrayGroups.push(currentSubpath);
    }
    return bezierArrayGroups;
}
function adpativeBezier(x0, y0, x1, y1, x2, y2, x3, y3, out, scale) {
    if (aroundEqual(x0, x1) && aroundEqual(y0, y1) && aroundEqual(x2, x3) && aroundEqual(y2, y3)) {
        out.push(x3, y3);
        return;
    }
    var PIXEL_DISTANCE = 2 / scale;
    var PIXEL_DISTANCE_SQR = PIXEL_DISTANCE * PIXEL_DISTANCE;
    var dx = x3 - x0;
    var dy = y3 - y0;
    var d = Math.sqrt(dx * dx + dy * dy);
    dx /= d;
    dy /= d;
    var dx1 = x1 - x0;
    var dy1 = y1 - y0;
    var dx2 = x2 - x3;
    var dy2 = y2 - y3;
    var cp1LenSqr = dx1 * dx1 + dy1 * dy1;
    var cp2LenSqr = dx2 * dx2 + dy2 * dy2;
    if (cp1LenSqr < PIXEL_DISTANCE_SQR && cp2LenSqr < PIXEL_DISTANCE_SQR) {
        out.push(x3, y3);
        return;
    }
    var projLen1 = dx * dx1 + dy * dy1;
    var projLen2 = -dx * dx2 - dy * dy2;
    var d1Sqr = cp1LenSqr - projLen1 * projLen1;
    var d2Sqr = cp2LenSqr - projLen2 * projLen2;
    if (d1Sqr < PIXEL_DISTANCE_SQR && projLen1 >= 0
        && d2Sqr < PIXEL_DISTANCE_SQR && projLen2 >= 0) {
        out.push(x3, y3);
        return;
    }
    var tmpSegX = [];
    var tmpSegY = [];
    (0,curve.cubicSubdivide)(x0, x1, x2, x3, 0.5, tmpSegX);
    (0,curve.cubicSubdivide)(y0, y1, y2, y3, 0.5, tmpSegY);
    adpativeBezier(tmpSegX[0], tmpSegY[0], tmpSegX[1], tmpSegY[1], tmpSegX[2], tmpSegY[2], tmpSegX[3], tmpSegY[3], out, scale);
    adpativeBezier(tmpSegX[4], tmpSegY[4], tmpSegX[5], tmpSegY[5], tmpSegX[6], tmpSegY[6], tmpSegX[7], tmpSegY[7], out, scale);
}
function pathToPolygons(path, scale) {
    var bezierArrayGroups = pathToBezierCurves(path);
    var polygons = [];
    scale = scale || 1;
    for (var i = 0; i < bezierArrayGroups.length; i++) {
        var beziers = bezierArrayGroups[i];
        var polygon = [];
        var x0 = beziers[0];
        var y0 = beziers[1];
        polygon.push(x0, y0);
        for (var k = 2; k < beziers.length;) {
            var x1 = beziers[k++];
            var y1 = beziers[k++];
            var x2 = beziers[k++];
            var y2 = beziers[k++];
            var x3 = beziers[k++];
            var y3 = beziers[k++];
            adpativeBezier(x0, y0, x1, y1, x2, y2, x3, y3, polygon, scale);
            x0 = x3;
            y0 = y3;
        }
        polygons.push(polygon);
    }
    return polygons;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/dividePath.js









function getDividingGrids(dimSize, rowDim, count) {
    var rowSize = dimSize[rowDim];
    var columnSize = dimSize[1 - rowDim];
    var ratio = Math.abs(rowSize / columnSize);
    var rowCount = Math.ceil(Math.sqrt(ratio * count));
    var columnCount = Math.floor(count / rowCount);
    if (columnCount === 0) {
        columnCount = 1;
        rowCount = count;
    }
    var grids = [];
    for (var i = 0; i < rowCount; i++) {
        grids.push(columnCount);
    }
    var currentCount = rowCount * columnCount;
    var remained = count - currentCount;
    if (remained > 0) {
        for (var i = 0; i < remained; i++) {
            grids[i % rowCount] += 1;
        }
    }
    return grids;
}
function divideSector(sectorShape, count, outShapes) {
    var r0 = sectorShape.r0;
    var r = sectorShape.r;
    var startAngle = sectorShape.startAngle;
    var endAngle = sectorShape.endAngle;
    var angle = Math.abs(endAngle - startAngle);
    var arcLen = angle * r;
    var deltaR = r - r0;
    var isAngleRow = arcLen > Math.abs(deltaR);
    var grids = getDividingGrids([arcLen, deltaR], isAngleRow ? 0 : 1, count);
    var rowSize = (isAngleRow ? angle : deltaR) / grids.length;
    for (var row = 0; row < grids.length; row++) {
        var columnSize = (isAngleRow ? deltaR : angle) / grids[row];
        for (var column = 0; column < grids[row]; column++) {
            var newShape = {};
            if (isAngleRow) {
                newShape.startAngle = startAngle + rowSize * row;
                newShape.endAngle = startAngle + rowSize * (row + 1);
                newShape.r0 = r0 + columnSize * column;
                newShape.r = r0 + columnSize * (column + 1);
            }
            else {
                newShape.startAngle = startAngle + columnSize * column;
                newShape.endAngle = startAngle + columnSize * (column + 1);
                newShape.r0 = r0 + rowSize * row;
                newShape.r = r0 + rowSize * (row + 1);
            }
            newShape.clockwise = sectorShape.clockwise;
            newShape.cx = sectorShape.cx;
            newShape.cy = sectorShape.cy;
            outShapes.push(newShape);
        }
    }
}
function divideRect(rectShape, count, outShapes) {
    var width = rectShape.width;
    var height = rectShape.height;
    var isHorizontalRow = width > height;
    var grids = getDividingGrids([width, height], isHorizontalRow ? 0 : 1, count);
    var rowSizeDim = isHorizontalRow ? 'width' : 'height';
    var columnSizeDim = isHorizontalRow ? 'height' : 'width';
    var rowDim = isHorizontalRow ? 'x' : 'y';
    var columnDim = isHorizontalRow ? 'y' : 'x';
    var rowSize = rectShape[rowSizeDim] / grids.length;
    for (var row = 0; row < grids.length; row++) {
        var columnSize = rectShape[columnSizeDim] / grids[row];
        for (var column = 0; column < grids[row]; column++) {
            var newShape = {};
            newShape[rowDim] = row * rowSize;
            newShape[columnDim] = column * columnSize;
            newShape[rowSizeDim] = rowSize;
            newShape[columnSizeDim] = columnSize;
            newShape.x += rectShape.x;
            newShape.y += rectShape.y;
            outShapes.push(newShape);
        }
    }
}
function crossProduct2d(x1, y1, x2, y2) {
    return x1 * y2 - x2 * y1;
}
function lineLineIntersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
    var mx = a2x - a1x;
    var my = a2y - a1y;
    var nx = b2x - b1x;
    var ny = b2y - b1y;
    var nmCrossProduct = crossProduct2d(nx, ny, mx, my);
    if (Math.abs(nmCrossProduct) < 1e-6) {
        return null;
    }
    var b1a1x = a1x - b1x;
    var b1a1y = a1y - b1y;
    var p = crossProduct2d(b1a1x, b1a1y, nx, ny) / nmCrossProduct;
    if (p < 0 || p > 1) {
        return null;
    }
    return new Point["default"](p * mx + a1x, p * my + a1y);
}
function projPtOnLine(pt, lineA, lineB) {
    var dir = new Point["default"]();
    Point["default"].sub(dir, lineB, lineA);
    dir.normalize();
    var dir2 = new Point["default"]();
    Point["default"].sub(dir2, pt, lineA);
    var len = dir2.dot(dir);
    return len;
}
function addToPoly(poly, pt) {
    var last = poly[poly.length - 1];
    if (last && last[0] === pt[0] && last[1] === pt[1]) {
        return;
    }
    poly.push(pt);
}
function splitPolygonByLine(points, lineA, lineB) {
    var len = points.length;
    var intersections = [];
    for (var i = 0; i < len; i++) {
        var p0 = points[i];
        var p1 = points[(i + 1) % len];
        var intersectionPt = lineLineIntersect(p0[0], p0[1], p1[0], p1[1], lineA.x, lineA.y, lineB.x, lineB.y);
        if (intersectionPt) {
            intersections.push({
                projPt: projPtOnLine(intersectionPt, lineA, lineB),
                pt: intersectionPt,
                idx: i
            });
        }
    }
    if (intersections.length < 2) {
        return [{ points: points }, { points: points }];
    }
    intersections.sort(function (a, b) {
        return a.projPt - b.projPt;
    });
    var splitPt0 = intersections[0];
    var splitPt1 = intersections[intersections.length - 1];
    if (splitPt1.idx < splitPt0.idx) {
        var tmp = splitPt0;
        splitPt0 = splitPt1;
        splitPt1 = tmp;
    }
    var splitPt0Arr = [splitPt0.pt.x, splitPt0.pt.y];
    var splitPt1Arr = [splitPt1.pt.x, splitPt1.pt.y];
    var newPolyA = [splitPt0Arr];
    var newPolyB = [splitPt1Arr];
    for (var i = splitPt0.idx + 1; i <= splitPt1.idx; i++) {
        addToPoly(newPolyA, points[i].slice());
    }
    addToPoly(newPolyA, splitPt1Arr);
    addToPoly(newPolyA, splitPt0Arr);
    for (var i = splitPt1.idx + 1; i <= splitPt0.idx + len; i++) {
        addToPoly(newPolyB, points[i % len].slice());
    }
    addToPoly(newPolyB, splitPt0Arr);
    addToPoly(newPolyB, splitPt1Arr);
    return [{
            points: newPolyA
        }, {
            points: newPolyB
        }];
}
function binaryDividePolygon(polygonShape) {
    var points = polygonShape.points;
    var min = [];
    var max = [];
    (0,bbox.fromPoints)(points, min, max);
    var boundingRect = new BoundingRect["default"](min[0], min[1], max[0] - min[0], max[1] - min[1]);
    var width = boundingRect.width;
    var height = boundingRect.height;
    var x = boundingRect.x;
    var y = boundingRect.y;
    var pt0 = new Point["default"]();
    var pt1 = new Point["default"]();
    if (width > height) {
        pt0.x = pt1.x = x + width / 2;
        pt0.y = y;
        pt1.y = y + height;
    }
    else {
        pt0.y = pt1.y = y + height / 2;
        pt0.x = x;
        pt1.x = x + width;
    }
    return splitPolygonByLine(points, pt0, pt1);
}
function binaryDivideRecursive(divider, shape, count, out) {
    if (count === 1) {
        out.push(shape);
    }
    else {
        var mid = Math.floor(count / 2);
        var sub = divider(shape);
        binaryDivideRecursive(divider, sub[0], mid, out);
        binaryDivideRecursive(divider, sub[1], count - mid, out);
    }
    return out;
}
function clone(path, count) {
    var paths = [];
    for (var i = 0; i < count; i++) {
        paths.push((0,tool_path.clonePath)(path));
    }
    return paths;
}
function copyPathProps(source, target) {
    target.setStyle(source.style);
    target.z = source.z;
    target.z2 = source.z2;
    target.zlevel = source.zlevel;
}
function polygonConvert(points) {
    var out = [];
    for (var i = 0; i < points.length;) {
        out.push([points[i++], points[i++]]);
    }
    return out;
}
function split(path, count) {
    var outShapes = [];
    var shape = path.shape;
    var OutShapeCtor;
    switch (path.type) {
        case 'rect':
            divideRect(shape, count, outShapes);
            OutShapeCtor = Rect["default"];
            break;
        case 'sector':
            divideSector(shape, count, outShapes);
            OutShapeCtor = Sector["default"];
            break;
        case 'circle':
            divideSector({
                r0: 0, r: shape.r, startAngle: 0, endAngle: Math.PI * 2,
                cx: shape.cx, cy: shape.cy
            }, count, outShapes);
            OutShapeCtor = Sector["default"];
            break;
        default:
            var m = path.getComputedTransform();
            var scale = m ? Math.sqrt(Math.max(m[0] * m[0] + m[1] * m[1], m[2] * m[2] + m[3] * m[3])) : 1;
            var polygons = (0,util.map)(pathToPolygons(path.getUpdatedPathProxy(), scale), function (poly) { return polygonConvert(poly); });
            var polygonCount = polygons.length;
            if (polygonCount === 0) {
                binaryDivideRecursive(binaryDividePolygon, {
                    points: polygons[0]
                }, count, outShapes);
            }
            else if (polygonCount === count) {
                for (var i = 0; i < polygonCount; i++) {
                    outShapes.push({
                        points: polygons[i]
                    });
                }
            }
            else {
                var totalArea_1 = 0;
                var items = (0,util.map)(polygons, function (poly) {
                    var min = [];
                    var max = [];
                    (0,bbox.fromPoints)(poly, min, max);
                    var area = (max[1] - min[1]) * (max[0] - min[0]);
                    totalArea_1 += area;
                    return { poly: poly, area: area };
                });
                items.sort(function (a, b) { return b.area - a.area; });
                var left = count;
                for (var i = 0; i < polygonCount; i++) {
                    var item = items[i];
                    if (left <= 0) {
                        break;
                    }
                    var selfCount = i === polygonCount - 1
                        ? left
                        : Math.ceil(item.area / totalArea_1 * count);
                    if (selfCount < 0) {
                        continue;
                    }
                    binaryDivideRecursive(binaryDividePolygon, {
                        points: item.poly
                    }, selfCount, outShapes);
                    left -= selfCount;
                }
                ;
            }
            OutShapeCtor = Polygon["default"];
            break;
    }
    if (!OutShapeCtor) {
        return clone(path, count);
    }
    var out = [];
    for (var i = 0; i < outShapes.length; i++) {
        var subPath = new OutShapeCtor();
        subPath.setShape(outShapes[i]);
        copyPathProps(path, subPath);
        out.push(subPath);
    }
    return out;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/morphPath.js








function alignSubpath(subpath1, subpath2) {
    var len1 = subpath1.length;
    var len2 = subpath2.length;
    if (len1 === len2) {
        return [subpath1, subpath2];
    }
    var tmpSegX = [];
    var tmpSegY = [];
    var shorterPath = len1 < len2 ? subpath1 : subpath2;
    var shorterLen = Math.min(len1, len2);
    var diff = Math.abs(len2 - len1) / 6;
    var shorterBezierCount = (shorterLen - 2) / 6;
    var eachCurveSubDivCount = Math.ceil(diff / shorterBezierCount) + 1;
    var newSubpath = [shorterPath[0], shorterPath[1]];
    var remained = diff;
    for (var i = 2; i < shorterLen;) {
        var x0 = shorterPath[i - 2];
        var y0 = shorterPath[i - 1];
        var x1 = shorterPath[i++];
        var y1 = shorterPath[i++];
        var x2 = shorterPath[i++];
        var y2 = shorterPath[i++];
        var x3 = shorterPath[i++];
        var y3 = shorterPath[i++];
        if (remained <= 0) {
            newSubpath.push(x1, y1, x2, y2, x3, y3);
            continue;
        }
        var actualSubDivCount = Math.min(remained, eachCurveSubDivCount - 1) + 1;
        for (var k = 1; k <= actualSubDivCount; k++) {
            var p = k / actualSubDivCount;
            (0,curve.cubicSubdivide)(x0, x1, x2, x3, p, tmpSegX);
            (0,curve.cubicSubdivide)(y0, y1, y2, y3, p, tmpSegY);
            x0 = tmpSegX[3];
            y0 = tmpSegY[3];
            newSubpath.push(tmpSegX[1], tmpSegY[1], tmpSegX[2], tmpSegY[2], x0, y0);
            x1 = tmpSegX[5];
            y1 = tmpSegY[5];
            x2 = tmpSegX[6];
            y2 = tmpSegY[6];
        }
        remained -= actualSubDivCount - 1;
    }
    return shorterPath === subpath1 ? [newSubpath, subpath2] : [subpath1, newSubpath];
}
function createSubpath(lastSubpathSubpath, otherSubpath) {
    var len = lastSubpathSubpath.length;
    var lastX = lastSubpathSubpath[len - 2];
    var lastY = lastSubpathSubpath[len - 1];
    var newSubpath = [];
    for (var i = 0; i < otherSubpath.length;) {
        newSubpath[i++] = lastX;
        newSubpath[i++] = lastY;
    }
    return newSubpath;
}
function alignBezierCurves(array1, array2) {
    var _a;
    var lastSubpath1;
    var lastSubpath2;
    var newArray1 = [];
    var newArray2 = [];
    for (var i = 0; i < Math.max(array1.length, array2.length); i++) {
        var subpath1 = array1[i];
        var subpath2 = array2[i];
        var newSubpath1 = void 0;
        var newSubpath2 = void 0;
        if (!subpath1) {
            newSubpath1 = createSubpath(lastSubpath1 || subpath2, subpath2);
            newSubpath2 = subpath2;
        }
        else if (!subpath2) {
            newSubpath2 = createSubpath(lastSubpath2 || subpath1, subpath1);
            newSubpath1 = subpath1;
        }
        else {
            _a = alignSubpath(subpath1, subpath2), newSubpath1 = _a[0], newSubpath2 = _a[1];
            lastSubpath1 = newSubpath1;
            lastSubpath2 = newSubpath2;
        }
        newArray1.push(newSubpath1);
        newArray2.push(newSubpath2);
    }
    return [newArray1, newArray2];
}
function centroid(array) {
    var signedArea = 0;
    var cx = 0;
    var cy = 0;
    var len = array.length;
    for (var i = 0, j = len - 2; i < len; j = i, i += 2) {
        var x0 = array[j];
        var y0 = array[j + 1];
        var x1 = array[i];
        var y1 = array[i + 1];
        var a = x0 * y1 - x1 * y0;
        signedArea += a;
        cx += (x0 + x1) * a;
        cy += (y0 + y1) * a;
    }
    if (signedArea === 0) {
        return [array[0] || 0, array[1] || 0];
    }
    return [cx / signedArea / 3, cy / signedArea / 3, signedArea];
}
function findBestRingOffset(fromSubBeziers, toSubBeziers, fromCp, toCp) {
    var bezierCount = (fromSubBeziers.length - 2) / 6;
    var bestScore = Infinity;
    var bestOffset = 0;
    var len = fromSubBeziers.length;
    var len2 = len - 2;
    for (var offset = 0; offset < bezierCount; offset++) {
        var cursorOffset = offset * 6;
        var score = 0;
        for (var k = 0; k < len; k += 2) {
            var idx = k === 0 ? cursorOffset : ((cursorOffset + k - 2) % len2 + 2);
            var x0 = fromSubBeziers[idx] - fromCp[0];
            var y0 = fromSubBeziers[idx + 1] - fromCp[1];
            var x1 = toSubBeziers[k] - toCp[0];
            var y1 = toSubBeziers[k + 1] - toCp[1];
            var dx = x1 - x0;
            var dy = y1 - y0;
            score += dx * dx + dy * dy;
        }
        if (score < bestScore) {
            bestScore = score;
            bestOffset = offset;
        }
    }
    return bestOffset;
}
function reverse(array) {
    var newArr = [];
    var len = array.length;
    for (var i = 0; i < len; i += 2) {
        newArr[i] = array[len - i - 2];
        newArr[i + 1] = array[len - i - 1];
    }
    return newArr;
}
function findBestMorphingRotation(fromArr, toArr, searchAngleIteration, searchAngleRange) {
    var result = [];
    var fromNeedsReverse;
    for (var i = 0; i < fromArr.length; i++) {
        var fromSubpathBezier = fromArr[i];
        var toSubpathBezier = toArr[i];
        var fromCp = centroid(fromSubpathBezier);
        var toCp = centroid(toSubpathBezier);
        if (fromNeedsReverse == null) {
            fromNeedsReverse = fromCp[2] < 0 !== toCp[2] < 0;
        }
        var newFromSubpathBezier = [];
        var newToSubpathBezier = [];
        var bestAngle = 0;
        var bestScore = Infinity;
        var tmpArr = [];
        var len = fromSubpathBezier.length;
        if (fromNeedsReverse) {
            fromSubpathBezier = reverse(fromSubpathBezier);
        }
        var offset = findBestRingOffset(fromSubpathBezier, toSubpathBezier, fromCp, toCp) * 6;
        var len2 = len - 2;
        for (var k = 0; k < len2; k += 2) {
            var idx = (offset + k) % len2 + 2;
            newFromSubpathBezier[k + 2] = fromSubpathBezier[idx] - fromCp[0];
            newFromSubpathBezier[k + 3] = fromSubpathBezier[idx + 1] - fromCp[1];
        }
        newFromSubpathBezier[0] = fromSubpathBezier[offset] - fromCp[0];
        newFromSubpathBezier[1] = fromSubpathBezier[offset + 1] - fromCp[1];
        if (searchAngleIteration > 0) {
            var step = searchAngleRange / searchAngleIteration;
            for (var angle = -searchAngleRange / 2; angle <= searchAngleRange / 2; angle += step) {
                var sa = Math.sin(angle);
                var ca = Math.cos(angle);
                var score = 0;
                for (var k = 0; k < fromSubpathBezier.length; k += 2) {
                    var x0 = newFromSubpathBezier[k];
                    var y0 = newFromSubpathBezier[k + 1];
                    var x1 = toSubpathBezier[k] - toCp[0];
                    var y1 = toSubpathBezier[k + 1] - toCp[1];
                    var newX1 = x1 * ca - y1 * sa;
                    var newY1 = x1 * sa + y1 * ca;
                    tmpArr[k] = newX1;
                    tmpArr[k + 1] = newY1;
                    var dx = newX1 - x0;
                    var dy = newY1 - y0;
                    score += dx * dx + dy * dy;
                }
                if (score < bestScore) {
                    bestScore = score;
                    bestAngle = angle;
                    for (var m = 0; m < tmpArr.length; m++) {
                        newToSubpathBezier[m] = tmpArr[m];
                    }
                }
            }
        }
        else {
            for (var i_1 = 0; i_1 < len; i_1 += 2) {
                newToSubpathBezier[i_1] = toSubpathBezier[i_1] - toCp[0];
                newToSubpathBezier[i_1 + 1] = toSubpathBezier[i_1 + 1] - toCp[1];
            }
        }
        result.push({
            from: newFromSubpathBezier,
            to: newToSubpathBezier,
            fromCp: fromCp,
            toCp: toCp,
            rotation: -bestAngle
        });
    }
    return result;
}
function isCombineMorphing(path) {
    return path.__isCombineMorphing;
}
function isMorphing(el) {
    return el.__morphT >= 0;
}
var SAVED_METHOD_PREFIX = '__mOriginal_';
function saveAndModifyMethod(obj, methodName, modifiers) {
    var savedMethodName = SAVED_METHOD_PREFIX + methodName;
    var originalMethod = obj[savedMethodName] || obj[methodName];
    if (!obj[savedMethodName]) {
        obj[savedMethodName] = obj[methodName];
    }
    var replace = modifiers.replace;
    var after = modifiers.after;
    var before = modifiers.before;
    obj[methodName] = function () {
        var args = arguments;
        var res;
        before && before.apply(this, args);
        if (replace) {
            res = replace.apply(this, args);
        }
        else {
            res = originalMethod.apply(this, args);
        }
        after && after.apply(this, args);
        return res;
    };
}
function restoreMethod(obj, methodName) {
    var savedMethodName = SAVED_METHOD_PREFIX + methodName;
    if (obj[savedMethodName]) {
        obj[methodName] = obj[savedMethodName];
        obj[savedMethodName] = null;
    }
}
function applyTransformOnBeziers(bezierCurves, mm) {
    for (var i = 0; i < bezierCurves.length; i++) {
        var subBeziers = bezierCurves[i];
        for (var k = 0; k < subBeziers.length;) {
            var x = subBeziers[k];
            var y = subBeziers[k + 1];
            subBeziers[k++] = mm[0] * x + mm[2] * y + mm[4];
            subBeziers[k++] = mm[1] * x + mm[3] * y + mm[5];
        }
    }
}
function prepareMorphPath(fromPath, toPath) {
    var fromPathProxy = fromPath.getUpdatedPathProxy();
    var toPathProxy = toPath.getUpdatedPathProxy();
    var _a = alignBezierCurves(pathToBezierCurves(fromPathProxy), pathToBezierCurves(toPathProxy)), fromBezierCurves = _a[0], toBezierCurves = _a[1];
    var fromPathTransform = fromPath.getComputedTransform();
    var toPathTransform = toPath.getComputedTransform();
    function updateIdentityTransform() {
        this.transform = null;
    }
    fromPathTransform && applyTransformOnBeziers(fromBezierCurves, fromPathTransform);
    toPathTransform && applyTransformOnBeziers(toBezierCurves, toPathTransform);
    saveAndModifyMethod(toPath, 'updateTransform', { replace: updateIdentityTransform });
    toPath.transform = null;
    var morphingData = findBestMorphingRotation(fromBezierCurves, toBezierCurves, 10, Math.PI);
    var tmpArr = [];
    saveAndModifyMethod(toPath, 'buildPath', { replace: function (path) {
            var t = toPath.__morphT;
            var onet = 1 - t;
            var newCp = [];
            for (var i = 0; i < morphingData.length; i++) {
                var item = morphingData[i];
                var from = item.from;
                var to = item.to;
                var angle = item.rotation * t;
                var fromCp = item.fromCp;
                var toCp = item.toCp;
                var sa = Math.sin(angle);
                var ca = Math.cos(angle);
                (0,vector.lerp)(newCp, fromCp, toCp, t);
                for (var m = 0; m < from.length; m += 2) {
                    var x0_1 = from[m];
                    var y0_1 = from[m + 1];
                    var x1 = to[m];
                    var y1 = to[m + 1];
                    var x = x0_1 * onet + x1 * t;
                    var y = y0_1 * onet + y1 * t;
                    tmpArr[m] = (x * ca - y * sa) + newCp[0];
                    tmpArr[m + 1] = (x * sa + y * ca) + newCp[1];
                }
                var x0 = tmpArr[0];
                var y0 = tmpArr[1];
                path.moveTo(x0, y0);
                for (var m = 2; m < from.length;) {
                    var x1 = tmpArr[m++];
                    var y1 = tmpArr[m++];
                    var x2 = tmpArr[m++];
                    var y2 = tmpArr[m++];
                    var x3 = tmpArr[m++];
                    var y3 = tmpArr[m++];
                    if (x0 === x1 && y0 === y1 && x2 === x3 && y2 === y3) {
                        path.lineTo(x3, y3);
                    }
                    else {
                        path.bezierCurveTo(x1, y1, x2, y2, x3, y3);
                    }
                    x0 = x3;
                    y0 = y3;
                }
            }
        } });
}
function morphPath(fromPath, toPath, animationOpts) {
    if (!fromPath || !toPath) {
        return toPath;
    }
    var oldDone = animationOpts.done;
    var oldDuring = animationOpts.during;
    prepareMorphPath(fromPath, toPath);
    toPath.__morphT = 0;
    function restoreToPath() {
        restoreMethod(toPath, 'buildPath');
        restoreMethod(toPath, 'updateTransform');
        toPath.__morphT = -1;
        toPath.createPathProxy();
        toPath.dirtyShape();
    }
    toPath.animateTo({
        __morphT: 1
    }, (0,util.defaults)({
        during: function (p) {
            toPath.dirtyShape();
            oldDuring && oldDuring(p);
        },
        done: function () {
            restoreToPath();
            oldDone && oldDone();
        }
    }, animationOpts));
    return toPath;
}
function hilbert(x, y, minX, minY, maxX, maxY) {
    var bits = 16;
    x = (maxX === minX) ? 0 : Math.round(32767 * (x - minX) / (maxX - minX));
    y = (maxY === minY) ? 0 : Math.round(32767 * (y - minY) / (maxY - minY));
    var d = 0;
    var tmp;
    for (var s = (1 << bits) / 2; s > 0; s /= 2) {
        var rx = 0;
        var ry = 0;
        if ((x & s) > 0) {
            rx = 1;
        }
        if ((y & s) > 0) {
            ry = 1;
        }
        d += s * s * ((3 * rx) ^ ry);
        if (ry === 0) {
            if (rx === 1) {
                x = s - 1 - x;
                y = s - 1 - y;
            }
            tmp = x;
            x = y;
            y = tmp;
        }
    }
    return d;
}
function sortPaths(pathList) {
    var xMin = Infinity;
    var yMin = Infinity;
    var xMax = -Infinity;
    var yMax = -Infinity;
    var cps = (0,util.map)(pathList, function (path) {
        var rect = path.getBoundingRect();
        var m = path.getComputedTransform();
        var x = rect.x + rect.width / 2 + (m ? m[4] : 0);
        var y = rect.y + rect.height / 2 + (m ? m[5] : 0);
        xMin = Math.min(x, xMin);
        yMin = Math.min(y, yMin);
        xMax = Math.max(x, xMax);
        yMax = Math.max(y, yMax);
        return [x, y];
    });
    var items = (0,util.map)(cps, function (cp, idx) {
        return {
            cp: cp,
            z: hilbert(cp[0], cp[1], xMin, yMin, xMax, yMax),
            path: pathList[idx]
        };
    });
    return items.sort(function (a, b) { return a.z - b.z; }).map(function (item) { return item.path; });
}
;
function defaultDividePath(param) {
    return split(param.path, param.count);
}
function createEmptyReturn() {
    return {
        fromIndividuals: [],
        toIndividuals: [],
        count: 0
    };
}
function combineMorph(fromList, toPath, animationOpts) {
    var fromPathList = [];
    function addFromPath(fromList) {
        for (var i = 0; i < fromList.length; i++) {
            var from = fromList[i];
            if (isCombineMorphing(from)) {
                addFromPath(from.childrenRef());
            }
            else if (from instanceof Path["default"]) {
                fromPathList.push(from);
            }
        }
    }
    addFromPath(fromList);
    var separateCount = fromPathList.length;
    if (!separateCount) {
        return createEmptyReturn();
    }
    var dividePath = animationOpts.dividePath || defaultDividePath;
    var toSubPathList = dividePath({
        path: toPath, count: separateCount
    });
    if (toSubPathList.length !== separateCount) {
        console.error('Invalid morphing: unmatched splitted path');
        return createEmptyReturn();
    }
    fromPathList = sortPaths(fromPathList);
    toSubPathList = sortPaths(toSubPathList);
    var oldDone = animationOpts.done;
    var oldDuring = animationOpts.during;
    var individualDelay = animationOpts.individualDelay;
    var identityTransform = new Transformable["default"]();
    for (var i = 0; i < separateCount; i++) {
        var from = fromPathList[i];
        var to = toSubPathList[i];
        to.parent = toPath;
        to.copyTransform(identityTransform);
        if (!individualDelay) {
            prepareMorphPath(from, to);
        }
    }
    toPath.__isCombineMorphing = true;
    toPath.childrenRef = function () {
        return toSubPathList;
    };
    function addToSubPathListToZr(zr) {
        for (var i = 0; i < toSubPathList.length; i++) {
            toSubPathList[i].addSelfToZr(zr);
        }
    }
    saveAndModifyMethod(toPath, 'addSelfToZr', {
        after: function (zr) {
            addToSubPathListToZr(zr);
        }
    });
    saveAndModifyMethod(toPath, 'removeSelfFromZr', {
        after: function (zr) {
            for (var i = 0; i < toSubPathList.length; i++) {
                toSubPathList[i].removeSelfFromZr(zr);
            }
        }
    });
    function restoreToPath() {
        toPath.__isCombineMorphing = false;
        toPath.__morphT = -1;
        toPath.childrenRef = null;
        restoreMethod(toPath, 'addSelfToZr');
        restoreMethod(toPath, 'removeSelfFromZr');
    }
    var toLen = toSubPathList.length;
    if (individualDelay) {
        var animating_1 = toLen;
        var eachDone = function () {
            animating_1--;
            if (animating_1 === 0) {
                restoreToPath();
                oldDone && oldDone();
            }
        };
        for (var i = 0; i < toLen; i++) {
            var indivdualAnimationOpts = individualDelay ? (0,util.defaults)({
                delay: (animationOpts.delay || 0) + individualDelay(i, toLen, fromPathList[i], toSubPathList[i]),
                done: eachDone
            }, animationOpts) : animationOpts;
            morphPath(fromPathList[i], toSubPathList[i], indivdualAnimationOpts);
        }
    }
    else {
        toPath.__morphT = 0;
        toPath.animateTo({
            __morphT: 1
        }, (0,util.defaults)({
            during: function (p) {
                for (var i = 0; i < toLen; i++) {
                    var child = toSubPathList[i];
                    child.__morphT = toPath.__morphT;
                    child.dirtyShape();
                }
                oldDuring && oldDuring(p);
            },
            done: function () {
                restoreToPath();
                for (var i = 0; i < fromList.length; i++) {
                    restoreMethod(fromList[i], 'updateTransform');
                }
                oldDone && oldDone();
            }
        }, animationOpts));
    }
    if (toPath.__zr) {
        addToSubPathListToZr(toPath.__zr);
    }
    return {
        fromIndividuals: fromPathList,
        toIndividuals: toSubPathList,
        count: toLen
    };
}
function separateMorph(fromPath, toPathList, animationOpts) {
    var toLen = toPathList.length;
    var fromPathList = [];
    var dividePath = animationOpts.dividePath || defaultDividePath;
    function addFromPath(fromList) {
        for (var i = 0; i < fromList.length; i++) {
            var from = fromList[i];
            if (isCombineMorphing(from)) {
                addFromPath(from.childrenRef());
            }
            else if (from instanceof Path["default"]) {
                fromPathList.push(from);
            }
        }
    }
    if (isCombineMorphing(fromPath)) {
        addFromPath(fromPath.childrenRef());
        var fromLen = fromPathList.length;
        if (fromLen < toLen) {
            var k = 0;
            for (var i = fromLen; i < toLen; i++) {
                fromPathList.push((0,tool_path.clonePath)(fromPathList[k++ % fromLen]));
            }
        }
        fromPathList.length = toLen;
    }
    else {
        fromPathList = dividePath({ path: fromPath, count: toLen });
        var fromPathTransform = fromPath.getComputedTransform();
        for (var i = 0; i < fromPathList.length; i++) {
            fromPathList[i].setLocalTransform(fromPathTransform);
        }
        if (fromPathList.length !== toLen) {
            console.error('Invalid morphing: unmatched splitted path');
            return createEmptyReturn();
        }
    }
    fromPathList = sortPaths(fromPathList);
    toPathList = sortPaths(toPathList);
    var individualDelay = animationOpts.individualDelay;
    for (var i = 0; i < toLen; i++) {
        var indivdualAnimationOpts = individualDelay ? (0,util.defaults)({
            delay: (animationOpts.delay || 0) + individualDelay(i, toLen, fromPathList[i], toPathList[i])
        }, animationOpts) : animationOpts;
        morphPath(fromPathList[i], toPathList[i], indivdualAnimationOpts);
    }
    return {
        fromIndividuals: fromPathList,
        toIndividuals: toPathList,
        count: toPathList.length
    };
}



}),
78330: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeViewBoxTransform: function() { return makeViewBoxTransform; },
  parseSVG: function() { return parseSVG; }
});
/* import */ var _graphic_Group_js__rspack_import_2 = __webpack_require__(97786);
/* import */ var _graphic_Image_js__rspack_import_10 = __webpack_require__(16440);
/* import */ var _graphic_shape_Circle_js__rspack_import_5 = __webpack_require__(29471);
/* import */ var _graphic_shape_Rect_js__rspack_import_3 = __webpack_require__(52721);
/* import */ var _graphic_shape_Ellipse_js__rspack_import_7 = __webpack_require__(79981);
/* import */ var _graphic_shape_Line_js__rspack_import_6 = __webpack_require__(38401);
/* import */ var _graphic_shape_Polygon_js__rspack_import_8 = __webpack_require__(69717);
/* import */ var _graphic_shape_Polyline_js__rspack_import_9 = __webpack_require__(69935);
/* import */ var _core_matrix_js__rspack_import_15 = __webpack_require__(46239);
/* import */ var _path_js__rspack_import_11 = __webpack_require__(27390);
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _graphic_LinearGradient_js__rspack_import_12 = __webpack_require__(91888);
/* import */ var _graphic_RadialGradient_js__rspack_import_13 = __webpack_require__(50046);
/* import */ var _graphic_TSpan_js__rspack_import_4 = __webpack_require__(67881);
/* import */ var _parseXML_js__rspack_import_1 = __webpack_require__(33105);
/* import */ var _color_js__rspack_import_14 = __webpack_require__(59886);
















;
var nodeParsers;
var INHERITABLE_STYLE_ATTRIBUTES_MAP = {
    'fill': 'fill',
    'stroke': 'stroke',
    'stroke-width': 'lineWidth',
    'opacity': 'opacity',
    'fill-opacity': 'fillOpacity',
    'stroke-opacity': 'strokeOpacity',
    'stroke-dasharray': 'lineDash',
    'stroke-dashoffset': 'lineDashOffset',
    'stroke-linecap': 'lineCap',
    'stroke-linejoin': 'lineJoin',
    'stroke-miterlimit': 'miterLimit',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-style': 'fontStyle',
    'font-weight': 'fontWeight',
    'text-anchor': 'textAlign',
    'visibility': 'visibility',
    'display': 'display'
};
var INHERITABLE_STYLE_ATTRIBUTES_MAP_KEYS = (0,_core_util_js__rspack_import_0.keys)(INHERITABLE_STYLE_ATTRIBUTES_MAP);
var SELF_STYLE_ATTRIBUTES_MAP = {
    'alignment-baseline': 'textBaseline',
    'stop-color': 'stopColor'
};
var SELF_STYLE_ATTRIBUTES_MAP_KEYS = (0,_core_util_js__rspack_import_0.keys)(SELF_STYLE_ATTRIBUTES_MAP);
var SVGParser = (function () {
    function SVGParser() {
        this._defs = {};
        this._root = null;
    }
    SVGParser.prototype.parse = function (xml, opt) {
        opt = opt || {};
        var svg = (0,_parseXML_js__rspack_import_1.parseXML)(xml);
        if (false) {}
        this._defsUsePending = [];
        var root = new _graphic_Group_js__rspack_import_2["default"]();
        this._root = root;
        var named = [];
        var viewBox = svg.getAttribute('viewBox') || '';
        var width = parseFloat((svg.getAttribute('width') || opt.width));
        var height = parseFloat((svg.getAttribute('height') || opt.height));
        isNaN(width) && (width = null);
        isNaN(height) && (height = null);
        parseAttributes(svg, root, null, true, false);
        var child = svg.firstChild;
        while (child) {
            this._parseNode(child, root, named, null, false, false);
            child = child.nextSibling;
        }
        applyDefs(this._defs, this._defsUsePending);
        this._defsUsePending = [];
        var viewBoxRect;
        var viewBoxTransform;
        if (viewBox) {
            var viewBoxArr = splitNumberSequence(viewBox);
            if (viewBoxArr.length >= 4) {
                viewBoxRect = {
                    x: parseFloat((viewBoxArr[0] || 0)),
                    y: parseFloat((viewBoxArr[1] || 0)),
                    width: parseFloat(viewBoxArr[2]),
                    height: parseFloat(viewBoxArr[3])
                };
            }
        }
        if (viewBoxRect && width != null && height != null) {
            viewBoxTransform = makeViewBoxTransform(viewBoxRect, { x: 0, y: 0, width: width, height: height });
            if (!opt.ignoreViewBox) {
                var elRoot = root;
                root = new _graphic_Group_js__rspack_import_2["default"]();
                root.add(elRoot);
                elRoot.scaleX = elRoot.scaleY = viewBoxTransform.scale;
                elRoot.x = viewBoxTransform.x;
                elRoot.y = viewBoxTransform.y;
            }
        }
        if (!opt.ignoreRootClip && width != null && height != null) {
            root.setClipPath(new _graphic_shape_Rect_js__rspack_import_3["default"]({
                shape: { x: 0, y: 0, width: width, height: height }
            }));
        }
        return {
            root: root,
            width: width,
            height: height,
            viewBoxRect: viewBoxRect,
            viewBoxTransform: viewBoxTransform,
            named: named
        };
    };
    SVGParser.prototype._parseNode = function (xmlNode, parentGroup, named, namedFrom, isInDefs, isInText) {
        var nodeName = xmlNode.nodeName.toLowerCase();
        var el;
        var namedFromForSub = namedFrom;
        if (nodeName === 'defs') {
            isInDefs = true;
        }
        if (nodeName === 'text') {
            isInText = true;
        }
        if (nodeName === 'defs' || nodeName === 'switch') {
            el = parentGroup;
        }
        else {
            if (!isInDefs) {
                var parser_1 = nodeParsers[nodeName];
                if (parser_1 && (0,_core_util_js__rspack_import_0.hasOwn)(nodeParsers, nodeName)) {
                    el = parser_1.call(this, xmlNode, parentGroup);
                    var nameAttr = xmlNode.getAttribute('name');
                    if (nameAttr) {
                        var newNamed = {
                            name: nameAttr,
                            namedFrom: null,
                            svgNodeTagLower: nodeName,
                            el: el
                        };
                        named.push(newNamed);
                        if (nodeName === 'g') {
                            namedFromForSub = newNamed;
                        }
                    }
                    else if (namedFrom) {
                        named.push({
                            name: namedFrom.name,
                            namedFrom: namedFrom,
                            svgNodeTagLower: nodeName,
                            el: el
                        });
                    }
                    parentGroup.add(el);
                }
            }
            var parser = paintServerParsers[nodeName];
            if (parser && (0,_core_util_js__rspack_import_0.hasOwn)(paintServerParsers, nodeName)) {
                var def = parser.call(this, xmlNode);
                var id = xmlNode.getAttribute('id');
                if (id) {
                    this._defs[id] = def;
                }
            }
        }
        if (el && el.isGroup) {
            var child = xmlNode.firstChild;
            while (child) {
                if (child.nodeType === 1) {
                    this._parseNode(child, el, named, namedFromForSub, isInDefs, isInText);
                }
                else if (child.nodeType === 3 && isInText) {
                    this._parseText(child, el);
                }
                child = child.nextSibling;
            }
        }
    };
    SVGParser.prototype._parseText = function (xmlNode, parentGroup) {
        var text = new _graphic_TSpan_js__rspack_import_4["default"]({
            style: {
                text: xmlNode.textContent
            },
            silent: true,
            x: this._textX || 0,
            y: this._textY || 0
        });
        inheritStyle(parentGroup, text);
        parseAttributes(xmlNode, text, this._defsUsePending, false, false);
        applyTextAlignment(text, parentGroup);
        var textStyle = text.style;
        var fontSize = textStyle.fontSize;
        if (fontSize && fontSize < 9) {
            textStyle.fontSize = 9;
            text.scaleX *= fontSize / 9;
            text.scaleY *= fontSize / 9;
        }
        var font = (textStyle.fontSize || textStyle.fontFamily) && [
            textStyle.fontStyle,
            textStyle.fontWeight,
            (textStyle.fontSize || 12) + 'px',
            textStyle.fontFamily || 'sans-serif'
        ].join(' ');
        textStyle.font = font;
        var rect = text.getBoundingRect();
        this._textX += rect.width;
        parentGroup.add(text);
        return text;
    };
    SVGParser.internalField = (function () {
        nodeParsers = {
            'g': function (xmlNode, parentGroup) {
                var g = new _graphic_Group_js__rspack_import_2["default"]();
                inheritStyle(parentGroup, g);
                parseAttributes(xmlNode, g, this._defsUsePending, false, false);
                return g;
            },
            'rect': function (xmlNode, parentGroup) {
                var rect = new _graphic_shape_Rect_js__rspack_import_3["default"]();
                inheritStyle(parentGroup, rect);
                parseAttributes(xmlNode, rect, this._defsUsePending, false, false);
                rect.setShape({
                    x: parseFloat(xmlNode.getAttribute('x') || '0'),
                    y: parseFloat(xmlNode.getAttribute('y') || '0'),
                    width: parseFloat(xmlNode.getAttribute('width') || '0'),
                    height: parseFloat(xmlNode.getAttribute('height') || '0')
                });
                rect.silent = true;
                return rect;
            },
            'circle': function (xmlNode, parentGroup) {
                var circle = new _graphic_shape_Circle_js__rspack_import_5["default"]();
                inheritStyle(parentGroup, circle);
                parseAttributes(xmlNode, circle, this._defsUsePending, false, false);
                circle.setShape({
                    cx: parseFloat(xmlNode.getAttribute('cx') || '0'),
                    cy: parseFloat(xmlNode.getAttribute('cy') || '0'),
                    r: parseFloat(xmlNode.getAttribute('r') || '0')
                });
                circle.silent = true;
                return circle;
            },
            'line': function (xmlNode, parentGroup) {
                var line = new _graphic_shape_Line_js__rspack_import_6["default"]();
                inheritStyle(parentGroup, line);
                parseAttributes(xmlNode, line, this._defsUsePending, false, false);
                line.setShape({
                    x1: parseFloat(xmlNode.getAttribute('x1') || '0'),
                    y1: parseFloat(xmlNode.getAttribute('y1') || '0'),
                    x2: parseFloat(xmlNode.getAttribute('x2') || '0'),
                    y2: parseFloat(xmlNode.getAttribute('y2') || '0')
                });
                line.silent = true;
                return line;
            },
            'ellipse': function (xmlNode, parentGroup) {
                var ellipse = new _graphic_shape_Ellipse_js__rspack_import_7["default"]();
                inheritStyle(parentGroup, ellipse);
                parseAttributes(xmlNode, ellipse, this._defsUsePending, false, false);
                ellipse.setShape({
                    cx: parseFloat(xmlNode.getAttribute('cx') || '0'),
                    cy: parseFloat(xmlNode.getAttribute('cy') || '0'),
                    rx: parseFloat(xmlNode.getAttribute('rx') || '0'),
                    ry: parseFloat(xmlNode.getAttribute('ry') || '0')
                });
                ellipse.silent = true;
                return ellipse;
            },
            'polygon': function (xmlNode, parentGroup) {
                var pointsStr = xmlNode.getAttribute('points');
                var pointsArr;
                if (pointsStr) {
                    pointsArr = parsePoints(pointsStr);
                }
                var polygon = new _graphic_shape_Polygon_js__rspack_import_8["default"]({
                    shape: {
                        points: pointsArr || []
                    },
                    silent: true
                });
                inheritStyle(parentGroup, polygon);
                parseAttributes(xmlNode, polygon, this._defsUsePending, false, false);
                return polygon;
            },
            'polyline': function (xmlNode, parentGroup) {
                var pointsStr = xmlNode.getAttribute('points');
                var pointsArr;
                if (pointsStr) {
                    pointsArr = parsePoints(pointsStr);
                }
                var polyline = new _graphic_shape_Polyline_js__rspack_import_9["default"]({
                    shape: {
                        points: pointsArr || []
                    },
                    silent: true
                });
                inheritStyle(parentGroup, polyline);
                parseAttributes(xmlNode, polyline, this._defsUsePending, false, false);
                return polyline;
            },
            'image': function (xmlNode, parentGroup) {
                var img = new _graphic_Image_js__rspack_import_10["default"]();
                inheritStyle(parentGroup, img);
                parseAttributes(xmlNode, img, this._defsUsePending, false, false);
                img.setStyle({
                    image: xmlNode.getAttribute('xlink:href') || xmlNode.getAttribute('href'),
                    x: +xmlNode.getAttribute('x'),
                    y: +xmlNode.getAttribute('y'),
                    width: +xmlNode.getAttribute('width'),
                    height: +xmlNode.getAttribute('height')
                });
                img.silent = true;
                return img;
            },
            'text': function (xmlNode, parentGroup) {
                var x = xmlNode.getAttribute('x') || '0';
                var y = xmlNode.getAttribute('y') || '0';
                var dx = xmlNode.getAttribute('dx') || '0';
                var dy = xmlNode.getAttribute('dy') || '0';
                this._textX = parseFloat(x) + parseFloat(dx);
                this._textY = parseFloat(y) + parseFloat(dy);
                var g = new _graphic_Group_js__rspack_import_2["default"]();
                inheritStyle(parentGroup, g);
                parseAttributes(xmlNode, g, this._defsUsePending, false, true);
                return g;
            },
            'tspan': function (xmlNode, parentGroup) {
                var x = xmlNode.getAttribute('x');
                var y = xmlNode.getAttribute('y');
                if (x != null) {
                    this._textX = parseFloat(x);
                }
                if (y != null) {
                    this._textY = parseFloat(y);
                }
                var dx = xmlNode.getAttribute('dx') || '0';
                var dy = xmlNode.getAttribute('dy') || '0';
                var g = new _graphic_Group_js__rspack_import_2["default"]();
                inheritStyle(parentGroup, g);
                parseAttributes(xmlNode, g, this._defsUsePending, false, true);
                this._textX += parseFloat(dx);
                this._textY += parseFloat(dy);
                return g;
            },
            'path': function (xmlNode, parentGroup) {
                var d = xmlNode.getAttribute('d') || '';
                var path = (0,_path_js__rspack_import_11.createFromString)(d);
                inheritStyle(parentGroup, path);
                parseAttributes(xmlNode, path, this._defsUsePending, false, false);
                path.silent = true;
                return path;
            }
        };
    })();
    return SVGParser;
}());
var paintServerParsers = {
    'lineargradient': function (xmlNode) {
        var x1 = parseInt(xmlNode.getAttribute('x1') || '0', 10);
        var y1 = parseInt(xmlNode.getAttribute('y1') || '0', 10);
        var x2 = parseInt(xmlNode.getAttribute('x2') || '10', 10);
        var y2 = parseInt(xmlNode.getAttribute('y2') || '0', 10);
        var gradient = new _graphic_LinearGradient_js__rspack_import_12["default"](x1, y1, x2, y2);
        parsePaintServerUnit(xmlNode, gradient);
        parseGradientColorStops(xmlNode, gradient);
        return gradient;
    },
    'radialgradient': function (xmlNode) {
        var cx = parseInt(xmlNode.getAttribute('cx') || '0', 10);
        var cy = parseInt(xmlNode.getAttribute('cy') || '0', 10);
        var r = parseInt(xmlNode.getAttribute('r') || '0', 10);
        var gradient = new _graphic_RadialGradient_js__rspack_import_13["default"](cx, cy, r);
        parsePaintServerUnit(xmlNode, gradient);
        parseGradientColorStops(xmlNode, gradient);
        return gradient;
    }
};
function parsePaintServerUnit(xmlNode, gradient) {
    var gradientUnits = xmlNode.getAttribute('gradientUnits');
    if (gradientUnits === 'userSpaceOnUse') {
        gradient.global = true;
    }
}
function parseGradientColorStops(xmlNode, gradient) {
    var stop = xmlNode.firstChild;
    while (stop) {
        if (stop.nodeType === 1
            && stop.nodeName.toLocaleLowerCase() === 'stop') {
            var offsetStr = stop.getAttribute('offset');
            var offset = void 0;
            if (offsetStr && offsetStr.indexOf('%') > 0) {
                offset = parseInt(offsetStr, 10) / 100;
            }
            else if (offsetStr) {
                offset = parseFloat(offsetStr);
            }
            else {
                offset = 0;
            }
            var styleVals = {};
            parseInlineStyle(stop, styleVals, styleVals);
            var stopColor = styleVals.stopColor
                || stop.getAttribute('stop-color')
                || '#000000';
            var stopOpacity = styleVals.stopOpacity
                || stop.getAttribute('stop-opacity');
            if (stopOpacity) {
                var rgba = _color_js__rspack_import_14.parse(stopColor);
                var stopColorOpacity = rgba && rgba[3];
                if (stopColorOpacity) {
                    rgba[3] *= _color_js__rspack_import_14.parseCssFloat(stopOpacity);
                    stopColor = _color_js__rspack_import_14.stringify(rgba, 'rgba');
                }
            }
            gradient.colorStops.push({
                offset: offset,
                color: stopColor
            });
        }
        stop = stop.nextSibling;
    }
}
function inheritStyle(parent, child) {
    if (parent && parent.__inheritedStyle) {
        if (!child.__inheritedStyle) {
            child.__inheritedStyle = {};
        }
        (0,_core_util_js__rspack_import_0.defaults)(child.__inheritedStyle, parent.__inheritedStyle);
    }
}
function parsePoints(pointsString) {
    var list = splitNumberSequence(pointsString);
    var points = [];
    for (var i = 0; i < list.length; i += 2) {
        var x = parseFloat(list[i]);
        var y = parseFloat(list[i + 1]);
        points.push([x, y]);
    }
    return points;
}
function parseAttributes(xmlNode, el, defsUsePending, onlyInlineStyle, isTextGroup) {
    var disp = el;
    var inheritedStyle = disp.__inheritedStyle = disp.__inheritedStyle || {};
    var selfStyle = {};
    if (xmlNode.nodeType === 1) {
        parseTransformAttribute(xmlNode, el);
        parseInlineStyle(xmlNode, inheritedStyle, selfStyle);
        if (!onlyInlineStyle) {
            parseAttributeStyle(xmlNode, inheritedStyle, selfStyle);
        }
    }
    disp.style = disp.style || {};
    if (inheritedStyle.fill != null) {
        disp.style.fill = getFillStrokeStyle(disp, 'fill', inheritedStyle.fill, defsUsePending);
    }
    if (inheritedStyle.stroke != null) {
        disp.style.stroke = getFillStrokeStyle(disp, 'stroke', inheritedStyle.stroke, defsUsePending);
    }
    (0,_core_util_js__rspack_import_0.each)([
        'lineWidth', 'opacity', 'fillOpacity', 'strokeOpacity', 'miterLimit', 'fontSize'
    ], function (propName) {
        if (inheritedStyle[propName] != null) {
            disp.style[propName] = parseFloat(inheritedStyle[propName]);
        }
    });
    (0,_core_util_js__rspack_import_0.each)([
        'lineDashOffset', 'lineCap', 'lineJoin', 'fontWeight', 'fontFamily', 'fontStyle', 'textAlign'
    ], function (propName) {
        if (inheritedStyle[propName] != null) {
            disp.style[propName] = inheritedStyle[propName];
        }
    });
    if (isTextGroup) {
        disp.__selfStyle = selfStyle;
    }
    if (inheritedStyle.lineDash) {
        disp.style.lineDash = (0,_core_util_js__rspack_import_0.map)(splitNumberSequence(inheritedStyle.lineDash), function (str) {
            return parseFloat(str);
        });
    }
    if (inheritedStyle.visibility === 'hidden' || inheritedStyle.visibility === 'collapse') {
        disp.invisible = true;
    }
    if (inheritedStyle.display === 'none') {
        disp.ignore = true;
    }
}
function applyTextAlignment(text, parentGroup) {
    var parentSelfStyle = parentGroup.__selfStyle;
    if (parentSelfStyle) {
        var textBaseline = parentSelfStyle.textBaseline;
        var zrTextBaseline = textBaseline;
        if (!textBaseline || textBaseline === 'auto') {
            zrTextBaseline = 'alphabetic';
        }
        else if (textBaseline === 'baseline') {
            zrTextBaseline = 'alphabetic';
        }
        else if (textBaseline === 'before-edge' || textBaseline === 'text-before-edge') {
            zrTextBaseline = 'top';
        }
        else if (textBaseline === 'after-edge' || textBaseline === 'text-after-edge') {
            zrTextBaseline = 'bottom';
        }
        else if (textBaseline === 'central' || textBaseline === 'mathematical') {
            zrTextBaseline = 'middle';
        }
        text.style.textBaseline = zrTextBaseline;
    }
    var parentInheritedStyle = parentGroup.__inheritedStyle;
    if (parentInheritedStyle) {
        var textAlign = parentInheritedStyle.textAlign;
        var zrTextAlign = textAlign;
        if (textAlign) {
            if (textAlign === 'middle') {
                zrTextAlign = 'center';
            }
            text.style.textAlign = zrTextAlign;
        }
    }
}
var urlRegex = /^url\(\s*#(.*?)\)/;
function getFillStrokeStyle(el, method, str, defsUsePending) {
    var urlMatch = str && str.match(urlRegex);
    if (urlMatch) {
        var url = (0,_core_util_js__rspack_import_0.trim)(urlMatch[1]);
        defsUsePending.push([el, method, url]);
        return;
    }
    if (str === 'none') {
        str = null;
    }
    return str;
}
function applyDefs(defs, defsUsePending) {
    for (var i = 0; i < defsUsePending.length; i++) {
        var item = defsUsePending[i];
        item[0].style[item[1]] = defs[item[2]];
    }
}
var numberReg = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function splitNumberSequence(rawStr) {
    return rawStr.match(numberReg) || [];
}
var transformRegex = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g;
var DEGREE_TO_ANGLE = Math.PI / 180;
function parseTransformAttribute(xmlNode, node) {
    var transform = xmlNode.getAttribute('transform');
    if (transform) {
        transform = transform.replace(/,/g, ' ');
        var transformOps_1 = [];
        var mt = null;
        transform.replace(transformRegex, function (str, type, value) {
            transformOps_1.push(type, value);
            return '';
        });
        for (var i = transformOps_1.length - 1; i > 0; i -= 2) {
            var value = transformOps_1[i];
            var type = transformOps_1[i - 1];
            var valueArr = splitNumberSequence(value);
            mt = mt || _core_matrix_js__rspack_import_15.create();
            switch (type) {
                case 'translate':
                    _core_matrix_js__rspack_import_15.translate(mt, mt, [parseFloat(valueArr[0]), parseFloat(valueArr[1] || '0')]);
                    break;
                case 'scale':
                    _core_matrix_js__rspack_import_15.scale(mt, mt, [parseFloat(valueArr[0]), parseFloat(valueArr[1] || valueArr[0])]);
                    break;
                case 'rotate':
                    _core_matrix_js__rspack_import_15.rotate(mt, mt, -parseFloat(valueArr[0]) * DEGREE_TO_ANGLE, [
                        parseFloat(valueArr[1] || '0'),
                        parseFloat(valueArr[2] || '0')
                    ]);
                    break;
                case 'skewX':
                    var sx = Math.tan(parseFloat(valueArr[0]) * DEGREE_TO_ANGLE);
                    _core_matrix_js__rspack_import_15.mul(mt, [1, 0, sx, 1, 0, 0], mt);
                    break;
                case 'skewY':
                    var sy = Math.tan(parseFloat(valueArr[0]) * DEGREE_TO_ANGLE);
                    _core_matrix_js__rspack_import_15.mul(mt, [1, sy, 0, 1, 0, 0], mt);
                    break;
                case 'matrix':
                    mt[0] = parseFloat(valueArr[0]);
                    mt[1] = parseFloat(valueArr[1]);
                    mt[2] = parseFloat(valueArr[2]);
                    mt[3] = parseFloat(valueArr[3]);
                    mt[4] = parseFloat(valueArr[4]);
                    mt[5] = parseFloat(valueArr[5]);
                    break;
            }
        }
        node.setLocalTransform(mt);
    }
}
var styleRegex = /([^\s:;]+)\s*:\s*([^:;]+)/g;
function parseInlineStyle(xmlNode, inheritableStyleResult, selfStyleResult) {
    var style = xmlNode.getAttribute('style');
    if (!style) {
        return;
    }
    styleRegex.lastIndex = 0;
    var styleRegResult;
    while ((styleRegResult = styleRegex.exec(style)) != null) {
        var svgStlAttr = styleRegResult[1];
        var zrInheritableStlAttr = (0,_core_util_js__rspack_import_0.hasOwn)(INHERITABLE_STYLE_ATTRIBUTES_MAP, svgStlAttr)
            ? INHERITABLE_STYLE_ATTRIBUTES_MAP[svgStlAttr]
            : null;
        if (zrInheritableStlAttr) {
            inheritableStyleResult[zrInheritableStlAttr] = styleRegResult[2];
        }
        var zrSelfStlAttr = (0,_core_util_js__rspack_import_0.hasOwn)(SELF_STYLE_ATTRIBUTES_MAP, svgStlAttr)
            ? SELF_STYLE_ATTRIBUTES_MAP[svgStlAttr]
            : null;
        if (zrSelfStlAttr) {
            selfStyleResult[zrSelfStlAttr] = styleRegResult[2];
        }
    }
}
function parseAttributeStyle(xmlNode, inheritableStyleResult, selfStyleResult) {
    for (var i = 0; i < INHERITABLE_STYLE_ATTRIBUTES_MAP_KEYS.length; i++) {
        var svgAttrName = INHERITABLE_STYLE_ATTRIBUTES_MAP_KEYS[i];
        var attrValue = xmlNode.getAttribute(svgAttrName);
        if (attrValue != null) {
            inheritableStyleResult[INHERITABLE_STYLE_ATTRIBUTES_MAP[svgAttrName]] = attrValue;
        }
    }
    for (var i = 0; i < SELF_STYLE_ATTRIBUTES_MAP_KEYS.length; i++) {
        var svgAttrName = SELF_STYLE_ATTRIBUTES_MAP_KEYS[i];
        var attrValue = xmlNode.getAttribute(svgAttrName);
        if (attrValue != null) {
            selfStyleResult[SELF_STYLE_ATTRIBUTES_MAP[svgAttrName]] = attrValue;
        }
    }
}
function makeViewBoxTransform(viewBoxRect, boundingRect) {
    var scaleX = boundingRect.width / viewBoxRect.width;
    var scaleY = boundingRect.height / viewBoxRect.height;
    var scale = Math.min(scaleX, scaleY);
    return {
        scale: scale,
        x: -(viewBoxRect.x + viewBoxRect.width / 2) * scale + (boundingRect.x + boundingRect.width / 2),
        y: -(viewBoxRect.y + viewBoxRect.height / 2) * scale + (boundingRect.y + boundingRect.height / 2)
    };
}
function parseSVG(xml, opt) {
    var parser = new SVGParser();
    return parser.parse(xml, opt);
}



}),
33105: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseXML: function() { return parseXML; }
});
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);

function parseXML(svg) {
    if ((0,_core_util_js__rspack_import_0.isString)(svg)) {
        var parser = new DOMParser();
        svg = parser.parseFromString(svg, 'text/xml');
    }
    var svgNode = svg;
    if (svgNode.nodeType === 9) {
        svgNode = svgNode.firstChild;
    }
    while (svgNode.nodeName.toLowerCase() !== 'svg' || svgNode.nodeType !== 1) {
        svgNode = svgNode.nextSibling;
    }
    return svgNode;
}


}),
27390: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  extendFromString: function() { return /* binding */ extendFromString; },
  createFromString: function() { return /* binding */ createFromString; },
  clonePath: function() { return /* binding */ clonePath; },
  mergePath: function() { return /* binding */ mergePath; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(17907);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(99585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(44721);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/transformPath.js


var transformPath_CMD = PathProxy["default"].CMD;
var points = [[], [], []];
var mathSqrt = Math.sqrt;
var mathAtan2 = Math.atan2;
function transformPath(path, m) {
    if (!m) {
        return;
    }
    var data = path.data;
    var len = path.len();
    var cmd;
    var nPoint;
    var i;
    var j;
    var k;
    var p;
    var M = transformPath_CMD.M;
    var C = transformPath_CMD.C;
    var L = transformPath_CMD.L;
    var R = transformPath_CMD.R;
    var A = transformPath_CMD.A;
    var Q = transformPath_CMD.Q;
    for (i = 0, j = 0; i < len;) {
        cmd = data[i++];
        j = i;
        nPoint = 0;
        switch (cmd) {
            case M:
                nPoint = 1;
                break;
            case L:
                nPoint = 1;
                break;
            case C:
                nPoint = 3;
                break;
            case Q:
                nPoint = 2;
                break;
            case A:
                var x = m[4];
                var y = m[5];
                var sx = mathSqrt(m[0] * m[0] + m[1] * m[1]);
                var sy = mathSqrt(m[2] * m[2] + m[3] * m[3]);
                var angle = mathAtan2(-m[1] / sy, m[0] / sx);
                data[i] *= sx;
                data[i++] += x;
                data[i] *= sy;
                data[i++] += y;
                data[i++] *= sx;
                data[i++] *= sy;
                data[i++] += angle;
                data[i++] += angle;
                i += 2;
                j = i;
                break;
            case R:
                p[0] = data[i++];
                p[1] = data[i++];
                (0,vector.applyTransform)(p, p, m);
                data[j++] = p[0];
                data[j++] = p[1];
                p[0] += data[i++];
                p[1] += data[i++];
                (0,vector.applyTransform)(p, p, m);
                data[j++] = p[0];
                data[j++] = p[1];
        }
        for (k = 0; k < nPoint; k++) {
            var p_1 = points[k];
            p_1[0] = data[i++];
            p_1[1] = data[i++];
            (0,vector.applyTransform)(p_1, p_1, m);
            data[j++] = p_1[0];
            data[j++] = p_1[1];
        }
    }
    path.increaseVersion();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/path.js





var path_mathSqrt = Math.sqrt;
var mathSin = Math.sin;
var mathCos = Math.cos;
var PI = Math.PI;
function vMag(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}
;
function vRatio(u, v) {
    return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
}
;
function vAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1)
        * Math.acos(vRatio(u, v));
}
;
function processArc(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg, cmd, path) {
    var psi = psiDeg * (PI / 180.0);
    var xp = mathCos(psi) * (x1 - x2) / 2.0
        + mathSin(psi) * (y1 - y2) / 2.0;
    var yp = -1 * mathSin(psi) * (x1 - x2) / 2.0
        + mathCos(psi) * (y1 - y2) / 2.0;
    var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);
    if (lambda > 1) {
        rx *= path_mathSqrt(lambda);
        ry *= path_mathSqrt(lambda);
    }
    var f = (fa === fs ? -1 : 1)
        * path_mathSqrt((((rx * rx) * (ry * ry))
            - ((rx * rx) * (yp * yp))
            - ((ry * ry) * (xp * xp))) / ((rx * rx) * (yp * yp)
            + (ry * ry) * (xp * xp))) || 0;
    var cxp = f * rx * yp / ry;
    var cyp = f * -ry * xp / rx;
    var cx = (x1 + x2) / 2.0
        + mathCos(psi) * cxp
        - mathSin(psi) * cyp;
    var cy = (y1 + y2) / 2.0
        + mathSin(psi) * cxp
        + mathCos(psi) * cyp;
    var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
    var u = [(xp - cxp) / rx, (yp - cyp) / ry];
    var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    var dTheta = vAngle(u, v);
    if (vRatio(u, v) <= -1) {
        dTheta = PI;
    }
    if (vRatio(u, v) >= 1) {
        dTheta = 0;
    }
    if (dTheta < 0) {
        var n = Math.round(dTheta / PI * 1e6) / 1e6;
        dTheta = PI * 2 + (n % 2) * PI;
    }
    path.addData(cmd, cx, cy, rx, ry, theta, dTheta, psi, fs);
}
var commandReg = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig;
var numberReg = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function createPathProxyFromString(data) {
    var path = new PathProxy["default"]();
    if (!data) {
        return path;
    }
    var cpx = 0;
    var cpy = 0;
    var subpathX = cpx;
    var subpathY = cpy;
    var prevCmd;
    var CMD = PathProxy["default"].CMD;
    var cmdList = data.match(commandReg);
    if (!cmdList) {
        return path;
    }
    for (var l = 0; l < cmdList.length; l++) {
        var cmdText = cmdList[l];
        var cmdStr = cmdText.charAt(0);
        var cmd = void 0;
        var p = cmdText.match(numberReg) || [];
        var pLen = p.length;
        for (var i = 0; i < pLen; i++) {
            p[i] = parseFloat(p[i]);
        }
        var off = 0;
        while (off < pLen) {
            var ctlPtx = void 0;
            var ctlPty = void 0;
            var rx = void 0;
            var ry = void 0;
            var psi = void 0;
            var fa = void 0;
            var fs = void 0;
            var x1 = cpx;
            var y1 = cpy;
            var len = void 0;
            var pathData = void 0;
            switch (cmdStr) {
                case 'l':
                    cpx += p[off++];
                    cpy += p[off++];
                    cmd = CMD.L;
                    path.addData(cmd, cpx, cpy);
                    break;
                case 'L':
                    cpx = p[off++];
                    cpy = p[off++];
                    cmd = CMD.L;
                    path.addData(cmd, cpx, cpy);
                    break;
                case 'm':
                    cpx += p[off++];
                    cpy += p[off++];
                    cmd = CMD.M;
                    path.addData(cmd, cpx, cpy);
                    subpathX = cpx;
                    subpathY = cpy;
                    cmdStr = 'l';
                    break;
                case 'M':
                    cpx = p[off++];
                    cpy = p[off++];
                    cmd = CMD.M;
                    path.addData(cmd, cpx, cpy);
                    subpathX = cpx;
                    subpathY = cpy;
                    cmdStr = 'L';
                    break;
                case 'h':
                    cpx += p[off++];
                    cmd = CMD.L;
                    path.addData(cmd, cpx, cpy);
                    break;
                case 'H':
                    cpx = p[off++];
                    cmd = CMD.L;
                    path.addData(cmd, cpx, cpy);
                    break;
                case 'v':
                    cpy += p[off++];
                    cmd = CMD.L;
                    path.addData(cmd, cpx, cpy);
                    break;
                case 'V':
                    cpy = p[off++];
                    cmd = CMD.L;
                    path.addData(cmd, cpx, cpy);
                    break;
                case 'C':
                    cmd = CMD.C;
                    path.addData(cmd, p[off++], p[off++], p[off++], p[off++], p[off++], p[off++]);
                    cpx = p[off - 2];
                    cpy = p[off - 1];
                    break;
                case 'c':
                    cmd = CMD.C;
                    path.addData(cmd, p[off++] + cpx, p[off++] + cpy, p[off++] + cpx, p[off++] + cpy, p[off++] + cpx, p[off++] + cpy);
                    cpx += p[off - 2];
                    cpy += p[off - 1];
                    break;
                case 'S':
                    ctlPtx = cpx;
                    ctlPty = cpy;
                    len = path.len();
                    pathData = path.data;
                    if (prevCmd === CMD.C) {
                        ctlPtx += cpx - pathData[len - 4];
                        ctlPty += cpy - pathData[len - 3];
                    }
                    cmd = CMD.C;
                    x1 = p[off++];
                    y1 = p[off++];
                    cpx = p[off++];
                    cpy = p[off++];
                    path.addData(cmd, ctlPtx, ctlPty, x1, y1, cpx, cpy);
                    break;
                case 's':
                    ctlPtx = cpx;
                    ctlPty = cpy;
                    len = path.len();
                    pathData = path.data;
                    if (prevCmd === CMD.C) {
                        ctlPtx += cpx - pathData[len - 4];
                        ctlPty += cpy - pathData[len - 3];
                    }
                    cmd = CMD.C;
                    x1 = cpx + p[off++];
                    y1 = cpy + p[off++];
                    cpx += p[off++];
                    cpy += p[off++];
                    path.addData(cmd, ctlPtx, ctlPty, x1, y1, cpx, cpy);
                    break;
                case 'Q':
                    x1 = p[off++];
                    y1 = p[off++];
                    cpx = p[off++];
                    cpy = p[off++];
                    cmd = CMD.Q;
                    path.addData(cmd, x1, y1, cpx, cpy);
                    break;
                case 'q':
                    x1 = p[off++] + cpx;
                    y1 = p[off++] + cpy;
                    cpx += p[off++];
                    cpy += p[off++];
                    cmd = CMD.Q;
                    path.addData(cmd, x1, y1, cpx, cpy);
                    break;
                case 'T':
                    ctlPtx = cpx;
                    ctlPty = cpy;
                    len = path.len();
                    pathData = path.data;
                    if (prevCmd === CMD.Q) {
                        ctlPtx += cpx - pathData[len - 4];
                        ctlPty += cpy - pathData[len - 3];
                    }
                    cpx = p[off++];
                    cpy = p[off++];
                    cmd = CMD.Q;
                    path.addData(cmd, ctlPtx, ctlPty, cpx, cpy);
                    break;
                case 't':
                    ctlPtx = cpx;
                    ctlPty = cpy;
                    len = path.len();
                    pathData = path.data;
                    if (prevCmd === CMD.Q) {
                        ctlPtx += cpx - pathData[len - 4];
                        ctlPty += cpy - pathData[len - 3];
                    }
                    cpx += p[off++];
                    cpy += p[off++];
                    cmd = CMD.Q;
                    path.addData(cmd, ctlPtx, ctlPty, cpx, cpy);
                    break;
                case 'A':
                    rx = p[off++];
                    ry = p[off++];
                    psi = p[off++];
                    fa = p[off++];
                    fs = p[off++];
                    x1 = cpx, y1 = cpy;
                    cpx = p[off++];
                    cpy = p[off++];
                    cmd = CMD.A;
                    processArc(x1, y1, cpx, cpy, fa, fs, rx, ry, psi, cmd, path);
                    break;
                case 'a':
                    rx = p[off++];
                    ry = p[off++];
                    psi = p[off++];
                    fa = p[off++];
                    fs = p[off++];
                    x1 = cpx, y1 = cpy;
                    cpx += p[off++];
                    cpy += p[off++];
                    cmd = CMD.A;
                    processArc(x1, y1, cpx, cpy, fa, fs, rx, ry, psi, cmd, path);
                    break;
            }
        }
        if (cmdStr === 'z' || cmdStr === 'Z') {
            cmd = CMD.Z;
            path.addData(cmd);
            cpx = subpathX;
            cpy = subpathY;
        }
        prevCmd = cmd;
    }
    path.toStatic();
    return path;
}
var path_SVGPath = (function (_super) {
    (0,tslib_es6.__extends)(SVGPath, _super);
    function SVGPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGPath.prototype.applyTransform = function (m) { };
    return SVGPath;
}(Path["default"]));
function isPathProxy(path) {
    return path.setData != null;
}
function createPathOptions(str, opts) {
    var pathProxy = createPathProxyFromString(str);
    var innerOpts = (0,util.extend)({}, opts);
    innerOpts.buildPath = function (path) {
        var beProxy = isPathProxy(path);
        if (beProxy && path.canSave()) {
            path.appendPath(pathProxy);
            var ctx = path.getContext();
            if (ctx) {
                path.rebuildPath(ctx, 1);
            }
        }
        else {
            var ctx = beProxy ? path.getContext() : path;
            if (ctx) {
                pathProxy.rebuildPath(ctx, 1);
            }
        }
    };
    innerOpts.applyTransform = function (m) {
        transformPath(pathProxy, m);
        this.dirtyShape();
    };
    return innerOpts;
}
function createFromString(str, opts) {
    return new path_SVGPath(createPathOptions(str, opts));
}
function extendFromString(str, defaultOpts) {
    var innerOpts = createPathOptions(str, defaultOpts);
    var Sub = (function (_super) {
        (0,tslib_es6.__extends)(Sub, _super);
        function Sub(opts) {
            var _this = _super.call(this, opts) || this;
            _this.applyTransform = innerOpts.applyTransform;
            _this.buildPath = innerOpts.buildPath;
            return _this;
        }
        return Sub;
    }(path_SVGPath));
    return Sub;
}
function mergePath(pathEls, opts) {
    var pathList = [];
    var len = pathEls.length;
    for (var i = 0; i < len; i++) {
        var pathEl = pathEls[i];
        pathList.push(pathEl.getUpdatedPathProxy(true));
    }
    var pathBundle = new Path["default"](opts);
    pathBundle.createPathProxy();
    pathBundle.buildPath = function (path) {
        if (isPathProxy(path)) {
            path.appendPath(pathList);
            var ctx = path.getContext();
            if (ctx) {
                path.rebuildPath(ctx, 1);
            }
        }
    };
    return pathBundle;
}
function clonePath(sourcePath, opts) {
    opts = opts || {};
    var path = new Path["default"]();
    if (sourcePath.shape) {
        path.setShape(sourcePath.shape);
    }
    path.setStyle(sourcePath.style);
    if (opts.bakeTransform) {
        transformPath(path.path, sourcePath.getComputedTransform());
    }
    else {
        if (opts.toLocal) {
            path.setLocalTransform(sourcePath.getComputedTransform());
        }
        else {
            path.copyTransform(sourcePath);
        }
    }
    path.buildPath = sourcePath.buildPath;
    path.applyTransform = path.applyTransform;
    path.z = sourcePath.z;
    path.z2 = sourcePath.z2;
    path.zlevel = sourcePath.zlevel;
    return path;
}


}),
80151: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  disposeAll: function() { return /* binding */ disposeAll; },
  registerSSRDataGetter: function() { return /* binding */ registerSSRDataGetter; },
  dispose: function() { return /* binding */ dispose; },
  registerPainter: function() { return /* binding */ registerPainter; },
  init: function() { return /* binding */ init; },
  getElementSSRData: function() { return /* binding */ getElementSSRData; },
  getInstance: function() { return /* binding */ getInstance; },
  version: function() { return /* binding */ version; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(18311);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/Handler.js
var Handler = __webpack_require__(60194);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/Storage.js
var Storage = __webpack_require__(93323);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/Animation.js
var Animation = __webpack_require__(18825);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(31720);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(31969);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/dom/HandlerProxy.js





var TOUCH_CLICK_DELAY = 300;
var globalEventSupported = env["default"].domSupported;
var localNativeListenerNames = (function () {
    var mouseHandlerNames = [
        'click', 'dblclick', 'mousewheel', 'wheel', 'mouseout',
        'mouseup', 'mousedown', 'mousemove', 'contextmenu'
    ];
    var touchHandlerNames = [
        'touchstart', 'touchend', 'touchmove'
    ];
    var pointerEventNameMap = {
        pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1
    };
    var pointerHandlerNames = util.map(mouseHandlerNames, function (name) {
        var nm = name.replace('mouse', 'pointer');
        return pointerEventNameMap.hasOwnProperty(nm) ? nm : name;
    });
    return {
        mouse: mouseHandlerNames,
        touch: touchHandlerNames,
        pointer: pointerHandlerNames
    };
})();
var globalNativeListenerNames = {
    mouse: ['mousemove', 'mouseup'],
    pointer: ['pointermove', 'pointerup']
};
var wheelEventSupported = false;
function isPointerFromTouch(event) {
    var pointerType = event.pointerType;
    return pointerType === 'pen' || pointerType === 'touch';
}
function setTouchTimer(scope) {
    scope.touching = true;
    if (scope.touchTimer != null) {
        clearTimeout(scope.touchTimer);
        scope.touchTimer = null;
    }
    scope.touchTimer = setTimeout(function () {
        scope.touching = false;
        scope.touchTimer = null;
    }, 700);
}
function markTouch(event) {
    event && (event.zrByTouch = true);
}
function normalizeGlobalEvent(instance, event) {
    return (0,core_event.normalizeEvent)(instance.dom, new HandlerProxy_FakeGlobalEvent(instance, event), true);
}
function isLocalEl(instance, el) {
    var elTmp = el;
    var isLocal = false;
    while (elTmp && elTmp.nodeType !== 9
        && !(isLocal = elTmp.domBelongToZr
            || (elTmp !== el && elTmp === instance.painterRoot))) {
        elTmp = elTmp.parentNode;
    }
    return isLocal;
}
var HandlerProxy_FakeGlobalEvent = (function () {
    function FakeGlobalEvent(instance, event) {
        this.stopPropagation = util.noop;
        this.stopImmediatePropagation = util.noop;
        this.preventDefault = util.noop;
        this.type = event.type;
        this.target = this.currentTarget = instance.dom;
        this.pointerType = event.pointerType;
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }
    return FakeGlobalEvent;
}());
var localDOMHandlers = {
    mousedown: function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        this.__mayPointerCapture = [event.zrX, event.zrY];
        this.trigger('mousedown', event);
    },
    mousemove: function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        var downPoint = this.__mayPointerCapture;
        if (downPoint && (event.zrX !== downPoint[0] || event.zrY !== downPoint[1])) {
            this.__togglePointerCapture(true);
        }
        this.trigger('mousemove', event);
    },
    mouseup: function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        this.__togglePointerCapture(false);
        this.trigger('mouseup', event);
    },
    mouseout: function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        var element = event.toElement || event.relatedTarget;
        if (!isLocalEl(this, element)) {
            if (this.__pointerCapturing) {
                event.zrEventControl = 'no_globalout';
            }
            this.trigger('mouseout', event);
        }
    },
    wheel: function (event) {
        wheelEventSupported = true;
        event = (0,core_event.normalizeEvent)(this.dom, event);
        this.trigger('mousewheel', event);
    },
    mousewheel: function (event) {
        if (wheelEventSupported) {
            return;
        }
        event = (0,core_event.normalizeEvent)(this.dom, event);
        this.trigger('mousewheel', event);
    },
    touchstart: function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        markTouch(event);
        this.__lastTouchMoment = new Date();
        this.handler.processGesture(event, 'start');
        localDOMHandlers.mousemove.call(this, event);
        localDOMHandlers.mousedown.call(this, event);
    },
    touchmove: function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        markTouch(event);
        this.handler.processGesture(event, 'change');
        localDOMHandlers.mousemove.call(this, event);
    },
    touchend: function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        markTouch(event);
        this.handler.processGesture(event, 'end');
        localDOMHandlers.mouseup.call(this, event);
        if (+new Date() - (+this.__lastTouchMoment) < TOUCH_CLICK_DELAY) {
            localDOMHandlers.click.call(this, event);
        }
    },
    pointerdown: function (event) {
        localDOMHandlers.mousedown.call(this, event);
    },
    pointermove: function (event) {
        if (!isPointerFromTouch(event)) {
            localDOMHandlers.mousemove.call(this, event);
        }
    },
    pointerup: function (event) {
        localDOMHandlers.mouseup.call(this, event);
    },
    pointerout: function (event) {
        if (!isPointerFromTouch(event)) {
            localDOMHandlers.mouseout.call(this, event);
        }
    }
};
util.each(['click', 'dblclick', 'contextmenu'], function (name) {
    localDOMHandlers[name] = function (event) {
        event = (0,core_event.normalizeEvent)(this.dom, event);
        this.trigger(name, event);
    };
});
var globalDOMHandlers = {
    pointermove: function (event) {
        if (!isPointerFromTouch(event)) {
            globalDOMHandlers.mousemove.call(this, event);
        }
    },
    pointerup: function (event) {
        globalDOMHandlers.mouseup.call(this, event);
    },
    mousemove: function (event) {
        this.trigger('mousemove', event);
    },
    mouseup: function (event) {
        var pointerCaptureReleasing = this.__pointerCapturing;
        this.__togglePointerCapture(false);
        this.trigger('mouseup', event);
        if (pointerCaptureReleasing) {
            event.zrEventControl = 'only_globalout';
            this.trigger('mouseout', event);
        }
    }
};
function mountLocalDOMEventListeners(instance, scope) {
    var domHandlers = scope.domHandlers;
    if (env["default"].pointerEventsSupported) {
        util.each(localNativeListenerNames.pointer, function (nativeEventName) {
            mountSingleDOMEventListener(scope, nativeEventName, function (event) {
                domHandlers[nativeEventName].call(instance, event);
            });
        });
    }
    else {
        if (env["default"].touchEventsSupported) {
            util.each(localNativeListenerNames.touch, function (nativeEventName) {
                mountSingleDOMEventListener(scope, nativeEventName, function (event) {
                    domHandlers[nativeEventName].call(instance, event);
                    setTouchTimer(scope);
                });
            });
        }
        util.each(localNativeListenerNames.mouse, function (nativeEventName) {
            mountSingleDOMEventListener(scope, nativeEventName, function (event) {
                event = (0,core_event.getNativeEvent)(event);
                if (!scope.touching) {
                    domHandlers[nativeEventName].call(instance, event);
                }
            });
        });
    }
}
function mountGlobalDOMEventListeners(instance, scope) {
    if (env["default"].pointerEventsSupported) {
        util.each(globalNativeListenerNames.pointer, mount);
    }
    else if (!env["default"].touchEventsSupported) {
        util.each(globalNativeListenerNames.mouse, mount);
    }
    function mount(nativeEventName) {
        function nativeEventListener(event) {
            event = (0,core_event.getNativeEvent)(event);
            if (!isLocalEl(instance, event.target)) {
                event = normalizeGlobalEvent(instance, event);
                scope.domHandlers[nativeEventName].call(instance, event);
            }
        }
        mountSingleDOMEventListener(scope, nativeEventName, nativeEventListener, { capture: true });
    }
}
function mountSingleDOMEventListener(scope, nativeEventName, listener, opt) {
    scope.mounted[nativeEventName] = listener;
    scope.listenerOpts[nativeEventName] = opt;
    (0,core_event.addEventListener)(scope.domTarget, nativeEventName, listener, opt);
}
function unmountDOMEventListeners(scope) {
    var mounted = scope.mounted;
    for (var nativeEventName in mounted) {
        if (mounted.hasOwnProperty(nativeEventName)) {
            (0,core_event.removeEventListener)(scope.domTarget, nativeEventName, mounted[nativeEventName], scope.listenerOpts[nativeEventName]);
        }
    }
    scope.mounted = {};
}
var HandlerProxy_DOMHandlerScope = (function () {
    function DOMHandlerScope(domTarget, domHandlers) {
        this.mounted = {};
        this.listenerOpts = {};
        this.touching = false;
        this.domTarget = domTarget;
        this.domHandlers = domHandlers;
    }
    return DOMHandlerScope;
}());
var HandlerProxy_HandlerDomProxy = (function (_super) {
    (0,tslib_es6.__extends)(HandlerDomProxy, _super);
    function HandlerDomProxy(dom, painterRoot) {
        var _this = _super.call(this) || this;
        _this.__pointerCapturing = false;
        _this.dom = dom;
        _this.painterRoot = painterRoot;
        _this._localHandlerScope = new HandlerProxy_DOMHandlerScope(dom, localDOMHandlers);
        if (globalEventSupported) {
            _this._globalHandlerScope = new HandlerProxy_DOMHandlerScope(document, globalDOMHandlers);
        }
        mountLocalDOMEventListeners(_this, _this._localHandlerScope);
        return _this;
    }
    HandlerDomProxy.prototype.dispose = function () {
        unmountDOMEventListeners(this._localHandlerScope);
        if (globalEventSupported) {
            unmountDOMEventListeners(this._globalHandlerScope);
        }
    };
    HandlerDomProxy.prototype.setCursor = function (cursorStyle) {
        this.dom.style && (this.dom.style.cursor = cursorStyle || 'default');
    };
    HandlerDomProxy.prototype.__togglePointerCapture = function (isPointerCapturing) {
        this.__mayPointerCapture = null;
        if (globalEventSupported
            && ((+this.__pointerCapturing) ^ (+isPointerCapturing))) {
            this.__pointerCapturing = isPointerCapturing;
            var globalHandlerScope = this._globalHandlerScope;
            isPointerCapturing
                ? mountGlobalDOMEventListeners(this, globalHandlerScope)
                : unmountDOMEventListeners(globalHandlerScope);
        }
    };
    return HandlerDomProxy;
}(Eventful["default"]));
/* export default */ var HandlerProxy = (HandlerProxy_HandlerDomProxy);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(59886);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/config.js
var lib_config = __webpack_require__(76486);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(97786);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/









var painterCtors = {};
var instances = {};
function delInstance(id) {
    delete instances[id];
}
function isDarkMode(backgroundColor) {
    if (!backgroundColor) {
        return false;
    }
    if (typeof backgroundColor === 'string') {
        return (0,color.lum)(backgroundColor, 1) < lib_config.DARK_MODE_THRESHOLD;
    }
    else if (backgroundColor.colorStops) {
        var colorStops = backgroundColor.colorStops;
        var totalLum = 0;
        var len = colorStops.length;
        for (var i = 0; i < len; i++) {
            totalLum += (0,color.lum)(colorStops[i].color, 1);
        }
        totalLum /= len;
        return totalLum < lib_config.DARK_MODE_THRESHOLD;
    }
    return false;
}
var zrender_ZRender = (function () {
    function ZRender(id, dom, opts) {
        var _this = this;
        this._sleepAfterStill = 10;
        this._stillFrameAccum = 0;
        this._needsRefresh = true;
        this._needsRefreshHover = true;
        this._darkMode = false;
        opts = opts || {};
        this.dom = dom;
        this.id = id;
        var storage = new Storage["default"]();
        var rendererType = opts.renderer || 'canvas';
        if (!painterCtors[rendererType]) {
            rendererType = util.keys(painterCtors)[0];
        }
        if (false) {}
        opts.useDirtyRect = opts.useDirtyRect == null
            ? false
            : opts.useDirtyRect;
        var painter = new painterCtors[rendererType](dom, storage, opts, id);
        var ssrMode = opts.ssr || painter.ssrOnly;
        this.storage = storage;
        this.painter = painter;
        var handlerProxy = (!env["default"].node && !env["default"].worker && !ssrMode)
            ? new HandlerProxy(painter.getViewportRoot(), painter.root)
            : null;
        var useCoarsePointer = opts.useCoarsePointer;
        var usePointerSize = (useCoarsePointer == null || useCoarsePointer === 'auto')
            ? env["default"].touchEventsSupported
            : !!useCoarsePointer;
        var defaultPointerSize = 44;
        var pointerSize;
        if (usePointerSize) {
            pointerSize = util.retrieve2(opts.pointerSize, defaultPointerSize);
        }
        this.handler = new Handler["default"](storage, painter, handlerProxy, painter.root, pointerSize);
        this.animation = new Animation["default"]({
            stage: {
                update: ssrMode ? null : function () { return _this._flush(true); }
            }
        });
        if (!ssrMode) {
            this.animation.start();
        }
    }
    ZRender.prototype.add = function (el) {
        if (this._disposed || !el) {
            return;
        }
        this.storage.addRoot(el);
        el.addSelfToZr(this);
        this.refresh();
    };
    ZRender.prototype.remove = function (el) {
        if (this._disposed || !el) {
            return;
        }
        this.storage.delRoot(el);
        el.removeSelfFromZr(this);
        this.refresh();
    };
    ZRender.prototype.configLayer = function (zLevel, config) {
        if (this._disposed) {
            return;
        }
        if (this.painter.configLayer) {
            this.painter.configLayer(zLevel, config);
        }
        this.refresh();
    };
    ZRender.prototype.setBackgroundColor = function (backgroundColor) {
        if (this._disposed) {
            return;
        }
        if (this.painter.setBackgroundColor) {
            this.painter.setBackgroundColor(backgroundColor);
        }
        this.refresh();
        this._backgroundColor = backgroundColor;
        this._darkMode = isDarkMode(backgroundColor);
    };
    ZRender.prototype.getBackgroundColor = function () {
        return this._backgroundColor;
    };
    ZRender.prototype.setDarkMode = function (darkMode) {
        this._darkMode = darkMode;
    };
    ZRender.prototype.isDarkMode = function () {
        return this._darkMode;
    };
    ZRender.prototype.refreshImmediately = function (fromInside) {
        if (this._disposed) {
            return;
        }
        if (!fromInside) {
            this.animation.update(true);
        }
        this._needsRefresh = false;
        this.painter.refresh();
        this._needsRefresh = false;
    };
    ZRender.prototype.refresh = function () {
        if (this._disposed) {
            return;
        }
        this._needsRefresh = true;
        this.animation.start();
    };
    ZRender.prototype.flush = function () {
        if (this._disposed) {
            return;
        }
        this._flush(false);
    };
    ZRender.prototype._flush = function (fromInside) {
        var triggerRendered;
        var start = (0,Animation.getTime)();
        if (this._needsRefresh) {
            triggerRendered = true;
            this.refreshImmediately(fromInside);
        }
        if (this._needsRefreshHover) {
            triggerRendered = true;
            this.refreshHoverImmediately();
        }
        var end = (0,Animation.getTime)();
        if (triggerRendered) {
            this._stillFrameAccum = 0;
            this.trigger('rendered', {
                elapsedTime: end - start
            });
        }
        else if (this._sleepAfterStill > 0) {
            this._stillFrameAccum++;
            if (this._stillFrameAccum > this._sleepAfterStill) {
                this.animation.stop();
            }
        }
    };
    ZRender.prototype.setSleepAfterStill = function (stillFramesCount) {
        this._sleepAfterStill = stillFramesCount;
    };
    ZRender.prototype.wakeUp = function () {
        if (this._disposed) {
            return;
        }
        this.animation.start();
        this._stillFrameAccum = 0;
    };
    ZRender.prototype.refreshHover = function () {
        this._needsRefreshHover = true;
    };
    ZRender.prototype.refreshHoverImmediately = function () {
        if (this._disposed) {
            return;
        }
        this._needsRefreshHover = false;
        if (this.painter.refreshHover && this.painter.getType() === 'canvas') {
            this.painter.refreshHover();
        }
    };
    ZRender.prototype.resize = function (opts) {
        if (this._disposed) {
            return;
        }
        opts = opts || {};
        this.painter.resize(opts.width, opts.height);
        this.handler.resize();
    };
    ZRender.prototype.clearAnimation = function () {
        if (this._disposed) {
            return;
        }
        this.animation.clear();
    };
    ZRender.prototype.getWidth = function () {
        if (this._disposed) {
            return;
        }
        return this.painter.getWidth();
    };
    ZRender.prototype.getHeight = function () {
        if (this._disposed) {
            return;
        }
        return this.painter.getHeight();
    };
    ZRender.prototype.setCursorStyle = function (cursorStyle) {
        if (this._disposed) {
            return;
        }
        this.handler.setCursorStyle(cursorStyle);
    };
    ZRender.prototype.findHover = function (x, y) {
        if (this._disposed) {
            return;
        }
        return this.handler.findHover(x, y);
    };
    ZRender.prototype.on = function (eventName, eventHandler, context) {
        if (!this._disposed) {
            this.handler.on(eventName, eventHandler, context);
        }
        return this;
    };
    ZRender.prototype.off = function (eventName, eventHandler) {
        if (this._disposed) {
            return;
        }
        this.handler.off(eventName, eventHandler);
    };
    ZRender.prototype.trigger = function (eventName, event) {
        if (this._disposed) {
            return;
        }
        this.handler.trigger(eventName, event);
    };
    ZRender.prototype.clear = function () {
        if (this._disposed) {
            return;
        }
        var roots = this.storage.getRoots();
        for (var i = 0; i < roots.length; i++) {
            if (roots[i] instanceof Group["default"]) {
                roots[i].removeSelfFromZr(this);
            }
        }
        this.storage.delAllRoots();
        this.painter.clear();
    };
    ZRender.prototype.dispose = function () {
        if (this._disposed) {
            return;
        }
        this.animation.stop();
        this.clear();
        this.storage.dispose();
        this.painter.dispose();
        this.handler.dispose();
        this.animation =
            this.storage =
                this.painter =
                    this.handler = null;
        this._disposed = true;
        delInstance(this.id);
    };
    return ZRender;
}());
function init(dom, opts) {
    var zr = new zrender_ZRender(util.guid(), dom, opts);
    instances[zr.id] = zr;
    return zr;
}
function dispose(zr) {
    zr.dispose();
}
function disposeAll() {
    for (var key in instances) {
        if (instances.hasOwnProperty(key)) {
            instances[key].dispose();
        }
    }
    instances = {};
}
function getInstance(id) {
    return instances[id];
}
function registerPainter(name, Ctor) {
    painterCtors[name] = Ctor;
}
var ssrDataGetter;
function getElementSSRData(el) {
    if (typeof ssrDataGetter === 'function') {
        return ssrDataGetter(el);
    }
}
function registerSSRDataGetter(getter) {
    ssrDataGetter = getter;
}
var version = '6.0.0';
;


}),

}]);