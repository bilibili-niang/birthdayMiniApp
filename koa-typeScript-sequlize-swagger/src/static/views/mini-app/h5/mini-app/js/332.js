"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[332],{

/***/ 332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4078);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1880);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8506);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5816);
/* harmony import */ var _components_goods_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9788);
/* harmony import */ var _components_count_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9519);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5788);
/* harmony import */ var _stores_merchant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9181);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9700);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6618);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7468);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9180);














/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: '',
  setup: function setup() {
    var route = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useRouter */ .Ay.useRouter();
    var paramsMainOrderNo = route.params.mainOrderNo;
    var paramsType = route.params.type;
    var paramsOrders = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .safeParse */ .xL)(decodeURIComponent(decodeURIComponent(route.params.orders || ''))) || [];
    var detailRef = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)();
    var getOrder = function getOrder() {
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)({
        toastVisible: false,
        text: ''
      });
      (0,_api__WEBPACK_IMPORTED_MODULE_5__/* .getGoodsOrderDetail */ .aG)(paramsMainOrderNo).then(function (res) {
        if (res.code === 200) {
          detailRef.value = res.data;
        } else {
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useResponseMessage */ .Cd)(res);
        }
      }).catch(function (err) {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useResponseMessage */ .Cd)(err);
      }).finally(function () {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
      });
    };
    var initialStates = paramsOrders.map(function (item) {
      return {
        mainOrderNo: paramsMainOrderNo,
        type: Number(paramsType),
        orderNo: item.orderNo,
        reason: item.reason || '',
        count: null,
        amount: null,
        desc: '',
        images: [],
        $refundAmountCalculator: null,
        $calcAmount: null
      };
    });
    var states = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .reactive */ .Kh)(initialStates);
    var totalCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return states.reduce(function (v, item) {
        return v + item.count;
      }, 0);
    });
    var totalAmount = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return states.reduce(function (v, item) {
        return v + Number(item.amount);
      }, 0).toFixed(2);
    });
    var cancelCalcAmount;
    var calcAmount = function calcAmount(index) {
      var _cancelCalcAmount, _cancelCalcAmount$can;
      var state = states[index];
      (_cancelCalcAmount = cancelCalcAmount) === null || _cancelCalcAmount === void 0 || (_cancelCalcAmount$can = _cancelCalcAmount.cancel) === null || _cancelCalcAmount$can === void 0 || _cancelCalcAmount$can.call(_cancelCalcAmount);
      cancelCalcAmount = axios__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.CancelToken.source();
      (0,_api__WEBPACK_IMPORTED_MODULE_5__/* .$getRefundAmountCalculator */ .nM)(state.mainOrderNo, {
        amount: state.amount * 100
      }, cancelCalcAmount).then(function (res) {
        state.$refundAmountCalculator = res.data || [];
        state.$calcAmount = state.amount;
      }).catch(function (err) {
        console.log(err);
      });
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .wB)(function () {
      return states;
    }, function (newValue, oldValue) {
      newValue.forEach(function (item, index) {
        if (item.amount && (oldValue === null || oldValue === void 0 ? void 0 : oldValue[index].$calcAmount) !== item.amount) {
          calcAmount(index);
        }
      });
    }, {
      immediate: true,
      deep: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .onMounted */ .sV)(function () {
      getOrder();
    });
    var orders = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return paramsOrders.map(function (item) {
        var _detailRef$value;
        return (_detailRef$value = detailRef.value) === null || _detailRef$value === void 0 ? void 0 : _detailRef$value.subOrders.find(function (o) {
          return o.orderNo === item.orderNo;
        });
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .wB)(function () {
      return orders.value;
    }, function () {
      var _orders$value;
      (_orders$value = orders.value) === null || _orders$value === void 0 || _orders$value.map(function (item, index) {
        onCountChange(index, item.count);
      });
    });
    var onCountChange = function onCountChange(index, count) {
      states[index].count = count;
      states[index].amount = Number(orders.value[index].$payUnitAmountText) * count;
    };
    var onConfirm = function onConfirm() {
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoading */ .M3)();
      Promise.allSettled(states.map(function (item) {
        return (0,_api__WEBPACK_IMPORTED_MODULE_5__/* .requestSubmitAfterSale */ .Ls)({
          mainOrderNo: item.mainOrderNo,
          subOrderNo: item.orderNo,
          amount: item.amount * 100,
          count: item.count,
          reason: item.reason,
          desc: item.desc,
          images: item.images,
          type: item.type
        });
      })).then(function () {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .navigateBack */ .Tl)();
        setTimeout(function () {
          (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .dj)('售后申请提交成功');
        }, 320);
      }).catch(function (err) {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useResponseMessage */ .Cd)(err);
      }).finally(function () {
        (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useLoadingEnd */ .dA)();
      });
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .BasePage */ .vo, {
        "navigator": {
          title: '确认售后信息'
        }
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "after-sale-confirm-page"
          }, [orders.value.map(function (item, index) {
            var _state$desc, _state$images, _item$goodsStockSnaps, _item$goodsStockSnaps2, _item$goodsSnapshot, _state$$refundAmountC;
            var state = states[index];
            if (!item) {
              return null;
            }
            var noDesc = !(((_state$desc = state.desc) === null || _state$desc === void 0 ? void 0 : _state$desc.length) > 0 || ((_state$images = state.images) === null || _state$images === void 0 ? void 0 : _state$images.length) > 0);
            var price = Number(item.payAmountText) / item.count || item.payAmountText;
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "order-item"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_components_goods_item__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
              "type": "horizontal",
              "image": (_item$goodsStockSnaps = (_item$goodsStockSnaps2 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2.specs) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2[0]) === null || _item$goodsStockSnaps2 === void 0 ? void 0 : _item$goodsStockSnaps2.image) !== null && _item$goodsStockSnaps !== void 0 ? _item$goodsStockSnaps : (_item$goodsSnapshot = item.goodsSnapshot) === null || _item$goodsSnapshot === void 0 || (_item$goodsSnapshot = _item$goodsSnapshot.coverImages) === null || _item$goodsSnapshot === void 0 ? void 0 : _item$goodsSnapshot[0],
              "name": item.goodsName,
              "price": price,
              "desc": item.goodsStockSnapshot.specs.map(function (spec) {
                return spec.v;
              }).join('／'),
              "action": (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                "class": "order-detail__goods-count"
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xD7 "), item.count])
            }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "split"
            }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "info-item",
              "onClick": function onClick() {
                chooseReason(paramsOrders[index].reason, function (text) {
                  state.reason = text;
                });
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "label"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u552E\u540E\u539F\u56E0")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "value"
            }, [state.reason]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .In, {
              "name": "right"
            }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "info-item"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "label"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7533\u8BF7\u6570\u91CF")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "value"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_components_count_stepper__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
              "class": "stepper",
              "size": "small",
              "value": state.count,
              "min": 1,
              "max": item.count,
              "onChange": function onChange(c) {
                onCountChange(index, c);
              },
              "maxMessage": "\u4E0D\u80FD\u8D85\u51FA\u8BA2\u5355\u6570\u91CF",
              "minMessage": "\u6700\u5C11\u7533\u8BF7 1 \u4EF6"
            }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "small"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u6700\u591A\u53EF\u7533\u8BF7 "), item.count, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)(" \u4EF6")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .In, {
              "name": "right",
              "style": "opacity:0"
            }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "info-item",
              "onClick": function onClick() {
                editRefundAmount(state.amount, Number(item.$payUnitAmountText) * state.count, function (a) {
                  state.amount = a;
                  calcAmount(index);
                });
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "label"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u9000\u6B3E\u91D1\u989D")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "value"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "amount"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "yen"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")]), state.amount.toFixed(2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "refund-calculator"
            }, [(_state$$refundAmountC = state.$refundAmountCalculator) === null || _state$$refundAmountC === void 0 ? void 0 : _state$$refundAmountC.map(function (item, index, arr) {
              if (item.refundAmount > 0) {
                var _PAYMENT_CHANNEL_OPTI;
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", null, [(_PAYMENT_CHANNEL_OPTI = _constants__WEBPACK_IMPORTED_MODULE_12__/* .PAYMENT_CHANNEL_OPTIONS */ .AL.find(function (i) {
                  return i.value === item.paymentChannel;
                })) === null || _PAYMENT_CHANNEL_OPTI === void 0 ? void 0 : _PAYMENT_CHANNEL_OPTI.label2, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u9000\u56DE \xA0"), (item.refundAmount / 100).toFixed(2), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA0\u5143")]);
              }
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .In, {
              "name": "right"
            }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "info-item",
              "onClick": function onClick() {
                editDescription({
                  desc: state.desc,
                  images: state.images
                }, function (d) {
                  state.desc = d.desc;
                  state.images = d.images;
                });
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "label"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u4E0A\u4F20\u63CF\u8FF0\u548C\u51ED\u8BC1"), noDesc && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "small primary"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8865\u5145\u63CF\u8FF0\uFF0C\u6709\u52A9\u4E8E\u5546\u5BB6\u5904\u7406\u552E\u540E\u95EE\u9898")])]), noDesc ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "value placeholder"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u672A\u586B\u5199")]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "value placeholder"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u4FEE\u6539")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .In, {
              "name": "right"
            }, null), !noDesc && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "order-item-desc"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "subtitle"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u63CF\u8FF0\u5185\u5BB9")]), state.desc ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "text"
            }, [state.desc]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "text placeholder"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u672A\u586B\u5199\u6587\u5B57\u63CF\u8FF0")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "subtitle"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u51ED\u8BC1\u56FE\u7247")]), state.images.length > 0 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__/* .ScrollView */ .BM, {
              "class": "desc-images-scroller",
              "scrollX": true
            }, {
              default: function _default() {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                  "class": "desc-images"
                }, [state.images.map(function (item, index) {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                    "class": "image-wrap",
                    "onClick": (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .withModifiers */ .D$)(function () {
                      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .usePreviewImages */ .yj)({
                        urls: state.images,
                        current: index
                      });
                    }, ['stop'])
                  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__/* .Image */ ._V, {
                    "class": "image",
                    "src": item,
                    "mode": "aspectFill"
                  }, null)]);
                })])];
              }
            }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
              "class": "text placeholder"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u672A\u4E0A\u4F20")])])])]);
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "footer"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "tip"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5171 "), totalCount.value, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)(" \u4EF6\uFF0C\u9884\u8BA1\u5C06\u9000\u6B3E"), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "amount"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "yen"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")]), totalAmount.value])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "action",
            "onClick": onConfirm
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u63D0\u4EA4\u7533\u8BF7")])])])];
        }
      });
    };
  }
}));
var chooseReason = function chooseReason(text, callback) {
  var merchantStore = (0,_stores_merchant__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)();
  var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_10__/* .storeToRefs */ .bP)(merchantStore),
    reasonOptions = _storeToRefs.reasonOptions;
  var checkedReason = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(text || '');
  var modal = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .hS)({
    title: '选择售后原因',
    height: 'auto',
    content: function content() {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "after-sale-reasons"
      }, [reasonOptions.value.map(function (text) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "item",
          "onClick": function onClick() {
            checkedReason.value = text;
            setTimeout(function () {
              modal.close();
              callback(text);
            }, 100);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_8__/* .Radio */ .sx, {
          "checked": text === checkedReason.value
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "text"
        }, [text])]);
      })]);
    }
  });
};
var editRefundAmount = function editRefundAmount(amount, max, callback) {
  var amountRef = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(String(amount));
  var focus = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(false);
  setTimeout(function () {
    focus.value = true;
  }, 600);
  var format = function format() {
    var value = Number(amountRef.value);
    if (!amountRef.value || Number.isNaN(value)) {
      amountRef.value = max.toFixed(2);
      return void 0;
    }
    value = value > max ? max : value > 0 ? value : 0;
    amountRef.value = value.toFixed(2);
  };
  var confirm = function confirm() {
    format();
    var value = Number(amountRef.value);
    callback(value);
    modal.close();
  };
  var modal = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .hS)({
    title: '修改退款金额',
    content: function content() {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "after-sale-edit-amount"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "tip"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8BF7\u8F93\u5165\u610F\u5411\u9000\u6B3E\u91D1\u989D\uFF0C\u6700\u591A\u53EF\u9000"), ' ', (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "amount"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "yen"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")]), max.toFixed(2)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "input-wrap"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u9000\u6B3E\u91D1\u989D")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .pd, {
        "class": "input",
        "type": "digit",
        "autoFocus": focus.value,
        "focus": focus.value,
        "value": amountRef.value,
        "alwaysEmbed": true,
        "onInput": function onInput(e) {
          amountRef.value = e.detail.value;
        },
        "onBlur": function onBlur() {
          focus.value = false;
          format();
        },
        "onConfirm": confirm
      }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "action",
        "onClick": confirm
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u786E\u5B9A")])]);
    }
  });
};
var editDescription = function editDescription(options, callback) {
  var _options$desc, _options$images;
  var state = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .reactive */ .Kh)({
    desc: (_options$desc = options.desc) !== null && _options$desc !== void 0 ? _options$desc : '',
    images: (_options$images = options.images) !== null && _options$images !== void 0 ? _options$images : []
  });
  var confirm = function confirm() {
    callback((0,vue__WEBPACK_IMPORTED_MODULE_3__/* .toRaw */ .ux)(state));
    modal.close();
  };
  var modal = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .hS)({
    title: '补充描述',
    height: 'max',
    content: function content() {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "after-sale-edit-desc"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "textarea-wrap"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "subtitle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u63CF\u8FF0\u5185\u5BB9")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__/* .Textarea */ .TM, {
        "class": "textarea",
        "placeholderClass": "placeholder",
        "cursorSpacing": 320,
        "placeholder": "\u8865\u5145\u63CF\u8FF0\uFF0C\u6709\u52A9\u4E8E\u5546\u5BB6\u5904\u7406\u552E\u540E\u95EE\u9898",
        "maxlength": 200,
        "adjustKeyboardTo": false,
        "adjustPosition": false,
        "value": state.desc,
        "onInput": function onInput(e) {
          state.desc = e.detail.value;
        }
      }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "count"
      }, [state.desc.length, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\uFF0F200")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "images-list"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "subtitle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u51ED\u8BC1\u56FE\u7247"), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "small"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\uFF08\u6700\u591A9\u5F20\uFF09")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_1__/* .ImageUploader */ .GA, {
        "maxCount": 9,
        "images": state.images,
        "onChange": function onChange(list) {
          state.images = list;
        }
      }, null)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "action",
        "onClick": confirm
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u786E\u5B9A")])]);
    }
  });
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
//# sourceMappingURL=332.js.map