"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[233],{

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
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5788);
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
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5788);
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

/***/ 7233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ detail; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ./src/api/order/index.ts
var order = __webpack_require__(1004);
// EXTERNAL MODULE: ./src/packageA/order/pay/address-selector/index.tsx
var address_selector = __webpack_require__(3297);
;// ./src/packageA/order/detail/skeleton/index.tsx




/* harmony default export */ var skeleton = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: '',
  setup: function setup() {
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-detail-skeleton"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* Spin */.tK, null, null)]);
    };
  }
}));
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 20 modules
var src = __webpack_require__(5788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(6552);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/stores/merchant.ts + 1 modules
var merchant = __webpack_require__(9181);
// EXTERNAL MODULE: ./src/utils/emitter.ts
var emitter = __webpack_require__(2304);
// EXTERNAL MODULE: ./src/stores/orderStore.ts
var stores_orderStore = __webpack_require__(4670);
// EXTERNAL MODULE: ./src/packageA/order/after-sale/useAfterSale/index.tsx
var useAfterSale = __webpack_require__(5223);
;// ./src/packageA/order/detail/action-bar/index.tsx











/* harmony default export */ var action_bar = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    orderDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var merchantStore = (0,merchant/* default */.A)();
    var orderStore = (0,stores_orderStore/* default */.A)();
    var cancel = function cancel() {
      orderStore.cancelOrder(props.orderDetail.id);
    };
    var handleAfterSale = function handleAfterSale() {
      (0,useAfterSale/* default */.A)({
        mainOrderNo: props.orderDetail.orderNo
      });
    };
    var AfterSale = function AfterSale() {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "action",
        "onClick": handleAfterSale
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u7533\u8BF7")]);
    };
    return function () {
      var _props$orderDetail;
      // 待付款
      if (((_props$orderDetail = props.orderDetail) === null || _props$orderDetail === void 0 ? void 0 : _props$orderDetail.status) === constants/* ORDER_STATUS_PENDING_PAYMENT */.lV) {
        var _props$orderDetail2 = props.orderDetail,
          id = _props$orderDetail2.id,
          createTime = _props$orderDetail2.createTime,
          orderNo = _props$orderDetail2.orderNo,
          unifiedOrder = _props$orderDetail2.unifiedOrder;
        var paymentEndTime = merchantStore.calcPaymentEndTime(createTime);
        var isValid = dayjs_min_default()().isBefore(paymentEndTime);
        var pay = function pay() {
          (0,lib/* usePay */.EO)(unifiedOrder.orderNo, {
            complete: function complete() {
              (0,emitter/* triggerOrderItemRefresh */.b)(id);
              (0,router/* navigateToPayResult */.ks)({
                orderNo: orderNo,
                unifyOrderNo: unifiedOrder.orderNo
              });
            }
          });
        };
        if (isValid) {
          return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__action-bar"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "action",
            "onClick": cancel
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53D6\u6D88\u8BA2\u5355")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "action primary",
            "onClick": pay
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u652F\u4ED8")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__action-bar--block"
          }, null)]);
        }
        return null;
      }
      return null;
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3271);
// EXTERNAL MODULE: ./src/hooks/index.ts + 11 modules
var hooks = __webpack_require__(8892);
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
;// ./src/packageA/order/detail/express/index.tsx









