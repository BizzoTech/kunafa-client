import R from 'ramda';

const startWithHome = [{
  name: 'HOME'
}];
const startWithLogin = [{
  name: 'LOGIN'
}];

export default ((state, action, config) => {
  const defaultState = config && config.profileId ? startWithHome : startWithLogin;
  if (state === undefined) {
    return defaultState;
  }
  switch (action.type) {
    case 'RESET_HISTORY':
      return defaultState;
    case 'GO_TO':
      return [action.route, ...startWithHome];
    case 'NAVIGATE_TO':
      return [action.route, ...state];
    case 'TRANSITE_TO':
      return state.length > 1 ? R.update(0, action.route, state) : [action.route, ...state];
    case 'GO_BACK':
      if (state.length > 1) {
        const currentRoute = state[0];
        const newRoute = state[1];
        return R.update(0, Object.assign({}, newRoute, {
          backFrom: currentRoute
        }), R.tail(state));
      }
      return state;
    case 'START_LOADING':
      return [{
        name: 'LOADING'
      }, ...state];
    case 'SKIP_LOGIN':
    case 'LOGIN':
      return startWithHome;
    case 'LOGOUT':
      return startWithLogin;
    default:
      return state;
  }
});