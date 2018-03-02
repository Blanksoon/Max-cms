webpackHotUpdate(6,{

/***/ "./components/lives/LivesInsert.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UploadImage__ = __webpack_require__("./components/utils/UploadImage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__("./api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_Spinner__ = __webpack_require__("./components/commons/Spinner.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FormItem = __WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Form */].Item;
var Option = __WEBPACK_IMPORTED_MODULE_3_antd__["o" /* Select */].Option;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_3_antd__["a" /* AutoComplete */].Option;
var TextArea = __WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */].TextArea;

var LivesInsert = function (_React$Component) {
  _inherits(LivesInsert, _React$Component);

  function LivesInsert(props) {
    var _this2 = this;

    _classCallCheck(this, LivesInsert);

    var _this = _possibleConstructorReturn(this, (LivesInsert.__proto__ || Object.getPrototypeOf(LivesInsert)).call(this, props));

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(err, values) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.setState({
                    loading: true
                  });

                  if (err) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return _this.addNews(values);

                case 4:
                  //console.log('3', values)
                  _this.info();

                case 5:
                  _this.setState({
                    loading: false
                  });

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    };

    _this.state = {
      loading: false
    };
    _this.handleOnchangeImage = _this.handleOnchangeImage.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.info = _this.info.bind(_this);
    return _this;
  }

  _createClass(LivesInsert, [{
    key: 'handleOnchangeImage',
    value: function handleOnchangeImage(imgUrl) {
      if (imgUrl !== '') {
        this.props.form.setFieldsValue({
          thumbnailUrl: imgUrl
        });
      }
      return 'success';
    }
  }, {
    key: 'addNews',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(value) {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__api__["b" /* post */](__WEBPACK_IMPORTED_MODULE_5__api__["a" /* SERVER */] + '/vods/new', value);

              case 2:
                result = _context2.sent;

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addNews(_x3) {
        return _ref2.apply(this, arguments);
      }

      return addNews;
    }()
  }, {
    key: 'info',
    value: function info() {
      __WEBPACK_IMPORTED_MODULE_3_antd__["l" /* Modal */].info({
        title: 'Success for new vod',
        content: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            'you add 1 vod'
          )
        ),
        onOk: function onOk() {}
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      //console.log('111111111111', this.props.form)

      var autoCompleteResult = this.state.autoCompleteResult;


      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 14,
            offset: 10
          }
        }
      };
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'jsx-4016259393',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["n" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["d" /* Col */],
            { span: 24, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              'Vods'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-4016259393' + ' ' + 'setting-row',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-4016259393',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            },
            'EN'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Form */],
          { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Title:', __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            }),
            getFieldDecorator('title_en', {
              rules: [{
                required: true,
                message: 'Please select Title!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["o" /* Select */],
              {
                showSearch: true,
                style: { width: 250 },
                placeholder: 'Select a title',
                optionFilterProp: 'children'
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                , filterOption: function filterOption(input, option) {
                  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  }
                },
                'Max Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Battle Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                  }
                },
                'Muay Thai Battle'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Muaythai Fighter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                  }
                },
                'Muaythai Fighter'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'The Champion Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  }
                },
                'The Champion Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Wednesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                  }
                },
                'Global Fight Wednesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Thursday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  }
                },
                'Global Fight Thursday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'MUAY THAI FIGHTER Monday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  }
                },
                'MUAY THAI FIGHTER Monday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Octa Fight Tuesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                  }
                },
                'Octa Fight Tuesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Sunday Afternoon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                  }
                },
                'Max Sunday Afternoon'
              )
            ))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Short-desc1:', __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              }
            }),
            getFieldDecorator('desc_en', {
              rules: [{
                required: true,
                message: 'Please input your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 171
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Short-desc2:', __source: {
                fileName: _jsxFileName,
                lineNumber: 173
              }
            }),
            getFieldDecorator('desc_en', {
              rules: [{
                required: true,
                message: 'Please input your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 181
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Desc:', __source: {
                fileName: _jsxFileName,
                lineNumber: 183
              }
            }),
            getFieldDecorator('desc_en', {
              rules: [{
                required: true,
                message: 'Please input your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-4016259393' + ' ' + 'hr-tag',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-4016259393' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 195
                }
              },
              'TH'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Title:', __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              }
            }),
            getFieldDecorator('title_th', {
              rules: [{
                required: true,
                message: 'Please select Title!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["o" /* Select */],
              {
                showSearch: true,
                style: { width: 250 },
                placeholder: 'Select a Title',
                optionFilterProp: 'children'
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                , filterOption: function filterOption(input, option) {
                  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 206
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E41\u0E21\u0E47\u0E01\u0E0B\u0E4C\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                  }
                },
                '\u0E41\u0E21\u0E47\u0E01\u0E0B\u0E4C\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E41\u0E1A\u0E17\u0E40\u0E17\u0E34\u0E25', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 221
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E41\u0E1A\u0E17\u0E40\u0E17\u0E34\u0E25'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E40\u0E14\u0E2D\u0E30\u0E41\u0E0A\u0E21\u0E1B\u0E4C\u0E40\u0E1B\u0E35\u0E49\u0E22\u0E19 \u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E15\u0E31\u0E14\u0E40\u0E0A\u0E37\u0E2D\u0E01', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                  }
                },
                '\u0E40\u0E14\u0E2D\u0E30\u0E41\u0E0A\u0E21\u0E1B\u0E4C\u0E40\u0E1B\u0E35\u0E49\u0E22\u0E19 \u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E15\u0E31\u0E14\u0E40\u0E0A\u0E37\u0E2D\u0E01'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                  }
                },
                '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                  }
                },
                '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 232
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E41\u0E21\u0E47\u0E01\u0E0B\u0E4C \u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E1A\u0E48\u0E32\u0E22', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                  }
                },
                '\u0E41\u0E21\u0E47\u0E01\u0E0B\u0E4C \u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E1A\u0E48\u0E32\u0E22'
              )
            ))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Short-desc1:', __source: {
                fileName: _jsxFileName,
                lineNumber: 244
              }
            }),
            getFieldDecorator('desc_th', {
              rules: [{
                required: true,
                message: 'Please insert your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 252
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Short-desc2:', __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              }
            }),
            getFieldDecorator('desc_en', {
              rules: [{
                required: true,
                message: 'Please input your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 262
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Desc:', __source: {
                fileName: _jsxFileName,
                lineNumber: 264
              }
            }),
            getFieldDecorator('desc_en', {
              rules: [{
                required: true,
                message: 'Please input your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 272
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-4016259393' + ' ' + 'hr-tag',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'LiveToDate:', __source: {
                fileName: _jsxFileName,
                lineNumber: 275
              }
            }),
            getFieldDecorator('onAirDate', {
              rules: [{
                required: true,
                message: 'Please enter OnAirDate!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* DatePicker */], {
              showTime: true,
              placeholder: 'Select Date and Time',
              format: 'YYYY-MM-DD HH:mm:ss',
              style: { paddingRight: '2rem' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 284
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'LiveFromDate:', __source: {
                fileName: _jsxFileName,
                lineNumber: 292
              }
            }),
            getFieldDecorator('onAirDate', {
              rules: [{
                required: true,
                message: 'Please enter OnAirDate!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* DatePicker */], {
              showTime: true,
              placeholder: 'Select Date and Time',
              format: 'YYYY-MM-DD HH:mm:ss',
              style: { paddingRight: '2rem' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 301
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'productId:', __source: {
                fileName: _jsxFileName,
                lineNumber: 309
              }
            }),
            getFieldDecorator('videoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Video-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 317
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Program-name:', __source: {
                fileName: _jsxFileName,
                lineNumber: 319
              }
            }),
            getFieldDecorator('programName_en', {
              rules: [{
                required: true,
                message: 'Please select Program-name!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["o" /* Select */],
              {
                showSearch: true,
                style: { width: 250 },
                placeholder: 'Select a program',
                optionFilterProp: 'children'
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                , filterOption: function filterOption(input, option) {
                  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 328
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 342
                  }
                },
                'Max Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Battle Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 343
                  }
                },
                'Battle Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Muaythai Fighter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 344
                  }
                },
                'Muaythai Fighter'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'The Champion Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 345
                  }
                },
                'The Champion Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Wednesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 348
                  }
                },
                'Global Fight Wednesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Thursday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 351
                  }
                },
                'Global Fight Thursday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'MUAY THAI FIGHTER Monday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 354
                  }
                },
                'MUAY THAI FIGHTER Monday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Octa Fight Tuesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 357
                  }
                },
                'Octa Fight Tuesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Sunday Afternoon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 358
                  }
                },
                'Max Sunday Afternoon'
              )
            ))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'showOrder:', __source: {
                fileName: _jsxFileName,
                lineNumber: 364
              }
            }),
            getFieldDecorator('videoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Video-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 372
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'startTime:', __source: {
                fileName: _jsxFileName,
                lineNumber: 374
              }
            }),
            getFieldDecorator('videoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Video-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 382
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'endTime:', __source: {
                fileName: _jsxFileName,
                lineNumber: 384
              }
            }),
            getFieldDecorator('videoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Video-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 392
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'liveDay:', __source: {
                fileName: _jsxFileName,
                lineNumber: 394
              }
            }),
            getFieldDecorator('videoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Video-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 402
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'fightcardUrl:', __source: {
                fileName: _jsxFileName,
                lineNumber: 404
              }
            }),
            getFieldDecorator('thumbnailUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [{
                required: true,
                message: 'Please upload Thumbnail-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__utils_UploadImage__["a" /* default */], { onChangeImg: this.handleOnchangeImage, __source: {
                fileName: _jsxFileName,
                lineNumber: 414
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Video-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 416
              }
            }),
            getFieldDecorator('videoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Video-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 424
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Promo-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 426
              }
            }),
            getFieldDecorator('promoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Promo-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 434
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Banner-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 436
              }
            }),
            getFieldDecorator('thumbnailUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [{
                required: true,
                message: 'Please upload Thumbnail-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__utils_UploadImage__["a" /* default */], { onChangeImg: this.handleOnchangeImage, __source: {
                fileName: _jsxFileName,
                lineNumber: 446
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Logo-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 448
              }
            }),
            getFieldDecorator('thumbnailUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [{
                required: true,
                message: 'Please upload Thumbnail-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__utils_UploadImage__["a" /* default */], { onChangeImg: this.handleOnchangeImage, __source: {
                fileName: _jsxFileName,
                lineNumber: 458
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Price:', __source: {
                fileName: _jsxFileName,
                lineNumber: 460
              }
            }),
            getFieldDecorator('duration', {
              rules: [{
                required: true,
                message: 'Please insert your Duration!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 468
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'status:', __source: {
                fileName: _jsxFileName,
                lineNumber: 470
              }
            }),
            getFieldDecorator('duration', {
              rules: [{
                required: true,
                message: 'Please insert your Duration!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 478
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, tailFormItemLayout, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 490
              }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 491
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["c" /* Button */],
                {
                  style: {
                    width: '9rem',
                    height: '2.5rem',
                    backgroundColor: '#4caf4f',
                    color: 'white',
                    fontSize: '1.2rem'
                  },
                  loading: this.state.loading,
                  htmlType: 'submit',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 492
                  }
                },
                'save'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '4016259393',
          css: '.setting-row.jsx-4016259393{margin-left:1rem;}.hr-tag.jsx-4016259393{margin-bottom:1.5rem;}.submit-button.jsx-4016259393{width:8rem;height:2rem;background-color:green;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGl2ZXMvTGl2ZXNJbnNlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMmZvQixBQUc4QixBQUdJLEFBR1YsV0FDQyxNQU5kLElBR0EsRUFJeUIsdUJBQ1gsWUFDZCIsImZpbGUiOiJjb21wb25lbnRzL2xpdmVzL0xpdmVzSW5zZXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mYXJtb3ovRGVza3RvcC9NYXhNdWF5VGhhaS9jbXMvTWF4LWNtcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERhdGVQaWNrZXIsXG4gIEZvcm0sXG4gIElucHV0LFxuICBUb29sdGlwLFxuICBJY29uLFxuICBDYXNjYWRlcixcbiAgU2VsZWN0LFxuICBSb3csXG4gIENvbCxcbiAgQ2hlY2tib3gsXG4gIEJ1dHRvbixcbiAgQXV0b0NvbXBsZXRlLFxuICBNb2RhbCxcbn0gZnJvbSAnYW50ZCdcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tICcuLi91dGlscy9VcGxvYWRJbWFnZSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi9hcGknXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21tb25zL1NwaW5uZXInXG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5jb25zdCBBdXRvQ29tcGxldGVPcHRpb24gPSBBdXRvQ29tcGxldGUuT3B0aW9uXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dFxuXG5jbGFzcyBMaXZlc0luc2VydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZU9uY2hhbmdlSW1hZ2UgPSB0aGlzLmhhbmRsZU9uY2hhbmdlSW1hZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaW5mbyA9IHRoaXMuaW5mby5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVPbmNoYW5nZUltYWdlKGltZ1VybCkge1xuICAgIGlmIChpbWdVcmwgIT09ICcnKSB7XG4gICAgICB0aGlzLnByb3BzLmZvcm0uc2V0RmllbGRzVmFsdWUoe1xuICAgICAgICB0aHVtYm5haWxVcmw6IGltZ1VybCxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAnc3VjY2VzcydcbiAgfVxuXG4gIGFzeW5jIGFkZE5ld3ModmFsdWUpIHtcbiAgICAvL2NvbnNvbGUubG9nKCcxJywgdmFsdWUpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnBvc3QoYCR7YXBpLlNFUlZFUn0vdm9kcy9uZXdgLCB2YWx1ZSlcbiAgICAvL2NvbnNvbGUubG9nKCcyJywgcmVzdWx0KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsKGFzeW5jIChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9KVxuICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hZGROZXdzKHZhbHVlcylcbiAgICAgICAgLy9jb25zb2xlLmxvZygnMycsIHZhbHVlcylcbiAgICAgICAgdGhpcy5pbmZvKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGluZm8oKSB7XG4gICAgTW9kYWwuaW5mbyh7XG4gICAgICB0aXRsZTogJ1N1Y2Nlc3MgZm9yIG5ldyB2b2QnLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnlvdSBhZGQgMSB2b2Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSxcbiAgICAgIG9uT2soKSB7fSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IHRoaXMucHJvcHMuZm9ybVxuICAgIC8vY29uc29sZS5sb2coJzExMTExMTExMTExMScsIHRoaXMucHJvcHMuZm9ybSlcbiAgICBjb25zdCB7IGF1dG9Db21wbGV0ZVJlc3VsdCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgZm9ybUl0ZW1MYXlvdXQgPSB7XG4gICAgICBsYWJlbENvbDoge1xuICAgICAgICB4czogeyBzcGFuOiAyNCB9LFxuICAgICAgICBzbTogeyBzcGFuOiA0IH0sXG4gICAgICB9LFxuICAgICAgd3JhcHBlckNvbDoge1xuICAgICAgICB4czogeyBzcGFuOiAyNCB9LFxuICAgICAgICBzbTogeyBzcGFuOiAxNiB9LFxuICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdGFpbEZvcm1JdGVtTGF5b3V0ID0ge1xuICAgICAgd3JhcHBlckNvbDoge1xuICAgICAgICB4czoge1xuICAgICAgICAgIHNwYW46IDI0LFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgc206IHtcbiAgICAgICAgICBzcGFuOiAxNCxcbiAgICAgICAgICBvZmZzZXQ6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICA8aDE+Vm9kczwvaDE+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgPGgyPkVOPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJUaXRsZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndGl0bGVfZW4nLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBUaXRsZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSB0aXRsZVwiXG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvL29uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgICAgICAgLy9vbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTWF4IE11YXkgVGhhaVwiPk1heCBNdWF5IFRoYWk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQmF0dGxlIE11YXkgVGhhaVwiPk11YXkgVGhhaSBCYXR0bGU8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTXVheXRoYWkgRmlnaHRlclwiPk11YXl0aGFpIEZpZ2h0ZXI8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVGhlIENoYW1waW9uIE11YXkgVGhhaVwiPlxuICAgICAgICAgICAgICAgICAgVGhlIENoYW1waW9uIE11YXkgVGhhaVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJHbG9iYWwgRmlnaHQgV2VkbmVzZGF5XCI+XG4gICAgICAgICAgICAgICAgICBHbG9iYWwgRmlnaHQgV2VkbmVzZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdsb2JhbCBGaWdodCBUaHVyc2RheVwiPlxuICAgICAgICAgICAgICAgICAgR2xvYmFsIEZpZ2h0IFRodXJzZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk1VQVkgVEhBSSBGSUdIVEVSIE1vbmRheVwiPlxuICAgICAgICAgICAgICAgICAgTVVBWSBUSEFJIEZJR0hURVIgTW9uZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk9jdGEgRmlnaHQgVHVlc2RheVwiPk9jdGEgRmlnaHQgVHVlc2RheTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNYXggU3VuZGF5IEFmdGVybm9vblwiPlxuICAgICAgICAgICAgICAgICAgTWF4IFN1bmRheSBBZnRlcm5vb25cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJTaG9ydC1kZXNjMTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignZGVzY19lbicsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBEZXNjIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKDxUZXh0QXJlYSByb3dzPXsxMH0gLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJTaG9ydC1kZXNjMjpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignZGVzY19lbicsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBEZXNjIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKDxUZXh0QXJlYSByb3dzPXsxMH0gLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJEZXNjOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdkZXNjX2VuJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIERlc2MhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFRleHRBcmVhIHJvd3M9ezEwfSAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtgaHItdGFnYH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgICA8aDI+VEg8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiVGl0bGU6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3RpdGxlX3RoJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgVGl0bGUhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1MCB9fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgVGl0bGVcIlxuICAgICAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJjaGlsZHJlblwiXG4gICAgICAgICAgICAgICAgLy9vbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLy9vbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgICAgICAgIC8vb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG9wdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuC5geC4oeC5h+C4geC4i+C5jOC4oeC4p+C4ouC5hOC4l+C4olwiPuC5geC4oeC5h+C4geC4i+C5jOC4oeC4p+C4ouC5hOC4l+C4ojwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLguKHguKfguKLguYTguJfguKIg4LmB4Lia4LiX4LmA4LiX4Li04LilXCI+4Lih4Lin4Lii4LmE4LiX4LiiIOC5geC4muC4l+C5gOC4l+C4tOC4pTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLguKHguKfguKLguYTguJfguKIg4LmE4Lif4LiV4LmM4LmA4LiV4Lit4Lij4LmMXCI+4Lih4Lin4Lii4LmE4LiX4LiiIOC5hOC4n+C4leC5jOC5gOC4leC4reC4o+C5jDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLguYDguJTguK3guLDguYHguIrguKHguJvguYzguYDguJvguLXguYnguKLguJkg4Lih4Lin4Lii4LmE4LiX4LiiIOC4leC4seC4lOC5gOC4iuC4t+C4reC4gVwiPlxuICAgICAgICAgICAgICAgICAg4LmA4LiU4Lit4Liw4LmB4LiK4Lih4Lib4LmM4LmA4Lib4Li14LmJ4Lii4LiZIOC4oeC4p+C4ouC5hOC4l+C4oiDguJXguLHguJTguYDguIrguLfguK3guIFcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwi4LmC4LiB4Lil4LiU4LmM4Lia4Lit4LilIOC5hOC4n+C4l+C5jCDguKfguLHguJnguJ7guLjguJhcIj5cbiAgICAgICAgICAgICAgICAgIOC5guC4geC4peC4lOC5jOC4muC4reC4pSDguYTguJ/guJfguYwg4Lin4Lix4LiZ4Lie4Li44LiYXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuC5guC4geC4peC4lOC5jOC4muC4reC4pSDguYTguJ/guJfguYwg4Lin4Lix4LiZ4Lie4Lik4Lir4Lix4LiqXCI+XG4gICAgICAgICAgICAgICAgICDguYLguIHguKXguJTguYzguJrguK3guKUg4LmE4Lif4LiX4LmMIOC4p+C4seC4meC4nuC4pOC4q+C4seC4qlxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLguKHguKfguKLguYTguJfguKLguYTguJ/guJXguYzguYDguJXguK3guKPguYwg4Lin4Lix4LiZ4LiI4Lix4LiZ4LiX4Lij4LmMXCI+XG4gICAgICAgICAgICAgICAgICDguKHguKfguKLguYTguJfguKLguYTguJ/guJXguYzguYDguJXguK3guKPguYwg4Lin4Lix4LiZ4LiI4Lix4LiZ4LiX4Lij4LmMXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuC4oeC4p+C4ouC5hOC4l+C4ouC5hOC4n+C4leC5jOC5gOC4leC4reC4o+C5jCDguKfguLHguJnguK3guLHguIfguITguLLguKNcIj5cbiAgICAgICAgICAgICAgICAgIOC4oeC4p+C4ouC5hOC4l+C4ouC5hOC4n+C4leC5jOC5gOC4leC4reC4o+C5jCDguKfguLHguJnguK3guLHguIfguITguLLguKNcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwi4LmB4Lih4LmH4LiB4LiL4LmMIOC4p+C4seC4meC4reC4suC4l+C4tOC4leC4ouC5jCDguJrguYjguLLguKJcIj5cbiAgICAgICAgICAgICAgICAgIOC5geC4oeC5h+C4geC4i+C5jCDguKfguLHguJnguK3guLLguJfguLTguJXguKLguYwg4Lia4LmI4Liy4LiiXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiU2hvcnQtZGVzYzE6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2Rlc2NfdGgnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGluc2VydCB5b3VyIERlc2MhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFRleHRBcmVhIHJvd3M9ezEwfSAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIlNob3J0LWRlc2MyOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdkZXNjX2VuJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIERlc2MhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFRleHRBcmVhIHJvd3M9ezEwfSAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIkRlc2M6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2Rlc2NfZW4nLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgRGVzYyEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8VGV4dEFyZWEgcm93cz17MTB9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9e2Boci10YWdgfSAvPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiTGl2ZVRvRGF0ZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignb25BaXJEYXRlJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBPbkFpckRhdGUhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgc2hvd1RpbWVcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBEYXRlIGFuZCBUaW1lXCJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICcycmVtJyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiTGl2ZUZyb21EYXRlOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdvbkFpckRhdGUnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIE9uQWlyRGF0ZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICBzaG93VGltZVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IERhdGUgYW5kIFRpbWVcIlxuICAgICAgICAgICAgICAgIGZvcm1hdD1cIllZWVktTU0tREQgSEg6bW06c3NcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzJyZW0nIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJwcm9kdWN0SWQ6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3ZpZGVvVXJsJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnNlcnQgeW91ciBWaWRlby11cmwhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPElucHV0IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiUHJvZ3JhbS1uYW1lOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdwcm9ncmFtTmFtZV9lbicsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IFByb2dyYW0tbmFtZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBwcm9ncmFtXCJcbiAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8vb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICAgICAgICAvL29uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgICBvcHRpb24ucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNYXggTXVheSBUaGFpXCI+TWF4IE11YXkgVGhhaTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJCYXR0bGUgTXVheSBUaGFpXCI+QmF0dGxlIE11YXkgVGhhaTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNdWF5dGhhaSBGaWdodGVyXCI+TXVheXRoYWkgRmlnaHRlcjwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJUaGUgQ2hhbXBpb24gTXVheSBUaGFpXCI+XG4gICAgICAgICAgICAgICAgICBUaGUgQ2hhbXBpb24gTXVheSBUaGFpXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdsb2JhbCBGaWdodCBXZWRuZXNkYXlcIj5cbiAgICAgICAgICAgICAgICAgIEdsb2JhbCBGaWdodCBXZWRuZXNkYXlcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiR2xvYmFsIEZpZ2h0IFRodXJzZGF5XCI+XG4gICAgICAgICAgICAgICAgICBHbG9iYWwgRmlnaHQgVGh1cnNkYXlcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTVVBWSBUSEFJIEZJR0hURVIgTW9uZGF5XCI+XG4gICAgICAgICAgICAgICAgICBNVUFZIFRIQUkgRklHSFRFUiBNb25kYXlcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT2N0YSBGaWdodCBUdWVzZGF5XCI+T2N0YSBGaWdodCBUdWVzZGF5PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk1heCBTdW5kYXkgQWZ0ZXJub29uXCI+XG4gICAgICAgICAgICAgICAgICBNYXggU3VuZGF5IEFmdGVybm9vblxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cInNob3dPcmRlcjpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndmlkZW9VcmwnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGluc2VydCB5b3VyIFZpZGVvLXVybCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJzdGFydFRpbWU6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3ZpZGVvVXJsJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnNlcnQgeW91ciBWaWRlby11cmwhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPElucHV0IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiZW5kVGltZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndmlkZW9VcmwnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGluc2VydCB5b3VyIFZpZGVvLXVybCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJsaXZlRGF5OlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd2aWRlb1VybCcsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5zZXJ0IHlvdXIgVmlkZW8tdXJsIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKDxJbnB1dCAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cImZpZ2h0Y2FyZFVybDpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndGh1bWJuYWlsVXJsJywge1xuICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAnZmlsZUxpc3QnLFxuICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21FdmVudDogdGhpcy5ub3JtRmlsZSxcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgdXBsb2FkIFRodW1ibmFpbC11cmwhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFVwbG9hZEltYWdlIG9uQ2hhbmdlSW1nPXt0aGlzLmhhbmRsZU9uY2hhbmdlSW1hZ2V9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiVmlkZW8tdXJsOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd2aWRlb1VybCcsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5zZXJ0IHlvdXIgVmlkZW8tdXJsIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKDxJbnB1dCAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIlByb21vLXVybDpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigncHJvbW9VcmwnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGluc2VydCB5b3VyIFByb21vLXVybCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJCYW5uZXItdXJsOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0aHVtYm5haWxVcmwnLCB7XG4gICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICdmaWxlTGlzdCcsXG4gICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50OiB0aGlzLm5vcm1GaWxlLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSB1cGxvYWQgVGh1bWJuYWlsLXVybCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8VXBsb2FkSW1hZ2Ugb25DaGFuZ2VJbWc9e3RoaXMuaGFuZGxlT25jaGFuZ2VJbWFnZX0gLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJMb2dvLXVybDpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndGh1bWJuYWlsVXJsJywge1xuICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAnZmlsZUxpc3QnLFxuICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21FdmVudDogdGhpcy5ub3JtRmlsZSxcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgdXBsb2FkIFRodW1ibmFpbC11cmwhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFVwbG9hZEltYWdlIG9uQ2hhbmdlSW1nPXt0aGlzLmhhbmRsZU9uY2hhbmdlSW1hZ2V9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiUHJpY2U6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2R1cmF0aW9uJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnNlcnQgeW91ciBEdXJhdGlvbiEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJzdGF0dXM6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2R1cmF0aW9uJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnNlcnQgeW91ciBEdXJhdGlvbiEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgey8qIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiRmVhdHVyZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignZmVhdHVyZScsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IHlvdXIgRmVhdHVyZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+ICovfVxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4udGFpbEZvcm1JdGVtTGF5b3V0fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5cmVtJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIuNXJlbScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNGNhZjRmJyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJyZW0nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHNhdmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2V0dGluZy1yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oci10YWcge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGNvbnN0IGEgPSB7XG4vLyAgIHByb2dyYW1OYW1lX2VuIC8vXG4vLyAgIHRpdGxlX2VuIC8vXG4vLyAgIGRlc2NfZW4gLy9cbi8vICAgLy8gcHJvbW9Gcm9tVGltZVxuLy8gICAvLyBwcm9tb1RvVGltZVxuLy8gICAvL2ZyZWVcbi8vICAgcHJvZ3JhbU5hbWVfdGggLy9cbi8vICAgdGl0bGVfdGggLy9cbi8vICAgZGVzY190aCAvL1xuLy8gICAvL29uQWlyRGF0ZVN0cl9lblxuLy8gICAvL29uQWlyRGF0ZVN0cl90aFxuLy8gICB2aWRlb1VybCAvL1xuLy8gICB0aHVtYm5haWxVcmwgLy9cbi8vICAgbG9nb1VybCAvL1xuLy8gICBwcm9tb1VybCAvL1xuLy8gICBvbkFpckRhdGUgLy9cbi8vICAgZHVyYXRpb24gLy9cbi8vICAgZmVhdHVyZSAvL1xuLy8gfVxuXG5jb25zdCBJbmZvID0gRm9ybS5jcmVhdGUoKShMaXZlc0luc2VydClcbmV4cG9ydCBkZWZhdWx0IEluZm9cbiJdfQ== */\n/*@ sourceURL=components/lives/LivesInsert.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return LivesInsert;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

// const a = {
//   programName_en //
//   title_en //
//   desc_en //
//   // promoFromTime
//   // promoToTime
//   //free
//   programName_th //
//   title_th //
//   desc_th //
//   //onAirDateStr_en
//   //onAirDateStr_th
//   videoUrl //
//   thumbnailUrl //
//   logoUrl //
//   promoUrl //
//   onAirDate //
//   duration //
//   feature //
// }

var Info = __WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Form */].create()(LivesInsert);
var _default = Info;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js');
  reactHotLoader.register(Option, 'Option', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js');
  reactHotLoader.register(AutoCompleteOption, 'AutoCompleteOption', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js');
  reactHotLoader.register(TextArea, 'TextArea', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js');
  reactHotLoader.register(LivesInsert, 'LivesInsert', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js');
  reactHotLoader.register(Info, 'Info', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/lives/LivesInsert.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.7a1b38acc2a91896638e.hot-update.js.map