import styled from "styled-components";
import { Table } from "antd";
import { Modal } from "antd";

export const JobDepartmentTable = styled(Table)`
  height: auto;
`;

export const JobModal = styled(Modal)`
  width: "1000px";

  height: "740px";
  .ant-modal-body {
    padding: 0px !important;
  }
`;
