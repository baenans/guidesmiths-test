import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonesActions } from './actions/index';

import { api } from './api';
import { Header, Container, Sider, Panel } from './components/layout';
import { Spinner } from './components/ui';
import { PhoneList, PhoneDetails } from './components/phone';

const App = () => {
  const state = useSelector((state) => state.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const phonesData = await api.phones.list();
      dispatch(phonesActions.setPhones(phonesData));
    } catch (err) {
      console.error(err);
    }
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
          {state.selectedPhone && <PhoneDetails phone={state.selectedPhone} />}
          {!state.selectedPhone && (
            <p>Select a phone to see detailed information</p>
          )}
        </Panel>
      </Container>
    </div>
  );
};

export default App;
