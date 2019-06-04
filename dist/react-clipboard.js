(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clipboard"), require("prop-types"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["clipboard", "prop-types", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactClipboard"] = factory(require("clipboard"), require("prop-types"), require("react"), require("react-dom"));
	else
		root["ReactClipboard"] = factory(root["ClipboardJS"], root["PropTypes"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_clipboard__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ClipboardButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClipboardButton, _React$Component);

  function ClipboardButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClipboardButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClipboardButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "element", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    return _this;
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
      var element = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.element.current);

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
      var attributes = _objectSpread({
        title: this.props.title || '',
        type: this.getType(),
        className: this.props.className || '',
        style: this.props.style || {},
        ref: this.element,
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
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
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

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","amd":"react-dom","commonjs":"react-dom","commonjs2":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC9leHRlcm5hbCB7XCJyb290XCI6XCJDbGlwYm9hcmRKU1wiLFwiYW1kXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzMlwiOlwiY2xpcGJvYXJkXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwifSJdLCJuYW1lcyI6WyJDbGlwYm9hcmRCdXR0b24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsInJlZ2V4cCIsInJlbW92ZSIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsImZvckVhY2giLCJrZXkiLCJzZWFyY2giLCJvYmplY3RLZXkiLCJyZXBsYWNlIiwiY2xpcGJvYXJkIiwiZGVzdHJveSIsIm9wdGlvbnMiLCJwcm9wc1dpdGgiLCJlbGVtZW50IiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImN1cnJlbnQiLCJDbGlwYm9hcmQiLCJyZXF1aXJlIiwiY2FsbGJhY2tzIiwiY2FsbGJhY2siLCJvbiIsInRvTG93ZXJDYXNlIiwiYXR0cmlidXRlcyIsInRpdGxlIiwidHlwZSIsImdldFR5cGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlZiIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJjb21wb25lbnQiLCJDb21wb25lbnQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsIm9wdGlvblRleHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJlbGVtZW50VHlwZSIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJudW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7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QUFDOUIsT0FBNUIsQ0FGNEIsRUFHNUI4QixpREFBUyxDQUFDQyxNQUhrQixFQUk1QkQsaURBQVMsQ0FBQ0ssTUFKa0IsRUFLNUJMLGlEQUFTLENBQUMzQyxNQUxrQixDQUFwQjtBQXJCTyxDOztnQkFIZkwsZSxrQkFpQ2tCO0FBQ3BCbUMsU0FBTyxFQUFFLG1CQUFXLENBQUU7QUFHeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKc0IsQzs7QUFxRlRuQyw4RUFBZixFOzs7Ozs7Ozs7OztBQzFIQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RCIsImZpbGUiOiJyZWFjdC1jbGlwYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjbGlwYm9hcmRcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2xpcGJvYXJkXCIsIFwicHJvcC10eXBlc1wiLCBcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2xpcGJvYXJkXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2xpcGJvYXJkXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENsaXBib2FyZFwiXSA9IGZhY3Rvcnkocm9vdFtcIkNsaXBib2FyZEpTXCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaXBib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Byb3BfdHlwZXNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIENsaXBib2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEludmFsaWQgcHJvcHMgJyR7cHJvcE5hbWV9JyBzdXBwbGllZCB0byAnJHtjb21wb25lbnROYW1lfScuIGAgK1xuICAgICAgICBgJyR7cHJvcE5hbWV9JyBpcyBub3QgYW4gb2JqZWN0LmApO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHNbJ29wdGlvbi10ZXh0J10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBvcHRpb25UZXh0ID0gcHJvcHNbJ29wdGlvbi10ZXh0J107XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uVGV4dCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEludmFsaWQgcHJvcHMgJ29wdGlvbi10ZXh0JyBzdXBwbGllZCB0byAnJHtjb21wb25lbnROYW1lfScuIGAgK1xuICAgICAgICAgIGAnb3B0aW9uLXRleHQnIGlzIG5vdCBhIGZ1bmN0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbGljazogZnVuY3Rpb24oKSB7fSxcbiAgfVxuXG4gIC8qIFJldHVybnMgYSBvYmplY3Qgd2l0aCBhbGwgcHJvcHMgdGhhdCBmdWxmaWxsIGEgY2VydGFpbiBuYW1pbmcgcGF0dGVyblxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhwIC0gUmVndWxhciBleHByZXNzaW9uIHJlcHJlc2VudGluZyB3aGljaCBwYXR0ZXJuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UnbGwgYmUgc2VhcmNoaW5nIGZvci5cbiAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdmUgLSBEZXRlcm1pbmVzIGlmIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gc2hvdWxkIGJlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZCB3aGVuIHRyYW5zbWl0dGluZyB0aGUga2V5IGZyb20gdGhlIHByb3BzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gdGhlIG5ldyBvYmplY3QuXG4gICAqXG4gICAqIGUuZzpcbiAgICpcbiAgICogLy8gQ29uc2lkZXJpbmc6XG4gICAqIC8vIHRoaXMucHJvcHMgPSB7b3B0aW9uLWZvbzogMSwgb25CYXI6IDIsIGRhdGEtZm9vYmFyOiAzIGRhdGEtYmF6OiA0fTtcbiAgICpcbiAgICogLy8gKlJlZ0V4cHMgbm90IHVzaW5nIC8vIHNvIHRoYXQgdGhpcyBjb21tZW50IGRvZXNuJ3QgYnJlYWsgdXBcbiAgICogdGhpcy5wcm9wc1dpdGgob3B0aW9uLSosIHRydWUpOyAvLyByZXR1cm5zIHtmb286IDF9XG4gICAqIHRoaXMucHJvcHNXaXRoKG9uKiwgdHJ1ZSk7IC8vIHJldHVybnMge0JhcjogMn1cbiAgICogdGhpcy5wcm9wc1dpdGgoZGF0YS0qKTsgLy8gcmV0dXJucyB7ZGF0YS1mb29iYXI6IDEsIGRhdGEtYmF6OiA0fVxuICAgKi9cbiAgcHJvcHNXaXRoKHJlZ2V4cCwgcmVtb3ZlPWZhbHNlKSB7XG4gICAgY29uc3Qgb2JqZWN0ID0ge307XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleS5zZWFyY2gocmVnZXhwKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0S2V5ID0gcmVtb3ZlID8ga2V5LnJlcGxhY2UocmVnZXhwLCAnJykgOiBrZXk7XG4gICAgICAgIG9iamVjdFtvYmplY3RLZXldID0gdGhpcy5wcm9wc1trZXldO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xpcGJvYXJkICYmIHRoaXMuY2xpcGJvYXJkLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFN1cHBvcnQgb2xkIEFQSSBieSB0cnlpbmcgdG8gYXNzaWduIHRoaXMucHJvcHMub3B0aW9ucyBmaXJzdDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zIHx8IHRoaXMucHJvcHNXaXRoKC9eb3B0aW9uLS8sIHRydWUpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmVsZW1lbnQuY3VycmVudCk7XG4gICAgY29uc3QgQ2xpcGJvYXJkID0gcmVxdWlyZSgnY2xpcGJvYXJkJyk7XG4gICAgdGhpcy5jbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5wcm9wc1dpdGgoL15vbi8sIHRydWUpO1xuICAgIE9iamVjdC5rZXlzKGNhbGxiYWNrcykuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgdGhpcy5jbGlwYm9hcmQub24oY2FsbGJhY2sudG9Mb3dlckNhc2UoKSwgdGhpcy5wcm9wc1snb24nICsgY2FsbGJhY2tdKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUgfHwgJycsXG4gICAgICB0eXBlOiB0aGlzLmdldFR5cGUoKSxcbiAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSB8fCB7fSxcbiAgICAgIHJlZjogdGhpcy5lbGVtZW50LFxuICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrLFxuICAgICAgLi4udGhpcy5wcm9wc1dpdGgoL15kYXRhLS8pLFxuICAgICAgLi4udGhpcy5wcm9wc1dpdGgoL15idXR0b24tLywgdHJ1ZSksXG4gICAgfTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgdGhpcy5nZXRDb21wb25lbnQoKSxcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29tcG9uZW50KCkgPT09ICdidXR0b24nIHx8IHRoaXMuZ2V0Q29tcG9uZW50KCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgfHwgJ2J1dHRvbic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBnZXRDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY29tcG9uZW50IHx8ICdidXR0b24nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaXBib2FyZEJ1dHRvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlwYm9hcmRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcHJvcF90eXBlc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiXSwic291cmNlUm9vdCI6IiJ9