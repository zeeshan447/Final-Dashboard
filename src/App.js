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
import AllRoutes from "./routes";

function App(props) {
  const isLoggedIn = useSelector((state) => state.isAuthenticated);
  const userDetailing = useSelector((state) => state.userDetails.userDetails);

  console.log("Logged In State", isLoggedIn);

  return (
    <React.Fragment>
      <AllRoutes />
    </React.Fragment>
  );
}

export default App;
