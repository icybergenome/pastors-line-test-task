import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../containers/Home/Home';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routing;
