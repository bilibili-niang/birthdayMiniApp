"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[326],{

/***/ 101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ useTouch; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4243);

var MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  var startX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var startY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var moveX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var moveY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var deltaX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var deltaY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var offsetX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var offsetY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var direction = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)("");
  var isVertical = function isVertical() {
    return direction.value === "vertical";
  };
  var isHorizontal = function isHorizontal() {
    return direction.value === "horizontal";
  };
  var reset = function reset() {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
  };
  var start = function start(event) {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };
  var move = function move(event) {
    var touch = event.touches[0];
    deltaX.value = touch.clientX - startX.value;
    deltaY.value = touch.clientY - startY.value;
    moveX.value = touch.clientX;
    moveY.value = touch.clientY;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };
  return {
    move: move,
    start: start,
    reset: reset,
    startX: startX,
    startY: startY,
    moveX: moveX,
    moveY: moveY,
    deltaX: deltaX,
    deltaY: deltaY,
    offsetX: offsetX,
    offsetY: offsetY,
    direction: direction,
    isVertical: isVertical,
    isHorizontal: isHorizontal
  };
}


/***/ }),

/***/ 590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BK: function() { return /* binding */ getCouponList; },
/* harmony export */   im: function() { return /* binding */ $postAuditStaticCoupon; },
/* harmony export */   lZ: function() { return /* binding */ $postAuditDynamicCoupon; },
/* harmony export */   wX: function() { return /* binding */ $getCouponAuditRecords; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2422);

/**
 * 获取卡券商品列表
 */
var getCouponList = function getCouponList(params) {
  return (0,_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)({
    url: '/anteng-cornerstone-order-wap/m/couponRecord/list',
    method: 'get',
    withMerchantId: true,
    params: params
  });
};

/** 用户侧自主核销<静态码>卡券 */
var $postAuditStaticCoupon = function $postAuditStaticCoupon(options) {
  return (0,_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)({
    url: '/anteng-cornerstone-order-wap/m/goods/coupon/verification',
    method: 'post',
    withMerchantId: true,
    data: options
  });
};

/** 用户侧自主核销<动态码>卡券 */
var $postAuditDynamicCoupon = function $postAuditDynamicCoupon(options) {
  return (0,_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)({
    url: '/anteng-cornerstone-order-wap/m/goods/coupon/dynamic-verification',
    method: 'post',
    withMerchantId: true,
    data: options
  });
};

/** 获取子订单下的卡券核销记录 */
var $getCouponAuditRecords = function $getCouponAuditRecords(orderNo) {
  return (0,_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)({
    url: "/anteng-cornerstone-order-wap/m/goods/coupon/verification-record/".concat(orderNo),
    method: 'get',
    withMerchantId: true
  });
};

/***/ }),

/***/ 1002:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ useProfileStore; }
/* harmony export */ });
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8831);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7420);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9700);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(419);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5816);





var useProfileStore = (0,pinia__WEBPACK_IMPORTED_MODULE_2__/* .defineStore */ .nY)('StoreProfile', function () {
  var balance = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(0);
  var balanceAccount = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)();
  var isBalanceAvailable = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
    return balanceAccount.value && balance.value > 0;
  });
  var balanceYuan = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
    return Math.round(balance.value / 100 * 100) / 100;
  });
  var balanceText = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
    if (balanceYuan.value === undefined) return '';
    return balanceYuan.value.toFixed(2);
  });
  var getAccountBalance = /*#__PURE__*/function () {
    var _ref = (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().m(function _callee() {
      return (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2, new Promise(function (resolve, reject) {
              (0,_api__WEBPACK_IMPORTED_MODULE_5__/* .getUserBalance */ .op)().then(function (res) {
                balanceAccount.value = res.data;
                if (res.data.balance >= 0) {
                  balance.value = res.data.balance;
                }
                resolve(res);
              }).catch(function (err) {
                reject(err);
              });
            }));
        }
      }, _callee);
    }));
    return function getAccountBalance() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    balance: balance,
    balanceYuan: balanceYuan,
    balanceText: balanceText,
    isBalanceAvailable: isBalanceAvailable,
    balanceAccount: balanceAccount,
    getAccountBalance: getAccountBalance
  };
});

/***/ }),

/***/ 1326:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ packageMain; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
;// ../../packages/core/src/components/tab-bar/demo.json
var demo_namespaceObject = /*#__PURE__*/JSON.parse('{"w4":"default","Vq":[0,0,0,0],"oR":"rgba(255, 255, 255, 1)","yW":"#999","aV":"rgba(0, 0, 0, 1)"}');
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/interaction/index.js + 3 modules
var interaction = __webpack_require__(7888);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ./src/api/request.ts
var request = __webpack_require__(2422);
;// ./src/api/deck/getIndexPage.ts


/** 获取系统页面详情（首页等），按传入 key/scene 返回装修数据 */
var getIndexPage = function getIndexPage(key, scene) {
  return (0,request/* default */.Ay)({
    baseURL: request/* REQUEST_DOMAIN */.F7,
    url: '/decorate/system/detail',
    method: 'get',
    params: {
      key: key,
      scene: scene
    }
  });
};
/* harmony default export */ var deck_getIndexPage = (getIndexPage);
// EXTERNAL MODULE: ../../packages/deck/src/index.ts + 16 modules
var src = __webpack_require__(1749);
;// ./src/packageMain/tab-pages/home/index.tsx







/* harmony default export */ var home = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'IndexHomePage',
  setup: function setup() {
    console.log('%c 页面加载：home', 'color:#27ae60');
    var page = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var hasError = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var errMsg = (0,reactivity_esm_bundler/* ref */.KR)('');
    (0,interaction/* showLoading */.Cs)();
    deck_getIndexPage('home', "yesong").then(function (res) {
      if (res.code === 200) {
        var d = typeof res.data.decorate === 'string' ? JSON.parse(res.data.decorate) : res.data.decorate;
        page.value = d;
      } else {
        hasError.value = true;
        errMsg.value = res.msg;
      }
    }).catch(function (err) {
      var _err$response$data$ms, _err$response;
      console.log('获取页面信息失败：', err);
      // useToast('获取页面信息失败')
      hasError.value = true;
      errMsg.value = (_err$response$data$ms = (_err$response = err.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.msg) !== null && _err$response$data$ms !== void 0 ? _err$response$data$ms : err.message;
    }).finally(function () {
      (0,interaction/* hideLoading */.RZ)();
    });
    var components = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _page$value$payload$c, _page$value;
      return (_page$value$payload$c = (_page$value = page.value) === null || _page$value === void 0 || (_page$value = _page$value.payload) === null || _page$value === void 0 ? void 0 : _page$value.components) !== null && _page$value$payload$c !== void 0 ? _page$value$payload$c : [];
    });
    var scrollTop = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var onScroll = function onScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    };
    var pageStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _page$value$payload$p, _page$value2;
      var _ref = (_page$value$payload$p = (_page$value2 = page.value) === null || _page$value2 === void 0 || (_page$value2 = _page$value2.payload) === null || _page$value2 === void 0 || (_page$value2 = _page$value2.page) === null || _page$value2 === void 0 ? void 0 : _page$value2.basic) !== null && _page$value$payload$p !== void 0 ? _page$value$payload$p : {},
        backgroundEnable = _ref.backgroundEnable,
        background = _ref.background;
      return {
        backgroundColor: backgroundEnable ? background : undefined
      };
    });
    taro/* default.useShareAppMessage */.Ay.useShareAppMessage(function () {
      var _page$value$payload$p2, _page$value3;
      var _ref2 = (_page$value$payload$p2 = (_page$value3 = page.value) === null || _page$value3 === void 0 || (_page$value3 = _page$value3.payload) === null || _page$value3 === void 0 || (_page$value3 = _page$value3.page) === null || _page$value3 === void 0 || (_page$value3 = _page$value3.basic) === null || _page$value3 === void 0 ? void 0 : _page$value3.shareConfig) !== null && _page$value$payload$p2 !== void 0 ? _page$value$payload$p2 : {},
        image = _ref2.image,
        title = _ref2.title;
      return {
        title: title,
        imageUrl: image === null || image === void 0 ? void 0 : image.url
      };
    });
    return function () {
      var _page$value4;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": null,
        "useScrollView": true,
        "tabsPlaceholder": true,
        "scrollView": {
          onScroll: onScroll
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "custom-page-content",
            "style": pageStyle.value
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* DeckNavigator */.l8, {
            "scrollTop": scrollTop.value,
            "config": (_page$value4 = page.value) === null || _page$value4 === void 0 || (_page$value4 = _page$value4.payload) === null || _page$value4 === void 0 ? void 0 : _page$value4.page.navigator
          }, null), hasError.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "custom-page-error"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u83B7\u53D6\u9996\u9875\u4FE1\u606F\u5931\u8D25")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u539F\u56E0\uFF1A"), errMsg.value])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* DeckRender */.Q9, {
            "components": components.value
          }, null)])];
        }
      });
    };
  }
}));
// EXTERNAL MODULE: ./src/packageMain/tab-pages/category/index.tsx + 10 modules
var category = __webpack_require__(4121);
// EXTERNAL MODULE: ./src/packageMain/tab-pages/cart/index.tsx + 4 modules
var cart = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/packageMain/tab-pages/profile/index.tsx + 2 modules
var profile = __webpack_require__(4552);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
// EXTERNAL MODULE: ./src/packageMain/tab-pages/deck/index.tsx + 1 modules
var deck = __webpack_require__(5724);
;// ./src/packageMain/tab-pages/deck/index-custom.tsx




/* harmony default export */ var index_custom = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    pageId: {
      type: String,
      required: true
    },
    action: {
      type: Object
    }
  },
  setup: function setup(props) {
    var scrollTop = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var onScroll = function onScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    };
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": null,
        "useScrollView": true,
        "scrollView": {
          onScroll: onScroll
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(deck/* default */.A, {
            "pageId": props.pageId,
            "action": props.action,
            "scrollTop": scrollTop.value
          }, null)];
        }
      });
    };
  }
}));
// EXTERNAL MODULE: ./src/stores/goods.ts
var goods = __webpack_require__(8701);
// EXTERNAL MODULE: ./src/hooks/useAction/index.ts + 2 modules
var useAction = __webpack_require__(1173);
;// ./src/packageMain/tab-pages/test/index.tsx

/* harmony default export */ var test = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'componentName',
  props: {},
  emits: [''],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "test"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F00\u53D1\u6D4B\u8BD5\u4E2D..."), (0,runtime_core_esm_bundler/* createVNode */.bF)("button", {
        "open-type": "getRealtimePhoneNumber",
        "bindgetrealtimephonenumber": "getrealtimephonenumber",
        "onGetrealtimephonenumber": function onGetrealtimephonenumber(e) {
          console.log('e');
          console.log(e);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u83B7\u53D6\u770B\u770B")])]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(8831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var ui_src = __webpack_require__(4176);
// EXTERNAL MODULE: ./src/components/goods-item/index.tsx
var goods_item = __webpack_require__(9788);
// EXTERNAL MODULE: ./src/utils/test/index.tsx
var utils_test = __webpack_require__(6937);
// EXTERNAL MODULE: ./src/hooks/index.ts + 11 modules
var hooks = __webpack_require__(8892);
;// ./src/packageMain/tab-pages/test/coffeeHome/index.tsx




// 点单列表（可交互）








function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
var categories = ['全部', '手冲咖啡', '现磨咖啡', '时尚甜点', '冰淇淋'];
/* harmony default export */ var coffeeHome = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CoffeeOrderPage',
  setup: function setup() {
    var current = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var keyword = (0,reactivity_esm_bundler/* ref */.KR)('');
    var bannerImg = (0,reactivity_esm_bundler/* ref */.KR)((0,utils_test/* buildCoffeeImgUrl */.f)(1));
    var loading = (0,reactivity_esm_bundler/* ref */.KR)(false);

    // 构建本地假数据（结合项目已有思路）
    var IMG_COUNT = 6;
    var buildItems = function buildItems(prefix) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var list = [];
      for (var i = 0; i < count; i++) {
        var idx = startIndex + i;
        var imgIndex = (idx - 1) % IMG_COUNT + 1;
        list.push({
          id: "".concat(prefix, "-").concat(idx),
          name: "".concat(prefix, "\u7ECF\u5178\u5496\u5561 ").concat(idx),
          price: 18 + idx % 5 * 2,
          listPrice: 26 + idx % 5 * 2,
          // 预先计算并缓存稳定的图片 URL，渲染时不再调用函数
          image: (0,utils_test/* buildCoffeeImgUrl */.f)(imgIndex)
        });
      }
      return list;
    };
    var allItems = (0,reactivity_esm_bundler/* ref */.KR)([]);

    // 店铺切换（演示）
    var shops = [{
      id: 'shop-1',
      name: '海淀总店'
    }, {
      id: 'shop-2',
      name: '朝阳新城店'
    }, {
      id: 'shop-3',
      name: '西直门店'
    }];
    var currentShop = (0,reactivity_esm_bundler/* ref */.KR)(shops[0]);
    var showShopSelector = function showShopSelector() {
      var modal = (0,lib/* useModal */.hS)({
        placement: 'bottom',
        height: 'auto',
        title: '选择店铺',
        content: function content() {
          var _slot;
          return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "shop-selector"
          }, _isSlot(_slot = shops.map(function (s) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
              "class": ['shop-selector__item', s.id === currentShop.value.id && 'active'],
              "onClick": /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
                return (0,regenerator/* default */.A)().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      currentShop.value = s;
                      // 根据店铺简单切换头图（演示）
                      bannerImg.value = (0,utils_test/* buildCoffeeImgUrl */.f)(s.id === 'shop-1' ? 1 : s.id === 'shop-2' ? 2 : 3);
                      // 重新加载当前类目的商品（演示复用本地假数据）
                      loading.value = true;
                      _context.n = 1;
                      return fetchFakeItems(categories[current.value]);
                    case 1:
                      allItems.value = _context.v;
                      loading.value = false;
                      modal.close();
                    case 2:
                      return _context.a(2);
                  }
                }, _callee);
              }))
            }, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                  "class": "name"
                }, {
                  default: function _default() {
                    return [s.name];
                  }
                }), s.id === currentShop.value.id && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                  "class": "checked"
                }, {
                  default: function _default() {
                    return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F53\u524D")];
                  }
                })];
              }
            });
          })) ? _slot : {
            default: function _default() {
              return [_slot];
            }
          });
        }
      });
    };

    // 构造假的请求，模拟不同分类的数据加载
    var fetchFakeItems = function fetchFakeItems(cat) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          if (cat === '手冲咖啡') {
            resolve(buildItems('手冲', 1, 8));
          } else if (cat === '现磨咖啡') {
            resolve(buildItems('现磨', 1, 10));
          } else if (cat === '时尚甜点') {
            resolve(buildItems('甜点', 1, 6));
          } else if (cat === '冰淇淋') {
            resolve(buildItems('冰淇淋', 1, 6));
          } else {
            resolve([].concat((0,toConsumableArray/* default */.A)(buildItems('现磨', 1, 6)), (0,toConsumableArray/* default */.A)(buildItems('手冲', 1, 6)), (0,toConsumableArray/* default */.A)(buildItems('甜点', 1, 4))));
          }
        }, 200);
      });
    };

    // 首次加载使用 Promise 的假数据，避免初始渲染抖动
    (0,runtime_core_esm_bundler/* onMounted */.sV)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2() {
      return (0,regenerator/* default */.A)().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            loading.value = true;
            _context2.n = 1;
            return fetchFakeItems('全部');
          case 1:
            allItems.value = _context2.v;
            loading.value = false;
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    })));
    var filtered = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var k = keyword.value.trim();
      var base = allItems.value;
      return k ? base.filter(function (i) {
        return i.name.includes(k);
      }) : base;
    });

    // 两列布局
    var twoCols = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var left = [];
      var right = [];
      filtered.value.forEach(function (item, idx) {
        (idx % 2 === 0 ? left : right).push(item);
      });
      return [left, right];
    });

    // 每个商品的数量
    var counts = (0,reactivity_esm_bundler/* ref */.KR)({});
    var getCount = function getCount(id) {
      var _counts$value$id;
      return (_counts$value$id = counts.value[id]) !== null && _counts$value$id !== void 0 ? _counts$value$id : 1;
    };
    var onOrder = function onOrder(item) {
      var c = getCount(item.id);
      (0,lib/* useToast */.dj)("\u5DF2\u9009\u62E9\u300C".concat(item.name, "\u300Dx").concat(c));
    };

    // 详情弹窗：构造演示 SKU 数据并唤起规格选择弹窗
    var buildDemoSkus = function buildDemoSkus(goodsId, defaultImage) {
      var sizes = [{
        id: 'size-l',
        name: '大杯'
      }, {
        id: 'size-m',
        name: '中杯'
      }, {
        id: 'size-s',
        name: '小杯'
      }];
      var sugars = [{
        id: 'sugar-full',
        name: '全糖'
      }, {
        id: 'sugar-70',
        name: '七分'
      }, {
        id: 'sugar-none',
        name: '去糖'
      }];
      var temps = [{
        id: 'temp-hot',
        name: '热'
      }, {
        id: 'temp-ice',
        name: '冰'
      }];
      var skus = [];
      var sort = 100;
      sizes.forEach(function (size) {
        sugars.forEach(function (sugar) {
          temps.forEach(function (temp) {
            var id = "".concat(goodsId, "-").concat(size.id, "-").concat(sugar.id, "-").concat(temp.id);
            var basePrice = 20;
            var priceDelta = (size.id === 'size-l' ? 4 : size.id === 'size-m' ? 2 : 0) + (temp.id === 'temp-ice' ? 2 : 0);
            var price = (basePrice + priceDelta) * 100;
            var listPrice = price + 400;
            skus.push({
              id: id,
              goodsId: goodsId,
              specCode: "".concat(size.id, "|").concat(sugar.id, "|").concat(temp.id),
              underlinePrice: listPrice,
              price: price,
              cost: price - 300,
              stock: 99,
              weight: 0,
              sort: sort--,
              path: '',
              specs: [{
                k: '杯型',
                kId: 'size',
                v: size.name,
                vId: size.id,
                image: defaultImage
              }, {
                k: '糖分',
                kId: 'sugar',
                v: sugar.name,
                vId: sugar.id
              }, {
                k: '温度',
                kId: 'temp',
                v: temp.name,
                vId: temp.id
              }]
            });
          });
        });
      });
      return skus;
    };
    var showDetail = function showDetail(item) {
      var skus = buildDemoSkus(item.id, item.image);
      (0,hooks/* useGoodsSkuModal */.oT)({
        skus: skus,
        defaultImage: item.image,
        actions: [{
          text: '加入购物车',
          type: 'primary',
          onClick: function onClick(data) {
            (0,lib/* useToast */.dj)("\u5DF2\u52A0\u5165\u8D2D\u7269\u8F66\uFF1A".concat(item.name, " x").concat(data.count));
          }
        }]
      });
    };
    return function () {
      var _slot2, _slot4;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          navigatorStyle: 'blank',
          immersive: true,
          title: '',
          fixedTitle: '我要点单',
          navigationBarTextStyleFixed: 'black',
          navigationBarBackgroundColorFixed: 'rgba(255, 255, 255, 0)',
          navigationBarBackgroundColor: 'rgba(0, 0, 0, 0)'
        },
        "navigatorPlaceholder": true,
        "useScrollView": true
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "coffee-order"
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-order__header"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                    "class": "coffee-order__title"
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6211\u8981\u70B9\u5355")];
                    }
                  }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "coffee-order__shop-btn",
                    "onClick": showShopSelector
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                        "class": "label"
                      }, {
                        default: function _default() {
                          return [currentShop.value.name];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                        "name": "right",
                        "class": "switch-icon"
                      }, null)];
                    }
                  })];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-order__banner",
                "onClick": function onClick() {
                  return showDetail({
                    id: 'banner-coffee',
                    name: '招牌拿铁',
                    price: 22,
                    listPrice: 28,
                    image: bannerImg.value
                  });
                }
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                    "class": "coffee-order__banner-img",
                    "mode": "aspectFill",
                    "src": bannerImg.value
                  }, null)];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-order__tabs"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* ScrollTab */.RH, {
                    "current": current.value
                  }, _isSlot(_slot2 = categories.map(function (label, i) {
                    return (0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* ScrollTabItem */.AN, {
                      "key": label
                    }, {
                      default: function _default() {
                        return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                          "class": "coffee-order__tab ".concat(current.value === i ? 'is-active' : ''),
                          "onClick": /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee3() {
                            var cat;
                            return (0,regenerator/* default */.A)().w(function (_context3) {
                              while (1) switch (_context3.n) {
                                case 0:
                                  current.value = i;
                                  cat = categories[i];
                                  loading.value = true;
                                  _context3.n = 1;
                                  return fetchFakeItems(cat);
                                case 1:
                                  allItems.value = _context3.v;
                                  loading.value = false;
                                case 2:
                                  return _context3.a(2);
                              }
                            }, _callee3);
                          }))
                        }, _isSlot(label) ? label : {
                          default: function _default() {
                            return [label];
                          }
                        })];
                      }
                    });
                  })) ? _slot2 : {
                    default: function _default() {
                      return [_slot2];
                    }
                  })];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-order__search"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* SearchBar */.IW, {
                    "placeholder": "\u60A8\u60F3\u559D\u70B9\u4EC0\u4E48\uFF1F",
                    "value": keyword.value,
                    "onChange": function onChange(v) {
                      return keyword.value = v;
                    },
                    "onSearch": function onSearch(v) {
                      return keyword.value = v;
                    },
                    "shape": "round",
                    "background": "#ffffff"
                  }, null)];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-order__section-title"
              }, {
                default: function _default() {
                  return [categories[current.value] === '全部' ? '热门推荐' : "".concat(categories[current.value], "\u7CFB\u5217")];
                }
              }), loading.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-order__loading"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null)];
                }
              }) : (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-order__grid"
              }, _isSlot(_slot4 = twoCols.value.map(function (col, colIdx) {
                var _slot3;
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                  "class": "coffee-order__col",
                  "key": colIdx
                }, _isSlot(_slot3 = col.map(function (item) {
                  return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "coffee-order__card",
                    "key": item.id
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
                        "type": "vertical",
                        "image": item.image,
                        "name": item.name,
                        "price": item.price,
                        "listPrice": item.listPrice,
                        "action": (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                          "class": "coffee-order__actions"
                        }, {
                          default: function _default() {
                            return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                              "class": "coffee-order__buy",
                              "onClick": function onClick() {
                                return onOrder(item);
                              }
                            }, {
                              default: function _default() {
                                return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9A6C\u4E0A\u8BA2\u8D2D")];
                              }
                            })];
                          }
                        }),
                        "onClick": function onClick() {
                          return showDetail(item);
                        }
                      }, null)];
                    }
                  });
                })) ? _slot3 : {
                  default: function _default() {
                    return [_slot3];
                  }
                });
              })) ? _slot4 : {
                default: function _default() {
                  return [_slot4];
                }
              })];
            }
          })];
        }
      });
    };
  }
}));
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
// EXTERNAL MODULE: ./src/stores/profile.ts
var stores_profile = __webpack_require__(1002);
;// ./src/packageMain/tab-pages/test/coffeeMine/index.tsx
// 我的（个人中心 - Coffee 风格）










