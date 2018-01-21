import { resetHistory, navigateTo, transiteTo, goBack, goTo } from "../history";

describe("History action creators test", () => {
  it("resetHistory should return RESET_HISTORY action", () => {
    expect(resetHistory()).toEqual({
      type: "RESET_HISTORY"
    });
  });

  it("navigateTo should return NAVIGATE_TO action with the passed routeName and params", () => {
    const path = ["TEST_ROUTE"];
    expect(navigateTo(path)).toEqual({
      type: "NAVIGATE_TO",
      route: {
        path
      }
    });
  });

  it("transiteTo should return TRANSITE_TO action with the passed routeName and params", () => {
    const path = ["TEST_ROUTE"];
    expect(transiteTo(path)).toEqual({
      type: "TRANSITE_TO",
      route: {
        path
      }
    });
  });

  it("goTo should return GO_TO action with the passed routeName and params", () => {
    const path = ["TEST_ROUTE"];
    expect(goTo(path)).toEqual({
      type: "GO_TO",
      route: {
        path
      }
    });
  });

  it("goBack should return GO_BACK action", () => {
    expect(goBack()).toEqual({
      type: "GO_BACK"
    });
  });
});
