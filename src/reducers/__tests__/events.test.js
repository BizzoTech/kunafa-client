import events from '../events';
import { Reducer } from 'redux-testkit';

const defaultState = {};

describe("Events reducer", () => {

  it('should have initial state', () => {
    expect(events(undefined, {})).toEqual(defaultState);
  });


});
