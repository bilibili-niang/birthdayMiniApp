"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[490],{

/***/ 490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pay; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(2684);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ./src/components/goods-item/index.tsx
var goods_item = __webpack_require__(9788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-dom@3.5.22/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8506);
// EXTERNAL MODULE: ./src/components/count-stepper/index.tsx
var count_stepper = __webpack_require__(9519);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ./src/packageA/order/pay/address-selector/index.tsx
var address_selector = __webpack_require__(3297);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/interaction/index.js + 3 modules
var interaction = __webpack_require__(7888);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/custom-component.js
var custom_component = __webpack_require__(8274);
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ./src/api/goods/index.ts
var goods = __webpack_require__(5954);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js + 17 modules
var cloneDeep = __webpack_require__(2347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/storage/index.js
var storage = __webpack_require__(4238);
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
// EXTERNAL MODULE: ./src/stores/merchant.ts + 1 modules
var merchant = __webpack_require__(9181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ./src/packageA/discount-coupon/components/coupon-item/index.tsx
var coupon_item = __webpack_require__(9333);
// EXTERNAL MODULE: ./src/api/discount-coupon/index.ts
var discount_coupon = __webpack_require__(7591);
;// ./src/packageA/order/pay/coupon-selector/index.tsx









var useOrderCouponSelector = function useOrderCouponSelector(items) {
  var itemsRef = (0,lib/* useComputedValue */.Ko)(items);
  var _usePagination = (0,lib/* usePagination */.WQ)({
      requestHandler: function requestHandler(params) {
        return (0,discount_coupon/* $getOrderUseableDiscountCouponList */.Ls)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, params), {}, {
          size: 1000,
          items: itemsRef.value
        }));
      }
    }),
    coupons = _usePagination.data,
    refreshData = _usePagination.refreshData,
    CommonPaginationStatus = _usePagination.CommonPaginationStatus;
  (0,runtime_core_esm_bundler/* watch */.wB)(function () {
    return itemsRef.value;
  }, function () {
    if (itemsRef.value.length > 0) {
      refreshData({
        //  clearDataImmediate: true
      });
    }
  }, {
    deep: true,
    immediate: true
  });
  var current = (0,reactivity_esm_bundler/* ref */.KR)('');
  var currentCoupon = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    return coupons.value.find(function (item) {
      return item.recordNo === current.value;
    });
  });
  var onSelect = function onSelect(recordNo) {
    current.value = current.value === recordNo ? '' : recordNo;
  };
  (0,runtime_core_esm_bundler/* watch */.wB)(function () {
    return coupons.value;
  }, function () {
    if (!currentCoupon.value) {
      current.value = '';
    }
  });
  var discountAmountText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
    if (!currentCoupon.value) return '';
    return (0,utils/* formatPrice */.$g)(currentCoupon.value.discountAmount / 100);
  });
  var showModal = function showModal() {
    var _useModalActions = (0,lib/* useModalActions */.QR)([{
        text: function text() {
          return currentCoupon.value ? '确定使用' : '确定';
        },
        primary: true,
        onClick: function onClick() {
          modal.close();
        }
      }], {
        prepend: function prepend() {
          if (!currentCoupon.value) return null;
          return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "use-order-coupon-selector__tips"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u60A8\u5DF2\u9009\u62E9"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA01\xA0")]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F20\u4F18\u60E0\u5238\uFF0C\u6700\u9AD8\u53EF\u62B5\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \xA5"), discountAmountText.value])]);
        }
      }),
      Actions = _useModalActions.Actions;
    var modal = (0,lib/* useModal */.hS)({
      height: 'auto',
      title: function title() {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "use-order-coupon-selector__title"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "item active"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53EF\u7528\u4F18\u60E0\u5238")])]);
      },
      content: function content() {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "use-order-coupon-selector"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "use-order-coupon-selector__content"
        }, [coupons.value.map(function (item, index) {
          return (0,runtime_core_esm_bundler/* createVNode */.bF)(coupon_item/* default */.A, {
            "name": item.name,
            "amount": item.discountAmount / 100,
            "threshold": item.thresholdAmount / 100,
            "scope": item.scope,
            "validDate": item.useEndTime,
            "onClick": function onClick() {
              onSelect(item.recordNo);
            },
            "button": function button() {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Radio */.sx, {
                "style": "margin: auto 0;",
                "checked": item.recordNo === current.value
              }, null);
            }
          }, null);
        }), (0,runtime_core_esm_bundler/* createVNode */.bF)(CommonPaginationStatus, null, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)(Actions, null, null)]);
      }
    });
  };
  var SelectCouponButton = function SelectCouponButton() {
    if (coupons.value.length === 0) {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "color-disabled",
        "onClick": showModal
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65E0\u53EF\u7528")]);
    }
    if (currentCoupon.value) {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "use-order-coupon-selector__selected",
        "onClick": showModal
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "amount number-font"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF0D\xA5"), discountAmountText.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "name"
      }, [currentCoupon.value.name])]);
    }
    return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "use-order-coupon-selector__entrance color-disabled",
      "onClick": showModal
    }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "useable-count"
    }, [coupons.value.length]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u5F20\u5238\u53EF\u7528")]);
  };
  return {
    onSelect: onSelect,
    currentCoupon: currentCoupon,
    SelectCouponButton: SelectCouponButton
  };
};
;// ./src/packageA/order/pay/store.ts








