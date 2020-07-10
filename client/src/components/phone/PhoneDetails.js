import React from 'react';
import styles from './PhoneDetails.module.css';
import { getFilesUri } from '../../utils';

const PhoneDetails = ({ phone }) => {
  return (
    <>
      <div className={styles.PhoneDetails}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${getFilesUri(
              `/images/${phone.imageFileName}`
            )})`,
          }}
        ></div>
        <div className={styles.description}>
          <h1>{phone.manufacturer}</h1>
          <h2>{phone.name}</h2>

          <p>{phone.description}</p>
          <h3>Specifications</h3>
          <p>
            <strong>Screen:</strong>&nbsp;
            {phone.screen}
            <br />
            <strong>Processor:</strong>&nbsp;
            {phone.processor}
            <br />
            <strong>RAM:</strong>&nbsp;
            {phone.ram}
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export { PhoneDetails };
