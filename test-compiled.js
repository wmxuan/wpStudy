"use strict";

require("./main.css");

require("./sass.scss");

var _logo = _interopRequireDefault(require("../public/logo.png"));

require("./fonts/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import '@babel/polyfill'
var img = new Image();
img.src = _logo.default;
document.getElementById('div').appendChild(img);

var Author = /*#__PURE__*/_createClass(function Author() {
  var _this = this;

  _classCallCheck(this, Author);

  _defineProperty(this, "name", 'ITEM');

  _defineProperty(this, "age", 18);

  _defineProperty(this, "email", 'lxp_work@163.com');

  _defineProperty(this, "info", function () {
    return {
      name: _this.name,
      age: _this.age,
      email: _this.email
    };
  });
});

module.exports = Author;

var fn = function fn() {};

var arr1 = [1, 2, 3];
var arr2 = [].concat(arr1);
new Promise(function () {}); // 新增装饰器的使用
// @log('hi')
// class MyClass { }
// function log(text) {
//   return function(target) {
//     target.prototype.logger = () => `${text}，${target.name}`
//   }
// }
// const test = new MyClass()
// test.logger()
