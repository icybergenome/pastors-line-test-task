import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as dotenv from 'dotenv';
import storeConfig from './store/configureStore';
import { history } from './routing/history';
import Routes from './routing/Routing';

dotenv.config();

function App() {
  useEffect(() => {
    dotenv.config();
  }, []);

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
