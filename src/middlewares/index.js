import processLocalEventsMiddleware from "./process_local_events_middleware";
import localCacheMiddleware from "./local_cache_middleware";
import eventChangeHandlerMiddleware from "./event_change_handler_middleware";
import clickNotificationMiddleware from "./click_notification_middleware";
import syncMiddleware from "./sync_middleware";
import eventSourcingMiddleware from "./event_sourcing_middleware";
import periodic_load_docs_middleware from "./periodic_load_docs_middleware";

export default [
  processLocalEventsMiddleware,
  localCacheMiddleware,
  eventSourcingMiddleware,
  syncMiddleware,
  clickNotificationMiddleware,
  eventChangeHandlerMiddleware,
  periodic_load_docs_middleware
];
