import React from 'react';
import styles from './PhoneListItem.module.css';

import { getFilesUri } from '../../utils';

const PhoneListItem = ({
  manufacturer,
  name,
  price,
  imageFileName,
  ...props
}) => {
  return (
    <li className={styles.PhoneListItem} tabIndex="0" role="button" {...props}>
      <div className={styles.thumbnail}>
        <img
          src={getFilesUri(`/images/${imageFileName}`)}
          alt={`${manufacturer} ${name}`}
        />
      </div>
      <div className={styles.info}>
        <h2>
          {manufacturer} {name}{' '}
        </h2>
        <p className={styles.price}>
          {price}
          <sup>£</sup>
        </p>
      </div>
    </li>
  );
};

export { PhoneListItem };
