(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3274"], {
99013: (function (module) {
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_624_643__) {

"use strict";

// EXPORTS
__nested_webpack_require_624_643__.d(__nested_webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_624_643__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_624_643__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_624_643__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_624_643__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_624_643__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_624_643__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_15750_15769__) {

var closest = __nested_webpack_require_15750_15769__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_19114_19133__) {

var is = __nested_webpack_require_19114_19133__(879);
var delegate = __nested_webpack_require_19114_19133__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_24496__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24496__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_24496__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_24496__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_24496__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_24496__.o(definition, key) && !__nested_webpack_require_24496__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_24496__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_24496__(686);
/******/ })()
.default;
});

}),
76469: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  registerMap: function() { return /* reexport */ core.registerMap; },
  List: function() { return /* reexport */ core.List; },
  helper: function() { return /* reexport */ core.helper; },
  disConnect: function() { return /* reexport */ core.disConnect; },
  getMap: function() { return /* reexport */ core.getMap; },
  ComponentView: function() { return /* reexport */ core.ComponentView; },
  registerPostInit: function() { return /* reexport */ core.registerPostInit; },
  Axis: function() { return /* reexport */ core.Axis; },
  dispose: function() { return /* reexport */ core.dispose; },
  color: function() { return /* reexport */ core.color; },
  registerTransform: function() { return /* reexport */ core.registerTransform; },
  registerProcessor: function() { return /* reexport */ core.registerProcessor; },
  registerCoordinateSystem: function() { return /* reexport */ core.registerCoordinateSystem; },
  registerUpdateLifecycle: function() { return /* reexport */ core.registerUpdateLifecycle; },
  registerLoading: function() { return /* reexport */ core.registerLoading; },
  getInstanceByDom: function() { return /* reexport */ core.getInstanceByDom; },
  ChartView: function() { return /* reexport */ core.ChartView; },
  throttle: function() { return /* reexport */ core.throttle; },
  registerVisual: function() { return /* reexport */ core.registerVisual; },
  registerLocale: function() { return /* reexport */ core.registerLocale; },
  registerPostUpdate: function() { return /* reexport */ core.registerPostUpdate; },
  dataTool: function() { return /* reexport */ core.dataTool; },
  setCanvasCreator: function() { return /* reexport */ core.setCanvasCreator; },
  dependencies: function() { return /* reexport */ core.dependencies; },
  PRIORITY: function() { return /* reexport */ core.PRIORITY; },
  vector: function() { return /* reexport */ core.vector; },
  use: function() { return /* reexport */ core.use; },
  zrUtil: function() { return /* reexport */ core.zrUtil; },
  Model: function() { return /* reexport */ core.Model; },
  graphic: function() { return /* reexport */ core.graphic; },
  registerAction: function() { return /* reexport */ core.registerAction; },
  registerLayout: function() { return /* reexport */ core.registerLayout; },
  env: function() { return /* reexport */ core.env; },
  registerTheme: function() { return /* reexport */ core.registerTheme; },
  extendComponentModel: function() { return /* reexport */ core.extendComponentModel; },
  extendComponentView: function() { return /* reexport */ core.extendComponentView; },
  parseGeoJson: function() { return /* reexport */ core.parseGeoJson; },
  innerDrawElementOnCanvas: function() { return /* reexport */ core.innerDrawElementOnCanvas; },
  init: function() { return /* reexport */ core.init; },
  time: function() { return /* reexport */ core.time; },
  zrender: function() { return /* reexport */ core.zrender; },
  getCoordinateSystemDimensions: function() { return /* reexport */ core.getCoordinateSystemDimensions; },
  matrix: function() { return /* reexport */ core.matrix; },
  util: function() { return /* reexport */ core.util; },
  extendChartView: function() { return /* reexport */ core.extendChartView; },
  extendSeriesModel: function() { return /* reexport */ core.extendSeriesModel; },
  setPlatformAPI: function() { return /* reexport */ core.setPlatformAPI; },
  SeriesModel: function() { return /* reexport */ core.SeriesModel; },
  format: function() { return /* reexport */ core.format; },
  ComponentModel: function() { return /* reexport */ core.ComponentModel; },
  registerPreprocessor: function() { return /* reexport */ core.registerPreprocessor; },
  parseGeoJSON: function() { return /* reexport */ core.parseGeoJSON; },
  getInstanceById: function() { return /* reexport */ core.getInstanceById; },
  disconnect: function() { return /* reexport */ core.disconnect; },
  connect: function() { return /* reexport */ core.connect; },
  number: function() { return /* reexport */ core.number; },
  version: function() { return /* reexport */ core.version; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(70392);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/export/core.js + 7 modules
var core = __webpack_require__(67047);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/renderer/installCanvasRenderer.js
var installCanvasRenderer = __webpack_require__(59551);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/renderer/installSVGRenderer.js
var installSVGRenderer = __webpack_require__(62743);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/install.js + 4 modules
var install = __webpack_require__(77317);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/barGrid.js
var barGrid = __webpack_require__(12105);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataSample.js
var dataSample = __webpack_require__(24488);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(91956);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var BaseBarSeries_BaseBarSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BaseBarSeriesModel, _super);
  function BaseBarSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BaseBarSeriesModel.type;
    return _this;
  }
  BaseBarSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesData["default"])(null, this, {
      useEncodeDefaulter: true
    });
  };
  BaseBarSeriesModel.prototype.getMarkerPosition = function (value, dims, startingAtTick) {
    var coordSys = this.coordinateSystem;
    if (coordSys && coordSys.clampData) {
      // PENDING if clamp ?
      var clampData_1 = coordSys.clampData(value);
      var pt_1 = coordSys.dataToPoint(clampData_1);
      if (startingAtTick) {
        (0,util.each)(coordSys.getAxes(), function (axis, idx) {
          // If axis type is category, use tick coords instead
          if (axis.type === 'category' && dims != null) {
            var tickCoords = axis.getTicksCoords();
            var alignTicksWithLabel = axis.getTickModel().get('alignWithLabel');
            var targetTickId = clampData_1[idx];
            // The index of rightmost tick of markArea is 1 larger than x1/y1 index
            var isEnd = dims[idx] === 'x1' || dims[idx] === 'y1';
            if (isEnd && !alignTicksWithLabel) {
              targetTickId += 1;
            }
            // The only contains one tick, tickCoords is
            // like [{coord: 0, tickValue: 0}, {coord: 0}]
            // to the length should always be larger than 1
            if (tickCoords.length < 2) {
              return;
            } else if (tickCoords.length === 2) {
              // The left value and right value of the axis are
              // the same. coord is 0 in both items. Use the max
              // value of the axis as the coord
              pt_1[idx] = axis.toGlobalCoord(axis.getExtent()[isEnd ? 1 : 0]);
              return;
            }
            var leftCoord = void 0;
            var coord = void 0;
            var stepTickValue = 1;
            for (var i = 0; i < tickCoords.length; i++) {
              var tickCoord = tickCoords[i].coord;
              // The last item of tickCoords doesn't contain
              // tickValue
              var tickValue = i === tickCoords.length - 1 ? tickCoords[i - 1].tickValue + stepTickValue : tickCoords[i].tickValue;
              if (tickValue === targetTickId) {
                coord = tickCoord;
                break;
              } else if (tickValue < targetTickId) {
                leftCoord = tickCoord;
              } else if (leftCoord != null && tickValue > targetTickId) {
                coord = (tickCoord + leftCoord) / 2;
                break;
              }
              if (i === 1) {
                // Here we assume the step of category axes is
                // the same
                stepTickValue = tickValue - tickCoords[0].tickValue;
              }
            }
            if (coord == null) {
              if (!leftCoord) {
                // targetTickId is smaller than all tick ids in the
                // visible area, use the leftmost tick coord
                coord = tickCoords[0].coord;
              } else if (leftCoord) {
                // targetTickId is larger than all tick ids in the
                // visible area, use the rightmost tick coord
                coord = tickCoords[tickCoords.length - 1].coord;
              }
            }
            pt_1[idx] = axis.toGlobalCoord(coord);
          }
        });
      } else {
        var data = this.getData();
        var offset = data.getLayout('offset');
        var size = data.getLayout('size');
        var offsetIndex = coordSys.getBaseAxis().isHorizontal() ? 0 : 1;
        pt_1[offsetIndex] += offset + size / 2;
      }
      return pt_1;
    }
    return [NaN, NaN];
  };
  BaseBarSeriesModel.type = 'series.__base_bar__';
  BaseBarSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    coordinateSystem: 'cartesian2d',
    legendHoverLink: true,
    // stack: null
    // Cartesian coordinate system
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    barMinHeight: 0,
    barMinAngle: 0,
    // cursor: null,
    large: false,
    largeThreshold: 400,
    progressive: 3e3,
    progressiveChunkMode: 'mod'
  };
  return BaseBarSeriesModel;
}(Series["default"]);
Series["default"].registerClass(BaseBarSeries_BaseBarSeriesModel);
/* ESM default export */ var BaseBarSeries = (BaseBarSeries_BaseBarSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(95202);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BarSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var BarSeries_BarSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BarSeriesModel, _super);
  function BarSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BarSeriesModel.type;
    return _this;
  }
  BarSeriesModel.prototype.getInitialData = function () {
    return (0,createSeriesData["default"])(null, this, {
      useEncodeDefaulter: true,
      createInvertedIndices: !!this.get('realtimeSort', true) || null
    });
  };
  /**
   * @override
   */
  BarSeriesModel.prototype.getProgressive = function () {
    // Do not support progressive in normal mode.
    return this.get('large') ? this.get('progressive') : false;
  };
  /**
   * @override
   */
  BarSeriesModel.prototype.getProgressiveThreshold = function () {
    // Do not support progressive in normal mode.
    var progressiveThreshold = this.get('progressiveThreshold');
    var largeThreshold = this.get('largeThreshold');
    if (largeThreshold > progressiveThreshold) {
      progressiveThreshold = largeThreshold;
    }
    return progressiveThreshold;
  };
  BarSeriesModel.prototype.brushSelector = function (dataIndex, data, selectors) {
    return selectors.rect(data.getItemLayout(dataIndex));
  };
  BarSeriesModel.type = 'series.bar';
  BarSeriesModel.dependencies = ['grid', 'polar'];
  BarSeriesModel.defaultOption = (0,component.inheritDefaultOption)(BaseBarSeries.defaultOption, {
    // If clipped
    // Only available on cartesian2d
    clip: true,
    roundCap: false,
    showBackground: false,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.2)',
      borderColor: null,
      borderWidth: 0,
      borderType: 'solid',
      borderRadius: 0,
      shadowBlur: 0,
      shadowColor: null,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1
    },
    select: {
      itemStyle: {
        borderColor: '#212121'
      }
    },
    realtimeSort: false
  });
  return BarSeriesModel;
}(BaseBarSeries);
/* ESM default export */ var BarSeries = (BarSeries_BarSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(98289);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(59524);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(92741);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/shape/sausage.js
var sausage = __webpack_require__(35083);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(63248);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/labelHelper.js
var labelHelper = __webpack_require__(8169);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/sectorLabel.js
var sectorLabel = __webpack_require__(43901);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/sectorHelper.js
var sectorHelper = __webpack_require__(55549);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BarView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


















var mathMax = Math.max;
var mathMin = Math.min;
function getClipArea(coord, data) {
  var coordSysClipArea = coord.getArea && coord.getArea();
  if ((0,CoordinateSystem.isCoordinateSystemType)(coord, 'cartesian2d')) {
    var baseAxis = coord.getBaseAxis();
    // When boundaryGap is false or using time axis. bar may exceed the grid.
    // We should not clip this part.
    // See test/bar2.html
    if (baseAxis.type !== 'category' || !baseAxis.onBand) {
      var expandWidth = data.getLayout('bandWidth');
      if (baseAxis.isHorizontal()) {
        coordSysClipArea.x -= expandWidth;
        coordSysClipArea.width += expandWidth * 2;
      } else {
        coordSysClipArea.y -= expandWidth;
        coordSysClipArea.height += expandWidth * 2;
      }
    }
  }
  return coordSysClipArea;
}
var BarView_BarView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BarView, _super);
  function BarView() {
    var _this = _super.call(this) || this;
    _this.type = BarView.type;
    _this._isFirstFrame = true;
    return _this;
  }
  BarView.prototype.render = function (seriesModel, ecModel, api, payload) {
    this._model = seriesModel;
    this._removeOnRenderedListener(api);
    this._updateDrawMode(seriesModel);
    var coordinateSystemType = seriesModel.get('coordinateSystem');
    if (coordinateSystemType === 'cartesian2d' || coordinateSystemType === 'polar') {
      // Clear previously rendered progressive elements.
      this._progressiveEls = null;
      this._isLargeDraw ? this._renderLarge(seriesModel, ecModel, api) : this._renderNormal(seriesModel, ecModel, api, payload);
    } else if (false) {}
  };
  BarView.prototype.incrementalPrepareRender = function (seriesModel) {
    this._clear();
    this._updateDrawMode(seriesModel);
    // incremental also need to clip, otherwise might be overlow.
    // But must not set clip in each frame, otherwise all of the children will be marked redraw.
    this._updateLargeClip(seriesModel);
  };
  BarView.prototype.incrementalRender = function (params, seriesModel) {
    // Reset
    this._progressiveEls = [];
    // Do not support progressive in normal mode.
    this._incrementalRenderLarge(params, seriesModel);
  };
  BarView.prototype.eachRendered = function (cb) {
    (0,graphic.traverseElements)(this._progressiveEls || this.group, cb);
  };
  BarView.prototype._updateDrawMode = function (seriesModel) {
    var isLargeDraw = seriesModel.pipelineContext.large;
    if (this._isLargeDraw == null || isLargeDraw !== this._isLargeDraw) {
      this._isLargeDraw = isLargeDraw;
      this._clear();
    }
  };
  BarView.prototype._renderNormal = function (seriesModel, ecModel, api, payload) {
    var group = this.group;
    var data = seriesModel.getData();
    var oldData = this._data;
    var coord = seriesModel.coordinateSystem;
    var baseAxis = coord.getBaseAxis();
    var isHorizontalOrRadial;
    if (coord.type === 'cartesian2d') {
      isHorizontalOrRadial = baseAxis.isHorizontal();
    } else if (coord.type === 'polar') {
      isHorizontalOrRadial = baseAxis.dim === 'angle';
    }
    var animationModel = seriesModel.isAnimationEnabled() ? seriesModel : null;
    var realtimeSortCfg = shouldRealtimeSort(seriesModel, coord);
    if (realtimeSortCfg) {
      this._enableRealtimeSort(realtimeSortCfg, data, api);
    }
    var needsClip = seriesModel.get('clip', true) || realtimeSortCfg;
    var coordSysClipArea = getClipArea(coord, data);
    // If there is clipPath created in large mode. Remove it.
    group.removeClipPath();
    // We don't use clipPath in normal mode because we needs a perfect animation
    // And don't want the label are clipped.
    var roundCap = seriesModel.get('roundCap', true);
    var drawBackground = seriesModel.get('showBackground', true);
    var backgroundModel = seriesModel.getModel('backgroundStyle');
    var barBorderRadius = backgroundModel.get('borderRadius') || 0;
    var bgEls = [];
    var oldBgEls = this._backgroundEls;
    var isInitSort = payload && payload.isInitSort;
    var isChangeOrder = payload && payload.type === 'changeAxisOrder';
    function createBackground(dataIndex) {
      var bgLayout = getLayout[coord.type](data, dataIndex);
      var bgEl = createBackgroundEl(coord, isHorizontalOrRadial, bgLayout);
      bgEl.useStyle(backgroundModel.getItemStyle());
      // Only cartesian2d support borderRadius.
      if (coord.type === 'cartesian2d') {
        bgEl.setShape('r', barBorderRadius);
      } else {
        bgEl.setShape('cornerRadius', barBorderRadius);
      }
      bgEls[dataIndex] = bgEl;
      return bgEl;
    }
    ;
    data.diff(oldData).add(function (dataIndex) {
      var itemModel = data.getItemModel(dataIndex);
      var layout = getLayout[coord.type](data, dataIndex, itemModel);
      if (drawBackground) {
        createBackground(dataIndex);
      }
      // If dataZoom in filteMode: 'empty', the baseValue can be set as NaN in "axisProxy".
      if (!data.hasValue(dataIndex) || !isValidLayout[coord.type](layout)) {
        return;
      }
      var isClipped = false;
      if (needsClip) {
        // Clip will modify the layout params.
        // And return a boolean to determine if the shape are fully clipped.
        isClipped = clip[coord.type](coordSysClipArea, layout);
      }
      var el = elementCreator[coord.type](seriesModel, data, dataIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, false, roundCap);
      if (realtimeSortCfg) {
        /**
         * Force label animation because even if the element is
         * ignored because it's clipped, it may not be clipped after
         * changing order. Then, if not using forceLabelAnimation,
         * the label animation was never started, in which case,
         * the label will be the final value and doesn't have label
         * animation.
         */
        el.forceLabelAnimation = true;
      }
      updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
      if (isInitSort) {
        el.attr({
          shape: layout
        });
      } else if (realtimeSortCfg) {
        updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, dataIndex, isHorizontalOrRadial, false, false);
      } else {
        (0,basicTransition.initProps)(el, {
          shape: layout
        }, seriesModel, dataIndex);
      }
      data.setItemGraphicEl(dataIndex, el);
      group.add(el);
      el.ignore = isClipped;
    }).update(function (newIndex, oldIndex) {
      var itemModel = data.getItemModel(newIndex);
      var layout = getLayout[coord.type](data, newIndex, itemModel);
      if (drawBackground) {
        var bgEl = void 0;
        if (oldBgEls.length === 0) {
          bgEl = createBackground(oldIndex);
        } else {
          bgEl = oldBgEls[oldIndex];
          bgEl.useStyle(backgroundModel.getItemStyle());
          // Only cartesian2d support borderRadius.
          if (coord.type === 'cartesian2d') {
            bgEl.setShape('r', barBorderRadius);
          } else {
            bgEl.setShape('cornerRadius', barBorderRadius);
          }
          bgEls[newIndex] = bgEl;
        }
        var bgLayout = getLayout[coord.type](data, newIndex);
        var shape = createBackgroundShape(isHorizontalOrRadial, bgLayout, coord);
        (0,basicTransition.updateProps)(bgEl, {
          shape: shape
        }, animationModel, newIndex);
      }
      var el = oldData.getItemGraphicEl(oldIndex);
      if (!data.hasValue(newIndex) || !isValidLayout[coord.type](layout)) {
        group.remove(el);
        return;
      }
      var isClipped = false;
      if (needsClip) {
        isClipped = clip[coord.type](coordSysClipArea, layout);
        if (isClipped) {
          group.remove(el);
        }
      }
      if (!el) {
        el = elementCreator[coord.type](seriesModel, data, newIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, !!el, roundCap);
      } else {
        (0,basicTransition.saveOldStyle)(el);
      }
      if (realtimeSortCfg) {
        el.forceLabelAnimation = true;
      }
      if (isChangeOrder) {
        var textEl = el.getTextContent();
        if (textEl) {
          var labelInnerStore = (0,labelStyle.labelInner)(textEl);
          if (labelInnerStore.prevValue != null) {
            /**
             * Set preValue to be value so that no new label
             * should be started, otherwise, it will take a full
             * `animationDurationUpdate` time to finish the
             * animation, which is not expected.
             */
            labelInnerStore.prevValue = labelInnerStore.value;
          }
        }
      }
      // Not change anything if only order changed.
      // Especially not change label.
      else {
        updateStyle(el, data, newIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
      }
      if (isInitSort) {
        el.attr({
          shape: layout
        });
      } else if (realtimeSortCfg) {
        updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, newIndex, isHorizontalOrRadial, true, isChangeOrder);
      } else {
        (0,basicTransition.updateProps)(el, {
          shape: layout
        }, seriesModel, newIndex, null);
      }
      data.setItemGraphicEl(newIndex, el);
      el.ignore = isClipped;
      group.add(el);
    }).remove(function (dataIndex) {
      var el = oldData.getItemGraphicEl(dataIndex);
      el && (0,basicTransition.removeElementWithFadeOut)(el, seriesModel, dataIndex);
    }).execute();
    var bgGroup = this._backgroundGroup || (this._backgroundGroup = new Group["default"]());
    bgGroup.removeAll();
    for (var i = 0; i < bgEls.length; ++i) {
      bgGroup.add(bgEls[i]);
    }
    group.add(bgGroup);
    this._backgroundEls = bgEls;
    this._data = data;
  };
  BarView.prototype._renderLarge = function (seriesModel, ecModel, api) {
    this._clear();
    createLarge(seriesModel, this.group);
    this._updateLargeClip(seriesModel);
  };
  BarView.prototype._incrementalRenderLarge = function (params, seriesModel) {
    this._removeBackground();
    createLarge(seriesModel, this.group, this._progressiveEls, true);
  };
  BarView.prototype._updateLargeClip = function (seriesModel) {
    // Use clipPath in large mode.
    var clipPath = seriesModel.get('clip', true) && (0,createClipPathFromCoordSys.createClipPath)(seriesModel.coordinateSystem, false, seriesModel);
    var group = this.group;
    if (clipPath) {
      group.setClipPath(clipPath);
    } else {
      group.removeClipPath();
    }
  };
  BarView.prototype._enableRealtimeSort = function (realtimeSortCfg, data, api) {
    var _this = this;
    // If no data in the first frame, wait for data to initSort
    if (!data.count()) {
      return;
    }
    var baseAxis = realtimeSortCfg.baseAxis;
    if (this._isFirstFrame) {
      this._dispatchInitSort(data, realtimeSortCfg, api);
      this._isFirstFrame = false;
    } else {
      var orderMapping_1 = function (idx) {
        var el = data.getItemGraphicEl(idx);
        var shape = el && el.shape;
        return shape &&
        // The result should be consistent with the initial sort by data value.
        // Do not support the case that both positive and negative exist.
        Math.abs(baseAxis.isHorizontal() ? shape.height : shape.width)
        // If data is NaN, shape.xxx may be NaN, so use || 0 here in case
        || 0;
      };
      this._onRendered = function () {
        _this._updateSortWithinSameData(data, orderMapping_1, baseAxis, api);
      };
      api.getZr().on('rendered', this._onRendered);
    }
  };
  BarView.prototype._dataSort = function (data, baseAxis, orderMapping) {
    var info = [];
    data.each(data.mapDimension(baseAxis.dim), function (ordinalNumber, dataIdx) {
      var mappedValue = orderMapping(dataIdx);
      mappedValue = mappedValue == null ? NaN : mappedValue;
      info.push({
        dataIndex: dataIdx,
        mappedValue: mappedValue,
        ordinalNumber: ordinalNumber
      });
    });
    info.sort(function (a, b) {
      // If NaN, it will be treated as min val.
      return b.mappedValue - a.mappedValue;
    });
    return {
      ordinalNumbers: (0,util.map)(info, function (item) {
        return item.ordinalNumber;
      })
    };
  };
  BarView.prototype._isOrderChangedWithinSameData = function (data, orderMapping, baseAxis) {
    var scale = baseAxis.scale;
    var ordinalDataDim = data.mapDimension(baseAxis.dim);
    var lastValue = Number.MAX_VALUE;
    for (var tickNum = 0, len = scale.getOrdinalMeta().categories.length; tickNum < len; ++tickNum) {
      var rawIdx = data.rawIndexOf(ordinalDataDim, scale.getRawOrdinalNumber(tickNum));
      var value = rawIdx < 0
      // If some tick have no bar, the tick will be treated as min.
      ? Number.MIN_VALUE
      // PENDING: if dataZoom on baseAxis exits, is it a performance issue?
      : orderMapping(data.indexOfRawIndex(rawIdx));
      if (value > lastValue) {
        return true;
      }
      lastValue = value;
    }
    return false;
  };
  /*
   * Consider the case when A and B changed order, whose representing
   * bars are both out of sight, we don't wish to trigger reorder action
   * as long as the order in the view doesn't change.
   */
  BarView.prototype._isOrderDifferentInView = function (orderInfo, baseAxis) {
    var scale = baseAxis.scale;
    var extent = scale.getExtent();
    var tickNum = Math.max(0, extent[0]);
    var tickMax = Math.min(extent[1], scale.getOrdinalMeta().categories.length - 1);
    for (; tickNum <= tickMax; ++tickNum) {
      if (orderInfo.ordinalNumbers[tickNum] !== scale.getRawOrdinalNumber(tickNum)) {
        return true;
      }
    }
  };
  BarView.prototype._updateSortWithinSameData = function (data, orderMapping, baseAxis, api) {
    if (!this._isOrderChangedWithinSameData(data, orderMapping, baseAxis)) {
      return;
    }
    var sortInfo = this._dataSort(data, baseAxis, orderMapping);
    if (this._isOrderDifferentInView(sortInfo, baseAxis)) {
      this._removeOnRenderedListener(api);
      api.dispatchAction({
        type: 'changeAxisOrder',
        componentType: baseAxis.dim + 'Axis',
        axisId: baseAxis.index,
        sortInfo: sortInfo
      });
    }
  };
  BarView.prototype._dispatchInitSort = function (data, realtimeSortCfg, api) {
    var baseAxis = realtimeSortCfg.baseAxis;
    var sortResult = this._dataSort(data, baseAxis, function (dataIdx) {
      return data.get(data.mapDimension(realtimeSortCfg.otherAxis.dim), dataIdx);
    });
    api.dispatchAction({
      type: 'changeAxisOrder',
      componentType: baseAxis.dim + 'Axis',
      isInitSort: true,
      axisId: baseAxis.index,
      sortInfo: sortResult
    });
  };
  BarView.prototype.remove = function (ecModel, api) {
    this._clear(this._model);
    this._removeOnRenderedListener(api);
  };
  BarView.prototype.dispose = function (ecModel, api) {
    this._removeOnRenderedListener(api);
  };
  BarView.prototype._removeOnRenderedListener = function (api) {
    if (this._onRendered) {
      api.getZr().off('rendered', this._onRendered);
      this._onRendered = null;
    }
  };
  BarView.prototype._clear = function (model) {
    var group = this.group;
    var data = this._data;
    if (model && model.isAnimationEnabled() && data && !this._isLargeDraw) {
      this._removeBackground();
      this._backgroundEls = [];
      data.eachItemGraphicEl(function (el) {
        (0,basicTransition.removeElementWithFadeOut)(el, model, (0,innerStore.getECData)(el).dataIndex);
      });
    } else {
      group.removeAll();
    }
    this._data = null;
    this._isFirstFrame = true;
  };
  BarView.prototype._removeBackground = function () {
    this.group.remove(this._backgroundGroup);
    this._backgroundGroup = null;
  };
  BarView.type = 'bar';
  return BarView;
}(Chart["default"]);
var clip = {
  cartesian2d: function (coordSysBoundingRect, layout) {
    var signWidth = layout.width < 0 ? -1 : 1;
    var signHeight = layout.height < 0 ? -1 : 1;
    // Needs positive width and height
    if (signWidth < 0) {
      layout.x += layout.width;
      layout.width = -layout.width;
    }
    if (signHeight < 0) {
      layout.y += layout.height;
      layout.height = -layout.height;
    }
    var coordSysX2 = coordSysBoundingRect.x + coordSysBoundingRect.width;
    var coordSysY2 = coordSysBoundingRect.y + coordSysBoundingRect.height;
    var x = mathMax(layout.x, coordSysBoundingRect.x);
    var x2 = mathMin(layout.x + layout.width, coordSysX2);
    var y = mathMax(layout.y, coordSysBoundingRect.y);
    var y2 = mathMin(layout.y + layout.height, coordSysY2);
    var xClipped = x2 < x;
    var yClipped = y2 < y;
    // When xClipped or yClipped, the element will be marked as `ignore`.
    // But we should also place the element at the edge of the coord sys bounding rect.
    // Because if data changed and the bar shows again, its transition animation
    // will begin at this place.
    layout.x = xClipped && x > coordSysX2 ? x2 : x;
    layout.y = yClipped && y > coordSysY2 ? y2 : y;
    layout.width = xClipped ? 0 : x2 - x;
    layout.height = yClipped ? 0 : y2 - y;
    // Reverse back
    if (signWidth < 0) {
      layout.x += layout.width;
      layout.width = -layout.width;
    }
    if (signHeight < 0) {
      layout.y += layout.height;
      layout.height = -layout.height;
    }
    return xClipped || yClipped;
  },
  polar: function (coordSysClipArea, layout) {
    var signR = layout.r0 <= layout.r ? 1 : -1;
    // Make sure r is larger than r0
    if (signR < 0) {
      var tmp = layout.r;
      layout.r = layout.r0;
      layout.r0 = tmp;
    }
    var r = mathMin(layout.r, coordSysClipArea.r);
    var r0 = mathMax(layout.r0, coordSysClipArea.r0);
    layout.r = r;
    layout.r0 = r0;
    var clipped = r - r0 < 0;
    // Reverse back
    if (signR < 0) {
      var tmp = layout.r;
      layout.r = layout.r0;
      layout.r0 = tmp;
    }
    return clipped;
  }
};
var elementCreator = {
  cartesian2d: function (seriesModel, data, newIndex, layout, isHorizontal, animationModel, axisModel, isUpdate, roundCap) {
    var rect = new Rect["default"]({
      shape: (0,util.extend)({}, layout),
      z2: 1
    });
    rect.__dataIndex = newIndex;
    rect.name = 'item';
    if (animationModel) {
      var rectShape = rect.shape;
      var animateProperty = isHorizontal ? 'height' : 'width';
      rectShape[animateProperty] = 0;
    }
    return rect;
  },
  polar: function (seriesModel, data, newIndex, layout, isRadial, animationModel, axisModel, isUpdate, roundCap) {
    var ShapeClass = !isRadial && roundCap ? sausage["default"] : Sector["default"];
    var sector = new ShapeClass({
      shape: layout,
      z2: 1
    });
    sector.name = 'item';
    var positionMap = createPolarPositionMapping(isRadial);
    sector.calculateTextPosition = (0,sectorLabel.createSectorCalculateTextPosition)(positionMap, {
      isRoundCap: ShapeClass === sausage["default"]
    });
    // Animation
    if (animationModel) {
      var sectorShape = sector.shape;
      var animateProperty = isRadial ? 'r' : 'endAngle';
      var animateTarget = {};
      sectorShape[animateProperty] = isRadial ? layout.r0 : layout.startAngle;
      animateTarget[animateProperty] = layout[animateProperty];
      (isUpdate ? basicTransition.updateProps : basicTransition.initProps)(sector, {
        shape: animateTarget
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, animationModel);
    }
    return sector;
  }
};
function shouldRealtimeSort(seriesModel, coordSys) {
  var realtimeSortOption = seriesModel.get('realtimeSort', true);
  var baseAxis = coordSys.getBaseAxis();
  if (false) {}
  if (realtimeSortOption && baseAxis.type === 'category' && coordSys.type === 'cartesian2d') {
    return {
      baseAxis: baseAxis,
      otherAxis: coordSys.getOtherAxis(baseAxis)
    };
  }
}
function updateRealtimeAnimation(realtimeSortCfg, seriesAnimationModel, el, layout, newIndex, isHorizontal, isUpdate, isChangeOrder) {
  var seriesTarget;
  var axisTarget;
  if (isHorizontal) {
    axisTarget = {
      x: layout.x,
      width: layout.width
    };
    seriesTarget = {
      y: layout.y,
      height: layout.height
    };
  } else {
    axisTarget = {
      y: layout.y,
      height: layout.height
    };
    seriesTarget = {
      x: layout.x,
      width: layout.width
    };
  }
  if (!isChangeOrder) {
    // Keep the original growth animation if only axis order changed.
    // Not start a new animation.
    (isUpdate ? basicTransition.updateProps : basicTransition.initProps)(el, {
      shape: seriesTarget
    }, seriesAnimationModel, newIndex, null);
  }
  var axisAnimationModel = seriesAnimationModel ? realtimeSortCfg.baseAxis.model : null;
  (isUpdate ? basicTransition.updateProps : basicTransition.initProps)(el, {
    shape: axisTarget
  }, axisAnimationModel, newIndex);
}
function checkPropertiesNotValid(obj, props) {
  for (var i = 0; i < props.length; i++) {
    if (!isFinite(obj[props[i]])) {
      return true;
    }
  }
  return false;
}
var rectPropties = ['x', 'y', 'width', 'height'];
var polarPropties = ['cx', 'cy', 'r', 'startAngle', 'endAngle'];
var isValidLayout = {
  cartesian2d: function (layout) {
    return !checkPropertiesNotValid(layout, rectPropties);
  },
  polar: function (layout) {
    return !checkPropertiesNotValid(layout, polarPropties);
  }
};
var getLayout = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function (data, dataIndex, itemModel) {
    var layout = data.getItemLayout(dataIndex);
    var fixedLineWidth = itemModel ? getLineWidth(itemModel, layout) : 0;
    // fix layout with lineWidth
    var signX = layout.width > 0 ? 1 : -1;
    var signY = layout.height > 0 ? 1 : -1;
    return {
      x: layout.x + signX * fixedLineWidth / 2,
      y: layout.y + signY * fixedLineWidth / 2,
      width: layout.width - signX * fixedLineWidth,
      height: layout.height - signY * fixedLineWidth
    };
  },
  polar: function (data, dataIndex, itemModel) {
    var layout = data.getItemLayout(dataIndex);
    return {
      cx: layout.cx,
      cy: layout.cy,
      r0: layout.r0,
      r: layout.r,
      startAngle: layout.startAngle,
      endAngle: layout.endAngle,
      clockwise: layout.clockwise
    };
  }
};
function isZeroOnPolar(layout) {
  return layout.startAngle != null && layout.endAngle != null && layout.startAngle === layout.endAngle;
}
function createPolarPositionMapping(isRadial) {
  return function (isRadial) {
    var arcOrAngle = isRadial ? 'Arc' : 'Angle';
    return function (position) {
      switch (position) {
        case 'start':
        case 'insideStart':
        case 'end':
        case 'insideEnd':
          return position + arcOrAngle;
        default:
          return position;
      }
    };
  }(isRadial);
}
function updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, isPolar) {
  var style = data.getItemVisual(dataIndex, 'style');
  if (!isPolar) {
    var borderRadius = itemModel.get(['itemStyle', 'borderRadius']) || 0;
    el.setShape('r', borderRadius);
  } else if (!seriesModel.get('roundCap')) {
    var sectorShape = el.shape;
    var cornerRadius = (0,sectorHelper.getSectorCornerRadius)(itemModel.getModel('itemStyle'), sectorShape, true);
    (0,util.extend)(sectorShape, cornerRadius);
    el.setShape(sectorShape);
  }
  el.useStyle(style);
  var cursorStyle = itemModel.getShallow('cursor');
  cursorStyle && el.attr('cursor', cursorStyle);
  var labelPositionOutside = isPolar ? isHorizontalOrRadial ? layout.r >= layout.r0 ? 'endArc' : 'startArc' : layout.endAngle >= layout.startAngle ? 'endAngle' : 'startAngle' : isHorizontalOrRadial ? layout.height >= 0 ? 'bottom' : 'top' : layout.width >= 0 ? 'right' : 'left';
  var labelStatesModels = (0,labelStyle.getLabelStatesModels)(itemModel);
  (0,labelStyle.setLabelStyle)(el, labelStatesModels, {
    labelFetcher: seriesModel,
    labelDataIndex: dataIndex,
    defaultText: (0,labelHelper.getDefaultLabel)(seriesModel.getData(), dataIndex),
    inheritColor: style.fill,
    defaultOpacity: style.opacity,
    defaultOutsidePosition: labelPositionOutside
  });
  var label = el.getTextContent();
  if (isPolar && label) {
    var position = itemModel.get(['label', 'position']);
    el.textConfig.inside = position === 'middle' ? true : null;
    (0,sectorLabel.setSectorTextRotation)(el, position === 'outside' ? labelPositionOutside : position, createPolarPositionMapping(isHorizontalOrRadial), itemModel.get(['label', 'rotate']));
  }
  (0,labelStyle.setLabelValueAnimation)(label, labelStatesModels, seriesModel.getRawValue(dataIndex), function (value) {
    return (0,labelHelper.getDefaultInterpolatedLabel)(data, value);
  });
  var emphasisModel = itemModel.getModel(['emphasis']);
  (0,states.toggleHoverEmphasis)(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  (0,states.setStatesStylesFromModel)(el, itemModel);
  if (isZeroOnPolar(layout)) {
    el.style.fill = 'none';
    el.style.stroke = 'none';
    (0,util.each)(el.states, function (state) {
      if (state.style) {
        state.style.fill = state.style.stroke = 'none';
      }
    });
  }
}
// In case width or height are too small.
function getLineWidth(itemModel, rawLayout) {
  // Has no border.
  var borderColor = itemModel.get(['itemStyle', 'borderColor']);
  if (!borderColor || borderColor === 'none') {
    return 0;
  }
  var lineWidth = itemModel.get(['itemStyle', 'borderWidth']) || 0;
  // width or height may be NaN for empty data
  var width = isNaN(rawLayout.width) ? Number.MAX_VALUE : Math.abs(rawLayout.width);
  var height = isNaN(rawLayout.height) ? Number.MAX_VALUE : Math.abs(rawLayout.height);
  return Math.min(lineWidth, width, height);
}
var BarView_LagePathShape = /** @class */function () {
  function LagePathShape() {}
  return LagePathShape;
}();
var BarView_LargePath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LargePath, _super);
  function LargePath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'largeBar';
    return _this;
  }
  LargePath.prototype.getDefaultShape = function () {
    return new BarView_LagePathShape();
  };
  LargePath.prototype.buildPath = function (ctx, shape) {
    // Drawing lines is more efficient than drawing
    // a whole line or drawing rects.
    var points = shape.points;
    var baseDimIdx = this.baseDimIdx;
    var valueDimIdx = 1 - this.baseDimIdx;
    var startPoint = [];
    var size = [];
    var barWidth = this.barWidth;
    for (var i = 0; i < points.length; i += 3) {
      size[baseDimIdx] = barWidth;
      size[valueDimIdx] = points[i + 2];
      startPoint[baseDimIdx] = points[i + baseDimIdx];
      startPoint[valueDimIdx] = points[i + valueDimIdx];
      ctx.rect(startPoint[0], startPoint[1], size[0], size[1]);
    }
  };
  return LargePath;
}(Path["default"]);
function createLarge(seriesModel, group, progressiveEls, incremental) {
  // TODO support polar
  var data = seriesModel.getData();
  var baseDimIdx = data.getLayout('valueAxisHorizontal') ? 1 : 0;
  var largeDataIndices = data.getLayout('largeDataIndices');
  var barWidth = data.getLayout('size');
  var backgroundModel = seriesModel.getModel('backgroundStyle');
  var bgPoints = data.getLayout('largeBackgroundPoints');
  if (bgPoints) {
    var bgEl = new BarView_LargePath({
      shape: {
        points: bgPoints
      },
      incremental: !!incremental,
      silent: true,
      z2: 0
    });
    bgEl.baseDimIdx = baseDimIdx;
    bgEl.largeDataIndices = largeDataIndices;
    bgEl.barWidth = barWidth;
    bgEl.useStyle(backgroundModel.getItemStyle());
    group.add(bgEl);
    progressiveEls && progressiveEls.push(bgEl);
  }
  var el = new BarView_LargePath({
    shape: {
      points: data.getLayout('largePoints')
    },
    incremental: !!incremental,
    ignoreCoarsePointer: true,
    z2: 1
  });
  el.baseDimIdx = baseDimIdx;
  el.largeDataIndices = largeDataIndices;
  el.barWidth = barWidth;
  group.add(el);
  el.useStyle(data.getVisual('style'));
  // Stroke is rendered first to avoid overlapping with fill
  el.style.stroke = null;
  // Enable tooltip and user mouse/touch event handlers.
  (0,innerStore.getECData)(el).seriesIndex = seriesModel.seriesIndex;
  if (!seriesModel.get('silent')) {
    el.on('mousedown', largePathUpdateDataIndex);
    el.on('mousemove', largePathUpdateDataIndex);
  }
  progressiveEls && progressiveEls.push(el);
}
// Use throttle to avoid frequently traverse to find dataIndex.
var largePathUpdateDataIndex = (0,throttle.throttle)(function (event) {
  var largePath = this;
  var dataIndex = largePathFindDataIndex(largePath, event.offsetX, event.offsetY);
  (0,innerStore.getECData)(largePath).dataIndex = dataIndex >= 0 ? dataIndex : null;
}, 30, false);
function largePathFindDataIndex(largePath, x, y) {
  var baseDimIdx = largePath.baseDimIdx;
  var valueDimIdx = 1 - baseDimIdx;
  var points = largePath.shape.points;
  var largeDataIndices = largePath.largeDataIndices;
  var startPoint = [];
  var size = [];
  var barWidth = largePath.barWidth;
  for (var i = 0, len = points.length / 3; i < len; i++) {
    var ii = i * 3;
    size[baseDimIdx] = barWidth;
    size[valueDimIdx] = points[ii + 2];
    startPoint[baseDimIdx] = points[ii + baseDimIdx];
    startPoint[valueDimIdx] = points[ii + valueDimIdx];
    if (size[valueDimIdx] < 0) {
      startPoint[valueDimIdx] += size[valueDimIdx];
      size[valueDimIdx] = -size[valueDimIdx];
    }
    if (x >= startPoint[0] && x <= startPoint[0] + size[0] && y >= startPoint[1] && y <= startPoint[1] + size[1]) {
      return largeDataIndices[i];
    }
  }
  return -1;
}
function createBackgroundShape(isHorizontalOrRadial, layout, coord) {
  if ((0,CoordinateSystem.isCoordinateSystemType)(coord, 'cartesian2d')) {
    var rectShape = layout;
    var coordLayout = coord.getArea();
    return {
      x: isHorizontalOrRadial ? rectShape.x : coordLayout.x,
      y: isHorizontalOrRadial ? coordLayout.y : rectShape.y,
      width: isHorizontalOrRadial ? rectShape.width : coordLayout.width,
      height: isHorizontalOrRadial ? coordLayout.height : rectShape.height
    };
  } else {
    var coordLayout = coord.getArea();
    var sectorShape = layout;
    return {
      cx: coordLayout.cx,
      cy: coordLayout.cy,
      r0: isHorizontalOrRadial ? coordLayout.r0 : sectorShape.r0,
      r: isHorizontalOrRadial ? coordLayout.r : sectorShape.r,
      startAngle: isHorizontalOrRadial ? sectorShape.startAngle : 0,
      endAngle: isHorizontalOrRadial ? sectorShape.endAngle : Math.PI * 2
    };
  }
}
function createBackgroundEl(coord, isHorizontalOrRadial, layout) {
  var ElementClz = coord.type === 'polar' ? Sector["default"] : Rect["default"];
  return new ElementClz({
    shape: createBackgroundShape(isHorizontalOrRadial, layout, coord),
    silent: true,
    z2: 0
  });
}
/* ESM default export */ var bar_BarView = (BarView_BarView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(bar_BarView);
  registers.registerSeriesModel(BarSeries);
  registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT, util.curry(barGrid.layout, 'bar'));
  // Do layout after other overall layout, which can prepare some information.
  registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, (0,barGrid.createProgressiveLayout)('bar'));
  // Down sample after filter
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0,dataSample["default"])('bar'));
  /**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */
  registers.registerAction({
    type: 'changeAxisOrder',
    event: 'changeAxisOrder',
    update: 'update'
  }, function (payload, ecModel) {
    var componentType = payload.componentType || 'series';
    ecModel.eachComponent({
      mainType: componentType,
      query: payload
    }, function (componentModel) {
      if (payload.sortInfo) {
        componentModel.axis.setCategorySortInfo(payload.sortInfo);
      }
    });
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/pie/install.js + 4 modules
var pie_install = __webpack_require__(75385);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/scatter/install.js + 2 modules
var scatter_install = __webpack_require__(31992);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/radar/install.js + 4 modules
var radar_install = __webpack_require__(84886);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/map/install.js + 4 modules
var map_install = __webpack_require__(63210);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/install.js + 7 modules
var tree_install = __webpack_require__(94806);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/install.js + 6 modules
var treemap_install = __webpack_require__(79277);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/install.js + 15 modules
var graph_install = __webpack_require__(97706);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/gauge/install.js + 3 modules
var gauge_install = __webpack_require__(22110);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/funnel/install.js + 3 modules
var funnel_install = __webpack_require__(84740);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/parallel/install.js + 3 modules
var parallel_install = __webpack_require__(73876);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sankey/install.js + 4 modules
var sankey_install = __webpack_require__(24391);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/boxplot/install.js + 5 modules
var boxplot_install = __webpack_require__(37643);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/candlestick/install.js + 5 modules
var candlestick_install = __webpack_require__(97025);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/effectScatter/install.js + 3 modules
var effectScatter_install = __webpack_require__(37651);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/lines/install.js + 4 modules
var lines_install = __webpack_require__(98364);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/heatmap/install.js + 3 modules
var heatmap_install = __webpack_require__(62567);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Circle.js
var Circle = __webpack_require__(26768);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(31386);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/PictorialBarView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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












var BAR_BORDER_WIDTH_QUERY = ['itemStyle', 'borderWidth'];
// index: +isHorizontal
var LAYOUT_ATTRS = [{
  xy: 'x',
  wh: 'width',
  index: 0,
  posDesc: ['left', 'right']
}, {
  xy: 'y',
  wh: 'height',
  index: 1,
  posDesc: ['top', 'bottom']
}];
var pathForLineWidth = new Circle["default"]();
var PictorialBarView_PictorialBarView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PictorialBarView, _super);
  function PictorialBarView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PictorialBarView.type;
    return _this;
  }
  PictorialBarView.prototype.render = function (seriesModel, ecModel, api) {
    var group = this.group;
    var data = seriesModel.getData();
    var oldData = this._data;
    var cartesian = seriesModel.coordinateSystem;
    var baseAxis = cartesian.getBaseAxis();
    var isHorizontal = baseAxis.isHorizontal();
    var coordSysRect = cartesian.master.getRect();
    var opt = {
      ecSize: {
        width: api.getWidth(),
        height: api.getHeight()
      },
      seriesModel: seriesModel,
      coordSys: cartesian,
      coordSysExtent: [[coordSysRect.x, coordSysRect.x + coordSysRect.width], [coordSysRect.y, coordSysRect.y + coordSysRect.height]],
      isHorizontal: isHorizontal,
      valueDim: LAYOUT_ATTRS[+isHorizontal],
      categoryDim: LAYOUT_ATTRS[1 - +isHorizontal]
    };
    data.diff(oldData).add(function (dataIndex) {
      if (!data.hasValue(dataIndex)) {
        return;
      }
      var itemModel = getItemModel(data, dataIndex);
      var symbolMeta = getSymbolMeta(data, dataIndex, itemModel, opt);
      var bar = createBar(data, opt, symbolMeta);
      data.setItemGraphicEl(dataIndex, bar);
      group.add(bar);
      updateCommon(bar, opt, symbolMeta);
    }).update(function (newIndex, oldIndex) {
      var bar = oldData.getItemGraphicEl(oldIndex);
      if (!data.hasValue(newIndex)) {
        group.remove(bar);
        return;
      }
      var itemModel = getItemModel(data, newIndex);
      var symbolMeta = getSymbolMeta(data, newIndex, itemModel, opt);
      var pictorialShapeStr = getShapeStr(data, symbolMeta);
      if (bar && pictorialShapeStr !== bar.__pictorialShapeStr) {
        group.remove(bar);
        data.setItemGraphicEl(newIndex, null);
        bar = null;
      }
      if (bar) {
        updateBar(bar, opt, symbolMeta);
      } else {
        bar = createBar(data, opt, symbolMeta, true);
      }
      data.setItemGraphicEl(newIndex, bar);
      bar.__pictorialSymbolMeta = symbolMeta;
      // Add back
      group.add(bar);
      updateCommon(bar, opt, symbolMeta);
    }).remove(function (dataIndex) {
      var bar = oldData.getItemGraphicEl(dataIndex);
      bar && removeBar(oldData, dataIndex, bar.__pictorialSymbolMeta.animationModel, bar);
    }).execute();
    // Do clipping
    var clipPath = seriesModel.get('clip', true) ? (0,createClipPathFromCoordSys.createClipPath)(seriesModel.coordinateSystem, false, seriesModel) : null;
    if (clipPath) {
      group.setClipPath(clipPath);
    } else {
      group.removeClipPath();
    }
    this._data = data;
    return this.group;
  };
  PictorialBarView.prototype.remove = function (ecModel, api) {
    var group = this.group;
    var data = this._data;
    if (ecModel.get('animation')) {
      if (data) {
        data.eachItemGraphicEl(function (bar) {
          removeBar(data, (0,innerStore.getECData)(bar).dataIndex, ecModel, bar);
        });
      }
    } else {
      group.removeAll();
    }
  };
  PictorialBarView.type = 'pictorialBar';
  return PictorialBarView;
}(Chart["default"]);
// Set or calculate default value about symbol, and calculate layout info.
function getSymbolMeta(data, dataIndex, itemModel, opt) {
  var layout = data.getItemLayout(dataIndex);
  var symbolRepeat = itemModel.get('symbolRepeat');
  var symbolClip = itemModel.get('symbolClip');
  var symbolPosition = itemModel.get('symbolPosition') || 'start';
  var symbolRotate = itemModel.get('symbolRotate');
  var rotation = (symbolRotate || 0) * Math.PI / 180 || 0;
  var symbolPatternSize = itemModel.get('symbolPatternSize') || 2;
  var isAnimationEnabled = itemModel.isAnimationEnabled();
  var symbolMeta = {
    dataIndex: dataIndex,
    layout: layout,
    itemModel: itemModel,
    symbolType: data.getItemVisual(dataIndex, 'symbol') || 'circle',
    style: data.getItemVisual(dataIndex, 'style'),
    symbolClip: symbolClip,
    symbolRepeat: symbolRepeat,
    symbolRepeatDirection: itemModel.get('symbolRepeatDirection'),
    symbolPatternSize: symbolPatternSize,
    rotation: rotation,
    animationModel: isAnimationEnabled ? itemModel : null,
    hoverScale: isAnimationEnabled && itemModel.get(['emphasis', 'scale']),
    z2: itemModel.getShallow('z', true) || 0
  };
  prepareBarLength(itemModel, symbolRepeat, layout, opt, symbolMeta);
  prepareSymbolSize(data, dataIndex, layout, symbolRepeat, symbolClip, symbolMeta.boundingLength, symbolMeta.pxSign, symbolPatternSize, opt, symbolMeta);
  prepareLineWidth(itemModel, symbolMeta.symbolScale, rotation, opt, symbolMeta);
  var symbolSize = symbolMeta.symbolSize;
  var symbolOffset = (0,symbol.normalizeSymbolOffset)(itemModel.get('symbolOffset'), symbolSize);
  prepareLayoutInfo(itemModel, symbolSize, layout, symbolRepeat, symbolClip, symbolOffset, symbolPosition, symbolMeta.valueLineWidth, symbolMeta.boundingLength, symbolMeta.repeatCutLength, opt, symbolMeta);
  return symbolMeta;
}
// bar length can be negative.
function prepareBarLength(itemModel, symbolRepeat, layout, opt, outputSymbolMeta) {
  var valueDim = opt.valueDim;
  var symbolBoundingData = itemModel.get('symbolBoundingData');
  var valueAxis = opt.coordSys.getOtherAxis(opt.coordSys.getBaseAxis());
  var zeroPx = valueAxis.toGlobalCoord(valueAxis.dataToCoord(0));
  var pxSignIdx = 1 - +(layout[valueDim.wh] <= 0);
  var boundingLength;
  if (util.isArray(symbolBoundingData)) {
    var symbolBoundingExtent = [convertToCoordOnAxis(valueAxis, symbolBoundingData[0]) - zeroPx, convertToCoordOnAxis(valueAxis, symbolBoundingData[1]) - zeroPx];
    symbolBoundingExtent[1] < symbolBoundingExtent[0] && symbolBoundingExtent.reverse();
    boundingLength = symbolBoundingExtent[pxSignIdx];
  } else if (symbolBoundingData != null) {
    boundingLength = convertToCoordOnAxis(valueAxis, symbolBoundingData) - zeroPx;
  } else if (symbolRepeat) {
    boundingLength = opt.coordSysExtent[valueDim.index][pxSignIdx] - zeroPx;
  } else {
    boundingLength = layout[valueDim.wh];
  }
  outputSymbolMeta.boundingLength = boundingLength;
  if (symbolRepeat) {
    outputSymbolMeta.repeatCutLength = layout[valueDim.wh];
  }
  // if 'pxSign' means sign of pixel,  it can't be zero, or symbolScale will be zero
  // and when borderWidth be settled, the actual linewidth will be NaN
  var isXAxis = valueDim.xy === 'x';
  var isInverse = valueAxis.inverse;
  outputSymbolMeta.pxSign = isXAxis && !isInverse || !isXAxis && isInverse ? boundingLength >= 0 ? 1 : -1 : boundingLength > 0 ? 1 : -1;
}
function convertToCoordOnAxis(axis, value) {
  return axis.toGlobalCoord(axis.dataToCoord(axis.scale.parse(value)));
}
// Support ['100%', '100%']
function prepareSymbolSize(data, dataIndex, layout, symbolRepeat, symbolClip, boundingLength, pxSign, symbolPatternSize, opt, outputSymbolMeta) {
  var valueDim = opt.valueDim;
  var categoryDim = opt.categoryDim;
  var categorySize = Math.abs(layout[categoryDim.wh]);
  var symbolSize = data.getItemVisual(dataIndex, 'symbolSize');
  var parsedSymbolSize;
  if (util.isArray(symbolSize)) {
    parsedSymbolSize = symbolSize.slice();
  } else {
    if (symbolSize == null) {
      // will parse to number below
      parsedSymbolSize = ['100%', '100%'];
    } else {
      parsedSymbolSize = [symbolSize, symbolSize];
    }
  }
  // Note: percentage symbolSize (like '100%') do not consider lineWidth, because it is
  // to complicated to calculate real percent value if considering scaled lineWidth.
  // So the actual size will bigger than layout size if lineWidth is bigger than zero,
  // which can be tolerated in pictorial chart.
  parsedSymbolSize[categoryDim.index] = (0,number.parsePercent)(parsedSymbolSize[categoryDim.index], categorySize);
  parsedSymbolSize[valueDim.index] = (0,number.parsePercent)(parsedSymbolSize[valueDim.index], symbolRepeat ? categorySize : Math.abs(boundingLength));
  outputSymbolMeta.symbolSize = parsedSymbolSize;
  // If x or y is less than zero, show reversed shape.
  var symbolScale = outputSymbolMeta.symbolScale = [parsedSymbolSize[0] / symbolPatternSize, parsedSymbolSize[1] / symbolPatternSize];
  // Follow convention, 'right' and 'top' is the normal scale.
  symbolScale[valueDim.index] *= (opt.isHorizontal ? -1 : 1) * pxSign;
}
function prepareLineWidth(itemModel, symbolScale, rotation, opt, outputSymbolMeta) {
  // In symbols are drawn with scale, so do not need to care about the case that width
  // or height are too small. But symbol use strokeNoScale, where acture lineWidth should
  // be calculated.
  var valueLineWidth = itemModel.get(BAR_BORDER_WIDTH_QUERY) || 0;
  if (valueLineWidth) {
    pathForLineWidth.attr({
      scaleX: symbolScale[0],
      scaleY: symbolScale[1],
      rotation: rotation
    });
    pathForLineWidth.updateTransform();
    valueLineWidth /= pathForLineWidth.getLineScale();
    valueLineWidth *= symbolScale[opt.valueDim.index];
  }
  outputSymbolMeta.valueLineWidth = valueLineWidth || 0;
}
function prepareLayoutInfo(itemModel, symbolSize, layout, symbolRepeat, symbolClip, symbolOffset, symbolPosition, valueLineWidth, boundingLength, repeatCutLength, opt, outputSymbolMeta) {
  var categoryDim = opt.categoryDim;
  var valueDim = opt.valueDim;
  var pxSign = outputSymbolMeta.pxSign;
  var unitLength = Math.max(symbolSize[valueDim.index] + valueLineWidth, 0);
  var pathLen = unitLength;
  // Note: rotation will not effect the layout of symbols, because user may
  // want symbols to rotate on its center, which should not be translated
  // when rotating.
  if (symbolRepeat) {
    var absBoundingLength = Math.abs(boundingLength);
    var symbolMargin = util.retrieve(itemModel.get('symbolMargin'), '15%') + '';
    var hasEndGap = false;
    if (symbolMargin.lastIndexOf('!') === symbolMargin.length - 1) {
      hasEndGap = true;
      symbolMargin = symbolMargin.slice(0, symbolMargin.length - 1);
    }
    var symbolMarginNumeric = (0,number.parsePercent)(symbolMargin, symbolSize[valueDim.index]);
    var uLenWithMargin = Math.max(unitLength + symbolMarginNumeric * 2, 0);
    // When symbol margin is less than 0, margin at both ends will be subtracted
    // to ensure that all of the symbols will not be overflow the given area.
    var endFix = hasEndGap ? 0 : symbolMarginNumeric * 2;
    // Both final repeatTimes and final symbolMarginNumeric area calculated based on
    // boundingLength.
    var repeatSpecified = (0,number.isNumeric)(symbolRepeat);
    var repeatTimes = repeatSpecified ? symbolRepeat : toIntTimes((absBoundingLength + endFix) / uLenWithMargin);
    // Adjust calculate margin, to ensure each symbol is displayed
    // entirely in the given layout area.
    var mDiff = absBoundingLength - repeatTimes * unitLength;
    symbolMarginNumeric = mDiff / 2 / (hasEndGap ? repeatTimes : Math.max(repeatTimes - 1, 1));
    uLenWithMargin = unitLength + symbolMarginNumeric * 2;
    endFix = hasEndGap ? 0 : symbolMarginNumeric * 2;
    // Update repeatTimes when not all symbol will be shown.
    if (!repeatSpecified && symbolRepeat !== 'fixed') {
      repeatTimes = repeatCutLength ? toIntTimes((Math.abs(repeatCutLength) + endFix) / uLenWithMargin) : 0;
    }
    pathLen = repeatTimes * uLenWithMargin - endFix;
    outputSymbolMeta.repeatTimes = repeatTimes;
    outputSymbolMeta.symbolMargin = symbolMarginNumeric;
  }
  var sizeFix = pxSign * (pathLen / 2);
  var pathPosition = outputSymbolMeta.pathPosition = [];
  pathPosition[categoryDim.index] = layout[categoryDim.wh] / 2;
  pathPosition[valueDim.index] = symbolPosition === 'start' ? sizeFix : symbolPosition === 'end' ? boundingLength - sizeFix : boundingLength / 2; // 'center'
  if (symbolOffset) {
    pathPosition[0] += symbolOffset[0];
    pathPosition[1] += symbolOffset[1];
  }
  var bundlePosition = outputSymbolMeta.bundlePosition = [];
  bundlePosition[categoryDim.index] = layout[categoryDim.xy];
  bundlePosition[valueDim.index] = layout[valueDim.xy];
  var barRectShape = outputSymbolMeta.barRectShape = util.extend({}, layout);
  barRectShape[valueDim.wh] = pxSign * Math.max(Math.abs(layout[valueDim.wh]), Math.abs(pathPosition[valueDim.index] + sizeFix));
  barRectShape[categoryDim.wh] = layout[categoryDim.wh];
  var clipShape = outputSymbolMeta.clipShape = {};
  // Consider that symbol may be overflow layout rect.
  clipShape[categoryDim.xy] = -layout[categoryDim.xy];
  clipShape[categoryDim.wh] = opt.ecSize[categoryDim.wh];
  clipShape[valueDim.xy] = 0;
  clipShape[valueDim.wh] = layout[valueDim.wh];
}
function createPath(symbolMeta) {
  var symbolPatternSize = symbolMeta.symbolPatternSize;
  var path = (0,symbol.createSymbol)(
  // Consider texture img, make a big size.
  symbolMeta.symbolType, -symbolPatternSize / 2, -symbolPatternSize / 2, symbolPatternSize, symbolPatternSize);
  path.attr({
    culling: true
  });
  path.type !== 'image' && path.setStyle({
    strokeNoScale: true
  });
  return path;
}
function createOrUpdateRepeatSymbols(bar, opt, symbolMeta, isUpdate) {
  var bundle = bar.__pictorialBundle;
  var symbolSize = symbolMeta.symbolSize;
  var valueLineWidth = symbolMeta.valueLineWidth;
  var pathPosition = symbolMeta.pathPosition;
  var valueDim = opt.valueDim;
  var repeatTimes = symbolMeta.repeatTimes || 0;
  var index = 0;
  var unit = symbolSize[opt.valueDim.index] + valueLineWidth + symbolMeta.symbolMargin * 2;
  eachPath(bar, function (path) {
    path.__pictorialAnimationIndex = index;
    path.__pictorialRepeatTimes = repeatTimes;
    if (index < repeatTimes) {
      updateAttr(path, null, makeTarget(index), symbolMeta, isUpdate);
    } else {
      updateAttr(path, null, {
        scaleX: 0,
        scaleY: 0
      }, symbolMeta, isUpdate, function () {
        bundle.remove(path);
      });
    }
    // updateHoverAnimation(path, symbolMeta);
    index++;
  });
  for (; index < repeatTimes; index++) {
    var path = createPath(symbolMeta);
    path.__pictorialAnimationIndex = index;
    path.__pictorialRepeatTimes = repeatTimes;
    bundle.add(path);
    var target = makeTarget(index);
    updateAttr(path, {
      x: target.x,
      y: target.y,
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: target.scaleX,
      scaleY: target.scaleY,
      rotation: target.rotation
    }, symbolMeta, isUpdate);
  }
  function makeTarget(index) {
    var position = pathPosition.slice();
    // (start && pxSign > 0) || (end && pxSign < 0): i = repeatTimes - index
    // Otherwise: i = index;
    var pxSign = symbolMeta.pxSign;
    var i = index;
    if (symbolMeta.symbolRepeatDirection === 'start' ? pxSign > 0 : pxSign < 0) {
      i = repeatTimes - 1 - index;
    }
    position[valueDim.index] = unit * (i - repeatTimes / 2 + 0.5) + pathPosition[valueDim.index];
    return {
      x: position[0],
      y: position[1],
      scaleX: symbolMeta.symbolScale[0],
      scaleY: symbolMeta.symbolScale[1],
      rotation: symbolMeta.rotation
    };
  }
}
function createOrUpdateSingleSymbol(bar, opt, symbolMeta, isUpdate) {
  var bundle = bar.__pictorialBundle;
  var mainPath = bar.__pictorialMainPath;
  if (!mainPath) {
    mainPath = bar.__pictorialMainPath = createPath(symbolMeta);
    bundle.add(mainPath);
    updateAttr(mainPath, {
      x: symbolMeta.pathPosition[0],
      y: symbolMeta.pathPosition[1],
      scaleX: 0,
      scaleY: 0,
      rotation: symbolMeta.rotation
    }, {
      scaleX: symbolMeta.symbolScale[0],
      scaleY: symbolMeta.symbolScale[1]
    }, symbolMeta, isUpdate);
  } else {
    updateAttr(mainPath, null, {
      x: symbolMeta.pathPosition[0],
      y: symbolMeta.pathPosition[1],
      scaleX: symbolMeta.symbolScale[0],
      scaleY: symbolMeta.symbolScale[1],
      rotation: symbolMeta.rotation
    }, symbolMeta, isUpdate);
  }
}
// bar rect is used for label.
function createOrUpdateBarRect(bar, symbolMeta, isUpdate) {
  var rectShape = util.extend({}, symbolMeta.barRectShape);
  var barRect = bar.__pictorialBarRect;
  if (!barRect) {
    barRect = bar.__pictorialBarRect = new Rect["default"]({
      z2: 2,
      shape: rectShape,
      silent: true,
      style: {
        stroke: 'transparent',
        fill: 'transparent',
        lineWidth: 0
      }
    });
    barRect.disableMorphing = true;
    bar.add(barRect);
  } else {
    updateAttr(barRect, null, {
      shape: rectShape
    }, symbolMeta, isUpdate);
  }
}
function createOrUpdateClip(bar, opt, symbolMeta, isUpdate) {
  // If not clip, symbol will be remove and rebuilt.
  if (symbolMeta.symbolClip) {
    var clipPath = bar.__pictorialClipPath;
    var clipShape = util.extend({}, symbolMeta.clipShape);
    var valueDim = opt.valueDim;
    var animationModel = symbolMeta.animationModel;
    var dataIndex = symbolMeta.dataIndex;
    if (clipPath) {
      basicTransition.updateProps(clipPath, {
        shape: clipShape
      }, animationModel, dataIndex);
    } else {
      clipShape[valueDim.wh] = 0;
      clipPath = new Rect["default"]({
        shape: clipShape
      });
      bar.__pictorialBundle.setClipPath(clipPath);
      bar.__pictorialClipPath = clipPath;
      var target = {};
      target[valueDim.wh] = symbolMeta.clipShape[valueDim.wh];
      graphic[isUpdate ? 'updateProps' : 'initProps'](clipPath, {
        shape: target
      }, animationModel, dataIndex);
    }
  }
}
function getItemModel(data, dataIndex) {
  var itemModel = data.getItemModel(dataIndex);
  itemModel.getAnimationDelayParams = getAnimationDelayParams;
  itemModel.isAnimationEnabled = PictorialBarView_isAnimationEnabled;
  return itemModel;
}
function getAnimationDelayParams(path) {
  // The order is the same as the z-order, see `symbolRepeatDiretion`.
  return {
    index: path.__pictorialAnimationIndex,
    count: path.__pictorialRepeatTimes
  };
}
function PictorialBarView_isAnimationEnabled() {
  // `animation` prop can be set on itemModel in pictorial bar chart.
  return this.parentModel.isAnimationEnabled() && !!this.getShallow('animation');
}
function createBar(data, opt, symbolMeta, isUpdate) {
  // bar is the main element for each data.
  var bar = new Group["default"]();
  // bundle is used for location and clip.
  var bundle = new Group["default"]();
  bar.add(bundle);
  bar.__pictorialBundle = bundle;
  bundle.x = symbolMeta.bundlePosition[0];
  bundle.y = symbolMeta.bundlePosition[1];
  if (symbolMeta.symbolRepeat) {
    createOrUpdateRepeatSymbols(bar, opt, symbolMeta);
  } else {
    createOrUpdateSingleSymbol(bar, opt, symbolMeta);
  }
  createOrUpdateBarRect(bar, symbolMeta, isUpdate);
  createOrUpdateClip(bar, opt, symbolMeta, isUpdate);
  bar.__pictorialShapeStr = getShapeStr(data, symbolMeta);
  bar.__pictorialSymbolMeta = symbolMeta;
  return bar;
}
function updateBar(bar, opt, symbolMeta) {
  var animationModel = symbolMeta.animationModel;
  var dataIndex = symbolMeta.dataIndex;
  var bundle = bar.__pictorialBundle;
  basicTransition.updateProps(bundle, {
    x: symbolMeta.bundlePosition[0],
    y: symbolMeta.bundlePosition[1]
  }, animationModel, dataIndex);
  if (symbolMeta.symbolRepeat) {
    createOrUpdateRepeatSymbols(bar, opt, symbolMeta, true);
  } else {
    createOrUpdateSingleSymbol(bar, opt, symbolMeta, true);
  }
  createOrUpdateBarRect(bar, symbolMeta, true);
  createOrUpdateClip(bar, opt, symbolMeta, true);
}
function removeBar(data, dataIndex, animationModel, bar) {
  // Not show text when animating
  var labelRect = bar.__pictorialBarRect;
  labelRect && labelRect.removeTextContent();
  var paths = [];
  eachPath(bar, function (path) {
    paths.push(path);
  });
  bar.__pictorialMainPath && paths.push(bar.__pictorialMainPath);
  // I do not find proper remove animation for clip yet.
  bar.__pictorialClipPath && (animationModel = null);
  util.each(paths, function (path) {
    basicTransition.removeElement(path, {
      scaleX: 0,
      scaleY: 0
    }, animationModel, dataIndex, function () {
      bar.parent && bar.parent.remove(bar);
    });
  });
  data.setItemGraphicEl(dataIndex, null);
}
function getShapeStr(data, symbolMeta) {
  return [data.getItemVisual(symbolMeta.dataIndex, 'symbol') || 'none', !!symbolMeta.symbolRepeat, !!symbolMeta.symbolClip].join(':');
}
function eachPath(bar, cb, context) {
  // Do not use Group#eachChild, because it do not support remove.
  util.each(bar.__pictorialBundle.children(), function (el) {
    el !== bar.__pictorialBarRect && cb.call(context, el);
  });
}
function updateAttr(el, immediateAttrs, animationAttrs, symbolMeta, isUpdate, cb) {
  immediateAttrs && el.attr(immediateAttrs);
  // when symbolCip used, only clip path has init animation, otherwise it would be weird effect.
  if (symbolMeta.symbolClip && !isUpdate) {
    animationAttrs && el.attr(animationAttrs);
  } else {
    animationAttrs && graphic[isUpdate ? 'updateProps' : 'initProps'](el, animationAttrs, symbolMeta.animationModel, symbolMeta.dataIndex, cb);
  }
}
function updateCommon(bar, opt, symbolMeta) {
  var dataIndex = symbolMeta.dataIndex;
  var itemModel = symbolMeta.itemModel;
  // Color must be excluded.
  // Because symbol provide setColor individually to set fill and stroke
  var emphasisModel = itemModel.getModel('emphasis');
  var emphasisStyle = emphasisModel.getModel('itemStyle').getItemStyle();
  var blurStyle = itemModel.getModel(['blur', 'itemStyle']).getItemStyle();
  var selectStyle = itemModel.getModel(['select', 'itemStyle']).getItemStyle();
  var cursorStyle = itemModel.getShallow('cursor');
  var focus = emphasisModel.get('focus');
  var blurScope = emphasisModel.get('blurScope');
  var hoverScale = emphasisModel.get('scale');
  eachPath(bar, function (path) {
    if (path instanceof Image["default"]) {
      var pathStyle = path.style;
      path.useStyle(util.extend({
        // TODO other properties like dx, dy ?
        image: pathStyle.image,
        x: pathStyle.x,
        y: pathStyle.y,
        width: pathStyle.width,
        height: pathStyle.height
      }, symbolMeta.style));
    } else {
      path.useStyle(symbolMeta.style);
    }
    var emphasisState = path.ensureState('emphasis');
    emphasisState.style = emphasisStyle;
    if (hoverScale) {
      // NOTE: Must after scale is set after updateAttr
      emphasisState.scaleX = path.scaleX * 1.1;
      emphasisState.scaleY = path.scaleY * 1.1;
    }
    path.ensureState('blur').style = blurStyle;
    path.ensureState('select').style = selectStyle;
    cursorStyle && (path.cursor = cursorStyle);
    path.z2 = symbolMeta.z2;
  });
  var barPositionOutside = opt.valueDim.posDesc[+(symbolMeta.boundingLength > 0)];
  var barRect = bar.__pictorialBarRect;
  barRect.ignoreClip = true;
  (0,labelStyle.setLabelStyle)(barRect, (0,labelStyle.getLabelStatesModels)(itemModel), {
    labelFetcher: opt.seriesModel,
    labelDataIndex: dataIndex,
    defaultText: (0,labelHelper.getDefaultLabel)(opt.seriesModel.getData(), dataIndex),
    inheritColor: symbolMeta.style.fill,
    defaultOpacity: symbolMeta.style.opacity,
    defaultOutsidePosition: barPositionOutside
  });
  (0,states.toggleHoverEmphasis)(bar, focus, blurScope, emphasisModel.get('disabled'));
}
function toIntTimes(times) {
  var roundedTimes = Math.round(times);
  // Escapse accurate error
  return Math.abs(times - roundedTimes) < 1e-4 ? roundedTimes : Math.ceil(times);
}
/* ESM default export */ var bar_PictorialBarView = (PictorialBarView_PictorialBarView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/PictorialBarSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var PictorialBarSeries_PictorialBarSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PictorialBarSeriesModel, _super);
  function PictorialBarSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PictorialBarSeriesModel.type;
    _this.hasSymbolVisual = true;
    _this.defaultSymbol = 'roundRect';
    return _this;
  }
  PictorialBarSeriesModel.prototype.getInitialData = function (option) {
    // Disable stack.
    option.stack = null;
    return _super.prototype.getInitialData.apply(this, arguments);
  };
  PictorialBarSeriesModel.type = 'series.pictorialBar';
  PictorialBarSeriesModel.dependencies = ['grid'];
  PictorialBarSeriesModel.defaultOption = (0,component.inheritDefaultOption)(BaseBarSeries.defaultOption, {
    symbol: 'circle',
    symbolSize: null,
    symbolRotate: null,
    symbolPosition: null,
    symbolOffset: null,
    symbolMargin: null,
    symbolRepeat: false,
    symbolRepeatDirection: 'end',
    symbolClip: false,
    symbolBoundingData: null,
    symbolPatternSize: 400,
    barGap: '-100%',
    // Pictorial bar do not clip by default because in many cases
    // xAxis and yAxis are not displayed and it's expected not to clip
    clip: false,
    // z can be set in data item, which is z2 actually.
    // Disable progressive
    progressive: 0,
    emphasis: {
      // By default pictorialBar do not hover scale. Hover scale is not suitable
      // for the case that both has foreground and background.
      scale: false
    },
    select: {
      itemStyle: {
        borderColor: '#212121'
      }
    }
  });
  return PictorialBarSeriesModel;
}(BaseBarSeries);
/* ESM default export */ var PictorialBarSeries = (PictorialBarSeries_PictorialBarSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/installPictorialBar.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




function installPictorialBar_install(registers) {
  registers.registerChartView(bar_PictorialBarView);
  registers.registerSeriesModel(PictorialBarSeries);
  registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT, (0,util.curry)(barGrid.layout, 'pictorialBar'));
  // Do layout after other overall layout, which can prepare some information.
  registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, (0,barGrid.createProgressiveLayout)('pictorialBar'));
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/themeRiver/install.js + 3 modules
var themeRiver_install = __webpack_require__(85669);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/install.js + 6 modules
var sunburst_install = __webpack_require__(82145);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/custom/install.js + 2 modules
var custom_install = __webpack_require__(86734);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/install.js
var grid_install = __webpack_require__(64483);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/polar/install.js
var polar_install = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/geo/install.js + 1 modules
var geo_install = __webpack_require__(89167);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/singleAxis/install.js
var singleAxis_install = __webpack_require__(66763);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/parallel/install.js + 1 modules
var component_parallel_install = __webpack_require__(27332);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/calendar/install.js + 1 modules
var calendar_install = __webpack_require__(86794);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/graphic/install.js + 2 modules
var graphic_install = __webpack_require__(53105);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/install.js + 7 modules
var toolbox_install = __webpack_require__(21122);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/install.js + 5 modules
var tooltip_install = __webpack_require__(72632);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/install.js + 4 modules
var axisPointer_install = __webpack_require__(49232);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/brush/install.js + 5 modules
var brush_install = __webpack_require__(64831);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/title/install.js
var title_install = __webpack_require__(14863);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/install.js + 7 modules
var timeline_install = __webpack_require__(72997);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkPoint.js + 2 modules
var installMarkPoint = __webpack_require__(72378);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkLine.js + 2 modules
var installMarkLine = __webpack_require__(84093);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkArea.js + 2 modules
var installMarkArea = __webpack_require__(15707);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/install.js + 9 modules
var legend_install = __webpack_require__(59817);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/install.js
var dataZoom_install = __webpack_require__(39858);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js + 3 modules
var installDataZoomInside = __webpack_require__(16369);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js + 2 modules
var installDataZoomSlider = __webpack_require__(10214);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/visualMap/install.js
var visualMap_install = __webpack_require__(29713);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js + 2 modules
var installVisualMapContinuous = __webpack_require__(78140);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js + 2 modules
var installVisualMapPiecewise = __webpack_require__(1253);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/aria/install.js + 1 modules
var aria_install = __webpack_require__(28546);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/transform/install.js + 2 modules
var transform_install = __webpack_require__(45330);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataset/install.js
var dataset_install = __webpack_require__(58964);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/morphPath.js + 2 modules
var morphPath = __webpack_require__(92075);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/path.js + 1 modules
var tool_path = __webpack_require__(20743);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/morphTransitionHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





