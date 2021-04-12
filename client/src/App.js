import React, {useEffect, createContext, useReducer, useContext} from 'react';
import Globalstyles from './globalStyles';
import Intropage from './pages/Intropage/Intropage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './shared/Home';
import {reducer, initialState} from './reducers/userReducer';
import './App.css';
import Teacher from './components/Teacher';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import CreateCourse from './pages/CreateCourse';

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
      if (!history.location.pathname.startsWith ('/reset')) history.push ('/');
      else if (!history.location.pathname.startsWith ('/createcourse'))
        history.push ('/createcourse');
    }
  }, []);
  return (
    <div>
      <Globalstyles />
      <Switch>
        <Route exact path="/">
          <Intropage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/teacher">
          <Teacher />
        </Route>
        <Route exact path="/reset">
          <ForgotPassword />
        </Route>
        <Route path="/reset/:token">
          <ResetPassword />
        </Route>
        <Route exact path="/createcourse">
          <CreateCourse />
        </Route>
      </Switch>
    </div>
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
