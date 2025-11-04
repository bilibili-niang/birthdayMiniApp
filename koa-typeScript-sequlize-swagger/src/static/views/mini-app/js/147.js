"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[147],{

/***/ 8147:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4078);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6618);
/* harmony import */ var _anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8757);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9700);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6384);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1308);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6685);
/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(368);
/* harmony import */ var _stores_system_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7352);











/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'ProfileEditPage',
  setup: function setup() {
    var globalStore = (0,_stores__WEBPACK_IMPORTED_MODULE_7__/* .useGlobalStore */ .on)();
    var userStore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useUserStore */ .kH)();
    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_4__/* .storeToRefs */ .bP)(userStore),
      isLogin = _storeToRefs.isLogin,
      avatar = _storeToRefs.avatar,
      nickname = _storeToRefs.nickname,
      isWechatBind = _storeToRefs.isWechatBind;
    var avatarEditAble = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      try {
        if (false) // removed by dead control flow
{}
      } catch (err) {}
      return true;
    });
    var onChooseAvatar = function onChooseAvatar(res) {
      if (!avatarEditAble.value) {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('暂不支持修改头像');
        return void 0;
      }
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)();
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useUploadFile */ .fU)({
        url: res.detail.avatarUrl,
        onSuccess: function onSuccess(url) {
          userStore.setUserProfile({
            avatar: url
          }).finally(function () {
            (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
          });
        },
        onFail: function onFail() {
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('图片上传失败');
        }
      });
    };
    var toNicknameSettings = function toNicknameSettings() {
      if (!avatarEditAble.value) {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('暂不支持修改昵称');
        return void 0;
      }
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .navigateTo */ .VJ)({
        url: _router_routes__WEBPACK_IMPORTED_MODULE_8__/* .ROUTE_SETTINGS_NICKNAME */ .VN
      });
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .BasePage */ .vo, {
        "navigator": {
          title: '账号设置'
        }
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "profile-edit-page"
          }, [isLogin.value && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "blocks"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5934\u50CF")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Image */ ._V, {
            "class": "value avatar",
            "src": avatar.value
          }, null), avatarEditAble.value && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */ .FK, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "class": "open-button",
            "openType": "chooseAvatar",
            "onChooseavatar": onChooseAvatar
          }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item",
            "onClick": toNicknameSettings
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u6635\u79F0")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "value nickname"
          }, [nickname.value]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)]),  false && 0]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "blocks"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item",
            "onClick": function onClick() {
              (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__/* .chooseAddress */ .Q)();
            }
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5730\u5740\u7BA1\u7406")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u6743\u9650\u8BBE\u7F6E")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "class": "open-button",
            "openType": "openSetting"
          }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5E2E\u52A9\u4E0E\u53CD\u9988")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "class": "open-button",
            "openType": "feedback"
          }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5BA2\u670D")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
            "class": "open-button",
            "openType": "contact"
          }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "blocks"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item",
            "onClick": function onClick() {
              try {
                (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useUserAgreement */ .Tj)((0,_stores_system_page__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)().userAgreementPage.decorate.payload.page);
              } catch (err) {
                (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__/* .openPrivacyContract */ .$N)();
              }
            }
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7528\u6237\u670D\u52A1\u534F\u8BAE")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item",
            "onClick": function onClick() {
              (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__/* .openPrivacyContract */ .$N)();
            }
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7528\u6237\u9690\u79C1\u4FDD\u62A4\u6307\u5F15")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "item",
            "onClick": _anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useUpdateManager */ .G2
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "label"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u68C0\u6D4B\u66F4\u65B0")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "value"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5F53\u524D\u7248\u672C v"), globalStore.version]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui_src_components_icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "class": "arrow",
            "name": "right"
          }, null)])]), isLogin.value ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "logout",
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useUserStore */ .kH)().logout({
                onSuccess: function onSuccess() {
                  (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .navigateBack */ .Tl)();
                  setTimeout(function () {
                    (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('已安全退出登录');
                  }, 332);
                }
              });
            }
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u9000\u51FA\u767B\u5F55")]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "login",
            "onClick": function onClick() {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLogin */ .vz)();
            }
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7ACB\u5373\u767B\u5F55")])])];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=147.js.map