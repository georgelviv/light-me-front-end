import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './panel.module.scss';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.lists[0]
    };

    if (props.onTabChange) {
      props.onTabChange(this.state.activeTab);
    }
  }

  onClick(item) {
    this.setState(() => {
      return {
        activeTab: item
      }
    }, () => {
      if (this.props.onTabChange) {
        this.props.onTabChange(item);
      }
    });
  }

  render() {
    const { lists, children } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={ styles.panel }>
        <ul className={ styles.panel__list }>
          { lists.map((item, index) => {
            return (
              <li className={ classNames(styles.panel__item, {
                [styles.panel__item_active]: activeTab === item
              }) } key={index}>
                <button
                  className={ styles.panel__itemBtn }
                  onClick={ this.onClick.bind(this, item) }>
                  { item }
                </button>
              </li>
          )})}
        </ul>
        <div>
          { children }
        </div>
      </div>
    );
  }
};

export { Panel };