(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ramda"), require("pouchdb"), require("redux"), require("pouchdb-find"), require("react"), require("react-redux"), require("prop-types"), require("redux-thunk"), require("redux-devtools-extension"), require("uuid"), require("reselect"), require("lodash.throttle"));
	else if(typeof define === 'function' && define.amd)
		define("kunafa", ["ramda", "pouchdb", "redux", "pouchdb-find", "react", "react-redux", "prop-types", "redux-thunk", "redux-devtools-extension", "uuid", "reselect", "lodash.throttle"], factory);
	else if(typeof exports === 'object')
		exports["kunafa"] = factory(require("ramda"), require("pouchdb"), require("redux"), require("pouchdb-find"), require("react"), require("react-redux"), require("prop-types"), require("redux-thunk"), require("redux-devtools-extension"), require("uuid"), require("reselect"), require("lodash.throttle"));
	else
		root["kunafa"] = factory(root["ramda"], root["pouchdb"], root["redux"], root["pouchdb-find"], root["react"], root["react-redux"], root["prop-types"], root["redux-thunk"], root["redux-devtools-extension"], root["uuid"], root["reselect"], root["lodash.throttle"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_42__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(35);

var eventsSelectors = _interopRequireWildcard(_events);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Object.assign({}, eventsSelectors);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = exports.connect = undefined;

var _connect = __webpack_require__(6);

var _connect2 = _interopRequireDefault(_connect);

var _createStore = __webpack_require__(10);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.createStore = _createStore2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var React = _interopRequireWildcard(_react);

var _reactRedux = __webpack_require__(8);

var _redux = __webpack_require__(2);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var connect = function connect(mapStateToProps, mapDispatchToProps) {
  return function (component) {
    var Wrapped = (0, _reactRedux.connect)(mapStateToProps, function (dispatch, ownProps) {
      var pkgActions = (0, _redux.bindActionCreators)(ownProps.actions, dispatch);
      if (typeof mapDispatchToProps === "function") {
        var userActions = mapDispatchToProps(dispatch, ownProps);
        return Object.assign({}, pkgActions, userActions);
      }
      return pkgActions;
    }, null)(component);

    var Wrapper = function (_React$Component) {
      _inherits(Wrapper, _React$Component);

      function Wrapper() {
        _classCallCheck(this, Wrapper);

        return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
      }

      _createClass(Wrapper, [{
        key: "render",
        value: function render() {
          var actions = this.context.store.actions;
          var selectors = this.context.store.selectors;
          return React.createElement(Wrapped, _extends({ actions: actions, selectors: selectors }, this.props));
        }
      }]);

      return Wrapper;
    }(React.Component);

    Wrapper.contextTypes = {
      store: _propTypes2.default.object
    };

    return Wrapper;
  };
};

exports.default = connect;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(11);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(12);

var _pouchdb = __webpack_require__(1);

var _pouchdb2 = _interopRequireDefault(_pouchdb);

var _reducers = __webpack_require__(13);

var _reducers2 = _interopRequireDefault(_reducers);

var _middlewares = __webpack_require__(23);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _selectors = __webpack_require__(4);

var _selectors2 = _interopRequireDefault(_selectors);

var _actionCreators = __webpack_require__(37);

var _actionCreators2 = _interopRequireDefault(_actionCreators);

var _defaultConfig = __webpack_require__(43);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var R = __webpack_require__(0);

exports.default = function (appConfig, preloadedState) {
  var syncPaths = R.append({
    name: "events",
    filter: function filter(doc) {
      return doc.type == "EVENT"; // & !doc.appliedOnClient;
    },
    actions: {
      remove: "REMOVE_EVENT",
      update: "UPDATE_EVENT",
      insert: "ADD_EVENT",
      load: "LOAD_EVENTS"
    }
  }, appConfig.syncPaths || []);

  var config = Object.assign({}, _defaultConfig2.default, appConfig, {
    syncPaths: syncPaths
  });

  var _allActionCreators = Object.assign({}, _actionCreators2.default, config.actionCreators);
  var allActionCreators = R.map(function (actionCreator) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return actionCreator.apply(undefined, args.concat([config]));
    };
  }, _allActionCreators);

  config.actionCreators = allActionCreators;

  var _allReducers = Object.assign({}, _reducers2.default, config.reducers);
  var allReducers = R.map(function (reducer) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return reducer.apply(undefined, args.concat([config]));
    };
  }, _allReducers);

  var _allMiddlewares = config.ssr ? [] : [].concat(_toConsumableArray(config.middlewares), _toConsumableArray(_middlewares2.default));
  var allMiddlewares = R.map(function (middleware) {
    return function (store) {
      return middleware(store, config);
    };
  }, _allMiddlewares);

  var allSelectors = Object.assign({}, _selectors2.default, config.selectors);

  var AppReducer = (0, _redux.combineReducers)(allReducers);
  var AppMiddleware = _redux.applyMiddleware.apply(undefined, [_reduxThunk2.default].concat(_toConsumableArray(allMiddlewares)));

  var store = {};
  if (config.useReduxDevTools) {
    store = (0, _redux.createStore)(AppReducer, preloadedState, (0, _reduxDevtoolsExtension.composeWithDevTools)(AppMiddleware));
  } else {
    store = (0, _redux.createStore)(AppReducer, preloadedState, AppMiddleware);
  }

  var AppStore = Object.assign({}, store, {
    actions: allActionCreators,
    selectors: allSelectors
  });

  if (config.ssr) {
    var initialActions = config.getInitialActions(AppStore.getState, allActionCreators) || [];
    initialActions.forEach(AppStore.dispatch);
    return AppStore;
  }

  setTimeout(function () {
    var initialActions = config.getInitialActions(AppStore.getState, allActionCreators) || [];
    initialActions.forEach(AppStore.dispatch);
  }, 500);

  setInterval(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var hasLocalEvents, isProcessing, isConnected;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hasLocalEvents = R.values(AppStore.getState().events).some(R.prop("localOnly"));
            isProcessing = AppStore.getState().processing_local.isProcessing;
            _context.next = 4;
            return config.isConnected();

          case 4:
            isConnected = _context.sent;

            if (hasLocalEvents && !isProcessing && isConnected) {
              AppStore.dispatch({
                type: "PROCESS_LOCAL_ONLY"
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })), 1000);

  var localSharedDB = new _pouchdb2.default("shared", { auto_compaction: true });
  setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var sharedDocs, changes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return localSharedDB.allDocs({
              include_docs: true,
              update_seq: true
            });

          case 2:
            sharedDocs = _context2.sent;

            store.dispatch({
              type: "LOAD_SHARED_DOCS",
              docs: sharedDocs.rows.filter(function (r) {
                return !r.id.startsWith("_design");
              }).map(function (r) {
                return r.doc;
              })
            });

            changes = localSharedDB.changes({
              since: sharedDocs.update_seq,
              live: true,
              include_docs: true
            });

            changes.on("change", function (change) {
              if (change.doc._deleted) {
                store.dispatch({
                  type: "REMOVE_SHARED_DOC",
                  doc: change.doc
                });
              } else {
                store.dispatch({
                  type: "SET_SHARED_DOC",
                  doc: change.doc
                });
              }
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })), 0);

  return AppStore;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currentProfile = __webpack_require__(14);

