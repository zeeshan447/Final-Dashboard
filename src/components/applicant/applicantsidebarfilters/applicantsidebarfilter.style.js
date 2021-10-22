import styled from "styled-components";

export const ApplicantJobFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ApplicantJobFilterList = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 8%;
  margin-top: 3%;
  justify-content: space-between;
`;

export const ApplicantJobName = styled.h3`
  width: 147px;
  height: 16px;
  color: ${(props) => (props.active ? "#000000" : "#828A98")};
  font-family: mulish;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
`;

export const ApplicantJobCount = styled.p`
  width: 9px;
  height: 16px;
  font-family: mulish;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  padding-right: 23%;
  cursor: pointer;
`;
