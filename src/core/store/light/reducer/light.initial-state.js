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
  activeMode: {
    mode: lightService.POSSIBLE_MODES.demo,
    params: null
  },
  lastActiveMode: {
    mode: lightService.POSSIBLE_MODES.demo,
    params: null
  }
};

export { lightInitalState };