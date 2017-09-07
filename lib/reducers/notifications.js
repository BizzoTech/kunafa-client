'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'LOAD_NOTIFICATIONS':
      var updatedNotifications = action.notifications.filter(function (n) {
        return !state[n._id] || state[n._id]._rev !== n._rev;
      });
      return _ramda2.default.merge(state, _ramda2.default.indexBy(_ramda2.default.prop('_id'), updatedNotifications));
    case 'ADD_NOTIFICATION':
    case 'UPDATE_NOTIFICATION':
      return _ramda2.default.merge(state, _defineProperty({}, action.doc._id, action.doc));
    case 'REMOVE_NOTIFICATION':
      return _ramda2.default.omit([action.doc._id], state);
    default:
      return state;
  }
};