export default(state, action, config) => {
  const defaultState = {
    _id: config.profileId
  }
  if(state === undefined){
    return defaultState;
  }
  switch(action.type) {
  case 'LOGIN':
    return {
      ...state,
      _id: action.profileId
    }
  case 'LOGOUT':
    return {
      ...state,
      _id: undefined
    }
  default:
    return state;
  }
}
