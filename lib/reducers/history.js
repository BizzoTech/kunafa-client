'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var startWithHome = [{
  name: 'HOME'
}];
var startWithLogin = [{
  name: 'LOGIN'
}];

exports.default = function (state, action, config) {
  var defaultState = config && config.profileId ? startWithHome : startWithLogin;
  if (state === undefined) {
    return defaultState;
  }
  switch (action.type) {
    case 'RESET_HISTORY':
      return defaultState;
    case 'GO_TO':
      return [action.route].concat(startWithHome);
    case 'NAVIGATE_TO':
      return [action.route].concat(_toConsumableArray(state));
    case 'TRANSITE_TO':
      return state.length > 1 ? _ramda2.default.update(0, action.route, state) : [action.route].concat(_toConsumableArray(state));
    case 'GO_BACK':
      if (state.length > 1) {
        var currentRoute = state[0];
        var newRoute = state[1];
        return _ramda2.default.update(0, Object.assign({}, newRoute, {
          backFrom: currentRoute
        }), _ramda2.default.tail(state));
      }
      return state;
    case 'START_LOADING':
      return [{
        name: 'LOADING'
      }].concat(_toConsumableArray(state));
    case 'SKIP_LOGIN':
    case 'LOGIN':
      return startWithHome;
    case 'LOGOUT':
      return startWithLogin;
    default:
      return state;
  }
};