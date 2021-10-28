import styled from "styled-components";
import { Input } from "antd";

export const MailCandidateDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4%;
`;

export const MailCandidateTitle = styled.h1`
  font-family: Mulish;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
`;

export const MailCandidateLabels = styled.h3`
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: white;
  margin-top: 2%;
`;

export const MailCandidateToInput = styled.input`
  width: 963px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding-left: 2%;
  border: none;
  outline: none;
  ::placeholder {
    font-family: Mulish;
    font-weight: 400;
    font-size: 14.22px;
    line-height: 24px;
    color: #7a869a;
  }
`;
export const MailSubjectInput = styled.input`
  width: 963px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding-left: 2%;
  border: none;
  outline: none;
  ::placeholder {
    font-family: Mulish;
    font-weight: 400;
    font-size: 14.22px;
    line-height: 24px;
    color: #7a869a;
  }
`;

export const MailCandidateCCInput = styled.input`
  width: 963px;
  height: 40px;

  background: #ffffff;

  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding-left: 2%;
  border: none;
  outline: none;
  ::placeholder {
    font-family: Mulish;
    font-weight: 400;
    font-size: 14.22px;
    line-height: 24px;
    color: #7a869a;
  }
`;

export const MailCandidateBody = styled(Input)`
  background: #ffffff;

  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const MailCandidateSendDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 4%;
  margin-right: 1.5%;
`;

export const DiscardButton = styled.button`
  background: transparent;
  width: 119px;
  height: 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: Mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ScheduleButton = styled.button`
  background: #40a9ff;
  width: 119px;
  height: 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: Mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
`;
