webpackHotUpdate(4,{

/***/ "./components/maxNews/Detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_DataGrid__ = __webpack_require__("./components/commons/DataGrid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_Search__ = __webpack_require__("./components/commons/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_Pagination__ = __webpack_require__("./components/commons/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__UploadImage__ = __webpack_require__("./components/maxNews/UploadImage.js");
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var TextArea = __WEBPACK_IMPORTED_MODULE_6_antd__["e" /* Input */].TextArea;

var Detail = function (_Component) {
  _inherits(Detail, _Component);

  function Detail(props) {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));
  }

  _createClass(Detail, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-306179296' + ' ' + 'title',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_antd__["h" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
            { span: 24, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-306179296',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              'Max News'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-306179296' + ' ' + 'setting-row',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["h" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 3, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-306179296' + ' ' + 'topic-list',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                'Heading:'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 9, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd__["e" /* Input */], { placeholder: 'type here', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-306179296' + ' ' + 'setting-row',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["h" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 3, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-306179296' + ' ' + 'topic-list',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'Date:'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 9, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd__["b" /* DatePicker */], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-306179296' + ' ' + 'setting-row',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["h" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 3, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-306179296' + ' ' + 'topic-list-image',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                'Image:'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 9, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__UploadImage__["a" /* default */], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-306179296' + ' ' + 'setting-row',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["h" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 3, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-306179296' + ' ' + 'topic-list-image',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                'Article:'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Col */],
              { span: 18, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TextArea, { rows: 10, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '306179296',
          css: '.title.jsx-306179296{width:100%;padding-left:1rem;}.topic-list.jsx-306179296{font-size:1rem;padding-left:1rem;padding-top:0.3rem;}.topic-list-image.jsx-306179296{font-size:1rem;padding-left:1rem;padding-top:2.5rem;}.setting-row.jsx-306179296{padding-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF4TmV3cy9EZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUd3QixBQUlJLEFBS0EsQUFLSyxXQWJGLElBSUEsQUFLQSxLQUtwQixTQWJBLElBSXFCLEFBS0EsbUJBSnJCLEFBS0EiLCJmaWxlIjoiY29tcG9uZW50cy9tYXhOZXdzL0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFybW96L0Rlc2t0b3AvTWF4TXVheVRoYWkvY21zL01heC1jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tbW9ucy9EYXRhR3JpZCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tbW9ucy9TZWFyY2gnXG5pbXBvcnQgUGFnaW5hdGlvbkRhdGFHcmlkIGZyb20gJy4uL2NvbW1vbnMvUGFnaW5hdGlvbidcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUm93LCBDb2wsIElucHV0LCBEYXRlUGlja2VyLCBVcGxvYWQsIEljb24sIG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gJy4vVXBsb2FkSW1hZ2UnXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dFxuXG5jbGFzcyBEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyd0aXRsZSd9PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgPGgxPk1heCBOZXdzPC9oMT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2V0dGluZy1yb3cnfT5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzcGFuPXszfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0b3BpYy1saXN0J30+SGVhZGluZzo8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBzcGFuPXs5fT5cbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwidHlwZSBoZXJlXCIgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZXR0aW5nLXJvdyd9PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RvcGljLWxpc3QnfT5EYXRlOjwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezl9PlxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17M30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9waWMtbGlzdC1pbWFnZSd9PkltYWdlOjwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezl9PlxuICAgICAgICAgICAgICA8VXBsb2FkSW1hZ2UgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZXR0aW5nLXJvdyd9PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RvcGljLWxpc3QtaW1hZ2UnfT5BcnRpY2xlOjwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezE4fT5cbiAgICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezEwfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9waWMtbGlzdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9waWMtbGlzdC1pbWFnZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2V0dGluZy1yb3cge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2VhcmNoRGF0YTogc3RhdGUuc2VhcmNoRGF0YS5kYXRhLFxuICBwYWdpbmF0aW9uOiBzdGF0ZS5zZWFyY2hEYXRhLnBhZ2luYXRpb24sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoRGV0YWlsKVxuIl19 */\n/*@ sourceURL=components/maxNews/Detail.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Detail;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchData: state.searchData.data,
    pagination: state.searchData.pagination
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, null)(Detail);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, 'TextArea', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(Detail, 'Detail', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c5ef18ee5c2740f1910d.hot-update.js.map