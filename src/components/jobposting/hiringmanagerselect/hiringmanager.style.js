import styled from "styled-components";
import { Select } from "antd";

export const PostingOwnerSelect = styled(Select)`
  width: 200.51px;
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
    width: 166.51px !important;

    border: none !important;
    color: black !important;
    height: 40px !important;
    overflow: auto !important;
    padding-top: 4% !important;
    font-family: mulish !important;
    font-size: 12px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    outline: none !important;
  }
  .ant-select-arrow {
    color: black !important;
    font-size: 12px;
  }
`;
