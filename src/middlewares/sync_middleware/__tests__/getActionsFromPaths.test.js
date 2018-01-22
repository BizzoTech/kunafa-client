import getActionsFromPaths, { getDocs } from "../getActionsFromPaths";

describe("getActionsFromPaths test", () => {
  it("default getDocs returns a list with doc included in given action", () => {
    const action = {
      type: "ACTION",
      doc: {
        _id: "doc"
      }
    };
    expect(getDocs({}, action)).toEqual([action.doc]);
  });

  it("should transform syncPaths to actions grouped by insert, update and remove", () => {
    const syncPaths = [
      {
        name: "type1",
        filter: doc => doc.type === "type1",
        actions: {
          insert: "INSERT_TYPE1",
          update: "UPDATE_TYPE1",
          remove: "REMOVE_TYPE1",
          load: "LOAD_TYPE1"
        }
      },
      {
        name: "type2",
        filter: doc => doc.type === "type2",
        actions: {
          insert: "INSERT_TYPE2",
          update: "UPDATE_TYPE2",
          remove: "REMOVE_TYPE2"
        }
      }
    ];

    const mergedActions = getActionsFromPaths(syncPaths);
    expect(mergedActions).toEqual({
      insert: [
        {
          type: "INSERT_TYPE1",
          getDocs
        },
        {
          type: "INSERT_TYPE2",
          getDocs
        }
      ],
      update: [
        {
          type: "UPDATE_TYPE1",
          getDocs
        },
        {
          type: "UPDATE_TYPE2",
          getDocs
        }
      ],
      remove: [
        {
          type: "REMOVE_TYPE1",
          getDocs
        },
        {
          type: "REMOVE_TYPE2",
          getDocs
        }
      ]
    });
  });

  it("actions can be objects", () => {
    const syncPaths = [
      {
        name: "type1",
        filter: doc => doc.type === "type1",
        actions: {
          insert: {
            type: "INSERT_TYPE1"
          },
          update: "UPDATE_TYPE1",
          remove: "REMOVE_TYPE1",
          load: "LOAD_TYPE1"
        }
      },
      {
        name: "type2",
        filter: doc => doc.type === "type2",
        actions: {
          insert: "INSERT_TYPE2",
          update: "UPDATE_TYPE2",
          remove: "REMOVE_TYPE2"
        }
      }
    ];

    const mergedActions = getActionsFromPaths(syncPaths);
    expect(mergedActions).toEqual({
      insert: [
        {
          type: "INSERT_TYPE1",
          getDocs
        },
        {
          type: "INSERT_TYPE2",
          getDocs
        }
      ],
      update: [
        {
          type: "UPDATE_TYPE1",
          getDocs
        },
        {
          type: "UPDATE_TYPE2",
          getDocs
        }
      ],
      remove: [
        {
          type: "REMOVE_TYPE1",
          getDocs
        },
        {
          type: "REMOVE_TYPE2",
          getDocs
        }
      ]
    });
  });

  it("actions can be arrays of strings or objects", () => {
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

    const mergedActions = getActionsFromPaths(syncPaths);
    expect(mergedActions).toEqual({
      insert: [
        {
          type: "INSERT_TYPE1",
          getDocs
        },
        {
          type: "INSERT_TYPE2",
          getDocs
        }
      ],
      update: [
        {
          type: "UPDATE_TYPE1",
          getDocs
        },
        {
          type: "UPDATE_TYPE1_2",
          getDocs
        },
        {
          type: "UPDATE_TYPE2",
          getDocs
        }
      ],
      remove: [
        {
          type: "REMOVE_TYPE1",
          getDocs
        },
        {
          type: "REMOVE_TYPE2",
          getDocs
        }
      ]
    });
  });
});
