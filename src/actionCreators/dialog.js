// @flow
export const openDialog = (dialog: any) => {
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
