'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshLoader = exports.loadMoreDocs = exports.createDocLoader = exports.fetchDoc = exports.loadDocs = undefined;

var _pouchdb = require('pouchdb');

var _pouchdb2 = _interopRequireDefault(_pouchdb);

var _pouchdbFind = require('pouchdb-find');

var _pouchdbFind2 = _interopRequireDefault(_pouchdbFind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pouchdb2.default.plugin(_pouchdbFind2.default);

var publicDb = null;

var loadDocs = exports.loadDocs = function loadDocs(query, loaderName, config) {
  return function (dispatch) {
    if (publicDb === null) {
      var host = config.HOST;
      publicDb = new _pouchdb2.default('http://' + host + '/public', {
        ajax: {
          timeout: 60000
        }
      });
    }
    return publicDb.find(query).then(function (result) {
      return result.docs.map(function (doc) {
        return Object.assign({}, doc, {
          fetchedAt: Date.now()
        });
      });
    }).then(function (docs) {
      if (docs && docs.length > 0) {
        dispatch({
          type: 'LOAD_DOCS',
          docs: docs,
          loaderName: loaderName
        });
      }
    }).catch(function (e) {
      console.log(e);
    });
  };
};

var TTL = 5 * 60 * 1000; //5 minuts
//const TTL = 0; // Live Update

var fetchDoc = exports.fetchDoc = function fetchDoc(doc, _ref) {
  var actionCreators = _ref.actionCreators;
  return function (dispatch) {
    if (!doc || !doc._id) {
      return Promise.resolve();
    }
    if (!doc.invalidCache && doc.fetchedAt && Date.now() - doc.fetchedAt < TTL) {
      //console.log("loaded from cache");
      return Promise.resolve();
    }
    dispatch(actionCreators.loadDocs({
      selector: {
        _id: doc._id
      }
    }, undefined));
  };
};

var createDocLoader = exports.createDocLoader = function createDocLoader(loaderName, query) {
  return {
    type: 'CREATE_DOCS_LOADER',
    loaderName: loaderName,
    query: query
  };
};

var loadMoreDocs = exports.loadMoreDocs = function loadMoreDocs(loaderName, _ref2) {
  var actionCreators = _ref2.actionCreators;
  return function (dispatch, getState) {
    var loaderState = getState().docLoaders[loaderName];
    if (loaderState) {
      var query = loaderState.query,
          loaded = loaderState.loaded,
          endReached = loaderState.endReached;

      if (endReached) {
        return;
      }

      dispatch(actionCreators.loadDocs(Object.assign({}, query, {
        skip: loaded > 0 ? loaded : undefined
      }), loaderName));
    }
  };
};

var refreshLoader = exports.refreshLoader = function refreshLoader(loaderName, _ref3) {
  var actionCreators = _ref3.actionCreators;
  return function (dispatch) {
    dispatch({
      type: 'REFRESH_LOADER',
      loaderName: loaderName
    });
    dispatch(actionCreators.loadMoreDocs(loaderName));
  };
};