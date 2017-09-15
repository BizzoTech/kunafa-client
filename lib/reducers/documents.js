'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var config = arguments[2];

  switch (action.type) {
    case 'LOAD_DOCS':
    case 'LOAD_DOCS_FROM_CACHE':
      var modifiedDocs = action.docs.filter(function (doc) {
        return !state[doc._id] || state[doc._id]._rev !== doc._rev;
      });
      return modifiedDocs.reduce(function (state, doc) {
        return _ramda2.default.merge(state, _defineProperty({}, doc._id, doc)); //{...state, [doc._id]: doc};
      }, state);
    default:
      if (!config || !config.actionHandlers || !config.getRelevantDocsIds) {
        return state;
      }
      var actionHandlers = config.actionHandlers,
          getRelevantDocsIds = config.getRelevantDocsIds;

      var actionHandlersKeys = _ramda2.default.flatten(Object.values(actionHandlers).map(function (hs) {
        return Object.keys(hs);
      }));
      if (actionHandlersKeys.includes(action.type)) {
        var relevantDocsIds = getRelevantDocsIds(action);
        var relevantDocsToAdd = relevantDocsIds.filter(function (docId) {
          return action.doc._id === docId && !action.doc._rev;
        }).map(function (docId) {
          return {
            type: action.doc.type
          };
        });
        var relevantDocsToUpdate = relevantDocsIds.filter(function (docId) {
          return action.doc._id !== docId || action.doc._rev;
        }).map(function (docId) {
          return state[docId];
        }).filter(function (d) {
          return d;
        });
        var relevantDocs = [].concat(_toConsumableArray(relevantDocsToAdd), _toConsumableArray(relevantDocsToUpdate));
        var updatedDocs = relevantDocs.map(function (doc) {
          return actionHandlers[doc.type][action.type](doc, action);
        }).filter(function (doc) {
          return !relevantDocs.includes(doc);
        });
        if (updatedDocs.length > 0) {
          return updatedDocs.reduce(function (state, doc) {
            return _ramda2.default.merge(state, _defineProperty({}, doc._id, doc)); //{...state, [doc._id]: doc};
          }, state);
        } else {
          return state;
        }
      } else {
        return state;
      }
  }
};