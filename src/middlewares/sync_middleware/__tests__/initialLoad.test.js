import initialLoad from "../initialLoad";

describe("initialLoad test", () => {
  it("initialLoad should return all docs and dispatch the load action for each sync path that has load action", async () => {
    const rows = [
      {
        doc: {
          _id: "doc_1",
          type: "type1"
        }
      },
      {
        doc: {
          _id: "doc_11",
          type: "type1"
        }
      },
      {
        doc: {
          _id: "doc_2",
          type: "type2"
        }
      },
      {
        doc: {
          _id: "doc_3",
          type: "type3"
        }
      }
    ];

    const db = {
      allDocs: jest.fn(async () => {
        return { rows };
      })
    };
    const syncPaths = [
      {
        name: "type1",
        filter: doc => doc.type === "type1",
        actions: {
          load: "LOAD_TYPE1"
        }
      },
      {
        name: "type2",
        filter: doc => doc.type === "type2",
        actions: {
          insert: "INSERT_TYPE2"
        }
      },
      {
        name: "type3",
        filter: doc => doc.type === "type3",
        actions: {
          load: "LOAD_TYPE3"
        }
      }
    ];
    const dispatch = jest.fn();

    const result = await initialLoad(db, syncPaths, dispatch);

    expect(result).toEqual({ rows });
    expect(db.allDocs).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: "LOAD_TYPE1",
      type1: [
        {
          _id: "doc_1",
          type: "type1"
        },
        {
          _id: "doc_11",
          type: "type1"
        }
      ]
    });
    expect(dispatch).toBeCalledWith({
      type: "LOAD_TYPE3",
      type3: [
        {
          _id: "doc_3",
          type: "type3"
        }
      ]
    });
  });
});
