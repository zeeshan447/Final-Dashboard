import styled from "styled-components";

export const Underline = styled.hr`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: #a4a2a2;
`;
