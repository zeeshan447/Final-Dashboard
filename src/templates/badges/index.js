import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Badge, BadgeNumber } from "./badges.style";
import {
  NEW_APPLICANTS,
  PHONESCREENED_APPLICANTS,
  REVIEWD_APPLICANTS,
} from "./apis";

const CustomBadges = () => {
  const [getApplicationCount, setApplicantCount] = useState();
  const [getReviewCount, setReviewCount] = useState();
  const [getPhonescreenCount, setPhonescreenCount] = useState();
  const [totalCount, setTotalCount] = useState();

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
    <Badge>
      <BadgeNumber>{totalCount}</BadgeNumber>
    </Badge>
  );
};

export default CustomBadges;
