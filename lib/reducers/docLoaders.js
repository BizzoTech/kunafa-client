'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'CREATE_DOCS_LOADER':
      return Object.assign({}, state, _defineProperty({}, action.loaderName, {
        query: action.query,
        loaded: 0,
        endReached: false
      }));
    case 'REMOVE_DOCS_LOADER':
      return _ramda2.default.dissoc(action.loaderName, state);
    case 'LOAD_DOCS':
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }
      var loader = state[action.loaderName];
      return Object.assign({}, state, _defineProperty({}, action.loaderName, Object.assign({}, loader, {
        loaded: loader.loaded + action.docs.length,
        endReached: action.docs.length < (loader.query.limit || 25)
      })));
    case 'REFRESH_LOADER':
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }
      return Object.assign({}, state, _defineProperty({}, action.loaderName, Object.assign({}, state[action.loaderName], {
        loaded: 0,
        endReached: false
      })));
    default:
      return state;
  }
};