"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[765],{

/***/ 7765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4078);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6618);





/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: '',
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .BasePage */ .vo, {
        "class": "demo-page",
        "navigator": {
          title: 'Demo'
        }
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)();
              setTimeout(function () {
                (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
              }, 2000);
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u666E\u901A Loading")];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)({
                maskVisible: true,
                toastVisible: false
              });
              setTimeout(function () {
                (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
              }, 2000);
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u906E\u7F69 Loading")];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)({
                toastVisible: false
              });
              setTimeout(function () {
                (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
              }, 2000);
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7A7A\u767D Loading")];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)({
                text: '加急查询中...'
              });
              setTimeout(function () {
                (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
              }, 2000);
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u81EA\u5B9A\u4E49\u6587\u5B57")];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)({
                timeout: 3000
              });
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("3\u79D2\u8D85\u65F6")];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)({
                toastVisible: true
              });
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('This message will contain a incomprehensibilities long word.');
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("Loading Toast \u4E0D\u518D\u51B2\u7A81")];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)({
                toastVisible: true
              });
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('叮');
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5F88\u77ED Toast")];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('短信发送成功，请查收！联系客服咨询。');
            }
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u591A\u884C Toast")];
            }
          })];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=765.js.map