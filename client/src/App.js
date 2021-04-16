import React, {createContext, useReducer, useEffect} from 'react';
import {reducer, initialState} from './redux/reducers/index';
import {BrowserRouter, history, useHistory} from 'react-router-dom';
import Authentication from './routes/Authentication';
import Student from './routes/Student';
import Teacher from './routes/Teacher';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/index';
export const UserContext = createContext ();

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

function App () {
  const [state, dispatch] = useReducer (reducer, initialState);
  const history = useHistory ();
  const user = JSON.parse (localStorage.getItem ('user'));
  useEffect (() => {
    const user = JSON.parse (localStorage.getItem ('user'));
    if (user) {
      dispatch ({type: 'USER', payload: user});
      // history.push ('/home');
    }
  }, []);
  if (user && user.role === 'Teacher') {
    console.log ('Teacher');
    return (
      <UserContext.Provider value={{state, dispatch}} store={store}>
        <Teacher />
      </UserContext.Provider>
    );
  } else if (user && user.role === 'Student') {
    console.log ('Student');
    return (
      <UserContext.Provider value={{state, dispatch}} store={store}>
        <BrowserRouter>
          <Student />
        </BrowserRouter>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{state, dispatch}}>
        <Authentication />
      </UserContext.Provider>
    );
  }
}

export default App;
