import { connect } from 'react-redux';
import { ContentView } from './content.view';
import { ligthGetStatus } from 'core/store';

const mapDispatchToProps = {
  ligthGetStatus
};

const Content = connect(null, mapDispatchToProps)(ContentView);

export { Content };