import documents from "../documents";
import { Reducer } from "redux-testkit";

const defaultState = {};

const actionHandlers = {
  user: {
    ADD_USER: (user, action) => {
      return { ...action.doc };
    },
    UPDATE_USER: (user, action) => {
      if (user.notActive) {
        return user;
      }
      return {
        ...user,
        ...action.doc
      };
    }
  }
};

const getRelevantDocsIds = action => {
  return [action.doc._id];
};

describe("Documents reducer", () => {
  it("should have initial state", () => {
    expect(documents(undefined, {})).toEqual(defaultState);
  });

  it("should handle LOAD_DOCS", () => {
    const state = {};
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "doc_2",
          _rev: "1"
        },
        {
          _id: "doc_1",
          _rev: "1"
        }
      ]
    };
    const result = {
      doc_1: {
        _id: "doc_1",
        _rev: "1"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "1"
      }
    };
    Reducer(documents)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle LOAD_DOCS_FROM_CACHE", () => {
    const state = {
      doc_1: {
        _id: "doc_1",
        _rev: "1"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "1"
      }
    };
    const action = {
      type: "LOAD_DOCS_FROM_CACHE",
      docs: [
        {
          _id: "doc_3",
          _rev: "1"
        },
        {
          _id: "doc_4",
          _rev: "1"
        }
      ]
    };
    const result = {
      doc_1: {
        _id: "doc_1",
        _rev: "1"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "1"
      },
      doc_3: {
        _id: "doc_3",
        _rev: "1"
      },
      doc_4: {
        _id: "doc_4",
        _rev: "1"
      }
    };
    Reducer(documents)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("LOAD_DOCS should ignore docs with the same _rev as stored version", () => {
    const state = {
      doc_1: {
        _id: "doc_1",
        _rev: "1",
        testProp: "123"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "1",
        testProp: "456"
      }
    };
    const action = {
      type: "LOAD_DOCS",
      docs: [
        {
          _id: "doc_2",
          _rev: "2",
          testProp: "4567"
        },
        {
          _id: "doc_1",
          _rev: "1",
          testProp: "1234"
        }
      ]
    };
    const result = {
      doc_1: {
        _id: "doc_1",
        _rev: "1",
        testProp: "123"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "2",
        testProp: "4567"
      }
    };
    Reducer(documents)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should run actionHandlers based on doc type and action type to related documents", () => {
    const state = {
      user_1: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user",
        phone: 1234
      }
    };
    const action = {
      type: "UPDATE_USER",
      doc: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user changed"
      }
    };
    const result = {
      user_1: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user changed",
        phone: 1234
      }
    };

    expect(
      documents(state, action, { actionHandlers, getRelevantDocsIds })
    ).toEqual(result);
  });

  it("should run actionHandlers based on doc type and action type to NEW related documents", () => {
    const state = {
      user_1: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user",
        phone: 1234
      }
    };
    const action = {
      type: "ADD_USER",
      doc: {
        _id: "user_2",
        type: "user",
        name: "Test user 2"
      }
    };
    const result = {
      user_1: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user",
        phone: 1234
      },
      user_2: {
        _id: "user_2",
        type: "user",
        name: "Test user 2"
      }
    };

    expect(
      documents(state, action, { actionHandlers, getRelevantDocsIds })
    ).toEqual(result);
  });

  it("should ignore actions not in actionHandlers", () => {
    const state = {
      user_1: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user",
        phone: 1234
      }
    };
    const action = {
      type: "SOME_ACTION",
      doc: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user changed"
      }
    };
    const result = state;

    expect(
      documents(state, action, { actionHandlers, getRelevantDocsIds })
    ).toBe(result);
  });

  it("should ignore actions that don't update documents", () => {
    const state = {
      user_1: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user",
        phone: 1234,
        notActive: true
      }
    };
    const action = {
      type: "UPDATE_USER",
      doc: {
        _id: "user_1",
        _rev: "1",
        type: "user",
        name: "Test user changed"
      }
    };
    const result = state;

    expect(
      documents(state, action, { actionHandlers, getRelevantDocsIds })
    ).toBe(result);
  });
});
