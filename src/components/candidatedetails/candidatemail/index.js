import React, { useState, useEffect } from "react";
import {
  MailCandidateDiv,
  MailCandidateLabels,
  MailCandidateTitle,
  MailCandidateToInput,
  MailCandidateCCInput,
  MailCandidateBody,
  MailCandidateSendDiv,
  DiscardButton,
  ScheduleButton,
  MailSubjectInput,
} from "./candidatemail.style";
import { DeleteOutlined } from "@ant-design/icons";
import Axios from "axios";
import { SEND_MAIL } from "./apis";
import { notification } from "antd";

const CandidateMail = ({ mailData, mailModal }) => {
  const { TextArea } = MailCandidateBody;
  const [candidateEmail, setCandidateEmail] = useState(mailData.email);
  const [ccEmail, setCcEmail] = useState();
  const [mailSubject, setMailSubject] = useState();
  const [mailBody, setMailBody] = useState();

  useEffect(() => {
    console.log("MAILDATA", mailData);
  });

  const mailToHandler = (e) => {
    setCandidateEmail(e.target.value);
  };
  const mailCCHandler = (e) => {
    setCcEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setMailSubject(e.target.value);
  };

  const bodyHandler = (e) => {
    setMailBody(e.target.value);
  };

  const sendMail = async () => {
    await Axios.post(SEND_MAIL, {
      to: candidateEmail,
      subject: mailSubject,
      text: mailBody,
    }).then((res) => {
      console.log("MAIL RESONSE", res);
      mailModal(false);
      notification.open({
        message: "Email Sent",
        description: "Email has been sent successfully",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    });
  };
  return (
    <React.Fragment>
      <MailCandidateDiv>
        <MailCandidateTitle>Email</MailCandidateTitle>
        <MailCandidateLabels>To</MailCandidateLabels>
        <MailCandidateToInput
          placeholder="Enter Email Address"
          onChange={mailToHandler}
          defaultValue={mailData.email}
        ></MailCandidateToInput>
        <MailCandidateLabels>CC</MailCandidateLabels>
        <MailCandidateCCInput
          placeholder="Enter Email Address"
          onChange={mailCCHandler}
        ></MailCandidateCCInput>
        <MailCandidateLabels>Subject</MailCandidateLabels>
        <MailSubjectInput
          onChange={subjectHandler}
          placeholder="Enter Subject"
        ></MailSubjectInput>
        <MailCandidateLabels>Content</MailCandidateLabels>
        <TextArea onChange={bodyHandler} style={{ width: 963 }} rows={14} />
      </MailCandidateDiv>
      <MailCandidateSendDiv>
        <DiscardButton>
          <DeleteOutlined style={{ color: "white", fontSize: 16, margin: 5 }} />
          Discard
        </DiscardButton>

        <ScheduleButton onClick={sendMail}>Schedule</ScheduleButton>
      </MailCandidateSendDiv>
    </React.Fragment>
  );
};

export default CandidateMail;
