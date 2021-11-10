import styled from "styled-components";
import { Input } from "antd";

export const JobViewTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 2%;
  left: 30%;
  position: relative;
`;
export const JobTitle = styled.h1`
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 24px;
  color: #000000;
`;

export const JobTitleLocationDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const JobTitleLocation = styled.h2`
  font-family: Mulish;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  color: #55565a;
`;

export const ApplyNowJobFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  background-color: #e5e5e5;
  align-items: center;
  overflow-y: scroll;
  width: 100%;
  height: 1000px;
`;

export const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1000px;
  margin-top: 2%;
`;
export const LabelQuestionInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  margin-top: 2%;
`;

export const ApplyNowLabel = styled.h3`
  font-family: Mulish;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #55565a;
  margin-top: 1%;
`;

export const ApplyNowInput = styled.input`
  width: 822px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  padding-left: 3%;
`;
export const ApplyNowQuestionInput = styled.input`
  width: 1003.08px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  padding-left: 3%;
`;
export const ApplyNowLinks = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color: #000000;
`;

export const ApplyNowCoverLetter = styled(Input)`
  width: 970.08px;
`;

export const ApplyNowButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
`;
export const ApplyNowButton = styled.button`
  width: 999px;
  height: 56px;
  background-color: #38a6f5;
  border-radius: 8px;
  font-family: Mulish;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
`;
