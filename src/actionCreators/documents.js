import PouchDB from "pouchdb";
import PouchdbFind from "pouchdb-find";
PouchDB.plugin(PouchdbFind);

let publicDb = null;

const getDbInstance = config => {
  if (publicDb === null) {
    const host = config.HOST;
    const ssl = config.SSL || "off";
    const protocol = ssl === "on" ? "https" : "http";
    publicDb = new PouchDB(`${protocol}://${host}/public`, {
      ajax: {
        timeout: 60000
      }
    });
  }
  return publicDb;
};

export const loadDocs = (query, loaderName, config) => async dispatch => {
  try {
    const publicDb = config.getDbInstance
      ? config.getDbInstance()
      : getDbInstance(config);
    const result = await publicDb.find(query);
    const docs = result
      ? result.docs.map(doc => {
          return {
            ...doc,
            fetchedAt: Date.now()
          };
        })
      : [];
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

export const loadDocById = (docId, config) => async dispatch => {
  try {
    const publicDb = config.getDbInstance
      ? config.getDbInstance()
      : getDbInstance(config);
    const result = await publicDb.get(docId);
    const docs = result
      ? [
          {
            ...result,
            fetchedAt: Date.now()
          }
        ]
      : [];
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

export const fetchDoc = (doc, { actionCreators }) => dispatch => {
  if (!doc || !doc._id) {
    return Promise.resolve();
  }
  if (!doc.invalidCache && doc.fetchedAt && Date.now() - doc.fetchedAt < TTL) {
    //console.log("loaded from cache");
    return Promise.resolve();
  }
  dispatch(actionCreators.loadDocById(doc._id));
};

export const fetchDocsByIds = (docsIds, { actionCreators }) => dispatch => {
  if (!docsIds || docsIds.length === 0) {
    return Promise.resolve();
  }
  dispatch(
    actionCreators.loadDocs(
      {
        selector: {
          _id: {
            $in: docsIds
          }
        }
      },
      undefined
    )
  );
};

export const createDocLoader = (loaderName, query) => {
  return {
    type: "CREATE_DOCS_LOADER",
    loaderName,
    query
  };
};

export const loadMoreDocs = (loaderName, { actionCreators }) => (
  dispatch,
  getState
) => {
  const loaderState = getState().docLoaders[loaderName];
  if (loaderState) {
    const { query, loaded, endReached } = loaderState;
    if (endReached) {
      return;
    }

    dispatch(
      actionCreators.loadDocs(
        {
          ...query,
          skip: loaded > 0 ? loaded : undefined
        },
        loaderName
      )
    );
  }
};

export const refreshLoader = (loaderName, { actionCreators }) => dispatch => {
  dispatch({
    type: "REFRESH_LOADER",
    loaderName
  });
  dispatch(actionCreators.loadMoreDocs(loaderName));
};

export const addDocsToLoad = docsIds => {
  return {
    type: "ADD_DOCS_TO_LOAD",
    docsIds
  };
};

export const removeDocsToLoad = docsIds => {
  return {
    type: "REMOVE_DOCS_TO_LOAD",
    docsIds
  };
};
