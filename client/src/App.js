import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonesActions } from './actions/index';

import { Header, Container, Sider, Panel } from './components/layout';
import { Spinner } from './components/ui';
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
    <div className="App">
      <Header title="The Phones App" />
      <Container>
        <Sider>
          {state.loading && <Spinner size={7} />}
          <ul>
            {state.phones.map((phone) => (
              <li
                key={`phone-list-${phone.id}`}
                onClick={() => selectPhone(phone)}
              >
                {phone.manufacturer} {phone.name}
              </li>
            ))}
          </ul>
        </Sider>
        <Panel
          active={state.selectedPhone}
          onClose={() => dismissSelectedPhone()}
        >
          {state.selectedPhone && (
            <div>
              <p>{state.selectedPhone.name}</p>
              <button onClick={() => dismissSelectedPhone()}>Dismiss</button>
            </div>
          )}
        </Panel>
      </Container>
    </div>
  );
};

export default App;
