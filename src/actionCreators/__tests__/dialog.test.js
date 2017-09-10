import {openDialog, closeDialog} from '../dialog';

describe('Dialog action creators test', () => {

  it('openDialog should return OPEN_DIALOG action', () => {
    const dialog = {
      name: 'TEST_DIALOG'
    }
    expect(openDialog(dialog)).toEqual({
      type: 'OPEN_DIALOG',
      dialog
    });
  });

  it('closeDialog should return CLOSE_DIALOG action', () => {
    expect(closeDialog()).toEqual({
      type: 'CLOSE_DIALOG'
    });
  });
});
