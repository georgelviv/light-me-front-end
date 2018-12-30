import React, { Component } from 'react';
import { SwtichOnOff } from 'shared/components';
import styles from './content.module.scss';

class ContentView extends Component {
  constructor(props) {
    super(props);
    this.onSwitchChange = this.onSwitchChange.bind(this);

    props.ligthGetStatus();
  }

  onSwitchChange = (val) => {
    console.log('woo', val);
  }

  render() {
    return (
      <div className={ styles.content }>
        <div className={ styles.content__swithWrapper }>
          <SwtichOnOff onChange={ this.onSwitchChange }></SwtichOnOff>
        </div>
      </div>
    );
  }
}

export { ContentView };