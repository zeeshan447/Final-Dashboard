import React from "react";
import {
  ApplicantJobCount,
  ApplicantJobFilterDiv,
  ApplicantJobFilterList,
  ApplicantJobName,
} from "./applicantsidebarfilter.style";
import { ApplicantJobFilters } from "../../../data/applicantsidebardata";

const ApplicantJobSidebarFilter = () => {
  return (
    <ApplicantJobFilterDiv>
      {ApplicantJobFilters.map((data, i) => {
        return (
          <ApplicantJobFilterList>
            <ApplicantJobName>{data.jobname}</ApplicantJobName>
            <ApplicantJobCount>{data.count}</ApplicantJobCount>
          </ApplicantJobFilterList>
        );
      })}
    </ApplicantJobFilterDiv>
  );
};

export default ApplicantJobSidebarFilter;
