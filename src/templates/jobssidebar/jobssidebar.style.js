import styled from "styled-components";

export const JobSettingsSidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;
export const JobSettingsSidebarList = styled.ul`
  list-style: none;
`;

export const JobSettingsSidebarListItems = styled.li`
  font-family: mulish;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: #000000;
  padding: 10px 0px 10px 5px;
  :hover {
    background-color: #38a6f5;
    border-radius: 4px;
    color: white;
    width: 80%;
  }
`;
export const JobSettingsSideBarIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const JobSettingsSideBarIcon = styled.div`
  width: 30px;
`;

export const JobSettingsFilter = styled.div`
  margin-left: 2%;
`;
