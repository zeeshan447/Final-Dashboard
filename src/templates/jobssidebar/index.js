import React, { useState } from "react";
import {
  JobSettingsFilter,
  JobSettingsSidebarDiv,
  JobSettingsSideBarIcon,
  JobSettingsSideBarIconDiv,
  JobSettingsSidebarList,
  JobSettingsSidebarListItems,
} from "./jobssidebar.style";
import { JobsSidebarData } from "../../data/jobssidebardata";

const JobsSideBar = () => {
  const [activeButton, setActiveButton] = useState([]);

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <React.Fragment>
      <JobSettingsSidebarDiv>
        <JobSettingsSidebarList>
          {/* <JobSettingsSidebarListItems>
            All open Jobs
          </JobSettingsSidebarListItems>
          <JobSettingsSidebarListItems>Drafts</JobSettingsSidebarListItems>
          <JobSettingsSidebarListItems>Closed</JobSettingsSidebarListItems>
          <JobSettingsSidebarListItems>Pending</JobSettingsSidebarListItems>
          <JobSettingsSidebarListItems>Rejected</JobSettingsSidebarListItems> */}

          {JobsSidebarData.map((data, i) => {
            return (
              <JobSettingsSidebarListItems
                key={data.id}
                onClick={() => handleClick(data.key)}
                active={data.key === activeButton ? activeButton : null}
              >
                <JobSettingsSideBarIconDiv>
                  <JobSettingsSideBarIcon>{data.icon}</JobSettingsSideBarIcon>
                  <JobSettingsFilter>{data.name}</JobSettingsFilter>
                </JobSettingsSideBarIconDiv>
              </JobSettingsSidebarListItems>
            );
          })}
        </JobSettingsSidebarList>
      </JobSettingsSidebarDiv>
    </React.Fragment>
  );
};

export default JobsSideBar;
