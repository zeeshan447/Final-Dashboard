import React, { useEffect } from "react";
import {
  DateTimeDetails,
  InterviewDateTimeDiv,
  InterviewDetailsDiv,
  InterviewDiv,
  InterviewTitle,
} from "./myinterview.style";
import { useDispatch } from "react-redux";
import { Data } from "./dummydata";

const MyInterviews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "myinterviews" });
  });
  return (
    <React.Fragment>
      {Data.map((row, key) => {
        return (
          <InterviewDiv>
            <InterviewTitle>{row.interview_name}</InterviewTitle>
            <InterviewDetailsDiv>
              <InterviewDateTimeDiv>
                <DateTimeDetails>{row.interview_date}</DateTimeDetails>
                <DateTimeDetails>{row.interview_time}</DateTimeDetails>
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
  );
};

export default MyInterviews;
