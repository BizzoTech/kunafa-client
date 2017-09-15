'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _selectors = require('./selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actionCreators = require('./actionCreators');

var _actionCreators2 = _interopRequireDefault(_actionCreators);

var _defaultConfig = require('./defaultConfig');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (appConfig) {

  var syncPaths = _ramda2.default.append({
    name: "events",
    filter: function filter(doc) {
      return doc.type == "EVENT"; // & !doc.appliedOnClient;
    },
    actions: {
      remove: 'REMOVE_EVENT',
      update: 'UPDATE_EVENT',
      insert: 'ADD_EVENT',
      load: 'LOAD_EVENTS'
    }
  }, appConfig.syncPaths || []);

  var config = Object.assign({}, _defaultConfig2.default, appConfig, {
    syncPaths: syncPaths
  });

  var _allActionCreators = Object.assign({}, _actionCreators2.default, config.actionCreators);
  var allActionCreators = _ramda2.default.map(function (actionCreator) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return actionCreator.apply(undefined, args.concat([config]));
    };
  }, _allActionCreators);

  config.actionCreators = allActionCreators;

  var _allReducers = Object.assign({}, _reducers2.default, config.reducers);
  var allReducers = _ramda2.default.map(function (reducer) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return reducer.apply(undefined, args.concat([config]));
    };
  }, _allReducers);

  var _allMiddlewares = [].concat(_toConsumableArray(config.middlewares), _toConsumableArray(_middlewares2.default));
  var allMiddlewares = _ramda2.default.map(function (middleware) {
    return function (store) {
      return middleware(store, config);
    };
  }, _allMiddlewares);

  var allSelectors = Object.assign({}, _selectors2.default, config.selectors);

  var AppReducer = (0, _redux.combineReducers)(allReducers);
  var AppMiddleware = _redux.applyMiddleware.apply(undefined, [_reduxThunk2.default].concat(_toConsumableArray(allMiddlewares)));
  var store = (0, _redux.createStore)(AppReducer, AppMiddleware);

  var AppStore = Object.assign({}, store, { actions: allActionCreators, selectors: allSelectors });

  setTimeout(function () {
    var initialActions = config.getInitialActions(AppStore.getState, allActionCreators);
    initialActions.forEach(AppStore.dispatch);
  }, 500);

  setInterval(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var hasLocalEvents, isProcessing, isConnected;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hasLocalEvents = _ramda2.default.values(AppStore.getState().events).some(_ramda2.default.prop('localOnly'));
            isProcessing = AppStore.getState().processing_local.isProcessing;
            _context.next = 4;
            return config.isConnected();

          case 4:
            isConnected = _context.sent;

            if (hasLocalEvents && !isProcessing && isConnected) {
              AppStore.dispatch({
                type: 'PROCESS_LOCAL_ONLY'
              });
            }

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })), 1000);

  return AppStore;
};