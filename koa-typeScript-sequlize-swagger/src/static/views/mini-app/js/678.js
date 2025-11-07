"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[678,680],{

/***/ 101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ useTouch; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4243);

var MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  var startX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var startY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var moveX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var moveY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var deltaX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var deltaY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var offsetX = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var offsetY = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)(0);
  var direction = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .KR)("");
  var isVertical = function isVertical() {
    return direction.value === "vertical";
  };
  var isHorizontal = function isHorizontal() {
    return direction.value === "horizontal";
  };
  var reset = function reset() {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
  };
  var start = function start(event) {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };
  var move = function move(event) {
    var touch = event.touches[0];
    deltaX.value = touch.clientX - startX.value;
    deltaY.value = touch.clientY - startY.value;
    moveX.value = touch.clientX;
    moveY.value = touch.clientY;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };
  return {
    move: move,
    start: start,
    reset: reset,
    startX: startX,
    startY: startY,
    moveX: moveX,
    moveY: moveY,
    deltaX: deltaX,
    deltaY: deltaY,
    offsetX: offsetX,
    offsetY: offsetY,
    direction: direction,
    isVertical: isVertical,
    isHorizontal: isHorizontal
  };
}


/***/ }),

/***/ 934:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 1781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: function() { return /* binding */ saveImageToPhotosAlbum; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/utils/index.js
var utils = __webpack_require__(9641);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/utils/handler.js
var handler = __webpack_require__(589);
;// ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/utils/helper.js
function createDownload() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var download = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = download;
  // Note: 需要注意，该方案不能监听用户取消或禁止下载等操作，亦不能获取下载成功或失败状态
  link.click();
}

;// ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/media/image/saveImageToPhotosAlbum.js



var saveImageToPhotosAlbum = function saveImageToPhotosAlbum(options) {
  var methodName = 'saveImageToPhotosAlbum';
  // options must be an Object
  var isObject = (0,utils/* shouldBeObject */._S)(options);
  if (!isObject.flag) {
    var res = {
      errMsg: "".concat(methodName, ":fail ").concat(isObject.msg)
    };
    console.error(res.errMsg);
    return Promise.reject(res);
  }
  var filePath = options.filePath,
    success = options.success,
    fail = options.fail,
    complete = options.complete;
  var handle = new handler/* MethodHandler */._({
    name: methodName,
    success: success,
    fail: fail,
    complete: complete
  });
  if (typeof filePath !== 'string') {
    return handle.fail({
      errMsg: (0,utils/* getParameterError */.m2)({
        para: 'filePath',
        correct: 'String',
        wrong: filePath
      })
    });
  }
  createDownload(filePath);
  return handle.success();
};


/***/ }),

/***/ 1987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ PosterBuilder; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+shared@3.5.22/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3082);
;// ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+c_a0cadfd1eda32e6e3871475f9f5d91fa/node_modules/babel-loader/lib/index.js??clonedRuleSet-10.use[0]!../../node_modules/.pnpm/vue-loader@17.4.2_@vue+comp_87a346c7014d1029328de397d904e6c1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/.pnpm/vue-loader@17.4.2_@vue+comp_87a346c7014d1029328de397d904e6c1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packageA/posterMaking/create/PosterBuilder/index.vue?vue&type=template&id=4a347034&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_taro_canvas = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("taro-canvas");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_taro_canvas, {
    type: "2d",
    id: _ctx.canvasId,
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)("height: ".concat(_ctx.height, "rpx; width:").concat(_ctx.width, "rpx;\n    position: absolute;\n    ").concat(_ctx.debug ? '' : 'transform:translate3d(-9999rpx, 0, 0)'))
  }, null, 8, ["id", "style"]);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(8831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/framework/index.js
var framework = __webpack_require__(4171);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/wxml/index.js + 4 modules
var wxml = __webpack_require__(1346);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/utils/index.js
var utils = __webpack_require__(9641);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/utils/handler.js
var handler = __webpack_require__(589);
;// ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/canvas/canvasToTempFilePath.js



/**
 * 把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功。
 * @todo 暂未支持尺寸相关功能
 */
var canvasToTempFilePath = function canvasToTempFilePath(_ref, inst) {
  var canvasId = _ref.canvasId,
    fileType = _ref.fileType,
    quality = _ref.quality,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;
  var handle = new handler/* MethodHandler */._({
    name: 'canvasToTempFilePath',
    success: success,
    fail: fail,
    complete: complete
  });
  var el = (0,utils/* findDOM */.wI)(inst);
  var canvas = el === null || el === void 0 ? void 0 : el.querySelector("canvas[canvas-id=\"".concat(canvasId, "\"]"));
  try {
    var dataURL = canvas === null || canvas === void 0 ? void 0 : canvas.toDataURL("image/".concat((fileType === 'jpg' ? 'jpeg' : fileType) || 'png'), quality);
    return handle.success({
      tempFilePath: dataURL
    });
  } catch (e) {
    return handle.fail({
      errMsg: e.message
    });
  }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/interaction/index.js + 3 modules
var interaction = __webpack_require__(7888);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(2663);
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/PosterBuilder/utils/tools.ts
var tools = __webpack_require__(962);
;// ./src/packageA/posterMaking/create/PosterBuilder/utils/draw.ts


/* eslint-disable no-underscore-dangle */


/**
 * 绘制圆角矩形
 * @param { object } drawData - 绘制数据
 * @param { number } drawData.x - 左上角x坐标
 * @param { number } drawData.y - 左上角y坐标
 * @param { number } drawData.w - 矩形的宽
 * @param { number } drawData.h - 矩形的高
 * @param { number } drawData.r - 圆角半径
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 * @description arcTo 比 arc 更加简洁，三点画弧，但是比较难理解 参考资料：http://www.yanghuiqing.com/web/346
 * ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise(是否逆时针画弧))
 * ctx.arcTo(x1, y1, x2, y2, radius); // 当前点-x1点 画切线 x1点到x2点画切线， 用半径为radius的圆弧替换掉切线部分
 */
function _drawRadiusRect(_ref, _ref2) {
  var x = _ref.x,
    y = _ref.y,
    w = _ref.w,
    h = _ref.h,
    r = _ref.r;
  var ctx = _ref2.ctx;
  var minSize = Math.min(w, h);
  if (r > minSize / 2) r = minSize / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r); // 绘制上边框和右上角弧线
  ctx.arcTo(x + w, y + h, x, y + h, r); // 绘制右边框和右下角弧线
  ctx.arcTo(x, y + h, x, y, r); // 绘制下边框和左下角弧线
  ctx.arcTo(x, y, x + w, y, r); // 绘制左边框和左上角弧线
  ctx.closePath();
}

/**
 * 绘制圆角矩形
 * @param { object } drawData - 绘制数据
 * @param { number } drawData.x - 左上角x坐标
 * @param { number } drawData.y - 左上角y坐标
 * @param { number } drawData.w - 矩形的宽
 * @param { number } drawData.h - 矩形的高
 * @param { number } drawData.g - 圆角半径数组
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 */
function _drawRadiusGroupRect(_ref3, _ref4) {
  var x = _ref3.x,
    y = _ref3.y,
    w = _ref3.w,
    h = _ref3.h,
    g = _ref3.g;
  var ctx = _ref4.ctx;
  var _g = (0,slicedToArray/* default */.A)(g, 4),
    borderTopLeftRadius = _g[0],
    borderTopRightRadius = _g[1],
    borderBottomRightRadius = _g[2],
    borderBottomLeftRadius = _g[3];
  ctx.beginPath();
  ctx.arc(x + w - borderBottomRightRadius, y + h - borderBottomRightRadius, borderBottomRightRadius, 0, Math.PI * 0.5);
  ctx.lineTo(x + borderBottomLeftRadius, y + h);
  // 左下角
  ctx.arc(x + borderBottomLeftRadius, y + h - borderBottomLeftRadius, borderBottomLeftRadius, Math.PI * 0.5, Math.PI);
  ctx.lineTo(x, y + borderTopLeftRadius);
  // 左上角
  ctx.arc(x + borderTopLeftRadius, y + borderTopLeftRadius, borderTopLeftRadius, Math.PI, Math.PI * 1.5);
  ctx.lineTo(x + w - borderTopRightRadius, y);
  // 右上角
  ctx.arc(x + w - borderTopRightRadius, y + borderTopRightRadius, borderTopRightRadius, Math.PI * 1.5, Math.PI * 2);
  ctx.lineTo(x + w, y + h - borderBottomRightRadius);
  // ctx.arcTo(x + w, y, x + w, y + h, r); // 绘制上边框和右上角弧线
  // ctx.arcTo(x + w, y + h, x, y + h, r); // 绘制右边框和右下角弧线
  // ctx.arcTo(x, y + h, x, y, r); // 绘制下边框和左下角弧线
  // ctx.arcTo(x, y, x + w, y, r); // 绘制左边框和左上角弧线
  ctx.closePath();
}

/**
 * 计算文本长度
 * @param { Array | Object } text 数组 或者 对象
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 */
function _getTextWidth(text, drawOptions) {
  var ctx = drawOptions.ctx;
  var texts = [];
  if (Object.prototype.toString.call(text) === '[object Object]') {
    texts.push(text);
  } else {
    texts = text;
  }
  var width = 0;
  texts.forEach(function (_ref5) {
    var fontSize = _ref5.fontSize,
      textStr = _ref5.text,
      _ref5$fontStyle = _ref5.fontStyle,
      fontStyle = _ref5$fontStyle === void 0 ? 'normal' : _ref5$fontStyle,
      _ref5$fontWeight = _ref5.fontWeight,
      fontWeight = _ref5$fontWeight === void 0 ? 'normal' : _ref5$fontWeight,
      _ref5$fontFamily = _ref5.fontFamily,
      fontFamily = _ref5$fontFamily === void 0 ? 'sans-serif' : _ref5$fontFamily,
      _ref5$marginLeft = _ref5.marginLeft,
      marginLeft = _ref5$marginLeft === void 0 ? 0 : _ref5$marginLeft,
      _ref5$marginRight = _ref5.marginRight,
      marginRight = _ref5$marginRight === void 0 ? 0 : _ref5$marginRight;
    ctx.font = "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
    width += ctx.measureText(textStr).width + marginLeft + marginRight;
  });
  return width;
}

/**
 * 渲染一段文字
 * @param { object } drawData - 绘制数据
 * @param { number } drawData.x - x坐标 rpx
 * @param { number } drawData.y - y坐标 rpx
 * @param { number } drawData.fontSize - 文字大小 rpx
 * @param { number } [drawData.color] - 颜色
 * @param { string } [drawData.baseLine] - 基线对齐方式 top| middle|bottom|...
 * @param { string } [drawData.textAlign='left'] - 对齐方式 left|center|right
 * @param { string } drawData.text - 当Object类型时，参数为 text 字段的参数，marginLeft、marginRight这两个字段可用
 * @param { number } [drawData.opacity=1] - 1为不透明，0为透明
 * @param { string } [drawData.textDecoration='none']
 * @param { number } [drawData.width] - 文字宽度 没有指定为画布宽度
 * @param { number } [drawData.lineNum=1] - 根据宽度换行，最多的行数
 * @param { number } [drawData.lineHeight=0] - 行高
 * @param { string } [drawData.fontWeight='normal'] - 'bold' 加粗字体，目前小程序不支持 100 - 900 加粗
 * @param { string } [drawData.fontStyle='normal'] - 'italic' 倾斜字体
 * @param { string } [drawData.fontFamily="sans-serif"] - 小程序默认字体为 'sans-serif', 请输入小程序支持的字体
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 */
function _drawSingleText(drawData, drawOptions) {
  var _drawData$x = drawData.x,
    x = _drawData$x === void 0 ? 0 : _drawData$x,
    _drawData$y = drawData.y,
    y = _drawData$y === void 0 ? 0 : _drawData$y,
    text = drawData.text,
    color = drawData.color,
    width = drawData.width,
    _drawData$fontSize = drawData.fontSize,
    fontSize = _drawData$fontSize === void 0 ? 28 : _drawData$fontSize,
    _drawData$baseLine = drawData.baseLine,
    baseLine = _drawData$baseLine === void 0 ? 'top' : _drawData$baseLine,
    _drawData$textAlign = drawData.textAlign,
    textAlign = _drawData$textAlign === void 0 ? 'left' : _drawData$textAlign,
    _drawData$opacity = drawData.opacity,
    opacity = _drawData$opacity === void 0 ? 1 : _drawData$opacity,
    _drawData$textDecorat = drawData.textDecoration,
    textDecoration = _drawData$textDecorat === void 0 ? 'none' : _drawData$textDecorat,
    _drawData$lineNum = drawData.lineNum,
    lineNum = _drawData$lineNum === void 0 ? 1 : _drawData$lineNum,
    _drawData$lineHeight = drawData.lineHeight,
    lineHeight = _drawData$lineHeight === void 0 ? 0 : _drawData$lineHeight,
    _drawData$fontWeight = drawData.fontWeight,
    fontWeight = _drawData$fontWeight === void 0 ? 'normal' : _drawData$fontWeight,
    _drawData$fontStyle = drawData.fontStyle,
    fontStyle = _drawData$fontStyle === void 0 ? 'normal' : _drawData$fontStyle,
    _drawData$fontFamily = drawData.fontFamily,
    fontFamily = _drawData$fontFamily === void 0 ? 'sans-serif' : _drawData$fontFamily;
  var ctx = drawOptions.ctx;
  // 画笔初始化
  ctx.save();
  ctx.beginPath();
  ctx.font = "".concat(fontStyle, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.textBaseline = baseLine;
  ctx.textAlign = textAlign;
  var textWidth = ctx.measureText(text).width; // 测量文本宽度
  var textArr = [];

  // 文本超出换行
  if (textWidth > width) {
    // 如果超出一行 ，则判断要分为几行
    var fillText = ''; // 当前行已拼接的文字
    var line = 1; // 当前是第几行
    for (var i = 0; i <= text.length - 1; i++) {
      // 将文字转为数组，一行文字一个元素
      fillText += text[i]; // 当前已拼接文字串
      var nextText = i < text.length - 1 ? fillText + text[i + 1] : fillText; // 再拼接下一个文字
      var restWidth = width - ctx.measureText(nextText).width; // 拼接下一个文字后的剩余宽度

      if (restWidth < 0) {
        // 如果拼接下一个字就超出宽度则添加者省略号或者换行
        if (line === lineNum) {
          // 已经是最后一行，就拼接省略号
          if (restWidth + ctx.measureText(text[i + 1]).width > ctx.measureText('...').width) {
            // 剩余宽度能否放下省略号
            fillText = "".concat(fillText, "...");
          } else {
            fillText = "".concat(fillText.substr(0, fillText.length - 1), "...");
          }
          textArr.push(fillText);
          break;
        } else {
          // 如果不是最后一行，就换行
          textArr.push(fillText);
          line++;
          fillText = '';
        }
      } else if (i === text.length - 1) {
        textArr.push(fillText);
      }
    }
    textWidth = width;
  } else {
    textArr.push(text);
  }

  // 按行渲染文字
  textArr.forEach(function (item, index) {
    return ctx.fillText(item, (0,tools/* getTextX */.Qf)(textAlign, x, width),
    // 根据文本对齐方式和宽度确定 x 坐标
    y + (lineHeight || fontSize) * index // 根据行数、行高 || 字体大小确定 y 坐标
    );
  });
  ctx.restore();

  // 文本修饰，下划线、删除线什么的
  if (textDecoration !== 'none') {
    var lineY = y;
    if (textDecoration === 'line-through') {
      // 目前只支持贯穿线
      lineY = y;
    }
    ctx.save();
    ctx.moveTo(x, lineY);
    ctx.lineTo(x + textWidth, lineY);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
  }
  return textWidth;
}

/**
 * 渲染文字
 * @param { object } params - 绘制数据
 * @param { number } params.x - x坐标 rpx
 * @param { number } params.y - y坐标 rpx
 * @param { number } params.fontSize - 文字大小 rpx
 * @param { number } [params.color] - 颜色
 * @param { string } [params.baseLine] - 基线对齐方式 top| middle|bottom
 * @param { string } [params.textAlign='left'] - 对齐方式 left|center|right
 * @param { string } params.text - 当Object类型时，参数为 text 字段的参数，marginLeft、marginRight这两个字段可用
 * @param { number } [params.opacity=1] - 1为不透明，0为透明
 * @param { string } [params.textDecoration='none']
 * @param { number } [params.width] - 文字宽度 没有指定为画布宽度
 * @param { number } [params.lineNum=1] - 根据宽度换行，最多的行数
 * @param { number } [params.lineHeight=0] - 行高
 * @param { string } [params.fontWeight='normal'] - 'bold' 加粗字体，目前小程序不支持 100 - 900 加粗
 * @param { string } [params.fontStyle='normal'] - 'italic' 倾斜字体
 * @param { string } [params.fontFamily="sans-serif"] - 小程序默认字体为 'sans-serif', 请输入小程序支持的字体
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 */
function drawText(params, drawOptions) {
  var _params$x = params.x,
    x = _params$x === void 0 ? 0 : _params$x,
    _params$y = params.y,
    y = _params$y === void 0 ? 0 : _params$y,
    text = params.text,
    baseLine = params.baseLine;
  if (Object.prototype.toString.call(text) === '[object Array]') {
    var preText = {
      x: x,
      y: y,
      baseLine: baseLine
    };

    // 遍历多行文字，一行一行渲染
    text.forEach(function (item) {
      preText.x += item.marginLeft || 0;
      // TODO:多段文字超出一行的处理
      var textWidth = _drawSingleText(Object.assign(item, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, preText), {}, {
        y: y + (item.marginTop || 0)
      })), drawOptions);
      preText.x += textWidth + (item.marginRight || 0); // 下一段文字的 x 坐标为上一段字 x坐标 + 文字宽度 + marginRight
    });
  } else {
    _drawSingleText(params, drawOptions);
  }
}

