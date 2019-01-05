import { connect } from 'react-redux';
import { ColorModePanelView } from './color-mode-panel.view';
import {
  lightSetColorMode,
  lightColorSelector
} from 'core/store';

const mapStateToProps = (state) => {
  return {
    color: lightColorSelector(state)
  }
}

const mapDispatchToProps = {
  lightSetColorMode
};

const ColorModePanel = connect(mapStateToProps, mapDispatchToProps)(ColorModePanelView);

export {
  ColorModePanel
};