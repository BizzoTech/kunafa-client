// @flow
import type {Action} from '../types';

export const resetHistory = () => {
  return {
    type: 'RESET_HISTORY'
  }
}

export const navigateTo = (routeName: string, params: ?Object) => {
  return {
    type: 'NAVIGATE_TO',
    route: {
      name: routeName,
      params
    }
  }
}

export const transiteTo = (routeName: string, params: ?Object) => {
  return {
    type: 'TRANSITE_TO',
    route: {
      name: routeName,
      params
    }
  }
}

export const goBack = () => {
  return {
    type: 'GO_BACK'
  }
}

export const goTo = (routeName: string, params: ?Object) => {
  return {
    type: 'GO_TO',
    route: {
      name: routeName,
      params
    }
  }
}
