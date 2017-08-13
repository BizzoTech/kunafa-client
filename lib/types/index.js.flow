// @flow
export type Event = {
  _id: string,
  relevantDocsIds : Array<string>,
  createdAt: number
}

export type Route = {
  name: string,
  params: ?Object,
  backFrom: ?Route
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


type OpenDialogAction = {
  type: 'OPEN_DIALOG',
  dialog: Dialog
}

type CloseDialogAction = {
  type: 'CLOSE_DIALOG'
}

type DialogAction = OpenDialogAction | CloseDialogAction;

export type Action =  EventAction | AuthAction | HistoryAction | DialogAction;