var _currentProfile2 = _interopRequireDefault(_currentProfile);

var _history = __webpack_require__(15);

var _history2 = _interopRequireDefault(_history);

var _events = __webpack_require__(16);

var _events2 = _interopRequireDefault(_events);

var _documents = __webpack_require__(17);

var _documents2 = _interopRequireDefault(_documents);

var _processing_local = __webpack_require__(18);

var _processing_local2 = _interopRequireDefault(_processing_local);

var _dialog = __webpack_require__(19);

var _dialog2 = _interopRequireDefault(_dialog);

var _docLoaders = __webpack_require__(20);

var _docLoaders2 = _interopRequireDefault(_docLoaders);

var _notifications = __webpack_require__(21);

var _notifications2 = _interopRequireDefault(_notifications);

var _sharedDocs = __webpack_require__(22);

var _sharedDocs2 = _interopRequireDefault(_sharedDocs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  currentProfile: _currentProfile2.default,
  history: _history2.default,
  events: _events2.default,
  documents: _documents2.default,
  processing_local: _processing_local2.default,
  dialog: _dialog2.default,
  docLoaders: _docLoaders2.default,
  notifications: _notifications2.default,
  sharedDocs: _sharedDocs2.default
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state, action, config) {
  var defaultState = {
    _id: config ? config.profileId : undefined
  };
  if (state === undefined) {
    return defaultState;
  }
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        _id: action.profileId
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        _id: undefined
      });
    default:
      return state;
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var R = __webpack_require__(0);

var startWithHome = {
  path: [""]
};
var startWithLogin = {
  path: ["login"]
};

