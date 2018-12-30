import React, { Component } from 'react';
import {
  SwtichOnOff,
  Spinner
} from 'shared/components';
import styles from './content.module.scss';

class ContentView extends Component {
  constructor(props) {
    super(props);
    this.onSwitchChange = this.onSwitchChange.bind(this);

    props.ligthGetStatus();
  }

  onSwitchChange = (val) => {
    val 
      ? this.props.lightSetOn()
      : this.props.lightSetOff();
  }

  render() {
    const { isLoading, isReady, isOn }  = this.props.lightState;

    return (
      <div className={ styles.content }>
        <div className={ styles.content__swithWrapper }>
          { isReady && (
            <SwtichOnOff value={ isOn } onChange={ this.onSwitchChange }>
            </SwtichOnOff>
          )}
        </div>
        { isLoading && (<Spinner></Spinner>) }
      </div>
    );
  }
}

export { ContentView };