import React from 'react';
import styles from './Panel.module.css';

import { CloseCircleOutlined } from '@ant-design/icons';

export const Panel = ({ children, active, onClose, ...props }) => {
  // TODO: baenans@ capture when the side panel becomes active, for good a11y
  // useEffect(() => {
  //
  // }, [active]);
  return (
    <section
      className={styles.Panel}
      {...props}
      active={active ? 'true' : undefined}
    >
      <div className={styles.actions}>
        <button aria-label="Close" onClick={onClose}>
          <CloseCircleOutlined />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
