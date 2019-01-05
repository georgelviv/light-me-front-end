function onGetStatus(state) {
  return {
    ...state,
    isLoading: true
  }
}

function onSetStatus(state, status) {
  return {
    ...state,
    isLoading: false,
    isError: false,
    isReady: true,
    activeMode: status,
    lastActiveMode: state.activeMode
  }
}

function onSetChangeModeRequest(state) {
  return {
    ...state,
    isLoading: true
  }
}

function onSetChangeModeDone(state, status) {
  return {
    ...state,
    isLoading: false,
    activeMode: status,
    lastActiveMode: state.activeMode
  }
}

function onError(state, error) {
  return {
    ...state,
    isError: true,
    isLoading: false,
    error
  }
}

export {
  onGetStatus,
  onSetStatus,
  onSetChangeModeRequest,
  onError,
  onSetChangeModeDone
}