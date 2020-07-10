import React from 'react';
import { Routes } from './Routes';
import { Header } from './components/layout';

const App = () => {
  return (
    <div className="App">
      <Header title="The Phones App" />
      <Routes />
    </div>
  );
};

export default App;
