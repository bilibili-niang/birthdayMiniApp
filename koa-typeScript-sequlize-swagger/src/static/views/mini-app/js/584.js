"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[584],{

/***/ 2584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4243);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6618);
/* harmony import */ var _utils_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6937);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2422);






/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'CommunityDetailPage',
  setup: function setup() {
    // 假数据：实际接入后端后替换
    var MAX_IMG = 10;
    var safeIndex = function safeIndex(n) {
      return (n % MAX_IMG + MAX_IMG) % MAX_IMG + 1;
    };
    var randomHasVideo = Math.random() < 0.5;
    var detail = {
      id: 'demo-detail',
      title: '今日份随手拍｜轻烟雾眼妆',
      author: {
        name: 'peachoney',
        avatar: (0,_utils_test__WEBPACK_IMPORTED_MODULE_4__/* .buildImgUrl */ .Z)(safeIndex(3))
      },
      likes: 5520,
      content: '秋色正浓，随手记录一些日常妆容与心情碎片。眼影选择了偏橘棕色系，搭配薄涂唇釉，整体更适合通勤～',
      images: [1, 2, 3, 4, 5].map(function (i) {
        return (0,_utils_test__WEBPACK_IMPORTED_MODULE_4__/* .buildImgUrl */ .Z)(safeIndex(i));
      }),
      // 演示：随机决定是否存在视频。接入后端时替换为真实字段。
      video: randomHasVideo ? _api_request__WEBPACK_IMPORTED_MODULE_5__/* .REQUEST_DOMAIN */ .F7 + '/video/1.mp4' : undefined
    };
    var shuffle = function shuffle(arr) {
      return arr.map(function (item) {
        return {
          item: item,
          sort: Math.random()
        };
      }).sort(function (a, b) {
        return a.sort - b.sort;
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };

    // 只在初始化时打乱一次，避免滚动过程中重新渲染导致闪烁
    var shuffledImages = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(shuffle(detail.images));
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .BasePage */ .vo, {
        "navigator": {
          title: detail.title,
          navigationBarBackgroundColorFixed: '#ffffff',
          navigationBarTextStyleFixed: 'black'
        },
        "useScrollView": true
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "community-detail"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "detail-header"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ ._V, {
                    "class": "avatar",
                    "mode": "aspectFill",
                    "src": detail.author.avatar
                  }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "author-info"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                        "class": "name"
                      }, {
                        default: function _default() {
                          return [detail.author.name];
                        }
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                        "class": "likes"
                      }, {
                        default: function _default() {
                          return [detail.likes, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)(" \u8D5E")];
                        }
                      })];
                    }
                  })];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "detail-title"
              }, {
                default: function _default() {
                  return [detail.title];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "detail-content"
              }, {
                default: function _default() {
                  return [detail.content];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "detail-media"
              }, {
                default: function _default() {
                  return [detail.video && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Video */ .Ce, {
                    "class": "detail-video",
                    "src": detail.video,
                    "controls": true,
                    "autoplay": false,
                    "enableProgressGesture": true,
                    "direction": 0
                  }, null), shuffledImages.value.map(function (src) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ ._V, {
                      "key": src,
                      "class": "image",
                      "mode": "widthFix",
                      "src": src,
                      "lazyLoad": true
                    }, null);
                  })];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "comments"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "comments__title"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8BC4\u8BBA")];
                    }
                  }), [1, 2, 3].map(function (i) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                      "key": i,
                      "class": "comment-item"
                    }, {
                      default: function _default() {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ ._V, {
                          "class": "avatar",
                          "mode": "aspectFill",
                          "src": (0,_utils_test__WEBPACK_IMPORTED_MODULE_4__/* .buildImgUrl */ .Z)((i % 10 + 10) % 10)
                        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                          "class": "main"
                        }, {
                          default: function _default() {
                            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                              "class": "meta"
                            }, {
                              default: function _default() {
                                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                                  "class": "name"
                                }, {
                                  default: function _default() {
                                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7528\u6237 "), i];
                                  }
                                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                                  "class": "time"
                                }, {
                                  default: function _default() {
                                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xB7 1\u5C0F\u65F6\u524D")];
                                  }
                                })];
                              }
                            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                              "class": "content"
                            }, {
                              default: function _default() {
                                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8FD9\u662F\u4E00\u6761\u793A\u4F8B\u8BC4\u8BBA\u5185\u5BB9\uFF0C\u63A5\u5165\u540E\u7AEF\u540E\u66FF\u6362\u4E3A\u771F\u5B9E\u6570\u636E\u3002")];
                              }
                            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                              "class": "actions"
                            }, {
                              default: function _default() {
                                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                                  "class": "action like"
                                }, {
                                  default: function _default() {
                                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u8D5E")];
                                  }
                                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                                  "class": "action reply"
                                }, {
                                  default: function _default() {
                                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u56DE\u590D")];
                                  }
                                })];
                              }
                            })];
                          }
                        })];
                      }
                    });
                  })];
                }
              })];
            }
          })];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=584.js.map