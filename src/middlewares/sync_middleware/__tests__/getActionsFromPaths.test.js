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
});
