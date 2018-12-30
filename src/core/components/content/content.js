import React from 'react';
import { SwtichOnOff } from 'shared/components';
import styles from './content.module.scss';

const Content = () => {
  return (
    <div className={ styles.content }>
      <div className={ styles.content__swithWrapper }>
        <SwtichOnOff></SwtichOnOff>
      </div>
    </div>
  );
}

export { Content };