import { connect } from 'react-redux';
import { ContentView } from './content.view';
import {
  ligthGetStatus,
  lightSetDemoMode,
  lightSelector,
  lightSetOff,
  isOnSelector
} from 'core/store';

const mapDispatchToProps = {
  ligthGetStatus,
  lightSetDemoMode,
  lightSetOff
};

const mapStateToProps = (state) => {
  return {
    lightState: lightSelector(state),
    isOn: isOnSelector(state)
  }
}

const Content = connect(mapStateToProps, mapDispatchToProps)(ContentView);

export { Content };