/* harmony default export */ var coffeeMine = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CoffeeMinePage',
  setup: function setup() {
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)((0,lib/* useUserStore */.kH)()),
      user = _storeToRefs.user,
      isLogin = _storeToRefs.isLogin;
    var login = lib/* useLogin */.vz;

    // 余额（演示）
    var profileStore = (0,stores_profile/* useProfileStore */.K)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(profileStore),
      balanceText = _storeToRefs2.balanceText,
      isBalanceAvailable = _storeToRefs2.isBalanceAvailable;
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      // 登录后再拉取余额
      if (isLogin.value) profileStore.getAccountBalance();
    });
    var avatar = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _user$value;
      return ((_user$value = user.value) === null || _user$value === void 0 ? void 0 : _user$value.avatar) || config/* DEFAULT_AVATAR */.k_;
    });
    var nickname = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _user$value2;
      return ((_user$value2 = user.value) === null || _user$value2 === void 0 ? void 0 : _user$value2.nickname) || '游客';
    });
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          navigatorStyle: 'blank',
          immersive: true,
          fixedTitle: '个人中心',
          navigationBarTextStyleFixed: 'black',
          navigationBarBackgroundColorFixed: 'rgba(255,255,255,0)'
        },
        "navigatorPlaceholder": true,
        "useScrollView": true
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "coffee-mine"
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "mine-header"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "mine-header__profile"
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                        "class": "avatar",
                        "mode": "aspectFill",
                        "src": request/* REQUEST_DOMAIN */.F7 + user.value.avatar
                      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "info"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                            "class": "nickname"
                          }, {
                            default: function _default() {
                              return [nickname.value];
                            }
                          }), !isLogin.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                            "class": "login-btn",
                            "onClick": function onClick() {
                              return login();
                            }
                          }, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u767B\u5F55/\u6CE8\u518C")];
                            }
                          }) : (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                            "class": "desc"
                          }, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6B22\u8FCE\u56DE\u6765\uFF0C\u5F00\u542F\u4ECA\u65E5\u5496\u5561\u65F6\u5149")];
                            }
                          })];
                        }
                      })];
                    }
                  })];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "mine-actions"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "mine-actions__item",
                    "onClick": (0,lib/* withLogin */.E6)(router/* navigateToWallet */._j)
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "left"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "wallet"
                          }, null)];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "center"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                            "class": "label"
                          }, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u94B1\u5305")];
                            }
                          }), isBalanceAvailable.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                            "class": "extra"
                          }, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFFE5"), balanceText.value];
                            }
                          })];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "right"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "right"
                          }, null)];
                        }
                      })];
                    }
                  }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "mine-actions__item",
                    "onClick": (0,lib/* withLogin */.E6)(router/* navigateToCoupon */.Hx)
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "left"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "cards-offers"
                          }, null)];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "center"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                            "class": "label"
                          }, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6211\u7684\u5361\u5238")];
                            }
                          })];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "right"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "right"
                          }, null)];
                        }
                      })];
                    }
                  }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "mine-actions__item",
                    "onClick": function onClick() {
                      return (0,router/* navigateToOrderList */.lG)();
                    }
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "left"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "order"
                          }, null)];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "center"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                            "class": "label"
                          }, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6211\u7684\u8BA2\u5355")];
                            }
                          })];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "right"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "right"
                          }, null)];
                        }
                      })];
                    }
                  }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "mine-actions__item",
                    "onClick": router/* navigateToSettings */.Ox
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "left"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "settings"
                          }, null)];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "center"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                            "class": "label"
                          }, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u66F4\u591A\u8BBE\u7F6E")];
                            }
                          })];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "right"
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "right"
                          }, null)];
                        }
                      })];
                    }
                  })];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "mine-coffee"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                    "class": "section-title"
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5E38\u7528\u529F\u80FD")];
                    }
                  }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "chips"
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "chip",
                        "onClick": function onClick() {
                          return (0,router/* navigateToOrderList */.lG)(1);
                        }
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "clock"
                          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, null, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F85\u4ED8\u6B3E")];
                            }
                          })];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "chip",
                        "onClick": function onClick() {
                          return (0,router/* navigateToOrderList */.lG)(2);
                        }
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "delivery"
                          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, null, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u914D\u9001\u4E2D")];
                            }
                          })];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "chip",
                        "onClick": function onClick() {
                          return (0,router/* navigateToOrderList */.lG)(3);
                        }
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "evaluate"
                          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, null, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F85\u8BC4\u4EF7")];
                            }
                          })];
                        }
                      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                        "class": "chip",
                        "onClick": router/* navigateToSettings */.Ox
                      }, {
                        default: function _default() {
                          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                            "name": "address"
                          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, null, {
                            default: function _default() {
                              return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5730\u5740\u7BA1\u7406")];
                            }
                          })];
                        }
                      })];
                    }
                  })];
                }
              })];
            }
          })];
        }
      });
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-dom@3.5.22/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8506);
;// ./src/packageMain/tab-pages/test/coffeeOrder/index.tsx
// 点单列表（可交互）







function coffeeOrder_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var coffeeOrder = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CoffeeOrderPage',
  setup: function setup() {
    // 视图切换：菜单 / 订单
    var currentView = (0,reactivity_esm_bundler/* ref */.KR)('menu');
    var toggleView = function toggleView(view) {
      currentView.value = view;
    };
    var categories = (0,reactivity_esm_bundler/* ref */.KR)([{
      id: 'xianmo',
      name: '现磨咖啡'
    }, {
      id: 'shouchong',
      name: '手冲咖啡'
    }, {
      id: 'qiaokeli',
      name: '巧克力味'
    }, {
      id: 'matcha',
      name: '抹茶系列'
    }, {
      id: 'dessert',
      name: '小吃甜品'
    }, {
      id: 'bread',
      name: '现烤面包'
    }]);
    var activeIndex = (0,reactivity_esm_bundler/* ref */.KR)(2);
    var IMG_COUNT = 6;
    var buildItems = function buildItems(prefix) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
      var list = [];
      for (var i = 0; i < count; i++) {
        var idx = startIndex + i;
        var imgIndex = (idx - 1) % IMG_COUNT + 1;
        list.push({
          id: "".concat(prefix, "-").concat(idx),
          name: "".concat(prefix, "\u5496\u5561 ").concat(idx),
          desc: idx % 2 === 0 ? '中杯/热/不加糖' : '大杯/冰/三分糖',
          price: 18.8,
          listPrice: 22,
          image: (0,utils_test/* buildCoffeeImgUrl */.f)(imgIndex)
        });
      }
      return list;
    };
    var datasets = {
      xianmo: buildItems('现磨', 1, 6),
      shouchong: buildItems('手冲', 1, 6),
      qiaokeli: buildItems('巧克力味', 1, 6),
      matcha: buildItems('抹茶', 1, 6),
      dessert: buildItems('甜品', 1, 6),
      bread: buildItems('面包', 1, 6)
    };
    var goods = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var current = categories.value[activeIndex.value];
      return datasets[current.id] || [];
    });
    var bannerImg = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return (0,utils_test/* buildCoffeeImgUrl */.f)(activeIndex.value % IMG_COUNT + 1);
    });
    var onChangeCategory = function onChangeCategory(idx) {
      activeIndex.value = idx;
    };
    var onAdd = function onAdd(id) {
      // 这里可接入购物车逻辑，目前为占位行为
      console.log('add goods', id);
    };

    // 构造演示规格（与 coffeeHome 保持一致）
    var buildDemoSkus = function buildDemoSkus(goodsId, defaultImage) {
      var sizes = [{
        id: 'size-s',
        name: '小杯'
      }, {
        id: 'size-m',
        name: '中杯'
      }, {
        id: 'size-l',
        name: '大杯'
      }];
      var sugars = [{
        id: 'sugar-0',
        name: '不加糖'
      }, {
        id: 'sugar-3',
        name: '三分糖'
      }, {
        id: 'sugar-5',
        name: '半糖'
      }];
      var temps = [{
        id: 'temp-hot',
        name: '热'
      }, {
        id: 'temp-ice',
        name: '冰'
      }];
      var skus = [];
      var sort = 100;
      sizes.forEach(function (size) {
        sugars.forEach(function (sugar) {
          temps.forEach(function (temp) {
            var id = "".concat(goodsId, "-").concat(size.id, "-").concat(sugar.id, "-").concat(temp.id);
            var basePrice = 20;
            var priceDelta = (size.id === 'size-l' ? 4 : size.id === 'size-m' ? 2 : 0) + (temp.id === 'temp-ice' ? 2 : 0);
            var price = (basePrice + priceDelta) * 100;
            var listPrice = price + 400;
            skus.push({
              id: id,
              goodsId: goodsId,
              specCode: "".concat(size.id, "|").concat(sugar.id, "|").concat(temp.id),
              underlinePrice: listPrice,
              price: price,
              cost: price - 300,
              stock: 99,
              weight: 0,
              sort: sort--,
              path: '',
              specs: [{
                k: '杯型',
                kId: 'size',
                v: size.name,
                vId: size.id,
                image: defaultImage
              }, {
                k: '糖分',
                kId: 'sugar',
                v: sugar.name,
                vId: sugar.id
              }, {
                k: '温度',
                kId: 'temp',
                v: temp.name,
                vId: temp.id
              }]
            });
          });
        });
      });
      return skus;
    };
    var showDetail = function showDetail(item) {
      var skus = buildDemoSkus(item.id, item.image);
      (0,hooks/* useGoodsSkuModal */.oT)({
        skus: skus,
        defaultImage: item.image,
        actions: [{
          text: '加入购物车',
          type: 'primary',
          onClick: function onClick(data) {
            (0,lib/* useToast */.dj)("\u5DF2\u52A0\u5165\u8D2D\u7269\u8F66\uFF1A".concat(item.name, " x").concat(data.count));
          }
        }]
      });
    };

    // 虚构订单列表数据

    var orders = (0,reactivity_esm_bundler/* ref */.KR)([{
      id: 'o-1001',
      no: '202311120001',
      title: '巧克力拿铁等3件',
      count: 3,
      amount: 56.4,
      status: '待支付',
      time: '15:05'
    }, {
      id: 'o-1002',
      no: '202311120002',
      title: '现磨美式等2件',
      count: 2,
      amount: 32.0,
      status: '制作中',
      time: '14:58'
    }, {
      id: 'o-1003',
      no: '202311120003',
      title: '手冲耶加等1件',
      count: 1,
      amount: 22.0,
      status: '已完成',
      time: '13:41'
    }, {
      id: 'o-1004',
      no: '202311120004',
      title: '抹茶拿铁等2件',
      count: 2,
      amount: 39.8,
      status: '已取消',
      time: '12:20'
    }]);
    var onOrderAction = function onOrderAction(order) {
      console.log('order action', order.id, order.status);
    };
    return function () {
      var _slot, _slot2;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          navigatorStyle: 'blank',
          immersive: true,
          title: '',
          navigationBarBackgroundColorFixed: 'rgba(0,0,0,0)'
        },
        "navigatorPlaceholder": true,
        "useScrollView": false
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__header"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__tabs"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['coffee-order-page__tab', currentView.value === 'menu' && 'is-active'],
            "onClick": function onClick() {
              return toggleView('menu');
            }
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u83DC\u5355")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['coffee-order-page__tab', currentView.value === 'orders' && 'is-active'],
            "onClick": function onClick() {
              return toggleView('orders');
            }
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BA2\u5355")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__header-actions"
          }, null)]), currentView.value === 'menu' ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__body"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__left"
          }, [categories.value.map(function (c, idx) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "key": c.id,
              "class": ['coffee-order-page__cat-item', idx === activeIndex.value ? 'is-active' : ''],
              "onClick": function onClick() {
                return onChangeCategory(idx);
              }
            }, [c.name]);
          })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__right"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__banner"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
            "class": "image",
            "mode": "aspectFill",
            "src": bannerImg.value
          }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__list"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
            "scrollY": true,
            "class": "coffee-order-page__list-scroll"
          }, coffeeOrder_isSlot(_slot = goods.value.map(function (item) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coffee-order-page__list-item",
              "key": item.id,
              "onClick": function onClick() {
                return showDetail(item);
              }
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
              "type": "horizontal",
              "image": item.image,
              "name": item.name,
              "desc": item.desc,
              "price": item.price,
              "listPrice": item.listPrice,
              "action": (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "coffee-order-page__add",
                "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(function () {
                  return onAdd(item.id);
                }, ['stop'])
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("+")])
            }, null)]);
          })) ? _slot : {
            default: function _default() {
              return [_slot];
            }
          })])])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coffee-order-page__orders"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
            "scrollY": true,
            "class": "coffee-order-page__order-scroll"
          }, coffeeOrder_isSlot(_slot2 = orders.value.map(function (o) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coffee-order-page__order-card",
              "key": o.id
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coffee-order-page__order-main"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coffee-order-page__order-title"
            }, [o.title]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coffee-order-page__order-sub"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5355\u53F7\uFF1A"), o.no]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xB7 \u4EF6\u6570\uFF1A"), o.count]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xB7 \u65F6\u95F4\uFF1A"), o.time])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coffee-order-page__order-side"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coffee-order-page__order-amount"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), o.amount.toFixed(1)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['coffee-order-page__order-action', "status-".concat(o.status)],
              "onClick": function onClick() {
                return onOrderAction(o);
              }
            }, [o.status])])]);
          })) ? _slot2 : {
            default: function _default() {
              return [_slot2];
            }
          })])])];
        }
      });
    };
  }
}));
;// ./src/packageMain/tab-pages/test/coffeeWorkShop/index.tsx




// 文创








function coffeeWorkShop_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
var coffeeWorkShop_categories = ['全部', '文创周边', '手作课程', '主题礼盒', '品牌故事'];
/* harmony default export */ var coffeeWorkShop = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CoffeeWorkShopPage',
  setup: function setup() {
    var current = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var keyword = (0,reactivity_esm_bundler/* ref */.KR)('');
    var loading = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var loadingMore = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var bannerImg = (0,reactivity_esm_bundler/* ref */.KR)((0,utils_test/* buildImgUrl */.Z)(1));
    var currentCat = (0,reactivity_esm_bundler/* ref */.KR)('全部');
    var nextIndex = (0,reactivity_esm_bundler/* ref */.KR)(1);
    var PAGE_SIZE = 8;
    var buildItems = function buildItems(prefix) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var tag = arguments.length > 3 ? arguments[3] : undefined;
      var list = [];
      for (var i = 0; i < count; i++) {
        var idx = startIndex + i;
        list.push({
          id: "".concat(prefix, "-").concat(idx),
          name: "".concat(prefix, " ").concat(idx),
          price: 39 + idx % 4 * 10,
          listPrice: 59 + idx % 4 * 10,
          image: (0,utils_test/* buildImgUrl */.Z)((idx - 1) % 10 + 1),
          tag: tag
        });
      }
      return list;
    };
    var allItems = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var storyList = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var fetchFakeData = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(cat) {
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              loading.value = true;
              currentCat.value = cat;
              _context.n = 1;
              return new Promise(function (r) {
                return setTimeout(r, 200);
              });
            case 1:
              if (cat === '文创周边') {
                allItems.value = buildItems('咖啡杯周边', 1, 8, '周边');
                storyList.value = [];
              } else if (cat === '手作课程') {
                allItems.value = buildItems('手作课程', 1, 6, '课程');
                storyList.value = [];
              } else if (cat === '主题礼盒') {
                allItems.value = buildItems('主题礼盒', 1, 6, '礼盒');
                storyList.value = [];
              } else if (cat === '品牌故事') {
                allItems.value = [];
                storyList.value = [{
                  id: 'story-1',
                  title: '从一杯到一城',
                  summary: '我们在城市角落里，酝酿关于咖啡与生活的故事。',
                  image: (0,utils_test/* buildImgUrl */.Z)(2)
                }, {
                  id: 'story-2',
                  title: '手作与温度',
                  summary: '每一个细节，都在双手与材料的摩擦中诞生。',
                  image: (0,utils_test/* buildImgUrl */.Z)(3)
                }, {
                  id: 'story-3',
                  title: '文创让日常更美',
                  summary: '把风味与灵感装进杯子、袋子与每一次相遇。',
                  image: (0,utils_test/* buildImgUrl */.Z)(4)
                }];
              } else {
                allItems.value = [].concat((0,toConsumableArray/* default */.A)(buildItems('咖啡杯周边', 1, 6, '周边')), (0,toConsumableArray/* default */.A)(buildItems('主题礼盒', 1, 3, '礼盒')), (0,toConsumableArray/* default */.A)(buildItems('手作课程', 1, 3, '课程')));
                storyList.value = [];
              }
              // 记录下一次追加的起始索引，避免 id/image 重复
              nextIndex.value = allItems.value.length + 1;
              loading.value = false;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function fetchFakeData(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    (0,runtime_core_esm_bundler/* onMounted */.sV)(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2() {
      return (0,regenerator/* default */.A)().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return fetchFakeData('全部');
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    })));
    var filtered = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var k = keyword.value.trim();
      var base = allItems.value;
      return k ? base.filter(function (i) {
        return i.name.includes(k);
      }) : base;
    });
    var twoCols = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var left = [];
      var right = [];
      filtered.value.forEach(function (item, idx) {
        return (idx % 2 === 0 ? left : right).push(item);
      });
      return [left, right];
    });
    var onOrder = function onOrder(item) {
      (0,lib/* useToast */.dj)("\u5DF2\u9009\u62E9\u300C".concat(item.name, "\u300D"));
    };
    var showDetail = function showDetail(item) {
      (0,lib/* useToast */.dj)("\u67E5\u770B\u8BE6\u60C5\uFF1A".concat(item.name));
    };
    var loadMore = /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee3() {
        var prefix, tag, more;
        return (0,regenerator/* default */.A)().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!(currentCat.value === '品牌故事')) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              if (!(loading.value || loadingMore.value)) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              loadingMore.value = true;
              _context3.n = 3;
              return new Promise(function (r) {
                return setTimeout(r, 150);
              });
            case 3:
              prefix = '更多文创';
              tag = undefined;
              if (currentCat.value === '文创周边') {
                prefix = '咖啡杯周边';
                tag = '周边';
              } else if (currentCat.value === '手作课程') {
                prefix = '手作课程';
                tag = '课程';
              } else if (currentCat.value === '主题礼盒') {
                prefix = '主题礼盒';
                tag = '礼盒';
              }
              more = buildItems(prefix, nextIndex.value, PAGE_SIZE, tag);
              allItems.value = [].concat((0,toConsumableArray/* default */.A)(allItems.value), (0,toConsumableArray/* default */.A)(more));
              nextIndex.value += PAGE_SIZE;
              loadingMore.value = false;
            case 4:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return function loadMore() {
        return _ref3.apply(this, arguments);
      };
    }();
    return function () {
      var _slot, _slot2, _slot4;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          navigatorStyle: 'blank',
          immersive: true,
          title: '',
          fixedTitle: '文创',
          navigationBarTextStyleFixed: 'black',
          navigationBarBackgroundColorFixed: 'rgba(255, 255, 255, 0)',
          navigationBarBackgroundColor: 'rgba(0, 0, 0, 0)'
        },
        "navigatorPlaceholder": true,
        "useScrollView": true,
        "scrollView": {
          onScrollToLower: loadMore
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "workshop-page"
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__header"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                    "class": "workshop__title"
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6587\u521B")];
                    }
                  })];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__banner",
                "onClick": function onClick() {
                  return (0,router/* navigateToCreativeDetail */.b4)('creative-banner', '精选文创');
                }
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                    "class": "workshop__banner-img",
                    "mode": "aspectFill",
                    "src": bannerImg.value
                  }, null)];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__tabs"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* ScrollTab */.RH, {
                    "current": current.value
                  }, coffeeWorkShop_isSlot(_slot = coffeeWorkShop_categories.map(function (label, i) {
                    return (0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* ScrollTabItem */.AN, {
                      "key": label
                    }, {
                      default: function _default() {
                        return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                          "class": "workshop__tab ".concat(current.value === i ? 'is-active' : ''),
                          "onClick": /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee4() {
                            return (0,regenerator/* default */.A)().w(function (_context4) {
                              while (1) switch (_context4.n) {
                                case 0:
                                  current.value = i;
                                  _context4.n = 1;
                                  return fetchFakeData(coffeeWorkShop_categories[i]);
                                case 1:
                                  return _context4.a(2);
                              }
                            }, _callee4);
                          }))
                        }, coffeeWorkShop_isSlot(label) ? label : {
                          default: function _default() {
                            return [label];
                          }
                        })];
                      }
                    });
                  })) ? _slot : {
                    default: function _default() {
                      return [_slot];
                    }
                  })];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__search"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* SearchBar */.IW, {
                    "placeholder": "\u60A8\u60F3\u627E\u70B9\u4EC0\u4E48\u6587\u521B\uFF1F",
                    "value": keyword.value,
                    "onChange": function onChange(v) {
                      return keyword.value = v;
                    },
                    "onSearch": function onSearch(v) {
                      return keyword.value = v;
                    },
                    "shape": "round",
                    "background": "#ffffff"
                  }, null)];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__section-title"
              }, {
                default: function _default() {
                  return [coffeeWorkShop_categories[current.value] === '全部' ? '精选推荐' : "".concat(coffeeWorkShop_categories[current.value])];
                }
              }), loading.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__loading"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null)];
                }
              }) : storyList.value.length > 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__stories"
              }, coffeeWorkShop_isSlot(_slot2 = storyList.value.map(function (story) {
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                  "class": "workshop__story-card",
                  "key": story.id,
                  "onClick": function onClick() {
                    return (0,lib/* useToast */.dj)("\u9605\u8BFB\uFF1A".concat(story.title));
                  }
                }, {
                  default: function _default() {
                    return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                      "class": "workshop__story-image",
                      "mode": "aspectFill",
                      "src": story.image
                    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                      "class": "workshop__story-content"
                    }, {
                      default: function _default() {
                        return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                          "class": "workshop__story-title"
                        }, {
                          default: function _default() {
                            return [story.title];
                          }
                        }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                          "class": "workshop__story-summary"
                        }, {
                          default: function _default() {
                            return [story.summary];
                          }
                        })];
                      }
                    })];
                  }
                });
              })) ? _slot2 : {
                default: function _default() {
                  return [_slot2];
                }
              }) : (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "workshop__grid"
              }, coffeeWorkShop_isSlot(_slot4 = twoCols.value.map(function (col, colIdx) {
                var _slot3;
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                  "class": "workshop__col",
                  "key": colIdx
                }, coffeeWorkShop_isSlot(_slot3 = col.map(function (item) {
                  return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                    "class": "workshop__card",
                    "key": item.id
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
                        "type": "vertical",
                        "image": item.image,
                        "name": item.name,
                        "price": item.price,
                        "listPrice": item.listPrice,
                        "action": (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                          "class": "workshop__actions"
                        }, {
                          default: function _default() {
                            return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                              "class": "workshop__buy",
                              "onClick": function onClick() {
                                return onOrder(item);
                              }
                            }, {
                              default: function _default() {
                                return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u9009\u8D2D")];
                              }
                            })];
                          }
                        }),
                        "onClick": function onClick() {
                          return (0,router/* navigateToCreativeDetail */.b4)(item.id, item.name);
                        }
                      }, null)];
                    }
                  });
                })) ? _slot3 : {
                  default: function _default() {
                    return [_slot3];
                  }
                });
              })) ? _slot4 : {
                default: function _default() {
                  return [_slot4];
                }
              })];
            }
          })];
        }
      });
    };
  }
}));
;// ./src/packageMain/tab-pages/test/coffeeCommunity/index.tsx