function isMultiple(elements) {
  return (0,util.isArray)(elements[0]);
}
function prepareMorphBatches(one, many) {
  var batches = [];
  var batchCount = one.length;
  for (var i = 0; i < batchCount; i++) {
    batches.push({
      one: one[i],
      many: []
    });
  }
  for (var i = 0; i < many.length; i++) {
    var len = many[i].length;
    var k = void 0;
    for (k = 0; k < len; k++) {
      batches[k % batchCount].many.push(many[i][k]);
    }
  }
  var off = 0;
  // If one has more paths than each one of many. average them.
  for (var i = batchCount - 1; i >= 0; i--) {
    if (!batches[i].many.length) {
      var moveFrom = batches[off].many;
      if (moveFrom.length <= 1) {
        // Not enough
        // Start from the first one.
        if (off) {
          off = 0;
        } else {
          return batches;
        }
      }
      var len = moveFrom.length;
      var mid = Math.ceil(len / 2);
      batches[i].many = moveFrom.slice(mid, len);
      batches[off].many = moveFrom.slice(0, mid);
      off++;
    }
  }
  return batches;
}
var pathDividers = {
  clone: function (params) {
    var ret = [];
    // Fitting the alpha
    var approxOpacity = 1 - Math.pow(1 - params.path.style.opacity, 1 / params.count);
    for (var i = 0; i < params.count; i++) {
      var cloned = (0,tool_path.clonePath)(params.path);
      cloned.setStyle('opacity', approxOpacity);
      ret.push(cloned);
    }
    return ret;
  },
  // Use the default divider
  split: null
};
function applyMorphAnimation(from, to, divideShape, seriesModel, dataIndex, animateOtherProps) {
  if (!from.length || !to.length) {
    return;
  }
  var updateAnimationCfg = (0,basicTransition.getAnimationConfig)('update', seriesModel, dataIndex);
  if (!(updateAnimationCfg && updateAnimationCfg.duration > 0)) {
    return;
  }
  var animationDelay = seriesModel.getModel('universalTransition').get('delay');
  var animationCfg = Object.assign({
    // Need to setToFinal so the further calculation based on the style can be correct.
    // Like emphasis color.
    setToFinal: true
  }, updateAnimationCfg);
  var many;
  var one;
  if (isMultiple(from)) {
    // manyToOne
    many = from;
    one = to;
  }
  if (isMultiple(to)) {
    // oneToMany
    many = to;
    one = from;
  }
  function morphOneBatch(batch, fromIsMany, animateIndex, animateCount, forceManyOne) {
    var batchMany = batch.many;
    var batchOne = batch.one;
    if (batchMany.length === 1 && !forceManyOne) {
      // Is one to one
      var batchFrom = fromIsMany ? batchMany[0] : batchOne;
      var batchTo = fromIsMany ? batchOne : batchMany[0];
      if ((0,morphPath.isCombineMorphing)(batchFrom)) {
        // Keep doing combine animation.
        morphOneBatch({
          many: [batchFrom],
          one: batchTo
        }, true, animateIndex, animateCount, true);
      } else {
        var individualAnimationCfg = animationDelay ? (0,util.defaults)({
          delay: animationDelay(animateIndex, animateCount)
        }, animationCfg) : animationCfg;
        (0,morphPath.morphPath)(batchFrom, batchTo, individualAnimationCfg);
        animateOtherProps(batchFrom, batchTo, batchFrom, batchTo, individualAnimationCfg);
      }
    } else {
      var separateAnimationCfg = (0,util.defaults)({
        dividePath: pathDividers[divideShape],
        individualDelay: animationDelay && function (idx, count, fromPath, toPath) {
          return animationDelay(idx + animateIndex, animateCount);
        }
      }, animationCfg);
      var _a = fromIsMany ? (0,morphPath.combineMorph)(batchMany, batchOne, separateAnimationCfg) : (0,morphPath.separateMorph)(batchOne, batchMany, separateAnimationCfg),
        fromIndividuals = _a.fromIndividuals,
        toIndividuals = _a.toIndividuals;
      var count = fromIndividuals.length;
      for (var k = 0; k < count; k++) {
        var individualAnimationCfg = animationDelay ? (0,util.defaults)({
          delay: animationDelay(k, count)
        }, animationCfg) : animationCfg;
        animateOtherProps(fromIndividuals[k], toIndividuals[k], fromIsMany ? batchMany[k] : batch.one, fromIsMany ? batch.one : batchMany[k], individualAnimationCfg);
      }
    }
  }
  var fromIsMany = many ? many === from
  // Is one to one. If the path number not match. also needs do merge and separate morphing.
  : from.length > to.length;
  var morphBatches = many ? prepareMorphBatches(one, many) : prepareMorphBatches(fromIsMany ? to : from, [fromIsMany ? from : to]);
  var animateCount = 0;
  for (var i = 0; i < morphBatches.length; i++) {
    animateCount += morphBatches[i].many.length;
  }
  var animateIndex = 0;
  for (var i = 0; i < morphBatches.length; i++) {
    morphOneBatch(morphBatches[i], fromIsMany, animateIndex, animateCount);
    animateIndex += morphBatches[i].many.length;
  }
}
function getPathList(elements) {
  if (!elements) {
    return [];
  }
  if ((0,util.isArray)(elements)) {
    var pathList_1 = [];
    for (var i = 0; i < elements.length; i++) {
      pathList_1.push(getPathList(elements[i]));
    }
    return pathList_1;
  }
  var pathList = [];
  elements.traverse(function (el) {
    if (el instanceof Path["default"] && !el.disableMorphing && !el.invisible && !el.ignore) {
      pathList.push(el);
    }
  });
  return pathList;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/DataDiffer.js
var DataDiffer = __webpack_require__(4055);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(99833);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(90635);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/universalTransition.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// Universal transitions that can animate between any shapes(series) and any properties in any amounts.










var DATA_COUNT_THRESHOLD = 1e4;
var TRANSITION_NONE = 0;
var TRANSITION_P2C = 1;
var TRANSITION_C2P = 2;
;
var getUniversalTransitionGlobalStore = (0,util_model.makeInner)();
function getDimension(data, visualDimension) {
  var dimensions = data.dimensions;
  for (var i = 0; i < dimensions.length; i++) {
    var dimInfo = data.getDimensionInfo(dimensions[i]);
    if (dimInfo && dimInfo.otherDims[visualDimension] === 0) {
      return dimensions[i];
    }
  }
}
// get value by dimension. (only get value of itemGroupId or childGroupId, so convert it to string)
function getValueByDimension(data, dataIndex, dimension) {
  var dimInfo = data.getDimensionInfo(dimension);
  var dimOrdinalMeta = dimInfo && dimInfo.ordinalMeta;
  if (dimInfo) {
    var value = data.get(dimInfo.name, dataIndex);
    if (dimOrdinalMeta) {
      return dimOrdinalMeta.categories[value] || value + '';
    }
    return value + '';
  }
}
function getGroupId(data, dataIndex, dataGroupId, isChild) {
  // try to get groupId from encode
  var visualDimension = isChild ? 'itemChildGroupId' : 'itemGroupId';
  var groupIdDim = getDimension(data, visualDimension);
  if (groupIdDim) {
    var groupId = getValueByDimension(data, dataIndex, groupIdDim);
    return groupId;
  }
  // try to get groupId from raw data item
  var rawDataItem = data.getRawDataItem(dataIndex);
  var property = isChild ? 'childGroupId' : 'groupId';
  if (rawDataItem && rawDataItem[property]) {
    return rawDataItem[property] + '';
  }
  // fallback
  if (isChild) {
    return;
  }
  // try to use series.dataGroupId as groupId, otherwise use dataItem's id as groupId
  return dataGroupId || data.getId(dataIndex);
}
// flatten all data items from different serieses into one arrary
function flattenDataDiffItems(list) {
  var items = [];
  (0,util.each)(list, function (seriesInfo) {
    var data = seriesInfo.data;
    var dataGroupId = seriesInfo.dataGroupId;
    if (data.count() > DATA_COUNT_THRESHOLD) {
      if (false) {}
      return;
    }
    var indices = data.getIndices();
    for (var dataIndex = 0; dataIndex < indices.length; dataIndex++) {
      items.push({
        data: data,
        groupId: getGroupId(data, dataIndex, dataGroupId, false),
        childGroupId: getGroupId(data, dataIndex, dataGroupId, true),
        divide: seriesInfo.divide,
        dataIndex: dataIndex
      });
    }
  });
  return items;
}
function fadeInElement(newEl, newSeries, newIndex) {
  newEl.traverse(function (el) {
    if (el instanceof Path["default"]) {
      // TODO use fade in animation for target element.
      (0,basicTransition.initProps)(el, {
        style: {
          opacity: 0
        }
      }, newSeries, {
        dataIndex: newIndex,
        isFrom: true
      });
    }
  });
}
function removeEl(el) {
  if (el.parent) {
    // Bake parent transform to element.
    // So it can still have proper transform to transition after it's removed.
    var computedTransform = el.getComputedTransform();
    el.setLocalTransform(computedTransform);
    el.parent.remove(el);
  }
}
function stopAnimation(el) {
  el.stopAnimation();
  if (el.isGroup) {
    el.traverse(function (child) {
      child.stopAnimation();
    });
  }
}
function animateElementStyles(el, dataIndex, seriesModel) {
  var animationConfig = (0,basicTransition.getAnimationConfig)('update', seriesModel, dataIndex);
  animationConfig && el.traverse(function (child) {
    if (child instanceof Displayable["default"]) {
      var oldStyle = (0,basicTransition.getOldStyle)(child);
      if (oldStyle) {
        child.animateFrom({
          style: oldStyle
        }, animationConfig);
      }
    }
  });
}
function isAllIdSame(oldDiffItems, newDiffItems) {
  var len = oldDiffItems.length;
  if (len !== newDiffItems.length) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var oldItem = oldDiffItems[i];
    var newItem = newDiffItems[i];
    if (oldItem.data.getId(oldItem.dataIndex) !== newItem.data.getId(newItem.dataIndex)) {
      return false;
    }
  }
  return true;
}
function transitionBetween(oldList, newList, api) {
  var oldDiffItems = flattenDataDiffItems(oldList);
  var newDiffItems = flattenDataDiffItems(newList);
  function updateMorphingPathProps(from, to, rawFrom, rawTo, animationCfg) {
    if (rawFrom || from) {
      to.animateFrom({
        style: rawFrom && rawFrom !== from
        // dividingMethod like clone may override the style(opacity)
        // So extend it to raw style.
        ? (0,util.extend)((0,util.extend)({}, rawFrom.style), from.style) : from.style
      }, animationCfg);
    }
  }
  var hasMorphAnimation = false;
  /**
   * With groupId and childGroupId, we can build parent-child relationships between dataItems.
   * However, we should mind the parent-child "direction" between old and new options.
   *
   * For example, suppose we have two dataItems from two series.data:
   *
   * dataA: [                          dataB: [
   *   {                                 {
   *     value: 5,                         value: 3,
   *     groupId: 'creatures',             groupId: 'animals',
   *     childGroupId: 'animals'           childGroupId: 'dogs'
   *   },                                },
   *   ...                               ...
   * ]                                 ]
   *
   * where dataA is belong to optionA and dataB is belong to optionB.
   *
   * When we `setOption(optionB)` from optionA, we choose childGroupId of dataItemA and groupId of
   * dataItemB as keys so the two keys are matched (both are 'animals'), then universalTransition
   * will work. This derection is "parent -> child".
   *
   * If we `setOption(optionA)` from optionB, we also choose groupId of dataItemB and childGroupId
   * of dataItemA as keys and universalTransition will work. This derection is "child -> parent".
   *
   * If there is no childGroupId specified, which means no multiLevelDrillDown/Up is needed and no
   * parent-child relationship exists. This direction is "none".
   *
   * So we need to know whether to use groupId or childGroupId as the key when we call the keyGetter
   * functions. Thus, we need to decide the direction first.
   *
   * The rule is:
   *
   * if (all childGroupIds in oldDiffItems and all groupIds in newDiffItems have common value) {
   *   direction = 'parent -> child';
   * } else if (all groupIds in oldDiffItems and all childGroupIds in newDiffItems have common value) {
   *   direction = 'child -> parent';
   * } else {
   *   direction = 'none';
   * }
   */
  var direction = TRANSITION_NONE;
  // find all groupIds and childGroupIds from oldDiffItems
  var oldGroupIds = (0,util.createHashMap)();
  var oldChildGroupIds = (0,util.createHashMap)();
  oldDiffItems.forEach(function (item) {
    item.groupId && oldGroupIds.set(item.groupId, true);
    item.childGroupId && oldChildGroupIds.set(item.childGroupId, true);
  });
  // traverse newDiffItems and decide the direction according to the rule
  for (var i = 0; i < newDiffItems.length; i++) {
    var newGroupId = newDiffItems[i].groupId;
    if (oldChildGroupIds.get(newGroupId)) {
      direction = TRANSITION_P2C;
      break;
    }
    var newChildGroupId = newDiffItems[i].childGroupId;
    if (newChildGroupId && oldGroupIds.get(newChildGroupId)) {
      direction = TRANSITION_C2P;
      break;
    }
  }
  function createKeyGetter(isOld, onlyGetId) {
    return function (diffItem) {
      var data = diffItem.data;
      var dataIndex = diffItem.dataIndex;
      // TODO if specified dim
      if (onlyGetId) {
        return data.getId(dataIndex);
      }
      if (isOld) {
        return direction === TRANSITION_P2C ? diffItem.childGroupId : diffItem.groupId;
      } else {
        return direction === TRANSITION_C2P ? diffItem.childGroupId : diffItem.groupId;
      }
    };
  }
  // Use id if it's very likely to be an one to one animation
  // It's more robust than groupId
  // TODO Check if key dimension is specified.
  var useId = isAllIdSame(oldDiffItems, newDiffItems);
  var isElementStillInChart = {};
  if (!useId) {
    // We may have different diff strategy with basicTransition if we use other dimension as key.
    // If so, we can't simply check if oldEl is same with newEl. We need a map to check if oldEl is still being used in the new chart.
    // We can't use the elements that already being morphed. Let it keep it's original basic transition.
    for (var i = 0; i < newDiffItems.length; i++) {
      var newItem = newDiffItems[i];
      var el = newItem.data.getItemGraphicEl(newItem.dataIndex);
      if (el) {
        isElementStillInChart[el.id] = true;
      }
    }
  }
  function updateOneToOne(newIndex, oldIndex) {
    var oldItem = oldDiffItems[oldIndex];
    var newItem = newDiffItems[newIndex];
    var newSeries = newItem.data.hostModel;
    // TODO Mark this elements is morphed and don't morph them anymore
    var oldEl = oldItem.data.getItemGraphicEl(oldItem.dataIndex);
    var newEl = newItem.data.getItemGraphicEl(newItem.dataIndex);
    // Can't handle same elements.
    if (oldEl === newEl) {
      newEl && animateElementStyles(newEl, newItem.dataIndex, newSeries);
      return;
    }
    if (
    // We can't use the elements that already being morphed
    oldEl && isElementStillInChart[oldEl.id]) {
      return;
    }
    if (newEl) {
      // TODO: If keep animating the group in case
      // some of the elements don't want to be morphed.
      // TODO Label?
      stopAnimation(newEl);
      if (oldEl) {
        stopAnimation(oldEl);
        // If old element is doing leaving animation. stop it and remove it immediately.
        removeEl(oldEl);
        hasMorphAnimation = true;
        applyMorphAnimation(getPathList(oldEl), getPathList(newEl), newItem.divide, newSeries, newIndex, updateMorphingPathProps);
      } else {
        fadeInElement(newEl, newSeries, newIndex);
      }
    }
    // else keep oldEl leaving animation.
  }
  new DataDiffer["default"](oldDiffItems, newDiffItems, createKeyGetter(true, useId), createKeyGetter(false, useId), null, 'multiple').update(updateOneToOne).updateManyToOne(function (newIndex, oldIndices) {
    var newItem = newDiffItems[newIndex];
    var newData = newItem.data;
    var newSeries = newData.hostModel;
    var newEl = newData.getItemGraphicEl(newItem.dataIndex);
    var oldElsList = (0,util.filter)((0,util.map)(oldIndices, function (idx) {
      return oldDiffItems[idx].data.getItemGraphicEl(oldDiffItems[idx].dataIndex);
    }), function (oldEl) {
      return oldEl && oldEl !== newEl && !isElementStillInChart[oldEl.id];
    });
    if (newEl) {
      stopAnimation(newEl);
      if (oldElsList.length) {
        // If old element is doing leaving animation. stop it and remove it immediately.
        (0,util.each)(oldElsList, function (oldEl) {
          stopAnimation(oldEl);
          removeEl(oldEl);
        });
        hasMorphAnimation = true;
        applyMorphAnimation(getPathList(oldElsList), getPathList(newEl), newItem.divide, newSeries, newIndex, updateMorphingPathProps);
      } else {
        fadeInElement(newEl, newSeries, newItem.dataIndex);
      }
    }
    // else keep oldEl leaving animation.
  }).updateOneToMany(function (newIndices, oldIndex) {
    var oldItem = oldDiffItems[oldIndex];
    var oldEl = oldItem.data.getItemGraphicEl(oldItem.dataIndex);
    // We can't use the elements that already being morphed
    if (oldEl && isElementStillInChart[oldEl.id]) {
      return;
    }
    var newElsList = (0,util.filter)((0,util.map)(newIndices, function (idx) {
      return newDiffItems[idx].data.getItemGraphicEl(newDiffItems[idx].dataIndex);
    }), function (el) {
      return el && el !== oldEl;
    });
    var newSeris = newDiffItems[newIndices[0]].data.hostModel;
    if (newElsList.length) {
      (0,util.each)(newElsList, function (newEl) {
        return stopAnimation(newEl);
      });
      if (oldEl) {
        stopAnimation(oldEl);
        // If old element is doing leaving animation. stop it and remove it immediately.
        removeEl(oldEl);
        hasMorphAnimation = true;
        applyMorphAnimation(getPathList(oldEl), getPathList(newElsList), oldItem.divide,
        // Use divide on old.
        newSeris, newIndices[0], updateMorphingPathProps);
      } else {
        (0,util.each)(newElsList, function (newEl) {
          return fadeInElement(newEl, newSeris, newIndices[0]);
        });
      }
    }
    // else keep oldEl leaving animation.
  }).updateManyToMany(function (newIndices, oldIndices) {
    // If two data are same and both have groupId.
    // Normally they should be diff by id.
    new DataDiffer["default"](oldIndices, newIndices, function (rawIdx) {
      return oldDiffItems[rawIdx].data.getId(oldDiffItems[rawIdx].dataIndex);
    }, function (rawIdx) {
      return newDiffItems[rawIdx].data.getId(newDiffItems[rawIdx].dataIndex);
    }).update(function (newIndex, oldIndex) {
      // Use the original index
      updateOneToOne(newIndices[newIndex], oldIndices[oldIndex]);
    }).execute();
  }).execute();
  if (hasMorphAnimation) {
    (0,util.each)(newList, function (_a) {
      var data = _a.data;
      var seriesModel = data.hostModel;
      var view = seriesModel && api.getViewOfSeriesModel(seriesModel);
      var animationCfg = (0,basicTransition.getAnimationConfig)('update', seriesModel, 0); // use 0 index.
      if (view && seriesModel.isAnimationEnabled() && animationCfg && animationCfg.duration > 0) {
        view.group.traverse(function (el) {
          if (el instanceof Path["default"] && !el.animators.length) {
            // We can't accept there still exists element that has no animation
            // if universalTransition is enabled
            el.animateFrom({
              style: {
                opacity: 0
              }
            }, animationCfg);
          }
        });
      }
    });
  }
}
function getSeriesTransitionKey(series) {
  var seriesKey = series.getModel('universalTransition').get('seriesKey');
  if (!seriesKey) {
    // Use series id by default.
    return series.id;
  }
  return seriesKey;
}
function convertArraySeriesKeyToString(seriesKey) {
  if ((0,util.isArray)(seriesKey)) {
    // Order independent.
    return seriesKey.sort().join(',');
  }
  return seriesKey;
}
function getDivideShapeFromData(data) {
  if (data.hostModel) {
    return data.hostModel.getModel('universalTransition').get('divideShape');
  }
}
function findTransitionSeriesBatches(globalStore, params) {
  var updateBatches = (0,util.createHashMap)();
  var oldDataMap = (0,util.createHashMap)();
  // Map that only store key in array seriesKey.
  // Which is used to query the old data when transition from one to multiple series.
  var oldDataMapForSplit = (0,util.createHashMap)();
  (0,util.each)(globalStore.oldSeries, function (series, idx) {
    var oldDataGroupId = globalStore.oldDataGroupIds[idx];
    var oldData = globalStore.oldData[idx];
    var transitionKey = getSeriesTransitionKey(series);
    var transitionKeyStr = convertArraySeriesKeyToString(transitionKey);
    oldDataMap.set(transitionKeyStr, {
      dataGroupId: oldDataGroupId,
      data: oldData
    });
    if ((0,util.isArray)(transitionKey)) {
      // Same key can't in different array seriesKey.
      (0,util.each)(transitionKey, function (key) {
        oldDataMapForSplit.set(key, {
          key: transitionKeyStr,
          dataGroupId: oldDataGroupId,
          data: oldData
        });
      });
    }
  });
  function checkTransitionSeriesKeyDuplicated(transitionKeyStr) {
    if (updateBatches.get(transitionKeyStr)) {
      (0,log.warn)("Duplicated seriesKey in universalTransition " + transitionKeyStr);
    }
  }
  (0,util.each)(params.updatedSeries, function (series) {
    if (series.isUniversalTransitionEnabled() && series.isAnimationEnabled()) {
      var newDataGroupId = series.get('dataGroupId');
      var newData = series.getData();
      var transitionKey = getSeriesTransitionKey(series);
      var transitionKeyStr = convertArraySeriesKeyToString(transitionKey);
      // Only transition between series with same id.
      var oldData = oldDataMap.get(transitionKeyStr);
      // string transition key is the best match.
      if (oldData) {
        if (false) {}
        // TODO check if data is same?
        updateBatches.set(transitionKeyStr, {
          oldSeries: [{
            dataGroupId: oldData.dataGroupId,
            divide: getDivideShapeFromData(oldData.data),
            data: oldData.data
          }],
          newSeries: [{
            dataGroupId: newDataGroupId,
            divide: getDivideShapeFromData(newData),
            data: newData
          }]
        });
      } else {
        // Transition from multiple series.
        // e.g. 'female', 'male' -> ['female', 'male']
        if ((0,util.isArray)(transitionKey)) {
          if (false) {}
          var oldSeries_1 = [];
          (0,util.each)(transitionKey, function (key) {
            var oldData = oldDataMap.get(key);
            if (oldData.data) {
              oldSeries_1.push({
                dataGroupId: oldData.dataGroupId,
                divide: getDivideShapeFromData(oldData.data),
                data: oldData.data
              });
            }
          });
          if (oldSeries_1.length) {
            updateBatches.set(transitionKeyStr, {
              oldSeries: oldSeries_1,
              newSeries: [{
                dataGroupId: newDataGroupId,
                data: newData,
                divide: getDivideShapeFromData(newData)
              }]
            });
          }
        } else {
          // Try transition to multiple series.
          // e.g. ['female', 'male'] -> 'female', 'male'
          var oldData_1 = oldDataMapForSplit.get(transitionKey);
          if (oldData_1) {
            var batch = updateBatches.get(oldData_1.key);
            if (!batch) {
              batch = {
                oldSeries: [{
                  dataGroupId: oldData_1.dataGroupId,
                  data: oldData_1.data,
                  divide: getDivideShapeFromData(oldData_1.data)
                }],
                newSeries: []
              };
              updateBatches.set(oldData_1.key, batch);
            }
            batch.newSeries.push({
              dataGroupId: newDataGroupId,
              data: newData,
              divide: getDivideShapeFromData(newData)
            });
          }
        }
      }
    }
  });
  return updateBatches;
}
function querySeries(series, finder) {
  for (var i = 0; i < series.length; i++) {
    var found = finder.seriesIndex != null && finder.seriesIndex === series[i].seriesIndex || finder.seriesId != null && finder.seriesId === series[i].id;
    if (found) {
      return i;
    }
  }
}
function transitionSeriesFromOpt(transitionOpt, globalStore, params, api) {
  var from = [];
  var to = [];
  (0,util.each)((0,util_model.normalizeToArray)(transitionOpt.from), function (finder) {
    var idx = querySeries(globalStore.oldSeries, finder);
    if (idx >= 0) {
      from.push({
        dataGroupId: globalStore.oldDataGroupIds[idx],
        data: globalStore.oldData[idx],
        // TODO can specify divideShape in transition.
        divide: getDivideShapeFromData(globalStore.oldData[idx]),
        groupIdDim: finder.dimension
      });
    }
  });
  (0,util.each)((0,util_model.normalizeToArray)(transitionOpt.to), function (finder) {
    var idx = querySeries(params.updatedSeries, finder);
    if (idx >= 0) {
      var data = params.updatedSeries[idx].getData();
      to.push({
        dataGroupId: globalStore.oldDataGroupIds[idx],
        data: data,
        divide: getDivideShapeFromData(data),
        groupIdDim: finder.dimension
      });
    }
  });
  if (from.length > 0 && to.length > 0) {
    transitionBetween(from, to, api);
  }
}
function installUniversalTransition(registers) {
  registers.registerUpdateLifecycle('series:beforeupdate', function (ecMOdel, api, params) {
    (0,util.each)((0,util_model.normalizeToArray)(params.seriesTransition), function (transOpt) {
      (0,util.each)((0,util_model.normalizeToArray)(transOpt.to), function (finder) {
        var series = params.updatedSeries;
        for (var i = 0; i < series.length; i++) {
          if (finder.seriesIndex != null && finder.seriesIndex === series[i].seriesIndex || finder.seriesId != null && finder.seriesId === series[i].id) {
            series[i][Series.SERIES_UNIVERSAL_TRANSITION_PROP] = true;
          }
        }
      });
    });
  });
  registers.registerUpdateLifecycle('series:transition', function (ecModel, api, params) {
    // TODO api provide an namespace that can save stuff per instance
    var globalStore = getUniversalTransitionGlobalStore(api);
    // TODO multiple to multiple series.
    if (globalStore.oldSeries && params.updatedSeries && params.optionChanged) {
      // TODO transitionOpt was used in an old implementation and can be removed now
      // Use give transition config if its' give;
      var transitionOpt = params.seriesTransition;
      if (transitionOpt) {
        (0,util.each)((0,util_model.normalizeToArray)(transitionOpt), function (opt) {
          transitionSeriesFromOpt(opt, globalStore, params, api);
        });
      } else {
        // Else guess from series based on transition series key.
        var updateBatches_1 = findTransitionSeriesBatches(globalStore, params);
        (0,util.each)(updateBatches_1.keys(), function (key) {
          var batch = updateBatches_1.get(key);
          transitionBetween(batch.oldSeries, batch.newSeries, api);
        });
      }
      // Reset
      (0,util.each)(params.updatedSeries, function (series) {
        // Reset;
        if (series[Series.SERIES_UNIVERSAL_TRANSITION_PROP]) {
          series[Series.SERIES_UNIVERSAL_TRANSITION_PROP] = false;
        }
      });
    }
    // Save all series of current update. Not only the updated one.
    var allSeries = ecModel.getSeries();
    var savedSeries = globalStore.oldSeries = [];
    var savedDataGroupIds = globalStore.oldDataGroupIds = [];
    var savedData = globalStore.oldData = [];
    for (var i = 0; i < allSeries.length; i++) {
      var data = allSeries[i].getData();
      // Only save the data that can have transition.
      // Avoid large data costing too much extra memory
      if (data.count() < DATA_COUNT_THRESHOLD) {
        savedSeries.push(allSeries[i]);
        savedDataGroupIds.push(allSeries[i].get('dataGroupId'));
        savedData.push(data);
      }
    }
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/installLabelLayout.js + 1 modules
var installLabelLayout = __webpack_require__(57282);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/index.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


// ----------------------------------------------
// All of the modules that are allowed to be
// imported are listed below.
//
// Users MUST NOT import other modules that are
// not included in this list.
// ----------------------------------------------




// -----------------
// Render engines
// -----------------
// Render via Canvas.
// echarts.init(dom, null, { renderer: 'canvas' })
(0,extension.use)([installCanvasRenderer.install]);
// Render via SVG.
// echarts.init(dom, null, { renderer: 'svg' })
(0,extension.use)([installSVGRenderer.install]);
// ----------------
// Charts (series)
// ----------------
// All of the series types, for example:
// chart.setOption({
//     series: [{
//         type: 'line' // or 'bar', 'pie', ...
//     }]
// });
(0,extension.use)([install.install, install_install, pie_install.install, scatter_install.install, radar_install.install, map_install.install, tree_install.install, treemap_install.install, graph_install.install, gauge_install.install, funnel_install.install, parallel_install.install, sankey_install.install, boxplot_install.install, candlestick_install.install, effectScatter_install.install, lines_install.install, heatmap_install.install, installPictorialBar_install, themeRiver_install.install, sunburst_install.install, custom_install.install]);
// -------------------
// Coordinate systems
// -------------------
// All of the axis modules have been included in the
// coordinate system module below, do not need to
// make extra import.
// `cartesian` coordinate system. For some historical
// reasons, it is named as grid, for example:
// chart.setOption({
//     grid: {...},
//     xAxis: {...},
//     yAxis: {...},
//     series: [{...}]
// });
(0,extension.use)(grid_install.install);
// `polar` coordinate system, for example:
// chart.setOption({
//     polar: {...},
//     radiusAxis: {...},
//     angleAxis: {...},
//     series: [{
//         coordinateSystem: 'polar'
//     }]
// });
(0,extension.use)(polar_install.install);
// `geo` coordinate system, for example:
// chart.setOption({
//     geo: {...},
//     series: [{
//         coordinateSystem: 'geo'
//     }]
// });
(0,extension.use)(geo_install.install);
// `singleAxis` coordinate system (notice, it is a coordinate system
// with only one axis, work for chart like theme river), for example:
// chart.setOption({
//     singleAxis: {...}
//     series: [{type: 'themeRiver', ...}]
// });
(0,extension.use)(singleAxis_install.install);
// `parallel` coordinate system, only work for parallel series, for example:
// chart.setOption({
//     parallel: {...},
//     parallelAxis: [{...}, ...],
//     series: [{
//         type: 'parallel'
//     }]
// });
(0,extension.use)(component_parallel_install.install);
// `calendar` coordinate system. for example,
// chart.setOption({
//     calendar: {...},
//     series: [{
//         coordinateSystem: 'calendar'
//     }]
// );
(0,extension.use)(calendar_install.install);
// ------------------
// Other components
// ------------------
// `graphic` component, for example:
// chart.setOption({
//     graphic: {...}
// });
(0,extension.use)(graphic_install.install);
// `toolbox` component, for example:
// chart.setOption({
//     toolbox: {...}
// });
(0,extension.use)(toolbox_install.install);
// `tooltip` component, for example:
// chart.setOption({
//     tooltip: {...}
// });
(0,extension.use)(tooltip_install.install);
// `axisPointer` component, for example:
// chart.setOption({
//     tooltip: {axisPointer: {...}, ...}
// });
// Or
// chart.setOption({
//     axisPointer: {...}
// });
(0,extension.use)(axisPointer_install.install);
// `brush` component, for example:
// chart.setOption({
//     brush: {...}
// });
// Or
// chart.setOption({
//     tooltip: {feature: {brush: {...}}
// })
(0,extension.use)(brush_install.install);
// `title` component, for example:
// chart.setOption({
//     title: {...}
// });
(0,extension.use)(title_install.install);
// `timeline` component, for example:
// chart.setOption({
//     timeline: {...}
// });
(0,extension.use)(timeline_install.install);
// `markPoint` component, for example:
// chart.setOption({
//     series: [{markPoint: {...}}]
// });
(0,extension.use)(installMarkPoint.install);
// `markLine` component, for example:
// chart.setOption({
//     series: [{markLine: {...}}]
// });
(0,extension.use)(installMarkLine.install);
// `markArea` component, for example:
// chart.setOption({
//     series: [{markArea: {...}}]
// });
(0,extension.use)(installMarkArea.install);
// `legend` component not scrollable. for example:
// chart.setOption({
//     legend: {...}
// });
(0,extension.use)(legend_install.install);
// `dataZoom` component including both `dataZoomInside` and `dataZoomSlider`.
(0,extension.use)(dataZoom_install.install);
// `dataZoom` component providing drag, pinch, wheel behaviors
// inside coordinate system, for example:
// chart.setOption({
//     dataZoom: {type: 'inside'}
// });
(0,extension.use)(installDataZoomInside.install);
// `dataZoom` component providing a slider bar, for example:
// chart.setOption({
//     dataZoom: {type: 'slider'}
// });
(0,extension.use)(installDataZoomSlider.install);
// `visualMap` component including both `visualMapContinuous` and `visualMapPiecewise`.
(0,extension.use)(visualMap_install.install);
// `visualMap` component providing continuous bar, for example:
// chart.setOption({
//     visualMap: {type: 'continuous'}
// });
(0,extension.use)(installVisualMapContinuous.install);
// `visualMap` component providing pieces bar, for example:
// chart.setOption({
//     visualMap: {type: 'piecewise'}
// });
(0,extension.use)(installVisualMapPiecewise.install);
// `aria` component providing aria, for example:
// chart.setOption({
//     aria: {...}
// });
(0,extension.use)(aria_install.install);
// dataset transform
// chart.setOption({
//     dataset: {
//          transform: []
//     }
// });
(0,extension.use)(transform_install.install);
(0,extension.use)(dataset_install.install);
// universal transition
// chart.setOption({
//     series: {
//         universalTransition: { enabled: true }
//     }
// })
(0,extension.use)(installUniversalTransition);
// label layout
// chart.setOption({
//     series: {
//         labelLayout: { hideOverlap: true }
//     }
// })
(0,extension.use)(installLabelLayout.installLabelLayout);

}),
22609: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateCenterAndZoom: function() { return updateCenterAndZoom; }
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
function getCenterCoord(view, point) {
  // Use projected coord as center because it's linear.
  return view.pointToProjected ? view.pointToProjected(point) : view.pointToData(point);
}
function updateCenterAndZoom(view, payload, zoomLimit, api) {
  var previousZoom = view.getZoom();
  var center = view.getCenter();
  var zoom = payload.zoom;
  var point = view.projectedToPoint ? view.projectedToPoint(center) : view.dataToPoint(center);
  if (payload.dx != null && payload.dy != null) {
    point[0] -= payload.dx;
    point[1] -= payload.dy;
    view.setCenter(getCenterCoord(view, point), api);
  }
  if (zoom != null) {
    if (zoomLimit) {
      var zoomMin = zoomLimit.min || 0;
      var zoomMax = zoomLimit.max || Infinity;
      zoom = Math.max(Math.min(previousZoom * zoom, zoomMax), zoomMin) / previousZoom;
    }
    // Zoom on given point(originX, originY)
    view.scaleX *= zoom;
    view.scaleY *= zoom;
    var fixX = (payload.originX - view.x) * (zoom - 1);
    var fixY = (payload.originY - view.y) * (zoom - 1);
    view.x -= fixX;
    view.y -= fixY;
    view.updateTransform();
    // Get the new center
    view.setCenter(getCenterCoord(view, point), api);
    view.setZoom(zoom * previousZoom);
  }
  return {
    center: view.getCenter(),
    zoom: view.getZoom()
  };
}

}),
17524: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAnimationConfig: function() { return getAnimationConfig; },
  getOldStyle: function() { return getOldStyle; },
  initProps: function() { return initProps; },
  isElementRemoved: function() { return isElementRemoved; },
  removeElement: function() { return removeElement; },
  removeElementWithFadeOut: function() { return removeElementWithFadeOut; },
  saveOldStyle: function() { return saveOldStyle; },
  transitionStore: function() { return transitionStore; },
  updateProps: function() { return updateProps; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


// Stored properties for further transition.
var transitionStore = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
/**
 * Return null if animation is disabled.
 */
function getAnimationConfig(animationType, animatableModel, dataIndex,
// Extra opts can override the option in animatable model.
extraOpts,
// TODO It's only for pictorial bar now.
extraDelayParams) {
  var animationPayload;
  // Check if there is global animation configuration from dataZoom/resize can override the config in option.
  // If animation is enabled. Will use this animation config in payload.
  // If animation is disabled. Just ignore it.
  if (animatableModel && animatableModel.ecModel) {
    var updatePayload = animatableModel.ecModel.getUpdatePayload();
    animationPayload = updatePayload && updatePayload.animation;
  }
  var animationEnabled = animatableModel && animatableModel.isAnimationEnabled();
  var isUpdate = animationType === 'update';
  if (animationEnabled) {
    var duration = void 0;
    var easing = void 0;
    var delay = void 0;
    if (extraOpts) {
      duration = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(extraOpts.duration, 200);
      easing = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve2)(extraOpts.easing, 'cubicOut');
      delay = 0;
    } else {
      duration = animatableModel.getShallow(isUpdate ? 'animationDurationUpdate' : 'animationDuration');
      easing = animatableModel.getShallow(isUpdate ? 'animationEasingUpdate' : 'animationEasing');
      delay = animatableModel.getShallow(isUpdate ? 'animationDelayUpdate' : 'animationDelay');
    }
    // animation from payload has highest priority.
    if (animationPayload) {
      animationPayload.duration != null && (duration = animationPayload.duration);
      animationPayload.easing != null && (easing = animationPayload.easing);
      animationPayload.delay != null && (delay = animationPayload.delay);
    }
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(delay)) {
      delay = delay(dataIndex, extraDelayParams);
    }
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(duration)) {
      duration = duration(dataIndex);
    }
    var config = {
      duration: duration || 0,
      delay: delay,
      easing: easing
    };
    return config;
  } else {
    return null;
  }
}
function animateOrSetProps(animationType, el, props, animatableModel, dataIndex, cb, during) {
  var isFrom = false;
  var removeOpt;
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataIndex)) {
    during = cb;
    cb = dataIndex;
    dataIndex = null;
  } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(dataIndex)) {
    cb = dataIndex.cb;
    during = dataIndex.during;
    isFrom = dataIndex.isFrom;
    removeOpt = dataIndex.removeOpt;
    dataIndex = dataIndex.dataIndex;
  }
  var isRemove = animationType === 'leave';
  if (!isRemove) {
    // Must stop the remove animation.
    el.stopAnimation('leave');
  }
  var animationConfig = getAnimationConfig(animationType, animatableModel, dataIndex, isRemove ? removeOpt || {} : null, animatableModel && animatableModel.getAnimationDelayParams ? animatableModel.getAnimationDelayParams(el, dataIndex) : null);
  if (animationConfig && animationConfig.duration > 0) {
    var duration = animationConfig.duration;
    var animationDelay = animationConfig.delay;
    var animationEasing = animationConfig.easing;
    var animateConfig = {
      duration: duration,
      delay: animationDelay || 0,
      easing: animationEasing,
      done: cb,
      force: !!cb || !!during,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !isRemove,
      scope: animationType,
      during: during
    };
    isFrom ? el.animateFrom(props, animateConfig) : el.animateTo(props, animateConfig);
  } else {
    el.stopAnimation();
    // If `isFrom`, the props is the "from" props.
    !isFrom && el.attr(props);
    // Call during at least once.
    during && during(1);
    cb && cb();
  }
}
/**
 * Update graphic element properties with or without animation according to the
 * configuration in series.
 *
 * Caution: this method will stop previous animation.
 * So do not use this method to one element twice before
 * animation starts, unless you know what you are doing.
 * @example
 *     graphic.updateProps(el, {
 *         position: [100, 100]
 *     }, seriesModel, dataIndex, function () { console.log('Animation done!'); });
 *     // Or
 *     graphic.updateProps(el, {
 *         position: [100, 100]
 *     }, seriesModel, function () { console.log('Animation done!'); });
 */
