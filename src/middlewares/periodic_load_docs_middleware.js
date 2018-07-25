export default (store, { actionCreators }) => next => {
  setInterval(() => {
    const docsToLoad = store.getState().docsToLoad;
    const docsIds = Object.keys(docsToLoad);
    if (docsIds && docsIds.length > 1) {
      next(actionCreators.removeDocsToLoad(docsIds));
      store.dispatch(actionCreators.fetchDocsByIds(docsIds));
    }
  }, 1000);

  return action => {
    return next(action);
  };
};
