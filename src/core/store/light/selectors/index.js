import { lightService } from 'core/services';

const lightSelector = (state) => {
  return state.lightReducer;
}
const isOnSelector = (state) => {
  return state.lightReducer.activeMode !== lightService.POSSIBLE_MODES.off;
}

export {
  lightSelector,
  isOnSelector
};