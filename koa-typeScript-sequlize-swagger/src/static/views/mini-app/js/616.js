"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[616],{

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

/***/ 4616:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ detail; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+reactivity@3.5.22/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(4243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+runtime-core@3.5.22/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(419);
// EXTERNAL MODULE: ../../packages/core/lib.ts + 30 modules
var lib = __webpack_require__(4078);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/storage/index.js
var storage = __webpack_require__(4238);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/taro.js
var taro = __webpack_require__(1880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/wxml/index.js + 4 modules
var wxml = __webpack_require__(1346);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/scroll/index.js + 1 modules
var ui_scroll = __webpack_require__(3571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(8831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7420);
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 20 modules
var src = __webpack_require__(5788);
// EXTERNAL MODULE: ./src/hooks/index.ts + 11 modules
var hooks = __webpack_require__(8892);
// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var router = __webpack_require__(3058);
// EXTERNAL MODULE: ./src/stores/index.ts + 3 modules
var stores = __webpack_require__(6685);
// EXTERNAL MODULE: ./src/packageA/goods/detail/store.ts
var store = __webpack_require__(6404);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pinia@2.3.1_typescript@5.9.3_vue@3.5.22_typescript@5.9.3_/node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(9700);
// EXTERNAL MODULE: ../../packages/utils/index.ts + 7 modules
var utils = __webpack_require__(2344);
// EXTERNAL MODULE: ./src/constants/index.ts + 3 modules
var constants = __webpack_require__(7468);
// EXTERNAL MODULE: ./src/utils/index.tsx + 4 modules
var src_utils = __webpack_require__(4569);
// EXTERNAL MODULE: ./src/hooks/useAddress.ts
var useAddress = __webpack_require__(5598);
// EXTERNAL MODULE: ./src/api/index.ts + 4 modules
var api = __webpack_require__(5816);
// EXTERNAL MODULE: ./src/hooks/useAction/index.ts + 2 modules
var useAction = __webpack_require__(1173);
;// ./src/packageA/goods/detail/action-bar/index.tsx


















/* harmony default export */ var action_bar = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'goods-detail-action-bar',
  props: {
    goodsDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    // 用户收货地址
    var useAddressEntities = (0,useAddress/* default */.A)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(useAddressEntities),
      address = _storeToRefs.address;
    var goodsDetailStore = (0,store/* useGoodsDetailStore */.k1)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(goodsDetailStore),
      goodsDetail = _storeToRefs2.goodsDetail,
      isOffSale = _storeToRefs2.isOffSale,
      isWaitingForSale = _storeToRefs2.isWaitingForSale,
      isEndOfSale = _storeToRefs2.isEndOfSale,
      isWithinTodaySalesTime = _storeToRefs2.isWithinTodaySalesTime;
    var updatePageAddress = function updatePageAddress() {
      useAddressEntities.chooseAddress();
    };
    var statusText = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      if (isWaitingForSale.value) {
        return "\u8BE5\u5546\u54C1\u5C06\u4E8E ".concat((0,utils/* changeDateSeparator */.Ml)((0,utils/* simplifyDate */.aN)(goodsDetail.value.onsaleStartAt)), " \u5F00\u59CB\u552E\u5356");
      }
      if (isEndOfSale.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE5\u5546\u54C1\u5DF2\u4E8E "), (0,utils/* changeDateSeparator */.Ml)((0,utils/* simplifyDate */.aN)(goodsDetail.value.onsaleEndAt)), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u7ED3\u675F\u552E\u5356")]);
      }
      if (!isWithinTodaySalesTime.value) {
        return "\u8BE5\u5546\u54C1\u6BCF\u65E5 ".concat(goodsDetail.value.buyStartAt, " \u81F3 ").concat(goodsDetail.value.buyEndAt, " \u53EF\u8D2D\u4E70");
      }
      return null;
    });

    /*
     * 用户的区域
     * */
    var commoditySalesArea = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _addressTranslationTo, _address$value, _addressTranslationTo2, _address$value2, _addressTranslationTo3, _address$value3;
      var provinceCode = (_addressTranslationTo = (0,src_utils/* addressTranslationToCode */.Sb)((_address$value = address.value) === null || _address$value === void 0 ? void 0 : _address$value.provinceName)) === null || _addressTranslationTo === void 0 ? void 0 : _addressTranslationTo.code;
      var cityCode = (_addressTranslationTo2 = (0,src_utils/* addressTranslationToCode */.Sb)((_address$value2 = address.value) === null || _address$value2 === void 0 ? void 0 : _address$value2.cityName)) === null || _addressTranslationTo2 === void 0 ? void 0 : _addressTranslationTo2.code;
      var countyCode = (_addressTranslationTo3 = (0,src_utils/* addressTranslationToCode */.Sb)((_address$value3 = address.value) === null || _address$value3 === void 0 ? void 0 : _address$value3.countyName)) === null || _addressTranslationTo3 === void 0 ? void 0 : _addressTranslationTo3.code;
      return countyCode ? countyCode : cityCode ? cityCode : provinceCode;
    });

    // 销售区域限制提示文字
    var saleAreaText = function saleAreaText() {
      var _goodsDetail$value, _goodsDetail$value2, _goodsDetail$value3, _goodsDetail$value4, _goodsDetail$value6;
      var goodsAllowSaleArea = [];
      // 限售的区域
      (_goodsDetail$value = goodsDetail.value) === null || _goodsDetail$value === void 0 || (_goodsDetail$value = _goodsDetail$value.restrictedArea) === null || _goodsDetail$value === void 0 || _goodsDetail$value.map(function (it) {
        /*
         * 这里地址的数组存储的都是由省到市到区的顺序,但不一定有省例如一些直辖市,所以取最大的即可
         * */
        goodsAllowSaleArea.push((0,src_utils/* getAreaNameByCode */.zb)(it[it.length - 1]));
      });
      // 本地没有存储用户最后选择的地址时,是会为空的
      if (!address.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "statue-text-row",
          "onClick": updatePageAddress
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BE5\u5546\u54C1\u9650\u5236\u533A\u57DF\u9500\u552E "), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "little-tip"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u586B\u5199\u5730\u5740")])]);
      }
      if (((_goodsDetail$value2 = goodsDetail.value) === null || _goodsDetail$value2 === void 0 ? void 0 : _goodsDetail$value2.type) === constants/* GOODS_TYPE_STORE_VERIFICATION */.uz) {
        // 卡券商品,不设置限制
        return void 0;
      }
      if (((_goodsDetail$value3 = goodsDetail.value) === null || _goodsDetail$value3 === void 0 ? void 0 : _goodsDetail$value3.restrictedStatus) === 0) {
        console.log('没有设置销售区域');
        // 实物商品,但是不设置销售区域
        return void 0;
      }
      if (!((_goodsDetail$value4 = goodsDetail.value) !== null && _goodsDetail$value4 !== void 0 && _goodsDetail$value4.restrictedArea)) {
        console.log('实物商品,设置了销售区域,但是没有填写销售区域的code');
        // 万一为实物商品,设置了销售区域,但是没有填写销售区域的code
        return void 0;
      }
      var lastCode = commoditySalesArea.value;
      var resultList = goodsDetail.value.restrictedArea.map(function (it) {
        return (0,src_utils/* checkAreaCodeInSide */.Vb)(lastCode, it[it.length - 1]);
      });
      var noSale = function noSale() {
        var _goodsDetail$value5;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "status-text status-text-warning"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "statue-text-row",
          "onClick": function onClick() {
            updatePageAddress();
          }
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6B64\u5546\u54C1\u5728"), goodsAllowSaleArea.join(','), ((_goodsDetail$value5 = goodsDetail.value) === null || _goodsDetail$value5 === void 0 ? void 0 : _goodsDetail$value5.restrictedType) === 0 ? '销售' : '不可销售', (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "little-tip"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4FEE\u6539\u5730\u5740")])])]);
      };

      /*
       * 允许在指定区域销售
       * 用户省市区的code最后一个(可能区的code不存在)在允许区域的code里即可
       * restrictedType : 限制类型，0：仅所选区域可下单，1：所选区域不可下单
       * */
      if (((_goodsDetail$value6 = goodsDetail.value) === null || _goodsDetail$value6 === void 0 ? void 0 : _goodsDetail$value6.restrictedType) === 0) {
        if (resultList.includes(true)) {
          // 允许销售
          return void 0;
        } else {
          return noSale();
        }
      } else {
        if (resultList.includes(true)) {
          return noSale();
        } else {
          // 允许销售
          return void 0;
        }
      }
    };
    var onBuyNowClick = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
        var _props$goodsDetail$li;
        var _useGoodsSkuModal, close;
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _useGoodsSkuModal = (0,hooks/* useGoodsSkuModal */.oT)({
                skus: props.goodsDetail.goodsSkus,
                defaultImage: props.goodsDetail.coverImages[0],
                minCount: (_props$goodsDetail$li = props.goodsDetail.limitNumMin) !== null && _props$goodsDetail$li !== void 0 ? _props$goodsDetail$li : 1,
                maxCount: props.goodsDetail.limitNumMax,
                onConfirm: function onConfirm(res) {
                  (0,router/* navigateToOrderPay */.bJ)({
                    goods: {
                      gid: props.goodsDetail.id,
                      sid: res.id,
                      count: res.count
                    }
                  }).finally(close);
                }
              }), close = _useGoodsSkuModal.close;
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function onBuyNowClick() {
        return _ref.apply(this, arguments);
      };
    }();
    var onAddShoppingCartClick = function onAddShoppingCartClick() {
      var _props$goodsDetail$li2;
      var _useGoodsSkuModal2 = (0,hooks/* useGoodsSkuModal */.oT)({
          skus: props.goodsDetail.goodsSkus,
          defaultImage: props.goodsDetail.coverImages[0],
          minCount: (_props$goodsDetail$li2 = props.goodsDetail.limitNumMin) !== null && _props$goodsDetail$li2 !== void 0 ? _props$goodsDetail$li2 : 1,
          maxCount: props.goodsDetail.limitNumMax,
          onConfirm: function onConfirm(res) {
            (0,stores/* useCartStore */.x3)().addItem({
              goodsId: res.goodsId,
              goodsSkuId: res.id,
              count: res.count
            }).finally(close);
          }
        }),
        close = _useGoodsSkuModal2.close;
    };
    var MainActions = function MainActions() {
      var _goodsDetail$value7;
      if (isOffSale.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "main-action disabled"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u5DF2\u4E0B\u67B6")]);
      }
      if (isWaitingForSale.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "main-action"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u672A\u5230\u5F00\u552E\u65F6\u95F4")]);
      }
      if (isEndOfSale.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "main-action"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u552E\u5356\u65F6\u95F4\u5DF2\u8FC7")]);
      }
      if (!isWithinTodaySalesTime.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "main-action"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4E0D\u5728\u672C\u65E5\u552E\u5356\u65F6\u95F4")]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [((_goodsDetail$value7 = goodsDetail.value) === null || _goodsDetail$value7 === void 0 ? void 0 : _goodsDetail$value7.type) === constants/* GOODS_TYPE_ENTITY */.i4 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-action",
        "onClick": onAddShoppingCartClick
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u52A0\u5165\u8D2D\u7269\u8F66")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-action primary",
        "onClick": onBuyNowClick
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u8D2D\u4E70")])]);
    };
    var showContactButton = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.goodsDetail.supplierId;
    });
    var Contact = function Contact() {
      if (showContactButton.value) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "minor-action",
          "onClick": function onClick() {
            (0,lib/* useLoading */.M3)();
            (0,api/* $getGoodsSupplierContactInfo */.nK)(props.goodsDetail.supplierId).then(function (res) {
              if (res.data) {
                (0,useAction/* default */.A)({
                  key: 'contact',
                  config: res.data
                });
              } else {
                (0,lib/* useToast */.dj)('未获取到客服消息');
              }
            }).catch(function (err) {
              (0,lib/* useResponseMessage */.Cd)(err);
            }).finally(lib/* useLoadingEnd */.dA);
          }
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
          "name": "profile"
        }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5BA2\u670D")])]);
      }
      if (false) // removed by dead control flow
{}
      return null;
    };
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-action-bar"
      }, [saleAreaText(), statusText.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status-text"
      }, [statusText.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "minor-action",
        "onClick": function onClick() {
          return (0,router/* backToIndex */.t2)();
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "home"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9996\u9875")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(Contact, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "minor-action",
        "onClick": function onClick() {
          return (0,router/* navigateToShoppingCart */.Xb)();
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "cart"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D2D\u7269\u8F66")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(MainActions, null, null)])]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+components@3.6.19_p_bb96efc8b84153ce80f60e1d206d1228/node_modules/@tarojs/components/lib/vue3/components.js + 83 modules
var components = __webpack_require__(6618);
;// ./src/components/detail-images-swiper/index.tsx





/* harmony default export */ var detail_images_swiper = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CommonDetailSwiper',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    var images = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return Array.isArray(props.images) ? props.images : [];
    });
    var swiperState = (0,reactivity_esm_bundler/* reactive */.Kh)({
      current: 0
    });
    return function () {
      var _images$value, _images$value2;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "detail-images-swiper",
        "onClick": function onClick() {
          return (0,lib/* usePreviewImages */.yj)({
            urls: images.value,
            current: swiperState.current
          });
        }
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Swiper */.RC, {
        "class": "swiper",
        "adjustHeight": "current",
        "circular": true,
        "autoplay": false,
        "onChange": function onChange(e) {
          swiperState.current = e.detail.current;
        }
      }, {
        default: function _default() {
          return [(_images$value = images.value) === null || _images$value === void 0 ? void 0 : _images$value.map(function (image) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* SwiperItem */.wu, {
              "class": "swiper-item"
            }, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
                  "class": "detail-images-swiper__image",
                  "mode": "aspectFill",
                  "src": image
                }, null)];
              }
            });
          })];
        }
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "indicator"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "current"
      }, [swiperState.current + 1]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "slash"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF0F")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "total"
      }, [(_images$value2 = images.value) === null || _images$value2 === void 0 ? void 0 : _images$value2.length])])]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(6552);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// ./src/components/share/index.tsx







