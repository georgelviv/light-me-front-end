import { connect } from 'react-redux';
import { ContentView } from './content.view';
import {
  ligthGetStatus,
  lightSetOn,
  lightSelector,
  lightSetOff
} from 'core/store';

const mapDispatchToProps = {
  ligthGetStatus,
  lightSetOn,
  lightSetOff
};

const mapStateToProps = (state) => {
  return {
    lightState: lightSelector(state)
  }
}

const Content = connect(mapStateToProps, mapDispatchToProps)(ContentView);

export { Content };