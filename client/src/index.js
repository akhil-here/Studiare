import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/index';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem ('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse (serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify (state);
    localStorage.setItem ('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const persistedState = loadState ();

const store = createStore (rootReducer, persistedState);

store.subscribe (() => {
  saveState (store.getState ());
});

ReactDOM.render (
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <NotificationContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById ('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
