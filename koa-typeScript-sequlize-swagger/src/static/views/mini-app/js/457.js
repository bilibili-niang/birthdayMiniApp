"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[457],{

/***/ 405:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ OrderGoodsItemAction; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8506);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6618);
/* harmony import */ var _anteng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2344);




/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'OrderGoodsItem',
  props: {
    /** 图片，若没有值，显示 “暂无图片” */
    image: {
      type: String,
      required: true
    },
    /** 商品名称，可以是字符串或者插槽内容 */
    name: {},
    /** 商品名称最多显示行数，默认 1 */
    nameMaxRows: {
      type: Number,
      default: 1
    },
    /** 商品价格 */
    unitPrice: {
      type: [String, Number]
    },
    /** 实付单价，若未设置或者等同于单价，则不显示 */
    unitPricePaid: {
      type: [String, Number]
    },
    /** 数量 */
    count: {
      type: [String, Number]
    },
    /** 商品规格，可以是字符串或者插槽内容 */
    spec: {},
    /** 商品描述，可以是字符串或者插槽内容 */
    desc: {},
    status: {},
    /** 商品信息底部插槽 */
    footer: {},
    /** 商品按钮插槽 */
    actions: {}
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var Actions = (0,_anteng_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderAnyNode */ .TN)(props.actions || slots.actions);
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__header"
      }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__main"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__image"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__/* .Image */ ._V, {
        "class": "image",
        "mode": "aspectFill",
        "src": props.image
      }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__detail"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__info"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": ['c_order-goods-item__name', "max-".concat(props.nameMaxRows, "-line")]
      }, [props.name]), props.spec && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__spec"
      }, [props.spec]), props.desc && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__spec"
      }, [props.desc])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__summary"
      }, [props.unitPricePaid && props.unitPricePaid !== props.unitPrice ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__pay number-font"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "text"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5B9E\u4ED8")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "yen"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")]), props.unitPricePaid]) : null, props.unitPrice && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__price number-font"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "yen"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")]), props.unitPrice]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__count"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xD7 "), props.count]), props.status && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__status"
      }, [props.status])])]), Actions && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__actions",
        "onClick": (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .withModifiers */ .D$)(function () {}, ['stop'])
      }, [Actions])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_order-goods-item__footer"
      }, null)]);
    };
  }
}));
var OrderGoodsItemAction = function OrderGoodsItemAction(props, _ref2) {
  var _slots$default;
  var slots = _ref2.slots;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
    "class": "action"
  }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
};

/***/ }),

