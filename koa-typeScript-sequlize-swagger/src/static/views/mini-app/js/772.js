"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[772],{

/***/ 2304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ triggerOrderItemRefresh; },
/* harmony export */   k: function() { return /* binding */ EMITTER_ORDER_REFRESH; }
/* harmony export */ });
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4078);

var EMITTER_ORDER_REFRESH = Symbol('EMITTER_ORDER_ITEM_REFRESH');

/** 触发订单数据刷新，一般用于对订单进行操作后，刷新订单数据 */
var triggerOrderItemRefresh = function triggerOrderItemRefresh(orderId) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  setTimeout(function () {
    _anteng_core__WEBPACK_IMPORTED_MODULE_0__/* .emitter */ .PD.trigger(EMITTER_ORDER_REFRESH, orderId);
  }, delay);
};

/***/ }),

/***/ 2772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ./src/api/order/index.ts
var order = __webpack_require__(1004);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-dom@3.5.22/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8506);
// EXTERNAL MODULE: ./src/components/goods-item/index.tsx
var goods_item = __webpack_require__(9788);
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/stores/merchant.ts + 1 modules
var merchant = __webpack_require__(9181);
// EXTERNAL MODULE: ./src/utils/emitter.ts
var emitter = __webpack_require__(2304);
// EXTERNAL MODULE: ./src/stores/orderStore.ts
var stores_orderStore = __webpack_require__(4670);
// EXTERNAL MODULE: ./src/packageA/order/after-sale/useAfterSale/index.tsx
var useAfterSale = __webpack_require__(5223);
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
;// ./src/packageA/order/list/order-item.tsx












