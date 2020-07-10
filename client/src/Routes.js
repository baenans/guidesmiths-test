import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Phones } from './pages/Phones';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/phones" component={Phones} />
      <Redirect to="/phones" />
    </Switch>
  </Router>
);

export { Routes };