function coffeeCommunity_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
var coffeeCommunity_categories = ['推荐', '视频', '直播', '短剧', '搞笑', '头像'];
/* harmony default export */ var coffeeCommunity = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CoffeeCommunityPage',
  setup: function setup() {
    var current = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var MAX_IMG = 10;
    var safeIndex = function safeIndex(n) {
      return (n % MAX_IMG + MAX_IMG) % MAX_IMG + 1;
    };
    var buildPosts = function buildPosts() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
      var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var list = [];
      var _loop = function _loop(i) {
        var id = "".concat(seed, "-").concat(i + 1);
        var cover = (0,utils_test/* buildImgUrl */.Z)(safeIndex(i + seed));
        var imageCount = i % 5 + 1;
        var images = new Array(imageCount).fill(0).map(function (_, idx) {
          return (0,utils_test/* buildImgUrl */.Z)(safeIndex(idx + i + seed));
        });
        list.push({
          id: id,
          title: ['收容记录', '早安', '别争', '不化妆也很美', '秋日碎拍'][i % 5],
          cover: cover,
          images: images,
          author: {
            id: "u-".concat(i),
            name: ['peachoney', '人民网', '好好生活呀', '吃啥嘞嘞', '今日份美美'][i % 5],
            avatar: (0,utils_test/* buildImgUrl */.Z)(safeIndex(i + 3))
          },
          likes: 200 + i * 5,
          comments: 50 + i * 2
        });
      };
      for (var i = 0; i < count; i++) {
        _loop(i);
      }
      return list;
    };
    var list = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var pageNo = (0,reactivity_esm_bundler/* ref */.KR)(1);
    var loading = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var hasMore = (0,reactivity_esm_bundler/* ref */.KR)(true);
    var initList = function initList() {
      pageNo.value = 1;
      hasMore.value = true;
      list.value = buildPosts(12, current.value + pageNo.value);
    };
    var loadMore = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
        var next;
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(loading.value || !hasMore.value)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              loading.value = true;
              next = buildPosts(10, current.value + pageNo.value + 1);
              list.value = list.value.concat(next);
              pageNo.value += 1;
              // 简单示例：加载到第 5 页后认为没有更多
              if (pageNo.value >= 5) hasMore.value = false;
              loading.value = false;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function loadMore() {
        return _ref.apply(this, arguments);
      };
    }();

    // 初始化数据
    initList();

    // 分类切换时重置数据
    (0,runtime_core_esm_bundler/* watch */.wB)(current, function () {
      initList();
    });
    var twoCols = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var left = [];
      var right = [];
      list.value.forEach(function (item, idx) {
        return idx % 2 === 0 ? left.push(item) : right.push(item);
      });
      return [left, right];
    });
    var Card = function Card(props) {
      var post = props.post;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
        "class": "community-card",
        "onClick": function onClick() {
          return (0,router/* navigateToCommunityDetail */.D$)(post.id);
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "cover"
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                "class": "image",
                "mode": "aspectFill",
                "src": post.cover
              }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "title-mask"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                    "class": "title"
                  }, {
                    default: function _default() {
                      return [post.title];
                    }
                  })];
                }
              })];
            }
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "meta"
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "author"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                    "class": "avatar",
                    "mode": "aspectFill",
                    "src": post.author.avatar
                  }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                    "class": "name"
                  }, {
                    default: function _default() {
                      return [post.author.name];
                    }
                  })];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "stats"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(ui_src/* Icon */.In, {
                    "name": "like",
                    "size": 16
                  }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                    "class": "count"
                  }, {
                    default: function _default() {
                      return [post.likes];
                    }
                  })];
                }
              })];
            }
          })];
        }
      });
    };
    return function () {
      var _slot, _slot3;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          navigatorStyle: 'blank',
          immersive: true,
          // title: <View class="community-tabs">
          //   {categories.map((label, i) => (
          //     <View
          //       key={label}
          //       class={['tab', current.value === i && 'is-active']}
          //       onClick={() => (current.value = i)}
          //     >
          //       {label}
          //       {current.value === i && <View class="tab-bar"/>}
          //     </View>
          //   ))}
          // </View>,
          titleCentered: true,
          fixedTitle: (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "community-logo"
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                "class": "logo-text"
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("YESONG")];
                }
              })];
            }
          }),
          navigationBarTextStyleFixed: 'black',
          navigationBarBackgroundColorFixed: '#ffffff',
          navigationBarBackgroundColor: 'rgba(0,0,0,0)'
        },
        "useScrollView": true,
        "scrollView": {
          onScrollToLower: loadMore,
          lowerThreshold: 160
        },
        "navigatorPlaceholder": true
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "community-tabs"
          }, coffeeCommunity_isSlot(_slot = coffeeCommunity_categories.map(function (label, i) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
              "key": label,
              "class": ['tab', current.value === i && 'is-active'],
              "onClick": function onClick() {
                return current.value = i;
              }
            }, {
              default: function _default() {
                return [label, current.value === i && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                  "class": "tab-bar"
                }, null)];
              }
            });
          })) ? _slot : {
            default: function _default() {
              return [_slot];
            }
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "coffee-community"
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "community-grid"
              }, coffeeCommunity_isSlot(_slot3 = twoCols.value.map(function (col, idx) {
                var _slot2;
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                  "class": "grid-col",
                  "key": idx
                }, coffeeCommunity_isSlot(_slot2 = col.map(function (item) {
                  return (0,runtime_core_esm_bundler/* createVNode */.bF)(Card, {
                    "post": item,
                    "key": item.id
                  }, null);
                })) ? _slot2 : {
                  default: function _default() {
                    return [_slot2];
                  }
                });
              })) ? _slot3 : {
                default: function _default() {
                  return [_slot3];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "community-loading"
              }, {
                default: function _default() {
                  return [loading.value ? '正在加载...' : hasMore.value ? '下拉加载更多' : '没有更多了'];
                }
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
                "class": "coffee-floating-publish",
                "onClick": function onClick() {
                  return (0,lib/* navigateTo */.VJ)({
                    url: '/packageA/community/publish/index'
                  });
                }
              }, {
                default: function _default() {
                  return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Text */.EY, {
                    "class": "icon"
                  }, {
                    default: function _default() {
                      return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("+")];
                    }
                  })];
                }
              })];
            }
          })];
        }
      });
    };
  }
}));
;// ./src/packageMain/index.tsx





















// 内置的系统页面
var pages = {
  home: home,
  category: category/* default */.A,
  cart: cart/* default */.A,
  profile: profile/* default */.A,
  test: test,
  coffeeHome: coffeeHome,
  coffeeMine: coffeeMine,
  coffeeOrder: coffeeOrder,
  coffeeWorkShop: coffeeWorkShop,
  coffeeCommunity: coffeeCommunity
};
var TabPage = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'IndexTabPage',
  props: {
    hidden: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['index-page__tab-page', props.hidden && 'hidden']
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
/* harmony default export */ var packageMain = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'IndexPage',
  setup: function setup() {
    var route = taro/* default.useRouter */.Ay.useRouter();
    var appStore = (0,stores/* useGlobalStore */.on)();
    (0,stores/* useGlobalStore */.on)().getIndexTabs();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(appStore),
      tabs = _storeToRefs.tabs,
      currentTab = _storeToRefs.currentTab,
      loadedTab = _storeToRefs.loadedTab,
      indexTabConfig = _storeToRefs.indexTabConfig;
    var onTabChange = function onTabChange(key, keyIndex, item) {
      if (item !== null && item !== void 0 && item.action && item !== null && item !== void 0 && item.actionEnable) {
        (0,useAction/* default */.A)(item.action);
        return;
      } else {
        appStore.toggleTab(key);
      }
    };
    route.params.tab && onTabChange(route.params.tab);
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      (0,goods/* default */.A)().getGoodsRecommendRule();
    });
    var init = function init() {
      console.log('系统内置页面pages:');
      console.log(pages);
    };
    init();
    return function () {
      var _ref2, _indexTabConfig$value, _indexTabConfig$value2, _indexTabConfig$value3, _indexTabConfig$value4, _indexTabConfig$value5, _indexTabConfig$value6, _indexTabConfig$value7, _indexTabConfig$value8, _indexTabConfig$value9, _indexTabConfig$value0, _indexTabConfig$value1, _indexTabConfig$value10, _indexTabConfig$value11;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": null,
        "enableShareAppMessage": true,
        "enableGlobalShare": true
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "index-page"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "index-page__container"
          }, [tabs.value.map(function (tab) {
            var _tab$key;
            var Comp = pages[tab.key];
            var isSystemPage = Boolean(Comp);
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(TabPage, {
              "hidden": tab.key !== currentTab.value
            }, {
              default: function _default() {
                return [loadedTab.value[tab.key] && (isSystemPage ? (0,runtime_core_esm_bundler/* createVNode */.bF)(Comp, null, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(index_custom, {
                  "pageId": tab === null || tab === void 0 || (_tab$key = tab.key) === null || _tab$key === void 0 ? void 0 : _tab$key.id,
                  "action": tab === null || tab === void 0 ? void 0 : tab.action
                }, null))];
              }
            });
          })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "index-page__tab"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* TabBar */.VQ, {
            "tabs": tabs.value,
            "current": currentTab.value,
            "theme": (_ref2 = (_indexTabConfig$value = indexTabConfig.value) === null || _indexTabConfig$value === void 0 ? void 0 : _indexTabConfig$value.theme) !== null && _ref2 !== void 0 ? _ref2 : demo_namespaceObject.w4,
            "backgroundColor": (_indexTabConfig$value2 = (_indexTabConfig$value3 = indexTabConfig.value) === null || _indexTabConfig$value3 === void 0 ? void 0 : _indexTabConfig$value3.backgroundColor) !== null && _indexTabConfig$value2 !== void 0 ? _indexTabConfig$value2 : demo_namespaceObject.oR,
            "color": (_indexTabConfig$value4 = (_indexTabConfig$value5 = indexTabConfig.value) === null || _indexTabConfig$value5 === void 0 ? void 0 : _indexTabConfig$value5.color) !== null && _indexTabConfig$value4 !== void 0 ? _indexTabConfig$value4 : demo_namespaceObject.yW,
            "activeColor": (_indexTabConfig$value6 = (_indexTabConfig$value7 = indexTabConfig.value) === null || _indexTabConfig$value7 === void 0 ? void 0 : _indexTabConfig$value7.activeColor) !== null && _indexTabConfig$value6 !== void 0 ? _indexTabConfig$value6 : demo_namespaceObject.aV,
            "borderRadius": (_indexTabConfig$value8 = (_indexTabConfig$value9 = indexTabConfig.value) === null || _indexTabConfig$value9 === void 0 ? void 0 : _indexTabConfig$value9.borderRadius) !== null && _indexTabConfig$value8 !== void 0 ? _indexTabConfig$value8 : demo_namespaceObject.Vq,
            "margin": (_indexTabConfig$value0 = (_indexTabConfig$value1 = indexTabConfig.value) === null || _indexTabConfig$value1 === void 0 ? void 0 : _indexTabConfig$value1.menuMargin) !== null && _indexTabConfig$value0 !== void 0 ? _indexTabConfig$value0 : [0, 0, 0, 0],
            "padding": (_indexTabConfig$value10 = (_indexTabConfig$value11 = indexTabConfig.value) === null || _indexTabConfig$value11 === void 0 ? void 0 : _indexTabConfig$value11.menuPadding) !== null && _indexTabConfig$value10 !== void 0 ? _indexTabConfig$value10 : [0, 0, 0, 0],
            "onChange": onTabChange,
            "onAction": useAction/* default */.A
          }, null)])])];
        }
      });
    };
  }
}));

/***/ }),

/***/ 2347:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_cloneDeep; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__(4488);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayEach.js
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ var _arrayEach = (arrayEach);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignValue.js
var _assignValue = __webpack_require__(1691);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyObject.js
var _copyObject = __webpack_require__(7);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js + 2 modules
var keys = __webpack_require__(9349);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssign.js



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject/* default */.A)(source, (0,keys/* default */.A)(source), object);
}

/* harmony default export */ var _baseAssign = (baseAssign);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keysIn.js + 2 modules
var keysIn = __webpack_require__(4359);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignIn.js



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject/* default */.A)(source, (0,keysIn/* default */.A)(source), object);
}

/* harmony default export */ var _baseAssignIn = (baseAssignIn);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__(498);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
var _copyArray = __webpack_require__(9047);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getSymbols.js + 1 modules
var _getSymbols = __webpack_require__(8241);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbols.js



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject/* default */.A)(source, (0,_getSymbols/* default */.A)(source), object);
}

/* harmony default export */ var _copySymbols = (copySymbols);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayPush.js
var _arrayPush = __webpack_require__(4696);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getPrototype.js
var _getPrototype = __webpack_require__(4903);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubArray.js
var stubArray = __webpack_require__(3481);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray/* default */.A : function(object) {
  var result = [];
  while (object) {
    (0,_arrayPush/* default */.A)(result, (0,_getSymbols/* default */.A)(object));
    object = (0,_getPrototype/* default */.A)(object);
  }
  return result;
};

/* harmony default export */ var _getSymbolsIn = (getSymbolsIn);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbolsIn.js



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject/* default */.A)(source, _getSymbolsIn(source), object);
}

/* harmony default export */ var _copySymbolsIn = (copySymbolsIn);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeys.js
var _getAllKeys = __webpack_require__(9370);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetAllKeys.js
var _baseGetAllKeys = __webpack_require__(2383);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys/* default */.A)(object, keysIn/* default */.A, _getSymbolsIn);
}

/* harmony default export */ var _getAllKeysIn = (getAllKeysIn);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getTag.js + 3 modules
var _getTag = __webpack_require__(1801);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneArray.js
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _initCloneArray_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && _initCloneArray_hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ var _initCloneArray = (initCloneArray);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneArrayBuffer.js
var _cloneArrayBuffer = __webpack_require__(3773);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneDataView.js


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer/* default */.A)(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ var _cloneDataView = (cloneDataView);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ var _cloneRegExp = (cloneRegExp);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(4633);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneSymbol.js


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol/* default */.A ? _Symbol/* default */.A.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ var _cloneSymbol = (cloneSymbol);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneTypedArray.js
var _cloneTypedArray = __webpack_require__(2097);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneByTag.js






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer/* default */.A)(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return _cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return (0,_cloneTypedArray/* default */.A)(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return _cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return _cloneSymbol(object);
  }
}

/* harmony default export */ var _initCloneByTag = (initCloneByTag);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneObject.js + 1 modules
var _initCloneObject = __webpack_require__(2111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(1689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js + 1 modules
var isBuffer = __webpack_require__(3032);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(5074);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsMap.js



/** `Object#toString` result references. */
var _baseIsMap_mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,isObjectLike/* default */.A)(value) && (0,_getTag/* default */.A)(value) == _baseIsMap_mapTag;
}

/* harmony default export */ var _baseIsMap = (baseIsMap);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__(4573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__(3985);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isMap.js




/* Node.js helper references. */
var nodeIsMap = _nodeUtil/* default */.A && _nodeUtil/* default */.A.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary/* default */.A)(nodeIsMap) : _baseIsMap;

/* harmony default export */ var lodash_es_isMap = (isMap);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(997);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsSet.js



/** `Object#toString` result references. */
var _baseIsSet_setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,isObjectLike/* default */.A)(value) && (0,_getTag/* default */.A)(value) == _baseIsSet_setTag;
}

/* harmony default export */ var _baseIsSet = (baseIsSet);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSet.js




/* Node.js helper references. */
var nodeIsSet = _nodeUtil/* default */.A && _nodeUtil/* default */.A.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary/* default */.A)(nodeIsSet) : _baseIsSet;

/* harmony default export */ var lodash_es_isSet = (isSet);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseClone.js























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    _baseClone_boolTag = '[object Boolean]',
    _baseClone_dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    _baseClone_mapTag = '[object Map]',
    _baseClone_numberTag = '[object Number]',
    objectTag = '[object Object]',
    _baseClone_regexpTag = '[object RegExp]',
    _baseClone_setTag = '[object Set]',
    _baseClone_stringTag = '[object String]',
    _baseClone_symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var _baseClone_arrayBufferTag = '[object ArrayBuffer]',
    _baseClone_dataViewTag = '[object DataView]',
    _baseClone_float32Tag = '[object Float32Array]',
    _baseClone_float64Tag = '[object Float64Array]',
    _baseClone_int8Tag = '[object Int8Array]',
    _baseClone_int16Tag = '[object Int16Array]',
    _baseClone_int32Tag = '[object Int32Array]',
    _baseClone_uint8Tag = '[object Uint8Array]',
    _baseClone_uint8ClampedTag = '[object Uint8ClampedArray]',
    _baseClone_uint16Tag = '[object Uint16Array]',
    _baseClone_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[_baseClone_arrayBufferTag] = cloneableTags[_baseClone_dataViewTag] =
cloneableTags[_baseClone_boolTag] = cloneableTags[_baseClone_dateTag] =
cloneableTags[_baseClone_float32Tag] = cloneableTags[_baseClone_float64Tag] =
cloneableTags[_baseClone_int8Tag] = cloneableTags[_baseClone_int16Tag] =
cloneableTags[_baseClone_int32Tag] = cloneableTags[_baseClone_mapTag] =
cloneableTags[_baseClone_numberTag] = cloneableTags[objectTag] =
cloneableTags[_baseClone_regexpTag] = cloneableTags[_baseClone_setTag] =
cloneableTags[_baseClone_stringTag] = cloneableTags[_baseClone_symbolTag] =
cloneableTags[_baseClone_uint8Tag] = cloneableTags[_baseClone_uint8ClampedTag] =
cloneableTags[_baseClone_uint16Tag] = cloneableTags[_baseClone_uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,isObject/* default */.A)(value)) {
    return value;
  }
  var isArr = (0,isArray/* default */.A)(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return (0,_copyArray/* default */.A)(value, result);
    }
  } else {
    var tag = (0,_getTag/* default */.A)(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0,isBuffer/* default */.A)(value)) {
      return (0,_cloneBuffer/* default */.A)(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : (0,_initCloneObject/* default */.A)(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack/* default */.A);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (lodash_es_isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (lodash_es_isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys/* default */.A)
    : (isFlat ? keysIn/* default */.A : keys/* default */.A);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue/* default */.A)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ var _baseClone = (baseClone);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js


/** Used to compose bitmasks for cloning. */
var cloneDeep_CLONE_DEEP_FLAG = 1,
    cloneDeep_CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, cloneDeep_CLONE_DEEP_FLAG | cloneDeep_CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ var lodash_es_cloneDeep = (cloneDeep);


/***/ }),

/***/ 3401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8506);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3939);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4078);





/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'ShopItem',
  props: {
    name: {
      type: String,
      required: true
    },
    openAt: {
      type: String,
      required: true
    },
    closeAt: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    address: {
      type: String,
      required: true
    },
    longitude: {
      type: [Number, String]
    },
    latitude: {
      type: [Number, String]
    },
    distance: {
      type: [Number, String]
    },
    tell: {
      type: String
    }
  },
  setup: function setup(props) {
    var distance = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var dis = props.distance;
      return typeof dis === 'number' ? dis < 1 ? "".concat(Math.round(dis * 1000), "m") : "".concat(Math.round(dis * 100) / 100, "km") : dis;
    });
    var onLocationClick = function onLocationClick() {
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_4__/* .useOpenLocation */ .DY)({
        name: props.name,
        address: props.address,
        longitude: props.longitude,
        latitude: props.latitude
      });
    };
    var onTellClick = function onTellClick() {
      if (!props.tell) {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_4__/* .useToast */ .dj)('无门店联系电话');
        return void 0;
      }
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__/* .makePhoneCall */ .V)({
        phoneNumber: props.tell
      });
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__avatar"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
        "name": "shop"
      }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__base"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__name max-2-line"
      }, [props.name]), props.openAt && props.closeAt ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__time"
      }, [props.openAt, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)(" \uFF5E "), props.closeAt]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__time"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8425\u4E1A\u65F6\u95F4\u672A\u5B9A")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__actions"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__action",
        "onClick": (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .withModifiers */ .D$)(onLocationClick, ['stop'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
        "name": "navigate-fill"
      }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5BFC\u822A")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__action",
        "onClick": (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .withModifiers */ .D$)(onTellClick, ['stop'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
        "name": "tell-fill"
      }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8054\u7CFB")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__address"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
        "name": "location"
      }, null), parseFloat(distance.value) > 0 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */ .FK, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_shop-item__distance"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8DDD\u79BB "), distance.value]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("span", {
        "style": "opacity:0.4;"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA0\u4E28\xA0")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "max-1-line"
      }, [props.address])])]);
    };
  }
}));

