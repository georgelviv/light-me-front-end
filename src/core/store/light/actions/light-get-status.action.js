import { lightService } from 'core/services';

const LIGHT_GET_STATUS_ACTION = '[LIGHT] get status';


const ligthGetStatus = () => {
  lightService.getStatus();
  return {
    type: LIGHT_GET_STATUS_ACTION
  }
}

export {
  LIGHT_GET_STATUS_ACTION,
  ligthGetStatus
};