import localCacheMiddleware from './local_cache_middleware';
import eventChangeHandlerMiddleware from './event_change_handler_middleware';
import clickNotificationMiddleware from './click_notification_middleware';
import syncMiddleware from './sync_middleware';
import eventSourcingMiddleware from './event_sourcing_middleware';

export default [
  localCacheMiddleware,
  eventSourcingMiddleware,
  syncMiddleware,
  clickNotificationMiddleware,
  eventChangeHandlerMiddleware
]
