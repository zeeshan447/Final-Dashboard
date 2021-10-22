// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Dashboard from "../../dashboard";
// import LoginPage from "../../pages/loginpage";
// import PrivateRoute from "../privateroutes/privateroute";

// const PublicRoute = () => {
//   return (
//     <Switch>
//       <Route exact path="/login" component={LoginPage} />
//       <PrivateRoute path="/dashboard" component={Dashboard} />
//     </Switch>
//   );
// };

// export default PublicRoute;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

// export const PrivateRoute = ({ isAuthenticated,component: Component, ...rest }) => {
//   return <Route {...rest} render={(props) =>

//     <Component {...props} />} />;
// };

export const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.users);
  console.log("Authenticated", isAuthenticated);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated && localStorage.getItem("access_token") ? (
          <Redirect to="/applicant" />
        ) : (
          // Component.history.push("/dashboard")
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
