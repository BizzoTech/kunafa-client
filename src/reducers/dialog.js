// @flow
import R from 'ramda';
import type {Dialog, Action} from '../types';

const defaultState = {
  currentDialog: undefined
}

export default(state: Dialog = defaultState, action: Action) => {
  switch(action.type) {
  case 'OPEN_DIALOG':
    return action.dialog;
  case 'CLOSE_DIALOG':
  case 'RESET_HISTORY':
  case 'GO_TO':
  case 'NAVIGATE_TO':
  case 'TRANSITE_TO':
  case 'GO_BACK':
  case 'START_LOADING':
    return defaultState;
  default:
    return state
  }
}
