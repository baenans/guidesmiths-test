import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, ...props }) => (
  <section className={styles.Container} {...props}>
    {children}
  </section>
);

export { Container };
