import { lightInitalState } from './light.initial-state';
import {
  LIGHT_GET_STATUS_ACTION,
  LIGHT_SET_STATUS_ACTION,
  LIGHT_SET_DEMO_MODE_REQUEST_ACTION,
  LIGHT_SET_DEMO_MODE_DONE_ACTION,
  LIGHT_SET_OFF_REQUEST_ACTION,
  LIGHT_SET_OFF_DONE_ACTION,
  LIGHT_ERROR_ACTION,
  LIGHT_SET_COLOR_MODE_REQUEST_ACTION,
  LIGHT_SET_COLOR_MODE_DONE_ACTION
} from '../actions';
import {
  onGetStatus,
  onSetStatus,
  onSetChangeModeDone,
  onSetChangeModeRequest,
  onError
} from './light.helpers';
 
const lightReducer = (state = lightInitalState, action) =>  {
  switch (action.type) {
    case LIGHT_GET_STATUS_ACTION:
      return onGetStatus(state);
    case LIGHT_SET_STATUS_ACTION:
      return onSetStatus(state, action.payload.status);
    case LIGHT_SET_COLOR_MODE_REQUEST_ACTION:
    case LIGHT_SET_DEMO_MODE_REQUEST_ACTION:
    case LIGHT_SET_OFF_REQUEST_ACTION:
      return onSetChangeModeRequest(state);
    case LIGHT_SET_DEMO_MODE_DONE_ACTION:
    case LIGHT_SET_COLOR_MODE_DONE_ACTION:
    case LIGHT_SET_OFF_DONE_ACTION:
      return onSetChangeModeDone(state, action.payload);
    case LIGHT_ERROR_ACTION:
      return onError(state, action.payload);
    default:
      return state;
  }
}

export { lightReducer };