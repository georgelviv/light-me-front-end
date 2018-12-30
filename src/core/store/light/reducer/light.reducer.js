import { lightInitalState } from './light.initial-state';
import {
  LIGHT_GET_STATUS_ACTION,
  LIGHT_SET_STATUS_ACTION,
  LIGHT_SET_DEMO_MODE_REQUEST_ACTION,
  LIGHT_SET_DEMO_MODE_DONE_ACTION,
  LIGHT_SET_OFF_REQUEST_ACTION,
  LIGHT_SET_OFF_DONE_ACTION,
  LIGHT_ERROR_ACTION
} from '../actions';
 
const lightReducer = (state = lightInitalState, action) =>  {
  switch (action.type) {
    case LIGHT_GET_STATUS_ACTION:
      return onGetStatus(state);
    case LIGHT_SET_STATUS_ACTION:
      return onSetStatus(state, action.payload);
    case LIGHT_SET_DEMO_MODE_REQUEST_ACTION:
      return onSetDemoModeRequest(state);
    case LIGHT_SET_DEMO_MODE_DONE_ACTION:
      return onSetDemoModeDone(state, action.payload);
    case LIGHT_SET_OFF_REQUEST_ACTION:
      return onSetOffRequest(state);
    case LIGHT_SET_OFF_DONE_ACTION:
      return onSetOffDone(state, action.payload);
    case LIGHT_ERROR_ACTION:
      return onError(state, action.payload);
    default:
      return state;
  }
}

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
    activeMode: status.mode
  }
}

function onSetDemoModeRequest(state) {
  return {
    ...state,
    isLoading: true
  }
}

function onSetDemoModeDone(state, status) {
  return {
    ...state,
    isLoading: false,
    isOn: true,
    activeMode: status.mode
  }
}

function onSetOffRequest(state) {
  return {
    ...state,
    isLoading: true
  }
}

function onSetOffDone(state, status) {
  return {
    ...state,
    isLoading: false,
    isOn: false,
    activeMode: status.mode
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

export { lightReducer };