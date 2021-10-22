import React, { useState, useEffect } from "react";
import {
  FIRSTROUND_APPLICANTS,
  HIRED_APPLICANTS,
  OFFERED_APPLICANTS,
  PHONESCREENED_APPLICANTS,
  SECONDROUND_APPLICANTS,
} from "../../apis";
import Axios from "axios";
import InterviewStepper from "../../templates/stepper/interviewstepper";

const Interview = () => {
  const [getFirstroundCount, setFirstroundCount] = useState();
  const [getSecondroundCount, setSecondroundCount] = useState();
  const [getOfferedCount, setOfferedCount] = useState();
  const [getHiredCount, setHiredCount] = useState();
  const [getPhonescreenCount, setPhonescreenCount] = useState();

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const phonescreenResponse = await Axios.get(PHONESCREENED_APPLICANTS);
    setPhonescreenCount(phonescreenResponse.data.count);

    const firstRoundCount = await Axios.get(FIRSTROUND_APPLICANTS);
    setFirstroundCount(firstRoundCount.data.count);

    const secondRoundCount = await Axios.get(SECONDROUND_APPLICANTS);
    setSecondroundCount(secondRoundCount.data.count);

    const offeredCount = await Axios.get(OFFERED_APPLICANTS);
    setOfferedCount(offeredCount.data.count);
    const hiredCount = await Axios.get(HIRED_APPLICANTS);
    setHiredCount(hiredCount.data.count);
  };

  return (
    <React.Fragment>
      {getFirstroundCount &&
        getSecondroundCount &&
        getOfferedCount &&
        getHiredCount && (
          <InterviewStepper
            phoneScreen={getPhonescreenCount}
            firstRound={getFirstroundCount}
            secondRound={getSecondroundCount}
            offered={getOfferedCount}
            hired={getHiredCount}
          />
        )}
    </React.Fragment>
  );
};

export default Interview;
