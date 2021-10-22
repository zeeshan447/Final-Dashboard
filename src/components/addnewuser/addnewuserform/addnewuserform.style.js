import styled from "styled-components";

export const AddUserFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddUserFormEmail = styled.div`
  font-family: mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #55565a;
  margin-top: 30px;
`;

export const AddUserFormEmailInput = styled.input`
  width: 454px;
  height: 40px;
  border-radius: 8px;
  background-color: #edeef2;
  border: none;
  outline: none;
  padding-left: 10px;

  ::placeholder {
    font-family: mulish;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7a869a;
  }
`;

export const AddUserFormText = styled.div`
  font-family: mulish;
  font-weight: 700;
  font-size: 11px;
  line-height: 24px;
  color: #7a869a;
  margin-top: 30px;
`;
