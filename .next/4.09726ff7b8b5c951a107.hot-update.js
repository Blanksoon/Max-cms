webpackHotUpdate(4,{

/***/ "./components/maxNews/MaxNewsInsert.js":
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

var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js';

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
var Option = __WEBPACK_IMPORTED_MODULE_3_antd__["m" /* Select */].Option;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_3_antd__["a" /* AutoComplete */].Option;
var TextArea = __WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */].TextArea;

var MaxNewsInsertForm = function (_React$Component) {
  _inherits(MaxNewsInsertForm, _React$Component);

  function MaxNewsInsertForm(props) {
    var _this2 = this;

    _classCallCheck(this, MaxNewsInsertForm);

    var _this = _possibleConstructorReturn(this, (MaxNewsInsertForm.__proto__ || Object.getPrototypeOf(MaxNewsInsertForm)).call(this, props));

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

  _createClass(MaxNewsInsertForm, [{
    key: 'handleOnchangeImage',
    value: function handleOnchangeImage(imgUrl) {
      if (imgUrl !== '') {
        this.props.form.setFieldsValue({
          imageUrl: imgUrl
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
                return __WEBPACK_IMPORTED_MODULE_5__api__["b" /* post */](__WEBPACK_IMPORTED_MODULE_5__api__["a" /* SERVER */] + '/maxnews/add/news', value);

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
        title: 'Success for new max news',
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
            'you add 1 news'
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
          __WEBPACK_IMPORTED_MODULE_3_antd__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["c" /* Col */],
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
              'Max News'
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
          __WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Form */],
          { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Heading:', __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            }),
            getFieldDecorator('heading_en', {
              rules: [{
                required: true,
                message: 'Please input your Heading!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Article:', __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            }),
            getFieldDecorator('article_en', {
              rules: [{
                required: true,
                message: 'Please input your Article!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-4016259393' + ' ' + 'hr-tag',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-4016259393' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 140
                }
              },
              'TH'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Heading:', __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            }),
            getFieldDecorator('heading_th', {
              rules: [{
                required: true,
                message: 'Please confirm your Heading!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["g" /* Input */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Article:', __source: {
                fileName: _jsxFileName,
                lineNumber: 152
              }
            }),
            getFieldDecorator('article_th', {
              rules: [{
                required: true,
                message: 'Please confirm your Article!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { rows: 10, __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-4016259393' + ' ' + 'hr-tag',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-4016259393' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 164
                }
              },
              'BOTH'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Program:', __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              }
            }),
            getFieldDecorator('programName', {
              rules: [{
                required: true,
                message: 'Please select program!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["m" /* Select */],
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
                  lineNumber: 175
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                  }
                },
                'Max Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Muay Thai Battle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                  }
                },
                'Muay Thai Battle'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Muaythai Fighter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                  }
                },
                'Muaythai Fighter'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'The Champion Muay Thai', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                  }
                },
                'The Champion Muay Thai'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Wednesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                  }
                },
                'Global Fight Wednesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Global Fight Thursday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                  }
                },
                'Global Fight Thursday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'MUAY THAI FIGHTER Monday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                  }
                },
                'MUAY THAI FIGHTER Monday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Octa Fight Tuesday', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                  }
                },
                'Octa Fight Tuesday'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                Option,
                { value: 'Max Sunday Afternoon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                  }
                },
                'Max Sunday Afternoon'
              )
            ))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Date:', __source: {
                fileName: _jsxFileName,
                lineNumber: 211
              }
            }),
            getFieldDecorator('createDate', {
              rules: [{
                required: true,
                message: 'Please enter Date!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* DatePicker */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 219
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, formItemLayout, { label: 'Image:', __source: {
                fileName: _jsxFileName,
                lineNumber: 221
              }
            }),
            getFieldDecorator('imageUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [{
                required: true,
                message: 'Please upload Image!'
              }]
            })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__utils_UploadImage__["a" /* default */], { onChangeImg: this.handleOnchangeImage, __source: {
                fileName: _jsxFileName,
                lineNumber: 231
              }
            }))
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            _extends({}, tailFormItemLayout, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233
              }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-4016259393',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 234
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
                    lineNumber: 235
                  }
                },
                'save'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '4016259393',
          css: '.setting-row.jsx-4016259393{margin-left:1rem;}.hr-tag.jsx-4016259393{margin-bottom:1.5rem;}.submit-button.jsx-4016259393{width:8rem;height:2rem;background-color:green;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF4TmV3cy9NYXhOZXdzSW5zZXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBQb0IsQUFHOEIsQUFHSSxBQUdWLFdBQ0MsTUFOZCxJQUdBLEVBSXlCLHVCQUNYLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9tYXhOZXdzL01heE5ld3NJbnNlcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Zhcm1vei9EZXNrdG9wL01heE11YXlUaGFpL2Ntcy9NYXgtY21zIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGF0ZVBpY2tlcixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFRvb2x0aXAsXG4gIEljb24sXG4gIENhc2NhZGVyLFxuICBTZWxlY3QsXG4gIFJvdyxcbiAgQ29sLFxuICBDaGVja2JveCxcbiAgQnV0dG9uLFxuICBBdXRvQ29tcGxldGUsXG4gIE1vZGFsLFxufSBmcm9tICdhbnRkJ1xuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gJy4uL3V0aWxzL1VwbG9hZEltYWdlJ1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uL2FwaSdcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbW1vbnMvU3Bpbm5lcidcblxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW1cbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb25cbmNvbnN0IEF1dG9Db21wbGV0ZU9wdGlvbiA9IEF1dG9Db21wbGV0ZS5PcHRpb25cbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0XG5cbmNsYXNzIE1heE5ld3NJbnNlcnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlT25jaGFuZ2VJbWFnZSA9IHRoaXMuaGFuZGxlT25jaGFuZ2VJbWFnZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbmZvID0gdGhpcy5pbmZvLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZU9uY2hhbmdlSW1hZ2UoaW1nVXJsKSB7XG4gICAgaWYgKGltZ1VybCAhPT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XG4gICAgICAgIGltYWdlVXJsOiBpbWdVcmwsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gIH1cblxuICBhc3luYyBhZGROZXdzKHZhbHVlKSB7XG4gICAgLy9jb25zb2xlLmxvZygnMScsIHZhbHVlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5wb3N0KGAke2FwaS5TRVJWRVJ9L21heG5ld3MvYWRkL25ld3NgLCB2YWx1ZSlcbiAgICAvL2NvbnNvbGUubG9nKCcyJywgcmVzdWx0KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsKGFzeW5jIChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9KVxuICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hZGROZXdzKHZhbHVlcylcbiAgICAgICAgLy9jb25zb2xlLmxvZygnMycsIHZhbHVlcylcbiAgICAgICAgdGhpcy5pbmZvKClcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGluZm8oKSB7XG4gICAgTW9kYWwuaW5mbyh7XG4gICAgICB0aXRsZTogJ1N1Y2Nlc3MgZm9yIG5ldyBtYXggbmV3cycsXG4gICAgICBjb250ZW50OiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+eW91IGFkZCAxIG5ld3M8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSxcbiAgICAgIG9uT2soKSB7fSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IHRoaXMucHJvcHMuZm9ybVxuICAgIC8vY29uc29sZS5sb2coJzExMTExMTExMTExMScsIHRoaXMucHJvcHMuZm9ybSlcbiAgICBjb25zdCB7IGF1dG9Db21wbGV0ZVJlc3VsdCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgZm9ybUl0ZW1MYXlvdXQgPSB7XG4gICAgICBsYWJlbENvbDoge1xuICAgICAgICB4czogeyBzcGFuOiAyNCB9LFxuICAgICAgICBzbTogeyBzcGFuOiA0IH0sXG4gICAgICB9LFxuICAgICAgd3JhcHBlckNvbDoge1xuICAgICAgICB4czogeyBzcGFuOiAyNCB9LFxuICAgICAgICBzbTogeyBzcGFuOiAxNiB9LFxuICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgdGFpbEZvcm1JdGVtTGF5b3V0ID0ge1xuICAgICAgd3JhcHBlckNvbDoge1xuICAgICAgICB4czoge1xuICAgICAgICAgIHNwYW46IDI0LFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgc206IHtcbiAgICAgICAgICBzcGFuOiAxNCxcbiAgICAgICAgICBvZmZzZXQ6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICA8aDE+TWF4IE5ld3M8L2gxPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZXR0aW5nLXJvdyd9PlxuICAgICAgICAgIDxoMj5FTjwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiSGVhZGluZzpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignaGVhZGluZ19lbicsIHtcbiAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBIZWFkaW5nIScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKDxJbnB1dCAvPil9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIkFydGljbGU6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2FydGljbGVfZW4nLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgQXJ0aWNsZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8VGV4dEFyZWEgcm93cz17MTB9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9e2Boci10YWdgfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2V0dGluZy1yb3cnfT5cbiAgICAgICAgICAgIDxoMj5USDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJIZWFkaW5nOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdoZWFkaW5nX3RoJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBjb25maXJtIHlvdXIgSGVhZGluZyEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJBcnRpY2xlOlwiPlxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdhcnRpY2xlX3RoJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBjb25maXJtIHlvdXIgQXJ0aWNsZSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSg8VGV4dEFyZWEgcm93cz17MTB9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9e2Boci10YWdgfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2V0dGluZy1yb3cnfT5cbiAgICAgICAgICAgIDxoMj5CT1RIPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIlByb2dyYW06XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Byb2dyYW1OYW1lJywge1xuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgcHJvZ3JhbSEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBwcm9ncmFtXCJcbiAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8vb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICAgICAgICAvL29uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgICBvcHRpb24ucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNYXggTXVheSBUaGFpXCI+TWF4IE11YXkgVGhhaTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNdWF5IFRoYWkgQmF0dGxlXCI+TXVheSBUaGFpIEJhdHRsZTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNdWF5dGhhaSBGaWdodGVyXCI+TXVheXRoYWkgRmlnaHRlcjwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJUaGUgQ2hhbXBpb24gTXVheSBUaGFpXCI+XG4gICAgICAgICAgICAgICAgICBUaGUgQ2hhbXBpb24gTXVheSBUaGFpXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdsb2JhbCBGaWdodCBXZWRuZXNkYXlcIj5cbiAgICAgICAgICAgICAgICAgIEdsb2JhbCBGaWdodCBXZWRuZXNkYXlcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiR2xvYmFsIEZpZ2h0IFRodXJzZGF5XCI+XG4gICAgICAgICAgICAgICAgICBHbG9iYWwgRmlnaHQgVGh1cnNkYXlcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTVVBWSBUSEFJIEZJR0hURVIgTW9uZGF5XCI+XG4gICAgICAgICAgICAgICAgICBNVUFZIFRIQUkgRklHSFRFUiBNb25kYXlcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT2N0YSBGaWdodCBUdWVzZGF5XCI+T2N0YSBGaWdodCBUdWVzZGF5PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk1heCBTdW5kYXkgQWZ0ZXJub29uXCI+XG4gICAgICAgICAgICAgICAgICBNYXggU3VuZGF5IEFmdGVybm9vblxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8Rm9ybUl0ZW0gey4uLmZvcm1JdGVtTGF5b3V0fSBsYWJlbD1cIkRhdGU6XCI+XG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2NyZWF0ZURhdGUnLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIERhdGUhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPERhdGVQaWNrZXIgLz4pfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJJbWFnZTpcIj5cbiAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignaW1hZ2VVcmwnLCB7XG4gICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICdmaWxlTGlzdCcsXG4gICAgICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50OiB0aGlzLm5vcm1GaWxlLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSB1cGxvYWQgSW1hZ2UhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkoPFVwbG9hZEltYWdlIG9uQ2hhbmdlSW1nPXt0aGlzLmhhbmRsZU9uY2hhbmdlSW1hZ2V9IC8+KX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSB7Li4udGFpbEZvcm1JdGVtTGF5b3V0fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5cmVtJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIuNXJlbScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNGNhZjRmJyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJyZW0nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHNhdmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2V0dGluZy1yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oci10YWcge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5jb25zdCBJbmZvID0gRm9ybS5jcmVhdGUoKShNYXhOZXdzSW5zZXJ0Rm9ybSlcbmV4cG9ydCBkZWZhdWx0IEluZm9cbiJdfQ== */\n/*@ sourceURL=components/maxNews/MaxNewsInsert.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return MaxNewsInsertForm;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var Info = __WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Form */].create()(MaxNewsInsertForm);
var _default = Info;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js');
  reactHotLoader.register(Option, 'Option', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js');
  reactHotLoader.register(AutoCompleteOption, 'AutoCompleteOption', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js');
  reactHotLoader.register(TextArea, 'TextArea', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js');
  reactHotLoader.register(MaxNewsInsertForm, 'MaxNewsInsertForm', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js');
  reactHotLoader.register(Info, 'Info', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsInsert.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.09726ff7b8b5c951a107.hot-update.js.map