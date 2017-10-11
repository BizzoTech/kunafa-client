// @flow
import type {AppConfig, StrictAppConfig, SyncPath, Route} from './types';

const defaultConfig: StrictAppConfig = {
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
  getDeepLinkRoute: (url): Route => {
    return {
      name: 'HOME'
    }
  },
  getNotificationRoute: (notification): Route => {
    return {
      name: 'HOME'
    }
  },
  getInitialActions: () => {},
  renderDialogContent: () => {},
  statusBarColor: getState => '#000000',
  progressBarColor: getState => '#000000',
  isConnected: () => false,
  deviceInfo: {
    device_unique_id: 'default'
  },
  cacheStore: {
    keys: () => [],
    get: () => undefined,
    save: () => undefined,
    delete: () => undefined,
    getAll: async() => {
      return [];
    }
  }
}


export default defaultConfig;
