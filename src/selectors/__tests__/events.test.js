import { Selector } from "redux-testkit";
import { eventsByRelevantDocSelector } from "../events";

describe("Events selector", () => {
  it("should return empty object if no events in store", () => {
    const state = { events: {} };
    const result = {};
    Selector(eventsByRelevantDocSelector)
      .expect(state)
      .toReturn(result);
  });

  it("should ignore events with no relevantDocsIds", () => {
    const state = {
      events: {
        event_1: {
          _id: "event_1",
          _rev: "1"
        }
      }
    };
    const result = {};
    Selector(eventsByRelevantDocSelector)
      .expect(state)
      .toReturn(result);
  });

  it("should ignore events with empty relevantDocsIds", () => {
    const state = {
      events: {
        event_1: {
          _id: "event_1",
          _rev: "1",
          relevantDocsIds: []
        }
      }
    };
    const result = {};
    Selector(eventsByRelevantDocSelector)
      .expect(state)
      .toReturn(result);
  });

  it("should group events by relevantDocsIds", () => {
    const state = {
      events: {
        event_1: {
          _id: "event_1",
          _rev: "1",
          relevantDocsIds: ["doc_1", "doc_2"]
        }
      }
    };
    const result = {
      doc_1: [
        {
          _id: "event_1",
          _rev: "1",
          docId: "doc_1",
          relevantDocsIds: ["doc_1", "doc_2"]
        }
      ],
      doc_2: [
        {
          _id: "event_1",
          _rev: "1",
          docId: "doc_2",
          relevantDocsIds: ["doc_1", "doc_2"]
        }
      ]
    };
    Selector(eventsByRelevantDocSelector)
      .expect(state)
      .toReturn(result);
  });

  it("should sort events by createdAt", () => {
    const state = {
      events: {
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
      }
    };
    const result = {
      doc_1: [
        {
          _id: "event_2",
          _rev: "1",
          docId: "doc_1",
          relevantDocsIds: ["doc_1"],
          createdAt: 10
        },
        {
          _id: "event_1",
          _rev: "1",
          docId: "doc_1",
          relevantDocsIds: ["doc_1"],
          createdAt: 20
        }
      ]
    };
    Selector(eventsByRelevantDocSelector)
      .expect(state)
      .toReturn(result);
  });

  it("should ignore events appliedOnClient", () => {
    const state = {
      events: {
        event_1: {
          _id: "event_1",
          _rev: "1",
          relevantDocsIds: ["doc_1"],
          createdAt: 20,
          appliedOnClient: {
            doc_1: "3"
          }
        },
        event_2: {
          _id: "event_2",
          _rev: "1",
          relevantDocsIds: ["doc_1"],
          createdAt: 10
        }
      }
    };
    const result = {
      doc_1: [
        {
          _id: "event_2",
          _rev: "1",
          docId: "doc_1",
          relevantDocsIds: ["doc_1"],
          createdAt: 10
        }
      ]
    };
    Selector(eventsByRelevantDocSelector)
      .expect(state)
      .toReturn(result);
  });

  it("should ignore events appliedOnClient by doc", () => {
    const state = {
      events: {
        event_1: {
          _id: "event_1",
          _rev: "1",
          relevantDocsIds: ["doc_1", "doc_2"],
          createdAt: 20,
          appliedOnClient: {
            doc_1: "3"
          }
        },
        event_2: {
          _id: "event_2",
          _rev: "1",
          relevantDocsIds: ["doc_1"],
          createdAt: 10
        }
      }
    };
    const result = {
      doc_1: [
        {
          _id: "event_2",
          _rev: "1",
          docId: "doc_1",
          relevantDocsIds: ["doc_1"],
          createdAt: 10
        }
      ],
      doc_2: [
        {
          _id: "event_1",
          _rev: "1",
          docId: "doc_2",
          relevantDocsIds: ["doc_1", "doc_2"],
          createdAt: 20,
          appliedOnClient: {
            doc_1: "3"
          }
        }
      ]
    };
    Selector(eventsByRelevantDocSelector)
      .expect(state)
      .toReturn(result);
  });
});
