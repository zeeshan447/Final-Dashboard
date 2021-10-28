import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  CandidateEvaluationModal,
  DateTimeDetails,
  InterviewDateTimeDiv,
  InterviewDetailsDiv,
  InterviewDiv,
  InterviewTitle,
} from "./myinterview.style";
import { useDispatch } from "react-redux";
import { Data } from "./dummydata";
import { MY_INTERVIEWS } from "./apis";
import { useSelector } from "react-redux";
import EvaluationForm from "./interviewevaluationform";

const MyInterviews = () => {
  const [myInterviews, setMyInterviews] = useState();
  const [upcomingInterview, setUpcomingInterview] = useState();
  const [completedInterview, setCompletedInterview] = useState();
  const [interviews, setInterviews] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [candidateData, setCandidateData] = useState();
  const [recallApi, setRecallApi] = useState(false);

  const userDetailing = useSelector((state) => state.userDetails.userDetails);

  const dispatch = useDispatch();
  let random = [];

  useEffect(() => {
    dispatch({ type: "myinterviews" });
  });
  useEffect(() => {
    getMyInterviews();
    getUpcomingInterview();
    completedInterviews();
  }, [recallApi]);
  useEffect(() => {
    console.log("MY INTERVIEWS", myInterviews);
    console.log("RANDOM", interviews);
    console.log("UPCOMING", upcomingInterview);
  });
  const getMyInterviews = async () => {
    await Axios.get(`${MY_INTERVIEWS}/${userDetailing.user_id}`).then((res) => {
      setMyInterviews(
        res.data.data.overDueInterview?.map((row, key) => ({
          candidate_name: row.candidate_name,
          interviewer_status_id: row.interviewer_status_id,
          scheduled_time: row.scheduled_time,
          feedback: row.feedback,
          stage: row.stage,
          candidate_job_maping_id: row.candidate_job_maping_id,
          status: row.status,
          schedule_date: row.schedule_date,
          duration: row.duration,
          interview_type: row.interview_type,
          prev_company: row.prev_company,
          cv: row.cv,
          job_title: row.job_title,
        }))
      );
    });
  };

  const getUpcomingInterview = async () => {
    await Axios.get(`${MY_INTERVIEWS}/${userDetailing.user_id}`).then((res) => {
      setUpcomingInterview(
        res.data.data.upcomingInterview?.map((row, key) => ({
          candidate_name: row.candidate_name,
          interviewer_status_id: row.interviewer_status_id,
          scheduled_time: row.scheduled_time,
          feedback: row.feedback,
          stage: row.stage,
          candidate_job_maping_id: row.candidate_job_maping_id,
          status: row.status,
          schedule_date: row.schedule_date,
          duration: row.duration,
          interview_type: row.interview_type,
          prev_company: row.prev_company,
          cv: row.cv,
          job_title: row.job_title,
        }))
      );
    });
  };

  const completedInterviews = async () => {
    await Axios.get(`${MY_INTERVIEWS}/${userDetailing.user_id}`).then((res) => {
      debugger;
      setCompletedInterview(
        res.data.data.completedInterview?.map((row, key) => ({
          candidate_name: row.candidate_name,
          interviewer_status_id: row.interviewer_status_id,
          scheduled_time: row.scheduled_time,
          feedback: row.feedback,
          stage: row.stage,
          candidate_job_maping_id: row.candidate_job_maping_id,
          status: row.status,
          schedule_date: row.schedule_date,
          duration: row.duration,
          interview_type: row.interview_type,
          prev_company: row.prev_company,
          cv: row.cv,
          job_title: row.job_title,
        }))
      );
    });
  };
  const interviewData = (data) => {
    console.log("INTERVIEW DATA", data);
    setCandidateData(data);
    showModal();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <React.Fragment>
      <InterviewDiv>
        <InterviewTitle>Upcoming Interviews</InterviewTitle>
      </InterviewDiv>
      {upcomingInterview?.map((row, key) => {
        return (
          <React.Fragment>
            {upcomingInterview.length === 0 ? (
              <React.Fragment>
                <InterviewTitle>Upcoming Interviews</InterviewTitle>
                <InterviewDetailsDiv>
                  No Upcoming Interviews
                </InterviewDetailsDiv>
              </React.Fragment>
            ) : (
              <InterviewDiv>
                <InterviewDetailsDiv onClick={() => interviewData(row)}>
                  <InterviewDateTimeDiv>
                    <DateTimeDetails>
                      {row.schedule_date.slice(0, 11)}
                    </DateTimeDetails>
                    <DateTimeDetails>
                      {row.scheduled_time.slice(1, 5)}
                    </DateTimeDetails>
                  </InterviewDateTimeDiv>
                  <InterviewDateTimeDiv>
                    <DateTimeDetails>{row.candidate_name}</DateTimeDetails>
                  </InterviewDateTimeDiv>
                  <InterviewDateTimeDiv>
                    <DateTimeDetails>{row.interview_type}</DateTimeDetails>
                  </InterviewDateTimeDiv>
                </InterviewDetailsDiv>
              </InterviewDiv>
            )}
          </React.Fragment>
        );
      })}
      <InterviewDiv>
        <InterviewTitle>Overdue Interviews</InterviewTitle>
      </InterviewDiv>
      {myInterviews?.map((row, key) => {
        return (
          <InterviewDiv onClick={() => interviewData(row)}>
            <InterviewDetailsDiv>
              <InterviewDateTimeDiv>
                <DateTimeDetails>
                  {row.schedule_date.slice(0, 11)}
                </DateTimeDetails>
                <DateTimeDetails>
                  {row.scheduled_time.slice(1, 5)}
                </DateTimeDetails>
              </InterviewDateTimeDiv>
              <InterviewDateTimeDiv>
                <DateTimeDetails>{row.candidate_name}</DateTimeDetails>
              </InterviewDateTimeDiv>
              <InterviewDateTimeDiv>
                <DateTimeDetails>{row.interview_type}</DateTimeDetails>
              </InterviewDateTimeDiv>
            </InterviewDetailsDiv>
          </InterviewDiv>
        );
      })}
      <React.Fragment>
        <InterviewDiv>
          <InterviewTitle>Completed Interviews</InterviewTitle>
        </InterviewDiv>
        {completedInterview?.map((row, key) => {
          return (
            <InterviewDiv>
              <InterviewDetailsDiv>
                <InterviewDateTimeDiv>
                  <DateTimeDetails>
                    {row.schedule_date.slice(0, 11)}
                  </DateTimeDetails>
                  <DateTimeDetails>
                    {row.scheduled_time.slice(1, 5)}
                  </DateTimeDetails>
                </InterviewDateTimeDiv>
                <InterviewDateTimeDiv>
                  <DateTimeDetails>{row.candidate_name}</DateTimeDetails>
                </InterviewDateTimeDiv>
                <InterviewDateTimeDiv>
                  <DateTimeDetails>{row.interview_type}</DateTimeDetails>
                </InterviewDateTimeDiv>
              </InterviewDetailsDiv>
            </InterviewDiv>
          );
        })}
      </React.Fragment>

      <CandidateEvaluationModal
        width={"1400px"}
        // height={"260px"}
        style={{ top: 20 }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closable={false}
        destroyOnClose
      >
        <EvaluationForm
          recall={setRecallApi}
          interviewData={candidateData}
          modalVisibility={setIsModalVisible}
        />
      </CandidateEvaluationModal>
    </React.Fragment>
  );
};

export default MyInterviews;
