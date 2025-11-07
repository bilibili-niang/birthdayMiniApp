"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[517],{

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

/***/ 3517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
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
// EXTERNAL MODULE: ./src/api/posterMarking/index.ts
var posterMarking = __webpack_require__(9132);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
;// ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/dialog/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/interaction/index.js + 3 modules
var interaction = __webpack_require__(7888);
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/dataProcessing/index.ts
var dataProcessing = __webpack_require__(1810);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 27 modules
var src = __webpack_require__(4176);
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/PosterBuilder/index.vue + 5 modules
var PosterBuilder = __webpack_require__(1987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/media/image/saveImageToPhotosAlbum.js + 1 modules
var saveImageToPhotosAlbum = __webpack_require__(1781);
;// ./src/utils/downloadFile.ts


// 下载文件
var downloadImage = function downloadImage(src) {
  (0,saveImageToPhotosAlbum/* saveImageToPhotosAlbum */.U)({
    filePath: src,
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
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
// EXTERNAL MODULE: ../../packages/core/src/api/index.ts + 2 modules
var api = __webpack_require__(6319);
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/PosterBuilder/utils/tools.ts
var tools = __webpack_require__(962);
// EXTERNAL MODULE: ../../packages/config/index.ts + 1 modules
var config = __webpack_require__(3250);
;// ./src/packageA/posterMaking/list/index.tsx



// 海报制作 - 列表


















/* harmony default export */ var list = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'PostMarkingList',
  setup: function setup() {
    // 跳转制作海报
    var makeAPoster = function makeAPoster() {
      if (isEditor.value) {
        console.log('当前是编辑模式,不准选这个');
        return void 0;
      }
      //  false 新建 true 编辑
      dataProcessing/* editorPoster */.nJ.value.isEdit = false;
      (0,router/* navigateToPosterMakingCreate */.vS)();
    };
    var ScrollRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
    var refreshData = function refreshData() {
      var _ScrollRef$value;
      (_ScrollRef$value = ScrollRef.value) === null || _ScrollRef$value === void 0 || _ScrollRef$value.refreshData();
    };

    // 添加页面显示时的刷新逻辑
    taro/* default.useDidShow */.Ay.useDidShow(function () {
      refreshData();
    });

    // 生成海报会用到
    var userStore = (0,lib/* useUserStore */.kH)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(userStore),
      nickname = _storeToRefs.nickname,
      avatar = _storeToRefs.avatar,
      user = _storeToRefs.user;
    var utmStoreEle = (0,stores/* utmStore */.Yt)();
    var generateSpecifiedContentShortChain = utmStoreEle.generateSpecifiedContentShortChain;
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(utmStoreEle),
      env = _storeToRefs2.env;

    // 是否展示删除的确认弹窗
    var selectedId = (0,reactivity_esm_bundler/* ref */.KR)('');
    // 弹出海报操作菜单
    var optionsPopup = (0,reactivity_esm_bundler/* ref */.KR)({
      close: function close() {
        return 0;
      }
    });

    // 是否展示海报的builter
    var generationPoster = (0,reactivity_esm_bundler/* ref */.KR)(false);
    // 当前需要生成的海报url
    var nowPoster = (0,reactivity_esm_bundler/* ref */.KR)('');
    // 生成海报的小程序码
    var posterQrcodeImage = (0,reactivity_esm_bundler/* ref */.KR)('');
    // 生成海报的配置
    var generationPosterConfig = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
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
          url: nowPoster.value,
          borderRadiusGroup: [16, 16, 16, 16],
          zIndex: 20
        }, {
          isBase64: true,
          x: 260,
          y: 1100,
          width: dataProcessing/* editorPoster */.nJ.value.qrcode.size,
          height: dataProcessing/* editorPoster */.nJ.value.qrcode.size,
          base64Url: posterQrcodeImage.value,
          url: posterQrcodeImage.value || 'https://dev-cdn.anteng.cn/upload/72b3fcb5135bb9566a7cbb8ce05a85a1.png',
          zIndex: 15
        }]
      };
    });
    // 下载海报
    var isDownloading = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var downloadPoster = function downloadPoster(item) {
      var _item$qrcode, _item$qrcode2;
      if (isDownloading.value) return;
      isDownloading.value = true;
      console.log('item:');
      console.log(item);
      generateSpecifiedContentShortChain({
        utmSource: '海报分享',
        utmCampaign: item.name,
        page: (_item$qrcode = item.qrcode) === null || _item$qrcode === void 0 ? void 0 : _item$qrcode.page,
        goodsId: (_item$qrcode2 = item.qrcode) === null || _item$qrcode2 === void 0 ? void 0 : _item$qrcode2.goodsId
      }).then(function (res) {
        if (res.success) {
          // 获取小程序码
          (0,api/* $getWxacodeUnlimit */.qp)({
            page: 'pagesB/goodDetail/GoodDetail',
            scene: "utmCode=".concat(res.data.shortCode),
            env: env.value
          }).then(/*#__PURE__*/function () {
            var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(res) {
              var qrcodeImage;
              return (0,regenerator/* default */.A)().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!res.success) {
                      _context.n = 2;
                      break;
                    }
                    qrcodeImage = "data:image/png;base64,".concat(res.data);
                    _context.n = 1;
                    return (0,tools/* base64src */.yi)(qrcodeImage, Math.random() * 100000 + '').then(function (re) {
                      posterQrcodeImage.value = re;
                      nowPoster.value = item.url;
                      // loading
                      (0,interaction/* showLoading */.Cs)({
                        title: '生成海报中...',
                        mask: true
                      });
                      generationPoster.value = true;
                    });
                  case 1:
                    _context.n = 3;
                    break;
                  case 2:
                    (0,lib/* useToast */.dj)('获取小程序码失败了');
                    isDownloading.value = false;
                  case 3:
                    return _context.a(2);
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()).catch(function () {
            isDownloading.value = false;
          });
        } else {
          (0,lib/* useToast */.dj)('生成utmCode失败了');
        }
      });
    };
    var posterOptions = function posterOptions(item) {
      selectedId.value = item.id;
      optionsPopup.value = (0,lib/* usePopup */.OJ)({
        placement: 'bottom',
        content: (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "poster-options"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "option-btn",
          "onClick": function onClick() {
            downloadPoster(item);
          }
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4E0B\u8F7D\u6D77\u62A5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "option-btn",
          "onClick": function onClick() {
            (0,router/* navigateToPosterMakingCreate */.vS)(item);
            // 关闭操作弹窗
            optionsPopup.value.close();
          }
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7F16\u8F91")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "option-btn danger-color",
          "onClick": function onClick() {
            (0,lib/* useConfirm */.zf)({
              title: '提示',
              content: '您确定要删除该海报？',
              onConfirm: function onConfirm() {
                (0,posterMarking/* deletePoster */.To)(selectedId.value).then(function (res) {
                  if (res.success) {
                    (0,interaction/* showToast */.P0)({
                      title: res.msg || '删除成功',
                      icon: 'none'
                    });
                    // 关闭操作弹窗
                    optionsPopup.value.close();
                  } else {
                    (0,interaction/* showToast */.P0)({
                      title: '删除失败',
                      icon: 'error'
                    });
                  }
                }).catch(lib/* useResponseMessage */.Cd).finally(refreshData);
              }
            });
          }
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5220\u9664\u6D77\u62A5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "option-btn",
          "onClick": function onClick() {
            optionsPopup.value.close();
          }
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53D6\u6D88")])])
      });
    };
    var render = function render(it) {
      var _it$qrcode, _tabsValue$find;
      var itemType = ((_it$qrcode = it.qrcode) === null || _it$qrcode === void 0 ? void 0 : _it$qrcode.page) || null;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "poster-item ".concat(isEditor.value ? 'editing' : ''),
        "onClick": function onClick() {
          if (isEditor.value) {
            // 编辑模式下点击整个卡片进行选择
            handleSelect(it.id);
          } else {
            // 非编辑模式下才触发海报操作
            posterOptions(it);
          }
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "bubble ".concat(selectedIds.value.includes(it.id) ? 'selected' : '')
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
        "class": "poster-cover",
        "mode": "aspectFill",
        "src": it.url,
        "lazyLoad": true
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "detail"
      }, [it === null || it === void 0 ? void 0 : it.name,  false ? 0 : ''])]);
    };

    // 总数
    var totalNum = (0,reactivity_esm_bundler/* ref */.KR)(0);
    // 是否是编辑模式
    var isEditor = (0,reactivity_esm_bundler/* ref */.KR)(false);
    // 选中的海报id数组
    var selectedIds = (0,reactivity_esm_bundler/* ref */.KR)([]);
    // 列表数据
    var listData = (0,reactivity_esm_bundler/* ref */.KR)([]);
    var editMode = function editMode() {
      isEditor.value = !isEditor.value;
      // 退出编辑模式时清空选中状态
      if (!isEditor.value) {
        selectedIds.value = [];
      }
    };

    // 处理选择状态
    var handleSelect = function handleSelect(id) {
      var index = selectedIds.value.indexOf(id);
      if (index === -1) {
        selectedIds.value.push(id);
      } else {
        selectedIds.value.splice(index, 1);
      }
    };

    // 删除选中的海报
    var deleteSelected = function deleteSelected() {
      if (selectedIds.value.length === 0) {
        (0,interaction/* showToast */.P0)({
          title: '请选择要删除的海报',
          icon: 'none'
        });
        return;
      }
      (0,lib/* useConfirm */.zf)({
        title: '提示',
        content: "\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684".concat(selectedIds.value.length, "\u5F20\u6D77\u62A5\u5417\uFF1F"),
        onConfirm: function onConfirm() {
          Promise.all(selectedIds.value.map(function (id) {
            return (0,posterMarking/* deletePoster */.To)(id);
          })).then(function () {
            (0,interaction/* showToast */.P0)({
              title: '删除成功',
              icon: 'success'
            });
            selectedIds.value = [];
            refreshData();
          }).catch(lib/* useResponseMessage */.Cd);
        }
      });
    };

    // 全选功能
    var handleSelectAll = function handleSelectAll() {
      // 如果已经全选了，就取消全选，否则执行全选
      if (isAllSelected.value) {
        selectedIds.value = [];
      } else {
        selectedIds.value = ScrollRef.value.data.map(function (item) {
          return item.id;
        });
      }
    };

    // 计算是否全选
    var isAllSelected = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return ScrollRef.value.data.length > 0 && ScrollRef.value.data.length === selectedIds.value.length;
    });
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "backgroundColor": "rgba(30, 40, 62, 1)",
        "navigator": {
          title: '我的海报',
          showMenuButton: false,
          navigationBarBackgroundColor: 'rgba(0,0,0,0)',
          navigationBarTextStyle: 'white'
        },
        "class": "post-marking-list-page"
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "poster-list-top-number"
          }, [totalNum.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "poster-listy-top-left-text"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171"), ' ' + totalNum.value + ' ', (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F20")]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "post-list-top-right-button",
            "onClick": editMode
          }, [isEditor.value ? '完成' : '管理'])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* ScrollList */.QZ, {
            "showEmpty": false,
            "refresherDefaultStyle": 'white',
            "height": "100vh",
            "ref": ScrollRef,
            "request": function request(sss) {
              return new Promise(function (resolve, reject) {
                (0,posterMarking/* getPosterList */.Cn)(sss).then(function (res) {
                  totalNum.value = res.data.total;
                  listData.value = res.data.list || [];
                  resolve(res);
                }).catch(reject);
              });
            },
            "class": "post-marking-page-scroll"
          }, {
            topSlots: function topSlots() {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "poster-item poster-item-sp",
                "onClick": makeAPoster
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "empty-content-block"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
                "name": "zhizuo"
              }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "empty-content-text"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5236\u4F5C\u65B0\u6D77\u62A5")])])]);
            },
            default: render
          }), isEditor.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "bottom-operations"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "top-select-text"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5DF2\u9009\u62E9"), ' ' + selectedIds.value.length + ' ', (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5F20")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "bottom-content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "bottom-content-left",
            "onClick": handleSelectAll
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "select-bubble ".concat(isAllSelected.value ? 'selected' : '')
          }, null), isAllSelected.value ? '取消全选' : '全选']), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "bottom-content-right"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "bottom-btn",
            "onClick": deleteSelected
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
            "name": "shanchu"
          }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5220\u9664")])])])]) : '', generationPoster.value ? (0,runtime_core_esm_bundler/* createVNode */.bF)(PosterBuilder/* default */.A, {
            "config": generationPosterConfig.value,
            "onSuccess": function onSuccess(result) {
              downloadImage(result.tempFilePath);
              // 关掉弹窗
              generationPoster.value = false;
              posterQrcodeImage.value = '';
              optionsPopup.value.close();
              isDownloading.value = false;
            },
            "onFail": function onFail(e) {
              console.log('生成失败了', e);
              (0,lib/* useToast */.dj)('海报生成失败');
              (0,interaction/* hideLoading */.RZ)();
              isDownloading.value = false;
            },
            "showLoading": true
          }, null) : ''];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=517.js.map