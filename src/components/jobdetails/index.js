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
  PostingOwner,
} from "./jobdetails.style";
import { notification } from "antd";
import { useDispatch } from "react-redux";

import HiringManagerSelect from "./jobposting/hiringmanagerselect";
// import PostingOwner from "./jobposting/postingownerselect";
import { UPDATEJOB } from "./apis";
//import { POSTJOB } from "./apis";

const JobDetails = ({ jobDetails, updateJob }) => {
  const [getJobName, setJobName] = useState(jobDetails.job_title);
  const [getDepartment, setDepartment] = useState(jobDetails.department_id);
  const [getWorkType, setWorkType] = useState(jobDetails.work_type);
  const [getLocation, setLocation] = useState(jobDetails.job_loc);
  const [getDescription, setDescription] = useState(jobDetails.jobDescription);
  const [getUserId, setUserId] = useState(jobDetails.job_id);
  const [getJobOwner, setJobOwner] = useState(jobDetails.job_created);
  const [getIsActive, setIsActive] = useState();
  const [hiringManagerId, setHiringManagerId] = useState(jobDetails.user_id);
  const [getHiringManager, setHiringManager] = useState(jobDetails.user_name);
  const [workTypeId, setWorkTypeId] = useState(jobDetails.work_id);

  const dispatch = useDispatch();

  const { TextArea } = JobPostingDescription;

  useEffect(() => {
    console.log(
      "asdsadsadasda",
      getJobName,
      getDepartment,
      workTypeId,
      getLocation,
      getDescription,
      getUserId,
      getJobOwner,
      getHiringManager,
      hiringManagerId
    );
    dispatch({ type: "DEFAULT" });
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
      user_id: jobDetails.user_id,
      description: getDescription,
      worktype_id: workTypeId,
      is_active: "true",
      company_id: 2,
    })
      .then((response) => {
        if (response.request.status === 200) {
          console.log("JOB POSTING API ", response);
          dispatch({ type: "RELOAD" });

          updateJob(false);
          notification.open({
            message: "Job Update Successfully",
            description: "Job has successfully updated",
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
        } else {
          notification.open({
            message: "Job Update Failed",
            description: "Please recheck all the values",
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
        }
      })
      .catch((err) => {
        notification.open({
          message: " Failed",
          description: "Server side error, try again later",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      });
  };

  function confirm(e) {
    jobDeleteHandler();
  }

  function cancel(e) {}

  const jobDeleteHandler = async () => {
    debugger;
    await Axios.delete(`${UPDATEJOB}/${jobDetails.job_id}`)
      .then((res) => {
        console.log("job Deleted", res);
        updateJob(false);
        dispatch({ type: "RELOAD" });

        notification.open({
          message: "Job Deleted",
          description: "Job has successfully been deleted",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      })
      .catch((err) => {
        notification.open({
          message: "Server not responding",
          description: "Server not responding please retry again",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      });
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
              workId={setWorkTypeId}
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
              <PostingOwner>{getJobOwner}</PostingOwner>
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
                hiringId={setHiringManagerId}
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
