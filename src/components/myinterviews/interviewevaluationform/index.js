import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  InterviewEvaluationFormDiv,
  InterviewEvaluationFormTitle,
  InterviewEvaluationName,
  InterviewEvaluationDetail,
  InterviewDetailsDiv,
  InterviewDetails,
  InterviewDetailLabel,
  InterviewDetailsInfo,
  InterviewQuestions,
  InterviewQuestionTitle,
  InterviewQuestionTitleDiv,
  InterviewQuestionDescription,
  FeedbackButtonDoubleDislike,
  FeedbackButtonsDiv,
  FeedbackButtonLike,
  FeedbackButtonDoubleLike,
  FeedbackButtonDislike,
  FeedbackReactions,
  SubmitButton,
  ResumeDiv,
  PreviewResumeDiv,
  InterviewEvaluationDiv,
  ResumePreview,
  ResumeAnchor,
} from "./interviewevaluationform.style";
import { useSelector } from "react-redux";

import Dislike from "../../../templates/svgicons/dislike";
import DoubleDislike from "../../../templates/svgicons/doubledislike";
import Like from "../../../templates/svgicons/like";
import DoubleLike from "../../../templates/svgicons/doublelike";
import { POSTFEEDBACK } from "./apis";
import { notification } from "antd";

const EvaluationForm = ({ interviewData, recall, modalVisibility }) => {
  const [firstQuestion, setFirstQuestion] = useState();
  const [secondQuestion, setSecondQuestion] = useState();
  const [thirdQuestion, setThirdQuestion] = useState();
  const [fourthQuestion, setFourthQuestion] = useState();
  const [iconColor, setIconColor] = useState("");
  const userDetailing = useSelector((state) => state.userDetails.userDetails);

  useEffect(() => {
    console.log("INTERVIEW DATA", interviewData);
  });

  const firstQuestionHandler = (id) => {
    console.log("BUTTON ID", id);
    setFirstQuestion(id);
    setIconColor("#38A6F5");
  };
  const secondQuestionHandler = (id) => {
    console.log("BUTTON ID", id);
    setSecondQuestion(id);
    setIconColor("#38A6F5");
  };
  const thirdQuestionHandler = (id) => {
    console.log("BUTTON ID", id);
    setThirdQuestion(id);
    setIconColor("#38A6F5");
  };
  const fourthQuestionHandler = (id) => {
    console.log("BUTTON ID", id);
    setFourthQuestion(id);
    setIconColor("#38A6F5");
  };

  const submitFeedbackHandler = async () => {
    debugger;
    await Axios.put(`${POSTFEEDBACK}/${interviewData.interviewer_status_id}`, {
      feedback_data: [
        {
          Q1: firstQuestion,
          Q2: secondQuestion,
          Q3: thirdQuestion,
          Q4: fourthQuestion,
        },
      ],

      status: "COMPLETE",
      user_id: userDetailing.user_id,
    }).then((res) => {
      console.log(res);
      recall(true);
      notification.open({
        message: "Feedback Completed",
        description: "Feedback has been completed",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      modalVisibility(false);
    });
  };

  return (
    <React.Fragment>
      <InterviewEvaluationDiv>
        <InterviewEvaluationFormDiv>
          <InterviewEvaluationFormTitle>
            Interview Evaluation Form
          </InterviewEvaluationFormTitle>
          <InterviewEvaluationName>
            {interviewData.candidate_name}
          </InterviewEvaluationName>
          <InterviewEvaluationDetail>
            {interviewData.prev_company}
          </InterviewEvaluationDetail>
          <InterviewDetailsDiv>
            <InterviewDetails>
              <InterviewDetailLabel>Interview for</InterviewDetailLabel>
              <InterviewDetailsInfo>
                {interviewData.job_title}
              </InterviewDetailsInfo>
            </InterviewDetails>
            <InterviewDetails>
              <InterviewDetailLabel>Date</InterviewDetailLabel>
              <InterviewDetailsInfo>
                {interviewData.schedule_date}
              </InterviewDetailsInfo>
            </InterviewDetails>
            <InterviewDetails>
              <InterviewDetailLabel>Time</InterviewDetailLabel>
              <InterviewDetailsInfo>
                {interviewData.scheduled_time.slice(0, 5)}
              </InterviewDetailsInfo>
            </InterviewDetails>
            <InterviewDetails>
              <InterviewDetailLabel>Duration</InterviewDetailLabel>
              <InterviewDetailsInfo>
                {interviewData.duration} min
              </InterviewDetailsInfo>
            </InterviewDetails>
          </InterviewDetailsDiv>
        </InterviewEvaluationFormDiv>

        <ResumeDiv>
          <PreviewResumeDiv>
            <ResumePreview>
              <ResumeAnchor href={interviewData.cv}>
                {interviewData.candidate_name} Cv.pdf
              </ResumeAnchor>
            </ResumePreview>
          </PreviewResumeDiv>
        </ResumeDiv>
      </InterviewEvaluationDiv>

      <InterviewQuestions>
        <InterviewQuestionTitleDiv>
          <InterviewQuestionTitle>
            Technical Qualifications
          </InterviewQuestionTitle>
          <InterviewQuestionDescription>
            Familiarity with necessary programming language
          </InterviewQuestionDescription>
        </InterviewQuestionTitleDiv>
        <FeedbackButtonsDiv>
          <FeedbackButtonDoubleDislike
            id="1"
            onClick={() => firstQuestionHandler(1)}
          >
            <DoubleDislike fill={iconColor} />
          </FeedbackButtonDoubleDislike>
          <FeedbackButtonDislike onClick={() => firstQuestionHandler(2)}>
            <Dislike fill={iconColor} />
          </FeedbackButtonDislike>
          <FeedbackButtonLike onClick={() => firstQuestionHandler(3)}>
            <Like fill={iconColor} />
          </FeedbackButtonLike>
          <FeedbackButtonDoubleLike onClick={() => firstQuestionHandler(4)}>
            <DoubleLike fill={iconColor} />
          </FeedbackButtonDoubleLike>
        </FeedbackButtonsDiv>
      </InterviewQuestions>
      <InterviewQuestions>
        <InterviewQuestionTitleDiv>
          <InterviewQuestionTitle>Verbal Communication </InterviewQuestionTitle>
        </InterviewQuestionTitleDiv>
        <FeedbackButtonsDiv>
          <FeedbackButtonDoubleDislike onClick={() => secondQuestionHandler(1)}>
            <DoubleDislike fill={iconColor} />
          </FeedbackButtonDoubleDislike>
          <FeedbackButtonDislike onClick={() => secondQuestionHandler(2)}>
            <Dislike />
          </FeedbackButtonDislike>
          <FeedbackButtonLike onClick={() => secondQuestionHandler(3)}>
            <Like fill={iconColor} />
          </FeedbackButtonLike>
          <FeedbackButtonDoubleLike onClick={() => secondQuestionHandler(4)}>
            <DoubleLike fill={iconColor} />
          </FeedbackButtonDoubleLike>
        </FeedbackButtonsDiv>
      </InterviewQuestions>
      <InterviewQuestions>
        <InterviewQuestionTitleDiv>
          <InterviewQuestionTitle>
            Candidate Enthusiasm and initiative
          </InterviewQuestionTitle>
          <InterviewQuestionDescription>
            Did the candidate demonstrate through his answers a high degree of
            initiative
          </InterviewQuestionDescription>
        </InterviewQuestionTitleDiv>
        <FeedbackButtonsDiv>
          <FeedbackButtonDoubleDislike onClick={() => thirdQuestionHandler(1)}>
            <DoubleDislike fill={iconColor} />
          </FeedbackButtonDoubleDislike>
          <FeedbackButtonDislike onClick={() => thirdQuestionHandler(2)}>
            <Dislike />
          </FeedbackButtonDislike>
          <FeedbackButtonLike onClick={() => thirdQuestionHandler(3)}>
            <Like fill={iconColor} />
          </FeedbackButtonLike>
          <FeedbackButtonDoubleLike onClick={() => thirdQuestionHandler(4)}>
            <DoubleLike fill={iconColor} />
          </FeedbackButtonDoubleLike>
        </FeedbackButtonsDiv>
      </InterviewQuestions>
      <InterviewQuestions>
        <InterviewQuestionTitleDiv>
          <InterviewQuestionTitle>
            Knowledge of the company
          </InterviewQuestionTitle>
        </InterviewQuestionTitleDiv>
        <FeedbackButtonsDiv>
          <FeedbackButtonDoubleDislike onClick={() => fourthQuestionHandler(1)}>
            <DoubleDislike fill={iconColor} />
          </FeedbackButtonDoubleDislike>
          <FeedbackButtonDislike onClick={() => fourthQuestionHandler(2)}>
            <Dislike />
          </FeedbackButtonDislike>
          <FeedbackButtonLike onClick={() => fourthQuestionHandler(3)}>
            <Like fill={iconColor} />
          </FeedbackButtonLike>
          <FeedbackButtonDoubleLike onClick={() => fourthQuestionHandler(4)}>
            <DoubleLike fill={iconColor} />
          </FeedbackButtonDoubleLike>
        </FeedbackButtonsDiv>
      </InterviewQuestions>
      <SubmitButton onClick={submitFeedbackHandler}>
        Submit Feedback!
      </SubmitButton>
    </React.Fragment>
  );
};

export default EvaluationForm;
