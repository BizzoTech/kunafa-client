import eventChangeHandlerMiddleware from './event_change_handler_middleware';
import clickNotificationMiddleware from './click_notification_middleware';

export default [
  eventChangeHandlerMiddleware,
  clickNotificationMiddleware
]