/**
 *  分享菜单
 *  handler: 分享菜单点击事件,目前只有分享海报用得上 不传入/传入为null时不展示 分享海报 按钮
 */
var useShareMenu = function useShareMenu(config) {
  var type = config.type,
    id = config.id,
    handler = config.handler;
  var popup = (0,lib/* usePopup */.OJ)({
    placement: 'bottom',
    content: (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__content"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__item",
      "onClick": function onClick() {
        popup.close();
      }
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__icon message"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
      "name": "goutong_communication",
      "class": "share-icon"
    }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__text"
    }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5206\u4EAB\u5230\u804A\u5929")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Button */.$n, {
      "class": "share-button",
      "openType": "share"
    }, null)]), handler && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__item",
      "onClick": function onClick() {
        handler();
        popup.close();
      }
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__icon message"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
      "name": "qiehuan_app-switch",
      "class": "share-icon"
    }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__text"
    }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5206\u4EAB\u6D77\u62A5")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__item",
      "onClick": function onClick() {
        popup.close();
        (0,router/* navigateToPoster */.qN)(id, type);
      }
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__icon poster"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
      "name": "xintupian_new-picture",
      "class": "share-icon"
    }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__text"
    }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u751F\u6210\u957F\u6D77\u62A5")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
      "class": "rent-share-menu__cancel",
      "onClick": function onClick() {
        popup.close();
      }
    }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53D6\u6D88")])])
  });
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@nutui+nutui-taro@4.3.14_vue@3.5.22_typescript@5.9.3_/node_modules/@nutui/nutui-taro/dist/packages/swipe/index.css
var swipe = __webpack_require__(9476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/interaction/index.js + 3 modules
var interaction = __webpack_require__(7888);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/utils/index.js
var dist_utils = __webpack_require__(9641);
;// ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/share/index.js


// 转发
/** 更新转发属性 */
var updateShareMenu = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('updateShareMenu')));
/** 显示当前页面的转发按钮 */
var showShareMenu = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('showShareMenu')));
/** 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 */
var showShareImageMenu = /* @__PURE__ */(0,dist_utils/* temporarilyNotSupport */.x7)('showShareImageMenu');
/** 转发视频到聊天 */
var shareVideoMessage = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('shareVideoMessage')));
/** 转发文件到聊天 */
var shareFileMessage = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('shareFileMessage')));
/** 监听用户点击右上角菜单的「复制链接」按钮时触发的事件 */
var onCopyUrl = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('onCopyUrl')));
/** 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的监听函数 */
var offCopyUrl = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('offCopyUrl')));
/** 隐藏当前页面的转发按钮 */
var hideShareMenu = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('hideShareMenu')));
/** 获取转发详细信息 */
var getShareInfo = /* @__PURE__ */(/* unused pure expression or super */ null && (temporarilyNotSupport('getShareInfo')));
/** 验证私密消息。 */
var authPrivateMessage = /* @__PURE__ */(/* unused pure expression or super */ null && (permanentlyNotSupport('authPrivateMessage')));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/device/vibrate.js
var vibrate = __webpack_require__(3504);
;// ./src/components/swiper-for-poster/index.tsx

// 商品详情页的海报~





function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
/* harmony default export */ var swiper_for_poster = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'SwiperForPoster',
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    save: {
      type: Function,
      default: function _default() {
        return {};
      }
    },
    qrPath: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  },
  setup: function setup(props) {
    // 当前current
    var current = (0,reactivity_esm_bundler/* ref */.KR)(0);
    return function () {
      var _slot;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "swiper-for-poster"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)((0,runtime_core_esm_bundler/* resolveComponent */.g2)("Swiper"), {
        "circular": true,
        "class": "swiper",
        "next-margin": "25px",
        "previous-margin": "25px",
        "easing-function": "linear",
        "onChange": function onChange(e) {
          current.value = e.detail.current;
        }
      }, _isSlot(_slot = props.list.map(function (it, index) {
        var qrStyle = {
          left: (0,utils/* withUnit */.$o)(Number(it === null || it === void 0 ? void 0 : it.qrcodeX) * 0.9),
          top: (0,utils/* withUnit */.$o)(Number(it === null || it === void 0 ? void 0 : it.qrcodeY) * 0.9),
          width: (0,utils/* withUnit */.$o)(it === null || it === void 0 ? void 0 : it.qrcodeSize),
          height: (0,utils/* withUnit */.$o)(it === null || it === void 0 ? void 0 : it.qrcodeSize)
        };
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* SwiperItem */.wu, {
          "class": "swiper-item-layout"
        }, {
          default: function _default() {
            return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['swiper-item-content', props.list.length === 1 && 'width-100', current.value === index && 'active-current'],
              "onLongpress": function onLongpress() {
                (0,vibrate/* vibrateShort */.g)({
                  type: 'light'
                });
                props.save(current.value);
              },
              "style": {
                background: "url(".concat(it.url, ")"),
                width: '375px',
                height: '667px',
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center'
              }
            }, [props !== null && props !== void 0 && props.qrPath ? (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
              "style": qrStyle,
              "class": "qr-image",
              "src": props.qrPath
            }, null) : (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, null)])];
          }
        });
      })) ? _slot : {
        default: function _default() {
          return [_slot];
        }
      })]);
    };
  }
}));
// EXTERNAL MODULE: ../../packages/core/src/api/index.ts
var src_api = __webpack_require__(9394);
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/PosterBuilder/utils/tools.ts
var tools = __webpack_require__(962);
// EXTERNAL MODULE: ./src/packageA/posterMaking/create/PosterBuilder/index.vue + 5 modules
var PosterBuilder = __webpack_require__(1987);
;// ./src/packageA/goods/detail/base-info/index.tsx


