/* harmony default export */ var express = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsExpress',
  props: {
    packs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    address: {
      type: Object
    }
  },
  setup: function setup(props) {
    var hasShippedPacks = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.packs.filter(function (item) {
        return item.courierNo;
      });
    });
    var UNSHIPED_KEY = -1;
    var unShippedGoodsList = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _ref;
      return (_ref = []).concat.apply(_ref, (0,toConsumableArray/* default */.A)(props.packs.filter(function (item) {
        return !item.courierNo;
      }).map(function (item) {
        return item.goodsList;
      })));
    });
    var currentIndex = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var currentPack = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return hasShippedPacks.value[currentIndex.value];
    });
    var toggle = function toggle(index) {
      var _expressInfoSet$index;
      currentIndex.value = index;
      (_expressInfoSet$index = expressInfoSet[index]) === null || _expressInfoSet$index === void 0 || _expressInfoSet$index.refresh();
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      return toggle(0);
    });
    var ContactInfo = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!props.address) return null;
      var _props$address = props.address,
        provinceName = _props$address.provinceName,
        cityName = _props$address.cityName,
        countyName = _props$address.countyName,
        detailInfo = _props$address.detailInfo,
        userName = _props$address.userName,
        telNumber = _props$address.telNumber;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-express__contact"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dot"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "address"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9001\u81F3\xA0"), provinceName, cityName, countyName, detailInfo]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "user"
      }, [userName, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" "), telNumber])]);
    });
    var expressInfoSet = [];
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return hasShippedPacks.value;
    }, function () {
      hasShippedPacks.value.map(function (item) {
        var _props$address2;
        expressInfoSet.push((0,hooks/* useExpress */.Ud)({
          courierNo: item.courierNo,
          phone: (_props$address2 = props.address) === null || _props$address2 === void 0 ? void 0 : _props$address2.telNumber,
          lazyLoad: true
        }));
      });
    }, {
      immediate: true
    });
    var ExpressInfo = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _expressRef$value, _expressRef$value$exp, _expressRef$value2, _EXPRESS_STATUS_OPTIO, _expressRef$value4, _expressRef$value5;
      var expressInfo = expressInfoSet[currentIndex.value];
      var expressRef = expressInfo === null || expressInfo === void 0 ? void 0 : expressInfo.expressRef;
      if (!currentPack.value) return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-express__progress"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dot"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dash-line"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u672A\u53D1\u8D27")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "desc"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5DF2\u6536\u5230\u8BA2\u5355\u9700\u6C42\uFF0C\u5546\u5BB6\u5C06\u5C3D\u5FEB\u5B89\u6392\u7269\u6D41\u53D1\u8D27\u3002")])]), ContactInfo.value]);
      var name = ((_expressRef$value = expressRef.value) === null || _expressRef$value === void 0 ? void 0 : _expressRef$value.expressCompanyName) || currentPack.value.courierName;
      var no = currentPack.value.courierNo;
      var t = config/* EXPRESS_COMPANY_OPTIONS */.Yy.find(function (i) {
        return i.label === name;
      });
      var logo = (_expressRef$value$exp = (_expressRef$value2 = expressRef.value) === null || _expressRef$value2 === void 0 ? void 0 : _expressRef$value2.expressCompanyLogo) !== null && _expressRef$value$exp !== void 0 ? _expressRef$value$exp : t === null || t === void 0 ? void 0 : t.logo;
      var remark = currentPack.value.remark;
      var noDetails = t === null || t === void 0 ? void 0 : t.noDetails;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-express__info"
      }, [logo ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "logo",
        "style": {
          backgroundImage: "url(".concat(logo, ")")
        }
      }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "logo-placeholder"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "name"
      }, [name]), no !== name && (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [no]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "copy",
        "onClick": function onClick() {
          (0,lib/* useCopyText */.sc)(no);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u590D\u5236")])])]), noDetails && remark ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-express__remark"
      }, [remark]) : null, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-express__progress",
        "onClick": onExpressClick
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dot"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "dash-line"
      }, null), expressRef.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [(_EXPRESS_STATUS_OPTIO = constants/* EXPRESS_STATUS_OPTIONS */.ZX.find(function (item) {
        var _expressRef$value3;
        return item.value == ((_expressRef$value3 = expressRef.value) === null || _expressRef$value3 === void 0 ? void 0 : _expressRef$value3.logisticsStatus);
      })) === null || _EXPRESS_STATUS_OPTIO === void 0 ? void 0 : _EXPRESS_STATUS_OPTIO.label, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "date"
      }, [(_expressRef$value4 = expressRef.value) === null || _expressRef$value4 === void 0 || (_expressRef$value4 = _expressRef$value4.theLastTime) === null || _expressRef$value4 === void 0 ? void 0 : _expressRef$value4.replace(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, '$2-$3 $4:$5')]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "more"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE6\u7EC6\u4FE1\u606F"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "desc"
      }, [(_expressRef$value5 = expressRef.value) === null || _expressRef$value5 === void 0 ? void 0 : _expressRef$value5.theLastMessage])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [expressInfo.isLoading.value ? '正在更新' : '暂无物流信息', (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "date"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "more"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE6\u7EC6\u4FE1\u606F"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "desc"
      }, [expressInfo.isLoading.value ? '物流信息加载中...' : expressInfo.errMsg.value || '物流信息获取失败！请稍后再试'])])]), ContactInfo.value]);
    });
    var onExpressClick = function onExpressClick() {
      var _props$address3;
      (0,hooks/* useExpressModal */.vz)({
        courierNo: hasShippedPacks.value[currentIndex.value].courierNo,
        phone: (_props$address3 = props.address) === null || _props$address3 === void 0 ? void 0 : _props$address3.telNumber
      });
    };
    return function () {
      // 发货包裹只有一个
      if (hasShippedPacks.value.length <= 1 && props.packs.length <= 1) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "goods-express"
        }, [ExpressInfo.value]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-express"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-express__tip number-font"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE5\u8BA2\u5355\u5DF2\u88AB\u62C6\u5206\u6210 "), props.packs.length, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u4E2A\u5305\u88F9\u5BC4\u51FA")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTab */.RH, {
        "key": "packs-warp",
        "class": "goods-express__packs-wrap",
        "current": currentIndex.value
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "goods-express__packs"
          }, [hasShippedPacks.value.map(function (item, index) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* ScrollTabItem */.AN, {
              "key": index
            }, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": ['pack-item', index === currentIndex.value && 'active'],
                  "onClick": function onClick() {
                    toggle(index);
                  }
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "pack-item__info"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "name number-font"
                }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5305\u88F9 "), index + 1]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "count number-font"
                }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171 "), item.goodsList.length, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u4EF6")])]), item.goodsList.map(function (goods) {
                  return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                    "class": "pack-item__goods",
                    "style": {
                      backgroundImage: "url(".concat(goods.image, ")")
                    }
                  }, null);
                })])];
              }
            });
          }), unShippedGoodsList.value.length > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['pack-item', currentIndex.value === UNSHIPED_KEY && 'active'],
            "onClick": function onClick() {
              toggle(UNSHIPED_KEY);
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "pack-item__info"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "name number-font color-disabled"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u672A\u53D1\u8D27")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "count number-font"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171 "), unShippedGoodsList.value.length, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u4EF6")])]), unShippedGoodsList.value.map(function (goods) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "pack-item__goods",
              "style": {
                backgroundImage: "url(".concat(goods.image, ")")
              }
            }, null);
          })])])];
        }
      }), ExpressInfo.value]);
    };
  }
}));
// EXTERNAL MODULE: ./src/packageA/goods/detail/must-know/index.tsx + 1 modules
var must_know = __webpack_require__(9290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/storage/index.js
var storage = __webpack_require__(4238);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(8831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7420);
// EXTERNAL MODULE: ./src/components/suitable-shops/index.tsx
var suitable_shops = __webpack_require__(5577);
// EXTERNAL MODULE: ./src/components/shop-item/index.tsx
var shop_item = __webpack_require__(3401);
// EXTERNAL MODULE: ./src/components/count-stepper/index.tsx
var count_stepper = __webpack_require__(9519);
// EXTERNAL MODULE: ./src/api/index.ts + 4 modules
var api = __webpack_require__(5816);
// EXTERNAL MODULE: ./src/api/coupon/index.ts
var coupon = __webpack_require__(590);
// EXTERNAL MODULE: ./src/components/order-goods-item/index.tsx
var order_goods_item = __webpack_require__(405);
;// ../../packages/shared/constants/index.ts
var STORE_COUPON_MODE_STATIC = 1;
var STORE_COUPON_MODE_DYNAMIC = 2;
;// ./src/packageA/order/detail/coupon/useCouponAudit.tsx














var useCouponAudit = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2(options) {
    var orderDetailRef, targetSubOrder, targetCard, _options$onFail, _useModalActions, Step1Actions, shopItem, Step1, auditLoading, _useModalActions2, Step2Actions, countDownSeconds, _countDown, countRef, Step2, stepRef, modal, _t;
    return (0,regenerator/* default */.A)().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          orderDetailRef = (0,reactivity_esm_bundler/* shallowRef */.IJ)();
          _context2.p = 1;
          (0,lib/* useLoading */.M3)();
          _context2.n = 2;
          return (0,api/* getGoodsOrderDetail */.aG)(options.mainOrderNo);
        case 2:
          orderDetailRef.value = _context2.v.data;
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t = _context2.v;
          (0,lib/* useResponseMessage */.Cd)(_t);
        case 4:
          _context2.p = 4;
          (0,lib/* useLoadingEnd */.dA)();
          return _context2.f(4);
        case 5:
          targetSubOrder = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
            var _orderDetailRef$value;
            return (_orderDetailRef$value = orderDetailRef.value) === null || _orderDetailRef$value === void 0 ? void 0 : _orderDetailRef$value.subOrders.find(function (item) {
              return item.orderNo === options.subOrderNo;
            });
          });
          targetCard = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
            var _targetSubOrder$value;
            return (_targetSubOrder$value = targetSubOrder.value) === null || _targetSubOrder$value === void 0 || (_targetSubOrder$value = _targetSubOrder$value.coupons) === null || _targetSubOrder$value === void 0 ? void 0 : _targetSubOrder$value.find(function (item) {
              return item.cardNo === options.cardNo;
            });
          });
          if (targetCard.value) {
            _context2.n = 6;
            break;
          }
          return _context2.a(2, (_options$onFail = options.onFail) === null || _options$onFail === void 0 ? void 0 : _options$onFail.call(options, new Error('找不到卡券信息')));
        case 6:
          _useModalActions = (0,lib/* useModalActions */.QR)([{
            text: '取消',
            onClick: function onClick() {
              modal.close();
            }
          }, {
            text: '下一步',
            primary: true,
            onClick: function onClick() {
              if (!shopItem.value) {
                (0,lib/* useToast */.dj)('请选择核销门店');
                return void 0;
              }
              console.log(shopItem.value);
              stepRef.value = 2;
              countRef.value = 1;
              countDownSeconds.value = 3;
              _countDown();
            }
          }]), Step1Actions = _useModalActions.Actions;
          shopItem = (0,reactivity_esm_bundler/* shallowRef */.IJ)();
          Step1 = function Step1() {
            var _shopItem$value;
            if (!targetCard.value) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
                "title": "\u51FA\u9519\u4E86",
                "description": "\u627E\u4E0D\u5230\u5361\u5238\u4FE1\u606F"
              }, null)]);
            }
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(suitable_shops/* ShopList */.v$, {
              "asSelector": true,
              "goodsId": options.goodsId,
              "selectedShopId": (_shopItem$value = shopItem.value) === null || _shopItem$value === void 0 ? void 0 : _shopItem$value.id,
              "onSelect": function onSelect(v) {
                return shopItem.value = v;
              }
            }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Step1Actions, null, null)]);
          };
          auditLoading = (0,reactivity_esm_bundler/* ref */.KR)(false);
          _useModalActions2 = (0,lib/* useModalActions */.QR)((0,runtime_core_esm_bundler/* computed */.EW)(function () {
            return [{
              text: '上一步',
              onClick: function onClick() {
                stepRef.value = 1;
              }
            }, {
              text: countDownSeconds.value > 0 ? "\u786E\u5B9A\u6838\u9500\uFF08".concat(countDownSeconds.value, "s\uFF09") : '确定核销',
              primary: true,
              loading: auditLoading.value,
              disabled: countDownSeconds.value > 0,
              onClick: function () {
                var _onClick = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
                  return (0,regenerator/* default */.A)().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        if (shopItem.value) {
                          _context.n = 1;
                          break;
                        }
                        (0,lib/* useToast */.dj)('请选择核销门店');
                        stepRef.value = 1;
                        return _context.a(2, Promise.reject(false));
                      case 1:
                        console.log(targetCard.value);
                        auditLoading.value = true;
                        if (targetCard.value.qrcodeType === STORE_COUPON_MODE_DYNAMIC) {
                          (0,coupon/* $postAuditDynamicCoupon */.lZ)({
                            // password: targetCard.value.password,
                            verificationCode: targetSubOrder.value.verificationCode,
                            storeId: shopItem.value.id,
                            storeName: shopItem.value.name,
                            number: countRef.value
                          }).then(function (res) {
                            if (res.code === 200) {
                              var _options$onSuccess;
                              modal.close();
                              (_options$onSuccess = options.onSuccess) === null || _options$onSuccess === void 0 || _options$onSuccess.call(options, res.data);
                              (0,lib/* useResponseMessage */.Cd)(res, '核销成功');
                            } else {
                              (0,lib/* useResponseMessage */.Cd)(res, '核销失败');
                            }
                          }).catch(function (err) {
                            (0,lib/* useResponseMessage */.Cd)(err, '核销失败');
                          }).finally(function () {
                            auditLoading.value = false;
                          });
                        } else if (targetCard.value.qrcodeType === STORE_COUPON_MODE_STATIC) {
                          (0,coupon/* $postAuditStaticCoupon */.im)({
                            // password: targetCard.value.password,
                            // recordNo: targetCard.value.recordNo,
                            storeId: shopItem.value.id,
                            storeName: shopItem.value.name,
                            // orderNo: orderDetailRef.value!.orderNo,
                            orderNo: targetSubOrder.value.orderNo,
                            number: countRef.value
                          }).then(function (res) {
                            if (res.code === 200) {
                              var _options$onSuccess2;
                              modal.close();
                              (_options$onSuccess2 = options.onSuccess) === null || _options$onSuccess2 === void 0 || _options$onSuccess2.call(options, res.data);
                              (0,lib/* useResponseMessage */.Cd)(res, '核销成功');
                            } else {
                              (0,lib/* useResponseMessage */.Cd)(res, '核销失败');
                            }
                          }).catch(function (err) {
                            (0,lib/* useResponseMessage */.Cd)(err, '核销失败');
                          }).finally(function () {
                            auditLoading.value = false;
                          });
                        } else {
                          (0,lib/* useToast */.dj)("\u5361\u5238\u7C7B\u578B\u9519\u8BEF\uFF1A".concat(targetCard.value.qrcodeType));
                        }
                      case 2:
                        return _context.a(2);
                    }
                  }, _callee);
                }));
                function onClick() {
                  return _onClick.apply(this, arguments);
                }
                return onClick;
              }()
            }];
          })), Step2Actions = _useModalActions2.Actions;
          countDownSeconds = (0,reactivity_esm_bundler/* ref */.KR)(3);
          _countDown = function countDown() {
            setTimeout(function () {
              countDownSeconds.value--;
              if (countDownSeconds.value > 0) {
                _countDown();
              }
            }, 1000);
          };
          countRef = (0,reactivity_esm_bundler/* ref */.KR)(1);
          Step2 = function Step2() {
            var _targetSubOrder$value2, _targetSubOrder$value3, _shopItem$value2;
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(shop_item/* default */.A, (0,runtime_core_esm_bundler/* mergeProps */.v6)({
              "class": "coupon-audit-confirm-shop"
            }, shopItem.value), null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-audit-confirm-content"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "label"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u540D\u79F0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "value"
            }, [(_targetSubOrder$value2 = targetSubOrder.value) === null || _targetSubOrder$value2 === void 0 ? void 0 : _targetSubOrder$value2.goodsName])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "label"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u89C4\u683C")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "value"
            }, [(_targetSubOrder$value3 = targetSubOrder.value) === null || _targetSubOrder$value3 === void 0 ? void 0 : _targetSubOrder$value3.goodsStockSnapshot.specs.map(function (spec) {
              return spec.v;
            }).join('／')])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "label"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6838\u9500\u6570\u91CF")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "value count"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(count_stepper/* default */.A, {
              "style": "margin-right:-4px;margin-top:-8px;",
              "min": 1,
              "max": options.count,
              "maxMessage": "\u4E0D\u53EF\u8D85\u8FC7\u5F85\u4F7F\u7528\u6570\u91CF",
              "value": countRef.value,
              "onChange": function onChange(v) {
                countRef.value = v;
              }
            }, null), options.count > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "count-tip"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171\u6709"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "color-primary number-font"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0"), options.count, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0")]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F20\u5F85\u4F7F\u7528\u5238\u7801")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "label"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F7F\u7528\u95E8\u5E97")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "value"
            }, [(_shopItem$value2 = shopItem.value) === null || _shopItem$value2 === void 0 ? void 0 : _shopItem$value2.name])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-audit-confirm-alert"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BF7\u4ED4\u7EC6\u6838\u5BF9\u4FE1\u606F\uFF0C\u5361\u5238\u4E00\u7ECF\u6838\u9500\u4E0D\u53EF\u64A4\u56DE\u3002")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(Step2Actions, null, null)]);
          };
          stepRef = (0,reactivity_esm_bundler/* ref */.KR)(1);
          modal = (0,lib/* useModal */.hS)({
            title: function title() {
              return stepRef.value === 1 ? '选择核销门店' : '核销确认';
            },
            padding: 0,
            content: function content() {
              if (stepRef.value === 1) {
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(Step1, null, null);
              }
              if (stepRef.value === 2) {
                return (0,runtime_core_esm_bundler/* createVNode */.bF)(Step2, null, null);
              }
            },
            height: 600
          });
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 3, 4, 5]]);
  }));
  return function useCouponAudit(_x) {
    return _ref.apply(this, arguments);
  };
}();
var useCouponAuditRecords = /*#__PURE__*/function () {
  var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee3(orderNo) {
    var _usePagination, fetchData, data, Empty, Loading, EndTip, ErrorStatus;
    return (0,regenerator/* default */.A)().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _usePagination = (0,lib/* usePagination */.WQ)({
            requestHandler: function requestHandler() {
              return (0,coupon/* $getCouponAuditRecords */.wX)(orderNo);
            }
          }), fetchData = _usePagination.fetchData, data = _usePagination.data, Empty = _usePagination.Empty, Loading = _usePagination.Loading, EndTip = _usePagination.EndTip, ErrorStatus = _usePagination.ErrorStatus;
          fetchData();
          (0,lib/* useModal */.hS)({
            title: '订单卡券核销记录',
            content: function content() {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [data.value.map(function (item) {
                var _item$goodsImages;
                var Info = (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "coupon-audit-record__info"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "item"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "label"
                }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5361\u5238\u7F16\u7801\uFF1A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "value"
                }, [item.cardNo])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "item"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "label"
                }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6838\u9500\u95E8\u5E97\uFF1A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "value"
                }, [item.storeName])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "item"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "label"
                }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6838\u9500\u65F6\u95F4\uFF1A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "value"
                }, [item.createTime])]), item.assistantName && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "item"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "label"
                }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5E97\u5458\u540D\u79F0\uFF1A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "value"
                }, [item.assistantName])]), item.assistantPhone && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "item"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "label"
                }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5E97\u5458\u624B\u673A\uFF1A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "value"
                }, [item.assistantPhone])])]);
                return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "coupon-audit-record"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(order_goods_item/* default */.A, {
                  "image": (_item$goodsImages = item.goodsImages) === null || _item$goodsImages === void 0 ? void 0 : _item$goodsImages[0],
                  "name": item.goodsName,
                  "spec": item.goodsStockName,
                  "count": 1
                }, null), Info]);
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(ErrorStatus, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Empty, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(Loading, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(EndTip, null, null)]);
            }
          });
        case 1:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function useCouponAuditRecords(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
;// ./src/packageA/order/detail/coupon/index.tsx











/* harmony default export */ var detail_coupon = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'OrderCoupons',
  props: {
    orderDetail: {
      type: Object,
      required: true
    }
  },
  emits: {
    refresh: function refresh() {
      return true;
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var coupons = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!props.orderDetail) return [];
      return props.orderDetail.subOrders.reduce(function (list, item) {
        if (Array.isArray(item.coupons)) {
          list.push.apply(list, (0,toConsumableArray/* default */.A)(item.coupons.map(function (coupon) {
            return (0,objectSpread2/* default */.A)({
              goodsId: item.goodsId,
              orderNo: item.orderNo
            }, coupon);
          })));
        }
        return list;
      }, []);
    });
    var targetSuborder = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.orderDetail.subOrders[0];
    });
    var useableCount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return coupons.value.filter(function (item) {
        return item.status === constants/* COUPON_STATUS_PENDING_USE */.iV;
      }).length;
    });
    var currentIndex = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var currentCouppon = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return coupons.value[currentIndex.value];
    });

    // 自动滑动切换到可使用的卡券
    var scrollToUseableItem = function scrollToUseableItem() {
      var index = coupons.value.findIndex(function (item) {
        return item.status === constants/* COUPON_STATUS_PENDING_USE */.iV;
      });
      if (index > -1) {
        currentIndex.value = index;
      }
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return coupons.value;
    }, function () {
      scrollToUseableItem();
    }, {
      immediate: true
    });

    /** 当前卡券有效期文本 */
    var validDateText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!currentCouppon.value) return null;
      var _currentCouppon$value = currentCouppon.value,
        expireType = _currentCouppon$value.expireType,
        expireEndAt = _currentCouppon$value.expireEndAt,
        expireStartAt = _currentCouppon$value.expireStartAt;
      if (expireType === constants/* COUPON_VALID_TYPE_DAYS */.ZF) {
        return "\u6709\u6548\u671F\u81F3\uFF1A".concat(expireEndAt);
      }
      return "\u6709\u6548\u671F\uFF1A".concat(expireStartAt, " \u81F3 ").concat(expireEndAt);
    });
    var statusText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _COUPON_STATUS_OPTION, _COUPON_STATUS_OPTION2;
      if (!currentCouppon.value) return null;
      return (_COUPON_STATUS_OPTION = (_COUPON_STATUS_OPTION2 = constants/* COUPON_STATUS_OPTIONS */.xj.find(function (item) {
        return String(item.value) === String(currentCouppon.value.status);
      })) === null || _COUPON_STATUS_OPTION2 === void 0 ? void 0 : _COUPON_STATUS_OPTION2.label) !== null && _COUPON_STATUS_OPTION !== void 0 ? _COUPON_STATUS_OPTION : '状态异常';
    });
    var indicatorTipVisible = (0,reactivity_esm_bundler/* ref */.KR)(Boolean(!(0,storage/* getStorageSync */.JF)('coupons-indicator-tip')));
    var IndicatorTip = function IndicatorTip() {
      if (!(coupons.value.length > 1)) {
        return null;
      }
      if (indicatorTipVisible.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "order-coupons__indicator-tip"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5305\u542B "), coupons.value.length, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u5F20\u5361\u5238\uFF0C\u8BF7\u6ED1\u52A8\u5207\u6362\u67E5\u770B")]);
      }
      return null;
    };
    var closeIndicatorTip = function closeIndicatorTip() {
      if (indicatorTipVisible.value) {
        indicatorTipVisible.value = false;
        (0,storage/* setStorageSync */.$c)('coupons-indicator-tip', 'true');
      }
    };
    var _onAudit = function onAudit(item) {
      if (!item) {
        scrollToUseableItem();
        if (currentCouppon.value) {
          _onAudit(currentCouppon.value);
        } else {
          (0,lib/* useToast */.dj)('无可使用卡券');
        }
        return void 0;
      }
      useCouponAudit({
        goodsId: item.goodsId,
        mainOrderNo: props.orderDetail.orderNo,
        subOrderNo: item.orderNo,
        cardNo: item.cardNo,
        count: useableCount.value,
        onSuccess: function onSuccess(payload) {
          emit('refresh');
        }
      });
    };
    return function () {
      if (coupons.value.length === 0) {
        return null;
      }
      var item = coupons.value.find(function (item) {
        return item.status === constants/* COUPON_STATUS_PENDING_USE */.iV;
      }) || coupons.value[0];
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [useableCount.value > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupons-summary"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status-text"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F85\u4F7F\u7528\u5238\u7801"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "color-primary number-font"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0"), useableCount.value, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u5F20")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupons"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupons__header"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "title"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u5238\u7801")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [statusText.value])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "valid-date"
      }, [validDateText.value])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupons__content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupons__tooltip"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5230\u5E97\u51FA\u793A\u4E8C\u7EF4\u7801\u4F7F\u7528")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": ['order-coupon-item', item.status === constants/* COUPON_STATUS_PENDING_USE */.iV && 'useable']
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupon-item__qr"
      }, [targetSuborder.value.verificationCode ? (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* QRCode */.rg, {
        "content": targetSuborder.value.verificationCode
      }, null) : '无效券码', (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupon-item__stamp-wrap"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupon-item__stamp"
      }, [statusText.value])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupon-item__code"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5238\u7801\u2003"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupon-item__code-content"
      }, [targetSuborder.value.verificationCode]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u2003"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "copy",
        "onClick": function onClick() {
          (0,lib/* useCopyText */.sc)(targetSuborder.value.verificationCode);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u590D\u5236")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "order-coupon-item__actions"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "action",
        "onClick": function onClick() {
          useCouponAuditRecords(targetSuborder.value.orderNo);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6838\u9500\u8BB0\u5F55\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]), item.status === constants/* COUPON_STATUS_PENDING_USE */.iV && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "action primary",
        "onClick": function onClick() {
          _onAudit(item);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u6838\u9500\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(must_know/* default */.A, {
        "class": "must-know",
        "goodsDetail": props.orderDetail.subOrders[0].goodsSnapshot
      }, null)])]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js + 1 modules
