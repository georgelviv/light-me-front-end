import React, { Component } from 'react';
import {
  SwitchOnOff,
  Spinner,
  Panel
} from 'shared/components';
import styles from './content.module.scss';
import { lightService } from 'core/services';
import {
  DemoModePanel,
  ColorModePanel
} from 'core/components';

class ContentView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: null
    };

    this.onSwitchChange = this.onSwitchChange.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
    props.ligthGetStatus();
  }

  onSwitchChange = (val) => {
    val 
      ? this.props.lightSetMode(this.props.lightState.lastActiveMode)
      : this.props.lightSetOff();
  }

  onTabChange(activeTab) {
    this.setState(() => {
      return {
        activeTab
      }
    });
  }

  getPanelContent() {
    const { activeTab } = this.state;
    switch (activeTab) {
      case lightService.POSSIBLE_MODES.color:
        return (<ColorModePanel></ColorModePanel>);
      default:
        return (<DemoModePanel></DemoModePanel>);
    }
  }

  render() {
    const { isLoading, isReady, modes, isError } = this.props.lightState;
    const isOn = this.props.isOn;
    
    return (
      <div className={ styles.content }>
        { isReady && (
          <div>
            <div className={ styles.content__swithWrapper }>
              <SwitchOnOff value={ isOn } onChange={ this.onSwitchChange }>
              </SwitchOnOff>
            </div>
            <div className={ styles.content__panelWrapper }>
              <Panel lists={ modes }
                onTabChange={ this.onTabChange }>
                { this.getPanelContent() }
              </Panel>
            </div>
          </div>
        )}
        { isError && (
          <div className={ styles.content__errorLabel }>
            Cannot connect to led strip 
            <span role='img' aria-labelledby='jsx-a11y/accessible-emoji'>😔</span>
            <button>Retry</button>
          </div>
        )}
        { isLoading && (<Spinner></Spinner>) }
      </div>
    );
  }
}

export { ContentView };