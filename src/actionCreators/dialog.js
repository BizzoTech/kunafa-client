// @flow
import type {Dialog} from '../types';

export const openDialog = (dialog: Dialog) => {
  return {
    type: 'OPEN_DIALOG',
    dialog
  }
}

export const closeDialog = () => {
  return {
    type: 'CLOSE_DIALOG'
  }
}
