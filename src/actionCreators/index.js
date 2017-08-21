// @flow
import * as historyActions from './history';
import * as dialogActions from './dialog';
import * as notificationActions from './notifications';
import * as documentsActions from './documents';

import type {ActionCreator} from '../types';

export default ({
  ...documentsActions,
  ...historyActions,
  ...dialogActions,
  ...notificationActions
}: { [string]: ActionCreator})
