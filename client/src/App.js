import React, {useEffect, createContext, useReducer, useContext} from 'react';
import Globalstyles from './globalStyles';
import Intropage from './shared/Intropage/Intropage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './shared/Home/Home';
import {reducer, initialState} from './reducers/userReducer';
import './App.css';
import Teacher from './components/Teacher';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

export const UserContext = createContext ();

const Routing = () => {
  const history = useHistory ();
  const {state, dispatch} = useContext (UserContext);
  useEffect (() => {
    const user = JSON.parse (localStorage.getItem ('user'));
    if (user) {
      dispatch ({type: 'USER', payload: user});
      history.push ('/home');
    } else {
      history.push ('/');
    }
  }, []);
  return (
    <Switch>
      <Router>
        <Globalstyles />
        <Route exact path="/">
          <Intropage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/teacher">
          <Teacher />
        </Route>
        <Route path="/forgotpass">
          <ForgotPassword />
        </Route>
      </Router>
    </Switch>
  );
};

function App () {
  const [state, dispatch] = useReducer (reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <Routing />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
