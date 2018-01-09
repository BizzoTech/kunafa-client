import events from "../events";
import { Reducer } from "redux-testkit";

const defaultState = {};

describe("Events reducer", () => {
  it("should have initial state", () => {
    expect(events(undefined, {})).toEqual(defaultState);
  });

  it("should handle LOAD_EVENTS", () => {
    const state = {};
    const action = {
      type: "LOAD_EVENTS",
      events: [
        {
          _id: "event_2",
          _rev: "1",
          relevantDocsIds: ["doc_1"],
          createdAt: 10
        },
        {
          _id: "event_1",
          _rev: "1",
          relevantDocsIds: ["doc_1"],
          createdAt: 20
        }
      ]
    };
    const result = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    Reducer(events)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle ADD_EVENT", () => {
    const state = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    const action = {
      type: "ADD_EVENT",
      doc: {
        _id: "event_3",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    const result = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      },
      event_3: {
        _id: "event_3",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    Reducer(events)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle UPDATE_EVENT", () => {
    const state = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    const action = {
      type: "UPDATE_EVENT",
      doc: {
        _id: "event_2",
        _rev: "2",
        relevantDocsIds: ["doc_1"],
        createdAt: 30
      }
    };
    const result = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "2",
        relevantDocsIds: ["doc_1"],
        createdAt: 30
      }
    };
    Reducer(events)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle REMOVE_EVENT", () => {
    const state = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    const action = {
      type: "REMOVE_EVENT",
      doc: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    const result = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      }
    };
    Reducer(events)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should reset state after LOGIN", () => {
    const state = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    const action = {
      type: "LOGIN"
    };
    const result = defaultState;
    Reducer(events)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should reset state after LOGOUT", () => {
    const state = {
      event_1: {
        _id: "event_1",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 20
      },
      event_2: {
        _id: "event_2",
        _rev: "1",
        relevantDocsIds: ["doc_1"],
        createdAt: 10
      }
    };
    const action = {
      type: "LOGOUT"
    };
    const result = defaultState;
    Reducer(events)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
});
