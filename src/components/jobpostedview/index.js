import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import { GETJOBBYID } from "./apis";

import {
  JobInfoDetailsDiv,
  JobTitle,
  JobTitleLocation,
  JobTitleLocationDiv,
  JobViewApplyNowButton,
  JobViewApplyNowButtonDiv,
  JobViewDescription,
  JobViewDetailsDiv,
  JobViewOwnerDiv,
  JobViewOwnerName,
  JobViewOwnerTitle,
  JobViewTitleDiv,
} from "./jobpostedview.style";

const JobPostedView = () => {
  const { state } = useLocation();
  const [jobDetail, setJobDetail] = useState();
  let jobID = [];
  useEffect(() => {
    getJobData();
  }, []);

  const getJobData = async () => {
    await Axios.get(
      `https://peoplexdevapi.packagex.xyz/job/postedjobs/${state.jobId}`
    )
      .then((res) => {
        console.log(res);
        setJobDetail(res.data.data);
      })
      .catch((err) => {
        alert("ERROR FROM SERVER");
      });
  };

  console.log("JOB DETAAIELS", jobDetail);
  jobID = jobDetail?.map((data, row) => {
    return data.job_id;
  });

  console.log("HELLLOO", jobID);

  return (
    <React.Fragment>
      {jobDetail?.map((row, key) => {
        return (
          <>
            <JobViewTitleDiv>
              <JobTitle>{row.job_title}</JobTitle>
              <JobTitleLocationDiv>
                <JobTitleLocation>
                  {row.job_loc}, {""}/ People - Talent acquisition / full time
                </JobTitleLocation>
              </JobTitleLocationDiv>
            </JobViewTitleDiv>
            <JobViewDetailsDiv>
              <JobInfoDetailsDiv>
                <JobViewOwnerDiv>
                  <JobViewOwnerTitle>Recruiter/owner</JobViewOwnerTitle>
                  <JobViewOwnerName>{row.job_createdby}</JobViewOwnerName>
                </JobViewOwnerDiv>
                <JobViewOwnerDiv>
                  <JobViewOwnerTitle>Hiring Manager</JobViewOwnerTitle>
                  <JobViewOwnerName>Waqas Mushtaq</JobViewOwnerName>
                </JobViewOwnerDiv>
              </JobInfoDetailsDiv>
              <JobViewDescription>
                {row.description}
                {/* VisionX works with world-leading brands, Fortune 1000 as their
                innovation partner, providing product strategy and custom
                application development leveraging agile methodologies,
                technology accelerators, and by creating Intellectual Property.
                <br />
                <br />
                VisionX has been listed in the Top 10 Most Innovative Companies
                of 2020 by Fast Company – ranked alongside the likes of
                Microsoft & Snap Inc.
                <br />
                <br />
                We develop cutting-edge software products integrating computer
                vision, 3D modeling, AR, VR, decision sciences, and IoT
                addressing a wide variety of use cases across different
                industries.
                <br />
                <br />
                <h3>Your role</h3>
                As Talent Lead you will be developing and implementing a
                rigorous sourcing strategy designed to identify & hire the best
                candidates across a variety of functions and creating a stable
                pipeline of high-quality talent. In addition, you will be
                responsible for managing the overall candidate experience from
                hiring to onboarding. You will partner with the hiring managers
                and advise them on talent frameworks and manage their recruiting
                needs in a proactive and efficient manner.
                <br />
                <br />
                <h3>Responsibilities</h3>
                <ul>
                  <li>
                    Coordinate with the hiring managers and stakeholders to
                    understand & plan the organization-wide staffing
                    requirements.
                  </li>
                  <li>
                    Develop a full-cycle recruitment process including job
                    assessments, requisitions, candidate screening criteria, and
                    selection.
                  </li>
                  <li>
                    Provide meaningful insights on the external market, talent
                    availability, sourcing strategies, and best talent practices
                    to improve the overall talent acquisition process and its
                    effectiveness and efficiency.{" "}
                  </li>
                  <li>Lead employer branding initiatives. </li>{" "}
                  <li>
                    Leverage social media, internet posting boards, and
                    networking to attract & source the best talent.
                  </li>
                  <li>
                    Establish and maintain a healthy candidate pipeline that
                    consistently produces a high volume talent successfully
                    passing the screening process and internal requirements.
                  </li>
                  <li>
                    Oversee people operations, employee engagement and
                    compensation & benefits team.
                  </li>
                  <li>
                    Partner with Functional Directors to understand current
                    talent and diversity gaps across business functions and
                    develop customized attraction and engagement strategies that
                    drive positive impact to the business.
                  </li>
                  <li>Manage the talent acquisition team.</li>
                </ul>
                <h3>What you need</h3>
                <ul>
                  <li>
                    Bachelor’s or Master's degree in Human Resources Management
                    or Business Administration with at least 4+ years of
                    experience & demonstrated expertise in technical
                    recruitment.
                  </li>
                  <li>
                    Deep understanding of talent acquisition, sourcing
                    strategies & performance-based hiring best practices.
                  </li>
                  <li>
                    Strong ability to network, build relationships with &
                    influence stakeholders.
                  </li>
                  <li>
                    Prior experience and proficiency in ATS utilization,
                    LinkedIn Recruiter and other CRM and social media channels
                    which enable both active talent mobility and proactive
                    sourcing of passive talent.
                  </li>
                  <li>
                    Ability to maintain relationships with candidates and
                    internal business partners.
                  </li>
                  <li>
                    Proficiency in MS Office (Word, Excel and PowerPoint).
                  </li>
                  <li>
                    Excellent interpersonal and communication (both written and
                    verbal) skills combined with strong presentation and
                    organizational abilities.
                  </li>
                  <li>
                    Ability to work under pressure and adhere to tight deadlines
                    while never sacrificing quality.
                  </li>
                  <li>
                    Ability to manage time, balance multiple tasks and
                    constantly work with changing priorities.
                  </li>
                </ul>
                <h3>Why choose us</h3>
                We are a global team of hustlers who challenge status-quo to
                build something great and meaningful for the customers we serve.
                We strongly believe that our product innovation, speed to
                service/support, and partnership mindset sets us apart from the
                fragmented competition and available legacy systems. Our
                leadership, advisors, and investors have extensive experience in
                building, supporting, and scaling tech companies in logistics,
                retail, CRM, media, and consulting. We have got all it takes to
                build an enterprise of the future.
                <br />
                <br />
                We are an equal opportunity employer, and we value diversity. We
                do not discriminate based on race, religion, color, national
                origin, gender, sexual orientation, age, marital status, veteran
                status, disability status, or any other legally protected
                status. */}
              </JobViewDescription>
              <JobViewApplyNowButtonDiv>
                {console.log("ID", jobDetail?.job_id)}
                <Link
                  to={{
                    pathname: `/applynow/${jobID}`,
                    state: { job: jobDetail },
                  }}
                >
                  <JobViewApplyNowButton>
                    Apply Now for this Job
                  </JobViewApplyNowButton>
                </Link>
              </JobViewApplyNowButtonDiv>
            </JobViewDetailsDiv>
          </>
        );
      })}
    </React.Fragment>
  );
};

export default JobPostedView;
