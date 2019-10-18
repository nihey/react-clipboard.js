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
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "clipboard");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ClipboardButton = function ClipboardButton(props) {
  var component = props.component,
      title = props.title,
      style = props.style,
      isVisibleWhenUnsupported = props.isVisibleWhenUnsupported,
      className = props.className,
      onClick = props.onClick,
      type = props.type;
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  function propsWith(regexp) {
    var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var object = {};
    Object.keys(props).forEach(function (key) {
      if (key.search(regexp) !== -1) {
        var objectKey = remove ? key.replace(regexp, '') : key;
        object[objectKey] = props[key];
      }
    });
    return object;
  }

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    // Support old API by trying to assign props.options first;
    var options = props.options || propsWith(/^option-/, true);
    var element = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(ref.current);

    if (!element) {
      return;
    }

    var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_3___default.a(element, options);
    var callbacks = propsWith(/^on/, true);
    Object.keys(callbacks).forEach(function (callback) {
      clipboard.on(callback.toLowerCase(), props['on' + callback]);
    });
    return function () {
      clipboard.destroy();
    };
  }, []);

  function getType() {
    var componentType = getComponent();

    if (componentType === 'button' || componentType === 'input') {
      return type || 'button';
    } else {
      return undefined;
    }
  }

  function getComponent() {
    return component || 'button';
  }

  var attributes = _objectSpread({
    title: title || '',
    type: getType(),
    className: className || '',
    style: style || {},
    ref: ref,
    onClick: onClick
  }, propsWith(/^data-/), {}, propsWith(/^button-/, true));

  if (!isVisibleWhenUnsupported && !clipboard__WEBPACK_IMPORTED_MODULE_3___default.a.isSupported()) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(getComponent(), attributes, props.children);
};

