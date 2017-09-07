import currentProfile from '../currentProfile';
import { Reducer } from 'redux-testkit';

describe("currentProfile reducer", () => {

  it('should start with undefined if no profileId provided', () => {
    expect(currentProfile(undefined, {})).toEqual({_id: undefined});
  });

  it('should start with profileId if  provided', () => {
    expect(currentProfile(undefined, {}, {profileId: 'testId'})).toEqual({_id: 'testId'});
  });

  it('shouldn\'t be affected by not existing action ', () => {
    Reducer(currentProfile).withState({}).expect({type: 'NOT_EXISTING'}).toReturnState({});
  });

  it('should handle LOGIN action', () => {
    const state = {};
    const action = {
      type: 'LOGIN',
      profileId: 'profile1'
    }
    const result = {
      _id: 'profile1'
    }
    Reducer(currentProfile).withState(state).expect(action).toReturnState(result);
  });

  it('should handle LOGOUT action', () => {
    const state = {
      _id: 'profile1'
    };
    const action = {
      type: 'LOGOUT'
    }
    const result = {}
    Reducer(currentProfile).withState(state).expect(action).toReturnState(result);
  });

});
