import * as historyActions from './history';
import * as dialogActions from './dialog';
import * as notificationActions from './notifications';
import createDocumentsActions from './createDocumentsActions';

export default config => {
  return {
    ...createDocumentsActions(config),
    ...historyActions,
    ...dialogActions,
    ...notificationActions
  }
}