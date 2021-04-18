import React, {createContext} from 'react';
import Home from '../shared/Home';
import Courses from '../pages/Courses/Courses';
import BlogList from '../pages/Blogs/BlogList';
import EventList from '../pages/Events/EventList';
import EventDetails from '../pages/Events/EventDetails';
import BlogDetails from '../pages/Blogs/BlogDetails';
<<<<<<< HEAD
import User_Profile from '../pages/Profile/User_Profile';
=======
import Cart from '../pages/Checkout/Cart';
import CourseDetails from '../pages/Courses/CourseDetails';
import Checkout from '../pages/Checkout/Checkout';
import TeachersList from '../pages/Profile/TeachersList';
>>>>>>> 4913fb8ea723779f827ce239f2bbbbbcad79ee82
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

export const UserContext = createContext ();
const Student = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/allcourseslist" component={Courses} />
        <Route exact path="/allblogslist" component={BlogList} />
        <Route exact path="/alleventslist" component={EventList} />
        <Route exact path="/alleventslist/:id" component={EventDetails} />
        <Route exact path="/allblogslist/:id" component={BlogDetails} />
<<<<<<< HEAD
        <Route exact path="/User_Profile" component={User_Profile} />
=======
        <Route exact path="/allcourseslist/:id" component={CourseDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/teacherslist" component={TeachersList} />
>>>>>>> 4913fb8ea723779f827ce239f2bbbbbcad79ee82
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Student;