var clamp = __webpack_require__(7773);
// EXTERNAL MODULE: ./src/constants/order.ts
var constants_order = __webpack_require__(7162);
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
;// ./src/packageA/order/detail/index.tsx























/* harmony default export */ var detail = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: '',
  setup: function setup() {
    var orderNo = taro/* default.useRouter */.Ay.useRouter().params.orderNo;
    var detailRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var isLoading = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var getDetail = function getDetail() {
      if (isLoading.value) return void 0;
      isLoading.value = true;
      (0,order/* getGoodsOrderDetail */.aG)(orderNo).then(function (res) {
        if (res.code === 200) {
          detailRef.value = res.data;
        } else {
          (0,lib/* useResponseMessage */.Cd)(res);
        }
      }).catch(lib/* useResponseMessage */.Cd).finally(function () {
        isLoading.value = false;
      });
    };
    getDetail();
    (0,lib/* onPageShow */.Q4)(function () {
      getDetail();
    });

    /** 监听外部订单操作需要触发数据刷新 */
    var onRefresh = function onRefresh(orderId) {
      var _detailRef$value;
      if (((_detailRef$value = detailRef.value) === null || _detailRef$value === void 0 ? void 0 : _detailRef$value.id) !== orderId) return void 0;
      getDetail();
    };
    lib/* emitter */.PD.on(emitter/* EMITTER_ORDER_REFRESH */.k, onRefresh);
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(function () {
      lib/* emitter */.PD.off(emitter/* EMITTER_ORDER_REFRESH */.k, onRefresh);
    });
    var headerVisible = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value2;
      return ((_detailRef$value2 = detailRef.value) === null || _detailRef$value2 === void 0 || (_detailRef$value2 = _detailRef$value2.subOrders[0]) === null || _detailRef$value2 === void 0 ? void 0 : _detailRef$value2.type) != constants/* GOODS_TYPE_STORE_VERIFICATION */.uz;
    });
    var merchantStore = (0,merchant/* default */.A)();
    var paymentEndTime = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value3;
      return merchantStore.calcPaymentEndTime((_detailRef$value3 = detailRef.value) === null || _detailRef$value3 === void 0 ? void 0 : _detailRef$value3.createTime);
    });
    var _useCountdown = (0,lib/* useCountdown */.L4)(paymentEndTime),
      countdownTime = _useCountdown.countdownTime;
    var statusRef = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _ORDER_STATUS_OPTIONS, _detailRef$value$subO;
      var status = detailRef.value.status;
      var title = (_ORDER_STATUS_OPTIONS = (0,constants/* ORDER_STATUS_OPTIONS */.Q_)((_detailRef$value$subO = detailRef.value.subOrders) === null || _detailRef$value$subO === void 0 || (_detailRef$value$subO = _detailRef$value$subO[0]) === null || _detailRef$value$subO === void 0 ? void 0 : _detailRef$value$subO.type).find(function (item) {
        return item.value === status;
      })) === null || _ORDER_STATUS_OPTIONS === void 0 ? void 0 : _ORDER_STATUS_OPTIONS.label;
      var subtitle = '';
      if (status === constants/* ORDER_PAYMENT_STATUS_PENDING */.xU) {
        subtitle = (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BA2\u5355\u5728 "), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
          "class": "color-error number-font"
        }, [countdownTime.value]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u540E\u5C06\u81EA\u52A8\u5173\u95ED\uFF0C\u8BF7\u5C3D\u5FEB\u4ED8\u6B3E\u54E6\uFF5E")]);
      } else {
        var _ORDER_STATUS_OPTIONS2, _detailRef$value$subO2;
        subtitle = (_ORDER_STATUS_OPTIONS2 = (0,constants/* ORDER_STATUS_OPTIONS */.Q_)((_detailRef$value$subO2 = detailRef.value.subOrders) === null || _detailRef$value$subO2 === void 0 || (_detailRef$value$subO2 = _detailRef$value$subO2[0]) === null || _detailRef$value$subO2 === void 0 ? void 0 : _detailRef$value$subO2.type).find(function (item) {
          return item.value === status;
        })) === null || _ORDER_STATUS_OPTIONS2 === void 0 ? void 0 : _ORDER_STATUS_OPTIONS2.description;
      }
      return {
        title: title,
        subtitle: subtitle
      };
    });
    var address = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!detailRef.value) return undefined;
      var entityOrder = detailRef.value.subOrders.find(function (item) {
        return item.type === constants/* GOODS_TYPE_ENTITY */.i4;
      });
      if (!entityOrder) return null;
      var _ref = entityOrder !== null && entityOrder !== void 0 ? entityOrder : {},
        contactProvince = _ref.contactProvince,
        contactCity = _ref.contactCity,
        contactDistrict = _ref.contactDistrict,
        contactAddress = _ref.contactAddress,
        contactName = _ref.contactName,
        contactMobile = _ref.contactMobile;
      return {
        provinceName: contactProvince,
        cityName: contactCity,
        countyName: contactDistrict,
        detailInfo: contactAddress,
        userName: contactName,
        telNumber: contactMobile
      };
    });
    var extractExpresses = function extractExpresses(detail) {
      var list = [];
      detail.subOrders.forEach(function (order) {
        var _order$courierName$sp, _order$courierName, _order$courierNo$spli, _order$courierNo, _order$goodsStockSnap, _order$goodsStockSnap2, _order$goodsSnapshot;
        // 使用逗号分割快递公司名称和快递单号
        var courierNames = (_order$courierName$sp = (_order$courierName = order.courierName) === null || _order$courierName === void 0 ? void 0 : _order$courierName.split(',')) !== null && _order$courierName$sp !== void 0 ? _order$courierName$sp : [''];
        var courierNumbers = (_order$courierNo$spli = (_order$courierNo = order.courierNo) === null || _order$courierNo === void 0 ? void 0 : _order$courierNo.split(',')) !== null && _order$courierNo$spli !== void 0 ? _order$courierNo$spli : [''];
        var goods = {
          id: order.id,
          goodsId: order.goodsId,
          name: order.goodsName,
          image: (_order$goodsStockSnap = (_order$goodsStockSnap2 = order.goodsStockSnapshot) === null || _order$goodsStockSnap2 === void 0 || (_order$goodsStockSnap2 = _order$goodsStockSnap2.specs) === null || _order$goodsStockSnap2 === void 0 || (_order$goodsStockSnap2 = _order$goodsStockSnap2[0]) === null || _order$goodsStockSnap2 === void 0 ? void 0 : _order$goodsStockSnap2.image) !== null && _order$goodsStockSnap !== void 0 ? _order$goodsStockSnap : (_order$goodsSnapshot = order.goodsSnapshot) === null || _order$goodsSnapshot === void 0 || (_order$goodsSnapshot = _order$goodsSnapshot.coverImages) === null || _order$goodsSnapshot === void 0 ? void 0 : _order$goodsSnapshot[0]
        };

        // 创建一个对象数组，每个对象包含快递公司名称和对应的快递单号
        courierNumbers.forEach(function (no, index) {
          var target = list.find(function (item) {
            return item.courierNo === no;
          });
          if (target) {
            target.goodsList.push(goods);
          } else {
            list.push({
              courierName: courierNames[index].trim(),
              courierNo: no.trim(),
              remark: order.courierRemark,
              goodsList: [goods]
            });
          }
        });
      });
      return list;
    };
    var ExpressRef = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!address.value) return null;
      var packs = extractExpresses(detailRef.value);
      if (packs.filter(function (item) {
        return item.courierNo;
      }).length > 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(express, {
          "packs": packs,
          "address": address.value
        }, null);
      }
      // 未发货（没有快递单号）时，显示地址，否则显示物流。
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(address_selector/* default */.A, {
        "address": address.value,
        "readonly": true
      }, null);
    });

    /** 结算明细是否折叠 */
    var isBillFold = (0,reactivity_esm_bundler/* ref */.KR)(true);

    /** 是否可申请售后，这个不应该在前端计算... */
    var afterSaleApplicable = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      // 未付款、已取消、已关闭，不显示【售后按钮】
      if ([constants_order/* ORDER_STATUS_PENDING_PAYMENT */.lV, constants_order/* ORDER_STATUS_CLOSED */.TI, constants_order/* ORDER_STATUS_CANCELLED */.ME].includes(detailRef.value.status)) {
        return false;
      }

      // 【订单状态=已完成】
      if (detailRef.value.status === constants_order/* ORDER_STATUS_COMPLETED */.q8) {
        var merchantOrderFlow = merchantStore.merchantOrderFlow;

        // &【订单流程设置中-订单完成允许售后 = 不允许】时，不显示【售后按钮】
        if ((merchantOrderFlow === null || merchantOrderFlow === void 0 ? void 0 : merchantOrderFlow.afterSales) === 1) {
          return false;
        }
        var d = merchantOrderFlow === null || merchantOrderFlow === void 0 ? void 0 : merchantOrderFlow.complete;
        if (!d) return false;
        // 订单超出售后天数时，不显示【售后按钮】
        if (dayjs_min_default()().isAfter(dayjs_min_default()(detailRef.value.completedTime).add(d, 'day'))) {
          return false;
        }
      }
      return true;
    });
    var subOrders = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return detailRef.value.subOrders.map(function (item) {
        var _ORDER_AFTER_SALES_ST;
        return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, item), {}, {
          $status: item.afterSaleOrderNo ? ((_ORDER_AFTER_SALES_ST = constants_order/* ORDER_AFTER_SALES_STATUS_OPTIONS */.$p.find(function (i) {
            return i.value == item.afterSaleOrderStatus;
          })) === null || _ORDER_AFTER_SALES_ST === void 0 ? void 0 : _ORDER_AFTER_SALES_ST.label) || '售后中' : '',
          $actions: function $actions() {
            return [detailRef.value.payStatus !== constants/* ORDER_PAYMENT_STATUS_PENDING */.xU && (item.afterSaleOrderNo ? (0,runtime_core_esm_bundler/* createVNode */.bF)(order_goods_item/* OrderGoodsItemAction */.q, {
              "onClick": function onClick() {
                (0,router/* navigateToAfterSaleResult */.nb)(item.afterSaleOrderNo);
              }
            }, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u8FDB\u5EA6"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
                  "name": "right"
                }, null)];
              }
            }) : afterSaleApplicable.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(order_goods_item/* OrderGoodsItemAction */.q, {
              "onClick": function onClick() {
                (0,useAfterSale/* default */.A)({
                  mainOrderNo: detailRef.value.orderNo,
                  orderNo: item.orderNo
                });
              }
            }, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u540E\u7533\u8BF7")];
              }
            }))];
          }
        });
      });
    });
    var paymentMode = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value$paym;
      var channels = (_detailRef$value$paym = detailRef.value.paymentChannelInfos) === null || _detailRef$value$paym === void 0 ? void 0 : _detailRef$value$paym.map(function (item) {
        var _PAYMENT_CHANNEL_OPTI;
        return {
          label: ((_PAYMENT_CHANNEL_OPTI = constants/* PAYMENT_CHANNEL_OPTIONS */.AL.find(function (o) {
            return o.value === item.paymentChannel;
          })) === null || _PAYMENT_CHANNEL_OPTI === void 0 ? void 0 : _PAYMENT_CHANNEL_OPTI.label) || item.paymentChannel,
          value: (0,clamp/* default */.A)(item.totalAmount / 100, 0, Infinity)
        };
      });
      return (channels || ['微信支付']).map(function (item) {
        var _item$label;
        return (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item;
      }).join(' ＋ ');
    });
    var balanceAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value$paym2;
      var v = (_detailRef$value$paym2 = detailRef.value.paymentChannelInfos) === null || _detailRef$value$paym2 === void 0 || (_detailRef$value$paym2 = _detailRef$value$paym2.find(function (item) {
        return item.paymentChannel === constants/* PAYMENT_CHANNEL_BALANCE */.AU;
      })) === null || _detailRef$value$paym2 === void 0 ? void 0 : _detailRef$value$paym2.totalAmount;
      return v > 0 ? v : 0;
    });
    var payAmount = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return detailRef.value.payAmount - balanceAmount.value;
    });
    var discountCoupon = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var coupons = detailRef.value.discountCoupon;
      if (!((coupons === null || coupons === void 0 ? void 0 : coupons.length) > 0)) {
        return {
          amount: 0,
          coupons: []
        };
      }
      return {
        amount: coupons.reduce(function (v, item) {
          var _item$discountAmount;
          return v + ((_item$discountAmount = item.discountAmount) !== null && _item$discountAmount !== void 0 ? _item$discountAmount : 0);
        }, 0),
        coupons: coupons
      };
    });
    var formatCouponText = function formatCouponText(item) {
      var v = (0,utils/* formatPrice */.$g)(item.discountAmount / 100);
      if (item.thresholdAmount > 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "coupon-item number-font"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6EE1 "), (0,utils/* formatPrice */.$g)(item.thresholdAmount / 100), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u51CF "), v]);
      } else if (item.thresholdAmount === 0) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "coupon-item"
        }, [v, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u5143\u65E0\u95E8\u69DB")]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupon-item"
      }, [v, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u5143\u5238")]);
    };
    return function () {
      var _detailRef$value$payT;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "navigator": {
          title: '订单详情'
        }
      }, {
        default: function _default() {
          return [isLoading.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(skeleton, null, null) : !detailRef.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
            "description": "\u627E\u4E0D\u5230\u8BA2\u5355"
          }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail-page"
          }, [headerVisible.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__header"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "title"
          }, [statusRef.value.title]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "subtitle"
          }, [statusRef.value.subtitle])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__content"
          }, [ExpressRef.value, (0,runtime_core_esm_bundler/* createVNode */.bF)(detail_coupon, {
            "orderDetail": detailRef.value,
            "onRefresh": getDetail
          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__goods"
          }, [subOrders.value.map(function (item) {
            var _item$goodsStockSnaps, _item$goodsStockSnaps2, _item$goodsSnapshot;
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(order_goods_item/* default */.A, {
              "image": (_item$goodsStockSnaps = (_item$goodsStockSnaps2 = item.goodsStockSnapshot) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2.specs) === null || _item$goodsStockSnaps2 === void 0 || (_item$goodsStockSnaps2 = _item$goodsStockSnaps2[0]) === null || _item$goodsStockSnaps2 === void 0 ? void 0 : _item$goodsStockSnaps2.image) !== null && _item$goodsStockSnaps !== void 0 ? _item$goodsStockSnaps : (_item$goodsSnapshot = item.goodsSnapshot) === null || _item$goodsSnapshot === void 0 || (_item$goodsSnapshot = _item$goodsSnapshot.coverImages) === null || _item$goodsSnapshot === void 0 ? void 0 : _item$goodsSnapshot[0],
              "name": item.goodsName,
              "spec": item.goodsStockSnapshot.specs.map(function (spec) {
                return spec.v;
              }).join('／'),
              "unitPrice": item.priceText,
              "unitPricePaid": item.$payUnitAmountText,
              "count": item.count,
              "status": item.$status,
              "actions": item.$actions,
              "onClick": function onClick() {
                (0,router/* navigateToGoodsDetail */.C7)(item.goodsId);
              }
            }, null);
          }), !isBillFold.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__bill"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u603B\u4EF7")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value number-font"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "yen"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), detailRef.value.amountText])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u4F18\u60E0")]), discountCoupon.value.amount > 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value primary number-font"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "style": "font-weight:normal;font-size:0.8em;"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u51CF")]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "yen"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), (discountCoupon.value.amount / 100).toFixed(2)]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value secondary"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u672A\u4F7F\u7528\u4F18\u60E0")])]), discountCoupon.value.amount > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "discount-coupon-use-details"
          }, [discountCoupon.value.coupons.map(function (item) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "name"
            }, [item.name]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "text"
            }, [formatCouponText(item)])]);
          })]), balanceAmount.value > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F59\u989D\u62B5\u6263")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value primary number-font"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "style": "font-weight:normal;font-size:0.8em;"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u51CF")]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "yen"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), (balanceAmount.value / 100).toFixed(2)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8FD0\u8D39")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value secondary"
          }, [detailRef.value.freightAmount > 0 ? detailRef.value.freightAmountText : '免运费'])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__summary",
            "onClick": function onClick() {
              isBillFold.value = !isBillFold.value;
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__pay-amount number-font"
          }, [detailRef.value.payStatus === constants/* ORDER_PAYMENT_STATUS_PENDING */.xU ? '需付款' : '实付款', (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "yen"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5\xA0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(payAmount.value / 100).toFixed(2)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "down",
            "class": !isBillFold.value && 'up'
          }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "order-detail__info"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "main-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BA2\u5355\u4FE1\u606F")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item",
            "onClick": function onClick() {
              (0,lib/* useCopyText */.sc)(detailRef.value.orderNo);
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BA2\u5355\u7F16\u53F7")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [detailRef.value.orderNo, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "copy-btn"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u590D\u5236")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BA2\u5355\u5907\u6CE8")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value color-disabled"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65E0\u5907\u6CE8")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u652F\u4ED8\u65B9\u5F0F")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [paymentMode.value])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4E0B\u5355\u65F6\u95F4")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [detailRef.value.createTime])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "info-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u652F\u4ED8\u65F6\u95F4")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [(_detailRef$value$payT = detailRef.value.payTime) !== null && _detailRef$value$payT !== void 0 ? _detailRef$value$payT : '—'])])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(action_bar, {
            "orderDetail": detailRef.value
          }, null)])];
        }
      });
    };
  }
}));

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

