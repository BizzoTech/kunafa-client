import syncChanges from "../syncChanges";

const syncPaths = [
  {
    name: "type1",
    filter: doc => doc.type === "type1",
    actions: {
      insert: {
        type: "INSERT_TYPE1"
      },
      update: [
        "UPDATE_TYPE1",
        {
          type: "UPDATE_TYPE1_2"
        }
      ],
      remove: "REMOVE_TYPE1",
      load: "LOAD_TYPE1"
    }
  },
  {
    name: "type2",
    filter: doc => doc.type === "type2",
    actions: {
      insert: ["INSERT_TYPE2"],
      update: "UPDATE_TYPE2",
      remove: ["REMOVE_TYPE2"]
    }
  }
];

describe("syncChanges tests", () => {
  jest.useFakeTimers();
  it("should get live changes since updated_seq", () => {
    const db = {
      changes: jest.fn(() => {
        return {
          on: () => {}
        };
      })
    };
    syncChanges(db, syncPaths, {}, () => {}, "updated_seq");
    expect(db.changes).toHaveBeenCalledTimes(1);
    expect(db.changes).toBeCalledWith({
      since: "updated_seq",
      live: true,
      include_docs: true
    });
  });

  it("should get live changes since now by default", () => {
    const db = {
      changes: jest.fn(() => {
        return {
          on: () => {}
        };
      })
    };
    syncChanges(db, syncPaths, {}, () => {});
    expect(db.changes).toHaveBeenCalledTimes(1);
    expect(db.changes).toBeCalledWith({
      since: "now",
      live: true,
      include_docs: true
    });
  });

  it("should listen to and changes feed", () => {
    const changesObj = {
      on: jest.fn()
    };
    const db = {
      changes: () => changesObj
    };
    const changes = syncChanges(db, syncPaths, {}, () => {});
    expect(changes).toEqual(changesObj);
    expect(changesObj.on).toHaveBeenCalledTimes(1);
    expect(changesObj.on.mock.calls[0][0]).toEqual("change");
  });

  it("should register change callback", () => {
    let callback;
    const changesObj = {
      on: (name, cb) => {
        callback = cb;
      }
    };
    const db = {
      changes: () => changesObj
    };
    syncChanges(db, syncPaths, {}, () => {});
    expect(callback).toBeDefined();
    expect(callback).toBeInstanceOf(Function);
  });

  it("should do nothing if changed doc can't pass any syncPath filter", () => {
    let callback;
    const changesObj = {
      on: (name, cb) => {
        callback = cb;
      }
    };
    const db = {
      changes: () => changesObj
    };
    const dispatch = jest.fn();
    syncChanges(db, syncPaths, {}, dispatch);
    callback({
      doc: {
        type: "type3"
      }
    });
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it("should dispatch remove action if changed doc is _deleted", () => {
    let callback;
    const changesObj = {
      on: (name, cb) => {
        callback = cb;
      }
    };
    const db = {
      changes: () => changesObj
    };
    const dispatch = jest.fn();
    syncChanges(db, syncPaths, {}, dispatch);
    callback({
      doc: {
        type: "type1",
        _deleted: true
      }
    });
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: "REMOVE_TYPE1",
      doc: {
        type: "type1",
        _deleted: true
      }
    });
  });

  it("should dispatch update action if changed doc is in current state", () => {
    let callback;
    const changesObj = {
      on: (name, cb) => {
        callback = cb;
      }
    };
    const db = {
      changes: () => changesObj
    };
    const store = {
      getState: () => {
        return {
          type1: {
            doc_1: {
              _id: "doc_1"
            }
          }
        };
      }
    };
    const dispatch = jest.fn();
    syncChanges(db, syncPaths, store, dispatch);
    callback({
      doc: {
        _id: "doc_1",
        type: "type1"
      }
    });
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: "UPDATE_TYPE1",
      doc: {
        _id: "doc_1",
        type: "type1"
      }
    });
  });

  it("should dispatch insert action if changed doc isn't in current state", () => {
    let callback;
    const changesObj = {
      on: (name, cb) => {
        callback = cb;
      }
    };
    const db = {
      changes: () => changesObj
    };
    const store = {
      getState: () => {
        return {
          type1: {}
        };
      }
    };
    const dispatch = jest.fn();
    syncChanges(db, syncPaths, store, dispatch);
    callback({
      doc: {
        _id: "doc_1",
        type: "type1"
      }
    });
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: "INSERT_TYPE1",
      doc: {
        _id: "doc_1",
        type: "type1"
      }
    });
  });
});
