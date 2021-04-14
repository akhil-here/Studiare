import React, {createContext} from 'react';
import Home from '../shared/Home';
import Courses from '../pages/Courses';
import BlogList from '../pages/BlogList';
import EventList from '../pages/EventList';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

export const UserContext = createContext ();
const Student = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/allcourseslist" component={Courses} />
        <Route exact path="/allblogslist" component={BlogList} />
        <Route exact path="/alleventslist" component={EventList} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Student;
