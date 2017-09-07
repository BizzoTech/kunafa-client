'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _pouchdb = require('pouchdb');

var _pouchdb2 = _interopRequireDefault(_pouchdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_pouchdb2.default.plugin(require('pouchdb-find'));

var getDefaultAction = function getDefaultAction(act) {
  var action = act;
  if (Array.isArray(action)) {
    action = action[0];
  }
  if (typeof action === 'string') {
    return action;
  } else {
    return action.type;
  }
};

var initialLoad = async function initialLoad(db, syncPaths, dispatch) {
  var result = await db.allDocs({
    include_docs: true
  });
  syncPaths.forEach(function (path) {
    if (path.actions.load) {
      dispatch(_defineProperty({
        type: path.actions.load
      }, path.name, result.rows.map(function (r) {
        return r.doc;
      }).filter(path.filter)));
    }
  });
};

var syncChanges = function syncChanges(db, syncPaths, store, dispatch) {
  var changes = db.changes({
    since: 'now',
    live: true,
    include_docs: true
  });
  changes.on('change', function (change) {
    syncPaths.forEach(function (path) {
      if (path.filter && !path.filter(change.doc)) {
        return;
      }
      //console.log(change)
      if (change.doc._deleted) {
        setTimeout(function () {
          dispatch({
            type: getDefaultAction(path.actions.remove),
            doc: change.doc
          });
        }, 0);
        return;
      }
      var pathState = store.getState()[path.name];
      if (pathState[change.doc._id]) {
        setTimeout(function () {
          dispatch({
            type: getDefaultAction(path.actions.update),
            doc: change.doc
          });
        }, 0);
        return;
      } else {
        setTimeout(function () {
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

exports.default = function (store, _ref) {
  var getLocalDbUrl = _ref.getLocalDbUrl,
      syncPaths = _ref.syncPaths;
  return function (next) {
    var profileId = store.getState().currentProfile._id;
    var localDbUrl = getLocalDbUrl(profileId);
    var db = new _pouchdb2.default(localDbUrl);
    //Initial Load docs to improve render performance by tracking new changes only
    initialLoad(db, syncPaths, next);

    var changes = syncChanges(db, syncPaths, store, next);

    var getDocs = function getDocs(state, action) {
      return [action.doc];
    };
    var mergedActions = {
      insert: [],
      update: [],
      remove: []
    };
    var mergeAction = function mergeAction(actName) {
      return function (action) {
        if (typeof action === 'string') {
          mergedActions[actName].push({
            type: action,
            getDocs: getDocs
          });
        }
        if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
          mergedActions[actName].push({
            type: action.type,
            getDocs: action.getDocs || getDocs
          });
        }
      };
    };
    syncPaths.forEach(function (path) {
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

    return function (action) {
      var bulk = [];
      var state = store.getState();
      mergedActions.insert.forEach(function (insertAction) {
        if (insertAction.type === action.type) {
          var docs = insertAction.getDocs(state, action);
          docs.forEach(function (doc) {
            if (doc.draft) {
              //db.put(R.omit(['draft'], doc));
              bulk.push(_ramda2.default.omit(['draft'], doc));
            }
          });
        }
      });
      mergedActions.update.forEach(function (updateAction) {
        if (updateAction.type === action.type) {
          var docs = updateAction.getDocs(state, action);
          docs.forEach(function (doc) {
            if (doc.draft) {
              //db.put(R.omit(['draft'], doc));
              bulk.push(_ramda2.default.omit(['draft'], doc));
            }
          });
        }
      });
      mergedActions.remove.forEach(function (removeAction) {
        if (removeAction.type === action.type) {
          var docs = removeAction.getDocs(state, action);
          docs.forEach(function (doc) {
            //db.remove(doc)
            bulk.push(_ramda2.default.merge(doc, {
              _deleted: true
            }));
          });
          next(action);
        }
      });

      if (bulk.length) {
        setTimeout(function () {
          db.bulkDocs(bulk);
        }, 0);
      } else {
        next(action);

        if (action.type === 'LOGIN' || action.type === 'LOGOUT') {
          changes.cancel();
          var _profileId = store.getState().currentProfile._id;
          var _localDbUrl = getLocalDbUrl(_profileId);
          db = new _pouchdb2.default(_localDbUrl);
          //Initial Load docs to improve render performance by tracking new changes only
          initialLoad(db, syncPaths, next);

          changes = syncChanges(db, syncPaths, store, next);
        }
      }
    };
  };
};