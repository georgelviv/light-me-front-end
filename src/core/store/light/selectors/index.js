import { lightService } from 'core/services';

const lightSelector = (state) => {
  return state.lightReducer;
}
const ligthIsOnSelector = (state) => {
  return state.lightReducer.activeMode.mode !== lightService.POSSIBLE_MODES.off;
}
const lightColorSelector = (state) => {
  return state.lightReducer.activeMode.mode === lightService.POSSIBLE_MODES.color
    ? state.lightReducer.activeMode.params
    : null;
}

export {
  lightSelector,
  ligthIsOnSelector,
  lightColorSelector
};