var SaleTime = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  setup: function setup() {
    var appStore = (0,lib/* useAppStore */.CU)();
    var goodsDetailStore = (0,store/* useGoodsDetailStore */.k1)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(goodsDetailStore),
      goodsDetail = _storeToRefs.goodsDetail;

    /** 限制销售时间 */
    var isTimeLimit = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _goodsDetail$value;
      return ((_goodsDetail$value = goodsDetail.value) === null || _goodsDetail$value === void 0 ? void 0 : _goodsDetail$value.onsaleMode) === constants/* GOODS_ON_SALE_MODE_TIMING */.se;
    });
    var timeLimitType = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var now = appStore.lazyNow;
      var start = dayjs_min_default()(goodsDetail.value.onsaleStartAt);
      var end = dayjs_min_default()(goodsDetail.value.onsaleEndAt);
      if (now.isBefore(start)) {
        return 0;
      }
      if (now.isAfter(start) && now.isBefore(end)) {
        return 1;
      }
      return 2;
    });
    var refTime = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return timeLimitType.value === 0 ? goodsDetail.value.onsaleStartAt : timeLimitType.value === 1 ? goodsDetail.value.onsaleEndAt : goodsDetail.value.onsaleEndAt;
    });
    var _useCountdown = (0,lib/* useCountdown */.L4)(refTime, {
        format: 'DD HH mm ss'
      }),
      countdownTime = _useCountdown.countdownTime,
      stopCountdown = _useCountdown.stopCountdown,
      onCountdownEnd = _useCountdown.onCountdownEnd,
      countdownSeconds = _useCountdown.countdownSeconds;
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(function () {
      stopCountdown();
    });
    onCountdownEnd(function () {
      // 开售、售卖状态结束时才刷新数据
      if (timeLimitType.value === 0 || timeLimitType.value === 1) {
        appStore.resetLazyNow();
        goodsDetailStore.silentRefresh();
      }
    });
    return function () {
      if (!goodsDetail.value) return null;
      if (!isTimeLimit.value) return null;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-sale-time"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
        "class": "main-icon a",
        "src": "https://dev-cdn.anteng.cn/upload/20240425/4bbe548ebfbd6528eb8ed3eee2c18c99.png"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "status"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "text"
      }, [timeLimitType.value === 0 ? '距离开售' : timeLimitType.value === 1 ? '距离结束' : '抢购已结束']), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "count-down"
      }, [countdownTime.value.split(' ').map(function (item, index) {
        if (index === 0) {
          // 天数大于0才显示
          return Number(item) > 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [parseInt(item), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5929\xA0")]) : null;
        }
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [index > 1 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "count-down-split"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(":")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "count-down-item"
        }, [item])]);
      })])])]);
    };
  }
});
/* harmony default export */ var base_info = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var goodsStore = (0,stores/* useGoodsStore */.bI)();
    var goodsDetailStore = (0,store/* useGoodsDetailStore */.k1)();
    var _storeToRefs2 = (0,pinia/* storeToRefs */.bP)(goodsDetailStore),
      goodsDetail = _storeToRefs2.goodsDetail,
      isOffSale = _storeToRefs2.isOffSale;
    var currentIndex = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var priceSortedSkus = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return goodsDetail.value.goodsSkus.slice(0).sort(function (a, b) {
        return a.price - b.price;
      });
    });

    // 海报的列表
    var list = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var posters = goodsDetail.value.posters;
      var tempTarget = Object.keys(posters).map(function (it) {
        return posters[it];
      });
      return tempTarget.filter(function (it) {
        return it === null || it === void 0 ? void 0 : it.url;
      });
    });
    var PosterRef = (0,reactivity_esm_bundler/* ref */.KR)({
      init: function init() {
        return 0;
      }
    });
    // 是否允许生成canvas
    var allowCanvas = (0,reactivity_esm_bundler/* ref */.KR)(false);
    // canvas的配置
    var posterConfig = function posterConfig() {
      var nowData = list.value[currentIndex.value];
      return {
        width: 750,
        height: 1334,
        backgroundColor: '#ffffff',
        debug: false,
        images: [{
          x: 0,
          y: 0,
          width: 750,
          height: 1334,
          url: nowData.url,
          borderRadiusGroup: [0, 0, 0, 0],
          zIndex: 20
        }, {
          x: Number(nowData.qrcodeX) * 2,
          y: Number(nowData.qrcodeY) * 2,
          width: nowData.qrcodeSize * 2,
          height: nowData.qrcodeSize * 2,
          url: qrCode.value || 'https://dev-cdn.anteng.cn/upload/88f732391832df89cd317167b66efa77.png',
          borderRadiusGroup: [16, 16, 16, 16],
          // 不能太低
          zIndex: 999
        }]
      };
    };
    var showPoster = function showPoster() {
      // 创建离屏canvass并获取它的本地图片路径
      var shareImg = function shareImg() {
        var _PosterRef$value;
        allowCanvas.value = true;
        (_PosterRef$value = PosterRef.value) === null || _PosterRef$value === void 0 || _PosterRef$value.init();
        (0,interaction/* showLoading */.Cs)({
          title: '',
          mask: true
        });
        setTimeout(function () {
          (0,interaction/* hideLoading */.RZ)();
        }, 2000);
      };
      if (list.value.length > 0) {
        (0,lib/* usePopup */.OJ)({
          placement: 'content',
          backward: false,
          content: function content() {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "share-popup-content"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "share-title"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u957F\u6309\u4FDD\u5B58\u5230\u624B\u673A\u76F8\u518C(\u70B9\u51FB\u7A7A\u767D\u5904\u5173\u95ED)")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "swiper-content"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(swiper_for_poster, {
              "qrPath": qrCode.value,
              "save": function save(current) {
                currentIndex.value = current;
                shareImg();
              },
              "class": "media-content",
              "list": list.value
            }, null)])]);
          }
        });
      } else {
        (0,lib/* useToast */.dj)('当前商品没有海报');
      }
    };
    // 请求到的二维码base位图片
    var qrCode = (0,reactivity_esm_bundler/* ref */.KR)('');
    var utmEleStore = (0,stores/* utmStore */.Yt)();
    var getUtmData = utmEleStore.getUtmData,
      env = utmEleStore.env,
      generateSpecifiedContentShortChain = utmEleStore.generateSpecifiedContentShortChain;

    // 需要去请求一下该商品的小程序二维码
    var init = function init() {
      generateSpecifiedContentShortChain(getUtmData({
        page: 'packageA/goods/detail',
        goodsId: goodsDetail.value.id + '',
        utmSource: '海报分享',
        utmCampaign: '商品详情页海报'
      })).then(function (res) {
        (0,src_api/* $getWxacodeUnlimit */.qp)({
          page: 'pagesB/goodDetail/GoodDetail',
          scene: "utmCode=".concat(res.data.shortCode),
          env: env
        }).then(function (re) {
          (0,tools/* base64src */.yi)("data:image/png;base64,".concat(re.data)).then(function (filePath) {
            qrCode.value = filePath + '';
          }).catch(function (e) {
            console.log('获取图片地址失败', e);
          });
        });
      });
    };
    init();
    return function () {
      var _slots$promotion;
      if (!goodsDetail.value) return null;
      return [isOffSale.value ? null : (0,runtime_core_esm_bundler/* createVNode */.bF)(SaleTime, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-base-info"
      }, [allowCanvas.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(PosterBuilder/* default */.A, {
        "class": "test-fixed",
        "ref": PosterRef,
        "onSuccess": function onSuccess(e) {
          showShareImageMenu({
            path: e.tempFilePath,
            complete: function complete() {
              allowCanvas.value = false;
            },
            fail: function fail() {}
          });
        },
        "onFail": function onFail() {
          (0,lib/* useToast */.dj)('该图片格式不支持分享');
          allowCanvas.value = false;
        },
        "config": posterConfig()
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "price-info"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "price-share-poster"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "current-price number-font"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "yen"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "value"
      }, [(0,utils/* formatPrice */.$g)(priceSortedSkus.value[0].price)]), priceSortedSkus.value.length > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "minimum"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D77")]), goodsStore.sellingPriceText && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "price-tag"
      }, [goodsStore.sellingPriceText]), priceSortedSkus.value[0].underlinePrice > priceSortedSkus.value[0].price && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "list-price"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "line-through"
      }, [goodsStore.dashPriceText, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \xA5"), priceSortedSkus.value[0].underlinePrice])])]), goodsDetail.value.allowShare == 1 && list.value.length > 0 ? // {false ? (
      // 允许分享,后台有配置海报,展示海报分享按钮,不登录我拿什么信息填utm
      (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "share-poster",
        "onClick": (0,lib/* withLogin */.E6)(function () {
          var _ref2, _list$value;
          // 这里的url有http才会展示
          if (!((_ref2 = ((_list$value = list.value) === null || _list$value === void 0 || (_list$value = _list$value[0]) === null || _list$value === void 0 ? void 0 : _list$value.url) + '') !== null && _ref2 !== void 0 && _ref2.includes('http'))) {
            return useShareMenu({
              type: 'room',
              id: goodsDetail.value.id,
              handler: null
            });
          } else {
            return useShareMenu({
              type: 'room',
              id: goodsDetail.value.id,
              handler: showPoster
            });
          }
        })
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "share",
        "class": "share-icon"
      }, null)]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, null), goodsDetail.value.allowShare == 1 && list.value.length === 0 && // {false && (
      // 允许分享,但是后台没有配置海报 handler 传入null,不显示海报分享按钮
      (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "share-poster",
        "onClick": (0,lib/* withLogin */.E6)(function () {
          useShareMenu({
            type: 'room',
            id: goodsDetail.value.id,
            handler: null
          });
        })
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "share",
        "class": "share-icon"
      }, null)])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "spliter"
      }, null), slots === null || slots === void 0 || (_slots$promotion = slots.promotion) === null || _slots$promotion === void 0 ? void 0 : _slots$promotion.call(slots), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-name"
      }, [goodsDetail.value.title]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "sales-count"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5DF2\u552E "), goodsDetail.value.soldNum, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u4EF6")])])];
    };
  }
}));

