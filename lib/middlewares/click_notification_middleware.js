'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store, _ref) {
  var getNotificationRoute = _ref.getNotificationRoute;
  return function (next) {
    return function (action) {
      if (action.type === 'CLICK_NOTIFICATION') {
        if (action.notification) {
          var notification = action.notification;
          var route = getNotificationRoute(notification);
          if (route) {
            next({
              type: action.external ? 'GO_TO' : 'NAVIGATE_TO',
              route: route
            });
          }
        }
      }
      return next(action);
    };
  };
};