import React from 'react';
import styles from './title.module.scss';
import icon from './lightbulb.svg';

const Title = () => {
  return (
    <div className={styles.title}>
      <h1>
        Light me!
      </h1>
      <img src={icon} alt="Icon" />
    </div> 
  );
}

export { Title };