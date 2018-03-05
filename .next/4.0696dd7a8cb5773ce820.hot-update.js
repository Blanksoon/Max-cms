webpackHotUpdate(4,{

/***/ "./components/vods/VodsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VodsTable__ = __webpack_require__("./components/vods/VodsTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_ducks_vods__ = __webpack_require__("./redux/ducks/vods.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__ = __webpack_require__("./components/commons/vars.js");
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var VodsData = function (_Component) {
  _inherits(VodsData, _Component);

  function VodsData(props) {
    _classCallCheck(this, VodsData);

    return _possibleConstructorReturn(this, (VodsData.__proto__ || Object.getPrototypeOf(VodsData)).call(this, props));
  }

  _createClass(VodsData, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchVodsDucks();
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log('this.props', this.props)
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-845806150',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Breadcrumb */],
          {
            style: {
              fontSize: '0.8rem',
              backgroundColor: '#032447',
              color: '#fff'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Breadcrumb */].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            'Vods'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Breadcrumb */].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: '', style: { color: '' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].lightBlue }, className: 'jsx-845806150',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              'Application Center'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Breadcrumb */].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: '', style: { color: '' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].lightBlue }, className: 'jsx-845806150',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              'Application List'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["a" /* Breadcrumb */].Item,
            { style: { color: '' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].white }, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            'An Application'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-845806150',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["l" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["c" /* Col */],
              { span: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-845806150' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                'Vods'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["c" /* Col */],
              { span: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-845806150' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_next_link___default.a,
                  { href: '/vods/new', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6_antd__["b" /* Button */],
                    {
                      style: {
                        width: '5rem',
                        height: '2rem',
                        backgroundColor: '#4caf4f',
                        color: 'white',
                        fontSize: '1rem',
                        float: 'right',
                        marginRight: '0.5rem'
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      }
                    },
                    'New'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__VodsTable__["a" /* default */], {
          vodsData: this.props.vodsData.data,
          lengtOfvods: this.props.vodsData.lengthOfData,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '845806150',
          css: '.ant-breadcrumb-separator{color:' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].lightBlue + ' !important;}.ant-breadcrumb-link{color:' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].lightBlue + ';}.title{font-size:1.5rem;font-weight:700;margin-top:0.7rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdm9kcy9Wb2RzRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRTJCLEFBRzJELEFBR1gsQUFHbEIsaUJBQ0QsZ0JBQ0UsRUFKcEIsV0FIQSxLQVFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdm9kcy9Wb2RzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFybW96L0Rlc2t0b3AvTWF4TXVheVRoYWkvY21zL01heC1jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVm9kc1RhYmxlIGZyb20gJy4vVm9kc1RhYmxlJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmZXRjaFZvZHNEdWNrcyB9IGZyb20gJy4uLy4uL3JlZHV4L2R1Y2tzL3ZvZHMnXG5pbXBvcnQgeyBSb3csIENvbCwgQnJlYWRjcnVtYiwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHZhcnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3ZhcnMnXG5cbmNsYXNzIFZvZHNEYXRhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hWb2RzRHVja3MoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzLnByb3BzJywgdGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJyZWFkY3J1bWJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAzMjQ0NycsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlZvZHM8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHN0eWxlPXt7IGNvbG9yOiBgJHt2YXJzLmxpZ2h0Qmx1ZX1gIH19PlxuICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBDZW50ZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHN0eWxlPXt7IGNvbG9yOiBgJHt2YXJzLmxpZ2h0Qmx1ZX1gIH19PlxuICAgICAgICAgICAgICBBcHBsaWNhdGlvbiBMaXN0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbSBzdHlsZT17eyBjb2xvcjogYCR7dmFycy53aGl0ZX1gIH19PlxuICAgICAgICAgICAgQW4gQXBwbGljYXRpb25cbiAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlZvZHM8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ZvZHMvbmV3XCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcycmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNGNhZjRmJyxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTmV3XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Vm9kc1RhYmxlXG4gICAgICAgICAgdm9kc0RhdGE9e3RoaXMucHJvcHMudm9kc0RhdGEuZGF0YX1cbiAgICAgICAgICBsZW5ndE9mdm9kcz17dGhpcy5wcm9wcy52b2RzRGF0YS5sZW5ndGhPZkRhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YXJzLmxpZ2h0Qmx1ZX0gIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1icmVhZGNydW1iLWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFycy5saWdodEJsdWV9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC43cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VyY2gge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHZvZHNEYXRhOiBzdGF0ZS52b2RzLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hWb2RzRHVja3MgfSkoVm9kc0RhdGEpXG4iXX0= */\n/*@ sourceURL=components/vods/VodsData.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return VodsData;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vodsData: state.vods
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { fetchVodsDucks: __WEBPACK_IMPORTED_MODULE_5__redux_ducks_vods__["c" /* fetchVodsDucks */] })(VodsData);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VodsData, 'VodsData', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsData.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsData.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsData.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.0696dd7a8cb5773ce820.hot-update.js.map