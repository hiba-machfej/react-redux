import { createStore, combineReducers, applyMiddleware } from 'redux';
import entriesReducers from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducers from '../reducers/modals.reducers.js';
import createSagaMiddleware from 'redux-saga';
import initSagas from '../sagas/index.js';

const Store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    combineReducers({
      entries: entriesReducers,
      modals: modalsReducers,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  initSagas(sagaMiddleware);
  return store;
};

export default Store;
