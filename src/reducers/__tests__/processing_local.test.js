import processing_local from "../processing_local";
import { Reducer } from "redux-testkit";

const defaultState = {
  isProcessing: false
};

describe("Processing local reducer", () => {
  it("should have initial state", () => {
    expect(processing_local(undefined, {})).toEqual(defaultState);
  });

  it("should handle START_PROCESSING_LOCAL", () => {
    const state = defaultState;
    const action = {
      type: "START_PROCESSING_LOCAL",
      progress: 75
    };
    const result = {
      isProcessing: true,
      progress: 75
    };
    Reducer(processing_local)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("START_PROCESSING_LOCAL should be able to update progress", () => {
    const state = {
      isProcessing: true,
      progress: 75
    };
    const action = {
      type: "START_PROCESSING_LOCAL",
      progress: 85
    };
    const result = {
      isProcessing: true,
      progress: 85
    };
    Reducer(processing_local)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });

  it("should handle END_PROCESSING_LOCAL", () => {
    const state = {
      isProcessing: true,
      progress: 75
    };
    const action = {
      type: "END_PROCESSING_LOCAL"
    };
    const result = defaultState;
    Reducer(processing_local)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
});