/**
 * @description 渲染线
 * @param  { number } startX - 起始坐标
 * @param  { number } startY - 起始坐标
 * @param  { number } endX - 终结坐标
 * @param  { number } endY - 终结坐标
 * @param  { number } width - 线的宽度
 * @param  { string } [color] - 线的颜色
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 */
function drawLine(drawData, drawOptions) {
  var startX = drawData.startX,
    startY = drawData.startY,
    endX = drawData.endX,
    endY = drawData.endY,
    color = drawData.color,
    width = drawData.width;
  var ctx = drawOptions.ctx;
  if (!width) return;
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

/**
 * 渲染矩形
 * @param  { number } x - x坐标
 * @param  { number } y - y坐标
 * @param  { number } height -高
 * @param  { string|object } [text] - 块里面可以填充文字，参考texts字段
 * @param  { number } [width=0] - 宽 如果内部有文字，由文字宽度和内边距决定
 * @param  { number } [paddingLeft=0] - 内左边距
 * @param  { number } [paddingRight=0] - 内右边距
 * @param  { number } [borderWidth] - 边框宽度
 * @param  { string } [backgroundColor] - 背景颜色
 * @param  { string } [borderColor] - 边框颜色
 * @param  { number } [borderRadius=0] - 圆角
 * @param  { array | null } [borderRadiusGroup= null] - 圆角数组
 * @param  { number } [opacity=1] - 透明度
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 */
function drawBlock(data, drawOptions) {
  var _ref6 = data || {},
    x = _ref6.x,
    y = _ref6.y,
    text = _ref6.text,
    _ref6$width = _ref6.width,
    width = _ref6$width === void 0 ? 0 : _ref6$width,
    height = _ref6.height,
    _ref6$opacity = _ref6.opacity,
    opacity = _ref6$opacity === void 0 ? 1 : _ref6$opacity,
    _ref6$paddingLeft = _ref6.paddingLeft,
    paddingLeft = _ref6$paddingLeft === void 0 ? 0 : _ref6$paddingLeft,
    _ref6$paddingRight = _ref6.paddingRight,
    paddingRight = _ref6$paddingRight === void 0 ? 0 : _ref6$paddingRight,
    borderWidth = _ref6.borderWidth,
    backgroundColor = _ref6.backgroundColor,
    borderColor = _ref6.borderColor,
    _ref6$borderRadius = _ref6.borderRadius,
    borderRadius = _ref6$borderRadius === void 0 ? 0 : _ref6$borderRadius,
    _ref6$borderRadiusGro = _ref6.borderRadiusGroup,
    borderRadiusGroup = _ref6$borderRadiusGro === void 0 ? null : _ref6$borderRadiusGro;
  var ctx = drawOptions.ctx;
  ctx.save(); // 先保存画笔样式，等下恢复回来
  ctx.globalAlpha = opacity;
  var blockWidth = 0; // 块的宽度
  var textX = 0;
  var textY = 0;

  // 渲染块内文字
  if (text) {
    // 如果文字宽度超出块宽度，则块的宽度为：文字的宽度 + 内边距
    var textWidth = _getTextWidth(typeof text.text === 'string' ? text : text.text, drawOptions);
    blockWidth = textWidth > width ? textWidth : width;
    blockWidth += paddingLeft + paddingLeft;
    var _text$textAlign = text.textAlign,
      textAlign = _text$textAlign === void 0 ? 'left' : _text$textAlign;
    textY = y; // 文字默认定位在块的左上角
    textX = x + paddingLeft;

    // 文字居中
    if (textAlign === 'center') {
      textX = blockWidth / 2 + x;
    } else if (textAlign === 'right') {
      textX = x + blockWidth - paddingRight;
    }
    drawText(Object.assign(text, {
      x: textX,
      y: textY
    }), drawOptions);
  } else {
    blockWidth = width;
  }

  // 画矩形背景
  if (backgroundColor) {
    var grd = (0,tools/* getLinearColor */.LZ)(ctx, backgroundColor, x, y, blockWidth, height);
    ctx.fillStyle = grd;

    // 画圆角矩形
    if (borderRadius > 0) {
      var drawData = {
        x: x,
        y: y,
        w: blockWidth,
        h: height,
        r: borderRadius
      };
      _drawRadiusRect(drawData, drawOptions);
      ctx.fill(); // 填充路径
    } else if (borderRadiusGroup) {
      var _drawData = {
        x: x,
        y: y,
        w: blockWidth,
        h: height,
        g: borderRadiusGroup
      };
      _drawRadiusGroupRect(_drawData, drawOptions);
      ctx.fill(); // 填充路径
    } else {
      ctx.fillRect(x, y, blockWidth, height); // 绘制矩形
    }
  }

  // 画边框
  if (borderWidth && borderRadius > 0) {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    if (borderRadius > 0) {
      // 画圆角矩形边框
      var _drawData2 = {
        x: x,
        y: y,
        w: blockWidth,
        h: height,
        r: borderRadius
      };
      _drawRadiusRect(_drawData2, drawOptions);
      ctx.stroke();
    } else {
      ctx.strokeRect(x, y, blockWidth, height);
    }
  }
  ctx.restore(); // 将 canvas 恢复到最近的保存状态的方法
}

/**
 * @description 渲染图片
 * @param { object } data
 * @param { number } sx - 源图像的矩形选择框的左上角 x 坐标 裁剪
 * @param { number } sy - 源图像的矩形选择框的左上角 y 坐标 裁剪
 * @param { number } sw - 源图像的矩形选择框的宽度 裁剪
 * @param { number } sh - 源图像的矩形选择框的高度 裁剪
 * @param { number } x - 图像的左上角在目标 canvas 上 x 轴的位置 定位
 * @param { number } y - 图像的左上角在目标 canvas 上 y 轴的位置 定位
 * @param { number } w - 在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放 定位
 * @param { number } h - 在目标画布上绘制图像的高度，允许对绘制的图像进行缩放 定位
 * @param { number } [borderRadius=0] - 圆角
 * @param  { array | null } [borderRadiusGroup= null] - 圆角数组
 * @param { number } [borderWidth=0] - 边框
 *
 * @param { object } drawOptions - 绘制对象
 * @param { object } drawOptions.ctx - ctx对象
 */
var drawImage = function drawImage(data, drawOptions) {
  return new Promise(function (resolve) {
    var canvas = drawOptions.canvas,
      ctx = drawOptions.ctx;
    var x = data.x,
      y = data.y,
      w = data.w,
      h = data.h,
      sx = data.sx,
      sy = data.sy,
      sw = data.sw,
      sh = data.sh,
      imgPath = data.imgPath,
      _data$borderRadius = data.borderRadius,
      borderRadius = _data$borderRadius === void 0 ? 0 : _data$borderRadius,
      _data$borderWidth = data.borderWidth,
      borderWidth = _data$borderWidth === void 0 ? 0 : _data$borderWidth,
      borderColor = data.borderColor,
      _data$borderRadiusGro = data.borderRadiusGroup,
      borderRadiusGroup = _data$borderRadiusGro === void 0 ? null : _data$borderRadiusGro;
    ctx.save();
    if (borderRadius > 0) {
      _drawRadiusRect({
        x: x,
        y: y,
        w: w,
        h: h,
        r: borderRadius
      }, drawOptions);
      ctx.clip(); // 裁切，后续绘图限制在这个裁切范围内，保证图片圆角
      ctx.fill();
      var img = canvas.createImage(); // 创建图片对象
      img.src = imgPath;
      img.onload = function () {
        ctx.drawImage(img, (0,tools/* toPx */.cl)(sx), (0,tools/* toPx */.cl)(sy), (0,tools/* toPx */.cl)(sw), (0,tools/* toPx */.cl)(sh), x, y, w, h);
        if (borderWidth > 0) {
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = borderWidth;
          ctx.stroke();
        }
        resolve();
        ctx.restore();
      };
    } else if (borderRadiusGroup) {
      _drawRadiusGroupRect({
        x: x,
        y: y,
        w: w,
        h: h,
        g: borderRadiusGroup
      }, drawOptions);
      ctx.clip(); // 裁切，后续绘图限制在这个裁切范围内，保证图片圆角
      ctx.fill();
      var _img = canvas.createImage(); // 创建图片对象
      _img.src = imgPath;
      _img.onload = function () {
        ctx.drawImage(_img, (0,tools/* toPx */.cl)(sx), (0,tools/* toPx */.cl)(sy), (0,tools/* toPx */.cl)(sw), (0,tools/* toPx */.cl)(sh), x, y, w, h);
        resolve();
        ctx.restore();
      };
    } else {
      var _img2 = canvas.createImage(); // 创建图片对象
      _img2.src = imgPath;
      _img2.onload = function () {
        ctx.drawImage(_img2, (0,tools/* toPx */.cl)(sx), (0,tools/* toPx */.cl)(sy), (0,tools/* toPx */.cl)(sw), (0,tools/* toPx */.cl)(sh), x, y, w, h);
        resolve();
        ctx.restore();
      };
    }
  });
};
;// ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+c_a0cadfd1eda32e6e3871475f9f5d91fa/node_modules/babel-loader/lib/index.js??clonedRuleSet-10.use[0]!../../node_modules/.pnpm/vue-loader@17.4.2_@vue+comp_87a346c7014d1029328de397d904e6c1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packageA/posterMaking/create/PosterBuilder/index.vue?vue&type=script&lang=ts






/* harmony default export */ var PosterBuildervue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'PosterBuilder',
  props: {
    showLoading: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['success', 'fail'],
  setup: function setup(props, context) {
    var count = (0,reactivity_esm_bundler/* ref */.KR)(1);
    var tempConfig = props.config;
    tempConfig.images = tempConfig.images.filter(function (item) {
      return item.url;
    });
    var _ref = tempConfig || {},
      width = _ref.width,
      height = _ref.height,
      backgroundColor = _ref.backgroundColor,
      _ref$texts = _ref.texts,
      texts = _ref$texts === void 0 ? [] : _ref$texts,
      _ref$blocks = _ref.blocks,
      blocks = _ref$blocks === void 0 ? [] : _ref$blocks,
      _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? [] : _ref$lines,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug;
    var canvasId = (0,tools/* getRandomId */.r9)();

    /**
     * step1: 初始化图片资源
     * @param  {Array} images = imgTask
     * @return {Promise} downloadImagePromise
     */
    var initImages = function initImages(images) {
      var imagesTemp = images.filter(function (item) {
        return item.url || (item === null || item === void 0 ? void 0 : item.base64Url);
      });
      var drawList = imagesTemp.map(function (item, index) {
        return (0,tools/* getImageInfo */.uc)(item, index);
      });
      return Promise.all(drawList);
    };

    /**
     * step2: 初始化 canvas && 获取其 dom 节点和实例
     * @return {Promise} resolve 里返回其 dom 和实例
     */
    var initCanvas = function initCanvas() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var _Taro$getCurrentInsta;
          var pageInstance = ((_Taro$getCurrentInsta = (0,framework/* getCurrentInstance */.nI)()) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.page) || {}; // 拿到当前页面实例
          var query = (0,wxml/* createSelectorQuery */._Y)().in(pageInstance); // 确定在当前页面内匹配子元素
          query.select("#".concat(canvasId)).fields({
            node: true,
            size: true,
            context: true
          }, function (res) {
            var canvas = res === null || res === void 0 ? void 0 : res.node;
            var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
            resolve({
              ctx: ctx,
              canvas: canvas
            });
          }).exec();
        }, 300);
      });
    };

    /**
     * @description 保存绘制的图片
     * @param  { object } config
     */
    var _getTempFile = function getTempFile(canvas) {
      canvasToTempFilePath({
        canvas: canvas,
        success: function success(result) {
          (0,interaction/* hideLoading */.RZ)();
          context.emit('success', result);
        },
        fail: function fail(error) {
          var errMsg = error.errMsg;
          if (errMsg === 'canvasToTempFilePath:fail:create bitmap failed') {
            count.value += 1;
            if (count.value <= 3) {
              _getTempFile(canvas);
            } else {
              (0,interaction/* hideLoading */.RZ)();
              (0,interaction/* showToast */.P0)({
                icon: 'none',
                title: errMsg || '绘制海报失败'
              });
              context.emit('fail', errMsg);
            }
          }
        }
      }, context);
    };

    /**
     * step2: 开始绘制任务
     * @param  { Array } drawTasks 待绘制任务
     */
    var startDrawing = /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(drawTasks) {
        var _yield$initCanvas, ctx, canvas, grd, queue, i, drawOptions;
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return initCanvas();
            case 1:
              _yield$initCanvas = _context.v;
              ctx = _yield$initCanvas.ctx;
              canvas = _yield$initCanvas.canvas;
              if (canvas !== null && canvas !== void 0 && canvas.width) {
                _context.n = 2;
                break;
              }
              return _context.a(2, void 0);
            case 2:
              canvas.width = width;
              canvas.height = height;

              // 设置画布底色
              if (backgroundColor) {
                ctx.save(); // 保存绘图上下文
                grd = (0,tools/* getLinearColor */.LZ)(ctx, backgroundColor, 0, 0, width, height);
                ctx.fillStyle = grd; // 设置填充颜色
                ctx.fillRect(0, 0, width, height); // 填充一个矩形
                ctx.restore(); // 恢复之前保存的绘图上下文
              }
              // 将要画的方块、文字、线条放进队列数组
              queue = drawTasks.concat(texts.map(function (item) {
                item.type = 'text';
                item.zIndex = item.zIndex || 0;
                return item;
              })).concat(blocks.map(function (item) {
                item.type = 'block';
                item.zIndex = item.zIndex || 0;
                return item;
              })).concat(lines.map(function (item) {
                item.type = 'line';
                item.zIndex = item.zIndex || 0;
                return item;
              }));
              queue.sort(function (a, b) {
                return a.zIndex - b.zIndex;
              }); // 按照层叠顺序由低至高排序, 先画低的，再画高的
              i = 0;
            case 3:
              if (!(i < queue.length)) {
                _context.n = 7;
                break;
              }
              drawOptions = {
                canvas: canvas,
                ctx: ctx,
                toPx: tools/* toPx */.cl,
                toRpx: tools/* toRpx */.Q2
              };
              if (!(queue[i].type === 'image')) {
                _context.n = 5;
                break;
              }
              _context.n = 4;
              return drawImage(queue[i], drawOptions);
            case 4:
              _context.n = 6;
              break;
            case 5:
              if (queue[i].type === 'text') {
                drawText(queue[i], drawOptions);
              } else if (queue[i].type === 'block') {
                drawBlock(queue[i], drawOptions);
              } else if (queue[i].type === 'line') {
                drawLine(queue[i], drawOptions);
              }
            case 6:
              i++;
              _context.n = 3;
              break;
            case 7:
              setTimeout(function () {
                _getTempFile(canvas); // 需要做延时才能能正常加载图片
              }, 300);
            case 8:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function startDrawing(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    // start: 初始化 canvas 实例 && 下载图片资源
    var init = function init() {
      var _props$config;
      if (props.showLoading) {
        (0,interaction/* showToast */.P0)({
          mask: true,
          icon: 'none ',
          title: '生成中...'
        });
      }
      if ((_props$config = props.config) !== null && _props$config !== void 0 && (_props$config = _props$config.images) !== null && _props$config !== void 0 && _props$config.length) {
        initImages(props.config.images).then(function (result) {
          // 1. 下载图片资源
          startDrawing(result);
        }).catch(function (err) {
          (0,interaction/* hideLoading */.RZ)();
          (0,interaction/* showToast */.P0)({
            icon: 'none',
            title: err.errMsg || '下载图片失败'
          });
          context.emit('fail', err);
        });
      } else {
        startDrawing([]);
      }
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      init();
    });
    return {
      canvasId: canvasId,
      debug: debug,
      width: width,
      height: height,
      init: init
    };
  }
}));
;// ./src/packageA/posterMaking/create/PosterBuilder/index.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ../../node_modules/.pnpm/vue-loader@17.4.2_@vue+comp_87a346c7014d1029328de397d904e6c1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(934);
;// ./src/packageA/posterMaking/create/PosterBuilder/index.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(PosterBuildervue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var PosterBuilder = (__exports__);

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

