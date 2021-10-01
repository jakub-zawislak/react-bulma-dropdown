(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Dropdown"] = factory(require("react"), require("react-dom"));
	else
		root["Dropdown"] = factory(root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-portal/es/utils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
// CONCATENATED MODULE: ./node_modules/react-portal/es/Portal.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal_Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return external_react_dom_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(external_react_default.a.Component);

Portal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};

/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ./node_modules/react-portal/es/LegacyPortal.js
var LegacyPortal_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function LegacyPortal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LegacyPortal_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function LegacyPortal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var LegacyPortal_Portal = function (_React$Component) {
  LegacyPortal_inherits(Portal, _React$Component);

  function Portal() {
    LegacyPortal_classCallCheck(this, Portal);

    return LegacyPortal_possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  LegacyPortal_createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      external_react_dom_default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = external_react_default.a.cloneElement(this.props.children);
      }

      this.portal = external_react_dom_default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(external_react_default.a.Component);

/* harmony default export */ var LegacyPortal = (LegacyPortal_Portal);


LegacyPortal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};
// CONCATENATED MODULE: ./node_modules/react-portal/es/PortalCompat.js





var PortalCompat_Portal = void 0;

if (external_react_dom_default.a.createPortal) {
  PortalCompat_Portal = es_Portal;
} else {
  PortalCompat_Portal = LegacyPortal;
}

/* harmony default export */ var PortalCompat = (PortalCompat_Portal);
// CONCATENATED MODULE: ./node_modules/react-cool-onclickoutside/dist/index.esm.js


var canUsePassiveEvents = (function () {
  if (typeof window === "undefined" || typeof window.addEventListener !== "function") return false;
  var passive = false;
  var options = Object.defineProperty({}, "passive", {
    // eslint-disable-next-line getter-return
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {
    return null;
  };

  window.addEventListener("test", noop, options);
  window.removeEventListener("test", noop, options);
  return passive;
});

var DEFAULT_IGNORE_CLASS = "ignore-onclickoutside";

var hasIgnoreClass = function hasIgnoreClass(e, ignoreClass) {
  var el = e.target || e;

  while (el) {
    var _el$classList;

    if ((_el$classList = el.classList) != null && _el$classList.contains(ignoreClass)) return true;
    el = el.parentElement;
  }

  return false;
};

var clickedOnScrollbar = function clickedOnScrollbar(e) {
  return document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY;
};

var getEventOptions = function getEventOptions(type) {
  return type.includes("touch") && canUsePassiveEvents() ? {
    passive: true
  } : false;
};

var index_esm_useOnclickOutside = function useOnclickOutside(callback, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      refsOpt = _ref.refs,
      disabled = _ref.disabled,
      _ref$eventTypes = _ref.eventTypes,
      eventTypes = _ref$eventTypes === void 0 ? ["mousedown", "touchstart"] : _ref$eventTypes,
      excludeScrollbar = _ref.excludeScrollbar,
      _ref$ignoreClass = _ref.ignoreClass,
      ignoreClass = _ref$ignoreClass === void 0 ? DEFAULT_IGNORE_CLASS : _ref$ignoreClass,
      _ref$detectIFrame = _ref.detectIFrame,
      detectIFrame = _ref$detectIFrame === void 0 ? true : _ref$detectIFrame;

  var _useState = Object(external_react_["useState"])([]),
      refsState = _useState[0],
      setRefsState = _useState[1];

  var callbackRef = Object(external_react_["useRef"])(callback);
  callbackRef.current = callback;
  var ref = Object(external_react_["useCallback"])(function (el) {
    return setRefsState(function (prevState) {
      return [].concat(prevState, [{
        current: el
      }]);
    });
  }, []);
  Object(external_react_["useEffect"])(function () {
    if (!(refsOpt != null && refsOpt.length) && !refsState.length) return;

    var getEls = function getEls() {
      var els = [];
      (refsOpt || refsState).forEach(function (_ref2) {
        var current = _ref2.current;
        return current && els.push(current);
      });
      return els;
    };

    var handler = function handler(e) {
      if (!hasIgnoreClass(e, ignoreClass) && !(excludeScrollbar && clickedOnScrollbar(e)) && getEls().every(function (el) {
        return !el.contains(e.target);
      })) callbackRef.current(e);
    };

    var blurHandler = function blurHandler(e) {
      return (// On firefox the iframe becomes document.activeElement in the next event loop
        setTimeout(function () {
          var _document = document,
              activeElement = _document.activeElement;
          if ((activeElement == null ? void 0 : activeElement.tagName) === "IFRAME" && !hasIgnoreClass(activeElement, ignoreClass) && !getEls().includes(activeElement)) callbackRef.current(e);
        }, 0)
      );
    };

    var removeEventListener = function removeEventListener() {
      eventTypes.forEach(function (type) {
        return (// @ts-expect-error
          document.removeEventListener(type, handler, getEventOptions(type))
        );
      });
      if (detectIFrame) window.removeEventListener("blur", blurHandler);
    };

    if (disabled) {
      removeEventListener();
      return;
    }

    eventTypes.forEach(function (type) {
      return document.addEventListener(type, handler, getEventOptions(type));
    });
    if (detectIFrame) window.addEventListener("blur", blurHandler); // eslint-disable-next-line consistent-return

    return function () {
      return removeEventListener();
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [refsState, ignoreClass, excludeScrollbar, disabled, detectIFrame, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(eventTypes)]);
  return ref;
};

/* harmony default export */ var index_esm = (index_esm_useOnclickOutside);


// CONCATENATED MODULE: ./src/ts/Dropdown.tsx





const Dropdown = ({ children, className = '', trigger = 'Open dropdown', margin = 20, portal = null, isAnimated = true, openOnMount = false, hideOnLinkClick = true, }) => {
    const ref = Object(external_react_["useRef"])(null);
    const [isOpen, setOpen] = Object(external_react_["useState"])(openOnMount);
    const onToggleClick = () => {
        if (isOpen) {
            hide();
        }
        else {
            open();
        }
    };
    const hide = () => {
        setOpen(false);
    };
    const open = () => {
        setOpen(true);
    };
    const handleContentClick = (e) => {
        if (hideOnLinkClick &&
            e.target.closest('a.dropdown-item')) {
            hide();
        }
    };
    const triggerEl = typeof trigger === 'string' ? (external_react_default.a.createElement("button", { className: "button" }, trigger)) : (trigger);
    return (external_react_default.a.createElement("div", { ref: ref, className: "dropdown" },
        external_react_default.a.createElement(Trigger, { onClick: onToggleClick }, triggerEl),
        isOpen && (external_react_default.a.createElement(Menu, { onClick: handleContentClick, className: className, ref: ref, onClickOutside: hide, isAnimated: isAnimated, portal: portal, margin: margin }, children))));
};
Dropdown.propTypes = {
    children: prop_types["node"],
    className: prop_types["string"],
    trigger: prop_types["oneOfType"]([prop_types["string"], prop_types["node"]]),
    margin: prop_types["number"],
    portal: prop_types["instanceOf"](HTMLElement),
    isAnimated: prop_types["bool"],
    openOnMount: prop_types["bool"],
    hideOnLinkClick: prop_types["bool"],
};
/* harmony default export */ var ts_Dropdown = (Dropdown);
const Trigger = ({ children, onClick }) => {
    return (external_react_default.a.createElement("div", { className: "dropdown-trigger", onClick: e => {
            e.stopPropagation();
            onClick();
        } }, children));
};
const Menu = Object(external_react_["forwardRef"])((props, ref) => {
    const { children, onClick, className, onClickOutside, isAnimated, portal, margin, } = props;
    const contentRef = Object(external_react_["useRef"])(null);
    const triggerRef = Object(external_react_["useRef"])();
    const [top, setTop] = Object(external_react_["useState"])(0);
    const [left, setLeft] = Object(external_react_["useState"])(0);
    const [maxHeight, setMaxHeight] = Object(external_react_["useState"])(0);
    const [isMenuMounted, setMenuMounted] = Object(external_react_["useState"])(false);
    const menuRef = index_esm(onClickOutside);
    Object(external_react_["useEffect"])(() => {
        if (!ref.current) {
            return;
        }
        const elToListen = portal === null ? window : portal;
        setMenuMounted(true);
        triggerRef.current = ref.current.querySelector('.dropdown-trigger');
        calculatePos();
        elToListen.addEventListener('scroll', calculatePos);
        return () => elToListen.removeEventListener('scroll', calculatePos);
    }, []);
    const calculatePos = () => {
        if (!triggerRef.current) {
            return;
        }
        let portalScrollY, portalScrollX, portalHeight, portalOffsetX, portalOffsetY;
        if (portal === null) {
            portalScrollY = window.scrollY;
            portalScrollX = window.scrollX;
            portalHeight = window.innerHeight;
            portalOffsetX = 0;
            portalOffsetY = 0;
        }
        else {
            const portalRect = portal.getBoundingClientRect();
            portalScrollY = portal.scrollTop;
            portalScrollX = portal.scrollLeft;
            portalHeight = portal.offsetHeight;
            portalOffsetX = portalRect.x;
            portalOffsetY = portalRect.y;
        }
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const triggerYBottom = triggerRect.y + triggerRect.height;
        setTop(triggerYBottom + portalScrollY - portalOffsetY);
        setLeft(triggerRect.x + portalScrollX - portalOffsetX);
        setMaxHeight(portalHeight - triggerYBottom + portalOffsetY - margin);
    };
    return (external_react_default.a.createElement(PortalCompat, { node: portal },
        external_react_default.a.createElement("div", { className: classnames_default()('dropdown-portal', className, {
                'is-active': isMenuMounted,
                'is-animated': isAnimated,
            }) },
            external_react_default.a.createElement("div", { className: "dropdown-menu", style: { top: `${top}px`, left: `${left}px` }, ref: menuRef },
                external_react_default.a.createElement("div", { className: "dropdown-content", onClick: onClick, ref: contentRef, style: { maxHeight: `${maxHeight}px` } }, children)))));
});

// EXTERNAL MODULE: ./src/scss/index.scss
var scss = __webpack_require__(6);

// CONCATENATED MODULE: ./src/ts/index.ts


/* harmony default export */ var ts = __webpack_exports__["default"] = (ts_Dropdown);


/***/ })
/******/ ]);
});