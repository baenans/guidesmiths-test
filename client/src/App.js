import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonesActions } from './actions/index';

import { Spinner } from './components/Spinner';
const phonesData = require('./data/phones.json');

const App = () => {
  const state = useSelector((state) => state.phones);
  const dispatch = useDispatch();

  const fetchData = () => {
    // TODO: baenans@ replace with real API call
    dispatch(phonesActions.setPhones(phonesData));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul>
        {state.loading && <Spinner size={7} />}
        {state.phones.map((phone) => (
          <li key={`phone-list-${phone.id}`}>
            {phone.manufacturer} {phone.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