/***/ 5357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ pxCheck; }
/* harmony export */ });
var pxCheck = function pxCheck(value) {
  if (value !== void 0) {
    return isNaN(Number(value)) ? String(value) : "".concat(value, "px");
  }
};


/***/ }),

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
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4176);
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

/***/ }),

/***/ 8593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ useTaroRect; }
/* harmony export */ });
/* unused harmony export a */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1880);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1346);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4243);


function isWindow(val) {
  return typeof window !== "undefined" && val === window;
}
var useTaroRectById = function useTaroRectById(id) {
  return new Promise(function (resolve, reject) {
    if (_getEnv() === _ENV_TYPE.WEB) {
      var t = document ? document.querySelector("#".concat(id)) : "";
      if (t) {
        resolve(t == null ? void 0 : t.getBoundingClientRect());
      }
      reject();
    } else {
      var query = _createSelectorQuery();
      query.select("#".concat(id)).boundingClientRect().exec(function (rect) {
        if (rect[0]) {
          resolve(rect[0]);
        } else {
          reject();
        }
      });
    }
  });
};
var useTaroRect = function useTaroRect(elementRef) {
  var element = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .unref */ .R1)(elementRef);
  return new Promise(function (resolve, reject) {
    if ((0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__/* .getEnv */ ._$)() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__/* .ENV_TYPE */ .nD.WEB) {
      if (element && element.$el) {
        element = element.$el;
      }
      if (isWindow(element)) {
        var width = element.innerWidth;
        var height = element.innerHeight;
        resolve({
          top: 0,
          left: 0,
          right: width,
          bottom: height,
          width: width,
          height: height
        });
      }
      if (element && element.getBoundingClientRect) {
        resolve(element.getBoundingClientRect());
      }
      reject();
    } else {
      var query = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__/* .createSelectorQuery */ ._Y)();
      var id = element == null ? void 0 : element.id;
      if (id) {
        query.select("#".concat(id)).boundingClientRect().exec(function (rect) {
          if (rect[0]) {
            resolve(rect[0]);
          } else {
            reject();
          }
        });
      } else {
        reject();
      }
    }
  });
};


