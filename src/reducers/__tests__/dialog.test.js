import dialog from '../dialog';
import { Reducer } from 'redux-testkit';

const defaultState = {
  currentDialog: undefined
}

describe('Dialog reducer', () => {

  it('should have initial state', () => {
    expect(dialog(undefined, {})).toEqual(defaultState);
  });

  it('shouldn\'t be affected by not existing action ', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    Reducer(dialog).withState(state).expect({type: 'NOT_EXISTING'}).toReturnState(state);
  });

  it('should handle open dialog action', () => {
    const action = {
      type: 'OPEN_DIALOG',
      dialog: {
        currentDialog: 'ImageView'
      }
    }
    Reducer(dialog).withState(defaultState).expect(action).toReturnState({currentDialog: 'ImageView'});
  });

  it('should handle close dialog action', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    const action = {
      type: 'CLOSE_DIALOG'
    }
    Reducer(dialog).withState(state).expect(action).toReturnState(defaultState);
  });

  it('RESET_HISTORY should close the dialog', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    const action = {
      type: 'RESET_HISTORY'
    }
    Reducer(dialog).withState(state).expect(action).toReturnState(defaultState);
  });

  it('GO_TO should close the dialog', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    const action = {
      type: 'GO_TO'
    }
    Reducer(dialog).withState(state).expect(action).toReturnState(defaultState);
  });

  it('NAVIGATE_TO should close the dialog', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    const action = {
      type: 'NAVIGATE_TO'
    }
    Reducer(dialog).withState(state).expect(action).toReturnState(defaultState);
  });

  it('TRANSITE_TO should close the dialog', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    const action = {
      type: 'TRANSITE_TO'
    }
    Reducer(dialog).withState(state).expect(action).toReturnState(defaultState);
  });

  it('GO_BACK should close the dialog', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    const action = {
      type: 'GO_BACK'
    }
    Reducer(dialog).withState(state).expect(action).toReturnState(defaultState);
  });

  it('START_LOADING should close the dialog', () => {
    const state = {
      currentDialog: 'ImageView'
    }
    const action = {
      type: 'START_LOADING'
    }
    Reducer(dialog).withState(state).expect(action).toReturnState(defaultState);
  });

});
