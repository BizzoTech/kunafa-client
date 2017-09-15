'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _process_local_events_middleware = require('./process_local_events_middleware');

var _process_local_events_middleware2 = _interopRequireDefault(_process_local_events_middleware);

var _local_cache_middleware = require('./local_cache_middleware');

var _local_cache_middleware2 = _interopRequireDefault(_local_cache_middleware);

var _event_change_handler_middleware = require('./event_change_handler_middleware');

var _event_change_handler_middleware2 = _interopRequireDefault(_event_change_handler_middleware);

var _click_notification_middleware = require('./click_notification_middleware');

var _click_notification_middleware2 = _interopRequireDefault(_click_notification_middleware);

var _sync_middleware = require('./sync_middleware');

var _sync_middleware2 = _interopRequireDefault(_sync_middleware);

var _event_sourcing_middleware = require('./event_sourcing_middleware');

var _event_sourcing_middleware2 = _interopRequireDefault(_event_sourcing_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_process_local_events_middleware2.default, _local_cache_middleware2.default, _event_sourcing_middleware2.default, _sync_middleware2.default, _click_notification_middleware2.default, _event_change_handler_middleware2.default];