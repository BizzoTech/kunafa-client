import notifications from '../notifications';
import { Reducer } from 'redux-testkit';

const defaultState = {};

describe('Notifications reducer', () => {

  it('should have initial state', () => {
    expect(notifications(undefined, {})).toEqual(defaultState);
  });

  it('should handle LOAD_NOTIFICATIONS', () => {
    const state = {
      notification1: {
        _id: 'notification1',
        testProp: '123'
      }
    }
    const action = {
      type: 'LOAD_NOTIFICATIONS',
      notifications: [{
        _id: 'notification2',
        testProp: '3456'
      }, {
        _id: 'notification3',
        testProp: '3458'
      }]
    }
    const result = {
      notification1: {
        _id: 'notification1',
        testProp: '123'
      },
      notification2: {
        _id: 'notification2',
        testProp: '3456'
      },
      notification3: {
        _id: 'notification3',
        testProp: '3458'
      }
    }
    Reducer(notifications).withState(state).expect(action).toReturnState(result);
  });

  it('LOAD_NOTIFICATIONS should update existing notification based on _rev', () => {
    const state = {
      notification1: {
        _id: 'notification1',
        _rev: '1',
        testProp: '123'
      },
      notification2: {
        _id: 'notification2',
        _rev: '1',
        testProp: '789'
      }
    }
    const action = {
      type: 'LOAD_NOTIFICATIONS',
      notifications: [{
        _id: 'notification1',
        _rev: '2',
        testProp: '456'
      },{
        _id: 'notification2',
        _rev: '1',
        testProp: '3456'
      }, {
        _id: 'notification3',
        _rev: '1',
        testProp: '3458'
      }]
    }
    const result = {
      notification1: {
        _id: 'notification1',
        _rev: '2',
        testProp: '456'
      },
      notification2: {
        _id: 'notification2',
        _rev: '1',
        testProp: '789'
      },
      notification3: {
        _id: 'notification3',
        _rev: '1',
        testProp: '3458'
      }
    }
    Reducer(notifications).withState(state).expect(action).toReturnState(result);
  });

  it('should handle ADD_NOTIFICATION', () => {
    const state = {
      notification1: {
        _id: 'notification1',
        testProp: '123'
      }
    }
    const action = {
      type: 'ADD_NOTIFICATION',
      doc: {
        _id: 'notification2',
        testProp: '3456'
      }
    }
    const result = {
      notification1: {
        _id: 'notification1',
        testProp: '123'
      },
      notification2: {
        _id: 'notification2',
        testProp: '3456'
      }
    }
    Reducer(notifications).withState(state).expect(action).toReturnState(result);
  });

  it('should handle UPDATE_NOTIFICATION', () => {
    const state = {
      notification1: {
        _id: 'notification1',
        testProp: '123'
      }
    }
    const action = {
      type: 'UPDATE_NOTIFICATION',
      doc: {
        _id: 'notification1',
        testProp: '3456'
      }
    }
    const result = {
      notification1: {
        _id: 'notification1',
        testProp: '3456'
      }
    }
    Reducer(notifications).withState(state).expect(action).toReturnState(result);
  });

  it('should handle REMOVE_NOTIFICATION', () => {
    const state = {
      notification1: {
        _id: 'notification1',
        testProp: '123'
      },
      notification2: {
        _id: 'notification2',
        testProp: '3456'
      }
    }
    const action = {
      type: 'REMOVE_NOTIFICATION',
      doc: {
        _id: 'notification2',
        testProp: '3456'
      }
    }
    const result = {
      notification1: {
        _id: 'notification1',
        testProp: '123'
      }
    }
    Reducer(notifications).withState(state).expect(action).toReturnState(result);
  });

});
