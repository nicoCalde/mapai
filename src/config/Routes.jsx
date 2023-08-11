import React from 'react';
import { Route, Switch } from 'react-router-dom'; // Import Switch from named exports

import Home from '../pages/Home';
import Maps from '../pages/Maps';

const Routes = () => {
  return (
    <Switch>
      <Route path='/mapai/mapas' component={Maps}/>
      <Route path='/mapai' exact component={Home}/>
    </Switch>
  );
}

export default Routes;
