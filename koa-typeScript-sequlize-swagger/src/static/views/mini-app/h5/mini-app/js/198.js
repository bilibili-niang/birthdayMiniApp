"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[198],{

/***/ 8198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ jd_cashier; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/url-parse@1.5.10/node_modules/url-parse/index.js
var url_parse = __webpack_require__(1337);
var url_parse_default = /*#__PURE__*/__webpack_require__.n(url_parse);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/custom-component.js
var custom_component = __webpack_require__(8274);
;// ./src/packageOther/jd-cashier/api.ts


/** 提交京东 */
var $createJdOrder = function $createJdOrder(params) {
  // // if (process.env.TARO_ENV === 'h5' && location.href.includes('jd-debug=true')) {
  // return Promise.resolve({
  //   code: 200,
  //   data: {
  //     orderNo: 'MO20250213101642205747',
  //     subOrderNos: ['SO20250213101642977979'],
  //     unifiedOrderNo: 'UO20250213101643452801'
  //   },
  //   msg: '操作成功',
  //   success: true
  // })
  // // }

  return (0,lib/* request */.Em)({
    url: '/kuoka-microstore-hlgt-wap/m/jdjl/order',
    method: 'post',
    data: params
  });
};
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
;// ./src/packageOther/jd-cashier/index.tsx









/* harmony default export */ var jd_cashier = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'JdCashier',
  setup: function setup() {
    var route = taro/* default.useRouter */.Ay.useRouter();
    var link =  true ? url_parse_default()(decodeURIComponent(window.location.href), true) : 0;
    var _route$params$link$qu = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, route.params), link.query),
      _route$params$link$qu2 = _route$params$link$qu.uid,
      uid = _route$params$link$qu2 === void 0 ? '' : _route$params$link$qu2,
      _route$params$link$qu3 = _route$params$link$qu.submitOrderTime,
      submitOrderTime = _route$params$link$qu3 === void 0 ? '' : _route$params$link$qu3,
      _route$params$link$qu4 = _route$params$link$qu.orderId,
      orderId = _route$params$link$qu4 === void 0 ? '' : _route$params$link$qu4,
      _route$params$link$qu5 = _route$params$link$qu.totalMoney,
      totalMoney = _route$params$link$qu5 === void 0 ? '' : _route$params$link$qu5,
      _route$params$link$qu6 = _route$params$link$qu.freight,
      freight = _route$params$link$qu6 === void 0 ? '' : _route$params$link$qu6,
      _route$params$link$qu7 = _route$params$link$qu.sign,
      sign = _route$params$link$qu7 === void 0 ? '' : _route$params$link$qu7,
      _route$params$link$qu8 = _route$params$link$qu.orderNo,
      orderNo = _route$params$link$qu8 === void 0 ? '' : _route$params$link$qu8,
      _route$params$link$qu9 = _route$params$link$qu.unifiedOrderNo,
      unifiedOrderNo = _route$params$link$qu9 === void 0 ? '' : _route$params$link$qu9;
    var params = {
      merchantId: (0,lib/* useAppStore */.CU)().merchantId,
      uid: uid,
      submitOrderTime: submitOrderTime,
      orderId: orderId,
      totalMoney: totalMoney,
      freight: freight,
      sign: sign,
      orderNo: orderNo,
      unifiedOrderNo: unifiedOrderNo
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      onCreateOrder();
    });
    var state = (0,reactivity_esm_bundler/* reactive */.Kh)({
      orderNo: '',
      unifiedOrderNo: '',
      status: 'loading'
    });
    var onCreateOrder = function onCreateOrder() {
      // 小程序 WebView 环境中，直接重定向到此页面的小程序页
      if ( true && window.__wxjs_environment === 'miniprogram') {
        (0,lib/* useToast */.dj)('打开小程序中...');
        console.log('打开小程序中...', (0,lib/* buildUrl */.c$)('/packageOther/jd-cashier/index', params));
        window.wx.miniProgram.redirectTo({
          url: (0,lib/* buildUrl */.c$)('/packageOther/jd-cashier/index', params)
        });
        return void 0;
      }
      if (orderNo && unifiedOrderNo) {
        onPay(orderNo, unifiedOrderNo);
        return void 0;
      }
      (0,lib/* useLoading */.M3)();
      $createJdOrder(params).then(function (res) {
        var _ref = res.data || {},
          orderNo = _ref.orderNo,
          unifiedOrderNo = _ref.unifiedOrderNo;
        state.orderNo = orderNo;
        state.unifiedOrderNo = unifiedOrderNo;
        if (orderNo && unifiedOrderNo) {
          state.status = 'success';
          onPay(orderNo, unifiedOrderNo);
        } else {
          state.status = 'error';
        }
        (0,lib/* useResponseMessage */.Cd)(res);
      }).catch(function (err) {
        (0,lib/* useResponseMessage */.Cd)(err);
        state.status = 'error';
      }).finally(lib/* useLoadingEnd */.dA);
    };
    var onPay = (0,lib/* withLogin */.E6)(function () {
      var orderNo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state.orderNo;
      var unifyOrderNo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : state.unifiedOrderNo;
      state.status = 'pay';
      if ( true && window.__wxjs_environment === 'miniprogram') {
        // 小程序 WebView 环境中，直接重定向到小程序支付结果页，由小程序完成支付

        window.wx.miniProgram.redirectTo({
          url: (0,lib/* buildUrl */.c$)('/packageA/pay/result', {
            orderNo: orderNo,
            unifyOrderNo: unifyOrderNo,
            supplier: 'jd'
          })
        });
        return void 0;
      }
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
              supplier: 'jd',
              redirect: true
            });
          },
          // h5（未支持支付） -> 打开小程序支付结果页 -> 完成支付
          payResultPath: (0,lib/* buildUrl */.c$)('/packageA/pay/result', {
            orderNo: orderNo,
            unifyOrderNo: unifyOrderNo,
            supplier: 'jd'
          })
        });
      });

      // return void 0

      // if (process.env.TARO_ENV !== 'h5') {
      //   useToast('请在小程序环境中打开')
      //   return void 0
      // } else {
      //   if (window.__wxjs_environment === 'miniprogram') {
      //     // 重定向到小程序的支付页，连同参数一起传进去
      //     window.wx.miniProgram.redirectTo({
      //       url: '/packageA/pay/result'
      //     })
      //   } else {
      //     useToast('请在小程序环境中打开')
      //   }
      // }
    });
    var Content = function Content() {
      if (state.status === 'loading') {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
          "image": (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null),
          "description": "\u8BA2\u5355\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019"
        }, null);
      } else if (state.status === 'error') {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
          "title": "\u8BA2\u5355\u5F02\u5E38",
          "description": "\u65E0\u6CD5\u5B8C\u6210\u652F\u4ED8\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"
        }, null);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "jd-cashier-page"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "jd-cashier"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u60A8\u6709\u4E00\u7B14\u8BA2\u5355\u5F85\u652F\u4ED8~")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "subtitle"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BF7\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u5B8C\u6210\u652F\u4ED8\uFF0C\u907F\u514D\u8D85\u65F6\u8BA2\u5355\u81EA\u52A8\u53D6\u6D88")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-button",
        "onClick": function onClick() {
          return onPay();
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u652F\u4ED8")])])]);
    };
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "needLogin": true,
        "navigator": state.status !== 'error' ?  true ? null : 0 : {
          title: '订单异常'
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(Content, null, null)];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=198.js.map