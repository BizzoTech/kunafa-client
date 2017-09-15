'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  currentDialog: undefined
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'OPEN_DIALOG':
      return action.dialog;
    case 'CLOSE_DIALOG':
    case 'RESET_HISTORY':
    case 'GO_TO':
    case 'NAVIGATE_TO':
    case 'TRANSITE_TO':
    case 'GO_BACK':
    case 'START_LOADING':
      return defaultState;
    default:
      return state;
  }
};