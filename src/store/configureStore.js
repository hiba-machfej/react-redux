import { createStore, combineReducers } from 'redux';
import entriesReducers from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalsReducers from '../reducers/modals.reducers.js';

const Store = () => {
  return createStore(
    combineReducers({
      entries: entriesReducers,
      modals: modalsReducers,
    }),
    composeWithDevTools()
  );
};

export default Store;
