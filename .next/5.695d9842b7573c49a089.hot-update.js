webpackHotUpdate(5,{

/***/ "./api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();


//http://localhost:3002
//https://api.maxmuaythai.com
//https://beta-api.maxmuaythai.com
var SERVER = 'https://beta-api.maxmuaythai.com';
var get = function get(url) {
  return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).catch(function (err) {
    return Promise.reject(err);
  });
};

var post = function post(url, json) {
  return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(json)
  }).then(function (response) {
    //console.log('response: ', response)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SERVER, 'SERVER', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/api.js');
  reactHotLoader.register(get, 'get', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/api.js');
  reactHotLoader.register(post, 'post', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/api.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/vods/VodsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VodsTable__ = __webpack_require__("./components/vods/VodsTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_ducks_vods__ = __webpack_require__("./redux/ducks/vods.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api__ = __webpack_require__("./api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_commons_vars__ = __webpack_require__("./components/commons/vars.js");

var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var VodsData = function (_Component) {
  _inherits(VodsData, _Component);

  function VodsData(props) {
    _classCallCheck(this, VodsData);

    var _this = _possibleConstructorReturn(this, (VodsData.__proto__ || Object.getPrototypeOf(VodsData)).call(this, props));

    _this.deleteData = _this.deleteData.bind(_this);
    return _this;
  }

  _createClass(VodsData, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchVodsDucks();
    }
  }, {
    key: 'deleteData',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(data) {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9__api__["c" /* post */](__WEBPACK_IMPORTED_MODULE_9__api__["a" /* SERVER */] + '/cms/delete-vods', data);

              case 2:
                result = _context.sent;

                console.log('1');
                this.props.fetchVodsDucks();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteData(_x) {
        return _ref.apply(this, arguments);
      }

      return deleteData;
    }()
  }, {
    key: 'redirectToModify',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(data) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                __WEBPACK_IMPORTED_MODULE_10_next_router___default.a.push('/vods/modify?id=' + data.id);

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function redirectToModify(_x2) {
        return _ref2.apply(this, arguments);
      }

      return redirectToModify;
    }()
  }, {
    key: 'render',
    value: function render() {
      //console.log('this.props', this.props)
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'jsx-845806150',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_antd__["b" /* Breadcrumb */],
          {
            style: {
              fontSize: '0.8rem',
              backgroundColor: '#032447',
              color: '#fff'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_antd__["b" /* Breadcrumb */].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            'Home'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_antd__["b" /* Breadcrumb */].Item,
            { style: { color: '' + __WEBPACK_IMPORTED_MODULE_11__components_commons_vars__["a" /* default */].white }, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            'Vods'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-845806150',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
              { span: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-845806150' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                'Vods'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
              { span: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-845806150' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8_next_link___default.a,
                  { href: '/vods/new', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Button */],
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
                        lineNumber: 67
                      }
                    },
                    'New'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__VodsTable__["a" /* default */], {
          vodsData: this.props.vodsData.data,
          lengtOfvods: this.props.vodsData.lengthOfData,
          deleteData: this.deleteData,
          redirectToModify: this.redirectToModify,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '845806150',
          css: '.ant-breadcrumb-separator{color:' + __WEBPACK_IMPORTED_MODULE_11__components_commons_vars__["a" /* default */].lightBlue + ' !important;}.ant-breadcrumb-link{color:' + __WEBPACK_IMPORTED_MODULE_11__components_commons_vars__["a" /* default */].lightBlue + ';}.title{font-size:1.5rem;font-weight:700;margin-top:0.7rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdm9kcy9Wb2RzRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRjJCLEFBRzJELEFBR1gsQUFHbEIsaUJBQ0QsZ0JBQ0UsRUFKcEIsV0FIQSxLQVFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdm9kcy9Wb2RzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFybW96L0Rlc2t0b3AvTWF4TXVheVRoYWkvY21zL01heC1jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVm9kc1RhYmxlIGZyb20gJy4vVm9kc1RhYmxlJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmZXRjaFZvZHNEdWNrcyB9IGZyb20gJy4uLy4uL3JlZHV4L2R1Y2tzL3ZvZHMnXG5pbXBvcnQgeyBSb3csIENvbCwgQnJlYWRjcnVtYiwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi9hcGknXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgdmFycyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvdmFycydcblxuY2xhc3MgVm9kc0RhdGEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuZGVsZXRlRGF0YSA9IHRoaXMuZGVsZXRlRGF0YS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoVm9kc0R1Y2tzKClcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZURhdGEoZGF0YSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5wb3N0KGAke2FwaS5TRVJWRVJ9L2Ntcy9kZWxldGUtdm9kc2AsIGRhdGEpXG4gICAgY29uc29sZS5sb2coJzEnKVxuICAgIHRoaXMucHJvcHMuZmV0Y2hWb2RzRHVja3MoKVxuICB9XG5cbiAgYXN5bmMgcmVkaXJlY3RUb01vZGlmeShkYXRhKSB7XG4gICAgUm91dGVyLnB1c2goYC92b2RzL21vZGlmeT9pZD0ke2RhdGEuaWR9YClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzLnByb3BzJywgdGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJyZWFkY3J1bWJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAzMjQ0NycsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkhvbWU8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICB7LyogPEJyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBzdHlsZT17eyBjb2xvcjogYCR7dmFycy5saWdodEJsdWV9YCB9fT5cbiAgICAgICAgICAgICAgQXBwbGljYXRpb24gQ2VudGVyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBzdHlsZT17eyBjb2xvcjogYCR7dmFycy5saWdodEJsdWV9YCB9fT5cbiAgICAgICAgICAgICAgQXBwbGljYXRpb24gTGlzdFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPiAqL31cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIHN0eWxlPXt7IGNvbG9yOiBgJHt2YXJzLndoaXRlfWAgfX0+XG4gICAgICAgICAgICBWb2RzXG4gICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Wb2RzPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92b2RzL25ld1wiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMnJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzRjYWY0ZicsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5ld1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFZvZHNUYWJsZVxuICAgICAgICAgIHZvZHNEYXRhPXt0aGlzLnByb3BzLnZvZHNEYXRhLmRhdGF9XG4gICAgICAgICAgbGVuZ3RPZnZvZHM9e3RoaXMucHJvcHMudm9kc0RhdGEubGVuZ3RoT2ZEYXRhfVxuICAgICAgICAgIGRlbGV0ZURhdGE9e3RoaXMuZGVsZXRlRGF0YX1cbiAgICAgICAgICByZWRpcmVjdFRvTW9kaWZ5PXt0aGlzLnJlZGlyZWN0VG9Nb2RpZnl9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YXJzLmxpZ2h0Qmx1ZX0gIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1icmVhZGNydW1iLWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFycy5saWdodEJsdWV9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC43cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VyY2gge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHZvZHNEYXRhOiBzdGF0ZS52b2RzLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hWb2RzRHVja3MgfSkoVm9kc0RhdGEpXG4iXX0= */\n/*@ sourceURL=components/vods/VodsData.js */'
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
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vodsData: state.vods
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, { fetchVodsDucks: __WEBPACK_IMPORTED_MODULE_6__redux_ducks_vods__["c" /* fetchVodsDucks */] })(VodsData);

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

/***/ }),

/***/ "./components/vods/VodsTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_vars__ = __webpack_require__("./components/commons/vars.js");
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsTable.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Column = __WEBPACK_IMPORTED_MODULE_2_antd__["p" /* Table */].Column,
    ColumnGroup = __WEBPACK_IMPORTED_MODULE_2_antd__["p" /* Table */].ColumnGroup;

var VodsTable = function (_React$Component) {
  _inherits(VodsTable, _React$Component);

  function VodsTable() {
    _classCallCheck(this, VodsTable);

    return _possibleConstructorReturn(this, (VodsTable.__proto__ || Object.getPrototypeOf(VodsTable)).apply(this, arguments));
  }

  _createClass(VodsTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          vodsData = _props.vodsData,
          lengtOfvods = _props.lengtOfvods;
      //console.log('11111111', this.props)

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3730640815',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["p" /* Table */],
          {
            dataSource: vodsData,
            pagination: lengtOfvods,
            rowKey: function rowKey(vodsData) {
              return vodsData._id;
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, {
            title: 'programName_en',
            dataIndex: 'programName_en',
            key: 'programName_en',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'title_en', dataIndex: 'title_en', key: 'title_en', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, {
            title: 'programName_th',
            dataIndex: 'programName_th',
            key: 'programName_th',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'desc_th', dataIndex: 'desc_th', key: 'desc_th', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'onAirDate', dataIndex: 'onAirDate', key: 'onAirDate', __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'duration', dataIndex: 'duration', key: 'duration', __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, {
            title: 'Action',
            key: 'action',
            render: function render(text, record) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-3730640815',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Button */],
                  {
                    shape: 'circle',
                    onClick: function onClick() {
                      return _this2.props.redirectToModify({ id: record._id });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], {
                    type: 'edit',
                    style: { color: '#607d8b', fontSize: '1.5rem' },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["f" /* Divider */], { type: 'vertical', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Button */],
                  {
                    shape: 'circle',
                    onClick: function onClick() {
                      return _this2.props.deleteData({ id: record._id });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], {
                    type: 'delete',
                    style: { color: 'red', fontSize: '1.5rem' },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  })
                )
              );
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3730640815',
          css: 'th{background-color:' + __WEBPACK_IMPORTED_MODULE_3__commons_vars__["a" /* default */].blue + ' !important;}.ant-table-thead>tr>th{color:' + __WEBPACK_IMPORTED_MODULE_3__commons_vars__["a" /* default */].white + ' !important;}.ant-table ant-table-large ant-table-scroll-position-left{box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) !important;}.ant-btn{border-color:#fff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdm9kcy9Wb2RzVGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUUyQixBQUdzRSxBQUlYLEFBSUosQUFHYiw2QkFDL0IsaUJBUEEsV0FIQSxvQkFPQSIsImZpbGUiOiJjb21wb25lbnRzL3ZvZHMvVm9kc1RhYmxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mYXJtb3ovRGVza3RvcC9NYXhNdWF5VGhhaS9jbXMvTWF4LWNtcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlLCBJY29uLCBEaXZpZGVyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHZhcnMgZnJvbSAnLi4vY29tbW9ucy92YXJzJ1xuXG5jb25zdCB7IENvbHVtbiwgQ29sdW1uR3JvdXAgfSA9IFRhYmxlXG5cbmNsYXNzIFZvZHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZvZHNEYXRhLCBsZW5ndE9mdm9kcyB9ID0gdGhpcy5wcm9wc1xuICAgIC8vY29uc29sZS5sb2coJzExMTExMTExJywgdGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgZGF0YVNvdXJjZT17dm9kc0RhdGF9XG4gICAgICAgICAgcGFnaW5hdGlvbj17bGVuZ3RPZnZvZHN9XG4gICAgICAgICAgcm93S2V5PXt2b2RzRGF0YSA9PiB2b2RzRGF0YS5faWR9XG4gICAgICAgID5cbiAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cImlkXCIgZGF0YUluZGV4PVwiX2lkXCIga2V5PVwiX2lkXCIgLz4gKi99XG4gICAgICAgICAgPENvbHVtblxuICAgICAgICAgICAgdGl0bGU9XCJwcm9ncmFtTmFtZV9lblwiXG4gICAgICAgICAgICBkYXRhSW5kZXg9XCJwcm9ncmFtTmFtZV9lblwiXG4gICAgICAgICAgICBrZXk9XCJwcm9ncmFtTmFtZV9lblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwidGl0bGVfZW5cIiBkYXRhSW5kZXg9XCJ0aXRsZV9lblwiIGtleT1cInRpdGxlX2VuXCIgLz5cbiAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cImRlc2NfZW5cIiBkYXRhSW5kZXg9XCJkZXNjX2VuXCIga2V5PVwiZGVzY19lblwiIC8+ICovfVxuICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgIHRpdGxlPVwicHJvZ3JhbU5hbWVfdGhcIlxuICAgICAgICAgICAgZGF0YUluZGV4PVwicHJvZ3JhbU5hbWVfdGhcIlxuICAgICAgICAgICAga2V5PVwicHJvZ3JhbU5hbWVfdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxDb2x1bW4gdGl0bGU9XCJ0aXRsZV90aFwiIGRhdGFJbmRleD1cInRpdGxlX3RoXCIga2V5PVwidGl0bGVfdGhcIiAvPiAqL31cbiAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwiZGVzY190aFwiIGRhdGFJbmRleD1cImRlc2NfdGhcIiBrZXk9XCJkZXNjX3RoXCIgLz5cbiAgICAgICAgICB7LyogPENvbHVtbiB0aXRsZT1cInZpZGVvVXJsXCIgZGF0YUluZGV4PVwidmlkZW9VcmxcIiBrZXk9XCJ2aWRlb1VybFwiIC8+XG4gICAgICAgICAgPENvbHVtbiB0aXRsZT1cInByb21vVXJsXCIgZGF0YUluZGV4PVwicHJvbW9VcmxcIiBrZXk9XCJwcm9tb1VybFwiIC8+XG4gICAgICAgICAgPENvbHVtblxuICAgICAgICAgICAgdGl0bGU9XCJ0aHVtYm5haWxVcmxcIlxuICAgICAgICAgICAgZGF0YUluZGV4PVwidGh1bWJuYWlsVXJsXCJcbiAgICAgICAgICAgIGtleT1cInRodW1ibmFpbFVybFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwibG9nb1VybFwiIGRhdGFJbmRleD1cImxvZ29VcmxcIiBrZXk9XCJsb2dvVXJsXCIgLz4gKi99XG4gICAgICAgICAgPENvbHVtbiB0aXRsZT1cIm9uQWlyRGF0ZVwiIGRhdGFJbmRleD1cIm9uQWlyRGF0ZVwiIGtleT1cIm9uQWlyRGF0ZVwiIC8+XG4gICAgICAgICAgPENvbHVtbiB0aXRsZT1cImR1cmF0aW9uXCIgZGF0YUluZGV4PVwiZHVyYXRpb25cIiBrZXk9XCJkdXJhdGlvblwiIC8+XG4gICAgICAgICAgPENvbHVtblxuICAgICAgICAgICAgdGl0bGU9XCJBY3Rpb25cIlxuICAgICAgICAgICAga2V5PVwiYWN0aW9uXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHRleHQsIHJlY29yZCkgPT4gKFxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cImNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlZGlyZWN0VG9Nb2RpZnkoeyBpZDogcmVjb3JkLl9pZCB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGAjNjA3ZDhiYCwgZm9udFNpemU6IGAxLjVyZW1gIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVEYXRhKHsgaWQ6IHJlY29yZC5faWQgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBgcmVkYCwgZm9udFNpemU6IGAxLjVyZW1gIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2YXJzLmJsdWV9ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YXJzLndoaXRlfSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYW50LXRhYmxlIGFudC10YWJsZS1sYXJnZSBhbnQtdGFibGUtc2Nyb2xsLXBvc2l0aW9uLWxlZnQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtYnRuIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvZHNUYWJsZVxuIl19 */\n/*@ sourceURL=components/vods/VodsTable.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return VodsTable;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = VodsTable;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Column, 'Column', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsTable.js');
  reactHotLoader.register(ColumnGroup, 'ColumnGroup', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsTable.js');
  reactHotLoader.register(VodsTable, 'VodsTable', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsTable.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/vods/VodsTable.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./layouts/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/layouts/Main.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Header = __WEBPACK_IMPORTED_MODULE_1_antd__["j" /* Layout */].Header,
    Content = __WEBPACK_IMPORTED_MODULE_1_antd__["j" /* Layout */].Content,
    Footer = __WEBPACK_IMPORTED_MODULE_1_antd__["j" /* Layout */].Footer;

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.changedefaultSelectedKeys = function (value) {
      _this.setState({
        defaultSelectedKeys: value
      });
    };

    _this.state = {
      defaultSelectedKeys: 1
    };
    _this.changedefaultSelectedKeys = _this.changedefaultSelectedKeys.bind(_this);
    return _this;
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          keyNavbar = _props.keyNavbar;
      //console.log('key: ', keyNavbar)

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["j" /* Layout */],
        { style: { backgroundColor: '#032447' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Header,
          { style: { width: '100%' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["k" /* Menu */],
            {
              theme: 'dark',
              mode: 'horizontal',
              defaultSelectedKeys: [keyNavbar],
              style: { lineHeight: '64px' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["k" /* Menu */].Item,
              { key: 'Home', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  },
                  'Home'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["k" /* Menu */].Item,
              { key: 'Maxnews', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/maxnews', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    }
                  },
                  'Maxnews'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["k" /* Menu */].Item,
              { key: 'Vods', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/vods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46
                    }
                  },
                  'Vods'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["k" /* Menu */].Item,
              { key: 'Live', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/live', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    }
                  },
                  'Live'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Content,
          { style: { padding: '0 30px', marginTop: 24 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { background: '#fff', padding: 0, minHeight: 450 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            children
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Footer,
          { style: { textAlign: 'center' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          'Ant Design \xA92016 Created by Ant UED'
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

// Main.propTypes = {
//   children: PropTypes.node,
// }
// Main.defaultProps = {
//   children: null, // render nothing
// }

var _default = Main;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/layouts/Main.js');
  reactHotLoader.register(Content, 'Content', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/layouts/Main.js');
  reactHotLoader.register(Footer, 'Footer', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/layouts/Main.js');
  reactHotLoader.register(Main, 'Main', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/layouts/Main.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/layouts/Main.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/es/auto-complete/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_select__ = __webpack_require__("./node_modules/rc-select/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select__ = __webpack_require__("./node_modules/antd/es/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__input__ = __webpack_require__("./node_modules/antd/es/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__InputElement__ = __webpack_require__("./node_modules/antd/es/auto-complete/InputElement.js");













function isSelectOptionOrSelectOptGroup(child) {
    return child && child.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
}

var AutoComplete = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(AutoComplete, _React$Component);

    function AutoComplete() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, AutoComplete);

        var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).apply(this, arguments));

        _this.getInputElement = function () {
            var children = _this.props.children;

            var element = children && __WEBPACK_IMPORTED_MODULE_7_react__["isValidElement"](children) && children.type !== __WEBPACK_IMPORTED_MODULE_8_rc_select__["b" /* Option */] ? __WEBPACK_IMPORTED_MODULE_7_react__["Children"].only(_this.props.children) : __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__input__["a" /* default */], null);
            var elementProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, element.props);
            // https://github.com/ant-design/ant-design/pull/7742
            delete elementProps.children;
            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_12__InputElement__["a" /* default */],
                elementProps,
                element
            );
        };
        _this.saveSelect = function (node) {
            _this.select = node;
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(AutoComplete, [{
        key: 'focus',
        value: function focus() {
            this.select.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.select.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                size = _props.size,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                notFoundContent = _props.notFoundContent,
                prefixCls = _props.prefixCls,
                optionLabelProp = _props.optionLabelProp,
                dataSource = _props.dataSource,
                children = _props.children;

            var cls = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-lg', size === 'large'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-sm', size === 'small'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, className, !!className), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-show-search', true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-auto-complete', true), _classNames));
            var options = void 0;
            var childArray = __WEBPACK_IMPORTED_MODULE_7_react__["Children"].toArray(children);
            if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
                options = children;
            } else {
                options = dataSource ? dataSource.map(function (item) {
                    if (__WEBPACK_IMPORTED_MODULE_7_react__["isValidElement"](item)) {
                        return item;
                    }
                    switch (typeof item === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(item)) {
                        case 'string':
                            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_8_rc_select__["b" /* Option */],
                                { key: item },
                                item
                            );
                        case 'object':
                            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_8_rc_select__["b" /* Option */],
                                { key: item.value },
                                item.text
                            );
                        default:
                            throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
                    }
                }) : [];
            }
            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_10__select__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, this.props, { className: cls, mode: 'combobox', optionLabelProp: optionLabelProp, getInputElement: this.getInputElement, notFoundContent: notFoundContent, ref: this.saveSelect }),
                options
            );
        }
    }]);

    return AutoComplete;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AutoComplete);

AutoComplete.Option = __WEBPACK_IMPORTED_MODULE_8_rc_select__["b" /* Option */];
AutoComplete.OptGroup = __WEBPACK_IMPORTED_MODULE_8_rc_select__["a" /* OptGroup */];
AutoComplete.defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    optionLabelProp: 'children',
    choiceTransitionName: 'zoom',
    showSearch: false,
    filterOption: false
};

/***/ }),

/***/ "./node_modules/antd/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__affix__ = __webpack_require__("./node_modules/antd/es/affix/index.js");
/* unused harmony reexport Affix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor__ = __webpack_require__("./node_modules/antd/es/anchor/index.js");
/* unused harmony reexport Anchor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_complete__ = __webpack_require__("./node_modules/antd/es/auto-complete/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auto_complete__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert__ = __webpack_require__("./node_modules/antd/es/alert/index.js");
/* unused harmony reexport Alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avatar__ = __webpack_require__("./node_modules/antd/es/avatar/index.js");
/* unused harmony reexport Avatar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__back_top__ = __webpack_require__("./node_modules/antd/es/back-top/index.js");
/* unused harmony reexport BackTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__badge__ = __webpack_require__("./node_modules/antd/es/badge/index.js");
/* unused harmony reexport Badge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__breadcrumb__ = __webpack_require__("./node_modules/antd/es/breadcrumb/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__breadcrumb__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button__ = __webpack_require__("./node_modules/antd/es/button/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar__ = __webpack_require__("./node_modules/antd/es/calendar/index.js");
/* unused harmony reexport Calendar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card__ = __webpack_require__("./node_modules/antd/es/card/index.js");
/* unused harmony reexport Card */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__collapse__ = __webpack_require__("./node_modules/antd/es/collapse/index.js");
/* unused harmony reexport Collapse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carousel__ = __webpack_require__("./node_modules/antd/es/carousel/index.js");
/* unused harmony reexport Carousel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cascader__ = __webpack_require__("./node_modules/antd/es/cascader/index.js");
/* unused harmony reexport Cascader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkbox__ = __webpack_require__("./node_modules/antd/es/checkbox/index.js");
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__col__ = __webpack_require__("./node_modules/antd/es/col/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_15__col__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__date_picker__ = __webpack_require__("./node_modules/antd/es/date-picker/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_16__date_picker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__divider__ = __webpack_require__("./node_modules/antd/es/divider/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_17__divider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dropdown__ = __webpack_require__("./node_modules/antd/es/dropdown/index.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form__ = __webpack_require__("./node_modules/antd/es/form/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_19__form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__icon__ = __webpack_require__("./node_modules/antd/es/icon/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_20__icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__input__ = __webpack_require__("./node_modules/antd/es/input/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_21__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__input_number__ = __webpack_require__("./node_modules/antd/es/input-number/index.js");
/* unused harmony reexport InputNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__layout__ = __webpack_require__("./node_modules/antd/es/layout/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_23__layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__list__ = __webpack_require__("./node_modules/antd/es/list/index.js");
/* unused harmony reexport List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__locale_provider__ = __webpack_require__("./node_modules/antd/es/locale-provider/index.js");
/* unused harmony reexport LocaleProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__message__ = __webpack_require__("./node_modules/antd/es/message/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_26__message__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__menu__ = __webpack_require__("./node_modules/antd/es/menu/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_27__menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modal__ = __webpack_require__("./node_modules/antd/es/modal/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_28__modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__notification__ = __webpack_require__("./node_modules/antd/es/notification/index.js");
/* unused harmony reexport notification */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pagination__ = __webpack_require__("./node_modules/antd/es/pagination/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_30__pagination__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__popconfirm__ = __webpack_require__("./node_modules/antd/es/popconfirm/index.js");
/* unused harmony reexport Popconfirm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__popover__ = __webpack_require__("./node_modules/antd/es/popover/index.js");
/* unused harmony reexport Popover */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__progress__ = __webpack_require__("./node_modules/antd/es/progress/index.js");
/* unused harmony reexport Progress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__radio__ = __webpack_require__("./node_modules/antd/es/radio/index.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__rate__ = __webpack_require__("./node_modules/antd/es/rate/index.js");
/* unused harmony reexport Rate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__row__ = __webpack_require__("./node_modules/antd/es/row/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_36__row__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__select__ = __webpack_require__("./node_modules/antd/es/select/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_37__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__slider__ = __webpack_require__("./node_modules/antd/es/slider/index.js");
/* unused harmony reexport Slider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__spin__ = __webpack_require__("./node_modules/antd/es/spin/index.js");
/* unused harmony reexport Spin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__steps__ = __webpack_require__("./node_modules/antd/es/steps/index.js");
/* unused harmony reexport Steps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__switch__ = __webpack_require__("./node_modules/antd/es/switch/index.js");
/* unused harmony reexport Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__table__ = __webpack_require__("./node_modules/antd/es/table/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_42__table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__transfer__ = __webpack_require__("./node_modules/antd/es/transfer/index.js");
/* unused harmony reexport Transfer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__tree__ = __webpack_require__("./node_modules/antd/es/tree/index.js");
/* unused harmony reexport Tree */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__tree_select__ = __webpack_require__("./node_modules/antd/es/tree-select/index.js");
/* unused harmony reexport TreeSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__tabs__ = __webpack_require__("./node_modules/antd/es/tabs/index.js");
/* unused harmony reexport Tabs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__tag__ = __webpack_require__("./node_modules/antd/es/tag/index.js");
/* unused harmony reexport Tag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__time_picker__ = __webpack_require__("./node_modules/antd/es/time-picker/index.js");
/* unused harmony reexport TimePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__timeline__ = __webpack_require__("./node_modules/antd/es/timeline/index.js");
/* unused harmony reexport Timeline */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__tooltip__ = __webpack_require__("./node_modules/antd/es/tooltip/index.js");
/* unused harmony reexport Tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__mention__ = __webpack_require__("./node_modules/antd/es/mention/index.js");
/* unused harmony reexport Mention */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__upload__ = __webpack_require__("./node_modules/antd/es/upload/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_52__upload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__version__ = __webpack_require__("./node_modules/antd/es/version/index.js");
/* unused harmony reexport version */























































/***/ }),

/***/ "./node_modules/antd/es/modal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal__ = __webpack_require__("./node_modules/antd/es/modal/Modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm__ = __webpack_require__("./node_modules/antd/es/modal/confirm.js");



__WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */].info = function (props) {
    var config = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ type: 'info', iconType: 'info-circle', okCancel: false }, props);
    return Object(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* default */])(config);
};
__WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */].success = function (props) {
    var config = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ type: 'success', iconType: 'check-circle', okCancel: false }, props);
    return Object(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* default */])(config);
};
__WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */].error = function (props) {
    var config = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ type: 'error', iconType: 'cross-circle', okCancel: false }, props);
    return Object(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* default */])(config);
};
__WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */].warning = __WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */].warn = function (props) {
    var config = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ type: 'warning', iconType: 'exclamation-circle', okCancel: false }, props);
    return Object(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* default */])(config);
};
__WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */].confirm = function (props) {
    var config = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ type: 'confirm', okCancel: true }, props);
    return Object(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* default */])(config);
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */]);

/***/ })

})
//# sourceMappingURL=5.695d9842b7573c49a089.hot-update.js.map