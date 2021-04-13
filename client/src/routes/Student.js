import React, {createContext} from 'react';
import Home from '../shared/Home';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

export const UserContext = createContext ();
const Student = () => {
  return (
    <BrowserRouter>
      <Route exact path="/home" component={Home} />
      {/* <Route render={() => <Redirect to="/home" />} /> */}
    </BrowserRouter>
  );
};

export default Student;
