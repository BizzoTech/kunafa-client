'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexBy = _ramda2.default.reduceBy(function (acc, elem) {
  return elem;
}, null);


var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'LOAD_EVENTS':
      var newEvents = indexBy(function (e) {
        return e._id;
      }, action.events);
      return Object.assign({}, state, newEvents);
    case 'ADD_EVENT':
    case 'UPDATE_EVENT':
      return _ramda2.default.assoc(action.doc._id, action.doc, state);
    case 'REMOVE_EVENT':
      return _ramda2.default.dissoc(action.doc._id, state);
    case 'LOGIN':
    case 'LOGOUT':
      return defaultState;
    default:
      return state;
  }
};