export default {
  actionCreators: {},
  reducers: {},
  middlewares: [],
  syncPaths: [],
  actionHandlers: {},
  getRelevantDocsIds: action => {
    return [];
  },
  needLocalProcessing: action => {
    return false;
  },
  processLocalEvent: event => Promise.resolve(event),
  localOnlyActions: [],
  getActionPreProcessors: action => {
    return [];
  },
  getActionPostProcessors: action => {
    return [];
  },
  cacheDocTypes: [],
  cacheLimit: 300,
  keepInCache: (doc, state) => {
    return false;
  },
  getDeepLinkRoute: () => {},
  getNotificationRoute: () => {},
  getInitialActions: () => {},
  renderDialogContent: () => {},
  statusBarColor: getState => '#000000',
  progressBarColor: getState => '#000000'
}