/***/ }),

/***/ 3674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sj: function() { return /* binding */ DiscountCouponScene; }
/* harmony export */ });
/* unused harmony exports DiscountCouponStatus, DISCOUNT_COUPON_STATUS_OPTIONS, DISCOUNT_COUPON_SCENE_OPTIONS */
/* harmony import */ var _anteng_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3250);

var DiscountCouponStatus = /*#__PURE__*/function (DiscountCouponStatus) {
  /** 待使用 */
  DiscountCouponStatus[DiscountCouponStatus["useable"] = 0] = "useable";
  /** 使用中 */
  DiscountCouponStatus[DiscountCouponStatus["using"] = 1] = "using";
  /** 已吊销 */
  DiscountCouponStatus[DiscountCouponStatus["revoked"] = 2] = "revoked";
  /** 已过期 */
  DiscountCouponStatus[DiscountCouponStatus["expired"] = 3] = "expired";
  /** 已使用 */
  DiscountCouponStatus[DiscountCouponStatus["used"] = 4] = "used";
  return DiscountCouponStatus;
}({});
var DISCOUNT_COUPON_STATUS_OPTIONS = [{
  label: '待使用',
  value: DiscountCouponStatus.useable,
  color: _anteng_config__WEBPACK_IMPORTED_MODULE_0__/* .COLOR_PROCESSING */ .ix
}, {
  label: '使用中',
  value: DiscountCouponStatus.using,
  color: _anteng_config__WEBPACK_IMPORTED_MODULE_0__/* .COLOR_WARNING */ .lZ
}, {
  label: '已吊销',
  value: DiscountCouponStatus.revoked,
  color: _anteng_config__WEBPACK_IMPORTED_MODULE_0__/* .COLOR_ERROR */ .lC
}, {
  label: '已过期',
  value: DiscountCouponStatus.expired,
  color: _anteng_config__WEBPACK_IMPORTED_MODULE_0__/* .COLOR_DISABLED */ .vh
}, {
  label: '已使用',
  value: DiscountCouponStatus.used,
  color: _anteng_config__WEBPACK_IMPORTED_MODULE_0__/* .COLOR_SUCCESS */ .w$
}];
var DiscountCouponScene = /*#__PURE__*/function (DiscountCouponScene) {
  DiscountCouponScene[DiscountCouponScene["goodsDetail"] = 0] = "goodsDetail";
  DiscountCouponScene[DiscountCouponScene["goodsGroup"] = 1] = "goodsGroup";
  DiscountCouponScene[DiscountCouponScene["couponTemplate"] = 2] = "couponTemplate";
  DiscountCouponScene[DiscountCouponScene["customPage"] = 3] = "customPage";
  DiscountCouponScene[DiscountCouponScene["activity"] = 4] = "activity";
  return DiscountCouponScene;
}({});
var DISCOUNT_COUPON_SCENE_OPTIONS = [{
  label: '商品详情',
  value: DiscountCouponScene.goodsDetail
}, {
  label: '商品分组',
  value: DiscountCouponScene.goodsGroup
}, {
  label: '卡券模板页',
  value: DiscountCouponScene.couponTemplate
}, {
  label: '自定义页面',
  value: DiscountCouponScene.customPage
}, {
  label: '优惠券投放活动',
  value: DiscountCouponScene.activity
}];

/***/ }),

/***/ 4121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ tab_pages_category; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ../../packages/core/src/components/empty-status/index.tsx
var empty_status = __webpack_require__(243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ./src/components/goods-item/index.tsx
var goods_item = __webpack_require__(9788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/custom-component.js
var custom_component = __webpack_require__(8274);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/wxml/index.js + 4 modules
var wxml = __webpack_require__(1346);
// EXTERNAL MODULE: ./src/router/routes.ts
var routes = __webpack_require__(368);
// EXTERNAL MODULE: ./src/api/goods/category.ts
var category = __webpack_require__(4408);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/hooks/useAction/index.ts + 2 modules
var useAction = __webpack_require__(1173);
;// ./src/packageMain/tab-pages/category/utils.ts

/**
 * 查找指定 ID 的类目，并返回类目、层级和路径
 * @param categories - 类目数组
 * @param id - 要查找的类目 ID
 * @param level - 当前层级，默认为 1
 * @param path - 当前路径，默认为 []
 * @returns 返回包含类目对象、层级和路径的对象，找不到时返回 undefined
 */
function findCategoryById(categories, id) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  for (var index = 0; index < categories.length; index++) {
    var category = categories[index];
    var currentPath = [].concat((0,toConsumableArray/* default */.A)(path), [index]);
    if (category.id === id) {
      return {
        category: category,
        level: level,
        path: currentPath
      }; // 找到目标，返回类目、层级和路径
    }
    var foundInChild = findCategoryById(category.childCategories || [], id, level + 1, currentPath);
    if (foundInChild) {
      return foundInChild; // 在子类目中找到目标，返回类目、层级和路径
    }
  }
  return undefined; // 在所有类目中都未找到目标
}
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findLastIndex.js
var findLastIndex = __webpack_require__(6461);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIteratee.js + 17 modules
var _baseIteratee = __webpack_require__(3662);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_SetCache.js + 2 modules
var _SetCache = __webpack_require__(8980);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFindIndex.js
var _baseFindIndex = __webpack_require__(1763);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNaN.js
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ var _baseIsNaN = (baseIsNaN);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_strictIndexOf.js
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ var _strictIndexOf = (strictIndexOf);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIndexOf.js




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : (0,_baseFindIndex/* default */.A)(array, _baseIsNaN, fromIndex);
}

/* harmony default export */ var _baseIndexOf = (baseIndexOf);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludes.js


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

/* harmony default export */ var _arrayIncludes = (arrayIncludes);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludesWith.js
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ var _arrayIncludesWith = (arrayIncludesWith);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cacheHas.js
var _cacheHas = __webpack_require__(8011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js
var _Set = __webpack_require__(4169);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/* harmony default export */ var lodash_es_noop = (noop);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToArray.js
var _setToArray = __webpack_require__(9471);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createSet.js




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set/* default */.A && (1 / (0,_setToArray/* default */.A)(new _Set/* default */.A([,-0]))[1]) == INFINITY) ? lodash_es_noop : function(values) {
  return new _Set/* default */.A(values);
};

/* harmony default export */ var _createSet = (createSet);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUniq.js







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return (0,_setToArray/* default */.A)(set);
    }
    isCommon = false;
    includes = _cacheHas/* default */.A;
    seen = new _SetCache/* default */.A;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ var _baseUniq = (baseUniq);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js



/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? _baseUniq(array, (0,_baseIteratee/* default */.A)(iteratee, 2)) : [];
}

/* harmony default export */ var lodash_es_uniqBy = (uniqBy);

// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.13.1/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(9180);
;// ./src/packageMain/tab-pages/category/index.tsx























function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var tab_pages_category = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'IndexCategoryPage',
  props: {
    isPage: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    console.log('%c 页面加载：category', 'color:#27ae60');
    var route = taro/* default.useRouter */.Ay.useRouter();

    /** 页面进入时指定的分类id */
    var initialCate = route.params.id || '';
    var childrenId = route.params.childrenId || '';

    /** 是否作为单独页面（在 /packageIndex/index 内则作为组件），会有某些区别进行特殊处理 */
    var isPage = props.isPage || (0,lib/* isThePage */.FH)(route.path, routes/* ROUTE_CATEGORY */.DC);
    var globalStore = (0,stores/* useGlobalStore */.on)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(globalStore),
      currentTab = _storeToRefs.currentTab;

    // TODO 优化 activated 回调
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return currentTab.value;
    }, function (key) {
      if (key === 'category') {
        categoryStore.loadCategoryData();
      }
    });
    var appStore = (0,lib/* useAppStore */.CU)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(appStore),
      commonNavigatorHeight = _storeToRefs2.commonNavigatorHeight;
    var categoryStore = (0,stores/* useCategoryStore */.n$)();
    var _storeToRefs3 = (0,pinia/* storeToRefs */.bP)(categoryStore),
      categoryData = _storeToRefs3.categoryData,
      isLoading = _storeToRefs3.isLoading;
    categoryStore.loadCategoryData();
    var currentCateIndex1 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var currentCateIndex2 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    // 如果要新增一个「全部」按钮，初始值可以设置成 -1，获取 cate2 下的全部数据
    var currentCateIndex3 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var tempCateIndex3 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var hasAutoFocused = false;
    var autoFocus = function autoFocus() {
      var _categoryData$value$f, _categoryData$value;
      if (hasAutoFocused || !categoryData.value) return void 0;

      // 尝试聚焦到页面参数指定的分类
      if (initialCate) {
        var target = findCategoryById(categoryData.value, initialCate);
        if (target) {
          currentCateIndex1.value = target.path[0] || 0;
          currentCateIndex2.value = target.path[1] || 0;
          currentCateIndex3.value = target.path[2] || 0;
          initialCate = '';
          hasAutoFocused = true;
          if (childrenId) {
            cates2.value.find(function (it, index) {
              if (it.id === childrenId) {
                toggleCate2(index);
              }
            });
          }
          return void 0;
        }
      }

      // 默认聚焦到第一个有分类数据的分类
      var firstIndex = (_categoryData$value$f = (_categoryData$value = categoryData.value) === null || _categoryData$value === void 0 ? void 0 : _categoryData$value.findIndex(function (item) {
        var _item$childCategories;
        return ((_item$childCategories = item.childCategories) === null || _item$childCategories === void 0 ? void 0 : _item$childCategories.length) > 0;
      })) !== null && _categoryData$value$f !== void 0 ? _categoryData$value$f : 0;
      if (firstIndex > -1) {
        currentCateIndex1.value = firstIndex;
        hasAutoFocused = true;
      }
    };
    var cates1 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _categoryData$value2;
      return (_categoryData$value2 = categoryData.value) !== null && _categoryData$value2 !== void 0 ? _categoryData$value2 : [];
    });
    var currentCate1 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return cates1.value[currentCateIndex1.value];
    });
    var cates2 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate1$value$c, _currentCate1$value;
      return (_currentCate1$value$c = (_currentCate1$value = currentCate1.value) === null || _currentCate1$value === void 0 ? void 0 : _currentCate1$value.childCategories) !== null && _currentCate1$value$c !== void 0 ? _currentCate1$value$c : [];
    });
    var currentCate2 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate1$value2;
      return (_currentCate1$value2 = currentCate1.value) === null || _currentCate1$value2 === void 0 || (_currentCate1$value2 = _currentCate1$value2.childCategories) === null || _currentCate1$value2 === void 0 ? void 0 : _currentCate1$value2[currentCateIndex2.value];
    });
    var cates3 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate2$value$c, _currentCate2$value;
      return (_currentCate2$value$c = (_currentCate2$value = currentCate2.value) === null || _currentCate2$value === void 0 ? void 0 : _currentCate2$value.childCategories) !== null && _currentCate2$value$c !== void 0 ? _currentCate2$value$c : [];
    });
    var currentCate3 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate2$value2;
      return (_currentCate2$value2 = currentCate2.value) === null || _currentCate2$value2 === void 0 || (_currentCate2$value2 = _currentCate2$value2.childCategories) === null || _currentCate2$value2 === void 0 ? void 0 : _currentCate2$value2[currentCateIndex3.value];
    });
    var toggleCate1 = function toggleCate1(index) {
      cancel();
      currentCateIndex1.value = index;
      currentCateIndex2.value = 0;
      currentCateIndex3.value = 0;
      tempCateIndex3.value = 0;
      closePopup();
      allData.value = [];
      allGoodsIds.splice(0);
      scrollTop.value = 0;
      tempScrollTop = 0;
      isExclusive.value = false;
      handleRefreshData();
    };
    var toggleCate2 = function toggleCate2(index) {
      cancel();
      var target = cates2.value[index];
      // 二级分类支持点击动作
      if (target.type === constants/* GOODS_CATEGORY_TYPE_ACTION */.oy) {
        (0,useAction/* default */.A)((0,lib/* safeParse */.xL)(target.url));
        return void 0;
      }
      currentCateIndex2.value = index;
      currentCateIndex3.value = 0;
      tempCateIndex3.value = 0;
      allData.value = [];
      allGoodsIds.splice(0);
      scrollTop.value = 0;
      tempScrollTop = 0;
      isExclusive.value = false;
      if (!currentCate3.value) {
        isExclusive.value = true;
      }
      handleRefreshData();
    };
    var toggleCate3 = function toggleCate3(index) {
      currentCateIndex3.value = index;
      if (!allData.value[currentCateIndex3.value]) {
        isExclusive.value = true;
        handleRefreshData();
      } else {
        isExclusive.value = false;
        ignoreScrollAnchor.value = true;
        setTimeout(function () {
          ignoreScrollAnchor.value = false;
        }, 600);
        scrollViewQuery.exec(function (res) {
          anchorQuery.exec(function (anchorRes) {
            scrollTop.value = tempScrollTop;
            (0,custom_component/* nextTick */.d)(function () {
              scrollTop.value = anchorRes[0][currentCateIndex3.value].top + res[1].scrollTop - res[0].top - anchorRes[1].height;
            });
          });
        });
      }
    };
    var isFold = (0,reactivity_esm_bundler/* ref */.KR)(true);
    var closePopup = function closePopup() {};
    var onExpand = function onExpand() {
      if (!isFold.value) {
        isFold.value = true;
        closePopup();
        return void 0;
      }
      isFold.value = false;
      var _usePopup = (0,lib/* usePopup */.OJ)({
          zIndex: 78,
          content: function content() {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "cates-layer",
              "style": {
                paddingTop: commonNavigatorHeight.value + 'px'
              }
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "category-page__cate-list"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "category-page__cate-content"
            }, [cates1.value.map(function (item, index) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": ['cate-item', index === currentCateIndex1.value && 'active'],
                "onClick": function onClick() {
                  toggleCate1(index);
                }
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "cate-item__image ellipse"
              }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                "class": "image ellipse",
                "mode": "aspectFill",
                "src": item.icon
              }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "cate-item__name"
              }, [item.name])]);
            })])])]);
          },
          placement: 'top',
          onClose: function onClose() {
            return isFold.value = true;
          }
        }),
        close = _usePopup.close;
      closePopup = close;
    };
    var scrollViewId = "scroll-view-".concat((0,utils/* uuid */.uR)());
    var scrollTop = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var tempScrollTop = 0;
    var scrollViewQuery = (0,wxml/* createSelectorQuery */._Y)();
    scrollViewQuery.select(".".concat(scrollViewId)).boundingClientRect();
    scrollViewQuery.select(".".concat(scrollViewId)).scrollOffset();
    var ignoreScrollAnchor = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var anchorQuery = (0,wxml/* createSelectorQuery */._Y)();
    anchorQuery.selectAll('.category-page__cate-anchor').boundingClientRect();
    anchorQuery.select('.category-page__content-header').boundingClientRect();
    var onScroll = function onScroll(e) {
      tempScrollTop = e.detail.scrollTop;
      if (ignoreScrollAnchor.value) return void 0;
      if (isExclusive.value) return void 0;
      scrollViewQuery.exec(function (res) {
        anchorQuery.exec(function (anchorRes) {
          var index = (0,findLastIndex/* default */.A)(anchorRes[0], function (item) {
            return item.top - anchorRes[1].height - res[0].top <= 10;
          });
          index = index > 0 ? index : 0;
          currentCateIndex3.value = index;
        });
      });
    };
    var customEmpty = function customEmpty() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
        "title": "\u7A7A\u7A7A\u5982\u4E5F",
        "description": "\u8BE5\u5206\u7C7B\u6682\u65E0\u5546\u54C1"
      }, null);
    };
    var customErrorStatus = function customErrorStatus(Actions) {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
        "size": "small",
        "description": "\u5546\u54C1\u52A0\u8F7D\u5931\u8D25",
        "actions": Actions
      }, null);
    };
    var cancel = function cancel() {};
    var _usePagination = (0,lib/* usePagination */.WQ)({
        requestHandler: function requestHandler(params) {
          var _cates3$value$tempCat;
          var source = axios/* default */.A.CancelToken.source();
          cancel = function cancel() {
            source.cancel();
            resetPaginationData();
          };
          return (0,category/* requestGetGoodsCategoryGoods */.E)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, params), {}, {
            id: (_cates3$value$tempCat = cates3.value[tempCateIndex3.value]) === null || _cates3$value$tempCat === void 0 ? void 0 : _cates3$value$tempCat.id
          }), source.token);
        },
        onRequestResolve: function onRequestResolve() {
          var _allData$value$tempCa;
          allData.value[tempCateIndex3.value] = allData.value[tempCateIndex3.value] || [];
          // TODO 折叠过滤掉重复数据
          var newData = data.value;
          // .filter(item => !allGoodsIds.find(id => item.id === id))
          allGoodsIds.push.apply(allGoodsIds, (0,toConsumableArray/* default */.A)(newData.map(function (item) {
            return item.id;
          })));
          (_allData$value$tempCa = allData.value[tempCateIndex3.value]).push.apply(_allData$value$tempCa, (0,toConsumableArray/* default */.A)(newData));
          if (isEnd.value) {
            var nextCate = cates3.value[tempCateIndex3.value + 1];
            if (nextCate) {
              // console.log('加载结束了，准备加载下一分类：', nextCate.name)
              tempCateIndex3.value++;
              // 清除分页信息 => { current: 1, records: [], ... }, isEnd: false, hasError: false
              resetPaginationData();
            }
          }
          (0,custom_component/* nextTick */.d)(function () {
            scrollViewQuery.exec(function (res) {
              // 如果可继续滑动距离小于一屏，继续加载
              var screenHeight = appStore.systemInfo.screenHeight;
              var isAtBottom = res[1].scrollTop + screenHeight >= res[1].scrollHeight - screenHeight / 2;
              if (isAtBottom) {
                // console.log('继续加载下一页')
                fetchData();
              }
            });
          });
        }
      }),
      data = _usePagination.data,
      fetchData = _usePagination.fetchData,
      refreshData = _usePagination.refreshData,
      Empty = _usePagination.Empty,
      EndTip = _usePagination.EndTip,
      refresherTriggered = _usePagination.refresherTriggered,
      Loading = _usePagination.Loading,
      ErrorStatus = _usePagination.ErrorStatus,
      isEnd = _usePagination.isEnd,
      resetPaginationData = _usePagination.resetPaginationData;
    var _usePagination2 = (0,lib/* usePagination */.WQ)({
        requestHandler: function requestHandler(params) {
          var _currentCate3$value$i, _currentCate3$value, _currentCate2$value3;
          var id = (_currentCate3$value$i = (_currentCate3$value = currentCate3.value) === null || _currentCate3$value === void 0 ? void 0 : _currentCate3$value.id) !== null && _currentCate3$value$i !== void 0 ? _currentCate3$value$i : (_currentCate2$value3 = currentCate2.value) === null || _currentCate2$value3 === void 0 ? void 0 : _currentCate2$value3.id;
          return (0,category/* requestGetGoodsCategoryGoods */.E)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, params), {}, {
            id: id
          }));
        },
        customEmpty: customEmpty,
        customErrorStatus: customErrorStatus
      }),
      exclusiveData = _usePagination2.data,
      fetchExclusiveData = _usePagination2.fetchData,
      refreshExclusiveData = _usePagination2.refreshData,
      ExclusiveEmpty = _usePagination2.Empty,
      ExclusiveEndTip = _usePagination2.EndTip,
      exclusiveRefresherTriggered = _usePagination2.refresherTriggered,
      ExclusiveLoading = _usePagination2.Loading,
      ExclusiveErrorStatus = _usePagination2.ErrorStatus;

    /* ---------------------------------- 预备方案 ---------------------------------- */
    /**
     * 支持在一个列表里展示多个分类的数据，适用于分类数据足够多，且各分类商品重复率较低的情况
     * 全部数据, [...分类1, ...分类2, ...分类n]
     * 1. 判断第上一个分类 isEnd，若页面底部距离 < 40vh，立即触发下一个分类数据请求
     * 2. 点击分类标签时：
     *  a. 若该分类已经加载过，列表滚动到对应的位置。
     *  b. 该分类没有加载过，设置 isExclusive 为 true，列表将展示 data.value 数据
     *  c. 当分类又切换回已经加载过的分类时，设置 isExclusive 为 false， 列表展示 allData.value 数据
     *  d. 分类已加载：Array.isArray(allData.value[currentIndex3.value])
     */
    var allData = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var allGoodsIds = [];

    /** 当前分类数据独占 */
    var isExclusive = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var renderData = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return isExclusive.value ? [data.value] : allData.value;
    });

    /* ----------------------------------- End ---------------------------------- */

    var handleFetchData = function handleFetchData() {
      isExclusive.value ? fetchExclusiveData() : fetchData();
    };
    var handleRefreshData = function handleRefreshData() {
      var isRefresherPulling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (currentCate2.value && (!currentCate3.value || cates3.value.length <= 1)) {
        isExclusive.value = true;
      }
      if (isExclusive.value) {
        return refreshExclusiveData({
          clearDataImmediate: true,
          isRefresherPulling: isRefresherPulling
        });
      }
      allData.value = [];
      currentCateIndex3.value = 0;
      tempCateIndex3.value = 0;
      resetPaginationData();
      refreshData({
        clearDataImmediate: true,
        isRefresherPulling: isRefresherPulling
      });
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return categoryData.value;
    }, function () {
      autoFocus();
      handleRefreshData(true);
    }, {
      immediate: true
    });
    var Cate2 = function Cate2() {
      var _slot;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "side-menu"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTab */.RH, {
        "current": currentCateIndex2.value,
        "vertical": true
      }, _isSlot(_slot = cates2.value.map(function (item, index) {
        var active = index === currentCateIndex2.value;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTabItem */.AN, {
          "key": item.id
        }, {
          default: function _default() {
            return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['side-menu-item', active && 'active'],
              "onClick": function onClick() {
                toggleCate2(index);
              }
            }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
              "key": item.id,
              "class": "side-menu-item__image",
              "mode": "heightFix",
              "src": item.icon
            }, null), item.name, active && (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "arc-before"
            }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "arc-after"
            }, null)])])];
          }
        });
      })) ? _slot : {
        default: function _default() {
          return [_slot];
        }
      })]);
    };
    var Cate3 = function Cate3() {
      return cates3.value.length > 1 ? (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTab */.RH, {
        "current": currentCateIndex3.value
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__tags"
          }, [cates3.value.map(function (item, index) {
            var active = index === currentCateIndex3.value;
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTabItem */.AN, null, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": ['category-page__tag', active && 'active'],
                  "onClick": function onClick() {
                    toggleCate3(index);
                  }
                }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                  "src": item.icon,
                  "mode": "heightFix",
                  "class": "category-page__tag-image"
                }, null), item.name])];
              }
            });
          })])];
        }
      }) : null;
    };
    var Main = function Main() {
      if (cates2.value.length === 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__main"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
          "title": "\u7A7A\u7A7A\u5982\u4E5F",
          "description": "\u8BE5\u5206\u7C7B\u6682\u65E0\u5546\u54C1"
        }, null)]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page__main"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(Cate2, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
        "class": ['category-page__content-scroller', scrollViewId],
        "scrollY": true,
        "scrollTop": scrollTop.value,
        "scrollWithAnimation": false,
        "onScroll": onScroll,
        "refresherEnabled": isExclusive.value,
        "onRefresherrefresh": function onRefresherrefresh() {
          return handleRefreshData(true);
        },
        "onScrolltolower": handleFetchData,
        "refresherTriggered": isExclusive.value ? exclusiveRefresherTriggered.value : refresherTriggered.value
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__content-header"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(Cate3, null, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)(GoodsList, null, null)])];
        }
      })]);
    };
    var GoodsItemMapper = function GoodsItemMapper(item, index, arr) {
      var _item$coverImages;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
        "type": "horizontal",
        "name": item.title,
        "nameMaxRows": 2,
        "image": (_item$coverImages = item.coverImages) === null || _item$coverImages === void 0 ? void 0 : _item$coverImages[0],
        "price": item.priceMin,
        "priceMax": item.priceMax,
        "listPrice": item.underlinePrice,
        "onClick": function onClick() {
          (0,router/* navigateToGoodsDetail */.C7)(item.id);
        }
      }, null), index < arr.length - 1 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page__content-split"
      }, null)]);
    };
    var GoodsList = function GoodsList() {
      if (isExclusive.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__goods"
        }, [lodash_es_uniqBy(exclusiveData.value, 'id').map(GoodsItemMapper), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveErrorStatus, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveLoading, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveEmpty, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveEndTip, null, null)]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page__goods"
      }, [renderData.value.map(function (group, index) {
        var _cates3$value$index;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__cate-anchor"
        }, [(_cates3$value$index = cates3.value[index]) === null || _cates3$value$index === void 0 ? void 0 : _cates3$value$index.name, !isLoading.value && group.length === 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__cate-empty"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE5\u5206\u7C7B\u6682\u65E0\u5546\u54C1")])]), lodash_es_uniqBy(group, 'id').map(GoodsItemMapper)]);
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(ErrorStatus, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Loading, {
        "small": allGoodsIds.length > 0
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(EndTip, null, null)]);
    };
    var SearchBar = function SearchBar() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page-search",
        "style": {
          height: appStore.menuButtonRect.height + 2 + 'px'
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Search */.vj, {
        "placeholder": "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u5185\u5BB9",
        "onClick": function onClick() {
          (0,router/* navigateToSearch */.tr)();
        }
      }, null)]);
    };
    return function () {
      if (!categoryData.value || categoryData.value.length === 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
          "class": "category-page-wrap",
          "tabsPlaceholder": true,
          "navigator": {
            navigatorStyle: isPage ? undefined : 'blank',
            title: (0,runtime_core_esm_bundler/* createVNode */.bF)(SearchBar, null, null),
            hiddenH5Menu: true
          }
        }, {
          default: function _default() {
            return [isLoading.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
              "image": (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null),
              "description": ""
            }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
              "title": "\u65E0\u5206\u7C7B"
            }, null)];
          }
        });
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "class": "category-page-wrap",
        "navigator": {
          navigatorStyle: isPage ? undefined : 'blank',
          title: (0,runtime_core_esm_bundler/* createVNode */.bF)(SearchBar, null, null),
          hiddenH5Menu: true,
          navigationBarTextStyle: 'black'
        },
        "tabsPlaceholder": !isPage
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['category-page__header', !isFold.value && 'expand']
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__cate-list"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTab */.RH, {
            "current": currentCateIndex1.value,
            "ratio": 0.3
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "category-page__cate-content"
              }, [cates1.value.map(function (item, index) {
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTabItem */.AN, null, {
                  default: function _default() {
                    return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                      "class": ['cate-item', index === currentCateIndex1.value && 'active'],
                      "onClick": function onClick() {
                        toggleCate1(index);
                      }
                    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                      "class": "cate-item__image ellipse"
                    }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                      "class": "image ellipse",
                      "src": item.icon
                    }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                      "class": "cate-item__name"
                    }, [item.name])])];
                  }
                });
              })])];
            }
          })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "all-cates"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5168\u90E8\u5206\u7C7B")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__folder",
            "onClick": onExpand
          }, [isFold.value ? '展开' : '收起', (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "right"
          }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(Main, null, null)])];
        }
      });
    };
  }
}));

