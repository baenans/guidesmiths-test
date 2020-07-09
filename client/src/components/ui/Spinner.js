import React from 'react';
import styles from './Spinner.module.css';

const BORDER_WIDTH_SCALAR = 0.1;

const Spinner = ({ size = 10 }) => (
  <div className={styles.SpinnerContainer}>
    <div
      className={styles.spinner}
      style={{
        width: `${size}em`,
        height: `${size}em`,
        borderTopWidth: `${BORDER_WIDTH_SCALAR * size}em`,
        borderRightWidth: `${BORDER_WIDTH_SCALAR * size}em`,
        borderBottomWidth: `${BORDER_WIDTH_SCALAR * size}em`,
        borderLeftWidth: `${BORDER_WIDTH_SCALAR * size}em`,
      }}
    >
      Loading...
    </div>
  </div>
);

export { Spinner };
