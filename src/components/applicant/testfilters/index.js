import React, { useState, useEffect } from "react";
import {
  ApplicantJobSidebarDiv,
  ApplicantJobSidebarList,
  ApplicantJobSidebarListCount,
  ApplicantJobSidebarListItems,
  ApplicantJobFilterDiv,
  JobCount,
} from "./testfilters.style";
import { ApplicantJobFilters } from "../../../data/applicantsidebardata";
import Axios from "axios";
import { GET_ALLJOBS } from "./apis";

const TestingJobFilters = () => {
  const [jobFilters, setJobFilters] = useState();

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    await Axios.get(GET_ALLJOBS).then((res) => {
      setJobFilters(
        res.data.candidateJob.map((data, key) => ({
          totalcandidate: data.totalcandidate,
          job_id: data.job_id,
          job_title: data.job_title,
        }))
      );
    });
  };

  return (
    <React.Fragment>
      <ApplicantJobSidebarDiv>
        <ApplicantJobSidebarList>
          {jobFilters?.map((data, i) => {
            return (
              <ApplicantJobFilterDiv>
                <ApplicantJobSidebarListItems i={data.job_id}>
                  {data.job_title}
                </ApplicantJobSidebarListItems>

                <JobCount>{data.totalcandidate}</JobCount>
              </ApplicantJobFilterDiv>
            );
          })}
        </ApplicantJobSidebarList>
      </ApplicantJobSidebarDiv>
    </React.Fragment>
  );
};

export default TestingJobFilters;
