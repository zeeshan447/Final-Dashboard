import styled from "styled-components";

export const DeapartmentTeamHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DepartmentTeamCompany = styled.div`
  width: 105px;
  height: 24px;
  font-family: mulish;
  font-weight: 700;
  font-size: 28.83px;
  line-height: 24px;
  color: #000000;
  margin-top: 51px;
  padding-left: 73px;
`;

export const DepartmentTeamSubHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  padding-left: 65px;
  justify-content: flex-end;
  width: 73%;
`;

export const DepartmentTeamInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DepartmentTeamInput = styled.input`
  width: 341px;
  height: 40px;
  border-radius: 8px;
  font-family: mulish;
  padding-left: 10px;
  border: 1px solid #dfe1e6;
  outline: 0px;

  ::placeholder {
    font-family: mulish;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const DepartmentTeamAddlabel = styled.div`
  margin-top: 2%;
  font-family: mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => (props.active ? "#55565A" : "#C4C4C4")};
`;

export const DepartmentTeamAddDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DepartmentTeamAddButton = styled.button`
  width: 225px;
  height: 40px;
  border-radius: 4px;
  background-color: #38a6f5;
  color: #ffffff;
  font-family: mulish;
  font-size: 16px;
  line-height: 24px;
  border: 0px;
  outline: 0px;
  cursor: pointer;
  margin-left: 70%;
`;
export const DepartmentTeamSelect = styled.div``;

export const DepartmentTeamTableDiv = styled.div`
  margin-left: 3.5%;
  margin-top: 1%;
  width: 80%;
`;

export const DepartmentTeamTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-family: mulish;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 2%;
  margin-left: 1%;
  width: 400px;
`;

export const DepartmentAddTeamButton = styled.button`
  width: 111px;
  height: 42px;
  border-radius: 5px;
  color: white;
  font-family: mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  background-color: ${(props) => (props.active ? "#38A6F5" : "#C4C4C4")};
  margin-top: 2%;
  border: none;
  outline: none;
`;
