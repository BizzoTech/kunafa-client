'use strict';

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
    case 'LOGIN':
      return Object.assign({}, state, {
        _id: action.profileId
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        _id: undefined
      });
    default:
      return state;
  }
};