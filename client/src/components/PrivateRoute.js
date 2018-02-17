import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { 
  BrowserRouter as Router, Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Auth from './Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => 
        Auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { 
                from: props.location,
                
              }
            }}
          />
        )
      }
    />
  );

export default PrivateRoute;