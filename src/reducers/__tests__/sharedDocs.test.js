import sharedDocs from "../sharedDocs";
import { Reducer } from "redux-testkit";

const defaultState = {};

describe("Shared Docs reducer", () => {
  it("should have initial state", () => {
    expect(sharedDocs(undefined, {})).toEqual(defaultState);
  });

  it("should handle LOAD_SHARED_DOCS", () => {
    const state = {
      doc_1: {
        _id: "doc_1"
      }
    };
    const action = {
      type: "LOAD_SHARED_DOCS",
      docs: [
        {
          _id: "doc_2"
        },
        {
          _id: "doc_3"
        }
      ]
    };
    const result = {
      doc_1: {
        _id: "doc_1"
      },
      doc_2: {
        _id: "doc_2"
      },
      doc_3: {
        _id: "doc_3"
      }
    };
    Reducer(sharedDocs)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("LOAD_SHARED_DOCS shoud update existing docs", () => {
    const state = {
      doc_1: {
        _id: "doc_1",
        _rev: "1",
        testProp: "test"
      }
    };
    const action = {
      type: "LOAD_SHARED_DOCS",
      docs: [
        {
          _id: "doc_2",
          _rev: "1"
        },
        {
          _id: "doc_1",
          _rev: "2",
          testProp: "test_updated"
        }
      ]
    };
    const result = {
      doc_1: {
        _id: "doc_1",
        _rev: "2",
        testProp: "test_updated"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "1"
      }
    };
    Reducer(sharedDocs)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle SET_SHARED_DOC to update current doc", () => {
    const state = {
      doc_1: {
        _id: "doc_1",
        _rev: "1",
        testProp: "test"
      }
    };
    const action = {
      type: "SET_SHARED_DOC",
      doc: {
        _id: "doc_1",
        _rev: "2",
        testProp: "test_updated"
      }
    };
    const result = {
      doc_1: {
        _id: "doc_1",
        _rev: "2",
        testProp: "test_updated"
      }
    };
    Reducer(sharedDocs)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle SET_SHARED_DOC to add new doc", () => {
    const state = {
      doc_1: {
        _id: "doc_1",
        _rev: "1",
        testProp: "test"
      }
    };
    const action = {
      type: "SET_SHARED_DOC",
      doc: {
        _id: "doc_2",
        _rev: "2",
        testProp: "test_new"
      }
    };
    const result = {
      doc_1: {
        _id: "doc_1",
        _rev: "1",
        testProp: "test"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "2",
        testProp: "test_new"
      }
    };
    Reducer(sharedDocs)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle REMOVE_SHARED_DOC", () => {
    const state = {
      doc_1: {
        _id: "doc_1",
        _rev: "1",
        testProp: "test"
      },
      doc_2: {
        _id: "doc_2",
        _rev: "2",
        testProp: "test_new"
      }
    };
    const action = {
      type: "REMOVE_SHARED_DOC",
      doc: {
        _id: "doc_1",
        _rev: "1",
        testProp: "test"
      }
    };
    const result = {
      doc_2: {
        _id: "doc_2",
        _rev: "2",
        testProp: "test_new"
      }
    };
    Reducer(sharedDocs)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
});