// 优惠券模块
var CouponModule = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CouponModule',
  setup: function setup() {
    var showCouponPopup = function showCouponPopup() {
      var _useModal = (0,lib/* useModal */.hS)({
          content: function content() {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-popup"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-popup-header"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "popup-title"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F18\u60E0\u660E\u7EC6")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "close-btn",
              "onClick": function onClick() {
                return close();
              }
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
              "name": "close"
            }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-popup-content"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price-detail"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "estimated-purchase-price"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "total-price"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5428")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price-tips"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9884\u4F30\u5230\u624B\u4EF7")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price-calc"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "calc-title"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65B0\u4EBA\u798F\u5229\u5238\u6EE150\u5143\u53EF\u7528")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "calc-row"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price-content"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price-row"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price-text"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5520")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "price-label"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u552E\u4EF7")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "minus"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("-")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "discount"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "discount-text"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5318")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "tag-list"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "tag"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6EE1\u51CF\u4F18\u60E0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "tag"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9650\u65F6\u4F18\u60E0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "tag"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6EE1499\u51CF40")])])])])])])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "activity-title"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4F18\u60E0\u6D3B\u52A8")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-popup-item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-left"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-price"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "big"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("40")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-desc"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u6EE1\u51CF\u5238")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-right"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-name"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65B0\u4EBA\u798F\u5229\u5238(\u9650\u98861\u5F20)")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-condition"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6307\u5B9A\u5546\u54C1\u53EF\u7528")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-time"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6709\u6548\u671F2023.01.01 - 12.31")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-btn"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53BB\u9886\u53D6")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-popup-item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-left"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-price"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "big"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("25")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-desc"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5E97\u94FA\u6EE1\u51CF\u5238")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-right"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-name"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6D88\u8D39\u6EE1200\u5143\u53EF\u7528")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-condition"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5168\u5E97\u5546\u54C1\u53EF\u7528")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-time"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6709\u6548\u671F2023.01.01 - 12.31")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-btn"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53BB\u9886\u53D6")])])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-popup-item"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-left"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-price"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "big"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("8")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-desc"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5546\u54C1\u6EE1\u51CF\u5238")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-right"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-name"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65B0\u4EBA\u798F\u5229\u5238\u65E0\u95E8\u69DB\u4F7F\u7528")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-condition"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9650\u9886\u53D62\u5F20")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-time"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6709\u6548\u671F2023.01.01 - 12.31")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "coupon-btn disabled"
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5DF2\u9886\u53D6")])])])])]);
          }
        }),
        close = _useModal.close;
    };
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupon-module"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupons-container"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupon-item"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6EE1200\u51CF20")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupon-item"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6EE1500\u51CF40")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "coupon-item"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6EE1100\u52A0200")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "get-coupon",
        "onClick": showCouponPopup
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9886\u5238"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]);
    };
  }
});
;// ./src/packageA/goods/detail/skeleton/index.tsx




/* harmony default export */ var skeleton = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsDetailSkleton',
  setup: function setup() {
    var appStore = (0,lib/* useAppStore */.CU)();
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-skeleton"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "skeleton-good-detail"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "style": {
          height: "".concat(appStore.commonNavigatorHeight, "px")
        }
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "img"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block1"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block2 skeleton"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block3 skeleton"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block4 skeleton"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block5 skeleton"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block6 skeleton"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block7 skeleton"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block8 skeleton"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "block block9 skeleton"
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-action-bar"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "minor-action"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "home"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u9996\u9875")])]),  false && 0, (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "minor-action"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "cart"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D2D\u7269\u8F66")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-action"
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "main-action primary"
      }, null)])])])]);
    };
  }
}));
;// ./src/packageA/goods/detail/empty/index.tsx




/* harmony default export */ var empty = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsDetailEmpty',
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  setup: function setup(props) {
    var appStore = (0,lib/* useAppStore */.CU)();
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-empty"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "style": "height:".concat(appStore.commonNavigatorHeight, "px")
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-empty__content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
        "title": "\u5F53\u524D\u5546\u54C1\u8FC7\u671F\uFF0F\u4E0D\u5B58\u5728",
        "description": props.description
      }, null)])]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js + 1 modules
var clamp = __webpack_require__(7773);
// EXTERNAL MODULE: ./src/components/goods-item/index.tsx
var goods_item = __webpack_require__(9788);
// EXTERNAL MODULE: ./src/packageA/goods/detail/must-know/index.tsx + 1 modules
var must_know = __webpack_require__(9290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tarojs+taro-h5@3.6.19_post_da7972770e25b9a0e4578ad5dbaa81ed/node_modules/@tarojs/taro-h5/dist/api/ui/custom-component.js
var custom_component = __webpack_require__(8274);
;// ./src/packageA/goods/detail/spec-info/useGoodsSkuDetails/index.tsx













function useGoodsSkuDetails_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,runtime_core_esm_bundler/* isVNode */.vv)(s);
}
var GoodsSkuDetails = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsSkuDetails',
  props: {
    goodsId: {
      type: String,
      required: true
    },
    currentSkuId: {
      type: String
    }
  },
  setup: function setup(props) {
    var goodsDetailStore = (0,store/* useGoodsDetailStore */.k1)(props.goodsId);
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(goodsDetailStore),
      goodsDetail = _storeToRefs.goodsDetail,
      goodsSkus = _storeToRefs.goodsSkus;
    var isSingle = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return goodsSkus.value.length === 1;
    });
    var initialIndex = goodsSkus.value.findIndex(function (item) {
      return item.id === props.currentSkuId;
    });
    initialIndex = initialIndex > 0 ? initialIndex : 0;
    var currentIndex = (0,reactivity_esm_bundler/* ref */.KR)(initialIndex);
    var toggle = function toggle(index) {
      if (index === currentIndex.value) {
        return void 0;
      }
      currentIndex.value = index;
      shallowScrollTop.value = scrollTop.value;
      (0,custom_component/* nextTick */.d)(function () {
        shallowScrollTop.value = 0;
      });
    };
    var targetSku = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return goodsSkus.value[currentIndex.value];
    });
    var targetFeeList = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _goodsDetail$value;
      return (_goodsDetail$value = goodsDetail.value) === null || _goodsDetail$value === void 0 || (_goodsDetail$value = _goodsDetail$value.feeList) === null || _goodsDetail$value === void 0 || (_goodsDetail$value = _goodsDetail$value.skuDetails) === null || _goodsDetail$value === void 0 ? void 0 : _goodsDetail$value.find(function (item) {
        return item.path === targetSku.value.$path;
      });
    });
    var scrollTop = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var shallowScrollTop = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var onBuyClick = function onBuyClick(sku) {
      var count = goodsDetail.value.limitNumMin;
      count = count > 0 ? count : 1;
      (0,router/* navigateToOrderPay */.bJ)({
        origin: constants/* ORDER_ORIGIN_DETAIL */.gM,
        goods: {
          gid: goodsDetail.value.id,
          sid: sku.id,
          count: count
        }
      });
    };
    return function () {
      var _slot;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* ScrollView */.BM, {
        "class": "goods-sku-details-scroller",
        "scrollY": true,
        "scrollTop": shallowScrollTop.value,
        "onScroll": function onScroll(e) {
          scrollTop.value = e.detail.scrollTop;
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "goods-sku-details"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": ['sku-list', isSingle.value && 'single']
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Swiper */.RC, {
            "class": "swiper",
            "circular": true,
            "nextMargin": isSingle.value ? undefined : (0,utils/* withUnit */.$o)(100),
            "current": currentIndex.value,
            "onChange": function onChange(e) {
              toggle(e.detail.current);
            }
          }, useGoodsSkuDetails_isSlot(_slot = goodsSkus.value.map(function (item, index) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)(components/* SwiperItem */.wu, null, {
              default: function _default() {
                return [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                  "class": "sku-item"
                }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(goods_item/* default */.A, {
                  "type": "horizontal",
                  "image": item.$image,
                  "name": item.$name,
                  "price": item.price,
                  "listPrice": item.underlinePrice,
                  "action": item.$soldOut ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                    "class": "sku-item__action disabled"
                  }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5DF2\u552E\u7F44")]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                    "class": "sku-item__action",
                    "onClick": function onClick() {
                      onBuyClick(item);
                    }
                  }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u8D2D\u4E70")]),
                  "onClick": function onClick() {
                    toggle(index);
                  }
                }, null)])];
              }
            });
          })) ? _slot : {
            default: function _default() {
              return [_slot];
            }
          })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "goods-sku-details__content"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "title"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8D39\u7528\u8BF4\u660E"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "subtitle"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF08"), targetSku.value.$name, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF09")])]), targetFeeList.value.groups.length === 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "color-secondary"
          }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u65E0\u5185\u5BB9\uFF0C\u8BF7\u4EE5\u5546\u54C1\u8BE6\u60C5\u63CF\u8FF0\u4FE1\u606F\u4E3A\u51C6")]), targetFeeList.value.groups.map(function (group) {
            var _group$remark;
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "group"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "group-title"
            }, [group.name]), group.items.map(function (item) {
              return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "group-item"
              }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "name"
              }, [item.name]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "count"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF08"), item.count, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4EFD\uFF09")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
                "class": "value number-font"
              }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), item.price])]);
            }), ((_group$remark = group.remark) === null || _group$remark === void 0 ? void 0 : _group$remark.length) > 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": "group-remark"
            }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
              "name": "info"
            }, null), (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0"), group.remark])]);
          })]), goodsDetail.value && (0,runtime_core_esm_bundler/* createVNode */.bF)(must_know/* default */.A, {
            "class": "must-know",
            "goodsDetail": goodsDetail.value
          }, null)])];
        }
      });
    };
  }
});
var useGoodsSkuDetials = function useGoodsSkuDetials(options) {
  (0,lib/* useModal */.hS)({
    title: '规格详情',
    className: 'goods-sku-details-modal',
    padding: 0,
    height: 'max',
    content: (0,runtime_core_esm_bundler/* createVNode */.bF)(GoodsSkuDetails, {
      "goodsId": options.goodsId,
      "currentSkuId": options.currentSkuId
    }, null),
    scrollViewDisabled: true
  });
};
/* harmony default export */ var useGoodsSkuDetails = (useGoodsSkuDetials);
;// ./src/packageA/goods/detail/spec-info/store-verif-type/index.tsx