/***/ }),

/***/ 8678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ posterMaking_create; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(8831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/interaction/index.js + 3 modules
var interaction = __webpack_require__(7888);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/media/image/saveImageToPhotosAlbum.js + 1 modules
var saveImageToPhotosAlbum = __webpack_require__(1781);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5908);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(2663);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(5983);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(2684);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/wxml/index.js + 4 modules
var wxml = __webpack_require__(1346);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+shared@3.5.22/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3082);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js


var _sfc_main = /* @__PURE__ */(0,runtime_core_esm_bundler/* defineComponent */.pM)({
  __name: "index.taro",
  setup: function setup(__props) {
    return function (_ctx, _cache) {
      return (0,reactivity_esm_bundler/* unref */.R1)(taro/* default */.Ay).getEnv() === (0,reactivity_esm_bundler/* unref */.R1)(taro/* default */.Ay).ENV_TYPE.WEB ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("taro-scroll-view-core", (0,shared_esm_bundler/* normalizeProps */._B)((0,runtime_core_esm_bundler/* mergeProps */.v6)({
        key: 0
      }, _ctx.$attrs)), [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")], 16)) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("scroll-view", (0,shared_esm_bundler/* normalizeProps */._B)((0,runtime_core_esm_bundler/* mergeProps */.v6)({
        key: 1
      }, _ctx.$attrs)), [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")], 16));
    };
  }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+icons-vue-taro@0.0.9/node_modules/@nutui/icons-vue-taro/dist/es/index.es.js + 127 modules
var index_es = __webpack_require__(7451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/component-DQf3CENX.js
var component_DQf3CENX = __webpack_require__(9882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/util-2G3mRQeF.js
var util_2G3mRQeF = __webpack_require__(1137);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/pxCheck-DN6FYV6q.js
var pxCheck_DN6FYV6q = __webpack_require__(5357);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/raf-CzJhCkQo.js
var _window = window;
function requestAniFrame() {
  if (typeof _window !== "undefined") {
    return _window.requestAnimationFrame || _window.webkitRequestAnimationFrame || function (callback) {
      _window.setTimeout(callback, 1e3 / 60);
    };
  } else {
    return function (callback) {
      setTimeout(callback, 1e3 / 60);
    };
  }
}
var requestAniFrame$1 = requestAniFrame();

// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/index-I8tfW3Kf.js
var index_I8tfW3Kf = __webpack_require__(101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/index-m0Wcof-q.js
var index_m0Wcof_q = __webpack_require__(8593);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/types-BXlnzugj.js
var TABS_KEY = Symbol("nut-tab");

// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/_plugin-vue_export-helper-1tPrXgE0.js
var _plugin_vue_export_helper_1tPrXgE0 = __webpack_require__(9669);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/tabs/Tabs.js







var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};
var __spreadValues = function __spreadValues(a, b) {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) {
    var _iterator = (0,createForOfIteratorHelper/* default */.A)(__getOwnPropSymbols(b)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return a;
};
var __publicField = function __publicField(obj, key, value) {
  return __defNormalProp(obj, (0,esm_typeof/* default */.A)(key) !== "symbol" ? key + "" : key, value);
};
var __async = function __async(__this, __arguments, generator) {
  return new Promise(function (resolve, reject) {
    var fulfilled = function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = function step(x) {
      return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};












var useTabContentTouch = function useTabContentTouch(props, tabMethods, taro, useTaroRect2) {
  var tabsContentRef = (0,reactivity_esm_bundler/* ref */.KR)();
  var tabsContentRefRect = (0,reactivity_esm_bundler/* ref */.KR)({
    width: 0,
    height: 0
  });
  var initTaroWidth = function initTaroWidth() {
    return __async(void 0, null, /*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
      var _a, _b;
      return (0,regenerator/* default */.A)().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (taro && taro.getEnv() !== taro.ENV_TYPE.WEB) {
              useTaroRect2(tabsContentRef).then(function (rect) {
                tabsContentRefRect.value.width = rect.width || 0;
                tabsContentRefRect.value.height = rect.height || 0;
              }, function () {});
            } else {
              tabsContentRefRect.value.width = ((_a = tabsContentRef.value) == null ? void 0 : _a.clientWidth) || 0;
              tabsContentRefRect.value.height = ((_b = tabsContentRef.value) == null ? void 0 : _b.clientHeight) || 0;
            }
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
  };
  (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
    setTimeout(function () {
      initTaroWidth();
    }, 100);
  });
  var touchState = (0,reactivity_esm_bundler/* reactive */.Kh)({
    offset: 0,
    moving: false
  });
  var touch = (0,index_I8tfW3Kf.u)();
  var position = "";
  var setoffset = function setoffset(deltaX, deltaY) {
    var _a;
    var offset = deltaX;
    if (props.direction == "horizontal") {
      position = deltaX > 0 ? "right" : "left";
      offset = Math.abs(offset) / tabsContentRefRect.value.width * 100;
    } else {
      position = deltaY > 0 ? "bottom" : "top";
      offset = deltaY;
      offset = Math.abs(offset) / ((_a = tabsContentRefRect.value) == null ? void 0 : _a.height) * 100;
    }
    if (offset > 85) {
      offset = 85;
    }
    switch (position) {
      case "left":
      case "top":
        if (tabMethods.isEnd()) {
          offset = 0;
          touchState.moving = false;
        }
        break;
      case "right":
      case "bottom":
        offset = -offset;
        if (tabMethods.isBegin()) {
          offset = 0;
          touchState.moving = false;
        }
        break;
    }
    touchState.offset = offset;
  };
  var touchMethods = {
    onTouchStart: function onTouchStart(event) {
      if (!props.swipeable) return;
      touch.start(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (!props.swipeable) return;
      touch.move(event);
      touchState.moving = true;
      setoffset(touch.deltaX.value, touch.deltaY.value);
      if (props.direction == "horizontal" && touch.isHorizontal()) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (props.direction == "vertical" && touch.isVertical()) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (touchState.moving) {
        touchState.moving = false;
        switch (position) {
          case "left":
          case "top":
            if (touchState.offset > 35) {
              tabMethods.next();
            }
            break;
          case "right":
          case "bottom":
            if (touchState.offset < -35) {
              tabMethods.prev();
            }
            break;
        }
      }
    }
  };
  return {
    touchMethods: touchMethods,
    touchState: touchState,
    tabsContentRef: tabsContentRef
  };
};
var Title = /*#__PURE__*/(0,createClass/* default */.A)(function Title() {
  (0,classCallCheck/* default */.A)(this, Title);
  __publicField(this, "title", "");
  __publicField(this, "titleSlot");
  __publicField(this, "paneKey", "");
  __publicField(this, "disabled", false);
});
var _createComponent = (0,component_DQf3CENX.c)("tabs"),
  create = _createComponent.create;
var Tabs_sfc_main = create({
  components: {
    JoySmile: index_es/* JoySmile */.Zd,
    NutScrollView: _sfc_main
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "line"
    },
    titleScroll: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    swipeable: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ""
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "center"
    }
  },
  emits: ["update:modelValue", "click", "change"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var refRandomId = Math.random().toString(36).slice(-8);
    var container = (0,reactivity_esm_bundler/* ref */.KR)(null);
    (0,runtime_core_esm_bundler/* provide */.Gt)(TABS_KEY, {
      activeKey: (0,runtime_core_esm_bundler/* computed */.EW)(function () {
        return props.modelValue || "0";
      }),
      autoHeight: (0,runtime_core_esm_bundler/* computed */.EW)(function () {
        return props.autoHeight;
      }),
      animatedTime: (0,runtime_core_esm_bundler/* computed */.EW)(function () {
        return props.animatedTime;
      })
    });
    var titles = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var _renderTitles = function renderTitles(vnodes) {
      vnodes.forEach(function (vnode, index) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        var type = vnode.type;
        type = type.name || type;
        if (type == "NutTabPane") {
          var title = new Title();
          if (((_a = vnode.props) == null ? void 0 : _a.title) || ((_b = vnode.props) == null ? void 0 : _b["pane-key"]) || ((_c = vnode.props) == null ? void 0 : _c["paneKey"])) {
            var paneKeyType = (0,util_2G3mRQeF.T)((_d = vnode.props) == null ? void 0 : _d["pane-key"]);
            var paneIndex = paneKeyType == "number" || paneKeyType == "string" ? String((_e = vnode.props) == null ? void 0 : _e["pane-key"]) : null;
            var camelPaneKeyType = (0,util_2G3mRQeF.T)((_f = vnode.props) == null ? void 0 : _f["paneKey"]);
            var camelPaneIndex = camelPaneKeyType == "number" || camelPaneKeyType == "string" ? String((_g = vnode.props) == null ? void 0 : _g["paneKey"]) : null;
            title.title = (_h = vnode.props) == null ? void 0 : _h.title;
            title.paneKey = paneIndex || camelPaneIndex || String(index);
            title.disabled = (_i = vnode.props) == null ? void 0 : _i.disabled;
          }
          titles.value.push(title);
        } else {
          if (vnode.children == " ") {
            return;
          }
          _renderTitles(vnode.children);
        }
      });
    };
    var currentIndex = (0,reactivity_esm_bundler/* ref */.KR)(props.modelValue || 0);
    var findTabsIndex = function findTabsIndex(value) {
      var index = titles.value.findIndex(function (item) {
        return item.paneKey == value;
      });
      if (titles.value.length == 0) ;else if (index == -1) ;else {
        currentIndex.value = index;
      }
    };
    var getScrollX = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.titleScroll && props.direction === "horizontal";
    });
    var getScrollY = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.titleScroll && props.direction === "vertical";
    });
    var titleRef = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var scrollLeft = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var scrollTop = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var scrollWithAnimation = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var getRect = function getRect(selector) {
      return new Promise(function (resolve) {
        (0,wxml/* createSelectorQuery */._Y)().select(selector).boundingClientRect().exec(function () {
          var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          resolve(rect[0]);
        });
      });
    };
    var getAllRect = function getAllRect(selector) {
      return new Promise(function (resolve) {
        (0,wxml/* createSelectorQuery */._Y)().selectAll(selector).boundingClientRect().exec(function () {
          var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return resolve(rect[0]);
        });
      });
    };
    var navRectRef = (0,reactivity_esm_bundler/* ref */.KR)();
    var titleRectRef = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var canShowLabel = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var scrollIntoView = function scrollIntoView() {
      requestAniFrame$1(function () {
        Promise.all([getRect("#nut-tabs__titles_".concat(refRandomId)), getAllRect("#nut-tabs__titles_".concat(refRandomId, " .nut-tabs__titles-item"))]).then(function (_ref2) {
          var _ref3 = (0,slicedToArray/* default */.A)(_ref2, 2),
            navRect = _ref3[0],
            titleRects = _ref3[1];
          var _a, _b, _c, _d;
          navRectRef.value = navRect;
          titleRectRef.value = titleRects;
          if (navRectRef.value) {
            if (props.direction === "vertical") {
              var titlesTotalHeight = titleRects.reduce(function (prev, curr) {
                return prev + (curr == null ? void 0 : curr.height);
              }, 0);
              if (titlesTotalHeight > ((_a = navRectRef.value) == null ? void 0 : _a.height)) {
                canShowLabel.value = true;
              } else {
                canShowLabel.value = false;
              }
            } else {
              var titlesTotalWidth = titleRects.reduce(function (prev, curr) {
                return prev + (curr == null ? void 0 : curr.width);
              }, 0);
              if (titlesTotalWidth > ((_b = navRectRef.value) == null ? void 0 : _b.width)) {
                canShowLabel.value = true;
              } else {
                canShowLabel.value = false;
              }
            }
          }
          var titleRect = titleRectRef.value[currentIndex.value];
          var to = 0;
          if (props.direction === "vertical") {
            var top = titleRects.slice(0, currentIndex.value).reduce(function (prev, curr) {
              return prev + (curr == null ? void 0 : curr.height);
            }, 0);
            to = top - (((_c = navRectRef.value) == null ? void 0 : _c.height) - (titleRect == null ? void 0 : titleRect.height)) / 2;
          } else {
            var left = titleRects.slice(0, currentIndex.value).reduce(function (prev, curr) {
              return prev + (curr == null ? void 0 : curr.width);
            }, 0);
            to = left - (((_d = navRectRef.value) == null ? void 0 : _d.width) - (titleRect == null ? void 0 : titleRect.width)) / 2;
          }
          (0,runtime_core_esm_bundler/* nextTick */.dY)(function () {
            scrollWithAnimation.value = true;
          });
          scrollDirection(to, props.direction);
        });
      });
    };
    var scrollDirection = function scrollDirection(to, direction) {
      var count = 0;
      var from = direction === "horizontal" ? scrollLeft.value : scrollTop.value;
      var frames = 1;
      function animate() {
        if (direction === "horizontal") {
          scrollLeft.value += (to - from) / frames;
        } else {
          scrollTop.value += (to - from) / frames;
        }
        if (++count < frames) {
          requestAniFrame$1(animate);
        }
      }
      animate();
    };
    var init = function init() {
      var vnodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_a) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }();
      titles.value = [];
      vnodes = vnodes == null ? void 0 : vnodes.filter(function (item) {
        return typeof item.children !== "string";
      });
      if (vnodes && vnodes.length) {
        _renderTitles(vnodes);
      }
      findTabsIndex(props.modelValue);
      setTimeout(function () {
        scrollIntoView();
      }, 500);
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    }, function (vnodes) {
      init(vnodes);
    });
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return props.modelValue;
    }, function (value) {
      findTabsIndex(value);
      scrollIntoView();
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(init);
    (0,runtime_core_esm_bundler/* onActivated */.n)(init);
    var tabMethods = {
      isBegin: function isBegin() {
        return currentIndex.value == 0;
      },
      isEnd: function isEnd() {
        return currentIndex.value == titles.value.length - 1;
      },
      next: function next() {
        currentIndex.value += 1;
        tabMethods.updateValue(titles.value[currentIndex.value]);
      },
      prev: function prev() {
        currentIndex.value -= 1;
        tabMethods.updateValue(titles.value[currentIndex.value]);
      },
      updateValue: function updateValue(item) {
        emit("update:modelValue", item.paneKey);
        emit("change", item);
      },
      tabChange: function tabChange(item, index) {
        emit("click", item);
        if (item.disabled || currentIndex.value == index) {
          return;
        }
        currentIndex.value = index;
        tabMethods.updateValue(item);
      },
      setTabItemRef: function setTabItemRef(el, index) {
        titleRef.value[index] = el;
      }
    };
    var _useTabContentTouch = useTabContentTouch(props, tabMethods, taro/* default */.Ay, index_m0Wcof_q.u),
      tabsContentRef = _useTabContentTouch.tabsContentRef,
      touchState = _useTabContentTouch.touchState,
      touchMethods = _useTabContentTouch.touchMethods;
    var contentStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var offsetPercent = currentIndex.value * 100;
      if (touchState.moving) {
        offsetPercent += touchState.offset;
      }
      var style = {
        transform: props.direction == "horizontal" ? "translate3d(-".concat(offsetPercent, "%, 0, 0)") : "translate3d( 0,-".concat(offsetPercent, "%, 0)"),
        transitionDuration: touchState.moving ? void 0 : "".concat(props.animatedTime, "ms")
      };
      if (props.animatedTime == 0) {
        style = {};
      }
      return style;
    });
    var tabsNavStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return {
        background: props.background
      };
    });
    var tabsActiveStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return {
        color: props.type == "smile" ? props.color : "",
        background: props.type == "line" ? props.color : ""
      };
    });
    var titleStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (!props.titleGutter) return {};
      var px = (0,pxCheck_DN6FYV6q.p)(props.titleGutter);
      if (props.direction === "vertical") {
        return {
          paddingTop: px,
          paddingBottom: px
        };
      }
      return {
        paddingLeft: px,
        paddingRight: px
      };
    });
    return __spreadValues(__spreadValues({
      titles: titles,
      tabsContentRef: tabsContentRef,
      contentStyle: contentStyle,
      tabsNavStyle: tabsNavStyle,
      titleStyle: titleStyle,
      tabsActiveStyle: tabsActiveStyle,
      container: container,
      scrollLeft: scrollLeft,
      scrollTop: scrollTop,
      getScrollX: getScrollX,
      getScrollY: getScrollY,
      scrollWithAnimation: scrollWithAnimation,
      canShowLabel: canShowLabel,
      refRandomId: refRandomId
    }, tabMethods), touchMethods);
  }
});
var _hoisted_1 = ["onClick"];
var _hoisted_2 = {
  key: 0,
  class: "nut-tabs__titles-placeholder"
};
var _hoisted_3 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_JoySmile = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("JoySmile");
  var _component_nut_scroll_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("nut-scroll-view");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", {
    ref: "container",
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["nut-tabs", [_ctx.direction]])
  }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_nut_scroll_view, {
    id: "nut-tabs__titles_".concat(_ctx.refRandomId),
    "scroll-x": _ctx.getScrollX,
    "scroll-y": _ctx.getScrollY,
    "scroll-with-animation": _ctx.scrollWithAnimation,
    "scroll-left": _ctx.scrollLeft,
    "scroll-top": _ctx.scrollTop,
    "enable-flex": true,
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["nut-tabs__titles", (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, _ctx.type, _ctx.type), "scrollable", _ctx.titleScroll), _ctx.size, _ctx.size)]),
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(_ctx.tabsNavStyle)
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(function () {
      return [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("view", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(["nut-tabs__list", {
          "nut-tabs__titles-left": _ctx.align === "left"
        }])
      }, [_ctx.$slots.titles ? (0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "titles", {
        key: 0
      }) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
        key: 1
      }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.titles, function (item, index) {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", {
          key: item.paneKey,
          class: (0,shared_esm_bundler/* normalizeClass */.C4)(["nut-tabs__titles-item taro", {
            "nut-tabs__titles-item-left": _ctx.align === "left",
            active: item.paneKey == _ctx.modelValue,
            disabled: item.disabled
          }]),
          style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(_ctx.titleStyle),
          onClick: function onClick($event) {
            return _ctx.tabChange(item, index);
          }
        }, [_ctx.type == "line" ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(_ctx.tabsActiveStyle)
        }, null, 4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)()), _ctx.type == "smile" ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(_ctx.tabsActiveStyle)
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_JoySmile, {
          color: _ctx.color
        }, null, 8, ["color"])], 4)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)()), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("view", {
          class: (0,shared_esm_bundler/* normalizeClass */.C4)(["nut-tabs__titles-item__text", {
            ellipsis: _ctx.ellipsis
          }])
        }, (0,shared_esm_bundler/* toDisplayString */.v_)(item.title), 3)], 14, _hoisted_1);
      }), 128)), _cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)()), _ctx.canShowLabel && _ctx.titleScroll ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", _hoisted_2)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 64))], 2)];
    }),
    _: 3
  }, 8, ["id", "scroll-x", "scroll-y", "scroll-with-animation", "scroll-left", "scroll-top", "class", "style"]), _cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)()), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("view", {
    id: "tabsContentRef-" + _ctx.refRandomId,
    ref: "tabsContentRef",
    class: "nut-tabs__content",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(_ctx.contentStyle),
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.onTouchStart && _ctx.onTouchStart.apply(_ctx, arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function () {
      return _ctx.onTouchMove && _ctx.onTouchMove.apply(_ctx, arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    }),
    onTouchcancel: _cache[3] || (_cache[3] = function () {
      return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
    })
  }, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")], 44, _hoisted_3)], 2);
}
var NutTabs = /* @__PURE__ */(0,_plugin_vue_export_helper_1tPrXgE0._)(Tabs_sfc_main, [["render", _sfc_render]]);

;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/tabpane/TabPane.js

var TabPane_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TabPane_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabPane_hasOwnProp = Object.prototype.hasOwnProperty;
var TabPane_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabPane_defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? TabPane_defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};
var TabPane_spreadValues = function __spreadValues(a, b) {
  for (var prop in b || (b = {})) if (TabPane_hasOwnProp.call(b, prop)) TabPane_defNormalProp(a, prop, b[prop]);
  if (TabPane_getOwnPropSymbols) {
    var _iterator = (0,createForOfIteratorHelper/* default */.A)(TabPane_getOwnPropSymbols(b)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (TabPane_propIsEnum.call(b, prop)) TabPane_defNormalProp(a, prop, b[prop]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return a;
};
var __spreadProps = function __spreadProps(a, b) {
  return __defProps(a, __getOwnPropDescs(b));
};




var TabPane_createComponent = (0,component_DQf3CENX.c)("tab-pane"),
  TabPane_create = TabPane_createComponent.create;
var TabPane_sfc_main = TabPane_create({
  props: {
    title: {
      type: [String, Number],
      default: ""
    },
    paneKey: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup: function setup(props) {
    var parentOption = (0,runtime_core_esm_bundler/* inject */.WQ)(TABS_KEY);
    var paneStyle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return {
        display: (parentOption == null ? void 0 : parentOption.animatedTime.value) == 0 && props.paneKey != (parentOption == null ? void 0 : parentOption.activeKey.value) ? "none" : void 0
      };
    });
    return __spreadProps(TabPane_spreadValues({}, parentOption), {
      paneStyle: paneStyle
    });
  }
});
function TabPane_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("view", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["nut-tab-pane", {
      inactive: _ctx.paneKey != _ctx.activeKey && _ctx.autoHeight
    }]),
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(_ctx.paneStyle)
  }, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")], 6);
}
var NutTabPane = /* @__PURE__ */(0,_plugin_vue_export_helper_1tPrXgE0._)(TabPane_sfc_main, [["render", TabPane_sfc_render]]);

