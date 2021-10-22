import React from "react";
import {
  SideBar,
  SideBarContainer,
  SideBarDiv,
  SideBarFilters,
  SideBarLine,
  SideBarLogo,
  SideBarSelect,
  SideBarTitle,
  SideBarUserIcon,
} from "./sidebar.style";
import MaterialIcons from "../../common/icons/index";
import Logo from "../../images/Logo.png";
import CustomSelect from "../select";
import CustomFilters from "../filters";
import Line from "../../common/underline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SettingsSideBar from "../settingssidebar";
import JobsSideBar from "../jobssidebar";
import ApplicantJobSidebarFilter from "../../components/applicant/applicantsidebarfilters";
import TestingJobFilters from "../../components/applicant/testfilters";

const Sidebar = () => {
  const counter = useSelector((state) => state.counter).counter;

  return (
    <SideBar>
      <SideBarContainer>
        <React.Fragment>
          <Link to="/">
            <SideBarLogo>
              <img src={Logo} alt="logo"></img>
            </SideBarLogo>
          </Link>
          <Link to="/">
            <SideBarTitle>PeopleX</SideBarTitle>
          </Link>
        </React.Fragment>
      </SideBarContainer>
      {counter === 0 ? (
        <React.Fragment>
          <SideBarSelect>
            <SideBarUserIcon>
              <MaterialIcons
                icon="group"
                style={{ color: "#000000" }}
              ></MaterialIcons>
            </SideBarUserIcon>
            <CustomSelect></CustomSelect>
          </SideBarSelect>

          <SideBarFilters>
            <CustomFilters></CustomFilters>
          </SideBarFilters>
          <SideBarLine>
            <Line width="80%" />
          </SideBarLine>
          <TestingJobFilters />
        </React.Fragment>
      ) : null}
      {counter === 1 || counter === 2 ? <SettingsSideBar /> : null}
      {counter === 3 ? <JobsSideBar /> : null}
    </SideBar>
  );
};

export default Sidebar;
