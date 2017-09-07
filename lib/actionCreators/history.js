'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var resetHistory = exports.resetHistory = function resetHistory() {
  return {
    type: 'RESET_HISTORY'
  };
};
var navigateTo = exports.navigateTo = function navigateTo(routeName, params) {
  return {
    type: 'NAVIGATE_TO',
    route: {
      name: routeName,
      params: params
    }
  };
};

var transiteTo = exports.transiteTo = function transiteTo(routeName, params) {
  return {
    type: 'TRANSITE_TO',
    route: {
      name: routeName,
      params: params
    }
  };
};

var goBack = exports.goBack = function goBack() {
  return {
    type: 'GO_BACK'
  };
};

var goTo = exports.goTo = function goTo(routeName, params) {
  return {
    type: 'GO_TO',
    route: {
      name: routeName,
      params: params
    }
  };
};