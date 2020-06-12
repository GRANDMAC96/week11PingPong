import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
// import initial from "./data/initial";
// import reducers from "./data/reducers";
import store from "./data/store";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

