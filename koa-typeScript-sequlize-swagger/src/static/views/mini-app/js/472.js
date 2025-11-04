"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[472],{

/***/ 8472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8831);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7420);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4078);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4243);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3058);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9700);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6685);
/* harmony import */ var _stores_merchant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9181);










/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_2__/* .defineComponent */ .pM)({
  name: 'launch-page',
  setup: function setup() {
    var globalStore = (0,_stores__WEBPACK_IMPORTED_MODULE_7__/* .useGlobalStore */ .on)();
    var appStore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useAppStore */ .CU)();
    appStore.setLoginPageContent((0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
      "class": "coupon-login-page-content"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
      "class": "title1"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createTextVNode */ .eW)("\u6B22\u8FCE\u767B\u5F55")]), (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
      "class": "title2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createTextVNode */ .eW)("\u5361\u732B\u5FAE\u5E97")])]));

    /** 已授权过隐私保护指引 */
    var hasAgreePrivacy = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .KR)(false);
    if (true) {
      hasAgreePrivacy.value = true;
    } else // removed by dead control flow
{}
    var _finish = function finish() {
      if (hasAgreePrivacy.value) {
        try {
          globalStore.redirectToLaunchRedirect();
        } catch (err) {
          console.error('重定向失败，默认打开首页');
          (0,_router__WEBPACK_IMPORTED_MODULE_5__/* .backToIndex */ .t2)();
        }
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useAppStore */ .CU)().init();
      } else {
        var stopWatch = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .watch */ .wB)(function () {
          return hasAgreePrivacy.value;
        }, function () {
          _finish();
          stopWatch === null || stopWatch === void 0 || stopWatch();
        });
      }
    };
    var merchantStore = (0,_stores_merchant__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)();
    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_6__/* .storeToRefs */ .bP)(merchantStore),
      getMerchantIdError = _storeToRefs.getMerchantIdError;
    var getMerchantInfo = /*#__PURE__*/function () {
      var _ref = (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().m(function _callee() {
        var _t;
        return (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return merchantStore.getMerchantInfo();
            case 1:
              return _context.a(2, Promise.resolve());
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('获取商户信息失败：', _t);
              return _context.a(2, Promise.reject(_t));
          }
        }, _callee, null, [[0, 2]]);
      }));
      return function getMerchantInfo() {
        return _ref.apply(this, arguments);
      };
    }();
    Promise.allSettled([getMerchantInfo()]).then(function () {
      setTimeout(_finish, 600);
    }).catch(function (err) {
      console.error(err);
    });
    return function () {
      if (getMerchantIdError.value) {
        var _appStore$accountInfo;
        return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .BasePage */ .vo, {
          "navigator": null
        }, {
          default: function _default() {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
              "class": "launch-get-merchant-error"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createTextVNode */ .eW)("AppID "), (_appStore$accountInfo = appStore.accountInfo) === null || _appStore$accountInfo === void 0 ? void 0 : _appStore$accountInfo.miniProgram.appId]), (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createTextVNode */ .eW)("\u83B7\u53D6\u5546\u6237\u4FE1\u606F\u5931\u8D25")]), (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
              "class": "btn",
              "onClick": getMerchantInfo
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createTextVNode */ .eW)("\u91CD\u8BD5")])])];
          }
        });
      }
      return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .BasePage */ .vo, {
        "navigator": null
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
            "class": "launch-page"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .LaunchPage */ .hG, null, {
            logo: function logo() {
              return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
                "class": "launch-page__logo"
              }, null);
            }
          })])];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=472.js.map