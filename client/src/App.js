import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonesActions } from './actions/index';

import { Header, Container, Sider, Panel } from './components/layout';
import { Spinner } from './components/ui';
import { PhoneList } from './components/phone';

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
          <PhoneList
            phones={state.phones}
            onPhoneSelected={(phone) => selectPhone(phone)}
          />
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
