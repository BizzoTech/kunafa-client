'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _selectors = require('../selectors');

var _selectors2 = _interopRequireDefault(_selectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eventsByRelevantDocSelector = _selectors2.default.eventsByRelevantDocSelector;

exports.default = function (store, config) {
  var localOnlyActions = config.localOnlyActions,
      needLocalProcessing = config.needLocalProcessing,
      getActionPreProcessors = config.getActionPreProcessors,
      getActionPostProcessors = config.getActionPostProcessors,
      getRelevantDocsIds = config.getRelevantDocsIds,
      deviceInfo = config.deviceInfo;

  var createEvent = function createEvent(action, state) {
    var eventsList = _ramda2.default.values(state.events);
    var localOnlyEvents = eventsList.filter(_ramda2.default.prop('localOnly'));
    var localProcessingDocumentsIds = _ramda2.default.flatten(localOnlyEvents.map(function (event) {
      return event.relevantDocsIds;
    }));
    var relevantDocsIds = getRelevantDocsIds(action);
    var shouldWaitForOtherAction = relevantDocsIds.some(function (docId) {
      return localProcessingDocumentsIds.includes(docId);
    });

    var localOnly = needLocalProcessing.includes(action.type) || shouldWaitForOtherAction;
    var _id = state.currentProfile._id ? state.currentProfile._id + '-' + Date.now() + '-' + action.type : 'anonymous-' + deviceInfo.device_unique_id + '-' + Date.now() + '-' + action.type;
    return {
      _id: _id,
      type: "EVENT",
      draft: "true",
      localOnly: localOnly ? "true" : undefined,
      action: action,
      relevantDocsIds: getRelevantDocsIds(action),
      preProcessors: getActionPreProcessors(action),
      postProcessors: getActionPostProcessors(action),
      status: "draft",
      info: deviceInfo,
      createdAt: Date.now(),
      createdBy: state.currentProfile._id || "anonymous"
    };
  };

  return function (next) {
    return function (action) {

      if (!localOnlyActions.includes(action.type) && action.type !== 'ADD_PROFILE') {
        setTimeout(function () {
          next({
            type: 'ADD_EVENT',
            doc: createEvent(action, store.getState())
          });
        }, 0);
      }

      var result = next(action);

      if (action.type === 'LOAD_DOCS' || action.type === 'LOAD_DOCS_FROM_CACHE') {
        setTimeout(function () {
          var eventsByRelevantDoc = eventsByRelevantDocSelector(store.getState());
          action.docs.forEach(function (doc) {
            var docEvents = eventsByRelevantDoc[doc._id] || [];
            docEvents.forEach(function (event) {
              var isAppliedOn = event.appliedOn && event.appliedOn[doc._id];
              if (isAppliedOn && event.appliedOn[doc._id] <= doc._rev) {
                event.appliedOnClient = event.appliedOnClient || {};
                if (!event.appliedOnClient[doc._id]) {
                  next({
                    type: 'UPDATE_EVENT',
                    doc: Object.assign({}, event, {
                      draft: true,
                      appliedOnClient: Object.assign({}, event.appliedOnClient, _defineProperty({}, doc._id, doc._rev))
                    })
                  });
                }
              } else {
                next(event.action);
              }
            });
          });
        }, 0);
      }

      return result;
    };
  };
};