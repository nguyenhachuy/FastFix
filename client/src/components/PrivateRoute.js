import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { 
  BrowserRouter as Router, Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Auth from './Auth';
const verifyPath = (props) => {
  if(props.location.pathname === ('/' + Cookies.get('type')))
    return true;
  else {
    return false;
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => 
        (Cookies.get('id') && verifyPath(props)) ? (
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