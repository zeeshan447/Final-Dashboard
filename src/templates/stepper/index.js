import React, { useState, useEffect } from "react";
import "./stepper.css";
import ApplicantReview from "../../components/applicantsreview";
import ApplicantTable from "../../components/applicant_table";
import PhoneScreening from "../../components/phonescreening";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Stepper = ({ applicantCount, reviewCount, phoneCount, getCount }) => {
  let history = useHistory();

  const pageReload = useSelector((state) => state.addCandidates.reloadPage);

  useEffect(() => {
    console.log("STEPPER COUNT", applicantCount, reviewCount, phoneCount);
  }, [applicantCount, pageReload, phoneCount, reviewCount]);

  const steps = [
    {
      key: "1",
      count: `${applicantCount}`,
      label: "NEW APPLICANTS",
      isDone: true,
      Component: ApplicantTable,
    },
    {
      key: "2",

      count: `${reviewCount}`,
      label: "REVIEWS",
      isDone: false,
      Component: ApplicantReview,
    },
    {
      key: "3",

      count: `${phoneCount}`,
      label: "PHONE SCREEN",
      isDone: false,
      Component: PhoneScreening,
    },
  ];
  const [activeStep, setActiveStep] = useState(steps[0]);

  useEffect(() => {
    // setApplicantCount(localStorage.getItem("applicant_count"));
  });
  const handleNext = (i) => {
    debugger;
    if (i === 2) {
      history.push("/interview");
    } else {
      setActiveStep(steps[i]);
    }
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
      <div className="table-data">
        <activeStep.Component getCount={getCount} />
      </div>
    </React.Fragment>
  );
};

export default Stepper;