/***/ }),

/***/ 4552:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ profile; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ./src/stores/global.ts + 2 modules
var global = __webpack_require__(63);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-dom@3.5.22/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8506);
// EXTERNAL MODULE: ./src/api/order/index.ts
var order = __webpack_require__(1004);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
;// ./src/packageMain/tab-pages/profile/order/index.tsx






/* harmony default export */ var profile_order = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ProfilePageOrder',
  setup: function setup() {
    var toOrderList = function toOrderList() {
      (0,lib/* navigateTo */.VJ)({
        url: '/packageA/order/list/index'
      });
    };
    var tabs = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return [{
        title: '待付款',
        value: 1,
        icon: 'order-pay',
        count: counts.pendingPayment
      }, {
        title: '待发货',
        value: 2,
        icon: 'order-send',
        count: counts.pendingShipment
      }, {
        title: '待收货',
        value: 3,
        icon: 'order-deliver',
        count: counts.pendingComplete
      }, {
        title: '退款／售后',
        value: 4,
        icon: 'order-refund',
        count: counts.refundAfterSale
      }];
    });
    var onItemClick = function onItemClick(item) {
      (0,router/* navigateToOrderList */.lG)(item.value);
    };
    var counts = (0,reactivity_esm_bundler/* reactive */.Kh)({
      all: 0,
      pendingComplete: 0,
      pendingPayment: 0,
      pendingShipment: 0,
      refundAfterSale: 0
    });
    var getOrderCounts = function getOrderCounts() {
      (0,order/* requestGetOrderCounts */.Eu)().then(function (res) {
        if (res.code === 200) {
          Object.assign(counts, res.data);
        }
      });
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      getOrderCounts();
    });
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "profile-order",
        "onClick": toOrderList
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "profile-order__header"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "profile-order__title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6211\u7684\u8BA2\u5355")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "profile-order__all"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5168\u90E8\u8BA2\u5355"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "profile-order__content"
      }, [tabs.value.map(function (item, index) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "profile-order__item",
          "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(function () {
            onItemClick(item);
          }, ['stop'])
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
          "class": "profile-order__icon",
          "name": item.icon
        }, null), item.count > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": ['profile-order__badge', index === 0 && 'flicker']
        }, [item.count]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "profile-order__name"
        }, [item.title])]);
      })])]);
    };
  }
}));
// EXTERNAL MODULE: ./src/api/index.ts + 4 modules
var api = __webpack_require__(5816);
// EXTERNAL MODULE: ./src/utils/index.tsx + 3 modules
var utils = __webpack_require__(2753);
// EXTERNAL MODULE: ./src/api/coupon/index.ts
var coupon = __webpack_require__(590);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/api/discount-coupon/index.ts
var discount_coupon = __webpack_require__(7591);
;// ./src/stores/discount-coupon.ts



var useDiscountCouponStore = (0,pinia/* defineStore */.nY)('discount-coupon', function () {
  var discountCouponCounts = (0,reactivity_esm_bundler/* ref */.KR)({
    all: null,
    useable: null,
    expired: null
  });
  var getCounts = function getCounts() {
    (0,discount_coupon/* $getMyDiscountCouponCounts */.K7)().then(function (res) {
      var _res$data$couponNumbe, _res$data, _res$data$couponNumbe2, _res$data2, _res$data$couponNumbe3, _res$data3;
      discountCouponCounts.value = {
        all: (_res$data$couponNumbe = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.couponNumber) !== null && _res$data$couponNumbe !== void 0 ? _res$data$couponNumbe : null,
        useable: (_res$data$couponNumbe2 = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.couponNumberUnused) !== null && _res$data$couponNumbe2 !== void 0 ? _res$data$couponNumbe2 : null,
        expired: (_res$data$couponNumbe3 = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.couponNumberUsed) !== null && _res$data$couponNumbe3 !== void 0 ? _res$data$couponNumbe3 : null
      };
    });
  };
  return {
    getDiscountCouponCounts: getCounts,
    discountCouponCounts: discountCouponCounts
  };
});
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
// EXTERNAL MODULE: ./src/api/request.ts
var request = __webpack_require__(2422);
;// ./src/packageMain/tab-pages/profile/index.tsx

















function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var profile = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'IndexProfilePage',
  setup: function setup() {
    var _route$path;
    console.log('%c 页面加载：profile', 'color:#27ae60');
    var route = taro/* default.useRouter */.Ay.useRouter();

    /** 是否作为单独页面（在 /packageIndex/index 内则作为组件），会有某些区别进行特殊处理 */
    var isPage = (_route$path = route.path) === null || _route$path === void 0 ? void 0 : _route$path.startsWith('/packageIndex/profile');
    var appStore = (0,lib/* useAppStore */.CU)();
    var appGlobalStore = (0,global/* default */.A)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(appStore),
      commonNavigatorStyle = _storeToRefs.commonNavigatorStyle;
    var userStore = (0,lib/* useUserStore */.kH)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(userStore),
      user = _storeToRefs2.user,
      isLogin = _storeToRefs2.isLogin,
      nickname = _storeToRefs2.nickname,
      phone = _storeToRefs2.phone;
    console.log('user.value:');
    console.log(user.value);
    var logout = function logout() {
      return userStore.logout();
    };
    var balanceObj = (0,reactivity_esm_bundler/* ref */.KR)({
      balance: 0,
      createTime: '2024-08-14 16:06:44',
      id: '1823632332083249154',
      scene: 'microstore',
      status: 1,
      userId: '1814115170881236994'
    });
    var couponList = (0,reactivity_esm_bundler/* ref */.KR)({
      total: 0
    });
    var init = function init() {
      var _userStore$user;
      // 获取钱包余额
      (0,api/* getUserBalance */.op)().then(function (res) {
        if (res.success) {
          balanceObj.value = res.data;
        }
      }).catch(function (e) {
        return (0,lib/* useToast */.dj)(e.response.data.msg + '' || '加载出错了');
      });

      // 获取卡券列表信息
      (0,coupon/* getCouponList */.BK)({
        phone: (_userStore$user = userStore.user) === null || _userStore$user === void 0 ? void 0 : _userStore$user.phone,
        status: "".concat(constants/* COUPON_STATUS_PENDING_USE */.iV)
      }).then(function (res) {
        if (res.success) {
          couponList.value = res.data;
        }
      }).catch(function (e) {
        return (0,lib/* useToast */.dj)(e.response.data.msg + '' || '加载出错了');
      });
    };
    var _storeToRefs3 = (0,pinia/* storeToRefs */.bP)(appGlobalStore),
      currentTab = _storeToRefs3.currentTab;
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return currentTab.value;
    }, function (newV) {
      if (newV === 'profile') {
        isLogin.value && init();
      }
    });
    var discountCouponStore = useDiscountCouponStore();
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      isLogin.value && init();
      discountCouponStore.getDiscountCouponCounts();
    });
    var posterVisible = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return true;
    });
    return function () {
      var _balanceObj$value, _balanceObj$value2, _balanceObj$value3;
      var ProfilePage = (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['profile-page', isPage && 'as-page']
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "style": commonNavigatorStyle.value
      }, null), isLogin.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-info",
        "onClick": function onClick() {
          console.log('user.value:');
          console.log(user.value);
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("img", {
        "class": "user-avatar",
        "src": request/* REQUEST_DOMAIN */.F7 + user.value.avatar || config/* DEFAULT_AVATAR */.k_,
        "alt": ""
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-info-text"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-nickname"
      }, [nickname.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-mobile"
      }, [phone.value])])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-info",
        "onClick": function onClick() {
          return (0,lib/* useLogin */.vz)();
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("img", {
        "class": "user-avatar",
        "src": config/* DEFAULT_AVATAR */.k_,
        "alt": ""
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-info-text"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-nickname"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u767B\u5F55")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user-mobile"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u83B7\u53D6\u66F4\u591A\u4F18\u8D28\u670D\u52A1")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(profile_order, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tool-menu"
      }, [isLogin.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tool-menu-item",
        "onClick": router/* navigateToWallet */._j
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "wallet"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u94B1\u5305"), (((_balanceObj$value = balanceObj.value) === null || _balanceObj$value === void 0 ? void 0 : _balanceObj$value.balance) || ((_balanceObj$value2 = balanceObj.value) === null || _balanceObj$value2 === void 0 ? void 0 : _balanceObj$value2.balance) === 0) && (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF08"), (0,utils/* convertFenToYuanAndFen */.BD)((_balanceObj$value3 = balanceObj.value) === null || _balanceObj$value3 === void 0 ? void 0 : _balanceObj$value3.balance).amount, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5143\uFF09")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]), isLogin.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tool-menu-item",
        "onClick": router/* navigateToCoupon */.Hx
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "cards-offers"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6211\u7684\u5361\u5238"), couponList.value.total ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF08"), couponList.value.total, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF09")]) : '']), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]), posterVisible.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tool-menu-item",
        "onClick": (0,lib/* withLogin */.E6)(router/* navigateToPosterMakingList */.VL)
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "xintupian_new-picture"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6D77\u62A5\u5236\u4F5C")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tool-menu-item",
        "onClick": router/* navigateToSettings */.Ox
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "settings"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u66F4\u591A\u8BBE\u7F6E")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]), isLogin.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tool-menu-item",
        "onClick": logout
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "logout"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9000\u51FA\u767B\u5F55")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tool-menu-item",
        "onClick": function onClick() {
          return (0,lib/* useLogin */.vz)();
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "login"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u767B\u5F55")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])])]);
      if (isPage) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
          "navigator": {
            navigatorStyle: 'immersive'
          }
        }, _isSlot(ProfilePage) ? ProfilePage : {
          default: function _default() {
            return [ProfilePage];
          }
        });
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
        "class": "profile-page-scroller",
        "scrollY": true
      }, _isSlot(ProfilePage) ? ProfilePage : {
        default: function _default() {
          return [ProfilePage];
        }
      });
    };
  }
}));

/***/ }),

/***/ 4861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: function() { return /* binding */ withInstall; }
/* harmony export */ });
var withInstall = function withInstall(comp) {
  var _comp = comp;
  _comp.install = function (vue) {
    if (_comp.name) {
      vue.component(_comp.name, _comp);
    }
  };
  return _comp;
};


/***/ }),

/***/ 5303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7970);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4243);
/* harmony import */ var _goods_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9788);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3058);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5816);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4078);


// 推荐组件






/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'Recommended',
  props: {
    // 0 空 1 猜你喜欢 2 热门商品 3 最近热销
    type: {
      type: Number,
      default: 0
    },
    categoryId: {
      type: Array,
      default: function _default() {
        return [1];
      }
    }
  },
  setup: function setup(props) {
    /** 前端分页 */
    var fePagination = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)(false);
    var _usePagination = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_6__/* .usePagination */ .WQ)({
        requestHandler: function requestHandler(params) {
          return (0,_api__WEBPACK_IMPORTED_MODULE_5__/* .requestGetGoodsListByRule */ .ZR)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, params), {}, {
            size: 10,
            showType: props.type,
            categoryIds: props.type === 1 ? props.categoryId.join(',') : undefined
          })).then(function (res) {
            var _res$data;
            if (((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.records) === null || _res$data === void 0 ? void 0 : _res$data.length) > 10) {
              fePagination.value = true;
            }
            return res;
          });
        }
      }),
      data = _usePagination.data,
      fetchData = _usePagination.fetchData,
      CommonPaginationStatus = _usePagination.CommonPaginationStatus;
    var page = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)(1);
    var goods = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      if (fePagination.value) {
        return data.value.slice(0, page.value * 10);
      }
      return data.value;
    });
    function groupArray(arr, columns) {
      var result = new Array(columns).fill(null).map(function () {
        return [];
      });
      for (var i = 0; i < arr.length; i++) {
        var columnIndex = i % columns;
        result[columnIndex].push(arr[i]);
      }
      return result;
    }
    var clos = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      if (goods.value.length === 0) {
        return [];
      } else {
        return groupArray(goods.value, 2);
      }
    });
    var init = function init() {
      if (props.type === 0) {
        return void 0;
      }
      fetchData();
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .onMounted */ .sV)(function () {
      return init();
    });
    var getData = function getData() {
      if (fePagination.value) {
        page.value++;
      } else {
        fetchData();
      }
    };
    return function () {
      if (!(data.value.length > 0)) {
        return null;
      }
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommended"
      }, [props.type === 0 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", null, null), props.type === 1 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommend-title"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u2014 \u731C\u4F60\u559C\u6B22 \u2014")]), props.type === 2 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommend-title"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u2014 \u70ED\u95E8\u5546\u54C1 \u2014")]), props.type === 3 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommend-title"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u2014 \u8FD1\u671F\u70ED\u9500 \u2014")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "goods-list-content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_goods-list"
      }, [clos.value.map(function (col, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": ['c_goods-list__col', index === 0 && 'col-1']
        }, [col.map(function (item) {
          if (!item) return null;
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_goods_item__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "type": "vertical",
            "image": item.coverImages[0],
            "name": item.title,
            "price": item.priceMin,
            "priceMax": item.priceMax,
            "listPrice": item.underlinePrice,
            "onClick": function onClick() {
              return (0,_router__WEBPACK_IMPORTED_MODULE_4__/* .navigateToGoodsDetail */ .C7)(item.id);
            }
          }, null);
        })]);
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(CommonPaginationStatus, null, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_6__/* .ScrollAnchor */ .V8, {
        "onReach": getData
      }, null)]);
    };
  }
}));

/***/ }),

/***/ 5577:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v$: function() { return /* binding */ ShopList; }
/* harmony export */ });
/* unused harmony export useGoodsSuitableShops */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7970);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var _shop_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3401);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4078);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9280);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6618);










/* harmony default export */ __webpack_exports__.Ay = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'GoodsSuitableShops',
  props: {
    goodsId: {
      type: String,
      required: true
    },
    title: {
      type: [String, Function],
      default: '适用门店'
    },
    total: {
      type: [Number, Function]
    },
    totalText: {
      type: [String, Function]
    },
    shops: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  setup: function setup(props) {
    var shops = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return Array.isArray(props.shops) ? props.shops : [];
    });
    var title = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var _ref;
      return (_ref = typeof props.title === 'function' ? props.title() : props.title) !== null && _ref !== void 0 ? _ref : '适用门店';
    });
    var total = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var _ref2;
      return (_ref2 = typeof props.total === 'function' ? props.total() : props.total) !== null && _ref2 !== void 0 ? _ref2 : 0;
    });
    var isMoreThanOne = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return total.value > 1;
    });
    var totalText = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var _ref3;
      return (_ref3 = typeof props.totalText === 'function' ? props.totalText() : props.totalText) !== null && _ref3 !== void 0 ? _ref3 : isMoreThanOne.value ? "".concat(total.value, " \u5BB6\u53EF\u7528\u95E8\u5E97") : '查看全部';
    });
    var onMoreClick = function onMoreClick() {
      useGoodsSuitableShops(props.goodsId);
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "goods-suitable-shops",
        "onClick": onMoreClick
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "header"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "title"
      }, [title.value]), isMoreThanOne.value && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "more"
      }, [totalText.value, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA0"), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
        "name": "right"
      }, null)])]), shops.value.map(function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_shop_item__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, item, null);
      })]);
    };
  }
}));

