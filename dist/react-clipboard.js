(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clipboard"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["clipboard", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactClipboard"] = factory(require("clipboard"), require("prop-types"), require("react"));
	else
		root["ReactClipboard"] = factory(root["ClipboardJS"], root["PropTypes"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_clipboard__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ClipboardButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClipboardButton, _React$Component);

  function ClipboardButton() {
    _classCallCheck(this, ClipboardButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClipboardButton).apply(this, arguments));
  }

  _createClass(ClipboardButton, [{
    key: "propsWith",
    value: function propsWith(regexp) {
      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var object = {};
      Object.keys(this.props).forEach(function (key) {
        if (key.search(regexp) !== -1) {
          var objectKey = remove ? key.replace(regexp, '') : key;
          object[objectKey] = this.props[key];
        }
      }, this);
      return object;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clipboard && this.clipboard.destroy();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Support old API by trying to assign this.props.options first;
      var options = this.props.options || this.propsWith(/^option-/, true);
      var element = react__WEBPACK_IMPORTED_MODULE_0___default.a.version.match(/0\.13(.*)/) ? this.refs.element.getDOMNode() : this.element;

      var Clipboard = __webpack_require__(/*! clipboard */ "clipboard");

      this.clipboard = new Clipboard(element, options);
      var callbacks = this.propsWith(/^on/, true);
      Object.keys(callbacks).forEach(function (callback) {
        this.clipboard.on(callback.toLowerCase(), this.props['on' + callback]);
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var attributes = _objectSpread({
        title: this.props.title || '',
        type: this.getType(),
        className: this.props.className || '',
        style: this.props.style || {},
        ref: function ref(element) {
          _this.element = element;
        },
        onClick: this.props.onClick
      }, this.propsWith(/^data-/), this.propsWith(/^button-/, true));

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.getComponent(), attributes, this.props.children);
    }
  }, {
    key: "getType",
    value: function getType() {
      if (this.getComponent() === 'button' || this.getComponent() === 'input') {
        return this.props.type || 'button';
      } else {
        return undefined;
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.props.component || 'button';
    }
  }]);

  return ClipboardButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ClipboardButton, "propTypes", {
  options: function options(props, propName, componentName) {
    var options = props[propName];

    if (options && _typeof(options) !== 'object' || Array.isArray(options)) {
      return new Error("Invalid props '".concat(propName, "' supplied to '").concat(componentName, "'. ") + "'".concat(propName, "' is not an object."));
    }

    if (props['option-text'] !== undefined) {
      var optionText = props['option-text'];

      if (typeof optionText !== 'function') {
        return new Error("Invalid props 'option-text' supplied to '".concat(componentName, "'. ") + "'option-text' is not a function.");
      }
    }
  },
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
});

_defineProperty(ClipboardButton, "defaultProps", {
  onClick: function onClick() {}
  /* Returns a object with all props that fulfill a certain naming pattern
   *
   * @param {RegExp} regexp - Regular expression representing which pattern
   *                          you'll be searching for.
   * @param {Boolean} remove - Determines if the regular expression should be
   *                           removed when transmitting the key from the props
   *                           to the new object.
   *
   * e.g:
   *
   * // Considering:
   * // this.props = {option-foo: 1, onBar: 2, data-foobar: 3 data-baz: 4};
   *
   * // *RegExps not using // so that this comment doesn't break up
   * this.propsWith(option-*, true); // returns {foo: 1}
   * this.propsWith(on*, true); // returns {Bar: 2}
   * this.propsWith(data-*); // returns {data-foobar: 1, data-baz: 4}
   */

});

/* harmony default export */ __webpack_exports__["default"] = (ClipboardButton);

/***/ }),

