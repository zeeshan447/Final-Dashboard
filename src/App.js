import React, { useState } from "react";
import NavBar from "./templates/navbar";
import Sidebar from "./templates/sidebar/index";
import Applicant from "./components/applicant/index";
import { Switch, Route, Redirect } from "react-router-dom";
import EditUser from "./components/editusers";
import Interview from "./components/interview";
import AddNewUser from "./components/addnewuser";
import LoginPage from "./pages/loginpage";
import CompanySettings from "./components/company";
import CompanyLocations from "./components/company/locations";
import DepartmentAndTeam from "./components/company/departmentandteams";
import { useDispatch } from "react-redux";
import Jobs from "./components/jobs";
import Dashboard from "./dashboard";
import { useSelector } from "react-redux";
import PrivateRoute from "./routes/privateroutes/privateroute";
import {
  NavOuter,
  SidebarDivContainer,
  SidebarOuter,
} from "./dashboard/dashboard.style";
import { PublicRoute } from "./routes/publicroutes/publicroute";
import ApplicantReview from "./components/applicantsreview";
import TestingLocations from "./components/company/testlocations";
import MyInterviews from "./components/myinterviews";

function App(props) {
  const isLoggedIn = useSelector((state) => state.isAuthenticated);

  console.log("Logged In State", isLoggedIn);

  setTimeout(() => {
    //props.history.push("");
  });
  return (
    <React.Fragment>
      {/* <Dashboard /> */}
      {/* {isLoggedIn ? (
        <PrivateRoute path="/dashboard" component={Dashboard} />
      ) : (
        <Redirect to="/login" />
      )}
      <LoginPage /> */}
      <Switch>
        <PrivateRoute path="/applicant" component={Applicant} />
        <PrivateRoute path="/edituser" component={EditUser} />
        <PrivateRoute path="/interview" component={Interview} />
        <PrivateRoute path="/adduser" component={AddNewUser} />
        <PrivateRoute path="/company" component={CompanySettings} />
        <PrivateRoute path="/locations" component={TestingLocations} />
        <PrivateRoute
          path="/departmentsandteams"
          component={DepartmentAndTeam}
        />
        <PrivateRoute path="/jobs" component={Jobs} />
        <PublicRoute exact={true} path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/review" component={ApplicantReview} />
        <PrivateRoute path="/myinterviews" component={MyInterviews} />
        {/* <Redirect from="*" to="/applicant" /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
