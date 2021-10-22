import styled from "styled-components";

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
  height: auto;
  min-height: ${(props) => (props.active ? "71px" : "48px")};
  border: ${(props) => (props.active ? "none" : "1px solid #7a869a")};
  outline: none;
  padding-left: 5%;
  transition: min-height 0.5s;
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
  margin-left: 16%;
`;

export const AddCandidateScheduleButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-left: 2%;
`;

export const AddCandidateScheduleButtons = styled.button`
  width: 189px;
  height: 48px;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-right: 8px;
  cursor: pointer;
  background-color: #38a6f5;
  font-family: mulish;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: white;
`;

export const AddCandidateTabsDiv = styled.div`
  margin-left: 2%;
`;
