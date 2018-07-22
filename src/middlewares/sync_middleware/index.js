const R = require("ramda");
import PouchDB from "pouchdb";
import PouchdbFind from "pouchdb-find";
PouchDB.plugin(PouchdbFind);

import initialLoad from "./initialLoad";
import syncChanges from "./syncChanges";

import getActionsFromPaths from "./getActionsFromPaths";

export default (store, { getLocalDbUrl, syncPaths, startDbSync }) => next => {
  const profileId = store.getState().currentProfile._id;
  const localDbUrl = getLocalDbUrl(profileId);
  let db = new PouchDB(localDbUrl);
  let changes;
  let initialRollupDone = false;
  setTimeout(async () => {
    console.log("Initial roll up started");

    const tempDb = new PouchDB(localDbUrl + "_temp");
    await db.replicate.to(tempDb, {
      selector: {
        _deleted: {
          $exists: false
        },
        status: "draft",
        relevantDocsIds: {
          $ne: []
        }
      }
    });
    await db.destroy();
    db = new PouchDB(localDbUrl);
    await tempDb.replicate.to(db);

    await tempDb.destroy();

    const result = await initialLoad(db, syncPaths, next); //Initial Load docs to improve render performance by tracking new changes only

    changes = syncChanges(db, syncPaths, store, next, result.update_seq);

    initialRollupDone = true;
    console.log("Initial roll up ended");

    startDbSync();
  }, 0);

  const waitForRollup = () => {
    return new Promise(function(resolve, reject) {
      if (initialRollupDone) {
        return resolve(true);
      }
      const _interval = setInterval(() => {
        if (initialRollupDone) {
          clearInterval(_interval);
          return resolve(true);
        }
      }, 50);
    });
  };

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
      setTimeout(async () => {
        await waitForRollup();
        db && db.bulkDocs(bulk);
      }, 0);
    } else {
      next(action);

      await waitForRollup();

      if (action.type === "LOGIN" || action.type === "LOGOUT") {
        try {
          changes && changes.cancel();
          db && (await db.destroy());
        } catch (err) {
          console.log(err);
        }

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
