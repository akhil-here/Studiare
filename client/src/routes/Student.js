import React, {createContext} from 'react';
import Home from '../shared/Home';
import Courses from '../pages/Courses/Courses';
import CourseCat from '../pages/Courses/CourseCat';
import BlogList from '../pages/Blogs/BlogList';
import BlogCat from '../pages/Blogs/BlogCat';
import EventList from '../pages/Events/EventList';
import EventDetails from '../pages/Events/EventDetails';
import BlogDetails from '../pages/Blogs/BlogDetails';
import Cart from '../pages/Checkout/Cart';
import CourseDetails from '../pages/Courses/CourseDetails';
import Checkout from '../pages/Checkout/Checkout';
import UserProfile from '../pages/Profile/UserProfile';
import TeachersProfile from '../pages/Profile/TeacherProfile';
import SingleTeacher from '../pages/Profile/SingleTeacher';
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
        <Route exact path="/allcourseslist/:id" component={CourseDetails} />
        <Route exact path="/allcourses/:category" component={CourseCat} />
        <Route exact path="/allblogs/:category" component={BlogCat} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/teachersprofile" component={TeachersProfile} />
        <Route exact path="/teacher/:id" component={SingleTeacher} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Student;
