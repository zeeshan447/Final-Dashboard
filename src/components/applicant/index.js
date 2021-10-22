import React, { useEffect, useState } from "react";
import Stepper from "../../templates/stepper";
import ApplicantTable from "../applicant_table";
import { ApplicantDataDiv } from "./applicant.style";
import { useDispatch } from "react-redux";
import {
  NEW_APPLICANTS,
  PHONESCREENED_APPLICANTS,
  REVIEWD_APPLICANTS,
} from "../../apis";
import Axios from "axios";
import { Spin } from "antd";

const Applicant = () => {
  const [getApplicationCount, setApplicantCount] = useState();
  const [getReviewCount, setReviewCount] = useState();
  const [getPhonescreenCount, setPhonescreenCount] = useState();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "dashboard" });
    getCount();
  }, [getApplicationCount, getReviewCount, getPhonescreenCount, dispatch]);

  const getCount = async () => {
    setLoading(false);

    const applicantResponse = await Axios.get(NEW_APPLICANTS);
    console.log("response count", applicantResponse.data.count);
    setApplicantCount(applicantResponse.data.count);

    const reviewResponse = await Axios.get(REVIEWD_APPLICANTS);
    setReviewCount(reviewResponse.data.count);

    const phonescreenResponse = await Axios.get(PHONESCREENED_APPLICANTS);
    setPhonescreenCount(phonescreenResponse.data.count);
  };
  console.log("adssadasd", getReviewCount);

  return (
    <React.Fragment>
      {loading ? (
        <Spin size="large" />
      ) : (
        getApplicationCount &&
        getReviewCount &&
        getPhonescreenCount && (
          <Stepper
            applicantCount={getApplicationCount}
            reviewCount={getReviewCount}
            phoneCount={getPhonescreenCount}
          />
        )
      )}
      <ApplicantDataDiv>{/* <ApplicantTable /> */}</ApplicantDataDiv>
    </React.Fragment>
  );
};

export default Applicant;
