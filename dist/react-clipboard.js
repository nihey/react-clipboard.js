(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("clipboard"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "clipboard"], factory);
	else if(typeof exports === 'object')
		exports["ReactClipboard"] = factory(require("react"), require("prop-types"), require("clipboard"));
	else
		root["ReactClipboard"] = factory(root["React"], root["PropTypes"], root["Clipboard"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClipboardButton = function (_React$Component) {
  _inherits(ClipboardButton, _React$Component);

  function ClipboardButton() {
    _classCallCheck(this, ClipboardButton);

    return _possibleConstructorReturn(this, (ClipboardButton.__proto__ || Object.getPrototypeOf(ClipboardButton)).apply(this, arguments));
  }

  _createClass(ClipboardButton, [{
    key: 'propsWith',


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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clipboard && this.clipboard.destroy();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Support old API by trying to assign this.props.options first;
      var options = this.props.options || this.propsWith(/^option-/, true);
      var element = _react2.default.version.match(/0\.13(.*)/) ? this.refs.element.getDOMNode() : this.element;
      var Clipboard = __webpack_require__(3);
      this.clipboard = new Clipboard(element, options);

      var callbacks = this.propsWith(/^on/, true);
      Object.keys(callbacks).forEach(function (callback) {
        this.clipboard.on(callback.toLowerCase(), this.props['on' + callback]);
      }, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attributes = _extends({
        type: this.getType(),
        className: this.props.className || '',
        style: this.props.style || {},
        ref: function ref(element) {
          _this2.element = element;
        },
        onClick: this.props.onClick
      }, this.propsWith(/^data-/), this.propsWith(/^button-/, true));

      return _react2.default.createElement(this.getComponent(), attributes, this.props.children);
    }
  }, {
    key: 'getType',
    value: function getType() {
      if (this.getComponent() === 'button' || this.getComponent() === 'input') {
        return this.props.type || 'button';
      } else {
        return undefined;
      }
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return this.props.component || 'button';
    }
  }]);

  return ClipboardButton;
}(_react2.default.Component);

ClipboardButton.propTypes = {
  options: _propTypes2.default.object,
  type: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  component: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object])
};
ClipboardButton.defaultProps = {
  onClick: function onClick() {} };
exports.default = ClipboardButton;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});