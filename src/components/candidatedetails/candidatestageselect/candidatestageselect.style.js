import styled from "styled-components";
import { Select } from "antd";

export const AddCandidateStageSelect = styled(Select)`
  width: 219px;
  height: 48px;
  border-radius: 8px;
  color: #7a869a;
  .ant-select-selection-placeholder {
    /* background-color: #38a6f5; */
    color: #7a869a !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    font-weight: 400 !important;
  }
  .ant-select-selection-search {
    /* background-color: #38a6f5; */
    color: white !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    font-weight: 400 !important;
  }
  .ant-select-selector {
    background-color: #f4f5f7 !important;
    color: #7a869a !important;
    height: 48px !important;
    overflow: auto !important;
    padding-top: 2% !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
  }
  .ant-select-arrow {
    color: #55565a !important;
    padding-top: 1% !important;
    font-size: 12px;
  }
`;
