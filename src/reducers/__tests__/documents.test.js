import documents from '../documents';
import { Reducer } from 'redux-testkit';

const defaultState = {};

describe("Documents reducer", () => {

  it('should have initial state', () => {
    expect(documents(undefined, {})).toEqual(defaultState);
  });


});
