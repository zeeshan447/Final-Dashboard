import styled from "styled-components";

export const ApplicantJobSidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4%;
  height: 200px;
  overflow: auto;
`;
export const ApplicantJobSidebarList = styled.ul`
  list-style: none;
`;

export const ApplicantJobSidebarListItems = styled.li`
  font-family: mulish;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  padding: 15px 0px 10px 5px;
  border-radius: 4px;
  width: 281px;
  background-color: ${(props) => (props.active ? "#38a6f5" : "white")};
  color: ${(props) => (props.active ? "#000000" : "#828A98")};

  :hover {
    background-color: #38a6f5;
    border-radius: 4px;
    color: white;
  }
`;
export const ApplicantJobSidebarListCount = styled.div`
  margin-left: 5%;
`;

export const ApplicantJobFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const JobCount = styled.h3`
  font-family: Mulish;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #828a98;
  margin-right: 4%;
  margin-top: 3%;
`;
