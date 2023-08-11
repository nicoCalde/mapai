import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './config/Routes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Routes}/>
    </BrowserRouter>
  );
};

export default App;
