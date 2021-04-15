import React from 'react';
import Globalstyles from '../globalStyles';
import Intropage from '../pages/Intropage/Intropage';
import Login from '../pages/Authentication/Login';
import Signup from '../pages/Authentication/Signup';
import ForgotPassword from '../pages/Authentication/ForgotPassword';
import ResetPassword from '../pages/Authentication/ResetPassword';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

const Authentication = () => {
  return (
    <div>
      <BrowserRouter>
        <Globalstyles />
        <Switch>
          <Route exact path="/" component={Intropage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Authentication;