/* harmony default export */ var order_item = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'OrderItem',
  props: {
    orderDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var merchantStore = (0,merchant/* default */.A)();
    var orderStore = (0,stores_orderStore/* default */.A)();

    // 付款截止时间
    var paymentEndTime = merchantStore.calcPaymentEndTime(props.orderDetail.createTime);
    var _useCountdown = (0,lib/* useCountdown */.L4)(paymentEndTime),
      countdownSeconds = _useCountdown.countdownSeconds,
      countdownTime = _useCountdown.countdownTime;
    var statusText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      // 不为实物商品且状态为 待收货 时,展示已发放文字
      if (commodityType.value !== 0 && props.orderDetail.status === constants/* ORDER_STATUS_PENDING_DELIVERY */.BX) {
        return '已发放';
      } else {
        var _ORDER_STATUS_OPTIONS;
        return (_ORDER_STATUS_OPTIONS = (0,constants/* ORDER_STATUS_OPTIONS */.Q_)().find(function (item) {
          return item.value === props.orderDetail.status;
        })) === null || _ORDER_STATUS_OPTIONS === void 0 ? void 0 : _ORDER_STATUS_OPTIONS.label;
      }
    });

    // 商品类型,下面只有商品类型为实物商品才显示确认收货
    var commodityType = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _orderDetail$subOrder;
      var orderDetail = props.orderDetail;
      return (_orderDetail$subOrder = orderDetail.subOrders[0]) === null || _orderDetail$subOrder === void 0 ? void 0 : _orderDetail$subOrder.type;
    });
    var toDetail = function toDetail() {
      (0,router/* navigateToOrderDetail */.Er)(props.orderDetail.orderNo);
    };
    var toPay = function toPay() {
      var _props$orderDetail = props.orderDetail,
        id = _props$orderDetail.id,
        orderNo = _props$orderDetail.orderNo,
        unifiedOrderNo = _props$orderDetail.unifiedOrderNo;
      (0,lib/* usePay */.EO)(unifiedOrderNo, {
        complete: function complete() {
          // 触发刷新
          (0,emitter/* triggerOrderItemRefresh */.b)(id);
          (0,router/* navigateToPayResult */.ks)({
            orderNo: orderNo,
            unifyOrderNo: unifiedOrderNo
          });
        }
      });
    };

    /** 取消订单 */
    var onCancel = function onCancel() {
      return orderStore.cancelOrder(props.orderDetail.id);
    };

    /** 确认收货 */
    var toComplete = function toComplete() {
      var _props$orderDetail$up;
      if (!((_props$orderDetail$up = props.orderDetail.uploadShippingInfo) !== null && _props$orderDetail$up !== void 0 && _props$orderDetail$up.needUpload)) {
        return orderStore.completeOrderSkipWechat(props.orderDetail.id);
      }
      return orderStore.completeOrder(props.orderDetail.id, props.orderDetail.uploadShippingInfo.transactionId);
    };
    var actions = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var status = props.orderDetail.status;
      if (status === constants/* ORDER_PAYMENT_STATUS_PENDING */.xU && countdownSeconds.value > 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "order-item__footer"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "pay-count-down"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u652F\u4ED8\u5269\u4F59\uFF1A"), countdownTime.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "order-item__action",
          "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(onCancel, ['stop'])
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53D6\u6D88\u8BA2\u5355")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "order-item__action primary",
          "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(toPay, ['stop'])
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u652F\u4ED8")])]);
      }
      if (status === constants/* ORDER_STATUS_PENDING_DELIVERY */.BX && constants/* GOODS_TYPE_ENTITY */.i4 === commodityType.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "order-item__footer"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "order-item__action primary",
          "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(toComplete, ['stop'])
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u786E\u8BA4\u6536\u8D27")])]);
      }

      // if (status !== ORDER_STATUS_CLOSED && status !== ORDER_STATUS_CANCELLED) {
      //   return (
      //     <div class="order-item__footer">
      //       <AfterSale />
      //     </div>
      //   )
      // }

      return null;
    });
    var handleAfterSale = function handleAfterSale() {
      (0,useAfterSale/* default */.A)({
        mainOrderNo: props.orderDetail.orderNo
      });
    };
    var AfterSale = function AfterSale() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__action",
        "onClick": handleAfterSale
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7533\u8BF7\u552E\u540E")]);
    };
    var balanceAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _props$orderDetail$pa;
      var v = (_props$orderDetail$pa = props.orderDetail.paymentChannelInfos) === null || _props$orderDetail$pa === void 0 || (_props$orderDetail$pa = _props$orderDetail$pa.find(function (item) {
        return item.paymentChannel === config/* PAYMENT_CHANNEL_BALANCE */.AU;
      })) === null || _props$orderDetail$pa === void 0 ? void 0 : _props$orderDetail$pa.totalAmount;
      return v > 0 ? v : 0;
    });
    var payAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return ((props.orderDetail.payAmount - balanceAmount.value) / 100).toFixed(2);
    });
    return function () {
      if (!props.orderDetail) return null;
      var _props$orderDetail2 = props.orderDetail,
        orderNo = _props$orderDetail2.orderNo,
        _props$orderDetail2$s = _props$orderDetail2.subOrders,
        subOrders = _props$orderDetail2$s === void 0 ? [] : _props$orderDetail2$s,
        freightAmount = _props$orderDetail2.freightAmount,
        status = _props$orderDetail2.status,
        payStatus = _props$orderDetail2.payStatus;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-list-item",
        "onClick": toDetail
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__header"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__id"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BA2\u5355\u53F7\uFF1A"), orderNo]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__status"
      }, [statusText.value])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__goods"
      }, [subOrders.map(function (item) {
        var _item$goodsStockSnaps, _item$goodsStockSnaps2, _item$coverImages, _item$goodsStockSnaps3;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
          "type": "horizontal",
          "image": (_item$goodsStockSnaps = (_item$goodsStockSnaps2 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2.specs) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2[0]) === null || _item$goodsStockSnaps2 === void 0 ? void 0 : _item$goodsStockSnaps2.image) !== null && _item$goodsStockSnaps !== void 0 ? _item$goodsStockSnaps : (_item$coverImages = item.coverImages) === null || _item$coverImages === void 0 ? void 0 : _item$coverImages[0],
          "name": item.goodsName,
          "desc": (_item$goodsStockSnaps3 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps3 === void 0 || (_item$goodsStockSnaps3 = _item$goodsStockSnaps3.specs) === null || _item$goodsStockSnaps3 === void 0 ? void 0 : _item$goodsStockSnaps3.map(function (spec) {
            return spec.v;
          }).join('／'),
          "price": item.amountText,
          "action": (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "number-font"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xD7 "), item.count])
        }, null);
      })]), status !== constants/* ORDER_STATUS_CLOSED */.TI && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__payment"
      }, [freightAmount > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__freight number-font"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u542B\u8FD0\u8D39\xA5"), (0,utils/* formatPrice */.$g)(freightAmount / 100)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__amount number-font"
      }, [payStatus === constants/* COMMON_STATUS_ON */.lQ ? '实付款' : '应付款', (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "yen"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \xA5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "value"
      }, [payAmount.value])])]), actions.value]);
    };
  }
}));
;// ./src/packageA/order/list/after-sale-item.tsx


