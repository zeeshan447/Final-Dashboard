import styled from "styled-components";

export const SettingsSidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
export const SettingsSidebarList = styled.ul`
  list-style: none;
`;

export const SettingsSidebarListItems = styled.li`
  font-family: mulish;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  padding: 10px 0px 10px 5px;
  border-radius: 4px;
  width: 281px;
  background-color: ${(props) => (props.active ? "#38a6f5" : "white")};
  color: ${(props) => (props.active ? "white" : "#000000")};

  :hover {
    background-color: #38a6f5;
    border-radius: 4px;
    color: white;
  }
`;
