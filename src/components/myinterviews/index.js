import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  DateTimeDetails,
  InterviewDateTimeDiv,
  InterviewDetailsDiv,
  InterviewDiv,
  InterviewTitle,
} from "./myinterview.style";
import { useDispatch } from "react-redux";
import { Data } from "./dummydata";
import { MY_INTERVIEWS } from "./apis";

const MyInterviews = () => {
  const [myInterviews, setMyInterviews] = useState();
  const [upcomingInterview, setUpcomingInterview] = useState();
  const [completedInterview, setCompletedInterview] = useState();
  const [interviews, setInterviews] = useState([]);
  const dispatch = useDispatch();
  let random = [];

  useEffect(() => {
    dispatch({ type: "myinterviews" });
  });
  useEffect(() => {
    getMyInterviews();
    getUpcomingInterview();
    completedInterviews();
  }, []);
  useEffect(() => {
    console.log("MY INTERVIEWS", myInterviews);
    console.log("RANDOM", interviews);
    console.log("UPCOMING", upcomingInterview);
  });
  const getMyInterviews = async () => {
    await Axios.get(`${MY_INTERVIEWS}/6`).then((res) => {
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
        }))
      );
    });
  };

  const getUpcomingInterview = async () => {
    await Axios.get(`${MY_INTERVIEWS}/6`).then((res) => {
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
        }))
      );
    });
  };

  const completedInterviews = async () => {
    await Axios.get(`${MY_INTERVIEWS}/6`).then((res) => {
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
        }))
      );
    });
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
            )}
          </React.Fragment>
        );
      })}
      <InterviewDiv>
        <InterviewTitle>Overdue Interviews</InterviewTitle>
      </InterviewDiv>
      {myInterviews?.map((row, key) => {
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
    </React.Fragment>
  );
};

export default MyInterviews;