// import './after-sale-item.scss'



/* harmony default export */ var after_sale_item = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'OrderItem',
  props: {
    orderDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var statusText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _ORDER_AFTER_SALES_ST;
      return (_ORDER_AFTER_SALES_ST = constants/* ORDER_AFTER_SALES_STATUS_OPTIONS */.$p.find(function (item) {
        return item.value === props.orderDetail.status;
      })) === null || _ORDER_AFTER_SALES_ST === void 0 ? void 0 : _ORDER_AFTER_SALES_ST.label;
    });
    var toDetail = function toDetail() {
      (0,router/* navigateToAfterSaleResult */.nb)(props.orderDetail.afterSaleOrderNo);
    };
    var actions = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__footer"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__action"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u67E5\u770B\u8FDB\u5EA6")])]);
    });
    return function () {
      if (!props.orderDetail) return null;
      var _props$orderDetail = props.orderDetail,
        afterSaleOrderNo = _props$orderDetail.afterSaleOrderNo,
        freightAmount = _props$orderDetail.freightAmount,
        payAmountText = _props$orderDetail.payAmountText,
        status = _props$orderDetail.status,
        payStatus = _props$orderDetail.payStatus,
        amount = _props$orderDetail.amount;
      var subOrders = [props.orderDetail.subOrder];
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-list-item",
        "onClick": toDetail
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__header"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__id"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u5355\u53F7\uFF1A"), afterSaleOrderNo]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__status"
      }, [statusText.value])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-item__goods"
      }, [subOrders.map(function (item) {
        var _item$goodsStockSnaps, _item$goodsStockSnaps2, _item$coverImages, _item$goodsStockSnaps3;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
          "type": "horizontal",
          "image": (_item$goodsStockSnaps = (_item$goodsStockSnaps2 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2.specs) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2[0]) === null || _item$goodsStockSnaps2 === void 0 ? void 0 : _item$goodsStockSnaps2.image) !== null && _item$goodsStockSnaps !== void 0 ? _item$goodsStockSnaps : (_item$coverImages = item.coverImages) === null || _item$coverImages === void 0 ? void 0 : _item$coverImages[0],
          "name": item.goodsName,
          "desc": (_item$goodsStockSnaps3 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps3 === void 0 || (_item$goodsStockSnaps3 = _item$goodsStockSnaps3.specs) === null || _item$goodsStockSnaps3 === void 0 ? void 0 : _item$goodsStockSnaps3.map(function (spec) {
            return spec.v;
          }).join('／'),
          "price": item.amountText,
          "action": (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "number-font"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xD7 "), item.count])
        }, null);
      })]), actions.value]);
    };
  }
}));
;// ./src/packageA/order/list/index.tsx












