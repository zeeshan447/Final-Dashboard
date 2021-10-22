import styled from "styled-components";

export const TabButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10.5px;
`;

export const TabButtons = styled.button`
  display: flex;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: 47.18px;
  font-family: mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #55565a;
  background-color: ${(props) => (props.active ? "white" : "#edeef2")};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: none;
  cursor: pointer;
  padding-top: 11px;
  padding-left: 16px;
  justify-content: center;

  /* 
  &:active {
    background-color: white;
  }

  &:focus {
    background-color: white;
  } */
`;
