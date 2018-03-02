webpackHotUpdate(4,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UploadFightcardImage__ = __webpack_require__("./components/utils/UploadFightcardImage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_UploadImageBanner__ = __webpack_require__("./components/utils/UploadImageBanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_UploadLogoImage__ = __webpack_require__("./components/utils/UploadLogoImage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api__ = __webpack_require__("./api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commons_Spinner__ = __webpack_require__("./components/commons/Spinner.js");


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








var FormItem = __WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Form */].Item;
var Option = __WEBPACK_IMPORTED_MODULE_3_antd__["l" /* Select */].Option;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_3_antd__["a" /* AutoComplete */].Option;
var TextArea = __WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */].TextArea;

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
                  if (!err) {
                    console.log(values);
                    //await this.addNews(values)
                    //console.log('3', values)
                    //this.info()
                  }
                  _this.setState({
                    loading: false
                  });

                case 3:
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
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.info = _this.info.bind(_this);
    _this.handleFightcardImage = _this.handleFightcardImage.bind(_this);
    _this.handleBannerImage = _this.handleBannerImage.bind(_this);
    _this.handleLogoImage = _this.handleLogoImage.bind(_this);
    return _this;
  }

  _createClass(LivesInsert, [{
    key: 'handleFightcardImage',
    value: function handleFightcardImage(imgUrl) {
      if (imgUrl !== '') {
        this.props.form.setFieldsValue({
          fightcardUrl: imgUrl
        });
      }
      return 'success';
    }
  }, {
    key: 'handleBannerImage',
    value: function handleBannerImage(imgUrl) {
      if (imgUrl !== '') {
        this.props.form.setFieldsValue({
          bannerUrl: imgUrl
        });
      }
      return 'success';
    }
  }, {
    key: 'handleLogoImage',
    value: function handleLogoImage(imgUrl) {
      if (imgUrl !== '') {
        this.props.form.setFieldsValue({
          logoUrl: imgUrl
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
                return __WEBPACK_IMPORTED_MODULE_7__api__["b" /* post */](__WEBPACK_IMPORTED_MODULE_7__api__["a" /* SERVER */] + '/vods/new', value);

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
      __WEBPACK_IMPORTED_MODULE_3_antd__["j" /* Modal */].info({
        title: 'Success for new vod',
        content: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
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
            lineNumber: 131
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["k" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["c" /* Col */],
            { span: 24, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
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
              lineNumber: 137
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-4016259393',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            },
            'EN'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Form */],
          { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Title:', __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              }
            }),
            getFieldDecorator('title_en', {
              rules: [{
                required: true,
                message: 'Please select Title!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["l" /* Select */],
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
                  lineNumber: 150
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  }
                },
                'Max Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Battle Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                  }
                },
                'Muay Thai Battle'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Muaythai Fighter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                  }
                },
                'Muaythai Fighter'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'The Champion Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                  }
                },
                'The Champion Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Wednesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  }
                },
                'Global Fight Wednesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Thursday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                  }
                },
                'Global Fight Thursday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'MUAY THAI FIGHTER Monday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                  }
                },
                'MUAY THAI FIGHTER Monday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Octa Fight Tuesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                  }
                },
                'Octa Fight Tuesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Sunday Afternoon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
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
                lineNumber: 186
              }
            }),
            getFieldDecorator('shortDesc1_en', {
              rules: [{
                required: true,
                message: 'Please input your Short-desc1!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Short-desc2:', __source: {
                fileName: _jsxFileName,
                lineNumber: 196
              }
            }),
            getFieldDecorator('shortDesc2_en', {
              rules: [{
                required: true,
                message: 'Please input your Short-desc2!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 204
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Desc:', __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              }
            }),
            getFieldDecorator('desc_en', {
              rules: [{
                required: true,
                message: 'Please input your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 214
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-4016259393' + ' ' + 'hr-tag',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-4016259393' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 217
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 218
                }
              },
              'TH'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Title:', __source: {
                fileName: _jsxFileName,
                lineNumber: 220
              }
            }),
            getFieldDecorator('title_th', {
              rules: [{
                required: true,
                message: 'Please select Title!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["l" /* Select */],
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
                  lineNumber: 229
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E41\u0E21\u0E47\u0E01\u0E0B\u0E4C\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                  }
                },
                '\u0E41\u0E21\u0E47\u0E01\u0E0B\u0E4C\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E41\u0E1A\u0E17\u0E40\u0E17\u0E34\u0E25', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E41\u0E1A\u0E17\u0E40\u0E17\u0E34\u0E25'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E40\u0E14\u0E2D\u0E30\u0E41\u0E0A\u0E21\u0E1B\u0E4C\u0E40\u0E1B\u0E35\u0E49\u0E22\u0E19 \u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E15\u0E31\u0E14\u0E40\u0E0A\u0E37\u0E2D\u0E01', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 246
                  }
                },
                '\u0E40\u0E14\u0E2D\u0E30\u0E41\u0E0A\u0E21\u0E1B\u0E4C\u0E40\u0E1B\u0E35\u0E49\u0E22\u0E19 \u0E21\u0E27\u0E22\u0E44\u0E17\u0E22 \u0E15\u0E31\u0E14\u0E40\u0E0A\u0E37\u0E2D\u0E01'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 249
                  }
                },
                '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                  }
                },
                '\u0E42\u0E01\u0E25\u0E14\u0E4C\u0E1A\u0E2D\u0E25 \u0E44\u0E1F\u0E17\u0E4C \u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
                  }
                },
                '\u0E21\u0E27\u0E22\u0E44\u0E17\u0E22\u0E44\u0E1F\u0E15\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: '\u0E41\u0E21\u0E47\u0E01\u0E0B\u0E4C \u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E1A\u0E48\u0E32\u0E22', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
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
                lineNumber: 267
              }
            }),
            getFieldDecorator('shortDesc1_th', {
              rules: [{
                required: true,
                message: 'Please insert your Short-desc1!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 275
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Short-desc2:', __source: {
                fileName: _jsxFileName,
                lineNumber: 277
              }
            }),
            getFieldDecorator('shortDesc2_th', {
              rules: [{
                required: true,
                message: 'Please input your Short-desc2!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 285
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Desc:', __source: {
                fileName: _jsxFileName,
                lineNumber: 287
              }
            }),
            getFieldDecorator('desc_th', {
              rules: [{
                required: true,
                message: 'Please input your Desc!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-4016259393' + ' ' + 'hr-tag',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Live-To-Date:', __source: {
                fileName: _jsxFileName,
                lineNumber: 298
              }
            }),
            getFieldDecorator('liveToDate', {
              rules: [{
                required: true,
                message: 'Please enter Live-To-Date!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* DatePicker */], {
              showTime: true,
              placeholder: 'Select Date and Time',
              format: 'YYYY-MM-DD HH:mm:ss',
              style: { paddingRight: '2rem' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 307
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Live-From-Date:', __source: {
                fileName: _jsxFileName,
                lineNumber: 315
              }
            }),
            getFieldDecorator('liveFromDate', {
              rules: [{
                required: true,
                message: 'Please enter Live-From-Date!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* DatePicker */], {
              showTime: true,
              placeholder: 'Select Date and Time',
              format: 'YYYY-MM-DD HH:mm:ss',
              style: { paddingRight: '2rem' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 324
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Program-name:', __source: {
                fileName: _jsxFileName,
                lineNumber: 332
              }
            }),
            getFieldDecorator('programName', {
              rules: [{
                required: true,
                message: 'Please select Program-name!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["l" /* Select */],
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
                  lineNumber: 341
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 355
                  }
                },
                'Max Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Battle Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 356
                  }
                },
                'Battle Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Muaythai Fighter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 357
                  }
                },
                'Muaythai Fighter'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'The Champion Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 358
                  }
                },
                'The Champion Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Wednesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 361
                  }
                },
                'Global Fight Wednesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Thursday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 364
                  }
                },
                'Global Fight Thursday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'MUAY THAI FIGHTER Monday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 367
                  }
                },
                'MUAY THAI FIGHTER Monday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Octa Fight Tuesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 370
                  }
                },
                'Octa Fight Tuesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Sunday Afternoon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 371
                  }
                },
                'Max Sunday Afternoon'
              )
            ))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Start-Time:', __source: {
                fileName: _jsxFileName,
                lineNumber: 377
              }
            }),
            getFieldDecorator('startTime', {
              rules: [{
                required: true,
                message: 'Please insert your Start-Time!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 385
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'End-Time:', __source: {
                fileName: _jsxFileName,
                lineNumber: 387
              }
            }),
            getFieldDecorator('endTime', {
              rules: [{
                required: true,
                message: 'Please insert yourEnd-Time!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 395
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Live-Date:', __source: {
                fileName: _jsxFileName,
                lineNumber: 397
              }
            }),
            getFieldDecorator('liveDay', {
              rules: [{
                required: true,
                message: 'Please insert your Live-Date!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["l" /* Select */],
              {
                showSearch: true,
                style: { width: 250 },
                placeholder: 'Select a day',
                optionFilterProp: 'children'
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                , filterOption: function filterOption(input, option) {
                  return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 406
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Monday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 420
                  }
                },
                'Monday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Tuesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 421
                  }
                },
                'Tuesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Wednesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 422
                  }
                },
                'Wednesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Thursday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 423
                  }
                },
                'Thursday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Friday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 424
                  }
                },
                'Friday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Saturday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 425
                  }
                },
                'Saturday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Sunday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 426
                  }
                },
                'Sunday'
              )
            ))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Fightcard-Url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 430
              }
            }),
            getFieldDecorator('fightcardUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [{
                required: true,
                message: 'Please upload Fightcard!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__utils_UploadFightcardImage__["a" /* default */], { onChangeImg: this.handleFightcardImage, __source: {
                fileName: _jsxFileName,
                lineNumber: 441
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Video-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 444
              }
            }),
            getFieldDecorator('videoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Video-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 452
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Promo-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 454
              }
            }),
            getFieldDecorator('promoUrl', {
              rules: [{
                required: true,
                message: 'Please insert your Promo-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 462
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Banner-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 464
              }
            }),
            getFieldDecorator('bannerUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [{
                required: true,
                message: 'Please upload Banner-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__utils_UploadImageBanner__["a" /* default */], { onChangeImg: this.handleBannerImage, __source: {
                fileName: _jsxFileName,
                lineNumber: 474
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Logo-url:', __source: {
                fileName: _jsxFileName,
                lineNumber: 476
              }
            }),
            getFieldDecorator('logoUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [{
                required: true,
                message: 'Please upload Logo-url!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__utils_UploadLogoImage__["a" /* default */], { onChangeImg: this.handleLogoImage, __source: {
                fileName: _jsxFileName,
                lineNumber: 486
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Price:', __source: {
                fileName: _jsxFileName,
                lineNumber: 488
              }
            }),
            getFieldDecorator('price', {
              rules: [{
                required: true,
                message: 'Please insert your Price!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 496
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, tailFormItemLayout, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 498
              }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 499
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */],
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
                    lineNumber: 500
                  }
                },
                'save'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '4016259393',
          css: '.setting-row.jsx-4016259393{margin-left:1rem;}.hr-tag.jsx-4016259393{margin-bottom:1.5rem;}.submit-button.jsx-4016259393{width:8rem;height:2rem;background-color:green;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGl2ZXMvTGl2ZXNJbnNlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbWdCb0IsQUFHOEIsQUFHSSxBQUdWLFdBQ0MsTUFOZCxJQUdBLEVBSXlCLHVCQUNYLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9saXZlcy9MaXZlc0luc2VydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFybW96L0Rlc2t0b3AvTWF4TXVheVRoYWkvY21zL01heC1jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEYXRlUGlja2VyLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgVG9vbHRpcCxcbiAgSWNvbixcbiAgQ2FzY2FkZXIsXG4gIFNlbGVjdCxcbiAgUm93LFxuICBDb2wsXG4gIENoZWNrYm94LFxuICBCdXR0b24sXG4gIEF1dG9Db21wbGV0ZSxcbiAgTW9kYWwsXG59IGZyb20gJ2FudGQnXG5pbXBvcnQgVXBsb2FkRmlnaHRjYXJkSW1hZ2UgZnJvbSAnLi4vdXRpbHMvVXBsb2FkRmlnaHRjYXJkSW1hZ2UnXG5pbXBvcnQgVXBsb2FkSW1hZ2VCYW5uZXIgZnJvbSAnLi4vdXRpbHMvVXBsb2FkSW1hZ2VCYW5uZXInXG5pbXBvcnQgVXBsb2FkTG9nb0ltYWdlIGZyb20gJy4uL3V0aWxzL1VwbG9hZExvZ29JbWFnZSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi9hcGknXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21tb25zL1NwaW5uZXInXG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5jb25zdCBBdXRvQ29tcGxldGVPcHRpb24gPSBBdXRvQ29tcGxldGUuT3B0aW9uXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dFxuXG5jbGFzcyBMaXZlc0luc2VydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB0aGlzLmluZm8gPSB0aGlzLmluZm8uYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRmlnaHRjYXJkSW1hZ2UgPSB0aGlzLmhhbmRsZUZpZ2h0Y2FyZEltYWdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUJhbm5lckltYWdlID0gdGhpcy5oYW5kbGVCYW5uZXJJbWFnZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVMb2dvSW1hZ2UgPSB0aGlzLmhhbmRsZUxvZ29JbWFnZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVGaWdodGNhcmRJbWFnZShpbWdVcmwpIHtcbiAgICBpZiAoaW1nVXJsICE9PSAnJykge1xuICAgICAgdGhpcy5wcm9wcy5mb3JtLnNldEZpZWxkc1ZhbHVlKHtcbiAgICAgICAgZmlnaHRjYXJkVXJsOiBpbWdVcmwsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gIH1cblxuICBoYW5kbGVCYW5uZXJJbWFnZShpbWdVcmwpIHtcbiAgICBpZiAoaW1nVXJsICE9PSAnJykge1xuICAgICAgdGhpcy5wcm9wcy5mb3JtLnNldEZpZWxkc1ZhbHVlKHtcbiAgICAgICAgYmFubmVyVXJsOiBpbWdVcmwsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gIH1cblxuICBoYW5kbGVMb2dvSW1hZ2UoaW1nVXJsKSB7XG4gICAgaWYgKGltZ1VybCAhPT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XG4gICAgICAgIGxvZ29Vcmw6IGltZ1VybCxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAnc3VjY2VzcydcbiAgfVxuXG4gIGFzeW5jIGFkZE5ld3ModmFsdWUpIHtcbiAgICAvL2NvbnNvbGUubG9nKCcxJywgdmFsdWUpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnBvc3QoYCR7YXBpLlNFUlZFUn0vdm9kcy9uZXdgLCB2YWx1ZSlcbiAgICAvL2NvbnNvbGUubG9nKCcyJywgcmVzdWx0KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsKGFzeW5jIChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9KVxuICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuICAgICAgICAvL2F3YWl0IHRoaXMuYWRkTmV3cyh2YWx1ZXMpXG4gICAgICAgIC8vY29uc29sZS5sb2coJzMnLCB2YWx1ZXMpXG4gICAgICAgIC8vdGhpcy5pbmZvKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGluZm8oKSB7XG4gICAgTW9kYWwuaW5mbyh7XG4gICAgICB0aXRsZTogJ1N1Y2Nlc3MgZm9yIG5ldyB2b2QnLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnlvdSBhZGQgMSB2b2Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSxcbiAgICAgIG9uT2soKSB7fSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IHRoaXMucHJvcHMuZm9ybVxuICAgIC8vY29uc29sZS5sb2coJzExMTExMTExMTExMScsIHRoaXMucHJvcHMuZm9ybSlcbiAgICBjb25zdCB7IGF1dG9Db21wbGV0ZVJlc3VsdCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgZm9ybUl0ZW1MYXlvdXQgPSB7XG4gICAgICBsYWJlbENvbDoge1xuICAgICAgICB4czogeyBzcGFuOiAyNCB9LFxuICAgICAgICBzbTogeyBzcGFuOiA0IH0sXG4gICAgICB9LFxuICAgICAgd3JhcHBlckNvbDoge1xuICAgICAgICB4czogeyBzcGFuOiAyNCB9LFxuICAgICAgICBzbTogeyBzcGFuOiAxNiB9LFxuICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdGFpbEZvcm1JdGVtTGF5b3V0ID0ge1xuICAgICAgd3JhcHBlckNvbDoge1xuICAgICAgICB4czoge1xuICAgICAgICAgIHNwYW46IDI0LFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgc206IHtcbiAgICAgICAgICBzcGFuOiAxNCxcbiAgICAgICAgICBvZmZzZXQ6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICA8aDE+Vm9kczwvaDE+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgPGgyPkVOPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJUaXRsZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndGl0bGVfZW4nLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBUaXRsZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSB0aXRsZVwiXG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvL29uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgICAgICAgLy9vbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTWF4IE11YXkgVGhhaVwiPk1heCBNdWF5IFRoYWk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQmF0dGxlIE11YXkgVGhhaVwiPk11YXkgVGhhaSBCYXR0bGU8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTXVheXRoYWkgRmlnaHRlclwiPk11YXl0aGFpIEZpZ2h0ZXI8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVGhlIENoYW1waW9uIE11YXkgVGhhaVwiPlxuICAgICAgICAgICAgICAgICAgVGhlIENoYW1waW9uIE11YXkgVGhhaVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJHbG9iYWwgRmlnaHQgV2VkbmVzZGF5XCI+XG4gICAgICAgICAgICAgICAgICBHbG9iYWwgRmlnaHQgV2VkbmVzZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdsb2JhbCBGaWdodCBUaHVyc2RheVwiPlxuICAgICAgICAgICAgICAgICAgR2xvYmFsIEZpZ2h0IFRodXJzZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk1VQVkgVEhBSSBGSUdIVEVSIE1vbmRheVwiPlxuICAgICAgICAgICAgICAgICAgTVVBWSBUSEFJIEZJR0hURVIgTW9uZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk9jdGEgRmlnaHQgVHVlc2RheVwiPk9jdGEgRmlnaHQgVHVlc2RheTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNYXggU3VuZGF5IEFmdGVybm9vblwiPlxuICAgICAgICAgICAgICAgICAgTWF4IFN1bmRheSBBZnRlcm5vb25cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJTaG9ydC1kZXNjMTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignc2hvcnREZXNjMV9lbicsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBTaG9ydC1kZXNjMSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8VGV4dEFyZWEgcm93cz17MTB9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiU2hvcnQtZGVzYzI6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Nob3J0RGVzYzJfZW4nLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgU2hvcnQtZGVzYzIhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFRleHRBcmVhIHJvd3M9ezEwfSAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIkRlc2M6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2Rlc2NfZW4nLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgRGVzYyEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8VGV4dEFyZWEgcm93cz17MTB9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9e2Boci10YWdgfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2V0dGluZy1yb3cnfT5cbiAgICAgICAgICAgIDxoMj5USDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJUaXRsZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndGl0bGVfdGgnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBUaXRsZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBUaXRsZVwiXG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvL29uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgICAgICAgLy9vbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwi4LmB4Lih4LmH4LiB4LiL4LmM4Lih4Lin4Lii4LmE4LiX4LiiXCI+4LmB4Lih4LmH4LiB4LiL4LmM4Lih4Lin4Lii4LmE4LiX4LiiPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuC4oeC4p+C4ouC5hOC4l+C4oiDguYHguJrguJfguYDguJfguLTguKVcIj7guKHguKfguKLguYTguJfguKIg4LmB4Lia4LiX4LmA4LiX4Li04LilPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuC4oeC4p+C4ouC5hOC4l+C4oiDguYTguJ/guJXguYzguYDguJXguK3guKPguYxcIj7guKHguKfguKLguYTguJfguKIg4LmE4Lif4LiV4LmM4LmA4LiV4Lit4Lij4LmMPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuC5gOC4lOC4reC4sOC5geC4iuC4oeC4m+C5jOC5gOC4m+C4teC5ieC4ouC4mSDguKHguKfguKLguYTguJfguKIg4LiV4Lix4LiU4LmA4LiK4Li34Lit4LiBXCI+XG4gICAgICAgICAgICAgICAgICDguYDguJTguK3guLDguYHguIrguKHguJvguYzguYDguJvguLXguYnguKLguJkg4Lih4Lin4Lii4LmE4LiX4LiiIOC4leC4seC4lOC5gOC4iuC4t+C4reC4gVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLguYLguIHguKXguJTguYzguJrguK3guKUg4LmE4Lif4LiX4LmMIOC4p+C4seC4meC4nuC4uOC4mFwiPlxuICAgICAgICAgICAgICAgICAg4LmC4LiB4Lil4LiU4LmM4Lia4Lit4LilIOC5hOC4n+C4l+C5jCDguKfguLHguJnguJ7guLjguJhcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwi4LmC4LiB4Lil4LiU4LmM4Lia4Lit4LilIOC5hOC4n+C4l+C5jCDguKfguLHguJnguJ7guKTguKvguLHguKpcIj5cbiAgICAgICAgICAgICAgICAgIOC5guC4geC4peC4lOC5jOC4muC4reC4pSDguYTguJ/guJfguYwg4Lin4Lix4LiZ4Lie4Lik4Lir4Lix4LiqXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuC4oeC4p+C4ouC5hOC4l+C4ouC5hOC4n+C4leC5jOC5gOC4leC4reC4o+C5jCDguKfguLHguJnguIjguLHguJnguJfguKPguYxcIj5cbiAgICAgICAgICAgICAgICAgIOC4oeC4p+C4ouC5hOC4l+C4ouC5hOC4n+C4leC5jOC5gOC4leC4reC4o+C5jCDguKfguLHguJnguIjguLHguJnguJfguKPguYxcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwi4Lih4Lin4Lii4LmE4LiX4Lii4LmE4Lif4LiV4LmM4LmA4LiV4Lit4Lij4LmMIOC4p+C4seC4meC4reC4seC4h+C4hOC4suC4o1wiPlxuICAgICAgICAgICAgICAgICAg4Lih4Lin4Lii4LmE4LiX4Lii4LmE4Lif4LiV4LmM4LmA4LiV4Lit4Lij4LmMIOC4p+C4seC4meC4reC4seC4h+C4hOC4suC4o1xuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLguYHguKHguYfguIHguIvguYwg4Lin4Lix4LiZ4Lit4Liy4LiX4Li04LiV4Lii4LmMIOC4muC5iOC4suC4olwiPlxuICAgICAgICAgICAgICAgICAg4LmB4Lih4LmH4LiB4LiL4LmMIOC4p+C4seC4meC4reC4suC4l+C4tOC4leC4ouC5jCDguJrguYjguLLguKJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJTaG9ydC1kZXNjMTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignc2hvcnREZXNjMV90aCcsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5zZXJ0IHlvdXIgU2hvcnQtZGVzYzEhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFRleHRBcmVhIHJvd3M9ezEwfSAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIlNob3J0LWRlc2MyOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdzaG9ydERlc2MyX3RoJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFNob3J0LWRlc2MyIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKDxUZXh0QXJlYSByb3dzPXsxMH0gLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJEZXNjOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdkZXNjX3RoJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIERlc2MhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFRleHRBcmVhIHJvd3M9ezEwfSAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtgaHItdGFnYH0gLz5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIkxpdmUtVG8tRGF0ZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignbGl2ZVRvRGF0ZScsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgTGl2ZS1Uby1EYXRlIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgIHNob3dUaW1lXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgRGF0ZSBhbmQgVGltZVwiXG4gICAgICAgICAgICAgICAgZm9ybWF0PVwiWVlZWS1NTS1ERCBISDptbTpzc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMnJlbScgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIkxpdmUtRnJvbS1EYXRlOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdsaXZlRnJvbURhdGUnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIExpdmUtRnJvbS1EYXRlIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgIHNob3dUaW1lXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgRGF0ZSBhbmQgVGltZVwiXG4gICAgICAgICAgICAgICAgZm9ybWF0PVwiWVlZWS1NTS1ERCBISDptbTpzc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMnJlbScgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIlByb2dyYW0tbmFtZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigncHJvZ3JhbU5hbWUnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBQcm9ncmFtLW5hbWUhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1MCB9fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgcHJvZ3JhbVwiXG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvL29uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgICAgICAgLy9vbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTWF4IE11YXkgVGhhaVwiPk1heCBNdWF5IFRoYWk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQmF0dGxlIE11YXkgVGhhaVwiPkJhdHRsZSBNdWF5IFRoYWk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTXVheXRoYWkgRmlnaHRlclwiPk11YXl0aGFpIEZpZ2h0ZXI8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVGhlIENoYW1waW9uIE11YXkgVGhhaVwiPlxuICAgICAgICAgICAgICAgICAgVGhlIENoYW1waW9uIE11YXkgVGhhaVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJHbG9iYWwgRmlnaHQgV2VkbmVzZGF5XCI+XG4gICAgICAgICAgICAgICAgICBHbG9iYWwgRmlnaHQgV2VkbmVzZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdsb2JhbCBGaWdodCBUaHVyc2RheVwiPlxuICAgICAgICAgICAgICAgICAgR2xvYmFsIEZpZ2h0IFRodXJzZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk1VQVkgVEhBSSBGSUdIVEVSIE1vbmRheVwiPlxuICAgICAgICAgICAgICAgICAgTVVBWSBUSEFJIEZJR0hURVIgTW9uZGF5XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk9jdGEgRmlnaHQgVHVlc2RheVwiPk9jdGEgRmlnaHQgVHVlc2RheTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNYXggU3VuZGF5IEFmdGVybm9vblwiPlxuICAgICAgICAgICAgICAgICAgTWF4IFN1bmRheSBBZnRlcm5vb25cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJTdGFydC1UaW1lOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdzdGFydFRpbWUnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGluc2VydCB5b3VyIFN0YXJ0LVRpbWUhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPElucHV0IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiRW5kLVRpbWU6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2VuZFRpbWUnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGluc2VydCB5b3VyRW5kLVRpbWUhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPElucHV0IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiTGl2ZS1EYXRlOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdsaXZlRGF5Jywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnNlcnQgeW91ciBMaXZlLURhdGUhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1MCB9fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgZGF5XCJcbiAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8vb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICAgICAgICAvL29uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgICBvcHRpb24ucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNb25kYXlcIj5Nb25kYXk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVHVlc2RheVwiPlR1ZXNkYXk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiV2VkbmVzZGF5XCI+V2VkbmVzZGF5PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlRodXJzZGF5XCI+VGh1cnNkYXk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiRnJpZGF5XCI+RnJpZGF5PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlNhdHVyZGF5XCI+U2F0dXJkYXk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiU3VuZGF5XCI+U3VuZGF5PC9PcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiRmlnaHRjYXJkLVVybDpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignZmlnaHRjYXJkVXJsJywge1xuICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAnZmlsZUxpc3QnLFxuICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21FdmVudDogdGhpcy5ub3JtRmlsZSxcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgdXBsb2FkIEZpZ2h0Y2FyZCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPFVwbG9hZEZpZ2h0Y2FyZEltYWdlIG9uQ2hhbmdlSW1nPXt0aGlzLmhhbmRsZUZpZ2h0Y2FyZEltYWdlfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiVmlkZW8tdXJsOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd2aWRlb1VybCcsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5zZXJ0IHlvdXIgVmlkZW8tdXJsIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKDxJbnB1dCAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIlByb21vLXVybDpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigncHJvbW9VcmwnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGluc2VydCB5b3VyIFByb21vLXVybCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJCYW5uZXItdXJsOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdiYW5uZXJVcmwnLCB7XG4gICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICdmaWxlTGlzdCcsXG4gICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50OiB0aGlzLm5vcm1GaWxlLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSB1cGxvYWQgQmFubmVyLXVybCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8VXBsb2FkSW1hZ2VCYW5uZXIgb25DaGFuZ2VJbWc9e3RoaXMuaGFuZGxlQmFubmVySW1hZ2V9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiTG9nby11cmw6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2xvZ29VcmwnLCB7XG4gICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICdmaWxlTGlzdCcsXG4gICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50OiB0aGlzLm5vcm1GaWxlLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSB1cGxvYWQgTG9nby11cmwhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFVwbG9hZExvZ29JbWFnZSBvbkNoYW5nZUltZz17dGhpcy5oYW5kbGVMb2dvSW1hZ2V9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiUHJpY2U6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3ByaWNlJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnNlcnQgeW91ciBQcmljZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi50YWlsRm9ybUl0ZW1MYXlvdXR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzlyZW0nLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMi41cmVtJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Y2FmNGYnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMnJlbScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2F2ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zZXR0aW5nLXJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhyLXRhZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gY29uc3QgYSA9IHtcbi8vICAgcHJvZ3JhbU5hbWVfZW4gLy9cbi8vICAgdGl0bGVfZW4gLy9cbi8vICAgZGVzY19lbiAvL1xuLy8gICAvLyBwcm9tb0Zyb21UaW1lXG4vLyAgIC8vIHByb21vVG9UaW1lXG4vLyAgIC8vZnJlZVxuLy8gICBwcm9ncmFtTmFtZV90aCAvL1xuLy8gICB0aXRsZV90aCAvL1xuLy8gICBkZXNjX3RoIC8vXG4vLyAgIC8vb25BaXJEYXRlU3RyX2VuXG4vLyAgIC8vb25BaXJEYXRlU3RyX3RoXG4vLyAgIHZpZGVvVXJsIC8vXG4vLyAgIHRodW1ibmFpbFVybCAvL1xuLy8gICBsb2dvVXJsIC8vXG4vLyAgIHByb21vVXJsIC8vXG4vLyAgIG9uQWlyRGF0ZSAvL1xuLy8gICBkdXJhdGlvbiAvL1xuLy8gICBmZWF0dXJlIC8vXG4vLyB9XG5cbmNvbnN0IEluZm8gPSBGb3JtLmNyZWF0ZSgpKExpdmVzSW5zZXJ0KVxuZXhwb3J0IGRlZmF1bHQgSW5mb1xuIl19 */\n/*@ sourceURL=components/lives/LivesInsert.js */'
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

var Info = __WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Form */].create()(LivesInsert);
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
//# sourceMappingURL=4.31241dc85d577b9492fb.hot-update.js.map