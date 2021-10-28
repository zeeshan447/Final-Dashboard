import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  AddCandidateAddNoteButton,
  AddCandidateDiv,
  AddCandidateNoteDiv,
  AddCandidateNoteInput,
  AddCandidateNoteInputDiv,
  AddCandidateStageSelect,
  AddCandidateScheduleButtonsDiv,
  AddCandidateScheduleButtons,
  AddCandidateTabsDiv,
  AddScheduleModal,
  CandidateHistoryDiv,
  CandidateIntervieweType,
  CandidateHiringManager,
  DateTimeInterviewerDiv,
  DateTimeInterviewer,
  CandidateHistory,
  CandidateHiringManagerDiv,
  DeleteInterviewStatusButton,
  MailingCandidateModal,
} from "./candidatedetails.style";
import CandidateStageSelect from "../addcandidate/candidatestageselect";
import AddCandidateBody from "../addcandidate/addcandidatebody";
import CandidateDetailsBody from "./candidatedetailsbody";
import CandidateSchedule from "./candidateschedule";
import {
  CalendarOutlined,
  MailFilled,
  InboxOutlined,
  MoreOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import CandidateStageChange from "./candidatestageselect";
import { GET_INTEVIEWSTATUS } from "./apis";
import { Popconfirm, message } from "antd";
import CandidateMail from "./candidatemail";

const CandidateDetails = ({
  candidateData,
  dataCallBack,
  secondDataCallback,
  candidateDetailModal,
  stageChange,
}) => {
  const [getInputSize, setInputSize] = useState("");
  const [getOnFocus, setOnFocus] = useState(false);
  const [getNote, setNote] = useState();
  const [getName, setName] = useState();
  const [getCompanyName, setCompanyName] = useState();
  const [getResume, setResume] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [InterviewStatus, setInterviewStatus] = useState();
  const [showMailModal, setShowMailModal] = useState(false);

  let responseData = [];

  const showModal = () => {
    setIsModalVisible(true);
  };
  const mailModalVisibile = () => {
    setShowMailModal(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setShowMailModal(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowMailModal(false);
  };

  const onFocusHandler = () => {
    setOnFocus(true);
    setInputSize("active");
  };
  const submitNoteHandler = () => {
    setOnFocus(false);
    setInputSize("null");
  };
  const onBlurHandler = () => {
    setOnFocus(false);
  };
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  useEffect(() => {
    getInterviewStatus();
  }, [isModalVisible, candidateDetailModal]);

  console.log("MODAL", candidateDetailModal);

  const getInterviewStatus = async () => {
    await Axios.get(
      `http://localhost:2500/interview/candidate/${candidateData.key}`
    ).then((response) => {
      responseData = response.data.scheduleInterview?.map((row, key) => ({
        interviewer_status_id: row.interviewer_status_id,
        scheduled_time: row.scheduled_time,
        schedule_date: row.schedule_date,
        candidate_name: row.candidate_name,
        job_title: row.job_title,
        status: row.status,
        stage: row.stage,
        feedback: row.feedback,
        notes: row.note,
        interview_type: row.interview_type,
      }));
    });
    setInterviewStatus(responseData);
    console.log("Interview response", responseData);
  };

  const deleteScheduleInterview = async (id) => {
    await Axios.delete(`http://localhost:2500/interview/schedule/${id}`);
    const newInterviewList = InterviewStatus.filter((InterviewStatus) => {
      return InterviewStatus.interviewer_status_id !== id;
    });
    setInterviewStatus(newInterviewList);
  };

  console.log("alksdjaskldjalksjdlksada", InterviewStatus);

  useEffect(() => {
    console.log("Name", getName);
    console.log("Company Name", getCompanyName);
    console.log("Resume", getResume);

    console.log("candidate data", candidateData);
  }, []);

  return (
    <React.Fragment>
      <AddCandidateDiv>
        <AddCandidateNoteDiv>
          <AddCandidateNoteInputDiv active={getOnFocus}>
            <AddCandidateNoteInput
              placeholder="Add note"
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              active={getOnFocus}
            />
            {getOnFocus && (
              <AddCandidateAddNoteButton onClick={submitNoteHandler}>
                Add Note
              </AddCandidateAddNoteButton>
            )}
          </AddCandidateNoteInputDiv>
        </AddCandidateNoteDiv>
        <AddCandidateStageSelect>
          <CandidateStageChange
            candidateStage={candidateData}
            stageChangeCallback={dataCallBack}
            secondStageCallback={secondDataCallback}
            changeStage={stageChange}
          />
        </AddCandidateStageSelect>
        <AddCandidateScheduleButtonsDiv>
          <AddCandidateScheduleButtons onClick={showModal}>
            <CalendarOutlined style={{ fontSize: "15px" }} />
          </AddCandidateScheduleButtons>
          <AddCandidateScheduleButtons onClick={mailModalVisibile}>
            <MailFilled style={{ fontSize: "15px" }} />
          </AddCandidateScheduleButtons>
          <AddCandidateScheduleButtons>
            <InboxOutlined style={{ fontSize: "15px" }} />
          </AddCandidateScheduleButtons>
          <AddCandidateScheduleButtons>
            <MoreOutlined style={{ fontSize: "15px" }} />
          </AddCandidateScheduleButtons>
        </AddCandidateScheduleButtonsDiv>
      </AddCandidateDiv>
      <AddCandidateTabsDiv>
        <CandidateDetailsBody
          apiCallback={dataCallBack}
          candidateDetails={candidateData}
          secondApiCallback={secondDataCallback}
        />
        <CandidateHistoryDiv>
          {InterviewStatus?.map((data, key) => {
            return (
              <React.Fragment>
                <CandidateHistory>
                  <CandidateIntervieweType>
                    {data.interview_type}
                  </CandidateIntervieweType>
                  <CandidateHiringManagerDiv>
                    <CandidateHiringManager>
                      {candidateData.hiringmanager}
                    </CandidateHiringManager>
                    <DeleteInterviewStatusButton>
                      <Popconfirm
                        title="Are you sure to delete this schedule?"
                        onConfirm={() =>
                          deleteScheduleInterview(data.interviewer_status_id)
                        }
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteOutlined />
                      </Popconfirm>
                    </DeleteInterviewStatusButton>
                  </CandidateHiringManagerDiv>
                  <DateTimeInterviewerDiv>
                    <DateTimeInterviewer>
                      {data.schedule_date?.slice(0, 10)}
                    </DateTimeInterviewer>
                    <DateTimeInterviewer>
                      {data.scheduled_time?.slice(0, 5)}
                    </DateTimeInterviewer>
                  </DateTimeInterviewerDiv>
                </CandidateHistory>
              </React.Fragment>
            );
          })}
        </CandidateHistoryDiv>
      </AddCandidateTabsDiv>

      <AddScheduleModal
        width={"1400px"}
        // height={"260px"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closable={false}
        destroyOnClose
      >
        <CandidateSchedule
          modalVisibility={setIsModalVisible}
          scheduledCandidateData={candidateData}
        />
      </AddScheduleModal>

      <MailingCandidateModal
        width={"1073px"}
        // height={"260px"}
        visible={showMailModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closable={false}
        destroyOnClose
      >
        <CandidateMail mailData={candidateData} mailModal={setShowMailModal} />
      </MailingCandidateModal>
    </React.Fragment>
  );
};

export default CandidateDetails;
