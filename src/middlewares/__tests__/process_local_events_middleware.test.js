import processLocalEventsMiddleware from "../process_local_events_middleware";

describe("Process Local Events Middleware test", () => {
  jest.useFakeTimers();

  it("should call next after accepting nonrelevant action", () => {
    const next = jest.fn();
    const action = {
      type: "SOME_ACTION"
    };
    processLocalEventsMiddleware({}, {})(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
  });

  it("shouldn't do any processing if there is no connection", () => {
    const next = jest.fn();
    const action = {
      type: "PROCESS_LOCAL_ONLY"
    };
    const isConnected = async () => {
      return false;
    };
    processLocalEventsMiddleware({}, { isConnected })(next)(action);
    expect(next).toHaveBeenCalledTimes(0);
  });

  it("shouldn't do any processing if there is no events", () => {
    const next = jest.fn();
    const action = {
      type: "PROCESS_LOCAL_ONLY"
    };
    const store = {
      getState: () => {
        return {
          events: {}
        };
      }
    };
    const isConnected = async () => {
      return true;
    };
    processLocalEventsMiddleware(store, { isConnected })(next)(action);
    expect(next).toHaveBeenCalledTimes(0);
  });

  it("shouldn't do any processing if there is no localOnly events", () => {
    const next = jest.fn();
    const action = {
      type: "PROCESS_LOCAL_ONLY"
    };
    const store = {
      getState: () => {
        return {
          events: {
            event_1: {
              _id: "event_1",
              createdAt: "3"
            },
            event_2: {
              _id: "event_2",
              createdAt: "2"
            }
          }
        };
      }
    };
    const isConnected = async () => {
      return true;
    };
    processLocalEventsMiddleware(store, { isConnected })(next)(action);
    expect(next).toHaveBeenCalledTimes(0);
  });

  it("should call processLocalEvent for every local event ", async () => {
    const next = jest.fn();
    const action = {
      type: "PROCESS_LOCAL_ONLY"
    };
    const store = {
      getState: () => {
        return {
          events: {
            event_1: {
              _id: "event_1",
              createdAt: "3",
              localOnly: true
            },
            event_2: {
              _id: "event_2",
              createdAt: "2",
              localOnly: true
            },
            event_3: {
              _id: "event_3",
              createdAt: "5"
            }
          }
        };
      }
    };
    const processLocalEvent = jest.fn();
    processLocalEvent.mockReturnValue(Promise.resolve());
    // const processLocalEventCallBack = jest.fn();
    // const processLocalEvent = jset.fn((event, processLocalEventCallBack) => {
    //
    // })
    const isConnected = async () => {
      return true;
    };
    await processLocalEventsMiddleware(store, {
      isConnected,
      processLocalEvent
    })(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(4);
    expect(next).toBeCalledWith({
      type: "START_PROCESSING_LOCAL"
    });
    expect(next).toBeCalledWith({
      type: "END_PROCESSING_LOCAL"
    });
    expect(processLocalEvent).toHaveBeenCalledTimes(2);
  });

  it("if processLocalEvent callback should trigger START_PROCESSING_LOCAL action ", async () => {
    const next = jest.fn();
    const action = {
      type: "PROCESS_LOCAL_ONLY"
    };
    const store = {
      getState: () => {
        return {
          events: {
            event_1: {
              _id: "event_1",
              createdAt: "3",
              localOnly: true
            },
            event_2: {
              _id: "event_2",
              createdAt: "2",
              localOnly: true
            },
            event_3: {
              _id: "event_3",
              createdAt: "5"
            }
          }
        };
      }
    };
    //const processLocalEvent = jest.fn();
    //processLocalEvent.mockReturnValue(Promise.resolve());
    //const processLocalEventCallBack = jest.fn();
    const processLocalEvent = jest.fn((event, callback) => {
      callback(80);
      return Promise.resolve(event);
    });
    const isConnected = async () => {
      return true;
    };
    await processLocalEventsMiddleware(store, {
      isConnected,
      processLocalEvent
    })(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(6);
    expect(next).toBeCalledWith({
      type: "START_PROCESSING_LOCAL"
    });
    expect(next).toBeCalledWith({
      type: "START_PROCESSING_LOCAL",
      progress: 80
    });
    expect(next).toBeCalledWith({
      type: "UPDATE_EVENT",
      doc: {
        _id: "event_1",
        createdAt: "3",
        draft: "true",
        localOnly: undefined
      }
    });
    expect(next).toBeCalledWith({
      type: "UPDATE_EVENT",
      doc: {
        _id: "event_2",
        createdAt: "2",
        draft: "true",
        localOnly: undefined
      }
    });
    expect(next).toBeCalledWith({
      type: "END_PROCESSING_LOCAL"
    });
    expect(processLocalEvent).toHaveBeenCalledTimes(2);
  });
});
