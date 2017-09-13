export const clickNotification = notification => {
  return {
    type: 'CLICK_NOTIFICATION',
    notification
  };
};

export const clickExternalNotification = notification => {
  return {
    type: 'CLICK_NOTIFICATION',
    notification,
    external: true
  };
};