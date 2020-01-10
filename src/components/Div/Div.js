import React from 'react';
import styles from './Div.module.scss';

export default ({ children }) => {
  return <div className={styles.text}>{children}</div>;
};
