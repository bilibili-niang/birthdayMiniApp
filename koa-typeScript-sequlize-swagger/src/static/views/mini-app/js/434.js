"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[434],{

/***/ 1434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ search; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/custom-component.js
var custom_component = __webpack_require__(8274);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/wxml/index.js + 4 modules
var wxml = __webpack_require__(1346);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
;// ./src/packageA/search/history-records.tsx






/* harmony default export */ var history_records = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'SearchHistoryRecords',
  setup: function setup() {
    var searchStore = (0,stores/* useSearchStore */.jB)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(searchStore),
      records = _storeToRefs.records;
    var clearRecords = function clearRecords() {
      searchStore.clearRecords(function () {
        toggleManage();
      });
    };
    var toggleManage = function toggleManage() {
      isEditing.value = !isEditing.value;
      isCollapse.value = !isEditing.value;
      if (!isEditing.value) {
        // 删除后可能导致折叠位置发生变化，需要重新计算
        calcCollapse();
      }
    };
    var tagQuery = (0,wxml/* createSelectorQuery */._Y)().select('.search-records__content').fields({
      size: true
    }).selectAll('.search-records__item').fields({
      size: true,
      computedStyle: ['margin']
    }).select('.search-records__collapse').fields({
      size: true,
      computedStyle: ['margin']
    });
    var isEditing = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var collapseIndex = (0,reactivity_esm_bundler/* ref */.KR)(-1);
    var collapseHeight = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var fullHeight = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var isCollapse = (0,reactivity_esm_bundler/* ref */.KR)(true);
    var initialized = false;
    var calcCollapse = function calcCollapse() {
      /** 延迟 300 ms 计算，防止和键盘抬起动作冲突 */
      if (!initialized) return void 0;
      // 编辑时默认展开
      if (isEditing.value) return void 0;
      if (records.value.length === 0) return void 0;
      // collapseIndex.value = -1
      tagQuery.exec(function (res) {
        if (!res[0]) return void 0;
        var container = res[0];
        var containerWidth = container.width;
        var collapse = res[2];
        var collapseWidth = collapse.width + parseFloat(collapse.margin) * 2;
        var items = res[1];
        var itemsWidth = items.map(function (item) {
          return item.width + parseFloat(item.margin) * 2;
        });
        var _calculateCollapseInd = calculateCollapseIndex(containerWidth, collapseWidth, itemsWidth),
          index = _calculateCollapseInd.index,
          rows = _calculateCollapseInd.rows;
        var rowHeight = collapse.height + parseFloat(collapse.margin) * 2;
        collapseHeight.value = rows * rowHeight;
        fullHeight.value = container.height + rowHeight;
        collapseIndex.value = index;
        if (collapseIndex.value === -1) {
          // 不显示展开按钮的情况下，默认折叠
          isCollapse.value = true;
        }
      });
    };

    // 搜索记录变化时（个数，顺序）重新计算折叠
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return records.value;
    }, function () {
      calcCollapse();
    }, {
      deep: true
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      setTimeout(function () {
        initialized = true;
        calcCollapse();
      }, 300);
    });
    taro/* default.useDidShow */.Ay.useDidShow(function () {
      calcCollapse();
    });
    var onItemClick = function onItemClick(index) {
      if (isEditing.value) {
        // 删除
        searchStore.removeRecord(index);
        if (records.value.length === 0) {
          toggleManage();
        }
      } else {
        // 搜索
        var text = records.value[index];
        searchStore.search(text);
      }
    };
    return function () {
      if (records.value.length === 0) {
        return null;
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "search-records__title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u641C\u7D22\u8BB0\u5F55"), isEditing.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "search-records__manager"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "search-records__clear",
        "onClick": clearRecords
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5168\u90E8\u5220\u9664")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "split"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4E28")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "search-records__exit-edit",
        "onClick": toggleManage
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5B8C\u6210")])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "trash",
        "class": "search-records__trash",
        "onClick": toggleManage
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['search-records', !isCollapse.value && 'expanding', isEditing.value && 'editing'],
        "style": {
          maxHeight: isCollapse.value ? collapseHeight.value + 'px' : fullHeight.value + 'px'
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "search-records__content"
      }, [records.value.map(function (text, index) {
        var tag = (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": ['search-records__item', collapseIndex.value !== -1 && index >= collapseIndex.value && 'overflow'],
          "onClick": function onClick() {
            return onItemClick(index);
          }
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
          "class": "text"
        }, [text]), isEditing.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
          "name": "close",
          "class": "search-records__remove"
        }, null)]);
        if (index === collapseIndex.value) {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "search-records__expand",
            "onClick": function onClick() {
              isCollapse.value = false;
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "down"
          }, null)]), tag];
        }
        return tag;
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "search-records__collapse",
        "onClick": function onClick() {
          isCollapse.value = true;
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "up"
      }, null)])])])]);
    };
  }
}));

