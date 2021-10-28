import styled from "styled-components";
import { Modal } from "antd";

export const InterviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5%;
  margin-left: 3%;
`;

export const InterviewTitle = styled.h1`
  font-family: Mulish;
  font-weight: 700;
  font-size: 28.83px;
  line-height: 24px;
  color: #000000;
`;

export const InterviewDetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
`;

export const InterviewDateTimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const DateTimeDetails = styled.h2`
  font-family: Mulish;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #55565a;
  margin-left: 1%;
  width: 200px;
`;
export const CandidateEvaluationModal = styled(Modal)`
  /* height: 260px; */
  /* background-color: #55565a; */
  border-radius: 8px;
  .ant-modal-body {
    /* padding: 0px !important; */
    background-color: #f4f5f7 !important;
    min-height: 260px !important;
    height: auto !important;
  }
  .ant-modal {
    border-radius: 8px !important;
  }
`;
