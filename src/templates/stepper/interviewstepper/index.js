import React, { useState } from "react";
import FirstRound from "../../../components/FirstRound";
import Hired from "../../../components/hired";
import Offered from "../../../components/offered";
import PhoneScreening from "../../../components/phonescreening";
import SecondRound from "../../../components/secondround";
import "../stepper.css";

const InterviewStepper = ({
  phoneScreen,
  firstRound,
  secondRound,
  offered,
  hired,
  getCount,
}) => {
  const steps = [
    {
      key: "1",
      count: `${phoneScreen}`,
      label: "PHONE SCREEN",
      isDone: true,
      Component: PhoneScreening,
    },
    {
      key: "2",
      count: `${firstRound}`,
      label: "FIRST ROUND",
      isDone: false,
      Component: FirstRound,
    },
    {
      key: "3",
      count: `${secondRound}`,
      label: "SECOND ROUND",
      isDone: false,
      Component: SecondRound,
    },
    {
      key: "4",
      count: `${offered}`,
      label: "OFFERED",
      isDone: false,
      Component: Offered,
    },
    {
      key: "5",
      count: `${hired}`,
      label: "HIRED",
      isDone: false,
      Component: Hired,
    },
  ];
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = (i) => {
    // if (steps[steps.length - 1].key === activeStep.key) {
    //   alert("You have completed all steps.");
    //   return;
    // }

    // const index = steps.findIndex((x) => x.key === activeStep.key);
    // setSteps((prevStep) =>
    //   prevStep.map((x) => {
    //     if (x.key === activeStep.key) x.isDone = true;
    //     return x;
    //   })
    // );
    // setActiveStep(steps[index + 1]);
    setActiveStep(steps[i]);
  };

  //   const handleBack = () => {
  //     const index = steps.findIndex((x) => x.key === activeStep.key);
  //     if (index === 0) return;

  //     setSteps((prevStep) =>
  //       prevStep.map((x) => {
  //         if (x.key === activeStep.key) x.isDone = false;
  //         return x;
  //       })
  //     );
  //     setActiveStep(steps[index - 1]);
  //   };

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

export default InterviewStepper;