function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var list = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'OrderListPage',
  setup: function setup() {
    var appStore = (0,lib/* useAppStore */.CU)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(appStore),
      commonPageHeightStyle = _storeToRefs.commonPageHeightStyle;
    var userStore = (0,lib/* useUserStore */.kH)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(userStore),
      isLogin = _storeToRefs2.isLogin;
    var enterType = taro/* default.useRouter */.Ay.useRouter().params.type;
    var tabs = (0,reactivity_esm_bundler/* ref */.KR)([{
      title: '全部',
      value: undefined,
      loaded: false
    }, {
      title: '待付款',
      value: 1,
      loaded: false
    }, {
      title: '待发货',
      value: 2,
      loaded: false
    }, {
      title: '待收货',
      value: 3,
      loaded: false
    }, {
      title: '退款／售后',
      value: 4,
      loaded: false
    }]);
    var currentType = (0,reactivity_esm_bundler/* ref */.KR)(enterType);
    var currentIndex = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return tabs.value.findIndex(function (item) {
        return item.value == currentType.value;
      });
    });
    var _toggleTab = function toggleTab(type) {
      if (!isLogin.value) return void 0;
      var target = tabs.value.find(function (item) {
        return item.value == type;
      });
      if (!target) {
        _toggleTab(tabs.value[0].value);
        return void 0;
      }
      currentType.value = type;
      target.loaded = true;
    };
    _toggleTab(enterType);
    return function () {
      var _slot;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          title: '订单列表'
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-list-page",
            "style": commonPageHeightStyle.value
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-list__tab"
          }, [tabs.value.map(function (item) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['order-list__tab-item', item.value == currentType.value && 'active'],
              "onClick": function onClick() {
                _toggleTab(item.value);
              }
            }, [item.title]);
          })]), !isLogin.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
            "type": "login"
          }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-list__content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Swiper */.RC, {
            "class": "swiper",
            "current": currentIndex.value,
            "onChange": function onChange(e) {
              _toggleTab(e.detail.current);
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
    status: {}
  },
  setup: function setup(props) {
    var pagination = (0,lib/* usePagination */.WQ)({
      dataIndex: 'id',
      requestHandler: function requestHandler(params) {
        if (props.status === 4) return (0,order/* $getAfterSaleOrders */.jq)(params);
        return (0,order/* getOrderList */.n7)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, params), {}, {
          tabStatus: props.status
        }));
      },
      customEmpty: function customEmpty() {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
          "title": "\u7A7A\u7A7A\u5982\u4E5F",
          "description": "\u627E\u4E0D\u5230\u76F8\u5173\u8BA2\u5355"
        }, null);
      }
    });
    var fetchData = pagination.fetchData,
      listRef = pagination.data,
      refreshDataItem = pagination.refreshDataItem,
      refresherTriggered = pagination.refresherTriggered,
      refreshData = pagination.refreshData,
      EndTip = pagination.EndTip,
      Empty = pagination.Empty,
      Loading = pagination.Loading,
      ErrorStatus = pagination.ErrorStatus;
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      fetchData();
    });

    /** 刷新单个订单子项 */
    var onRefreshOrderItem = function onRefreshOrderItem(orderId) {
      refreshDataItem(orderId);
    };
    // 监听其他页面触发的刷新单个订单子项事件
    lib/* emitter */.PD.on(emitter/* EMITTER_ORDER_REFRESH */.k, onRefreshOrderItem);
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(function () {
      lib/* emitter */.PD.off(emitter/* EMITTER_ORDER_REFRESH */.k, onRefreshOrderItem);
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
          }, [listRef.value.map(function (item) {
            return props.status === 4 ? (0,runtime_core_esm_bundler/* createVNode */.bF)(after_sale_item, {
              "key": item.id,
              "orderDetail": item
            }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(order_item, {
              "key": item.id,
              "orderDetail": item
            }, null);
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(ErrorStatus, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Loading, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Empty, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(EndTip, null, null)])];
        }
      });
    };
  }
});

/***/ }),

/***/ 4670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8831);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7420);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9700);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5816);
/* harmony import */ var _utils_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2304);







