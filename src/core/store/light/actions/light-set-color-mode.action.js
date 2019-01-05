import { lightService } from 'core/services';

const LIGHT_SET_COLOR_MODE_REQUEST_ACTION = '[LIGHT] set color mode request';
const LIGHT_SET_COLOR_MODE_DONE_ACTION = '[LIGHT] set color mode done';

const lightSetColorMode = (color) => {
  return (dispatch) => {
    dispatch({
      type: LIGHT_SET_COLOR_MODE_REQUEST_ACTION
    });
  
    lightService.setColorMode(color)
      .then((status) => {
        dispatch({
          type: LIGHT_SET_COLOR_MODE_DONE_ACTION,
          payload: status
        })
      });
  }
}

export {
  LIGHT_SET_COLOR_MODE_REQUEST_ACTION,
  LIGHT_SET_COLOR_MODE_DONE_ACTION,
  lightSetColorMode
};