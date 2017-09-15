'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store, _ref) {
  var processLocalEvent = _ref.processLocalEvent,
      isConnected = _ref.isConnected;
  return function (next) {
    return function (action) {
      if (action.type === 'PROCESS_LOCAL_ONLY') {
        return isConnected().then(function (isConnected) {
          //console.log('First, is ' + (isConnected ? 'online' : 'offline'));
          if (isConnected) {
            var localOnlyEvents = _ramda2.default.sort(function (a1, a2) {
              return a1.createdAt - a2.createdAt;
            }, _ramda2.default.values(store.getState().events).filter(_ramda2.default.prop('localOnly')));
            if (localOnlyEvents.length < 1) {
              return;
            }
            next({
              type: 'START_PROCESSING_LOCAL'
            });
            //console.log(localOnlyEvents);
            return _bluebird2.default.each(localOnlyEvents, function (event, index, length) {
              return processLocalEvent(event, function (progress) {
                next({
                  type: 'START_PROCESSING_LOCAL',
                  progress: progress
                });
              }).then(function (event) {
                setTimeout(function () {
                  next({
                    type: 'UPDATE_EVENT',
                    doc: Object.assign({}, event, {
                      draft: "true",
                      localOnly: undefined
                    })
                  });
                }, 0);
              });
            }).catch(console.log).finally(function () {
              next({
                type: 'END_PROCESSING_LOCAL'
              });
            });
          }
        });
      } else {
        return next(action);
      }
    };
  };
};