/***/ 9290:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ must_know; }
});

// UNUSED EXPORTS: StoreVerifTypeGoodsMustKnow

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 20 modules
var src = __webpack_require__(5788);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
;// ./src/utils/goods.ts



/** 商品有效期文案 */
var calcGoodsValidTimeText = function calcGoodsValidTimeText(detail) {
  if ((detail === null || detail === void 0 ? void 0 : detail.expireType) === constants/* GOODS_VALID_TIME_RANGE */._3) return "".concat((0,utils/* formatDate */.Yq)(detail.expireStartAt || ''), " \uFF5E ").concat((0,utils/* formatDate */.Yq)(detail.expireEndAt || ''));
  if ((detail === null || detail === void 0 ? void 0 : detail.expireType) === constants/* GOODS_VALID_TIME_DURATION */.dQ) return "\u81EA\u8D2D\u4E70\u540E ".concat(detail.expireDays, " \u5929\u5185\u6709\u6548");
  return '未知，请联系客服询问';
};
var calcGoodsUsableTimeText = function calcGoodsUsableTimeText(detail) {
  if ((detail === null || detail === void 0 ? void 0 : detail.availableDate) === constants/* GOODS_USABLE_TIME_OPENING */.pG) {
    return ['营业时间内可用'];
  } else if ((detail === null || detail === void 0 ? void 0 : detail.availableDate) === constants/* GOODS_USABLE_TIME_RANGE */.Sy) {
    return ["".concat(detail.availableDateStartAt || '', " \uFF5E ").concat(detail.availableDateEndAt || '')];
  }
  return ['未知，请联系客服询问'];
};
var weekMap = [{
  label: '一',
  value: 1
}, {
  label: '二',
  value: 2
}, {
  label: '三',
  value: 3
}, {
  label: '四',
  value: 4
}, {
  label: '五',
  value: 5
}, {
  label: '六',
  value: 6
}, {
  label: '日',
  value: 7
}];
var calcGoodsUnusableTimeText = function calcGoodsUnusableTimeText(detail) {
  var _detail$unavailableDa;
  var list = [];
  if (!detail || detail.unavailableDate === constants/* COMMON_STATUS_OFF */.nf) {
    return list;
  }
  if (((_detail$unavailableDa = detail.unavailableDateWeekday) === null || _detail$unavailableDa === void 0 ? void 0 : _detail$unavailableDa.length) > 0) {
    list.push("\u6BCF\u5468 ".concat(detail.unavailableDateWeekday.map(function (i) {
      var _weekMap$find;
      return (_weekMap$find = weekMap.find(function (day) {
        return day.value === i;
      })) === null || _weekMap$find === void 0 ? void 0 : _weekMap$find.label;
    }).join('、'), " \u4E0D\u53EF\u7528\uFF1B"));
  }
  if (detail.unavailableDateHoliday === constants/* COMMON_STATUS_ON */.lQ) {
    list.push('法定节假日不可用；');
  }
  if (detail.unavailableDateRange === constants/* COMMON_STATUS_ON */.lQ) {
    list.push("\u671F\u95F4\u5185\u4E0D\u53EF\u7528\uFF1A".concat(detail.unavailableDateStartAt, " \n\t\t\t \uFF5E ").concat(detail.unavailableDateEndAt));
  }
  return list;
};
;// ./src/packageA/goods/detail/must-know/index.tsx







