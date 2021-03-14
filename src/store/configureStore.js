import { createStore, combineReducers, applyMiddleware } from 'redux';
import EntriesReducers from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = () => {
  return createStore(
    combineReducers({
      entries: EntriesReducers,
    }),
    composeWithDevTools()
  );
};

export default Store;
