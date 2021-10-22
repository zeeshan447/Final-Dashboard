import React, { useState, useEffect } from "react";
import CustomButton from "../../common/button";
import MaterialIcons from "../../common/icons";
import Tabs from "../../components/tabs";
import CustomBadges from "../badges";
import CustomInput from "../input";
import ProfilePicture from "../profiledropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "antd";

import {
  ApplicantTab,
  ArchiveTabs,
  ButtonDiv,
  Header,
  JobModal,
  Nav,
  NavbarCompanyTitle,
  NavbarContainer,
  NavbarPostingsButton,
  NavbarPostingsDiv,
  NavbarPostingsSearch,
  NavInput,
  NavItem,
  NavLinks,
  NavMenu,
  NotificationIcon,
  Profile,
  SecondaryHeaderTabs,
  TabsDiv,
} from "./navbar.style";
import { NavButtons } from "../../data/navbardata/index";
import { NavButtonArRe } from "../../data/navbardata/index";
import { NavButtonUserEdit } from "../../data/navbardata/index";
import { NavButtonCompany } from "../../data/navbardata/index";
import AddCandidate from "../../components/addcandidate";
import JobPosting from "../../components/jobposting";

const NavBar = () => {
  const buttonID = JSON.parse(localStorage.getItem("SelectedID")) || {};
  const counter = useSelector((state) => state.counter).counter;
  const [activeButton, setActiveButton] = useState([]);
  const path = window.location.pathname;
  console.log("Counter", counter);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [jobModalVisible, setJobModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showJobModal = () => {
    setJobModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setJobModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setJobModalVisible(false);
  };
  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <React.Fragment>
      <Header>
        <Nav>
          <NavbarContainer>
            <NavMenu>
              <NavItem>
                <NavLinks to="/applicant">Candidates</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/jobs">Jobs</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Interviews</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">More</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
          <NavInput>
            <CustomInput></CustomInput>
            <ButtonDiv>
              <CustomButton onClick={showModal}>+ ADD CANDIDATE</CustomButton>
            </ButtonDiv>
            <NotificationIcon>
              <MaterialIcons
                icon="notificationsnoneoutlined"
                style={{ color: "#55565A" }}
              ></MaterialIcons>
            </NotificationIcon>
            <Profile>
              <ProfilePicture></ProfilePicture>
            </Profile>
          </NavInput>
        </Nav>
        <SecondaryHeaderTabs>
          {console.log("Counter", counter, counter === 0)}
          <TabsDiv>
            {counter === 0 ? (
              <ApplicantTab>
                {NavButtons.map((data, i) => {
                  return (
                    <Link to={data.to}>
                      <Tabs
                        i={data.key}
                        width="155.68px"
                        key={data.key}
                        onClick={() => handleClick(data.key)}
                        active={
                          path === data.to || path === data.to
                            ? activeButton
                            : null
                        }
                      >
                        {data.name}
                        <CustomBadges />
                      </Tabs>
                    </Link>
                  );
                })}
              </ApplicantTab>
            ) : null}
            {counter === 1 ? (
              <ApplicantTab>
                {NavButtonUserEdit.map((data, i) => {
                  return (
                    <Link to={data.to}>
                      <Tabs
                        i={data.key}
                        width={data.width}
                        key={data.key}
                        onClick={() => handleClick(data.key)}
                        active={
                          path === data.to || path === data.to
                            ? activeButton
                            : null
                        }
                      >
                        {data.name}
                      </Tabs>
                    </Link>
                  );
                })}
              </ApplicantTab>
            ) : null}
            {counter === 0 ? (
              <ArchiveTabs>
                {NavButtonArRe.map((data, i) => {
                  return (
                    <Tabs
                      i={data.key}
                      width={data.width}
                      key={data.key}
                      active={
                        path === data.to || path === data.to
                          ? activeButton
                          : null
                      }
                    >
                      {data.name}
                      <CustomBadges />
                    </Tabs>
                  );
                })}
              </ArchiveTabs>
            ) : null}
            {counter === 2 ? (
              <ApplicantTab>
                {NavButtonCompany.map((data, i) => {
                  return (
                    <Link to={data.to}>
                      <Tabs
                        i={data.key}
                        width={data.width}
                        key={data.key}
                        onClick={() => handleClick(data.key)}
                        active={
                          path === data.to || path === data.to
                            ? activeButton
                            : null
                        }
                      >
                        {data.name}
                      </Tabs>
                    </Link>
                  );
                })}
              </ApplicantTab>
            ) : null}
            {counter === 3 ? (
              <ApplicantTab>
                <NavbarCompanyTitle>VisionX</NavbarCompanyTitle>
              </ApplicantTab>
            ) : null}
            {counter === 3 ? (
              <ArchiveTabs>
                <NavbarPostingsDiv>
                  <NavbarPostingsSearch placeholder="Search Postings"></NavbarPostingsSearch>

                  <NavbarPostingsButton onClick={showJobModal}>
                    Add Job Posting
                  </NavbarPostingsButton>
                </NavbarPostingsDiv>
              </ArchiveTabs>
            ) : null}
          </TabsDiv>
        </SecondaryHeaderTabs>
      </Header>
      <Modal
        title="Add Candidate"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="991px"
        height="888px"
        footer={false}
      >
        <AddCandidate />
      </Modal>
      <JobModal
        visible={jobModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1000px"
        height="740px"
        footer={false}
        closable={false}
      >
        <JobPosting />
      </JobModal>
    </React.Fragment>
  );
};

export default NavBar;