;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/tabs/index.css
// extracted by mini-css-extract-plugin

;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/tabpane/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/api/index.ts + 4 modules
var api = __webpack_require__(5816);
;// ./src/components/page-selector/commponents/goods-selector/index.tsx

// 商品的选择器





function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var goods_selector = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsSelector',
  props: {
    select: {
      type: Function,
      default: function _default() {
        return {};
      }
    },
    keyword: {
      type: String,
      default: ''
    }
  },
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose;
    var scrollRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var itemRender = function itemRender(item, index) {
      var _item$coverImages;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "key": index,
        "class": "goods-item-layout",
        "onClick": function onClick() {
          emit('change', item);
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "left-image"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
        "class": "image-ele",
        "mode": "aspectFill",
        "src": item === null || item === void 0 || (_item$coverImages = item.coverImages) === null || _item$coverImages === void 0 ? void 0 : _item$coverImages[0]
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "right-info"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-title"
      }, [item.title]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "price-layout"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "rmb-icon"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), item.priceMin, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("~"), item.priceMax])])]);
    };
    expose({
      refreshData: function refreshData(e) {
        var _scrollRef$value;
        console.log('props.keyword:----------');
        console.log(props.keyword);
        (_scrollRef$value = scrollRef.value) === null || _scrollRef$value === void 0 || _scrollRef$value.refreshData();
      }
    });
    {
      /* 有搜索参数调用搜索接口,没有搜索参数,调用分页接口 */
    }
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* ScrollList */.QZ, {
        "height": "70vh",
        "ref": scrollRef,
        "request": props.keyword ? api/* $getGoodsBySearchParams */.a5 : api/* $getGoodsList */.pW,
        "pars": {
          keyword: props.keyword
        },
        "class": "goods-selector"
      }, _isSlot(itemRender) ? itemRender : {
        default: function _default() {
          return [itemRender];
        }
      });
    };
  }
}));
// EXTERNAL MODULE: ./src/packageA/information/list/index.tsx
var list = __webpack_require__(6680);
// EXTERNAL MODULE: ./src/api/goods/category.ts
var category = __webpack_require__(4408);
;// ./src/components/page-selector/commponents/goods-category/index.tsx