/***/ 1457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ result; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(8831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ./src/api/index.ts + 4 modules
var api = __webpack_require__(5816);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/utils/index.js
var utils = __webpack_require__(9641);
;// ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/device/scan.js


// 扫码
var scanCode = /* @__PURE__ */(0,utils/* processOpenApi */.WR)({
  name: 'scanQRCode',
  defaultOptions: {
    needResult: 1
  },
  formatResult: function formatResult(res) {
    return {
      errMsg: res.errMsg === 'scanQRCode:ok' ? 'scanCode:ok' : res.errMsg,
      result: res.resultStr
    };
  }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/custom-component.js
var custom_component = __webpack_require__(8274);
// EXTERNAL MODULE: ./src/components/order-goods-item/index.tsx
var order_goods_item = __webpack_require__(405);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 20 modules
var src = __webpack_require__(5788);
// EXTERNAL MODULE: ./src/hooks/index.ts + 11 modules
var hooks = __webpack_require__(8892);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
;// ./src/components/express-info/index.tsx







/* harmony default export */ var express_info = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ExpressInfo',
  props: {
    expressName: {
      type: String,
      default: '物流承运方'
    },
    expressNo: {
      type: String,
      required: true
    },
    address: {
      type: Object
    }
  },
  setup: function setup(props) {
    var _props$address;
    var _useExpress = (0,hooks/* useExpress */.Ud)({
        courierNo: props.expressNo,
        phone: (_props$address = props.address) === null || _props$address === void 0 ? void 0 : _props$address.telNumber,
        lazyLoad: true
      }),
      expressRef = _useExpress.expressRef,
      refresh = _useExpress.refresh,
      isLoading = _useExpress.isLoading,
      errMsg = _useExpress.errMsg;
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      refresh();
    });
    var onExpressClick = function onExpressClick() {
      var _props$address2;
      if (!expressRef.value) {
        (0,lib/* useToast */.dj)('未查询到物流信息');
        return void 0;
      }
      (0,hooks/* useExpressModal */.vz)({
        courierNo: expressRef.value.number,
        phone: (_props$address2 = props.address) === null || _props$address2 === void 0 ? void 0 : _props$address2.telNumber
      });
    };
    var ContactInfo = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!props.address) return null;
      var _props$address3 = props.address,
        provinceName = _props$address3.provinceName,
        cityName = _props$address3.cityName,
        countyName = _props$address3.countyName,
        detailInfo = _props$address3.detailInfo,
        userName = _props$address3.userName,
        telNumber = _props$address3.telNumber;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "c_goods-express__contact"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dot"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "address"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9001\u81F3\xA0"), provinceName, cityName, countyName, detailInfo]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user"
      }, [userName, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" "), telNumber])]);
    });
    return function () {
      var _expressRef$value, _expressRef$value2, _expressRef$value$exp, _expressRef$value3, _expressRef$value$num, _expressRef$value4, _EXPRESS_STATUS_OPTIO, _expressRef$value7, _expressRef$value8;
      if (!props.expressNo) return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "c_goods-express__progress"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dot"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dash-line"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u672A\u53D1\u8D27")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "desc"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5C06\u5728\u7269\u6D41\u53D1\u8D27\u540E\u66F4\u65B0\u7269\u6D41\u4FE1\u606F\u3002")])]), ContactInfo.value]);
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "c_goods-express__info"
      }, [(_expressRef$value = expressRef.value) !== null && _expressRef$value !== void 0 && _expressRef$value.expressCompanyLogo ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "logo",
        "style": {
          backgroundImage: "url(".concat((_expressRef$value2 = expressRef.value) === null || _expressRef$value2 === void 0 ? void 0 : _expressRef$value2.expressCompanyLogo, ")")
        }
      }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "logo-placeholder"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "name"
      }, [(_expressRef$value$exp = (_expressRef$value3 = expressRef.value) === null || _expressRef$value3 === void 0 ? void 0 : _expressRef$value3.expressCompanyName) !== null && _expressRef$value$exp !== void 0 ? _expressRef$value$exp : props.expressName]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(_expressRef$value$num = (_expressRef$value4 = expressRef.value) === null || _expressRef$value4 === void 0 ? void 0 : _expressRef$value4.number) !== null && _expressRef$value$num !== void 0 ? _expressRef$value$num : props.expressNo]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "copy",
        "onClick": function onClick() {
          var _expressRef$value$num2, _expressRef$value5;
          (0,lib/* useCopyText */.sc)((_expressRef$value$num2 = (_expressRef$value5 = expressRef.value) === null || _expressRef$value5 === void 0 ? void 0 : _expressRef$value5.number) !== null && _expressRef$value$num2 !== void 0 ? _expressRef$value$num2 : props.expressNo);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u590D\u5236")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "c_goods-express__progress",
        "onClick": onExpressClick
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dot"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dash-line"
      }, null), expressRef.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [(_EXPRESS_STATUS_OPTIO = constants/* EXPRESS_STATUS_OPTIONS */.ZX.find(function (item) {
        var _expressRef$value6;
        return item.value == ((_expressRef$value6 = expressRef.value) === null || _expressRef$value6 === void 0 ? void 0 : _expressRef$value6.logisticsStatus);
      })) === null || _EXPRESS_STATUS_OPTIO === void 0 ? void 0 : _EXPRESS_STATUS_OPTIO.label, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "date"
      }, [(_expressRef$value7 = expressRef.value) === null || _expressRef$value7 === void 0 || (_expressRef$value7 = _expressRef$value7.theLastTime) === null || _expressRef$value7 === void 0 ? void 0 : _expressRef$value7.replace(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, '$2-$3 $4:$5')]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "more"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE6\u7EC6\u4FE1\u606F"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "desc"
      }, [(_expressRef$value8 = expressRef.value) === null || _expressRef$value8 === void 0 ? void 0 : _expressRef$value8.theLastMessage])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [isLoading.value ? '正在更新' : '暂无物流信息', (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "date"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "more"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE6\u7EC6\u4FE1\u606F"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "desc"
      }, [isLoading.value ? '物流信息加载中...' : errMsg.value || '物流信息获取失败！请稍后再试'])])]), ContactInfo.value]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