var useOrderStore = (0,pinia__WEBPACK_IMPORTED_MODULE_3__/* .defineStore */ .nY)('order', function () {
  /**
   * 刷新单条订单数据，适用于发生操作后订单状态变更
   * @param id - 主订单ID
   */
  var refreshOrderItem = function refreshOrderItem(id) {
    (0,_utils_emitter__WEBPACK_IMPORTED_MODULE_5__/* .triggerOrderItemRefresh */ .b)(id);
  };

  /**
   * 取消订单
   * @param id - 主订单ID
   */
  var cancelOrder = function cancelOrder(id) {
    (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useConfirm */ .zf)({
      title: '操作提示',
      content: '确定要取消订单吗？',
      cancelText: '暂不取消',
      confirmText: '确定取消',
      onConfirm: function onConfirm() {
        (0,_api__WEBPACK_IMPORTED_MODULE_4__/* .cancelPaymentPendingOrder */ .mH)(id).then(function (res) {
          if (res.code === 200) {
            (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useResponseMessage */ .Cd)(res);
            // 触发刷新
            (0,_utils_emitter__WEBPACK_IMPORTED_MODULE_5__/* .triggerOrderItemRefresh */ .b)(id);
          } else {
            (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useResponseMessage */ .Cd)(res);
          }
        }).catch(_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useResponseMessage */ .Cd);
      }
    });
  };

  /**
   * 确认收货
   * @param id - 主订单ID
   */
  var completeOrder = function completeOrder(id, transaction_id) {
    if (false) // removed by dead control flow
{} else {
      completeOrderSkipWechat(id);
    }
  };
  var completeOrderSkipWechat = function completeOrderSkipWechat(id) {
    (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useConfirm */ .zf)({
      title: '确认收货',
      content: '请确认已收到商品并检查无误',
      onConfirm: function onConfirm() {
        _completeOrder(id, 'h5');
      }
    });
  };
  var _completeOrder = /*#__PURE__*/function () {
    var _ref = (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().m(function _callee(id, platform) {
      var res, _t;
      return (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useLoading */ .M3)();
            _context.p = 1;
            _context.n = 2;
            return (0,_api__WEBPACK_IMPORTED_MODULE_4__/* .requestCompleteOrder */ .vc)(id, platform);
          case 2:
            res = _context.v;
            console.log(res);
            if (platform === 'h5') {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useResponseMessage */ .Cd)(res);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.log(_t);
            if (platform === 'h5') {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useResponseMessage */ .Cd)(_t);
            }
          case 4:
            _context.p = 4;
            refreshOrderItem(id);
            return _context.f(4);
          case 5:
            (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useLoadingEnd */ .dA)();
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function _completeOrder(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    refreshOrderItem: refreshOrderItem,
    cancelOrder: cancelOrder,
    completeOrder: completeOrder,
    completeOrderSkipWechat: completeOrderSkipWechat
  };
});
/* harmony default export */ __webpack_exports__.A = (useOrderStore);

/***/ }),

/***/ 5223:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8831);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7420);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4078);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4243);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8506);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5816);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4176);
/* harmony import */ var _components_goods_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9788);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6618);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3058);
/* harmony import */ var _stores_merchant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9181);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9700);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7468);















