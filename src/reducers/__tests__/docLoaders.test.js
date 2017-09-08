import docLoaders from '../docLoaders';
import { Reducer } from 'redux-testkit';

const defaultState = {};

describe("DocLoaders reducer", () => {

  it('should have initial state', () => {
    expect(docLoaders(undefined, {})).toEqual(defaultState);
  });


});
