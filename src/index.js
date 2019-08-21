import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

// use store.dispatch() and map view data loading actions?

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
