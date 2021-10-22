import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AddNewUser from "../components/addnewuser";
import Applicant from "../components/applicant";
import CompanySettings from "../components/company";
import DepartmentAndTeam from "../components/company/departmentandteams";
import CompanyLocations from "../components/company/locations";
import EditUser from "../components/editusers";
import Interview from "../components/interview";
import Jobs from "../components/jobs";
import NavBar from "../templates/navbar";
import Sidebar from "../templates/sidebar";
import { NavOuter, SidebarDivContainer, SidebarOuter } from "./dashboard.style";
import { useDispatch } from "react-redux";
import PublicRoute from "../routes/publicroutes/publicroute";
import PrivateRoute from "../routes/privateroutes/privateroute";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "dashboard" });
  }, []);

  return (
    <React.Fragment>
      <SidebarOuter>
        <SidebarDivContainer>
          <Sidebar />
        </SidebarDivContainer>
        <NavOuter>
          <NavBar />
        </NavOuter>
      </SidebarOuter>
    </React.Fragment>
  );
};

export default Dashboard;