/* harmony default export */ var must_know = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsDetailMustKnow',
  props: {
    goodsDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    if (!props.goodsDetail.mustKnow) return null;
    return function () {
      if (props.goodsDetail.type === constants/* GOODS_TYPE_STORE_VERIFICATION */.uz) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(StoreVerifTypeGoodsMustKnow, {
          "goodsDetail": props.goodsDetail
        }, null);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-must-know"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D2D\u4E70\u987B\u77E5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Fold */.av, null, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* RichText */.sD, {
            "nodes": props.goodsDetail.mustKnow
          }, null)];
        }
      })])]);
    };
  }
}));

/** 门店核销类商品购买须知 */
var StoreVerifTypeGoodsMustKnow = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    goodsDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var goodsUnusableTimeText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return calcGoodsUnusableTimeText(props.goodsDetail);
    });
    var aheadDays = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (props.goodsDetail.needAhead !== constants/* COMMON_STATUS_ON */.lQ) {
        return 0;
      }
      return Number.isNaN(Number(props.goodsDetail.aheadDays)) ? 0 : props.goodsDetail.aheadDays;
    });
    return function () {
      var _props$goodsDetail;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-must-know"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D2D\u4E70\u987B\u77E5")]), aheadDays.value > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-title"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "info"
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u63D0\u524D\u8D2D\u4E70")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-content",
        "style": "display:flex;"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9700\u63D0\u524D\xA0"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "color-primary"
      }, [aheadDays.value]), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u5929\u8D2D\u4E70")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-title"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "plan"
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6709\u6548\u671F")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-content"
      }, [calcGoodsValidTimeText(props.goodsDetail)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-title"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "time"
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53EF\u7528\u65F6\u95F4")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-content"
      }, [calcGoodsUsableTimeText(props.goodsDetail)])]), goodsUnusableTimeText.value.length > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-title"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "close-round"
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4E0D\u53EF\u7528\u65F6\u95F4")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-content"
      }, [goodsUnusableTimeText.value.map(function (text, index) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "style": "display:flex;margin-top:8px;white-space:pre-wrap;"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [index + 1, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(". \xA0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [text])]);
      })])]), ((_props$goodsDetail = props.goodsDetail) === null || _props$goodsDetail === void 0 || (_props$goodsDetail = _props$goodsDetail.verificationTips) === null || _props$goodsDetail === void 0 ? void 0 : _props$goodsDetail.length) > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-title"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "scan-code"
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6838\u9500\u63D0\u793A")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "style": "margin-top:8px"
      }, null), props.goodsDetail.verificationTips])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-title"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "agreement"
      }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F7F\u7528\u89C4\u5219")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "must-know__group-content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "style": "margin-top:8px"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* RichText */.sD, {
        "nodes": props.goodsDetail.mustKnow || '无内容'
      }, null)])])]);
    };
  }
});

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
//# sourceMappingURL=233.js.map