/** 计算折叠下标索引 */
function calculateCollapseIndex(containerWidth, collapseWidth, itemsWidth) {
  var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
  var row = 1;
  var index = -1;
  var width = 0;
  var _rows = rows > 2 ? rows : 2;
  for (var i = 0; i < itemsWidth.length;) {
    width = width + itemsWidth[i];
    if (width > containerWidth) {
      if (row + 1 > _rows) {
        // 边界情况，刚好可以完全放下
        if (i === itemsWidth.length - 1 && width - collapseWidth < containerWidth) {
          index = -1;
        } else {
          index = i;
        }
        break;
      }
      row++;
      width = row === _rows ? collapseWidth : 0;
      continue;
    } else {
      i++;
    }
  }
  return {
    index: index,
    rows: row
  };
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ./src/hooks/useAction/index.ts + 2 modules
var useAction = __webpack_require__(1173);
;// ./src/packageA/search/hot-search.tsx








/* harmony default export */ var hot_search = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'HotSearch',
  setup: function setup() {
    var searchStore = (0,stores/* useSearchStore */.jB)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(searchStore),
      hotKeywords = _storeToRefs.hotKeywords,
      hotKeywordsEnable = _storeToRefs.hotKeywordsEnable,
      hotKeywordsVisibleCount = _storeToRefs.hotKeywordsVisibleCount;

    /** 点击，优先级：动作 > 实际搜索 > 按钮文本 */
    var onItemClick = function onItemClick(item) {
      if (item.action) {
        (0,useAction/* default */.A)(item.action);
      } else {
        searchStore.search(item.value || item.text);
      }
    };

    /** 显示的数据列表，数量为 count 的 2 倍以上效果最佳 */
    var renderData = (0,reactivity_esm_bundler/* ref */.KR)([]);
    /** 循环因子 */
    var factor = 0;

    /** 是否显示换一换 */
    var rollEnable = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return hotKeywords.value.length > hotKeywordsVisibleCount.value;
    });

    /** 换一换 */
    var rollTheChain = function rollTheChain() {
      var count = hotKeywordsVisibleCount.value;
      var data = hotKeywords.value;

      // 数量达不到可以换一换，直接全部返回
      if (data.length <= count) {
        renderData.value = data.slice(0);
        return void 0;
      }
      var loopChain = [].concat((0,toConsumableArray/* default */.A)(data), (0,toConsumableArray/* default */.A)(data));
      var startIndex = count * factor % data.length;
      renderData.value = loopChain.slice(startIndex, startIndex + count);
      factor++;
    };
    rollTheChain();
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return hotKeywords.value;
    }, function () {
      factor = 0;
      rollTheChain();
    });
    return function () {
      if (!hotKeywordsEnable.value) return null;
      if (hotKeywords.value.length === 0) return null;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "hot-search"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "hot-search__title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u70ED\u641C\u53D1\u73B0"), rollEnable.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "hot-search__toggle",
        "onClick": rollTheChain
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6362\u4E00\u6362"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "refresh"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "hot-search__content"
      }, [renderData.value.map(function (item) {
        var style = {
          color: item.color
        };
        var icon = item.icon ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "hot-search__item-icon",
          "style": {
            backgroundImage: "url(".concat(item.icon, ")")
          }
        }, null) : null;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": ['hot-search__item', item.color && 'custom-color'],
          "style": style,
          "onClick": function onClick() {
            return onItemClick(item);
          }
        }, [icon, (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
          "class": "text"
        }, [item.text])]);
      })])]);
    };
  }
}));
// EXTERNAL MODULE: ../../packages/deck/src/index.ts + 16 modules
var deck_src = __webpack_require__(1749);
;// ./src/packageA/search/index.tsx













