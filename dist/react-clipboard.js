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
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC9leHRlcm5hbCB7XCJyb290XCI6XCJDbGlwYm9hcmRKU1wiLFwiYW1kXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzMlwiOlwiY2xpcGJvYXJkXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwifSJdLCJuYW1lcyI6WyJDbGlwYm9hcmRCdXR0b24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsInJlZ2V4cCIsInJlbW92ZSIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsImZvckVhY2giLCJrZXkiLCJzZWFyY2giLCJvYmplY3RLZXkiLCJyZXBsYWNlIiwiY2xpcGJvYXJkIiwiZGVzdHJveSIsIm9wdGlvbnMiLCJwcm9wc1dpdGgiLCJlbGVtZW50IiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImN1cnJlbnQiLCJDbGlwYm9hcmQiLCJyZXF1aXJlIiwiY2FsbGJhY2tzIiwiY2FsbGJhY2siLCJvbiIsInRvTG93ZXJDYXNlIiwiYXR0cmlidXRlcyIsInRpdGxlIiwidHlwZSIsImdldFR5cGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlZiIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJjb21wb25lbnQiLCJDb21wb25lbnQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsIm9wdGlvblRleHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERB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QTVCLENBRjRCLEVBRzVCOEIsaURBQVMsQ0FBQ0MsTUFIa0IsRUFJNUJELGlEQUFTLENBQUNLLE1BSmtCLEVBSzVCTCxpREFBUyxDQUFDM0MsTUFMa0IsQ0FBcEI7QUFyQk8sQzs7Z0JBSGZMLGUsa0JBaUNrQjtBQUNwQm1DLFNBQU8sRUFBRSxtQkFBVyxDQUFFO0FBR3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSnNCLEM7O0FBcUZUbkMsOEVBQWYsRTs7Ozs7Ozs7Ozs7QUMxSEEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQiLCJmaWxlIjoicmVhY3QtY2xpcGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2xpcGJvYXJkXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNsaXBib2FyZFwiLCBcInByb3AtdHlwZXNcIiwgXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENsaXBib2FyZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNsaXBib2FyZFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDbGlwYm9hcmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJDbGlwYm9hcmRKU1wiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSwgcm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlwYm9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wcm9wX3R5cGVzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDbGlwYm9hcmRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBlbGVtZW50ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBJbnZhbGlkIHByb3BzICcke3Byb3BOYW1lfScgc3VwcGxpZWQgdG8gJyR7Y29tcG9uZW50TmFtZX0nLiBgICtcbiAgICAgICAgYCcke3Byb3BOYW1lfScgaXMgbm90IGFuIG9iamVjdC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzWydvcHRpb24tdGV4dCddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uVGV4dCA9IHByb3BzWydvcHRpb24tdGV4dCddO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvblRleHQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBJbnZhbGlkIHByb3BzICdvcHRpb24tdGV4dCcgc3VwcGxpZWQgdG8gJyR7Y29tcG9uZW50TmFtZX0nLiBgICtcbiAgICAgICAgICBgJ29wdGlvbi10ZXh0JyBpcyBub3QgYSBmdW5jdGlvbi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbigpIHt9LFxuICB9XG5cbiAgLyogUmV0dXJucyBhIG9iamVjdCB3aXRoIGFsbCBwcm9wcyB0aGF0IGZ1bGZpbGwgYSBjZXJ0YWluIG5hbWluZyBwYXR0ZXJuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleHAgLSBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHdoaWNoIHBhdHRlcm5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSdsbCBiZSBzZWFyY2hpbmcgZm9yLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW92ZSAtIERldGVybWluZXMgaWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzaG91bGQgYmVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkIHdoZW4gdHJhbnNtaXR0aW5nIHRoZSBrZXkgZnJvbSB0aGUgcHJvcHNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICB0byB0aGUgbmV3IG9iamVjdC5cbiAgICpcbiAgICogZS5nOlxuICAgKlxuICAgKiAvLyBDb25zaWRlcmluZzpcbiAgICogLy8gdGhpcy5wcm9wcyA9IHtvcHRpb24tZm9vOiAxLCBvbkJhcjogMiwgZGF0YS1mb29iYXI6IDMgZGF0YS1iYXo6IDR9O1xuICAgKlxuICAgKiAvLyAqUmVnRXhwcyBub3QgdXNpbmcgLy8gc28gdGhhdCB0aGlzIGNvbW1lbnQgZG9lc24ndCBicmVhayB1cFxuICAgKiB0aGlzLnByb3BzV2l0aChvcHRpb24tKiwgdHJ1ZSk7IC8vIHJldHVybnMge2ZvbzogMX1cbiAgICogdGhpcy5wcm9wc1dpdGgob24qLCB0cnVlKTsgLy8gcmV0dXJucyB7QmFyOiAyfVxuICAgKiB0aGlzLnByb3BzV2l0aChkYXRhLSopOyAvLyByZXR1cm5zIHtkYXRhLWZvb2JhcjogMSwgZGF0YS1iYXo6IDR9XG4gICAqL1xuICBwcm9wc1dpdGgocmVnZXhwLCByZW1vdmU9ZmFsc2UpIHtcbiAgICBjb25zdCBvYmplY3QgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoa2V5LnNlYXJjaChyZWdleHApICE9PSAtMSkge1xuICAgICAgICBjb25zdCBvYmplY3RLZXkgPSByZW1vdmUgPyBrZXkucmVwbGFjZShyZWdleHAsICcnKSA6IGtleTtcbiAgICAgICAgb2JqZWN0W29iamVjdEtleV0gPSB0aGlzLnByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGlwYm9hcmQgJiYgdGhpcy5jbGlwYm9hcmQuZGVzdHJveSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gU3VwcG9ydCBvbGQgQVBJIGJ5IHRyeWluZyB0byBhc3NpZ24gdGhpcy5wcm9wcy5vcHRpb25zIGZpcnN0O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgdGhpcy5wcm9wc1dpdGgoL15vcHRpb24tLywgdHJ1ZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuZWxlbWVudC5jdXJyZW50KTtcbiAgICBjb25zdCBDbGlwYm9hcmQgPSByZXF1aXJlKCdjbGlwYm9hcmQnKTtcbiAgICB0aGlzLmNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmQoZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLnByb3BzV2l0aCgvXm9uLywgdHJ1ZSk7XG4gICAgT2JqZWN0LmtleXMoY2FsbGJhY2tzKS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNsaXBib2FyZC5vbihjYWxsYmFjay50b0xvd2VyQ2FzZSgpLCB0aGlzLnByb3BzWydvbicgKyBjYWxsYmFja10pO1xuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSB8fCAnJyxcbiAgICAgIHR5cGU6IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlIHx8IHt9LFxuICAgICAgcmVmOiB0aGlzLmVsZW1lbnQsXG4gICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2ssXG4gICAgICAuLi50aGlzLnByb3BzV2l0aCgvXmRhdGEtLyksXG4gICAgICAuLi50aGlzLnByb3BzV2l0aCgvXmJ1dHRvbi0vLCB0cnVlKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICB0aGlzLmdldENvbXBvbmVudCgpLFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBpZiAodGhpcy5nZXRDb21wb25lbnQoKSA9PT0gJ2J1dHRvbicgfHwgdGhpcy5nZXRDb21wb25lbnQoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZSB8fCAnYnV0dG9uJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb21wb25lbnQgfHwgJ2J1dHRvbic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpcGJvYXJkQnV0dG9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaXBib2FyZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wcm9wX3R5cGVzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fOyJdLCJzb3VyY2VSb290IjoiIn0=