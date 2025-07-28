"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["2609"], {
35988: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Painter; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/helper.js
var helper = __webpack_require__(67206);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js
var graphic_Image = __webpack_require__(31386);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(45258);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/TSpan.js
var TSpan = __webpack_require__(39183);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/SVGPathRebuilder.js

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
/* ESM default export */ var svg_SVGPathRebuilder = (SVGPathRebuilder_SVGPathRebuilder);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/canvas/dashStyle.js
var dashStyle = __webpack_require__(75422);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/mapStyleToAttrs.js





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

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/dom.js + 1 modules
var dom = __webpack_require__(75225);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/core.js


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

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/helper/image.js
var helper_image = __webpack_require__(25259);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(9757);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(6535);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/CompoundPath.js
var CompoundPath = __webpack_require__(33401);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/animation/cubicEasing.js
var cubicEasing = __webpack_require__(28255);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/cssClassId.js
var cssClassIdx = 0;
function getClassId() {
    return cssClassIdx++;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/cssAnimation.js









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

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(82379);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(67375);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/cssEmphasis.js


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

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/zrender.js
var zrender = __webpack_require__(14603);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/graphic.js















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

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/domapi.js
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/patch.js



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

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/canvas/helper.js
var canvas_helper = __webpack_require__(31516);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/Painter.js






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
/* ESM default export */ var Painter = (Painter_SVGPainter);


}),
67206: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _tool_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67375);
/* ESM import */var _core_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76226);



