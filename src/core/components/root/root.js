import React from 'react';
import styles from './root.module.scss';

import 'core/styles';
import 'bootstrap/dist/css/bootstrap.css';

import { Title, Content } from 'core/components';

const Root = () => {
  return (
    <div className={styles.root + ` container`}>
      <Title></Title>
      <Content></Content>
    </div>
  );
}

export { Root };
