import { lightService } from 'core/services';

const LIGHT_SET_ON_REQUEST_ACTION = '[LIGHT] set on request';
const LIGHT_SET_ON_DONE_ACTION = '[LIGHT] set on done';

const lightSetOn = () => {
  return (dispatch) => {
    dispatch({
      type: LIGHT_SET_ON_REQUEST_ACTION
    });
  
    lightService.setOn()
      .then(() => {
        dispatch({
          type: LIGHT_SET_ON_DONE_ACTION
        })
      });
  }
}

export {
  LIGHT_SET_ON_REQUEST_ACTION,
  LIGHT_SET_ON_DONE_ACTION,
  lightSetOn
};