exports.default = function (state, action, config) {
  var defaultState = config && config.profileId ? startWithHome : startWithLogin;
  if (state === undefined) {
    return defaultState;
  }
  switch (action.type) {
    case "RESET_HISTORY":
      return startWithHome;
    case "GO_TO":
      return Object.assign({}, action.route, {
        previous: startWithHome
      });
    case "NAVIGATE_TO":
      return Object.assign({}, action.route, {
        previous: state
      });
    case "TRANSITE_TO":
      return state.previous ? Object.assign({}, action.route, {
        previous: state.previous
      }) : Object.assign({}, action.route, {
        previous: startWithHome
      });
    case "GO_BACK":
      return state.previous ? Object.assign({}, state.previous, {
        backFrom: R.dissoc("previous", state)
      }) : state;
    case "SKIP_LOGIN":
    case "LOGIN":
      if (state.path.length && state.path[0] === "login") {
        return state.previous ? state.previous : startWithHome;
      } else {
        return state;
      }
    case "LOGOUT":
      return startWithLogin;
    default:
      return state;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var R = __webpack_require__(0);

var indexBy = R.reduceBy(function (acc, elem) {
  return elem;
}, null);

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case "LOAD_EVENTS":
      var newEvents = indexBy(function (e) {
        return e._id;
      }, action.events);
      return Object.assign({}, state, newEvents);
    case "ADD_EVENT":
    case "UPDATE_EVENT":
      return R.assoc(action.doc._id, action.doc, state);
    case "REMOVE_EVENT":
      return R.dissoc(action.doc._id, state);
    case "LOGIN":
    case "LOGOUT":
      return defaultState;
    default:
      return state;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var R = __webpack_require__(0);

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var config = arguments[2];

  switch (action.type) {
    case "LOAD_DOCS":
    case "LOAD_DOCS_FROM_CACHE":
      var modifiedDocs = action.docs.filter(function (doc) {
        return !state[doc._id] || state[doc._id]._rev !== doc._rev;
      });
      return modifiedDocs.reduce(function (state, doc) {
        return R.merge(state, _defineProperty({}, doc._id, doc)); //{...state, [doc._id]: doc};
      }, state);
    default:
      if (!config || !config.actionHandlers || !config.getRelevantDocsIds) {
        return state;
      }
      var actionHandlers = config.actionHandlers,
          getRelevantDocsIds = config.getRelevantDocsIds;

      var actionHandlersKeys = R.flatten(Object.values(actionHandlers).map(function (hs) {
        return Object.keys(hs);
      }));
      if (actionHandlersKeys.includes(action.type)) {
        var relevantDocsIds = getRelevantDocsIds(action);
        var relevantDocsToAdd = relevantDocsIds.filter(function (docId) {
          return action.doc._id === docId && !state[docId];
        }).map(function (docId) {
          return {
            type: action.doc.type
          };
        });
        var relevantDocsToUpdate = relevantDocsIds.filter(function (docId) {
          return action.doc._id !== docId || state[docId];
        }).map(function (docId) {
          return state[docId];
        }).filter(function (d) {
          return d;
        });
        var relevantDocs = [].concat(_toConsumableArray(relevantDocsToAdd), _toConsumableArray(relevantDocsToUpdate));
        var updatedDocs = relevantDocs.map(function (doc) {
          return actionHandlers[doc.type][action.type](doc, action);
        }).filter(function (doc) {
          return !relevantDocs.includes(doc);
        });
        if (updatedDocs.length > 0) {
          return updatedDocs.reduce(function (state, doc) {
            return R.merge(state, _defineProperty({}, doc._id, doc)); //{...state, [doc._id]: doc};
          }, state);
        } else {
          return state;
        }
      } else {
        return state;
      }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultState = {
  isProcessing: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case "START_PROCESSING_LOCAL":
      return {
        isProcessing: true,
        progress: action.progress
      };
    case "END_PROCESSING_LOCAL":
      return defaultState;
    default:
      return state;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var R = __webpack_require__(0);

var defaultState = {
  currentDialog: undefined
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case "OPEN_DIALOG":
      return action.dialog;
    case "CLOSE_DIALOG":
    case "RESET_HISTORY":
    case "GO_TO":
    case "NAVIGATE_TO":
    case "TRANSITE_TO":
    case "GO_BACK":
    case "START_LOADING":
      return defaultState;
    default:
      return state;
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var R = __webpack_require__(0);

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case "CREATE_DOCS_LOADER":
      return Object.assign({}, state, _defineProperty({}, action.loaderName, {
        query: action.query,
        loaded: 0,
        loadedDocs: [],
        endReached: false
      }));
    case "REMOVE_DOCS_LOADER":
      return R.dissoc(action.loaderName, state);
    case "LOAD_DOCS":
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }
      var loader = state[action.loaderName];

      var loadedDocs = R.uniq([].concat(_toConsumableArray(loader.loadedDocs), _toConsumableArray(action.docs.map(function (d) {
        return d._id;
      }))));

      return Object.assign({}, state, _defineProperty({}, action.loaderName, Object.assign({}, loader, {
        loaded: loadedDocs.length,
        loadedDocs: loadedDocs,
        endReached: action.docs.length < (loader.query.limit || 25)
      })));
    case "REFRESH_LOADER":
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }
      return Object.assign({}, state, _defineProperty({}, action.loaderName, Object.assign({}, state[action.loaderName], {
        loaded: 0,
        loadedDocs: [],
        endReached: false
      })));
    default:
      return state;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var R = __webpack_require__(0);

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case "LOAD_NOTIFICATIONS":
      var updatedNotifications = action.notifications.filter(function (n) {
        return !state[n._id] || state[n._id]._rev !== n._rev;
      });
      return R.merge(state, R.indexBy(R.prop("_id"), updatedNotifications));
    case "ADD_NOTIFICATION":
    case "UPDATE_NOTIFICATION":
      return R.merge(state, _defineProperty({}, action.doc._id, action.doc));
    case "REMOVE_NOTIFICATION":
      return R.omit([action.doc._id], state);
    default:
      return state;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var R = __webpack_require__(0);

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case "LOAD_SHARED_DOCS":
      var updatedDocs = action.docs.filter(function (n) {
        return !state[n._id] || state[n._id]._rev !== n._rev;
      });
      return R.merge(state, R.indexBy(R.prop("_id"), updatedDocs));
    case "SET_SHARED_DOC":
      return R.merge(state, _defineProperty({}, action.doc._id, action.doc));
    case "REMOVE_SHARED_DOC":
      return R.omit([action.doc._id], state);
    default:
      return state;
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _process_local_events_middleware = __webpack_require__(24);

var _process_local_events_middleware2 = _interopRequireDefault(_process_local_events_middleware);

var _local_cache_middleware = __webpack_require__(25);

var _local_cache_middleware2 = _interopRequireDefault(_local_cache_middleware);

var _event_change_handler_middleware = __webpack_require__(26);

var _event_change_handler_middleware2 = _interopRequireDefault(_event_change_handler_middleware);

var _click_notification_middleware = __webpack_require__(27);

var _click_notification_middleware2 = _interopRequireDefault(_click_notification_middleware);

var _sync_middleware = __webpack_require__(28);

var _sync_middleware2 = _interopRequireDefault(_sync_middleware);

var _event_sourcing_middleware = __webpack_require__(33);

var _event_sourcing_middleware2 = _interopRequireDefault(_event_sourcing_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_process_local_events_middleware2.default, _local_cache_middleware2.default, _event_sourcing_middleware2.default, _sync_middleware2.default, _click_notification_middleware2.default, _event_change_handler_middleware2.default];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var R = __webpack_require__(0);

var processEvents = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(processLocalEvent, events, next) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            next({ type: "START_PROCESSING_LOCAL" });
            _context.prev = 1;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 5;
            _iterator = events[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 15;
              break;
            }

            event = _step.value;
            _context.next = 11;
            return processLocalEvent(event, function (progress) {
              next({ type: "START_PROCESSING_LOCAL", progress: progress });
            });

          case 11:
            next({
              type: "UPDATE_EVENT",
              doc: Object.assign({}, event, {
                draft: "true",
                localOnly: undefined
              })
            });

          case 12:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 21:
            _context.prev = 21;
            _context.prev = 22;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 24:
            _context.prev = 24;

            if (!_didIteratorError) {
              _context.next = 27;
              break;
            }

            throw _iteratorError;

          case 27:
            return _context.finish(24);

          case 28:
            return _context.finish(21);

          case 29:
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t1 = _context["catch"](1);

            console.log(_context.t1);

          case 34:
            _context.prev = 34;

            next({ type: "END_PROCESSING_LOCAL" });
            return _context.finish(34);

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 31, 34, 37], [5, 17, 21, 29], [22,, 24, 28]]);
  }));

  return function processEvents(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = function (store, _ref2) {
  var processLocalEvent = _ref2.processLocalEvent,
      isConnected = _ref2.isConnected;
  return function (next) {
    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(action) {
        var localOnlyEvents;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(action.type === "PROCESS_LOCAL_ONLY")) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 3;
                return isConnected();

              case 3:
                if (!_context2.sent) {
                  _context2.next = 8;
                  break;
                }

                localOnlyEvents = R.sort(function (a1, a2) {
                  return a1.createdAt - a2.createdAt;
                }, R.values(store.getState().events).filter(R.prop("localOnly")));

                if (!(localOnlyEvents.length < 1)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return");

              case 7:
                return _context2.abrupt("return", processEvents(processLocalEvent, localOnlyEvents, next));

              case 8:
                _context2.next = 11;
                break;

              case 10:
                return _context2.abrupt("return", next(action));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }();
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var R = __webpack_require__(0);

var removeOldDocs = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cacheDocTypes, cacheLimit, keepInCache, state, cacheStore) {
    var items, docs, sortedDocs, toBeRemovedDocs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return cacheStore.getAll();

          case 2:
            items = _context.sent;
            docs = items.filter(function (item) {
              return item && cacheDocTypes.includes(item.type);
            });
            sortedDocs = R.sort(function (d1, d2) {
              return d2.fetchedAt - d1.fetchedAt;
            }, docs.filter(function (d) {
              return !(keepInCache(d, state) || d._id === R.path(["currentProfile", "_id"], state));
            }));

            if (!(sortedDocs.length > cacheLimit)) {
              _context.next = 33;
              break;
            }

            toBeRemovedDocs = R.takeLast(sortedDocs.length - cacheLimit, sortedDocs);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator = toBeRemovedDocs[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 19;
              break;
            }

            doc = _step.value;
            _context.next = 16;
            return cacheStore.delete(doc._id);

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 28:
            _context.prev = 28;

            if (!_didIteratorError) {
              _context.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context.finish(28);

          case 32:
            return _context.finish(25);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[10, 21, 25, 33], [26,, 28, 32]]);
  }));

  return function removeOldDocs(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = function (store, _ref2) {
  var cacheDocTypes = _ref2.cacheDocTypes,
      cacheLimit = _ref2.cacheLimit,
      keepInCache = _ref2.keepInCache,
      cacheStore = _ref2.cacheStore;
  return function (next) {
    setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var items;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return cacheStore.getAll();

            case 2:
              items = _context2.sent;

              next({
                type: "LOAD_DOCS_FROM_CACHE",
                docs: items.filter(function (item) {
                  return item && cacheDocTypes.includes(item.type);
                })
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    })), 200);

    return function (action) {
      var result = next(action);

      setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, doc;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(action.type === "LOAD_DOCS")) {
                  _context3.next = 28;
                  break;
                }

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 4;
                _iterator2 = action.docs.filter(function (doc) {
                  return doc && cacheDocTypes.includes(doc.type);
                })[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context3.next = 13;
                  break;
                }

                doc = _step2.value;
                _context3.next = 10;
                return cacheStore.save(doc._id, doc);

              case 10:
                _iteratorNormalCompletion2 = true;
                _context3.next = 6;
                break;

              case 13:
                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t0;

              case 19:
                _context3.prev = 19;
                _context3.prev = 20;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 22:
                _context3.prev = 22;

                if (!_didIteratorError2) {
                  _context3.next = 25;
                  break;
                }

                throw _iteratorError2;

              case 25:
                return _context3.finish(22);

              case 26:
                return _context3.finish(19);

              case 27:
                if (action.docs.length > 1) {
                  removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, store.getState(), cacheStore);
                }

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, undefined, [[4, 15, 19, 27], [20,, 22, 26]]);
      })), 0);

      return result;
    };
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var R = __webpack_require__(0);

