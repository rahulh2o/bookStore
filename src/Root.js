import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import React from 'react';
import thunk from 'redux-thunk';

const Root = (props) => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      {props.children}
    </Provider>
  );
};

export default Root;
