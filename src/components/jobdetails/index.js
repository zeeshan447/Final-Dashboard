import React, { useState, useEffect } from "react";
import Axios from "axios";
import JobDepartmentSelect from "./jobposting/jobdepartmentselect";
import JobLocationSelect from "./jobposting/joblocationselect";
import JobWorkTypeSelect from "./jobposting/jobworktypeselect";
import { Popconfirm } from "antd";
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
  JobDeleteButton,
  LineSpace,
  JobButtonDiv,
} from "./jobdetails.style";
import HiringManagerSelect from "./jobposting/hiringmanagerselect";
import PostingOwner from "./jobposting/postingownerselect";
import { UPDATEJOB } from "./apis";
//import { POSTJOB } from "./apis";

const JobDetails = ({ jobDetails }) => {
  const [getJobName, setJobName] = useState(jobDetails.job_title);
  const [getDepartment, setDepartment] = useState(jobDetails.department_id);
  const [getWorkType, setWorkType] = useState(jobDetails.work_type);
  const [getLocation, setLocation] = useState(jobDetails.job_loc);
  const [getDescription, setDescription] = useState(jobDetails.jobDescription);
  const [getUserId, setUserId] = useState(jobDetails.job_id);
  const [getJobOwner, setJobOwner] = useState(jobDetails.job_created);
  const [getIsActive, setIsActive] = useState();
  const [getHiringManager, setHiringManager] = useState(
    jobDetails.hiring_manager
  );

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
      getJobOwner,
      getHiringManager
    );
  });

  const titleHandler = (e) => {
    setJobName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  // const jobPostHandler = async () => {
  //   await Axios.post(POSTJOB, {
  //     job_title: getJobName,
  //     job_loc: getLocation,
  //     job_createdby: getJobOwner,
  //     department_id: getDepartment,
  //     user_id: getUserId,
  //     description: getDescription,
  //     worktype_id: getWorkType,
  //     is_active: "true",
  //   }).then((response) => {
  //     console.log("asdsadsadsadsadsad ", response.data);
  //   });
  // };

  const updateJobHandler = async () => {
    await Axios.put(`${UPDATEJOB}/${jobDetails.job_id}`, {
      job_title: getJobName,
      job_loc: getLocation,
      job_createdby: getJobOwner,
      department_id: getDepartment,
      user_id: getUserId,
      description: getDescription,
      worktype_id: getWorkType,
      is_active: "true",
    }).then((response) => {
      console.log("asdsadsadsadsadsad ", response.data);
    });
  };

  function confirm(e) {
    jobDeleteHandler();
  }

  function cancel(e) {}

  const jobDeleteHandler = async () => {
    await Axios.delete(`${UPDATEJOB}/${jobDetails.job_id}`);
  };
  return (
    <React.Fragment>
      <JobPostingMainDiv>
        <JobPostingDiv>
          <JobPostingTitleDiv>
            <JobPostingTitle>Job Posting</JobPostingTitle>
            <JobButtonDiv>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <JobDeleteButton>DELETE</JobDeleteButton>
              </Popconfirm>
              <JobPostingButton onClick={updateJobHandler}>
                Update Job
              </JobPostingButton>
            </JobButtonDiv>
          </JobPostingTitleDiv>
          <JobPostingTitleInput
            defaultValue={jobDetails.job_title}
            onChange={titleHandler}
          ></JobPostingTitleInput>
          <JobPostingSelectDiv>
            <JobDepartmentSelect
              departmentSelect={setDepartment}
              departmentDetail={jobDetails}
            ></JobDepartmentSelect>
            <JobWorkTypeSelect
              workTypeSelect={setWorkType}
              workTypeDetails={jobDetails}
            ></JobWorkTypeSelect>
            <JobLocationSelect
              locationSelect={setLocation}
              locationDetails={jobDetails}
            ></JobLocationSelect>
          </JobPostingSelectDiv>
          <JobPostingDescriptionDiv>
            <JobPostingDescriptionTitle>
              Job Description
            </JobPostingDescriptionTitle>
            <TextArea
              placeholder="Enter the job description"
              defaultValue={jobDetails.jobDescription}
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
                {getJobOwner ? getJobOwner?.match(/\b(\w)/g) : null}
              </PostingOwnerAvatar>
              <PostingOwner
                jobPostingOwner={setJobOwner}
                userId={setUserId}
                ownerDetails={jobDetails}
              ></PostingOwner>
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
                hiringDetails={jobDetails}
              ></HiringManagerSelect>
            </PostingOwnerDiv>
          </JobPostingDetailsDiv>
          <LineSpace />
        </JobPostingSidebar>
      </JobPostingMainDiv>
    </React.Fragment>
  );
};

export default JobDetails;