var stores = {};
/** 定义下单页面全局状态 store */
var defineOrderPayStore = function defineOrderPayStore(orderPayPageId) {
  return (0,pinia/* defineStore */.nY)("order-pay-".concat(orderPayPageId), function () {
    var goodsList = (0,reactivity_esm_bundler/* ref */.KR)([]);
    /** 初始化下单商品列表，在页面进入时获取链接参数 */
    var initList = function initList(list) {
      goodsList.value = (0,cloneDeep/* default */.A)(list);
      goodsList.value.forEach(function (item) {
        getGoodsDetailById(item.goodsId);
      });
    };
    var isLoading = (0,reactivity_esm_bundler/* ref */.KR)(true);

    /** 商品详情映射 */
    var goodsDetailMap = (0,reactivity_esm_bundler/* ref */.KR)({});
    var goodsDetailFailedMap = (0,reactivity_esm_bundler/* ref */.KR)({});
    /** 获取商品详情 */
    var getGoodsDetailById = function getGoodsDetailById(goodsId) {
      var forceReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (goodsDetailFailedMap.value[goodsId] === false && !forceReload) return void 0;
      goodsDetailFailedMap.value[goodsId] = false;
      (0,goods/* getGoodsDetail */._P)(goodsId).then(function (res) {
        if (res.code === 200) {
          goodsDetailMap.value[goodsId] = res.data;
        } else {
          goodsDetailFailedMap.value[goodsId] = true;
          console.error(res);
        }
      }).catch(function (err) {
        goodsDetailFailedMap.value[goodsId] = true;
        console.error(err);
      }).finally(function () {
        isLoading.value = false;
      });
    };

    /** 收货人地址信息 */
    var address = (0,reactivity_esm_bundler/* reactive */.Kh)({
      /** 省份 */
      provinceName: null,
      /** 市 */
      cityName: null,
      /** 区 */
      countyName: null,
      /** 详细地址 */
      detailInfo: null,
      /** 收件人姓名 */
      userName: null,
      /** 电话号码 */
      telNumber: null
    });
    /** 设置收货人地址信息 */
    var setAddress = function setAddress(options) {
      Object.assign(address, options);
      (0,storage/* setStorageSync */.$c)('lastAddress', JSON.stringify(options));
    };

    /*try {
     const lastAddress = JSON.parse(Taro.getStorageSync('lastAddress'))
     lastAddress && setAddress(lastAddress)
     } catch (err) {
     setAddress({
     provinceName: null,
     cityName: null,
     countyName: null,
     detailInfo: null,
     userName: null,
     telNumber: null
     })
     }*/

    /** 定单备注 */
    var remark = (0,reactivity_esm_bundler/* ref */.KR)('');
    /** 余额 */
    var useBalance = (0,reactivity_esm_bundler/* ref */.KR)(false);

    // 默认微信支付
    var subPayMethod = (0,reactivity_esm_bundler/* ref */.KR)();

    // 支付方式适配
    var payMethodAdapter = function payMethodAdapter() {
      var methods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return Array.from(new Set((Array.isArray(methods) ? methods.map(function (i) {
        var _i$type;
        return (_i$type = i.type) !== null && _i$type !== void 0 ? _i$type : i.value;
      }) : methods.split(',')).map(function (i) {
        return Number(i);
      })));
    };
    var availableSubPayMethod = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _useMerchantStore$mer;
      var channels = payMethodAdapter((_useMerchantStore$mer = (0,merchant/* default */.A)().merchantOrderFlow) === null || _useMerchantStore$mer === void 0 ? void 0 : _useMerchantStore$mer.paySubChannel);
      var res = config/* SUB_PAYMENT_METHOD_OPTIONS */.Hd.filter(function (item) {
        return channels.includes(item.value);
      });
      return res.length > 0 ? res : [config/* SUB_PAYMENT_METHOD_OPTIONS */.Hd[0]];
    });
    var availablePayMethod = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _useMerchantStore$mer2;
      var payChannel = payMethodAdapter((_useMerchantStore$mer2 = (0,merchant/* default */.A)().merchantOrderFlow) === null || _useMerchantStore$mer2 === void 0 ? void 0 : _useMerchantStore$mer2.payChannel);
      return payChannel.filter(function (i) {
        return i !== config/* PAYMENT_METHOD_NONE */.eh;
      });
    });
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return [subPayMethod.value, availableSubPayMethod.value];
    }, function () {
      // 加载支付方式后如果没有微信支付，切换为第一个可用支付方式
      if (!availableSubPayMethod.value.some(function (item) {
        return item.value === subPayMethod.value;
      })) {
        var _availableSubPayMetho;
        subPayMethod.value = (_availableSubPayMetho = availableSubPayMethod.value[0]) === null || _availableSubPayMetho === void 0 ? void 0 : _availableSubPayMetho.value;
      }
    }, {
      immediate: true
    });
    var totalAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var goodsPrice = goodsList.value.reduce(function (v, item) {
        var _ref, _goodsDetailMap$value;
        return v + Number((_ref = (_goodsDetailMap$value = goodsDetailMap.value[item.goodsId]) === null || _goodsDetailMap$value === void 0 || (_goodsDetailMap$value = _goodsDetailMap$value.goodsSkus.find(function (sku) {
          return sku.id === item.skuId;
        })) === null || _goodsDetailMap$value === void 0 ? void 0 : _goodsDetailMap$value.price) !== null && _ref !== void 0 ? _ref : 0) * item.count * 100;
      }, 0) / 100;
      return Number.isNaN(Number(goodsPrice)) ? 0 : goodsPrice;
    });

    /** 需支付金额 */
    var paymentAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return totalAmount.value - discountAmount.value;
    });
    var goodsCount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return goodsList.value.reduce(function (v, item) {
        return v + item.count;
      }, 0);
    });

    /** 总优惠金额 */
    var discountAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!currentCoupon.value) {
        return 0;
      }
      var v = currentCoupon.value.discountAmount / 100;
      if (v >= totalAmount.value) {
        // 至少付0.01
        return totalAmount.value - 0.01;
      }
      return v;
    });
    var _useOrderCouponSelect = useOrderCouponSelector(function () {
        return goodsList.value;
      }),
      SelectCouponButton = _useOrderCouponSelect.SelectCouponButton,
      currentCoupon = _useOrderCouponSelect.currentCoupon;
    return {
      pageId: orderPayPageId,
      isLoading: isLoading,
      goodsList: goodsList,
      initList: initList,
      goodsDetailMap: goodsDetailMap,
      goodsDetailFailedMap: goodsDetailFailedMap,
      address: (0,reactivity_esm_bundler/* readonly */.tB)(address),
      remark: remark,
      useBalance: useBalance,
      availableSubPayMethod: availableSubPayMethod,
      subPayMethod: subPayMethod,
      totalAmount: totalAmount,
      paymentAmount: paymentAmount,
      discountAmount: discountAmount,
      goodsCount: goodsCount,
      setAddress: setAddress,
      availablePayMethod: availablePayMethod,
      SelectCouponButton: SelectCouponButton,
      currentCoupon: currentCoupon
    };
  });
};
var useOrderPayStore = function useOrderPayStore(orderPayPageId) {
  if (orderPayPageId) {
    try {
      (0,runtime_core_esm_bundler/* provide */.Gt)('orderPayPageId', orderPayPageId);
    } catch (err) {}
  }
  var pageId = orderPayPageId !== null && orderPayPageId !== void 0 ? orderPayPageId : (0,runtime_core_esm_bundler/* inject */.WQ)('orderPayPageId');
  if (!pageId) {
    throw new Error('useOrderPayStore 必须在订单确认页内使用，或手动传入页面Id');
  }
  var name = "order-pay-".concat(pageId);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (stores[name]) {
    return stores[name].apply(stores, args);
  }
  var store = defineOrderPayStore(pageId);
  stores[name] = store;
  return store.apply(void 0, args);
};
;// ./src/packageA/order/pay/skeleton/index.tsx




