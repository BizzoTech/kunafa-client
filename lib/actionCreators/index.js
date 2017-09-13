import * as historyActions from './history';
import * as dialogActions from './dialog';
import * as notificationActions from './notifications';
import * as documentsActions from './documents';

export default Object.assign({}, documentsActions, historyActions, dialogActions, notificationActions);