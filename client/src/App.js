import React, {createContext, useReducer, useEffect} from 'react';
import {reducer, initialState} from './reducers/userReducer';
import {BrowserRouter, history, useHistory} from 'react-router-dom';
import Authentication from './routes/Authentication';
import Student from './routes/Student';
import Teacher from './routes/Teacher';
import './App.css';

export const UserContext = createContext ();

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
      <UserContext.Provider value={{state, dispatch}}>
        <Teacher />
      </UserContext.Provider>
    );
  } else if (user && user.role === 'Student') {
    console.log ('Student');
    return (
      <UserContext.Provider value={{state, dispatch}}>
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
