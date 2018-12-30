import React from 'react';
import styles from './app.module.scss';

import 'core/styles';
import 'bootstrap/dist/css/bootstrap.css';

import { Title, Content } from 'core/components';


const App = () => {
  return (
    <div className={styles.app + ` container`}>
      <Title></Title>
      <Content></Content>
    </div>
  );
}

export { App };
