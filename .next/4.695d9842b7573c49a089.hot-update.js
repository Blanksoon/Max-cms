webpackHotUpdate(4,{

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

/***/ "./components/commons/DataGrid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Search__ = __webpack_require__("./components/commons/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pagination__ = __webpack_require__("./components/commons/Pagination.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/DataGrid.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i.toString(),
//     number: `${i}`,
//     first_name: `อารยา`,
//     last_name: `รุ่งชัยวัฒนกุล`,
//     credit_name: `MT0`,
//     moneyLimit: 5000,
//     status: `อนุมัติแล้ว`,
//     create_date: `26-12-2560`,
//     code: `MT`
//   });
// }

var EditableCell = function EditableCell(_ref) {
  var editable = _ref.editable,
      value = _ref.value,
      _onChange = _ref.onChange;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    editable ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["i" /* Input */], {
      style: { margin: '-5px 0' },
      value: value,
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }) : value
  );
};

var EditableTable = function (_React$Component) {
  _inherits(EditableTable, _React$Component);

  function EditableTable(props) {
    _classCallCheck(this, EditableTable);

    var _this = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

    _this.columns = [{
      title: 'เลขที่',
      dataIndex: 'app_id',
      width: '10%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'app_id');
      }
    }, {
      title: 'ชื่อ',
      dataIndex: 'first_name',
      width: '20%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'first_name');
      }
    }, {
      title: 'นามสกุล',
      dataIndex: 'last_name',
      width: '20%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'last_name');
      }
    }, {
      title: 'ชื่อสินเชื่อ',
      dataIndex: 'credit_name',
      width: '10%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'credit_name');
      }
    }, {
      title: 'วงเงิน',
      dataIndex: 'moneyLimit',
      width: '10%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'moneyLimit');
      }
    }, {
      title: 'สถานะ',
      dataIndex: 'status',
      width: '10%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'status');
      }
    }, {
      title: 'วันที่สร้าง',
      dataIndex: 'create_date',
      width: '10%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'create_date');
      }
    }, {
      title: 'Code',
      dataIndex: 'code',
      width: '10%',
      render: function render(text, record) {
        return _this.renderColumns(text, record, 'code');
      }
    }];
    return _this;
  }

  _createClass(EditableTable, [{
    key: 'renderColumns',
    value: function renderColumns(text, record, column) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditableCell, {
        editable: record.editable,
        value: text,
        onChange: function onChange(value) {
          return _this2.handleChange(value, record.key, column);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value, key, column) {
      var newData = [].concat(_toConsumableArray(this.state.data));
      var target = newData.filter(function (item) {
        return key === item.key;
      })[0];
      if (target) {
        target[column] = value;
        this.setState({ data: newData });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log('props',this.props)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["p" /* Table */], {
        bordered: true,
        dataSource: this.props.dataSource,
        columns: this.columns,
        pagination: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return EditableTable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = EditableTable;


/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EditableCell, 'EditableCell', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/DataGrid.js');
  reactHotLoader.register(EditableTable, 'EditableTable', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/DataGrid.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/DataGrid.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/commons/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Pagination.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PaginationDataGrid = function (_Component) {
  _inherits(PaginationDataGrid, _Component);

  function PaginationDataGrid(props) {
    _classCallCheck(this, PaginationDataGrid);

    return _possibleConstructorReturn(this, (PaginationDataGrid.__proto__ || Object.getPrototypeOf(PaginationDataGrid)).call(this, props));
    //console.log('pagination',props)
  }

  _createClass(PaginationDataGrid, [{
    key: 'render',
    value: function render() {
      //console.log('1111111111111111',this.props)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["m" /* Pagination */], {
          total: this.props.total
          //showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          , pageSize: 10,
          defaultCurrent: this.props.defaultCurrent
          // hideOnSinglePage={this.props.total <= 0}
          , __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return PaginationDataGrid;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PaginationDataGrid.PropTypes = {
  total: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  pageSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  defaultCurrent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
};
var _default = PaginationDataGrid;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PaginationDataGrid, 'PaginationDataGrid', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Pagination.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Pagination.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/commons/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_ducks_search__ = __webpack_require__("./redux/ducks/search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Search.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var InputSearch = __WEBPACK_IMPORTED_MODULE_1_antd__["i" /* Input */].Search;

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var data = e;
      var dataSearch = this.props.searchData({ data: data });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var data = 'test';
      this.props.searchData({ data: data });
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log('error',this.props.errorMessage)
      var errorMessage = this.props.errorMessage;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputSearch, {
          placeholder: 'input search text',
          onSearch: this.handleSubmit,
          enterButton: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Search;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Search.propTypes = {
  searchData: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired,
  errorMessage: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
};
Search.defaultProps = {
  errorMessage: ''
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    errorMessage: state.searchData.error.message
  };
};
var WrappedSerachForm = __WEBPACK_IMPORTED_MODULE_1_antd__["g" /* Form */].create()(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { searchData: __WEBPACK_IMPORTED_MODULE_3__redux_ducks_search__["c" /* searchData */] })(Search));

var _default = WrappedSerachForm;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputSearch, 'InputSearch', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Search.js');
  reactHotLoader.register(Search, 'Search', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Search.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Search.js');
  reactHotLoader.register(WrappedSerachForm, 'WrappedSerachForm', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Search.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/commons/Search.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/maxNews/Detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_DataGrid__ = __webpack_require__("./components/commons/DataGrid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_Search__ = __webpack_require__("./components/commons/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_Pagination__ = __webpack_require__("./components/commons/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_UploadImage__ = __webpack_require__("./components/utils/UploadImage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api__ = __webpack_require__("./api.js");

var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TextArea = __WEBPACK_IMPORTED_MODULE_7_antd__["i" /* Input */].TextArea;

var Option = __WEBPACK_IMPORTED_MODULE_7_antd__["o" /* Select */].Option;
var FormItem = __WEBPACK_IMPORTED_MODULE_7_antd__["g" /* Form */].Item;

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details(props) {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this, props));

    _this.state = {
      heading_en: '',
      heading_th: '',
      createDate: '',
      imageUrl: '',
      article_en: '',
      article_th: '',
      loading: false,
      programName: ''
    };
    _this.handleOnChangeHeadingEn = _this.handleOnChangeHeadingEn.bind(_this);
    _this.handleOnChangeArticleEn = _this.handleOnChangeArticleEn.bind(_this);
    _this.handleOnChangeHeadingTh = _this.handleOnChangeHeadingTh.bind(_this);
    _this.handleOnChangeArticleTh = _this.handleOnChangeArticleTh.bind(_this);
    _this.handleOnChangeDate = _this.handleOnChangeDate.bind(_this);
    _this.handleOnchangeImage = _this.handleOnchangeImage.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.addNews = _this.addNews.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Details, [{
    key: 'handleOnChangeHeadingEn',
    value: function handleOnChangeHeadingEn(event) {
      this.setState({
        heading_en: event.target.value
      });
      //console.log(this.state)
    }
  }, {
    key: 'handleOnChangeArticleEn',
    value: function handleOnChangeArticleEn(event) {
      this.setState({
        article_en: event.target.value
      });
    }
  }, {
    key: 'handleOnChangeHeadingTh',
    value: function handleOnChangeHeadingTh(event) {
      this.setState({
        heading_th: event.target.value
      });
      //console.log(this.state)
    }
  }, {
    key: 'handleOnChangeArticleTh',
    value: function handleOnChangeArticleTh(event) {
      this.setState({
        article_th: event.target.value
      });
    }
  }, {
    key: 'handleOnChangeDate',
    value: function handleOnChangeDate(date, dateString) {
      this.setState({
        createDate: date
      });
    }
  }, {
    key: 'handleOnchangeImage',
    value: function handleOnchangeImage(imgUrl) {
      this.setState({
        imageUrl: imgUrl
      });
      return 'success';
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({
        programName: value
      });
      //console.log(`selected ${value}`)
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      //console.log('blur')
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      //console.log('focus')
    }
  }, {
    key: 'addNews',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, status, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9__api__["c" /* post */](__WEBPACK_IMPORTED_MODULE_9__api__["a" /* SERVER */] + '/maxnews/add/news', this.state);

              case 2:
                _ref2 = _context.sent;
                status = _ref2.status;
                data = _ref2.data;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addNews() {
        return _ref.apply(this, arguments);
      }

      return addNews;
    }()
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          // const { email, password } = values
          //console.log(values)
          // this.props.login({ email, password })
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log()
      //const { getFieldDecorator } = this.props.ƒ
      var getFieldDecorator = this.props.form.getFieldDecorator;
      //console.log('1111111111111111', this.props)

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_antd__["g" /* Form */],
        { onSubmit: this.handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2664233961' + ' ' + 'title',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            FormItem,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 24, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h1',
                  {
                    className: 'jsx-2664233961',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 133
                    }
                  },
                  'Max News'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2664233961' + ' ' + 'setting-row',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'h2',
                {
                  className: 'jsx-2664233961',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                  }
                },
                'EN'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                  { span: 3, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 139
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-2664233961' + ' ' + 'topic-list',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                      }
                    },
                    'Heading:'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                  { span: 9, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 142
                    }
                  },
                  getFieldDecorator('headingEn', {
                    rules: [{
                      required: true,
                      message: 'Please input your Heading'
                    }]
                  })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd__["i" /* Input */], {
                    onChange: this.handleOnChangeHeadingEn,
                    placeholder: 'type here',
                    required: true,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 151
                    }
                  }))
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2664233961' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              FormItem,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                  { span: 3, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 164
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-2664233961' + ' ' + 'topic-list-image',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      }
                    },
                    'Article:'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                  { span: 18, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 167
                    }
                  },
                  getFieldDecorator('articleEn', {
                    rules: [{
                      required: true,
                      message: 'Please input your Article'
                    }]
                  })(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { style: { marginBottom: 10 }, className: 'jsx-2664233961',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, {
                      onChange: this.handleOnChangeArticleEn,
                      rows: 10,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 177
                      }
                    })
                  ))
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-2664233961',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-2664233961',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              }
            },
            'TH'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2664233961' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 190
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2664233961' + ' ' + 'topic-list',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 192
                    }
                  },
                  'Heading:'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 9, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd__["i" /* Input */], {
                  onChange: this.handleOnChangeHeadingTh,
                  placeholder: 'type here',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2664233961' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 202
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 203
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2664233961' + ' ' + 'topic-list-image',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 205
                    }
                  },
                  'Article:'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 18, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TextArea, { onChange: this.handleOnChangeArticleTh, rows: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 208
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
            className: 'jsx-2664233961',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-2664233961',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              }
            },
            'Both'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2664233961' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 214
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 215
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2664233961' + ' ' + 'topic-list',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 217
                    }
                  },
                  'Program:'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 9, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["o" /* Select */],
                  {
                    showSearch: true,
                    style: { width: 250 },
                    placeholder: 'Select a program',
                    optionFilterProp: 'children',
                    onChange: this.handleChange,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    filterOption: function filterOption(input, option) {
                      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 220
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'Max Muay Thai', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 234
                      }
                    },
                    'Max Muay Thai'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'Muay Thai Battle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 235
                      }
                    },
                    'Muay Thai Battle'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'Muaythai Fighter', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 236
                      }
                    },
                    'Muaythai Fighter'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'The Champion Muay Thai', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 237
                      }
                    },
                    'The Champion Muay Thai'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'Global Fight Wednesday', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 240
                      }
                    },
                    'Global Fight Wednesday'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'Global Fight Thursday', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 243
                      }
                    },
                    'Global Fight Thursday'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'MUAY THAI FIGHTER Monday', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 246
                      }
                    },
                    'MUAY THAI FIGHTER Monday'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'Octa Fight Tuesday', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 249
                      }
                    },
                    'Octa Fight Tuesday'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    Option,
                    { value: 'Max Sunday Afternoon', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 250
                      }
                    },
                    'Max Sunday Afternoon'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2664233961' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 257
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 258
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2664233961' + ' ' + 'topic-list',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 260
                    }
                  },
                  'Date:'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 9, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd__["e" /* DatePicker */], { onChange: this.handleOnChangeDate, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2664233961' + ' ' + 'setting-row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 267
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 268
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 269
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2664233961' + ' ' + 'topic-list-image',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 270
                    }
                  },
                  'Image:'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 9, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__utils_UploadImage__["a" /* default */], { onChangeImg: this.handleOnchangeImage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2664233961' + ' ' + 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 278
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_antd__["n" /* Row */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 279
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Col */],
                { span: 24, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  FormItem,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 281
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Button */],
                    {
                      type: 'primary',
                      htmlType: 'submit',
                      style: { width: '100%' },
                      loading: this.state.loading,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 282
                      }
                    },
                    this.state.loading ? '' : 'Save'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
            styleId: '2664233961',
            css: '.title.jsx-2664233961{width:100%;padding-left:1rem;}.topic-list.jsx-2664233961{font-size:1rem;padding-left:1rem;padding-top:0.3rem;}.topic-list-image.jsx-2664233961{font-size:1rem;padding-left:1rem;padding-top:2.5rem;}.setting-row.jsx-2664233961{padding-bottom:1rem;}.submit.jsx-2664233961{padding-bottom:1rem;}.submit-button.jsx-2664233961{width:8rem;height:2rem;background-color:green;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF4TmV3cy9EZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcVNzQixBQUcwQixBQUlJLEFBS0EsQUFLSyxBQUdBLEFBR1QsV0FuQk8sQUFvQk4sSUFoQk0sQUFLQSxLQUtwQixBQUdBLEdBSXlCLE1BcEJ6QixJQUlxQixBQUtBLGFBWVAsTUFoQmQsQUFLQSxNQVlBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWF4TmV3cy9EZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Zhcm1vei9EZXNrdG9wL01heE11YXlUaGFpL2Ntcy9NYXgtY21zIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbW1vbnMvRGF0YUdyaWQnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbW1vbnMvU2VhcmNoJ1xuaW1wb3J0IFBhZ2luYXRpb25EYXRhR3JpZCBmcm9tICcuLi9jb21tb25zL1BhZ2luYXRpb24nXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7XG4gIFJvdyxcbiAgQ29sLFxuICBJbnB1dCxcbiAgRGF0ZVBpY2tlcixcbiAgVXBsb2FkLFxuICBJY29uLFxuICBtZXNzYWdlLFxuICBTZWxlY3QsXG4gIEZvcm0sXG4gIEJ1dHRvbixcbn0gZnJvbSAnYW50ZCdcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tICcuLi91dGlscy9VcGxvYWRJbWFnZSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi9hcGknXG5cbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0XG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbVxuXG5jbGFzcyBEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVhZGluZ19lbjogJycsXG4gICAgICBoZWFkaW5nX3RoOiAnJyxcbiAgICAgIGNyZWF0ZURhdGU6ICcnLFxuICAgICAgaW1hZ2VVcmw6ICcnLFxuICAgICAgYXJ0aWNsZV9lbjogJycsXG4gICAgICBhcnRpY2xlX3RoOiAnJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcHJvZ3JhbU5hbWU6ICcnLFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZU9uQ2hhbmdlSGVhZGluZ0VuID0gdGhpcy5oYW5kbGVPbkNoYW5nZUhlYWRpbmdFbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVPbkNoYW5nZUFydGljbGVFbiA9IHRoaXMuaGFuZGxlT25DaGFuZ2VBcnRpY2xlRW4uYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlT25DaGFuZ2VIZWFkaW5nVGggPSB0aGlzLmhhbmRsZU9uQ2hhbmdlSGVhZGluZ1RoLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZU9uQ2hhbmdlQXJ0aWNsZVRoID0gdGhpcy5oYW5kbGVPbkNoYW5nZUFydGljbGVUaC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVPbkNoYW5nZURhdGUgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlRGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVPbmNoYW5nZUltYWdlID0gdGhpcy5oYW5kbGVPbmNoYW5nZUltYWdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUJsdXIgPSB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcylcbiAgICB0aGlzLmFkZE5ld3MgPSB0aGlzLmFkZE5ld3MuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlT25DaGFuZ2VIZWFkaW5nRW4oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhlYWRpbmdfZW46IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KVxuICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlQXJ0aWNsZUVuKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhcnRpY2xlX2VuOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlSGVhZGluZ1RoKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoZWFkaW5nX3RoOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICBoYW5kbGVPbkNoYW5nZUFydGljbGVUaChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXJ0aWNsZV90aDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVPbkNoYW5nZURhdGUoZGF0ZSwgZGF0ZVN0cmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3JlYXRlRGF0ZTogZGF0ZSxcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlT25jaGFuZ2VJbWFnZShpbWdVcmwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltYWdlVXJsOiBpbWdVcmwsXG4gICAgfSlcbiAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2dyYW1OYW1lOiB2YWx1ZSxcbiAgICB9KVxuICAgIC8vY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YClcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnYmx1cicpXG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdmb2N1cycpXG4gIH1cblxuICBhc3luYyBhZGROZXdzKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcbiAgICAgIGAke2FwaS5TRVJWRVJ9L21heG5ld3MvYWRkL25ld3NgLFxuICAgICAgdGhpcy5zdGF0ZVxuICAgIClcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgLy8gY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHZhbHVlc1xuICAgICAgICAvL2NvbnNvbGUubG9nKHZhbHVlcylcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5sb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vY29uc29sZS5sb2coKVxuICAgIC8vY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciB9ID0gdGhpcy5wcm9wcy7GklxuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IHRoaXMucHJvcHMuZm9ybVxuICAgIC8vY29uc29sZS5sb2coJzExMTExMTExMTExMTExMTEnLCB0aGlzLnByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RpdGxlJ30+XG4gICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPGgxPk1heCBOZXdzPC9oMT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2V0dGluZy1yb3cnfT5cbiAgICAgICAgICAgICAgPGgyPkVOPC9oMj5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezN9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0b3BpYy1saXN0J30+SGVhZGluZzo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezl9PlxuICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdoZWFkaW5nRW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgSGVhZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZUhlYWRpbmdFbn1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXszfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9waWMtbGlzdC1pbWFnZSd9PkFydGljbGU6PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOH0+XG4gICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2FydGljbGVFbicsIHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBBcnRpY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlQXJ0aWNsZUVufVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPGgyPlRIPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9waWMtbGlzdCd9PkhlYWRpbmc6PC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezl9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2VIZWFkaW5nVGh9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgaGVyZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9waWMtbGlzdC1pbWFnZSd9PkFydGljbGU6PC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezE4fT5cbiAgICAgICAgICAgICAgICA8VGV4dEFyZWEgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2VBcnRpY2xlVGh9IHJvd3M9ezEwfSAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxoMj5Cb3RoPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NldHRpbmctcm93J30+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndG9waWMtbGlzdCd9PlByb2dyYW06PC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezl9PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNTAgfX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgcHJvZ3JhbVwiXG4gICAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG9wdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk1heCBNdWF5IFRoYWlcIj5NYXggTXVheSBUaGFpPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiTXVheSBUaGFpIEJhdHRsZVwiPk11YXkgVGhhaSBCYXR0bGU8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNdWF5dGhhaSBGaWdodGVyXCI+TXVheXRoYWkgRmlnaHRlcjwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlRoZSBDaGFtcGlvbiBNdWF5IFRoYWlcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIENoYW1waW9uIE11YXkgVGhhaVxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiR2xvYmFsIEZpZ2h0IFdlZG5lc2RheVwiPlxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwgRmlnaHQgV2VkbmVzZGF5XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJHbG9iYWwgRmlnaHQgVGh1cnNkYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsIEZpZ2h0IFRodXJzZGF5XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNVUFZIFRIQUkgRklHSFRFUiBNb25kYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgTVVBWSBUSEFJIEZJR0hURVIgTW9uZGF5XG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPY3RhIEZpZ2h0IFR1ZXNkYXlcIj5PY3RhIEZpZ2h0IFR1ZXNkYXk8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJNYXggU3VuZGF5IEFmdGVybm9vblwiPlxuICAgICAgICAgICAgICAgICAgICBNYXggU3VuZGF5IEFmdGVybm9vblxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZXR0aW5nLXJvdyd9PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXszfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RvcGljLWxpc3QnfT5EYXRlOjwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs5fT5cbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZURhdGV9IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZXR0aW5nLXJvdyd9PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXszfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RvcGljLWxpc3QtaW1hZ2UnfT5JbWFnZTo8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17OX0+XG4gICAgICAgICAgICAgICAgPFVwbG9hZEltYWdlIG9uQ2hhbmdlSW1nPXt0aGlzLmhhbmRsZU9uY2hhbmdlSW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Ym1pdCd9PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAnJyA6ICdTYXZlJ31cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3BpYy1saXN0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9waWMtbGlzdC1pbWFnZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNldHRpbmctcm93IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VibWl0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2VhcmNoRGF0YTogc3RhdGUuc2VhcmNoRGF0YS5kYXRhLFxuICBwYWdpbmF0aW9uOiBzdGF0ZS5zZWFyY2hEYXRhLnBhZ2luYXRpb24sXG59KVxuXG5jb25zdCBEZXRhaWwgPSBGb3JtLmNyZWF0ZSgpKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShEZXRhaWxzKSlcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsXG4iXX0= */\n/*@ sourceURL=components/maxNews/Detail.js */'
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Details;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchData: state.searchData.data,
    pagination: state.searchData.pagination
  };
};

