"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[785],{

/***/ 4121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ tab_pages_category; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ../../packages/core/src/components/empty-status/index.tsx
var empty_status = __webpack_require__(243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ./src/components/goods-item/index.tsx
var goods_item = __webpack_require__(9788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/custom-component.js
var custom_component = __webpack_require__(8274);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/wxml/index.js + 4 modules
var wxml = __webpack_require__(1346);
// EXTERNAL MODULE: ./src/router/routes.ts
var routes = __webpack_require__(368);
// EXTERNAL MODULE: ./src/api/goods/category.ts
var category = __webpack_require__(4408);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/hooks/useAction/index.ts + 2 modules
var useAction = __webpack_require__(1173);
;// ./src/packageMain/tab-pages/category/utils.ts

/**
 * 查找指定 ID 的类目，并返回类目、层级和路径
 * @param categories - 类目数组
 * @param id - 要查找的类目 ID
 * @param level - 当前层级，默认为 1
 * @param path - 当前路径，默认为 []
 * @returns 返回包含类目对象、层级和路径的对象，找不到时返回 undefined
 */
function findCategoryById(categories, id) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  for (var index = 0; index < categories.length; index++) {
    var category = categories[index];
    var currentPath = [].concat((0,toConsumableArray/* default */.A)(path), [index]);
    if (category.id === id) {
      return {
        category: category,
        level: level,
        path: currentPath
      }; // 找到目标，返回类目、层级和路径
    }
    var foundInChild = findCategoryById(category.childCategories || [], id, level + 1, currentPath);
    if (foundInChild) {
      return foundInChild; // 在子类目中找到目标，返回类目、层级和路径
    }
  }
  return undefined; // 在所有类目中都未找到目标
}
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findLastIndex.js
var findLastIndex = __webpack_require__(6461);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIteratee.js + 17 modules
var _baseIteratee = __webpack_require__(3662);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_SetCache.js + 2 modules
var _SetCache = __webpack_require__(8980);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFindIndex.js
var _baseFindIndex = __webpack_require__(1763);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNaN.js
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ var _baseIsNaN = (baseIsNaN);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_strictIndexOf.js
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ var _strictIndexOf = (strictIndexOf);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIndexOf.js




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : (0,_baseFindIndex/* default */.A)(array, _baseIsNaN, fromIndex);
}

/* harmony default export */ var _baseIndexOf = (baseIndexOf);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludes.js


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

/* harmony default export */ var _arrayIncludes = (arrayIncludes);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludesWith.js
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ var _arrayIncludesWith = (arrayIncludesWith);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cacheHas.js
var _cacheHas = __webpack_require__(8011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js
var _Set = __webpack_require__(4169);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/* harmony default export */ var lodash_es_noop = (noop);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToArray.js
var _setToArray = __webpack_require__(9471);
;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createSet.js




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set/* default */.A && (1 / (0,_setToArray/* default */.A)(new _Set/* default */.A([,-0]))[1]) == INFINITY) ? lodash_es_noop : function(values) {
  return new _Set/* default */.A(values);
};

/* harmony default export */ var _createSet = (createSet);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUniq.js







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return (0,_setToArray/* default */.A)(set);
    }
    isCommon = false;
    includes = _cacheHas/* default */.A;
    seen = new _SetCache/* default */.A;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ var _baseUniq = (baseUniq);

;// ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js



/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? _baseUniq(array, (0,_baseIteratee/* default */.A)(iteratee, 2)) : [];
}

/* harmony default export */ var lodash_es_uniqBy = (uniqBy);

// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.13.1/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(9180);
;// ./src/packageMain/tab-pages/category/index.tsx























