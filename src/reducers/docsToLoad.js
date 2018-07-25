const R = require("ramda");

const defaultState = {};

export default (state = defaultState, action, config) => {
  switch (action.type) {
    case "ADD_DOCS_TO_LOAD":
      return R.reduce(
        (accum, docId) => {
          return { ...accum, [docId]: 1 };
        },
        state,
        action.docsIds
      );
    case "REMOVE_DOCS_TO_LOAD":
      return R.omit(action.docsIds, state);
    case "LOAD_DOCS":
      if (action.docs.length < 1) {
        return state;
      }
      const loadedDocsIds = action.docs.map(d => d._id);
      return R.omit(loadedDocsIds, state);
    default:
      return state;
  }
};
