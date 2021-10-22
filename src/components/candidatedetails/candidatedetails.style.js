import styled from "styled-components";
import { Modal } from "antd";

export const AddCandidateDiv = styled.div`
  display: flex;
`;

export const AddCandidateNoteDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AddCandidateNoteInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 149px;
  background-color: ${(props) => (props.active ? " #f4f5f7  " : "#fffff")};
`;

export const AddCandidateNoteInput = styled.input`
  width: 324px;
  border-radius: 8px;
  background-color: #ffffff;
  font-family: mulish;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  height: ${(props) => (props.active ? "71px" : "48px")};
  border: ${(props) => (props.active ? "none" : "1px solid #7a869a")};
  outline: none;
  padding-left: 5%;
  transition: height 0.5s;
  margin-top: 5%;
  margin-left: 5%;

  ::placeholder {
    color: #7a869a;
    font-family: mulish;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const AddCandidateAddNoteButton = styled.button`
  width: 99px;
  height: 32px;
  background-color: #38a6f5;
  color: white;
  font-family: mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-top: 2%;
  align-self: end;
  margin-right: 5%;
  cursor: pointer;
`;

export const AddCandidateStageDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AddCandidateStageSelect = styled.div`
  margin-top: 2%;
  margin-left: 13%;
`;

export const AddCandidateScheduleButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-left: 2%;
`;

export const AddCandidateScheduleButtons = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #f4f5f7;
  font-family: mulish;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 8px;
`;

export const AddCandidateTabsDiv = styled.div`
  margin-left: 2%;
`;

export const AddScheduleModal = styled(Modal)`
  /* height: 260px; */
  /* background-color: #55565a; */
  border-radius: 8px;
  .ant-modal-body {
    /* padding: 0px !important; */
    background-color: #55565a !important;
    min-height: 260px !important;
    height: auto !important;
  }
  .ant-modal {
    border-radius: 8px !important;
  }
`;

export const CandidateHistory = styled.div`
  background-color: #f4f5f7;
  border-radius: 0px 8px 8px 8px;
  margin-top: 2%;
`;

export const CandidateHistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 60%;
  height: 150px;
`;
export const CandidateIntervieweType = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-left: 4%;
`;

export const CandidateHiringManagerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeleteInterviewStatusButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  color: red;
  cursor: pointer;
`;

export const CandidateHiringManager = styled.h3`
  font-family: Mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  color: #000000;
  margin-left: 4%;
`;

export const DateTimeInterviewerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const DateTimeInterviewer = styled.div`
  font-family: Mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  color: #000000;
  margin-left: 4%;
`;
