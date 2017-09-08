import events from '../events';
import { Reducer } from 'redux-testkit';

const defaultState = {};

describe("Events reducer", () => {

  it('should have initial state', () => {
    expect(events(undefined, {})).toEqual(defaultState);
  });

  it('should handle LOAD_EVENTS', () => {
    const state = {}
    const action = {
      type: 'LOAD_EVENTS',
      events: [
        {
          _id: 'event_2',
          _rev: '1',
          relevantDocsIds: ['doc_1'],
          createdAt: 10
        },
        {
          _id: 'event_1',
          _rev: '1',
          relevantDocsIds: ['doc_1'],
          createdAt: 20
        }
      ]
    }
    const result = {
      event_1: {
        _id: 'event_1',
        _rev: '1',
        relevantDocsIds: ['doc_1'],
        createdAt: 20
      },
      event_2: {
        _id: 'event_2',
        _rev: '1',
        relevantDocsIds: ['doc_1'],
        createdAt: 10
      }
    }
    Reducer(events).withState(state).expect(action).toReturnState(result);
  });


});
