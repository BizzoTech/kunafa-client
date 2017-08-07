import R from 'ramda';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';

import reducers from './reducers';

export default config => {
  const AppReducer = combineReducers({
    ...(R.map(r => r(config), {config.reducers, ...reducers}))
  });

  const AppMiddleware = applyMiddleware(ReduxThunkMiddleware, ...(R.map(r => r(config), config.middlewares)));

  const AppStore = createStore(AppReducer, AppMiddleware);

  return AppStore;
}
