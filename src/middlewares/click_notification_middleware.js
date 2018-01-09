export default (store, { getNotificationRoute }) => next => action => {
  if (action.type === "CLICK_NOTIFICATION") {
    if (action.notification) {
      const notification = action.notification;
      const route = getNotificationRoute(notification);
      if (route) {
        next({
          type: action.external ? "GO_TO" : "NAVIGATE_TO",
          route
        });
      }
    }
  }
  return next(action);
};
