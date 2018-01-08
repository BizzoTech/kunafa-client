const R = require('ramda');

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_SHARED_DOCS':
      const updatedDocs = action.docs.filter(n => {
        return !state[n._id] || state[n._id]._rev !== n._rev
      });
      return R.merge(state, R.indexBy(R.prop('_id'), updatedDocs));
    case 'SET_SHARED_DOC':
      return R.merge(state, {
        [action.doc._id]: action.doc
      });
    case 'REMOVE_SHARED_DOC':
      return R.omit([action.doc._id], state);
    default:
      return state;
  }
}
