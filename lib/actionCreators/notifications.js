'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clickNotification = exports.clickNotification = function clickNotification(notification) {
  return {
    type: 'CLICK_NOTIFICATION',
    notification: notification
  };
};

var clickExternalNotification = exports.clickExternalNotification = function clickExternalNotification(notification) {
  return {
    type: 'CLICK_NOTIFICATION',
    notification: notification,
    external: true
  };
};