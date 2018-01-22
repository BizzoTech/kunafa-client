const R = require("ramda");
import PouchDB from "pouchdb";
import PouchdbFind from "pouchdb-find";
PouchDB.plugin(PouchdbFind);

import getDefaultAction from "./getDefaultAction";
import initialLoad from "./initialLoad";
import syncChanges from "./syncChanges";

import getActionsFromPaths from "./getActionsFromPaths";

export default (store, { getLocalDbUrl, syncPaths }) => next => {
  const profileId = store.getState().currentProfile._id;
  const localDbUrl = getLocalDbUrl(profileId);
  let db = new PouchDB(localDbUrl);
  let changes;
  setTimeout(async () => {
    const result = await initialLoad(db, syncPaths, next); //Initial Load docs to improve render performance by tracking new changes only

    changes = syncChanges(db, syncPaths, store, next, result.update_seq);
  }, 0);

  const mergedActions = getActionsFromPaths(syncPaths);

  return async action => {
    const bulk = [];
    const state = store.getState();
    mergedActions.insert.forEach(insertAction => {
      if (insertAction.type === action.type) {
        const docs = insertAction.getDocs(state, action);
        docs.forEach(doc => {
          if (doc.draft) {
            //db.put(R.omit(['draft'], doc));
            bulk.push(R.omit(["draft"], doc));
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
            bulk.push(R.omit(["draft"], doc));
          }
        });
      }
    });
    mergedActions.remove.forEach(removeAction => {
      if (removeAction.type === action.type) {
        const docs = removeAction.getDocs(state, action);
        docs.forEach(doc => {
          //db.remove(doc)
          bulk.push(
            R.merge(doc, {
              _deleted: true
            })
          );
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

      if (action.type === "LOGIN" || action.type === "LOGOUT") {
        changes.cancel();
        const profileId = store.getState().currentProfile._id;
        const localDbUrl = getLocalDbUrl(profileId);
        db = new PouchDB(localDbUrl);

        //Initial Load docs to improve render performance by tracking new changes only
        const result = await initialLoad(db, syncPaths, next);

        changes = syncChanges(db, syncPaths, store, next, result.update_seq);
      }
    }
  };
};