// 商品分类列表,作为选择器使用




/* harmony default export */ var goods_category = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsCategory',
  props: {},
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var dataList = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var init = function init() {
      (0,category/* requestGetGoodsCategories */.s)().then(function (res) {
        if (res.success) {
          dataList.value = res.data;
        }
      });
    };
    init();
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-category"
      }, [dataList.value.map(function (it) {
        var _it$childCategories;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "categories-item"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "fa-content",
          "onClick": function onClick() {
            emit('change', {
              faId: it.id,
              title: it.name
            });
          }
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "fa-item-image"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
          "class": "image-item",
          "src": it.icon,
          "mode": "aspectFill"
        }, null)]), it.name]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "children-content"
        }, [(_it$childCategories = it.childCategories) === null || _it$childCategories === void 0 ? void 0 : _it$childCategories.map(function (item) {
          return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "children-item",
            "onClick": function onClick() {
              emit('change', {
                faId: it.id,
                id: item.id,
                title: item.name
              });
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "children-item-image"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
            "class": "image-item",
            "src": item.icon,
            "mode": "aspectFill"
          }, null)]), item.name]);
        })])]);
      })]);
    };
  }
}));
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/dataProcessing/index.ts
var dataProcessing = __webpack_require__(1810);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
;// ./src/components/page-selector/index.tsx

// 页面/列表/商品 路径选择














