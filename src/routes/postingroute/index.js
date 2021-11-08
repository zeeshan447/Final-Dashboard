import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../../dashboard";
import {
  NavOuter,
  SidebarDivContainer,
  SidebarOuter,
} from "../../dashboard/dashboard.style";
import Sidebar from "../../templates/sidebar";
import NavBar from "../../templates/navbar";
import { useDispatch } from "react-redux";

// export const PrivateRoute = ({ isAuthenticated,component: Component, ...rest }) => {
//   return <Route {...rest} render={(props) =>

//     <Component {...props} />} />;
// };

export const PostingRoute = ({ children, component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.users);
  console.log("Authenticated", isAuthenticated);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "dashboard" });
  // }, []);

  return (
    <Route
      {...rest}
      // render={() => children}
      component={(props) =>
        isAuthenticated && localStorage.getItem("access_token") ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PostingRoute;
