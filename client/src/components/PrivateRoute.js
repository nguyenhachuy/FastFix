import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { 
  BrowserRouter as Router, Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Cookies.get('token') ? (
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