/** 商品适用门店 */
var useGoodsSuitableShops = function useGoodsSuitableShops(goodsId) {
  var _useModal = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_5__/* .useModal */ .hS)({
      title: '适用门店',
      height: 'max',
      padding: 0,
      content: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(ShopList, {
        "goodsId": goodsId
      }, null)
    }),
    close = _useModal.close;
  return {
    close: close
  };
};
var ShopList = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  props: {
    goodsId: {
      type: String,
      required: true
    },
    asSelector: {
      type: Boolean,
      default: false
    },
    selectedShopId: {
      type: [String, Number]
    }
  },
  emits: {
    select: function select(shopItem) {
      return true;
    }
  },
  setup: function setup(props, _ref4) {
    var emit = _ref4.emit;
    var userStore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_5__/* .useUserStore */ .kH)();
    var _usePagination = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_5__/* .usePagination */ .WQ)({
        requestHandler: function requestHandler(params) {
          return (0,_api_shop__WEBPACK_IMPORTED_MODULE_6__/* .getGoodsSuitableShops */ .L)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, params), {}, {
            goodsId: props.goodsId
          }));
        },
        showLoading: true
      }),
      fetchData = _usePagination.fetchData,
      isEmpty = _usePagination.isEmpty,
      refreshData = _usePagination.refreshData,
      data = _usePagination.data,
      refresherTriggered = _usePagination.refresherTriggered,
      EndTip = _usePagination.EndTip;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .wB)(function () {
      return userStore.userLocation;
    }, function () {
      refreshData();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .onMounted */ .sV)(function () {
      userStore.getUserLocation({
        denyTip: true
      }).finally(function () {
        fetchData();
      });
    });
    var shops = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return data.value.map(function (item) {
        var _item$location, _item$location2, _item$contactInfo;
        return {
          id: item.id,
          name: item.name,
          address: item.address,
          longitude: (_item$location = item.location) === null || _item$location === void 0 ? void 0 : _item$location.lng,
          latitude: (_item$location2 = item.location) === null || _item$location2 === void 0 ? void 0 : _item$location2.lat,
          openAt: item.openingAt,
          closeAt: item.closingAt,
          distance: item.distance ? item.distance / 1000 : undefined,
          tell: (_item$contactInfo = item.contactInfo) === null || _item$contactInfo === void 0 || (_item$contactInfo = _item$contactInfo[0]) === null || _item$contactInfo === void 0 ? void 0 : _item$contactInfo.contactPhone
        };
      }).sort(function (a, b) {
        return a.distance - b.distance;
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .wB)(function () {
      return shops.value;
    }, function () {
      if (props.asSelector && !current.value) {
        onShopItemClick(shops.value[0]);
      }
    });
    var current = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(props.selectedShopId || '');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .wB)(function () {
      return props.selectedShopId;
    }, function () {
      current.value = props.selectedShopId || '';
    });
    var onShopItemClick = function onShopItemClick(shopItem) {
      if (props.asSelector) {
        current.value = shopItem.id;
        emit('select', shopItem);
      }
    };
    return function () {
      if (isEmpty.value) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_5__/* .EmptyStatus */ .yC, {
          "description": "\u6682\u65E0\u9002\u7528\u95E8\u5E97"
        }, null);
      }
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__/* .ScrollView */ .BM, {
        "class": "goods-suitable-shops-list",
        "scrollY": true,
        "onScrolltolower": fetchData,
        "onRefresherrefresh": function onRefresherrefresh() {
          return refreshData();
        },
        "refresherEnabled": true,
        "refresherTriggered": refresherTriggered.value
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "goods-suitable-shops-list__header"
          }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "goods-suitable-shops-list__content"
          }, [shops.value.map(function (item) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_shop_item__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .mergeProps */ .v6)({
              "class": current.value === item.id && 'active',
              "onClick": function onClick() {
                return onShopItemClick(item);
              }
            }, item), null);
          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(EndTip, null, null)];
        }
      });
    };
  }
});

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

/***/ }),

/***/ 7591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K7: function() { return /* binding */ $getMyDiscountCouponCounts; },
/* harmony export */   Ls: function() { return /* binding */ $getOrderUseableDiscountCouponList; },
/* harmony export */   j7: function() { return /* binding */ $receiveDiscountCoupon; },
/* harmony export */   nr: function() { return /* binding */ $getDiscountCouponReceiveList; }
/* harmony export */ });
/* unused harmony exports $getMyDiscountCouponList, $getDiscountCouponRecordDetail, $getDiscountCouponUseableGoods, $getDiscountCouponTemplateDetail */
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7970);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5437);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2422);


var _excluded = (/* unused pure expression or super */ null && (["useable"])),
  _excluded2 = ["recordNo", "items"];

/** 获取适用优惠券 */
var $getDiscountCouponReceiveList = function $getDiscountCouponReceiveList(params) {
  var _params$current, _params$size;
  // 本地拦截：返回空列表，避免网络请求影响页面展示
  var current = (_params$current = params.current) !== null && _params$current !== void 0 ? _params$current : 1;
  var size = (_params$size = params.size) !== null && _params$size !== void 0 ? _params$size : 100;
  var pages = 0;
  var total = 0;
  return Promise.resolve({
    code: 200,
    success: true,
    msg: 'ok',
    data: {
      countId: '',
      current: current,
      maxLimit: 0,
      optimizeCountSql: true,
      orders: [],
      pages: pages,
      records: [],
      searchCount: true,
      size: size,
      total: total
    }
  });
};

/** 领取优惠券 */
var $receiveDiscountCoupon = function $receiveDiscountCoupon(params) {
  return (0,_request__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)({
    url: '/anteng-cornerstone-goods-wap/m/goods/coupon/receive',
    method: 'get',
    params: params,
    withMerchantId: true
  });
};

/** 获取我的优惠券列表 */
var $getMyDiscountCouponList = function $getMyDiscountCouponList(params) {
  var useable = params.useable,
    restParams = _objectWithoutProperties(params, _excluded);
  return request({
    url: '/anteng-cornerstone-goods-wap/m/goods/coupon/record',
    withMerchantId: true,
    params: _objectSpread(_objectSpread({}, restParams), {}, {
      status: useable === true ? 0 : useable === false ? 1 : undefined
    })
  });
};

/** 获取我的优惠券数量 */
var $getMyDiscountCouponCounts = function $getMyDiscountCouponCounts() {
  return (0,_request__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)({
    url: '/anteng-cornerstone-goods-wap/m/goods/coupon/record/status/number',
    withMerchantId: true
  });
};

/** 获取订单可用优惠券列表 */
var $getOrderUseableDiscountCouponList = function $getOrderUseableDiscountCouponList(params) {
  var recordNo = params.recordNo,
    items = params.items,
    restParams = (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(params, _excluded2);
  return (0,_request__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)({
    url: '/anteng-cornerstone-goods-wap/m/goods/coupon/order/show',
    method: 'post',
    withMerchantId: true,
    data: (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, restParams), {}, {
      recordNo: params.recordNo,
      couponVerifyDTO: items.map(function (item) {
        return {
          goodsId: item.goodsId,
          goodsStockId: item.skuId,
          number: item.count
        };
      })
    })
  });
};

/** 获取已领取优惠券详情 */
var $getDiscountCouponRecordDetail = function $getDiscountCouponRecordDetail(recordNo) {
  return request({
    url: '/anteng-cornerstone-goods-wap/m/goods/coupon/record/detail',
    method: 'get',
    withMerchantId: true,
    params: {
      recordNo: recordNo
    }
  });
};

/** 获取优惠券适用商品 */
var $getDiscountCouponUseableGoods = function $getDiscountCouponUseableGoods(params) {
  return request({
    url: '/anteng-cornerstone-goods-wap/m/goods/coupon/scope',
    method: 'get',
    withMerchantId: true,
    params: params
  });
};

/** 获取卡券模板详情 */
var $getDiscountCouponTemplateDetail = function $getDiscountCouponTemplateDetail(templateId) {
  return request({
    url: '/anteng-cornerstone-goods-wap/m/goods/coupon/detail',
    method: 'get',
    withMerchantId: true,
    params: {
      templateId: templateId
    }
  });
};

/***/ }),

/***/ 8181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ cart; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(8831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7420);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ./src/components/goods-item/index.tsx
var goods_item = __webpack_require__(9788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-dom@3.5.22/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8506);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ./src/components/count-stepper/index.tsx
var count_stepper = __webpack_require__(9519);
// EXTERNAL MODULE: ./src/hooks/index.ts + 11 modules
var hooks = __webpack_require__(8892);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
;// ./src/packageMain/tab-pages/cart/cart-item/index.tsx












/* harmony default export */ var cart_item = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CartItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var cartStore = (0,stores/* useCartStore */.x3)();
    var goodsInfo = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.data.goods;
    });
    var targetSku = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return goodsInfo.value.goodsSkus.find(function (item) {
        return item.id === props.data.goodsSkuId;
      });
    });
    var goodsImage = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _targetSku$value$spec, _targetSku$value, _goodsInfo$value$cove;
      return (_targetSku$value$spec = (_targetSku$value = targetSku.value) === null || _targetSku$value === void 0 || (_targetSku$value = _targetSku$value.specs) === null || _targetSku$value === void 0 ? void 0 : _targetSku$value[0].image) !== null && _targetSku$value$spec !== void 0 ? _targetSku$value$spec : (_goodsInfo$value$cove = goodsInfo.value.coverImages) === null || _goodsInfo$value$cove === void 0 ? void 0 : _goodsInfo$value$cove[0];
    });
    var goodsName = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return goodsInfo.value.title;
    });
    var skuText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _targetSku$value2;
      return (_targetSku$value2 = targetSku.value) === null || _targetSku$value2 === void 0 ? void 0 : _targetSku$value2.specs.map(function (item) {
        return item.v;
      }).join('／');
    });
    var count = (0,reactivity_esm_bundler/* ref */.KR)(props.data.count);
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return [props.data, props.data.count];
    }, function () {
      count.value = props.data.count;
    });
    var _useGoodsLimit = (0,hooks/* useGoodsLimit */.Lt)(goodsInfo, props.data.goodsSkuId),
      limitMin = _useGoodsLimit.limitMin,
      limitMax = _useGoodsLimit.limitMax;
    var onGoodsClick = function onGoodsClick() {
      (0,router/* navigateToGoodsDetail */.C7)(props.data.goodsId);
    };

    /** 更改sku，传入当前的值 */
    var onChangeSku = function onChangeSku() {
      var _goodsInfo$value$cove2, _goodsInfo$value$limi;
      var modal = (0,hooks/* useGoodsSkuModal */.oT)({
        skus: goodsInfo.value.goodsSkus,
        defaultImage: (_goodsInfo$value$cove2 = goodsInfo.value.coverImages) === null || _goodsInfo$value$cove2 === void 0 ? void 0 : _goodsInfo$value$cove2[0],
        count: count.value,
        minCount: (_goodsInfo$value$limi = goodsInfo.value.limitNumMin) !== null && _goodsInfo$value$limi !== void 0 ? _goodsInfo$value$limi : 1,
        maxCount: goodsInfo.value.limitNumMax,
        onConfirm: function () {
          var _onConfirm = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(res) {
            return (0,regenerator/* default */.A)().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  count.value = res.count;
                  _context.n = 1;
                  return cartStore.updateItem(props.data.id, {
                    goodsId: res.goodsId,
                    goodsSkuId: res.id,
                    count: res.count
                  }).catch(lib/* useResponseMessage */.Cd);
                case 1:
                  modal.close();
                case 2:
                  return _context.a(2);
              }
            }, _callee);
          }));
          function onConfirm(_x) {
            return _onConfirm.apply(this, arguments);
          }
          return onConfirm;
        }()
      });
    };
    var onCountChange = function onCountChange(newCount) {
      count.value = newCount;
      cartStore.updateItem(props.data.id, {
        goodsId: props.data.goodsId,
        goodsSkuId: props.data.goodsSkuId,
        count: newCount
      }).catch(lib/* useResponseMessage */.Cd);
    };
    return function () {
      var _targetSku$value3, _targetSku$value4, _limitMin$value, _limitMin$value2, _limitMax$value, _limitMax$value2;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "cart-item"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "cart-item__check",
        "onClick": function onClick() {
          cartStore.check(props.data.id);
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Radio */.sx, {
        "checked": props.data.checked
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "cart-item__goods"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
        "onClick": onGoodsClick,
        "type": "horizontal",
        "image": goodsImage.value,
        "name": goodsName.value,
        "desc": (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "cart-item__sku",
          "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(onChangeSku, ['stop'])
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "cart-item__sku-text"
        }, [skuText.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
          "name": "down"
        }, null)]),
        "price": (_targetSku$value3 = targetSku.value) === null || _targetSku$value3 === void 0 ? void 0 : _targetSku$value3.price,
        "listPrice": (_targetSku$value4 = targetSku.value) === null || _targetSku$value4 === void 0 ? void 0 : _targetSku$value4.underlinePrice,
        "action": (0,runtime_core_esm_bundler/* createVNode */.bF)(count_stepper/* default */.A, {
          "size": "small",
          "value": count.value,
          "min": (_limitMin$value = limitMin.value) === null || _limitMin$value === void 0 ? void 0 : _limitMin$value.value,
          "minMessage": (_limitMin$value2 = limitMin.value) === null || _limitMin$value2 === void 0 ? void 0 : _limitMin$value2.message,
          "max": (_limitMax$value = limitMax.value) === null || _limitMax$value === void 0 ? void 0 : _limitMax$value.value,
          "maxMessage": (_limitMax$value2 = limitMax.value) === null || _limitMax$value2 === void 0 ? void 0 : _limitMax$value2.message,
          "onChange": onCountChange,
          "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(function () {}, ['stop'])
        }, null)
      }, null)])]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/storage/index.js
var storage = __webpack_require__(4238);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(2684);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/types-BWhKcf4T.js
var SWIPE_KEY = Symbol("nut-swipe");

// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/with-install-Ch3FF0uS.js
var with_install_Ch3FF0uS = __webpack_require__(4861);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/swipegroup/SwipeGroup.js

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};
var __spreadValues = function __spreadValues(a, b) {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) {
    var _iterator = (0,createForOfIteratorHelper/* default */.A)(__getOwnPropSymbols(b)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return a;
};
var __spreadProps = function __spreadProps(a, b) {
  return __defProps(a, __getOwnPropDescs(b));
};



var _sfc_main = /* @__PURE__ */(0,runtime_core_esm_bundler/* defineComponent */.pM)(__spreadProps(__spreadValues({}, {
  name: "NutSwipeGroup"
}), {
  __name: "swipe-group.taro",
  props: {
    lock: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(__props) {
    var props = __props;
    var swipeGroupRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var name = (0,reactivity_esm_bundler/* ref */.KR)("");
    var update = function update(n) {
      name.value = n;
    };
    (0,runtime_core_esm_bundler/* provide */.Gt)(SWIPE_KEY, {
      update: update,
      lock: props.lock,
      name: name
    });
    return function (_ctx, _cache) {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", {
        ref_key: "swipeGroupRef",
        ref: swipeGroupRef,
        class: "nut-swipe-group"
      }, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")], 512);
    };
  }
}));
(0,with_install_Ch3FF0uS.w)(_sfc_main);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+shared@3.5.22/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3082);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/index-I8tfW3Kf.js
var index_I8tfW3Kf = __webpack_require__(101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/index-m0Wcof-q.js
var index_m0Wcof_q = __webpack_require__(8593);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/swipe/Swipe.js

var Swipe_defProp = Object.defineProperty;
var Swipe_defProps = Object.defineProperties;
var Swipe_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Swipe_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Swipe_hasOwnProp = Object.prototype.hasOwnProperty;
var Swipe_propIsEnum = Object.prototype.propertyIsEnumerable;
var Swipe_defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? Swipe_defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};
var Swipe_spreadValues = function __spreadValues(a, b) {
  for (var prop in b || (b = {})) if (Swipe_hasOwnProp.call(b, prop)) Swipe_defNormalProp(a, prop, b[prop]);
  if (Swipe_getOwnPropSymbols) {
    var _iterator = (0,createForOfIteratorHelper/* default */.A)(Swipe_getOwnPropSymbols(b)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (Swipe_propIsEnum.call(b, prop)) Swipe_defNormalProp(a, prop, b[prop]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return a;
};
var Swipe_spreadProps = function __spreadProps(a, b) {
  return Swipe_defProps(a, Swipe_getOwnPropDescs(b));
};





var _hoisted_1 = ["id"];
var _hoisted_2 = ["id"];
var Swipe_sfc_main = /* @__PURE__ */(0,runtime_core_esm_bundler/* defineComponent */.pM)(Swipe_spreadProps(Swipe_spreadValues({}, {
  name: "NutSwipe"
}), {
  __name: "swipe.taro",
  props: {
    name: {
      default: ""
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: false
    },
    touchMovePreventDefault: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open", "close", "click"],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    var props = __props;
    var emit = __emit;
    var refRandomId = Math.random().toString(36).slice(-8);
    var leftRef = (0,reactivity_esm_bundler/* ref */.KR)();
    var leftRefWidth = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var rightRef = (0,reactivity_esm_bundler/* ref */.KR)();
    var rightRefWidth = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var lockClick = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var initWidth = function initWidth() {
      (0,index_m0Wcof_q.u)(leftRef).then(function (rect) {
        leftRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
      }, function () {});
      (0,index_m0Wcof_q.u)(rightRef).then(function (rect) {
        rightRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
      }, function () {});
    };
    var parent = (0,runtime_core_esm_bundler/* inject */.WQ)(SWIPE_KEY, null);
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      var _a;
      return (_a = parent == null ? void 0 : parent.name) == null ? void 0 : _a.value;
    }, function (name) {
      if (props.name !== name && parent && parent.lock) {
        close();
      }
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      setTimeout(function () {
        initWidth();
      }, 100);
    });
    var opened = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var position = "";
    var oldPosition = "";
    var state = (0,reactivity_esm_bundler/* reactive */.Kh)({
      offset: 0,
      moving: false
    });
    var open = function open() {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      parent && parent.update(props.name);
      opened.value = true;
      if (p) {
        state.offset = p === "left" ? -rightRefWidth.value : leftRefWidth.value;
      }
      emit("open", {
        name: props.name,
        position: position || p
      });
    };
    var close = function close() {
      state.offset = 0;
      if (opened.value) {
        opened.value = false;
        emit("close", {
          name: props.name,
          position: position
        });
      }
    };
    var onClick = function onClick(e, position2, lock) {
      if (lock) {
        e.stopPropagation();
      } else {
        close();
      }
      emit("click", position2);
    };
    var touchStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return {
        transform: "translate3d(".concat(state.offset, "px, 0, 0)")
      };
    });
    var setoffset = function setoffset(deltaX) {
      position = deltaX > 0 ? "right" : "left";
      var offset = deltaX;
      switch (position) {
        case "left":
          if (opened.value && oldPosition === position) {
            offset = -rightRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX;
          }
          break;
        case "right":
          if (opened.value && oldPosition === position) {
            offset = leftRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > leftRefWidth.value ? leftRefWidth.value : deltaX;
          }
          break;
      }
      state.offset = offset;
    };
    var touch = (0,index_I8tfW3Kf.u)();
    var onTouchStart = function onTouchStart(event) {
      if (props.disabled) return;
      touch.start(event);
    };
    var onTouchMove = function onTouchMove(event) {
      if (props.disabled) return;
      touch.move(event);
      if (touch.isHorizontal()) {
        lockClick.value = true;
        state.moving = true;
        setoffset(touch.deltaX.value);
        if (props.touchMovePreventDefault) {
          event.preventDefault();
        }
        if (props.touchMoveStopPropagation) {
          event.stopPropagation();
        }
      }
    };
    var onTouchEnd = function onTouchEnd() {
      if (state.moving) {
        state.moving = false;
        oldPosition = position;
        switch (position) {
          case "left":
            if (Math.abs(state.offset) <= rightRefWidth.value / 2) {
              close();
            } else {
              state.offset = -rightRefWidth.value;
              open();
            }
            break;
          case "right":
            if (Math.abs(state.offset) <= leftRefWidth.value / 2) {
              close();
            } else {
              state.offset = leftRefWidth.value;
              open();
            }
            break;
        }
        setTimeout(function () {
          lockClick.value = false;
        }, 0);
      }
    };
    __expose({
      open: open,
      close: close
    });
    return function (_ctx, _cache) {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", {
        class: "nut-swipe",
        style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(touchStyle.value),
        onTouchstart: onTouchStart,
        onTouchmove: onTouchMove,
        onTouchend: onTouchEnd,
        onTouchcancel: onTouchEnd
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("view", {
        id: "leftRef-" + (0,reactivity_esm_bundler/* unref */.R1)(refRandomId),
        ref_key: "leftRef",
        ref: leftRef,
        class: "nut-swipe__left",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return onClick($event, "left", true);
        })
      }, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "left")], 8, _hoisted_1), _cache[3] || (_cache[3] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)()), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("view", {
        class: "nut-swipe__content",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return onClick($event, "content", lockClick.value);
        })
      }, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")]), _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)()), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("view", {
        id: "rightRef-" + (0,reactivity_esm_bundler/* unref */.R1)(refRandomId),
        ref_key: "rightRef",
        ref: rightRef,
        class: "nut-swipe__right",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return onClick($event, "right", true);
        })
      }, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "right")], 8, _hoisted_2)], 36);
    };
  }
}));
(0,with_install_Ch3FF0uS.w)(Swipe_sfc_main);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/swipe/index.css
var swipe = __webpack_require__(9476);
// EXTERNAL MODULE: ./src/components/recommended/index.tsx
var recommended = __webpack_require__(5303);
;// ./src/packageMain/tab-pages/cart/index.tsx
















