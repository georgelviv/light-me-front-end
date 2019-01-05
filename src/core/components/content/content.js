import { connect } from 'react-redux';
import { ContentView } from './content.view';
import {
  ligthGetStatus,
  lightSetMode,
  lightSelector,
  lightSetOff,
  ligthIsOnSelector
} from 'core/store';

const mapDispatchToProps = {
  ligthGetStatus,
  lightSetMode,
  lightSetOff
};

const mapStateToProps = (state) => {
  return {
    lightState: lightSelector(state),
    isOn: ligthIsOnSelector(state)
  }
}

const Content = connect(mapStateToProps, mapDispatchToProps)(ContentView);

export { Content };