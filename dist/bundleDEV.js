/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _sass_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _fonts_iconfont_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* module decorator */ module = __webpack_require__.hmd(module);
var _dec, _class;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// // import './main.css';
// import './sass.scss';
// const a = 'Hello ITEM'
// console.log(a)
// module.exports = a;
// import './sass.scss'
// import logo from '../public/logo.png';//没有使用webpack对图片文件进行处理时，这种引入会报错，提示使用loader处理
// import './fonts/iconfont.css';
// const a = 'Hello ITEM'
// console.log(a)
// const img = new Image();
// img.src = logo
// document.getElementById('div').appendChild(img)
// ES6:



 // import '@babel/polyfill'

var img = new Image();
img.src = _public_logo_png__WEBPACK_IMPORTED_MODULE_2__;
document.getElementById('div').appendChild(img);

var Author = /*#__PURE__*/_createClass(function Author() {
  var _this = this;

  _classCallCheck(this, Author);

  this.name = 'ITEM';
  this.age = 18;
  this.email = 'lxp_work@163.com';

  this.info = function () {
    return {
      name: _this.name,
      age: _this.age,
      email: _this.email
    };
  };
});

module.exports = Author;

var fn = function fn() {};

var arr1 = [1, 2, 3];
var arr2 = [].concat(arr1);
new Promise(function () {}); // 新增装饰器的使用

var MyClass = (_dec = log('hi'), _dec(_class = /*#__PURE__*/_createClass(function MyClass() {
  _classCallCheck(this, MyClass);
})) || _class);

function log(text) {
  return function (target) {
    target.prototype.logger = function () {
      return "".concat(text, "\uFF0C").concat(target.name);
    };
  };
}

var test = new MyClass();
test.logger();

/***/ }),
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;