import React from 'react';
import styles from './PhoneList.module.css';
import { PhoneListItem } from './PhoneListItem';

const PhoneList = ({ phones, onPhoneSelected }) => {
  return (
    <ul className={styles.PhoneList}>
      {phones.map((phone) => (
        <PhoneListItem
          key={`phone-list-item-${phone.id}`}
          manufacturer={phone.manufacturer}
          name={phone.name}
          price={phone.price}
          imageFileName={phone.imageFileName}
          onClick={() => onPhoneSelected(phone)}
        />
      ))}
    </ul>
  );
};

export { PhoneList };
