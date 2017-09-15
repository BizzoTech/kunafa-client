'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currentProfile = require('./currentProfile');

var _currentProfile2 = _interopRequireDefault(_currentProfile);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _documents = require('./documents');

var _documents2 = _interopRequireDefault(_documents);

var _processing_local = require('./processing_local');

var _processing_local2 = _interopRequireDefault(_processing_local);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _docLoaders = require('./docLoaders');

var _docLoaders2 = _interopRequireDefault(_docLoaders);

var _notifications = require('./notifications');

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  currentProfile: _currentProfile2.default,
  history: _history2.default,
  events: _events2.default,
  documents: _documents2.default,
  processing_local: _processing_local2.default,
  dialog: _dialog2.default,
  docLoaders: _docLoaders2.default,
  notifications: _notifications2.default
};