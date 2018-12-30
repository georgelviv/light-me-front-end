import { lightService } from 'core/services';

const LIGHT_GET_STATUS_ACTION = '[LIGHT] get status';
const LIGHT_SET_STATUS_ACTION = '[LIGHT] set status';

const ligthGetStatus = () => {
  return (dispatch) => {
    dispatch({
      type: LIGHT_GET_STATUS_ACTION
    });
  
    lightService.getStatus()
      .then((status) => {
        dispatch({
          type: LIGHT_SET_STATUS_ACTION,
          payload: status
        })
      });
  }
}

export {
  LIGHT_GET_STATUS_ACTION,
  LIGHT_SET_STATUS_ACTION,
  ligthGetStatus
};