function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .isVNode */ .vv)(s);
}
var AFTER_SALE_TYPE_REFUND = 2;
var AFTER_SALE_TYPE_REFUND_ONLY = 1;
var AFTER_SALE_TYPE_OPTIONS = [{
  label: '退货退款',
  value: AFTER_SALE_TYPE_REFUND
}, {
  label: '仅退款',
  value: AFTER_SALE_TYPE_REFUND_ONLY
}];
/** 申请售后 */
var useAfterSale = /*#__PURE__*/function () {
  var _ref = (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(/*#__PURE__*/(0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().m(function _callee(options) {
    var mainOrderNo, orderDetailRef, res, modal, step, steps, ModalTitle, toggleStep1, toggleStep2, type, MULTIPLE, checkedOrders, checkOrder, typeOptions, ChooseTypeAndGoods, checkedReasons, ChooseReason, _t;
    return (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          mainOrderNo = options.mainOrderNo;
          if (mainOrderNo) {
            _context.n = 1;
            break;
          }
          return _context.a(2, (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useToast */ .dj)('主订单号缺失'));
        case 1:
          orderDetailRef = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .KR)();
          _context.p = 2;
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useLoading */ .M3)();
          _context.n = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .getGoodsOrderDetail */ .aG)(mainOrderNo);
        case 3:
          res = _context.v;
          if (!(res.code === 200)) {
            _context.n = 4;
            break;
          }
          orderDetailRef.value = res.data;
          _context.n = 5;
          break;
        case 4:
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useResponseMessage */ .Cd)(res);
          return _context.a(2, Promise.reject(new Error(res.msg)));
        case 5:
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useResponseMessage */ .Cd)(_t);
          return _context.a(2, Promise.reject(_t));
        case 7:
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useLoadingEnd */ .dA)();
          modal = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useModal */ .hS)({
            title: function title() {
              return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(ModalTitle, null, null);
            },
            content: function content() {
              return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(ChooseTypeAndGoods, null, null);
            },
            height: 600,
            scrollViewDisabled: true,
            padding: 0
          });
          step = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .KR)(0);
          steps = ['选择商品', '选择原因', '确认信息'];
          ModalTitle = function ModalTitle() {
            return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
              "class": "after-sale-step-title"
            }, [steps.map(function (text, index, arr) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_1__/* .Fragment */ .FK, null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("span", {
                "class": ['label', step.value === index ? 'active' : step.value > index ? 'fulfill' : null]
              }, [text]), index < arr.length - 1 && (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_7__/* .Icon */ .In, {
                "name": "flow-arrow",
                "class": step.value > index && 'fulfill'
              }, null)]);
            })]);
          };
          /** 切换到步骤1 */
          toggleStep1 = function toggleStep1() {
            step.value = 0;
            modal.update({
              content: function content() {
                return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(ChooseTypeAndGoods, null, null);
              },
              height: 600
            });
          };
          /** 切换到步骤2 */
          toggleStep2 = function toggleStep2() {
            step.value = 1;
            (0,_stores_merchant__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)().getMerchantOrderFlow();
            modal.update({
              content: function content() {
                return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(ChooseReason, null, null);
              },
              height: 600
            });
          };
          type = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .KR)(AFTER_SALE_TYPE_REFUND);
          /** 是否允许多选 */
          MULTIPLE = false;
          checkedOrders = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .KR)(options.orderNo ? [options.orderNo] : []);
          checkOrder = function checkOrder(order) {
            if (order.afterSaleOrderNo) {
              (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useToast */ .dj)('该订单已在售后流程中');
              return void 0;
            }
            var index = checkedOrders.value.indexOf(order.orderNo);
            if (index !== -1) {
              checkedOrders.value.splice(index, 1);
            } else {
              if (MULTIPLE) {
                checkedOrders.value.push(order.orderNo);
              } else {
                checkedOrders.value = [order.orderNo];
              }
            }
          };
          typeOptions = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .computed */ .EW)(function () {
            var _orderDetailRef$value;
            var target = (_orderDetailRef$value = orderDetailRef.value) === null || _orderDetailRef$value === void 0 ? void 0 : _orderDetailRef$value.subOrders.find(function (item) {
              return item.orderNo === checkedOrders.value[0];
            });
            if ((target === null || target === void 0 ? void 0 : target.type) === _constants__WEBPACK_IMPORTED_MODULE_13__/* .GOODS_TYPE_ENTITY */ .i4) {
              // 未发货时，只可仅退款
              if (target.status === _constants__WEBPACK_IMPORTED_MODULE_13__/* .SUB_ORDER_STATUS_PENDING_SHIPMENT */ .MT) {
                return [AFTER_SALE_TYPE_OPTIONS[1]];
              }

              // 实物订单才可退货退款
              return AFTER_SALE_TYPE_OPTIONS;
            }
            return [AFTER_SALE_TYPE_OPTIONS[1]];
          });
          (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .wB)(function () {
            return typeOptions.value;
          }, function () {
            var _typeOptions$value;
            type.value = (_typeOptions$value = typeOptions.value) === null || _typeOptions$value === void 0 ? void 0 : _typeOptions$value[0].value;
          }, {
            immediate: true
          });
          ChooseTypeAndGoods = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .defineComponent */ .pM)({
            setup: function setup(props) {
              return function () {
                var _orderDetailRef$value2;
                return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "after-sale-step-1"
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__/* .ScrollView */ .BM, {
                  "class": "goods-scroller scroll-view",
                  "scrollY": true
                }, {
                  default: function _default() {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                      "class": "goods-list"
                    }, [(_orderDetailRef$value2 = orderDetailRef.value) === null || _orderDetailRef$value2 === void 0 ? void 0 : _orderDetailRef$value2.subOrders.map(function (item) {
                      var _item$goodsStockSnaps, _item$goodsStockSnaps2, _item$goodsSnapshot;
                      var price = Number(item.payAmountText) / item.count || item.payAmountText;
                      return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                        "class": "goods",
                        "onClick": function onClick() {
                          checkOrder(item);
                        }
                      }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_7__/* .Radio */ .sx, {
                        "checked": checkedOrders.value.includes(item.orderNo)
                      }, null), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_components_goods_item__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                        "type": "horizontal",
                        "image": (_item$goodsStockSnaps = (_item$goodsStockSnaps2 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2.specs) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2[0]) === null || _item$goodsStockSnaps2 === void 0 ? void 0 : _item$goodsStockSnaps2.image) !== null && _item$goodsStockSnaps !== void 0 ? _item$goodsStockSnaps : (_item$goodsSnapshot = item.goodsSnapshot) === null || _item$goodsSnapshot === void 0 || (_item$goodsSnapshot = _item$goodsSnapshot.coverImages) === null || _item$goodsSnapshot === void 0 ? void 0 : _item$goodsSnapshot[0],
                        "name": item.goodsName,
                        "price": price,
                        "desc": item.goodsStockSnapshot.specs.map(function (spec) {
                          return spec.v;
                        }).join('／'),
                        "action": (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                          "class": "order-detail__goods-count"
                        }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createTextVNode */ .eW)("\xD7 "), item.count])
                      }, null), item.afterSaleOrderNo && (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                        "class": "goods-af-exist",
                        "onClick": (0,vue__WEBPACK_IMPORTED_MODULE_5__/* .withModifiers */ .D$)(function () {
                          (0,_router__WEBPACK_IMPORTED_MODULE_10__/* .navigateToAfterSaleResult */ .nb)(item.afterSaleOrderNo);
                        }, ['stop'])
                      }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createTextVNode */ .eW)("\u8BE5\u8BA2\u5355\u5DF2\u5B58\u5728\u552E\u540E\u7533\u8BF7\u8BB0\u5F55\uFF0C\u67E5\u770B\u552E\u540E\u8FDB\u5EA6"), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_7__/* .Icon */ .In, {
                        "name": "right"
                      }, null)])]);
                    })])];
                  }
                }), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "choose-type"
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "title"
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createTextVNode */ .eW)("\u9009\u62E9\u552E\u540E\u7C7B\u578B")]), typeOptions.value.map(function (item) {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                    "class": ['type', item.value === type.value && 'active'],
                    "onClick": function onClick() {
                      type.value = item.value;
                    }
                  }, [item.label]);
                })]), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "after-sale-step-actions-placeholder"
                }, null), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "after-sale-step-actions"
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "action",
                  "onClick": function onClick() {
                    modal.close();
                  }
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createTextVNode */ .eW)("\u53D6\u6D88")]), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "action primary",
                  "onClick": function onClick() {
                    if (checkedOrders.value.length === 0) {
                      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useToast */ .dj)('请选择商品');
                      return void 0;
                    }
                    toggleStep2();
                  }
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createTextVNode */ .eW)("\u4E0B\u4E00\u6B65")])])]);
              };
            }
          });
          checkedReasons = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .KR)([]);
          ChooseReason = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .defineComponent */ .pM)({
            setup: function setup() {
              var merchantStore = (0,_stores_merchant__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)();
              var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_12__/* .storeToRefs */ .bP)(merchantStore),
                reasonOptions = _storeToRefs.reasonOptions;
              checkedReasons.value = [];
              var orders = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .computed */ .EW)(function () {
                var _orderDetailRef$value3;
                return (_orderDetailRef$value3 = orderDetailRef.value) === null || _orderDetailRef$value3 === void 0 ? void 0 : _orderDetailRef$value3.subOrders.filter(function (item) {
                  return checkedOrders.value.includes(item.orderNo);
                });
              });
              var current = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .KR)(0);
              var handleNext = function handleNext() {
                var index = checkedOrders.value.findIndex(function (item, index) {
                  return !checkedReasons.value[index];
                });
                if (index !== -1) {
                  current.value = index;
                  (0,_anteng_core__WEBPACK_IMPORTED_MODULE_3__/* .useToast */ .dj)('请选择原因');
                } else {
                  modal.close();
                  (0,_router__WEBPACK_IMPORTED_MODULE_10__/* .navigateToAfterSale */ .Wm)({
                    mainOrderNo: orderDetailRef.value.orderNo,
                    type: type.value,
                    orders: checkedOrders.value.map(function (item, index) {
                      return {
                        orderNo: item,
                        reason: checkedReasons.value[index]
                      };
                    })
                  });
                }
              };
              var onCheckReason = function onCheckReason(text) {
                checkedReasons.value[current.value] = text;
                var index = checkedOrders.value.findIndex(function (item, index) {
                  return !checkedReasons.value[index];
                });
                if (index !== -1) {
                  setTimeout(function () {
                    current.value = index;
                  }, 300);
                }
              };
              return function () {
                var _slot;
                var _orders$value, _orders$value2;
                return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "after-sale-step-2"
                }, [((_orders$value = orders.value) === null || _orders$value === void 0 ? void 0 : _orders$value.length) > 1 && (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "orders"
                }, [(_orders$value2 = orders.value) === null || _orders$value2 === void 0 ? void 0 : _orders$value2.map(function (item, index) {
                  var _item$goodsStockSnaps3, _item$goodsStockSnaps4, _item$goodsSnapshot2;
                  var img = (_item$goodsStockSnaps3 = (_item$goodsStockSnaps4 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps4 === void 0 || (_item$goodsStockSnaps4 = _item$goodsStockSnaps4[0]) === null || _item$goodsStockSnaps4 === void 0 ? void 0 : _item$goodsStockSnaps4.image) !== null && _item$goodsStockSnaps3 !== void 0 ? _item$goodsStockSnaps3 : (_item$goodsSnapshot2 = item.goodsSnapshot) === null || _item$goodsSnapshot2 === void 0 || (_item$goodsSnapshot2 = _item$goodsSnapshot2.coverImages) === null || _item$goodsSnapshot2 === void 0 ? void 0 : _item$goodsSnapshot2[0];
                  return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                    "class": ['order-item', index === current.value && 'active'],
                    "onClick": function onClick() {
                      current.value = index;
                    }
                  }, [img && (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__/* .Image */ ._V, {
                    "class": "image",
                    "mode": "aspectFill",
                    "src": img
                  }, null), checkedReasons.value[index] && (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_7__/* .Icon */ .In, {
                    "class": "ok",
                    "name": "check-fill"
                  }, null)]);
                })]), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__/* .Swiper */ .RC, {
                  "class": "reason-swiper",
                  "current": current.value,
                  "onChange": function onChange(e) {
                    current.value = e.detail.current;
                  }
                }, _isSlot(_slot = checkedOrders.value.map(function (item, index) {
                  var currentReason = checkedReasons.value[index];
                  return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__/* .SwiperItem */ .wu, null, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__/* .ScrollView */ .BM, {
                        "class": "reasons-scroller",
                        "scrollY": true
                      }, {
                        default: function _default() {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                            "class": "reasons"
                          }, [reasonOptions.value.map(function (text) {
                            return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                              "class": "reason-item",
                              "onClick": function onClick() {
                                onCheckReason(text);
                              }
                            }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_7__/* .Radio */ .sx, {
                              "checked": text === currentReason
                            }, null), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                              "class": "text"
                            }, [text])]);
                          })])];
                        }
                      })];
                    }
                  });
                })) ? _slot : {
                  default: function _default() {
                    return [_slot];
                  }
                }), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "after-sale-step-actions-placeholder"
                }, null), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "after-sale-step-actions"
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "action",
                  "onClick": function onClick() {
                    toggleStep1();
                  }
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createTextVNode */ .eW)("\u4E0A\u4E00\u6B65")]), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "action primary",
                  "onClick": handleNext
                }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createTextVNode */ .eW)("\u4E0B\u4E00\u6B65")])])]);
              };
            }
          });
        case 8:
          return _context.a(2);
      }
    }, _callee, null, [[2, 6]]);
  }));
  return function useAfterSale(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__.A = (useAfterSale);

/***/ })

}]);
//# sourceMappingURL=772.js.map