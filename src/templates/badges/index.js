import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Badge, BadgeNumber } from "./badges.style";
import {
  NEW_APPLICANTS,
  PHONESCREENED_APPLICANTS,
  REVIEWD_APPLICANTS,
} from "./apis";

const CustomBadges = () => {
  const [getApplicationCount, setApplicantCount] = useState(0);
  const [getReviewCount, setReviewCount] = useState(0);
  const [getPhonescreenCount, setPhonescreenCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getCount();
  });

  const getCount = async () => {
    const applicantResponse = await Axios.get(NEW_APPLICANTS);
    console.log("response count", applicantResponse.data.count);
    setApplicantCount(applicantResponse?.data.count);

    const reviewResponse = await Axios.get(REVIEWD_APPLICANTS);
    setReviewCount(reviewResponse?.data.count);

    const phonescreenResponse = await Axios.get(PHONESCREENED_APPLICANTS);
    setPhonescreenCount(phonescreenResponse?.data.count);

    setTotalCount(getApplicationCount + getReviewCount + getPhonescreenCount);
  };
  return (
    <React.Fragment>
      {totalCount > 0 && (
        <Badge>{totalCount && <BadgeNumber>{totalCount}</BadgeNumber>}</Badge>
      )}
    </React.Fragment>
  );
};

export default CustomBadges;
