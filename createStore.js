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

export default config => {
  const _allActionCreators = {
    ...actionCreators(config),
    ...config.actionCreators
  }

  const allActionCreators = R.map(actionCreator => (...args) => actionCreator(...args, _allActionCreators), _allActionCreators);

  const allReducers = {
    ...reducers,
    ...config.reducers
  }
  const AppReducer = combineReducers({
    ...R.map(r => r(config), allReducers)
  });

  const allMiddlewares = [
    ...config.middlewares,
    ...middlewares
  ]

  const AppMiddleware = applyMiddleware(ReduxThunkMiddleware, ...R.map(r => r({ ...config,
    actions: allActionCreators
  }), allMiddlewares));

  const AppStore = createStore(AppReducer, AppMiddleware);

  AppStore.actions = allActionCreators;

  setTimeout(() => {
    const initialActions = config.getInitialActions(AppStore.getState, allActionCreators);
    initialActions.forEach(AppStore.dispatch);
  }, 500);

  return AppStore;
}