exports.default = function (store, _ref) {
  var actionCreators = _ref.actionCreators;
  return function (next) {
    return function (action) {
      var result = next(action);

      if (action.type === "LOAD_EVENTS") {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = action.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;

            if (event.relevantDocsIds && event.relevantDocsIds.length > 0) {
              next(event.action);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      if (action.type === "UPDATE_EVENT" || action.type === "ADD_EVENT") {
        if (!action.doc.draft && action.doc.appliedOn) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Object.keys(action.doc.appliedOn)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var docId = _step2.value;

              store.dispatch(actionCreators.fetchDoc({
                _id: docId
              }));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }

      return result;
    };
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store, _ref) {
  var getNotificationRoute = _ref.getNotificationRoute;
  return function (next) {
    return function (action) {
      if (action.type === "CLICK_NOTIFICATION") {
        if (action.notification) {
          var notification = action.notification;
          var route = getNotificationRoute(notification);
          if (route) {
            next({
              type: action.external ? "GO_TO" : "NAVIGATE_TO",
              route: route
            });
          }
        }
      }
      return next(action);
    };
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pouchdb = __webpack_require__(1);

var _pouchdb2 = _interopRequireDefault(_pouchdb);

var _pouchdbFind = __webpack_require__(3);

var _pouchdbFind2 = _interopRequireDefault(_pouchdbFind);

var _initialLoad = __webpack_require__(29);

var _initialLoad2 = _interopRequireDefault(_initialLoad);

var _syncChanges = __webpack_require__(30);

var _syncChanges2 = _interopRequireDefault(_syncChanges);

var _getActionsFromPaths = __webpack_require__(32);

var _getActionsFromPaths2 = _interopRequireDefault(_getActionsFromPaths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var R = __webpack_require__(0);

_pouchdb2.default.plugin(_pouchdbFind2.default);

exports.default = function (store, _ref) {
  var getLocalDbUrl = _ref.getLocalDbUrl,
      syncPaths = _ref.syncPaths;
  return function (next) {
    var profileId = store.getState().currentProfile._id;
    var localDbUrl = getLocalDbUrl(profileId);
    var db = new _pouchdb2.default(localDbUrl);
    var changes = void 0;
    setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _initialLoad2.default)(db, syncPaths, next);

            case 2:
              result = _context.sent;
              //Initial Load docs to improve render performance by tracking new changes only

              changes = (0, _syncChanges2.default)(db, syncPaths, store, next, result.update_seq);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })), 0);

    var mergedActions = (0, _getActionsFromPaths2.default)(syncPaths);

    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(action) {
        var bulk, state, _profileId, _localDbUrl, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                bulk = [];
                state = store.getState();

                mergedActions.insert.forEach(function (insertAction) {
                  if (insertAction.type === action.type) {
                    var docs = insertAction.getDocs(state, action);
                    docs.forEach(function (doc) {
                      if (doc.draft) {
                        //db.put(R.omit(['draft'], doc));
                        bulk.push(R.omit(["draft"], doc));
                      }
                    });
                  }
                });
                mergedActions.update.forEach(function (updateAction) {
                  if (updateAction.type === action.type) {
                    var docs = updateAction.getDocs(state, action);
                    docs.forEach(function (doc) {
                      if (doc.draft) {
                        //db.put(R.omit(['draft'], doc));
                        bulk.push(R.omit(["draft"], doc));
                      }
                    });
                  }
                });
                mergedActions.remove.forEach(function (removeAction) {
                  if (removeAction.type === action.type) {
                    var docs = removeAction.getDocs(state, action);
                    docs.forEach(function (doc) {
                      //db.remove(doc)
                      bulk.push(R.merge(doc, {
                        _deleted: true
                      }));
                    });
                    next(action);
                  }
                });

                if (!bulk.length) {
                  _context2.next = 9;
                  break;
                }

                setTimeout(function () {
                  db.bulkDocs(bulk);
                }, 0);
                _context2.next = 19;
                break;

              case 9:
                next(action);

                if (!(action.type === "LOGIN" || action.type === "LOGOUT")) {
                  _context2.next = 19;
                  break;
                }

                changes.cancel();
                _profileId = store.getState().currentProfile._id;
                _localDbUrl = getLocalDbUrl(_profileId);

                db = new _pouchdb2.default(_localDbUrl);

                //Initial Load docs to improve render performance by tracking new changes only
                _context2.next = 17;
                return (0, _initialLoad2.default)(db, syncPaths, next);

              case 17:
                result = _context2.sent;


                changes = (0, _syncChanges2.default)(db, syncPaths, store, next, result.update_seq);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initialLoad = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(db, syncPaths, dispatch) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.allDocs({
              include_docs: true,
              update_seq: true
            });

          case 2:
            result = _context.sent;

            syncPaths.forEach(function (path) {
              if (path.actions.load) {
                dispatch(_defineProperty({
                  type: path.actions.load
                }, path.name, result.rows.map(function (r) {
                  return r.doc;
                }).filter(path.filter)));
              }
            });
            return _context.abrupt("return", result);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function initialLoad(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = initialLoad;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getDefaultAction = __webpack_require__(31);

var _getDefaultAction2 = _interopRequireDefault(_getDefaultAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var syncChanges = function syncChanges(db, syncPaths, store, dispatch) {
  var update_seq = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "now";

  var changes = db.changes({
    since: update_seq,
    live: true,
    include_docs: true
  });
  changes.on("change", function (change) {
    syncPaths.forEach(function (path) {
      if (path.filter && !path.filter(change.doc)) {
        return;
      }
      //console.log(change)
      if (change.doc._deleted) {
        setTimeout(function () {
          dispatch({
            type: (0, _getDefaultAction2.default)(path.actions.remove),
            doc: change.doc
          });
        }, 0);
        return;
      }
      var pathState = store.getState()[path.name];
      if (pathState[change.doc._id]) {
        setTimeout(function () {
          dispatch({
            type: (0, _getDefaultAction2.default)(path.actions.update),
            doc: change.doc
          });
        }, 0);
        return;
      } else {
        setTimeout(function () {
          dispatch({
            type: (0, _getDefaultAction2.default)(path.actions.insert),
            doc: change.doc
          });
        }, 0);
        return;
      }
    });
  });
  return changes;
};

exports.default = syncChanges;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDefaultAction = function getDefaultAction(act) {
  var action = act;
  if (Array.isArray(action)) {
    action = action[0];
  }
  if (typeof action === "string") {
    return action;
  } else {
    return action.type;
  }
};

exports.default = getDefaultAction;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var R = __webpack_require__(0);

var getDocs = exports.getDocs = function getDocs(state, action) {
  return [action.doc];
};

var getActionsFromPaths = function getActionsFromPaths(syncPaths) {
  var actionsList = syncPaths.map(function (path) {
    var actions = R.pick(["insert", "update", "remove"], path.actions);
    var transformAction = function transformAction(action) {
      if (Array.isArray(action)) {
        return R.flatten(action.map(transformAction));
      }
      if ((typeof action === "undefined" ? "undefined" : _typeof(action)) === "object") {
        return [{
          type: action.type,
          getDocs: action.getDocs || getDocs
        }];
      }
      return [{
        type: action,
        getDocs: getDocs
      }];
    };
    return R.map(transformAction, actions);
  });

  return actionsList.reduce(function (result, actionObj) {
    return {
      insert: [].concat(_toConsumableArray(result.insert), _toConsumableArray(actionObj.insert)),
      update: [].concat(_toConsumableArray(result.update), _toConsumableArray(actionObj.update)),
      remove: [].concat(_toConsumableArray(result.remove), _toConsumableArray(actionObj.remove))
    };
  });
};

exports.default = getActionsFromPaths;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = __webpack_require__(34);

var _uuid2 = _interopRequireDefault(_uuid);

var _selectors = __webpack_require__(4);

var _selectors2 = _interopRequireDefault(_selectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var R = __webpack_require__(0);

var eventsByRelevantDocSelector = _selectors2.default.eventsByRelevantDocSelector;

exports.default = function (store, config) {
  var localOnlyActions = config.localOnlyActions,
      needLocalProcessing = config.needLocalProcessing,
      getActionPreProcessors = config.getActionPreProcessors,
      getActionPostProcessors = config.getActionPostProcessors,
      getRelevantDocsIds = config.getRelevantDocsIds,
      deviceInfo = config.deviceInfo;

  var createEvent = function createEvent(action, state) {
    var eventsList = R.values(state.events);
    var localOnlyEvents = eventsList.filter(R.prop("localOnly"));
    var localProcessingDocumentsIds = R.flatten(localOnlyEvents.map(function (event) {
      return event.relevantDocsIds;
    }));
    var relevantDocsIds = getRelevantDocsIds(action);
    var shouldWaitForOtherAction = relevantDocsIds.some(function (docId) {
      return localProcessingDocumentsIds.includes(docId);
    });

    var localOnly = needLocalProcessing.includes(action.type) || shouldWaitForOtherAction;
    var _id = state.currentProfile._id ? state.currentProfile._id + "-" + Date.now() + "-" + action.type : "anonymous-" + deviceInfo.device_unique_id + "-" + Date.now() + "-" + action.type;
    return {
      _id: _id,
      type: "EVENT",
      draft: "true",
      localOnly: localOnly ? "true" : undefined,
      action: action,
      relevantDocsIds: getRelevantDocsIds(action),
      preProcessors: getActionPreProcessors(action),
      postProcessors: getActionPostProcessors(action),
      status: "draft",
      info: deviceInfo,
      createdAt: Date.now(),
      createdBy: state.currentProfile._id || "anonymous"
    };
  };

  return function (next) {
    return function (action) {
      if (!localOnlyActions.includes(action.type) && action.type !== "ADD_PROFILE") {
        setTimeout(function () {
          next({
            type: "ADD_EVENT",
            doc: createEvent(action, store.getState())
          });
        }, 0);
      }

      var result = next(action);

      if (action.type === "LOAD_DOCS" || action.type === "LOAD_DOCS_FROM_CACHE") {
        setTimeout(function () {
          var eventsByRelevantDoc = eventsByRelevantDocSelector(store.getState());
          action.docs.forEach(function (doc) {
            var docEvents = eventsByRelevantDoc[doc._id] || [];
            updateEventsToSetAppliedOnClient(doc, docEvents, next);
          });
        }, 0);
      }

      return result;
    };
  };
};

var updateEventsToSetAppliedOnClient = function updateEventsToSetAppliedOnClient(doc, docEvents, next) {
  docEvents.forEach(function (event) {
    var isAppliedOn = event.appliedOn && event.appliedOn[doc._id];
    if (isAppliedOn && parseInt(event.appliedOn[doc._id]) <= parseInt(doc._rev)) {
      event.appliedOnClient = event.appliedOnClient || {};
      if (!event.appliedOnClient[doc._id]) {
        next({
          type: "UPDATE_EVENT",
          doc: Object.assign({}, event, {
            draft: true,
            appliedOnClient: Object.assign({}, event.appliedOnClient, _defineProperty({}, doc._id, doc._rev))
          })
        });
      }
    } else {
      next(event.action);
    }
  });
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsByRelevantDocSelector = undefined;

var _reselect = __webpack_require__(36);

var R = __webpack_require__(0);

var eventsSelector = function eventsSelector(state) {
  return state.events;
};

var interestingEventsSelector = (0, _reselect.createSelector)(eventsSelector, function (events) {
  return R.values(events).filter(function (event) {
    return event.relevantDocsIds !== undefined && event.relevantDocsIds.length > 0;
  });
});

var sortedEventsSelector = (0, _reselect.createSelector)(interestingEventsSelector, function (events) {
  return R.sort(function (e1, e2) {
    return e1.createdAt - e2.createdAt;
  }, events);
});

var eventsByRelevantDocSelector = exports.eventsByRelevantDocSelector = (0, _reselect.createSelector)(sortedEventsSelector, function (events) {
  var eventsWithDocIds = R.flatten(events.map(function (event) {
    return event.relevantDocsIds.map(function (docId) {
      return Object.assign({}, event, {
        docId: docId
      });
    });
  }));
  var eventsGroupedByDocId = R.groupBy(function (event) {
    return event.docId;
  }, eventsWithDocIds);
  return R.map(function (events) {
    return events.filter(function (event) {
      var appliedOnClientRev = R.path(["appliedOnClient", event.docId], event);
      return appliedOnClientRev === undefined;
    });
  }, eventsGroupedByDocId);
});

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(38);

var historyActions = _interopRequireWildcard(_history);

var _dialog = __webpack_require__(39);

var dialogActions = _interopRequireWildcard(_dialog);

var _notifications = __webpack_require__(40);

var notificationActions = _interopRequireWildcard(_notifications);

var _documents = __webpack_require__(41);

var documentsActions = _interopRequireWildcard(_documents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Object.assign({}, documentsActions, historyActions, dialogActions, notificationActions);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var resetHistory = exports.resetHistory = function resetHistory() {
  return {
    type: "RESET_HISTORY"
  };
};

var navigateTo = exports.navigateTo = function navigateTo(path) {
  return {
    type: "NAVIGATE_TO",
    route: {
      path: path
    }
  };
};

var transiteTo = exports.transiteTo = function transiteTo(path) {
  return {
    type: "TRANSITE_TO",
    route: {
      path: path
    }
  };
};

var goBack = exports.goBack = function goBack() {
  return {
    type: "GO_BACK"
  };
};

var goTo = exports.goTo = function goTo(path) {
  return {
    type: "GO_TO",
    route: {
      path: path
    }
  };
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var openDialog = exports.openDialog = function openDialog(dialog) {
  return {
    type: "OPEN_DIALOG",
    dialog: dialog
  };
};

var closeDialog = exports.closeDialog = function closeDialog() {
  return {
    type: "CLOSE_DIALOG"
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var clickNotification = exports.clickNotification = function clickNotification(notification) {
  return {
    type: "CLICK_NOTIFICATION",
    notification: notification
  };
};

var clickExternalNotification = exports.clickExternalNotification = function clickExternalNotification(notification) {
  return {
    type: "CLICK_NOTIFICATION",
    notification: notification,
    external: true
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshLoader = exports.loadMoreDocs = exports.createDocLoader = exports.fetchDoc = exports.loadDocs = undefined;

var _pouchdb = __webpack_require__(1);

var _pouchdb2 = _interopRequireDefault(_pouchdb);

var _pouchdbFind = __webpack_require__(3);

var _pouchdbFind2 = _interopRequireDefault(_pouchdbFind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_pouchdb2.default.plugin(_pouchdbFind2.default);

var throttle = __webpack_require__(42);

var publicDb = null;

var getDbInstance = function getDbInstance(config) {
  if (publicDb === null) {
    var host = config.HOST;
    var ssl = config.SSL || "off";
    var protocol = ssl === "on" ? "https" : "http";
    publicDb = new _pouchdb2.default(protocol + "://" + host + "/public", {
      ajax: {
        timeout: 60000
      }
    });
  }
  return publicDb;
};

var loadDocs = exports.loadDocs = function loadDocs(query, loaderName, config) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _publicDb, result, docs;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _publicDb = config.getDbInstance ? config.getDbInstance() : getDbInstance(config);
              _context.next = 4;
              return _publicDb.find(query);

            case 4:
              result = _context.sent;
              docs = result ? result.docs.map(function (doc) {
                return Object.assign({}, doc, {
                  fetchedAt: Date.now()
                });
              }) : [];

              if (docs && docs.length > 0) {
                dispatch({
                  type: "LOAD_DOCS",
                  docs: docs,
                  loaderName: loaderName
                });
              }
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var TTL = 5 * 60 * 1000; //5 minuts
//const TTL = 0; // Live Update

var fetchDoc = exports.fetchDoc = function fetchDoc(doc, _ref2) {
  var actionCreators = _ref2.actionCreators;
  return function (dispatch) {
    if (!doc || !doc._id) {
      return Promise.resolve();
    }
    if (!doc.invalidCache && doc.fetchedAt && Date.now() - doc.fetchedAt < TTL) {
      //console.log("loaded from cache");
      return Promise.resolve();
    }
    dispatch(actionCreators.loadDocs({
      selector: {
        _id: doc._id
      }
    }, undefined));
  };
};

var createDocLoader = exports.createDocLoader = function createDocLoader(loaderName, query) {
  return {
    type: "CREATE_DOCS_LOADER",
    loaderName: loaderName,
    query: query
  };
};

var loadMoreDocs = exports.loadMoreDocs = throttle(function (loaderName, _ref3) {
  var actionCreators = _ref3.actionCreators;
  return function (dispatch, getState) {
    var loaderState = getState().docLoaders[loaderName];
    if (loaderState) {
      var query = loaderState.query,
          loaded = loaderState.loaded,
          endReached = loaderState.endReached;

      if (endReached) {
        return;
      }

      dispatch(actionCreators.loadDocs(Object.assign({}, query, {
        skip: loaded > 0 ? loaded : undefined
      }), loaderName));
    }
  };
}, 200);

var refreshLoader = exports.refreshLoader = function refreshLoader(loaderName, _ref4) {
  var actionCreators = _ref4.actionCreators;
  return function (dispatch) {
    dispatch({
      type: "REFRESH_LOADER",
      loaderName: loaderName
    });
    dispatch(actionCreators.loadMoreDocs(loaderName));
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var defaultConfig = {
  actionCreators: {},
  reducers: {},
  middlewares: [],
  selectors: {},
  syncPaths: [],
  actionHandlers: {},
  getRelevantDocsIds: function getRelevantDocsIds(action) {
    return [];
  },
  needLocalProcessing: [],
  processLocalEvent: function processLocalEvent(event) {
    return Promise.resolve(event);
  },
  localOnlyActions: [],
  getActionPreProcessors: function getActionPreProcessors(action) {
    return [];
  },
  getActionPostProcessors: function getActionPostProcessors(action) {
    return [];
  },
  cacheDocTypes: [],
  cacheLimit: 300,
  keepInCache: function keepInCache(doc, state) {
    return false;
  },
  getDeepLinkRoute: function getDeepLinkRoute(url) {
    return {
      name: "HOME"
    };
  },
  getNotificationRoute: function getNotificationRoute(notification) {
    return {
      name: "HOME"
    };
  },
  getInitialActions: function getInitialActions() {},
  renderDialogContent: function renderDialogContent() {},
  statusBarColor: function statusBarColor(getState) {
    return "#000000";
  },
  progressBarColor: function progressBarColor(getState) {
    return "#000000";
  },
  isConnected: function isConnected() {
    return false;
  },
  deviceInfo: {
    device_unique_id: "default"
  },
  cacheStore: {
    keys: function keys() {
      return [];
    },
    get: function get() {
      return undefined;
    },
    save: function save() {
      return undefined;
    },
    delete: function _delete() {
      return undefined;
    },
    getAll: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", []);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function getAll() {
        return _ref.apply(this, arguments);
      };
    }()
  }
};

exports.default = defaultConfig;

/***/ })
/******/ ]);
});