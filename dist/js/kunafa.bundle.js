module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("pouchdb");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("pouchdb-find");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var selectors_events_namespaceObject = {};
__webpack_require__.r(selectors_events_namespaceObject);
__webpack_require__.d(selectors_events_namespaceObject, "eventsByRelevantDocSelector", function() { return eventsByRelevantDocSelector; });
var actionCreators_history_namespaceObject = {};
__webpack_require__.r(actionCreators_history_namespaceObject);
__webpack_require__.d(actionCreators_history_namespaceObject, "resetHistory", function() { return resetHistory; });
__webpack_require__.d(actionCreators_history_namespaceObject, "navigateTo", function() { return navigateTo; });
__webpack_require__.d(actionCreators_history_namespaceObject, "transiteTo", function() { return transiteTo; });
__webpack_require__.d(actionCreators_history_namespaceObject, "goBack", function() { return goBack; });
__webpack_require__.d(actionCreators_history_namespaceObject, "goTo", function() { return goTo; });
var actionCreators_dialog_namespaceObject = {};
__webpack_require__.r(actionCreators_dialog_namespaceObject);
__webpack_require__.d(actionCreators_dialog_namespaceObject, "openDialog", function() { return openDialog; });
__webpack_require__.d(actionCreators_dialog_namespaceObject, "closeDialog", function() { return closeDialog; });
var actionCreators_notifications_namespaceObject = {};
__webpack_require__.r(actionCreators_notifications_namespaceObject);
__webpack_require__.d(actionCreators_notifications_namespaceObject, "clickNotification", function() { return clickNotification; });
__webpack_require__.d(actionCreators_notifications_namespaceObject, "clickExternalNotification", function() { return clickExternalNotification; });
var actionCreators_documents_namespaceObject = {};
__webpack_require__.r(actionCreators_documents_namespaceObject);
__webpack_require__.d(actionCreators_documents_namespaceObject, "loadDocs", function() { return loadDocs; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "loadDocById", function() { return loadDocById; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "loadDocsByIds", function() { return loadDocsByIds; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "fetchDoc", function() { return fetchDoc; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "fetchDocsByIds", function() { return fetchDocsByIds; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "createDocLoader", function() { return createDocLoader; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "loadMoreDocs", function() { return loadMoreDocs; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "refreshLoader", function() { return refreshLoader; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "addDocsToLoad", function() { return addDocsToLoad; });
__webpack_require__.d(actionCreators_documents_namespaceObject, "removeDocsToLoad", function() { return removeDocsToLoad; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(2);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(7);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/connect.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const connect = (mapStateToProps, mapDispatchToProps) => component => {
  const Wrapped = Object(external_react_redux_["connect"])(mapStateToProps, (dispatch, ownProps) => {
    const pkgActions = Object(external_redux_["bindActionCreators"])(ownProps.actions, dispatch);

    if (typeof mapDispatchToProps === "function") {
      const userActions = mapDispatchToProps(dispatch, ownProps);
      return _objectSpread({}, pkgActions, userActions);
    }

    return pkgActions;
  }, null)(component);

  class Wrapper extends external_react_["Component"] {
    render() {
      const actions = this.context.store.actions;
      const selectors = this.context.store.selectors;
      return external_react_["createElement"](Wrapped, _extends({
        actions: actions,
        selectors: selectors
      }, this.props));
    }

  }

  Wrapper.contextTypes = {
    store: external_prop_types_default.a.object
  };
  return Wrapper;
};

/* harmony default export */ var src_connect = (connect);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(8);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(9);

// EXTERNAL MODULE: external "pouchdb"
var external_pouchdb_ = __webpack_require__(1);
var external_pouchdb_default = /*#__PURE__*/__webpack_require__.n(external_pouchdb_);

// CONCATENATED MODULE: ./src/reducers/currentProfile.js
function currentProfile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { currentProfile_defineProperty(target, key, source[key]); }); } return target; }

function currentProfile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var currentProfile = ((state, action, config) => {
  const defaultState = {
    _id: config ? config.profileId : undefined
  };

  if (state === undefined) {
    return defaultState;
  }

  switch (action.type) {
    case "LOGIN":
      return currentProfile_objectSpread({}, state, {
        _id: action.profileId
      });

    case "LOGOUT":
      return currentProfile_objectSpread({}, state, {
        _id: undefined
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/history.js
function history_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { history_defineProperty(target, key, source[key]); }); } return target; }

function history_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const R = __webpack_require__(0);

const startWithHome = {
  path: [""]
}; // const startWithLogin = {
//   path: ["login"]
// };

/* harmony default export */ var reducers_history = ((state = startWithHome, action, config) => {
  // const defaultState =
  //   config && config.profileId ? startWithHome : startWithLogin;
  // if (state === undefined) {
  //   return defaultState;
  // }
  switch (action.type) {
    case "RESET_HISTORY":
      return startWithHome;

    case "GO_TO":
      return history_objectSpread({}, action.route, {
        previous: startWithHome
      });

    case "NAVIGATE_TO":
      return history_objectSpread({}, action.route, {
        previous: state
      });

    case "TRANSITE_TO":
      return state.previous ? history_objectSpread({}, action.route, {
        previous: state.previous
      }) : history_objectSpread({}, action.route, {
        previous: startWithHome
      });

    case "GO_BACK":
      return state.previous ? history_objectSpread({}, state.previous, {
        backFrom: R.dissoc("previous", state)
      }) : state;
    // case "SKIP_LOGIN":
    // case "LOGIN":
    //   if (state.path.length && state.path[0] === "login") {
    //     return state.previous ? state.previous : startWithHome;
    //   } else {
    //     return state;
    //   }
    // case "LOGOUT":
    //   return startWithLogin;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/events.js
function events_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { events_defineProperty(target, key, source[key]); }); } return target; }

function events_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const events_R = __webpack_require__(0);

const indexBy = events_R.reduceBy((acc, elem) => elem, null);
const defaultState = {};
/* harmony default export */ var events = ((state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_EVENTS":
      const newEvents = indexBy(e => e._id, action.events);
      return events_objectSpread({}, state, newEvents);

    case "ADD_EVENT":
    case "UPDATE_EVENT":
      return events_R.assoc(action.doc._id, action.doc, state);

    case "REMOVE_EVENT":
      return events_R.dissoc(action.doc._id, state);

    case "LOGIN":
    case "LOGOUT":
      return defaultState;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/documents.js
const documents_R = __webpack_require__(0);

const documents_defaultState = {};
/* harmony default export */ var documents = ((state = documents_defaultState, action, config) => {
  switch (action.type) {
    case "LOAD_DOCS":
    case "LOAD_DOCS_FROM_CACHE":
      if (action.docs.length < 1) {
        return state;
      }

      const modifiedDocs = action.docs.filter(doc => {
        return !state[doc._id] || state[doc._id]._rev !== doc._rev;
      });
      return modifiedDocs.reduce((state, doc) => {
        return documents_R.merge(state, {
          [doc._id]: doc
        }); //{...state, [doc._id]: doc};
      }, state);

    default:
      if (!config || !config.actionHandlers || !config.getRelevantDocsIds) {
        return state;
      }

      const actionHandlers = config.actionHandlers,
            getRelevantDocsIds = config.getRelevantDocsIds;
      const actionHandlersKeys = documents_R.flatten(Object.values(actionHandlers).map(hs => Object.keys(hs)));

      if (actionHandlersKeys.includes(action.type)) {
        const relevantDocsIds = getRelevantDocsIds(action);
        const relevantDocsToAdd = relevantDocsIds.filter(docId => {
          return action.doc._id === docId && !state[docId];
        }).map(docId => {
          return {
            type: action.doc.type
          };
        });
        const relevantDocsToUpdate = relevantDocsIds.filter(docId => {
          return action.doc._id !== docId || state[docId];
        }).map(docId => state[docId]).filter(d => d);
        const relevantDocs = [...relevantDocsToAdd, ...relevantDocsToUpdate];
        const updatedDocs = relevantDocs.map(doc => actionHandlers[doc.type][action.type](doc, action)).filter(doc => !relevantDocs.includes(doc));

        if (updatedDocs.length > 0) {
          return updatedDocs.reduce((state, doc) => {
            return documents_R.merge(state, {
              [doc._id]: doc
            }); //{...state, [doc._id]: doc};
          }, state);
        } else {
          return state;
        }
      } else {
        return state;
      }

  }
});
// CONCATENATED MODULE: ./src/reducers/processing_local.js
const processing_local_defaultState = {
  isProcessing: false
};
/* harmony default export */ var processing_local = ((state = processing_local_defaultState, action) => {
  switch (action.type) {
    case "START_PROCESSING_LOCAL":
      return {
        isProcessing: true,
        progress: action.progress
      };

    case "END_PROCESSING_LOCAL":
      return processing_local_defaultState;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/dialog.js
const dialog_R = __webpack_require__(0);

const dialog_defaultState = {
  currentDialog: undefined
};
/* harmony default export */ var dialog = ((state = dialog_defaultState, action) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return action.dialog;

    case "CLOSE_DIALOG":
    case "RESET_HISTORY":
    case "GO_TO":
    case "NAVIGATE_TO":
    case "TRANSITE_TO":
    case "GO_BACK":
    case "START_LOADING":
      return dialog_defaultState;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/docLoaders.js
function docLoaders_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { docLoaders_defineProperty(target, key, source[key]); }); } return target; }

function docLoaders_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const docLoaders_R = __webpack_require__(0);

const docLoaders_defaultState = {};
/* harmony default export */ var docLoaders = ((state = docLoaders_defaultState, action) => {
  switch (action.type) {
    case "CREATE_DOCS_LOADER":
      return docLoaders_objectSpread({}, state, {
        [action.loaderName]: {
          query: action.query,
          loaded: 0,
          loadedDocs: [],
          endReached: false
        }
      });

    case "REMOVE_DOCS_LOADER":
      return docLoaders_R.dissoc(action.loaderName, state);

    case "LOAD_DOCS":
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }

      const loader = state[action.loaderName];
      const loadedDocs = docLoaders_R.uniq([...loader.loadedDocs, ...action.docs.map(d => d._id)]);
      return docLoaders_objectSpread({}, state, {
        [action.loaderName]: docLoaders_objectSpread({}, loader, {
          loaded: loadedDocs.length,
          loadedDocs,
          endReached: action.docs.length < (loader.query.limit || 25)
        })
      });

    case "REFRESH_LOADER":
      if (!action.loaderName || !state[action.loaderName]) {
        return state;
      }

      return docLoaders_objectSpread({}, state, {
        [action.loaderName]: docLoaders_objectSpread({}, state[action.loaderName], {
          loaded: 0,
          loadedDocs: [],
          endReached: false
        })
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/notifications.js
const notifications_R = __webpack_require__(0);

const notifications_defaultState = {};
/* harmony default export */ var notifications = ((state = notifications_defaultState, action) => {
  switch (action.type) {
    case "LOAD_NOTIFICATIONS":
      const updatedNotifications = action.notifications.filter(n => {
        return !state[n._id] || state[n._id]._rev !== n._rev;
      });
      return notifications_R.merge(state, notifications_R.indexBy(notifications_R.prop("_id"), updatedNotifications));

    case "ADD_NOTIFICATION":
    case "UPDATE_NOTIFICATION":
      return notifications_R.merge(state, {
        [action.doc._id]: action.doc
      });

    case "REMOVE_NOTIFICATION":
      return notifications_R.omit([action.doc._id], state);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/sharedDocs.js
const sharedDocs_R = __webpack_require__(0);

const sharedDocs_defaultState = {};
/* harmony default export */ var sharedDocs = ((state = sharedDocs_defaultState, action) => {
  switch (action.type) {
    case "LOAD_SHARED_DOCS":
      const updatedDocs = action.docs.filter(n => {
        return !state[n._id] || state[n._id]._rev !== n._rev;
      });
      return sharedDocs_R.merge(state, sharedDocs_R.indexBy(sharedDocs_R.prop("_id"), updatedDocs));

    case "SET_SHARED_DOC":
      return sharedDocs_R.merge(state, {
        [action.doc._id]: action.doc
      });

    case "REMOVE_SHARED_DOC":
      return sharedDocs_R.omit([action.doc._id], state);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/docsToLoad.js
function docsToLoad_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { docsToLoad_defineProperty(target, key, source[key]); }); } return target; }

function docsToLoad_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const docsToLoad_R = __webpack_require__(0);

const docsToLoad_defaultState = {};
/* harmony default export */ var docsToLoad = ((state = docsToLoad_defaultState, action, config) => {
  switch (action.type) {
    case "ADD_DOCS_TO_LOAD":
      return docsToLoad_R.reduce((accum, docId) => {
        return docsToLoad_objectSpread({}, accum, {
          [docId]: 1
        });
      }, state, action.docsIds);

    case "REMOVE_DOCS_TO_LOAD":
      return docsToLoad_R.omit(action.docsIds, state);

    case "LOAD_DOCS":
      if (action.docs.length < 1) {
        return state;
      }

      const loadedDocsIds = action.docs.map(d => d._id);
      return docsToLoad_R.omit(loadedDocsIds, state);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/index.js










/* harmony default export */ var reducers = ({
  currentProfile: currentProfile,
  history: reducers_history,
  events: events,
  documents: documents,
  processing_local: processing_local,
  dialog: dialog,
  docLoaders: docLoaders,
  notifications: notifications,
  sharedDocs: sharedDocs,
  docsToLoad: docsToLoad
});
// CONCATENATED MODULE: ./src/middlewares/process_local_events_middleware.js
function process_local_events_middleware_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { process_local_events_middleware_defineProperty(target, key, source[key]); }); } return target; }

function process_local_events_middleware_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const process_local_events_middleware_R = __webpack_require__(0);

const processEvents = async (processLocalEvent, events, next) => {
  next({
    type: "START_PROCESSING_LOCAL"
  });

  try {
    for (const event of events) {
      await processLocalEvent(event, progress => {
        next({
          type: "START_PROCESSING_LOCAL",
          progress
        });
      });
      next({
        type: "UPDATE_EVENT",
        doc: process_local_events_middleware_objectSpread({}, event, {
          draft: "true",
          localOnly: undefined
        })
      });
    }
  } catch (e) {
    console.log(e);
  } finally {
    next({
      type: "END_PROCESSING_LOCAL"
    });
  }
};

/* harmony default export */ var process_local_events_middleware = ((store, {
  processLocalEvent,
  isConnected
}) => next => async action => {
  if (action.type === "PROCESS_LOCAL_ONLY") {
    if (await isConnected()) {
      const localOnlyEvents = process_local_events_middleware_R.sort((a1, a2) => a1.createdAt - a2.createdAt, process_local_events_middleware_R.values(store.getState().events).filter(process_local_events_middleware_R.prop("localOnly")));

      if (localOnlyEvents.length < 1) {
        return;
      }

      return processEvents(processLocalEvent, localOnlyEvents, next);
    }
  } else {
    return next(action);
  }
});
// CONCATENATED MODULE: ./src/middlewares/local_cache_middleware.js
const local_cache_middleware_R = __webpack_require__(0);

const removeOldDocs = async (cacheDocTypes, cacheLimit, keepInCache, state, cacheStore) => {
  const items = await cacheStore.getAll();
  const docs = items.filter(item => item && cacheDocTypes.includes(item.type));
  const sortedDocs = local_cache_middleware_R.sort((d1, d2) => d2.fetchedAt - d1.fetchedAt, docs.filter(d => !(keepInCache(d, state) || d._id === local_cache_middleware_R.path(["currentProfile", "_id"], state))));

  if (sortedDocs.length > cacheLimit) {
    const toBeRemovedDocs = local_cache_middleware_R.takeLast(sortedDocs.length - cacheLimit, sortedDocs);

    for (let doc of toBeRemovedDocs) {
      await cacheStore.delete(doc._id);
    }
  }
};

/* harmony default export */ var local_cache_middleware = ((store, {
  cacheDocTypes,
  cacheLimit,
  keepInCache,
  cacheStore
}) => next => {
  setTimeout(async () => {
    const items = await cacheStore.getAll();
    next({
      type: "LOAD_DOCS_FROM_CACHE",
      docs: items.filter(item => item && cacheDocTypes.includes(item.type))
    });
  }, 200);
  return action => {
    let result = next(action);
    setTimeout(async () => {
      if (action.type === "LOAD_DOCS") {
        for (const doc of action.docs.filter(doc => doc && cacheDocTypes.includes(doc.type))) {
          await cacheStore.save(doc._id, doc);
        }

        if (action.docs.length > 1) {
          removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, store.getState(), cacheStore);
        }
      }
    }, 0);
    return result;
  };
});
// CONCATENATED MODULE: ./src/middlewares/event_change_handler_middleware.js
const event_change_handler_middleware_R = __webpack_require__(0);

const checkToArchive = event => {
  if (!event.relevantDocsIds || event.relevantDocsIds.length === 0) {
    return true;
  }

  return event.appliedOn && event.appliedOnClient && Object.keys(event.appliedOn).every(docId => event.appliedOnClient[docId]);
};

/* harmony default export */ var event_change_handler_middleware = ((store, {
  actionCreators
}) => next => action => {
  let result = next(action);

  if (action.type === "LOAD_EVENTS") {
    for (const event of action.events) {
      if (event.relevantDocsIds && event.relevantDocsIds.length > 0 && event.status !== "archived" && !checkToArchive(event)) {
        next(event.action);
      }
    }
  }

  if (action.type === "UPDATE_EVENT" || action.type === "ADD_EVENT") {
    if (!action.doc.draft && action.doc.appliedOn) {
      for (const docId of Object.keys(action.doc.appliedOn)) {
        const doc = store.getState().documents[docId];

        if (!doc || doc._rev < action.doc.appliedOn[docId]) {
          store.dispatch(actionCreators.addDocsToLoad([docId]));
        }
      }
    }
  }

  return result;
});
// CONCATENATED MODULE: ./src/middlewares/click_notification_middleware.js
/* harmony default export */ var click_notification_middleware = ((store, {
  getNotificationRoute
}) => next => action => {
  if (action.type === "CLICK_NOTIFICATION") {
    if (action.notification) {
      const notification = action.notification;
      const route = getNotificationRoute(notification);

      if (route) {
        next({
          type: action.external ? "GO_TO" : "NAVIGATE_TO",
          route
        });
      }
    }
  }

  return next(action);
});
// EXTERNAL MODULE: external "pouchdb-find"
var external_pouchdb_find_ = __webpack_require__(3);
var external_pouchdb_find_default = /*#__PURE__*/__webpack_require__.n(external_pouchdb_find_);

// CONCATENATED MODULE: ./src/middlewares/sync_middleware/initialLoad.js
const initialLoad = async (db, syncPaths, dispatch) => {
  const result = await db.allDocs({
    include_docs: true,
    update_seq: true
  });
  syncPaths.forEach(path => {
    if (path.actions.load) {
      dispatch({
        type: path.actions.load,
        [path.name]: result.rows.map(r => r.doc).filter(path.filter)
      });
    }
  });
  return result;
};

/* harmony default export */ var sync_middleware_initialLoad = (initialLoad);
// CONCATENATED MODULE: ./src/middlewares/sync_middleware/getDefaultAction.js
const getDefaultAction = act => {
  let action = act;

  if (Array.isArray(action)) {
    action = action[0];
  }

  if (typeof action === "string") {
    return action;
  } else {
    return action.type;
  }
};

/* harmony default export */ var sync_middleware_getDefaultAction = (getDefaultAction);
// CONCATENATED MODULE: ./src/middlewares/sync_middleware/syncChanges.js


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
      } //console.log(change)


      if (change.doc._deleted) {
        setTimeout(() => {
          dispatch({
            type: sync_middleware_getDefaultAction(path.actions.remove),
            doc: change.doc
          });
        }, 0);
        return;
      }

      const pathState = store.getState()[path.name];

      if (pathState[change.doc._id]) {
        setTimeout(() => {
          dispatch({
            type: sync_middleware_getDefaultAction(path.actions.update),
            doc: change.doc
          });
        }, 0);
        return;
      } else {
        setTimeout(() => {
          dispatch({
            type: sync_middleware_getDefaultAction(path.actions.insert),
            doc: change.doc
          });
        }, 0);
        return;
      }
    });
  });
  return changes;
};

/* harmony default export */ var sync_middleware_syncChanges = (syncChanges);
// CONCATENATED MODULE: ./src/middlewares/sync_middleware/getActionsFromPaths.js
const getActionsFromPaths_R = __webpack_require__(0);

const getDocs = (state, action) => [action.doc];

const getActionsFromPaths = syncPaths => {
  const actionsList = syncPaths.map(path => {
    const actions = getActionsFromPaths_R.pick(["insert", "update", "remove"], path.actions);

    const transformAction = action => {
      if (Array.isArray(action)) {
        return getActionsFromPaths_R.flatten(action.map(transformAction));
      }

      if (typeof action === "object") {
        return [{
          type: action.type,
          getDocs: action.getDocs || getDocs
        }];
      }

      return [{
        type: action,
        getDocs
      }];
    };

    return getActionsFromPaths_R.map(transformAction, actions);
  });
  return actionsList.reduce((result, actionObj) => {
    return {
      insert: [...result.insert, ...actionObj.insert],
      update: [...result.update, ...actionObj.update],
      remove: [...result.remove, ...actionObj.remove]
    };
  });
};

/* harmony default export */ var sync_middleware_getActionsFromPaths = (getActionsFromPaths);
// CONCATENATED MODULE: ./src/middlewares/sync_middleware/index.js
const sync_middleware_R = __webpack_require__(0);



external_pouchdb_default.a.plugin(external_pouchdb_find_default.a);



let sync_middleware_db;
let sync_middleware_changes;
let initialRollupDone = false;
let currentDbUrl;

const createDatabase = async (localDbUrl, syncPaths, isOpenInOtherTab, store, next) => {
  currentDbUrl = localDbUrl;
  initialRollupDone = false;
  sync_middleware_db = new external_pouchdb_default.a(localDbUrl);
  const skipRollUp = isOpenInOtherTab && (await isOpenInOtherTab());

  if (!skipRollUp) {
    console.log("Roll up started", localDbUrl);
    const tempDb = new external_pouchdb_default.a(localDbUrl + "_temp");
    await sync_middleware_db.replicate.to(tempDb, {
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
    await sync_middleware_db.destroy();
    sync_middleware_db = new external_pouchdb_default.a(localDbUrl);
    await tempDb.replicate.to(sync_middleware_db);
    await tempDb.destroy();
    console.log("Roll up ended", localDbUrl);
  }

  const result = await sync_middleware_initialLoad(sync_middleware_db, syncPaths, next); //Initial Load docs to improve render performance by tracking new changes only

  sync_middleware_changes = sync_middleware_syncChanges(sync_middleware_db, syncPaths, store, next, result.update_seq);
  initialRollupDone = true;
};

const waitForRollup = () => {
  return new Promise(function (resolve, reject) {
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

/* harmony default export */ var sync_middleware = ((store, {
  getLocalDbUrl,
  syncPaths,
  dbSyncObj,
  isOpenInOtherTab
}) => next => {
  const profileId = store.getState().currentProfile._id;

  const localDbUrl = getLocalDbUrl(profileId);
  setTimeout(async () => {
    await createDatabase(localDbUrl, syncPaths, isOpenInOtherTab, store, next);
    dbSyncObj && dbSyncObj.start();
  }, 0);
  const mergedActions = sync_middleware_getActionsFromPaths(syncPaths);
  return async action => {
    const bulk = [];
    const state = store.getState();
    mergedActions.insert.forEach(insertAction => {
      if (insertAction.type === action.type) {
        const docs = insertAction.getDocs(state, action);
        docs.forEach(doc => {
          if (doc.draft) {
            //db.put(R.omit(['draft'], doc));
            bulk.push(sync_middleware_R.omit(["draft"], doc));
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
            bulk.push(sync_middleware_R.omit(["draft"], doc));
          }
        });
      }
    });
    mergedActions.remove.forEach(removeAction => {
      if (removeAction.type === action.type) {
        const docs = removeAction.getDocs(state, action);
        docs.forEach(doc => {
          //db.remove(doc)
          bulk.push(sync_middleware_R.merge(doc, {
            _deleted: true
          }));
        });
        next(action);
      }
    });

    if (bulk.length) {
      setTimeout(async () => {
        await waitForRollup();
        sync_middleware_db && sync_middleware_db.bulkDocs(bulk);
      }, 0);
    } else {
      next(action);
      await waitForRollup();

      if (action.type === "LOGIN" || action.type === "LOGOUT") {
        const profileId = store.getState().currentProfile._id;

        const localDbUrl = getLocalDbUrl(profileId);

        if (localDbUrl === currentDbUrl) {
          return;
        }

        try {
          sync_middleware_changes && sync_middleware_changes.cancel();
        } catch (err) {
          console.log(err);
        }

        setTimeout(async () => {
          dbSyncObj && dbSyncObj.stop();
          await createDatabase(localDbUrl, syncPaths, isOpenInOtherTab, store, next);
          dbSyncObj && dbSyncObj.start();
        }, 0);
      }
    }
  };
});
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(10);

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/selectors/events.js
function selectors_events_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { selectors_events_defineProperty(target, key, source[key]); }); } return target; }

function selectors_events_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const selectors_events_R = __webpack_require__(0);

const eventsSelector = state => state.events;

const interestingEventsSelector = Object(external_reselect_["createSelector"])(eventsSelector, events => {
  return selectors_events_R.values(events).filter(event => event.relevantDocsIds !== undefined && event.relevantDocsIds.length > 0);
});
const sortedEventsSelector = Object(external_reselect_["createSelector"])(interestingEventsSelector, events => {
  return selectors_events_R.sort((e1, e2) => e1.createdAt - e2.createdAt, events);
});
const eventsByRelevantDocSelector = Object(external_reselect_["createSelector"])(sortedEventsSelector, events => {
  const eventsWithDocIds = selectors_events_R.flatten(events.map(event => {
    return event.relevantDocsIds.map(docId => {
      return selectors_events_objectSpread({}, event, {
        docId
      });
    });
  }));
  const eventsGroupedByDocId = selectors_events_R.groupBy(event => event.docId, eventsWithDocIds);
  return selectors_events_R.map(events => {
    return events.filter(event => {
      const appliedOnClientRev = selectors_events_R.path(["appliedOnClient", event.docId], event);
      return appliedOnClientRev === undefined;
    });
  }, eventsGroupedByDocId);
});
// CONCATENATED MODULE: ./src/selectors/index.js
function selectors_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { selectors_defineProperty(target, key, source[key]); }); } return target; }

function selectors_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var src_selectors = (selectors_objectSpread({}, selectors_events_namespaceObject));
// CONCATENATED MODULE: ./src/middlewares/event_sourcing_middleware.js
function event_sourcing_middleware_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { event_sourcing_middleware_defineProperty(target, key, source[key]); }); } return target; }

function event_sourcing_middleware_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const event_sourcing_middleware_R = __webpack_require__(0);


const event_sourcing_middleware_eventsByRelevantDocSelector = src_selectors.eventsByRelevantDocSelector;
/* harmony default export */ var event_sourcing_middleware = ((store, config) => {
  const localOnlyActions = config.localOnlyActions,
        needLocalProcessing = config.needLocalProcessing,
        getActionPreProcessors = config.getActionPreProcessors,
        getActionPostProcessors = config.getActionPostProcessors,
        getRelevantDocsIds = config.getRelevantDocsIds,
        deviceInfo = config.deviceInfo;

  const createEvent = (action, state) => {
    const eventsList = event_sourcing_middleware_R.values(state.events);
    const localOnlyEvents = eventsList.filter(event_sourcing_middleware_R.prop("localOnly"));
    const localProcessingDocumentsIds = event_sourcing_middleware_R.flatten(localOnlyEvents.map(event => event.relevantDocsIds));
    const relevantDocsIds = getRelevantDocsIds(action);
    const shouldWaitForOtherAction = relevantDocsIds.some(docId => localProcessingDocumentsIds.includes(docId));
    const localOnly = needLocalProcessing.includes(action.type) || shouldWaitForOtherAction;

    const _id = state.currentProfile._id ? `${state.currentProfile._id}-${Date.now()}-${action.type}` : `anonymous-${deviceInfo.device_unique_id}-${Date.now()}-${action.type}`;

    return {
      _id,
      type: "EVENT",
      draft: "true",
      localOnly: localOnly ? "true" : undefined,
      action,
      relevantDocsIds: getRelevantDocsIds(action),
      preProcessors: getActionPreProcessors(action),
      postProcessors: getActionPostProcessors(action),
      status: "draft",
      info: deviceInfo,
      createdAt: Date.now(),
      createdBy: state.currentProfile._id || "anonymous"
    };
  };

  return next => action => {
    if (!localOnlyActions.includes(action.type) && action.type !== "ADD_PROFILE") {
      setTimeout(() => {
        next({
          type: "ADD_EVENT",
          doc: createEvent(action, store.getState())
        });
      }, 0);
    }

    let result = next(action);

    if (action.type === "LOAD_DOCS" || action.type === "LOAD_DOCS_FROM_CACHE") {
      setTimeout(() => {
        const eventsByRelevantDoc = event_sourcing_middleware_eventsByRelevantDocSelector(store.getState());
        action.docs.forEach(doc => {
          const docEvents = eventsByRelevantDoc[doc._id] || [];
          updateEventsToSetAppliedOnClient(doc, docEvents, next);
        });
      }, 0);
    }

    return result;
  };
});

const updateEventsToSetAppliedOnClient = (doc, docEvents, next) => {
  docEvents.forEach(event => {
    const isAppliedOn = event.appliedOn && event.appliedOn[doc._id];

    if (isAppliedOn && parseInt(event.appliedOn[doc._id]) <= parseInt(doc._rev)) {
      event.appliedOnClient = event.appliedOnClient || {};

      if (!event.appliedOnClient[doc._id]) {
        next({
          type: "UPDATE_EVENT",
          doc: event_sourcing_middleware_objectSpread({}, event, {
            draft: true,
            appliedOnClient: event_sourcing_middleware_objectSpread({}, event.appliedOnClient, {
              [doc._id]: doc._rev
            })
          })
        });
      }
    } else {
      next(event.action);
    }
  });
};
// CONCATENATED MODULE: ./src/middlewares/periodic_load_docs_middleware.js
/* harmony default export */ var periodic_load_docs_middleware = ((store, {
  actionCreators
}) => next => {
  setInterval(() => {
    const docsToLoad = store.getState().docsToLoad;
    const docsIds = Object.keys(docsToLoad);

    if (docsIds && docsIds.length > 0) {
      next(actionCreators.removeDocsToLoad(docsIds));
      store.dispatch(actionCreators.fetchDocsByIds(docsIds));
    }
  }, 5000);
  return action => {
    return next(action);
  };
});
// CONCATENATED MODULE: ./src/middlewares/index.js







/* harmony default export */ var middlewares = ([process_local_events_middleware, local_cache_middleware, event_sourcing_middleware, sync_middleware, click_notification_middleware, event_change_handler_middleware, periodic_load_docs_middleware]);
// CONCATENATED MODULE: ./src/actionCreators/history.js
const resetHistory = () => {
  return {
    type: "RESET_HISTORY"
  };
};
const navigateTo = path => {
  return {
    type: "NAVIGATE_TO",
    route: {
      path
    }
  };
};
const transiteTo = path => {
  return {
    type: "TRANSITE_TO",
    route: {
      path
    }
  };
};
const goBack = () => {
  return {
    type: "GO_BACK"
  };
};
const goTo = path => {
  return {
    type: "GO_TO",
    route: {
      path
    }
  };
};
// CONCATENATED MODULE: ./src/actionCreators/dialog.js
const openDialog = dialog => {
  return {
    type: "OPEN_DIALOG",
    dialog
  };
};
const closeDialog = () => {
  return {
    type: "CLOSE_DIALOG"
  };
};
// CONCATENATED MODULE: ./src/actionCreators/notifications.js
const clickNotification = notification => {
  return {
    type: "CLICK_NOTIFICATION",
    notification
  };
};
const clickExternalNotification = notification => {
  return {
    type: "CLICK_NOTIFICATION",
    notification,
    external: true
  };
};
// CONCATENATED MODULE: ./src/actionCreators/documents.js
function documents_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { documents_defineProperty(target, key, source[key]); }); } return target; }

function documents_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



external_pouchdb_default.a.plugin(external_pouchdb_find_default.a);
let publicDb = null;

const getDbInstance = config => {
  if (publicDb === null) {
    const host = config.HOST;
    const ssl = config.SSL || "off";
    const protocol = ssl === "on" ? "https" : "http";
    publicDb = new external_pouchdb_default.a(`${protocol}://${host}/public`, {
      ajax: {
        timeout: 60000
      }
    });
  }

  return publicDb;
};

const loadDocs = (query, loaderName, config) => async dispatch => {
  try {
    const publicDb = config.getDbInstance ? config.getDbInstance() : getDbInstance(config);
    const result = await publicDb.find(query);
    const docs = result ? result.docs.map(doc => {
      return documents_objectSpread({}, doc, {
        fetchedAt: Date.now()
      });
    }) : [];

    if (docs) {
      dispatch({
        type: "LOAD_DOCS",
        docs,
        loaderName
      });
    }
  } catch (e) {
    console.log(e);
  }
};
const loadDocById = (docId, config) => async dispatch => {
  try {
    const publicDb = config.getDbInstance ? config.getDbInstance() : getDbInstance(config);
    const result = await publicDb.get(docId);
    const docs = result ? [documents_objectSpread({}, result, {
      fetchedAt: Date.now()
    })] : [];

    if (docs) {
      dispatch({
        type: "LOAD_DOCS",
        docs
      });
    }
  } catch (e) {
    console.log(e);
  }
};
const loadDocsByIds = (docsIds, config) => async dispatch => {
  try {
    const publicDb = config.getDbInstance ? config.getDbInstance() : getDbInstance(config);
    const result = await publicDb.allDocs({
      include_docs: true,
      keys: docsIds
    });
    const docs = result ? result.rows.map(row => {
      return documents_objectSpread({}, row.doc, {
        fetchedAt: Date.now()
      });
    }) : [];

    if (docs) {
      dispatch({
        type: "LOAD_DOCS",
        docs
      });
    }
  } catch (e) {
    console.log(e);
  }
};
const TTL = 5 * 60 * 1000; //5 minuts
//const TTL = 0; // Live Update

const fetchDoc = (doc, {
  actionCreators
}) => dispatch => {
  if (!doc || !doc._id) {
    return Promise.resolve();
  }

  if (!doc.invalidCache && doc.fetchedAt && Date.now() - doc.fetchedAt < TTL) {
    //console.log("loaded from cache");
    return Promise.resolve();
  }

  dispatch(actionCreators.loadDocById(doc._id));
};
const fetchDocsByIds = (docsIds, {
  actionCreators
}) => dispatch => {
  if (!docsIds || docsIds.length === 0) {
    return Promise.resolve();
  }

  dispatch(actionCreators.loadDocsByIds(docsIds));
};
const createDocLoader = (loaderName, query) => {
  return {
    type: "CREATE_DOCS_LOADER",
    loaderName,
    query
  };
};
const loadMoreDocs = (loaderName, {
  actionCreators
}) => (dispatch, getState) => {
  const loaderState = getState().docLoaders[loaderName];

  if (loaderState) {
    const query = loaderState.query,
          loaded = loaderState.loaded,
          endReached = loaderState.endReached;

    if (endReached) {
      return;
    }

    dispatch(actionCreators.loadDocs(documents_objectSpread({}, query, {
      skip: loaded > 0 ? loaded : undefined
    }), loaderName));
  }
};
const refreshLoader = (loaderName, {
  actionCreators
}) => dispatch => {
  dispatch({
    type: "REFRESH_LOADER",
    loaderName
  });
  dispatch(actionCreators.loadMoreDocs(loaderName));
};
const addDocsToLoad = docsIds => {
  return {
    type: "ADD_DOCS_TO_LOAD",
    docsIds
  };
};
const removeDocsToLoad = docsIds => {
  return {
    type: "REMOVE_DOCS_TO_LOAD",
    docsIds
  };
};
// CONCATENATED MODULE: ./src/actionCreators/index.js
function actionCreators_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { actionCreators_defineProperty(target, key, source[key]); }); } return target; }

function actionCreators_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ var actionCreators = (actionCreators_objectSpread({}, actionCreators_documents_namespaceObject, actionCreators_history_namespaceObject, actionCreators_dialog_namespaceObject, actionCreators_notifications_namespaceObject));
// CONCATENATED MODULE: ./src/defaultConfig.js
const defaultConfig = {
  actionCreators: {},
  reducers: {},
  middlewares: [],
  selectors: {},
  syncPaths: [],
  actionHandlers: {},
  getRelevantDocsIds: action => {
    return [];
  },
  needLocalProcessing: [],
  processLocalEvent: event => Promise.resolve(event),
  localOnlyActions: [],
  getActionPreProcessors: action => {
    return [];
  },
  getActionPostProcessors: action => {
    return [];
  },
  cacheDocTypes: [],
  cacheLimit: 300,
  keepInCache: (doc, state) => {
    return false;
  },
  getDeepLinkRoute: url => {
    return {
      name: "HOME"
    };
  },
  getNotificationRoute: notification => {
    return {
      name: "HOME"
    };
  },
  getInitialActions: () => {},
  renderDialogContent: () => {},
  statusBarColor: getState => "#000000",
  progressBarColor: getState => "#000000",
  isConnected: () => false,
  deviceInfo: {
    device_unique_id: "default"
  },
  cacheStore: {
    keys: () => [],
    get: () => undefined,
    save: () => undefined,
    delete: () => undefined,
    getAll: async () => {
      return [];
    }
  }
};
/* harmony default export */ var src_defaultConfig = (defaultConfig);
// CONCATENATED MODULE: ./src/createStore.js
function createStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { createStore_defineProperty(target, key, source[key]); }); } return target; }

function createStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @flow
const createStore_R = __webpack_require__(0);










/* harmony default export */ var createStore = ((appConfig, preloadedState) => {
  const syncPaths = createStore_R.append({
    name: "events",
    filter: doc => {
      return doc.type == "EVENT"; // & !doc.appliedOnClient;
    },
    actions: {
      remove: "REMOVE_EVENT",
      update: "UPDATE_EVENT",
      insert: "ADD_EVENT",
      load: "LOAD_EVENTS"
    }
  }, appConfig.syncPaths || []);

  const config = createStore_objectSpread({}, src_defaultConfig, appConfig, {
    syncPaths
  });

  const _allActionCreators = createStore_objectSpread({}, actionCreators, config.actionCreators);

  const allActionCreators = createStore_R.map(actionCreator => (...args) => actionCreator(...args, config), _allActionCreators);
  config.actionCreators = allActionCreators;

  const _allReducers = createStore_objectSpread({}, reducers, config.reducers);

  const allReducers = createStore_R.map(reducer => (...args) => reducer(...args, config), _allReducers);

  const _allMiddlewares = config.ssr ? [] : [...config.middlewares, ...middlewares];

  const allMiddlewares = createStore_R.map(middleware => store => middleware(store, config), _allMiddlewares);

  const allSelectors = createStore_objectSpread({}, src_selectors, config.selectors);

  const AppReducer = Object(external_redux_["combineReducers"])(allReducers);
  const AppMiddleware = Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, ...allMiddlewares);
  let store = {};

  if (config.useReduxDevTools) {
    store = Object(external_redux_["createStore"])(AppReducer, preloadedState, Object(external_redux_devtools_extension_["composeWithDevTools"])(AppMiddleware));
  } else {
    store = Object(external_redux_["createStore"])(AppReducer, preloadedState, AppMiddleware);
  }

  const AppStore = createStore_objectSpread({}, store, {
    actions: allActionCreators,
    selectors: allSelectors
  });

  if (config.ssr) {
    const initialActions = config.getInitialActions(AppStore.getState, allActionCreators) || [];
    initialActions.forEach(AppStore.dispatch);
    return AppStore;
  }

  setTimeout(() => {
    const initialActions = config.getInitialActions(AppStore.getState, allActionCreators) || [];
    initialActions.forEach(AppStore.dispatch);
  }, 500);
  setInterval(async () => {
    const hasLocalEvents = createStore_R.values(AppStore.getState().events).some(createStore_R.prop("localOnly"));
    const isProcessing = AppStore.getState().processing_local.isProcessing;
    const isConnected = await config.isConnected();

    if (hasLocalEvents && !isProcessing && isConnected) {
      AppStore.dispatch({
        type: "PROCESS_LOCAL_ONLY"
      });
    }
  }, 1000);
  const localSharedDB = new external_pouchdb_default.a("shared", {
    auto_compaction: true
  });
  setTimeout(async () => {
    const sharedDocs = await localSharedDB.allDocs({
      include_docs: true,
      update_seq: true
    });
    store.dispatch({
      type: "LOAD_SHARED_DOCS",
      docs: sharedDocs.rows.filter(r => !r.id.startsWith("_design")).map(r => r.doc)
    });
    const changes = localSharedDB.changes({
      since: sharedDocs.update_seq,
      live: true,
      include_docs: true
    });
    changes.on("change", change => {
      if (change.doc._deleted) {
        store.dispatch({
          type: "REMOVE_SHARED_DOC",
          doc: change.doc
        });
      } else {
        store.dispatch({
          type: "SET_SHARED_DOC",
          doc: change.doc
        });
      }
    });
  }, 0);
  return AppStore;
});
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return src_connect; });
/* concated harmony reexport createStore */__webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });




/***/ })
/******/ ]);