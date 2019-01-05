import { lightService } from 'core/services';
import { lightSetColorMode } from './light-set-color-mode.action';
import { lightSetDemoMode } from './light-set-demo-mode.action';
import { lightSetOff } from './light-set-off.action';
 
const lightSetMode = (modeSettings) => {
  switch (modeSettings.mode) {
    case lightService.POSSIBLE_MODES.color:
      return lightSetColorMode(modeSettings.params);
    case lightService.POSSIBLE_MODES.demo:
      return lightSetDemoMode(modeSettings.params);
    default:
      return lightSetOff(modeSettings.params);    
  }
}

export {
  lightSetMode
};