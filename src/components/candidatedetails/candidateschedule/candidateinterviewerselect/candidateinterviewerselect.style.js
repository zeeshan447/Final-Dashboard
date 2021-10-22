import styled from "styled-components";
import { Select } from "antd";

export const CandidateInterviewerSelect = styled(Select)`
  width: 500px;
  border-radius: 8px;
  .ant-select-selector {
    height: auto !important;
    min-height: 40px !important;
  }
`;
