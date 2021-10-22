import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  SettingsSidebarDiv,
  SettingsSidebarList,
  SettingsSidebarListItems,
} from "./settingssidebar.style";
import { SettingsSidebarData } from "../../data/settingssidebardata/index";
const SettingsSideBar = () => {
  const [activeButton, setActiveButton] = useState([]);
  const path = window.location.pathname;

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <React.Fragment>
      <SettingsSidebarDiv>
        <SettingsSidebarList>
          {SettingsSidebarData.map((data, i) => {
            return (
              <Link to={data.to}>
                <SettingsSidebarListItems
                  i={data.key}
                  width={data.width}
                  key={data.key}
                  onClick={() => handleClick(data.key)}
                  active={
                    path === data.to || path === data.to ? activeButton : null
                  }
                >
                  {data.name}
                </SettingsSidebarListItems>
              </Link>
            );
          })}
        </SettingsSidebarList>
      </SettingsSidebarDiv>
    </React.Fragment>
  );
};

export default SettingsSideBar;
