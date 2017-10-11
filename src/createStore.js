// @flow
import R from 'ramda';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';
import selectors from './selectors';
import actionCreators from './actionCreators';

import defaultConfig from './defaultConfig';

import type {AppConfig, StrictAppConfig, SyncPath, ActionCreator} from './types';

export default (appConfig: AppConfig, preloadedState) => {

  const syncPaths: Array<SyncPath> = R.append({
    name: "events",
    filter: (doc) => {
      return doc.type == "EVENT"; // & !doc.appliedOnClient;
    },
    actions: {
      remove: 'REMOVE_EVENT',
      update: 'UPDATE_EVENT',
      insert: 'ADD_EVENT',
      load: 'LOAD_EVENTS'
    }
  }, appConfig.syncPaths || []);

  const config = {
    ...defaultConfig,
    ...appConfig,
    syncPaths
  }

  const _allActionCreators: { [string]: ActionCreator} = {
    ...actionCreators,
    ...config.actionCreators
  }
  const allActionCreators = R.map(actionCreator => (...args) => actionCreator(...args, config), _allActionCreators);

  config.actionCreators = allActionCreators;

  const _allReducers = {
    ...reducers,
    ...config.reducers
  }
  const allReducers = R.map(reducer => (...args) => reducer(...args, config), _allReducers);

  const _allMiddlewares = config.ssr ? [] : [
    ...config.middlewares,
    ...middlewares
  ];
  const allMiddlewares = R.map(middleware => store => middleware(store, config), _allMiddlewares);

  const allSelectors = {
    ...selectors,
    ...config.selectors
  }

  const AppReducer = combineReducers(allReducers);
  const AppMiddleware = applyMiddleware(ReduxThunkMiddleware, ...allMiddlewares);
  const store = createStore(AppReducer, preloadedState, AppMiddleware);

  const AppStore = {...store, actions: allActionCreators, selectors: allSelectors};

  if(config.ssr){
    const initialActions = config.getInitialActions(AppStore.getState, allActionCreators);
    initialActions.forEach(AppStore.dispatch);
    return AppStore;
  }

  setTimeout(() => {
    const initialActions = config.getInitialActions(AppStore.getState, allActionCreators);
    initialActions.forEach(AppStore.dispatch);
  }, 500);

  setInterval(async() => {
    const hasLocalEvents = R.values(AppStore.getState().events).some(R.prop('localOnly'));
    const isProcessing = AppStore.getState().processing_local.isProcessing;
    const isConnected = await config.isConnected();
    if(hasLocalEvents && !isProcessing && isConnected) {
      AppStore.dispatch({
        type: 'PROCESS_LOCAL_ONLY'
      });
    }
  }, 1000);

  return AppStore;
}
