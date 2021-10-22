import React, { useState, useEffect } from "react";
import { HomeFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import Axios from "axios";
import AddCandidateButton from "../../../images/AddCandidateButton.png";
import {
  AddCandidateCompanyInput,
  AddCandidateDetailsDiv,
  AddCandidateJobDiv,
  AddCandidateJobSelect,
  AddCandidateJobTitle,
  AddCandidateJobTitleDiv,
  AddCandidateNameInput,
  AddCandidateRefferedSelect,
  AddCandidateManualRefferral,
  AddcandidateReferredDiv,
  AddCandidateBodyDiv,
  AddOpportunityDiv,
  OpportunitiesTitleDiv,
  OpportunitiesTitle,
  OpportunitesAddButton,
  OpportunityDiv,
  OpportunityCardBlue,
  OpportunityCard,
  GeneralOpportunityTag,
  AddLinksTitleDiv,
  AddLinkTitle,
  AddLinkButton,
  AddLinkBodyDiv,
  InfoBody,
  InfoInput,
  CandidateName,
  CandidateCompany,
  AddCandidateSourced,
  CandidateCreated,
} from "./candidatedetailsbody.style";
import ResumePreview from "../resumepreview";
import { JOB_UPDATE } from "../apis";

const { Option } = AddCandidateJobSelect;

const CandidateDetailsBody = ({
  candidateDetails,
  apiCallback,
  secondApiCallback,
}) => {
  const [getCandidateName, setCandidateName] = useState();
  const [getCandidateCompany, setCandidateCompany] = useState();
  const [getJobName, setJobName] = useState([]);
  const [getJobTitle, setJobTitle] = useState();
  const [getPdfFile, setPdfFile] = useState(null);
  let candidatesArray = Object.values(candidateDetails);

  let responseData = [];
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log("pdfamsnakjsdfile ", getPdfFile);
    console.log("lkajdlksakjdlsad", candidatesArray);
  }, []);
  function handleChange(value, key, id) {
    console.log(`selected ${value}`);
    console.log("key", key);
    setJobTitle(value);
    updateJob(key, id);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  useEffect(() => {
    console.log("candidate details", candidateDetails);
  }, [getJobTitle]);

  const getData = async () => {
    await Axios.get("http://localhost:2500/job").then((response) => {
      responseData = response.data.candidateJob.map((row, key) => ({
        job_id: row.job_id,
        job_title: row.job_title,
      }));
    });
    setJobName(responseData);

    console.log("akjdjkasnhdkjasds", responseData);
  };

  const nameChangeHandler = (e) => {
    setCandidateName(e.target.value);
  };
  const companyChangeHandler = (e) => {
    setCandidateCompany(e.target.value);
  };

  const updateJob = async (id, jobid) => {
    await Axios.put(
      JOB_UPDATE,

      {
        candidate_job_maping_id: candidateDetails.candidate_job_maping_id,
        job_id: id.key,
      }
    ).then((res) => {
      console.log("JOB UPDATE RESPONSE", res);
    });
    apiCallback(!secondApiCallback);
  };

  return (
    <React.Fragment>
      <AddCandidateBodyDiv>
        <AddCandidateDetailsDiv>
          <CandidateName>{candidateDetails.candidate_name}</CandidateName>
          <CandidateCompany>{candidateDetails.prev_company}</CandidateCompany>
          <AddCandidateJobDiv>
            <AddCandidateJobTitleDiv>
              {getJobTitle ? (
                <AddCandidateJobTitle>{getJobTitle}</AddCandidateJobTitle>
              ) : (
                <AddCandidateJobTitle>
                  {candidateDetails.job_title}
                </AddCandidateJobTitle>
              )}
              <AddCandidateJobSelect
                placeholder="Edit"
                showSearch
                optionFilterProp="children"
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children?.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 || false
                }
              >
                {getJobName.map((data, key) => {
                  return (
                    <Option
                      value={data.job_title}
                      key={data.job_id}
                      id={data.job_id}
                    >
                      {data.job_title}
                    </Option>
                  );
                })}
              </AddCandidateJobSelect>
            </AddCandidateJobTitleDiv>
            <AddcandidateReferredDiv>
              <AddCandidateSourced>Sourced</AddCandidateSourced>
              <CandidateCreated>
                {candidateDetails.created_at.slice(11, 16)}
              </CandidateCreated>
            </AddcandidateReferredDiv>
          </AddCandidateJobDiv>
          <ResumePreview cv={candidateDetails}></ResumePreview>
        </AddCandidateDetailsDiv>
        <AddOpportunityDiv>
          <OpportunitiesTitleDiv>
            <OpportunitiesTitle>Opportunities</OpportunitiesTitle>
            <OpportunitesAddButton
              src={AddCandidateButton}
              alt="addopportunity"
            ></OpportunitesAddButton>
          </OpportunitiesTitleDiv>

          <OpportunityDiv>
            <OpportunityCardBlue></OpportunityCardBlue>
            <OpportunityCard>
              {getJobTitle ? (
                <GeneralOpportunityTag>{getJobTitle}</GeneralOpportunityTag>
              ) : (
                <GeneralOpportunityTag>
                  {candidateDetails.job_title}
                </GeneralOpportunityTag>
              )}
            </OpportunityCard>
          </OpportunityDiv>
          <AddLinksTitleDiv>
            <AddLinkTitle>Links</AddLinkTitle>
            <AddLinkButton
              src={AddCandidateButton}
              alt="addopportunity"
            ></AddLinkButton>
          </AddLinksTitleDiv>
          <AddLinkBodyDiv>No Links Added</AddLinkBodyDiv>

          <AddLinksTitleDiv>
            <AddLinkTitle>Info</AddLinkTitle>
          </AddLinksTitleDiv>
          <InfoBody>
            <InfoInput
              placeholder="Add Location"
              defaultValue={candidateDetails.address}
              prefix={<HomeFilled />}
            />
            <InfoInput
              placeholder="Add Email"
              defaultValue={candidateDetails.email}
              prefix={<MailFilled />}
            />
            <InfoInput
              placeholder="Add Contact Info"
              prefix={<PhoneFilled />}
              defaultValue={`+92 ${candidateDetails.phone}`}
            />
          </InfoBody>
        </AddOpportunityDiv>
      </AddCandidateBodyDiv>
    </React.Fragment>
  );
};

export default CandidateDetailsBody;
