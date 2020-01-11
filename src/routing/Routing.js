import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Contacts from '../containers/Contacts/Contacts';

const Routing = () => {
  const allContacts = () => {
    return <Contacts contactTypes="all" />;
  };

  const usContacts = () => {
    return <Contacts contactTypes="us" />;
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/all-contacts" component={allContacts} />
      <Route path="/us-contacts" component={usContacts} />
    </Switch>
  );
};

export default Routing;
