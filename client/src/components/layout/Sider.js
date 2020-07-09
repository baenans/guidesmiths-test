import React from 'react';
import styles from './Sider.module.css';

const Sider = ({ children, ...props }) => (
  <section className={styles.Sider} {...props}>
    {children}
  </section>
);

export { Sider };
