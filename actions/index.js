import * as historyActions from './history';
import * as dialogActions from './dialog';
import * as notificationActions from './notifications';

export default {
  ...historyActions,
	...dialogActions,
  ...notificationActions
}
