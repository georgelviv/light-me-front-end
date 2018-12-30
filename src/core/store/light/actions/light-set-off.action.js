import { lightService } from 'core/services';

const LIGHT_SET_OFF_REQUEST_ACTION = '[LIGHT] set off request';
const LIGHT_SET_OFF_DONE_ACTION = '[LIGHT] set off done';

const lightSetOff = () => {
  return (dispatch) => {
    dispatch({
      type: LIGHT_SET_OFF_REQUEST_ACTION
    });
  
    lightService.setOff()
      .then((status) => {
        dispatch({
          type: LIGHT_SET_OFF_DONE_ACTION,
          payload: status
        })
      });
  }
}

export {
  LIGHT_SET_OFF_REQUEST_ACTION,
  LIGHT_SET_OFF_DONE_ACTION,
  lightSetOff
};