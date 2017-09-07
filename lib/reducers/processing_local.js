'use strict';

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
    case 'START_PROCESSING_LOCAL':
      return {
        isProcessing: true,
        progress: action.progress
      };
    case 'END_PROCESSING_LOCAL':
      return defaultState;
    default:
      return state;
  }
};