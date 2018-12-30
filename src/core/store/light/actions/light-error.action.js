const LIGHT_ERROR_ACTION = '[LIGHT] error';

const lightError = (error) => {
  return {
    type: LIGHT_ERROR_ACTION,
    payload: error
  }
}

export {
  LIGHT_ERROR_ACTION,
  lightError
};