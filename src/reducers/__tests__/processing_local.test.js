import processing_local from '../processing_local';
import { Reducer } from 'redux-testkit';

const defaultState = {
  isProcessing: false
}

describe("Processing local reducer", () => {

  it('should have initial state', () => {
    expect(processing_local(undefined, {})).toEqual(defaultState);
  });


});
