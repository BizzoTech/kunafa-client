import R from 'ramda';
import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-find'));

const getDefaultAction = act => {
  let action = act;
  if (Array.isArray(action)) {
    action = action[0];
  }
  if (typeof action === 'string') {
    return action;
  } else {
    return action.type;
  }
};

const initialLoad = async (db, syncPaths, dispatch) => {
  const result = await db.allDocs({
    include_docs: true
  });
  syncPaths.forEach(path => {
    if (path.actions.load) {
      dispatch({
        type: path.actions.load,
        [path.name]: result.rows.map(r => r.doc).filter(path.filter)
      });
    }
  });
};

const syncChanges = (db, syncPaths, store, dispatch) => {
  const changes = db.changes({
    since: 'now',
    live: true,
    include_docs: true
  });
  changes.on('change', change => {
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

export default ((store, { getLocalDbUrl, syncPaths }) => next => {
  const profileId = store.getState().currentProfile._id;
  const localDbUrl = getLocalDbUrl(profileId);
  let db = new PouchDB(localDbUrl);
  //Initial Load docs to improve render performance by tracking new changes only
  initialLoad(db, syncPaths, next);

  let changes = syncChanges(db, syncPaths, store, next);

  const getDocs = (state, action) => [action.doc];
  const mergedActions = {
    insert: [],
    update: [],
    remove: []
  };
  const mergeAction = actName => action => {
    if (typeof action === 'string') {
      mergedActions[actName].push({
        type: action,
        getDocs
      });
    }
    if (typeof action === 'object') {
      mergedActions[actName].push({
        type: action.type,
        getDocs: action.getDocs || getDocs
      });
    }
  };
  syncPaths.forEach(path => {
    if (Array.isArray(path.actions.insert)) {
      path.actions.insert.forEach(mergeAction("insert"));
    } else {
      mergeAction("insert")(path.actions.insert);
    }

    if (Array.isArray(path.actions.update)) {
      path.actions.update.forEach(mergeAction("update"));
    } else {
      mergeAction("update")(path.actions.update);
    }

    if (Array.isArray(path.actions.remove)) {
      path.actions.remove.forEach(mergeAction("remove"));
    } else {
      mergeAction("remove")(path.actions.remove);
    }
  });

  return action => {
    const bulk = [];
    const state = store.getState();
    mergedActions.insert.forEach(insertAction => {
      if (insertAction.type === action.type) {
        const docs = insertAction.getDocs(state, action);
        docs.forEach(doc => {
          if (doc.draft) {
            //db.put(R.omit(['draft'], doc));
            bulk.push(R.omit(['draft'], doc));
          }
        });
      }
    });
    mergedActions.update.forEach(updateAction => {
      if (updateAction.type === action.type) {
        const docs = updateAction.getDocs(state, action);
        docs.forEach(doc => {
          if (doc.draft) {
            //db.put(R.omit(['draft'], doc));
            bulk.push(R.omit(['draft'], doc));
          }
        });
      }
    });
    mergedActions.remove.forEach(removeAction => {
      if (removeAction.type === action.type) {
        const docs = removeAction.getDocs(state, action);
        docs.forEach(doc => {
          //db.remove(doc)
          bulk.push(R.merge(doc, {
            _deleted: true
          }));
        });
        next(action);
      }
    });

    if (bulk.length) {
      setTimeout(() => {
        db.bulkDocs(bulk);
      }, 0);
    } else {
      next(action);

      if (action.type === 'LOGIN' || action.type === 'LOGOUT') {
        changes.cancel();
        const profileId = store.getState().currentProfile._id;
        const localDbUrl = getLocalDbUrl(profileId);
        db = new PouchDB(localDbUrl);
        //Initial Load docs to improve render performance by tracking new changes only
        initialLoad(db, syncPaths, next);

        changes = syncChanges(db, syncPaths, store, next);
      }
    }
  };
});