/***/ "clipboard":
/*!********************************************************************************************************!*\
  !*** external {"root":"ClipboardJS","amd":"clipboard","commonjs":"clipboard","commonjs2":"clipboard"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_clipboard__;

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","amd":"prop-types","commonjs":"prop-types","commonjs2":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","amd":"react","commonjs":"react","commonjs2":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC9leHRlcm5hbCB7XCJyb290XCI6XCJDbGlwYm9hcmRKU1wiLFwiYW1kXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzMlwiOlwiY2xpcGJvYXJkXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIn0iXSwibmFtZXMiOlsiQ2xpcGJvYXJkQnV0dG9uIiwicmVnZXhwIiwicmVtb3ZlIiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsInByb3BzIiwiZm9yRWFjaCIsImtleSIsInNlYXJjaCIsIm9iamVjdEtleSIsInJlcGxhY2UiLCJjbGlwYm9hcmQiLCJkZXN0cm95Iiwib3B0aW9ucyIsInByb3BzV2l0aCIsImVsZW1lbnQiLCJSZWFjdCIsInZlcnNpb24iLCJtYXRjaCIsInJlZnMiLCJnZXRET01Ob2RlIiwiQ2xpcGJvYXJkIiwicmVxdWlyZSIsImNhbGxiYWNrcyIsImNhbGxiYWNrIiwib24iLCJ0b0xvd2VyQ2FzZSIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsInR5cGUiLCJnZXRUeXBlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyZWYiLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsImdldENvbXBvbmVudCIsImNoaWxkcmVuIiwidW5kZWZpbmVkIiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJvcHRpb25UZXh0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJudW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0lBRU1BLGU7Ozs7Ozs7Ozs7Ozs7OEJBcURNQyxNLEVBQXNCO0FBQUEsVUFBZEMsTUFBYyx1RUFBUCxL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a0IsQ0FBcEI7QUFyQk8sQzs7Z0JBRGZILGUsa0JBK0JrQjtBQUNwQm1DLFNBQU8sRUFBRSxtQkFBVyxDQUFFO0FBR3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSnNCLEM7O0FBc0ZUbkMsOEVBQWYsRTs7Ozs7Ozs7Ozs7QUN4SEEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicmVhY3QtY2xpcGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2xpcGJvYXJkXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNsaXBib2FyZFwiLCBcInByb3AtdHlwZXNcIiwgXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENsaXBib2FyZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNsaXBib2FyZFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDbGlwYm9hcmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJDbGlwYm9hcmRKU1wiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpcGJvYXJkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcHJvcF90eXBlc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIENsaXBib2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb3B0aW9uczogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCBwcm9wcyAnJHtwcm9wTmFtZX0nIHN1cHBsaWVkIHRvICcke2NvbXBvbmVudE5hbWV9Jy4gYCArXG4gICAgICAgIGAnJHtwcm9wTmFtZX0nIGlzIG5vdCBhbiBvYmplY3QuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wc1snb3B0aW9uLXRleHQnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvblRleHQgPSBwcm9wc1snb3B0aW9uLXRleHQnXTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25UZXh0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCBwcm9wcyAnb3B0aW9uLXRleHQnIHN1cHBsaWVkIHRvICcke2NvbXBvbmVudE5hbWV9Jy4gYCArXG4gICAgICAgICAgYCdvcHRpb24tdGV4dCcgaXMgbm90IGEgZnVuY3Rpb24uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKCkge30sXG4gIH1cblxuICAvKiBSZXR1cm5zIGEgb2JqZWN0IHdpdGggYWxsIHByb3BzIHRoYXQgZnVsZmlsbCBhIGNlcnRhaW4gbmFtaW5nIHBhdHRlcm5cbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4cCAtIFJlZ3VsYXIgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgd2hpY2ggcGF0dGVyblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgeW91J2xsIGJlIHNlYXJjaGluZyBmb3IuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3ZlIC0gRGV0ZXJtaW5lcyBpZiB0aGUgcmVndWxhciBleHByZXNzaW9uIHNob3VsZCBiZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQgd2hlbiB0cmFuc21pdHRpbmcgdGhlIGtleSBmcm9tIHRoZSBwcm9wc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHRoZSBuZXcgb2JqZWN0LlxuICAgKlxuICAgKiBlLmc6XG4gICAqXG4gICAqIC8vIENvbnNpZGVyaW5nOlxuICAgKiAvLyB0aGlzLnByb3BzID0ge29wdGlvbi1mb286IDEsIG9uQmFyOiAyLCBkYXRhLWZvb2JhcjogMyBkYXRhLWJhejogNH07XG4gICAqXG4gICAqIC8vICpSZWdFeHBzIG5vdCB1c2luZyAvLyBzbyB0aGF0IHRoaXMgY29tbWVudCBkb2Vzbid0IGJyZWFrIHVwXG4gICAqIHRoaXMucHJvcHNXaXRoKG9wdGlvbi0qLCB0cnVlKTsgLy8gcmV0dXJucyB7Zm9vOiAxfVxuICAgKiB0aGlzLnByb3BzV2l0aChvbiosIHRydWUpOyAvLyByZXR1cm5zIHtCYXI6IDJ9XG4gICAqIHRoaXMucHJvcHNXaXRoKGRhdGEtKik7IC8vIHJldHVybnMge2RhdGEtZm9vYmFyOiAxLCBkYXRhLWJhejogNH1cbiAgICovXG4gIHByb3BzV2l0aChyZWdleHAsIHJlbW92ZT1mYWxzZSkge1xuICAgIGNvbnN0IG9iamVjdCA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkuc2VhcmNoKHJlZ2V4cCkgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdEtleSA9IHJlbW92ZSA/IGtleS5yZXBsYWNlKHJlZ2V4cCwgJycpIDoga2V5O1xuICAgICAgICBvYmplY3Rbb2JqZWN0S2V5XSA9IHRoaXMucHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsaXBib2FyZCAmJiB0aGlzLmNsaXBib2FyZC5kZXN0cm95KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBTdXBwb3J0IG9sZCBBUEkgYnkgdHJ5aW5nIHRvIGFzc2lnbiB0aGlzLnByb3BzLm9wdGlvbnMgZmlyc3Q7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCB0aGlzLnByb3BzV2l0aCgvXm9wdGlvbi0vLCB0cnVlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gUmVhY3QudmVyc2lvbi5tYXRjaCgvMFxcLjEzKC4qKS8pXG4gICAgICA/IHRoaXMucmVmcy5lbGVtZW50LmdldERPTU5vZGUoKSA6IHRoaXMuZWxlbWVudDtcbiAgICBjb25zdCBDbGlwYm9hcmQgPSByZXF1aXJlKCdjbGlwYm9hcmQnKTtcbiAgICB0aGlzLmNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmQoZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLnByb3BzV2l0aCgvXm9uLywgdHJ1ZSk7XG4gICAgT2JqZWN0LmtleXMoY2FsbGJhY2tzKS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNsaXBib2FyZC5vbihjYWxsYmFjay50b0xvd2VyQ2FzZSgpLCB0aGlzLnByb3BzWydvbicgKyBjYWxsYmFja10pO1xuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSB8fCAnJyxcbiAgICAgIHR5cGU6IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlIHx8IHt9LFxuICAgICAgcmVmOiBlbGVtZW50ID0+IHsgdGhpcy5lbGVtZW50ID0gZWxlbWVudDsgfSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25DbGljayxcbiAgICAgIC4uLnRoaXMucHJvcHNXaXRoKC9eZGF0YS0vKSxcbiAgICAgIC4uLnRoaXMucHJvcHNXaXRoKC9eYnV0dG9uLS8sIHRydWUpLFxuICAgIH07XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KCksXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGlmICh0aGlzLmdldENvbXBvbmVudCgpID09PSAnYnV0dG9uJyB8fCB0aGlzLmdldENvbXBvbmVudCgpID09PSAnaW5wdXQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlIHx8ICdidXR0b24nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNvbXBvbmVudCB8fCAnYnV0dG9uJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGlwYm9hcmRCdXR0b247XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpcGJvYXJkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Byb3BfdHlwZXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9