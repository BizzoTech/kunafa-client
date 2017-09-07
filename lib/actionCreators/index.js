'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = require('./history');

var historyActions = _interopRequireWildcard(_history);

var _dialog = require('./dialog');

var dialogActions = _interopRequireWildcard(_dialog);

var _notifications = require('./notifications');

var notificationActions = _interopRequireWildcard(_notifications);

var _documents = require('./documents');

var documentsActions = _interopRequireWildcard(_documents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Object.assign({}, documentsActions, historyActions, dialogActions, notificationActions);