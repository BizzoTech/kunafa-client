// @flow
export type Event = {
  _id: string,
  relevantDocsIds : Array<string>,
  createdAt: number
}

export type Route = {
  name: string,
  params?: Object,
  backFrom?: Route
}

export type Dialog = {
  currentDialog: ?string
}

export type State = {
  history: Array<Route>,
  notifications: any,
  events: { [string]: Event },
  processing_local: any,
  dialog: Dialog
}


export type ActionCreator = (...args: Array<any>) => ({type: $Subtype<string>} | (dispatch: Function) => any);
export type Reducer = (state: any, action: any, config?: any) => any

// Action Types

type LoadEventsAction = {
  type: 'LOAD_EVENTS',
  events: Array < Event >
}

type AddEventAction = {
  type: 'ADD_EVENT',
  doc: Event
}

type UpdateEventAction = {
  type: 'UPDATE_EVENT',
  doc: Event
}

type RemoveEventAction = {
  type: 'REMOVE_EVENT',
  doc: Event
}

type EventAction = LoadEventsAction | AddEventAction | UpdateEventAction | RemoveEventAction;

type LoginAction = {
  type: 'LOGIN'
}

type LogoutAction = {
  type: 'LOGOUT'
}

type SkipLoginAction = {
  type: 'SKIP_LOGIN'
}

type AuthAction = LoginAction | LogoutAction | SkipLoginAction;

type ResetHistoryAction = {
  type: 'RESET_HISTORY'
}

type GoToAction = {
  type: 'GO_TO',
  route: Route
}

type NavigateToAction = {
  type: 'NAVIGATE_TO',
  route: Route
}

type TransiteToAction = {
  type: 'TRANSITE_TO',
  route: Route
}

type GoBackAction = {
  type: 'GO_BACK'
}

type HistoryAction = ResetHistoryAction | GoToAction | NavigateToAction | TransiteToAction | GoBackAction;


export type OpenDialogAction = {
  type: 'OPEN_DIALOG',
  dialog: Dialog
}

export type CloseDialogAction = {
  type: 'CLOSE_DIALOG'
}

type DialogAction = OpenDialogAction | CloseDialogAction;

export type Action =  EventAction | AuthAction | HistoryAction | DialogAction;


type SyncAction = string | {
  type: string,
  getDocs: Function
}

export type SyncPath = {
  name: string,
  filter: (doc: {type: string}) => boolean,
  actions: { [string]: SyncAction }
}

export type AppConfig = {
  actionCreators?: { [string]: ActionCreator},
  reducers?: { [string]: Reducer},
  middlewares?: Array<Function>,
  syncPaths?: Array<SyncPath>,
  actionHandlers?: { [string]: {[string]: Function}},
  getRelevantDocsIds?: (action: any) => Array<string>,
  processLocalEvent?: Function,
  needLocalProcessing?: Array<string>,
  localOnlyActions?: Array<string>,
  getActionPreProcessors?: (action: any) => Array<{name: string}>,
  getActionPostProcessors?: (action: any) => Array<{name: string}>,
  cacheDocTypes?: Array<string>,
  cacheLimit?: number,
  keepInCache?: (doc: any, state: any) => boolean,
  getDeepLinkRoute?: (url: string) => Route,
  getNotificationRoute?: (notification: any) => Route,
  getInitialActions?: Function,
  renderDialogContent?: Function,
  statusBarColor?: (getState: Function) => string,
  progressBarColor?: (getState: Function) => string,
  isConnected: Function
}

export type StrictAppConfig = {
  actionCreators: { [string]: ActionCreator},
  reducers: { [string]: Reducer},
  middlewares: Array<Function>,
  syncPaths: Array<SyncPath>,
  actionHandlers: { [string]: {[string]: Function}},
  getRelevantDocsIds: (action: any) => Array<string>,
  processLocalEvent: Function,
  needLocalProcessing: Array<string>,
  localOnlyActions: Array<string>,
  getActionPreProcessors: (action: any) => Array<{name: string}>,
  getActionPostProcessors: (action: any) => Array<{name: string}>,
  cacheDocTypes: Array<string>,
  cacheLimit: number,
  keepInCache: (doc: any, state: any) => boolean,
  getDeepLinkRoute: (url: string) => Route,
  getNotificationRoute: (notification: any) => Route,
  getInitialActions: Function,
  renderDialogContent: Function,
  statusBarColor: (getState: Function) => string,
  progressBarColor: (getState: Function) => string,
  isConnected: Function
}
