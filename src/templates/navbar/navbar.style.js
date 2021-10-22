import styled from "styled-components";
import { Container } from "../../globalstyles/globalstyle";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { Modal } from "antd";

export const Nav = styled.nav`
  max-width: 100%;

  display: flex;
  justify-content: space-between;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin-right: 10px;
  max-width: 100%;
  ${Container};
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1rem;
  font-family: Mulish, sans-serif;

  padding-left: 10px;
`;

export const NavItem = styled.li`
  font-family: Mulish, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20.08px;
  margin-top: 8px;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;

export const NavLinks = styled(Link)`
  color: #55565a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: Mulish, sans-serif;
  font-weight: 700;
`;

export const NavInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
  margin-right: 30px;
`;

export const ButtonDiv = styled.div`
  margin-top: 11px;
  margin-left: 19px;
`;

export const NotificationIcon = styled.div`
  margin-left: 16px;
  margin-top: 18px;
  cursor: pointer;
`;

export const Profile = styled.div`
  margin-left: 16px;
  margin-top: 12px;
  cursor: pointer;
`;

export const SecondaryHeaderTabs = styled.div`
  display: block;
  flex-direction: row;
  max-width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  background-color: #dfe1e6;
  max-width: 100%;
`;

export const TabsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TabsDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
`;

export const ApplicantTab = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ArchiveTabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1%;
`;

export const NavbarCompanyTitle = styled.h1`
  font-family: mulish;
  font-weight: 700;
  font-size: 28.83px;
  line-height: 24px;
  color: #000000;
  padding-left: 20%;
`;

export const NavbarPostingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
`;

export const NavbarPostingsSearch = styled.input`
  width: 264px;
  height: 40px;
  background-color: #f4f5f7;
  font-family: mulish;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-right: 2%;
  padding-left: 7%;

  ::placeholder {
    font-family: mulish;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #55565a;
  }
`;
export const NavbarPostingsButton = styled.button`
  width: 146px;
  height: 40px;
  border-radius: 8px;
  background-color: #38a6f5;
  color: white;
  font-family: mulish;
  font-size: 16px;
  line-height: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 2%;
`;

export const RoundSearch = styled(Input.Search)`
  .ant-input {
    border-radius: 8px;
  }
`;

export const JobModal = styled(Modal)`
  width: "1000px";

  height: "740px";
  .ant-modal-body {
    padding: 0px !important;
  }
`;