/* harmony default export */ var skeleton = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsDetailSkleton',
  setup: function setup() {
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-skeleton"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null)]);
    };
  }
}));
// EXTERNAL MODULE: ./src/api/order/index.ts
var order = __webpack_require__(1004);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var src_stores = __webpack_require__(6685);
// EXTERNAL MODULE: ./src/stores/profile.ts
var profile = __webpack_require__(1002);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js + 1 modules
var clamp = __webpack_require__(7773);
// EXTERNAL MODULE: ./src/utils/index.tsx + 3 modules
var src_utils = __webpack_require__(2753);
// EXTERNAL MODULE: ./src/hooks/useAddress.ts
var useAddress = __webpack_require__(5598);
;// ./src/packageA/order/pay/index.tsx


























var parseParams = function parseParams(params) {
  try {
    return JSON.parse(decodeURIComponent(params));
  } catch (err) {
    console.log(err);
    return {};
  }
};
var GoodSkeleton = function GoodSkeleton() {
  return (0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
    "type": "horizontal",
    "action": (0,runtime_core_esm_bundler/* createVNode */.bF)(count_stepper/* default */.A, {
      "size": "small",
      "value": 1
    }, null)
  }, null);
};
/* harmony default export */ var pay = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'OrderPay',
  setup: function setup() {
    /** 订单来源：购物车 */
    var isFromCart = taro/* default.useRouter */.Ay.useRouter().params.origin === constants/* ORDER_ORIGIN_CART */.X$.toString();
    var paramsError = !taro/* default.useRouter */.Ay.useRouter().params.params;
    var urlParams = parseParams(taro/* default.useRouter */.Ay.useRouter().params.params);
    urlParams = Array.isArray(urlParams) ? urlParams : [urlParams];
    //  收货区域不合法时的提示
    var notAvailableForPurchaseList = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var pageId = (0,utils/* uuid */.uR)();
    var orderPayStore = useOrderPayStore(pageId);
    var SelectCouponButton = orderPayStore.SelectCouponButton;
    orderPayStore.initList(urlParams.map(function (item) {
      var _item$count;
      return {
        goodsId: item.gid,
        skuId: item.sid,
        count: (_item$count = item.count) !== null && _item$count !== void 0 ? _item$count : 1
      };
    }));
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(orderPayStore),
      isLoading = _storeToRefs.isLoading,
      useBalance = _storeToRefs.useBalance,
      totalAmount = _storeToRefs.totalAmount,
      paymentAmount = _storeToRefs.paymentAmount,
      discountAmount = _storeToRefs.discountAmount,
      goodsDetailMap = _storeToRefs.goodsDetailMap,
      goodsDetailFailedMap = _storeToRefs.goodsDetailFailedMap,
      goodsList = _storeToRefs.goodsList,
      goodsCount = _storeToRefs.goodsCount,
      subPayMethod = _storeToRefs.subPayMethod,
      availableSubPayMethod = _storeToRefs.availableSubPayMethod,
      availablePayMethod = _storeToRefs.availablePayMethod,
      currentCoupon = _storeToRefs.currentCoupon;
    var useAddressEntities = (0,useAddress/* default */.A)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(useAddressEntities),
      address = _storeToRefs2.address;
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      // 获取订单流程
      (0,merchant/* default */.A)().getMerchantOrderFlow();
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(function () {
      // 页面卸载后删除 store 释放内存
      orderPayStore.$dispose();
    });
    var needAddress = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return goodsList.value.filter(function (item) {
        var _goodsDetailMap$value;
        return ((_goodsDetailMap$value = goodsDetailMap.value[item.goodsId]) === null || _goodsDetailMap$value === void 0 ? void 0 : _goodsDetailMap$value.type) === constants/* GOODS_TYPE_ENTITY */.i4;
      }).length > 0;
    });
    var addressSelectorRef = (0,reactivity_esm_bundler/* ref */.KR)();
    var onChooseAddress = function onChooseAddress() {
      useAddressEntities.chooseAddress();
    };
    var onConfirm =
    // 需登录
    (0,lib/* withLogin */.E6)(
    // 需绑定微信
    (0,lib/* withWechatBind */.kV)(function () {
      var _addressTranslationTo, _addressTranslationTo2, _addressTranslationTo3;
      if (isFromCart) {
        return commitOrderFromCart();
      }

      // TODO 提取公共参数。

      var targetParams = {
        contactAddress: address.value.detailInfo,
        contactCity: address.value.cityName,
        contactDistrict: address.value.countyName,
        contactMobile: address.value.telNumber,
        contactName: address.value.userName,
        contactProvince: address.value.provinceName,
        count: goodsList.value[0].count,
        goodsId: goodsList.value[0].goodsId,
        goodsStockId: goodsList.value[0].skuId,
        // TODO 这里不应该耦合吧
        payMethod: useBalance.value ? config/* PAYMENT_METHOD_BALANCE */.sd : config/* PAYMENT_METHOD_NONE */.eh,
        subPayMethod: subPayMethod.value,
        contactProvinceCode: (_addressTranslationTo = (0,src_utils/* addressTranslationToCode */.Sb)(address.value.provinceName)) === null || _addressTranslationTo === void 0 ? void 0 : _addressTranslationTo.code,
        contactCityCode: (_addressTranslationTo2 = (0,src_utils/* addressTranslationToCode */.Sb)(address.value.cityName)) === null || _addressTranslationTo2 === void 0 ? void 0 : _addressTranslationTo2.code,
        contactDistrictCode: (_addressTranslationTo3 = (0,src_utils/* addressTranslationToCode */.Sb)(address.value.countyName)) === null || _addressTranslationTo3 === void 0 ? void 0 : _addressTranslationTo3.code,
        discountCoupon: currentCoupon.value ? [currentCoupon.value.recordNo] : []
      };

      // 如果从购物车下单并且分享的商品id和购买的商品id一致,则需要合并 utm 参数
      var params = targetParams;
      /*const params: IGoodsOrderParams =
        utmFromCode.value?.goodsId === goodsList.value[0].goodsId
          ? {
              ...targetParams,
              ...utmFromCode.value,
              utmContent: JSON.stringify(utmFromCode.value)
            }
          : targetParams*/

      (0,lib/* useLoading */.M3)();
      (0,order/* commitGoodsOrder */.C9)(params).then(function (res) {
        if (res.code === 200) {
          pay(res.data.orderNo, res.data.unifiedOrderNo);
        } else {
          (0,lib/* useToast */.dj)(res.msg);
        }
      }).catch(function (err) {
        (0,lib/* useToast */.dj)(err.response.data.msg);
      }).finally(function () {
        (0,lib/* useLoadingEnd */.dA)();
        // 刷新余额账户
        profileStore.getAccountBalance();
      });
    }));
    var commitOrderFromCart = function commitOrderFromCart() {
      var params = {
        contactAddress: address.value.detailInfo,
        contactCity: address.value.cityName,
        contactDistrict: address.value.countyName,
        contactMobile: address.value.telNumber,
        contactName: address.value.userName,
        contactProvince: address.value.provinceName,
        itemIds: urlParams.map(function (item) {
          return item.cid;
        }),
        // TODO 这里不应该耦合吧
        payMethod: useBalance.value ? config/* PAYMENT_METHOD_BALANCE */.sd : config/* PAYMENT_METHOD_NONE */.eh,
        subPayMethod: subPayMethod.value,
        // 用户的收货地址代码,省市区
        contactProvinceCode: (0,src_utils/* addressTranslationToCode */.Sb)(address.value.provinceName).code,
        contactCityCode: (0,src_utils/* addressTranslationToCode */.Sb)(address.value.cityName).code,
        contactDistrictCode: (0,src_utils/* addressTranslationToCode */.Sb)(address.value.countyName).code,
        discountCoupon: currentCoupon.value ? [currentCoupon.value.recordNo] : []
      };
      (0,interaction/* showLoading */.Cs)();
      (0,order/* commitCartGoodsOrder */.ye)(params).then(function (res) {
        if (res.code === 200) {
          pay(res.data.orderNo, res.data.unifiedOrderNo);
        } else {
          (0,lib/* useToast */.dj)(res.msg);
        }
      }).catch(function (err) {
        (0,lib/* useToast */.dj)(err.response.data.msg);
      }).finally(function () {
        (0,interaction/* hideLoading */.RZ)();
        // 刷新购物车数据
        (0,src_stores/* useCartStore */.x3)().refresh();
        // 刷新余额账户
        profileStore.getAccountBalance();
      });
    };
    var pay = function pay(orderNo, unifyOrderNo) {
      (0,custom_component/* nextTick */.d)(function () {
        (0,lib/* useLoading */.M3)();
        (0,lib/* usePay */.EO)(unifyOrderNo, {
          success: function success() {
            (0,lib/* useLoadingEnd */.dA)();
          },
          fail: function fail() {
            (0,lib/* useLoadingEnd */.dA)();
          },
          complete: function complete() {
            (0,lib/* useLoadingEnd */.dA)();
            (0,router/* navigateToPayResult */.ks)({
              orderNo: orderNo,
              unifyOrderNo: unifyOrderNo,
              redirect: true
            });
          },
          // h5（未支持支付） -> 打开小程序支付结果页 -> 完成支付
          payResultPath: (0,lib/* buildUrl */.c$)('/packageA/pay/result', {
            orderNo: orderNo,
            unifyOrderNo: unifyOrderNo
          })
        });
      });
    };
    var profileStore = (0,profile/* useProfileStore */.K)();
    var _storeToRefs3 = (0,pinia/* storeToRefs */.bP)(profileStore),
      balance = _storeToRefs3.balance,
      balanceYuan = _storeToRefs3.balanceYuan,
      balanceText = _storeToRefs3.balanceText,
      balanceAccount = _storeToRefs3.balanceAccount,
      isBalanceAvailable = _storeToRefs3.isBalanceAvailable;
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return isBalanceAvailable.value;
    }, function (v) {
      if (!availablePayMethod.value.includes(config/* PAYMENT_METHOD_BALANCE */.sd)) {
        return void 0;
      }
      useBalance.value = v;
    }, {
      immediate: true
    });
    profileStore.getAccountBalance();
    var balanceAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!useBalance.value) return 0;
      return paymentAmount.value > balanceYuan.value ? balanceYuan.value : paymentAmount.value;
    });
    var needPayAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return (0,clamp/* default */.A)(paymentAmount.value - balanceYuan.value, 0, Infinity);
    });
    var userAddressCode = (0,reactivity_esm_bundler/* ref */.KR)(0);
    // 地址改变会影响购物车里的商品收货地址是否正确
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return address.value;
    }, function (newV) {
      var _addressTranslationTo4, _addressTranslationTo5, _addressTranslationTo6;
      if (!newV) {
        return void 0;
      }
      // 用户地址改变了,清空一下之前的限售商品列表
      notAvailableForPurchaseList.value = [];
      userAddressCode.value = ((_addressTranslationTo4 = (0,src_utils/* addressTranslationToCode */.Sb)(newV === null || newV === void 0 ? void 0 : newV.countyName)) === null || _addressTranslationTo4 === void 0 ? void 0 : _addressTranslationTo4.code) || ((_addressTranslationTo5 = (0,src_utils/* addressTranslationToCode */.Sb)(newV === null || newV === void 0 ? void 0 : newV.cityName)) === null || _addressTranslationTo5 === void 0 ? void 0 : _addressTranslationTo5.code) || ((_addressTranslationTo6 = (0,src_utils/* addressTranslationToCode */.Sb)(newV === null || newV === void 0 ? void 0 : newV.provinceName)) === null || _addressTranslationTo6 === void 0 ? void 0 : _addressTranslationTo6.code);
    }, {
      immediate: true,
      deep: true
    });

    /**
     * 提交验证函数
     */
    var submitValidation = function submitValidation() {
      var keys = Object.keys(goodsDetailMap.value);
      // 获取其中商品类型不为限售的商品
      var listCoupons = keys.map(function (it) {
        return goodsDetailMap.value[it].type !== constants/* GOODS_TYPE_STORE_VERIFICATION */.uz;
      }).filter(function (i) {
        return i;
      });
      if (listCoupons.length > 0) {
        if (notAvailableForPurchaseList.value.length !== 0) {
          (0,interaction/* showToast */.P0)({
            title: '部分商品无法购买',
            icon: 'none'
          });
        } else {
          // 地址是否不为空
          if (address.value.isEmpty) {
            (0,interaction/* showToast */.P0)({
              title: '请选择收货地址',
              icon: 'none'
            });
          } else {
            onConfirm();
          }
        }
      } else {
        // 只有卡券商品时,不需要校验是否存在地址
        onConfirm();
      }
    };
    return function () {
      var _address$value, _address$value2;
      if (isLoading.value) return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          showMenuButton: false
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(skeleton, null, null)];
        }
      });
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          title: '订单确认'
        },
        "tabsPlaceholder": true,
        "onClick": function onClick() {
          var _notAvailableForPurch;
          if (((_notAvailableForPurch = notAvailableForPurchaseList.value) === null || _notAvailableForPurch === void 0 ? void 0 : _notAvailableForPurch.length) > 0) {
            console.log('限售商品id:');
            console.log(notAvailableForPurchaseList.value);
          }
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay-page"
          }, [needAddress.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(address_selector/* default */.A, {
            "ref": addressSelectorRef,
            "address": address.value,
            "onClick": function onClick() {
              onChooseAddress();
            }
          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay-goods"
          }, [goodsList.value.map(function (item) {
            var _detail$restrictedAre, _targetSku$specs$0$im;
            var detail = goodsDetailMap.value[item.goodsId];
            if (!detail && goodsDetailFailedMap.value[item.goodsId]) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "order-pay-goods__item order-pay-goods__item--expire"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "order-pay-goods__expire"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u4E0D\u5B58\u5728\uFF0F\u5DF2\u8FC7\u671F")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
                "type": "horizontal",
                "action": (0,runtime_core_esm_bundler/* createVNode */.bF)(count_stepper/* default */.A, {
                  "size": "small",
                  "value": 1
                }, null)
              }, null)]);
            }
            if (!detail) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)(GoodSkeleton, null, null);
            }
            var targetSku = detail === null || detail === void 0 ? void 0 : detail.goodsSkus.find(function (sku) {
              return sku.id === item.skuId;
            });
            var allAddress = [];
            // 获取限售区域下所有子级地址的code
            detail === null || detail === void 0 || (_detail$restrictedAre = detail.restrictedArea) === null || _detail$restrictedAre === void 0 || _detail$restrictedAre.forEach(function (areaGroup) {
              areaGroup === null || areaGroup === void 0 || areaGroup.forEach(function (areaCode) {
                var areaItem = (0,src_utils/* findItemByCode */.jz)(areaCode);
                if (areaItem) {
                  // 添加当前区域的code
                  allAddress.push(areaItem.code);
                  // 递归获取所有子级的code
                  var _getChildrenCode = function getChildrenCode(data) {
                    if (!data) return [];
                    var codeList = [];
                    var _iterator = (0,createForOfIteratorHelper/* default */.A)(data),
                      _step;
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var _item = _step.value;
                        codeList.push(_item.code);
                        if (_item.children) {
                          codeList.push.apply(codeList, (0,toConsumableArray/* default */.A)(_getChildrenCode(_item.children)));
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    return codeList;
                  };
                  // 添加所有子级的code
                  allAddress.push.apply(allAddress, (0,toConsumableArray/* default */.A)(_getChildrenCode(areaItem.children)));
                }
              });
            });
            var restrictedStatus = detail.restrictedStatus,
              restrictedType = detail.restrictedType;
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['order-pay-goods__item', !targetSku && 'order-pay-goods__item--expire']
            }, [!targetSku && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "order-pay-goods__expire"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u89C4\u683C\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
              "type": "horizontal",
              "image": (_targetSku$specs$0$im = targetSku === null || targetSku === void 0 ? void 0 : targetSku.specs[0].image) !== null && _targetSku$specs$0$im !== void 0 ? _targetSku$specs$0$im : detail.coverImages[0],
              "name": detail.title,
              "restrictedStatus": restrictedStatus,
              "restrictedArea": allAddress,
              "restrictedType": restrictedType,
              "goodsType": detail.type,
              "price": targetSku === null || targetSku === void 0 ? void 0 : targetSku.price,
              "userAddress": userAddressCode.value,
              "goodsId": item.goodsId,
              "onAllowBuy": function onAllowBuy(e) {
                // 添加并去重
                notAvailableForPurchaseList.value.push(e);
                notAvailableForPurchaseList.value = (0,toConsumableArray/* default */.A)(new Set(notAvailableForPurchaseList.value));
              },
              "desc": targetSku && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [targetSku === null || targetSku === void 0 ? void 0 : targetSku.specs.map(function (item) {
                return item.v;
              }).join('／')]),
              "action": isFromCart ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "order-pay-goods__count"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xD7 "), item.count]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(count_stepper/* default */.A, {
                "size": "small",
                "min": detail.limitNumMin > 1 ? detail.limitNumMin : 1,
                "max": detail.limitNumMax,
                "minMessage": "\u4E0D\u80FD\u5C11\u4E8E ".concat(detail.limitNumMin > 1 ? detail.limitNumMin : 1, " \u4EF6"),
                "value": item.count,
                "onChange": function onChange(v) {
                  item.count = v;
                }
              }, null)
            }, null)]);
          })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4EF7\u683C\u660E\u7EC6")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u603B\u4EF7")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "style": "opacity:0.5;margin-right:auto;font-size:0.9em;"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171 "), goodsCount.value, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u4EF6\u5546\u54C1")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "number-font"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), totalAmount.value.toFixed(2)])])]), needAddress.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7269\u6D41\u914D\u9001")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-content",
            "onClick": onChooseAddress
          }, [address.value.cityName ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-conten__address"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u514D\u8D39\u5305\u90AE")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "color-disabled"
          }, ["\u9001\u81F3 ".concat((_address$value = address.value) === null || _address$value === void 0 ? void 0 : _address$value.provinceName, " ").concat((_address$value2 = address.value) === null || _address$value2 === void 0 ? void 0 : _address$value2.cityName), ' '])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "color-disabled"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9009\u62E9\u6536\u8D27\u5730\u5740\u540E\u67E5\u770B")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "right"
          }, null)])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u4F18\u60E0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(SelectCouponButton, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "right"
          }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block-item total"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u603B\u8BA1")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "item-content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "number-font"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "yen"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), paymentAmount.value.toFixed(2)])])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__block-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4ED8\u6B3E\u65B9\u5F0F")]), availableSubPayMethod.value.map(function (item) {
            if (paramsError && item.value !== config/* SUB_PAYMENT_METHOD_WECHAT_PAY */._F) {
              return null;
            }
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "order-pay__type-item",
              "onClick": function onClick() {
                subPayMethod.value = item.value;
              }
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "logo",
              "style": {
                backgroundImage: "url(".concat(item.icon, ")")
              }
            }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "name"
            }, [item.label]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "action"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Radio */.sx, {
              "checked": item.value === subPayMethod.value
            }, null)])]);
          }), availablePayMethod.value.length > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__type-split"
          }, null), availablePayMethod.value.map(function (item) {
            if (item === config/* PAYMENT_METHOD_VALUE_CARD */.YP) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "order-pay__type-item"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "logo"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
                "name": "value-card",
                "style": "color: #5386ff"
              }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "name"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u50A8\u503C\u5361")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "action color-disabled",
                "style": "font-size:0.85em"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65E0\u53EF\u7528\u50A8\u503C\u5361")])]);
            }
            if (item === config/* PAYMENT_METHOD_BALANCE */.sd) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "order-pay__type-item"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "logo"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
                "name": "balance-pay"
              }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "name",
                "onClick": function onClick() {
                  (0,lib/* useModal */.hS)({
                    title: '余额说明',
                    height: 300,
                    content: ''
                  });
                }
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "name-text"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F7F\u7528\u4F59\u989D"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
                "name": "help"
              }, null)]), balanceAccount.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "desc"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F53\u524D\u53EF\u7528\u4F59\u989D "), profileStore.balanceText, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u5143")]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "desc",
                "onClick": (0,runtime_dom_esm_bundler/* withModifiers */.D$)(function () {
                  profileStore.getAccountBalance().catch(lib/* useResponseMessage */.Cd);
                }, ['stop'])
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u672A\u83B7\u53D6\u5230\u8D26\u6237\u4F59\u989D\uFF0C"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "color-primary"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5237\u65B0\u91CD\u8BD5\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
                "name": "refresh"
              }, null)])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "action"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Switch */.dO, {
                "checked": useBalance.value,
                "disabled": !isBalanceAvailable.value,
                "onChange": function onChange(v) {
                  useBalance.value = v;
                }
              }, null)])]);
            }
          })])]), !paramsError && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__action-bar"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "content"
          }, [useBalance.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__summary"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "total"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9700\u4ED8\uFF1A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "yen number-font"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "amount number-font"
          }, [needPayAmount.value.toFixed(2)]), discountAmount.value > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "discount"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171\u4F18\u60E0\xA0"), (0,utils/* formatPrice */.$g)(discountAmount.value), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u5143")]), useBalance.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__balance-tip"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5408\u8BA1\uFF1A"), Number(paymentAmount.value).toFixed(2), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u5143\uFF0C\u4F7F\u7528\u4F59\u989D\u62B5\u6263 "), balanceAmount.value.toFixed(2), ' ', (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5143")])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__summary"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "total"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5408\u8BA1\uFF1A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "yen number-font"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "amount number-font"
          }, [Number(paymentAmount.value).toFixed(2)]), discountAmount.value > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "discount"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171\u4F18\u60E0\xA0"), (0,utils/* formatPrice */.$g)(discountAmount.value), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u5143")]), useBalance.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-pay__balance-tip"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F59\u989D\u62B5\u6263 "), balanceAmount.value.toFixed(2), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u5143"), needPayAmount.value > 0 && "\uFF0C\u8FD8\u9700\u8981\u7528\u652F\u4ED8 ".concat(needPayAmount.value.toFixed(2), " \u5143")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['main-action', notAvailableForPurchaseList.value.length !== 0 ? 'disable' : 'primary main-action-active'],
            "onClick": submitValidation
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u63D0\u4EA4\u8BA2\u5355")])])])];
        }
      });
    };
  }
}));

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

