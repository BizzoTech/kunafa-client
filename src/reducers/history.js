// @flow
import R from 'ramda';

const startWithHome = {
  path: [""]
};
const startWithLogin = {
  path: ['login']
};

export default(state, action, config) => {
  const defaultState = config && config.profileId
    ? startWithHome
    : startWithLogin;
  if (state === undefined) {
    return defaultState;
  }
  switch (action.type) {
    case 'RESET_HISTORY':
      return startWithHome;
    case 'GO_TO':
      return {
        ...action.route,
        previous: startWithHome
      };
    case 'NAVIGATE_TO':
      return {
        ...action.route,
        previous: state
      };
    case 'TRANSITE_TO':
      return state.previous
        ? {
          ...action.route,
          previous: state.previous
        }
        : {
          ...action.route,
          previous : startWithHome
        };
    case 'GO_BACK':
      return state.previous
        ? {
          ...state.previous,
          backFrom: R.dissoc('previous', state)
        }
        : state;
    case 'SKIP_LOGIN':
    case 'LOGIN':
      if (state.path.length && state.path[0] === "login") {
        return state.previous
          ? state.previous
          : startWithHome;
      } else {
        return state;
      }
    case 'LOGOUT':
      return startWithLogin;
    default:
      return state
  }
}
