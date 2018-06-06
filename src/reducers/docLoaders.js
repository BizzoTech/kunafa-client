const R = require("ramda");

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE_DOCS_LOADER":
      return {
        ...state,
        [action.loaderName]: {
          query: action.query,
          loaded: 0,
          loadedDocs: [],
          endReached: false
        }
      };
    case "REMOVE_DOCS_LOADER":
      return R.dissoc(action.loaderName, state);
    case "LOAD_DOCS":
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }
      const loader = state[action.loaderName];

      const loadedDocs = R.uniq([
        ...loader.loadedDocs,
        ...action.docs.map(d => d._id)
      ]);

      return {
        ...state,
        [action.loaderName]: {
          ...loader,
          loaded: loadedDocs.length,
          loadedDocs,
          endReached: action.docs.length < (loader.query.limit || 25)
        }
      };
    case "REFRESH_LOADER":
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }
      return {
        ...state,
        [action.loaderName]: {
          ...state[action.loaderName],
          loaded: 0,
          loadedDocs: [],
          endReached: false
        }
      };
    default:
      return state;
  }
};
