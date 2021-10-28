import styled from "styled-components";

export const InterviewEvaluationFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InterviewEvaluationDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const InterviewEvaluationFormTitle = styled.h1`
  font-family: Mulish;
  font-weight: 700;
  font-size: 25px;
  line-height: 24px;
  color: #000000;
`;

export const InterviewEvaluationName = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-top: 3%;
  color: #000000;
`;

export const InterviewEvaluationDetail = styled.h3`
  font-family: Mulish;
  font-weight: 400;
  font-size: 14.22px;
  line-height: 24px;
  color: #000000;
`;

export const InterviewDetailsDiv = styled.div`
  width: 623px;
  height: 180px;
  background: #ffffff;
  opacity: 0.9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const InterviewDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  justify-content: space-between;
  text-align: left;
`;

export const InterviewDetailLabel = styled.h3`
  font-family: Mulish;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-left: 2%;
`;

export const InterviewDetailsInfo = styled.h3`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-right: 50%;
`;

export const InterviewQuestions = styled.div`
  display: flex;
  flex-direction: row;
  width: 934px;
  height: 80px;
  background: #ffffff;
  border-radius: 8px;
  justify-content: space-between;
  margin-top: 2%;
  width: 100%;
`;

export const InterviewQuestionTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-top: 1%;
`;

export const InterviewQuestionTitle = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #55565a;
`;

export const InterviewQuestionDescription = styled.h3`
  font-family: Mulish;
  font-weight: 400;
  font-size: 12.64px;
  line-height: 24px;
  color: #55565a;
`;

export const FeedbackButtonsDiv = styled.div`
  display: flex;
  margin-top: 1%;
  margin-right: 3%;
`;
export const FeedbackButtonDoubleDislike = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 2%;
  padding-top: 7%;
`;
export const FeedbackButtonLike = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 2%;
  padding-top: 7%;
`;
export const FeedbackButtonDoubleLike = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 2%;
  padding-top: 7%;
`;
export const FeedbackButtonDislike = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 2%;
  padding-top: 7%;
  :hover {
    color: #38a6f5;
  }
`;

export const FeedbackReactions = styled.img`
  :hover {
    color: #38a6f5;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 2%;
  outline: none;
  border: none;
  background: #38a6f5;
  border-radius: 8px;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  height: 56px;
  color: white;
  cursor: pointer;
`;

export const ResumeDiv = styled.div`
  width: 30%;
  margin-top: 4.5%;
`;

export const PreviewResumeDiv = styled.div`
  width: 287px;
  height: 241px;
  background: #fefefe;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResumePreview = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  text-align: center;
`;
export const ResumeAnchor = styled.a`
  color: #000000;
  :hover {
    color: #38a6f5;
  }
`;
