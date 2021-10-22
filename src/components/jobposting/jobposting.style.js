import styled from "styled-components";
import { Select } from "antd";
import { Input, Avatar } from "antd";

export const JobPostingMainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const JobPostingDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 3%;
  margin-left: 2%;
`;

export const JobPostingSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #f4f5f7;
`;

export const JobPostingTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const JobPostingTitle = styled.h1`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
`;

export const JobPostingButton = styled.button`
  width: 137px;
  height: 40px;
  background: #38a6f5;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Mulish;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 10%;
`;

export const JobPostingTitleInput = styled.input`
  width: 617px;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  margin-top: 2%;
  padding-left: 2%;
  font-family: Mulish;
  font-size: 14.22px;
  line-height: 24px;
  color: #7a869a;
  font-weight: 400;
  ::placeholder {
    font-family: Mulish;
    font-size: 14.22px;
    line-height: 24px;
    color: #7a869a;
    font-weight: 400;
  }
`;

export const JobPostingSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
  margin-right: 10%;
`;

export const JobPostingSelect = styled(Select)`
  width: 195px;
  .ant-select-selection-placeholder {
    /* background-color: #38a6f5; */
    color: #7a869a !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    font-weight: 400 !important;
    margin-top: 3% !important;
  }
`;

export const JobPostingDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;

export const JobPostingDescriptionTitle = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #7a869a;
`;

export const JobPostingDescription = styled(Input)`
  font-family: Mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  width: 618px;
`;

export const RequirementTitle = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #7a869a;
  margin-top: 2%;
`;

export const AddListButton = styled.button`
  width: 80px;
  height: 40px;
  background: #7a869a;
  border-radius: 8px;
  font-family: Mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  outline: none;
`;

export const ClosingDescriptionTitle = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #7a869a;
  margin-top: 4%;
`;

export const ClosingDescription = styled(Input)`
  font-family: Mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  width: 618px;
`;

export const AddQuestionTitle = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #7a869a;
  margin-top: 2%;
`;

export const AddCustomQuestion = styled.button`
  width: 171px;
  height: 40px;
  background: #7a869a;
  border-radius: 8px;
  font-family: Mulish;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  outline: none;
  margin-bottom: 3%;
`;

export const JobSidebarPostingOwnerTitle = styled.h2`
  font-family: Mulish;
  font-size: 16px;
  line-height: 24px;

  font-weight: 700;
  color: #000000;
`;

export const JobPostingDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  margin-left: 8%;
`;

export const PostingOwnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
`;

export const LineSpace = styled.hr`
  margin-top: 10%;
  width: 200px;
  border-top: 1px solid #dfe1e6;
`;
export const PostingOwnerAvatar = styled(Avatar)`
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "fffff")};

  margin-top: 2%;
`;

export const PostingOwnerSelect = styled(Select)`
  width: 166.51px;
  .ant-select-selection-placeholder {
    /* background-color: #38a6f5; */
    color: black !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
  }
  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    color: white !important;
    height: 40px !important;
    overflow: auto !important;
    padding-left: 15% !important;
    padding-top: 6% !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    outline: none !important;
  }
  .ant-select-arrow {
    color: black !important;
    font-size: 12px;
  }
`;
