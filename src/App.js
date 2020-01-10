import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/configureStore';
import { history } from './routing/history';
import Routes from './routing/Routing';

function App() {
  const store = storeConfig();
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
