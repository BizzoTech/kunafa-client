import R from 'ramda';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';
import actionCreators from './actionCreators';

export default appConfig => {
  const _allActionCreators = {
    ...actionCreators(appConfig),
    ...appConfig.actionCreators
  }

  const allActionCreators = R.map(actionCreator => (...args) => actionCreator(...args, _allActionCreators), _allActionCreators);

  const config = {
    ...appConfig,
    actionCreators: allActionCreators
  }

  const allReducers = {
    ...reducers,
    ...config.reducers
  }
  const AppReducer = combineReducers({
    ...R.map(r => r(config), allReducers)
  });


  const _allMiddlewares = [
    ...config.middlewares,
    ...middlewares
  ];
  const allMiddlewares = R.map(middleware => store => middleware(store, config), _allMiddlewares);

  const AppMiddleware = applyMiddleware(ReduxThunkMiddleware, ...allMiddlewares);

  const AppStore = createStore(AppReducer, AppMiddleware);

  AppStore.actions = allActionCreators;

  setTimeout(() => {
    const initialActions = config.getInitialActions(AppStore.getState, allActionCreators);
    initialActions.forEach(AppStore.dispatch);
  }, 500);

  return AppStore;
}
