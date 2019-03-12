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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar ClipboardButton =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ClipboardButton, _React$Component);\n\n  function ClipboardButton() {\n    _classCallCheck(this, ClipboardButton);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ClipboardButton).apply(this, arguments));\n  }\n\n  _createClass(ClipboardButton, [{\n    key: \"propsWith\",\n    value: function propsWith(regexp) {\n      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var object = {};\n      Object.keys(this.props).forEach(function (key) {\n        if (key.search(regexp) !== -1) {\n          var objectKey = remove ? key.replace(regexp, '') : key;\n          object[objectKey] = this.props[key];\n        }\n      }, this);\n      return object;\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.clipboard && this.clipboard.destroy();\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Support old API by trying to assign this.props.options first;\n      var options = this.props.options || this.propsWith(/^option-/, true);\n      var element = react__WEBPACK_IMPORTED_MODULE_0___default.a.version.match(/0\\.13(.*)/) ? this.refs.element.getDOMNode() : this.element;\n\n      var Clipboard = __webpack_require__(/*! clipboard */ \"clipboard\");\n\n      this.clipboard = new Clipboard(element, options);\n      var callbacks = this.propsWith(/^on/, true);\n      Object.keys(callbacks).forEach(function (callback) {\n        this.clipboard.on(callback.toLowerCase(), this.props['on' + callback]);\n      }, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var attributes = _objectSpread({\n        title: this.props.title || '',\n        type: this.getType(),\n        className: this.props.className || '',\n        style: this.props.style || {},\n        ref: function ref(element) {\n          _this.element = element;\n        },\n        onClick: this.props.onClick\n      }, this.propsWith(/^data-/), this.propsWith(/^button-/, true));\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.getComponent(), attributes, this.props.children);\n    }\n  }, {\n    key: \"getType\",\n    value: function getType() {\n      if (this.getComponent() === 'button' || this.getComponent() === 'input') {\n        return this.props.type || 'button';\n      } else {\n        return undefined;\n      }\n    }\n  }, {\n    key: \"getComponent\",\n    value: function getComponent() {\n      return this.props.component || 'button';\n    }\n  }]);\n\n  return ClipboardButton;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n_defineProperty(ClipboardButton, \"propTypes\", {\n  options: function options(props, propName, componentName) {\n    var options = props[propName];\n\n    if (options && _typeof(options) !== 'object' || Array.isArray(options)) {\n      return new Error(\"Invalid props '\".concat(propName, \"' supplied to '\").concat(componentName, \"'. \") + \"'\".concat(propName, \"' is not an object.\"));\n    }\n\n    if (props['option-text'] !== undefined) {\n      var optionText = props['option-text'];\n\n      if (typeof optionText !== 'function') {\n        return new Error(\"Invalid props 'option-text' supplied to '\".concat(componentName, \"'. \") + \"'option-text' is not a function.\");\n      }\n    }\n  },\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])\n});\n\n_defineProperty(ClipboardButton, \"defaultProps\", {\n  onClick: function onClick() {}\n  /* Returns a object with all props that fulfill a certain naming pattern\n   *\n   * @param {RegExp} regexp - Regular expression representing which pattern\n   *                          you'll be searching for.\n   * @param {Boolean} remove - Determines if the regular expression should be\n   *                           removed when transmitting the key from the props\n   *                           to the new object.\n   *\n   * e.g:\n   *\n   * // Considering:\n   * // this.props = {option-foo: 1, onBar: 2, data-foobar: 3 data-baz: 4};\n   *\n   * // *RegExps not using // so that this comment doesn't break up\n   * this.propsWith(option-*, true); // returns {foo: 1}\n   * this.propsWith(on*, true); // returns {Bar: 2}\n   * this.propsWith(data-*); // returns {data-foobar: 1, data-baz: 4}\n   */\n\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClipboardButton);\n\n//# sourceURL=webpack://ReactClipboard/./index.js?");

/***/ }),

/***/ "clipboard":
/*!********************************************************************************************************!*\
  !*** external {"root":"ClipboardJS","amd":"clipboard","commonjs":"clipboard","commonjs2":"clipboard"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_clipboard__;\n\n//# sourceURL=webpack://ReactClipboard/external_%7B%22root%22:%22ClipboardJS%22,%22amd%22:%22clipboard%22,%22commonjs%22:%22clipboard%22,%22commonjs2%22:%22clipboard%22%7D?");

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","amd":"prop-types","commonjs":"prop-types","commonjs2":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://ReactClipboard/external_%7B%22root%22:%22PropTypes%22,%22amd%22:%22prop-types%22,%22commonjs%22:%22prop-types%22,%22commonjs2%22:%22prop-types%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","amd":"react","commonjs":"react","commonjs2":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactClipboard/external_%7B%22root%22:%22React%22,%22amd%22:%22react%22,%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22%7D?");

/***/ })

/******/ });
});