// EXTERNAL MODULE: ./src/stores/merchant.ts + 1 modules
var merchant = __webpack_require__(9181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
;// ./src/packageA/order/after-sale/result.tsx


















/* harmony default export */ var result = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: '',
  setup: function setup() {
    var afterSaleOrderNo = taro/* default.useRouter */.Ay.useRouter().params.afterSaleOrderNo;
    var detailRef = (0,reactivity_esm_bundler/* ref */.KR)();
    var merchantStore = (0,merchant/* default */.A)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(merchantStore),
      merchantOrderFlow = _storeToRefs.merchantOrderFlow;
    var fetchData = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
        var res, _t;
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (afterSaleOrderNo) {
                _context.n = 1;
                break;
              }
              return _context.a(2, void 0);
            case 1:
              (0,lib/* useLoading */.M3)();
              _context.p = 2;
              _context.n = 3;
              return (0,api/* requestGetAfterSaleDetail */._r)(afterSaleOrderNo);
            case 3:
              res = _context.v;
              if (res.code === 200) {
                detailRef.value = res.data;
              } else {
                (0,lib/* useResponseMessage */.Cd)(res);
              }
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              (0,lib/* useResponseMessage */.Cd)(_t);
            case 5:
              _context.p = 5;
              (0,lib/* useLoadingEnd */.dA)();
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4, 5, 6]]);
      }));
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      fetchData();
    });
    var computedStatus = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!detailRef.value) return null;
      return (0,constants/* computedAfterSaleStatus */.TN)(detailRef.value);
    });
    var statusRef = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value, _detailRef$value2;
      switch (computedStatus.value) {
        case 'A':
          return {
            title: '待商家处理',
            subtitle: '已通知商家尽快处理该订单'
          };
        case 'B':
          return {
            title: '待商家处理',
            subtitle: '已通知商家尽快处理该订单'
          };
        case 'C':
          return {
            title: '退款中',
            subtitle: '商家已同意申请，正在退款中'
          };
        case 'D':
          return {
            title: '商品待寄回',
            subtitle: '商家已同意退货申请，请尽快提交退货物流信息'
          };
        case 'E':
          return {
            title: '待商家收货',
            subtitle: '请等待商家验收退货商品'
          };
        case 'F':
          return {
            title: '商家拒绝退款',
            subtitle: ((_detailRef$value = detailRef.value) === null || _detailRef$value === void 0 ? void 0 : _detailRef$value.refundMark) || ((_detailRef$value2 = detailRef.value) === null || _detailRef$value2 === void 0 ? void 0 : _detailRef$value2.returnMark)
          };
        case 'G':
          return {
            title: '售后已关闭',
            subtitle: '商家关闭了售后申请'
          };
        case 'H':
          return {
            title: '售后取消',
            subtitle: '你已取消售后申请'
          };
        case 'I':
          return {
            title: '退款成功',
            subtitle: '款项已原路退回，请注意查收'
          };
        default:
          return {
            title: '待商家处理中',
            subtitle: '已通知商家尽快处理该订单'
          };
      }
    });
    var returnInfo = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value$retu, _detailRef$value3, _detailRef$value4;
      var _ref2 = (_detailRef$value$retu = (_detailRef$value3 = detailRef.value) === null || _detailRef$value3 === void 0 ? void 0 : _detailRef$value3.returnAddress) !== null && _detailRef$value$retu !== void 0 ? _detailRef$value$retu : {},
        name = _ref2.name,
        phone = _ref2.phone,
        address = _ref2.address;
      return {
        name: name || '',
        phone: phone || '',
        address: address || '',
        remark: ((_detailRef$value4 = detailRef.value) === null || _detailRef$value4 === void 0 ? void 0 : _detailRef$value4.returnMark) || ''
      };
    });

    /** 复制退回信息 */
    var copyReturnInfo = function copyReturnInfo() {
      var _returnInfo$value = returnInfo.value,
        name = _returnInfo$value.name,
        phone = _returnInfo$value.phone,
        address = _returnInfo$value.address;
      (0,lib/* useCopyText */.sc)("".concat(name, " ").concat(phone, " ").concat(address));
    };
    var expressName = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value5;
      return (_detailRef$value5 = detailRef.value) === null || _detailRef$value5 === void 0 ? void 0 : _detailRef$value5.courierName;
    });
    var expressNo = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value6;
      return (_detailRef$value6 = detailRef.value) === null || _detailRef$value6 === void 0 ? void 0 : _detailRef$value6.courierNo;
    });
    var onCommitExpressInfo = function onCommitExpressInfo() {
      commitExpressInfo({
        expressName: expressName.value,
        expressNo: expressNo.value
      }, function (res) {
        (0,lib/* useLoading */.M3)();
        (0,api/* requestUpdateAfterSaleExpress */.uO)(afterSaleOrderNo, {
          expressName: res.expressName,
          expressNo: res.expressNo
        }).then(function (res) {
          (0,lib/* useResponseMessage */.Cd)(res);
          fetchData();
        }).catch(lib/* useResponseMessage */.Cd).finally(function () {
          (0,lib/* useLoadingEnd */.dA)();
        });
      });
    };
    var onDescClick = function onDescClick() {
      var _attachments;
      (0,lib/* useModal */.hS)({
        title: '补充说明',
        content: (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "desc-modal"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "text"
        }, [detailRef.value.describe || '无补充说明内容']), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "images"
        }, [(_attachments = detailRef.value.attachments) === null || _attachments === void 0 ? void 0 : _attachments.map(function (item, index) {
          return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "image-wrap",
            "onClick": function onClick() {
              (0,lib/* usePreviewImages */.yj)({
                urls: detailRef.value.attachments,
                current: index
              });
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
            "src": item,
            "mode": "aspectFill",
            "class": "image"
          }, null)]);
        })])])
      });
    };

    /** 是否显示取消按钮 */
    var cancelVisible = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value7;
      // 售后状态 = 待商家处理、待买家退货】时，支持取消，取消后售后状态更新为【已取消】
      return [constants/* ORDER_AFTER_SALES_STATUS_PENDING */.gv, constants/* ORDER_AFTER_SALES_STATUS_ACCESS */.dv].includes((_detailRef$value7 = detailRef.value) === null || _detailRef$value7 === void 0 ? void 0 : _detailRef$value7.status);
    });

    /** 取消售后申请 */
    var onCancelAfterSale = function onCancelAfterSale() {
      (0,lib/* useConfirm */.zf)({
        title: '取消售后',
        content: '确定要取消售后吗？',
        onConfirm: function onConfirm() {
          (0,lib/* useLoading */.M3)();
          (0,api/* requestCancelAfterSale */.Pl)(afterSaleOrderNo).then(lib/* useResponseMessage */.Cd).catch(lib/* useResponseMessage */.Cd).finally(function () {
            (0,lib/* useLoadingEnd */.dA)();
            fetchData();
          });
        }
      });
    };

    /** 物流单号可修改 */
    var expressEditable = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value8;
      // 卖家待收货时
      return ((_detailRef$value8 = detailRef.value) === null || _detailRef$value8 === void 0 ? void 0 : _detailRef$value8.status) === constants/* ORDER_AFTER_SALES_STATUS_PENDING_RECEIVE */.S1;
    });
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "class": "after-sale-result-page",
        "navigator": {
          title: '售后进度'
        }
      }, {
        default: function _default() {
          var _subOrder$goodsStockS, _subOrder$coverImages, _detailRef$value$appl, _detail$createTime, _AFTER_SALE_TYPE_OPTI, _detail$attachments, _detail$attachments2, _detail$attachments3;
          if (!detailRef.value) return null;
          var detail = detailRef.value;
          var subOrder = detail.subOrder;
          return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "page-header"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "title"
          }, [statusRef.value.title]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "subtitle"
          }, [statusRef.value.subtitle])]), expressNo.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7269\u6D41\u4FE1\u606F"), expressEditable.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "has-send modify",
            "onClick": onCommitExpressInfo
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4FEE\u6539\u7269\u6D41"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "right"
          }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(express_info, {
            "expressName": expressName.value,
            "expressNo": expressNo.value,
            "address": {
              provinceName: null,
              cityName: null,
              countyName: null,
              detailInfo: returnInfo.value.address,
              userName: returnInfo.value.name,
              telNumber: returnInfo.value.phone
            }
          }, null), returnInfo.value.remark && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "return-remark"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "info"
          }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u5BB6\u5907\u6CE8\uFF1A"), returnInfo.value.remark])]), detailRef.value.type === constants/* AFTER_SALE_TYPE_REFUND */.Jc && !expressNo.value && detailRef.value.status === constants/* ORDER_AFTER_SALES_STATUS_ACCESS */.dv && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u5BB6\u552E\u540E\u5730\u5740"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "has-send",
            "onClick": onCommitExpressInfo
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6211\u5DF2\u5BC4\u51FA"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "right"
          }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* View */.Ss, {
            "class": "return-address",
            "onClick": copyReturnInfo,
            "onLongpress": copyReturnInfo
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "contact"
              }, [returnInfo.value.name, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "phone number-font"
              }, [returnInfo.value.phone])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "address"
              }, [returnInfo.value.address])];
            }
          }), returnInfo.value.remark && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "return-remark"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "info"
          }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u5BB6\u5907\u6CE8\uFF1A"), returnInfo.value.remark])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u5546\u54C1")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(order_goods_item/* default */.A, {
            "image": ((_subOrder$goodsStockS = subOrder.goodsStockSnapshot) === null || _subOrder$goodsStockS === void 0 || (_subOrder$goodsStockS = _subOrder$goodsStockS.specs) === null || _subOrder$goodsStockS === void 0 || (_subOrder$goodsStockS = _subOrder$goodsStockS[0]) === null || _subOrder$goodsStockS === void 0 ? void 0 : _subOrder$goodsStockS.image) || (subOrder === null || subOrder === void 0 || (_subOrder$coverImages = subOrder.coverImages) === null || _subOrder$coverImages === void 0 ? void 0 : _subOrder$coverImages[0]),
            "name": subOrder.goodsName,
            "spec": subOrder.goodsStockSnapshot.specs.map(function (spec) {
              return spec.v;
            }).join('／'),
            "unitPrice": subOrder.priceText,
            "unitPricePaid": subOrder.$payUnitAmountText,
            "count": subOrder.count,
            "onClick": function onClick() {
              (0,router/* navigateToGoodsDetail */.C7)(subOrder.goodsId);
            }
          }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "block-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7533\u8BF7\u8BE6\u60C5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "detail-info"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9000\u6B3E\u91D1\u989D")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value number-font"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), detail.amount / 100]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "small"
          }, [(_detailRef$value$appl = detailRef.value.applyRefundChannelInfos) === null || _detailRef$value$appl === void 0 ? void 0 : _detailRef$value$appl.map(function (item, index, arr) {
            if (item.refundAmount > 0) {
              var _PAYMENT_CHANNEL_OPTI;
              return "".concat(((_PAYMENT_CHANNEL_OPTI = constants/* PAYMENT_CHANNEL_OPTIONS */.AL.find(function (i) {
                return i.value === item.paymentChannel;
              })) === null || _PAYMENT_CHANNEL_OPTI === void 0 ? void 0 : _PAYMENT_CHANNEL_OPTI.label2) || '', "\u9000\u56DE\n ").concat((item.refundAmount / 100).toFixed(2), " \u5143");
            }
          }).join('，')])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7533\u8BF7\u6570\u91CF")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xD7 "), detail.subOrder.count])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7533\u8BF7\u65F6\u95F4")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(_detail$createTime = detail.createTime) !== null && _detail$createTime !== void 0 ? _detail$createTime : '-'])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item",
            "onClick": function onClick() {
              (0,lib/* useCopyText */.sc)(detail.afterSaleOrderNo);
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u5355\u53F7")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [detail.afterSaleOrderNo, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "copy-btn"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u590D\u5236")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u7C7B\u578B")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(_AFTER_SALE_TYPE_OPTI = constants/* AFTER_SALE_TYPE_OPTIONS */.xN.find(function (item) {
            return item.value === detail.type;
          })) === null || _AFTER_SALE_TYPE_OPTI === void 0 ? void 0 : _AFTER_SALE_TYPE_OPTI.label])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u539F\u56E0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [detail.reason])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item",
            "onClick": onDescClick
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8865\u5145\u8BF4\u660E")]), detail.describe ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "max-2-line"
          }, [detail.describe])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value null"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65E0\u5185\u5BB9")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item images",
            "onClick": onDescClick
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u51ED\u8BC1\u56FE\u7247")]), ((_detail$attachments = detail.attachments) === null || _detail$attachments === void 0 ? void 0 : _detail$attachments.length) > 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['desc-images', ((_detail$attachments2 = detail.attachments) === null || _detail$attachments2 === void 0 ? void 0 : _detail$attachments2.length) > 3 && 'desc-images-4']
          }, [(_detail$attachments3 = detail.attachments) === null || _detail$attachments3 === void 0 ? void 0 : _detail$attachments3.slice(0, 4).map(function (item, index) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "desc-image"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
              "class": "image",
              "src": item,
              "mode": "aspectFill"
            }, null), index === 3 && detail.attachments.length > 4 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "count"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF0B"), detail.attachments.length - 3])]);
          })])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value null"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u672A\u4E0A\u4F20\u56FE\u7247")])])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "after-sale-result__action-bar"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "content"
          }, [cancelVisible.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "action",
            "onClick": onCancelAfterSale
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53D6\u6D88\u7533\u8BF7")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "action"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8054\u7CFB\u5BA2\u670D"), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Button */.$n, {
            "class": "btn",
            "openType": "contact"
          }, null)])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "after-sale-result__action-bar--block"
          }, null)]);
        }
      });
    };
  }
}));

