"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[276],{

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

/***/ 3276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/ellipsis/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
;// ./src/packageA/coupon/list/order-item.tsx








/* harmony default export */ var order_item = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'OrderItem',
  props: {
    coupons: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    var showCardInfo = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var useableCount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.coupons.filter(function (item) {
        return item.status === constants/* COUPON_STATUS_PENDING_USE */.iV;
      }).length;
    });
    return function () {
      var _props$coupons, _COUPON_STATUS_OPTION;
      var item = (_props$coupons = props.coupons) === null || _props$coupons === void 0 ? void 0 : _props$coupons[0];
      if (!item) return null;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['coupon-order-list-item', item.status !== constants/* COUPON_STATUS_PENDING_USE */.iV && 'coupon-order-list-item-dark']
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "top-item-info",
        "onClick": function onClick() {
          return (0,router/* navigateToOrderDetail */.Er)(item.mainOrderNo);
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "left-coupon-image-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
        "class": "coupon-image",
        "mode": "aspectFill",
        "src": item.goodsImages[0]
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "right-text-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "top-text"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-name-status-container"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupon-goods-name max-2-rows"
      }, [item.goodsName]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupon-status"
      }, [item.status === constants/* COUPON_STATUS_PENDING_USE */.iV ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "go-to-use"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53BB\u4F7F\u7528")]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "unuse-div"
      }, [(_COUPON_STATUS_OPTION = constants/* COUPON_STATUS_OPTIONS */.xj.find(function (it) {
        return it.value === item.status;
      })) === null || _COUPON_STATUS_OPTION === void 0 ? void 0 : _COUPON_STATUS_OPTION.label])])]), item.cardInfo && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "cardInfo"
      }, [item.cardInfo]), useableCount.value > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "use-time"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53EF\u7528\u5238\u7801"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "h5-span color-primary"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0"), useableCount.value, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u5F20")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "expireEndAt"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6709\u6548\u671F\u81F3"), item.expireEndAt])])]), (item === null || item === void 0 ? void 0 : item.mustKnow) && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dividingLine"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "pre-arc"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "end-arc"
      }, null)]), (item === null || item === void 0 ? void 0 : item.mustKnow) && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "bottom-coupon-notice",
        "onClick": function onClick() {
          showCardInfo.value = !showCardInfo.value;
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "left-text-content"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D2D\u4E70\u987B\u77E5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "right-arrow"
      }, [showCardInfo.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "down-fill"
      }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "play"
      }, null)])]), showCardInfo.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "cardInfo must-know-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* RichText */.sD, {
        "nodes": item === null || item === void 0 ? void 0 : item.mustKnow
      }, null)])]);
    };
  }
}));
// EXTERNAL MODULE: ./src/api/coupon/index.ts
var coupon = __webpack_require__(590);
;// ./src/packageA/coupon/list/index.tsx












function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
var canBeUsed = (0,reactivity_esm_bundler/* ref */.KR)(0);
var numberOfInvalids = (0,reactivity_esm_bundler/* ref */.KR)(0);
var haveBeenUsed = (0,reactivity_esm_bundler/* ref */.KR)(0);

