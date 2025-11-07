"use strict";
(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[430],{

/***/ 8430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4243);
/* harmony import */ var _anteng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6618);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1880);
/* harmony import */ var _utils_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6937);
/* harmony import */ var _components_goods_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9788);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3058);









function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .isVNode */ .vv)(s);
}
/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .pM)({
  name: 'CreativeDetailPage',
  setup: function setup() {
    var _router$params$id;
    var router = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useRouter */ .Ay.useRouter();
    var rawId = (_router$params$id = router.params.id) !== null && _router$params$id !== void 0 ? _router$params$id : 'creative-1';
    var idOnce = decodeURIComponent(rawId);
    var id = idOnce;
    try {
      id = decodeURIComponent(idOnce);
    } catch (err) {
      id = idOnce;
    }

    // 演示数据（可替换为真实接口）
    var rawName = router.params.name || router.params.title || '';
    var displayName = rawName ? decodeURIComponent(rawName) : "\u6587\u521B\u5546\u54C1 \xB7 ".concat(id);
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(displayName);
    var price = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(59);
    var listPrice = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(89);
    var images = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)([(0,_utils_test__WEBPACK_IMPORTED_MODULE_5__/* .buildImgUrl */ .Z)(1), (0,_utils_test__WEBPACK_IMPORTED_MODULE_5__/* .buildImgUrl */ .Z)(2), (0,_utils_test__WEBPACK_IMPORTED_MODULE_5__/* .buildImgUrl */ .Z)(3)]);
    var sold = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(128);
    var stock = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(36);
    var brand = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)('野松文创');
    var tags = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(['限定', '原创插画', '环保材质']);
    var desc = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)('灵感与温度结合的文创周边，采用环保材质与原创插画，适合礼赠与日常使用。');

    // 规格选择（示例）
    var colors = ['奶油白', '可可棕', '海盐蓝'];
    var sizes = ['S', 'M', 'L'];
    var selectedColor = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(colors[0]);
    var selectedSize = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(sizes[1]);
    var recommend = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EW)(function () {
      var items = [];
      var count = 8;
      for (var i = 1; i <= count; i++) {
        items.push({
          id: "creative-reco-".concat(i),
          name: "\u6587\u521B\u5468\u8FB9 ".concat(i),
          price: 49 + i,
          listPrice: 69 + i,
          image: (0,_utils_test__WEBPACK_IMPORTED_MODULE_5__/* .buildImgUrl */ .Z)(i % 9 + 1)
        });
      }
      return items;
    });
    var onBuy = function onBuy() {
      (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useToast */ .dj)('已加入选购清单');
    };
    return function () {
      var _slot, _slot2, _slot3, _slot4;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .BasePage */ .vo, {
        "navigator": {
          title: '',
          immersive: true,
          navigationBarBackgroundColor: 'rgba(0,0,0,0)',
          navigationBarBackgroundColorFixed: 'rgba(0,0,0,0)',
          navigationBarTextStyle: 'black',
          navigationBarTextStyleFixed: 'black'
        }
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)("div", {
            "class": "creative-detail"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "creative-detail__gallery"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Swiper */ .RC, {
                "class": "gallery-swiper",
                "indicatorDots": true,
                "autoplay": true
              }, _isSlot(_slot = images.value.map(function (img, idx) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .SwiperItem */ .wu, {
                  "key": idx
                }, {
                  default: function _default() {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ ._V, {
                      "class": "image",
                      "mode": "aspectFill",
                      "src": img
                    }, null)];
                  }
                });
              })) ? _slot : {
                default: function _default() {
                  return [_slot];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "gallery__badges"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "badge"
                  }, {
                    default: function _default() {
                      return [brand.value];
                    }
                  }), tags.value.map(function (t) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                      "key": t,
                      "class": "badge light"
                    }, _isSlot(t) ? t : {
                      default: function _default() {
                        return [t];
                      }
                    });
                  })];
                }
              })];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "creative-detail__info"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "name"
              }, {
                default: function _default() {
                  return [name.value];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "meta"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, null, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5DF2\u552E "), sold.value];
                    }
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                    "class": "dot"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xB7")];
                    }
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, null, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5E93\u5B58 "), stock.value];
                    }
                  })];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "price number-font"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "yen"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")];
                    }
                  }), price.value, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "list"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5"), listPrice.value];
                    }
                  })];
                }
              })];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "creative-detail__spec"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "spec__title"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u989C\u8272\u9009\u62E9")];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "spec__options"
              }, _isSlot(_slot2 = colors.map(function (c) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                  "key": c,
                  "class": ['spec__option', selectedColor.value === c ? 'active' : ''].join(' '),
                  "onClick": function onClick() {
                    return selectedColor.value = c;
                  }
                }, _isSlot(c) ? c : {
                  default: function _default() {
                    return [c];
                  }
                });
              })) ? _slot2 : {
                default: function _default() {
                  return [_slot2];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "spec__title"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u5C3A\u7801\u9009\u62E9")];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "spec__options"
              }, _isSlot(_slot3 = sizes.map(function (s) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                  "key": s,
                  "class": ['spec__option', selectedSize.value === s ? 'active' : ''].join(' '),
                  "onClick": function onClick() {
                    return selectedSize.value = s;
                  }
                }, _isSlot(s) ? s : {
                  default: function _default() {
                    return [s];
                  }
                });
              })) ? _slot3 : {
                default: function _default() {
                  return [_slot3];
                }
              })];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "creative-detail__desc"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "desc"
              }, {
                default: function _default() {
                  return [desc.value];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "features"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "feature"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u539F\u521B\u63D2\u753B\uFF0C\u6E29\u67D4\u914D\u8272\uFF0C\u6CBB\u6108\u7CFB\u6C1B\u56F4\u3002")];
                    }
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "feature"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u98DF\u54C1\u7EA7\u6750\u8D28\uFF0C\u5B89\u5FC3\u63A5\u89E6\uFF0C\u8010\u7528\u6613\u6E05\u6D01\u3002")];
                    }
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "feature"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u9002\u5408\u793C\u76D2\u642D\u914D\uFF0C\u8282\u65E5\u4E0E\u7EAA\u5FF5\u65E5\u7CBE\u5FC3\u4E4B\u9009\u3002")];
                    }
                  })];
                }
              })];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "creative-detail__brand"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ ._V, {
                "class": "avatar",
                "mode": "aspectFill",
                "src": (0,_utils_test__WEBPACK_IMPORTED_MODULE_5__/* .buildImgUrl */ .Z)(9)
              }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "content"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "title"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u54C1\u724C\u6545\u4E8B \xB7 "), brand.value];
                    }
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                    "class": "summary"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u81F4\u529B\u4E8E\u628A\u81EA\u7136\u4E0E\u751F\u6D3B\u7684\u7EC6\u8282\uFF0C\u53D8\u6210\u53EF\u89E6\u6478\u7684\u6E29\u5EA6\u3002")];
                    }
                  })];
                }
              })];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "creative-detail__recommend"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "section-title"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22")];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "cards"
              }, _isSlot(_slot4 = recommend.value.map(function (item) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_components_goods_item__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                  "key": item.id,
                  "type": "vertical",
                  "image": item.image,
                  "name": item.name,
                  "price": item.price,
                  "listPrice": item.listPrice,
                  "onClick": function onClick() {
                    return (0,_router__WEBPACK_IMPORTED_MODULE_7__/* .navigateToCreativeDetail */ .b4)(item.id, item.name);
                  }
                }, null);
              })) ? _slot4 : {
                default: function _default() {
                  return [_slot4];
                }
              })];
            }
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
            "class": "creative-detail__actions"
          }, {
            default: function _default() {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "actions__price"
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                    "class": "yen"
                  }, {
                    default: function _default() {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\xA5")];
                    }
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .EY, {
                    "class": "number-font"
                  }, {
                    default: function _default() {
                      return [price.value];
                    }
                  })];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "btn ghost",
                "onClick": function onClick() {
                  return (0,_anteng_core__WEBPACK_IMPORTED_MODULE_2__/* .useToast */ .dj)('已加入收藏');
                }
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u6536\u85CF")];
                }
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .bF)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__/* .View */ .Ss, {
                "class": "btn",
                "onClick": onBuy
              }, {
                default: function _default() {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */ .eW)("\u7ACB\u5373\u9009\u8D2D")];
                }
              })];
            }
          })])];
        }
      });
    };
  }
}));

/***/ })

}]);
//# sourceMappingURL=430.js.map