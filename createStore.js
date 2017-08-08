import R from 'ramda';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';

export default config => {
  const allReducers = {
    ...reducers,
    ...config.reducers
  }
  const AppReducer = combineReducers({
    ...R.map(r => r(config), allReducers)
  });

  const allMiddlewares = {
    ...config.middlewares,
    ...middlewares
  }

  const AppMiddleware = applyMiddleware(ReduxThunkMiddleware, ...R.map(r => r(config), allMiddlewares));

  const AppStore = createStore(AppReducer, AppMiddleware);

  return AppStore;
}