var Detail = __WEBPACK_IMPORTED_MODULE_7_antd__["g" /* Form */].create()(Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(mapStateToProps, null)(Details));

var _default = Detail;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, 'TextArea', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(Option, 'Option', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(FormItem, 'FormItem', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(Details, 'Details', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(Detail, 'Detail', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/Detail.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/maxNews/MaxNewsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MaxNewsTable__ = __webpack_require__("./components/maxNews/MaxNewsTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_ducks_news__ = __webpack_require__("./redux/ducks/news.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__ = __webpack_require__("./components/commons/vars.js");
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var MaxNewsData = function (_Component) {
  _inherits(MaxNewsData, _Component);

  function MaxNewsData(props) {
    _classCallCheck(this, MaxNewsData);

    return _possibleConstructorReturn(this, (MaxNewsData.__proto__ || Object.getPrototypeOf(MaxNewsData)).call(this, props));
  }

  _createClass(MaxNewsData, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchMaxnewsDucks();
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log('this.props', this.props)
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1102403325',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_antd__["b" /* Breadcrumb */],
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
            __WEBPACK_IMPORTED_MODULE_6_antd__["b" /* Breadcrumb */].Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            'Home'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["b" /* Breadcrumb */].Item,
            { style: { color: '' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].white }, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            'Maxnews'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1102403325',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_antd__["n" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["d" /* Col */],
              { span: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1102403325' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                'Maxnews'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_antd__["d" /* Col */],
              { span: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1102403325' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_next_link___default.a,
                  { href: '/maxnews/new', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6_antd__["c" /* Button */],
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
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__MaxNewsTable__["a" /* default */], {
          maxnewsData: this.props.maxnewsData.data,
          lengtOfMaxnews: this.props.maxnewsData.lengthOfData,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1102403325',
          css: '.ant-breadcrumb-separator{color:' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].lightBlue + ' !important;}.ant-breadcrumb-link{color:' + __WEBPACK_IMPORTED_MODULE_8__components_commons_vars__["a" /* default */].lightBlue + ';}.title{font-size:1.5rem;font-weight:700;margin-top:0.7rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF4TmV3cy9NYXhOZXdzRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRTJCLEFBRzJELEFBR1gsQUFHbEIsaUJBQ0QsZ0JBQ0UsRUFKcEIsV0FIQSxLQVFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWF4TmV3cy9NYXhOZXdzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFybW96L0Rlc2t0b3AvTWF4TXVheVRoYWkvY21zL01heC1jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTWF4TmV3c1RhYmxlIGZyb20gJy4vTWF4TmV3c1RhYmxlJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmZXRjaE1heG5ld3NEdWNrcyB9IGZyb20gJy4uLy4uL3JlZHV4L2R1Y2tzL25ld3MnXG5pbXBvcnQgeyBSb3csIENvbCwgQnJlYWRjcnVtYiwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHZhcnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3ZhcnMnXG5cbmNsYXNzIE1heE5ld3NEYXRhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hNYXhuZXdzRHVja3MoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzLnByb3BzJywgdGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJyZWFkY3J1bWJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAzMjQ0NycsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkhvbWU8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICB7LyogPEJyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBzdHlsZT17eyBjb2xvcjogYCR7dmFycy5saWdodEJsdWV9YCB9fT5cbiAgICAgICAgICAgICAgQXBwbGljYXRpb24gQ2VudGVyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBzdHlsZT17eyBjb2xvcjogYCR7dmFycy5saWdodEJsdWV9YCB9fT5cbiAgICAgICAgICAgICAgQXBwbGljYXRpb24gTGlzdFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPiAqL31cbiAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIHN0eWxlPXt7IGNvbG9yOiBgJHt2YXJzLndoaXRlfWAgfX0+XG4gICAgICAgICAgICBNYXhuZXdzXG4gICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5NYXhuZXdzPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXhuZXdzL25ld1wiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMnJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzRjYWY0ZicsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5ld1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1heE5ld3NUYWJsZVxuICAgICAgICAgIG1heG5ld3NEYXRhPXt0aGlzLnByb3BzLm1heG5ld3NEYXRhLmRhdGF9XG4gICAgICAgICAgbGVuZ3RPZk1heG5ld3M9e3RoaXMucHJvcHMubWF4bmV3c0RhdGEubGVuZ3RoT2ZEYXRhfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xuICAgICAgICAgICAgY29sb3I6ICR7dmFycy5saWdodEJsdWV9ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtYnJlYWRjcnVtYi1saW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhcnMubGlnaHRCbHVlfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBtYXhuZXdzRGF0YTogc3RhdGUubmV3cyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoTWF4bmV3c0R1Y2tzIH0pKE1heE5ld3NEYXRhKVxuIl19 */\n/*@ sourceURL=components/maxNews/MaxNewsData.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return MaxNewsData;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    maxnewsData: state.news
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { fetchMaxnewsDucks: __WEBPACK_IMPORTED_MODULE_5__redux_ducks_news__["c" /* fetchMaxnewsDucks */] })(MaxNewsData);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MaxNewsData, 'MaxNewsData', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsData.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsData.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsData.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/maxNews/MaxNewsTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_vars__ = __webpack_require__("./components/commons/vars.js");
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsTable.js';

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

var MaxNewsTable = function (_React$Component) {
  _inherits(MaxNewsTable, _React$Component);

  function MaxNewsTable() {
    _classCallCheck(this, MaxNewsTable);

    return _possibleConstructorReturn(this, (MaxNewsTable.__proto__ || Object.getPrototypeOf(MaxNewsTable)).apply(this, arguments));
  }

  _createClass(MaxNewsTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          maxnewsData = _props.maxnewsData,
          lengtOfMaxnews = _props.lengtOfMaxnews;
      //console.log('11111111', this.props)

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-366090949',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["p" /* Table */],
          {
            dataSource: maxnewsData,
            pagination: lengtOfMaxnews,
            rowKey: function rowKey(maxnewsData) {
              return maxnewsData._id;
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'headingEn', dataIndex: 'heading_en', key: 'heading_en', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'articleEn', dataIndex: 'article_en', key: 'article_en', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'headingTh', dataIndex: 'heading_th', key: 'heading_th', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'articleTh', dataIndex: 'article_th', key: 'article_th', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, {
            title: 'programName',
            dataIndex: 'programName',
            key: 'programName',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, { title: 'createDate', dataIndex: 'createDate', key: 'createDate', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Column, {
            title: 'Action',
            key: 'action',
            render: function render(text, record) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-366090949',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  { href: '#', className: 'jsx-366090949',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], {
                    type: 'edit',
                    style: { color: '#607d8b', fontSize: '1.5rem' },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["f" /* Divider */], { type: 'vertical', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  { href: '#', className: 'jsx-366090949',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Icon */], {
                    type: 'delete',
                    style: { color: 'red', fontSize: '1.5rem' },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    }
                  })
                )
              );
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '366090949',
          css: 'th{background-color:' + __WEBPACK_IMPORTED_MODULE_3__commons_vars__["a" /* default */].blue + ' !important;}.ant-table-thead>tr>th{color:' + __WEBPACK_IMPORTED_MODULE_3__commons_vars__["a" /* default */].white + ' !important;}.ant-table ant-table-large ant-table-scroll-position-left{box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF4TmV3cy9NYXhOZXdzVGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0QyQixBQUdzRSxBQUlYLEFBSUosOENBSDVDLFdBSEEsb0JBT0EiLCJmaWxlIjoiY29tcG9uZW50cy9tYXhOZXdzL01heE5ld3NUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmFybW96L0Rlc2t0b3AvTWF4TXVheVRoYWkvY21zL01heC1jbXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSwgSWNvbiwgRGl2aWRlciB9IGZyb20gJ2FudGQnXG5pbXBvcnQgdmFycyBmcm9tICcuLi9jb21tb25zL3ZhcnMnXG5cbmNvbnN0IHsgQ29sdW1uLCBDb2x1bW5Hcm91cCB9ID0gVGFibGVcblxuY2xhc3MgTWF4TmV3c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWF4bmV3c0RhdGEsIGxlbmd0T2ZNYXhuZXdzIH0gPSB0aGlzLnByb3BzXG4gICAgLy9jb25zb2xlLmxvZygnMTExMTExMTEnLCB0aGlzLnByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBkYXRhU291cmNlPXttYXhuZXdzRGF0YX1cbiAgICAgICAgICBwYWdpbmF0aW9uPXtsZW5ndE9mTWF4bmV3c31cbiAgICAgICAgICByb3dLZXk9e21heG5ld3NEYXRhID0+IG1heG5ld3NEYXRhLl9pZH1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiA8Q29sdW1uIHRpdGxlPVwiaWRcIiBkYXRhSW5kZXg9XCJfaWRcIiBrZXk9XCJfaWRcIiAvPiAqL31cbiAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwiaGVhZGluZ0VuXCIgZGF0YUluZGV4PVwiaGVhZGluZ19lblwiIGtleT1cImhlYWRpbmdfZW5cIiAvPlxuICAgICAgICAgIDxDb2x1bW4gdGl0bGU9XCJhcnRpY2xlRW5cIiBkYXRhSW5kZXg9XCJhcnRpY2xlX2VuXCIga2V5PVwiYXJ0aWNsZV9lblwiIC8+XG4gICAgICAgICAgPENvbHVtbiB0aXRsZT1cImhlYWRpbmdUaFwiIGRhdGFJbmRleD1cImhlYWRpbmdfdGhcIiBrZXk9XCJoZWFkaW5nX3RoXCIgLz5cbiAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwiYXJ0aWNsZVRoXCIgZGF0YUluZGV4PVwiYXJ0aWNsZV90aFwiIGtleT1cImFydGljbGVfdGhcIiAvPlxuICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgIHRpdGxlPVwicHJvZ3JhbU5hbWVcIlxuICAgICAgICAgICAgZGF0YUluZGV4PVwicHJvZ3JhbU5hbWVcIlxuICAgICAgICAgICAga2V5PVwicHJvZ3JhbU5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbHVtbiB0aXRsZT1cImNyZWF0ZURhdGVcIiBkYXRhSW5kZXg9XCJjcmVhdGVEYXRlXCIga2V5PVwiY3JlYXRlRGF0ZVwiIC8+XG4gICAgICAgICAgey8qIDxDb2x1bW4gdGl0bGU9XCJpbWFnZVVybFwiIGRhdGFJbmRleD1cImltYWdlVXJsXCIga2V5PVwiaW1hZ2VVcmxcIiAvPiAqL31cbiAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICB0aXRsZT1cIkFjdGlvblwiXG4gICAgICAgICAgICBrZXk9XCJhY3Rpb25cIlxuICAgICAgICAgICAgcmVuZGVyPXsodGV4dCwgcmVjb3JkKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBgIzYwN2Q4YmAsIGZvbnRTaXplOiBgMS41cmVtYCB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBgcmVkYCwgZm9udFNpemU6IGAxLjVyZW1gIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmFycy5ibHVlfSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy90ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFycy53aGl0ZX0gIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC10YWJsZSBhbnQtdGFibGUtbGFyZ2UgYW50LXRhYmxlLXNjcm9sbC1wb3NpdGlvbi1sZWZ0IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1heE5ld3NUYWJsZVxuIl19 */\n/*@ sourceURL=components/maxNews/MaxNewsTable.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return MaxNewsTable;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = MaxNewsTable;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Column, 'Column', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsTable.js');
  reactHotLoader.register(ColumnGroup, 'ColumnGroup', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsTable.js');
  reactHotLoader.register(MaxNewsTable, 'MaxNewsTable', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsTable.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/maxNews/MaxNewsTable.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/utils/UploadImage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("./api.js");
var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/utils/UploadImage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UploadImage = function (_Component) {
  _inherits(UploadImage, _Component);

  function UploadImage(props) {
    _classCallCheck(this, UploadImage);

    var _this = _possibleConstructorReturn(this, (UploadImage.__proto__ || Object.getPrototypeOf(UploadImage)).call(this, props));

    _this.handleChange = function (info) {
      if (info.file.status === 'uploading') {
        _this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.props.onChangeImg(info.file.name);
          _this.setState({
            imageUrl: imageUrl,
            loading: false
          });
        });
      }
    };

    _this.state = {
      loading: false,
      imageUrl: ''
    };
    return _this;
  }

  _createClass(UploadImage, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nexProps) {
      //console.log('FightCard.nextProps: ', nexProps.image)
      //console.log('FightCardn.props: ', this.state.imageUrl)
      if (nexProps.image !== this.state.imageUrl) {
        //console.log('in')
        if (nexProps.image !== undefined) {
          //console.log('1')
          this.setState({
            imageUrl: nexProps.image
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var uploadButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["h" /* Icon */], { type: this.state.loading ? 'loading' : 'plus', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ant-upload-text', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          'Upload'
        )
      );
      var imageUrl = this.state.imageUrl;
      //console.log('imageUrl: ', imageUrl)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["q" /* Upload */],
        {
          name: 'avatar',
          listType: 'picture-card',
          className: 'avatar-uploader',
          showUploadList: false,
          action: __WEBPACK_IMPORTED_MODULE_2__api__["a" /* SERVER */] + '/maxnews/upload/image',
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        imageUrl ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { width: '12rem' }, src: imageUrl, alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }) : uploadButton
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return UploadImage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    __WEBPACK_IMPORTED_MODULE_1_antd__["r" /* message */].error('You can only upload JPG file!');
  }
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    __WEBPACK_IMPORTED_MODULE_1_antd__["r" /* message */].error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

var _default = UploadImage;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UploadImage, 'UploadImage', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/utils/UploadImage.js');
  reactHotLoader.register(getBase64, 'getBase64', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/utils/UploadImage.js');
  reactHotLoader.register(beforeUpload, 'beforeUpload', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/utils/UploadImage.js');
  reactHotLoader.register(_default, 'default', '/Users/farmoz/Desktop/MaxMuayThai/cms/Max-cms/components/utils/UploadImage.js');
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
//# sourceMappingURL=4.695d9842b7573c49a089.hot-update.js.map