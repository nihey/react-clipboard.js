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
      var element = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.element);

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
          return _this.element = element;
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
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC9leHRlcm5hbCB7XCJyb290XCI6XCJDbGlwYm9hcmRKU1wiLFwiYW1kXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzMlwiOlwiY2xpcGJvYXJkXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwifSJdLCJuYW1lcyI6WyJDbGlwYm9hcmRCdXR0b24iLCJyZWdleHAiLCJyZW1vdmUiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwicHJvcHMiLCJmb3JFYWNoIiwia2V5Iiwic2VhcmNoIiwib2JqZWN0S2V5IiwicmVwbGFjZSIsImNsaXBib2FyZCIsImRlc3Ryb3kiLCJvcHRpb25zIiwicHJvcHNXaXRoIiwiZWxlbWVudCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJDbGlwYm9hcmQiLCJyZXF1aXJlIiwiY2FsbGJhY2tzIiwiY2FsbGJhY2siLCJvbiIsInRvTG93ZXJDYXNlIiwiYXR0cmlidXRlcyIsInRpdGxlIiwidHlwZSIsImdldFR5cGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlZiIsIm9uQ2xpY2siLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb21wb25lbnQiLCJjaGlsZHJlbiIsInVuZGVmaW5lZCIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwib3B0aW9uVGV4dCIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0lBRU1BLGU7Ozs7Ozs7Ozs7Ozs7OEJBK0NNQyxNLEVBQXNCO0FBQUEsVUFBZEMsTUFBYyx1RUFBUCxLQUFPO0FBQzlCLFVBQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUFDLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLEtBQWpCLEVBQXdCQyxPQUF4QixDQUFnQyxVQUFTQyxHQUFULEVBQWM7QUFDNUMsWUFBSUEsR0FBRyxDQUFDQyxNQUFKLENBQVdSLE1BQVgsTUFBdUIsQ0FBQyxDQUE1QixFQUErQjtBQUM3QixjQUFNUyxTQUFTLEdBQUdSLE1BQU0sR0FBR00sR0FBRyxDQUFDRyxPQUFKLENBQVlWLE1BQVosRUFBb0IsRUFBcEIsQ0FBSCxHQUE2Qk8sR0FBckQ7QUFDQUwsZ0JBQU0sQ0FBQ08sU0FBRCxDQUFOLEdBQW9CLEtBQUtKLEtBQUwsQ0FBV0UsR0FBWCxDQUFwQjtBQUNEO0FBQ0YsT0FMRCxFQUtHLElBTEg7QUFPQSxhQUFPTCxNQUFQO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS1MsU0FBTCxJQUFrQixLQUFLQSxTQUFMLENBQWVDLE9BQWYsRUFBbEI7QUFDRDs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxLQUFLUixLQUFMLENBQVdRLE9BQVgsSUFBc0IsS0FBS0MsU0FBTCxDQUFlLFVBQWYsRUFBMkIsSUFBM0IsQ0FBdEM7QUFDQSxVQUFNQyxPQUFPLEdBQUdDLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUIsS0FBS0YsT0FBMUIsQ0FBaEI7O0FBQ0EsVUFBTUcsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDRCQUFELENBQXpCOztBQUNBLFdBQUtSLFNBQUwsR0FBaUIsSUFBSU8sU0FBSixDQUFjSCxPQUFkLEVBQXVCRixPQUF2QixDQUFqQjtBQUVBLFVBQU1PLFNBQVMsR0FBRyxLQUFLTixTQUFMLENBQWUsS0FBZixFQUFzQixJQUF0QixDQUFsQjtBQUNBWCxZQUFNLENBQUNDLElBQVAsQ0FBWWdCLFNBQVosRUFBdUJkLE9BQXZCLENBQStCLFVBQVNlLFFBQVQsRUFBbUI7QUFDaEQsYUFBS1YsU0FBTCxDQUFlVyxFQUFmLENBQWtCRCxRQUFRLENBQUNFLFdBQVQsRUFBbEIsRUFBMEMsS0FBS2xCLEtBQUwsQ0FBVyxPQUFPZ0IsUUFBbEIsQ0FBMUM7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNRyxVQUFVO0FBQ2RDLGFBQUssRUFBRSxLQUFLcEIsS0FBTCxDQUFXb0IsS0FBWCxJQUFvQixFQURiO0FBRWRDLFlBQUksRUFBRSxLQUFLQyxPQUFMLEVBRlE7QUFHZEMsaUJBQVMsRUFBRSxLQUFLdkIsS0FBTCxDQUFXdUIsU0FBWCxJQUF3QixFQUhyQjtBQUlkQyxhQUFLLEVBQUUsS0FBS3hCLEtBQUwsQ0FBV3dCLEtBQVgsSUFBb0IsRUFKYjtBQUtkQyxXQUFHLEVBQUUsYUFBQWYsT0FBTztBQUFBLGlCQUFJLEtBQUksQ0FBQ0EsT0FBTCxHQUFlQSxPQUFuQjtBQUFBLFNBTEU7QUFNZGdCLGVBQU8sRUFBRSxLQUFLMUIsS0FBTCxDQUFXMEI7QUFOTixTQU9YLEtBQUtqQixTQUFMLENBQWUsUUFBZixDQVBXLEVBUVgsS0FBS0EsU0FBTCxDQUFlLFVBQWYsRUFBMkIsSUFBM0IsQ0FSVyxDQUFoQjs7QUFXQSxhQUFPa0IsNENBQUssQ0FBQ0MsYUFBTixDQUNMLEtBQUtDLFlBQUwsRUFESyxFQUVMVixVQUZLLEVBR0wsS0FBS25CLEtBQUwsQ0FBVzhCLFFBSE4sQ0FBUDtBQUtEOzs7OEJBRVM7QUFDUixVQUFJLEtBQUtELFlBQUwsT0FBd0IsUUFBeEIsSUFBb0MsS0FBS0EsWUFBTCxPQUF3QixPQUFoRSxFQUF5RTtBQUN2RSxlQUFPLEtBQUs3QixLQUFMLENBQVdxQixJQUFYLElBQW1CLFFBQTFCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsZUFBT1UsU0FBUDtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLGFBQU8sS0FBSy9CLEtBQUwsQ0FBV2dDLFNBQVgsSUFBd0IsUUFBL0I7QUFDRDs7OztFQTNHMkJMLDRDQUFLLENBQUNNLFM7O2dCQUE5QnZDLGUsZUFDZTtBQUNqQmMsU0FBTyxFQUFFLGlCQUFTUixLQUFULEVBQWdCa0MsUUFBaEIsRUFBMEJDLGFBQTFCLEVBQXlDO0FBQ2hELFFBQU0zQixPQUFPLEdBQUdSLEtBQUssQ0FBQ2tDLFFBQUQsQ0FBckI7O0FBQ0EsUUFBSTFCLE9BQU8sSUFBSSxRQUFPQSxPQUFQLE1BQW1CLFFBQTlCLElBQTBDNEIsS0FBSyxDQUFDQyxPQUFOLENBQWM3QixPQUFkLENBQTlDLEVBQXNFO0FBQ3BFLGFBQU8sSUFBSThCLEtBQUosQ0FBVSx5QkFBa0JKLFFBQWxCLDRCQUE0Q0MsYUFBNUMsc0JBQ2JELFFBRGEsd0JBQVYsQ0FBUDtBQUVEOztBQUVELFFBQUlsQyxLQUFLLENBQUMsYUFBRCxDQUFMLEtBQXlCK0IsU0FBN0IsRUFBd0M7QUFDdEMsVUFBTVEsVUFBVSxHQUFHdkMsS0FBSyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsVUFBSSxPQUFPdUMsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNwQyxlQUFPLElBQUlELEtBQUosQ0FBVSxtREFBNENILGFBQTVDLDZDQUFWLENBQVA7QUFFRDtBQUNGO0FBQ0YsR0FmZ0I7QUFnQmpCZixPQUFLLEVBQUVvQixpREFBUyxDQUFDQyxNQWhCQTtBQWlCakJwQixNQUFJLEVBQUVtQixpREFBUyxDQUFDQyxNQWpCQztBQWtCakJsQixXQUFTLEVBQUVpQixpREFBUyxDQUFDQyxNQWxCSjtBQW1CakJqQixPQUFLLEVBQUVnQixpREFBUyxDQUFDM0MsTUFuQkE7QUFvQmpCbUMsV0FBUyxFQUFFUSxpREFBUyxDQUFDRSxHQXBCSjtBQXFCakJaLFVBQVEsRUFBRVUsaURBQVMsQ0FBQ0U7QUFyQkgsQzs7Z0JBRGZoRCxlLGtCQXlCa0I7QUFDcEJnQyxTQUFPLEVBQUUsbUJBQVcsQ0FBRTtBQUd4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpzQixDOztBQXFGVGhDLDhFQUFmLEU7Ozs7Ozs7Ozs7O0FDbEhBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEIiwiZmlsZSI6InJlYWN0LWNsaXBib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNsaXBib2FyZFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjbGlwYm9hcmRcIiwgXCJwcm9wLXR5cGVzXCIsIFwicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RDbGlwYm9hcmRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjbGlwYm9hcmRcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Q2xpcGJvYXJkXCJdID0gZmFjdG9yeShyb290W1wiQ2xpcGJvYXJkSlNcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0sIHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpcGJvYXJkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcHJvcF90eXBlc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ2xpcGJvYXJkQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBJbnZhbGlkIHByb3BzICcke3Byb3BOYW1lfScgc3VwcGxpZWQgdG8gJyR7Y29tcG9uZW50TmFtZX0nLiBgICtcbiAgICAgICAgYCcke3Byb3BOYW1lfScgaXMgbm90IGFuIG9iamVjdC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzWydvcHRpb24tdGV4dCddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uVGV4dCA9IHByb3BzWydvcHRpb24tdGV4dCddO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvblRleHQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBJbnZhbGlkIHByb3BzICdvcHRpb24tdGV4dCcgc3VwcGxpZWQgdG8gJyR7Y29tcG9uZW50TmFtZX0nLiBgICtcbiAgICAgICAgICBgJ29wdGlvbi10ZXh0JyBpcyBub3QgYSBmdW5jdGlvbi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbigpIHt9LFxuICB9XG5cbiAgLyogUmV0dXJucyBhIG9iamVjdCB3aXRoIGFsbCBwcm9wcyB0aGF0IGZ1bGZpbGwgYSBjZXJ0YWluIG5hbWluZyBwYXR0ZXJuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleHAgLSBSZWd1bGFyIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHdoaWNoIHBhdHRlcm5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSdsbCBiZSBzZWFyY2hpbmcgZm9yLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW92ZSAtIERldGVybWluZXMgaWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzaG91bGQgYmVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkIHdoZW4gdHJhbnNtaXR0aW5nIHRoZSBrZXkgZnJvbSB0aGUgcHJvcHNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICB0byB0aGUgbmV3IG9iamVjdC5cbiAgICpcbiAgICogZS5nOlxuICAgKlxuICAgKiAvLyBDb25zaWRlcmluZzpcbiAgICogLy8gdGhpcy5wcm9wcyA9IHtvcHRpb24tZm9vOiAxLCBvbkJhcjogMiwgZGF0YS1mb29iYXI6IDMgZGF0YS1iYXo6IDR9O1xuICAgKlxuICAgKiAvLyAqUmVnRXhwcyBub3QgdXNpbmcgLy8gc28gdGhhdCB0aGlzIGNvbW1lbnQgZG9lc24ndCBicmVhayB1cFxuICAgKiB0aGlzLnByb3BzV2l0aChvcHRpb24tKiwgdHJ1ZSk7IC8vIHJldHVybnMge2ZvbzogMX1cbiAgICogdGhpcy5wcm9wc1dpdGgob24qLCB0cnVlKTsgLy8gcmV0dXJucyB7QmFyOiAyfVxuICAgKiB0aGlzLnByb3BzV2l0aChkYXRhLSopOyAvLyByZXR1cm5zIHtkYXRhLWZvb2JhcjogMSwgZGF0YS1iYXo6IDR9XG4gICAqL1xuICBwcm9wc1dpdGgocmVnZXhwLCByZW1vdmU9ZmFsc2UpIHtcbiAgICBjb25zdCBvYmplY3QgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoa2V5LnNlYXJjaChyZWdleHApICE9PSAtMSkge1xuICAgICAgICBjb25zdCBvYmplY3RLZXkgPSByZW1vdmUgPyBrZXkucmVwbGFjZShyZWdleHAsICcnKSA6IGtleTtcbiAgICAgICAgb2JqZWN0W29iamVjdEtleV0gPSB0aGlzLnByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGlwYm9hcmQgJiYgdGhpcy5jbGlwYm9hcmQuZGVzdHJveSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gU3VwcG9ydCBvbGQgQVBJIGJ5IHRyeWluZyB0byBhc3NpZ24gdGhpcy5wcm9wcy5vcHRpb25zIGZpcnN0O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgdGhpcy5wcm9wc1dpdGgoL15vcHRpb24tLywgdHJ1ZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3QgQ2xpcGJvYXJkID0gcmVxdWlyZSgnY2xpcGJvYXJkJyk7XG4gICAgdGhpcy5jbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5wcm9wc1dpdGgoL15vbi8sIHRydWUpO1xuICAgIE9iamVjdC5rZXlzKGNhbGxiYWNrcykuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgdGhpcy5jbGlwYm9hcmQub24oY2FsbGJhY2sudG9Mb3dlckNhc2UoKSwgdGhpcy5wcm9wc1snb24nICsgY2FsbGJhY2tdKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUgfHwgJycsXG4gICAgICB0eXBlOiB0aGlzLmdldFR5cGUoKSxcbiAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSB8fCB7fSxcbiAgICAgIHJlZjogZWxlbWVudCA9PiB0aGlzLmVsZW1lbnQgPSBlbGVtZW50LFxuICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrLFxuICAgICAgLi4udGhpcy5wcm9wc1dpdGgoL15kYXRhLS8pLFxuICAgICAgLi4udGhpcy5wcm9wc1dpdGgoL15idXR0b24tLywgdHJ1ZSksXG4gICAgfTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgdGhpcy5nZXRDb21wb25lbnQoKSxcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29tcG9uZW50KCkgPT09ICdidXR0b24nIHx8IHRoaXMuZ2V0Q29tcG9uZW50KCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgfHwgJ2J1dHRvbic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBnZXRDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY29tcG9uZW50IHx8ICdidXR0b24nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaXBib2FyZEJ1dHRvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlwYm9hcmRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcHJvcF90eXBlc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiXSwic291cmNlUm9vdCI6IiJ9