/* harmony default export */ var cart = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'IndexCartPage',
  setup: function setup() {
    console.log('%c 页面加载：cart', 'color:#27ae60');
    var appStore = (0,lib/* useAppStore */.CU)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(appStore),
      commonNavigatorStyle = _storeToRefs.commonNavigatorStyle;
    var userStore = (0,lib/* useUserStore */.kH)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(userStore),
      isLogin = _storeToRefs2.isLogin;
    var cartStore = (0,stores/* useCartStore */.x3)();
    var _storeToRefs3 = (0,pinia/* storeToRefs */.bP)(cartStore),
      cartGoodsList = _storeToRefs3.cartGoodsList,
      isEmpty = _storeToRefs3.isEmpty,
      isLoading = _storeToRefs3.isLoading,
      isAllChecked = _storeToRefs3.isAllChecked,
      totalAmount = _storeToRefs3.totalAmount,
      checkedIdList = _storeToRefs3.checkedIdList;

    /** 下拉刷新中 */
    var isRefresherPulling = (0,reactivity_esm_bundler/* ref */.KR)(false);
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return isLoading.value;
    }, function () {
      if (isLoading.value === false) {
        isRefresherPulling.value = false;
      }
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      cartStore.refresh();
    });
    var onRemove = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(id) {
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              console.log(id);
              _context.n = 1;
              return cartStore.removeItem(id).catch(lib/* useResponseMessage */.Cd);
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function onRemove(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var activeSwipeRef = (0,reactivity_esm_bundler/* ref */.KR)();
    var activeSwipeId = (0,reactivity_esm_bundler/* ref */.KR)();
    var onSwipeOpen = function onSwipeOpen(id) {
      activeSwipeId.value = id;
    };
    var CartEmpty = function CartEmpty() {
      if (!isLogin.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
          "description": "\u8BF7\u767B\u5F55\u540E\u67E5\u770B"
        }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "shopping-cart__go",
          "onClick": function onClick() {
            (0,lib/* useLogin */.vz)();
          }
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u767B\u5F55")])]);
      }
      return isEmpty.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
        "description": "\u8D2D\u7269\u8F66\u662F\u7A7A\u7684\uFF0C\u5FEB\u53BB\u5546\u57CE\u9009\u8D2D\u5427"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "shopping-cart__go",
        "onClick": function onClick() {
          (0,router/* backToIndex */.t2)('home', true);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53BB\u901B\u901B")])]) : null;
    };
    var ActionBar = function ActionBar() {
      return isLogin.value && cartGoodsList.value.length > 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "shopping-cart__action-bar"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "shopping-cart__action-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "shopping-cart__check-all",
        "onClick": function onClick() {
          isAllChecked.value ? cartStore.uncheckAll() : cartStore.checkAll();
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Radio */.sx, {
        "checked": isAllChecked.value
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u5168\u9009")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "shopping-cart__amount number-font"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5408\u8BA1\uFF1A"), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "yen"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "value"
      }, [totalAmount.value.toFixed(2)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['shopping-cart__order-pay', checkedIdList.value.length === 0 && 'disabled'],
        "onClick": function onClick() {
          cartStore.toPay();
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53BB\u7ED3\u7B97("), checkedIdList.value.length, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(")")])])]) : null;
    };
    var CartContent = function CartContent() {
      if (!isLogin.value || !(cartGoodsList.value.length > 0)) {
        return null;
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
        "refresherBackground": "transparent",
        "class": "shopping-cart__scroller",
        "enhanced": true,
        "scrollY": true,
        "refresherEnabled": true,
        "refresherTriggered": isRefresherPulling.value && isLoading.value,
        "onRefresherrefresh": /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2() {
          return (0,regenerator/* default */.A)().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                isRefresherPulling.value = true;
                return _context2.a(2, cartStore.refresh());
            }
          }, _callee2);
        }))
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "shopping-cart__list",
            "onTouchstart": function onTouchstart() {
              var _activeSwipeRef$value, _activeSwipeRef$value2;
              (_activeSwipeRef$value = activeSwipeRef.value) === null || _activeSwipeRef$value === void 0 || (_activeSwipeRef$value2 = _activeSwipeRef$value.close) === null || _activeSwipeRef$value2 === void 0 || _activeSwipeRef$value2.call(_activeSwipeRef$value);
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_sfc_main, {
            "lock": true,
            "touch-move-prevent-default": true,
            "touch-move-stop-propagation": true
          }, {
            default: function _default() {
              return [cartGoodsList.value.map(function (item, index) {
                return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "shopping-cart__item-wrap"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(Swipe_sfc_main, {
                  "ref": item.id === activeSwipeId.value ? activeSwipeRef : undefined,
                  "name": item.id,
                  "key": item.id,
                  "onOpen": function onOpen() {
                    return onSwipeOpen(item.id);
                  }
                }, {
                  default: function _default() {
                    return (0,runtime_core_esm_bundler/* createVNode */.bF)(cart_item, {
                      "data": item
                    }, null);
                  },
                  right: function right() {
                    return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                      "class": "shopping-cart__item-remove",
                      "onClick": function onClick() {
                        onRemove(item.id);
                      }
                    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
                      "name": "close"
                    }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5220\u9664")]);
                  }
                })]);
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(recommended/* default */.A, {
                "type": recommendRule.shoppingPage
              }, null)];
            }
          })])];
        }
      });
    };
    var recommendRule = (0,storage/* getStorageSync */.JF)('recommendRule');
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": null
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "shopping-cart-page"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "layout-scroll"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "shopping-cart__header",
            "style": commonNavigatorStyle.value
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "shopping-cart__title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D2D\u7269\u8F66")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "shopping-cart__desc"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F60\u53EF\u4EE5\u5C06\u559C\u6B22\u7684\u5546\u54C1\u52A0\u5165\u8D2D\u7269\u8F66")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "shopping-cart__spin"
          }, [isLoading.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)(CartEmpty, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(CartContent, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(ActionBar, null, null)])])];
        }
      });
    };
  }
}));

/***/ }),

/***/ 8593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ useTaroRect; }
/* harmony export */ });
/* unused harmony export a */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1880);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1346);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4243);


function isWindow(val) {
  return typeof window !== "undefined" && val === window;
}
var useTaroRectById = function useTaroRectById(id) {
  return new Promise(function (resolve, reject) {
    if (_getEnv() === _ENV_TYPE.WEB) {
      var t = document ? document.querySelector("#".concat(id)) : "";
      if (t) {
        resolve(t == null ? void 0 : t.getBoundingClientRect());
      }
      reject();
    } else {
      var query = _createSelectorQuery();
      query.select("#".concat(id)).boundingClientRect().exec(function (rect) {
        if (rect[0]) {
          resolve(rect[0]);
        } else {
          reject();
        }
      });
    }
  });
};
var useTaroRect = function useTaroRect(elementRef) {
  var element = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .unref */ .R1)(elementRef);
  return new Promise(function (resolve, reject) {
    if ((0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__/* .getEnv */ ._$)() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__/* .ENV_TYPE */ .nD.WEB) {
      if (element && element.$el) {
        element = element.$el;
      }
      if (isWindow(element)) {
        var width = element.innerWidth;
        var height = element.innerHeight;
        resolve({
          top: 0,
          left: 0,
          right: width,
          bottom: height,
          width: width,
          height: height
        });
      }
      if (element && element.getBoundingClientRect) {
        resolve(element.getBoundingClientRect());
      }
      reject();
    } else {
      var query = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__/* .createSelectorQuery */ ._Y)();
      var id = element == null ? void 0 : element.id;
      if (id) {
        query.select("#".concat(id)).boundingClientRect().exec(function (rect) {
          if (rect[0]) {
            resolve(rect[0]);
          } else {
            reject();
          }
        });
      } else {
        reject();
      }
    }
  });
};


/***/ }),

/***/ 8892:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ud: function() { return /* reexport */ hooks_useExpress; },
  vz: function() { return /* reexport */ useExpress_useExpressModal; },
  Lt: function() { return /* reexport */ useGoodsLimit; },
  V$: function() { return /* reexport */ useGoodsSku; },
  oT: function() { return /* reexport */ hooks_useGoodsSku; },
  bs: function() { return /* reexport */ hooks_useReceiveCoupon; }
});

// UNUSED EXPORTS: useGoodsSuitableShops

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ./src/packageA/discount-coupon/components/coupon-item/index.tsx
var coupon_item = __webpack_require__(9333);
// EXTERNAL MODULE: ./src/api/discount-coupon/types.ts
var types = __webpack_require__(9029);
// EXTERNAL MODULE: ./src/api/discount-coupon/index.ts
var discount_coupon = __webpack_require__(7591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(6552);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ./src/constants/discount-coupon.ts
var constants_discount_coupon = __webpack_require__(3674);
;// ./src/hooks/useReceiveCoupon/index.tsx












/** 领取优惠券弹窗 */
var useReceiveCoupon = function useReceiveCoupon(pagination, options) {
  var data = pagination.data,
    refreshData = pagination.refreshData,
    refreshDataItem = pagination.refreshDataItem,
    CommonPaginationStatus = pagination.CommonPaginationStatus;
  var onReceive = (0,lib/* withLogin */.E6)(function (item) {
    var _options$scene;
    (0,lib/* useLoading */.M3)();
    (0,discount_coupon/* $receiveDiscountCoupon */.j7)({
      couponId: item.id,
      couponScene: (_options$scene = options === null || options === void 0 ? void 0 : options.scene) !== null && _options$scene !== void 0 ? _options$scene : constants_discount_coupon/* DiscountCouponScene */.sj.goodsDetail,
      goodsId: options === null || options === void 0 ? void 0 : options.goodsId,
      goodsGroupId: options === null || options === void 0 ? void 0 : options.goodsGroupId
    }).then(function (res) {
      (0,lib/* useResponseMessage */.Cd)(res);
    }).catch(function (err) {
      (0,lib/* useResponseMessage */.Cd)(err);
    }).finally(function () {
      (0,lib/* useLoadingEnd */.dA)();
      refreshDataItem(item.id);
      // refreshData({ silent: true })
    });
  });
  var onUse = function onUse(item) {
    (0,router/* navigateToCouponUsage */.gD)({
      recordNo: item.recordNo
    });
  };
  var valid = function valid(item) {
    var useType = item.useType,
      useStartTime = item.useStartTime,
      useEndTime = item.useEndTime,
      limitedDays = item.limitedDays;
    if (useType === types/* couponUseTimeRangeType */.K.timeRange) {
      return "\u6709\u6548\u671F\u81F3 ".concat(dayjs_min_default()(useEndTime).format('YYYY.MM.DD'));
    }
    return "\u81EA\u9886\u53D6\u540E ".concat(limitedDays, " \u5929\u5185\u53EF\u7528");
  };
  var tips = function tips(item) {
    var start = dayjs_min_default()(item.useStartTime);
    if (dayjs_min_default()().isBefore(start)) {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "help"
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u672A\u5230\u53EF\u7528\u65F6\u95F4\uFF0C"), start.format('YYYY.MM.DD HH:mm:ss'), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u540E\u53EF\u7528")]);
    }
    return null;
  };
  var modal = (0,lib/* useModal */.hS)({
    title: '优惠活动',
    height: 'auto',
    content: function content() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "use-receive-coupon-modal"
      }, [data.value.map(function (item) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(coupon_item/* default */.A, {
          "name": item.name,
          "amount": item.discountAmount / 100,
          "threshold": item.thresholdAmount / 100,
          "useRules": item.instructions,
          "validDateText": valid(item),
          "scope": item.scope,
          "tips": tips(item),
          "stamp": item.hasRecord ? '已领取' : undefined,
          "stampSize": "small",
          "button": function button() {
            if (item.hasRecord && !(item.receiveLimit > 0)) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)(coupon_item/* CouponItemButton */.g, {
                "text": "\u53BB\u4F7F\u7528",
                "centered": true,
                "onClick": function onClick() {
                  onUse(item);
                }
              }, null);
            }
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "style": 'margin: auto 0;'
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(coupon_item/* CouponItemButton */.g, {
              "text": '领取',
              "primary": true,
              "onClick": function onClick() {
                onReceive(item);
              }
            }, null), item.hasRecord && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "use-receive-coupon-modal__continue-tips"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8FD8\u53EF\u9886 "), item.receiveLimit, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u5F20")])]);
          }
        }, null);
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(CommonPaginationStatus, null, null)]);
    }
  });
  return modal;
};
/* harmony default export */ var hooks_useReceiveCoupon = (useReceiveCoupon);
var ReceiveCouponModalContent = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ReceiveCouponModalContent',
  setup: function setup(props) {
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "receive-coupon-modal-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "modal-title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F18\u60E0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
        "description": "\u5F53\u524D\u6682\u65E0\u4F18\u60E0\u6D3B\u52A8"
      }, null)]);
    };
  }
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
;// ./src/hooks/useGoodsSku/utils.ts


var restoreSpecs = function restoreSpecs(skus) {
  var _ref;
  var specs = (_ref = []).concat.apply(_ref, (0,toConsumableArray/* default */.A)(skus.map(function (item) {
    return item.specs;
  })));
  var specMap = {};
  specs.forEach(function (spec) {
    var k = spec.k,
      kId = spec.kId,
      v = spec.v,
      vId = spec.vId,
      image = spec.image;
    if (!specMap[k]) {
      specMap[k] = {
        id: kId,
        name: k,
        children: []
      };
    }
    var specItem = specMap[k];
    var existingChild = specItem.children.find(function (child) {
      return child.id === vId;
    });
    if (!existingChild) {
      specItem.children.push({
        id: vId,
        name: v,
        image: image
      });
    }
  });
  return Object.values(specMap);
};
function findIntersection(arrays) {
  if (arrays.length === 0) return [];

  // 将第一个数组转换为 Set
  var intersection = new Set(arrays[0]);

  // 遍历其他数组，保留与当前交集中相同的元素
  for (var i = 1; i < arrays.length; i++) {
    var currentSet = new Set(arrays[i]);
    var _iterator = _createForOfIteratorHelper(intersection),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (!currentSet.has(item)) {
          intersection.delete(item);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return Array.from(intersection);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js + 17 modules
var cloneDeep = __webpack_require__(2347);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
;// ./src/hooks/useGoodsSku/index.tsx











var useGoodsSku = function useGoodsSku(options) {
  var _minCount$value;
  var skus = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    return ((0,reactivity_esm_bundler/* isRef */.i9)(options.skus) ? options.skus.value : options.skus).map(function (item) {
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, item), {}, {
        _specs: item.specs.map(function (i) {
          return i.vId;
        }),
        image: item.specs[0].image
      });
    });
  });
  var minCount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    var _options$minCount;
    return (_options$minCount = options.minCount) !== null && _options$minCount !== void 0 ? _options$minCount : 1;
  });
  var maxCount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    var _options$maxCount;
    if (options.maxCount && options.maxCount < minCount.value) return minCount.value;
    return (_options$maxCount = options.maxCount) !== null && _options$maxCount !== void 0 ? _options$maxCount : null;
  });

  /** 有货的 sku 列表，符合：最少购买数量 ≤ 库存 */
  var availableSkus = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    return skus.value.filter(function (item) {
      if (!item.stock) return false;
      if (item.stock < minCount.value) return false;
      return true;
    });
  });

  // console.log(availableSkus.value.map(item => item.specs))

  // console.log(availableSkus.value)

  var specs = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    return restoreSpecs((0,reactivity_esm_bundler/* isRef */.i9)(options.skus) ? options.skus.value : options.skus);
  });

  // console.log(specs.value)

  var selectedSpces = (0,reactivity_esm_bundler/* ref */.KR)([]);
  var initSelectedSpces = function initSelectedSpces() {
    selectedSpces.value = new Array(specs.value.length).fill('');
  };

  /** 默认选择 */
  var defaultSelect = function defaultSelect() {
    var _skus$value$find;
    var target = (_skus$value$find = skus.value.find(function (item) {
      return item.id === options.selectedSkuId;
    })) !== null && _skus$value$find !== void 0 ? _skus$value$find :
    // TODO 这里同时要判断是否可购买
    (0,toConsumableArray/* default */.A)(availableSkus.value).sort(function (a, b) {
      return b.sort - a.sort;
    })[0];
    if (target) {
      selectedSpces.value = (0,toConsumableArray/* default */.A)(target._specs);
    }
  };
  (0,runtime_core_esm_bundler/* watch */.wB)(function () {
    return skus.value;
  }, function () {
    initSelectedSpces();
    defaultSelect();
  }, {
    immediate: true
  });
  var selectSpec = function selectSpec(kId, vId) {
    var index = specs.value.findIndex(function (item) {
      return item.id === kId;
    });
    selectedSpces.value[index] = selectedSpces.value[index] === vId ? '' : vId;
    resetCount();
  };
  var selectSku = function selectSku(specs) {
    selectedSpces.value = specs;
    resetCount();
  };

  /** 可选中的 sku 列表，从当前已选中规格计算得出 */
  var selectableSkus = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    // TODO 可以支持规格联动
    return (0,toConsumableArray/* default */.A)(availableSkus.value);
  });
  var matchedSkus = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    var specs = selectedSpces.value.filter(function (id) {
      return id;
    });
    return skus.value.filter(function (item) {
      return specs.every(function (id) {
        return item._specs.includes(id);
      });
    });
  });
  var stocks = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    return matchedSkus.value.reduce(function (v, item) {
      var _item$stock;
      return v + ((_item$stock = item.stock) !== null && _item$stock !== void 0 ? _item$stock : 0);
    }, 0);
  });
  var currentImage = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    var _specs$value$0$childr, _specs$value$;
    return (_specs$value$0$childr = (_specs$value$ = specs.value[0]) === null || _specs$value$ === void 0 || (_specs$value$ = _specs$value$.children) === null || _specs$value$ === void 0 || (_specs$value$ = _specs$value$.find(function (item) {
      return item.id === selectedSpces.value[0];
    })) === null || _specs$value$ === void 0 ? void 0 : _specs$value$.image) !== null && _specs$value$0$childr !== void 0 ? _specs$value$0$childr : options.defaultImage;
  });
  var images = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    var _specs$value$0$childr2, _specs$value$2;
    return (_specs$value$0$childr2 = (_specs$value$2 = specs.value[0]) === null || _specs$value$2 === void 0 ? void 0 : _specs$value$2.children.map(function (item) {
      return item.image;
    }).filter(function (item) {
      return item;
    })) !== null && _specs$value$0$childr2 !== void 0 ? _specs$value$0$childr2 : [];
  });
  var count = (0,reactivity_esm_bundler/* ref */.KR)(options.count >= 1 ? options.count : (_minCount$value = minCount.value) !== null && _minCount$value !== void 0 ? _minCount$value : 1);
  var resetCount = function resetCount() {
    var _minCount$value2;
    count.value = options.count >= 1 ? options.count : (_minCount$value2 = minCount.value) !== null && _minCount$value2 !== void 0 ? _minCount$value2 : 1;
  };
  var validateSpecs = function validateSpecs() {
    var res = true;
    for (var i = 0; i < selectedSpces.value.length; i++) {
      if (!selectedSpces.value[i]) {
        res = false;
        (0,lib/* useToast */.dj)("\u8BF7\u9009\u62E9".concat(specs.value[i].name));
        break;
      }
    }
    return res;
  };
  var onIncrease = function onIncrease() {
    if (!validateSpecs()) {
      return void 0;
    }
    var v = count.value + 1;
    if (v > matchedSkus.value[0].stock) {
      (0,lib/* useToast */.dj)('超出库存范围');
      return void 0;
    }
    if (maxCount.value && v > maxCount.value) {
      (0,lib/* useToast */.dj)("\u6700\u591A\u8D2D\u4E70".concat(maxCount.value, "\u4EF6"));
      return void 0;
    }
    count.value = v;
  };
  var onDecrease = function onDecrease() {
    if (!validateSpecs()) {
      return void 0;
    }
    var v = count.value - 1;
    if (v < minCount.value) {
      (0,lib/* useToast */.dj)("\u6700\u5C11\u8D2D\u4E70".concat(minCount.value, "\u4EF6"));
      return void 0;
    }
    count.value = v;
  };
  var price = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    var list = matchedSkus.value.map(function (item) {
      return item.price;
    }).sort(function (a, b) {
      return a - b;
    }).filter(function (i) {
      return i;
    });
    if (list.length === 0) return [];
    var min = list[0];
    var max = list[list.length - 1];
    if (min === max) return [min];
    return [min, max];
  });
  var listPrice = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    var list = matchedSkus.value.map(function (item) {
      return item.underlinePrice;
    }).sort(function (a, b) {
      return a - b;
    }).filter(function (i) {
      return i;
    });
    if (list.length === 0) return [];
    var min = list[0];
    var max = list[list.length - 1];
    if (min === max) return [min];
    return [min, max];
  });
  return {
    skus: skus,
    minCount: minCount,
    maxCount: maxCount,
    availableSkus: availableSkus,
    specs: specs,
    selectedSpces: selectedSpces,
    selectableSkus: selectableSkus,
    matchedSkus: matchedSkus,
    stocks: stocks,
    currentImage: currentImage,
    images: images,
    count: count,
    price: price,
    listPrice: listPrice,
    resetCount: resetCount,
    selectSpec: selectSpec,
    selectSku: selectSku,
    onIncrease: onIncrease,
    onDecrease: onDecrease,
    validateSpecs: validateSpecs
  };
};
var SkuModalContent = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsSkuModalContent',
  props: {
    skus: {
      type: Array,
      required: true
    },
    selectedSkuId: {
      type: String
    },
    defaultImage: {
      type: String
    },
    footer: {},
    actions: {
      type: Array
    },
    onConfirm: {
      type: Function
    },
    count: {
      type: Number
    },
    minCount: {
      type: Number,
      default: 1
    },
    maxCount: {
      type: Number,
      default: null
    }
  },
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var goodsStore = (0,stores/* useGoodsStore */.bI)();
    var _useGoodsSku = useGoodsSku({
        skus: props.skus,
        selectedSkuId: props.selectedSkuId,
        count: props.count,
        minCount: props.minCount > 1 ? props.minCount : 1,
        maxCount: props.maxCount
      }),
      skus = _useGoodsSku.skus,
      minCount = _useGoodsSku.minCount,
      maxCount = _useGoodsSku.maxCount,
      availableSkus = _useGoodsSku.availableSkus,
      specs = _useGoodsSku.specs,
      selectedSpces = _useGoodsSku.selectedSpces,
      selectSpec = _useGoodsSku.selectSpec,
      selectableSkus = _useGoodsSku.selectableSkus,
      matchedSkus = _useGoodsSku.matchedSkus,
      stocks = _useGoodsSku.stocks,
      currentImage = _useGoodsSku.currentImage,
      images = _useGoodsSku.images,
      count = _useGoodsSku.count,
      price = _useGoodsSku.price,
      listPrice = _useGoodsSku.listPrice,
      onIncrease = _useGoodsSku.onIncrease,
      onDecrease = _useGoodsSku.onDecrease,
      validateSpecs = _useGoodsSku.validateSpecs;
    var limitTip = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (minCount.value === maxCount.value) return "\u6BCF\u5355\u9650\u8D2D".concat(minCount.value, "\u4EF6");
      var list = [];
      if (minCount.value > 1) list.push("\u6700\u5C11\u8D2D\u4E70".concat(minCount.value, "\u4EF6"));
      if (maxCount.value && maxCount.value > 1) list.push("\u6700\u591A\u8D2D\u4E70".concat(maxCount.value, "\u4EF6"));
      if (list.length === 0) return null;
      return "\u6BCF\u5355".concat(list.join('，'));
    });
    var previewImage = function previewImage() {
      var image = currentImage.value || props.defaultImage;
      if (image) {
        (0,lib/* usePreviewImages */.yj)({
          urls: [image]
        });
      }
    };
    var responseData = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, matchedSkus.value[0]), {}, {
        count: count.value
      });
    });
    return function () {
      var _props$actions$map, _props$actions;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-sku-modal"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "header"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-image",
        "onClick": previewImage
      }, [currentImage.value || props.defaultImage ? (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
        "class": "image",
        "mode": "aspectFill",
        "src": currentImage.value || props.defaultImage
      }, null) : '暂无图片']), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-info"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "price-info"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "current-price number-font"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "yen"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "value"
      }, [(0,utils/* formatPrice */.$g)(price.value[0])]), price.value.length > 1 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "minimum"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D77")])]), goodsStore.sellingPriceText && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "price-tag"
      }, [goodsStore.sellingPriceText]), listPrice.value[0] > price.value[0] && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "list-price"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "line-through"
      }, [goodsStore.dashPriceText, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \xA5"), (0,utils/* formatPrice */.$g)(listPrice.value[0])])]), limitTip.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "limit"
      }, [limitTip.value])])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "content-wrap"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
        "class": "content",
        "scrollY": true,
        "showScrollbar": true
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "spec-content"
          }, [specs.value.map(function (item, index) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "spec-type"
            }, [item.name]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "spec-list"
            }, [item.children.map(function (spec) {
              var selectable = selectableSkus.value.find(function (sku) {
                return sku._specs.includes(spec.id);
              });
              var selected = selectedSpces.value.includes(spec.id);
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": ['spec-item', !selectable && 'disabled', selected && 'selected'],
                "onClick": function onClick() {
                  // if (!selectable) {
                  //   return void 0
                  // }
                  selectSpec(item.id, spec.id);
                }
              }, [!selectable && (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
                "class": "stockout"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7F3A\u8D27")]), spec.name]);
            })])]);
          })])];
        }
      })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "footer"
      }, [props.footer, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "count-info"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "stock-wrap"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "label"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6570\u91CF")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "stock"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5E93\u5B58\uFF1A"), stocks.value]), limitTip.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "stock-desc"
      }, [limitTip.value])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "steper"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['decrease', count.value <= minCount.value && 'disabled'],
        "onClick": onDecrease
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF0D")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "count"
      }, [count.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['increase', maxCount.value && count.value >= maxCount.value && 'disabled'],
        "onClick": onIncrease
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF0B")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "actions"
      }, [stocks.value > 0 ? (_props$actions$map = (_props$actions = props.actions) === null || _props$actions === void 0 ? void 0 : _props$actions.map(function (item) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": ['action-item', item.type],
          "onClick": function onClick() {
            var _item$onClick;
            if (!validateSpecs()) return void 0;
            (_item$onClick = item.onClick) === null || _item$onClick === void 0 || _item$onClick.call(item, (0,cloneDeep/* default */.A)(responseData.value));
          }
        }, [item.text]);
      })) !== null && _props$actions$map !== void 0 ? _props$actions$map : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "action-item",
        "onClick": function onClick() {
          var _props$onConfirm;
          if (!validateSpecs()) return void 0;
          (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 || _props$onConfirm.call(props, (0,cloneDeep/* default */.A)(responseData.value));
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u786E\u5B9A")]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "action-item disabled"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u65E0\u8D27")])])])]);
    };
  }
});
var useGoodsSkuModal = function useGoodsSkuModal(options) {
  var _usePopup = (0,lib/* usePopup */.OJ)({
      content: function content() {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(SkuModalContent, options, null);
      },
      placement: 'bottom'
    }),
    close = _usePopup.close;
  return {
    close: close
  };
};
/* harmony default export */ var hooks_useGoodsSku = (useGoodsSkuModal);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(1314);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseExtremum.js


