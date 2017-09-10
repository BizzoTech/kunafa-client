import {loadDocs, fetchDoc, createDocLoader, loadMoreDocs, refreshLoader} from '../documents';

describe('Documents action creators tests', () => {

  it('fetchDoc shouldn\'t fetch undefined docs ', async () => {
    const dispatch = jest.fn();
    await fetchDoc(undefined, {})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it('fetchDoc shouldn\'t fetch a doc without _id ', async () => {
    const dispatch = jest.fn();
    const doc = {
      testProp: 'TestValue'
    }
    await fetchDoc(doc, {})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it('fetchDoc shouldn\'t fetch a doc that fetched within the last 5 minuts ', async () => {
    const dispatch = jest.fn();
    const doc = {
      _id: 'testId',
      testProp: 'TestValue',
      fetchedAt: Date.now() - 1000
    }
    await fetchDoc(doc, {})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it('fetchDoc should dispatch loadDoc with a selector of doc _id ', async () => {
    const dispatch = jest.fn();
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    }
    const doc = {
      _id: 'testId',
      testProp: 'TestValue',
      fetchedAt: Date.now() - 1000000
    }
    await fetchDoc(doc, {actionCreators})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toBeCalledWith({
      selector: {
        _id: 'testId'
      }
    }, undefined);
    expect(dispatch).toBeCalledWith('LOAD_DOCS_RETURN');
  });

  it('fetchDoc should dispatch loadDocs to a doc with invalidCache even if loaded within 5 minuts ', async () => {
    const dispatch = jest.fn();
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    }
    const doc = {
      _id: 'testId',
      testProp: 'TestValue',
      fetchedAt: Date.now() - 100,
      invalidCache: true
    }
    await fetchDoc(doc, {actionCreators})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toBeCalledWith({
      selector: {
        _id: 'testId'
      }
    }, undefined);
    expect(dispatch).toBeCalledWith('LOAD_DOCS_RETURN');
  });

  it('createDocLoader should return CREATE_DOCS_LOADER action', () => {
    const loaderName = 'TestLoader';
    const query = {
      type: 'test'
    }
    expect(createDocLoader(loaderName, query)).toEqual({
      type: 'CREATE_DOCS_LOADER',
      loaderName,
      query
    })
  });

  it('loadMoreDocs should dispatch loadDocs skipping loaded docs', () => {
    const loaderName = 'TestLoader';
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    }
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: 'test'
            },
            loaded: 10,
            endReached: false
          }
        }
      }
    }
    loadMoreDocs(loaderName, {actionCreators})(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toBeCalledWith({
      type: 'test',
      skip: 10
    }, 'TestLoader');
    expect(dispatch).toBeCalledWith('LOAD_DOCS_RETURN');
  });

  it('loadMoreDocs shouldn\'t dispatch any action if loaderName not found in docLoaders', () => {
    const loaderName = 'SomeOtherLoader';
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    }
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: 'test'
            },
            loaded: 10,
            endReached: false
          }
        }
      }
    }
    loadMoreDocs(loaderName, {actionCreators})(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(0);
  });

  it('loadMoreDocs shouldn\'t dispatch any action if loader endReached', () => {
    const loaderName = 'TestLoader';
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    }
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: 'test'
            },
            loaded: 10,
            endReached: true
          }
        }
      }
    }
    loadMoreDocs(loaderName, {actionCreators})(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(0);
  });

  it('loadMoreDocs should dispatch loadDocs with no skip param if no loaded docs', () => {
    const loaderName = 'TestLoader';
    const actionCreators = {
      loadDocs: jest.fn(() => "LOAD_DOCS_RETURN")
    }
    const dispatch = jest.fn();
    const getState = () => {
      return {
        docLoaders: {
          TestLoader: {
            query: {
              type: 'test'
            },
            loaded: 0,
            endReached: false
          }
        }
      }
    }
    loadMoreDocs(loaderName, {actionCreators})(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadDocs).toBeCalledWith({
      type: 'test'
    }, 'TestLoader');
    expect(dispatch).toBeCalledWith('LOAD_DOCS_RETURN');
  });


  it('refreshLoader should dispatch REFRESH_LOADER action and loadMoreDocs of loaderName', () => {
    const loaderName = 'TestLoader';
    const actionCreators = {
      loadMoreDocs: jest.fn(() => "LOAD_MORE_DOCS_RETURN")
    }
    const dispatch = jest.fn();
    refreshLoader(loaderName, {actionCreators})(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: 'REFRESH_LOADER',
      loaderName: 'TestLoader'
    });
    expect(actionCreators.loadMoreDocs).toHaveBeenCalledTimes(1);
    expect(actionCreators.loadMoreDocs).toBeCalledWith('TestLoader');
    expect(dispatch).toBeCalledWith('LOAD_MORE_DOCS_RETURN');
  });

});