/** 提交退回物流信息 */
var commitExpressInfo = function commitExpressInfo(options, callBack) {
  var _options$expressName, _options$expressNo;
  var expressName = (0,reactivity_esm_bundler/* ref */.KR)((_options$expressName = options === null || options === void 0 ? void 0 : options.expressName) !== null && _options$expressName !== void 0 ? _options$expressName : '');
  var expressNo = (0,reactivity_esm_bundler/* ref */.KR)((_options$expressNo = options === null || options === void 0 ? void 0 : options.expressNo) !== null && _options$expressNo !== void 0 ? _options$expressNo : '');
  var focus = (0,reactivity_esm_bundler/* ref */.KR)(false);
  setTimeout(function () {
    focus.value = true;
  }, 600);
  var onScanCode = function onScanCode() {
    if (true) {
      scanCode({
        success: function success(res) {
          expressNo.value = res.result;
        }
      });
    } else // removed by dead control flow
{}
  };
  var confirm = function confirm() {
    if (!expressName.value) {
      (0,lib/* useToast */.dj)('请选择物流公司');
      return void 0;
    } else if (!expressNo.value) {
      (0,lib/* useToast */.dj)('请输入物流单号');
      return void 0;
    }
    callBack === null || callBack === void 0 || callBack({
      expressName: expressName.value,
      expressNo: expressNo.value
    });
    modal.close();
  };
  var modal = (0,lib/* useModal */.hS)({
    title: '填写退回物流信息',
    height: 600,
    content: function content() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "after-sale-commit-express"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "tip"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BF7\u6839\u636E\u5546\u5BB6\u63D0\u4F9B\u552E\u540E\u5730\u5740\u81EA\u884C\u5BC4\u51FA\uFF0C\u5E76\u586B\u5199\u7269\u6D41\u4FE1\u606F\u3002")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "input-wrap"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "label"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7269\u6D41\u5355\u53F7")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Input */.pd, {
        "class": "input",
        "autoFocus": focus.value,
        "focus": focus.value,
        "value": expressNo.value,
        "alwaysEmbed": true,
        "onInput": function onInput(e) {
          expressNo.value = e.detail.value;
        },
        "onBlur": function onBlur() {
          focus.value = false;
        },
        "onConfirm": confirm
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "scan",
        "onClick": onScanCode
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "scan-code"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "input-wrap",
        "onClick": function onClick() {
          focus.value = false;
          selectExpressCompany(expressName.value, function (name) {
            expressName.value = name;
          });
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "label"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7269\u6D41\u516C\u53F8")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "input"
      }, [expressName.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "action",
        "onClick": confirm
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u786E\u5B9A")])]);
    }
  });
};
var selectExpressCompany = function selectExpressCompany(name, callback) {
  var nameRef = (0,reactivity_esm_bundler/* ref */.KR)(name || '');
  var onCheck = function onCheck(name) {
    nameRef.value = name;
    (0,custom_component/* nextTick */.d)(function () {
      callback === null || callback === void 0 || callback(nameRef.value);
      modal.close();
    });
  };
  var modal = (0,lib/* useModal */.hS)({
    title: '选择物流公司',
    height: 600,
    maskVisible: false,
    content: function content() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "after-sale-select-express"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "list"
      }, [config/* EXPRESS_COMPANY_OPTIONS */.Yy.map(function (item) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "item",
          "onClick": function onClick() {
            onCheck(item.value);
          }
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Radio */.sx, {
          "checked": item.value === nameRef.value
        }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "text"
        }, [item.value])]);
      })])]);
    }
  });
};

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
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5788);
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

/***/ 5577:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v$: function() { return /* binding */ ShopList; }
/* harmony export */ });
/* unused harmony export useGoodsSuitableShops */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7970);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5788);
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
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 20 modules
var src = __webpack_require__(5788);
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
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5788);
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

/***/ })

}]);
//# sourceMappingURL=457.js.map