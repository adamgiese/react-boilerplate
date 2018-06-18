/* global document, window */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App.jsx';
import initialState from './services/initialState';
import reducer from './services/reducer';
import firebase from './services/firebase';
import { setUser } from './services/actions';
/* eslint-ensable no-unused-vars */

// styling
require('./../scss/styles.scss');

WebFont.load({
  google: {
    families: ['Lato'],
  },
});

// polyfill for older browswers
require('es6-promise').polyfill();

/* eslint-disable no-underscore-dangle */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

// setup store
const store = createStore(
  reducer,
  initialState,
  reduxDevTools,
);

// signin user

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(setUser(user));
  }
});

// app init
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
