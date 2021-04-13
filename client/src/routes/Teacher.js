import React, {createContext} from 'react';
import Home from '../shared/Home';
import CreateCourse from '../pages/CreateCourse';
import CreateEvent from '../pages/CreateEvent';
import {BrowserRouter, Route} from 'react-router-dom';

export const UserContext = createContext ();
const Teacher = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home} />
      <Route exact path="/createcourse" component={CreateCourse} />
      <Route exact path="/createevent" component={CreateEvent} />
      {/* <Route render={() => <Redirect to="/home" />} /> */}
    </BrowserRouter>
  );
};

export default Teacher;
