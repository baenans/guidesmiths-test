import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonesActions } from './actions/index';

import { Spinner } from './components/Spinner';
const phonesData = require('./data/phones.json');

const App = () => {
  const state = useSelector((state) => state.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = () => {
    // TODO: baenans@ replace with real API call
    dispatch(phonesActions.setPhones(phonesData));
  };

  const selectPhone = (phone) => {
    dispatch(phonesActions.selectPhone(phone));
  };

  const dismissSelectedPhone = () => {
    dispatch(phonesActions.dismissSelectedPhone());
  };

  return (
    <div>
      <ul>
        {state.loading && <Spinner size={7} />}
        {state.phones.map((phone) => (
          <li key={`phone-list-${phone.id}`} onClick={() => selectPhone(phone)}>
            {phone.manufacturer} {phone.name}
          </li>
        ))}
      </ul>
      {state.selectedPhone && (
        <div>
          <p>{state.selectedPhone.name}</p>
          <button onClick={() => dismissSelectedPhone()}>Dismiss</button>
        </div>
      )}
    </div>
  );
};

export default App;
