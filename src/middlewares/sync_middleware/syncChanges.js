const syncChanges = (db, syncPaths, store, dispatch, update_seq = "now") => {
  const changes = db.changes({
    since: update_seq,
    live: true,
    include_docs: true
  });
  changes.on("change", change => {
    syncPaths.forEach(path => {
      if (path.filter && !path.filter(change.doc)) {
        return;
      }
      //console.log(change)
      if (change.doc._deleted) {
        setTimeout(() => {
          dispatch({
            type: getDefaultAction(path.actions.remove),
            doc: change.doc
          });
        }, 0);
        return;
      }
      const pathState = store.getState()[path.name];
      if (pathState[change.doc._id]) {
        setTimeout(() => {
          dispatch({
            type: getDefaultAction(path.actions.update),
            doc: change.doc
          });
        }, 0);
        return;
      } else {
        setTimeout(() => {
          dispatch({
            type: getDefaultAction(path.actions.insert),
            doc: change.doc
          });
        }, 0);
        return;
      }
    });
  });
  return changes;
};

export default syncChanges;
