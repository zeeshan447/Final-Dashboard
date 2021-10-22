import styled from "styled-components";

export const AddResume = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const AddResumeLabelDiv = styled.div`
  cursor: pointer;
  width: 260.46px;
  height: 61.09px;
  border-style: dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #979797;
`;
export const AddResumeLabel = styled.label`
  cursor: pointer;
  font-family: mulish;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0065ff;
`;

export const ResumeFileDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
`;

export const AddFileDiv = styled.div`
  margin-left: 2%;
`;

export const ResumeInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const DisplayingPath = styled.img`
  color: #0065ff;
`;

export const PdfFileError = styled.div`
  color: red;
  font-family: Mulish;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;
