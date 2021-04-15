import React from 'react';

import {Route, Redirect} from 'react-router-dom';

const AuthCheck = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={async props => {
        //   auth check
        let authCheck;
        try {
          const data = await fetch ('/authCheck');
          authCheck = data.data;
        } catch (error) {
          authCheck = false;
        }
        if (authCheck) {
          return <Component {...rest} {...props} />;
        } else {
          // redirect to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default AuthCheck;