/**
 * 门店核销类型商品规格列表
 */













/* harmony default export */ var store_verif_type = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  setup: function setup() {
    var goodsDetailStore = (0,store/* useGoodsDetailStore */.k1)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(goodsDetailStore),
      goodsDetail = _storeToRefs.goodsDetail,
      goodsSkus = _storeToRefs.goodsSkus;
    var sortedGoodsSkus = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      //仅显示可购买的，最多5个，如果无可购买显示3个
      var visibleCount = isFold.value ? (0,clamp/* default */.A)(goodsSkus.value.filter(function (item) {
        return !item.$soldOut;
      }).length, 0, 5) : goodsSkus.value.length;
      visibleCount = visibleCount === 0 ? 3 : visibleCount;
      return goodsSkus.value.slice(0).sort(function (a, b) {
        return (b.$soldOut ? 0 : 1) - (a.$soldOut ? 0 : 1);
      }).slice(0, visibleCount);
    });
    var isFold = (0,reactivity_esm_bundler/* ref */.KR)(true);
    var onSkuClick = function onSkuClick(sku) {
      useGoodsSkuDetails({
        goodsId: goodsDetail.value.id,
        currentSkuId: sku.id
      });
    };
    var onBuyClick = function onBuyClick(sku) {
      var _goodsDetail$value, _goodsDetail$value2, _goodsDetail$value3;
      var _useGoodsSkuModal = (0,hooks/* useGoodsSkuModal */.oT)({
          skus: goodsSkus.value,
          selectedSkuId: sku.id,
          defaultImage: (_goodsDetail$value = goodsDetail.value) === null || _goodsDetail$value === void 0 || (_goodsDetail$value = _goodsDetail$value.coverImages) === null || _goodsDetail$value === void 0 ? void 0 : _goodsDetail$value[0],
          minCount: (_goodsDetail$value2 = goodsDetail.value) === null || _goodsDetail$value2 === void 0 ? void 0 : _goodsDetail$value2.limitNumMin,
          maxCount: (_goodsDetail$value3 = goodsDetail.value) === null || _goodsDetail$value3 === void 0 ? void 0 : _goodsDetail$value3.limitNumMax,
          onConfirm: function onConfirm(data) {
            (0,router/* navigateToOrderPay */.bJ)({
              origin: constants/* ORDER_ORIGIN_DETAIL */.gM,
              goods: {
                gid: goodsDetailStore.goodsId,
                sid: data.id,
                count: data.count
              }
            }).finally(close);
          }
        }),
        close = _useGoodsSkuModal.close;
    };
    return function () {
      var _sortedGoodsSkus$valu2;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-store-verif-type-spec"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "title"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u8BF7\u9009\u62E9\u89C4\u683C"), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "more",
        "onClick": function onClick() {
          var _sortedGoodsSkus$valu;
          onSkuClick((_sortedGoodsSkus$valu = sortedGoodsSkus.value) === null || _sortedGoodsSkus$valu === void 0 ? void 0 : _sortedGoodsSkus$valu[0]);
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u89C4\u683C\u8BE6\u60C5"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]), (_sortedGoodsSkus$valu2 = sortedGoodsSkus.value) === null || _sortedGoodsSkus$valu2 === void 0 ? void 0 : _sortedGoodsSkus$valu2.map(function (item) {
        var imageURL = item.$image;
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item__image",
          "onClick": function onClick() {
            imageURL && (0,lib/* usePreviewImages */.yj)({
              urls: [imageURL]
            });
          }
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
          "class": "image",
          "mode": "aspectFill",
          "src": imageURL
        }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item__info",
          "onClick": function onClick() {
            onSkuClick(item);
          }
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item__name"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "text"
        }, [item.$name]), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
          "name": "right"
        }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item__price number-font"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "yen"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5")]), item.price, item.underlinePrice > item.price && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item__list-price"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA5"), item.underlinePrice])])]), item.$soldOut ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item__action disabled"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5DF2\u552E\u7F44")]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-item__action",
          "onClick": function onClick() {
            return onBuyClick(item);
          }
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u7ACB\u5373\u8D2D\u4E70")])]);
      }), sortedGoodsSkus.value.length > 3 && isFold.value && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "unfold-btn",
        "onClick": function onClick() {
          isFold.value = false;
        }
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5C55\u5F00\u66F4\u591A"), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "down"
      }, null)])]);
    };
  }
}));
;// ./src/packageA/goods/detail/spec-info/index.tsx










/* harmony default export */ var spec_info = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsDetailSpecInfo',
  props: {
    goodsDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var defaultImage = props.goodsDetail.coverImages[0];
    var _onClick = function onClick() {
      var _props$goodsDetail$li;
      var _useGoodsSkuModal = (0,hooks/* useGoodsSkuModal */.oT)({
          skus: props.goodsDetail.goodsSkus,
          defaultImage: defaultImage,
          minCount: (_props$goodsDetail$li = props.goodsDetail.limitNumMin) !== null && _props$goodsDetail$li !== void 0 ? _props$goodsDetail$li : 1,
          maxCount: props.goodsDetail.limitNumMax,
          actions: [{
            text: '加入购物车',
            type: 'minor',
            onClick: function onClick(data) {
              (0,stores/* useCartStore */.x3)().addItem({
                goodsId: props.goodsDetail.id,
                goodsSkuId: data.id,
                count: data.count
              }).finally(close);
            }
          }, {
            text: '立即购买',
            type: 'primary',
            onClick: function onClick(data) {
              close();
              (0,router/* navigateToOrderPay */.bJ)({
                goods: {
                  gid: props.goodsDetail.id,
                  sid: data.id,
                  count: data.count
                }
              });
            }
          }]
        }),
        close = _useGoodsSkuModal.close;
    };
    var _useGoodsSku = (0,hooks/* useGoodsSku */.V$)({
        skus: props.goodsDetail.goodsSkus,
        defaultImage: defaultImage,
        minCount: 1
      }),
      skus = _useGoodsSku.skus,
      specs = _useGoodsSku.specs,
      images = _useGoodsSku.images,
      matchedSkus = _useGoodsSku.matchedSkus;
    var result = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return matchedSkus.value.length === 1 ? matchedSkus.value[0] : null;
    });
    return function () {
      if (props.goodsDetail.type === constants/* GOODS_TYPE_STORE_VERIFICATION */.uz) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "goods-detail-spec-info"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(store_verif_type, null, null)]);
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-spec-info",
        "onClick": _onClick
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "current-selected"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "current-selected-label"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5DF2\u9009")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "current-selected-value"
      }, [result.value ? result.value.specs.map(function (item) {
        return item.v;
      }).join('／') : '请选择']), (0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)]), images.value.length > 1 && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "spec-optional-list"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "spec-thumbnails"
      }, [images.value.map(function (image) {
        return image ? (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-thumbnail-item"
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(components/* Image */._V, {
          "class": "image",
          "src": (0,src_utils/* buildImgUrl */.Z5)(),
          "mode": "aspectFill"
        }, null)]) : (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "spec-thumbnail-item"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u6682\u65E0\u56FE\u7247")]);
      })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "spec-optional-count"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u5171 "), images.value.length, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" \u79CD"), specs.value[0].name, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53EF\u9009")])])]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(7970);
;// ./src/packageA/goods/detail/other-info/index.tsx








/* harmony default export */ var other_info = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsDetailOtherInfo',
  props: {
    goodsDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var goodsDetailStoreEntities = (0,store/* useGoodsDetailStore */.k1)();
    var onShipClick = function onShipClick() {
      goodsDetailStoreEntities.updatePageAddress();
    };
    var propertiesRef = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _props$goodsDetail$ba;
      var _ref = (_props$goodsDetail$ba = props.goodsDetail.basicDescAttributeJson) !== null && _props$goodsDetail$ba !== void 0 ? _props$goodsDetail$ba : {},
        _ref$properties = _ref.properties,
        properties = _ref$properties === void 0 ? [] : _ref$properties,
        _ref$values = _ref.values,
        values = _ref$values === void 0 ? {} : _ref$values;
      return properties.map(function (item) {
        return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, item), {}, {
          value: values["id_".concat(item.id)]
        });
      });
    });
    var onPropertyClick = function onPropertyClick() {
      if (propertiesRef.value.length === 0) return void 0;
      (0,lib/* useModal */.hS)({
        title: '商品参数',
        content: (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "class": "ship-modal"
        }, [propertiesRef.value.map(function (item) {
          return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "property-item"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "label"
          }, [item.name]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "value"
          }, [Array.isArray(item.value) ? item.value.join('、') : item.value])]);
        }), propertiesRef.value.length === 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* EmptyStatus */.yC, {
          "title": "\u65E0\u53C2\u6570",
          "description": "\u8BF7\u4EE5\u5546\u54C1\u8BE6\u60C5\u4E3A\u51C6"
        }, null)]),
        placement: 'bottom'
      });
    };

    /** 发货地，获取 省 + 市 */
    var shipmentAddress = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      try {
        return props.goodsDetail.freightTemplate.shippingDistrict.slice(0, 2).map(function (item) {
          return item.value.replace(/(省|市|自治区|自治州|县|区)$/g, '');
        }).join(' ');
      } catch (err) {
        return '未知';
      }
    });

    /** 收货地，获取 市 + 区 */
    var contactAddress = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return '';
    });
    return function () {
      if (props.goodsDetail.type !== constants/* GOODS_TYPE_ENTITY */.i4) {
        return null;
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-other-info"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item",
        "onClick": onShipClick
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item__label"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53D1\u8D27")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item__content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [shipmentAddress.value]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
        "class": "split"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\xA0\u4E28\xA0")]), (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u514D\u8FD0\u8D39")])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item__suffix"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item",
        "onClick": onPropertyClick
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item__label"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u53C2\u6570")]), propertiesRef.value.length === 0 ? (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item__content properties empty"
      }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\u4EE5\u5546\u54C1\u8BE6\u60C5\u4FE1\u606F\u4E3A\u51C6")])]) : (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item__content properties"
      }, [propertiesRef.value.map(function (item, index) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [index !== 0 && (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
          "class": "split"
        }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("\uFF0F")]), item.name]);
      })]), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "info-item__suffix"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(src/* Icon */.In, {
        "name": "right"
      }, null)])])])]);
    };
  }
}));
;// ./src/packageA/goods/detail/detail-info/index.tsx




