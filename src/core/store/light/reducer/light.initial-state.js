import { lightService } from 'core/services';

const modes = Object.values(lightService.POSSIBLE_MODES)
  .filter(mode => {
    return mode !== lightService.POSSIBLE_MODES.off
  })

const lightInitalState = {
  isReady: false,
  isLoading: false,
  isError: false,
  error: null,
  modes,
  activeMode: lightService.POSSIBLE_MODES.off
};

export { lightInitalState };