function updateProps(el, props,
// TODO: TYPE AnimatableModel
animatableModel, dataIndex, cb, during) {
  animateOrSetProps('update', el, props, animatableModel, dataIndex, cb, during);
}

/**
 * Init graphic element properties with or without animation according to the
 * configuration in series.
 *
 * Caution: this method will stop previous animation.
 * So do not use this method to one element twice before
 * animation starts, unless you know what you are doing.
 */
function initProps(el, props, animatableModel, dataIndex, cb, during) {
  animateOrSetProps('enter', el, props, animatableModel, dataIndex, cb, during);
}
/**
 * If element is removed.
 * It can determine if element is having remove animation.
 */
function isElementRemoved(el) {
  if (!el.__zr) {
    return true;
  }
  for (var i = 0; i < el.animators.length; i++) {
    var animator = el.animators[i];
    if (animator.scope === 'leave') {
      return true;
    }
  }
  return false;
}
/**
 * Remove graphic element
 */
function removeElement(el, props, animatableModel, dataIndex, cb, during) {
  // Don't do remove animation twice.
  if (isElementRemoved(el)) {
    return;
  }
  animateOrSetProps('leave', el, props, animatableModel, dataIndex, cb, during);
}
function fadeOutDisplayable(el, animatableModel, dataIndex, done) {
  el.removeTextContent();
  el.removeTextGuideLine();
  removeElement(el, {
    style: {
      opacity: 0
    }
  }, animatableModel, dataIndex, done);
}
function removeElementWithFadeOut(el, animatableModel, dataIndex) {
  function doRemove() {
    el.parent && el.parent.remove(el);
  }
  // Hide label and labelLine first
  // TODO Also use fade out animation?
  if (!el.isGroup) {
    fadeOutDisplayable(el, animatableModel, dataIndex, doRemove);
  } else {
    el.traverse(function (disp) {
      if (!disp.isGroup) {
        // Can invoke doRemove multiple times.
        fadeOutDisplayable(disp, animatableModel, dataIndex, doRemove);
      }
    });
  }
}
/**
 * Save old style for style transition in universalTransition module.
 * It's used when element will be reused in each render.
 * For chart like map, heatmap, which will always create new element.
 * We don't need to save this because universalTransition can get old style from the old element
 */