/* harmony default export */ var detail_info = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodsDetailInfo',
  props: {
    goodsDetail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    return function () {
      var _props$goodsDetail;
      if (!((_props$goodsDetail = props.goodsDetail) !== null && _props$goodsDetail !== void 0 && _props$goodsDetail.detail)) {
        return null;
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-info"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* RichText */.sD, {
        "class": "goods-detail-info__content",
        "content": props.goodsDetail.detail
      }, null)]);
    };
  }
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findLastIndex.js
var findLastIndex = __webpack_require__(6461);
// EXTERNAL MODULE: ./src/components/suitable-shops/index.tsx
var suitable_shops = __webpack_require__(5577);
;// ./src/packageA/goods/detail/suitable-shops/index.tsx





/* harmony default export */ var detail_suitable_shops = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  setup: function setup() {
    var goodsDetailStore = (0,store/* useGoodsDetailStore */.k1)();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(goodsDetailStore),
      goodsDetail = _storeToRefs.goodsDetail;
    return function () {
      var _goodsDetail$value;
      // 仅门店核销类型商品显示
      if (((_goodsDetail$value = goodsDetail.value) === null || _goodsDetail$value === void 0 ? void 0 : _goodsDetail$value.type) !== constants/* GOODS_TYPE_STORE_VERIFICATION */.uz) {
        return null;
      }
      if (goodsDetail.value.stores.length === 0) {
        return null;
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(suitable_shops/* default */.Ay, {
        "goodsId": goodsDetail.value.id,
        "total": goodsDetail.value.storeNum,
        "shops": goodsDetail.value.stores.map(function (item) {
          var _item$contactInfo;
          return {
            id: item.id,
            name: item.name,
            openAt: item.openingAt,
            closeAt: item.closingAt,
            address: item.address,
            longitude: item.longitude,
            latitude: item.latitude,
            distance: item.distance ? item.distance / 1000 : undefined,
            tell: (_item$contactInfo = item.contactInfo) === null || _item$contactInfo === void 0 || (_item$contactInfo = _item$contactInfo[0]) === null || _item$contactInfo === void 0 ? void 0 : _item$contactInfo.contactPhone
          };
        })
      }, null);
    };
  }
}));
// EXTERNAL MODULE: ./src/components/recommended/index.tsx
var recommended = __webpack_require__(5303);
// EXTERNAL MODULE: ./src/packageA/goods/detail/promotion/index.tsx
var detail_promotion = __webpack_require__(6301);
;// ./src/packageA/goods/detail/index.tsx




















var recommendRule = (0,reactivity_esm_bundler/* ref */.KR)((0,storage/* getStorageSync */.JF)('recommendRule'));
/* harmony default export */ var detail = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'GoodDetailPage',
  setup: function setup() {
    var appStore = (0,lib/* useAppStore */.CU)();
    var commonNavigatorHeight = appStore.commonNavigatorHeight;

    // 路由可能缺失 gid（本地预览或直接进入），兜底一个本地商品ID，避免页面判空
    var goodsId = taro/* default.useRouter */.Ay.useRouter().params.gid || 'demo-goods-001';
    var goodsDetailStore = (0,store/* useGoodsDetailStore */.k1)(goodsId);
    goodsDetailStore.getGoodsDetail();
    var _storeToRefs = (0,pinia/* storeToRefs */.bP)(goodsDetailStore),
      detailRef = _storeToRefs.goodsDetail,
      isLoading = _storeToRefs.isLoading,
      errorMsg = _storeToRefs.errorMsg;
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(function () {
      (0,store/* useGoodsDetailStoreDispose */.Pt)(goodsDetailStore);
    });

    // 设置分享信息
    (0,lib/* useShareAppMessage */.vv)(function () {
      var _detailRef$value$shar, _detailRef$value, _detailRef$value2, _detailRef$value$shar2, _detailRef$value3, _detailRef$value4;
      return {
        title: (_detailRef$value$shar = (_detailRef$value = detailRef.value) === null || _detailRef$value === void 0 ? void 0 : _detailRef$value.shareTitle) !== null && _detailRef$value$shar !== void 0 ? _detailRef$value$shar : (_detailRef$value2 = detailRef.value) === null || _detailRef$value2 === void 0 ? void 0 : _detailRef$value2.title,
        imageUrl: (_detailRef$value$shar2 = (_detailRef$value3 = detailRef.value) === null || _detailRef$value3 === void 0 ? void 0 : _detailRef$value3.shareImage) !== null && _detailRef$value$shar2 !== void 0 ? _detailRef$value$shar2 : (_detailRef$value4 = detailRef.value) === null || _detailRef$value4 === void 0 || (_detailRef$value4 = _detailRef$value4.coverImages) === null || _detailRef$value4 === void 0 ? void 0 : _detailRef$value4[0]
      };
    });

    /** 是否允许分享 */
    var enableShare = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value5;
      return !(((_detailRef$value5 = detailRef.value) === null || _detailRef$value5 === void 0 ? void 0 : _detailRef$value5.allowShare) === constants/* GOODS_SHARE_ENABLE_OFF */.zw);
    });
    var PageContent = function PageContent() {
      if (isLoading.value) return (0,runtime_core_esm_bundler/* createVNode */.bF)(skeleton, null, null);
      if (!detailRef.value) return (0,runtime_core_esm_bundler/* createVNode */.bF)(empty, {
        "description": errorMsg.value
      }, null);
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(GoodDetailPage, {
        "detail": detailRef.value
      }, null);
    };

    /* ---------------------------------- 电梯导航 ---------------------------------- */
    var pageTabs = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      var _detailRef$value7;
      if (recommendRule.value.commodityDetail === 0) {
        var _detailRef$value6;
        return [{
          title: '商品',
          value: 'tab-goods',
          visible: true
        }, {
          title: '须知',
          value: 'tab-must-know',
          visible: !!((_detailRef$value6 = detailRef.value) !== null && _detailRef$value6 !== void 0 && _detailRef$value6.mustKnow)
        }, {
          title: '详情',
          value: 'tab-details',
          visible: true
        }].filter(function (item) {
          return item.visible;
        });
      }
      return [{
        title: '商品',
        value: 'tab-goods',
        visible: true
      }, {
        title: '须知',
        value: 'tab-must-know',
        visible: !!((_detailRef$value7 = detailRef.value) !== null && _detailRef$value7 !== void 0 && _detailRef$value7.mustKnow)
      }, {
        title: '详情',
        value: 'tab-details',
        visible: true
      }, {
        title: '推荐',
        value: 'recommend',
        visible: true
      }].filter(function (item) {
        return item.visible;
      });
    });
    var currentTabIndex = (0,reactivity_esm_bundler/* ref */.KR)(0);
    var anchorQuery = (0,wxml/* createSelectorQuery */._Y)();
    anchorQuery.selectAll('.anchor-item').boundingClientRect();
    anchorQuery.select('.anchor-content').boundingClientRect();
    anchorQuery.selectViewport().scrollOffset();
    var anchorBarStyle = (0,reactivity_esm_bundler/* ref */.KR)('');
    var calcAnchorBarStyle = function calcAnchorBarStyle() {
      anchorQuery.exec(function (res) {
        var _res$0$currentTabInde, _res$, _res$0$currentTabInde2;
        anchorBarStyle.value = "\n            left: ".concat(((_res$0$currentTabInde = res[0][currentTabIndex.value]) === null || _res$0$currentTabInde === void 0 ? void 0 : _res$0$currentTabInde.left) - ((_res$ = res[1]) === null || _res$ === void 0 ? void 0 : _res$.left), "px;\n            width:").concat((_res$0$currentTabInde2 = res[0][currentTabIndex.value]) === null || _res$0$currentTabInde2 === void 0 ? void 0 : _res$0$currentTabInde2.width, "px;\n          ");
      });
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(function () {
      return calcAnchorBarStyle();
    });
    (0,runtime_core_esm_bundler/* watch */.wB)(function () {
      return [currentTabIndex.value, pageTabs.value];
    }, function () {
      calcAnchorBarStyle();
    });
    var tabQuery = (0,wxml/* createSelectorQuery */._Y)();
    tabQuery.selectAll('.goods-detail__tab').boundingClientRect();
    tabQuery.selectViewport().scrollOffset();
    var ignoreScrollAnchor = (0,reactivity_esm_bundler/* ref */.KR)(false);
    var onAnchorClick = function onAnchorClick(index) {
      ignoreScrollAnchor.value = true;
      setTimeout(function () {
        ignoreScrollAnchor.value = false;
      }, 600);
      currentTabIndex.value = index;
      tabQuery.exec(function (res) {
        (0,ui_scroll/* pageScrollTo */.o)({
          scrollTop: res[0][currentTabIndex.value].top + res[1].scrollTop - commonNavigatorHeight - 10
        });
      });
    };
    var calcTabIndex = function calcTabIndex() {
      if (ignoreScrollAnchor.value) return void 0;
      tabQuery.exec(function (res) {
        var index = (0,findLastIndex/* default */.A)(res[0], function (item) {
          return (item === null || item === void 0 ? void 0 : item.top) - commonNavigatorHeight <= 10;
        });
        index = index > 0 ? index : 0;
        currentTabIndex.value = index;
      });
    };
    taro/* default.usePageScroll */.Ay.usePageScroll(function () {
      calcTabIndex();
    });

    /* -------------------------------- 电梯导航 End -------------------------------- */

    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(lib/* BasePage */.vo, {
        "enableGlobalShare": false,
        "enableShareAppMessage": enableShare.value,
        "class": "goods-detail-page",
        "tabsPlaceholder": true,
        "navigator": {
          title: isLoading.value ? '' : detailRef.value ? detailRef.value.title : '页面已失效',
          fixedTitle: (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "goods-detail__anchor"
          }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "anchor-content"
          }, [pageTabs.value.map(function (item, index) {
            return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
              "class": ['anchor-item', index === currentTabIndex.value && 'active'],
              "onClick": function onClick() {
                onAnchorClick(index);
              }
            }, [item.title]);
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": "anchor-bar",
            "style": anchorBarStyle.value
          }, null)])])
        }
      }, {
        default: function _default() {
          return [(0,runtime_core_esm_bundler/* createVNode */.bF)(PageContent, null, null)];
        }
      });
    };
  }
}));
var GoodDetailPage = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    detail: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var detailRef = (0,runtime_core_esm_bundler/* computed */.EW)(function () {
      return props.detail;
    });
    var promotionPagination = (0,store/* useGoodsDetailStore */.k1)().getPromotionPagination();
    return function () {
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": "goods-detail-page__content"
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(detail_images_swiper, {
        "class": "goods-detail__tab",
        "images": detailRef.value.coverImages
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(base_info, null, {
        promotion: function promotion() {
          var _detailRef$value8;
          return (0,runtime_core_esm_bundler/* createVNode */.bF)(detail_promotion/* default */.A, {
            "pagination": promotionPagination,
            "goodsId": (_detailRef$value8 = detailRef.value) === null || _detailRef$value8 === void 0 ? void 0 : _detailRef$value8.id
          }, null);
        }
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(spec_info, {
        "goodsDetail": detailRef.value
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(other_info, {
        "goodsDetail": detailRef.value
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(detail_suitable_shops, null, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(must_know/* default */.A, {
        "class": "goods-detail__tab",
        "goodsDetail": detailRef.value
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(detail_info, {
        "class": "goods-detail__tab",
        "goodsDetail": detailRef.value
      }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(recommended/* default */.A, {
        "class": [recommendRule.value.commodityDetail !== 0 && 'recommend goods-detail__tab'],
        "type": recommendRule.value.commodityDetail,
        "categoryId": detailRef.value.categoryIds
      }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)(action_bar, {
        "goodsDetail": detailRef.value
      }, null)]);
    };
  }
});

/***/ }),

/***/ 5303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7970);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4243);
/* harmony import */ var _goods_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9788);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3058);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5816);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4078);