function page_selector_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var page_selector = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'PageSelector',
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose;
    var _utmStore = (0,stores/* utmStore */.Yt)(),
      getUtmData = _utmStore.getUtmData;
    // 这个是用来保存当前页面选择商品详情/商品分类的 id
    var tempPage = (0,reactivity_esm_bundler/* ref */.KR)({});
    var pagePop = (0,reactivity_esm_bundler/* ref */.KR)(null);
    // 当前选择的父级选择
    var selectionValue = (0,reactivity_esm_bundler/* ref */.KR)('goodsDetail');
    var keywords = (0,reactivity_esm_bundler/* ref */.KR)('');
    var goodsSelectorRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var userStore = (0,lib/* useUserStore */.kH)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(userStore),
      user = _storeToRefs.user;
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return selectionValue.value;
    }, function (newV) {
      if (newV === constants/* HOME_PAGE */.Ko) {
        var _editorPoster$value;
        console.log('跳转首页');
        dataProcessing/* editorPoster */.nJ.value.qrcode.page = constants/* HOME_PAGE */.Ko;
        dataProcessing/* editorPoster */.nJ.value.title = '首页';
        console.log('user----------------', user);
        getUtmData({
          isNull: true,
          page: constants/* HOME_PAGE */.Ko,
          utmContent: JSON.stringify({
            posterId: (_editorPoster$value = dataProcessing/* editorPoster */.nJ.value) === null || _editorPoster$value === void 0 ? void 0 : _editorPoster$value.id,
            shareUserId: user.value.id
          })
        });
        pagePop.value.close();
        emit('change');
      }
    });

    // 一级的选择
    var showPagePop = function showPagePop() {
      pagePop.value = (0,lib/* usePopup */.OJ)({
        placement: 'bottom',
        content: function content() {
          var _slot;
          return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "show-page-pop"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Search */.vj, {
            "value": keywords.value,
            "onSearch": function onSearch(value) {
              keywords.value = value;
              (0,runtime_core_esm_bundler/* nextTick */.dY)(function () {
                var _goodsSelectorRef$val;
                (_goodsSelectorRef$val = goodsSelectorRef.value) === null || _goodsSelectorRef$val === void 0 || _goodsSelectorRef$val.refreshData();
              });
            },
            "placeholder": "\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\u5546\u54C1",
            "class": "page-selector-search"
          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(NutTabs, {
            "size": "large",
            "direction": "vertical",
            "class": "tab-content",
            "title-scroll": true,
            "modelValue": selectionValue.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return selectionValue.value = $event;
            },
            "onChange": function onChange(e) {
              selectionValue.value = e.paneKey;
            }
          }, page_selector_isSlot(_slot = constants/* tabsValue */.oK.map(function (it, index) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(NutTabPane, {
              "paneKey": it.value,
              "title": it.label
            }, {
              default: function _default() {
                return [it.value === constants/* HOME_PAGE */.Ko ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
                  "description": "\u6682\u65E0\u76F8\u5173\u4FE1\u606F"
                }, null)]) : '', it.value === 'goodsDetail' ? (0,runtime_core_esm_bundler/* createVNode */.bF)((0,runtime_core_esm_bundler/* resolveComponent */.g2)("scroll-view"), {
                  "scroll-y": true,
                  "class": "goods-detail-content pane-content"
                }, {
                  default: function _default() {
                    return [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_selector, {
                      "ref": goodsSelectorRef,
                      "keyword": keywords.value,
                      "onChange": function onChange(e) {
                        tempPage.value = e;
                        dataProcessing/* editorPoster */.nJ.value.title = (e === null || e === void 0 ? void 0 : e.title) || (e === null || e === void 0 ? void 0 : e.name);
                        dataProcessing/* editorPoster */.nJ.value.qrcode.goodsId = e.id;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.faId = null;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.childrenId = null;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.infId = null;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.page = "".concat(it.path);
                        getUtmData({
                          utmKeyword: '',
                          page: "".concat(it.path),
                          goodsId: e.id
                        });
                        pagePop.value.close();
                        emit('change');
                      }
                    }, null)];
                  }
                }) : '', it.value === 'goodsGroup' ? (0,runtime_core_esm_bundler/* createVNode */.bF)((0,runtime_core_esm_bundler/* resolveComponent */.g2)("scroll-view"), {
                  "scroll-y": true,
                  "class": "goods-group-content pane-content"
                }, {
                  default: function _default() {
                    return [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_category, {
                      "onChange": function onChange(e) {
                        tempPage.value = e;
                        dataProcessing/* editorPoster */.nJ.value.title = (e === null || e === void 0 ? void 0 : e.title) || (e === null || e === void 0 ? void 0 : e.name);
                        dataProcessing/* editorPoster */.nJ.value.qrcode.goodsId = null;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.infId = null;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.faId = e.faId;
                        getUtmData({
                          utmKeyword: '',
                          page: "".concat(it.path),
                          faId: e.faId,
                          childrenId: e === null || e === void 0 ? void 0 : e.id
                        });
                        if (e.id) {
                          // 不一定有二级分类
                          dataProcessing/* editorPoster */.nJ.value.qrcode.childrenId = e.id;
                        }
                        dataProcessing/* editorPoster */.nJ.value.qrcode.page = "".concat(it.path);
                        pagePop.value.close();
                        emit('change');
                      }
                    }, null)];
                  }
                }) : '', it.value === 'information' ? (0,runtime_core_esm_bundler/* createVNode */.bF)((0,runtime_core_esm_bundler/* resolveComponent */.g2)("scroll-view"), {
                  "scroll-y": true,
                  "class": "information-detail-content pane-content"
                }, {
                  default: function _default() {
                    return [(0,runtime_core_esm_bundler/* createVNode */.bF)(list["default"], {
                      "asSelector": true,
                      "onChange": function onChange(e) {
                        tempPage.value = e;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.goodsId = null;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.faId = null;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.childrenId = null;
                        dataProcessing/* editorPoster */.nJ.value.title = (e === null || e === void 0 ? void 0 : e.title) || (e === null || e === void 0 ? void 0 : e.name);
                        dataProcessing/* editorPoster */.nJ.value.qrcode.infId = e.id;
                        dataProcessing/* editorPoster */.nJ.value.qrcode.page = "".concat(it.path);
                        getUtmData({
                          utmKeyword: '',
                          page: "".concat(it.path),
                          infId: e.id
                        });
                        pagePop.value.close();
                        emit('change');
                      }
                    }, null)];
                  }
                }) : ''];
              }
            });
          })) ? _slot : {
            default: function _default() {
              return [_slot];
            }
          })]);
        }
      });
    };
    var init = function init() {
      var _editorPoster$value2;
      // 创建
      if (!((_editorPoster$value2 = dataProcessing/* editorPoster */.nJ.value) !== null && _editorPoster$value2 !== void 0 && _editorPoster$value2.id)) {
        tempPage.value = {};
      } else {
        // 编辑
        tempPage.value = {};
      }
    };
    var showLabel = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _editorPoster$value3;
      if (!((_editorPoster$value3 = dataProcessing/* editorPoster */.nJ.value) !== null && _editorPoster$value3 !== void 0 && (_editorPoster$value3 = _editorPoster$value3.qrcode) !== null && _editorPoster$value3 !== void 0 && _editorPoster$value3.page)) {
        return '';
      }
      return constants/* tabsValue */.oK === null || constants/* tabsValue */.oK === void 0 ? void 0 : constants/* tabsValue */.oK.find(function (it) {
        var _editorPoster$value$q;
        return (_editorPoster$value$q = dataProcessing/* editorPoster */.nJ.value.qrcode.page) === null || _editorPoster$value$q === void 0 ? void 0 : _editorPoster$value$q.includes(it.path);
      });
    });
    init();
    expose({
      showPagePop: showPagePop
    });
    return function () {
      var _editorPoster$value4, _showLabel$value, _editorPoster$value5, _editorPoster$value6;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "page-selector"
      }, [(_editorPoster$value4 = dataProcessing/* editorPoster */.nJ.value) !== null && _editorPoster$value4 !== void 0 && (_editorPoster$value4 = _editorPoster$value4.qrcode) !== null && _editorPoster$value4 !== void 0 && _editorPoster$value4.page ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "pathResolution"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "fa-selection",
        "onClick": function onClick() {
          showPagePop();
        }
      }, [(_showLabel$value = showLabel.value) === null || _showLabel$value === void 0 ? void 0 : _showLabel$value.label, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "children-selection"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("(\u70B9\u51FB\u66F4\u6539)")])]), ((_editorPoster$value5 = dataProcessing/* editorPoster */.nJ.value) === null || _editorPoster$value5 === void 0 ? void 0 : _editorPoster$value5.title) && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "children-selection"
      }, [(_editorPoster$value6 = dataProcessing/* editorPoster */.nJ.value) === null || _editorPoster$value6 === void 0 ? void 0 : _editorPoster$value6.title])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "empty-addressSelector",
        "onClick": function onClick() {
          showPagePop();
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u70B9\u51FB\u9009\u62E9\u9875\u9762")])]);
    };
  }
}));
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/PosterBuilder/index.vue + 5 modules
var PosterBuilder = __webpack_require__(1987);
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/PosterBuilder/utils/tools.ts
var tools = __webpack_require__(962);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js + 17 modules
var cloneDeep = __webpack_require__(2347);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
;// ./src/packageA/posterMaking/create/index.tsx




