/***/ 3297:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7970);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6384);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4078);
/* harmony import */ var _hooks_useAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5598);








/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'c_address-selector',
  props: {
    address: {
      type: Object
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    change: function change(address) {
      return true;
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose;
    var onChooseAddress = function onChooseAddress() {
      if (props.readonly) return void 0;
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__/* .chooseAddress */ .Q)({
        success: function success(res) {
          Object.assign(data, res);
          emit('change', (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .toRaw */ .ux)(data));
        },
        fail: function fail() {
          // TODO 支持 H5 设置收货地址，微信 H5 可以使用 wx.openAddress 能力
          if (true) {
            (0,_anteng_core__WEBPACK_IMPORTED_MODULE_5__/* .useToast */ .dj)('h5暂未支持地址选择3');
          }
        }
      });
    };
    expose({
      chooseAddress: onChooseAddress
    });
    // props.address 可能会改变的
    var data = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var _props$address;
      return Object.assign((0,_hooks_useAddress__WEBPACK_IMPORTED_MODULE_6__/* .emptyAddress */ .w)(), (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, props.address), {}, {
        isEmpty: !((_props$address = props.address) !== null && _props$address !== void 0 && _props$address.userName)
      }));
    });
    return function () {
      var _data$value, _data$value2, _data$value3, _data$value4, _data$value5, _data$value6, _data$value7;
      return (// <div class="c_address-selector" onClick={onChooseAddress}>
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "c_address-selector"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
          "name": "location"
        }, null), !props.readonly && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "c_address-selector__btn"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
          "name": "edit"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7F16\u8F91")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "c_address-selector__content"
        }, [(_data$value = data.value) !== null && _data$value !== void 0 && _data$value.userName ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */ .FK, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "contact"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "contact-name"
        }, [(_data$value2 = data.value) === null || _data$value2 === void 0 ? void 0 : _data$value2.userName]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "contact-phone number-font"
        }, [(_data$value3 = data.value) === null || _data$value3 === void 0 ? void 0 : _data$value3.telNumber])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "contact-address"
        }, [(_data$value4 = data.value) === null || _data$value4 === void 0 ? void 0 : _data$value4.provinceName, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA0"), (_data$value5 = data.value) === null || _data$value5 === void 0 ? void 0 : _data$value5.cityName, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA0"), (_data$value6 = data.value) === null || _data$value6 === void 0 ? void 0 : _data$value6.countyName, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA0"), (_data$value7 = data.value) === null || _data$value7 === void 0 ? void 0 : _data$value7.detailInfo])]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */ .FK, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "contact"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "contact-name"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u672A\u9009\u62E9\u6536\u8D27\u5730\u5740")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "contact-address"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8BF7\u6DFB\u52A0\u6536\u8D27\u4EBA\u4FE1\u606F\u53CA\u5730\u5740")])])])])
      );
    };
  }
}));

