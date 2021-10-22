import styled from "styled-components";

export const InputSetUp = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 140px;
  height: 36px;
  border-radius: 8px;
  border: 0px;
  outline: 0px;
  margin-top: 12px;
  color: #5e6c84;
  padding-left: 40px;
  background: ${(props) => (props.primary ? "#FAFBFC" : "#EDEEF2")};
  width: ${(props) => (props.width ? props.width : "auto")};

  ::placeholder {
    color: #9e9ea7;
    font-size: 16px;
    line-height: 20.08;
    font-weight: 600;
    font-family: mulish;
  }
`;

export const InputIcon = styled.div`
  margin-top: 20px;
  position: absolute;
  padding-left: 8px;
`;