/* harmony default export */ var posterMaking_create = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'posterCreate',
  setup: function setup() {
    var PosterRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    // 选择器的ref
    var PageSelectorRef = (0,reactivity_esm_bundler/* ref */.KR)({
      showPagePop: function showPagePop() {
        return 0;
      }
    });
    var utmEleStore = (0,stores/* utmStore */.Yt)();
    var generateSpecifiedContentShortChain = utmEleStore.generateSpecifiedContentShortChain,
      getUtmData = utmEleStore.getUtmData;

    // 海报名称
    var posterName = (0,reactivity_esm_bundler/* ref */.KR)('');

    // 选择的页面详情
    var userStore = (0,lib/* useUserStore */.kH)();
    // 这里的avatar如果格式不对,会导致windows端绘制canvas失败
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(userStore),
      nickname = _storeToRefs.nickname,
      avatar = _storeToRefs.avatar;

    // 用户选择的图片
    var imageSrc = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var showCanvas = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var tempOldData = (0,reactivity_esm_bundler/* ref */.KR)({});
    var init = function init() {
      var _editorPoster$value;
      dataProcessing/* qrCodeUrl */.wN.value = '';
      dataProcessing/* qrcodeImage */.Se.value = '';
      if ((_editorPoster$value = dataProcessing/* editorPoster */.nJ.value) !== null && _editorPoster$value !== void 0 && _editorPoster$value.isEdit) {
        tempOldData.value = (0,cloneDeep/* default */.A)(dataProcessing/* editorPoster */.nJ.value);
        imageSrc.value[0] = dataProcessing/* editorPoster */.nJ.value.url;
        showCanvas.value = true;
        // 需要对选择的商品数据进行回显
        dataEcho();
        // 回显海报名称
        posterName.value = dataProcessing/* editorPoster */.nJ.value.name || '';
      } else {
        dataProcessing/* editorPoster */.nJ.value = {
          url: '',
          qrcode: {
            id: 0,
            x: 251,
            y: 1100,
            size: 200
          }
        };
      }
    };

    // 数据回显
    var dataEcho = function dataEcho() {
      var _editorPoster$value$q;
      if ((_editorPoster$value$q = dataProcessing/* editorPoster */.nJ.value.qrcode) !== null && _editorPoster$value$q !== void 0 && _editorPoster$value$q.goodsId) {
        var _editorPoster$value$q2;
        getUtmData({
          utmCampaign: dataProcessing/* editorPoster */.nJ.value.name,
          utmSource: '海报分享',
          page: dataProcessing/* editorPoster */.nJ.value.qrcode.page,
          goodsId: (_editorPoster$value$q2 = dataProcessing/* editorPoster */.nJ.value.qrcode) === null || _editorPoster$value$q2 === void 0 ? void 0 : _editorPoster$value$q2.goodsId
        });
        (0,api/* getGoodsDetail */._P)(dataProcessing/* editorPoster */.nJ.value.qrcode.goodsId).then(function (res) {
          dataProcessing/* editorPoster */.nJ.value.title = res.data.title;
        });
      }
      getQrcodeAndRefresh();
      // 回显海报名称
      posterName.value = dataProcessing/* editorPoster */.nJ.value.name || '';
    };

    // 获取小程序二维码一般伴随着刷新
    var getQrcodeAndRefresh = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
        var _editorPoster$value2;
        var _editorPoster$value$q3, _PosterRef$value, shortLinkRes, _t;
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if ((_editorPoster$value2 = dataProcessing/* editorPoster */.nJ.value) !== null && _editorPoster$value2 !== void 0 && (_editorPoster$value2 = _editorPoster$value2.qrcode) !== null && _editorPoster$value2 !== void 0 && _editorPoster$value2.page) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _context.p = 1;
              _context.n = 2;
              return generateSpecifiedContentShortChain({
                utmCampaign: dataProcessing/* editorPoster */.nJ.value.name,
                utmSource: '海报分享',
                page: dataProcessing/* editorPoster */.nJ.value.qrcode.page,
                goodsId: (_editorPoster$value$q3 = dataProcessing/* editorPoster */.nJ.value.qrcode) === null || _editorPoster$value$q3 === void 0 ? void 0 : _editorPoster$value$q3.goodsId
              });
            case 2:
              shortLinkRes = _context.v;
              _context.n = 3;
              return (0,dataProcessing/* getQrcode */.B2)(shortLinkRes.data.shortCode);
            case 3:
              _context.n = 4;
              return (_PosterRef$value = PosterRef.value) === null || _PosterRef$value === void 0 ? void 0 : _PosterRef$value.init();
            case 4:
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              console.error('获取二维码失败:', _t);
              (0,interaction/* showToast */.P0)({
                title: '获取二维码失败',
                icon: 'none'
              });
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[1, 5]]);
      }));
      return function getQrcodeAndRefresh() {
        return _ref.apply(this, arguments);
      };
    }();
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      init();
    });
    var posterConfig = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _imageSrc$value;
      if (!dataProcessing/* qrCodeUrl */.wN.value && dataProcessing/* qrcodeImage */.Se.value) {
        (0,tools/* base64src */.yi)(dataProcessing/* qrcodeImage */.Se.value).then(function (res) {
          dataProcessing/* qrCodeUrl */.wN.value = res;
        }).catch(function (err) {
          console.error('二维码转换失败:', err);
        });
      }
      return {
        width: 750,
        height: 1334,
        backgroundColor: '#ffffff',
        debug: false,
        blocks: [
        // 头部底色
        {
          x: 32,
          y: 80,
          width: 686,
          height: 160,
          paddingLeft: 0,
          paddingRight: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: 32,
          zIndex: 10
        },
        //底部图片
        {
          x: 32,
          y: 990,
          width: 686,
          height: 365,
          paddingLeft: 0,
          paddingRight: 0,
          borderRadiusGroup: [0, 0, 16, 16],
          backgroundColor: '#FFFFFF',
          zIndex: 11
        }],
        texts: [{
          x: 216,
          y: 108,
          text: nickname.value || '-',
          width: 380,
          lineNum: 2,
          // 最多几行
          fontSize: 36,
          fontWeight: 'bold',
          color: '#1A171B',
          zIndex: 11
        }, {
          x: 216,
          y: 174,
          text: '为你挑选了一个好物',
          width: 380,
          fontSize: 28,
          color: '#7C7D7A',
          zIndex: 11
        }],
        images: [{
          x: 50,
          y: 100,
          width: 120,
          height: 120,
          borderRadius: 60,
          url: avatar.value || config/* DEFAULT_AVATAR */.k_,
          zIndex: 11
        }, {
          x: 32,
          y: 272,
          width: 686,
          height: 770,
          url: (_imageSrc$value = imageSrc.value) === null || _imageSrc$value === void 0 ? void 0 : _imageSrc$value[0],
          borderRadiusGroup: [16, 16, 16, 16],
          zIndex: 20
        }, {
          isBase64: true,
          x: 260,
          y: 1100,
          width: dataProcessing/* editorPoster */.nJ.value.qrcode.size,
          height: dataProcessing/* editorPoster */.nJ.value.qrcode.size,
          // url: qrCodeUrl.value || 'https://dev-cdn.anteng.cn/upload/db870a3b1ee7a76eacbd68506a8ebd3b.png',
          url: dataProcessing/* qrCodeUrl */.wN.value || 'https://dev-cdn.anteng.cn/upload/72b3fcb5135bb9566a7cbb8ce05a85a1.png',
          // 渲染二维码这里如果有圆角,二维码底下会有一条线(OnlyAppleCanDo),可能是 base64src 这个方法在安卓和ios下的差异导致的
          // borderRadiusGroup: [15, 15, 15, 15],
          zIndex: 999
        }]
      };
    });
    var state = (0,reactivity_esm_bundler/* reactive */.Kh)({
      posterPath: ''
    });
    var drawSuccess = function drawSuccess(result) {
      state.posterPath = result.tempFilePath;
    };
    var drawFail = function drawFail(result) {
      console.log('绘制失败', result);
      (0,interaction/* hideLoading */.RZ)();
      /* Taro.showToast({
        title: '图片格式不支持，请使用jpg或png格式',
        icon: 'none',
        duration: 2000
      }) */
      // 不清除状态，避免闪烁
    };
    var drawCanvas = function drawCanvas() {
      var _imageSrc$value2;
      if (((_imageSrc$value2 = imageSrc.value) === null || _imageSrc$value2 === void 0 ? void 0 : _imageSrc$value2.length) !== 0) {
        showCanvas.value = true;
      }
    };
    var needBackEle = function needBackEle() {
      return new Promise(function (resolve, reject) {
        var _editorPoster$value3;
        // 如果不是编辑模式，直接返回
        if (!((_editorPoster$value3 = dataProcessing/* editorPoster */.nJ.value) !== null && _editorPoster$value3 !== void 0 && _editorPoster$value3.isEdit)) {
          resolve(true);
          return;
        }

        // 检查是否有未保存的更改
        var hasUnsavedChanges = function hasUnsavedChanges() {
          var oldData = tempOldData.value;
          var currentData = dataProcessing/* editorPoster */.nJ.value;

          // 检查图片URL是否变化
          if (oldData.url !== currentData.url) return true;

          // 检查商品信息是否变化
          if (oldData.qrcode.goodsId !== currentData.qrcode.goodsId || oldData.qrcode.informationId !== currentData.qrcode.informationId) return true;
          return false;
        };

        // 如果有未保存的更改，显示确认对话框
        if (hasUnsavedChanges()) {
          (0,lib/* useConfirm */.zf)({
            title: '提示',
            content: '当前页面有未保存的更改，确定要离开吗？',
            confirmText: '确定',
            cancelText: '取消',
            success: function success(res) {
              if (res.confirm) {
                resolve(true);
              } else {
                reject(false);
              }
            }
          });
        } else {
          // 没有未保存的更改，直接返回
          resolve(true);
        }
      });
    };

    // 更换图片
    var changeImage = function changeImage() {
      (0,lib/* useConfirm */.zf)({
        title: '是否更换图片',
        content: '这将无法恢复当前上传的图片',
        onConfirm: function onConfirm() {
          // 重置所有相关状态
          dataProcessing/* qrCodeUrl */.wN.value = '';
          dataProcessing/* qrcodeImage */.Se.value = '';
          dataProcessing/* editorPoster */.nJ.value.url = '';
          dataProcessing/* editorPoster */.nJ.value.title = '';
          imageSrc.value = [];
          showCanvas.value = false;
          state.posterPath = '';
          // 重置二维码相关状态
          if (dataProcessing/* editorPoster */.nJ.value.qrcode) {
            dataProcessing/* editorPoster */.nJ.value.qrcode = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, dataProcessing/* editorPoster */.nJ.value.qrcode), {}, {
              goodsId: undefined,
              faId: undefined,
              infId: undefined,
              childrenId: undefined
            });
          }
        },
        onCancel: function onCancel() {}
      });
    };
    // 保存图片
    var saveImage = function saveImage() {
      var _posterName$value;
      if (!((_posterName$value = posterName.value) !== null && _posterName$value !== void 0 && _posterName$value.trim())) {
        (0,interaction/* showToast */.P0)({
          title: '请输入海报名称',
          icon: 'none'
        });
        return;
      }
      if (!dataProcessing/* qrCodeUrl */.wN.value && !dataProcessing/* qrcodeImage */.Se.value) {
        (0,interaction/* showToast */.P0)({
          title: '请先选择页面生成二维码',
          icon: 'none'
        });
        return;
      }
      (0,saveImageToPhotosAlbum/* saveImageToPhotosAlbum */.U)({
        filePath: state.posterPath,
        success: function success() {
          (0,interaction/* showToast */.P0)({
            title: '已保存到相册',
            icon: 'success'
          });
        },
        fail: function fail() {
          (0,interaction/* showToast */.P0)({
            title: '保存失败',
            icon: 'none'
          });
        }
      });
    };
    // 保存文件
    var saveFile = function saveFile() {
      var _posterName$value2;
      if (!((_posterName$value2 = posterName.value) !== null && _posterName$value2 !== void 0 && _posterName$value2.trim())) {
        (0,interaction/* showToast */.P0)({
          title: '请输入海报名称',
          icon: 'none'
        });
        return;
      }
      (0,dataProcessing/* submitData */.ds)(dataProcessing/* editorPoster */.nJ.value.id).then(function (r) {
        dataProcessing/* editorPoster */.nJ.value = r === null || r === void 0 ? void 0 : r.data;
        tempOldData.value = (0,cloneDeep/* default */.A)(dataProcessing/* editorPoster */.nJ.value);
        setTimeout(function () {
          (0,router/* navigateBack */.Tl)();
        }, 1000);
      });
    };
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "backgroundColor": "rgba(30, 40, 62, 1)",
        "navigator": {
          title: '制作海报',
          showMenuButton: false,
          navigationBarBackgroundColor: 'rgba(0,0,0,0)',
          navigationBarTextStyle: 'white',
          whetherBack: needBackEle
        },
        "class": "poster-create-page",
        "onClick": function onClick() {
          // console.log('editorPoster.value:')
          // console.log(editorPoster.value)
        }
      }, {
        default: function _default() {
          return [state.posterPath ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "poster-create-top-operations"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Input */.pd, {
            "class": "poster-name-input",
            "type": "text",
            "placeholder": "\u8BF7\u8F93\u5165\u6D77\u62A5\u540D\u79F0",
            "value": posterName.value,
            "onInput": function onInput(e) {
              posterName.value = e.detail.value;
              if (dataProcessing/* editorPoster */.nJ.value) {
                dataProcessing/* editorPoster */.nJ.value.name = e.detail.value;
              }
            }
          }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "bottom-btn",
            "onClick": saveImage
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4E0B\u8F7D\u6D77\u62A5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "bottom-btn",
            "onClick": saveFile
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4FDD\u5B58\u6587\u4EF6")])]) : '', (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "image-container",
            "onClick": function onClick() {
              var _editorPoster$value4, _editorPoster$value5;
              if (!state.posterPath) {
                return void 0;
              }
              var pageTitle = (_editorPoster$value4 = dataProcessing/* editorPoster */.nJ.value) === null || _editorPoster$value4 === void 0 ? void 0 : _editorPoster$value4.title;
              var page = (_editorPoster$value5 = dataProcessing/* editorPoster */.nJ.value) === null || _editorPoster$value5 === void 0 || (_editorPoster$value5 = _editorPoster$value5.qrcode) === null || _editorPoster$value5 === void 0 ? void 0 : _editorPoster$value5.page;
              var jumpInfo = '';
              if (page === 'homePage') {
                jumpInfo = '首页';
              } else if (pageTitle) {
                jumpInfo = "\u9875\u9762\u7C7B\u578B\uFF1A".concat(pageTitle);
              } else {
                jumpInfo = '暂未选择跳转页面';
              }
              (0,interaction/* showToast */.P0)({
                title: "\u626B\u7801\u540E\u8DF3\u8F6C\u5230".concat(jumpInfo),
                icon: 'none',
                duration: 2000
              });
            }
          }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)("image", {
            "class": "poster-image",
            "src": state.posterPath,
            "mode": "aspectFit"
          }, null), [[(0,runtime_core_esm_bundler/* resolveDirective */.gN)("if"), state.posterPath]]), showCanvas.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(PosterBuilder/* default */.A, {
            "custom-style": "position: fixed; left: 400%;",
            "config": posterConfig.value,
            "onSuccess": drawSuccess,
            "onFail": drawFail,
            "ref": PosterRef,
            "showLoading": true
          }, null), imageSrc.value.length === 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* ImageUploader */.GA, {
            "class": "image-uploader",
            "maxCount": 1,
            "images": imageSrc.value,
            "onChange": function onChange(list) {
              imageSrc.value = list;
              drawCanvas();
              dataProcessing/* editorPoster */.nJ.value.url = list[0];
              // 图片更换后需要刷新下当前canvas
              getQrcodeAndRefresh();
            }
          }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "options"
          }, [imageSrc.value.length === 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "tips"
          }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "row-layout"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "key-title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8DF3\u8F6C\u9875\u9762")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(page_selector, {
            "class": "page-selector",
            "ref": PageSelectorRef,
            "onChange": function onChange() {
              (0,runtime_core_esm_bundler/* nextTick */.dY)(function () {
                getQrcodeAndRefresh();
              });
            }
          }, null)])]), imageSrc.value.length !== 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "poster-create-bottom-operations"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "poster-create-bottom-left",
            "onClick": function onClick() {
              var _PageSelectorRef$valu;
              (_PageSelectorRef$valu = PageSelectorRef.value) === null || _PageSelectorRef$valu === void 0 || _PageSelectorRef$valu.showPagePop();
            }
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "shengchengxiaochengxuma"
          }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u751F\u6210\u5C0F\u7A0B\u5E8F\u7801")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "poster-create-bottom-right",
            "onClick": changeImage
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "genghuantupian"
          }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u66F4\u6362\u56FE\u7247")])]) : ''])];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=678.js.map