/***/ }),

/***/ 5598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: function() { return /* binding */ emptyAddress; }
/* harmony export */ });
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7970);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4238);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9700);





var useAddress = (0,pinia__WEBPACK_IMPORTED_MODULE_4__/* .defineStore */ .nY)('useAddress', function () {
  var storageLastAddress = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__/* .getStorageSync */ .JF)('lastAddress');
  var lastAddress = storageLastAddress ? (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .safeParse */ .xL)(storageLastAddress) : null;
  var address = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(lastAddress || emptyAddress());
  var chooseAddress = function chooseAddress() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      asDefault: true
    };
    if (true) {
      var _window$wx;
      if ((_window$wx = window.wx) !== null && _window$wx !== void 0 && _window$wx.openAddress) {
        window.wx.openAddress({
          success: function success(res) {
            var _options$success;
            options === null || options === void 0 || (_options$success = options.success) === null || _options$success === void 0 || _options$success.call(options, res);
            // 微信官方单词都拼错了！！ 区县：countryName -> countyName
            address.value = (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
              countyName: res.countryName
            }, res);
            if (options !== null && options !== void 0 && options.asDefault) {
              (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__/* .setStorageSync */ .$c)('lastAddress', (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .toRaw */ .ux)(address.value));
            }
          },
          fail: function fail(err) {
            var _options$fail;
            options === null || options === void 0 || (_options$fail = options.fail) === null || _options$fail === void 0 || _options$fail.call(options, err);
          },
          complete: options === null || options === void 0 ? void 0 : options.complete
        });
      } else {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useToast */ .dj)('h5暂未支持地址选择1');
      }
    } else // removed by dead control flow
{}
  };
  return {
    address: address,
    chooseAddress: chooseAddress
  };
});
/* harmony default export */ __webpack_exports__.A = (useAddress);
var emptyAddress = function emptyAddress() {
  return {
    provinceName: null,
    cityName: null,
    countyName: null,
    detailInfo: null,
    userName: null,
    telNumber: null,
    isEmpty: true
  };
};

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
//# sourceMappingURL=490.js.map