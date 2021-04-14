import React, {createContext} from 'react';
import Home from '../shared/Home';
import CreateCourse from '../pages/CreateCourse';
import CreateEvent from '../pages/CreateEvent';
import CreateBlog from '../pages/CreateBlog';
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
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Teacher;