/* harmony default export */ var search = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'SearchPage',
  setup: function setup() {
    var _route$params;
    var route = taro/* default.useRouter */.Ay.useRouter();
    var initialKeywords = decodeURIComponent(((_route$params = route.params) === null || _route$params === void 0 ? void 0 : _route$params.keywords) || '');

    /** 输入框文本 */
    var keywords = (0,reactivity_esm_bundler/* ref */.KR)('');
    var appStore = (0,lib/* useAppStore */.CU)();
    var searchStore = (0,stores/* useSearchStore */.jB)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(searchStore),
      searchBarKeywords = _storeToRefs.searchBarKeywords,
      searchBarPlaceholder = _storeToRefs.searchBarPlaceholder,
      searchPageDeckComponents = _storeToRefs.searchPageDeckComponents;
    var computedSearchBarKeywords = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      // 如果从其他页面进入，且携带关键词，那么只显示这个关键词
      if (initialKeywords) return initialKeywords;
      return searchBarKeywords.value.map(function (item) {
        return item.text;
      });
    });
    var searchStyleRef = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return {
        height: "".concat(appStore.menuButtonRect.height + 2, "px")
      };
    });

    /** 搜索，优先级：输入框文本 > 外部词条 > 词条动作 > 词条搜索值 > 词条文本 */
    var onSearch = function onSearch(text) {
      if (!keywords.value) {
        var _searchBarKeywords$va;
        var target = (_searchBarKeywords$va = searchBarKeywords.value) === null || _searchBarKeywords$va === void 0 ? void 0 : _searchBarKeywords$va.find(function (item) {
          return item.text === text;
        });
        if (target) {
          if (target.action) {
            (0,useAction/* default */.A)(target.action);
            return void 0;
          }
          searchStore.search(target.value || text);
          return void 0;
        } else {
          searchStore.search(text);
        }
      }
      searchStore.search(text);
    };
    var onChange = function onChange(text) {
      keywords.value = text;
    };
    var isFocused = (0,reactivity_esm_bundler/* ref */.KR)(true);
    var onBlur = function onBlur() {
      isFocused.value = false;
    };
    var focus = function focus() {
      if (isFocused.value) {
        isFocused.value = false;
        (0,custom_component/* nextTick */.d)(function () {
          isFocused.value = true;
        });
      } else {
        isFocused.value = true;
      }
    };
    taro/* default.useDidShow */.Ay.useDidShow(function () {
      focus();
    });
    if (true) {
      (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
        focus();
      });
    }

    // 从其他页面触发设置搜索关键词
    var onSetKeywords = function onSetKeywords(text) {
      keywords.value = text || '';
    };
    var pageKey = (0,router/* getPageKey */.Hq)();
    lib/* emitter */.PD.on("setSearchKeywords:".concat(pageKey), onSetKeywords);
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(function () {
      lib/* emitter */.PD.off("setSearchKeywords:".concat((0,router/* getPageKey */.Hq)(pageKey)));
    });
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          showMenuButton: false,
          title: (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "style": searchStyleRef.value,
            "class": "p_search__search",
            "onClick": focus
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Search */.vj, {
            "value": keywords.value,
            "placeholder": searchBarPlaceholder.value,
            "keywords": computedSearchBarKeywords.value,
            "focus": isFocused.value,
            "onBlur": onBlur,
            "onChange": onChange,
            "onSearch": onSearch
          }, null)])
        },
        "backgroundColor": "#fff",
        "class": "p_search"
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "p_search__content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(history_records, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(hot_search, null, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)(deck_src/* DeckRender */.Q9, {
            "components": searchPageDeckComponents.value
          }, null)];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=434.js.map