function saveOldStyle(el) {
  transitionStore(el).oldStyle = el.style;
}
function getOldStyle(el) {
  return transitionStore(el).oldStyle;
}

}),
68401: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyKeyframeAnimation: function() { return applyKeyframeAnimation; },
  stopPreviousKeyframeAnimationAndRestore: function() { return stopPreviousKeyframeAnimationAndRestore; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _customGraphicTransition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80844);
/* ESM import */var _basicTransition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17524);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





var getStateToRestore = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
var KEYFRAME_EXCLUDE_KEYS = ['percent', 'easing', 'shape', 'style', 'extra'];
/**
 * Stop previous keyframe animation and restore the attributes.
 * Avoid new keyframe animation starts with wrong internal state when the percent: 0 is not set.
 */
function stopPreviousKeyframeAnimationAndRestore(el) {
  // Stop previous keyframe animation.
  el.stopAnimation('keyframe');
  // Restore
  el.attr(getStateToRestore(el));
}
function applyKeyframeAnimation(el, animationOpts, animatableModel) {
  if (!animatableModel.isAnimationEnabled() || !animationOpts) {
    return;
  }
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(animationOpts)) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(animationOpts, function (singleAnimationOpts) {
      applyKeyframeAnimation(el, singleAnimationOpts, animatableModel);
    });
    return;
  }
  var keyframes = animationOpts.keyframes;
  var duration = animationOpts.duration;
  if (animatableModel && duration == null) {
    // Default to use duration of config.
    // NOTE: animation config from payload will be ignored because they are mainly for transitions.
    var config = (0,_basicTransition_js__WEBPACK_IMPORTED_MODULE_2__.getAnimationConfig)('enter', animatableModel, 0);
    duration = config && config.duration;
  }
  if (!keyframes || !duration) {
    return;
  }
  var stateToRestore = getStateToRestore(el);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(_customGraphicTransition_js__WEBPACK_IMPORTED_MODULE_3__.ELEMENT_ANIMATABLE_PROPS, function (targetPropName) {
    if (targetPropName && !el[targetPropName]) {
      return;
    }
    var animator;
    var endFrameIsSet = false;
    // Sort keyframes by percent.
    keyframes.sort(function (a, b) {
      return a.percent - b.percent;
    });
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(keyframes, function (kf) {
      // Stop current animation.
      var animators = el.animators;
      var kfValues = targetPropName ? kf[targetPropName] : kf;
      if (false) {}
      if (!kfValues) {
        return;
      }
      var propKeys = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(kfValues);
      if (!targetPropName) {
        // PENDING performance?
        propKeys = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.filter)(propKeys, function (key) {
          return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(KEYFRAME_EXCLUDE_KEYS, key) < 0;
        });
      }
      if (!propKeys.length) {
        return;
      }
      if (!animator) {
        animator = el.animate(targetPropName, animationOpts.loop, true);
        animator.scope = 'keyframe';
      }
      for (var i = 0; i < animators.length; i++) {
        // Stop all other animation that is not keyframe.
        if (animators[i] !== animator && animators[i].targetName === animator.targetName) {
          animators[i].stopTracks(propKeys);
        }
      }
      targetPropName && (stateToRestore[targetPropName] = stateToRestore[targetPropName] || {});
      var savedTarget = targetPropName ? stateToRestore[targetPropName] : stateToRestore;
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(propKeys, function (key) {
        // Save original value.
        savedTarget[key] = ((targetPropName ? el[targetPropName] : el) || {})[key];
      });
      animator.whenWithKeys(duration * kf.percent, kfValues, propKeys, kf.easing);
    });
    if (!animator) {
      return;
    }
    if (false) {}
    animator.delay(animationOpts.delay || 0).duration(duration).start(animationOpts.easing);
  });
}

}),
80844: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ELEMENT_ANIMATABLE_PROPS: function() { return ELEMENT_ANIMATABLE_PROPS; },
  applyLeaveTransition: function() { return applyLeaveTransition; },
  applyUpdateTransition: function() { return applyUpdateTransition; },
  isTransitionAll: function() { return isTransitionAll; },
  updateLeaveTo: function() { return updateLeaveTo; }
});
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46451);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_animation_Animator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2076);
/* ESM import */var zrender_lib_graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90635);
/* ESM import */var _basicTransition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17524);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49678);
/* ESM import */var zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9757);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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








