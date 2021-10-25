import styled from "styled-components";
import { Modal } from "antd";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dfe1e6;
`;

export const HeaderTitle = styled.h1`
  font-family: Mulish;
  font-weight: 700;
  font-size: 28.83px;
  line-height: 24px;
  color: #000000;
  margin-left: 1.5%;
`;

export const JobPostingDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 7%;
  padding-bottom: 1%;
`;

export const PostingInput = styled.input`
  width: 264px;
  height: 40px;
  background: #f4f5f7;
  border-radius: 8px;
  outline: none;
  border: none;
  padding-left: 4%;
  margin-right: 4%;

  ::placeholder {
    font-family: Mulish;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #55565a;
  }
`;

export const AddJobPostingButton = styled.button`
  width: 146px;
  height: 40px;
  background: #38a6f5;
  border-radius: 8px;
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const JobsHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const JobDepartmentDropdown = styled.div`
  margin-right: 2%;
  margin-left: 2%;
`;
export const JobLocationDropdown = styled.div`
  margin-right: 2%;
`;
export const JobOwnerDropdown = styled.div`
  margin-right: 2%;
`;

export const FilterText = styled.h2`
  margin-top: 4%;
  margin-left: 4%;
  display: flex;
  flex-direction: row;
`;

export const FiltersText = styled.h2`
  font-family: mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  margin-top: 1%;
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
  margin-top: 4.35%;
  margin-left: 5%;
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

export const JobModal = styled(Modal)`
  width: "1000px";

  height: "740px";
  .ant-modal-body {
    padding: 0px !important;
  }
`;

export const DepartmentSelectDiv = styled.div`
  margin-left: 2%;
`;
