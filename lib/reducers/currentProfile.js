export default ((state, action, config) => {
  const defaultState = {
    _id: config.profileId
  };
  if (state === undefined) {
    return defaultState;
  }
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        _id: action.profileId
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        _id: undefined
      });
    default:
      return state;
  }
});