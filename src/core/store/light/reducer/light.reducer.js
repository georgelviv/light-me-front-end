import { lightInitalState } from './light.initial-state';
import {
  LIGHT_GET_STATUS_ACTION,
  LIGHT_SET_STATUS_ACTION,
  LIGHT_SET_ON_REQUEST_ACTION,
  LIGHT_SET_ON_DONE_ACTION,
  LIGHT_SET_OFF_REQUEST_ACTION,
  LIGHT_SET_OFF_DONE_ACTION
} from '../actions';
 
const lightReducer = (state = lightInitalState, action) =>  {
  switch (action.type) {
    case LIGHT_GET_STATUS_ACTION:
      return onGetStatus(state);
    case LIGHT_SET_STATUS_ACTION:
      return onSetStatus(state, action.payload);
    case LIGHT_SET_ON_REQUEST_ACTION:
      return onSetOnRequest(state);
    case LIGHT_SET_ON_DONE_ACTION:
      return onSetOnDone(state);
    case LIGHT_SET_OFF_REQUEST_ACTION:
      return onSetOffRequest(state);
    case LIGHT_SET_OFF_DONE_ACTION:
      return onSetOffDone(state);
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
    isOn: status,
    isLoading: false,
    isError: false,
    isReady: true
  }
}

function onSetOnRequest(state) {
  return {
    ...state,
    isLoading: true
  }
}

function onSetOnDone(state) {
  return {
    ...state,
    isLoading: false,
    isOn: true
  }
}

function onSetOffRequest(state) {
  return {
    ...state,
    isLoading: true
  }
}

function onSetOffDone(state) {
  return {
    ...state,
    isLoading: false,
    isOn: false
  }
}

export { lightReducer };