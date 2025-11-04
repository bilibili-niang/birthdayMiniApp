"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[427],{

/***/ 7427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4078);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6618);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);





/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'ProfileSettingsNickname',
  setup: function setup() {
    var userStore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useUserStore */ .kH)();
    var nickname = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)('');
    var onChange = function onChange(e) {
      nickname.value = e.detail.value;
    };
    var onSave = function onSave() {
      if (!nickname.value) {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('昵称不能为空');
        return void 0;
      }
      userStore.setUserProfile({
        nickname: nickname.value
      }).then(function () {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .navigateBack */ .Tl)();
      });
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .BasePage */ .vo, null, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "profile-settings-nickname"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "input-wrap"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .pd, {
            "class": "input",
            "type": "nickname",
            "placeholder": "\u8BF7\u8F93\u5165\u65B0\u7684\u6635\u79F0",
            "autoFocus": true,
            "value": nickname.value,
            "onInput": onChange
          }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "save",
            "onClick": onSave
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u786E\u5B9A\u4FDD\u5B58")])])];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=427.js.map