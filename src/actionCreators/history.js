// @flow
export const resetHistory = () => {
  return {
    type: 'RESET_HISTORY'
  }
}

export const navigateTo = path => {
  return {
    type: 'NAVIGATE_TO',
    route: {
      path
    }
  }
}

export const transiteTo = path => {
  return {
    type: 'TRANSITE_TO',
    route: {
      path
    }
  }
}

export const goBack = () => {
  return {
    type: 'GO_BACK'
  }
}

export const goTo = path => {
  return {
    type: 'GO_TO',
    route: {
      path
    }
  }
}
