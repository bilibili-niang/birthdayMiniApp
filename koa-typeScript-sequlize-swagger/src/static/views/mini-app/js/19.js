"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[19],{

/***/ 5019:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4243);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1880);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7888);
/* harmony import */ var _api_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1566);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4078);






/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'InformationDetail',
  setup: function setup() {
    var router = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useRouter */ .Ay.useRouter();
    var infoRef = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(null);
    var hasError = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(false);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .onMounted */ .sV)(function () {
      if (!router.params.id) {
        return console.error('id缺失');
      }
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__/* .showLoading */ .Cs)();
      (0,_api_information__WEBPACK_IMPORTED_MODULE_4__/* .getInformationDetail */ .Ob)(router.params.id).then(function (res) {
        infoRef.value = res.data;
      }).catch(function (err) {
        console.log(err);
        hasError.value = true;
      }).finally(function () {
        (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__/* .hideLoading */ .RZ)();
      });
    });
    return function () {
      var info = infoRef.value;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_5__/* .BasePage */ .vo, {
        "style": "background:#fff;",
        "navigator": {
          title: (info === null || info === void 0 ? void 0 : info.title) || ''
        },
        "class": "information-detail"
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .resolveComponent */ .g2)("scroll-view"), {
            "className": "cnt",
            "scroll-y": true
          }, {
            default: function _default() {
              return [info && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */ .FK, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                "class": "information-detail__header"
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                "class": "information-detail__title-star-container"
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                "class": "information-detail__title"
              }, [info.title])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                "class": "information-detail__publish"
              }, [info.author ? "".concat(info.author, " \u4E28 ") : '', info.createTime])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                "class": "information-detail__content"
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_5__/* .RichText */ .sD, {
                "content": info.content
              }, null)])])];
            }
          })];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=19.js.map