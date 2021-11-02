import React, { useState, useEffect } from "react";
import Axios from "axios";
import JobDepartmentSelect from "./jobdepartmentselect";
import JobLocationSelect from "./joblocationselect";
import JobWorkTypeSelect from "./jobworktypeselect";
import { Button, notification } from "antd";
import { useSelector } from "react-redux";

import {
  JobPostingDiv,
  JobPostingTitleDiv,
  JobPostingTitle,
  JobPostingButton,
  JobPostingTitleInput,
  JobPostingSelectDiv,
  JobPostingSelect,
  JobPostingDescriptionDiv,
  JobPostingDescriptionTitle,
  JobPostingDescription,
  RequirementTitle,
  AddListButton,
  ClosingDescriptionTitle,
  AddQuestionTitle,
  AddCustomQuestion,
  JobPostingSidebar,
  JobSidebarPostingOwnerTitle,
  JobPostingMainDiv,
  JobPostingDetailsDiv,
  PostingOwnerDiv,
  PostingOwnerAvatar,
  PostingOwnerSelect,
  LineSpace,
  PostingOwnerName,
} from "./jobposting.style";
import HiringManagerSelect from "./hiringmanagerselect";
import PostingOwner from "./postingownerselect";
import { POSTJOB } from "./apis";

const JobPosting = ({ jobModalVisibility }) => {
  const [getJobName, setJobName] = useState();
  const [getDepartment, setDepartment] = useState();
  const [getWorkType, setWorkType] = useState();
  const [getLocation, setLocation] = useState();
  const [getDescription, setDescription] = useState();
  const [getUserId, setUserId] = useState();
  const [getJobOwner, setJobOwner] = useState();
  const [getIsActive, setIsActive] = useState();
  const [getHiringManager, setHiringManager] = useState();
  const userDetailing = useSelector((state) => state.userDetails.userDetails);

  const { TextArea } = JobPostingDescription;

  useEffect(() => {
    console.log(
      "asdsadsadasda",
      getJobName,
      getDepartment,
      getWorkType,
      getLocation,
      getDescription,
      getUserId,
      getHiringManager
    );
  });

  const titleHandler = (e) => {
    setJobName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const jobPostHandler = async () => {
    await Axios.post(POSTJOB, {
      job_title: getJobName,
      job_loc: getLocation,
      job_createdby: userDetailing.user_name,
      department_id: getDepartment,
      user_id: getUserId?.key,
      description: getDescription,
      worktype_id: getWorkType,
      is_active: "true",
    })
      .then((response) => {
        console.log("asdsadsadsadsadsad ", response);
        if (response.request.status === 200) {
          notification.open({
            message: "Job Posted Failed",
            description: "Please check all the fields",
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
        } else {
          jobModalVisibility(false);
          notification.open({
            message: "Job Posted",
            description: "Job Posted Successfully",
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <React.Fragment>
      <JobPostingMainDiv>
        <JobPostingDiv>
          <JobPostingTitleDiv>
            <JobPostingTitle>Job Posting</JobPostingTitle>
            <JobPostingButton onClick={jobPostHandler}>
              Post Job
            </JobPostingButton>
          </JobPostingTitleDiv>
          <JobPostingTitleInput
            placeholder="Enter Job Posting Title"
            onChange={titleHandler}
          ></JobPostingTitleInput>
          <JobPostingSelectDiv>
            <JobDepartmentSelect
              departmentSelect={setDepartment}
            ></JobDepartmentSelect>
            <JobWorkTypeSelect workTypeSelect={setWorkType}></JobWorkTypeSelect>
            <JobLocationSelect locationSelect={setLocation}></JobLocationSelect>
          </JobPostingSelectDiv>
          <JobPostingDescriptionDiv>
            <JobPostingDescriptionTitle>
              Job Description
            </JobPostingDescriptionTitle>
            <TextArea
              placeholder="Enter the job description"
              style={{ width: 618 }}
              rows={4}
              onChange={descriptionHandler}
            ></TextArea>
          </JobPostingDescriptionDiv>
          <RequirementTitle>Requirement List</RequirementTitle>
          <AddListButton>Add List</AddListButton>
          <ClosingDescriptionTitle>Closing (Optional)</ClosingDescriptionTitle>
          <TextArea
            placeholder="Enter closing remarks if any"
            style={{ width: 618 }}
            rows={4}
          ></TextArea>
          <AddQuestionTitle>Add Question</AddQuestionTitle>
          <AddCustomQuestion>Add Custom Question</AddCustomQuestion>
        </JobPostingDiv>
        <JobPostingSidebar>
          <JobPostingDetailsDiv>
            <JobSidebarPostingOwnerTitle>
              Posting Owner
            </JobSidebarPostingOwnerTitle>
            <PostingOwnerDiv>
              <PostingOwnerAvatar bgcolor="#F178B6">
                {userDetailing.user_name}
              </PostingOwnerAvatar>
              <PostingOwnerName>{userDetailing.user_name}</PostingOwnerName>
            </PostingOwnerDiv>
          </JobPostingDetailsDiv>
          <LineSpace />

          <JobPostingDetailsDiv>
            <JobSidebarPostingOwnerTitle>
              Hiring Manager
            </JobSidebarPostingOwnerTitle>
            <PostingOwnerDiv>
              <PostingOwnerAvatar bgcolor="#FE9800">
                {getHiringManager ? getHiringManager?.match(/\b(\w)/g) : null}
              </PostingOwnerAvatar>
              <HiringManagerSelect
                hiringManagerName={setHiringManager}
                hiringManagerId={setUserId}
              ></HiringManagerSelect>
            </PostingOwnerDiv>
          </JobPostingDetailsDiv>
          <LineSpace />
        </JobPostingSidebar>
      </JobPostingMainDiv>
    </React.Fragment>
  );
};

export default JobPosting;
