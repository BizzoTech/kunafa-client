import eventChangeHandlerMiddleware from '../event_change_handler_middleware';


describe('Event change handler middleware tests', () => {

  it('should call next after accepting nonrelevant action', () => {
    const next = jest.fn();
    const action = {
      type: 'SOME_ACTION'
    }
    eventChangeHandlerMiddleware({}, {})(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
  });

  it('should call next for all events\' actions after LOAD_EVENTS', () => {
    const next = jest.fn();
    const action = {
      type: 'LOAD_EVENTS',
      events: [{
        _id: 'event_1',
        relevantDocsIds: ['doc_1'],
        action: {
          type: 'ACTION_1'
        }
      },{
        _id: 'event_2',
        relevantDocsIds: ['doc_1'],
        action: {
          type: 'ACTION_2'
        }
      }]
    }
    eventChangeHandlerMiddleware({}, {})(next)(action);
    expect(next).toHaveBeenCalledTimes(3);
    expect(next).toBeCalledWith({
      type: 'ACTION_1'
    });
    expect(next).toBeCalledWith({
      type: 'ACTION_2'
    });
    expect(next).toBeCalledWith(action);
  });

  it('should ignore events without relevantDocsIds after LOAD_EVENTS', () => {
    const next = jest.fn();
    const action = {
      type: 'LOAD_EVENTS',
      events: [{
        _id: 'event_1',
        action: {
          type: 'ACTION_1'
        }
      },{
        _id: 'event_2',
        relevantDocsIds: ['doc_1'],
        action: {
          type: 'ACTION_2'
        }
      }]
    }
    eventChangeHandlerMiddleware({}, {})(next)(action);
    expect(next).toHaveBeenCalledTimes(2);
    expect(next).toBeCalledWith({
      type: 'ACTION_2'
    });
    expect(next).toBeCalledWith(action);
  });

  it('shoudl dispatch fetch action on all docs affected by UPDATE_EVENT', () => {
    const next = jest.fn();
    const store = {
      dispatch: jest.fn()
    }
    const actionCreators = {
      fetchDoc: jest.fn()
    }
    const action = {
      type: 'UPDATE_EVENT',
      doc: {
        _id: 'event_1',
        _rev: '3',
        appliedOn: {
          doc_1: '2',
          doc_2: '3'
        }
      }
    }
    eventChangeHandlerMiddleware(store, {actionCreators})(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
    expect(actionCreators.fetchDoc).toHaveBeenCalledTimes(2);
    expect(actionCreators.fetchDoc).toBeCalledWith({
      _id: 'doc_1'
    });
    expect(actionCreators.fetchDoc).toBeCalledWith({
      _id: 'doc_2'
    });
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('shoudl dispatch fetch action on all docs affected by ADD_EVENT', () => {
    const next = jest.fn();
    const store = {
      dispatch: jest.fn()
    }
    const actionCreators = {
      fetchDoc: jest.fn()
    }
    const action = {
      type: 'UPDATE_EVENT',
      doc: {
        _id: 'event_1',
        _rev: '1',
        appliedOn: {
          doc_1: '2',
          doc_2: '3'
        }
      }
    }
    eventChangeHandlerMiddleware(store, {actionCreators})(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
    expect(actionCreators.fetchDoc).toHaveBeenCalledTimes(2);
    expect(actionCreators.fetchDoc).toBeCalledWith({
      _id: 'doc_1'
    });
    expect(actionCreators.fetchDoc).toBeCalledWith({
      _id: 'doc_2'
    });
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should ignore draft events', () => {
    const next = jest.fn();
    const store = {
      dispatch: jest.fn()
    }
    const actionCreators = {
      fetchDoc: jest.fn()
    }
    const action = {
      type: 'UPDATE_EVENT',
      doc: {
        _id: 'event_1',
        _rev: '3',
        draft: true,
        appliedOn: {
          doc_1: '2',
          doc_2: '3'
        }
      }
    }
    eventChangeHandlerMiddleware(store, {actionCreators})(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
    expect(actionCreators.fetchDoc).toHaveBeenCalledTimes(0);
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });

  it('should ignore events which isn\'t applied on any document ', () => {
    const next = jest.fn();
    const store = {
      dispatch: jest.fn()
    }
    const actionCreators = {
      fetchDoc: jest.fn()
    }
    const action = {
      type: 'ADD_EVENT',
      doc: {
        _id: 'event_1',
        _rev: '1'
      }
    }
    eventChangeHandlerMiddleware(store, {actionCreators})(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
    expect(actionCreators.fetchDoc).toHaveBeenCalledTimes(0);
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });

});
