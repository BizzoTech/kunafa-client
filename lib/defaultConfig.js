'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var defaultConfig = {
  actionCreators: {},
  reducers: {},
  middlewares: [],
  syncPaths: [],
  actionHandlers: {},
  getRelevantDocsIds: function getRelevantDocsIds(action) {
    return [];
  },
  needLocalProcessing: [],
  processLocalEvent: function processLocalEvent(event) {
    return Promise.resolve(event);
  },
  localOnlyActions: [],
  getActionPreProcessors: function getActionPreProcessors(action) {
    return [];
  },
  getActionPostProcessors: function getActionPostProcessors(action) {
    return [];
  },
  cacheDocTypes: [],
  cacheLimit: 300,
  keepInCache: function keepInCache(doc, state) {
    return false;
  },
  getDeepLinkRoute: function getDeepLinkRoute(url) {
    return {
      name: 'HOME'
    };
  },
  getNotificationRoute: function getNotificationRoute(notification) {
    return {
      name: 'HOME'
    };
  },
  getInitialActions: function getInitialActions() {},
  renderDialogContent: function renderDialogContent() {},
  statusBarColor: function statusBarColor(getState) {
    return '#000000';
  },
  progressBarColor: function progressBarColor(getState) {
    return '#000000';
  },
  isConnected: function isConnected() {
    return false;
  }
};
exports.default = defaultConfig;