// 推荐组件






/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'Recommended',
  props: {
    // 0 空 1 猜你喜欢 2 热门商品 3 最近热销
    type: {
      type: Number,
      default: 0
    },
    categoryId: {
      type: Array,
      default: function _default() {
        return [1];
      }
    }
  },
  setup: function setup(props) {
    /** 前端分页 */
    var fePagination = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)(false);
    var _usePagination = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_6__/* .usePagination */ .WQ)({
        requestHandler: function requestHandler(params) {
          return (0,_api__WEBPACK_IMPORTED_MODULE_5__/* .requestGetGoodsListByRule */ .ZR)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, params), {}, {
            size: 10,
            showType: props.type,
            categoryIds: props.type === 1 ? props.categoryId.join(',') : undefined
          })).then(function (res) {
            var _res$data;
            if (((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.records) === null || _res$data === void 0 ? void 0 : _res$data.length) > 10) {
              fePagination.value = true;
            }
            return res;
          });
        }
      }),
      data = _usePagination.data,
      fetchData = _usePagination.fetchData,
      CommonPaginationStatus = _usePagination.CommonPaginationStatus;
    var page = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .KR)(1);
    var goods = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      if (fePagination.value) {
        return data.value.slice(0, page.value * 10);
      }
      return data.value;
    });
    function groupArray(arr, columns) {
      var result = new Array(columns).fill(null).map(function () {
        return [];
      });
      for (var i = 0; i < arr.length; i++) {
        var columnIndex = i % columns;
        result[columnIndex].push(arr[i]);
      }
      return result;
    }
    var clos = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      if (goods.value.length === 0) {
        return [];
      } else {
        return groupArray(goods.value, 2);
      }
    });
    var init = function init() {
      if (props.type === 0) {
        return void 0;
      }
      fetchData();
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .onMounted */ .sV)(function () {
      return init();
    });
    var getData = function getData() {
      if (fePagination.value) {
        page.value++;
      } else {
        fetchData();
      }
    };
    return function () {
      if (!(data.value.length > 0)) {
        return null;
      }
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommended"
      }, [props.type === 0 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", null, null), props.type === 1 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommend-title"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u2014 \u731C\u4F60\u559C\u6B22 \u2014")]), props.type === 2 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommend-title"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u2014 \u70ED\u95E8\u5546\u54C1 \u2014")]), props.type === 3 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "recommend-title"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u2014 \u8FD1\u671F\u70ED\u9500 \u2014")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "goods-list-content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "c_goods-list"
      }, [clos.value.map(function (col, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": ['c_goods-list__col', index === 0 && 'col-1']
        }, [col.map(function (item) {
          if (!item) return null;
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_goods_item__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            "type": "vertical",
            "image": item.coverImages[0],
            "name": item.title,
            "price": item.priceMin,
            "priceMax": item.priceMax,
            "listPrice": item.underlinePrice,
            "onClick": function onClick() {
              return (0,_router__WEBPACK_IMPORTED_MODULE_4__/* .navigateToGoodsDetail */ .C7)(item.id);
            }
          }, null);
        })]);
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(CommonPaginationStatus, null, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_6__/* .ScrollAnchor */ .V8, {
        "onReach": getData
      }, null)]);
    };
  }
}));

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

/***/ 6301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _anteng_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5788);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8892);
/* harmony import */ var _anteng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2344);
/* harmony import */ var _constants_discount_coupon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3674);






/* harmony default export */ __webpack_exports__.A = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'GoodsDetailPromotion',
  props: {
    pagination: {
      type: Object,
      required: true
    },
    scene: {
      type: Number,
      default: _constants_discount_coupon__WEBPACK_IMPORTED_MODULE_4__/* .DiscountCouponScene */ .sj.goodsDetail
    },
    goodsId: String,
    goodsGroupId: String
  },
  setup: function setup(props) {
    var pagination = props.pagination;
    var data = pagination.data;
    return function () {
      if (data.value.length === 0) {
        return null;
      }
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "goods-detail-promotion",
        "onClick": function onClick() {
          (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useReceiveCoupon */ .bs)(pagination, {
            scene: props.scene,
            goodsId: props.goodsId,
            goodsGroupId: props.goodsGroupId
          });
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "coupon-list"
      }, [data.value.map(function (item) {
        var v = (0,_anteng_utils__WEBPACK_IMPORTED_MODULE_3__/* .formatPrice */ .$g)(item.discountAmount / 100);
        if (item.thresholdAmount > 0) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "coupon-item number-font"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u6EE1 "), (0,_anteng_utils__WEBPACK_IMPORTED_MODULE_3__/* .formatPrice */ .$g)(item.thresholdAmount / 100), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)(" \u51CF "), v]);
        } else if (item.thresholdAmount === 0) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "coupon-item"
          }, [v, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)(" \u5143\u65E0\u95E8\u69DB")]);
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
          "class": "coupon-item"
        }, [v, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)(" \u5143\u5238")]);
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
        "class": "get-btn"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u4F18\u60E0"), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_ui__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
        "name": "right"
      }, null)])]);
    };
  }
}));

/***/ }),

/***/ 6404:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pt: function() { return /* binding */ useGoodsDetailStoreDispose; },
/* harmony export */   k1: function() { return /* binding */ useGoodsDetailStore; }
/* harmony export */ });
/* unused harmony export defineGoodsDetailStore */
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7970);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8831);
/* harmony import */ var E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7420);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(419);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9700);
/* harmony import */ var _api_goods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5954);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1880);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4238);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6384);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7468);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6552);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4078);
/* harmony import */ var _anteng_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2344);
/* harmony import */ var _api_discount_coupon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7591);












var stores = {};