function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var tab_pages_category = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'IndexCategoryPage',
  props: {
    isPage: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    console.log('%c 页面加载：category', 'color:#27ae60');
    var route = taro/* default.useRouter */.Ay.useRouter();

    /** 页面进入时指定的分类id */
    var initialCate = route.params.id || '';
    var childrenId = route.params.childrenId || '';

    /** 是否作为单独页面（在 /packageIndex/index 内则作为组件），会有某些区别进行特殊处理 */
    var isPage = props.isPage || (0,lib/* isThePage */.FH)(route.path, routes/* ROUTE_CATEGORY */.DC);
    var globalStore = (0,stores/* useGlobalStore */.on)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(globalStore),
      currentTab = _storeToRefs.currentTab;

    // TODO 优化 activated 回调
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return currentTab.value;
    }, function (key) {
      if (key === 'category') {
        categoryStore.loadCategoryData();
      }
    });
    var appStore = (0,lib/* useAppStore */.CU)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(appStore),
      commonNavigatorHeight = _storeToRefs2.commonNavigatorHeight;
    var categoryStore = (0,stores/* useCategoryStore */.n$)();
    var _storeToRefs3 = (0,pinia/* storeToRefs */.bP)(categoryStore),
      categoryData = _storeToRefs3.categoryData,
      isLoading = _storeToRefs3.isLoading;
    categoryStore.loadCategoryData();
    var currentCateIndex1 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var currentCateIndex2 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    // 如果要新增一个「全部」按钮，初始值可以设置成 -1，获取 cate2 下的全部数据
    var currentCateIndex3 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var tempCateIndex3 = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var hasAutoFocused = false;
    var autoFocus = function autoFocus() {
      var _categoryData$value$f, _categoryData$value;
      if (hasAutoFocused || !categoryData.value) return void 0;

      // 尝试聚焦到页面参数指定的分类
      if (initialCate) {
        var target = findCategoryById(categoryData.value, initialCate);
        if (target) {
          currentCateIndex1.value = target.path[0] || 0;
          currentCateIndex2.value = target.path[1] || 0;
          currentCateIndex3.value = target.path[2] || 0;
          initialCate = '';
          hasAutoFocused = true;
          if (childrenId) {
            cates2.value.find(function (it, index) {
              if (it.id === childrenId) {
                toggleCate2(index);
              }
            });
          }
          return void 0;
        }
      }

      // 默认聚焦到第一个有分类数据的分类
      var firstIndex = (_categoryData$value$f = (_categoryData$value = categoryData.value) === null || _categoryData$value === void 0 ? void 0 : _categoryData$value.findIndex(function (item) {
        var _item$childCategories;
        return ((_item$childCategories = item.childCategories) === null || _item$childCategories === void 0 ? void 0 : _item$childCategories.length) > 0;
      })) !== null && _categoryData$value$f !== void 0 ? _categoryData$value$f : 0;
      if (firstIndex > -1) {
        currentCateIndex1.value = firstIndex;
        hasAutoFocused = true;
      }
    };
    var cates1 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _categoryData$value2;
      return (_categoryData$value2 = categoryData.value) !== null && _categoryData$value2 !== void 0 ? _categoryData$value2 : [];
    });
    var currentCate1 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return cates1.value[currentCateIndex1.value];
    });
    var cates2 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate1$value$c, _currentCate1$value;
      return (_currentCate1$value$c = (_currentCate1$value = currentCate1.value) === null || _currentCate1$value === void 0 ? void 0 : _currentCate1$value.childCategories) !== null && _currentCate1$value$c !== void 0 ? _currentCate1$value$c : [];
    });
    var currentCate2 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate1$value2;
      return (_currentCate1$value2 = currentCate1.value) === null || _currentCate1$value2 === void 0 || (_currentCate1$value2 = _currentCate1$value2.childCategories) === null || _currentCate1$value2 === void 0 ? void 0 : _currentCate1$value2[currentCateIndex2.value];
    });
    var cates3 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate2$value$c, _currentCate2$value;
      return (_currentCate2$value$c = (_currentCate2$value = currentCate2.value) === null || _currentCate2$value === void 0 ? void 0 : _currentCate2$value.childCategories) !== null && _currentCate2$value$c !== void 0 ? _currentCate2$value$c : [];
    });
    var currentCate3 = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _currentCate2$value2;
      return (_currentCate2$value2 = currentCate2.value) === null || _currentCate2$value2 === void 0 || (_currentCate2$value2 = _currentCate2$value2.childCategories) === null || _currentCate2$value2 === void 0 ? void 0 : _currentCate2$value2[currentCateIndex3.value];
    });
    var toggleCate1 = function toggleCate1(index) {
      cancel();
      currentCateIndex1.value = index;
      currentCateIndex2.value = 0;
      currentCateIndex3.value = 0;
      tempCateIndex3.value = 0;
      closePopup();
      allData.value = [];
      allGoodsIds.splice(0);
      scrollTop.value = 0;
      tempScrollTop = 0;
      isExclusive.value = false;
      handleRefreshData();
    };
    var toggleCate2 = function toggleCate2(index) {
      cancel();
      var target = cates2.value[index];
      // 二级分类支持点击动作
      if (target.type === constants/* GOODS_CATEGORY_TYPE_ACTION */.oy) {
        (0,useAction/* default */.A)((0,lib/* safeParse */.xL)(target.url));
        return void 0;
      }
      currentCateIndex2.value = index;
      currentCateIndex3.value = 0;
      tempCateIndex3.value = 0;
      allData.value = [];
      allGoodsIds.splice(0);
      scrollTop.value = 0;
      tempScrollTop = 0;
      isExclusive.value = false;
      if (!currentCate3.value) {
        isExclusive.value = true;
      }
      handleRefreshData();
    };
    var toggleCate3 = function toggleCate3(index) {
      currentCateIndex3.value = index;
      if (!allData.value[currentCateIndex3.value]) {
        isExclusive.value = true;
        handleRefreshData();
      } else {
        isExclusive.value = false;
        ignoreScrollAnchor.value = true;
        setTimeout(function () {
          ignoreScrollAnchor.value = false;
        }, 600);
        scrollViewQuery.exec(function (res) {
          anchorQuery.exec(function (anchorRes) {
            scrollTop.value = tempScrollTop;
            (0,custom_component/* nextTick */.d)(function () {
              scrollTop.value = anchorRes[0][currentCateIndex3.value].top + res[1].scrollTop - res[0].top - anchorRes[1].height;
            });
          });
        });
      }
    };
    var isFold = (0,reactivity_esm_bundler/* ref */.KR)(true);
    var closePopup = function closePopup() {};
    var onExpand = function onExpand() {
      if (!isFold.value) {
        isFold.value = true;
        closePopup();
        return void 0;
      }
      isFold.value = false;
      var _usePopup = (0,lib/* usePopup */.OJ)({
          zIndex: 78,
          content: function content() {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "cates-layer",
              "style": {
                paddingTop: commonNavigatorHeight.value + 'px'
              }
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "category-page__cate-list"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "category-page__cate-content"
            }, [cates1.value.map(function (item, index) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": ['cate-item', index === currentCateIndex1.value && 'active'],
                "onClick": function onClick() {
                  toggleCate1(index);
                }
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "cate-item__image ellipse"
              }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                "class": "image ellipse",
                "mode": "aspectFill",
                "src": item.icon
              }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "cate-item__name"
              }, [item.name])]);
            })])])]);
          },
          placement: 'top',
          onClose: function onClose() {
            return isFold.value = true;
          }
        }),
        close = _usePopup.close;
      closePopup = close;
    };
    var scrollViewId = "scroll-view-".concat((0,utils/* uuid */.uR)());
    var scrollTop = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var tempScrollTop = 0;
    var scrollViewQuery = (0,wxml/* createSelectorQuery */._Y)();
    scrollViewQuery.select(".".concat(scrollViewId)).boundingClientRect();
    scrollViewQuery.select(".".concat(scrollViewId)).scrollOffset();
    var ignoreScrollAnchor = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var anchorQuery = (0,wxml/* createSelectorQuery */._Y)();
    anchorQuery.selectAll('.category-page__cate-anchor').boundingClientRect();
    anchorQuery.select('.category-page__content-header').boundingClientRect();
    var onScroll = function onScroll(e) {
      tempScrollTop = e.detail.scrollTop;
      if (ignoreScrollAnchor.value) return void 0;
      if (isExclusive.value) return void 0;
      scrollViewQuery.exec(function (res) {
        anchorQuery.exec(function (anchorRes) {
          var index = (0,findLastIndex/* default */.A)(anchorRes[0], function (item) {
            return item.top - anchorRes[1].height - res[0].top <= 10;
          });
          index = index > 0 ? index : 0;
          currentCateIndex3.value = index;
        });
      });
    };
    var customEmpty = function customEmpty() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
        "title": "\u7A7A\u7A7A\u5982\u4E5F",
        "description": "\u8BE5\u5206\u7C7B\u6682\u65E0\u5546\u54C1"
      }, null);
    };
    var customErrorStatus = function customErrorStatus(Actions) {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
        "size": "small",
        "description": "\u5546\u54C1\u52A0\u8F7D\u5931\u8D25",
        "actions": Actions
      }, null);
    };
    var cancel = function cancel() {};
    var _usePagination = (0,lib/* usePagination */.WQ)({
        requestHandler: function requestHandler(params) {
          var _cates3$value$tempCat;
          var source = axios/* default */.A.CancelToken.source();
          cancel = function cancel() {
            source.cancel();
            resetPaginationData();
          };
          return (0,category/* requestGetGoodsCategoryGoods */.E)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, params), {}, {
            id: (_cates3$value$tempCat = cates3.value[tempCateIndex3.value]) === null || _cates3$value$tempCat === void 0 ? void 0 : _cates3$value$tempCat.id
          }), source.token);
        },
        onRequestResolve: function onRequestResolve() {
          var _allData$value$tempCa;
          allData.value[tempCateIndex3.value] = allData.value[tempCateIndex3.value] || [];
          // TODO 折叠过滤掉重复数据
          var newData = data.value;
          // .filter(item => !allGoodsIds.find(id => item.id === id))
          allGoodsIds.push.apply(allGoodsIds, (0,toConsumableArray/* default */.A)(newData.map(function (item) {
            return item.id;
          })));
          (_allData$value$tempCa = allData.value[tempCateIndex3.value]).push.apply(_allData$value$tempCa, (0,toConsumableArray/* default */.A)(newData));
          if (isEnd.value) {
            var nextCate = cates3.value[tempCateIndex3.value + 1];
            if (nextCate) {
              // console.log('加载结束了，准备加载下一分类：', nextCate.name)
              tempCateIndex3.value++;
              // 清除分页信息 => { current: 1, records: [], ... }, isEnd: false, hasError: false
              resetPaginationData();
            }
          }
          (0,custom_component/* nextTick */.d)(function () {
            scrollViewQuery.exec(function (res) {
              // 如果可继续滑动距离小于一屏，继续加载
              var screenHeight = appStore.systemInfo.screenHeight;
              var isAtBottom = res[1].scrollTop + screenHeight >= res[1].scrollHeight - screenHeight / 2;
              if (isAtBottom) {
                // console.log('继续加载下一页')
                fetchData();
              }
            });
          });
        }
      }),
      data = _usePagination.data,
      fetchData = _usePagination.fetchData,
      refreshData = _usePagination.refreshData,
      Empty = _usePagination.Empty,
      EndTip = _usePagination.EndTip,
      refresherTriggered = _usePagination.refresherTriggered,
      Loading = _usePagination.Loading,
      ErrorStatus = _usePagination.ErrorStatus,
      isEnd = _usePagination.isEnd,
      resetPaginationData = _usePagination.resetPaginationData;
    var _usePagination2 = (0,lib/* usePagination */.WQ)({
        requestHandler: function requestHandler(params) {
          var _currentCate3$value$i, _currentCate3$value, _currentCate2$value3;
          var id = (_currentCate3$value$i = (_currentCate3$value = currentCate3.value) === null || _currentCate3$value === void 0 ? void 0 : _currentCate3$value.id) !== null && _currentCate3$value$i !== void 0 ? _currentCate3$value$i : (_currentCate2$value3 = currentCate2.value) === null || _currentCate2$value3 === void 0 ? void 0 : _currentCate2$value3.id;
          return (0,category/* requestGetGoodsCategoryGoods */.E)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, params), {}, {
            id: id
          }));
        },
        customEmpty: customEmpty,
        customErrorStatus: customErrorStatus
      }),
      exclusiveData = _usePagination2.data,
      fetchExclusiveData = _usePagination2.fetchData,
      refreshExclusiveData = _usePagination2.refreshData,
      ExclusiveEmpty = _usePagination2.Empty,
      ExclusiveEndTip = _usePagination2.EndTip,
      exclusiveRefresherTriggered = _usePagination2.refresherTriggered,
      ExclusiveLoading = _usePagination2.Loading,
      ExclusiveErrorStatus = _usePagination2.ErrorStatus;

    /* ---------------------------------- 预备方案 ---------------------------------- */
    /**
     * 支持在一个列表里展示多个分类的数据，适用于分类数据足够多，且各分类商品重复率较低的情况
     * 全部数据, [...分类1, ...分类2, ...分类n]
     * 1. 判断第上一个分类 isEnd，若页面底部距离 < 40vh，立即触发下一个分类数据请求
     * 2. 点击分类标签时：
     *  a. 若该分类已经加载过，列表滚动到对应的位置。
     *  b. 该分类没有加载过，设置 isExclusive 为 true，列表将展示 data.value 数据
     *  c. 当分类又切换回已经加载过的分类时，设置 isExclusive 为 false， 列表展示 allData.value 数据
     *  d. 分类已加载：Array.isArray(allData.value[currentIndex3.value])
     */
    var allData = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var allGoodsIds = [];

    /** 当前分类数据独占 */
    var isExclusive = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var renderData = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return isExclusive.value ? [data.value] : allData.value;
    });

    /* ----------------------------------- End ---------------------------------- */

    var handleFetchData = function handleFetchData() {
      isExclusive.value ? fetchExclusiveData() : fetchData();
    };
    var handleRefreshData = function handleRefreshData() {
      var isRefresherPulling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (currentCate2.value && (!currentCate3.value || cates3.value.length <= 1)) {
        isExclusive.value = true;
      }
      if (isExclusive.value) {
        return refreshExclusiveData({
          clearDataImmediate: true,
          isRefresherPulling: isRefresherPulling
        });
      }
      allData.value = [];
      currentCateIndex3.value = 0;
      tempCateIndex3.value = 0;
      resetPaginationData();
      refreshData({
        clearDataImmediate: true,
        isRefresherPulling: isRefresherPulling
      });
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return categoryData.value;
    }, function () {
      autoFocus();
      handleRefreshData(true);
    }, {
      immediate: true
    });
    var Cate2 = function Cate2() {
      var _slot;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "side-menu"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTab */.RH, {
        "current": currentCateIndex2.value,
        "vertical": true
      }, _isSlot(_slot = cates2.value.map(function (item, index) {
        var active = index === currentCateIndex2.value;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTabItem */.AN, {
          "key": item.id
        }, {
          default: function _default() {
            return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['side-menu-item', active && 'active'],
              "onClick": function onClick() {
                toggleCate2(index);
              }
            }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
              "key": item.id,
              "class": "side-menu-item__image",
              "mode": "heightFix",
              "src": item.icon
            }, null), item.name, active && (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "arc-before"
            }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "arc-after"
            }, null)])])];
          }
        });
      })) ? _slot : {
        default: function _default() {
          return [_slot];
        }
      })]);
    };
    var Cate3 = function Cate3() {
      return cates3.value.length > 1 ? (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTab */.RH, {
        "current": currentCateIndex3.value
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__tags"
          }, [cates3.value.map(function (item, index) {
            var active = index === currentCateIndex3.value;
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTabItem */.AN, null, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": ['category-page__tag', active && 'active'],
                  "onClick": function onClick() {
                    toggleCate3(index);
                  }
                }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                  "src": item.icon,
                  "mode": "heightFix",
                  "class": "category-page__tag-image"
                }, null), item.name])];
              }
            });
          })])];
        }
      }) : null;
    };
    var Main = function Main() {
      if (cates2.value.length === 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__main"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
          "title": "\u7A7A\u7A7A\u5982\u4E5F",
          "description": "\u8BE5\u5206\u7C7B\u6682\u65E0\u5546\u54C1"
        }, null)]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page__main"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(Cate2, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
        "class": ['category-page__content-scroller', scrollViewId],
        "scrollY": true,
        "scrollTop": scrollTop.value,
        "scrollWithAnimation": false,
        "onScroll": onScroll,
        "refresherEnabled": isExclusive.value,
        "onRefresherrefresh": function onRefresherrefresh() {
          return handleRefreshData(true);
        },
        "onScrolltolower": handleFetchData,
        "refresherTriggered": isExclusive.value ? exclusiveRefresherTriggered.value : refresherTriggered.value
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__content-header"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(Cate3, null, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)(GoodsList, null, null)])];
        }
      })]);
    };
    var GoodsItemMapper = function GoodsItemMapper(item, index, arr) {
      var _item$coverImages;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
        "type": "horizontal",
        "name": item.title,
        "nameMaxRows": 2,
        "image": (_item$coverImages = item.coverImages) === null || _item$coverImages === void 0 ? void 0 : _item$coverImages[0],
        "price": item.priceMin,
        "priceMax": item.priceMax,
        "listPrice": item.underlinePrice,
        "onClick": function onClick() {
          (0,router/* navigateToGoodsDetail */.C7)(item.id);
        }
      }, null), index < arr.length - 1 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page__content-split"
      }, null)]);
    };
    var GoodsList = function GoodsList() {
      if (isExclusive.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__goods"
        }, [lodash_es_uniqBy(exclusiveData.value, 'id').map(GoodsItemMapper), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveErrorStatus, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveLoading, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveEmpty, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(ExclusiveEndTip, null, null)]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page__goods"
      }, [renderData.value.map(function (group, index) {
        var _cates3$value$index;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__cate-anchor"
        }, [(_cates3$value$index = cates3.value[index]) === null || _cates3$value$index === void 0 ? void 0 : _cates3$value$index.name, !isLoading.value && group.length === 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "category-page__cate-empty"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE5\u5206\u7C7B\u6682\u65E0\u5546\u54C1")])]), lodash_es_uniqBy(group, 'id').map(GoodsItemMapper)]);
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(ErrorStatus, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Loading, {
        "small": allGoodsIds.length > 0
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(EndTip, null, null)]);
    };
    var SearchBar = function SearchBar() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "category-page-search",
        "style": {
          height: appStore.menuButtonRect.height + 2 + 'px'
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Search */.vj, {
        "placeholder": "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u5185\u5BB9",
        "onClick": function onClick() {
          (0,router/* navigateToSearch */.tr)();
        }
      }, null)]);
    };
    return function () {
      if (!categoryData.value || categoryData.value.length === 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
          "class": "category-page-wrap",
          "tabsPlaceholder": true,
          "navigator": {
            navigatorStyle: isPage ? undefined : 'blank',
            title: (0,runtime_core_esm_bundler/* createVNode */.bF)(SearchBar, null, null),
            hiddenH5Menu: true
          }
        }, {
          default: function _default() {
            return [isLoading.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
              "image": (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null),
              "description": ""
            }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_status/* default */.A, {
              "title": "\u65E0\u5206\u7C7B"
            }, null)];
          }
        });
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "class": "category-page-wrap",
        "navigator": {
          navigatorStyle: isPage ? undefined : 'blank',
          title: (0,runtime_core_esm_bundler/* createVNode */.bF)(SearchBar, null, null),
          hiddenH5Menu: true,
          navigationBarTextStyle: 'black'
        },
        "tabsPlaceholder": !isPage
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['category-page__header', !isFold.value && 'expand']
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__cate-list"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTab */.RH, {
            "current": currentCateIndex1.value,
            "ratio": 0.3
          }, {
            default: function _default() {
              return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "category-page__cate-content"
              }, [cates1.value.map(function (item, index) {
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTabItem */.AN, null, {
                  default: function _default() {
                    return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                      "class": ['cate-item', index === currentCateIndex1.value && 'active'],
                      "onClick": function onClick() {
                        toggleCate1(index);
                      }
                    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                      "class": "cate-item__image ellipse"
                    }, [item.icon && (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                      "class": "image ellipse",
                      "src": item.icon
                    }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                      "class": "cate-item__name"
                    }, [item.name])])];
                  }
                });
              })])];
            }
          })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "all-cates"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5168\u90E8\u5206\u7C7B")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "category-page__folder",
            "onClick": onExpand
          }, [isFold.value ? '展开' : '收起', (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "right"
          }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(Main, null, null)])];
        }
      });
    };
  }
}));

/***/ }),

/***/ 7785:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _packageMain_tab_pages_category_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4121);


/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: '',
  setup: function setup() {
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_packageMain_tab_pages_category_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        "isPage": true
      }, null);
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=785.js.map