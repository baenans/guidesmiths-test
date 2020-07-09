import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, ...props }) => (
  <header className={styles.Header} {...props}>
    <div className={styles.wrapper}>
      <h1>{title}</h1>
    </div>
  </header>
);

export { Header };
