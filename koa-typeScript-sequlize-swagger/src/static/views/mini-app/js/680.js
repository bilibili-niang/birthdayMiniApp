"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[680],{

/***/ 6680:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7970);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4243);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9700);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1880);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7888);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6618);
/* harmony import */ var _hooks_useAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1173);
/* harmony import */ var _api_information__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1566);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4078);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5788);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3058);












function replaceHtmlEntities() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/[\'\"\\\/\b\f\n\r\t]/g, '')
  // .replace(/[\@\#\$\%\^\&\*\{\}\:\"\L\<\>\? ]/, '')
  .replace(/&nbsp;/g, ' ') // 将 &nbsp; 替换为空格
  .replace(/&ldquo;/g, '“') // 将 &ldquo; 替换为“
  .replace(/&rdquo;/g, '”') // 将 &rdquo; 替换为”
  .replace(/&mdash;/g, '—') // 将 &mdash; 替换为—
  .replace(/&ndash;/g, '–') // 将 &ndash; 替换为–
  .replace(/&hellip;/g, '…') // 将 &hellip; 替换为…
  .replace(/&amp;/g, '&') // 将 &amp; 替换为 &
  .replace(/&quot;/g, '"') // 将 &quot; 替换为 "
  .replace(/&apos;/g, "'") // 将 &apos; 替换为 '
  .replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  }); // 将 &#123; 替换为对应的字符
}
var MessageItem = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .defineComponent */ .pM)({
  props: {
    uid: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    contentType: {
      type: Number
    },
    action: {
      type: Object
    },
    hasFavorite: {
      type: Boolean,
      default: false
    },
    // 是否作为选择器
    asSelector: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    var useClick = function useClick() {
      if (props.asSelector) {
        // console.log('选择器,不用触发')
      } else {
        // 为0是链接
        if (props.contentType === 0) {
          (0,_hooks_useAction__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(props.action);
        } else {
          (0,_router__WEBPACK_IMPORTED_MODULE_11__/* .navigateToInformationDetail */ .iJ)(props.uid);
        }
      }
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
        "class": [props.asSelector ? 'information-card-selector' : 'information-card', props.contentType === 0 && 'isAHref']
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
        "class": "information-card__content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
        "class": "information-card__text"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
        "class": "information-card__title",
        "onClick": useClick
      }, [props.title]), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
        "class": "information-card__desc",
        "onClick": useClick
      }, [props.subtitle])]), props.image && (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__/* .Image */ ._V, {
        "class": "information-card__thumbnail",
        "mode": "aspectFill",
        "src": props.image,
        "onClick": useClick
      }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
        "class": "information-card__footer",
        "onClick": useClick
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("span", {
        "class": "information-card__type"
      }, null), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("span", {
        "class": "information-card__date"
      }, [props.date])])]);
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_1__/* .defineComponent */ .pM)({
  name: 'InformationList',
  props: {
    // 是否作为选择器
    asSelector: {
      type: Boolean,
      default: false
    },
    // 选择触发
    onChange: {
      type: Function,
      default: function _default() {
        return {};
      }
    }
  },
  setup: function setup(props) {
    var router = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useRouter */ .Ay.useRouter();
    var key = router.params.key;
    var navTitle = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .computed */ .EW)(function () {
      return '资讯列表';
    });
    var appStore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_9__/* .useAppStore */ .CU)();
    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_3__/* .storeToRefs */ .bP)(appStore),
      commonNavigatorHeight = _storeToRefs.commonNavigatorHeight;
    var current = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)(1);
    var keywords = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)(key || '');

    /** 清除数据 */
    var clearState = function clearState() {
      current.value = 1;
    };
    var _usePagination = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_9__/* .usePagination */ .WQ)({
        requestHandler: function requestHandler(params) {
          return (0,_api_information__WEBPACK_IMPORTED_MODULE_8__/* .getInformationList */ .Jb)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, params), {}, {
            descs: 'create_time',
            title: keywords.value
          }));
        }
      }),
      Loading = _usePagination.Loading,
      data = _usePagination.data,
      refreshData = _usePagination.refreshData,
      refresherTriggered = _usePagination.refresherTriggered,
      fetchData = _usePagination.fetchData,
      ErrorStatus = _usePagination.ErrorStatus,
      Empty = _usePagination.Empty,
      EndTip = _usePagination.EndTip;
    var onSearch = function onSearch(v) {
      keywords.value = v;
      isFocused.value = true;
      // 静默刷新
      refreshData({
        isRefresherPulling: false
      });
    };
    var onChange = function onChange(text) {
      keywords.value = text;
    };
    var isFocused = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)(false);
    (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .onMounted */ .sV)(fetchData);
    return function () {
      if (props.asSelector) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__/* .ScrollView */ .BM, {
          "scrollY": true,
          "refresherEnabled": true,
          "refresherBackground": "transparent",
          "onRefresherrefresh": refreshData,
          "onScrolltolower": fetchData,
          "refresherTriggered": refresherTriggered.value,
          "class": "information-list-as-selector"
        }, {
          default: function _default() {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
              "class": "list-content"
            }, [data.value.map(function (item) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(MessageItem, {
                "asSelector": true,
                "onClick": function onClick() {
                  if (item.contentType === 0) {
                    (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__/* .showToast */ .P0)({
                      title: '不支持选择链接',
                      icon: 'none'
                    });
                  } else {
                    props.onChange(item);
                  }
                },
                "uid": item.id,
                "title": item.title,
                "subtitle": item.subtitle || item.content,
                "image": item.coverImageUri,
                "category": item.category,
                "date": item.createTime,
                "contentType": item.contentType,
                "action": item.jumpUrl,
                "hasFavorite": item.hasFavorite
              }, null);
            })])];
          }
        });
      } else {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_9__/* .BasePage */ .vo, {
          "navigator": {
            title: navTitle.value
          },
          "class": "information-list-page"
        }, {
          default: function _default() {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
              "class": "information-page__header",
              "style": {
                top: "".concat(commonNavigatorHeight.value, "px")
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_10__/* .Search */ .vj, {
              "onSearch": onSearch,
              "focus": isFocused.value,
              "value": keywords.value,
              "onChange": onChange,
              "onFocus": function onFocus() {
                return isFocused.value = true;
              },
              "placeholder": "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u5185\u5BB9"
            }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__/* .ScrollView */ .BM, {
              "scrollY": true,
              "refresherEnabled": true,
              "refresherBackground": "transparent",
              "onRefresherrefresh": refreshData,
              "onScrolltolower": fetchData,
              "refresherTriggered": refresherTriggered.value,
              "class": ['information-page', 'typeHidden']
            }, {
              default: function _default() {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)("div", {
                  "class": "list-content"
                }, [data.value.map(function (item) {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .createVNode */ .bF)(MessageItem, {
                    "uid": item.id,
                    "title": item.title,
                    "subtitle": item.subtitle || item.content,
                    "image": item.coverImageUri,
                    "category": item.category,
                    "date": item.createTime,
                    "contentType": item.contentType,
                    "action": item.jumpUrl,
                    "hasFavorite": item.hasFavorite
                  }, null);
                })])];
              }
            })];
          }
        });
      }
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=680.js.map