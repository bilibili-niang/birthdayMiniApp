"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[124],{

/***/ 7124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7970);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6618);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5788);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1880);
/* harmony import */ var _components_goods_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7889);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3058);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5816);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9700);












/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'GoodsListPage',
  props: {
    // 如果作为选择器,则换个请求接口
    asSelector: {
      type: Boolean,
      default: false
    },
    select: {
      type: Function,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['change'],
  setup: function setup(props, _ref) {
    var _route$params$keyword;
    var emit = _ref.emit;
    var route = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useRouter */ .Ay.useRouter();
    var initialKeywords = decodeURIComponent((_route$params$keyword = route.params.keywords) !== null && _route$params$keyword !== void 0 ? _route$params$keyword : '');
    var appStore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useAppStore */ .CU)();
    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_10__/* .storeToRefs */ .bP)(appStore),
      commonPageHeightStyle = _storeToRefs.commonPageHeightStyle;
    var styleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return {
        height: "".concat(appStore.menuButtonRect.height + 2, "px")
      };
    });
    var keywords = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(initialKeywords);
    var onSearchClick = function onSearchClick() {
      (0,_router__WEBPACK_IMPORTED_MODULE_8__/* .navigateToSearch */ .tr)({
        redirect: true,
        keywords: keywords.value
      });
    };
    var _usePagination = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .usePagination */ .WQ)({
        requestHandler: function requestHandler(pagination) {
          return props !== null && props !== void 0 && props.asSelector ? (0,_api__WEBPACK_IMPORTED_MODULE_9__/* .$getGoodsList */ .pW)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, pagination), {}, {
            keywords: keywords.value
          })) : (0,_api__WEBPACK_IMPORTED_MODULE_9__/* .requestGetSearchResults */ .aM)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, pagination), {}, {
            keywords: keywords.value
          }));
        }
      }),
      fetchData = _usePagination.fetchData,
      data = _usePagination.data,
      refreshData = _usePagination.refreshData,
      refresherTriggered = _usePagination.refresherTriggered,
      CommonPaginationStatus = _usePagination.CommonPaginationStatus;
    fetchData();
    var goodsList = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      return data.value.map(function (item) {
        var _item$coverImages;
        var goods = {
          id: item.id,
          name: item.title,
          price: item.priceMin,
          priceMax: item.priceMax,
          listPrice: item.underlinePrice,
          image: (_item$coverImages = item.coverImages) === null || _item$coverImages === void 0 ? void 0 : _item$coverImages[0]
        };
        return goods;
      });
    });
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .BasePage */ .vo, {
        "navigator": {
          showMenuButton: false,
          title: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "style": styleRef.value,
            "class": "p_goods-list__search",
            "onClick": onSearchClick
          }, [props !== null && props !== void 0 && props.asSelector ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", null, null) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_5__/* .Search */ .vj, {
            "value": keywords.value,
            "placeholder": "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u5185\u5BB9"
          }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "clear",
            "onClick": function onClick() {
              keywords.value = '';
            }
          }, null)])
        },
        "class": "p_goods-list"
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__/* .ScrollView */ .BM, {
            "scrollY": true,
            "refresherEnabled": true,
            "refresherTriggered": refresherTriggered.value,
            "onRefresherrefresh": function onRefresherrefresh() {
              return refreshData();
            },
            "class": "p_goods-list__scroll",
            "style": commonPageHeightStyle.value
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
                "class": "p_goods-list__content"
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_components_goods_list__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                "list": goodsList.value,
                "asSelector": props.asSelector,
                "select": function select(e) {
                  emit('change', e);
                }
              }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(CommonPaginationStatus, null, null)])];
            }
          })];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=124.js.map