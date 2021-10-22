import styled from "styled-components";

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
