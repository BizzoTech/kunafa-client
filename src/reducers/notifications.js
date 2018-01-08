const R = require('ramda');

const defaultState = {};

export default(state = defaultState, action) => {
  switch(action.type) {
  case 'LOAD_NOTIFICATIONS':
    const updatedNotifications = action.notifications.filter(n => {
      return !state[n._id] || state[n._id]._rev !== n._rev
    });
    return R.merge(state, R.indexBy(R.prop('_id'), updatedNotifications));
  case 'ADD_NOTIFICATION':
  case 'UPDATE_NOTIFICATION':
    return R.merge(state, {
        [action.doc._id]: action.doc
    });
  case 'REMOVE_NOTIFICATION':
    return R.omit([action.doc._id], state);
  default:
    return state;
  }
}
