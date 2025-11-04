"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[917],{

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
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 20 modules
var src = __webpack_require__(5788);
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
// EXTERNAL MODULE: ./src/utils/index.tsx + 4 modules
var utils = __webpack_require__(4569);
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
;// ./src/packageMain/tab-pages/profile/index.tsx








// import Assets from './assets'








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
    var _storeToRefs4 = (0,pinia/* storeToRefs */.bP)(discountCouponStore),
      discountCouponCounts = _storeToRefs4.discountCouponCounts;
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
        "onClick": router/* navigateToSettings */.Ox
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("img", {
        "class": "user-avatar",
        "src": user.value.avatar || config/* DEFAULT_AVATAR */.k_,
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

/***/ 9917:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4078);
/* harmony import */ var _tab_pages_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4552);




/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: '',
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .BasePage */ .vo, {
        "navigator": {
          title: '',
          showMenuButton: false,
          navigationBarBackgroundColor: 'transparent',
          navigatorStyle: 'immersive'
        }
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tab_pages_profile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, null)];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=917.js.map