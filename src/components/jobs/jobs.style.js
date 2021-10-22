import styled from "styled-components";

export const JobsHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilterText = styled.h2`
  font-family: mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  padding: 2% 0 0 4%;
`;

export const FiltersSelect = styled.div``;

export const JobsBody = styled.div`
  width: 100%;
`;

export const ClearFilterButton = styled.div`
  width: 80px;
  height: 24px;
  font-family: mulish;
  font-size: 14.22px;
  line-height: 24px;
  margin-top: 4%;
  cursor: pointer;
  :hover {
    color: #38a6f5;
  }
`;

export const OpenJobDepartmentName = styled.h1`
  width: 200px;
  height: 32px;
  font-family: mulish;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  margin-left: 4%;
  margin-top: 2%;
`;

export const JobTableDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 500px;
`;
