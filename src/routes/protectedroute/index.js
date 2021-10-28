import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../../dashboard";
import {
  NavbarOuterMyInterviews,
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

export const ProtectedRoute = ({ children, component: Component, ...rest }) => {
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
            <SidebarOuter>
              <NavbarOuterMyInterviews>
                <NavBar />
                <Component {...props} />
              </NavbarOuterMyInterviews>
            </SidebarOuter>
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