// 获取可使用/已失效的数量角标
var getCount = function getCount() {
  (0,coupon/* getCouponList */.BK)({
    status: "".concat(constants/* COUPON_STATUS_PENDING_USE */.iV)
  }).then(function (res) {
    canBeUsed.value = res.data.total;
  });
  (0,coupon/* getCouponList */.BK)({
    status: "".concat(constants/* COUPON_STATUS_USED */.Ag)
  }).then(function (res) {
    haveBeenUsed.value = res.data.total;
  });
  (0,coupon/* getCouponList */.BK)({
    status: "".concat(constants/* COUPON_STATUS_EXPIRED */.Qr, ",").concat(constants/* COUPON_STATUS_CANCELED */.Mb)
  }).then(function (res) {
    numberOfInvalids.value = res.data.total;
  });
};
var tabs = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
  return [{
    title: '可使用' + "(".concat(canBeUsed.value, ")"),
    value: "".concat(constants/* COUPON_STATUS_PENDING_USE */.iV),
    loaded: true
  }, {
    title: '已使用' + "(".concat(haveBeenUsed.value, ")"),
    value: "".concat(constants/* COUPON_STATUS_USED */.Ag),
    loaded: true
  }, {
    title: '已失效' + "(".concat(numberOfInvalids.value, ")"),
    value: "".concat(constants/* COUPON_STATUS_EXPIRED */.Qr, ",").concat(constants/* COUPON_STATUS_CANCELED */.Mb),
    loaded: false
  }];
});
/* harmony default export */ var list = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'OrderListPage',
  setup: function setup() {
    var appStore = (0,lib/* useAppStore */.CU)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(appStore),
      commonPageHeightStyle = _storeToRefs.commonPageHeightStyle;
    var userStore = (0,lib/* useUserStore */.kH)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(userStore),
      isLogin = _storeToRefs2.isLogin;
    var currentIndex = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var toggleTab = function toggleTab(type) {
      tabs.value.map(function (it, index) {
        if (it.value === type) {
          it.loaded = true;
          currentIndex.value = index;
        } else {
          it.loaded = false;
        }
      });
    };
    var init = function init() {
      toggleTab("".concat(constants/* COUPON_STATUS_PENDING_USE */.iV));
      getCount();
    };
    init();
    return function () {
      var _slot;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          title: '我的卡券'
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coupon-order-list-page",
            "style": commonPageHeightStyle.value
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coupon-order-list__tab"
          }, [tabs.value.map(function (item, index) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['coupon-order-list__tab-item', index == currentIndex.value && 'active'],
              "onClick": function onClick() {
                return toggleTab(item.value);
              }
            }, [item.title]);
          })]), !isLogin.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
            "type": "login"
          }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "coupon-order-list__content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Swiper */.RC, {
            "class": "swiper",
            "current": currentIndex.value,
            "onChange": function onChange(e) {
              toggleTab(tabs.value[e.detail.current].value);
            }
          }, _isSlot(_slot = tabs.value.map(function (item) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* SwiperItem */.wu, {
              "key": item.value,
              "class": "swiper-item"
            }, {
              default: function _default() {
                return [item.loaded ? (0,runtime_core_esm_bundler/* createVNode */.bF)(OrderList, {
                  "status": item.value
                }, null) : null];
              }
            });
          })) ? _slot : {
            default: function _default() {
              return [_slot];
            }
          })])])];
        }
      });
    };
  }
}));
var OrderList = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    status: {
      type: String,
      default: '1'
    }
  },
  setup: function setup(props) {
    var pagination = (0,lib/* usePagination */.WQ)({
      dataIndex: 'id',
      requestHandler: function requestHandler(params) {
        return (0,coupon/* getCouponList */.BK)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, params), {}, {
          size: 20,
          descs: 'create_time',
          status: props.status
        }));
      },
      customEmpty: function customEmpty() {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
          "title": "\u7A7A\u7A7A\u5982\u4E5F",
          "description": "\u627E\u4E0D\u5230\u76F8\u5173\u8BA2\u5355"
        }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "button-limted"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Button */.$n, {
          "class": "buy-button",
          "onClick": function onClick() {
            return (0,router/* backToIndex */.t2)('home', true);
          }
        }, {
          default: function _default() {
            return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53BB\u8D2D\u4E70")];
          }
        })])]);
      }
    });
    var fetchData = pagination.fetchData,
      listRef = pagination.data,
      refresherTriggered = pagination.refresherTriggered,
      refreshData = pagination.refreshData,
      EndTip = pagination.EndTip,
      Empty = pagination.Empty,
      Loading = pagination.Loading,
      ErrorStatus = pagination.ErrorStatus;
    var renderList = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      // 使用 Map 对 `mainOrderNo` 进行分组
      var orderMap = new Map();
      listRef.value.forEach(function (order) {
        var _ref = order,
          mainOrderNo = _ref.mainOrderNo;
        if (!orderMap.has(mainOrderNo)) {
          orderMap.set(mainOrderNo, [order]);
        } else {
          var _orderMap$get;
          (_orderMap$get = orderMap.get(mainOrderNo)) === null || _orderMap$get === void 0 || _orderMap$get.push(order);
        }
      });

      // 根据分组情况返回结果
      var result = [];
      orderMap.forEach(function (groupedOrders) {
        result.push(groupedOrders);
      });
      return result;
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      fetchData();
    });
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
        "class": "scroller",
        "refresherBackground": "transparent",
        "scrollY": true,
        "refresherEnabled": true,
        "refresherTriggered": refresherTriggered.value,
        "onRefresherrefresh": function onRefresherrefresh() {
          return refreshData();
        },
        "onScrolltolower": fetchData
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "sub-page"
          }, [renderList.value.map(function (coupons) {
            var _coupons$;
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(order_item, {
              "key": (_coupons$ = coupons[0]) === null || _coupons$ === void 0 ? void 0 : _coupons$.mainOrderNo,
              "coupons": coupons
            }, null);
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(ErrorStatus, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Loading, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Empty, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(EndTip, null, null)])];
        }
      });
    };
  }
});

/***/ })

}]);
//# sourceMappingURL=276.js.map