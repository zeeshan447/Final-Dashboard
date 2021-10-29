import styled from "styled-components";
import { Select } from "antd";

export const MailTemplatesSelect = styled(Select)`
  width: 200px;

  .ant-select-selector {
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    height: 40px !important;
    border: 1px solid #38a6f5 !important;
    padding-top: 2% !important;
  }
  .ant-select-selection-placeholder {
    /* background-color: #38a6f5; */
    color: #6b778c !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    padding-top: 3% !important;
  }
`;