var LEGACY_TRANSFORM_PROPS_MAP = {
  position: ['x', 'y'],
  scale: ['scaleX', 'scaleY'],
  origin: ['originX', 'originY']
};
var LEGACY_TRANSFORM_PROPS = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(LEGACY_TRANSFORM_PROPS_MAP);
var TRANSFORM_PROPS_MAP = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.reduce)(zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__.TRANSFORMABLE_PROPS, function (obj, key) {
  obj[key] = 1;
  return obj;
}, {});
var transformPropNamesStr = zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__.TRANSFORMABLE_PROPS.join(', ');
// '' means root
var ELEMENT_ANIMATABLE_PROPS = ['', 'style', 'shape', 'extra'];
;
var transitionInnerStore = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_2__.makeInner)();
;
function getElementAnimationConfig(animationType, el, elOption, parentModel, dataIndex) {
  var animationProp = animationType + "Animation";
  var config = (0,_basicTransition_js__WEBPACK_IMPORTED_MODULE_3__.getAnimationConfig)(animationType, parentModel, dataIndex) || {};
  var userDuring = transitionInnerStore(el).userDuring;
  // Only set when duration is > 0 and it's need to be animated.
  if (config.duration > 0) {
    // For simplicity, if during not specified, the previous during will not work any more.
    config.during = userDuring ? (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind)(duringCall, {
      el: el,
      userDuring: userDuring
    }) : null;
    config.setToFinal = true;
    config.scope = animationType;
  }
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)(config, elOption[animationProp]);
  return config;
}
function applyUpdateTransition(el, elOption, animatableModel, opts) {
  opts = opts || {};
  var dataIndex = opts.dataIndex,
    isInit = opts.isInit,
    clearStyle = opts.clearStyle;
  var hasAnimation = animatableModel.isAnimationEnabled();
  // Save the meta info for further morphing. Like apply on the sub morphing elements.
  var store = transitionInnerStore(el);
  var styleOpt = elOption.style;
  store.userDuring = elOption.during;
  var transFromProps = {};
  var propsToSet = {};
  prepareTransformAllPropsFinal(el, elOption, propsToSet);
  prepareShapeOrExtraAllPropsFinal('shape', elOption, propsToSet);
  prepareShapeOrExtraAllPropsFinal('extra', elOption, propsToSet);
  if (!isInit && hasAnimation) {
    prepareTransformTransitionFrom(el, elOption, transFromProps);
    prepareShapeOrExtraTransitionFrom('shape', el, elOption, transFromProps);
    prepareShapeOrExtraTransitionFrom('extra', el, elOption, transFromProps);
    prepareStyleTransitionFrom(el, elOption, styleOpt, transFromProps);
  }
  propsToSet.style = styleOpt;
  applyPropsDirectly(el, propsToSet, clearStyle);
  applyMiscProps(el, elOption);
  if (hasAnimation) {
    if (isInit) {
      var enterFromProps_1 = {};
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(ELEMENT_ANIMATABLE_PROPS, function (propName) {
        var prop = propName ? elOption[propName] : elOption;
        if (prop && prop.enterFrom) {
          if (propName) {
            enterFromProps_1[propName] = enterFromProps_1[propName] || {};
          }
          (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)(propName ? enterFromProps_1[propName] : enterFromProps_1, prop.enterFrom);
        }
      });
      var config = getElementAnimationConfig('enter', el, elOption, animatableModel, dataIndex);
      if (config.duration > 0) {
        el.animateFrom(enterFromProps_1, config);
      }
    } else {
      applyPropsTransition(el, elOption, dataIndex || 0, animatableModel, transFromProps);
    }
  }
  // Store leave to be used in leave transition.
  updateLeaveTo(el, elOption);
  styleOpt ? el.dirty() : el.markRedraw();
}
function updateLeaveTo(el, elOption) {
  // Try merge to previous set leaveTo
  var leaveToProps = transitionInnerStore(el).leaveToProps;
  for (var i = 0; i < ELEMENT_ANIMATABLE_PROPS.length; i++) {
    var propName = ELEMENT_ANIMATABLE_PROPS[i];
    var prop = propName ? elOption[propName] : elOption;
    if (prop && prop.leaveTo) {
      if (!leaveToProps) {
        leaveToProps = transitionInnerStore(el).leaveToProps = {};
      }
      if (propName) {
        leaveToProps[propName] = leaveToProps[propName] || {};
      }
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)(propName ? leaveToProps[propName] : leaveToProps, prop.leaveTo);
    }
  }
}
function applyLeaveTransition(el, elOption, animatableModel, onRemove) {
  if (el) {
    var parent_1 = el.parent;
    var leaveToProps = transitionInnerStore(el).leaveToProps;
    if (leaveToProps) {
      // TODO TODO use leave after leaveAnimation in series is introduced
      // TODO Data index?
      var config = getElementAnimationConfig('update', el, elOption, animatableModel, 0);
      config.done = function () {
        parent_1.remove(el);
        onRemove && onRemove();
      };
      el.animateTo(leaveToProps, config);
    } else {
      parent_1.remove(el);
      onRemove && onRemove();
    }
  }
}
function isTransitionAll(transition) {
  return transition === 'all';
}
function applyPropsDirectly(el,
// Can be null/undefined
allPropsFinal, clearStyle) {
  var styleOpt = allPropsFinal.style;
  if (!el.isGroup && styleOpt) {
    if (clearStyle) {
      el.useStyle({});
      // When style object changed, how to trade the existing animation?
      // It is probably complicated and not needed to cover all the cases.
      // But still need consider the case:
      // (1) When using init animation on `style.opacity`, and before the animation
      //     ended users triggers an update by mousewhel. At that time the init
      //     animation should better be continued rather than terminated.
      //     So after `useStyle` called, we should change the animation target manually
      //     to continue the effect of the init animation.
      // (2) PENDING: If the previous animation targeted at a `val1`, and currently we need
      //     to update the value to `val2` and no animation declared, should be terminate
      //     the previous animation or just modify the target of the animation?
      //     Therotically That will happen not only on `style` but also on `shape` and
      //     `transfrom` props. But we haven't handle this case at present yet.
      // (3) PENDING: Is it proper to visit `animators` and `targetName`?
      var animators = el.animators;
      for (var i = 0; i < animators.length; i++) {
        var animator = animators[i];
        // targetName is the "topKey".
        if (animator.targetName === 'style') {
          animator.changeTarget(el.style);
        }
      }
    }
    el.setStyle(styleOpt);
  }
  if (allPropsFinal) {
    // Not set style here.
    allPropsFinal.style = null;
    // Set el to the final state firstly.
    allPropsFinal && el.attr(allPropsFinal);
    allPropsFinal.style = styleOpt;
  }
}
function applyPropsTransition(el, elOption, dataIndex, model,
// Can be null/undefined
transFromProps) {
  if (transFromProps) {
    var config = getElementAnimationConfig('update', el, elOption, model, dataIndex);
    if (config.duration > 0) {
      el.animateFrom(transFromProps, config);
    }
  }
}
function applyMiscProps(el, elOption) {
  // Merge by default.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(elOption, 'silent') && (el.silent = elOption.silent);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(elOption, 'ignore') && (el.ignore = elOption.ignore);
  if (el instanceof zrender_lib_graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(elOption, 'invisible') && (el.invisible = elOption.invisible);
  }
  if (el instanceof _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"]) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(elOption, 'autoBatch') && (el.autoBatch = elOption.autoBatch);
  }
}
// Use it to avoid it be exposed to user.
var tmpDuringScope = {};
var transitionDuringAPI = {
  // Usually other props do not need to be changed in animation during.
  setTransform: function (key, val) {
    if (false) {}
    tmpDuringScope.el[key] = val;
    return this;
  },
  getTransform: function (key) {
    if (false) {}
    return tmpDuringScope.el[key];
  },
  setShape: function (key, val) {
    if (false) {}
    var el = tmpDuringScope.el;
    var shape = el.shape || (el.shape = {});
    shape[key] = val;
    el.dirtyShape && el.dirtyShape();
    return this;
  },
  getShape: function (key) {
    if (false) {}
    var shape = tmpDuringScope.el.shape;
    if (shape) {
      return shape[key];
    }
  },
  setStyle: function (key, val) {
    if (false) {}
    var el = tmpDuringScope.el;
    var style = el.style;
    if (style) {
      if (false) {}
      style[key] = val;
      el.dirtyStyle && el.dirtyStyle();
    }
    return this;
  },
  getStyle: function (key) {
    if (false) {}
    var style = tmpDuringScope.el.style;
    if (style) {
      return style[key];
    }
  },
  setExtra: function (key, val) {
    if (false) {}
    var extra = tmpDuringScope.el.extra || (tmpDuringScope.el.extra = {});
    extra[key] = val;
    return this;
  },
  getExtra: function (key) {
    if (false) {}
    var extra = tmpDuringScope.el.extra;
    if (extra) {
      return extra[key];
    }
  }
};
function assertNotReserved(key) {
  if (false) {}
}
function duringCall() {
  // Do not provide "percent" until some requirements come.
  // Because consider thies case:
  // enterFrom: {x: 100, y: 30}, transition: 'x'.
  // And enter duration is different from update duration.
  // Thus it might be confused about the meaning of "percent" in during callback.
  var scope = this;
  var el = scope.el;
  if (!el) {
    return;
  }
  // If el is remove from zr by reason like legend, during still need to called,
  // because el will be added back to zr and the prop value should not be incorrect.
  var latestUserDuring = transitionInnerStore(el).userDuring;
  var scopeUserDuring = scope.userDuring;
  // Ensured a during is only called once in each animation frame.
  // If a during is called multiple times in one frame, maybe some users' calculation logic
  // might be wrong (not sure whether this usage exists).
  // The case of a during might be called twice can be: by default there is a animator for
  // 'x', 'y' when init. Before the init animation finished, call `setOption` to start
  // another animators for 'style'/'shape'/'extra'.
  if (latestUserDuring !== scopeUserDuring) {
    // release
    scope.el = scope.userDuring = null;
    return;
  }
  tmpDuringScope.el = el;
  // Give no `this` to user in "during" calling.
  scopeUserDuring(transitionDuringAPI);
  // FIXME: if in future meet the case that some prop will be both modified in `during` and `state`,
  // consider the issue that the prop might be incorrect when return to "normal" state.
}
function prepareShapeOrExtraTransitionFrom(mainAttr, fromEl, elOption, transFromProps) {
  var attrOpt = elOption[mainAttr];
  if (!attrOpt) {
    return;
  }
  var elPropsInAttr = fromEl[mainAttr];
  var transFromPropsInAttr;
  if (elPropsInAttr) {
    var transition = elOption.transition;
    var attrTransition = attrOpt.transition;
    if (attrTransition) {
      !transFromPropsInAttr && (transFromPropsInAttr = transFromProps[mainAttr] = {});
      if (isTransitionAll(attrTransition)) {
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)(transFromPropsInAttr, elPropsInAttr);
      } else {
        var transitionKeys = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_2__.normalizeToArray)(attrTransition);
        for (var i = 0; i < transitionKeys.length; i++) {
          var key = transitionKeys[i];
          var elVal = elPropsInAttr[key];
          transFromPropsInAttr[key] = elVal;
        }
      }
    } else if (isTransitionAll(transition) || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(transition, mainAttr) >= 0) {
      !transFromPropsInAttr && (transFromPropsInAttr = transFromProps[mainAttr] = {});
      var elPropsInAttrKeys = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(elPropsInAttr);
      for (var i = 0; i < elPropsInAttrKeys.length; i++) {
        var key = elPropsInAttrKeys[i];
        var elVal = elPropsInAttr[key];
        if (isNonStyleTransitionEnabled(attrOpt[key], elVal)) {
          transFromPropsInAttr[key] = elVal;
        }
      }
    }
  }
}
function prepareShapeOrExtraAllPropsFinal(mainAttr, elOption, allProps) {
  var attrOpt = elOption[mainAttr];
  if (!attrOpt) {
    return;
  }
  var allPropsInAttr = allProps[mainAttr] = {};
  var keysInAttr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(attrOpt);
  for (var i = 0; i < keysInAttr.length; i++) {
    var key = keysInAttr[i];
    // To avoid share one object with different element, and
    // to avoid user modify the object inexpectedly, have to clone.
    allPropsInAttr[key] = (0,zrender_lib_animation_Animator_js__WEBPACK_IMPORTED_MODULE_6__.cloneValue)(attrOpt[key]);
  }
}
function prepareTransformTransitionFrom(el, elOption, transFromProps) {
  var transition = elOption.transition;
  var transitionKeys = isTransitionAll(transition) ? zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__.TRANSFORMABLE_PROPS : (0,_util_model_js__WEBPACK_IMPORTED_MODULE_2__.normalizeToArray)(transition || []);
  for (var i = 0; i < transitionKeys.length; i++) {
    var key = transitionKeys[i];
    if (key === 'style' || key === 'shape' || key === 'extra') {
      continue;
    }
    var elVal = el[key];
    if (false) {}
    // Do not clone, animator will perform that clone.
    transFromProps[key] = elVal;
  }
}
function prepareTransformAllPropsFinal(el, elOption, allProps) {
  for (var i = 0; i < LEGACY_TRANSFORM_PROPS.length; i++) {
    var legacyName = LEGACY_TRANSFORM_PROPS[i];
    var xyName = LEGACY_TRANSFORM_PROPS_MAP[legacyName];
    var legacyArr = elOption[legacyName];
    if (legacyArr) {
      allProps[xyName[0]] = legacyArr[0];
      allProps[xyName[1]] = legacyArr[1];
    }
  }
  for (var i = 0; i < zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__.TRANSFORMABLE_PROPS.length; i++) {
    var key = zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__.TRANSFORMABLE_PROPS[i];
    if (elOption[key] != null) {
      allProps[key] = elOption[key];
    }
  }
}
function prepareStyleTransitionFrom(fromEl, elOption, styleOpt, transFromProps) {
  if (!styleOpt) {
    return;
  }
  var fromElStyle = fromEl.style;
  var transFromStyleProps;
  if (fromElStyle) {
    var styleTransition = styleOpt.transition;
    var elTransition = elOption.transition;
    if (styleTransition && !isTransitionAll(styleTransition)) {
      var transitionKeys = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_2__.normalizeToArray)(styleTransition);
      !transFromStyleProps && (transFromStyleProps = transFromProps.style = {});
      for (var i = 0; i < transitionKeys.length; i++) {
        var key = transitionKeys[i];
        var elVal = fromElStyle[key];
        // Do not clone, see `checkNonStyleTansitionRefer`.
        transFromStyleProps[key] = elVal;
      }
    } else if (fromEl.getAnimationStyleProps && (isTransitionAll(elTransition) || isTransitionAll(styleTransition) || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(elTransition, 'style') >= 0)) {
      var animationProps = fromEl.getAnimationStyleProps();
      var animationStyleProps = animationProps ? animationProps.style : null;
      if (animationStyleProps) {
        !transFromStyleProps && (transFromStyleProps = transFromProps.style = {});
        var styleKeys = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(styleOpt);
        for (var i = 0; i < styleKeys.length; i++) {
          var key = styleKeys[i];
          if (animationStyleProps[key]) {
            var elVal = fromElStyle[key];
            transFromStyleProps[key] = elVal;
          }
        }
      }
    }
  }
}
function isNonStyleTransitionEnabled(optVal, elVal) {
  // The same as `checkNonStyleTansitionRefer`.
  return !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArrayLike)(optVal) ? optVal != null && isFinite(optVal) : optVal !== elVal;
}
var checkTransformPropRefer;
if (false) {}

}),

}]);