import styled from "styled-components";

import { Container } from "../../globalstyles/globalstyle";

export const SideBar = styled.div`
  background-color: #ffffff;
`;

export const SideBarContainer = styled(Container)`
  display: flex;

  height: 100%;
  max-width: 100%;
`;

export const SideBarLogo = styled.div`
  justify-self: flex-start;
  height: 27px;
  width: 27px;
  display: flex;
  flex-direction: row;
  margin-top: 39px;
  margin-left: 30px;
  cursor: pointer;
`;

export const SideBarTitle = styled.h1`
  font-family: mulish;
  line-height: 42px;
  font-size: 28px;
  font-weight: 800;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
`;

export const SideBarSelect = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideBarUserIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  height: 30px;
  width: 35px;
  margin-top: 10px;
`;

export const SideBarFilters = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const SideBarLine = styled.div`
  margin-top: 20px;
`;
