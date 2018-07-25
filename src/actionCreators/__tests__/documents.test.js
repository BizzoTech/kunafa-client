import {
  loadDocs,
  fetchDoc,
  createDocLoader,
  loadMoreDocs,
  refreshLoader
} from "../documents";

describe("Documents action creators tests", () => {
  jest.useFakeTimers();
  it("loadDocs should query publicdb", async () => {
    const result = {
      docs: [
        {
          _id: "doc_1"
        }
      ]
    };
    const publicdb = {
      find: jest.fn(() => result)
    };
    const getDbInstance = () => publicdb;
    const query = "QUERY";
    const dispatch = jest.fn();
    await loadDocs(query, "LOADER_NAME", { getDbInstance })(dispatch);
    expect(publicdb.find).toHaveBeenCalledTimes(1);
    expect(publicdb.find).toBeCalledWith(query);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("fetchDoc shouldn't fetch undefined docs ", async () => {
    const dispatch = jest.fn();
    await fetchDoc(undefined, {})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it("fetchDoc shouldn't fetch a doc without _id ", async () => {
    const dispatch = jest.fn();
    const doc = {
      testProp: "TestValue"
    };
    await fetchDoc(doc, {})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it("fetchDoc shouldn't fetch a doc that fetched within the last 5 minuts ", async () => {
    const dispatch = jest.fn();
    const doc = {
      _id: "testId",
      testProp: "TestValue",
      fetchedAt: Date.now() - 1000
    };
    await fetchDoc(doc, {})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it("fetchDoc should dispatch loadDocById  ", async () => {
    const dispatch = jest.fn();
    const actionCreators = {
      loadDocById: jest.fn(() => "LOAD_DOCS_RETURN")
    };
    const doc = {
      _id: "testId",
      testProp: "TestValue",
      fetchedAt: Date.now() - 1000000
    };
    await fetchDoc(doc, { actionCreators })(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocById).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocById).toBeCalledWith("testId");
    expect(dispatch).toBeCalledWith("LOAD_DOCS_RETURN");
  });

  it("fetchDoc should dispatch loadDocById to a doc with invalidCache even if loaded within 5 minuts ", async () => {
    const dispatch = jest.fn();
    const actionCreators = {
      loadDocById: jest.fn(() => "LOAD_DOCS_RETURN")
    };
    const doc = {
      _id: "testId",
      testProp: "TestValue",
      fetchedAt: Date.now() - 100,
      invalidCache: true
    };
    await fetchDoc(doc, { actionCreators })(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocById).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocById).toBeCalledWith("testId");
    expect(dispatch).toBeCalledWith("LOAD_DOCS_RETURN");
  });

  it("createDocLoader should return CREATE_DOCS_LOADER action", () => {
    const loaderName = "TestLoader";
    const query = {
      type: "test"
    };
    expect(createDocLoader(loaderName, query)).toEqual({
      type: "CREATE_DOCS_LOADER",
      loaderName,
      query
    });
  });

  it("loadMoreDocs should dispatch loadDocs skipping loaded docs", () => {
    const loaderName = "TestLoader";
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    };
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: "test"
            },
            loaded: 10,
            endReached: false
          }
        }
      };
    };
    loadMoreDocs(loaderName, { actionCreators })(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toBeCalledWith(
      {
        type: "test",
        skip: 10
      },
      "TestLoader"
    );
    expect(dispatch).toBeCalledWith("LOAD_DOCS_RETURN");
  });

  it("loadMoreDocs shouldn't dispatch any action if loaderName not found in docLoaders", () => {
    const loaderName = "SomeOtherLoader";
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    };
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: "test"
            },
            loaded: 10,
            endReached: false
          }
        }
      };
    };
    jest.runAllTimers();
    loadMoreDocs(loaderName, { actionCreators })(dispatch, getState);
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(0);
  });

  it("loadMoreDocs shouldn't dispatch any action if loader endReached", () => {
    const loaderName = "TestLoader";
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    };
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: "test"
            },
            loaded: 10,
            endReached: true
          }
        }
      };
    };
    loadMoreDocs(loaderName, { actionCreators })(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(0);
  });

  it("loadMoreDocs should dispatch loadDocs with no skip param if no loaded docs", () => {
    const loaderName = "TestLoader";
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    };
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: "test"
            },
            loaded: 0,
            endReached: false
          }
        }
      };
    };
    jest.runAllTimers();
    loadMoreDocs(loaderName, { actionCreators })(dispatch, getState);
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toBeCalledWith(
      {
        type: "test"
      },
      "TestLoader"
    );
    expect(dispatch).toBeCalledWith("LOAD_DOCS_RETURN");
  });

  it("refreshLoader should dispatch REFRESH_LOADER action and loadMoreDocs of loaderName", () => {
    const loaderName = "TestLoader";
    const actionCreators = {
      loadMoreDocs: jest.fn(() => "LOAD_MORE_DOCS_RETURN")
    };
    const dispatch = jest.fn();
    refreshLoader(loaderName, { actionCreators })(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: "REFRESH_LOADER",
      loaderName: "TestLoader"
    });
    expect(actionCreators.loadMoreDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadMoreDocs).toBeCalledWith("TestLoader");
    expect(dispatch).toBeCalledWith("LOAD_MORE_DOCS_RETURN");
  });
});
