'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsByRelevantDocSelector = undefined;

var _reselect = require('reselect');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventsSelector = function eventsSelector(state) {
  return state.events;
};

var interestingEventsSelector = (0, _reselect.createSelector)(eventsSelector, function (events) {
  return _ramda2.default.values(events).filter(function (event) {
    return event.relevantDocsIds !== undefined && event.relevantDocsIds.length > 0;
  });
});

var sortedEventsSelector = (0, _reselect.createSelector)(interestingEventsSelector, function (events) {
  return _ramda2.default.sort(function (e1, e2) {
    return e1.createdAt - e2.createdAt;
  }, events);
});

var eventsByRelevantDocSelector = exports.eventsByRelevantDocSelector = (0, _reselect.createSelector)(sortedEventsSelector, function (events) {
  var eventsWithDocIds = _ramda2.default.flatten(events.map(function (event) {
    return event.relevantDocsIds.map(function (docId) {
      return Object.assign({}, event, {
        docId: docId
      });
    });
  }));
  var eventsGroupedByDocId = _ramda2.default.groupBy(function (event) {
    return event.docId;
  }, eventsWithDocIds);
  return _ramda2.default.map(function (events) {
    return events.filter(function (event) {
      var appliedOnClientRev = _ramda2.default.path(['action', 'appliedOnClient', event.docId], event);
      return appliedOnClientRev === undefined;
    });
  }, eventsGroupedByDocId);
});