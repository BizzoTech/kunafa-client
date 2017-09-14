

const defaultConfig = {
  actionCreators: {},
  reducers: {},
  middlewares: [],
  selectors: {},
  syncPaths: [],
  actionHandlers: {},
  getRelevantDocsIds: action => {
    return [];
  },
  needLocalProcessing: [],
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
  getDeepLinkRoute: url => {
    return {
      name: 'HOME'
    };
  },
  getNotificationRoute: notification => {
    return {
      name: 'HOME'
    };
  },
  getInitialActions: () => {},
  renderDialogContent: () => {},
  statusBarColor: getState => '#000000',
  progressBarColor: getState => '#000000',
  isConnected: () => false
};


export default defaultConfig;