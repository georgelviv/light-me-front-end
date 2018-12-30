import { lightService } from 'core/services';

const LIGHT_SET_DEMO_MODE_REQUEST_ACTION = '[LIGHT] set demo mode request';
const LIGHT_SET_DEMO_MODE_DONE_ACTION = '[LIGHT] set demo mode done';

const lightSetDemoMode = () => {
  return (dispatch) => {
    dispatch({
      type: LIGHT_SET_DEMO_MODE_REQUEST_ACTION
    });
  
    lightService.setDemoMode()
      .then((status) => {
        dispatch({
          type: LIGHT_SET_DEMO_MODE_DONE_ACTION,
          payload: status
        })
      });
  }
}

export {
  LIGHT_SET_DEMO_MODE_REQUEST_ACTION,
  LIGHT_SET_DEMO_MODE_DONE_ACTION,
  lightSetDemoMode
};