/** 定义下单页面全局状态 store */
var defineGoodsDetailStore = function defineGoodsDetailStore(goodsId) {
  return (0,pinia__WEBPACK_IMPORTED_MODULE_5__/* .defineStore */ .nY)("goods-detail-".concat(goodsId), function () {
    var appStore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .useAppStore */ .CU)();
    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_5__/* .storeToRefs */ .bP)(appStore),
      lazyNow = _storeToRefs.lazyNow;
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(false);
    var errorMsg = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)('');
    var goodsDetail = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)();
    var storageLastAddress = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__/* .getStorageSync */ .JF)('lastAddress');
    var lastAddress = storageLastAddress ? (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .safeParse */ .xL)(storageLastAddress) : null;
    // 当前页面共享的用户地址
    var pageAddress = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .KR)(lastAddress);
    // 更改用户地址
    var updatePageAddress = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .withLogin */ .E6)(function () {
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__/* .chooseAddress */ .Q)({
        success: function success(res) {
          pageAddress.value = res;
          (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__/* .setStorageSync */ .$c)('lastAddress', res);
        },
        fail: function fail() {
          // TODO 支持 H5 设置收货地址，微信 H5 可以使用 wx.openAddress 能力
          if (true) {
            (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .useToast */ .dj)('h5暂未支持地址选择2');
          }
        },
        complete: function complete() {}
      });
    });
    var getGoodsDetail = /*#__PURE__*/function () {
      var _ref = (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(/*#__PURE__*/(0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)().m(function _callee(options) {
        var res, _err$response, _t;
        return (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (goodsId) {
                _context.n = 1;
                break;
              }
              return _context.a(2, Promise.reject(new Error('缺失 GoodsId ')));
            case 1:
              if (!(options !== null && options !== void 0 && options.silentRefresh)) {
                isLoading.value = true;
              }
              errorMsg.value = '';
              _context.p = 2;
              _context.n = 3;
              return (0,_api_goods__WEBPACK_IMPORTED_MODULE_6__/* .getGoodsDetail */ ._P)(goodsId);
            case 3:
              res = _context.v;
              if (!(res.code === 200)) {
                _context.n = 4;
                break;
              }
              goodsDetail.value = res.data;
              _context.n = 5;
              break;
            case 4:
              errorMsg.value = res.msg;
              return _context.a(2, Promise.reject(new Error(res.msg)));
            case 5:
              _context.n = 8;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              if (!((_err$response = _t.response) !== null && _err$response !== void 0 && (_err$response = _err$response.data) !== null && _err$response !== void 0 && _err$response.msg)) {
                _context.n = 7;
                break;
              }
              errorMsg.value = _t.response.data.msg;
              return _context.a(2, Promise.reject(_t.response.data.msg));
            case 7:
              return _context.a(2, Promise.reject(_t));
            case 8:
              _context.p = 8;
              isLoading.value = false;
              return _context.f(8);
            case 9:
              return _context.a(2);
          }
        }, _callee, null, [[2, 6, 8, 9]]);
      }));
      return function getGoodsDetail(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    /** 静默刷新 */
    var silentRefresh = function silentRefresh() {
      appStore.resetLazyNow();
      return getGoodsDetail({
        silentRefresh: true
      });
    };

    /** 是否已下架 */
    var isOffSale = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
      var _goodsDetail$value;
      return ((_goodsDetail$value = goodsDetail.value) === null || _goodsDetail$value === void 0 ? void 0 : _goodsDetail$value.status) === _constants__WEBPACK_IMPORTED_MODULE_10__/* .COMMON_STATUS_OFF */ .nf;
    });

    /** 是否限时售卖 */
    var isSaleTimeLimited = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
      var _goodsDetail$value2;
      return ((_goodsDetail$value2 = goodsDetail.value) === null || _goodsDetail$value2 === void 0 ? void 0 : _goodsDetail$value2.onsaleMode) === _constants__WEBPACK_IMPORTED_MODULE_10__/* .GOODS_ON_SALE_MODE_TIMING */ .se;
    });
    /** 限时售卖：待开售 */
    var isWaitingForSale = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
      var _goodsDetail$value3;
      if (!isSaleTimeLimited.value || !((_goodsDetail$value3 = goodsDetail.value) !== null && _goodsDetail$value3 !== void 0 && _goodsDetail$value3.onsaleStartAt)) return false;
      return lazyNow.value.isBefore(dayjs__WEBPACK_IMPORTED_MODULE_11___default()(goodsDetail.value.onsaleStartAt));
    });
    /** 限时售卖：售卖结束 */
    var isEndOfSale = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
      var _goodsDetail$value4;
      if (!isSaleTimeLimited.value || !((_goodsDetail$value4 = goodsDetail.value) !== null && _goodsDetail$value4 !== void 0 && _goodsDetail$value4.onsaleEndAt)) return false;
      return lazyNow.value.isAfter(dayjs__WEBPACK_IMPORTED_MODULE_11___default()(goodsDetail.value.onsaleEndAt));
    });

    /** 停止监听当天售卖时间始末点自动刷新定时器 */
    var stopSalesTimeRefresh = function stopSalesTimeRefresh() {};
    /** 在当天售卖时间内 */
    var isWithinTodaySalesTime = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
      var _ref2 = goodsDetail.value,
        buyStartAt = _ref2.buyStartAt,
        buyEndAt = _ref2.buyEndAt;
      if (buyStartAt && buyEndAt) {
        var start = (0,_anteng_utils__WEBPACK_IMPORTED_MODULE_13__/* .safeDayjs */ .R8)(buyStartAt);
        var end = (0,_anteng_utils__WEBPACK_IMPORTED_MODULE_13__/* .safeDayjs */ .R8)(buyEndAt);
        if (lazyNow.value.isBefore(start)) {
          stopSalesTimeRefresh();
          // 设定当日售卖时间开始定时器，到达后重新触发计算
          var _useTiming = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .useTiming */ .yJ)(buyStartAt, function () {
              appStore.resetLazyNow();
            }),
            stopTimeout = _useTiming.stopTimeout;
          stopSalesTimeRefresh = stopTimeout;
          return false;
        } else if (lazyNow.value.isAfter(end)) {
          return false;
        }
        var result = lazyNow.value.isAfter(start) && lazyNow.value.isBefore(end);
        if (result) {
          stopSalesTimeRefresh();
          // 设定当日售卖时间结束定时器，到达后重新触发计算
          var _useTiming2 = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .useTiming */ .yJ)(buyEndAt, function () {
              appStore.resetLazyNow();
            }),
            _stopTimeout = _useTiming2.stopTimeout;
          stopSalesTimeRefresh = _stopTimeout;
        }
        return result;
      }
      return true;
    });

    /** 是否在售 */
    var isOnSale = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
      if (isEndOfSale.value) {
        return false;
      }
      if (isSaleTimeLimited.value) {
        return !isWaitingForSale.value && !isEndOfSale.value;
      }
      return true;
    });

    /** 经过二次计算的商品Sku列表，额外包含多个以 $ 开头命名的属性 */
    var goodsSkus = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(function () {
      var _goodsDetail$value$go;
      if (!goodsDetail.value) return [];
      var minCount = goodsDetail.value.limitNumMin;
      return (_goodsDetail$value$go = goodsDetail.value.goodsSkus) === null || _goodsDetail$value$go === void 0 ? void 0 : _goodsDetail$value$go.map(function (item) {
        var _item$specs$0$image, _goodsDetail$value5;
        return (0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, item), {}, {
          /** 规格ID路径 */
          $path: item.specs.map(function (spec) {
            return spec.vId;
          }).join(','),
          /** 规格名 */
          $name: item.specs.map(function (spec) {
            return spec.v;
          }).join(','),
          /** 规格图片，若未设置则为主图第一张 */
          $image: (_item$specs$0$image = item.specs[0].image) !== null && _item$specs$0$image !== void 0 ? _item$specs$0$image : (_goodsDetail$value5 = goodsDetail.value) === null || _goodsDetail$value5 === void 0 ? void 0 : _goodsDetail$value5.coverImages[0],
          /** 售罄，缺货 */
          $soldOut: item.stock === 0 || item.stock < minCount
        });
      });
    });

    // store 被销毁前需移除事件循环中的引用（包含但不限于定时器），使得内存能够被正确回收
    // 如果打开多个相同的商品详情页面，这些依赖的是同一个 store，只有当最后一个依赖源被销毁后才会触发 onUnmounted 钩子
    (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .onUnmounted */ .hi)(function () {
      stopSalesTimeRefresh();
    });
    var promotionPagination = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .usePagination */ .WQ)({
      requestHandler: function requestHandler(params) {
        return (0,_api_discount_coupon__WEBPACK_IMPORTED_MODULE_14__/* .$getDiscountCouponReceiveList */ .nr)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,E_anteng_web_mini_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, params), {}, {
          size: 100,
          goodsId: goodsId,
          // supplierId: ,
          showStatus: true
        }));
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .onMounted */ .sV)(function () {
      // 立即获取优惠券，与商品详情接口并发
      promotionPagination.fetchData();
    });
    var getPromotionPagination = function getPromotionPagination() {
      return promotionPagination;
    };
    var userSore = (0,_anteng_core__WEBPACK_IMPORTED_MODULE_12__/* .useUserStore */ .kH)();
    (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .wB)(function () {
      return userSore.isLogin;
    }, function () {
      // 登录状态变更，刷新优惠券列表
      promotionPagination.refreshData();
    });
    return {
      goodsId: goodsId,
      goodsDetail: goodsDetail,
      getGoodsDetail: getGoodsDetail,
      pageAddress: pageAddress,
      updatePageAddress: updatePageAddress,
      refresh: getGoodsDetail,
      silentRefresh: silentRefresh,
      isLoading: isLoading,
      errorMsg: errorMsg,
      goodsSkus: goodsSkus,
      isOffSale: isOffSale,
      isOnSale: isOnSale,
      isWaitingForSale: isWaitingForSale,
      isEndOfSale: isEndOfSale,
      isSaleTimeLimited: isSaleTimeLimited,
      isWithinTodaySalesTime: isWithinTodaySalesTime,
      getPromotionPagination: getPromotionPagination
    };
  });
};
var useGoodsDetailStore = function useGoodsDetailStore(goodsId) {
  if (goodsId) {
    try {
      (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .provide */ .Gt)('goodsId', goodsId);
    } catch (err) {}
  }
  var pageId = goodsId !== null && goodsId !== void 0 ? goodsId : (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .inject */ .WQ)('goodsId');
  if (!pageId) {
    throw new Error('useGoodsDetailStore 必须在商品详情页内使用，或手动传入商品Id');
  }
  // TODO 如果重复进入同一个商品详情会怎么样？
  var name = "goods-detail-".concat(pageId);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (stores[name]) {
    return stores[name].apply(stores, args);
  }
  var store = defineGoodsDetailStore(pageId);
  stores[name] = store;
  return store.apply(void 0, args);
};
var useGoodsDetailStoreDispose = function useGoodsDetailStoreDispose(store) {
  var goodsId = store.goodsId;
  delete stores["goods-detail-".concat(goodsId)];
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.getCurrentPages();
  var t = pages.find(function (item) {
    return (item.route === '/goods/detail' || item.route === 'packageA/goods/detail') && item.$taroParams.gid === goodsId;
  });
  if (t) {
    return void 0;
  }
  console.log("[Pinia]\uFF1A\u79FB\u9664 goods-detail-".concat(goodsId));
  store.$dispose();
};

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

/***/ 9476:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=616.js.map