import React from "react";
import { Switch, Redirect } from "react-router-dom";
import AddNewUser from "../components/addnewuser";
import Applicant from "../components/applicant";
import ApplicantReview from "../components/applicantsreview";
import CompanySettings from "../components/company";
import DepartmentAndTeam from "../components/company/departmentandteams";
import TestingLocations from "../components/company/testlocations";
import EditUser from "../components/editusers";
import Interview from "../components/interview";
import Jobs from "../components/jobs";
import MyInterviews from "../components/myinterviews";
import LoginPage from "../pages/loginpage";
import PrivateRoute from "./privateroutes/privateroute";
import PublicRoute from "./publicroutes/publicroute";
import ProtectedRoute from "./protectedroute";
import { useSelector } from "react-redux";

const AllRoutes = () => {
  const userDetailing = useSelector((state) => state.userDetails.userDetails);

  return (
    <React.Fragment>
      <Switch>
        <PublicRoute exact={true} path="/" component={LoginPage} />

        {userDetailing?.role_value > 30 && (
          <>
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
            <PrivateRoute path="/review" component={ApplicantReview} />
            {userDetailing?.role_value >= 30 && (
              <ProtectedRoute path="/myinterviews" component={MyInterviews} />
            )}
            <Redirect from="*" to="/applicant" />
          </>
        )}
        {userDetailing?.role_value === 30 ? (
          <>
            {console.log("VALUE", userDetailing?.role_value)}

            <ProtectedRoute path="/myinterviews" component={MyInterviews} />
            <Redirect from="/*" to="/myinterviews" />

            {/* {userDetailing?.role_value === 30 ? (
              <Redirect from="*" to="/myinterviews" />
            ) : (
              <Redirect from="*" to="/applicant" />
            )} */}
          </>
        ) : (
          <div>NOT ALLOWED</div>
        )}
      </Switch>
    </React.Fragment>
  );
};

export default AllRoutes;
