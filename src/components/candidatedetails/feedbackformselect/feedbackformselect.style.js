import styled from "styled-components";
import { Select } from "antd";

export const FeedbackFormDropdown = styled(Select)`
  width: 163px;
  font-family: Mulish;
  color: #55565a;
  font-size: 12.64px;
  line-height: 24px;
  font-weight: 400;
  .ant-select-selector {
    height: 40px !important;
    padding-top: 2% !important;
  }
  .ant-select-selection-placeholder {
    /* background-color: #38a6f5; */
    margin-top: 1% !important;
    cursor: pointer !important;
  }
`;
