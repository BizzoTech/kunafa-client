import R from 'ramda';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';
import actions from './actions';

export default config => {
  const allActions = {
    ...actions(config),
    ...config.actions
  }

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
    actions: allActions
  }), allMiddlewares));

  const AppStore = createStore(AppReducer, AppMiddleware);

  AppStore.actions = allActions;

  return AppStore;
}
