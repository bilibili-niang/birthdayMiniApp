"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[88],{

/***/ 3088:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);



/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'custom-page',
  setup: function setup() {
    var router = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useRouter */ .Ay.useRouter();
    return function () {
      if (router.params.url) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .WebView */ .SC, {
          "src": decodeURIComponent(router.params.url)
        }, null);
      }
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .BasePage */ .vo, {
        "class": "custom-page"
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u94FE\u63A5\u6253\u5F00\u5931\u8D25")])];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=88.js.map