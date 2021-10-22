import React, { useState, useEffect } from "react";
import "./stepper.css";
import EditUser from "../../components/editusers/index";
import Applicant from "../../components/applicant";
import ApplicantReview from "../../components/applicantsreview";
import ApplicantTable from "../../components/applicant_table";
import Interview from "../../components/interview";
import PhoneScreening from "../../components/phonescreening";
import Axios from "axios";
import { NEW_APPLICANTS } from "../../apis";

const firstComponent = () => {
  return <ApplicantTable />;
};
const secondComponent = () => {
  return <ApplicantReview />;
};
const thirdComponent = () => {
  return <PhoneScreening />;
};

const Stepper = ({ applicantCount, reviewCount, phoneCount }) => {
  const [steps, setSteps] = useState([
    {
      key: "1",
      count: `${applicantCount}`,
      label: "NEW APPLICANTS",
      isDone: true,
      component: firstComponent,
    },
    {
      key: "2",

      count: `${reviewCount}`,
      label: "REVIEWS",
      isDone: false,
      component: secondComponent,
    },
    {
      key: "3",

      count: `${phoneCount}`,
      label: "PHONE SCREEN",
      isDone: false,
      component: thirdComponent,
    },
  ]);
  const [activeStep, setActiveStep] = useState(steps[0]);

  useEffect(() => {
    // setApplicantCount(localStorage.getItem("applicant_count"));
  });
  const handleNext = (i) => {
    setActiveStep(steps[i]);
  };

  return (
    <React.Fragment>
      <div className="stepper-container">
        <div className="box">
          <div className="steps">
            <ul className="nav">
              {steps.map((step, i) => {
                return (
                  <li
                    onClick={() => handleNext(i)}
                    key={i}
                    className={`${
                      activeStep.key === step.key ? "active" : ""
                    } ${step.isDone ? "done" : ""}`}
                  >
                    <div>
                      {step.count}
                      <br />
                      <span>{step.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="table-data">{activeStep.component()}</div>
    </React.Fragment>
  );
};

export default Stepper;
