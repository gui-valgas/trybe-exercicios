import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from '../redux/reducers/counterReducer'
import thunk from 'redux-thunk';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      combineReducers({ counterReducer }),
      initialState,
      applyMiddleware(thunk)
      )} = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;