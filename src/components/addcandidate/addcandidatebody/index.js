import React, { useState, useEffect } from "react";
import Axios from "axios";
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
} from "./addcandidatebody.style";
import UploadResume from "../uploadresume";
import { HomeFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

import AddCandidateButton from "../../../images/AddCandidateButton.png";
import FileUpload from "../testfileupload";
const { Option } = AddCandidateJobSelect;

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}
function handleChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log("search:", val);
}
const AddCandidateBody = ({
  candidateName,
  candidateCompany,
  candidateResume,
  candidateEmail,
  candidatePhone,
  candidateJob,
  candidateJobId,
  candidateLocation,
}) => {
  const [getCandidateName, setCandidateName] = useState();
  const [getCandidateCompany, setCandidateCompany] = useState();
  const [getJobName, setJobName] = useState([]);
  const [getJobTitle, setJobTitle] = useState("No Job Selected");
  const [getPdfFile, setPdfFile] = useState(null);
  const [getCandidateEmail, setCandidateEmail] = useState();
  const [getCandidatePhone, setCandidatePhone] = useState();
  const [location, setLocation] = useState();
  const [resumeUrl, setResumeUrl] = useState();
  let responseData = [];
  useEffect(() => {
    getData();
  });
  useEffect(() => {
    //console.log("pdfamsnakjsdfile ", getPdfFile);
    candidateName(getCandidateName);
    candidateCompany(getCandidateCompany);
    candidateResume(resumeUrl);
    candidateEmail(getCandidateEmail);
    candidatePhone(getCandidatePhone);
    candidateJob(getJobTitle);
    candidateLocation(location);
    //console.log("Applied job", getJobName.job_title);
  });
  function handleChange(value, key) {
    console.log(`selected ${value}`);
    setJobTitle(value);
    candidateJobId(key.key);
  }

  const getData = async () => {
    await Axios.get("https://peoplexdevapi.packagex.xyz/job").then(
      (response) => {
        responseData = response?.data.candidateJob.map((row, key) => ({
          key: row.job_id,
          job_title: row.job_title,
        }));
      }
    );
    setJobName(responseData);
  };

  const nameChangeHandler = (e) => {
    setCandidateName(e.target.value);
  };
  const companyChangeHandler = (e) => {
    setCandidateCompany(e.target.value);
  };
  const emailHandler = (e) => {
    setCandidateEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setCandidatePhone(e.target.value);
  };
  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  return (
    <React.Fragment>
      <AddCandidateBodyDiv>
        <AddCandidateDetailsDiv>
          <AddCandidateNameInput
            onChange={nameChangeHandler}
            placeholder="Enter Name"
          ></AddCandidateNameInput>
          <AddCandidateCompanyInput
            onChange={companyChangeHandler}
            placeholder="Enter Organization Name"
          ></AddCandidateCompanyInput>
          <AddCandidateJobDiv>
            <AddCandidateJobTitleDiv>
              <AddCandidateJobTitle>{getJobTitle}</AddCandidateJobTitle>
              <AddCandidateJobSelect
                placeholder="Choose job"
                showSearch
                optionFilterProp="children"
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                ffilterOption={(input, option) =>
                  option.children?.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 || false
                }
              >
                {getJobName?.map((data, key) => {
                  return (
                    <Option value={data.job_title} key={data.key}>
                      {data.job_title}
                    </Option>
                  );
                })}
              </AddCandidateJobSelect>
            </AddCandidateJobTitleDiv>
            <AddcandidateReferredDiv>
              <AddCandidateRefferedSelect placeholder="Reffered"></AddCandidateRefferedSelect>
              <AddCandidateManualRefferral placeholder="Manualy Enter"></AddCandidateManualRefferral>
            </AddcandidateReferredDiv>
          </AddCandidateJobDiv>
          <FileUpload uploadPdf={setPdfFile} url={setResumeUrl} />
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
              <GeneralOpportunityTag>General Opportunity</GeneralOpportunityTag>
            </OpportunityCard>
          </OpportunityDiv>
          <AddLinksTitleDiv>
            <AddLinkTitle>Links</AddLinkTitle>
            <AddLinkButton
              src={AddCandidateButton}
              alt="addopportunity"
            ></AddLinkButton>
          </AddLinksTitleDiv>
          <AddLinkBodyDiv>No Links Added Yet</AddLinkBodyDiv>

          <AddLinksTitleDiv>
            <AddLinkTitle>Info</AddLinkTitle>
          </AddLinksTitleDiv>
          <InfoBody>
            <InfoInput
              placeholder="Add Location"
              onChange={locationChangeHandler}
              prefix={<HomeFilled />}
            />
            <InfoInput
              onChange={emailHandler}
              placeholder="Add Email"
              prefix={<MailFilled />}
            />
            <InfoInput
              onChange={phoneHandler}
              placeholder="Add Contact Info"
              prefix={<PhoneFilled />}
            />
          </InfoBody>
        </AddOpportunityDiv>
      </AddCandidateBodyDiv>
    </React.Fragment>
  );
};

export default AddCandidateBody;
