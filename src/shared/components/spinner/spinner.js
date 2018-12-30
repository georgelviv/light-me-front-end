import React from 'react';
import styles from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={ styles.spinner__wrapper }>
      <div className={ styles.spinner }>
        <div className={ styles.spinner__el }></div>
        <div className={ styles.spinner__el }></div>
      </div>
    </div>
  );
};

export { Spinner };