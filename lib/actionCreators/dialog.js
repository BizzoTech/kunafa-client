'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var openDialog = exports.openDialog = function openDialog(dialog) {
  return {
    type: 'OPEN_DIALOG',
    dialog: dialog
  };
};
var closeDialog = exports.closeDialog = function closeDialog() {
  return {
    type: 'CLOSE_DIALOG'
  };
};