var mathRound = Math.round;
function normalizeColor(color) {
    var opacity;
    if (!color || color === 'transparent') {
        color = 'none';
    }
    else if (typeof color === 'string' && color.indexOf('rgba') > -1) {
        var arr = (0,_tool_color_js__WEBPACK_IMPORTED_MODULE_0__.parse)(color);
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
    var rotation = (transform.rotation || 0) * _core_util_js__WEBPACK_IMPORTED_MODULE_1__.RADIAN_TO_DEGREE;
    var scaleX = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(transform.scaleX, 1);
    var scaleY = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(transform.scaleY, 1);
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
        res.push("skew(" + mathRound(skewX * _core_util_js__WEBPACK_IMPORTED_MODULE_1__.RADIAN_TO_DEGREE) + "deg, " + mathRound(skewY * _core_util_js__WEBPACK_IMPORTED_MODULE_1__.RADIAN_TO_DEGREE) + "deg)");
    }
    return res.join(' ');
}
var encodeBase64 = (function () {
    if (_core_env_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasGlobalWindow && (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(window.btoa)) {
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
67375: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
  random: function() { return random; },
  stringify: function() { return stringify; },
  toHex: function() { return toHex; }
});
/* ESM import */var _core_LRU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45671);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);


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
var colorCache = new _core_LRU_js__WEBPACK_IMPORTED_MODULE_0__["default"](20);
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
        h != null && (colorArr[0] = clampCssAngle(h));
        s != null && (colorArr[1] = parseCssFloat(s));
        l != null && (colorArr[2] = parseCssFloat(l));
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
var liftedColorCache = new _core_LRU_js__WEBPACK_IMPORTED_MODULE_0__["default"](100);
function liftColor(color) {
    if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString)(color)) {
        var liftedColor = liftedColorCache.get(color);
        if (!liftedColor) {
            liftedColor = lift(color, -0.1);
            liftedColorCache.put(color, liftedColor);
        }
        return liftedColor;
    }
    else if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isGradientObject)(color)) {
        var ret = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, color);
        ret.colorStops = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map)(color.colorStops, function (stop) { return ({
            offset: stop.offset,
            color: lift(stop.color, -0.1)
        }); });
        return ret;
    }
    return color;
}


}),
92075: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  isMorphing: function() { return /* binding */ isMorphing; },
  defaultDividePath: function() { return /* reexport */ split; },
  morphPath: function() { return /* binding */ morphPath; },
  isCombineMorphing: function() { return /* binding */ isCombineMorphing; },
  centroid: function() { return /* binding */ centroid; },
  separateMorph: function() { return /* binding */ separateMorph; },
  alignBezierCurves: function() { return /* binding */ alignBezierCurves; },
  combineMorph: function() { return /* binding */ combineMorph; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/curve.js
var curve = __webpack_require__(97566);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(63261);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/path.js + 1 modules
var tool_path = __webpack_require__(20743);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(9757);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/bbox.js
var bbox = __webpack_require__(71274);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(44964);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(12430);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(71272);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(98289);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(6535);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/convertPath.js


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

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/dividePath.js









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

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/morphPath.js








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
91758: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeViewBoxTransform: function() { return makeViewBoxTransform; },
  parseSVG: function() { return parseSVG; },
  parseXML: function() { return /* reexport safe */ _parseXML_js__WEBPACK_IMPORTED_MODULE_0__.parseXML; }
});
/* ESM import */var _graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58695);
/* ESM import */var _graphic_Image_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31386);
/* ESM import */var _graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26768);
/* ESM import */var _graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40361);
/* ESM import */var _graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28939);
/* ESM import */var _graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16504);
/* ESM import */var _graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71272);
/* ESM import */var _graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56490);
/* ESM import */var _core_matrix_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85215);
/* ESM import */var _path_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20743);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _graphic_LinearGradient_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71756);
/* ESM import */var _graphic_RadialGradient_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20094);
/* ESM import */var _graphic_TSpan_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39183);
/* ESM import */var _parseXML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12324);















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
var INHERITABLE_STYLE_ATTRIBUTES_MAP_KEYS = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(INHERITABLE_STYLE_ATTRIBUTES_MAP);
var SELF_STYLE_ATTRIBUTES_MAP = {
    'alignment-baseline': 'textBaseline',
    'stop-color': 'stopColor'
};
var SELF_STYLE_ATTRIBUTES_MAP_KEYS = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(SELF_STYLE_ATTRIBUTES_MAP);
var SVGParser = (function () {
    function SVGParser() {
        this._defs = {};
        this._root = null;
    }
    SVGParser.prototype.parse = function (xml, opt) {
        opt = opt || {};
        var svg = (0,_parseXML_js__WEBPACK_IMPORTED_MODULE_0__.parseXML)(xml);
        if (false) {}
        this._defsUsePending = [];
        var root = new _graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
                root = new _graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
                root.add(elRoot);
                elRoot.scaleX = elRoot.scaleY = viewBoxTransform.scale;
                elRoot.x = viewBoxTransform.x;
                elRoot.y = viewBoxTransform.y;
            }
        }
        if (!opt.ignoreRootClip && width != null && height != null) {
            root.setClipPath(new _graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
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
                if (parser_1 && (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(nodeParsers, nodeName)) {
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
            if (parser && (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(paintServerParsers, nodeName)) {
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
        var text = new _graphic_TSpan_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
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
                var g = new _graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
                inheritStyle(parentGroup, g);
                parseAttributes(xmlNode, g, this._defsUsePending, false, false);
                return g;
            },
            'rect': function (xmlNode, parentGroup) {
                var rect = new _graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
                var circle = new _graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
                var line = new _graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
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
                var ellipse = new _graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
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
                var polygon = new _graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
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
                var polyline = new _graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
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
                var img = new _graphic_Image_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
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
                var g = new _graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
                var g = new _graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
                inheritStyle(parentGroup, g);
                parseAttributes(xmlNode, g, this._defsUsePending, false, true);
                this._textX += parseFloat(dx);
                this._textY += parseFloat(dy);
                return g;
            },
            'path': function (xmlNode, parentGroup) {
                var d = xmlNode.getAttribute('d') || '';
                var path = (0,_path_js__WEBPACK_IMPORTED_MODULE_11__.createFromString)(d);
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
        var gradient = new _graphic_LinearGradient_js__WEBPACK_IMPORTED_MODULE_12__["default"](x1, y1, x2, y2);
        parsePaintServerUnit(xmlNode, gradient);
        parseGradientColorStops(xmlNode, gradient);
        return gradient;
    },
    'radialgradient': function (xmlNode) {
        var cx = parseInt(xmlNode.getAttribute('cx') || '0', 10);
        var cy = parseInt(xmlNode.getAttribute('cy') || '0', 10);
        var r = parseInt(xmlNode.getAttribute('r') || '0', 10);
        var gradient = new _graphic_RadialGradient_js__WEBPACK_IMPORTED_MODULE_13__["default"](cx, cy, r);
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
        (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults)(child.__inheritedStyle, parent.__inheritedStyle);
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
    (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)([
        'lineWidth', 'opacity', 'fillOpacity', 'strokeOpacity', 'miterLimit', 'fontSize'
    ], function (propName) {
        if (inheritedStyle[propName] != null) {
            disp.style[propName] = parseFloat(inheritedStyle[propName]);
        }
    });
    (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)([
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
        disp.style.lineDash = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map)(splitNumberSequence(inheritedStyle.lineDash), function (str) {
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
        var url = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.trim)(urlMatch[1]);
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
            mt = mt || _core_matrix_js__WEBPACK_IMPORTED_MODULE_14__.create();
            switch (type) {
                case 'translate':
                    _core_matrix_js__WEBPACK_IMPORTED_MODULE_14__.translate(mt, mt, [parseFloat(valueArr[0]), parseFloat(valueArr[1] || '0')]);
                    break;
                case 'scale':
                    _core_matrix_js__WEBPACK_IMPORTED_MODULE_14__.scale(mt, mt, [parseFloat(valueArr[0]), parseFloat(valueArr[1] || valueArr[0])]);
                    break;
                case 'rotate':
                    _core_matrix_js__WEBPACK_IMPORTED_MODULE_14__.rotate(mt, mt, -parseFloat(valueArr[0]) * DEGREE_TO_ANGLE, [
                        parseFloat(valueArr[1] || '0'),
                        parseFloat(valueArr[2] || '0')
                    ]);
                    break;
                case 'skewX':
                    var sx = Math.tan(parseFloat(valueArr[0]) * DEGREE_TO_ANGLE);
                    _core_matrix_js__WEBPACK_IMPORTED_MODULE_14__.mul(mt, [1, 0, sx, 1, 0, 0], mt);
                    break;
                case 'skewY':
                    var sy = Math.tan(parseFloat(valueArr[0]) * DEGREE_TO_ANGLE);
                    _core_matrix_js__WEBPACK_IMPORTED_MODULE_14__.mul(mt, [1, sy, 0, 1, 0, 0], mt);
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
        var zrInheritableStlAttr = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(INHERITABLE_STYLE_ATTRIBUTES_MAP, svgStlAttr)
            ? INHERITABLE_STYLE_ATTRIBUTES_MAP[svgStlAttr]
            : null;
        if (zrInheritableStlAttr) {
            inheritableStyleResult[zrInheritableStlAttr] = styleRegResult[2];
        }
        var zrSelfStlAttr = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(SELF_STYLE_ATTRIBUTES_MAP, svgStlAttr)
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
12324: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseXML: function() { return parseXML; }
});
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

function parseXML(svg) {
    if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(svg)) {
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
20743: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  clonePath: function() { return /* binding */ clonePath; },
  mergePath: function() { return /* binding */ mergePath; },
  extendFromString: function() { return /* binding */ extendFromString; },
  createFromString: function() { return /* binding */ createFromString; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(6535);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(63261);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/transformPath.js


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

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/path.js





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
        if (isPathProxy(path)) {
            path.setData(pathProxy.data);
            var ctx = path.getContext();
            if (ctx) {
                path.rebuildPath(ctx, 1);
            }
        }
        else {
            var ctx = path;
            pathProxy.rebuildPath(ctx, 1);
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
14603: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dispose: function() { return dispose; },
  disposeAll: function() { return disposeAll; },
  getElementSSRData: function() { return getElementSSRData; },
  getInstance: function() { return getInstance; },
  init: function() { return init; },
  registerPainter: function() { return registerPainter; },
  registerSSRDataGetter: function() { return registerSSRDataGetter; },
  version: function() { return version; }
});
/* ESM import */var _core_env_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76226);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);
/* ESM import */var _Handler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7895);
/* ESM import */var _Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31814);
/* ESM import */var _animation_Animation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98635);
/* ESM import */var _dom_HandlerProxy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57852);
/* ESM import */var _tool_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67375);
/* ESM import */var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8473);
/* ESM import */var _graphic_Group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58695);
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
        return (0,_tool_color_js__WEBPACK_IMPORTED_MODULE_0__.lum)(backgroundColor, 1) < _config_js__WEBPACK_IMPORTED_MODULE_1__.DARK_MODE_THRESHOLD;
    }
    else if (backgroundColor.colorStops) {
        var colorStops = backgroundColor.colorStops;
        var totalLum = 0;
        var len = colorStops.length;
        for (var i = 0; i < len; i++) {
            totalLum += (0,_tool_color_js__WEBPACK_IMPORTED_MODULE_0__.lum)(colorStops[i].color, 1);
        }
        totalLum /= len;
        return totalLum < _config_js__WEBPACK_IMPORTED_MODULE_1__.DARK_MODE_THRESHOLD;
    }
    return false;
}
var ZRender = (function () {
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
        var storage = new _Storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        var rendererType = opts.renderer || 'canvas';
        if (!painterCtors[rendererType]) {
            rendererType = _core_util_js__WEBPACK_IMPORTED_MODULE_3__.keys(painterCtors)[0];
        }
        if (false) {}
        opts.useDirtyRect = opts.useDirtyRect == null
            ? false
            : opts.useDirtyRect;
        var painter = new painterCtors[rendererType](dom, storage, opts, id);
        var ssrMode = opts.ssr || painter.ssrOnly;
        this.storage = storage;
        this.painter = painter;
        var handlerProxy = (!_core_env_js__WEBPACK_IMPORTED_MODULE_4__["default"].node && !_core_env_js__WEBPACK_IMPORTED_MODULE_4__["default"].worker && !ssrMode)
            ? new _dom_HandlerProxy_js__WEBPACK_IMPORTED_MODULE_5__["default"](painter.getViewportRoot(), painter.root)
            : null;
        var useCoarsePointer = opts.useCoarsePointer;
        var usePointerSize = (useCoarsePointer == null || useCoarsePointer === 'auto')
            ? _core_env_js__WEBPACK_IMPORTED_MODULE_4__["default"].touchEventsSupported
            : !!useCoarsePointer;
        var defaultPointerSize = 44;
        var pointerSize;
        if (usePointerSize) {
            pointerSize = _core_util_js__WEBPACK_IMPORTED_MODULE_3__.retrieve2(opts.pointerSize, defaultPointerSize);
        }
        this.handler = new _Handler_js__WEBPACK_IMPORTED_MODULE_6__["default"](storage, painter, handlerProxy, painter.root, pointerSize);
        this.animation = new _animation_Animation_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
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
        var start = (0,_animation_Animation_js__WEBPACK_IMPORTED_MODULE_7__.getTime)();
        if (this._needsRefresh) {
            triggerRendered = true;
            this.refreshImmediately(fromInside);
        }
        if (this._needsRefreshHover) {
            triggerRendered = true;
            this.refreshHoverImmediately();
        }
        var end = (0,_animation_Animation_js__WEBPACK_IMPORTED_MODULE_7__.getTime)();
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
            if (roots[i] instanceof _graphic_Group_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
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
    var zr = new ZRender(_core_util_js__WEBPACK_IMPORTED_MODULE_3__.guid(), dom, opts);
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
var version = '5.6.1';
;


}),

}]);