function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import R from 'ramda';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';
import actionCreators from './actionCreators';

import defaultConfig from './defaultConfig';

export default (appConfig => {

  const syncPaths = R.append({
    name: "events",
    filter: doc => {
      return doc.type == "EVENT"; // & !doc.appliedOnClient;
    },
    actions: {
      remove: 'REMOVE_EVENT',
      update: 'UPDATE_EVENT',
      insert: 'ADD_EVENT',
      load: 'LOAD_EVENTS'
    }
  }, appConfig.syncPaths || []);

  const config = Object.assign({}, defaultConfig, appConfig, {
    syncPaths
  });

  const _allActionCreators = Object.assign({}, actionCreators, config.actionCreators);
  const allActionCreators = R.map(actionCreator => (...args) => actionCreator(...args, config), _allActionCreators);

  config.actionCreators = allActionCreators;

  const _allReducers = Object.assign({}, reducers, config.reducers);
  const allReducers = R.map(reducer => (...args) => reducer(...args, config), _allReducers);

  const _allMiddlewares = [...config.middlewares, ...middlewares];
  const allMiddlewares = R.map(middleware => store => middleware(store, config), _allMiddlewares);

  const AppReducer = combineReducers(allReducers);
  const AppMiddleware = applyMiddleware(ReduxThunkMiddleware, ...allMiddlewares);
  const store = createStore(AppReducer, AppMiddleware);

  const AppStore = Object.assign({}, store, { actions: allActionCreators });

  setTimeout(() => {
    const initialActions = config.getInitialActions(AppStore.getState, allActionCreators);
    initialActions.forEach(AppStore.dispatch);
  }, 500);

  setInterval(_asyncToGenerator(function* () {
    const hasLocalEvents = R.values(AppStore.getState().events).some(R.prop('localOnly'));
    const isProcessing = AppStore.getState().processing_local.isProcessing;
    const isConnected = yield config.isConnected();
    if (hasLocalEvents && !isProcessing && isConnected) {
      AppStore.dispatch({
        type: 'PROCESS_LOCAL_ONLY'
      });
    }
  }), 1000);

  return AppStore;
});