/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !(0,isSymbol/* default */.A)(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

/* harmony default export */ var _baseExtremum = (baseExtremum);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGt.js
/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

/* harmony default export */ var _baseGt = (baseGt);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIteratee.js + 17 modules
var _baseIteratee = __webpack_require__(3662);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/maxBy.js




/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, (0,_baseIteratee/* default */.A)(iteratee, 2), _baseGt)
    : undefined;
}

/* harmony default export */ var lodash_es_maxBy = (maxBy);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseLt.js
/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

/* harmony default export */ var _baseLt = (baseLt);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/minBy.js




/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, (0,_baseIteratee/* default */.A)(iteratee, 2), _baseLt)
    : undefined;
}

/* harmony default export */ var lodash_es_minBy = (minBy);

;// ./src/hooks/goods.ts


/** 购买数量限制 */
var useGoodsLimit = function useGoodsLimit(goodsDetail, skuId) {
  var _targetSku$stock;
  var detail = (0,reactivity_esm_bundler/* isRef */.i9)(goodsDetail) ? goodsDetail.value : goodsDetail;
  var min = detail.limitNumMin > 1 ? detail.limitNumMin : 1;
  var limitMinScenes = [{
    value: 1,
    message: '最少购买 1 件'
  }, {
    value: min,
    message: "\u6700\u5C11\u8D2D\u4E70 ".concat(min, " \u4EF6")
  }];

  /** 最小购买量 */
  var limitMin = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    return lodash_es_maxBy(limitMinScenes, function (o) {
      return o.value;
    });
  });
  var targetSku = detail.goodsSkus.find(function (item) {
    return item.id === ((0,reactivity_esm_bundler/* isRef */.i9)(skuId) ? skuId.value : skuId);
  });
  var max = detail.limitNumMax > 1 ? detail.limitNumMax : Infinity;
  var limitMaxScenes = [{
    value: (_targetSku$stock = targetSku === null || targetSku === void 0 ? void 0 : targetSku.stock) !== null && _targetSku$stock !== void 0 ? _targetSku$stock : Infinity,
    message: '超出库存范围'
  }, {
    value: max,
    message: "\u6700\u591A\u8D2D\u4E70 ".concat(max, " \u4EF6")
  }];

  /** 最大购买量：库存量 & 设置最大限制 */
  var limitMax = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    return lodash_es_minBy(limitMaxScenes, function (o) {
      return o.value;
    });
  });
  return {
    limitMin: limitMin,
    limitMax: limitMax
  };
};
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
// EXTERNAL MODULE: ./src/api/express/index.ts
var express = __webpack_require__(3488);
;// ./src/hooks/useExpress/index.tsx



var cachedExpressInfo = {};
var useExpress = function useExpress(options) {
  var expressRef = (0,reactivity_esm_bundler/* ref */.KR)();
  var isLoading = (0,reactivity_esm_bundler/* ref */.KR)(false);
  var errMsg = (0,reactivity_esm_bundler/* ref */.KR)();
  var cachedTarget = cachedExpressInfo[options.courierNo];
  if (cachedTarget) {
    expressRef.value = cachedTarget.data;
  }
  var getData = function getData() {
    var _options$cacheTime;
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var t = config/* EXPRESS_COMPANY_OPTIONS */.Yy.find(function (i) {
      return i.value === options.courierNo;
    });
    if (t !== null && t !== void 0 && t.noDetails) {
      errMsg.value = t.tips;
      return void 0;
    }

    // 默认缓存结果 60 秒
    var s = (_options$cacheTime = options.cacheTime) !== null && _options$cacheTime !== void 0 ? _options$cacheTime : 60;
    var cachedTarget = cachedExpressInfo[options.courierNo];
    if (!force && cachedTarget && +new Date() - cachedTarget.date < s * 1000) {
      expressRef.value = cachedTarget.data;
      return void 0;
    }
    isLoading.value = true;
    errMsg.value = null;
    (0,express/* getExpressInfo */.V)({
      courierNo: options.courierNo,
      phone: options.phone
    }).then(function (res) {
      if (res.code === 200) {
        if (res.data) {
          var _res$data$logisticsTr, _res$data$logisticsTr2;
          // 源数据不是倒序，翻转一下
          (_res$data$logisticsTr = res.data.logisticsTraceDetails) === null || _res$data$logisticsTr === void 0 || (_res$data$logisticsTr2 = _res$data$logisticsTr.reverse) === null || _res$data$logisticsTr2 === void 0 || _res$data$logisticsTr2.call(_res$data$logisticsTr);
          cachedExpressInfo[options.courierNo] = {
            date: +new Date(),
            data: res.data
          };
          expressRef.value = res.data;
        } else {
          errMsg.value = '物流信息获取失败！请稍后再试';
        }
      } else {
        errMsg.value = res.msg;
      }
    }).catch(function (err) {
      console.error(err);
      errMsg.value = '未获取到物流信息，如有疑问请联系客服咨询。';
      // errMsg.value = err.response?.data?.msg ?? err.message
    }).finally(function () {
      isLoading.value = false;
    });
  };
  if (!options.lazyLoad) {
    getData();
  }
  return {
    expressRef: expressRef,
    errMsg: errMsg,
    isLoading: isLoading,
    refresh: function refresh() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return getData(force);
    }
  };
};
/* harmony default export */ var hooks_useExpress = (useExpress);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
;// ./src/hooks/useExpress/useExpressModal.tsx







var useExpressModal = function useExpressModal(options) {
  var content = (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
    "class": "express-modal-wrap"
  }, [options.header, (0,runtime_core_esm_bundler/* createVNode */.bF)(ExpressInfo, {
    "courierNo": options.courierNo,
    "phone": options.phone
  }, null)]);
  return (0,lib/* useModal */.hS)({
    placement: 'bottom',
    content: content,
    title: '物流详情'
  });
};
/* harmony default export */ var useExpress_useExpressModal = (useExpressModal);
var ExpressInfo = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    courierNo: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var _useExpress = hooks_useExpress({
        courierNo: props.courierNo,
        phone: props.phone
      }),
      expressRef = _useExpress.expressRef,
      isLoading = _useExpress.isLoading,
      errMsg = _useExpress.errMsg;
    return function () {
      var _expressRef$value;
      if (!isLoading.value && (errMsg.value || !expressRef.value)) return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
        "description": errMsg.value
      }, null);
      if (isLoading.value || !expressRef.value) return null;
      var _ref = expressRef.value,
        expressCompanyName = _ref.expressCompanyName,
        logisticsTraceDetails = _ref.logisticsTraceDetails;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "express-modal"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "express-modal__header"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "logo",
        "style": {
          backgroundImage: "url(".concat((_expressRef$value = expressRef.value) === null || _expressRef$value === void 0 ? void 0 : _expressRef$value.expressCompanyLogo, ")")
        }
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "name"
      }, [expressCompanyName]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [props.courierNo]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "copy",
        "onClick": function onClick() {
          return (0,lib/* useCopyText */.sc)(props.courierNo);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u590D\u5236")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "express-modal__details"
      }, [logisticsTraceDetails === null || logisticsTraceDetails === void 0 ? void 0 : logisticsTraceDetails.map(function (item, index, list) {
        var _list, _EXPRESS_SUB_STATUS_O;
        var statusText =
        // 当前的状态和上一条状态一样，不显示状态文本
        item.subLogisticsStatus === ((_list = list[index - 1]) === null || _list === void 0 ? void 0 : _list.subLogisticsStatus) ? '' : (_EXPRESS_SUB_STATUS_O = constants/* EXPRESS_SUB_STATUS_OPTIONS */.sN.find(function (option) {
          return option.value === item.subLogisticsStatus;
        })) === null || _EXPRESS_SUB_STATUS_O === void 0 ? void 0 : _EXPRESS_SUB_STATUS_O.label;
        var time = dayjs_min_default()(item.time).format('MM-DD HH:mm:ss');
        var phoneNumberRegex = /(\b\d{11}\b)|(\b\d{3,4}-\d{7,8}\b)|(\+\d{2}\s\d{2,4}-\d{7,8}\b)/g;
        var highlightedText = item.desc.split(phoneNumberRegex).map(function (text, index) {
          if (phoneNumberRegex.test(text)) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
              "key": index,
              "class": "express-step__phone",
              "onClick": function onClick() {
                (0,lib/* makePhoneCall */.V2)(text);
              }
            }, [text]);
          }
          return text;
        });
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": ['express-step', index === 0 && 'active', index === list.length - 1 && 'last']
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "dot"
        }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "dash-line"
        }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "express-step__title"
        }, [statusText && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "express-step__status"
        }, [statusText]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "express-step__date"
        }, [time])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "express-step__text"
        }, [highlightedText])]);
      })])]);
    };
  }
});
// EXTERNAL MODULE: ./src/components/suitable-shops/index.tsx
var suitable_shops = __webpack_require__(5577);
;// ./src/hooks/index.ts






// export { default as usePay } from './usePay'




/***/ }),

/***/ 9029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ couponUseTimeRangeType; },
/* harmony export */   b: function() { return /* binding */ COUPON_SCOPE_OPTIONS; }
/* harmony export */ });
var couponScope = /*#__PURE__*/function (couponScope) {
  couponScope[couponScope["all"] = 0] = "all";
  couponScope[couponScope["supplier"] = 1] = "supplier";
  couponScope[couponScope["goods"] = 2] = "goods";
  return couponScope;
}(couponScope || {});
var COUPON_SCOPE_OPTIONS = [{
  label: '全场通用券',
  value: couponScope.all
}, {
  label: '指定供应商券',
  value: couponScope.supplier
}, {
  label: '指定商品券',
  value: couponScope.goods
}];
var couponGoodsRangeType = /*#__PURE__*/function (couponGoodsRangeType) {
  couponGoodsRangeType[couponGoodsRangeType["valid"] = 1] = "valid";
  couponGoodsRangeType[couponGoodsRangeType["invalid"] = 0] = "invalid";
  return couponGoodsRangeType;
}(couponGoodsRangeType || {});
var COUPON_GOODS_RANGE_TYPE_OPTIONS = [{
  label: '指定商品可用',
  value: couponGoodsRangeType.valid
}, {
  label: '指定商品不可用',
  value: couponGoodsRangeType.invalid
}];
var couponReceiveTimeRangeType = /*#__PURE__*/function (couponReceiveTimeRangeType) {
  couponReceiveTimeRangeType[couponReceiveTimeRangeType["unlimit"] = 0] = "unlimit";
  couponReceiveTimeRangeType[couponReceiveTimeRangeType["limit"] = 1] = "limit";
  return couponReceiveTimeRangeType;
}(couponReceiveTimeRangeType || {});
var couponUseTimeRangeType = /*#__PURE__*/function (couponUseTimeRangeType) {
  couponUseTimeRangeType[couponUseTimeRangeType["unlimit"] = 0] = "unlimit";
  couponUseTimeRangeType[couponUseTimeRangeType["timeRange"] = 1] = "timeRange";
  couponUseTimeRangeType[couponUseTimeRangeType["duration"] = 2] = "duration";
  return couponUseTimeRangeType;
}({});
var couponReceiveCountLimit = /*#__PURE__*/function (couponReceiveCountLimit) {
  couponReceiveCountLimit[couponReceiveCountLimit["total"] = 3] = "total";
  couponReceiveCountLimit[couponReceiveCountLimit["daily"] = 0] = "daily";
  couponReceiveCountLimit[couponReceiveCountLimit["weekly"] = 1] = "weekly";
  couponReceiveCountLimit[couponReceiveCountLimit["monthly"] = 2] = "monthly";
  return couponReceiveCountLimit;
}(couponReceiveCountLimit || {});
var couponReceiveCountLimitOptions = [{
  label: '累计',
  value: couponReceiveCountLimit.total
}, {
  label: '每天',
  value: couponReceiveCountLimit.daily
}, {
  label: '每周',
  value: couponReceiveCountLimit.weekly
}, {
  label: '每月',
  value: couponReceiveCountLimit.monthly
}];

/***/ }),

/***/ 9333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ CouponItemButton; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4176);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8506);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4078);
/* harmony import */ var _packages_utils_src_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3113);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6552);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _anteng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2344);
/* harmony import */ var _api_discount_coupon_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9029);









/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  props: {
    name: {
      required: true
    },
    withWrap: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    tips: {},
    button: {},
    amount: {
      type: Number,
      required: true
    },
    threshold: {
      type: Number,
      required: true
    },
    useRules: {},
    validDate: {
      type: String
    },
    validDateText: {
      type: String
    },
    scope: {
      type: Number
    },
    stamp: String,
    stampSize: {
      type: String
    }
  },
  setup: function setup(props) {
    var showRules = function showRules() {
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useModal */ .hS)({
        title: '使用说明',
        height: 'auto',
        content: function content() {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "style": {
              minHeight: '40vh'
            }
          }, [!props.useRules && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .EmptyStatus */ .yC, {
            "textOnly": true
          }, null), typeof props.useRules === 'string' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .RichText */ .sD, {
            "content": props.useRules
          }, null) : (0,_packages_utils_src_render__WEBPACK_IMPORTED_MODULE_4__/* .renderAnyNode */ .T)(props.useRules)]);
        }
      });
    };
    var validDate = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return props.validDate;
    });
    var validDateText = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      if (props.validDateText) return props.validDateText;
      if (lessThenOneDay.value) {
        if (countdownSeconds.value <= 0) return '';
        return "\u5C06\u5728 ".concat(countdownTime.value, " \u540E\u5931\u6548");
      }
      var d = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(validDate.value);
      if (d.isValid()) {
        return "\u6709\u6548\u671F\u81F3 ".concat(d.format('YYYY.MM.DD HH:mm:ss'));
      }
      return '';
    });
    var lessThenOneDay = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      if (!validDate.value) return false;
      // 小于24小时时才显示倒计时，否则显示静态的过期时间
      return dayjs__WEBPACK_IMPORTED_MODULE_5___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(validDate.value), 'h') > -24;
    });
    var _useCountdown = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useCountdown */ .L4)(validDate.value || '2099-12-31 12:00:00'),
      countdownTime = _useCountdown.countdownTime,
      countdownSeconds = _useCountdown.countdownSeconds,
      stopCountdown = _useCountdown.stopCountdown,
      resumeCountdown = _useCountdown.resumeCountdown;
    stopCountdown();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .wB)(function () {
      return lessThenOneDay.value;
    }, function () {
      if (lessThenOneDay.value) {
        resumeCountdown();
      }
    }, {
      immediate: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .onUnmounted */ .hi)(function () {
      stopCountdown();
    });
    var amount = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return (0,_anteng_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatPrice */ .$g)(props.amount);
    });
    var integer = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return amount.value.split('.')[0];
    });
    var decimal = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return amount.value.split('.')[1];
    });
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return props.disabled;
    });
    var scope = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var _COUPON_SCOPE_OPTIONS;
      return (_COUPON_SCOPE_OPTIONS = _api_discount_coupon_types__WEBPACK_IMPORTED_MODULE_7__/* .COUPON_SCOPE_OPTIONS */ .b.find(function (i) {
        return i.value === props.scope;
      })) === null || _COUPON_SCOPE_OPTIONS === void 0 ? void 0 : _COUPON_SCOPE_OPTIONS.label;
    });

    /** 门槛金额 */
    var thresholdText = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      if (props.threshold > 0) {
        return "\u6EE1 ".concat((0,_anteng_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatPrice */ .$g)(props.threshold), " \u53EF\u7528");
      } else if (props.threshold === 0) {
        return '无门槛';
      }
      return '';
    });
    var Content = function Content() {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": ['c_coupon-item', disabled.value && 'disabled']
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__main"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__amount"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__amount-content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "value-wrap"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "value number-font"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "yen"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "integer"
      }, [integer.value]), decimal.value && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "decimal"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("."), decimal.value])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "label"
      }, [thresholdText.value])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "helper",
        "onClick": (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .withModifiers */ .D$)(showRules, ['stop'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA0\u4F7F\u7528\u8BF4\u660E"), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
        "name": "right"
      }, null)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__split"
      }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__info"
      }, [props.stamp && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": ['c_coupon-item__stamp', props.stampSize]
      }, [props.stamp]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__info-content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "name max-2-rows"
      }, [(0,_packages_utils_src_render__WEBPACK_IMPORTED_MODULE_4__/* .renderAnyNode */ .T)(props.name)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "desc"
      }, [scope.value]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": ['valid', lessThenOneDay.value && 'count-down']
      }, [validDateText.value])]), props.button && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__button"
      }, [(0,_packages_utils_src_render__WEBPACK_IMPORTED_MODULE_4__/* .renderAnyNode */ .T)(props.button)])])]), props.tips && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_coupon-item__footer"
      }, [(0,_packages_utils_src_render__WEBPACK_IMPORTED_MODULE_4__/* .renderAnyNode */ .T)(props.tips)])]);
    };
    return function () {
      if (props.withWrap) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "c_coupon-item-wrap"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(Content, null, null)]);
      }
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(Content, null, null);
    };
  }
}));
var CouponItemButton = function CouponItemButton(props) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
    "class": ['c_coupon-item__common-button', props.primary && 'primary', props.centered && 'centered']
  }, [props.text]);
};

/***/ }),

/***/ 9476:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4078);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4243);




/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'c_count-stepper',
  props: {
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number
    },
    minMessage: {
      type: String
    },
    maxMessage: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  emits: {
    change: function change(value) {
      return true;
    }
  },
  setup: function setup(props, _ref) {
    var _props$value;
    var emit = _ref.emit;
    var count = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)((_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : 0);
    var minCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return (props.min > 1 ? props.min : 1) || 1;
    });
    var maxCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var _props$max;
      if (props.max && props.max < minCount.value) return minCount.value;
      return (_props$max = props.max) !== null && _props$max !== void 0 ? _props$max : null;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .wB)(function () {
      return props.value;
    }, function () {
      count.value = props.value;
    });
    var triggerChange = function triggerChange() {
      emit('change', count.value);
    };
    var onDecrease = function onDecrease() {
      var v = count.value - 1;
      if (v < minCount.value) {
        props.minMessage && (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)(props.minMessage);
        return void 0;
      }
      count.value = v;
      triggerChange();
    };
    var onIncrease = function onIncrease() {
      var v = count.value + 1;
      if (maxCount.value && v > maxCount.value) {
        props.maxMessage && (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)(props.maxMessage);
        return void 0;
      }
      count.value = v;
      triggerChange();
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": ['c_count-stepper', "c_count-stepper--".concat(props.size)]
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": ['decrease', count.value <= minCount.value && 'disabled'],
        "onClick": onDecrease
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\uFF0D")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "count"
      }, [count.value]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": ['increase', maxCount.value && count.value >= maxCount.value && 'disabled'],
        "onClick": onIncrease
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\uFF0B")])]);
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=326.js.map