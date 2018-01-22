import getDefaultAction from "../getDefaultAction";

describe("getDefaultAction test", () => {
  it("given a string getDefaultAction return the same string", () => {
    const action = "ACTION";
    expect(getDefaultAction(action)).toEqual(action);
  });

  it("given an object getDefaultAction return its type", () => {
    const action = {
      type: "ACTION"
    };
    expect(getDefaultAction(action)).toEqual("ACTION");
  });

  it("given an array of strings getDefaultAction return the first string", () => {
    const action = ["ACTION1", "ACTION2"];
    expect(getDefaultAction(action)).toEqual("ACTION1");
  });

  it("given an array of objects getDefaultAction return the first object type", () => {
    const action = [
      {
        type: "ACTION1"
      },
      {
        type: "ACTION2"
      }
    ];
    expect(getDefaultAction(action)).toEqual("ACTION1");
  });
});
