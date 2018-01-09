import eventSourcingMiddleware from "../event_sourcing_middleware";

const config = {
  localOnlyActions: ["LOAD_DOCS", "LOCAL_ACTION1", "LOCAL_ACTION2"],
  needLocalProcessing: ["NEED_LOCAL1"],
  getActionPreProcessors: action => {
    return [];
  },
  getActionPostProcessors: action => {
    return [];
  },
  getRelevantDocsIds: action => {
    return ["doc_1"];
  },
  deviceInfo: {
    device_unique_id: "test_device_1"
  }
};

describe("Event sourcing middleware test", () => {
  jest.useFakeTimers();

  it("should call next after accepting local only action", () => {
    const next = jest.fn();
    const action = {
      type: "LOCAL_ACTION1"
    };
    eventSourcingMiddleware({}, config)(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
  });

  it("should trigger ADD_EVENT action after accepting any action not in localOnlyActions", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {}
        };
      }
    };
    const action = {
      type: "SOME_ACTION"
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(2);
    expect(next).toBeCalledWith(action);
    expect(next.mock.calls[1][0].type).toBe("ADD_EVENT");
    expect(next.mock.calls[1][0].doc.action).toBe(action);
    expect(next.mock.calls[1][0].doc.draft).toBe("true");
    expect(next.mock.calls[1][0].doc.status).toBe("draft");
    expect(next.mock.calls[1][0].doc.info).toBe(config.deviceInfo);
    expect(next.mock.calls[1][0].doc.localOnly).toBeUndefined();
  });

  it("Event _id should start with currentProfile _id and ends with action type", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {}
        };
      }
    };
    const action = {
      type: "SOME_ACTION"
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next.mock.calls[1][0].doc._id).toMatch(/^profile_1-.*-SOME_ACTION$/);
  });

  it("For anonymous user event _id should start with anonymous and ends with action type", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: undefined
          },
          events: {}
        };
      }
    };
    const action = {
      type: "SOME_ACTION"
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next.mock.calls[1][0].doc._id).toMatch(
      /^anonymous-test_device_1-.*-SOME_ACTION$/
    );
  });

  it("Actions that need local processing should produce local only events", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {}
        };
      }
    };
    const action = {
      type: "NEED_LOCAL1"
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next.mock.calls[1][0].doc.localOnly).toBe("true");
  });

  it("Actions relevant to docs that already have local events should produce local only events", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {
            event_1: {
              _id: "event_1",
              relevantDocsIds: ["doc_1"],
              localOnly: "true"
            }
          }
        };
      }
    };
    const action = {
      type: "SOME_ACTION"
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next.mock.calls[1][0].doc.localOnly).toBe("true");
  });

  it("LOAD_DOCS should UPDATE_EVENT to mark it as appliedOnClient if it's already appliedOn ", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {
            event_1: {
              _id: "event_1",
              relevantDocsIds: ["doc_1"],
              localOnly: "true",
              appliedOn: {
                doc_1: "3"
              }
            }
          }
        };
      }
    };
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "doc_1",
          _rev: "4"
        }
      ]
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next.mock.calls[1][0].type).toBe("UPDATE_EVENT");
    expect(next.mock.calls[1][0].doc._id).toBe("event_1");
    expect(next.mock.calls[1][0].doc.draft).toBe(true);
    expect(next.mock.calls[1][0].doc.appliedOnClient.doc_1).toBe("4");
  });

  it("LOAD_DOCS shouldn't trigger UPDATE_EVENT if there is no events related to any doc of loaded docs", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {
            event_1: {
              _id: "event_1",
              relevantDocsIds: ["doc_2"],
              localOnly: "true",
              appliedOn: {
                doc_2: "3"
              }
            }
          }
        };
      }
    };
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "doc_1",
          _rev: "4"
        }
      ]
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
  });

  it("LOAD_DOCS shouldn't trigger UPDATE_EVENT if the related event is already appliedOnClient", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {
            event_1: {
              _id: "event_1",
              relevantDocsIds: ["doc_1"],
              appliedOn: {
                doc_1: "2"
              },
              appliedOnClient: {
                doc_1: "3"
              }
            }
          }
        };
      }
    };
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "doc_1",
          _rev: "4"
        }
      ]
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
  });

  it("LOAD_DOCS should trigger event action if the event isn't appliedOn the loaded doc", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {
            event_1: {
              _id: "event_1",
              relevantDocsIds: ["doc_1", "doc_2"],
              appliedOn: {
                doc_2: "3"
              },
              action: {
                type: "TEST_ACTION"
              }
            }
          }
        };
      }
    };
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "doc_1",
          _rev: "4"
        }
      ]
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(2);
    expect(next).toBeCalledWith(action);
    expect(next).toBeCalledWith({
      type: "TEST_ACTION"
    });
  });

  it("LOAD_DOCS should trigger event action if the loaded doc is older than what the event is appliedOn ", () => {
    const next = jest.fn();
    const store = {
      getState: () => {
        return {
          currentProfile: {
            _id: "profile_1"
          },
          events: {
            event_1: {
              _id: "event_1",
              relevantDocsIds: ["doc_1", "doc_2"],
              appliedOn: {
                doc_1: "5"
              },
              action: {
                type: "TEST_ACTION"
              }
            }
          }
        };
      }
    };
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "doc_1",
          _rev: "4"
        }
      ]
    };
    eventSourcingMiddleware(store, config)(next)(action);
    jest.runAllTimers();
    expect(next).toHaveBeenCalledTimes(2);
    expect(next).toBeCalledWith(action);
    expect(next).toBeCalledWith({
      type: "TEST_ACTION"
    });
  });
});
