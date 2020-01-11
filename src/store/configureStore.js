import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import contactsSaga from './sagas/contacts';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const isDev = !process.env.production;
  const composeEnhancers =
    (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(contactsSaga);

  return store;
}
