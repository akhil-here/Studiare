import React, {createContext} from 'react';
import Home from '../shared/Home';
import CreateCourse from '../pages/CreateCourse';
import CreateEvent from '../pages/CreateEvent';
import CreateBlog from '../pages/CreateBlog';
import Courses from '../pages/Courses';
import BlogList from '../pages/BlogList';
import EventList from '../pages/EventList';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

export const UserContext = createContext ();
const Teacher = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/createcourse" component={CreateCourse} />
        <Route exact path="/createevent" component={CreateEvent} />
        <Route exact path="/createblog" component={CreateBlog} />
        <Route exact path="/allcourseslist" component={Courses} />
        <Route exact path="/allblogslist" component={BlogList} />
        <Route exact path="/alleventslist" component={EventList} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Teacher;
