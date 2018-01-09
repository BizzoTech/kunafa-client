const R = require("ramda");

const indexBy = R.reduceBy((acc, elem) => elem, null);

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_EVENTS":
      const newEvents = indexBy(e => e._id, action.events);
      return {
        ...state,
        ...newEvents
      };
    case "ADD_EVENT":
    case "UPDATE_EVENT":
      return R.assoc(action.doc._id, action.doc, state);
    case "REMOVE_EVENT":
      return R.dissoc(action.doc._id, state);
    case "LOGIN":
    case "LOGOUT":
      return defaultState;
    default:
      return state;
  }
};