ClipboardButton.propTypes = {
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
};
ClipboardButton.defaultProps = {
  isVisibleWhenUnsupported: true,
  onClick: function onClick() {}
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SZWFjdENsaXBib2FyZC9leHRlcm5hbCB7XCJyb290XCI6XCJDbGlwYm9hcmRKU1wiLFwiYW1kXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzXCI6XCJjbGlwYm9hcmRcIixcImNvbW1vbmpzMlwiOlwiY2xpcGJvYXJkXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCJ9Iiwid2VicGFjazovL1JlYWN0Q2xpcGJvYXJkL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vUmVhY3RDbGlwYm9hcmQvZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwifSJdLCJuYW1lcyI6WyJDbGlwYm9hcmRCdXR0b24iLCJwcm9wcyIsImNvbXBvbmVudCIsInRpdGxlIiwic3R5bGUiLCJpc1Zpc2libGVXaGVuVW5zdXBwb3J0ZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwicHJvcHNXaXRoIiwicmVnZXhwIiwicmVtb3ZlIiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZWFyY2giLCJvYmplY3RLZXkiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib3B0aW9ucyIsImVsZW1lbnQiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwiY3VycmVudCIsImNsaXBib2FyZCIsIkNsaXBib2FyZCIsImNhbGxiYWNrcyIsImNhbGxiYWNrIiwib24iLCJ0b0xvd2VyQ2FzZSIsImRlc3Ryb3kiLCJnZXRUeXBlIiwiY29tcG9uZW50VHlwZSIsImdldENvbXBvbmVudCIsInVuZGVmaW5lZCIsImF0dHJpYnV0ZXMiLCJpc1N1cHBvcnRlZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwib3B0aW9uVGV4dCIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlD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O0FBRUQ7QUFDRjtBQUNGLEdBZnlCO0FBZ0IxQjNDLE9BQUssRUFBRWdELGlEQUFTLENBQUNDLE1BaEJTO0FBaUIxQjVDLE1BQUksRUFBRTJDLGlEQUFTLENBQUNDLE1BakJVO0FBa0IxQjlDLFdBQVMsRUFBRTZDLGlEQUFTLENBQUNDLE1BbEJLO0FBbUIxQmhELE9BQUssRUFBRStDLGlEQUFTLENBQUNwQyxNQW5CUztBQW9CMUJiLFdBQVMsRUFBRWlELGlEQUFTLENBQUNFLEdBcEJLO0FBcUIxQlYsVUFBUSxFQUFFUSxpREFBUyxDQUFDRTtBQXJCTSxDQUE1QjtBQXdCQXJELGVBQWUsQ0FBQ3NELFlBQWhCLEdBQStCO0FBQzdCakQsMEJBQXdCLEVBQUUsSUFERztBQUU3QkUsU0FBTyxFQUFFLG1CQUFXLENBQUU7QUFGTyxDQUEvQjtBQUtlUCw4RUFBZixFOzs7Ozs7Ozs7OztBQzNHQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RCIsImZpbGUiOiJyZWFjdC1jbGlwYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjbGlwYm9hcmRcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2xpcGJvYXJkXCIsIFwicHJvcC10eXBlc1wiLCBcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2xpcGJvYXJkXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2xpcGJvYXJkXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENsaXBib2FyZFwiXSA9IGZhY3Rvcnkocm9vdFtcIkNsaXBib2FyZEpTXCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaXBib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Byb3BfdHlwZXNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2xpcGJvYXJkIGZyb20gJ2NsaXBib2FyZCc7XG5cbmNvbnN0IENsaXBib2FyZEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7Y29tcG9uZW50LCB0aXRsZSwgc3R5bGUsIGlzVmlzaWJsZVdoZW5VbnN1cHBvcnRlZCwgY2xhc3NOYW1lLCBvbkNsaWNrLCB0eXBlfSA9IHByb3BzO1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBmdW5jdGlvbiBwcm9wc1dpdGgocmVnZXhwLCByZW1vdmU9ZmFsc2UpIHtcbiAgICBjb25zdCBvYmplY3QgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkuc2VhcmNoKHJlZ2V4cCkgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdEtleSA9IHJlbW92ZSA/IGtleS5yZXBsYWNlKHJlZ2V4cCwgJycpIDoga2V5O1xuICAgICAgICBvYmplY3Rbb2JqZWN0S2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTdXBwb3J0IG9sZCBBUEkgYnkgdHJ5aW5nIHRvIGFzc2lnbiBwcm9wcy5vcHRpb25zIGZpcnN0O1xuICAgIGNvbnN0IG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zIHx8IHByb3BzV2l0aCgvXm9wdGlvbi0vLCB0cnVlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUocmVmLmN1cnJlbnQpO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZChlbGVtZW50LCBvcHRpb25zKTtcbiAgXG4gICAgY29uc3QgY2FsbGJhY2tzID0gcHJvcHNXaXRoKC9eb24vLCB0cnVlKTtcbiAgICBPYmplY3Qua2V5cyhjYWxsYmFja3MpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjbGlwYm9hcmQub24oY2FsbGJhY2sudG9Mb3dlckNhc2UoKSwgcHJvcHNbJ29uJyArIGNhbGxiYWNrXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xpcGJvYXJkLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gZ2V0VHlwZSgpIHtcbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gZ2V0Q29tcG9uZW50KCk7XG4gICAgaWYgKGNvbXBvbmVudFR5cGUgPT09ICdidXR0b24nIHx8IGNvbXBvbmVudFR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgIHJldHVybiB0eXBlIHx8ICdidXR0b24nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICAgIHJldHVybiBjb21wb25lbnQgfHwgJ2J1dHRvbic7XG4gIH1cblxuICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgIHRpdGxlOiB0aXRsZSB8fCAnJyxcbiAgICB0eXBlOiBnZXRUeXBlKCksXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgfHwgJycsXG4gICAgc3R5bGU6IHN0eWxlIHx8IHt9LFxuICAgIHJlZixcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIC4uLnByb3BzV2l0aCgvXmRhdGEtLyksXG4gICAgLi4ucHJvcHNXaXRoKC9eYnV0dG9uLS8sIHRydWUpLFxuICB9O1xuICBcbiAgaWYgKCFpc1Zpc2libGVXaGVuVW5zdXBwb3J0ZWQgJiYgIUNsaXBib2FyZC5pc1N1cHBvcnRlZCgpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBnZXRDb21wb25lbnQoKSxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHByb3BzLmNoaWxkcmVuXG4gICk7XG59O1xuXG5DbGlwYm9hcmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBjb25zdCBvcHRpb25zID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJbnZhbGlkIHByb3BzICcke3Byb3BOYW1lfScgc3VwcGxpZWQgdG8gJyR7Y29tcG9uZW50TmFtZX0nLiBgICtcbiAgICAgIGAnJHtwcm9wTmFtZX0nIGlzIG5vdCBhbiBvYmplY3QuYCk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzWydvcHRpb24tdGV4dCddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG9wdGlvblRleHQgPSBwcm9wc1snb3B0aW9uLXRleHQnXTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uVGV4dCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBJbnZhbGlkIHByb3BzICdvcHRpb24tdGV4dCcgc3VwcGxpZWQgdG8gJyR7Y29tcG9uZW50TmFtZX0nLiBgICtcbiAgICAgICAgYCdvcHRpb24tdGV4dCcgaXMgbm90IGEgZnVuY3Rpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn07XG5cbkNsaXBib2FyZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzVmlzaWJsZVdoZW5VbnN1cHBvcnRlZDogdHJ1ZSxcbiAgb25DbGljazogZnVuY3Rpb24oKSB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXBib2FyZEJ1dHRvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpcGJvYXJkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Byb3BfdHlwZXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187Il0sInNvdXJjZVJvb3QiOiIifQ==