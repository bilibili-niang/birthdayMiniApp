"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[885],{

/***/ 1885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4243);
/* harmony import */ var _tab_pages_deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5724);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1880);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4078);




/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'custom-page',
  setup: function setup() {
    var router = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useRouter */ .Ay.useRouter();
    var scrollTop = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(0);
    var onScroll = function onScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    };
    var enableShareAppMessage = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(true);
    var shareType = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)('default');
    var sharePayload = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)();
    var onCustomPageLoad = function onCustomPageLoad(payload) {
      shareType.value = payload.payload.page.basic.shareType;
      enableShareAppMessage.value = payload.payload.page.basic.shareType !== 'none';
      var _payload$payload$page = payload.payload.page.basic.shareConfig,
        title = _payload$payload$page.title,
        image = _payload$payload$page.image;
      sharePayload.value = {
        title: title,
        imageUrl: image.url
      };
    };
    (0,_anteng_core__WEBPACK_IMPORTED_MODULE_4__/* .useShareAppMessage */ .vv)(function () {
      if (shareType.value === 'default') {
        return undefined;
      }
      return sharePayload.value;
    });
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_4__/* .BasePage */ .vo, {
        "navigator": null,
        "class": "custom-page",
        "useScrollView": true,
        "scrollView": {
          onScroll: onScroll
        },
        "enableGlobalShare": false,
        "enableShareAppMessage": enableShareAppMessage.value
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tab_pages_deck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
            "pageId": router.params.id,
            "scrollTop": scrollTop.value,
            "onLoad": onCustomPageLoad
          }, null)];
        }
      });
    };
  }
}));

/***/ }),

/***/ 5724:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ deck; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/interaction/index.js + 3 modules
var interaction = __webpack_require__(7888);
// EXTERNAL MODULE: ./src/api/request.ts
var request = __webpack_require__(2422);
;// ./src/api/deck/getCustomPage.ts


/** 获取自定义页面装修数据 */
var getCustomPage = function getCustomPage(id) {
  return (0,request/* default */.Ay)({
    baseURL: request/* REQUEST_DOMAIN */.F7,
    method: 'get',
    url: "/api/decorate/customize/detail?id=".concat(id)
  });
};
/* harmony default export */ var deck_getCustomPage = (getCustomPage);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ../../packages/deck/src/index.ts + 16 modules
var src = __webpack_require__(1749);
;// ./src/packageMain/tab-pages/deck/index.tsx










/* harmony default export */ var deck = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CustomPage',
  props: {
    // 通过id获取页面的自定义配置
    pageId: {
      type: String,
      required: true
    },
    scrollTop: {
      type: Number
    },
    action: {
      type: Object
    }
  },
  emits: ['load'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    console.clear();
    var rawData = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var page = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var hasError = (0,reactivity_esm_bundler/* ref */.KR)(false);
    (0,interaction/* showLoading */.Cs)();
    var loading = (0,reactivity_esm_bundler/* ref */.KR)(true);
    deck_getCustomPage(props.pageId).then(function (res) {
      if (res.code === 200) {
        var _page$value;
        rawData.value = res.data;
        page.value = typeof res.data.decorate === 'string' ? JSON.parse(res.data.decorate) : res.data.decorate;
        console.log('该页面下的组件:');
        console.log((_page$value = page.value) === null || _page$value === void 0 ? void 0 : _page$value.components);
        emit('load', page.value);
      } else {
        console.log('获取页面信息失败：', res.msg);
        hasError.value = true;
      }
    }).catch(function (err) {
      console.log('获取页面信息失败：', err);
      // useToast('获取页面信息失败')
      hasError.value = true;
    }).finally(function () {
      (0,interaction/* hideLoading */.RZ)();
      loading.value = false;
    });
    var components = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _page$value2;
      return ((_page$value2 = page.value) === null || _page$value2 === void 0 ? void 0 : _page$value2.components) || [];
    });
    var pageStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _page$value$payload$p, _page$value3;
      var _ref2 = (_page$value$payload$p = (_page$value3 = page.value) === null || _page$value3 === void 0 || (_page$value3 = _page$value3.payload) === null || _page$value3 === void 0 || (_page$value3 = _page$value3.page) === null || _page$value3 === void 0 ? void 0 : _page$value3.basic) !== null && _page$value$payload$p !== void 0 ? _page$value$payload$p : {},
        backgroundEnable = _ref2.backgroundEnable,
        background = _ref2.background;
      return {
        backgroundColor: backgroundEnable ? background : undefined
      };
    });
    return function () {
      var _page$value4, _page$value5, _rawData$value;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "custom-page-content",
        "style": pageStyle.value,
        "onClick": function onClick() {}
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* DeckNavigator */.l8, {
        "scrollTop": props.scrollTop,
        "title": loading.value ? '加载中...' : '',
        "config": (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, (_page$value4 = page.value) === null || _page$value4 === void 0 || (_page$value4 = _page$value4.page) === null || _page$value4 === void 0 ? void 0 : _page$value4.navigator), (_page$value5 = page.value) === null || _page$value5 === void 0 || (_page$value5 = _page$value5.page) === null || _page$value5 === void 0 ? void 0 : _page$value5.basic)
      }, null), hasError.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "custom-page-error"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u83B7\u53D6\u9875\u9762\u4FE1\u606F\u5931\u8D25")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [props.pageId])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [((_rawData$value = rawData.value) === null || _rawData$value === void 0 ? void 0 : _rawData$value.status) === constants/* COMMON_STATUS_OFF */.nf ? (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
        "title": "\u9875\u9762\u5DF2\u4E0B\u7EBF",
        "description": "\u62B1\u6B49\uFF0C\u8BE5\u9875\u9762\u5F53\u524D\u4E0D\u53EF\u8BBF\u95EE"
      }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* DeckRender */.Q9, {
        "components": (0,toConsumableArray/* default */.A)(components.value)
      }, null)])]);
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=885.js.map